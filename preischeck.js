/* Preis-Check v5 – Foto rein, Ergebnis raus. Eigene App (GitHub) und Bereich in NoxRift – dieselbe Datei */
(function () {
  const css = `
.pc{--pb:#0b1020;--pp:#141b2f;--pp2:#1c2540;--pl:#2b3655;--pt:#eef2fb;--pm:#94a0bd;--pv:#7c6cf0;color:var(--pt);font:16px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;display:grid;gap:14px;max-width:640px;margin:0 auto;width:100%}
.pc *{box-sizing:border-box}
.pc .m{color:var(--pm);font-size:.88rem}
.pc .pc-top{display:flex;align-items:center;justify-content:space-between;gap:8px}
.pc .pc-top b{font-size:1.35rem}
.pc .pc-modus{display:flex;background:var(--pp2);border-radius:999px;padding:4px;border:1px solid var(--pl)}
.pc .pc-modus button{font:inherit;font-size:.85rem;font-weight:700;border:none;border-radius:999px;padding:7px 12px;background:transparent;color:var(--pm);cursor:pointer}
.pc .pc-modus button[aria-pressed=true]{background:var(--pv);color:#fff}
.pc .pc-cam{position:relative;display:grid;place-items:center;gap:6px;min-height:200px;border-radius:24px;border:2px dashed #4b5a85;background:radial-gradient(120% 120% at 50% 0%,rgba(124,108,240,.35),transparent 60%),var(--pp);cursor:pointer;text-align:center;padding:18px;overflow:hidden}
.pc .pc-cam input{display:none}
.pc .pc-cam .i{font-size:3.4rem;line-height:1}
.pc .pc-cam .t{font-size:1.35rem;font-weight:800}
.pc .pc-cam img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.28}
.pc .pc-cam > *:not(img){position:relative}
.pc .pc-or{display:flex;gap:8px}
.pc input{font:inherit;width:100%;padding:12px 14px;border-radius:14px;border:1px solid var(--pl);background:var(--pb);color:var(--pt)}
.pc input[type=number]{font-size:1.4rem;font-weight:800}
.pc .pc-go{font:inherit;font-weight:800;border:none;border-radius:14px;padding:12px 16px;background:var(--pv);color:#fff;cursor:pointer;white-space:nowrap}
.pc .pc-c{background:var(--pp);border:1px solid var(--pl);border-radius:20px;padding:16px;display:grid;gap:12px}
.pc .pc-lade{display:flex;align-items:center;gap:10px}
.pc .pc-spin{width:22px;height:22px;border-radius:50%;border:3px solid var(--pl);border-top-color:var(--pv);animation:pcd 0.9s linear infinite}
@keyframes pcd{to{transform:rotate(360deg)}}
.pc .pc-name{font-size:1.25rem;font-weight:800;line-height:1.25}
.pc .pc-tags{display:flex;flex-wrap:wrap;gap:6px}
.pc .pc-tag{font-size:.78rem;border-radius:999px;padding:3px 10px;font-weight:700;color:#fff}
.pc .pc-wert{display:grid;grid-template-columns:1fr auto;align-items:end;gap:6px;border-radius:16px;padding:14px;background:linear-gradient(135deg,#052e16,#14532d);border:1px solid #22c55e}
.pc .pc-wert .z{font-size:2.4rem;font-weight:900;line-height:1;color:#bbf7d0;font-variant-numeric:tabular-nums}
.pc .pc-wert .s{font-size:.82rem;color:#d1fae5}
.pc .pc-best{display:block;text-align:center;text-decoration:none;font-weight:800;font-size:1.05rem;border-radius:16px;padding:14px;background:#0064d2;color:#fff}
.pc .pc-best small{display:block;font-weight:400;font-size:.75rem;opacity:.85}
.pc .pc-mini{display:flex;flex-wrap:wrap;gap:6px}
.pc .pc-mini a{font-size:.8rem;font-weight:700;text-decoration:none;color:var(--pt);border:1px solid var(--pl);background:var(--pp2);border-radius:999px;padding:6px 11px}
.pc .pc-amp{border-radius:18px;padding:14px 16px;border:2px solid var(--ac);background:color-mix(in srgb,var(--ac) 16%,var(--pp));display:grid;gap:4px}
.pc .pc-amp .k{font-size:1.5rem;font-weight:900}
.pc .pc-hint{font-size:.85rem;color:var(--pm)}
.pc .pc-lbl{font-size:.82rem;font-weight:700;color:var(--pm);margin-bottom:-6px}
.pc .pc-2{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.pc details{border-top:1px solid var(--pl);padding-top:10px}
.pc details summary{cursor:pointer;font-weight:700;color:var(--pm)}
.pc .pc-row{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:8px}
.pc .pc-hist{display:grid;gap:6px}
.pc .pc-hist button{all:unset;cursor:pointer;display:grid;grid-template-columns:44px 1fr auto;gap:10px;align-items:center;padding:8px;border-radius:12px;background:var(--pp2)}
.pc .pc-hist img,.pc .pc-hist .ph{width:44px;height:44px;border-radius:10px;object-fit:cover;background:var(--pl);display:grid;place-items:center}
.pc .pc-hist .t{font-weight:700;font-size:.9rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pc .pc-hist b{font-variant-numeric:tabular-nums}
.pc .pc-warn{border-radius:14px;padding:10px 12px;background:rgba(239,68,68,.15);border:1px solid rgba(239,68,68,.5);font-size:.88rem}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const e = (t, c, x) => { const n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; };
  const eur = v => (Math.round((+v || 0) * 100) / 100).toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});
  const zahl = v => +String(v || '').replace(',', '.') || 0;
  const lj = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || 'null') || d; } catch (x) { return d; } };
  const ls = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (x) {} };

  /* Nur offizielle Seiten großer Marktplätze, Ankäufer und Preisdatenbanken */
  const Q = {
    ebay: ['eBay', 'https://www.ebay.de/sch/i.html?_nkw={q}&LH_Sold=1&LH_Complete=1&_sop=13'],
    cardmarket: ['Cardmarket', 'https://www.cardmarket.com/de/{g}/Products/Search?searchString={q}'],
    vinted: ['Vinted', 'https://www.vinted.de/catalog?search_text={q}'],
    kleinanzeigen: ['Kleinanzeigen', 'https://www.kleinanzeigen.de/s-{k}/k0'],
    pricecharting: ['PriceCharting', 'https://www.pricecharting.com/search-products?type=prices&q={q}'],
    rebuy: ['rebuy Ankauf', 'https://www.rebuy.de/verkaufen?q={q}'],
    rebuyk: ['rebuy Shop', 'https://www.rebuy.de/kaufen/suchen?q={q}'],
    momox: ['momox Ankauf', 'https://www.momox.de/'],
    zoxs: ['ZOXS Ankauf', 'https://www.zoxs.de/'],
    wirkaufens: ['wirkaufens', 'https://www.wirkaufens.de/'],
    idealo: ['idealo (neu)', 'https://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q={q}'],
    geizhals: ['Geizhals (neu)', 'https://geizhals.de/?fs={q}'],
    amazon: ['Amazon (neu)', 'https://www.amazon.de/s?k={q}'],
    tcgplayer: ['TCGplayer', 'https://www.tcgplayer.com/search/all/product?q={q}'],
    stockx: ['StockX', 'https://stockx.com/de-de/search?s={q}'],
    klekt: ['KLEKT', 'https://www.klekt.com/'],
    grailed: ['Grailed', 'https://www.grailed.com/shop?query={q}'],
    vestiaire: ['Vestiaire Collective', 'https://de.vestiairecollective.com/search/?q={q}'],
    chrono24: ['Chrono24', 'https://www.chrono24.de/search/index.htm?query={q}'],
    gold: ['Goldpreis heute', 'https://www.gold.de/kurse/goldpreis/'],
    silber: ['Silberpreis heute', 'https://www.gold.de/kurse/silberpreis/'],
    bricklink: ['BrickLink', 'https://www.bricklink.com/v2/search.page?q={q}'],
    brickeconomy: ['BrickEconomy', 'https://www.brickeconomy.com/search?query={q}'],
    discogs: ['Discogs', 'https://www.discogs.com/search/?q={q}&type=all'],
    numista: ['Numista', 'https://de.numista.com/catalogue/index.php?r={q}'],
    delcampe: ['Delcampe', 'https://www.delcampe.net/de/sammlerobjekte/search?term={q}'],
    backmarket: ['Back Market', 'https://www.backmarket.de/de-de/search?q={q}'],
    zvab: ['ZVAB', 'https://www.zvab.com/servlet/SearchResults?kn={q}']
  };
  /* Wo es am ehesten weggeht: Seite, Grund, Gebühr in % (für den Gewinn) */
  const WO = {
    karten: ['cardmarket', 'Einzelkarten verkaufen sich auf Cardmarket am schnellsten – dort kaufen die Sammler.', 5],
    graded: ['ebay', 'Gegradete Karten (PSA, CGC …) bringen auf eBay am meisten.', 13],
    sport: ['ebay', 'Sportkarten und Sticker gehen auf eBay am besten weg.', 13],
    spiele: ['ebay', 'Spiele gehen auf eBay am schnellsten zum fairen Preis weg – verkaufte Angebote zeigen den echten Wert.', 13],
    technik: ['ebay', 'Technik bringt auf eBay am meisten. Schnell und ohne Stress: Ankauf bei rebuy oder ZOXS.', 13],
    kleidung: ['vinted', 'Kleidung geht auf Vinted am schnellsten weg – ohne Verkaufsgebühr.', 0],
    sneaker: ['stockx', 'Gesuchte Sneaker bringen bei StockX am meisten, getragene eher auf Vinted oder eBay.', 10],
    luxus: ['vestiaire', 'Designer-Sachen erzielen auf Vestiaire Collective die besten Preise – mit Echtheitsprüfung.', 15],
    uhr: ['chrono24', 'Markenuhren verkaufen sich auf Chrono24 am besten.', 7],
    gold: ['gold', 'Gold und Silber: zuerst den Tagespreis prüfen, dann beim Ankäufer vor Ort oder auf eBay verkaufen.', 0],
    schmuck: ['vinted', 'Modeschmuck geht auf Vinted am schnellsten weg.', 0],
    lego: ['bricklink', 'LEGO-Sets und Teile bringen auf BrickLink am meisten, komplette Sets auch auf eBay.', 3],
    vinyl: ['discogs', 'Schallplatten verkaufen sich auf Discogs am besten.', 8],
    muenzen: ['ebay', 'Münzen: Wert auf Numista prüfen, verkaufen auf eBay.', 13],
    marken: ['delcampe', 'Briefmarken und Postkarten verkaufen sich auf Delcampe am besten.', 8],
    sammeln: ['ebay', 'Sammelsachen gehen auf eBay am besten weg – dort suchen die meisten Sammler.', 13],
    sportartikel: ['kleinanzeigen', 'Große Sportsachen am besten auf Kleinanzeigen – Abholung, keine Gebühr.', 0],
    medien: ['momox', 'Bücher, CDs und DVDs: Barcode bei momox scannen – schnellster Verkauf. Seltenes lieber auf eBay.', 0]
  };
  const MEHR = {
    karten: ['cardmarket', 'ebay', 'pricecharting', 'tcgplayer', 'vinted', 'kleinanzeigen'], graded: ['ebay', 'pricecharting', 'cardmarket', 'tcgplayer'],
    sport: ['ebay', 'cardmarket', 'vinted', 'kleinanzeigen', 'delcampe'], spiele: ['ebay', 'pricecharting', 'kleinanzeigen', 'vinted', 'rebuy', 'zoxs', 'momox', 'rebuyk'],
    technik: ['ebay', 'kleinanzeigen', 'rebuy', 'zoxs', 'wirkaufens', 'backmarket', 'idealo', 'geizhals'], kleidung: ['vinted', 'ebay', 'kleinanzeigen', 'grailed', 'vestiaire'],
    sneaker: ['stockx', 'klekt', 'ebay', 'vinted', 'grailed'], luxus: ['vestiaire', 'ebay', 'vinted', 'grailed'],
    uhr: ['chrono24', 'ebay', 'kleinanzeigen'], gold: ['gold', 'silber', 'ebay', 'kleinanzeigen'],
    schmuck: ['vinted', 'ebay', 'gold', 'kleinanzeigen'], lego: ['bricklink', 'brickeconomy', 'ebay', 'kleinanzeigen', 'vinted'],
    vinyl: ['discogs', 'ebay', 'kleinanzeigen', 'momox'], muenzen: ['numista', 'ebay', 'gold', 'silber'],
    marken: ['delcampe', 'ebay'], sammeln: ['ebay', 'pricecharting', 'kleinanzeigen', 'vinted'],
    sportartikel: ['kleinanzeigen', 'ebay', 'vinted', 'idealo'], medien: ['momox', 'rebuy', 'ebay', 'zvab', 'discogs', 'vinted']
  };
  const CMG = {pokemon: 'Pokemon', yugioh: 'YuGiOh', magic: 'Magic', onepiece: 'OnePiece', lorcana: 'Lorcana', dragonball: 'DragonBallSuper', digimon: 'Digimon', fleshandblood: 'FleshAndBlood'};
  const link = (id, q, g) => { const enc = encodeURIComponent(q || ''), ka = encodeURIComponent(String(q || '').toLowerCase().replace(/\s+/g, '-')); return Q[id][1].replace('{q}', enc).replace('{k}', ka).replace('{g}', g || 'Pokemon'); };
  /* genauere Sorte aus dem Namen erkennen */
  function sorte(t, kat) { t = String(t || '');
    if (/\b(psa|cgc|bgs|beckett)\s*\d/i.test(t)) return 'graded';
    if (/\blego\b/i.test(t)) return 'lego'; if (/vinyl|schallplatte|\blp\b|single 7/i.test(t)) return 'vinyl';
    if (/m[üu]nze|euro-?gedenk|taler|mark 19/i.test(t)) return 'muenzen'; if (/briefmarke|postkarte/i.test(t)) return 'marken';
    if (/rolex|omega|seiko|casio|tissot|swatch|armbanduhr|\buhr\b/i.test(t)) return 'uhr';
    if (/\b(333|375|585|750|925)\b|gold|silber/i.test(t) && !/pok|karte|edition/i.test(t)) return 'gold';
    if (/gucci|prada|louis vuitton|chanel|dior|herm[eè]s|balenciaga|moncler|burberry/i.test(t)) return 'luxus';
    if (/jordan|yeezy|dunk|sneaker|air max|new balance 550/i.test(t)) return 'sneaker';
    return WO[kat] ? kat : 'spiele'; }
  let modus = lj('pc-modus', 'kaufen'), foto = null, fotoKlein = '', sample = null, R = null;
  const root = document.getElementById('pc-root'); if (!root) return; root.className = 'pc';

  async function verkleinern(f) { try { const bm = await createImageBitmap(f); const s = Math.min(1, 1280 / Math.max(bm.width, bm.height)); const c = document.createElement('canvas'); c.width = Math.round(bm.width * s); c.height = Math.round(bm.height * s); c.getContext('2d').drawImage(bm, 0, 0, c.width, c.height);
    const t = document.createElement('canvas'); const ts = 88 / Math.max(c.width, c.height); t.width = Math.round(c.width * ts); t.height = Math.round(c.height * ts); t.getContext('2d').drawImage(c, 0, 0, t.width, t.height); fotoKlein = t.toDataURL('image/jpeg', 0.6);
    return await new Promise(r => c.toBlob(b => r(b || f), 'image/jpeg', 0.85)); } catch (x) { return f; } }

  function bau() {
    root.replaceChildren();
    const top = e('div', 'pc-top'); top.append(e('b', '', '💶 Preis-Check'));
    const mo = e('div', 'pc-modus'); [['kaufen', '🛒 Flohmarkt'], ['verkaufen', '🏷️ Verkaufen']].forEach(([k, l]) => { const b = e('button', '', l); b.type = 'button'; b.setAttribute('aria-pressed', String(modus === k)); b.addEventListener('click', () => { modus = k; ls('pc-modus', k); bau(); if (R) zeige(); }); mo.append(b); }); top.append(mo); root.append(top);

    const cam = e('label', 'pc-cam'); const fi = e('input'); fi.type = 'file'; fi.accept = 'image/*'; fi.setAttribute('capture', 'environment');
    cam.append(fi, e('div', 'i', '📸'), e('div', 't', sample ? 'Foto machen' : 'Barcode fotografieren'), e('div', 'm', sample ? 'Artikel oder Barcode fotografieren – Claude erkennt es sofort.' : 'Barcode scannen oder unten den Namen tippen – ein Tipp, und du siehst die echten Preise.'));
    if (foto) { const im = e('img'); im.src = URL.createObjectURL(foto); im.alt = ''; cam.prepend(im); }
    fi.addEventListener('change', async ev => { const f = ev.target.files && ev.target.files[0]; if (!f) return; foto = await verkleinern(f); bau(); start(''); });
    root.append(cam);

    const or = e('div', 'pc-or'); const qi = e('input'); qi.placeholder = 'oder Namen tippen, z. B. Glurak 4/102'; qi.id = 'pc-q'; qi.autocomplete = 'off'; if (R && R.artikel && R.artikel !== 'Unbekannt') qi.value = R.artikel;
    const go = e('button', 'pc-go', 'Los'); go.type = 'button'; const los = () => { if (qi.value.trim()) { foto = null; start(qi.value.trim()); } };
    go.addEventListener('click', los); qi.addEventListener('keydown', ev => { if (ev.key === 'Enter') los(); }); or.append(qi, go); root.append(or);

    const erg = e('div'); erg.id = 'pc-erg'; root.append(erg);
    if (window.dash) { const a = e('a', 'pc-best', '📲 Preis-Check-App öffnen'); a.href = 'https://riftora-app.github.io/preischeck/'; a.target = '_blank'; a.rel = 'noopener'; a.style.background = '#7c6cf0'; a.append(e('small', '', 'Dieselbe App, die Melly und Amelie haben – zum Installieren aufs Handy')); root.append(a); }

    const H = lj('pc-hist4', []); if (H.length) { const c = e('section', 'pc-c'); c.append(e('div', 'm', '🕘 Zuletzt geprüft')); const l = e('div', 'pc-hist');
      H.slice(0, 8).forEach(x => { const b = e('button'); b.type = 'button'; const ph = x.f ? Object.assign(e('img'), {src: x.f, alt: ''}) : e('div', 'ph', '🏷️'); b.append(ph, e('div', 't', x.artikel), e('b', '', x.verkauf ? eur(x.verkauf) : '–')); b.addEventListener('click', () => { R = x; foto = null; zeige(); window.scrollTo && window.scrollTo({top: 0, behavior: 'smooth'}); }); l.append(b); });
      c.append(l); root.append(c); }
    root.append(e('div', 'm', '🛡️ Alle Knöpfe führen nur zu offiziellen Seiten (eBay, Cardmarket, Vinted, Kleinanzeigen …). Unbekannten Shop prüfen: fakeshop-finder.de'));
  }

  function lade(t) { const box = document.getElementById('pc-erg'); const c = e('section', 'pc-c'); const l = e('div', 'pc-lade'); l.append(e('div', 'pc-spin'), e('div', '', t)); c.append(l); box.replaceChildren(c); }
  async function barcode() { if (!foto || !('BarcodeDetector' in window)) return ''; try { const r = await new BarcodeDetector({formats: ['ean_13', 'ean_8', 'upc_a', 'upc_e']}).detect(await createImageBitmap(foto)); return r.length ? r[0].rawValue : ''; } catch (x) { return ''; } }
  function merken() { const H = lj('pc-hist4', []).filter(x => x.artikel !== R.artikel); H.unshift({artikel: R.artikel, kategorie: R.kategorie, kartenspiel: R.kartenspiel, verkauf: R.verkauf || 0, von: R.von, bis: R.bis, zustand: R.zustand, selten: R.selten, grund: R.grund, suchbegriff: R.suchbegriff, beste_seite: R.beste_seite, sicherheit: R.sicherheit, echt: R.echt, f: R.f || fotoKlein}); ls('pc-hist4', H.slice(0, 30)); }

  async function start(text) {
    const ean = await barcode();
    if (!sample) {
      if (!text && !ean) { R = null; lade('Kein Barcode erkannt – bitte den Namen oben eintippen.'); return; }
      R = {artikel: text || ean, kategorie: raten(text), ohneKI: true, suchbegriff: text || ean, f: fotoKlein}; zeige(); merken(); return; }
    lade(foto ? 'Claude erkennt den Artikel und prüft den Zustand …' : 'Claude schätzt den Wert …');
    const prompt = 'Du bist ein erfahrener Reseller in Deutschland (Flohmarkt, Vinted, eBay, Kleinanzeigen, Cardmarket). ' + (foto ? 'Auf dem Foto ist ein Artikel. ' : '') + (text ? 'Hinweis vom Nutzer: "' + text + '". ' : '') + (ean ? 'Barcode/EAN: ' + ean + '. ' : '') +
      'Erkenne den Artikel so genau wie möglich (Edition, Plattform, Sprache, Set-Nummer, Größe, Marke). ' + (foto ? 'Beurteile den sichtbaren Zustand ehrlich und nenne Mängel. ' : '') +
      'Schätze den realistischen Verkaufspreis gebraucht in Deutschland (was es auf eBay/Vinted/Cardmarket tatsächlich bringt, nicht Wunschpreise). Achtung: Verwechsle keine Plattformen (PS3 vs. PS4 vs. Switch) oder Editionen – spätere Konsolen-Versionen und kleine Auflagen sind oft deutlich mehr wert. Im Zweifel lieber höher schätzen und sicherheit auf "niedrig" setzen. Erfinde nichts. ' +
      'Antworte NUR mit JSON: {"artikel":"genaue Bezeichnung","kategorie":"spiele|technik|karten|sport|kleidung|schmuck|sammeln|sportartikel|medien","kartenspiel":"pokemon|yugioh|magic|onepiece|lorcana|dragonball|digimon|fleshandblood|keins","zustand":"bei Karten NM/EX/GD/LP/PL/Poor, sonst Neu mit Etikett/Neu ohne Etikett/Sehr gut/Gut/Zufriedenstellend oder unklar","maengel":["kurz"],"echtheit":"ok oder Hinweis auf Fälschung","selten":true,"grund":"1 kurzer Satz, warum gesucht oder nicht","verkauf":Zahl,"von":Zahl,"bis":Zahl,"sicherheit":"hoch|mittel|niedrig","suchbegriff":"bester Suchbegriff für die Verkaufspreise","beste_seite":"ebay|cardmarket|vinted|stockx|chrono24|pricecharting","tipp":"1 Satz Profi-Tipp"}';
    try {
      const o = {modelTier: 'complex'}; try { const l = await sample.limits(); if (foto && l && l.images) o.images = [foto]; } catch (x) {}
      const r = await sample(prompt, o); let j = null; try { j = JSON.parse((r.text.match(/\{[\s\S]*\}/) || [''])[0]); } catch (x) {}
      if (!j) { R = {artikel: text || ean || 'Unbekannt', kategorie: raten(text), ohneKI: true, suchbegriff: text || ean}; zeige('Claude konnte das Foto nicht sicher erkennen – tipp den Namen oben ein.'); return; }
      R = j; R.f = fotoKlein; zeige(); merken();
    } catch (x) { lade(x && x.code === 'rate_limited' ? 'Gerade zu viele Scans – kurz warten und nochmal.' : x && x.code === 'not_granted' ? 'Bitte oben „Claude verwenden“ erlauben.' : 'Scan gerade nicht möglich – Namen eintippen.'); }
  }

  function raten(t) { t = String(t || ''); return /\b\d{1,3}\/\d{2,3}\b|pok[eé]mon.*karte|holo|yu-?gi|magic|lorcana/i.test(t) ? 'karten' : /trikot|shirt|jacke|hoodie|nike|adidas|sneaker|schuh/i.test(t) ? 'kleidung' : /gold|silber|ring|kette|uhr|925|585/i.test(t) ? 'schmuck' : /funko|lego|figur/i.test(t) ? 'sammeln' : /panini|topps|rookie/i.test(t) ? 'sport' : /konsole|controller|handy/i.test(t) ? 'technik' : /buch|cd|dvd/i.test(t) ? 'medien' : 'spiele'; }

  function zeige(hinweis) {
    const box = document.getElementById('pc-erg'); if (!box || !R) return; box.replaceChildren();
    const c = e('section', 'pc-c'); const kat = MEHR[R.kategorie] ? R.kategorie : raten(R.artikel);
    const g = CMG[R.kartenspiel] || 'Pokemon'; const q = R.suchbegriff || R.artikel;
    if (hinweis) c.append(e('div', 'pc-warn', hinweis));
    c.append(e('div', 'pc-name', R.artikel));
    const tg = e('div', 'pc-tags'); const tag = (t, col) => { const s = e('span', 'pc-tag', t); s.style.background = col; tg.append(s); };
    if (R.zustand && R.zustand !== 'unklar') tag('Zustand: ' + R.zustand, '#2563eb'); if (R.selten) tag('💎 gesucht', '#a16207');
    if (R.echtheit && !/^ok/i.test(R.echtheit)) tag('⚠️ Echtheit prüfen', '#dc2626'); if (R.sicherheit) tag('Sicherheit: ' + R.sicherheit, R.sicherheit === 'hoch' ? '#16a34a' : R.sicherheit === 'mittel' ? '#d97706' : '#64748b');
    if (tg.children.length) c.append(tg);
    if ((R.maengel || []).length) c.append(e('div', 'm', '🔎 ' + R.maengel.join(' · ')));
    if (R.echtheit && !/^ok/i.test(R.echtheit)) c.append(e('div', 'pc-warn', '🛡️ ' + R.echtheit));
    if (R.verkauf && !R.echt) { const w = e('div', 'pc-wert'); const l = e('div'); l.append(e('div', 's', '🤖 Claude schätzt'), e('div', 'z', eur(R.verkauf))); w.append(l, e('div', 's', (R.von || R.bis) ? eur(R.von) + ' – ' + eur(R.bis) : '')); c.append(w); if (R.grund) c.append(e('div', 'm', (R.selten ? '💎 ' : 'ℹ️ ') + R.grund)); c.append(e('div', 'pc-warn', '⚠️ Nur eine Schätzung – sie kann deutlich zu niedrig sein. Vor dem Verkaufen IMMER den blauen Knopf tippen.')); }

    const so = sorte(R.artikel + ' ' + (R.suchbegriff || ''), kat); const wo = WO[so] || WO.spiele;
    const best = R.beste_seite && Q[R.beste_seite] && !R.ohneKI ? R.beste_seite : wo[0];
    const rk = e('div', 'pc-amp'); rk.style.setProperty('--ac', '#3b82f6');
    rk.append(e('div', 'k', '🏆 Am ehesten weg: ' + Q[best][0]), e('div', '', (R.verkauf ? 'Realistisch ca. ' + eur(R.verkauf) + (R.von && R.bis ? ' (' + eur(R.von) + ' – ' + eur(R.bis) + ')' : '') + '. ' : '') + wo[1]));
    c.append(rk);
    const a = e('a', 'pc-best', '👉 Direkt zu ' + Q[best][0]); a.href = link(best, q, g); a.target = '_blank'; a.rel = 'noopener'; a.append(e('small', '', best === 'ebay' ? 'Verkaufte Angebote, neueste zuerst – das ist der echte Wert' : 'Preise vergleichen und dort verkaufen')); c.append(a);
    const mini = e('div', 'pc-mini'); (MEHR[so] || MEHR.spiele).filter(id => id !== best).forEach(id => { const x = e('a', '', Q[id][0]); x.href = link(id, q, g); x.target = '_blank'; x.rel = 'noopener'; mini.append(x); }); c.append(mini);

    if (modus === 'kaufen') {
      const zw = e('div', 'pc-2'); const wl = e('div'); const kl = e('div');
      const w = e('input'); w.type = 'number'; w.inputMode = 'decimal'; w.placeholder = 'z. B. 40 €'; if (R.verkauf) w.value = R.verkauf;
      const p = e('input'); p.type = 'number'; p.inputMode = 'decimal'; p.placeholder = 'Preis am Stand €';
      wl.append(e('div', 'pc-lbl', '💰 Verkaufswert'), w); kl.append(e('div', 'pc-lbl', '🏷️ Kostet hier'), p); zw.append(wl, kl); c.append(zw); const amp = e('div'); c.append(amp);
      const rech = () => { amp.replaceChildren(); const k = zahl(p.value), v = zahl(w.value); if (!k || !v) { if (!v) amp.append(e('div', 'pc-hint', 'Auf „Direkt zu …“ tippen, den üblichen Verkaufspreis links eintragen – dann zeigt die Ampel, ob es sich lohnt.')); return; }
        const q2 = k / v; const gew = v * (1 - wo[2] / 100) - 2 - k; const d = e('div', 'pc-amp'); let ac, t, s;
        if (q2 <= 0.5) { ac = '#22c55e'; t = '🟢 KAUFEN!'; s = 'Ca. ' + eur(gew) + ' Gewinn nach Gebühren und Versand.'; }
        else if (q2 <= 0.65) { ac = '#f59e0b'; t = '🟡 Handeln'; s = 'Biete ' + eur(Math.floor(v * 0.45)) + ' – dann lohnt es sich.'; }
        else { ac = '#ef4444'; t = '🔴 Lass liegen'; s = gew > 0 ? 'Nur ca. ' + eur(gew) + ' Gewinn – zu wenig für das Risiko.' : 'Kein Gewinn drin.'; }
        d.style.setProperty('--ac', ac); d.append(e('div', 'k', t), e('div', '', s), e('div', 'pc-hint', 'Regel: höchstens die Hälfte vom Verkaufswert zahlen. Bei Elektronik vor Ort testen.')); amp.append(d); };
      w.addEventListener('input', () => { R.verkauf = zahl(w.value); R.echt = true; merken(); rech(); }); p.addEventListener('input', rech); rech();
    } else {
      const dt = document.createElement('details'); dt.open = true; dt.append(e('summary', '', '🏷️ Einstellpreis: 3 echte Verkaufspreise vom blauen Knopf eintragen'));
      const row = e('div', 'pc-row'); const ins = [0, 1, 2].map(i => { const x = e('input'); x.type = 'number'; x.inputMode = 'decimal'; x.placeholder = (i + 1) + '. Preis'; row.append(x); return x; }); const out = e('div'); out.style.marginTop = '8px';
      const rech = () => { const P = ins.map(x => zahl(x.value)).filter(Boolean).sort((a, b) => a - b); out.replaceChildren(); if (!P.length) return; const mi = P.length === 2 ? (P[0] + P[1]) / 2 : P[Math.floor(P.length / 2)];
        const d = e('div', 'pc-amp'); d.style.setProperty('--ac', '#22c55e'); d.append(e('div', 'k', '✅ Einstellen für ' + eur(Math.ceil(mi * 0.95) - 0.01)), e('div', '', 'Verkauft wird es für ca. ' + eur(mi) + ' · nie unter ' + eur(mi * 0.8) + ' · Gebote ab ' + eur(mi * 0.9) + ' annehmen')); out.append(d);
        if (R.verkauf && !R.echt && R.verkauf < mi * 0.7) out.append(e('div', 'pc-warn', '🤖 Die Schätzung (' + eur(R.verkauf) + ') war zu niedrig – gut, dass du geprüft hast.'));
        R.verkauf = mi; R.echt = true; merken(); };
      ins.forEach(x => x.addEventListener('input', rech)); dt.append(row, out, e('div', 'pc-hint', 'Ohne echte Preise gibt es keinen Einstellpreis – so verkaufen wir nie wieder zu billig.')); c.append(dt);
    }
    if (R.tipp) c.append(e('div', 'pc-hint', '👉 ' + R.tipp));
    box.append(c);
  }

  bau();
  (async () => { try { if (!window.claude || !claude.use) return; const s = await claude.use('sample'); if (!s) return; sample = s; bau(); if (R) zeige(); } catch (x) {} })();
})();
