/* Preis-Check v6 – Fotos + Zustand rein, ChatGPT (oder Claude) liefert Titel, Beschreibung, Preis.
   Preis immer aus dem letzten ECHTEN Verkauf der Plattform mit dem meisten Gewinn (max. 30 Tage alt).
   Eigene App (GitHub) und Bereich in NoxRift – dieselbe Datei. */
(function () {
  const css = `
.pc{--pb:#0b1020;--pp:#141b2f;--pp2:#1c2540;--pl:#2b3655;--pt:#eef2fb;--pm:#94a0bd;--pv:#7c6cf0;color:var(--pt);font:16px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;display:grid;gap:14px;max-width:640px;margin:0 auto;width:100%}
.pc *{box-sizing:border-box}
.pc .m{color:var(--pm);font-size:.88rem}
.pc .pc-top{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}
.pc .pc-top b{font-size:1.35rem}
.pc .pc-modus{display:flex;background:var(--pp2);border-radius:999px;padding:4px;border:1px solid var(--pl)}
.pc .pc-modus button{font:inherit;font-size:.85rem;font-weight:700;border:none;border-radius:999px;padding:7px 12px;background:transparent;color:var(--pm);cursor:pointer}
.pc .pc-modus button[aria-pressed=true]{background:var(--pv);color:#fff}
.pc .pc-c{background:var(--pp);border:1px solid var(--pl);border-radius:20px;padding:16px;display:grid;gap:12px}
.pc .pc-h{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.05rem}
.pc .pc-h .n{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:var(--pv);color:#fff;font-size:.9rem;flex:0 0 auto}
.pc .pc-h .n.ok{background:#22c55e}
.pc .pc-chips{display:flex;flex-wrap:wrap;gap:6px}
.pc .pc-chips button{font:inherit;font-size:.9rem;font-weight:700;border:1px solid var(--pl);border-radius:999px;padding:8px 13px;background:var(--pp2);color:var(--pt);cursor:pointer}
.pc .pc-chips button[aria-pressed=true]{background:var(--pv);border-color:var(--pv);color:#fff}
.pc .pc-chips.klein button{font-size:.82rem;padding:6px 11px}
.pc .pc-cam{position:relative;display:grid;place-items:center;gap:4px;min-height:120px;border-radius:18px;border:2px dashed #4b5a85;background:radial-gradient(120% 120% at 50% 0%,rgba(124,108,240,.35),transparent 60%),var(--pp2);cursor:pointer;text-align:center;padding:14px}
.pc .pc-cam input{display:none}
.pc .pc-cam .i{font-size:2.4rem;line-height:1}
.pc .pc-cam .t{font-size:1.1rem;font-weight:800}
.pc .pc-fotos{display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px}
.pc .pc-fotos div{position:relative;aspect-ratio:1;border-radius:12px;overflow:hidden;background:var(--pl)}
.pc .pc-fotos img{width:100%;height:100%;object-fit:cover;display:block}
.pc .pc-fotos button{position:absolute;top:3px;right:3px;width:24px;height:24px;border-radius:50%;border:none;background:rgba(0,0,0,.65);color:#fff;font-size:.8rem;cursor:pointer}
.pc .pc-check{display:flex;flex-wrap:wrap;gap:6px}
.pc .pc-check span{font-size:.78rem;border-radius:999px;padding:3px 10px;border:1px solid var(--pl);color:var(--pm)}
.pc .pc-check span.ok{border-color:#22c55e;color:#bbf7d0;background:rgba(34,197,94,.12)}
.pc input,.pc textarea{font:inherit;width:100%;padding:12px 14px;border-radius:14px;border:1px solid var(--pl);background:var(--pb);color:var(--pt)}
.pc textarea{min-height:64px;resize:vertical}
.pc input[type=number]{font-weight:800}
.pc .pc-go{font:inherit;font-weight:800;border:none;border-radius:16px;padding:15px 16px;background:#10a37f;color:#fff;cursor:pointer;width:100%;font-size:1.08rem;text-align:center;text-decoration:none;display:block}
.pc .pc-go small{display:block;font-weight:400;font-size:.76rem;opacity:.9}
.pc .pc-go.lila{background:var(--pv)}
.pc .pc-go.grau{background:var(--pp2);border:1px solid var(--pl);color:var(--pt);font-size:.92rem;padding:11px}
.pc .pc-go:disabled{opacity:.45;cursor:not-allowed}
.pc .pc-2{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.pc .pc-lade{display:flex;align-items:center;gap:10px}
.pc .pc-spin{width:22px;height:22px;border-radius:50%;border:3px solid var(--pl);border-top-color:var(--pv);animation:pcd .9s linear infinite}
@keyframes pcd{to{transform:rotate(360deg)}}
.pc .pc-tab{display:grid;gap:8px}
.pc .pc-row{display:grid;grid-template-columns:6.2rem 1fr;gap:6px 8px;align-items:center;padding:10px;border-radius:14px;background:var(--pp2);border:1px solid var(--pl)}
.pc .pc-row b{font-size:.95rem}
.pc .pc-row a{justify-self:end;color:#93c5fd;font-size:.8rem;font-weight:700;text-decoration:none}
.pc .pc-row input{padding:9px 10px;border-radius:10px;font-size:.95rem}
.pc .pc-row .net{grid-column:1/-1;font-variant-numeric:tabular-nums;font-size:.84rem}
.pc .pc-row.win{border-color:#22c55e;background:rgba(34,197,94,.12)}
.pc .pc-amp{border-radius:18px;padding:14px 16px;border:2px solid var(--ac);background:color-mix(in srgb,var(--ac) 16%,var(--pp));display:grid;gap:4px}
.pc .pc-amp .k{font-size:1.35rem;font-weight:900}
.pc .pc-hint{font-size:.85rem;color:var(--pm)}
.pc .pc-lbl{font-size:.82rem;font-weight:700;color:var(--pm);margin-bottom:-6px}
.pc .pc-ok{border-radius:14px;padding:10px 12px;background:rgba(34,197,94,.15);border:1px solid rgba(34,197,94,.5);font-size:.9rem}
.pc .pc-warn{border-radius:14px;padding:10px 12px;background:rgba(239,68,68,.15);border:1px solid rgba(239,68,68,.5);font-size:.88rem}
.pc pre{white-space:pre-wrap;font:13px/1.45 ui-monospace,Menlo,monospace;background:var(--pb);border:1px solid var(--pl);border-radius:12px;padding:10px;margin:0;max-height:220px;overflow:auto}
.pc details summary{cursor:pointer;font-weight:700;color:var(--pm)}
.pc .pc-hist{display:grid;gap:6px}
.pc .pc-hist button{all:unset;cursor:pointer;display:grid;grid-template-columns:44px 1fr auto;gap:10px;align-items:center;padding:8px;border-radius:12px;background:var(--pp2)}
.pc .pc-hist img,.pc .pc-hist .ph{width:44px;height:44px;border-radius:10px;object-fit:cover;background:var(--pl);display:grid;place-items:center}
.pc .pc-hist .t{font-weight:700;font-size:.9rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pc .pc-hist b{font-variant-numeric:tabular-nums}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const e = (t, c, x) => { const n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; };
  const eur = v => (Math.round((+v || 0) * 100) / 100).toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});
  const zahl = v => +String(v || '').replace(',', '.') || 0;
  const lj = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || 'null') || d; } catch (x) { return d; } };
  const ls = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (x) {} };
  const heute = () => new Intl.DateTimeFormat('sv-SE', {timeZone: 'Europe/Berlin'}).format(new Date());
  const tageSeit = iso => Math.round((new Date(heute() + 'T12:00:00Z') - new Date(iso + 'T12:00:00Z')) / 864e5);
  const datK = iso => iso ? iso.slice(8, 10) + '.' + iso.slice(5, 7) + '.' : '';

  /* Arten wie in der ChatGPT-Anleitung (Foto-Check, Zustand, Fachbegriffe) */
  const VZ = ['Neu mit Etikett', 'Neu ohne Etikett', 'Sehr gut', 'Gut', 'Zufriedenstellend'];
  const ARTEN = {
    spiel: {l: '🎮 Spiel', fotos: ['vorne', 'hinten', 'Disc/Modul', 'Anleitung'], zust: VZ, extra: ['Hülle/OVP dabei', 'Anleitung dabei', 'getestet, läuft', 'Spielstand gelöscht', 'PAL/deutsch'], plat: ['ebay', 'vinted', 'kleinanzeigen'], cat: 'spiele'},
    kleidung: {l: '👕 Kleidung', fotos: ['vorne', 'hinten', 'Etikett/Größe', 'Mängel'], zust: VZ, extra: ['Etikett noch dran', 'Original', 'Fan-Replika (kein Original)', 'Größe laut Etikett'], plat: ['vinted', 'ebay', 'kleinanzeigen'], cat: 'kleidung'},
    karte: {l: '🃏 Karte', fotos: ['Vorderseite', 'Rückseite', 'Ecken nah'], zust: ['NM', 'EX', 'GD', 'LP', 'PL', 'PO'], extra: ['Holo', '1st Edition', 'deutsch', 'englisch', 'gegradet (PSA/CGC)'], plat: ['cardmarket', 'ebay', 'vinted'], cat: 'karten'},
    figur: {l: '🧸 Figur', fotos: ['Box vorne', 'Box hinten', 'Box Seiten', 'Figur'], zust: VZ, extra: ['OVP', 'Box beschädigt', 'vollständig'], plat: ['ebay', 'vinted', 'kleinanzeigen'], cat: 'sammeln'},
    sonst: {l: '📦 Sonstiges', fotos: ['gesamt', 'Details', 'Mängel'], zust: VZ, extra: ['funktioniert (getestet)', 'Zubehör komplett', 'OVP'], plat: ['ebay', 'vinted', 'kleinanzeigen'], cat: 'sonst'}
  };
  /* Plattformen: Gebühr für Privatverkäufer in % (Stand 11/2026: eBay.de privat 0 %, Cardmarket 5 %) und Link zu den Verkaufspreisen */
  const P = {
    ebay: {l: 'eBay', fee: 0, url: 'https://www.ebay.de/sch/i.html?_nkw={q}&LH_Sold=1&LH_Complete=1&_sop=13', hint: 'verkaufte, neueste zuerst'},
    vinted: {l: 'Vinted', fee: 0, url: 'https://www.vinted.de/catalog?search_text={q}&order=newest_first', hint: 'aktuelle Angebote'},
    kleinanzeigen: {l: 'Kleinanzeigen', fee: 0, url: 'https://www.kleinanzeigen.de/s-{k}/k0', hint: 'aktuelle Angebote'},
    cardmarket: {l: 'Cardmarket', fee: 5, url: 'https://www.cardmarket.com/de/Pokemon/Products/Search?searchString={q}', hint: 'Trend + letzte Verkäufe'},
    pricecharting: {l: 'PriceCharting', fee: 0, url: 'https://www.pricecharting.com/search-products?type=prices&q={q}', hint: 'Verkaufsverlauf'}
  };
  const link = (id, q) => P[id].url.replace('{q}', encodeURIComponent(q || '')).replace('{k}', encodeURIComponent(String(q || '').toLowerCase().trim().replace(/\s+/g, '-')));
  const MAX_TAGE = 30;

  const neuS = () => ({art: '', zustand: '', extra: [], maengel: '', name: '', fotos: [], kostet: '', preise: {}, antwort: ''});
  let S = Object.assign(neuS(), lj('pc-s6', {}), {fotos: []});
  let modus = lj('pc-modus', 'verkaufen'), sample = null, laeuft = false;
  const speichern = () => { const {fotos, ...rest} = S; ls('pc-s6', rest); };
  const root = document.getElementById('pc-root'); if (!root) return; root.className = 'pc';

  async function verkleinern(f) { try { const bm = await createImageBitmap(f); const s = Math.min(1, 1600 / Math.max(bm.width, bm.height)); const c = document.createElement('canvas'); c.width = Math.round(bm.width * s); c.height = Math.round(bm.height * s); c.getContext('2d').drawImage(bm, 0, 0, c.width, c.height);
    const t = document.createElement('canvas'); const ts = 88 / Math.max(c.width, c.height); t.width = Math.round(c.width * ts); t.height = Math.round(c.height * ts); t.getContext('2d').drawImage(c, 0, 0, t.width, t.height);
    const blob = await new Promise(r => c.toBlob(b => r(b || f), 'image/jpeg', 0.88)); return {blob, url: URL.createObjectURL(blob), klein: t.toDataURL('image/jpeg', 0.6)}; } catch (x) { return {blob: f, url: URL.createObjectURL(f), klein: ''}; } }

  const kopf = (nr, t, ok) => { const h = e('div', 'pc-h'); h.append(e('span', 'n' + (ok ? ' ok' : ''), ok ? '✓' : String(nr)), e('span', '', t)); return h; };
  function chips(liste, aktiv, klick, klein) { const w = e('div', 'pc-chips' + (klein ? ' klein' : '')); liste.forEach(([k, l]) => { const b = e('button', '', l); b.type = 'button'; b.setAttribute('aria-pressed', String(Array.isArray(aktiv) ? aktiv.includes(k) : aktiv === k)); b.addEventListener('click', () => klick(k)); w.append(b); }); return w; }

  function nummer(vergeben) { const N = lj('pc-nr', {k: '', n: 0}); if (!N.k) return ''; const n = vergeben ? N.n + 1 : N.n + 1; if (vergeben) { N.n = n; ls('pc-nr', N); } return N.k + '-' + String(n).padStart(3, '0'); }

  function text() {
    const A = ARTEN[S.art] || ARTEN.sonst; const nr = nummer(false);
    const z = [(modus === 'kaufen' ? '🛒 FLOHMARKT-CHECK' : '📦 PREIS-CHECK') + (nr && modus !== 'kaufen' ? ' – Art.-Nr. ' + nr : ''),
      'Artikel: ' + (S.name.trim() || 'bitte aus den Fotos erkennen'), 'Art: ' + A.l.replace(/^\S+\s/, ''), 'Zustand: ' + (S.zustand || 'bitte aus den Fotos beurteilen')];
    if (S.extra.length) z.push('Dabei/geprüft: ' + S.extra.join(', '));
    z.push('Mängel: ' + (S.maengel.trim() || 'keine bekannt – bitte auf den Fotos prüfen'));
    z.push('Fotos: ' + S.fotos.length + (S.fotos.length ? ' (' + A.fotos.slice(0, S.fotos.length).join(', ') + ')' : ''));
    if (modus === 'kaufen') z.push('Kostet hier: ' + (S.kostet ? eur(zahl(S.kostet)) : '?') + ' – lohnt sich der Kauf zum Weiterverkaufen?');
    z.push('', 'Bitte nach den NOXRIFT-Regeln: echte VERKAUFTE Preise der letzten ' + MAX_TAGE + ' Tage suchen (' + A.plat.map(p => P[p].l).join(', ') + '), je Plattform den letzten Verkauf mit Preis, Datum und Link. Nimm die Plattform, die nach Gebühren am meisten bringt (eBay privat 0 %, Vinted 0 %, Kleinanzeigen 0 %, Cardmarket 5 %). Ältere Verkäufe nur mit Hinweis, Preistrend nennen (steigt/fällt). Zustand in Titel, Beschreibung und Preis berücksichtigen.' + (modus === 'kaufen' ? ' Antwort: Kaufen / Handeln (mit Gegenangebot) / Liegen lassen, Gewinn in €.' : ' Danach Titel, Beschreibung, Startpreis und Mindestpreis im gewohnten Format.'));
    return z.join('\n');
  }

  function bau() {
    root.replaceChildren(); const A = ARTEN[S.art];
    const top = e('div', 'pc-top'); top.append(e('b', '', '💶 Preis-Check'));
    const mo = e('div', 'pc-modus'); [['verkaufen', '🏷️ Verkaufen'], ['kaufen', '🛒 Flohmarkt']].forEach(([k, l]) => { const b = e('button', '', l); b.type = 'button'; b.setAttribute('aria-pressed', String(modus === k)); b.addEventListener('click', () => { modus = k; ls('pc-modus', k); bau(); }); mo.append(b); }); top.append(mo); root.append(top);

    /* 1 · Was ist es? */
    const c1 = e('section', 'pc-c'); c1.append(kopf(1, 'Was ist es?', !!S.art));
    c1.append(chips(Object.entries(ARTEN).map(([k, v]) => [k, v.l]), S.art, k => { if (S.art !== k) { S.zustand = ''; S.extra = []; } S.art = k; speichern(); bau(); }));
    const ni = e('input'); ni.placeholder = 'Name, falls bekannt (z. B. Pokémon Weiß DS) – sonst leer lassen'; ni.value = S.name; ni.autocomplete = 'off'; ni.addEventListener('input', () => { S.name = ni.value; speichern(); }); c1.append(ni); root.append(c1);

    /* 2 · Fotos */
    const c2 = e('section', 'pc-c'); c2.append(kopf(2, 'Fotos machen', S.fotos.length >= 2));
    const cam = e('label', 'pc-cam'); const fi = e('input'); fi.type = 'file'; fi.accept = 'image/*'; fi.multiple = true;
    cam.append(fi, e('div', 'i', '📸'), e('div', 't', S.fotos.length ? 'Weiteres Foto' : 'Fotos machen oder auswählen'), e('div', 'm', 'Mehrere Fotos, damit der Zustand sichtbar ist – Mängel extra fotografieren.'));
    fi.addEventListener('change', async ev => { const fs = [...(ev.target.files || [])].slice(0, 8 - S.fotos.length); for (const f of fs) S.fotos.push(await verkleinern(f)); bau(); });
    c2.append(cam);
    if (S.fotos.length) { const g = e('div', 'pc-fotos'); S.fotos.forEach((f, i) => { const d = e('div'); const im = e('img'); im.src = f.url; im.alt = 'Foto ' + (i + 1); const x = e('button', '', '✕'); x.type = 'button'; x.title = 'Foto entfernen'; x.addEventListener('click', () => { S.fotos.splice(i, 1); bau(); }); d.append(im, x); g.append(d); }); c2.append(g); }
    const fc = (A || ARTEN.sonst).fotos; const ck = e('div', 'pc-check'); fc.forEach((t, i) => ck.append(e('span', i < S.fotos.length ? 'ok' : '', (i < S.fotos.length ? '✓ ' : '○ ') + t))); c2.append(e('div', 'm', 'Foto-Check:'), ck); root.append(c2);

    /* 3 · Zustand */
    const c3 = e('section', 'pc-c'); c3.append(kopf(3, 'Zustand', !!S.zustand));
    c3.append(chips((A || ARTEN.sonst).zust.map(z => [z, z]), S.zustand, k => { S.zustand = S.zustand === k ? '' : k; speichern(); bau(); }));
    c3.append(e('div', 'm', 'Dabei / geprüft (antippen):'), chips((A || ARTEN.sonst).extra.map(z => [z, z]), S.extra, k => { S.extra = S.extra.includes(k) ? S.extra.filter(x => x !== k) : S.extra.concat(k); speichern(); bau(); }, true));
    const mi = e('textarea'); mi.placeholder = 'Mängel ehrlich notieren, z. B. „Hülle Ecke gerissen, Disc leichte Kratzer“'; mi.value = S.maengel; mi.addEventListener('input', () => { S.maengel = mi.value; speichern(); }); c3.append(mi);
    if (modus === 'kaufen') { const k = e('input'); k.type = 'number'; k.inputMode = 'decimal'; k.placeholder = '🏷️ Kostet hier (€)'; k.value = S.kostet; k.addEventListener('input', () => { S.kostet = k.value; speichern(); }); c3.append(k); }
    root.append(c3);

    /* 4 · Senden */
    const c4 = e('section', 'pc-c'); c4.id = 'pc-senden'; c4.append(kopf(4, sample ? 'Prüfen lassen' : 'An ChatGPT schicken'));
    const fehlt = []; if (!S.art) fehlt.push('Art'); if (!S.fotos.length) fehlt.push('mind. 1 Foto'); if (!S.zustand) fehlt.push('Zustand');
    if (fehlt.length) c4.append(e('div', 'pc-hint', 'Noch offen: ' + fehlt.join(' · ')));
    if (sample) { const b = e('button', 'pc-go lila'); b.type = 'button'; b.append('🤖 Claude prüft jetzt', e('small', '', 'Erkennt den Artikel, sucht den letzten Verkauf, schreibt Titel + Beschreibung')); b.disabled = !!fehlt.length || laeuft; b.addEventListener('click', claudeCheck); c4.append(b); }
    const sb = e('button', 'pc-go'); sb.type = 'button'; sb.append('📤 Fotos + Text an ChatGPT', e('small', '', 'Text wird kopiert · im Teilen-Menü „ChatGPT“ wählen · im Chat einfügen, falls er fehlt')); sb.disabled = !!fehlt.length; sb.addEventListener('click', teilen); c4.append(sb);
    const proj = lj('pc-gpt', ''); const pr = e('div', 'pc-2');
    const kb = e('button', 'pc-go grau', '📋 Nur Text kopieren'); kb.type = 'button'; kb.addEventListener('click', async () => { await kopieren(); kb.textContent = '✓ Kopiert'; setTimeout(() => { kb.textContent = '📋 Nur Text kopieren'; }, 2000); });
    const pb = e('a', 'pc-go grau', proj ? '💬 Unser ChatGPT-Projekt' : '💬 ChatGPT öffnen'); pb.href = proj || 'https://chatgpt.com/'; pb.target = '_blank'; pb.rel = 'noopener'; pr.append(kb, pb); c4.append(pr);
    const dt = e('details'); dt.append(e('summary', '', 'Text ansehen · Einstellungen')); dt.append(e('pre', '', text()));
    const N = lj('pc-nr', {k: '', n: 0}); dt.append(e('div', 'pc-lbl', 'Dein Kürzel und letzte Art.-Nr.'));
    const nz = e('div', 'pc-2'); const kk = e('input'); kk.placeholder = 'Kürzel, z. B. A'; kk.maxLength = 2; kk.value = N.k; const nn = e('input'); nn.type = 'number'; nn.placeholder = 'zuletzt Nr.'; nn.value = N.n || '';
    const nsv = () => { ls('pc-nr', {k: kk.value.trim().toUpperCase(), n: Math.max(0, Math.floor(zahl(nn.value)))}); }; kk.addEventListener('input', nsv); nn.addEventListener('input', nsv); nz.append(kk, nn); dt.append(nz);
    dt.append(e('div', 'pc-lbl', 'Link zu eurem ChatGPT-Projekt „NOXRIFT Verkauf“ (einmal einfügen)'));
    const pl = e('input'); pl.placeholder = 'https://chatgpt.com/g/…'; pl.value = proj; pl.addEventListener('change', () => { const v = pl.value.trim(); ls('pc-gpt', /^https:\/\/chatgpt\.com\//.test(v) ? v : ''); bau(); }); dt.append(pl);
    c4.append(dt); root.append(c4);

    /* 5 · Preis festlegen */
    root.append(preisKarte());
    const ab = e('div', 'pc-2'); const nb = e('button', 'pc-go grau', '🆕 Nächster Artikel'); nb.type = 'button'; nb.addEventListener('click', () => { merken(); S = neuS(); speichern(); bau(); window.scrollTo && window.scrollTo({top: 0, behavior: 'smooth'}); });
    ab.append(nb); if (window.dash) { const a = e('a', 'pc-go grau', '📲 App fürs Handy'); a.href = 'https://riftora-app.github.io/preischeck/'; a.target = '_blank'; a.rel = 'noopener'; ab.append(a); } root.append(ab);
    historie();
    root.append(e('div', 'm', '🛡️ Alle Knöpfe führen nur zu offiziellen Seiten. Fotos bleiben auf deinem Handy, bis du sie selbst teilst.'));
  }

  async function kopieren() { const t = text(); try { await navigator.clipboard.writeText(t); return true; } catch (x) { try { const a = document.createElement('textarea'); a.value = t; document.body.append(a); a.select(); document.execCommand('copy'); a.remove(); return true; } catch (y) { return false; } } }
  async function teilen() {
    await kopieren(); const t = text(); const nr = nummer(true); const files = S.fotos.map((f, i) => new File([f.blob], (nr || 'artikel') + '-' + (i + 1) + '.jpg', {type: 'image/jpeg'}));
    try { if (navigator.canShare && navigator.canShare({files})) { await navigator.share({files, text: t}); return; } } catch (x) { if (x && x.name === 'AbortError') return; }
    window.open(lj('pc-gpt', '') || 'https://chatgpt.com/', '_blank', 'noopener'); const c4 = document.getElementById('pc-senden'); if (c4) c4.append(e('div', 'pc-ok', '✓ Text ist kopiert. In ChatGPT: Fotos anhängen (📎) und den Text einfügen.'));
  }

  function preisKarte() {
    const A = ARTEN[S.art] || ARTEN.sonst; const q = S.name.trim() || ''; const c = e('section', 'pc-c'); c.id = 'pc-preis';
    c.append(kopf(5, 'Preis festlegen – letzter echter Verkauf'));
    c.append(e('div', 'pc-hint', 'Aus der Antwort (oder über die Links) je Plattform den letzten Verkaufspreis und das Datum eintragen. Gewinnt die Plattform, die nach Gebühren am meisten bringt – nur Verkäufe der letzten ' + MAX_TAGE + ' Tage.'));
    const tb = e('div', 'pc-tab'); const rows = {}; const plats = A.plat.concat(S.art === 'spiel' ? ['pricecharting'] : []);
    plats.forEach(p => { const R = S.preise[p] || {}; const tr = e('div', 'pc-row'); const nm = e('b', '', P[p].l);
      const lk = q ? Object.assign(e('a', '', '↗ ' + P[p].hint), {href: link(p, q), target: '_blank', rel: 'noopener'}) : e('span');
      const pi = e('input'); pi.type = 'number'; pi.inputMode = 'decimal'; pi.placeholder = 'Preis €'; pi.value = R.p || '';
      const di = e('input'); di.type = 'date'; di.max = heute(); di.value = R.d || ''; di.title = 'verkauft am';
      const net = e('div', 'net'); tr.append(nm, lk, pi, di, net); tb.append(tr);
      const upd = () => { S.preise[p] = {p: pi.value, d: di.value}; speichern(); rechne(); }; pi.addEventListener('input', upd); di.addEventListener('change', upd); rows[p] = {tr, net}; });
    c.append(tb); if (!q) c.append(e('div', 'm', 'Tipp: oben bei 1 den Namen eintragen – dann erscheinen hier Direkt-Links zu den Verkaufspreisen.'));
    const out = e('div'); c.append(out);
    function rechne() {
      out.replaceChildren(); let best = null; const alt = [];
      plats.forEach(p => { const R = S.preise[p] || {}; const pr = zahl(R.p); const r = rows[p]; r.tr.classList.remove('win'); r.net.textContent = '';
        if (!pr) return; const net = pr * (1 - P[p].fee / 100); const t = R.d ? tageSeit(R.d) : null;
        r.net.textContent = 'netto ' + eur(net) + (t != null ? ' · verkauft ' + (t <= 0 ? 'heute' : 'vor ' + t + ' Tagen') : ' · Datum fehlt'); r.net.style.color = t == null ? '' : t <= 14 ? '#86efac' : t <= MAX_TAGE ? '#fde68a' : '#fca5a5';
        if (t == null || t > MAX_TAGE) { alt.push(P[p].l); return; } if (!best || net > best.net) best = {p, pr, net, d: R.d, t}; });
      if (best) { rows[best.p].tr.classList.add('win'); const start = Math.max(1, Math.ceil(best.pr * 1.05) - 0.01), min = Math.round(best.pr * 0.9 * 10) / 10;
        const d = e('div', 'pc-amp'); d.style.setProperty('--ac', '#22c55e');
        if (modus === 'kaufen') { const k = zahl(S.kostet); const gew = best.net - 2 - k; let ac = '#22c55e', tt = '🟢 KAUFEN!', ss = 'Ca. ' + eur(gew) + ' Gewinn nach Gebühren und ca. 2 € Material.';
          if (!k) { tt = '💰 Wert: ' + eur(best.pr); ss = 'Oben „Kostet hier“ eintragen, dann zeigt die Ampel, ob es sich lohnt.'; ac = '#3b82f6'; }
          else if (k / best.pr > 0.65) { ac = '#ef4444'; tt = '🔴 Lass liegen'; ss = gew > 0 ? 'Nur ca. ' + eur(gew) + ' Gewinn – zu wenig für das Risiko.' : 'Kein Gewinn drin.'; }
          else if (k / best.pr > 0.5) { ac = '#f59e0b'; tt = '🟡 Handeln'; ss = 'Biete ' + eur(Math.floor(best.pr * 0.45)) + ' – dann lohnt es sich.'; }
          d.style.setProperty('--ac', ac); d.append(e('div', 'k', tt), e('div', '', ss), e('div', 'pc-hint', 'Basis: ' + P[best.p].l + ', verkauft am ' + datK(best.d) + ' für ' + eur(best.pr) + '. Regel: höchstens die Hälfte vom Verkaufswert zahlen.')); }
        else { d.append(e('div', 'k', '✅ ' + P[best.p].l + ' · Startpreis ' + eur(start)), e('div', '', '+5 % Puffer zum Verhandeln · Mindestpreis ' + eur(min) + ' (90 % vom letzten Verkauf)'), e('div', 'pc-hint', 'Letzter Verkauf: ' + eur(best.pr) + ' am ' + datK(best.d) + (best.t <= 14 ? ' – schön frisch.' : ' – schon ' + best.t + ' Tage her, Preis kurz gegenchecken.') + (P[best.p].fee ? ' Nach ' + P[best.p].fee + ' % Gebühr: ' + eur(best.net) + '.' : ' Keine Verkaufsgebühr.'))); }
        out.append(d); S.ergebnis = {p: best.p, pr: best.pr, d: best.d}; speichern();
        if (alt.length) out.append(e('div', 'pc-hint', '⏳ Nicht gewertet (älter als ' + MAX_TAGE + ' Tage oder ohne Datum): ' + alt.join(', ')));
      } else if (alt.length) out.append(e('div', 'pc-warn', '⏳ Kein Verkauf aus den letzten ' + MAX_TAGE + ' Tagen eingetragen – alte Preise können inzwischen gefallen sein. Neueren Verkauf suchen oder Datum ergänzen.'));
      else out.append(e('div', 'pc-hint', 'Ohne echten Verkaufspreis kein Einstellpreis – so verkaufen wir nie wieder zu billig.'));
    }
    rechne(); return c;
  }

  function merken() { if (!S.art && !S.name) return; const H = lj('pc-hist6', []); const er = S.ergebnis || {};
    H.unshift({name: S.name || (ARTEN[S.art] || ARTEN.sonst).l, zustand: S.zustand, preis: er.pr || 0, p: er.p || '', d: er.d || '', f: (S.fotos[0] || {}).klein || '', z: Date.now()}); ls('pc-hist6', H.slice(0, 30)); }
  function historie() { const H = lj('pc-hist6', []); if (!H.length) return; const c = e('section', 'pc-c'); c.append(e('div', 'm', '🕘 Zuletzt geprüft')); const l = e('div', 'pc-hist');
    H.slice(0, 8).forEach(x => { const b = e('button'); b.type = 'button'; const ph = x.f ? Object.assign(e('img'), {src: x.f, alt: ''}) : e('div', 'ph', '🏷️'); const m = e('div'); m.append(e('div', 't', x.name), e('div', 'm', [x.zustand, x.p ? P[x.p].l + ' ' + datK(x.d) : ''].filter(Boolean).join(' · '))); b.append(ph, m, e('b', '', x.preis ? eur(x.preis) : '–')); l.append(b); });
    c.append(l); root.append(c); }

  /* Claude direkt (nur in NoxRift, wenn Claude verfügbar ist) */
  async function claudeCheck() {
    if (laeuft) return; laeuft = true; const A = ARTEN[S.art] || ARTEN.sonst; const box = e('section', 'pc-c'); const l = e('div', 'pc-lade'); l.append(e('div', 'pc-spin'), e('div', '', 'Claude erkennt den Artikel und sucht den letzten Verkauf …')); box.append(l);
    const pk = document.getElementById('pc-preis'); root.insertBefore(box, pk);
    const prompt = text() + '\n\nAntworte NUR mit JSON: {"artikel":"genaue Bezeichnung","zustand":"…","maengel":["…"],"preise":[{"plattform":"' + A.plat.join('|') + '","preis":Zahl,"datum":"JJJJ-MM-TT","link":"…"}],"trend":"steigt|stabil|fällt","titel":"…","beschreibung":"…","startpreis":Zahl,"mindestpreis":Zahl,"sicherheit":"hoch|mittel|niedrig"}. Nur echte, gefundene Verkäufe – erfinde keine Preise, Daten oder Links; findest du keinen, lass preise leer.';
    try { const o = {modelTier: 'complex'}; try { const lim = await sample.limits(); if (lim && lim.images) o.images = S.fotos.slice(0, Math.min(lim.images, 4)).map(f => f.blob); } catch (x) {}
      const r = await sample(prompt, o); let j = null; try { j = JSON.parse((r.text.match(/\{[\s\S]*\}/) || [''])[0]); } catch (x) {}
      box.replaceChildren(); if (!j) { box.append(e('div', 'pc-warn', 'Claude konnte nicht sicher antworten – bitte über ChatGPT schicken.')); laeuft = false; return; }
      if (j.artikel && !S.name) S.name = j.artikel; (j.preise || []).forEach(x => { if (P[x.plattform] && x.preis) S.preise[x.plattform] = {p: String(x.preis), d: /^\d{4}-\d\d-\d\d$/.test(x.datum || '') ? x.datum : ''}; }); speichern();
      box.append(e('div', 'pc-h', '🤖 ' + (j.artikel || 'Ergebnis')));
      if ((j.maengel || []).length) box.append(e('div', 'm', '🔎 ' + j.maengel.join(' · ')));
      (j.preise || []).forEach(x => { if (!x.link || !/^https:\/\//.test(x.link)) return; const a = e('a', '', '↗ ' + ((P[x.plattform] || {}).l || x.plattform) + ' · ' + eur(x.preis) + ' · ' + datK(x.datum)); a.href = x.link; a.target = '_blank'; a.rel = 'noopener'; a.style.color = '#93c5fd'; box.append(a); });
      if (j.trend) box.append(e('div', 'm', 'Trend: ' + j.trend + (j.sicherheit ? ' · Sicherheit: ' + j.sicherheit : '')));
      [['TITEL', j.titel], ['BESCHREIBUNG', j.beschreibung]].forEach(([k, v]) => { if (!v) return; box.append(e('div', 'pc-lbl', k)); const p = e('pre', '', v); box.append(p); const b = e('button', 'pc-go grau', '📋 ' + k.charAt(0) + k.slice(1).toLowerCase() + ' kopieren'); b.type = 'button'; b.addEventListener('click', () => { try { navigator.clipboard.writeText(v); b.textContent = '✓ Kopiert'; } catch (x) {} }); box.append(b); });
      const neu = preisKarte(); root.replaceChild(neu, document.getElementById('pc-preis'));
    } catch (x) { box.replaceChildren(e('div', 'pc-warn', x && x.code === 'rate_limited' ? 'Gerade zu viele Anfragen – kurz warten oder über ChatGPT schicken.' : 'Claude gerade nicht erreichbar – bitte über ChatGPT schicken.')); }
    laeuft = false;
  }

  bau();
  (async () => { try { if (!window.claude || !claude.use) return; const s = await claude.use('sample'); if (!s) return; sample = s; bau(); } catch (x) {} })();
})();
