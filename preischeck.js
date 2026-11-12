/* © 2026 NOXRIFT – Manuel. Alle Rechte vorbehalten. Nutzung nur für das NoxRift-Team.
   Hustle-Radar v16 – Runde 1 (Fotos bleiben, Median-Preise, Gewinnrechner, Verlauf mit Status & Statistik …), Profi-Design, neues Logo, alles vorausgewählt (änderbar), Arbeitsmodus für NoxRift-Konten,
   neue Sammel-Kategorien: Magic, Star Wars Unlimited, Topps/Force Attax, Panini/Topps-Sticker & Alben.
   Eigene App (GitHub) und Bereich in NoxRift – dieselbe Datei. */
(function () {
  const css = `
.pc{--bg:#0b0d14;--s1:#12151f;--s2:#181c29;--line:#262c3d;--txt:#f4f6fb;--mut:#9aa3ba;--acc:#c6ff3d;--vio:#7c5cff;--pink:#ff4fd8;--cyan:#3df5ff;--ok:#2bf59a;color:var(--txt);font:16px/1.45 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;display:grid;gap:14px;max-width:540px;margin:0 auto;width:100%}
.pc *{box-sizing:border-box}
.pc button{font:inherit;color:inherit}
.pc a{color:inherit}
.pc .top{display:flex;align-items:center;justify-content:space-between;gap:10px}
.pc .brand{display:flex;align-items:center;gap:10px}
.pc .brand svg{width:40px;height:40px;flex:0 0 auto}
.pc .brand b{display:block;font-size:1.25rem;font-weight:800;letter-spacing:-.02em;line-height:1.1}
.pc .brand small{display:block;font-size:.7rem;font-weight:700;letter-spacing:.14em;color:var(--mut)}
.pc .pill{border:1px solid var(--line);background:var(--s1);border-radius:999px;padding:8px 14px;font-weight:700;cursor:pointer;font-size:.9rem;white-space:nowrap}
.pc .modus{display:grid;grid-template-columns:1fr 1fr;background:var(--s1);border:1px solid var(--line);border-radius:14px;padding:4px;gap:4px}
.pc .modus button{border:none;border-radius:10px;padding:10px 6px;background:transparent;font-weight:700;cursor:pointer;color:var(--mut);font-size:.92rem}
.pc .modus button[aria-pressed=true]{background:var(--s2);color:var(--txt);box-shadow:inset 0 0 0 1px var(--line)}
.pc .modus button[aria-pressed=true] .dot{background:var(--acc)}
.pc .dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--line);margin-right:6px;vertical-align:1px}
.pc .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
.pc .steps button{border:none;background:none;cursor:pointer;display:grid;gap:6px;padding:0;text-align:left}
.pc .steps .bar{height:5px;border-radius:9px;background:var(--line)}
.pc .steps .t{font-size:.75rem;font-weight:700;color:var(--mut)}
.pc .steps button.ok .bar{background:var(--ok)}
.pc .steps button.an .bar{background:linear-gradient(90deg,var(--vio),var(--pink))}
.pc .steps button.an .t{color:var(--txt)}
.pc .box{background:var(--s1);border:1px solid var(--line);border-radius:20px;padding:18px;display:grid;gap:14px;box-shadow:0 10px 30px rgba(0,0,0,.25)}
.pc h2{margin:0!important;font-size:1.35rem!important;line-height:1.2!important;font-weight:800!important;letter-spacing:-.02em;color:var(--txt)!important}
.pc .sub{color:var(--mut);font-size:.92rem;margin-top:-8px}
.pc .cam{display:grid;place-items:center;gap:6px;min-height:140px;border-radius:16px;border:1.5px dashed #3b4460;background:var(--s2);cursor:pointer;text-align:center;padding:16px;font-weight:700}
.pc .cam input{display:none}
.pc .cam svg{width:36px;height:36px;color:var(--acc)}
.pc .cam small{color:var(--mut);font-weight:500;font-size:.82rem}
.pc .fotos{display:grid;grid-template-columns:repeat(auto-fill,minmax(68px,1fr));gap:8px}
.pc .fotos div{position:relative;aspect-ratio:1;border-radius:12px;overflow:hidden;background:var(--line)}
.pc .fotos img{width:100%;height:100%;object-fit:cover;display:block}
.pc .fotos button{position:absolute;top:4px;right:4px;width:24px;height:24px;border-radius:50%;border:none;background:rgba(0,0,0,.7);cursor:pointer;font-size:.75rem}
.pc input,.pc textarea{font:inherit;width:100%;padding:13px 14px;border-radius:12px;border:1px solid var(--line);background:var(--bg);color:var(--txt)}
.pc input:focus,.pc textarea:focus{outline:2px solid var(--vio);outline-offset:1px}
.pc textarea{min-height:56px;resize:vertical}
.pc .lbl{font-size:.72rem;font-weight:800;letter-spacing:.12em;color:var(--mut);text-transform:uppercase;display:flex;justify-content:space-between;align-items:center;gap:8px}
.pc .lbl em{font-style:normal;letter-spacing:0;text-transform:none;font-weight:700;color:var(--acc);font-size:.75rem}
.pc .kats{display:grid;grid-template-columns:repeat(auto-fill,minmax(98px,1fr));gap:8px}
.pc .kats button{border:1px solid var(--line);background:var(--s2);border-radius:14px;padding:11px 6px;cursor:pointer;display:grid;gap:3px;justify-items:center;font-weight:700;font-size:.82rem;text-align:center}
.pc .kats button .e{font-size:1.45rem}
.pc .kats button[aria-pressed=true]{border-color:var(--acc);background:rgba(198,255,61,.1);box-shadow:inset 0 0 0 1px var(--acc)}
.pc .seg{display:flex;flex-wrap:wrap;gap:6px}
.pc .seg button{border:1px solid var(--line);background:var(--s2);border-radius:999px;padding:7px 12px;cursor:pointer;font-weight:700;font-size:.84rem}
.pc .seg button[aria-pressed=true]{border-color:var(--cyan);background:rgba(61,245,255,.12)}
.pc .chk{display:grid;gap:6px}
.pc .chk button{border:1px solid var(--line);background:var(--s2);border-radius:12px;padding:11px 12px;cursor:pointer;text-align:left;display:grid;grid-template-columns:22px 1fr;gap:10px;align-items:center;font-size:.92rem}
.pc .chk .x{width:22px;height:22px;border-radius:7px;border:1.5px solid #4a5370;display:grid;place-items:center;font-size:.8rem;font-weight:900}
.pc .chk button[aria-pressed=true]{border-color:var(--pink);background:rgba(255,79,216,.08)}
.pc .chk button[aria-pressed=true] .x{background:var(--pink);border-color:var(--pink);color:#fff}
.pc .note{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:13px 16px;border-radius:14px;background:rgba(43,245,154,.08);border:1px solid rgba(43,245,154,.45)}
.pc .note span{color:var(--mut);font-weight:700;font-size:.85rem}
.pc .note b{font-size:1.15rem}
.pc .tipp{border-radius:14px;padding:12px 14px;background:rgba(124,92,255,.1);border:1px solid rgba(124,92,255,.45);font-size:.9rem;display:grid;gap:6px}
.pc .tipp b{font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:#b9a8ff}
.pc .tipp ul,.pc details ul{margin:0;padding-left:1.1rem;display:grid;gap:4px}
.pc details{border:1px solid var(--line);border-radius:14px;padding:12px 14px;background:var(--s2)}
.pc details summary{cursor:pointer;font-weight:700}
.pc details ul{margin-top:8px;font-size:.88rem;color:var(--mut)}
.pc .row{display:grid;grid-template-columns:1fr 6.6rem;gap:10px;align-items:center;padding:12px 14px;border-radius:14px;background:var(--s2);border:1px solid var(--line)}
.pc .row b{font-size:1rem}
.pc .row a{display:inline-block;margin-top:3px;color:var(--cyan);font-weight:700;text-decoration:none;font-size:.82rem}
.pc .row input{text-align:right;font-weight:800;font-size:1.05rem;padding:11px}
.pc .feld{display:grid;gap:10px;padding:14px;border-radius:14px;background:var(--s2);border:1px solid var(--line)}
.pc .feld .v{white-space:pre-wrap;font-size:.95rem}
.pc .go{border:none;border-radius:14px;padding:15px;font-weight:800;font-size:1.02rem;cursor:pointer;width:100%;text-align:center;text-decoration:none;display:block;background:var(--acc);color:#0b0d14}
.pc .go:hover{filter:brightness(1.05)}
.pc .go:disabled{opacity:.35;cursor:not-allowed}
.pc .go.vio{background:linear-gradient(90deg,var(--vio),var(--pink));color:#fff}
.pc .go.leise{background:var(--s2);color:var(--txt);border:1px solid var(--line);font-size:.92rem;padding:12px}
.pc .zwei{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.pc .plat{display:grid;gap:10px;padding:14px;border-radius:16px;background:var(--s2);border:1px solid var(--line)}
.pc .plat.top{border-color:var(--acc);box-shadow:inset 0 0 0 1px var(--acc);background:linear-gradient(160deg,rgba(198,255,61,.1),var(--s2) 55%)}
.pc .plat .kopf{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap}
.pc .plat .preis{font-size:1.75rem;font-weight:900;color:var(--acc);letter-spacing:-.02em}
.pc .badge{background:var(--acc);color:#0b0d14;border-radius:999px;padding:3px 9px;font-size:.7rem;font-weight:900;letter-spacing:.04em}
.pc .m{color:var(--mut);font-size:.85rem}
.pc .warn{border-radius:14px;padding:12px 14px;background:rgba(255,79,79,.1);border:1px solid rgba(255,79,79,.5);font-size:.9rem}
.pc .arb{border-radius:14px;padding:12px 14px;background:rgba(61,245,255,.08);border:1px solid rgba(61,245,255,.45);font-size:.9rem}
.pc .hist{display:grid;gap:8px}
.pc .hist .it{display:grid;grid-template-columns:52px 1fr auto;gap:12px;align-items:center;padding:8px;border-radius:14px;background:var(--s2);border:1px solid var(--line);cursor:pointer}
.pc .hist img,.pc .hist .ph{width:52px;height:52px;border-radius:10px;object-fit:cover;background:var(--line);display:grid;place-items:center;font-size:1.4rem}
.pc .hist .t{font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pc .hist .p{font-weight:900;color:var(--acc)}
.pc .hist .del{border:none;background:transparent;cursor:pointer;color:var(--mut)}
.pc .fuss{color:var(--mut);font-size:.75rem;text-align:center;line-height:1.6}
.pc .fuss a{color:var(--cyan)}
.pc .gew{border-radius:12px;padding:9px 12px;background:rgba(43,245,154,.1);border:1px solid rgba(43,245,154,.45);font-size:.88rem;font-weight:700}
.pc .kz{display:grid;grid-template-columns:repeat(auto-fit,minmax(88px,1fr));gap:6px}
.pc .kz div{background:var(--s2);border:1px solid var(--line);border-radius:12px;padding:8px 10px}
.pc .kz b{display:block;font-size:1.1rem}.pc .kz span{font-size:.7rem;color:var(--mut)}
.pc .stat{margin-top:4px;border:1px solid var(--line);background:var(--bg);border-radius:999px;padding:2px 9px;font-size:.72rem;font-weight:700;cursor:pointer}
.toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,40px);opacity:0;background:#c6ff3d;color:#0b0d14;font:700 15px system-ui,sans-serif;padding:10px 18px;border-radius:999px;transition:.25s;z-index:9999;pointer-events:none}
.toast.an{opacity:1;transform:translate(-50%,0)}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const e = (t, c, x) => { const n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; };
  const btn = (c, x, fn) => { const b = e('button', c, x); b.type = 'button'; if (fn) b.addEventListener('click', fn); return b; };
  const svg = s => { const d = document.createElement('div'); d.innerHTML = s; return d.firstElementChild; };
  const LOGO = '<svg viewBox="0 0 512 512" aria-hidden="true"><defs><linearGradient id="pcbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7c5cff"/><stop offset="1" stop-color="#ff4fd8"/></linearGradient><linearGradient id="pcck" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d4ff4f"/><stop offset="1" stop-color="#3df5ff"/></linearGradient></defs><rect width="512" height="512" rx="116" fill="url(#pcbg)"/><path d="M150 128h132c12 0 23 5 31 13l84 84c17 17 17 45 0 62l-110 110c-17 17-45 17-62 0l-84-84c-8-8-13-19-13-31V150c0-12 10-22 22-22z" fill="#fff"/><circle cx="190" cy="186" r="22" fill="#7c5cff"/><path d="M202 288l46 46 92-104" fill="none" stroke="url(#pcck)" stroke-width="38" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const CAM = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="14" r="4"/></svg>';
  const eur = v => (Math.round((+v || 0) * 100) / 100).toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});
  const zahl = v => +String(v || '').replace(',', '.') || 0;
  const lj = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k) || 'null'); return v == null ? d : v; } catch (x) { return d; } };
  const ls = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (x) { return false; } };
  const q = s => encodeURIComponent(String(s || '').trim());
  const datum = t => new Intl.DateTimeFormat('de-DE', {timeZone: 'Europe/Berlin', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(t));

  /* Kartenspiele auf Cardmarket (Pfad in der URL) */
  const SPIELE = {pokemon: ['Pokémon', 'Pokemon'], magic: ['Magic', 'Magic'], swu: ['Star Wars Unlimited', 'StarWarsUnlimited'], yugioh: ['Yu-Gi-Oh!', 'YuGiOh'], lorcana: ['Lorcana', 'Lorcana'], onepiece: ['One Piece', 'OnePiece']};
  const cmSpiel = () => (SPIELE[S.spiel] || SPIELE.pokemon)[1];
  const P = {
    vinted: {l: 'Vinted', fee: 0, such: n => 'https://www.vinted.de/catalog?search_text=' + q(n) + '&order=newest_first', neu: 'https://www.vinted.de/items/new', meine: 'https://www.vinted.de/my_orders/sold', hint: 'Angebote ansehen'},
    ebay: {l: 'eBay', fee: 0, such: n => 'https://www.ebay.de/sch/i.html?_nkw=' + q(n) + '&LH_Sold=1&LH_Complete=1&_sop=13', neu: 'https://www.ebay.de/sl/sell', meine: 'https://www.ebay.de/sh/lst/active', hint: 'Verkaufte ansehen'},
    kleinanzeigen: {l: 'Kleinanzeigen', fee: 0, such: n => 'https://www.kleinanzeigen.de/s-' + q(String(n || '').toLowerCase().replace(/\s+/g, '-')) + '/k0', neu: 'https://www.kleinanzeigen.de/p-anzeige-aufgeben.html', meine: 'https://www.kleinanzeigen.de/m-meine-anzeigen.html', hint: 'Angebote ansehen'},
    cardmarket: {l: 'Cardmarket', fee: 5, such: n => 'https://www.cardmarket.com/de/' + cmSpiel() + '/Products/Search?searchString=' + q(n), get neu() { return 'https://www.cardmarket.com/de/' + cmSpiel(); }, meine: 'https://www.cardmarket.com/de/Pokemon/Stock/Offers/Singles', hint: 'Preise ansehen'}
  };
  const NOXRIFT = {vinted: 'kingwhizz', cardmarket: 'KingWhiizZ'};

  /* Zustand je Kategorie: Karten = Cardmarket-Skala, Rest = Vinted-Skala; der schlechteste Punkt zählt */
  const KS = ['Mint (M)', 'Near Mint (NM)', 'Excellent (EX)', 'Good (GD)', 'Light Played (LP)', 'Played (PL)', 'Poor (PO)'];
  const VS = ['Neu mit Etikett', 'Neu ohne Etikett', 'Sehr gut', 'Gut', 'Zufriedenstellend'];
  const KARTEN_CHECKS = [['perfekt', 'Unter Lupe makellos, perfekt mittig', 0, 'makellos'], ['kante1', 'Winzige weiße Pünktchen an Kanten/Ecken', 2, 'minimale weiße Stellen an den Kanten'],
    ['kratz1', 'Feine Kratzer, nur im Gegenlicht', 2, 'feine Kratzer im Gegenlicht'], ['kante2', 'Deutlich weiße Kanten / Ecken bestoßen', 3, 'sichtbare Abnutzung an Kanten/Ecken'],
    ['kratz2', 'Kratzer sofort sichtbar', 4, 'sichtbare Kratzer'], ['knick1', 'Kleiner Knick oder Delle', 5, 'kleiner Knick'], ['knick2', 'Starker Knick, Riss, Wasserschaden, bemalt oder Rand rundum weiß', 6, 'starker Schaden']];
  const KARTEN_SCHUTZ = ['Ab ca. 25 € nur mit Tracking/versichert, Karte in Toploader + Hülle.', 'Vor dem Versand vorne + hinten fotografieren – gegen „falsche Karte“-Reklamationen.', 'Gegradete Karten: Zertifikatsnummer auf der PSA/CGC-Seite prüfen.'];
  const KAT = {
    tcg: {l: 'Sammelkarten-Spiel', e: '🃏', skala: KS, start: 1, kurz: ['M', 'NM', 'EX', 'GD', 'LP', 'PL', 'PO'], plat: ['cardmarket', 'ebay', 'vinted'], spiele: true,
      fotos: 'Vorne + hinten bei hellem Licht · alle 4 Ecken nah · Foil/Holo schräg gegen Licht', checks: KARTEN_CHECKS,
      extra: ['Foil/Holo', '1. Edition', 'deutsch', 'englisch', 'gegradet (PSA/CGC)'], schutz: KARTEN_SCHUTZ,
      tipps: ['Einzelkarten ab ca. 1 € einzeln auf Cardmarket – dort kaufen die meisten Spieler in Europa.', 'Alles unter 1 € als Paket („Bulk“, z. B. 100 Stück) auf eBay oder Kleinanzeigen.', 'Wertvolle Karten (ab ca. 20 €) einzeln mit eigenem Foto auf eBay – oft mehr als auf Cardmarket.']},
    topps: {l: 'Topps / Force Attax', e: '⭐', skala: KS, start: 1, kurz: ['M', 'NM', 'EX', 'GD', 'LP', 'PL', 'PO'], plat: ['ebay', 'kleinanzeigen', 'vinted'],
      fotos: 'Vorne + hinten · Nummer und Seriennummer (z. B. /99) nah · Refractor schräg gegen Licht', checks: KARTEN_CHECKS,
      extra: ['Limited Edition (LE)', 'Refractor/Parallel', 'nummeriert (/99 …)', 'Autogramm', 'Komplettset'], schutz: KARTEN_SCHUTZ,
      tipps: ['Limited Editions, nummerierte Karten und Autogramme immer einzeln einstellen – die bringen das Geld.', 'Normale Karten als „aussuchen“-Angebot (eine Anzeige, viele Karten) auf eBay.', 'Komplette Sets bringen mehr als lose Karten – lohnt sich, Lücken zu füllen.']},
    sticker: {l: 'Sticker & Alben', e: '⚽', skala: VS, start: 2, plat: ['ebay', 'kleinanzeigen', 'vinted'],
      fotos: 'Cover · jede Seite kurz durchfotografieren · Glitzer-/Teamfotos nah · lose Sticker als Stapel',
      checks: [['leer', 'Album leer + Sticker lose (nicht eingeklebt)', 1, 'Album leer, Sticker lose'], ['voll', 'Album komplett eingeklebt', 2, 'komplett eingeklebt'],
        ['teil', 'Album nur teilweise beklebt', 3, 'teilweise beklebt'], ['cover', 'Cover geknickt/eingerissen', 3, 'Cover mit Gebrauchsspuren'], ['beschr', 'Bekritzelt, Seiten lose oder Wasserschaden', 4, 'deutliche Mängel']],
      extra: ['Panini', 'Topps', 'Glitzer-Sticker dabei', 'mit Update-Set', 'alte EM/WM (vor 2000)'],
      schutz: ['Einzelne Sticker in Plastikhülle + Pappe verschicken, nicht knicken lassen.', 'Fehlende Nummern genau in die Beschreibung schreiben – sonst gibt es Ärger.'],
      tipps: ['Leeres Album + Sticker lose ist deutlich mehr wert als ein eingeklebtes Album.', 'Doppelte und einzelne Sticker als „aussuchen“-Angebot auf eBay – Sammler suchen gezielt ihre Lücken.', 'Alte Alben (vor allem vor 2000) und Glitzer-/Spezial-Sticker einzeln prüfen.']},
    spiel: {l: 'Videospiel', e: '🎮', skala: VS, start: 2, plat: ['ebay', 'vinted', 'kleinanzeigen'],
      fotos: 'Hülle vorne + hinten · Disc/Modul-Unterseite im Licht · Anleitung',
      checks: [['ovp', 'Noch eingeschweißt', 0, 'originalverschweißt'], ['disc1', 'Disc: leichte Spuren, läuft', 3, 'Disc mit leichten Gebrauchsspuren'],
        ['disc2', 'Disc: tiefe Kratzer / nicht getestet', 4, 'Disc mit deutlichen Kratzern'], ['huelle1', 'Hülle: kleine Kratzer, Cover leicht blass', 3, 'Hülle mit leichten Gebrauchsspuren'],
        ['huelle2', 'Hülle kaputt/Ersatzhülle, Cover gerissen oder beschriftet', 4, 'Hülle beschädigt bzw. nicht original'], ['ohneanl', 'Anleitung fehlt', 3, 'ohne Anleitung']],
      extra: ['Anleitung dabei', 'getestet, läuft', 'PAL/deutsch', 'Spielstand gelöscht'],
      schutz: ['Disc-Unterseite vor dem Versand fotografieren – gegen „kam zerkratzt an“.', 'Checken, ob die richtige Disc in der Hülle liegt.', 'Retro-Module: Platine/Etikett prüfen, es gibt viele Nachdrucke.']},
    schuhe: {l: 'Schuhe', e: '👟', skala: VS, start: 1, plat: ['vinted', 'ebay', 'kleinanzeigen'],
      fotos: 'Beide seitlich · Sohle · Zehenbox von oben · Innensohle · Etikett innen · Karton',
      checks: [['etikett', 'Mit Etikett, nie getragen', 0, 'neu mit Etikett'], ['getragen0', 'Nie draußen getragen', 1, 'ungetragen'], ['sohle1', 'Sohle leicht abgelaufen', 2, 'Sohle leicht abgelaufen'],
        ['knick', 'Knicke vorne (Creasing)', 3, 'leichte Knicke an der Zehenbox'], ['fleck', 'Flecken / Innensohle abgenutzt', 3, 'leichte Verfärbungen'], ['sohle2', 'Sohle stark abgelaufen, Kleber löst sich, Löcher', 4, 'deutliche Abnutzung']],
      extra: ['Originalkarton', 'Kaufbeleg', 'Ersatz-Schnürsenkel'],
      schutz: ['Etikett innen (Style-Code) fotografieren – beweist Echtheit.', 'Beim Kaufen: Style-Code googeln, Nähte und Logo vergleichen.', 'Schuhe im Karton + Versandkarton verschicken.']},
    kleidung: {l: 'Kleidung', e: '👕', skala: VS, start: 1, plat: ['vinted', 'kleinanzeigen', 'ebay'],
      fotos: 'Vorne + hinten flach hingelegt · Größen-Etikett · Mängel nah',
      checks: [['etikett', 'Noch mit Etikett', 0, 'neu mit Etikett'], ['nie', 'Nie getragen', 1, 'ungetragen'], ['pilling', 'Leichte Knötchen / leicht verwaschen', 3, 'leichte Gebrauchsspuren'],
        ['fleck', 'Fleck, ausgeblichen, Druck rissig', 4, 'Fleck bzw. Farbe verblasst'], ['loch', 'Loch / Reißverschluss kaputt', 4, 'kleiner Defekt']],
      extra: ['Original', 'Fan-Replika (kein Original)', 'Größe laut Etikett'], schutz: ['Replikas immer als „Replika/kein Original“ benennen.', 'Bei Markenware Etiketten fotografieren.']},
    schmuck: {l: 'Schmuck', e: '💍', skala: VS, start: 2, plat: ['vinted', 'ebay', 'kleinanzeigen'],
      fotos: 'Gesamt auf neutralem Untergrund · Stempel/Punze nah (925, 585, 750) · Verschluss',
      checks: [['neu', 'Neu, nie getragen, mit Etui', 1, 'neu und ungetragen'], ['kratz1', 'Leichte Tragespuren', 3, 'leichte Tragespuren'], ['angel', 'Angelaufen (vorher putzen!)', 3, 'leicht angelaufen'], ['defekt', 'Verschluss locker, Stein fehlt, verbogen', 4, 'kleiner Defekt']],
      extra: ['Punze/Stempel vorhanden', 'Echtheitszertifikat', 'Etui/Box'],
      schutz: ['Ohne Punze (925/585/750) NIE als Gold oder Silber verkaufen – nur „Modeschmuck“.', 'Teures nur versichert versenden, Gewicht in g fotografieren.', 'Goldwert pro Gramm vorher checken.']},
    technik: {l: 'Technik', e: '🔌', skala: VS, start: 2, plat: ['ebay', 'kleinanzeigen', 'vinted'],
      fotos: 'Gerät an (Bildschirm läuft) · vorne/hinten · Seriennummer · Zubehör',
      checks: [['ovp', 'Neu, originalverpackt', 0, 'originalverpackt'], ['kratz1', 'Leichte Kratzer, alles geht', 3, 'leichte Gebrauchsspuren'], ['kratz2', 'Deutliche Kratzer/Dellen', 4, 'deutliche Gebrauchsspuren'], ['defekt', 'Teilweise kaputt / Akku schwach', 4, 'Akku schwach bzw. Teildefekt']],
      extra: ['getestet, funktioniert', 'Zubehör komplett', 'Rechnung vorhanden'], schutz: ['Seriennummer vor dem Versand fotografieren.', 'Konten (Apple-ID, Google, Konsole) vorher abmelden und zurücksetzen.']},
    sonst: {l: 'Sonstiges', e: '📦', skala: VS, start: 2, plat: ['vinted', 'ebay', 'kleinanzeigen'], fotos: 'Gesamt · Details · Mängel nah',
      checks: [['ovp', 'Neu, originalverpackt', 0, 'originalverpackt'], ['leicht', 'Leichte Gebrauchsspuren', 3, 'leichte Gebrauchsspuren'], ['deutlich', 'Deutliche Spuren / Teildefekt', 4, 'deutliche Gebrauchsspuren']],
      extra: ['funktioniert', 'vollständig', 'OVP'], schutz: []}
  };
  const SCHUTZ_ALLE = ['Nur über die Plattform bezahlen lassen – nie PayPal „Freunde“, nie Links oder Codes von Käufern anklicken.', 'Verpacken kurz filmen (Artikel → Paket → Etikett) – Beweis gegen „Paket war leer“.'];

  /* Automatische Erkennung aus dem Namen (alles bleibt änderbar) */
  const ERKENNUNG = [
    [/force attax|match attax|topps (chrome|star wars|now)|refractor|card trader|widevision/i, 'topps'],
    [/panini|sticker|stickeralbum|sammelalbum|\b(em|wm)\s?(19|20)\d\d|euro 20\d\d/i, 'sticker'],
    [/star wars unlimited|\bswu\b/i, 'tcg', 'swu'], [/magic|\bmtg\b|planeswalker/i, 'tcg', 'magic'], [/yu-?gi-?oh/i, 'tcg', 'yugioh'], [/lorcana/i, 'tcg', 'lorcana'], [/one piece card|op0\d/i, 'tcg', 'onepiece'],
    [/pok[eé]mon|glurak|pikachu|mewtu|evoli|turtok|bisasam|\b\d{1,3}\/\d{2,3}\b|\bvmax\b|\bex\b|\bgx\b/i, 'tcg', 'pokemon'],
    [/\bps[1-5]\b|playstation|xbox|switch|nintendo|\bds\b|3ds|gamecube|\bwii\b|game ?boy|\bpc spiel/i, 'spiel'],
    [/nike|adidas|jordan|air max|sneaker|schuh|yeezy|new balance|vans|converse|puma/i, 'schuhe'],
    [/\b(925|585|750|333)\b|ring|kette|armband|ohrring|schmuck|uhr\b/i, 'schmuck'],
    [/iphone|samsung|airpods|handy|konsole|controller|laptop|tablet|ipad|kopfhörer|kamera/i, 'technik'],
    [/trikot|hoodie|jacke|shirt|jeans|hose|pullover|kleid|mantel|cap\b|mütze/i, 'kleidung']];
  function erkenne(n) { for (const [re, k, sp] of ERKENNUNG) if (re.test(n)) return {k, sp}; return null; }

  const neu = () => ({id: Date.now(), kat: '', spiel: '', checks: [], extra: [], name: '', maengel: '', preise: {}, bild: '', auto: true, ek: '', versand: '', menge: 1, tempo: 'max', status: 'geprueft', vk: ''});
  let S = Object.assign(neu(), lj('pc-s15', {})), fotos = [], schritt = lj('pc-step', 1), ansicht = 'check', modus = lj('pc-modus2', 'arbeit');
  const arbeit = () => modus === 'arbeit';
  const sp = () => { ls('pc-s15', S); ls('pc-step', schritt); };
  const root = document.getElementById('pc-root'); if (!root) return; root.className = 'pc';

  function zustand() { const K = KAT[S.kat]; if (!K) return null; const gew = K.checks.filter(c => S.checks.includes(c[0])); const st = gew.length ? Math.max(...gew.map(c => c[2])) : K.start;
    return {txt: K.skala[Math.min(st, K.skala.length - 1)], kurz: K.kurz ? K.kurz[st] : K.skala[Math.min(st, K.skala.length - 1)], punkte: gew.filter(c => c[2] > 0).map(c => c[3])}; }
  const plats = () => (KAT[S.kat] ? KAT[S.kat].plat : ['vinted', 'ebay', 'kleinanzeigen']);
  function titel() { const n = S.name.trim(); if (!n) return ''; const Z = zustand(); const K = KAT[S.kat] || {}; const m = Math.max(1, +S.menge || 1);
    const zusatz = K.kurz && S.extra.length ? ' ' + S.extra.filter(x => !/gegradet|Komplettset/.test(x)).join(' ') : '';
    const sp = K.spiele && S.spiel && !new RegExp(SPIELE[S.spiel][0].split(' ')[0], 'i').test(n) ? ' ' + SPIELE[S.spiel][0] : '';
    const t = (m > 1 ? m + 'x ' : '') + n + sp + zusatz + (Z ? ' – ' + Z.kurz : ''); return t.length > 80 ? t.slice(0, 79) + '…' : t; }
  function beschreibung(pf) { const n = S.name.trim(); if (!n) return ''; const Z = zustand(); const m = S.maengel.trim(); const anz = Math.max(1, +S.menge || 1);
    return ['Weitere Artikel in meinem Profil – gern kombinieren!', '', (anz > 1 ? anz + ' Stück: ' : '') + n + (Z ? ' im Zustand „' + Z.txt + '“.' : '.'),
      (Z && Z.punkte.length ? 'Zustand im Detail: ' + Z.punkte.join(', ') + '.' : 'Keine bekannten Mängel, siehe Fotos.') + (m ? ' ' + m.replace(/\.?$/, '.') : ''),
      S.extra.length ? 'Dabei/geprüft: ' + S.extra.join(', ') + '.' : null, '',
      pf === 'kleinanzeigen' ? 'Abholung oder Versand möglich (Versandkosten trägt der Käufer).' : 'Versand schnell und sicher verpackt.',
      'Privatverkauf, daher keine Garantie oder Rücknahme.', pf === 'vinted' && hashtags() ? '\n' + hashtags() : null].filter(x => x !== null).join('\n'); }
  function hashtags() { const K = KAT[S.kat] || {}; const w = S.name.toLowerCase().replace(/[^a-z0-9äöüß ]/g, ' ').split(/\s+/).filter(x => x.length > 2 && !/^\d+$/.test(x)).slice(0, 4);
    const b = {tcg: [(SPIELE[S.spiel] || ['karten'])[0].toLowerCase().replace(/[^a-z]/g, ''), 'sammelkarten', 'tcg'], topps: ['topps', 'starwars', 'sammelkarten'], sticker: ['panini', 'stickeralbum', 'sammeln'], spiel: ['videospiel', 'gaming'], schuhe: ['sneaker'], kleidung: ['fashion'], schmuck: ['schmuck'], technik: ['technik']}[S.kat] || [];
    return [...new Set(w.concat(b))].slice(0, 7).map(x => '#' + x).join(' '); }
  const werte = v => String(v || '').split(/[;\s/|]+|,(?=\s)/).map(x => +x.replace(',', '.')).filter(x => x > 0);
  const median = a => { const b = a.slice().sort((x, y) => x - y); const m = b.length >> 1; return b.length % 2 ? b[m] : (b[m - 1] + b[m]) / 2; };
  const TEMPO = {max: ['Maximal', 1.05], fair: ['Fair', 1], schnell: ['Schnell', 0.92]};
  const schoen = v => v < 5 ? Math.round(v * 2) / 2 - 0.01 : v < 50 ? Math.ceil(v) - 0.01 : Math.ceil(v / 5) * 5 - 0.01;
  function empf(id) { const w = werte(S.preise[id]); if (!w.length) return null; const pr = median(w); const f = (TEMPO[S.tempo] || TEMPO.max)[1];
    const start = Math.max(0.99, schoen(pr * f)); const n = Math.max(1, +S.menge || 1); const netto = start * (1 - P[id].fee / 100);
    const kosten = zahl(S.ek) + zahl(S.versand); return {pr, n: w.length, start, min: Math.round(pr * 0.9 * 10) / 10, netto, gewinn: netto * n - kosten, stueck: n > 1 ? start / n : 0}; }
  const bester = () => plats().map(id => ({id, x: empf(id)})).filter(o => o.x).sort((a, b) => b.x.netto - a.x.netto)[0];
  /* Fotos dauerhaft auf dem Gerät (IndexedDB) */
  const idb = () => new Promise((ok, no) => { try { const r = indexedDB.open('hustle-radar', 1); r.onupgradeneeded = () => r.result.createObjectStore('fotos'); r.onsuccess = () => ok(r.result); r.onerror = () => no(r.error); } catch (x) { no(x); } });
  async function fotoSpeichern() { try { const d = await idb(); d.transaction('fotos', 'readwrite').objectStore('fotos').put(fotos.map(f => f.blob), String(S.id)); } catch (x) {} }
  async function fotoLaden(id) { try { const d = await idb(); return await new Promise(ok => { const r = d.transaction('fotos').objectStore('fotos').get(String(id)); r.onsuccess = () => ok((r.result || []).map(b => ({blob: b, url: URL.createObjectURL(b)}))); r.onerror = () => ok([]); }); } catch (x) { return []; } }
  async function fotoLoeschen(id) { try { const d = await idb(); d.transaction('fotos', 'readwrite').objectStore('fotos').delete(String(id)); } catch (x) {} }
  function toast(t) { let el = document.getElementById('pc-toast'); if (!el) { el = e('div', 'toast'); el.id = 'pc-toast'; document.body.append(el); } el.textContent = t; el.classList.add('an'); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('an'), 1800); try { navigator.vibrate && navigator.vibrate(15); } catch (x) {} }
  async function verkleinern(f, max, qual) { try { const bm = await createImageBitmap(f); const s = Math.min(1, max / Math.max(bm.width, bm.height)); const c = document.createElement('canvas'); c.width = Math.round(bm.width * s); c.height = Math.round(bm.height * s); c.getContext('2d').drawImage(bm, 0, 0, c.width, c.height);
    const blob = await new Promise(r => c.toBlob(b => r(b || f), 'image/jpeg', qual)); return {blob, url: URL.createObjectURL(blob), data: max <= 200 ? c.toDataURL('image/jpeg', qual) : ''}; } catch (x) { return {blob: f, url: URL.createObjectURL(f), data: ''}; } }
  async function kopiere(t) { try { await navigator.clipboard.writeText(t); } catch (x) { const a = document.createElement('textarea'); a.value = t; document.body.append(a); a.select(); document.execCommand('copy'); a.remove(); } }
  const kBtn = (txt, wert, cls) => { const b = btn('go' + (cls ? ' ' + cls : ''), txt); b.addEventListener('click', async () => { await kopiere(typeof wert === 'function' ? wert() : wert); toast('✓ Kopiert'); const o = b.textContent; b.textContent = '✓ Kopiert'; setTimeout(() => { b.textContent = o; }, 1600); }); return b; };

  const H = () => lj('pc-verlauf', []);
  function merken() { if (!S.name.trim()) return; const b = bester(); const L = H(); const alt = L.find(x => x.id === S.id) || {}; const R = L.filter(x => x.id !== S.id);
    R.unshift({id: S.id, t: alt.t || Date.now(), job: arbeit(), s: JSON.parse(JSON.stringify(S)), titel: titel(), preis: b ? b.x.start : 0, plat: S.plat || (b ? b.id : ''), status: S.status || 'geprueft', vk: S.vk || ''});
    let n = Math.min(R.length, 80); while (n > 0 && !ls('pc-verlauf', R.slice(0, n))) n--; }
  function setze(id, feld, wert) { const L = H(); const x = L.find(y => y.id === id); if (!x) return; x[feld] = wert; x.s[feld] = wert; ls('pc-verlauf', L); }
  function kopf() {
    const t = e('div', 'top'); const br = e('div', 'brand'); br.append(svg(LOGO)); const nm = e('div'); nm.append(e('b', '', 'Hustle-Radar'), e('small', '', 'BY NOXRIFT')); br.append(nm); t.append(br);
    t.append(btn('pill', ansicht === 'verlauf' ? '← Zurück' : 'Verlauf', () => { ansicht = ansicht === 'verlauf' ? 'check' : 'verlauf'; bau(); }));
    root.append(t);
    const mo = e('div', 'modus'); [['arbeit', 'Arbeit für NoxRift'], ['privat', 'Privat']].forEach(([k, l]) => { const b = btn('', null, () => { modus = k; ls('pc-modus2', k); bau(); }); b.append(e('span', 'dot'), l); b.setAttribute('aria-pressed', String(modus === k)); mo.append(b); }); root.append(mo);
  }
  function leiste() {
    const L = ['Foto & Zustand', 'Vergleich', 'Text', 'Preis']; const ok = [!!(S.kat && S.name.trim()), !!bester(), !!titel(), !!bester()];
    const s = e('div', 'steps'); L.forEach((l, i) => { const b = btn((schritt === i + 1 ? 'an' : '') + (ok[i] ? ' ok' : '')); b.append(e('span', 'bar'), e('span', 't', (i + 1) + ' · ' + l)); b.addEventListener('click', () => { schritt = i + 1; sp(); bau(); }); s.append(b); }); root.append(s);
  }
  function weiter(txt, ziel, aus) { const b = btn('go', txt, () => { schritt = ziel; if (ziel === 4) merken(); sp(); bau(); window.scrollTo && window.scrollTo({top: 0, behavior: 'smooth'}); }); b.disabled = !!aus; return b; }

  function s1() {
    const b = e('section', 'box'); b.append(e('h2', '', 'Was verkaufst du?'), e('div', 'sub', 'Foto machen, Namen eintippen – den Rest wählt die App schon vor. Passt etwas nicht, einfach umtippen.'));
    const cam = e('label', 'cam'); const fi = e('input'); fi.type = 'file'; fi.accept = 'image/*'; fi.setAttribute('capture', 'environment');
    cam.append(fi, svg(CAM), e('span', '', fotos.length ? 'Noch ein Foto' : 'Foto machen'), e('small', '', KAT[S.kat] ? KAT[S.kat].fotos : 'Gerne mehrere Fotos – Mängel extra'));
    const neuFotos = async ev => { for (const f of [...(ev.target.files || [])].slice(0, 10 - fotos.length)) { fotos.push(await verkleinern(f, 1600, .9)); if (!S.bild) S.bild = (await verkleinern(f, 160, .7)).data; } fotoSpeichern(); sp(); bau(); };
    fi.addEventListener('change', neuFotos);
    const gal = e('label', 'go leise'); gal.style.cursor = 'pointer'; const gi = e('input'); gi.type = 'file'; gi.accept = 'image/*'; gi.multiple = true; gi.style.display = 'none'; gi.addEventListener('change', neuFotos); gal.append(gi, '🖼 Aus Galerie wählen (mehrere)');
    b.append(cam, gal);
    if (fotos.length) { const g = e('div', 'fotos'); fotos.forEach((f, i) => { const d = e('div'); const im = e('img'); im.src = f.url; im.alt = 'Foto ' + (i + 1); d.append(im, btn('', '✕', () => { fotos.splice(i, 1); fotoSpeichern(); if (!fotos.length) S.bild = ''; sp(); bau(); })); g.append(d); }); b.append(g); b.append(e('div', 'm', fotos.length + ' Foto' + (fotos.length > 1 ? 's' : '') + ' gespeichert – bleiben auch nach dem Schließen.')); }
    const ni = e('input'); ni.placeholder = 'z. B. Glurak 4/102, Force Attax LE7, Panini EM 2000'; ni.value = S.name; ni.autocomplete = 'off';
    ni.addEventListener('change', () => { S.name = ni.value; const r = erkenne(S.name); if (r && (S.auto || !S.kat)) { if (S.kat !== r.k) { S.checks = []; S.extra = []; } S.kat = r.k; if (r.sp) S.spiel = r.sp; S.auto = true; } else if (!S.kat) { S.kat = 'sonst'; S.auto = true; } if (S.kat === 'tcg' && !S.spiel) S.spiel = 'pokemon'; sp(); bau(); });
    const mz = e('div', 'zwei'); const mi1 = e('input'); mi1.inputMode = 'numeric'; mi1.placeholder = 'Stück'; mi1.value = S.menge > 1 ? S.menge : ''; mi1.addEventListener('change', () => { S.menge = Math.max(1, Math.floor(zahl(mi1.value)) || 1); sp(); bau(); });
    const ek = e('input'); ek.inputMode = 'decimal'; ek.placeholder = 'Einkauf € (optional)'; ek.value = S.ek; ek.addEventListener('change', () => { S.ek = ek.value; sp(); });
    mz.append(mi1, ek);
    b.append(e('div', 'lbl', 'Name'), ni, e('div', 'lbl', 'Menge · Einkaufspreis'), mz);
    ni.addEventListener('keydown', ev => { if (ev.key === 'Enter') ni.blur(); });
    const kl = e('div', 'lbl', 'Art'); if (S.kat && S.auto) kl.append(e('em', '', 'automatisch erkannt')); b.append(kl);
    const k = e('div', 'kats'); Object.entries(KAT).forEach(([id, K]) => { const x = btn(); x.setAttribute('aria-pressed', String(S.kat === id)); x.append(e('span', 'e', K.e), e('span', '', K.l)); x.addEventListener('click', () => { if (S.kat !== id) { S.checks = []; S.extra = []; } S.kat = id; S.auto = false; if (id === 'tcg' && !S.spiel) S.spiel = 'pokemon'; sp(); bau(); }); k.append(x); }); b.append(k);
    const K = KAT[S.kat];
    if (K) {
      if (K.spiele) { const g = e('div', 'seg'); Object.entries(SPIELE).forEach(([id, [l]]) => { const x = btn('', l, () => { S.spiel = id; sp(); bau(); }); x.setAttribute('aria-pressed', String(S.spiel === id)); g.append(x); }); b.append(e('div', 'lbl', 'Spiel'), g); }
      const zl = e('div', 'lbl', 'Zustand – tipp an, was zutrifft'); b.append(zl);
      const c = e('div', 'chk'); K.checks.forEach(([id, txt]) => { const on = S.checks.includes(id); const x = btn(); x.setAttribute('aria-pressed', String(on)); x.append(e('span', 'x', on ? '✓' : ''), e('span', '', txt)); x.addEventListener('click', () => { S.checks = on ? S.checks.filter(y => y !== id) : S.checks.concat(id); sp(); bau(); }); c.append(x); }); b.append(c);
      const Z = zustand(); const n = e('div', 'note'); n.append(e('span', '', S.checks.length ? 'Bewertung' : 'Vorauswahl'), e('b', '', Z.txt)); b.append(n);
      const t = e('div', 'seg'); K.extra.forEach(x => { const y = btn('', x); y.setAttribute('aria-pressed', String(S.extra.includes(x))); y.addEventListener('click', () => { S.extra = S.extra.includes(x) ? S.extra.filter(z => z !== x) : S.extra.concat(x); sp(); bau(); }); t.append(y); }); b.append(e('div', 'lbl', 'Dabei / Besonderheiten'), t);
      const mi = e('textarea'); mi.placeholder = 'Weitere Mängel (optional)'; mi.value = S.maengel; mi.addEventListener('change', () => { S.maengel = mi.value; sp(); }); b.append(mi);
      if (K.tipps) { const tp = e('div', 'tipp'); tp.append(e('b', '', 'So holst du am meisten raus')); const ul = e('ul'); K.tipps.forEach(x => ul.append(e('li', '', x))); tp.append(ul); b.append(tp); }
      const d = e('details'); d.append(e('summary', '', '🛡️ So zieht dich keiner ab')); const ul = e('ul'); K.schutz.concat(SCHUTZ_ALLE).forEach(x => ul.append(e('li', '', x))); d.append(ul); b.append(d);
    }
    b.append(weiter('Weiter zum Vergleich →', 2, !(S.kat && S.name.trim())));
    root.append(b);
  }
  function s2() {
    const b = e('section', 'box'); b.append(e('h2', '', 'Was zahlen andere?'), e('div', 'sub', 'Link öffnen, die letzten echten Verkaufspreise eintragen – gern mehrere mit Leerzeichen (z. B. „34 38 36“). Die App nimmt den Mittelwert (Median), Ausreißer zählen kaum.'));
    plats().forEach(id => { const p = P[id]; const r = e('div', 'row'); const l = e('div'); l.append(e('b', '', p.l), e('br')); const a = e('a', '', '↗ ' + p.hint); a.href = p.such(S.name); a.target = '_blank'; a.rel = 'noopener'; l.append(a);
      const w = werte(S.preise[id]); if (w.length > 1) l.append(e('div', 'm', 'Median ' + eur(median(w)) + ' aus ' + w.length));
      const i = e('input'); i.inputMode = 'decimal'; i.placeholder = '€'; i.value = S.preise[id] || ''; i.addEventListener('change', () => { S.preise[id] = i.value; sp(); bau(); }); r.append(l, i); b.append(r); });
    b.append(weiter('Weiter zum Text →', 3, !bester())); if (!bester()) b.append(e('div', 'm', 'Mindestens einen Preis eintragen.'));
    root.append(b);
  }
  let pfText = 'vinted';
  function s3() {
    const b = e('section', 'box'); b.append(e('h2', '', 'Dein Anzeigentext'), e('div', 'sub', 'Fertig formuliert – je Plattform passend. Nur noch kopieren.'));
    const T = titel(); const g = e('div', 'seg'); plats().filter(x => x !== 'cardmarket').forEach(id => { const x = btn('', P[id].l, () => { pfText = id; bau(); }); x.setAttribute('aria-pressed', String(pfText === id)); g.append(x); }); b.append(g);
    if (!plats().includes(pfText)) pfText = plats().find(x => x !== 'cardmarket') || 'vinted';
    const B = beschreibung(pfText);
    const f1 = e('div', 'feld'); const tl = e('div', 'lbl', 'Titel'); tl.append(e('em', '', T.length + '/80 Zeichen')); f1.append(tl, e('div', 'v', T), kBtn('Titel kopieren', T));
    const f2 = e('div', 'feld'); f2.append(e('div', 'lbl', 'Beschreibung · ' + P[pfText].l), e('div', 'v', B), kBtn('Beschreibung kopieren', B)); b.append(f1, f2);
    const best = bester(); b.append(kBtn('📋 Alles auf einmal kopieren', () => T + '\n\n' + B + (best ? '\n\nPreis: ' + eur(best.x.start) : ''), 'leise'));
    b.append(weiter('Weiter zum Preis →', 4)); root.append(b);
  }
  function s4() {
    const b = e('section', 'box'); b.append(e('h2', '', 'Preisempfehlung')); const best = bester(); const T = titel(); const konto = arbeit() ? NOXRIFT : {};
    if (!best) { b.append(e('div', 'warn', 'Noch kein Vergleichspreis – zurück zu Schritt 2.')); root.append(b); return; }
    const tg = e('div', 'modus'); tg.style.gridTemplateColumns = '1fr 1fr 1fr'; Object.entries(TEMPO).forEach(([k, [l]]) => { const x = btn('', null, () => { S.tempo = k; sp(); bau(); }); x.append(e('span', 'dot'), l); x.setAttribute('aria-pressed', String(S.tempo === k)); tg.append(x); }); b.append(tg);
    plats().forEach(id => { const p = P[id], x = empf(id); const d = e('div', 'plat' + (best.id === id ? ' top' : '')); const k = e('div', 'kopf'); k.append(e('b', '', p.l));
      if (!x) { k.append(e('span', 'm', 'kein Vergleichspreis')); d.append(k); b.append(d); return; }
      if (best.id === id) k.append(e('span', 'badge', 'BESTE WAHL')); k.append(e('span', 'preis', eur(x.start))); d.append(k);
      d.append(e('div', 'm', (x.n > 1 ? 'Median aus ' + x.n + ' Verkäufen: ' : 'Zuletzt verkauft für ') + eur(x.pr) + ' · nie unter ' + eur(x.min) + (p.fee ? ' · ' + p.fee + ' % Gebühr' : '') + (x.stueck ? ' · ' + eur(x.stueck) + ' pro Stück' : '')));
      if (zahl(S.ek) || zahl(S.versand)) d.append(e('div', x.gewinn >= 0 ? 'gew' : 'warn', (x.gewinn >= 0 ? '💰 Gewinn ca. ' : '⚠️ Verlust ca. ') + eur(Math.abs(x.gewinn)) + ' nach Einkauf' + (zahl(S.versand) ? ' und Versand' : '')));
      const z = e('div', 'zwei'); z.append(kBtn('Preis kopieren', String(x.start.toFixed(2)).replace('.', ','), 'leise'));
      const a = e('a', 'go' + (best.id === id ? '' : ' leise'), 'Einstellen' + (konto[id] ? ' als ' + konto[id] : (arbeit() ? ' (NoxRift)' : '')) + ' ↗'); a.href = p.neu; a.target = '_blank'; a.rel = 'noopener'; a.addEventListener('click', () => { if (T) kopiere(T); S.status = 'eingestellt'; S.plat = id; merken(); toast('Titel kopiert – jetzt einfügen'); }); z.append(a); d.append(z); b.append(d); });
    const vs = e('input'); vs.inputMode = 'decimal'; vs.placeholder = 'Versand zahlst du selbst? € (optional)'; vs.value = S.versand; vs.addEventListener('change', () => { S.versand = vs.value; sp(); bau(); }); b.append(vs);
    if (best.x.start >= 50) b.append(e('div', 'arb', best.x.start >= 150 && /tcg|topps/.test(S.kat) ? '💎 Hoher Wert: über Grading (PSA/CGC) nachdenken und nur versichert versenden.' : '📦 Ab 50 € nur versichert und mit Sendungsverfolgung versenden.'));
    if (arbeit()) { b.append(e('div', 'arb', 'Arbeitsmodus: Diese Anzeige ist für die NoxRift-Konten. Schick sie an Manu – oder stell sie direkt ein, wenn auf diesem Gerät das NoxRift-Konto angemeldet ist.')); b.append(btn('go vio', 'An NoxRift (Manu) schicken', schicken)); }
    b.append(e('div', 'm', '„Einstellen“ öffnet das Konto, das auf diesem Gerät angemeldet ist (am Handy direkt die App), kopiert den Titel und markiert den Artikel im Verlauf als „eingestellt“.'));
    b.append(btn('go leise', '+ Nächster Artikel', async () => { merken(); S = neu(); fotos = []; schritt = 1; sp(); bau(); window.scrollTo && window.scrollTo({top: 0, behavior: 'smooth'}); }));
    root.append(b);
  }
  async function schicken() { merken(); const best = bester(); const txt = ['📦 NOXRIFT-ANZEIGE', '', 'TITEL: ' + titel(), '', 'BESCHREIBUNG:', beschreibung(), '', 'PREIS: ' + (best ? eur(best.x.start) + ' auf ' + P[best.id].l + ' (nie unter ' + eur(best.x.min) + ')' : '–')].join('\n');
    await kopiere(txt); const files = fotos.map((f, i) => new File([f.blob], 'noxrift-' + (i + 1) + '.jpg', {type: 'image/jpeg'}));
    try { if (files.length && navigator.canShare && navigator.canShare({files})) { await navigator.share({files, text: txt}); return; } if (navigator.share) { await navigator.share({text: txt}); return; } } catch (x) { if (x && x.name === 'AbortError') return; }
    window.open('https://wa.me/?text=' + encodeURIComponent(txt), '_blank', 'noopener'); }
  let suche = '', filt = 'alle', weg = null;
  const STAT = {geprueft: '🔍 Geprüft', eingestellt: '📤 Eingestellt', verkauft: '✅ Verkauft'};
  function verlauf() {
    const b = e('section', 'box'); b.append(e('h2', '', 'Verlauf'), e('div', 'sub', 'Antippen öffnet den Artikel wieder. Gespeichert auf diesem Gerät.'));
    const A = H(); const vk = A.filter(x => x.status === 'verkauft'); const ums = vk.reduce((s, x) => s + (zahl(x.vk) || x.preis || 0), 0);
    const abw = vk.filter(x => zahl(x.vk) && x.preis).map(x => (zahl(x.vk) - x.preis) / x.preis * 100);
    const kz = e('div', 'kz'); [['Geprüft', A.length], ['Eingestellt', A.filter(x => x.status === 'eingestellt').length], ['Verkauft', vk.length], ['Umsatz', eur(ums)], ['Ø vs. Empfehlung', abw.length ? (abw.reduce((s, x) => s + x, 0) / abw.length >= 0 ? '+' : '') + Math.round(abw.reduce((s, x) => s + x, 0) / abw.length) + ' %' : '–']].forEach(([l, v]) => { const d = e('div'); d.append(e('b', '', String(v)), e('span', '', l)); kz.append(d); }); b.append(kz);
    const si = e('input'); si.placeholder = '🔎 Suchen …'; si.value = suche; si.addEventListener('input', () => { suche = si.value; zeige(); }); b.append(si);
    const fg = e('div', 'seg'); [['alle', 'Alle'], ['geprueft', 'Geprüft'], ['eingestellt', 'Eingestellt'], ['verkauft', 'Verkauft'], ['job', 'NoxRift'], ['privat', 'Privat']].forEach(([k, l]) => { const x = btn('', l, () => { filt = k; bau(); }); x.setAttribute('aria-pressed', String(filt === k)); fg.append(x); }); b.append(fg);
    const l = e('div', 'hist'); b.append(l);
    function zeige() { l.replaceChildren(); const q = suche.toLowerCase();
      const L = A.filter(x => (!q || (x.titel || x.s.name || '').toLowerCase().includes(q)) && (filt === 'alle' || (filt === 'job' ? x.job : filt === 'privat' ? !x.job : (x.status || 'geprueft') === filt)));
      if (!L.length) l.append(e('div', 'm', A.length ? 'Nichts gefunden.' : 'Noch nichts geprüft.'));
      L.forEach(x => { const it = e('div', 'it'); it.setAttribute('role', 'button'); it.tabIndex = 0; const im = x.s.bild ? Object.assign(e('img'), {src: x.s.bild, alt: ''}) : e('div', 'ph', (KAT[x.s.kat] || KAT.sonst).e);
        const m = e('div'); m.style.minWidth = '0'; m.append(e('div', 't', x.titel || x.s.name), e('div', 'm', datum(x.t) + (x.job ? ' · NoxRift' : ' · Privat') + (x.plat ? ' · ' + P[x.plat].l : '')));
        const st = btn('stat', STAT[x.status || 'geprueft'], ev => { ev.stopPropagation(); const n = {geprueft: 'eingestellt', eingestellt: 'verkauft', verkauft: 'geprueft'}[x.status || 'geprueft']; setze(x.id, 'status', n); if (n === 'verkauft') { const v = prompt('Für wie viel verkauft? (€)', String(x.preis || '').replace('.', ',')); if (v) setze(x.id, 'vk', v); } bau(); }); m.append(st);
        const r = e('div'); r.style.textAlign = 'right'; r.append(e('div', 'p', x.status === 'verkauft' && x.vk ? eur(zahl(x.vk)) : x.preis ? eur(x.preis) : '–'));
        const dup = btn('del', '⧉', ev => { ev.stopPropagation(); S = Object.assign(neu(), JSON.parse(JSON.stringify(x.s)), {id: Date.now(), status: 'geprueft', vk: '', plat: ''}); fotos = []; schritt = 1; ansicht = 'check'; sp(); bau(); toast('Kopie angelegt'); }); dup.title = 'Duplizieren';
        const del = btn('del', '🗑', ev => { ev.stopPropagation(); weg = x; ls('pc-verlauf', H().filter(y => y.id !== x.id)); bau(); }); del.title = 'Löschen'; r.append(dup, del);
        it.append(im, m, r); const auf = async () => { S = Object.assign(neu(), x.s); fotos = await fotoLaden(x.id); schritt = 4; ansicht = 'check'; sp(); bau(); }; it.addEventListener('click', auf); it.addEventListener('keydown', ev => { if (ev.key === 'Enter') auf(); }); l.append(it); }); }
    zeige();
    if (weg) { const u = btn('go leise', '↩ „' + (weg.titel || '').slice(0, 30) + '“ wiederherstellen', () => { const L = H(); L.unshift(weg); ls('pc-verlauf', L); weg = null; bau(); }); b.append(u); }
    const k = e('div', 'zwei'); ['vinted', 'ebay', 'kleinanzeigen', 'cardmarket'].forEach(id => { const a = e('a', 'go leise', 'Meine ' + P[id].l + ' ↗'); a.href = P[id].meine; a.target = '_blank'; a.rel = 'noopener'; k.append(a); }); b.append(e('div', 'lbl', 'Konten'), k);
    b.append(btn('go leise', '⬇ Verlauf als Tabelle (CSV)', () => { const z = [['Datum', 'Titel', 'Status', 'Plattform', 'Empfehlung', 'Verkauft für', 'Modus']].concat(H().map(x => [datum(x.t), x.titel, STAT[x.status || 'geprueft'].slice(2), x.plat ? P[x.plat].l : '', String(x.preis || '').replace('.', ','), x.vk || '', x.job ? 'NoxRift' : 'Privat']));
      const csv = '﻿' + z.map(r => r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(';')).join('\n'); const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], {type: 'text/csv'})); a.download = 'Hustle-Radar Verlauf.csv'; a.click(); toast('Tabelle gespeichert'); }));
    root.append(b);
  }
  function datenschutz() {
    const b = e('section', 'box'); b.append(e('h2', '', 'Datenschutz & Nutzung'), e('div', 'sub', 'Stand: 12.11.2026'));
    [['Wer steckt dahinter?', 'Hustle-Radar ist eine interne App von NOXRIFT (Manuel). Sie ist nur für das NoxRift-Team gedacht und mit einem Zugangscode geschützt.'],
     ['Welche Daten?', 'Fotos, Artikelnamen, Zustand, Preise und dein Verlauf werden nur auf deinem Gerät gespeichert (im Browser-Speicher). Es gibt keinen eigenen Server, kein Konto, keine Cookies, kein Tracking und keine Werbung. Fotos verlassen dein Gerät nur, wenn du selbst auf „Teilen“ oder „An NoxRift schicken“ tippst.'],
     ['Hosting', 'Die App liegt bei GitHub Pages (GitHub Inc.). Beim Aufruf verarbeitet GitHub technisch nötige Daten wie deine IP-Adresse, um die Seite auszuliefern. Mehr dazu in der Datenschutzerklärung von GitHub.'],
     ['Andere Seiten', 'Links zu Vinted, eBay, Kleinanzeigen und Cardmarket öffnen deren Seiten bzw. Apps. Dort gelten deren eigene Datenschutzregeln. Die App liest nichts aus deinen Konten aus.'],
     ['Arbeitsmodus', 'Im Modus „Arbeit für NoxRift“ sind Anzeigen für die NoxRift-Konten gedacht. Zugangsdaten werden nie in der App gespeichert. Im Modus „Privat“ kannst du die App für deine eigenen Sachen nutzen.'],
     ['Deine Rechte', 'Du kannst deinen Verlauf jederzeit löschen (🗑 im Verlauf) oder alles entfernen, indem du die Website-Daten im Browser löschst. Fragen und Auskunft (DSGVO): direkt an Manuel.'],
     ['Nicht weitergeben', 'Zugangscode, Link, App, Logo, Code und Design sind urheberrechtlich geschützt (© 2026 NOXRIFT, alle Rechte vorbehalten). Weitergeben, Kopieren, Nachbauen oder Verkaufen ist ohne schriftliche Erlaubnis von Manuel verboten. Die Nutzung ist persönlich und kann jederzeit beendet werden.']]
      .forEach(([t, x]) => { const d = e('div', 'feld'); d.append(e('div', 'lbl', t), e('div', 'v', x)); b.append(d); });
    b.append(btn('go leise', '← Zurück', () => { ansicht = 'check'; bau(); })); root.append(b);
  }

  function bau() {
    root.replaceChildren(); kopf();
    if (ansicht === 'verlauf') verlauf();
    else if (ansicht === 'datenschutz') datenschutz();
    else { leiste(); [s1, s2, s3, s4][Math.min(Math.max(schritt, 1), 4) - 1](); }
    const fu = e('div', 'fuss', '© 2026 NOXRIFT · Alle Rechte vorbehalten · nur fürs NoxRift-Team · '); const dl = e('a', '', 'Datenschutz & Nutzung'); dl.href = '#'; dl.addEventListener('click', ev => { ev.preventDefault(); ansicht = 'datenschutz'; bau(); window.scrollTo && window.scrollTo({top: 0}); }); fu.append(dl); root.append(fu);
    if (window.dash) { const a = e('a', 'go leise', 'App fürs Handy öffnen ↗'); a.href = 'https://riftora-app.github.io/preischeck/'; a.target = '_blank'; a.rel = 'noopener'; root.append(a); }
  }

  /* Zugang nur fürs Team: Code wird nur als Prüfsumme gespeichert */
  const HASH = 'abb413b3292845daf4d0c821a9bfe9ef3df947cc24db886d46813b12d6bb2035';
  async function pruef(c) { const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('noxrift:' + c.trim())); return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('') === HASH; }
  function sperre() {
    root.replaceChildren(); const t = e('div', 'top'); const br = e('div', 'brand'); br.append(svg(LOGO)); const nm = e('div'); nm.append(e('b', '', 'Hustle-Radar'), e('small', '', 'BY NOXRIFT')); br.append(nm); t.append(br); root.append(t);
    const c = e('section', 'box'); c.append(e('h2', '', 'Nur fürs Team'), e('div', 'sub', 'Bitte Zugangscode eingeben.'));
    const i = e('input'); i.type = 'password'; i.inputMode = 'numeric'; i.autocomplete = 'off'; i.placeholder = 'Zugangscode';
    const m = e('div'); const los = async () => { if (await pruef(i.value)) { ls('pc-zugang', HASH); bau(); } else m.replaceChildren(e('div', 'warn', 'Code falsch.')); };
    i.addEventListener('keydown', ev => { if (ev.key === 'Enter') los(); }); c.append(i, btn('go', 'Öffnen', los), m); root.append(c); }
  addEventListener('offline', () => toast('Offline – alles läuft weiter, Links brauchen Internet')); 
  if (window.dash || lj('pc-zugang', '') === HASH) { bau(); fotoLaden(S.id).then(f => { if (f.length && !fotos.length) { fotos = f; bau(); } }); } else sperre();
})();
