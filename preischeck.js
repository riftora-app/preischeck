/* © 2026 NOXRIFT – Manuel. Alle Rechte vorbehalten. Nutzung nur für das NoxRift-Team.
   Preis-Check v13 – Gen-Z-Design, Schritt für Schritt:
   1 Kamera & Zustand · 2 Vergleich · 3 Titel & Beschreibung · 4 Preisempfehlung + Einstellen auf dem eigenen Konto · Verlauf.
   Eigene App (GitHub) und Bereich in NoxRift – dieselbe Datei. */
(function () {
  const css = `
.pc{--bg:#0e0b1f;--card:#1a1533;--card2:#241d45;--line:#3a3168;--txt:#fff;--mut:#b9b2dd;--lime:#c6ff3d;--pink:#ff4fd8;--cyan:#3df5ff;--ok:#2bf59a;color:var(--txt);font:17px/1.4 ui-rounded,'SF Pro Rounded',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;display:grid;gap:14px;max-width:520px;margin:0 auto;width:100%}
.pc *{box-sizing:border-box}
.pc button{font:inherit;color:inherit}
.pc .top{display:flex;align-items:center;justify-content:space-between;gap:8px}
.pc .logo{font-size:1.55rem;font-weight:900;letter-spacing:-.02em}
.pc .logo i{font-style:normal;background:linear-gradient(90deg,var(--lime),var(--cyan));-webkit-background-clip:text;background-clip:text;color:transparent}
.pc .pill{border:2px solid var(--line);background:var(--card);border-radius:999px;padding:8px 14px;font-weight:800;cursor:pointer;font-size:.95rem}
.pc .hey{color:var(--mut);font-weight:700;margin-top:-6px}
.pc .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
.pc .steps button{border:none;border-radius:14px;padding:8px 2px;background:var(--card);cursor:pointer;display:grid;gap:2px;justify-items:center;font-size:.72rem;font-weight:800;color:var(--mut)}
.pc .steps button .e{font-size:1.35rem}
.pc .steps button.an{background:linear-gradient(135deg,var(--pink),#8b5cf6);color:#fff;transform:translateY(-2px);box-shadow:0 8px 22px rgba(255,79,216,.35)}
.pc .steps button.ok{color:var(--ok)}
.pc .steps button.an{color:#fff}
.pc .box{background:var(--card);border:2px solid var(--line);border-radius:26px;padding:18px;display:grid;gap:14px}
.pc h2{margin:0!important;font-size:1.6rem!important;line-height:1.15!important;font-weight:900!important;letter-spacing:-.02em;color:#fff!important}
.pc .sub{color:var(--mut);font-size:.95rem;margin-top:-8px}
.pc .cam{display:grid;place-items:center;gap:6px;min-height:150px;border-radius:24px;border:3px dashed var(--lime);background:radial-gradient(120% 120% at 50% 0%,rgba(198,255,61,.18),transparent 60%),var(--card2);cursor:pointer;text-align:center;padding:16px;font-weight:900;font-size:1.25rem}
.pc .cam input{display:none}
.pc .cam .e{font-size:3.2rem;line-height:1}
.pc .fotos{display:grid;grid-template-columns:repeat(auto-fill,minmax(70px,1fr));gap:8px}
.pc .fotos div{position:relative;aspect-ratio:1;border-radius:16px;overflow:hidden;background:var(--line)}
.pc .fotos img{width:100%;height:100%;object-fit:cover;display:block}
.pc .fotos button{position:absolute;top:4px;right:4px;width:26px;height:26px;border-radius:50%;border:none;background:rgba(0,0,0,.7);cursor:pointer}
.pc input,.pc textarea{font:inherit;width:100%;padding:14px 16px;border-radius:18px;border:2px solid var(--line);background:var(--bg);color:var(--txt)}
.pc input:focus,.pc textarea:focus{outline:none;border-color:var(--cyan)}
.pc textarea{min-height:60px;resize:vertical}
.pc .lbl{font-size:.8rem;font-weight:900;letter-spacing:.08em;color:var(--mut);text-transform:uppercase}
.pc .kats{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px}
.pc .kats button{border:2px solid var(--line);background:var(--card2);border-radius:18px;padding:12px 6px;cursor:pointer;display:grid;gap:4px;justify-items:center;font-weight:800;font-size:.9rem}
.pc .kats button .e{font-size:1.8rem}
.pc .kats button[aria-pressed=true]{border-color:var(--lime);background:rgba(198,255,61,.15)}
.pc .chk{display:grid;gap:8px}
.pc .chk button{border:2px solid var(--line);background:var(--card2);border-radius:16px;padding:12px 14px;cursor:pointer;text-align:left;display:grid;grid-template-columns:1.8rem 1fr;gap:8px;align-items:center;font-weight:700;font-size:.95rem}
.pc .chk button .x{font-size:1.3rem}
.pc .chk button[aria-pressed=true]{border-color:var(--pink);background:rgba(255,79,216,.14)}
.pc .note{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:14px 16px;border-radius:20px;background:linear-gradient(135deg,rgba(43,245,154,.2),rgba(61,245,255,.12));border:2px solid var(--ok)}
.pc .note b{font-size:1.35rem}
.pc .tags{display:flex;flex-wrap:wrap;gap:6px}
.pc .tags button{border:2px solid var(--line);background:var(--card2);border-radius:999px;padding:7px 12px;cursor:pointer;font-weight:700;font-size:.85rem}
.pc .tags button[aria-pressed=true]{border-color:var(--cyan);background:rgba(61,245,255,.15)}
.pc details summary{cursor:pointer;font-weight:900;color:#ffe066}
.pc details ul{margin:8px 0 0;padding-left:1.2rem;display:grid;gap:5px;font-size:.9rem;color:var(--mut)}
.pc .row{display:grid;grid-template-columns:1fr 7rem;gap:10px;align-items:center;padding:12px 14px;border-radius:18px;background:var(--card2);border:2px solid var(--line)}
.pc .row b{font-size:1.05rem}
.pc .row a{display:inline-block;margin-top:4px;color:var(--cyan);font-weight:800;text-decoration:none;font-size:.85rem}
.pc .row input{text-align:right;font-weight:900;font-size:1.1rem;padding:12px}
.pc .feld{display:grid;gap:10px;padding:14px;border-radius:20px;background:var(--card2);border:2px solid var(--line)}
.pc .feld .v{white-space:pre-wrap}
.pc .go{border:none;border-radius:20px;padding:17px;font-weight:900;font-size:1.15rem;cursor:pointer;width:100%;text-align:center;text-decoration:none;display:block;background:var(--lime);color:#111;box-shadow:0 6px 0 #7fa61c}
.pc .go:active{transform:translateY(3px);box-shadow:0 3px 0 #7fa61c}
.pc .go:disabled{opacity:.4;cursor:not-allowed}
.pc .go.pink{background:var(--pink);color:#fff;box-shadow:0 6px 0 #a3238a}
.pc .go.leise{background:var(--card2);color:var(--txt);border:2px solid var(--line);box-shadow:none;font-size:1rem;padding:13px}
.pc .zwei{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.pc .plat{display:grid;gap:10px;padding:14px;border-radius:22px;background:var(--card2);border:2px solid var(--line)}
.pc .plat.top{border-color:var(--lime);background:linear-gradient(160deg,rgba(198,255,61,.18),var(--card2) 60%)}
.pc .plat .kopf{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap}
.pc .plat .preis{font-size:2rem;font-weight:900;color:var(--lime);letter-spacing:-.02em}
.pc .plat .badge{background:var(--lime);color:#111;border-radius:999px;padding:3px 10px;font-size:.75rem;font-weight:900}
.pc .m{color:var(--mut);font-size:.88rem}
.pc .warn{border-radius:18px;padding:12px 14px;background:rgba(255,79,79,.15);border:2px solid rgba(255,79,79,.6);font-size:.92rem}
.pc .hist{display:grid;gap:8px}
.pc .hist .it{display:grid;grid-template-columns:56px 1fr auto;gap:10px;align-items:center;padding:8px;border-radius:18px;background:var(--card2);border:2px solid var(--line);cursor:pointer}
.pc .hist img,.pc .hist .ph{width:56px;height:56px;border-radius:14px;object-fit:cover;background:var(--line);display:grid;place-items:center;font-size:1.6rem}
.pc .hist .t{font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pc .hist .p{font-weight:900;color:var(--lime)}
.pc .hist .del{border:none;background:transparent;cursor:pointer;font-size:1.1rem;color:var(--mut)}
.pc .fuss{color:var(--mut);font-size:.78rem;text-align:center}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const e = (t, c, x) => { const n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; };
  const btn = (c, x, fn) => { const b = e('button', c, x); b.type = 'button'; if (fn) b.addEventListener('click', fn); return b; };
  const eur = v => (Math.round((+v || 0) * 100) / 100).toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});
  const zahl = v => +String(v || '').replace(',', '.') || 0;
  const lj = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || 'null') || d; } catch (x) { return d; } };
  const ls = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (x) { return false; } };
  const q = s => encodeURIComponent(String(s || '').trim());
  const datum = t => new Intl.DateTimeFormat('de-DE', {timeZone: 'Europe/Berlin', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(t));

  /* Plattformen: Vergleich, Einstellen und „Meine Anzeigen“ – die Links öffnen das eigene, eingeloggte Konto (am Handy direkt die App) */
  const P = {
    vinted: {l: 'Vinted', e: '🟢', fee: 0, such: n => 'https://www.vinted.de/catalog?search_text=' + q(n) + '&order=newest_first', neu: 'https://www.vinted.de/items/new', meine: 'https://www.vinted.de/my_orders/sold', hint: 'Angebote ansehen'},
    ebay: {l: 'eBay', e: '🔵', fee: 0, such: n => 'https://www.ebay.de/sch/i.html?_nkw=' + q(n) + '&LH_Sold=1&LH_Complete=1&_sop=13', neu: 'https://www.ebay.de/sl/sell', meine: 'https://www.ebay.de/sh/lst/active', hint: 'Verkaufte ansehen'},
    kleinanzeigen: {l: 'Kleinanzeigen', e: '🟠', fee: 0, such: n => 'https://www.kleinanzeigen.de/s-' + q(String(n || '').toLowerCase().replace(/\s+/g, '-')) + '/k0', neu: 'https://www.kleinanzeigen.de/p-anzeige-aufgeben.html', meine: 'https://www.kleinanzeigen.de/m-meine-anzeigen.html', hint: 'Angebote ansehen'},
    cardmarket: {l: 'Cardmarket', e: '🟣', fee: 5, such: n => 'https://www.cardmarket.com/de/Pokemon/Products/Search?searchString=' + q(n), neu: 'https://www.cardmarket.com/de/Pokemon/Stock/Offers/Singles', meine: 'https://www.cardmarket.com/de/Pokemon/Stock/Offers/Singles', hint: 'Preise ansehen'}
  };
  const TEAM = {Manu: {vinted: 'kingwhizz', cardmarket: 'KingWhiizZ'}, Melly: {}, Amelie: {}};

  /* Zustands-Prüfung je Kategorie (Karten: Cardmarket-Skala, Rest: Vinted-Skala; der schlechteste Punkt zählt) */
  const KS = ['Mint (M)', 'Near Mint (NM)', 'Excellent (EX)', 'Good (GD)', 'Light Played (LP)', 'Played (PL)', 'Poor (PO)'];
  const VS = ['Neu mit Etikett', 'Neu ohne Etikett', 'Sehr gut', 'Gut', 'Zufriedenstellend'];
  const KAT = {
    karte: {l: 'Karte', e: '🃏', skala: KS, start: 1, kurz: ['M', 'NM', 'EX', 'GD', 'LP', 'PL', 'PO'], plat: ['cardmarket', 'ebay', 'vinted'],
      fotos: 'Vorne + hinten bei hellem Licht · alle 4 Ecken nah · Holo schräg gegen Licht',
      checks: [['perfekt', 'Unter Lupe makellos, perfekt mittig', 0, 'makellos'], ['kante1', 'Winzige weiße Pünktchen an Kanten/Ecken', 2, 'minimale weiße Stellen an den Kanten'],
        ['kratz1', 'Feine Kratzer, nur im Gegenlicht', 2, 'feine Kratzer im Gegenlicht'], ['kante2', 'Deutlich weiße Kanten / Ecken bestoßen', 3, 'sichtbare Abnutzung an Kanten/Ecken'],
        ['kratz2', 'Kratzer sofort sichtbar', 4, 'sichtbare Kratzer'], ['knick1', 'Kleiner Knick oder Delle', 5, 'kleiner Knick'],
        ['knick2', 'Starker Knick, Riss, Wasserschaden, bemalt oder Rand rundum weiß', 6, 'starker Schaden']],
      extra: ['Holo/Reverse', '1. Edition', 'deutsch', 'englisch', 'gegradet (PSA/CGC)'],
      schutz: ['Ab ca. 25 € nur mit Tracking/versichert, Karte in Toploader + Hülle.', 'Vor dem Versand vorne + hinten fotografieren – gegen „falsche Karte“-Reklamationen.', 'Gegradete Karten: Zertifikatsnummer auf der PSA/CGC-Seite prüfen.']},
    spiel: {l: 'Spiel', e: '🎮', skala: VS, start: 2, plat: ['ebay', 'vinted', 'kleinanzeigen'],
      fotos: 'Hülle vorne + hinten · Disc/Modul-Unterseite im Licht · Anleitung',
      checks: [['ovp', 'Noch eingeschweißt', 0, 'originalverschweißt'], ['disc1', 'Disc: leichte Spuren, läuft', 3, 'Disc mit leichten Gebrauchsspuren'],
        ['disc2', 'Disc: tiefe Kratzer / nicht getestet', 4, 'Disc mit deutlichen Kratzern'], ['huelle1', 'Hülle: kleine Kratzer, Cover leicht blass', 3, 'Hülle mit leichten Gebrauchsspuren'],
        ['huelle2', 'Hülle kaputt/Ersatzhülle, Cover gerissen oder beschriftet', 4, 'Hülle beschädigt bzw. nicht original'], ['ohneanl', 'Anleitung fehlt', 3, 'ohne Anleitung']],
      extra: ['Anleitung dabei', 'getestet, läuft', 'PAL/deutsch', 'Spielstand gelöscht'],
      schutz: ['Disc-Unterseite vor dem Versand fotografieren – gegen „kam zerkratzt an“.', 'Checken, ob die richtige Disc in der Hülle liegt.', 'Retro-Module: Platine/Etikett prüfen, es gibt viele Nachdrucke.']},
    schuhe: {l: 'Schuhe', e: '👟', skala: VS, start: 1, plat: ['vinted', 'ebay', 'kleinanzeigen'],
      fotos: 'Beide seitlich · Sohle · Zehenbox von oben · Innensohle · Etikett innen · Karton',
      checks: [['etikett', 'Mit Etikett, nie getragen', 0, 'neu mit Etikett'], ['getragen0', 'Nie draußen getragen', 1, 'ungetragen'],
        ['sohle1', 'Sohle leicht abgelaufen', 2, 'Sohle leicht abgelaufen'], ['knick', 'Knicke vorne (Creasing)', 3, 'leichte Knicke an der Zehenbox'],
        ['fleck', 'Flecken / Innensohle abgenutzt', 3, 'leichte Verfärbungen'], ['sohle2', 'Sohle stark abgelaufen, Kleber löst sich, Löcher', 4, 'deutliche Abnutzung']],
      extra: ['Originalkarton', 'Kaufbeleg', 'Ersatz-Schnürsenkel'],
      schutz: ['Etikett innen (Style-Code) fotografieren – beweist Echtheit.', 'Beim Kaufen: Style-Code googeln, Nähte und Logo vergleichen.', 'Schuhe im Karton + Versandkarton verschicken.']},
    kleidung: {l: 'Kleidung', e: '👕', skala: VS, start: 1, plat: ['vinted', 'kleinanzeigen', 'ebay'],
      fotos: 'Vorne + hinten flach hingelegt · Größen-Etikett · Mängel nah',
      checks: [['etikett', 'Noch mit Etikett', 0, 'neu mit Etikett'], ['nie', 'Nie getragen', 1, 'ungetragen'],
        ['pilling', 'Leichte Knötchen / leicht verwaschen', 3, 'leichte Gebrauchsspuren'], ['fleck', 'Fleck, ausgeblichen, Druck rissig', 4, 'Fleck bzw. Farbe verblasst'], ['loch', 'Loch / Reißverschluss kaputt', 4, 'kleiner Defekt']],
      extra: ['Original', 'Fan-Replika (kein Original)', 'Größe laut Etikett'],
      schutz: ['Replikas immer als „Replika/kein Original“ benennen.', 'Bei Markenware Etiketten fotografieren.']},
    schmuck: {l: 'Schmuck', e: '💍', skala: VS, start: 2, plat: ['vinted', 'ebay', 'kleinanzeigen'],
      fotos: 'Gesamt auf neutralem Untergrund · Stempel/Punze nah (925, 585, 750) · Verschluss',
      checks: [['neu', 'Neu, nie getragen, mit Etui', 1, 'neu und ungetragen'], ['kratz1', 'Leichte Tragespuren', 3, 'leichte Tragespuren'],
        ['angel', 'Angelaufen (vorher putzen!)', 3, 'leicht angelaufen'], ['defekt', 'Verschluss locker, Stein fehlt, verbogen', 4, 'kleiner Defekt']],
      extra: ['Punze/Stempel vorhanden', 'Echtheitszertifikat', 'Etui/Box'],
      schutz: ['Ohne Punze (925/585/750) NIE als Gold oder Silber verkaufen – nur „Modeschmuck“.', 'Teures nur versichert versenden, Gewicht in g fotografieren.', 'Goldwert pro Gramm vorher checken.']},
    technik: {l: 'Technik', e: '🔌', skala: VS, start: 2, plat: ['ebay', 'kleinanzeigen', 'vinted'],
      fotos: 'Gerät an (Bildschirm läuft) · vorne/hinten · Seriennummer · Zubehör',
      checks: [['ovp', 'Neu, originalverpackt', 0, 'originalverpackt'], ['kratz1', 'Leichte Kratzer, alles geht', 3, 'leichte Gebrauchsspuren'],
        ['kratz2', 'Deutliche Kratzer/Dellen', 4, 'deutliche Gebrauchsspuren'], ['defekt', 'Teilweise kaputt / Akku schwach', 4, 'Akku schwach bzw. Teildefekt']],
      extra: ['getestet, funktioniert', 'Zubehör komplett', 'Rechnung vorhanden'],
      schutz: ['Seriennummer vor dem Versand fotografieren.', 'Konten (Apple-ID, Google, Konsole) vorher abmelden und zurücksetzen.']},
    sonst: {l: 'Sonstiges', e: '📦', skala: VS, start: 2, plat: ['vinted', 'ebay', 'kleinanzeigen'],
      fotos: 'Gesamt · Details · Mängel nah',
      checks: [['ovp', 'Neu, originalverpackt', 0, 'originalverpackt'], ['leicht', 'Leichte Gebrauchsspuren', 3, 'leichte Gebrauchsspuren'], ['deutlich', 'Deutliche Spuren / Teildefekt', 4, 'deutliche Gebrauchsspuren']],
      extra: ['funktioniert', 'vollständig', 'OVP'], schutz: []}
  };
  const SCHUTZ_ALLE = ['Nur über die Plattform bezahlen lassen – nie PayPal „Freunde“, nie Links oder Codes von Käufern anklicken.', 'Verpacken kurz filmen (Artikel → Paket → Etikett) – Beweis gegen „Paket war leer“.'];

  const neu = () => ({id: Date.now(), kat: '', checks: [], extra: [], name: '', maengel: '', preise: {}, bild: ''});
  let S = Object.assign(neu(), lj('pc-s13', {})), fotos = [], schritt = lj('pc-step', 1), ansicht = 'check', ich = lj('pc-ich', '');
  const sp = () => { ls('pc-s13', S); ls('pc-step', schritt); };
  const root = document.getElementById('pc-root'); if (!root) return; root.className = 'pc';

  function zustand() { const K = KAT[S.kat]; if (!K) return null; const gew = K.checks.filter(c => S.checks.includes(c[0])); const st = gew.length ? Math.max(...gew.map(c => c[2])) : K.start;
    return {txt: K.skala[Math.min(st, K.skala.length - 1)], kurz: K.kurz ? K.kurz[st] : K.skala[Math.min(st, K.skala.length - 1)], punkte: gew.filter(c => c[2] > 0).map(c => c[3])}; }
  const plats = () => (KAT[S.kat] ? KAT[S.kat].plat : ['vinted', 'ebay', 'kleinanzeigen']);
  function titel() { const n = S.name.trim(); if (!n) return ''; const Z = zustand(); const t = n + (S.extra.length && S.kat === 'karte' ? ' ' + S.extra.filter(x => !/gegradet/.test(x)).join(' ') : '') + (Z ? ' – ' + Z.kurz : ''); return t.length > 80 ? t.slice(0, 79) + '…' : t; }
  function beschreibung() { const n = S.name.trim(); if (!n) return ''; const Z = zustand(); const m = S.maengel.trim();
    return ['Weitere Artikel in meinem Profil – gern kombinieren!', '', n + (Z ? ' im Zustand „' + Z.txt + '“.' : '.'),
      (Z && Z.punkte.length ? 'Zustand im Detail: ' + Z.punkte.join(', ') + '.' : 'Keine bekannten Mängel, siehe Fotos.') + (m ? ' ' + m.replace(/\.?$/, '.') : ''),
      S.extra.length ? 'Dabei/geprüft: ' + S.extra.join(', ') + '.' : null, '', 'Privatverkauf, daher keine Garantie oder Rücknahme. Versand schnell und sicher verpackt.'].filter(x => x !== null).join('\n'); }
  function empf(id) { const pr = zahl(S.preise[id]); if (!pr) return null; const start = Math.max(1, Math.ceil(pr * 1.05) - 0.01); return {pr, start, min: Math.round(pr * 0.9 * 10) / 10, netto: start * (1 - P[id].fee / 100)}; }
  const bester = () => plats().map(id => ({id, x: empf(id)})).filter(o => o.x).sort((a, b) => b.x.netto - a.x.netto)[0];

  async function verkleinern(f, max, qual) { try { const bm = await createImageBitmap(f); const s = Math.min(1, max / Math.max(bm.width, bm.height)); const c = document.createElement('canvas'); c.width = Math.round(bm.width * s); c.height = Math.round(bm.height * s); c.getContext('2d').drawImage(bm, 0, 0, c.width, c.height);
    const blob = await new Promise(r => c.toBlob(b => r(b || f), 'image/jpeg', qual)); return {blob, url: URL.createObjectURL(blob), data: max <= 200 ? c.toDataURL('image/jpeg', qual) : ''}; } catch (x) { return {blob: f, url: URL.createObjectURL(f), data: ''}; } }
  async function kopiere(t) { try { await navigator.clipboard.writeText(t); } catch (x) { const a = document.createElement('textarea'); a.value = t; document.body.append(a); a.select(); document.execCommand('copy'); a.remove(); } }
  const kBtn = (txt, wert, cls) => { const b = btn('go' + (cls ? ' ' + cls : ''), txt); b.addEventListener('click', async () => { await kopiere(wert); const o = b.textContent; b.textContent = '✅ Kopiert!'; setTimeout(() => { b.textContent = o; }, 1600); }); return b; };

  /* Verlauf (auf diesem Gerät gespeichert) */
  const H = () => lj('pc-verlauf', []);
  function merken() { if (!S.name.trim()) return; const b = bester(); const L = H().filter(x => x.id !== S.id);
    L.unshift({id: S.id, t: Date.now(), wer: ich, s: JSON.parse(JSON.stringify(S)), titel: titel(), preis: b ? b.x.start : 0, plat: b ? b.id : ''});
    let n = Math.min(L.length, 60); while (n > 0 && !ls('pc-verlauf', L.slice(0, n))) n--; }

  function kopf() {
    const t = e('div', 'top'); const lg = e('div', 'logo'); lg.append('💸 Preis', e('i', '', 'Check')); t.append(lg);
    if (ich) t.append(btn('pill', ansicht === 'verlauf' ? '✕ Zurück' : '🕘 Verlauf', () => { ansicht = ansicht === 'verlauf' ? 'check' : 'verlauf'; bau(); }));
    root.append(t);
    if (ich) { const h = e('div', 'hey'); h.append('Hey ' + ich + ' 👋 · '); const w = e('a', '', 'wechseln'); w.href = '#'; w.style.color = 'var(--cyan)'; w.addEventListener('click', ev => { ev.preventDefault(); ich = ''; ls('pc-ich', ''); bau(); }); h.append(w); root.append(h); }
  }
  function werBistDu() {
    const b = e('section', 'box'); b.append(e('h2', '', 'Wer bist du? 🙋'), e('div', 'sub', 'Damit die Knöpfe zu deinem eigenen Vinted- und eBay-Konto führen.'));
    Object.keys(TEAM).forEach(n => b.append(btn('go' + (n === 'Manu' ? '' : ' pink'), n, () => { ich = n; ls('pc-ich', n); bau(); })));
    root.append(b);
  }
  function leiste() {
    const L = [['📸', 'Foto'], ['🔍', 'Vergleich'], ['✍️', 'Text'], ['💰', 'Preis']]; const ok = [!!(S.kat && S.name.trim()), !!bester(), !!titel(), !!bester()];
    const s = e('div', 'steps'); L.forEach(([em, l], i) => { const b = btn((schritt === i + 1 ? 'an' : '') + (ok[i] ? ' ok' : '')); b.append(e('span', 'e', ok[i] && schritt !== i + 1 ? '✅' : em), e('span', '', (i + 1) + ' ' + l)); b.addEventListener('click', () => { schritt = i + 1; sp(); bau(); }); s.append(b); }); root.append(s);
  }
  function weiter(txt, ziel, aus) { const b = btn('go', txt, () => { schritt = ziel; if (ziel === 4) merken(); sp(); bau(); window.scrollTo && window.scrollTo({top: 0, behavior: 'smooth'}); }); b.disabled = !!aus; return b; }

  function s1() {
    const b = e('section', 'box'); b.append(e('h2', '', 'Was verkaufst du? 📸'));
    const cam = e('label', 'cam'); const fi = e('input'); fi.type = 'file'; fi.accept = 'image/*'; fi.multiple = true;
    cam.append(fi, e('span', 'e', '📸'), e('span', '', fotos.length ? 'Noch ein Foto' : 'Foto machen'));
    fi.addEventListener('change', async ev => { for (const f of [...(ev.target.files || [])].slice(0, 8 - fotos.length)) { fotos.push(await verkleinern(f, 1600, .9)); if (!S.bild) S.bild = (await verkleinern(f, 160, .7)).data; } sp(); bau(); });
    b.append(cam);
    if (fotos.length) { const g = e('div', 'fotos'); fotos.forEach((f, i) => { const d = e('div'); const im = e('img'); im.src = f.url; im.alt = 'Foto ' + (i + 1); d.append(im, btn('', '✕', () => { fotos.splice(i, 1); bau(); })); g.append(d); }); b.append(g); }
    const ni = e('input'); ni.placeholder = 'z. B. Glurak 4/102 oder Nike Air Max 90'; ni.value = S.name; ni.autocomplete = 'off'; ni.addEventListener('change', () => { S.name = ni.value; sp(); bau(); }); b.append(e('div', 'lbl', 'Wie heißt es?'), ni);
    const k = e('div', 'kats'); Object.entries(KAT).forEach(([id, K]) => { const x = btn(); x.setAttribute('aria-pressed', String(S.kat === id)); x.append(e('span', 'e', K.e), e('span', '', K.l)); x.addEventListener('click', () => { if (S.kat !== id) { S.checks = []; S.extra = []; } S.kat = id; sp(); bau(); }); k.append(x); });
    b.append(e('div', 'lbl', 'Was ist es?'), k);
    const K = KAT[S.kat];
    if (K) {
      b.append(e('div', 'm', '📷 Mach diese Fotos: ' + K.fotos));
      b.append(e('div', 'lbl', 'Wie fit ist das Teil? Tipp an, was stimmt 👇'));
      const c = e('div', 'chk'); K.checks.forEach(([id, txt]) => { const on = S.checks.includes(id); const x = btn(); x.setAttribute('aria-pressed', String(on)); x.append(e('span', 'x', on ? '✅' : '⬜'), e('span', '', txt)); x.addEventListener('click', () => { S.checks = on ? S.checks.filter(y => y !== id) : S.checks.concat(id); sp(); bau(); }); c.append(x); }); b.append(c);
      const Z = zustand(); const n = e('div', 'note'); n.append(e('span', '', 'Zustand'), e('b', '', Z.txt)); b.append(n);
      if (!S.checks.length) b.append(e('div', 'm', 'Nichts angetippt = ' + K.skala[K.start] + '. Lieber streng sein – zu gut bewertet = Rückgabe.'));
      const t = e('div', 'tags'); K.extra.forEach(x => { const y = btn('', x); y.setAttribute('aria-pressed', String(S.extra.includes(x))); y.addEventListener('click', () => { S.extra = S.extra.includes(x) ? S.extra.filter(z => z !== x) : S.extra.concat(x); sp(); bau(); }); t.append(y); }); b.append(e('div', 'lbl', 'Dabei / geprüft'), t);
      const mi = e('textarea'); mi.placeholder = 'Sonst noch was kaputt? (optional)'; mi.value = S.maengel; mi.addEventListener('change', () => { S.maengel = mi.value; sp(); }); b.append(mi);
      const d = e('details'); d.append(e('summary', '', '🛡️ So zieht dich keiner ab')); const ul = e('ul'); K.schutz.concat(SCHUTZ_ALLE).forEach(x => ul.append(e('li', '', x))); d.append(ul); b.append(d);
    }
    b.append(weiter('Weiter zum Vergleich 👉', 2, !(S.kat && S.name.trim())));
    root.append(b);
  }
  function s2() {
    const b = e('section', 'box'); b.append(e('h2', '', 'Was zahlen andere? 🔍'), e('div', 'sub', 'Link antippen → letzten echten Verkaufspreis eintippen.'));
    plats().forEach(id => { const p = P[id]; const r = e('div', 'row'); const l = e('div'); l.append(e('b', '', p.e + ' ' + p.l), e('br')); const a = e('a', '', '↗ ' + p.hint); a.href = p.such(S.name); a.target = '_blank'; a.rel = 'noopener'; l.append(a);
      const i = e('input'); i.inputMode = 'decimal'; i.placeholder = '€'; i.value = S.preise[id] || ''; i.addEventListener('change', () => { S.preise[id] = i.value; sp(); bau(); }); r.append(l, i); b.append(r); });
    b.append(weiter('Weiter zum Text 👉', 3, !bester())); if (!bester()) b.append(e('div', 'm', 'Mindestens einen Preis eintragen.'));
    root.append(b);
  }
  function s3() {
    const b = e('section', 'box'); b.append(e('h2', '', 'Dein Text ist fertig ✍️'), e('div', 'sub', 'Einfach kopieren und einfügen.'));
    const T = titel(), B = beschreibung(); const f1 = e('div', 'feld'); f1.append(e('div', 'lbl', 'Titel'), e('div', 'v', T), kBtn('📋 Titel kopieren', T)); const f2 = e('div', 'feld'); f2.append(e('div', 'lbl', 'Beschreibung'), e('div', 'v', B), kBtn('📋 Beschreibung kopieren', B)); b.append(f1, f2);
    b.append(weiter('Weiter zum Preis 👉', 4)); root.append(b);
  }
  function s4() {
    const b = e('section', 'box'); b.append(e('h2', '', 'So viel kannst du verlangen 💰')); const best = bester(); const T = titel(); const konto = TEAM[ich] || {};
    if (!best) { b.append(e('div', 'warn', 'Noch kein Preis – geh zu Schritt 2 🔍')); root.append(b); return; }
    plats().forEach(id => { const p = P[id], x = empf(id); const d = e('div', 'plat' + (best.id === id ? ' top' : '')); const k = e('div', 'kopf'); k.append(e('b', '', p.e + ' ' + p.l));
      if (!x) { k.append(e('span', 'm', 'kein Preis')); d.append(k); b.append(d); return; }
      if (best.id === id) k.append(e('span', 'badge', '🏆 BESTE WAHL')); k.append(e('span', 'preis', eur(x.start))); d.append(k);
      d.append(e('div', 'm', 'Zuletzt verkauft für ' + eur(x.pr) + ' · nie unter ' + eur(x.min) + (p.fee ? ' · ' + p.fee + ' % Gebühr' : '')));
      const z = e('div', 'zwei'); z.append(kBtn('📋 Preis', String(x.start.toFixed(2)).replace('.', ','), 'leise'));
      const a = e('a', 'go' + (best.id === id ? '' : ' leise'), 'Einstellen' + (konto[id] ? ' als ' + konto[id] : '') + ' ↗'); a.href = p.neu; a.target = '_blank'; a.rel = 'noopener'; a.addEventListener('click', () => { if (T) kopiere(T); merken(); }); z.append(a); d.append(z); b.append(d); });
    b.append(e('div', 'm', '👉 „Einstellen“ öffnet dein Konto (am Handy direkt die App) und kopiert den Titel. Preis = letzter Verkauf + 5 % zum Verhandeln.'));
    b.append(btn('go pink', '🆕 Nächstes Teil', () => { merken(); S = neu(); fotos = []; schritt = 1; sp(); bau(); window.scrollTo && window.scrollTo({top: 0, behavior: 'smooth'}); }));
    root.append(b);
  }
  function verlauf() {
    const b = e('section', 'box'); b.append(e('h2', '', 'Dein Verlauf 🕘'), e('div', 'sub', 'Antippen = wieder öffnen. Gespeichert auf diesem Gerät.'));
    const L = H(); if (!L.length) b.append(e('div', 'm', 'Noch nichts gecheckt.'));
    const l = e('div', 'hist'); L.forEach(x => { const it = e('div', 'it'); it.setAttribute('role', 'button'); it.tabIndex = 0; const im = x.s.bild ? Object.assign(e('img'), {src: x.s.bild, alt: ''}) : e('div', 'ph', (KAT[x.s.kat] || KAT.sonst).e);
      const m = e('div'); m.style.minWidth = '0'; m.append(e('div', 't', x.titel || x.s.name), e('div', 'm', datum(x.t) + (x.wer ? ' · ' + x.wer : '') + (x.plat ? ' · ' + P[x.plat].l : '')));
      const r = e('div'); r.style.textAlign = 'right'; r.append(e('div', 'p', x.preis ? eur(x.preis) : '–'));
      const del = btn('del', '🗑', ev => { ev.stopPropagation(); ls('pc-verlauf', H().filter(y => y.id !== x.id)); bau(); }); del.title = 'Löschen'; r.append(del);
      it.append(im, m, r); const auf = () => { S = Object.assign(neu(), x.s); fotos = []; schritt = 4; ansicht = 'check'; sp(); bau(); }; it.addEventListener('click', auf); it.addEventListener('keydown', ev => { if (ev.key === 'Enter') auf(); }); l.append(it); });
    b.append(l);
    const k = e('div', 'zwei'); ['vinted', 'ebay', 'kleinanzeigen', 'cardmarket'].forEach(id => { const a = e('a', 'go leise', P[id].e + ' Meine ' + P[id].l); a.href = P[id].meine; a.target = '_blank'; a.rel = 'noopener'; k.append(a); }); b.append(e('div', 'lbl', 'Meine Konten'), k);
    root.append(b);
  }

  function bau() {
    root.replaceChildren(); kopf();
    if (!ich) werBistDu();
    else if (ansicht === 'verlauf') verlauf();
    else { leiste(); [s1, s2, s3, s4][Math.min(Math.max(schritt, 1), 4) - 1](); }
    root.append(e('div', 'fuss', '© 2026 NOXRIFT · Alle Rechte vorbehalten · nur fürs NoxRift-Team'));
    if (window.dash) { const a = e('a', 'go leise', '📲 App fürs Handy'); a.href = 'https://riftora-app.github.io/preischeck/'; a.target = '_blank'; a.rel = 'noopener'; root.append(a); }
  }

  /* Zugang nur fürs Team: Code wird nur als Prüfsumme gespeichert */
  const HASH = 'abb413b3292845daf4d0c821a9bfe9ef3df947cc24db886d46813b12d6bb2035';
  async function pruef(c) { const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('noxrift:' + c.trim())); return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('') === HASH; }
  function sperre() {
    root.replaceChildren(); const t = e('div', 'top'); const lg = e('div', 'logo'); lg.append('🔒 Preis', e('i', '', 'Check')); t.append(lg); root.append(t);
    const c = e('section', 'box'); c.append(e('h2', '', 'Nur fürs Team 🤫'), e('div', 'sub', 'Gib den Zugangscode ein.'));
    const i = e('input'); i.type = 'password'; i.inputMode = 'numeric'; i.autocomplete = 'off'; i.placeholder = 'Zugangscode';
    const m = e('div'); const los = async () => { if (await pruef(i.value)) { ls('pc-zugang', HASH); bau(); } else m.replaceChildren(e('div', 'warn', 'Code falsch 😬')); };
    i.addEventListener('keydown', ev => { if (ev.key === 'Enter') los(); }); c.append(i, btn('go', 'Rein da 🚀', los), m); root.append(c); }
  if (window.dash || lj('pc-zugang', '') === HASH) bau(); else sperre();
})();
