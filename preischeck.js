/* © 2026 NOXRIFT – Manuel. Alle Rechte vorbehalten. Nutzung nur für das NoxRift-Team.
   Preis-Check v12 – eigenes Programm, ohne ChatGPT, mit Zustands-Prüfung je Kategorie:
   1 Kamera · 2 Vergleich · 3 Titel & Beschreibung · 4 Preisempfehlung je Plattform.
   Eigene App (GitHub) und Bereich in NoxRift – dieselbe Datei. */
(function () {
  const css = `
.pc{--pb:#0b1020;--pp:#141b2f;--pp2:#1c2540;--pl:#2b3655;--pt:#eef2fb;--pm:#94a0bd;--pv:#7c6cf0;color:var(--pt);font:16px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;display:grid;gap:14px;max-width:560px;margin:0 auto;width:100%}
.pc *{box-sizing:border-box}
.pc .pc-titel{font-size:1.35rem;font-weight:800}
.pc .pc-c{background:var(--pp);border:1px solid var(--pl);border-radius:20px;padding:16px;display:grid;gap:12px}
.pc .pc-h{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.1rem}
.pc .pc-h .n{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:var(--pv);color:#fff;font-size:.95rem;flex:0 0 auto}
.pc .pc-h .n.ok{background:#22c55e}
.pc .pc-cam{display:grid;place-items:center;gap:4px;min-height:110px;border-radius:18px;border:2px dashed #4b5a85;background:var(--pp2);cursor:pointer;text-align:center;padding:14px;font-weight:800;font-size:1.1rem}
.pc .pc-cam input{display:none}
.pc .pc-cam .i{font-size:2.4rem;line-height:1}
.pc .pc-fotos{display:grid;grid-template-columns:repeat(auto-fill,minmax(64px,1fr));gap:8px}
.pc .pc-fotos div{position:relative;aspect-ratio:1;border-radius:12px;overflow:hidden;background:var(--pl)}
.pc .pc-fotos img{width:100%;height:100%;object-fit:cover;display:block}
.pc .pc-fotos button{position:absolute;top:3px;right:3px;width:24px;height:24px;border-radius:50%;border:none;background:rgba(0,0,0,.65);color:#fff;cursor:pointer}
.pc input,.pc textarea{font:inherit;width:100%;padding:12px 14px;border-radius:14px;border:1px solid var(--pl);background:var(--pb);color:var(--pt)}
.pc textarea{min-height:56px;resize:vertical}
.pc .pc-chips{display:flex;flex-wrap:wrap;gap:6px}
.pc .pc-chips button{font:inherit;font-size:.9rem;font-weight:700;border:1px solid var(--pl);border-radius:999px;padding:8px 13px;background:var(--pp2);color:var(--pt);cursor:pointer}
.pc .pc-chips button[aria-pressed=true]{background:var(--pv);border-color:var(--pv);color:#fff}
.pc .pc-lbl{font-size:.8rem;font-weight:800;letter-spacing:.05em;color:var(--pm)}
.pc .pc-row{display:grid;grid-template-columns:1fr 6.5rem;gap:8px;align-items:center;padding:10px 12px;border-radius:14px;background:var(--pp2);border:1px solid var(--pl)}
.pc .pc-row b{font-size:1rem}
.pc .pc-row a{color:#93c5fd;font-weight:700;text-decoration:none;font-size:.85rem}
.pc .pc-row input{padding:9px 10px;border-radius:10px;font-weight:800;text-align:right}
.pc .pc-feld{display:grid;gap:8px;padding:12px;border-radius:14px;background:var(--pp2);border:1px solid var(--pl)}
.pc .pc-feld .v{white-space:pre-wrap;font-size:.98rem}
.pc .pc-kopie{font:inherit;font-weight:800;border:none;border-radius:12px;padding:11px;background:#10a37f;color:#fff;cursor:pointer;text-align:center;text-decoration:none;display:block}
.pc .pc-kopie.grau{background:var(--pb);border:1px solid var(--pl);color:var(--pt)}
.pc .pc-2{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.pc .pc-plat{display:grid;gap:8px;padding:12px;border-radius:14px;background:var(--pp2);border:1px solid var(--pl)}
.pc .pc-plat.top{border:2px solid #22c55e;background:rgba(34,197,94,.1)}
.pc .pc-plat .kopf{display:flex;justify-content:space-between;align-items:baseline;gap:8px;flex-wrap:wrap}
.pc .pc-plat .preis{font-size:1.6rem;font-weight:900;color:#86efac}
.pc .pc-plat .leer{color:var(--pm);font-size:.9rem}
.pc .pc-m{color:var(--pm);font-size:.86rem}
.pc .pc-chk{all:unset;cursor:pointer;display:grid;grid-template-columns:1.4rem 1fr;gap:8px;align-items:start;padding:8px 6px;border-radius:10px;font-size:.92rem}
.pc .pc-chk[aria-pressed=true]{background:rgba(124,108,240,.18)}
.pc .pc-chk .x{font-size:1.1rem;line-height:1.2}
.pc .pc-zust{display:flex;justify-content:space-between;align-items:baseline;gap:8px;padding:10px 12px;border-radius:12px;background:rgba(34,197,94,.12);border:1px solid rgba(34,197,94,.5)}
.pc .pc-zust b{font-size:1.15rem;color:#86efac}
.pc .pc-schutz summary{cursor:pointer;font-weight:800;color:#fde68a}
.pc .pc-schutz ul{margin:8px 0 0;padding-left:1.2rem;display:grid;gap:4px;font-size:.88rem}
.pc .pc-warn{border-radius:14px;padding:10px 12px;background:rgba(239,68,68,.15);border:1px solid rgba(239,68,68,.5);font-size:.9rem}
.pc .pc-go{font:inherit;font-weight:800;border:none;border-radius:16px;padding:13px 16px;cursor:pointer;width:100%;text-align:center;text-decoration:none;display:block;background:var(--pp2);border:1px solid var(--pl);color:var(--pt)}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const e = (t, c, x) => { const n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; };
  const eur = v => (Math.round((+v || 0) * 100) / 100).toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});
  const zahl = v => +String(v || '').replace(',', '.') || 0;
  const lj = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || 'null') || d; } catch (x) { return d; } };
  const ls = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (x) {} };
  const q = s => encodeURIComponent(String(s || '').trim());

  /* Plattformen: Gebühr für Privatverkäufer, Link zu den (verkauften) Vergleichsangeboten und zum Einstellen */
  const P = [
    {id: 'vinted', l: 'Vinted', fee: 0, such: n => 'https://www.vinted.de/catalog?search_text=' + q(n) + '&order=newest_first', neu: 'https://www.vinted.de/items/new', hint: 'aktuelle Angebote'},
    {id: 'ebay', l: 'eBay', fee: 0, such: n => 'https://www.ebay.de/sch/i.html?_nkw=' + q(n) + '&LH_Sold=1&LH_Complete=1&_sop=13', neu: 'https://www.ebay.de/sl/sell', hint: 'verkaufte Artikel'},
    {id: 'kleinanzeigen', l: 'Kleinanzeigen', fee: 0, such: n => 'https://www.kleinanzeigen.de/s-' + q(String(n || '').toLowerCase().replace(/\s+/g, '-')) + '/k0', neu: 'https://www.kleinanzeigen.de/p-anzeige-aufgeben.html', hint: 'aktuelle Angebote'},
    {id: 'cardmarket', l: 'Cardmarket', fee: 5, such: n => 'https://www.cardmarket.com/de/Pokemon/Products/Search?searchString=' + q(n), neu: 'https://www.cardmarket.com/de/Pokemon/Stock/Offers/Singles', hint: 'nur Karten'}
  ];
  /* Zustands-Prüfung: je Kategorie die Punkte, auf die Käufer achten. s = Stufe auf der Skala (je höher, desto schlechter).
     Karten: Cardmarket-Skala (M, NM, EX, GD, LP, PL, PO). Rest: Vinted-Skala. Schlechtester Punkt bestimmt den Zustand. */
  const KS = ['Mint (M)', 'Near Mint (NM)', 'Excellent (EX)', 'Good (GD)', 'Light Played (LP)', 'Played (PL)', 'Poor (PO)'];
  const VS = ['Neu mit Etikett', 'Neu ohne Etikett', 'Sehr gut', 'Gut', 'Zufriedenstellend'];
  const KAT = {
    karte: {l: '🃏 Karte', skala: KS, start: 1, kurz: ['M', 'NM', 'EX', 'GD', 'LP', 'PL', 'PO'], plat: ['cardmarket', 'ebay', 'vinted'],
      fotos: 'Vorder- und Rückseite gerade, bei hellem Licht · alle 4 Ecken nah · Holo schräg gegen Licht (Kratzer)',
      checks: [['perfekt', 'Unter Lupe makellos, perfekt zentriert', 0, 'makellos'], ['kante1', 'Ein paar winzige weiße Pünktchen an Kanten/Ecken (Rückseite)', 2, 'minimale weiße Stellen an den Kanten'],
        ['kratz1', 'Feine Kratzer auf Holo/Oberfläche, nur im Gegenlicht', 2, 'feine Kratzer im Gegenlicht'], ['kante2', 'Deutlich weiße Kanten oder bestoßene Ecken', 3, 'sichtbare Abnutzung an Kanten/Ecken'],
        ['kratz2', 'Kratzer/Abrieb auf den ersten Blick sichtbar', 4, 'sichtbare Kratzer'], ['knick1', 'Kleiner Knick oder Delle', 5, 'kleiner Knick'],
        ['knick2', 'Starker Knick, Riss, Wasserschaden, beschriftet oder ringsum weiße Ränder', 6, 'starker Schaden']],
      extra: ['Holo/Reverse', '1. Edition', 'deutsch', 'englisch', 'gegradet (PSA/CGC)'],
      schutz: ['Ab ca. 25 € nur versichert/mit Tracking versenden, Karte in Toploader + Hülle.', 'Vor dem Versand Vorder- und Rückseite fotografieren – gegen „falsche Karte/Zustand“-Reklamationen.', 'Gegradete Karten: Zertifikatsnummer auf der PSA/CGC-Seite prüfen, Fälschungen sind häufig.']},
    spiel: {l: '🎮 Spiel', skala: VS, start: 2, plat: ['ebay', 'vinted', 'kleinanzeigen'],
      fotos: 'Hülle vorne + hinten · Disc/Modul mit Unterseite im Licht · Anleitung · Rücken der Hülle',
      checks: [['ovp', 'Noch eingeschweißt (Folie zu)', 0, 'originalverschweißt'], ['disc1', 'Disc: leichte Gebrauchsspuren, läuft', 3, 'Disc mit leichten Gebrauchsspuren'],
        ['disc2', 'Disc: tiefe Kratzer / nicht getestet', 4, 'Disc mit deutlichen Kratzern'], ['huelle1', 'Hülle: kleine Kratzer, Cover leicht verblichen', 3, 'Hülle mit leichten Gebrauchsspuren'],
        ['huelle2', 'Hülle gebrochen/Ersatzhülle, Cover gerissen oder beschriftet, Aufkleberreste', 4, 'Hülle beschädigt bzw. nicht original'], ['ohneanl', 'Anleitung fehlt', 3, 'ohne Anleitung']],
      extra: ['Anleitung dabei', 'getestet, läuft', 'PAL/deutsch', 'Spielstand gelöscht'],
      schutz: ['Disc vor dem Versand fotografieren (Unterseite) – gegen „kam zerkratzt an“.', 'Prüfen, ob die richtige Disc in der Hülle liegt.', 'Bei Retro-Modulen: Platine/Etikett checken, Repros (Nachdrucke) gibt es viele.']},
    schuhe: {l: '👟 Schuhe', skala: VS, start: 1, plat: ['vinted', 'ebay', 'kleinanzeigen'],
      fotos: 'Beide Schuhe seitlich · Sohle · Zehenbox von oben · Innensohle · Größen-/Produktetikett innen · Karton',
      checks: [['etikett', 'Noch mit Etikett, nie getragen', 0, 'neu mit Etikett'], ['getragen0', 'Nie draußen getragen, keine Spuren', 1, 'ungetragen'],
        ['sohle1', 'Sohle leicht abgelaufen', 2, 'Sohle leicht abgelaufen'], ['knick', 'Knicke an der Zehenbox (Creasing)', 3, 'leichte Knicke an der Zehenbox'],
        ['fleck', 'Flecken/Verfärbungen, Innensohle abgenutzt', 3, 'leichte Verfärbungen'], ['sohle2', 'Sohle stark abgelaufen, Kleber löst sich, Löcher', 4, 'deutliche Abnutzung']],
      extra: ['Originalkarton', 'Kaufbeleg', 'Ersatz-Schnürsenkel'],
      schutz: ['Markenschuhe: Größenetikett innen (Style-Code) fotografieren – damit wird Echtheit belegt.', 'Fälschungsverdacht beim Kauf: Style-Code googeln, Nähte und Logo vergleichen.', 'Schuhe im Karton plus Versandkarton verschicken.']},
    kleidung: {l: '👕 Kleidung', skala: VS, start: 1, plat: ['vinted', 'kleinanzeigen', 'ebay'],
      fotos: 'Vorne + hinten flach hingelegt · Größen- und Pflegeetikett · Mängel nah',
      checks: [['etikett', 'Noch mit Etikett', 0, 'neu mit Etikett'], ['nie', 'Nie getragen, ohne Etikett', 1, 'ungetragen'],
        ['pilling', 'Leichte Knötchen (Pilling) oder leicht verwaschen', 3, 'leichte Gebrauchsspuren'], ['fleck', 'Fleck, ausgeblichen oder Druck rissig', 4, 'Fleck bzw. Farbe verblasst'], ['loch', 'Loch oder kaputter Reißverschluss', 4, 'kleiner Defekt']],
      extra: ['Original', 'Fan-Replika (kein Original)', 'Größe laut Etikett'],
      schutz: ['Replikas immer als „Replika/kein Original“ benennen – sonst droht Ärger wegen Markenfälschung.', 'Bei Markenware Etiketten fotografieren.']},
    schmuck: {l: '💍 Schmuck', skala: VS, start: 2, plat: ['vinted', 'ebay', 'kleinanzeigen'],
      fotos: 'Gesamt auf neutralem Untergrund · Stempel/Punze nah (z. B. 925, 585, 750) · Verschluss · Steine nah',
      checks: [['neu', 'Neu, nie getragen, mit Etui', 1, 'neu und ungetragen'], ['kratz1', 'Leichte Tragespuren / feine Kratzer', 3, 'leichte Tragespuren'],
        ['angel', 'Angelaufen (Silber) – vorher reinigen', 3, 'leicht angelaufen'], ['defekt', 'Verschluss locker, Stein fehlt, verbogen', 4, 'kleiner Defekt']],
      extra: ['Punze/Stempel vorhanden', 'Echtheitszertifikat', 'Etui/Box'],
      schutz: ['Ohne Punze (925/585/750) NIE als Silber oder Gold verkaufen – nur als „Modeschmuck“.', 'Teuren Schmuck nur versichert versenden, Gewicht (g) notieren und fotografieren.', 'Käufer, die „echtes Gold“ unter Wert anbieten wollen: Goldwert pro Gramm vorher prüfen.']},
    technik: {l: '🔌 Technik', skala: VS, start: 2, plat: ['ebay', 'kleinanzeigen', 'vinted'],
      fotos: 'Gerät an (Bildschirm läuft) · Vorder-/Rückseite · Seriennummer · Zubehör',
      checks: [['ovp', 'Neu, originalverpackt', 0, 'originalverpackt'], ['kratz1', 'Leichte Kratzer, alles funktioniert', 3, 'leichte Gebrauchsspuren'],
        ['kratz2', 'Deutliche Kratzer/Dellen', 4, 'deutliche Gebrauchsspuren'], ['defekt', 'Teilweise defekt / Akku schwach', 4, 'Akku schwach bzw. Teildefekt']],
      extra: ['getestet, funktioniert', 'Zubehör komplett', 'Rechnung vorhanden'],
      schutz: ['Seriennummer vor dem Versand fotografieren – gegen Rücksendung eines anderen (defekten) Geräts.', 'Konten (Apple-ID, Google, Konsole) vorher abmelden und zurücksetzen.']},
    sonst: {l: '📦 Sonstiges', skala: VS, start: 2, plat: ['vinted', 'ebay', 'kleinanzeigen'],
      fotos: 'Gesamt · Details · Mängel nah',
      checks: [['ovp', 'Neu, originalverpackt', 0, 'originalverpackt'], ['leicht', 'Leichte Gebrauchsspuren', 3, 'leichte Gebrauchsspuren'], ['deutlich', 'Deutliche Gebrauchsspuren oder Teildefekt', 4, 'deutliche Gebrauchsspuren']],
      extra: ['funktioniert', 'vollständig', 'OVP'], schutz: []}
  };
  const SCHUTZ_ALLE = ['Nur über die Plattform bezahlen lassen – nie PayPal „Freunde“, nie Links oder Codes von Käufern anklicken.', 'Verpacken kurz filmen (Artikel → Paket → Etikett) – Beweis gegen „Paket war leer“.'];
  const neu = () => ({kat: '', checks: [], extra: [], name: '', maengel: '', preise: {}});
  let S = Object.assign(neu(), lj('pc-s12', {})), fotos = [];
  const sp = () => ls('pc-s12', S);
  function zustand() { const K = KAT[S.kat]; if (!K) return null; let st = K.start; const gew = K.checks.filter(c => S.checks.includes(c[0]));
    if (gew.length) st = Math.max(...gew.map(c => c[2])); if (gew.some(c => c[2] === 0) && gew.every(c => c[2] === 0)) st = 0;
    return {txt: K.skala[Math.min(st, K.skala.length - 1)], kurz: K.kurz ? K.kurz[st] : K.skala[Math.min(st, K.skala.length - 1)], punkte: gew.filter(c => c[2] > 0).map(c => c[3])}; }
  const root = document.getElementById('pc-root'); if (!root) return; root.className = 'pc';

  async function verkleinern(f) { try { const bm = await createImageBitmap(f); const s = Math.min(1, 1600 / Math.max(bm.width, bm.height)); const c = document.createElement('canvas'); c.width = Math.round(bm.width * s); c.height = Math.round(bm.height * s); c.getContext('2d').drawImage(bm, 0, 0, c.width, c.height);
    const blob = await new Promise(r => c.toBlob(b => r(b || f), 'image/jpeg', 0.9)); return {blob, url: URL.createObjectURL(blob)}; } catch (x) { return {blob: f, url: URL.createObjectURL(f)}; } }
  async function kopiere(t) { try { await navigator.clipboard.writeText(t); } catch (x) { const a = document.createElement('textarea'); a.value = t; document.body.append(a); a.select(); document.execCommand('copy'); a.remove(); } }
  const kopf = (n, t, ok) => { const h = e('div', 'pc-h'); h.append(e('span', 'n' + (ok ? ' ok' : ''), ok ? '✓' : String(n)), e('span', '', t)); return h; };
  const kBtn = (txt, wert, cls) => { const b = e('button', 'pc-kopie' + (cls ? ' ' + cls : ''), txt); b.type = 'button'; b.addEventListener('click', async () => { await kopiere(typeof wert === 'function' ? wert() : wert); const o = b.textContent; b.textContent = '✓ Kopiert'; setTimeout(() => { b.textContent = o; }, 1800); }); return b; };

  function titel() { const n = S.name.trim(); if (!n) return ''; const Z = zustand(); const t = n + (S.extra.length && S.kat === 'karte' ? ' ' + S.extra.filter(x => !/gegradet/.test(x)).join(' ') : '') + (Z ? ' – ' + Z.kurz : ''); return t.length > 80 ? t.slice(0, 79) + '…' : t; }
  function beschreibung() {
    const n = S.name.trim(); if (!n) return '';
    const m = S.maengel.trim();
    return ['Weitere Artikel in meinem Profil – gern kombinieren!', '',
      n + (zustand() ? ' im Zustand „' + zustand().txt + '“.' : '.'),
      (zustand() && zustand().punkte.length ? 'Zustand im Detail: ' + zustand().punkte.join(', ') + '.' : 'Keine bekannten Mängel, siehe Fotos.') + (m ? ' ' + m.replace(/\.?$/, '.') : ''),
      S.extra.length ? 'Dabei/geprüft: ' + S.extra.join(', ') + '.' : null,
      '', 'Privatverkauf, daher keine Garantie oder Rücknahme. Versand schnell und sicher verpackt.'].filter(x => x !== null).join('\n');
  }
  function empfehlung(p) { const pr = zahl(S.preise[p.id]); if (!pr) return null; const start = Math.max(1, Math.ceil(pr * 1.05) - 0.01); return {pr, start, min: Math.round(pr * 0.9 * 10) / 10, netto: start * (1 - p.fee / 100)}; }

  function bau() {
    root.replaceChildren(e('div', 'pc-titel', '💶 Preis-Check'));

    /* 1 · Kamera */
    const c1 = e('section', 'pc-c'); c1.append(kopf(1, 'Kamera & Zustand', fotos.length > 0 && !!S.name.trim() && !!S.kat));
    const cam = e('label', 'pc-cam'); const fi = e('input'); fi.type = 'file'; fi.accept = 'image/*'; fi.multiple = true;
    cam.append(fi, e('div', 'i', '📸'), e('div', '', fotos.length ? 'Noch ein Foto' : 'Foto machen'));
    fi.addEventListener('change', async ev => { for (const f of [...(ev.target.files || [])].slice(0, 8 - fotos.length)) fotos.push(await verkleinern(f)); bau(); });
    c1.append(cam);
    if (fotos.length) { const g = e('div', 'pc-fotos'); fotos.forEach((f, i) => { const d = e('div'); const im = e('img'); im.src = f.url; im.alt = 'Foto ' + (i + 1); const x = e('button', '', '✕'); x.type = 'button'; x.addEventListener('click', () => { fotos.splice(i, 1); bau(); }); d.append(im, x); g.append(d); }); c1.append(g); }
    const ni = e('input'); ni.placeholder = 'Was ist es? z. B. South Park Stab der Wahrheit PS3'; ni.value = S.name; ni.autocomplete = 'off';
    ni.addEventListener('change', () => { S.name = ni.value; sp(); bau(); }); c1.append(ni);
    const kc = e('div', 'pc-chips'); Object.entries(KAT).forEach(([k, K]) => { const b = e('button', '', K.l); b.type = 'button'; b.setAttribute('aria-pressed', String(S.kat === k)); b.addEventListener('click', () => { if (S.kat !== k) { S.checks = []; S.extra = []; } S.kat = k; sp(); bau(); }); kc.append(b); });
    c1.append(e('div', 'pc-lbl', 'WAS IST ES?'), kc);
    const K = KAT[S.kat];
    if (K) {
      c1.append(e('div', 'pc-m', '📸 Fotos: ' + K.fotos));
      const box = e('div', 'pc-feld'); box.append(e('div', 'pc-lbl', 'ZUSTAND PRÜFEN – alles antippen, was zutrifft'));
      K.checks.forEach(([id, txt, stf]) => { const b = e('button', 'pc-chk'); b.type = 'button'; const on = S.checks.includes(id); b.setAttribute('aria-pressed', String(on)); b.append(e('span', 'x', on ? '☑' : '☐'), e('span', '', txt));
        b.addEventListener('click', () => { S.checks = on ? S.checks.filter(x => x !== id) : S.checks.concat(id); sp(); bau(); }); box.append(b); });
      const Z = zustand(); const zb = e('div', 'pc-zust'); zb.append(e('span', '', 'Bewertung:'), e('b', '', Z.txt)); box.append(zb);
      if (!S.checks.length) box.append(e('div', 'pc-m', 'Nichts angetippt = ' + K.skala[K.start] + '. Lieber eine Stufe strenger – zu gut bewertet ist der häufigste Grund für Rückgaben.'));
      c1.append(box);
      const ex = e('div', 'pc-chips'); K.extra.forEach(x => { const b = e('button', '', x); b.type = 'button'; b.style.fontSize = '.82rem'; b.setAttribute('aria-pressed', String(S.extra.includes(x))); b.addEventListener('click', () => { S.extra = S.extra.includes(x) ? S.extra.filter(y => y !== x) : S.extra.concat(x); sp(); bau(); }); ex.append(b); });
      c1.append(e('div', 'pc-lbl', 'DABEI / GEPRÜFT'), ex);
      const mi = e('textarea'); mi.placeholder = 'Weitere Mängel (optional)'; mi.value = S.maengel; mi.addEventListener('change', () => { S.maengel = mi.value; sp(); bau(); }); c1.append(mi);
      const sz = K.schutz.concat(SCHUTZ_ALLE); const d = e('details', 'pc-schutz'); d.append(e('summary', '', '🛡️ So werden wir nicht abgezogen')); const ul = e('ul'); sz.forEach(t => ul.append(e('li', '', t))); d.append(ul); c1.append(d);
    }
    root.append(c1);

    /* 2 · Vergleich */
    const c2 = e('section', 'pc-c'); const PL = KAT[S.kat] ? KAT[S.kat].plat.map(id => P.find(p => p.id === id)) : P.filter(p => p.id !== 'cardmarket'); const hatPreis = PL.some(p => zahl(S.preise[p.id])); c2.append(kopf(2, 'Vergleich', hatPreis));
    if (!S.name.trim()) c2.append(e('div', 'pc-m', 'Erst bei 1 eintragen, was es ist – dann erscheinen hier die Vergleichs-Links.'));
    else { c2.append(e('div', 'pc-m', 'Link antippen, letzten realistischen Verkaufspreis ansehen und eintragen.'));
      PL.forEach(p => { const r = e('div', 'pc-row'); const l = e('div'); l.append(e('b', '', p.l)); const a = e('a', '', ' ↗ ' + p.hint); a.href = p.such(S.name); a.target = '_blank'; a.rel = 'noopener'; l.append(e('br'), a);
        const i = e('input'); i.inputMode = 'decimal'; i.placeholder = '€'; i.value = S.preise[p.id] || ''; i.addEventListener('change', () => { S.preise[p.id] = i.value; sp(); bau(); });
        r.append(l, i); c2.append(r); }); }
    root.append(c2);

    /* 3 · Titel & Beschreibung */
    const c3 = e('section', 'pc-c'); const T = titel(), B = beschreibung(); c3.append(kopf(3, 'Titel & Beschreibung', !!T));
    if (!T) c3.append(e('div', 'pc-m', 'Entsteht automatisch, sobald bei 1 Name und Art drin sind.'));
    else { const f1 = e('div', 'pc-feld'); f1.append(e('div', 'pc-lbl', 'TITEL'), e('div', 'v', T), kBtn('📋 Titel kopieren', T)); const f2 = e('div', 'pc-feld'); f2.append(e('div', 'pc-lbl', 'BESCHREIBUNG'), e('div', 'v', B), kBtn('📋 Beschreibung kopieren', B)); c3.append(f1, f2); }
    root.append(c3);

    /* 4 · Preisempfehlung je Plattform */
    const c4 = e('section', 'pc-c'); c4.append(kopf(4, 'Preisempfehlung', hatPreis));
    const E = PL.map(p => ({p, x: empfehlung(p)})); const best = E.filter(o => o.x).sort((a, b) => b.x.netto - a.x.netto)[0];
    E.forEach(({p, x}) => { const d = e('div', 'pc-plat' + (best && best.p === p ? ' top' : '')); const k = e('div', 'kopf'); k.append(e('b', '', (best && best.p === p ? '🏆 ' : '') + p.l));
      if (!x) { k.append(e('span', 'leer', 'kein Vergleichspreis')); d.append(k); c4.append(d); return; }
      k.append(e('span', 'preis', eur(x.start))); d.append(k);
      d.append(e('div', 'pc-m', 'Letzter Verkauf ' + eur(x.pr) + ' · nicht unter ' + eur(x.min) + (p.fee ? ' · ' + p.fee + ' % Gebühr → ' + eur(x.netto) : ' · keine Gebühr')));
      const z = e('div', 'pc-2'); z.append(kBtn('📋 Preis', String(x.start.toFixed(2)).replace('.', ',')));
      const a = e('a', 'pc-kopie grau', 'Auf ' + p.l + ' einstellen ↗'); a.href = p.neu; a.target = '_blank'; a.rel = 'noopener'; a.addEventListener('click', () => { if (T) kopiere(T); }); z.append(a); d.append(z); c4.append(d); });
    if (best) c4.append(e('div', 'pc-m', '🏆 = bringt am meisten. Beim Antippen von „einstellen“ wird der Titel kopiert. Preis = letzter Verkauf + 5 % Verhandlungspuffer.'));
    root.append(c4);

    const nb = e('button', 'pc-go', '🆕 Nächster Artikel'); nb.type = 'button'; nb.addEventListener('click', () => { S = neu(); fotos = []; sp(); bau(); window.scrollTo && window.scrollTo({top: 0, behavior: 'smooth'}); }); root.append(nb);
    root.append(e('div', 'pc-m', '© 2026 NOXRIFT · Alle Rechte vorbehalten · nur für das NoxRift-Team'));
    if (window.dash) { const a = e('a', 'pc-go', '📲 App fürs Handy'); a.href = 'https://riftora-app.github.io/preischeck/'; a.target = '_blank'; a.rel = 'noopener'; root.append(a); }
  }

  /* Zugang nur fürs Team: Code wird nur als Prüfsumme gespeichert */
  const HASH = 'abb413b3292845daf4d0c821a9bfe9ef3df947cc24db886d46813b12d6bb2035';
  async function pruef(c) { const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('noxrift:' + c.trim())); return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('') === HASH; }
  function sperre() {
    root.replaceChildren(e('div', 'pc-titel', '🔒 Preis-Check')); const c = e('section', 'pc-c'); c.append(e('div', '', 'Nur für das NoxRift-Team. Bitte Zugangscode eingeben.'));
    const i = e('input'); i.type = 'password'; i.inputMode = 'numeric'; i.autocomplete = 'off'; i.placeholder = 'Zugangscode'; i.style.cssText = 'font:inherit;padding:12px 14px;border-radius:14px;border:1px solid var(--pl);background:var(--pb);color:var(--pt)';
    const b = e('button', 'pc-go', 'Öffnen'); b.type = 'button'; const m = e('div');
    const los = async () => { if (await pruef(i.value)) { ls('pc-zugang', HASH); bau(); } else m.replaceChildren(e('div', 'pc-warn', 'Code falsch.')); };
    b.addEventListener('click', los); i.addEventListener('keydown', ev => { if (ev.key === 'Enter') los(); }); c.append(i, b, m); root.append(c); }
  if (window.dash || lj('pc-zugang', '') === HASH) bau(); else sperre();
})();
