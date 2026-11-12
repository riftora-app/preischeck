/* Preis-Check v8 – ganz einfach: Foto → ChatGPT → Antwort einfügen → Titel, Beschreibung, letzter Verkauf, Preisempfehlung zum Kopieren.
   Eigene App (GitHub) und Bereich in NoxRift – dieselbe Datei. */
(function () {
  const css = `
.pc{--pb:#0b1020;--pp:#141b2f;--pp2:#1c2540;--pl:#2b3655;--pt:#eef2fb;--pm:#94a0bd;--pv:#7c6cf0;color:var(--pt);font:16px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;display:grid;gap:14px;max-width:560px;margin:0 auto;width:100%}
.pc *{box-sizing:border-box}
.pc .pc-titel{font-size:1.35rem;font-weight:800}
.pc .pc-c{background:var(--pp);border:1px solid var(--pl);border-radius:20px;padding:16px;display:grid;gap:12px}
.pc .pc-h{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.05rem}
.pc .pc-h .n{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:var(--pv);color:#fff;font-size:.9rem;flex:0 0 auto}
.pc .pc-h .n.ok{background:#22c55e}
.pc .pc-cam{display:grid;place-items:center;gap:4px;min-height:110px;border-radius:18px;border:2px dashed #4b5a85;background:var(--pp2);cursor:pointer;text-align:center;padding:14px;font-weight:800;font-size:1.1rem}
.pc .pc-cam input{display:none}
.pc .pc-cam .i{font-size:2.4rem;line-height:1}
.pc .pc-fotos{display:grid;grid-template-columns:repeat(auto-fill,minmax(64px,1fr));gap:8px}
.pc .pc-fotos div{position:relative;aspect-ratio:1;border-radius:12px;overflow:hidden;background:var(--pl)}
.pc .pc-fotos img{width:100%;height:100%;object-fit:cover;display:block}
.pc .pc-fotos button{position:absolute;top:3px;right:3px;width:24px;height:24px;border-radius:50%;border:none;background:rgba(0,0,0,.65);color:#fff;cursor:pointer}
.pc textarea{font:inherit;width:100%;min-height:70px;padding:12px 14px;border-radius:14px;border:1px solid var(--pl);background:var(--pb);color:var(--pt);resize:vertical}
.pc .pc-go{font:inherit;font-weight:800;border:none;border-radius:16px;padding:15px 16px;background:#10a37f;color:#fff;cursor:pointer;width:100%;font-size:1.08rem;text-align:center;text-decoration:none;display:block}
.pc .pc-go.lila{background:var(--pv)}
.pc .pc-go.grau{background:var(--pp2);border:1px solid var(--pl);color:var(--pt);font-size:.95rem;padding:12px}
.pc .pc-go:disabled{opacity:.45;cursor:not-allowed}
.pc .pc-feld{display:grid;gap:6px;padding:12px;border-radius:14px;background:var(--pp2);border:1px solid var(--pl)}
.pc .pc-feld .k{font-size:.78rem;font-weight:800;letter-spacing:.06em;color:var(--pm)}
.pc .pc-feld .v{white-space:pre-wrap;font-size:.98rem}
.pc .pc-feld .gross{font-size:1.6rem;font-weight:900;color:#86efac}
.pc .pc-feld a{color:#93c5fd;font-weight:700;text-decoration:none;font-size:.9rem}
.pc .pc-kopie{font:inherit;font-weight:800;border:none;border-radius:12px;padding:11px;background:#10a37f;color:#fff;cursor:pointer}
.pc .pc-m{color:var(--pm);font-size:.86rem}
.pc .pc-warn{border-radius:14px;padding:10px 12px;background:rgba(239,68,68,.15);border:1px solid rgba(239,68,68,.5);font-size:.9rem}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const e = (t, c, x) => { const n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; };
  const eur = v => (Math.round((+v || 0) * 100) / 100).toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});
  const lj = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || 'null') || d; } catch (x) { return d; } };
  const ls = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (x) {} };
  const heute = () => new Intl.DateTimeFormat('sv-SE', {timeZone: 'Europe/Berlin'}).format(new Date());
  const tageSeit = iso => Math.round((new Date(heute() + 'T12:00:00Z') - new Date(iso + 'T12:00:00Z')) / 864e5);
  const datK = iso => iso ? iso.slice(8, 10) + '.' + iso.slice(5, 7) + '.' + iso.slice(0, 4) : '';
  const FEE = {cardmarket: 5}; const MAX_TAGE = 30;

  let fotos = [], E = lj('pc-e8', null);
  const root = document.getElementById('pc-root'); if (!root) return; root.className = 'pc';

  const PROMPT = ['📦 PREIS-CHECK (Fotos anbei)', 'Erkenne den Artikel und seinen Zustand auf den Fotos.',
    'Suche echte VERKAUFTE Preise der letzten ' + MAX_TAGE + ' Tage (eBay verkaufte Artikel, Vinted, Kleinanzeigen, bei Karten Cardmarket) und nimm die Plattform, auf der wir nach Gebühren am meisten bekommen. Erfinde keine Preise, Daten oder Links.',
    'Antworte NUR mit diesem Block:', '=== APP ===', 'TITEL: <kurzer Verkaufstitel, max. 60 Zeichen, mit Zustand>',
    'BESCHREIBUNG: <2–3 kurze Sätze: was es ist, Zustand, ehrliche Mängel; erster Satz: „Weitere Artikel in meinem Profil – gern kombinieren!“>',
    'LETZTER VERKAUF: <Plattform> | <Preis> € | <TT.MM.JJJJ> | <Link>', '=== ENDE ==='].join('\n');

  function lesen(t) {
    t = String(t || ''); const a = t.indexOf('=== APP ==='); if (a >= 0) t = t.slice(a + 11); t = t.split('=== ENDE ===')[0];
    const o = {}; let cur = null;
    t.split(/\r?\n/).forEach(z => { const r = z.replace(/^[\s*_#>-]+/, '').replace(/\*\*/g, ''); const m = r.match(/^(TITEL|BESCHREIBUNG|LETZTER VERKAUF|VERKAUF)\s*:\s*(.*)$/i);
      if (m) { const k = /VERKAUF/i.test(m[1]) ? 'V' : m[1].toUpperCase(); if (k === 'V') { if (!o.V) o.V = m[2]; cur = null; } else { o[k] = m[2].trim(); cur = k; } }
      else if (cur === 'BESCHREIBUNG' && z.trim()) o.BESCHREIBUNG += '\n' + z.trim(); });
    if (!o.TITEL && !o.BESCHREIBUNG && !o.V) return null;
    const v = o.V || ''; const pr = (v.match(/(\d+(?:[.,]\d{1,2})?)\s*€|€\s*(\d+(?:[.,]\d{1,2})?)/) || []); const preis = +(pr[1] || pr[2] || '').replace(',', '.') || 0;
    let d = ''; const d1 = v.match(/(\d{1,2})\.(\d{1,2})\.(\d{2,4})/), d2 = v.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (d2) d = d2[0]; else if (d1) d = (d1[3].length === 2 ? '20' + d1[3] : d1[3]) + '-' + d1[2].padStart(2, '0') + '-' + d1[1].padStart(2, '0');
    const plat = (v.split('|')[0] || '').replace(/^.*?:\s*/, '').trim(); const link = (v.match(/https:\/\/\S+/) || [''])[0].replace(/[)\].,]+$/, '');
    return {titel: o.TITEL || '', beschreibung: (o.BESCHREIBUNG || '').trim(), plat, preis, d, link};
  }

  async function verkleinern(f) { try { const bm = await createImageBitmap(f); const s = Math.min(1, 1600 / Math.max(bm.width, bm.height)); const c = document.createElement('canvas'); c.width = Math.round(bm.width * s); c.height = Math.round(bm.height * s); c.getContext('2d').drawImage(bm, 0, 0, c.width, c.height);
    const blob = await new Promise(r => c.toBlob(b => r(b || f), 'image/jpeg', 0.88)); return {blob, url: URL.createObjectURL(blob)}; } catch (x) { return {blob: f, url: URL.createObjectURL(f)}; } }
  async function kopiere(t) { try { await navigator.clipboard.writeText(t); } catch (x) { const a = document.createElement('textarea'); a.value = t; document.body.append(a); a.select(); document.execCommand('copy'); a.remove(); } }
  const kopf = (n, t, ok) => { const h = e('div', 'pc-h'); h.append(e('span', 'n' + (ok ? ' ok' : ''), ok ? '✓' : String(n)), e('span', '', t)); return h; };

  function bau() {
    root.replaceChildren(e('div', 'pc-titel', '💶 Preis-Check'));
    /* 1 · Foto */
    const c1 = e('section', 'pc-c'); c1.append(kopf(1, 'Foto machen', fotos.length > 0));
    const cam = e('label', 'pc-cam'); const fi = e('input'); fi.type = 'file'; fi.accept = 'image/*'; fi.multiple = true;
    cam.append(fi, e('div', 'i', '📸'), e('div', '', fotos.length ? 'Noch ein Foto' : 'Foto machen'));
    fi.addEventListener('change', async ev => { for (const f of [...(ev.target.files || [])].slice(0, 6 - fotos.length)) fotos.push(await verkleinern(f)); bau(); });
    c1.append(cam);
    if (fotos.length) { const g = e('div', 'pc-fotos'); fotos.forEach((f, i) => { const d = e('div'); const im = e('img'); im.src = f.url; im.alt = 'Foto ' + (i + 1); const x = e('button', '', '✕'); x.type = 'button'; x.addEventListener('click', () => { fotos.splice(i, 1); bau(); }); d.append(im, x); g.append(d); }); c1.append(g); }
    const sb = e('button', 'pc-go', '📤 An ChatGPT schicken'); sb.type = 'button'; sb.disabled = !fotos.length; sb.addEventListener('click', teilen); c1.append(sb);
    c1.append(e('div', 'pc-m', 'Im Teilen-Menü „ChatGPT“ wählen. Der Text ist schon kopiert – falls er fehlt, einfach einfügen.'));
    root.append(c1);
    /* 2 · Antwort einfügen */
    const c2 = e('section', 'pc-c'); c2.append(kopf(2, 'ChatGPT-Antwort einfügen', !!E));
    const ib = e('button', 'pc-go lila', '📥 Antwort einfügen'); ib.type = 'button'; const ta = e('textarea'); ta.placeholder = 'oder hier lange tippen → Einfügen'; const msg = e('div');
    const go = t => { const j = lesen(t); if (!j) { msg.replaceChildren(e('div', 'pc-warn', 'Nichts erkannt. ChatGPT bitten: „Bitte nur den APP-Block“ – dann neu einfügen.')); return; } E = j; ls('pc-e8', E); bau(); const z = document.getElementById('pc-erg'); if (z && z.scrollIntoView) z.scrollIntoView({behavior: 'smooth', block: 'start'}); };
    ib.addEventListener('click', async () => { try { go(await navigator.clipboard.readText()); } catch (x) { ta.focus(); } });
    ta.addEventListener('paste', () => setTimeout(() => go(ta.value), 50));
    c2.append(ib, ta, msg); root.append(c2);
    /* 3 · Ergebnis zum Kopieren */
    if (E) root.append(ergebnis());
    const nb = e('button', 'pc-go grau', '🆕 Nächster Artikel'); nb.type = 'button'; nb.addEventListener('click', () => { fotos = []; E = null; ls('pc-e8', null); bau(); window.scrollTo && window.scrollTo({top: 0, behavior: 'smooth'}); }); root.append(nb);
    if (window.dash) { const a = e('a', 'pc-go grau', '📲 App fürs Handy'); a.href = 'https://riftora-app.github.io/preischeck/'; a.target = '_blank'; a.rel = 'noopener'; root.append(a); }
  }

  function feld(k, v, kopierbar, gross) {
    const f = e('div', 'pc-feld'); f.append(e('div', 'k', k), e('div', 'v' + (gross ? ' gross' : ''), v));
    if (kopierbar) { const b = e('button', 'pc-kopie', '📋 Kopieren'); b.type = 'button'; b.addEventListener('click', async () => { await kopiere(kopierbar); b.textContent = '✓ Kopiert'; setTimeout(() => { b.textContent = '📋 Kopieren'; }, 2000); }); f.append(b); }
    return f;
  }
  function ergebnis() {
    const c = e('section', 'pc-c'); c.id = 'pc-erg'; c.append(kopf(3, 'Fertig – nur noch kopieren', true));
    if (E.titel) c.append(feld('TITEL', E.titel, E.titel));
    if (E.beschreibung) c.append(feld('BESCHREIBUNG', E.beschreibung, E.beschreibung));
    if (E.preis) {
      const t = E.d ? tageSeit(E.d) : null; const f = feld('LETZTER VERKAUF', (E.plat || 'Plattform?') + ' · ' + eur(E.preis) + (E.d ? ' · ' + datK(E.d) : ' · Datum fehlt'));
      if (E.link && /^https:\/\//.test(E.link)) { const a = e('a', '', '↗ Verkauf ansehen'); a.href = E.link; a.target = '_blank'; a.rel = 'noopener'; f.append(a); }
      if (t != null && t > MAX_TAGE) f.append(e('div', 'pc-warn', '⚠️ Älter als ' + MAX_TAGE + ' Tage – ChatGPT nach einem neueren Verkauf fragen.'));
      c.append(f);
      const fee = FEE[String(E.plat).toLowerCase()] || 0; const start = Math.max(1, Math.ceil(E.preis * 1.05) - 0.01); const min = Math.round(E.preis * 0.9 * 10) / 10;
      const p = String(start.toFixed(2)).replace('.', ',');
      c.append(feld('PREISEMPFEHLUNG' + (E.plat ? ' · ' + E.plat : ''), eur(start), p, true));
      c.append(e('div', 'pc-m', 'Startpreis = letzter Verkauf + 5 % zum Verhandeln · nicht unter ' + eur(min) + ' verkaufen' + (fee ? ' · ' + fee + ' % Gebühr' : '') + '.'));
    } else c.append(e('div', 'pc-warn', 'Kein echter Verkaufspreis gefunden – nicht einstellen, ChatGPT nochmal fragen.'));
    return c;
  }

  async function teilen() {
    await kopiere(PROMPT); const files = fotos.map((f, i) => new File([f.blob], 'artikel-' + (i + 1) + '.jpg', {type: 'image/jpeg'}));
    try { if (navigator.canShare && navigator.canShare({files})) { await navigator.share({files, text: PROMPT}); return; } } catch (x) { if (x && x.name === 'AbortError') return; }
    window.open('https://chatgpt.com/', '_blank', 'noopener');
  }

  bau();
})();
