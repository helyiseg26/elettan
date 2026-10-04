/**
 * Orvosi / Fogorvosi Élettan Kérdésbank - PDF 20 (et 20.pdf)
 * Besorolva a hivatalos előadási tematika alapján:
 * - A sejtmembrán transzportfolyamatai
 * - A sejtműködés szabályozása, jelátviteli folyamatok
 * - Elektromos membránsajátságok
 * - Az akciós potenciál mechanizmusa
 * - Neuromuscularis junctio
 * - Izomélettan (vázizom és simaizom)
 * - A szív ingerületképzése és elektrofiziológiája
 * - Elektrokardiográfia (EKG)
 * - Szívciklus és hemodinamika
 * - Keringésszabályozás és vegetatív reflexek
 * - Regionális keringések (koronária, agyi, bőr, vázizom, tüdő)
 * - Légzésmechanika és a légzés szabályozása
 * - Testfolyadékok, vérképzés és hemosztázis
 */

window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS || [];

const pdf20Questions = [
  // =========================================================================
  // 1. TÉMA: A sejtmembrán transzportfolyamatai
  // =========================================================================
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Aktív transzportot valósít meg a:\n1. kalcium-nátrium exchanger (NCX)\n2. szívglikozid receptor (Na+/K+-ATP-áz)\n3. SERCA ATP-áz\n4. a lassú káliumcsatorna",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "Az NCX másodlagosan aktív transzport (1), a Na+/K+-pumpa (2) és a SERCA (3) primer aktív ATP-ázok; a K+-csatorna (4) passzív ionáramlást biztosít[cite: 7]."
  },
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Mely transzportfolyamatok tartoznak a másodlagosan aktív transzportok közé?\n1. Na+/glükóz szimport (SGLT)\n2. Na+/H+ antiport (NHE)\n3. HCO3-/Cl- csere (AE1)\n4. Na+/Ca2+ antiport (NCX)",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "Mindegyik transzporter egy meglévő iongradiens energiáját használja fel egy másik anyag gradienssel szembeni transzportjára (közvetlen ATP-bontás nélkül)[cite: 7]."
  },
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Melyek a Na+/K+-pumpa jellemzői?\n1. Fontos szerepe van a sejttérfogat szabályozásában\n2. Fontos szerepe van a Na+ és K+ aszimmetrikus megoszlásának fenntartásában\n3. Fontos szerepe van a nyugalmi membránpotenciál hosszú távú fenntartásában\n4. Szívglikozidok (pl. ouabain, digitalis) alkalmazásával gátolható",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A Na+/K+-ATP-áz elektrogén pumpa, fenntartja az iongradienseket, megakadályozza a sejt ozmotikus duzzadását, és a digitálisz specifikusan gátolja az extracelluláris kötőhelyén[cite: 7]."
  },
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Igaz állítások a réskapcsolatokra (gap junction):\n1. A gap junction csatornák az ionok mindkét irányba történő áramlását lehetővé teszik\n2. Mind kationok, mind anionok számára átjárhatóak (nem-szelektívek bizonyos méret alatt)\n3. Töltéssel nem rendelkező kis molekulák (pl. cAMP, IP3) átjutását is lehetővé teszik\n4. Két félcsatornából (konnexonból) épülnek fel a szomszédos sejtek membránjaiban",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A gap junction hexamer konnexonokból áll, pórusmérete kb. 1,5 nm, mindkét irányban átengedi az 1 kDa alatti metabolitokat és ionokat[cite: 7]."
  },
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Helytelen állítás keresése",
    q: "A kapillárisfal folyadék- és anyagtranszportjára érvényes állítások közül válassza ki az egyetlen HELYTELENT!",
    options: [
      "A. A kapillárisfal átjárható fehérjék (pl. albumin) számára fiziológiás körülmények között nagytömegben",
      "B. A kapillárisfal átjárható kis molekulájú szerves anyagok (pl. glükóz, karbamid) számára",
      "C. A kapillárisfal átjárható szervetlen kationok és anionok számára",
      "D. A kapillárisfal szabadon átjárható vízmolekulák számára",
      "E. A hidrosztatikus és kolloidozmotikus nyomások különbsége szabja meg a filtráció irányát"
    ],
    correct: 0,
    exp: "A folyamatos endothellel bélelt kapillárisok szinte teljesen impermeábilisak a nagyméretű plazmafehérjék (albumin) számára, ez hozza létre az onkotikus szívóerőt[cite: 7]."
  },

  // =========================================================================
  // 2. TÉMA: A sejtműködés szabályozása, jelátviteli folyamatok
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Válassza ki a megfelelő receptor-típus párokat!\n1. nikotinos acetilkolin-receptor — ionotróp receptor\n2. muszkarinos acetilkolin-receptor — metabotróp receptor\n3. béta-adrenerg receptor — metabotróp receptor\n4. alfa-adrenerg receptor — metabotróp receptor",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) helyes"
    ],
    correct: 4,
    exp: "A nikotinos Ach-receptor ligandum-vezérelt kationcsatorna (ionotróp), míg a muszkarinos Ach- és az összes adrenerg (alfa, béta) receptor G-proteinhez kapcsolt (metabotróp)[cite: 7]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Hol találhatók muszkarinos kolinerg receptorok a szervezetben?\n1. A verejtékmirigyekben (szimpatikus kolinerg beidegzésnél)\n2. A paraszimpatikus idegrendszer posztganglionáris rostjai által beidegzett effektor sejteken\n3. Egyes agyi neuronokon\n4. A vegetatív ganglionokban és a motoros véglemezben",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A vegetatív ganglionokban és a motoros véglemezen NIKOTINOS receptorok találhatók, míg az effektor szerveken és verejtékmirigyeken muszkarinos receptorok működnek[cite: 7]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Amikor egy vízoldékony molekula (pl. peptid hormon, neurotranszmitter) a sejtfelszíni metabotróp receptorához kötődik:\n1. G-proteinek aktiválódhatnak\n2. Gi-fehérje aktivációja miatt az intracelluláris cAMP-szint csökkenhet\n3. Gs-fehérje aktivációja révén az intracelluláris cAMP-koncentráció növekedhet\n4. A hatás kizárólag foszfolipáz-C (PLC) aktivációján keresztül valósulhat meg",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "A másodlagos hírvivő rendszer sokféle lehet: Gs növeli, Gi csökkenti a cAMP-t; a 4. állítás hamis, mert a hatás nem kizárólag PLC-n át fut[cite: 7]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A szarkoplazmatikus retikulumból (SR) történő Ca2+-felszabadulást serkenti az alábbiak közül, KIVÉVE:",
    options: [
      "A. a T-típusú feszültségfüggő kalciumcsatorna közvetlen mechanikai kapcsolata a vázizomban",
      "B. a rianodin receptor aktivációja",
      "C. a citoplazmatikus kalciumszint emelkedése (CICR)",
      "D. az IP3 receptor aktivációja (simaizomban)",
      "E. a Na+/Ca2+ cserélő (NCX) fordított módú működése által biztosított Ca2+-beáramlás"
    ],
    correct: 0,
    exp: "A harántcsíkolt izomban az L-TÍPUSÚ Ca2+-csatorna (DHPR) kapcsolódik a szarkoplazmatikus retikulumhoz, a T-típusú csatornák nem vesznek részt az elektromechanikai csatolásban[cite: 7]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "Válassza ki az egyetlen HELYTELEN állítást a receptorpotenciálokról és szenzoros receptorokról!",
    options: [
      "A. a másodlagos receptorokat az jellemzi, hogy neurotranszmittert képesek felszabadítani",
      "B. az elsődleges receptorok saját axonjukon maguk generálnak akciós potenciált",
      "C. a receptorpotenciál lehet akár depolarizáció, akár hiperpolarizáció (pl. fotoreceptorok)",
      "D. a receptorpotenciál kialakulását ioncsatornák nyitottsági állapotának változása előzi meg",
      "E. a receptorpotenciálok a minden-vagy-semmi törvényét követik"
    ],
    correct: 4,
    exp: "A receptorpotenciál lokális, elektrotónusos, graduált potenciál (nagysága az ingerintenzitással arányos), NEM követi a 'minden-vagy-semmi' törvényt[cite: 7]."
  },

  // =========================================================================
  // 3. TÉMA: Az akciós potenciál mechanizmusa
  // =========================================================================
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Válassza ki a feszültségvezérelt Na+-csatornákat (Nav) gátló anyagokat!\n1. Tetrodotoxin (TTX)\n2. Szaxitoxin (STX)\n3. Lidokain\n4. 4-aminopiridin (4-AP)",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "A TTX, az STX és a lokális érzéstelenítő lidokain Na+-csatorna gátlók; a 4-AP feszültségfüggő K+-csatorna blokkoló[cite: 7]."
  },
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Az akciós potenciál axonális terjedésére igaz állítások:\n1. Kiindulási helyétől (ingerlés helyétől) kísérletesen mindkét irányba képes terjedni az axonon\n2. Változatlan amplitúdóval fut végig az axon mentén (regeneratív)\n3. Egyetlen akciós potenciál nem változtatja meg érdemben az intracelluláris ionkoncentrációkat\n4. Különböző sebességgel terjed a vékony és a vastag axonokon",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "Az AP csillapítatlanul terjed, a vastag mielinizált rostokon sokkal gyorsabb, és a transzmembrán átlépő ionmennyiség a teljes belső készlet elenyésző töredéke[cite: 7]."
  },
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Az akciós potenciál terjedésére érvényes:\n1. Vastagabb axonon lassabb\n2. Nagyobb belső axiális ellenállással rendelkező rostokon gyorsabb\n3. Velőshüvellyel rendelkező rostokon lassabb, mint a csupasz axonokon\n4. Helyi érzéstelenítőkkel (lokális anasztetikumokkal) reverzibilisen felfüggeszthető",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 3,
    exp: "A vastag és velőshüvelyes rostokon a terjedés GYORSABB; egyedül a 4. állítás igaz: a lokálanesztetikumok a Na+-csatornák gátlásával blokkolják a vezetést[cite: 7]."
  },

  // =========================================================================
  // 4. TÉMA: Neuromuscularis junctio és Izomélettan
  // =========================================================================
  {
    ppt: "Neuromuscularis junctio",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A neuromuscularis junctióra jellemző:\n1. Kémiai szinapszis (acetilkolin mediátorral)\n2. Működése (transzmitter-felszabadulása) befolyásolható az extracelluláris kalciumkoncentráció változtatásával\n3. Működése befolyásolható a preszinaptikus terminális intracelluláris kalciumszintjének manipulálásával\n4. A posztszinaptikus véglemezen nikotinos acetilkolin receptorok találhatók",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A motoneuron végfácskájából Ca2+-dependens exocitózissal ürülő Ach a nikotinos kationcsatornákhoz kötődve hozza létre az EPP-t[cite: 7]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Helytelen állítás keresése",
    q: "Válassza ki az egyetlen HELYTELEN állítást a szinaptikus potenciálokról!",
    options: [
      "A. A serkentő posztszinaptikus potenciál (EPSP) a posztszinaptikus sejt hiperpolarizációja",
      "B. Az EPSP-t nem szelektív ionotróp kationcsatornák aktiválódása hozza létre",
      "C. Az EPSP egy elektrotónusos potenciálváltozás",
      "D. A gátló posztszinaptikus potenciál (IPSP) csökkenti a posztszinaptikus sejt ingerlékenységét",
      "E. A véglemezpotenciál (EPP) tulajdonságait tekintve serkentő típusú graduált potenciál"
    ],
    correct: 0,
    exp: "Az EPSP depolarizáció (nem hiperpolarizáció), amely a küszöb felé mozdítja el a membránpotenciált[cite: 7]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Helytelen állítás keresése",
    q: "Válassza ki az egyetlen HELYTELEN állítást a vázizom működéséről és a motoros egységekről!",
    options: [
      "A. A vázizom akciós potenciáljának refrakter periódusa lényegesen rövidebb, mint a kalcium-tranziens és a mechanikai rángás időtartama",
      "B. Inkomplett tetanusz során az egyes összehúzódások között még megfigyelhető részleges relaxáció",
      "C. A motoros egységet egyetlen alfa-motoneuron innerválja",
      "D. A különböző motoros egységek mindig azonos számú izomrostot tartalmaznak a szervezetben",
      "E. A tetanusz alapját az egymást követő mechanikai rángások szummációja jelenti"
    ],
    correct: 3,
    exp: "A motoros egységek rostszáma drasztikusan változik: a finom szemmozgató izmokban 3-10 rost/neuron, míg a durva combizmokban több ezer rost/neuron[cite: 7]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Simaizom esetén a kontrakcióhoz szükséges kalcium:\n1. Felszabadulhat a szarkoplazmatikus retikulumból (IP3 hatására)\n2. Beáramolhat a sarcolemma feszültségfüggő kalciumcsatornáin keresztül\n3. Ligand-vezérelt kalciumcsatornákon át is bejuthat a sejtbe\n4. A rianodin receptorok megnyílásával is a citoplazmába kerülhet",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A simaizom mind extracelluláris Ca2+-forrásból (feszültségfüggő és receptor-vezérelt csatornák), mind intracelluláris SR-raktárakból képes kalciumot mozgósítani[cite: 7]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Mely állítás(ok) helyes(ek) a vázizom elektrofiziológiájáról?\n1. A vázizomrost nyugalmi membránpotenciálja kb. -90 mV\n2. Az akciós potenciál felszálló szárának kialakításáért gyors feszültségfüggő Na+-csatornák felelősek\n3. Az akciós potenciál időtartama rövid (1-3 ms nagyságrendű)\n4. A repolarizációt a feszültségfüggő K+-csatornák megnyílása hozza létre",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A vázizom akciós potenciálja az idegrostokéhoz hasonlóan gyors (1-3 ms, nem tart 10 ms-ig), nyugalmi potenciálja stabil -90 mV[cite: 7]."
  },

  // =========================================================================
  // 5. TÉMA: A szív elektrofiziológiája és EKG
  // =========================================================================
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helytelen állítás keresése",
    q: "Mi NEM IGAZ a szív pacemaker sejtjeire (sinuscsomó)?",
    options: [
      "A. Spontán diasztolés depolarizációjuk meredekebbé válik szimpatikus ingerlés hatására",
      "B. Membránpotenciáljuk diasztoléban folyamatosan változik, nincs stabil nyugalmi potenciáljuk",
      "C. A maximális diasztolés potenciál nagysága kevésbé negatív (-60 mV körül), mint a munkaizomzat nyugalmi potenciálja (-90 mV)",
      "D. Spontán diasztolés depolarizációjuk laposabbá válik paraszimpatikus (vagus) ingerek hatására",
      "E. A membránpotenciál időbeli változása teljesen megszűnik a szív első depolarizációja után"
    ],
    correct: 4,
    exp: "A pacemaker sejtek lényege a folyamatos automatizmus: a repolarizációt követően azonnal újraindul a spontán diasztolés depolarizáció (prepotenciál)[cite: 7]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "A bal kamra munkaizomzatának depolarizációjára igaz:",
    options: [
      "A. A felszálló szár depolarizációja TTX jelenlétében is zavartalanul kiváltható",
      "B. A kamrafal depolarizációja döntően a subendocardium felől a subepicardium felé terjed",
      "C. Befelé irányuló kalciumáram nem kíséri az akciós potenciált",
      "D. Az ingerület kizárólag az apex felől a basis felé halad a teljes szabad falban",
      "E. A T-hullám kialakulása közvetlenül ehhez a depolarizációs folyamathoz köthető"
    ],
    correct: 1,
    exp: "A kamrákban a Purkinje-hálózat a subendocardialis rétegben oszlik el, így a depolarizációs hullámfal endocardium felől epicardium felé halad[cite: 7]."
  },
  {
    ppt: "Elektrokardiográfia (EKG)",
    type: "Helytelen állítás keresése",
    q: "Az elektrokardiogram (EKG) közvetlen információt hordoz az alábbi paraméterekről, KIVÉVE:",
    options: [
      "A. az ingerület vezetési sebessége és blokkjai a szívben",
      "B. a szívizom refrakter állapota",
      "C. a szív egyes területeinek repolarizációja",
      "D. a szív mechanikai kontraktilitása (pumpaereje)",
      "E. az ingerképzés ritmusa és frekvenciája"
    ],
    correct: 3,
    exp: "Az EKG elektromos jelet mér, az összehúzódás nagyságáról vagy mechanikai erejéről (kontraktilitás) nem nyújt adatot[cite: 7]."
  },

  // =========================================================================
  // 6. TÉMA: Szívciklus és hemodinamika
  // =========================================================================
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helyes állítás keresése",
    q: "Nyugalomban a szisztémás keringés mely érszakaszán található a LEGNAGYOBB mennyiségű vér (kapacitáserek)?",
    options: [
      "A. a nagyvérköri vénákban",
      "B. a kapillárisokban",
      "C. az arteriolákban",
      "D. a jobb kamrában",
      "E. a kisvérkörben"
    ],
    correct: 0,
    exp: "A nagyvérköri vénák a keringési rendszer kapacitáserei: a keringő vértérfogat kb. 60–65%-át tárolják[cite: 7]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helytelen állítás keresése",
    q: "Válassza ki az egyetlen HELYTELEN állítást a szív mechanikai működéséről!",
    options: [
      "A. Az izometriás (izovolumetriás) kontrakció végén az AV-billentyűk kinyílnak",
      "B. Izometriás kontrakció alatt mind az AV-, mind a semilunaris billentyűk zárva vannak",
      "C. Diasztolé alatt az aortában uralkodó nyomás a semilunaris billentyűket zárva tartja",
      "D. A tricuspidalis billentyű elégtelen záródása perifériás vénás pangást okoz",
      "E. Az auxotóniás ejekció alatt a kamrák térfogata lecsökken"
    ],
    correct: 0,
    exp: "Az izovolumetriás kontrakció végén a megnövekedett nyomás hatására a SEMILUNARIS billentyűk (aorta/pulmonalis) nyílnak ki, az AV-billentyűk már előtte becsukódtak[cite: 7]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helyes állítás keresése",
    q: "A Frank–Starling szívtörvényre igaz állítás:",
    options: [
      "A. kimondja, hogy a szívizom kontrakciójának ereje a kezdeti rost- (sarcomere-) hosszúság függvénye az end-diasztolés térfogat keretein belül",
      "B. magyarázza, hogy miért csökken a pulzustérfogat az előterhelés növekedésekor",
      "C. kizárólag a szimpatikus idegi stimuláció hatására lép működésbe",
      "D. biztosítja, hogy a bal kamra perctérfogata tartósan kétszerese legyen a jobb kamráénak",
      "E. azt mondja ki, hogy a szív nem képes alkalmazkodni az utóterhelés növekedéséhez"
    ],
    correct: 0,
    exp: "A Frank–Starling mechanizmus (heterometriás autoreguláció) lényege, hogy a fokozott kamrai telődés (EDV) növeli a szarkomerek passzív feszülését és az összehúzódás erejét[cite: 7]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helytelen állítás keresése",
    q: "Válassza ki az egyetlen HELYTELEN állítást az artériás középnyomásról (MAP)!",
    options: [
      "A. Az artériás középnyomást jelentősebben befolyásolják a diasztolés nyomás változásai, mint a szisztolés csúcsértékek",
      "B. Az artériás középnyomás önmagában nem változtatható meg a perctérfogat vagy a TPR módosulása nélkül",
      "C. A szisztémás keringés hajtóerejét az artériás középnyomás és a centrális vénás nyomás különbsége jelenti",
      "D. Az artériás középnyomás jelentős csökkenést mutat már a nagy rugalmas aorta teljes hosszában",
      "E. Az artériás középnyomás integrált átlagérték, kisimítja a pulzációkat"
    ],
    correct: 3,
    exp: "A rugalmas típusú nagy aortában az ellenállás minimális, a középnyomás alig esik 1-2 Hgmm-t; a jelentős nyomásesés az arteriolák szintjén történik[cite: 7]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helyes állítás keresése",
    q: "Válassza ki az egyetlen HELYES állítást a vénás rendszerről!",
    options: [
      "A. A vénák jellegzetessége a domináns paraszimpatikus vazomotor tónus",
      "B. A vénák nem rendelkeznek szimpatikus beidegzéssel",
      "C. A vénás rendszerre kifejezett nyugalmi vazodilatátor tónus jellemző",
      "D. A vénás rendszer vazokonstrikciója kulcsszereppel bír a perctérfogat szimpatikus izgalom hatására bekövetkező növekedésében (előterhelés fokozása)",
      "E. A nagyvénák falában egyáltalán nincsenek simaizomsejtek"
    ],
    correct: 3,
    exp: "A kapacitáserek szimpatikus vazokonstrikciója vért mozgósít a szív felé (növeli az EDV-t és a pulzustérfogatot)[cite: 7]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helytelen állítás keresése",
    q: "Szöveti ödéma kialakulásához vezethetnek az alábbi tényezők, KIVÉVE:",
    options: [
      "A. a kapilláris endothelium fokozott permeabilitása gyulladásban",
      "B. a csökkent szisztémás vénás nyomás",
      "C. a vér csökkent albuminkoncentrációja (hipoalbuminémia)",
      "D. megnövekedett kapilláris hidrosztatikus nyomás",
      "E. a nyirokelvezetés mechanikus akadályozottsága"
    ],
    correct: 1,
    exp: "A csökkent vénás nyomás CSÖKKENTI a kapilláris filtrációs nyomást, így véd az ödéma ellen; ödémát a növekedett vénás nyomás (pangás) okoz[cite: 7]."
  },

  // =========================================================================
  // 7. TÉMA: Keringésszabályozás és vegetatív reflexek
  // =========================================================================
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Helyes állítás keresése",
    q: "A nyúltvelői depresszor központ aktiválódásának közvetlen következménye:",
    options: [
      "A. gátolja a szimpatikus ganglionokban a szinaptikus transzmissziót",
      "B. csökkenti a szívre ható vagustónust",
      "C. gátolja a szomszédos nyúltvelői presszor központ neuronjait",
      "D. az aortán kívül más artériákra nincs hatással",
      "E. közvetlenül serkenti a gerincvelői szimpatikus preganglionáris neuronokat"
    ],
    correct: 2,
    exp: "A depresszor area (CVLM) GABAerg gátló interneuronokon keresztül közvetlenül gátolja a rosztrális ventrolaterális nyúltvelő (RVLM) presszor neuronjait[cite: 7]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Helyes állítás keresése",
    q: "A nyúltvelői depresszor reflex aktivációja során:",
    options: [
      "A. a szisztémás keringés rezisztenciaerein, a nyugalmi vazokonstriktor tónus mérséklődése révén, vazodilatáció alakul ki",
      "B. a szimpatikus tónus növekedése miatt nő a perctérfogat",
      "C. generalizált vazokonstrikció alakul ki",
      "D. reflexesen megemelkedik a szívfrekvencia",
      "E. a vesekeringés leáll"
    ],
    correct: 0,
    exp: "A presszor központ gátlása csökkenti az arteriolák szimpatikus tónusát, ami vazodilatációt és vérnyomásesést eredményez[cite: 7]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Helyes állítás keresése",
    q: "Ha a sinus caroticusban lévő magas nyomású baroreceptorok falában megnő a vérnyomás és feszülés:",
    options: [
      "A. reflexesen fokozódik a szív szimpatikus beidegzése",
      "B. a szívfrekvencia és az artériás középnyomás csökken (vagustónus nő)",
      "C. növekszik a renin-angiotenzin aktivitás",
      "D. azonnal fokozódik a vazopresszinszekréció",
      "E. csökken a szívhez futó n. vagus rostok aktivitása"
    ],
    correct: 1,
    exp: "A baroreceptor reflex (depresszor reflex) afferens tüzelése serkenti az NTS-t, ami vagus aktivációhoz (bradycardia) és szimpatikus gátláshoz (vazodilatáció) vezet[cite: 7]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Helyes állítás keresése",
    q: "A keringési presszor reflexekre érvényes:",
    options: [
      "A. A Lovén-reflex aktiválódása során szisztémás vazokonstrikció és lokális szervspecifikus vazodilatáció alakul ki",
      "B. A Bainbridge-reflex csökkenti a szívfrekvenciát nagy vénás telődés esetén",
      "C. A centrális chemoreceptorok kizárólagos ingere a hipoxia",
      "D. A Goltz-reflex a bőr nociceptoraiból kiinduló presszor válasz",
      "E. Minden esetben növelik a paraszimpatikus idegrendszer tónusát"
    ],
    correct: 0,
    exp: "A Lovén-reflex lényege, hogy egy szerv érzőidegének ingerlése szisztémás vérnyomásemelést (általános vazokonstrikciót) hoz létre, miközben az adott szervben lokális vazodilatáció biztosítja a vérátáramlást[cite: 7]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Helyes állítás keresése",
    q: "A nyúltvelői presszor központ neuronjai:",
    options: [
      "A. stimuláló bemenetet kapnak a sinus caroticus magas nyomású baroreceptoraiból",
      "B. gátló bemenetet kapnak a perifériás chemoreceptorokból",
      "C. aktiválódásuk után a vénás kapacitáserek szimpatikus tónusa nő (csökken a vértároló kapacitás)",
      "D. gátolják a gerincvelői preganglionáris szimpatikus neuronokat",
      "E. aktivitásuk hipoxiában teljesen leáll"
    ],
    correct: 2,
    exp: "A presszor központ (RVLM) aktiválódása generális szimpatikus tónusfokozódást okoz: növeli az artériás ellenállást és vénakonstrikcióval mobilizálja a vért[cite: 7]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Helytelen állítás keresése",
    q: "Válassza ki az egyetlen HELYTELEN állítást a keringési reflexekről!",
    options: [
      "A. Cushing-reflex: a koponyaűri nyomásfokozódás agyi ischaemiát okoz, ami súlyos vérnyomásemelkedéshez és reflexbradycardiához vezet",
      "B. Bainbridge-reflex: a pitvari telődés fokozódásakor emeli a szívfrekvenciát",
      "C. Lovén-reflex: afferens érzőrostok ingerlése szisztémás presszor választ vált ki lokális hiperémiával",
      "D. Goltz-reflex: a hasi szerveket (hasfalat) ért tompa ütés szimpatikus túlsúlyt és extrém tachycardiát vált ki",
      "E. Baroreceptor reflex: a vérnyomás gyors pufferelését szolgáló negatív visszacsatolási rendszer"
    ],
    correct: 3,
    exp: "A Goltz-reflex egy VAGUS reflex: a hasfalra vagy peritoneumra mért tompa ütés heveny paraszimpatikus túlsúlyt, bradycardiát, vérnyomásesést vagy szívmegállást okozhat (nem tachycardiát)[cite: 7]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Helytelen állítás keresése",
    q: "A Cushing-reflexre igazak az alábbi megállapítások, KIVÉVE:",
    options: [
      "A. Súlyos fokú agytörzsi ischaemia hatására aktiválódik",
      "B. Jelentősen növeli az artériás középnyomást",
      "C. Növeli a perifériás vascularis ellenállást",
      "D. Az agyi erek transzmuralis nyomásának csökkenése, az intracranialis nyomás megemelkedése váltja ki",
      "E. Kizárólag a szívfrekvencia extrém növekedésével (tartós tachycardia) jár"
    ],
    correct: 4,
    exp: "A Cushing-triád klasszikus eleme a magas vérnyomás mellett a REFLEXES BRADYCARDIA és a légzészavar; a mechanoreceptorok magas vérnyomás miatti túlfeszülése lelassítja a szívverést[cite: 7]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Helytelen állítás keresése",
    q: "Válassza ki az egyetlen HELYTELEN állítást a keringésszabályozó hormonokról!",
    options: [
      "A. Az ANF (atrialis natriuretikus faktor) növeli a keringő plazmatérfogatot",
      "B. Az artériás középnyomás hosszú távú regulációjában a vese és a renin-angiotenzin rendszer kulcsszerepet játszik",
      "C. Az angiotenzin II közvetlenül növeli a teljes perifériás ellenállást",
      "D. Az aldoszteron fokozza a nátrium- és víz-visszaszívást a vesében",
      "E. Az ADH (vazopresszin) fokozza a víz reabszorpcióját és növeli a plazmavolument"
    ],
    correct: 0,
    exp: "Az ANF/ANP natriurezist és diurézist okoz, ezáltal CSÖKKENTI a keringő vértérfogatot és a vérnyomást[cite: 7]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Helytelen állítás keresése",
    q: "A perifériás chemoreceptorokra (glomus caroticum, glomus aorticum) igaz, KIVÉVE:",
    options: [
      "A. Mind a pO2 csökkenése, mind a pCO2 növekedése és a pH esése képes aktiválni őket",
      "B. A sinus caroticus és a sinus aorticus falának belső endotheljében találhatók",
      "C. Aktiválódásuk szisztémás vazokonstrikciót és vérnyomásemelkedést vált ki",
      "D. Aktiválódásuk fokozza a légzési perctérfogatot",
      "E. A glomus caroticumból a IX., a glomus aorticumból a X. agyideg szállítja az afferens információt"
    ],
    correct: 1,
    exp: "A chemoreceptorok nem a sinusok falában lévő baroreceptorok: a glomus caroticum és glomus aorticum különálló, dúsan vaskularizált glomusztestek az erek bifurkációjánál[cite: 7]."
  },

  // =========================================================================
  // 8. TÉMA: Regionális keringések
  // =========================================================================
  {
    ppt: "Regionális keringések",
    type: "Helyes állítás keresése",
    q: "A szív saját keringésére (koronária-keringés) jellemző:",
    options: [
      "A. A szívizomzatban keletkező metabolitok lokális vazokonstrikciót okoznak",
      "B. A diasztolé idejének megnyúlása javítja a bal kamra miokardiumának perfúzióját",
      "C. A bal kamrai miokardium véráramlása a szívciklus során teljesen állandó",
      "D. Az adrenalin fiziológiás koncentrációban tiszta alfa-1 vazokonstrikciót vált ki",
      "E. Az adenozin hatástalan a koszorúerek simaizmára"
    ],
    correct: 1,
    exp: "A bal kamra szisztolés kontrakciója összenyomja a subendocardialis ereket (extramuralis kompresszió), ezért a bal kamra vérellátása döntően diasztoléban zajlik[cite: 7]."
  },
  {
    ppt: "Regionális keringések",
    type: "Helyes állítás keresése",
    q: "Az agyi keringésre jellemző:",
    options: [
      "A. A Cushing-reflex során fellépő tachycardia védi az agyat",
      "B. A pia mater erei domináns kolinerg vazodilatátor beidegzéssel tágulnak",
      "C. Az agyi erek kifejezett bazális miogén tónussal és metabolikus autoregulációval rendelkeznek",
      "D. Legfontosabb szabályozó tényezője a vér glükózszintje",
      "E. Fizikai munka során az agyi véráramlás a perctérfogattal arányosan többszörösére nő"
    ],
    correct: 2,
    exp: "Az agyi keringés szigorú autoreguláció alatt áll (60–160 Hgmm között az átáramlás állandó), a nyugalmi szimpatikus tónus elhanyagolható, a lokális pCO2 a legerősebb tágító stimulus[cite: 7]."
  },
  {
    ppt: "Regionális keringések",
    type: "Helyes állítás keresése",
    q: "A bőr keringésére érvényes állítás:",
    options: [
      "A. A bőr erei nem vesznek részt a vérnyomás-szabályozó presszor reflexekben",
      "B. A bőr erei nem vesznek részt a depresszor reflexekben",
      "C. A bőr ereiben a béta-2 adrenerg receptorok vazokonstrikciót váltanak ki",
      "D. A verejtékmirigyek paraszimpatikus adrenerg beidegzést kapnak",
      "E. A bőr ereiben hirtelen vagy tartós hőterheléskor reflexesen vazodilatáció alakul ki, növelve a hőleadást"
    ],
    correct: 4,
    exp: "A bőr erei a hőszabályozás elsődleges effektorai: melegben a szimpatikus tónus gátlása és a bradikinin-mediált tágulat növeli a vérátáramlást és a konvektív hőleadást[cite: 7]."
  },
  {
    ppt: "Regionális keringések",
    type: "Helyes állítás keresése",
    q: "Mely állítás IGAZ a pulmonális kisvérköri keringésre vonatkozóan?",
    options: [
      "A. Az erek összellenállása nagyobb, mint a szisztémás keringésben",
      "B. A lokális alveoláris hipoxia vazodilatációt okoz",
      "C. A pulmonális kapillárisok hidrosztatikus nyomása jóval kisebb, mint a szisztémás kapillárisoké",
      "D. A lokális hiperkapnia kifejezett vazodilatációt vált ki",
      "E. A pulmonális diasztolés nyomás nagyobb, mint a szisztémás diasztolés nyomás"
    ],
    correct: 2,
    exp: "A kisvérkör alacsony nyomású rendszer: a pulmonális kapilláris nyomás mindössze kb. 7–10 Hgmm (szemben a szisztémás 20–30 Hgmm-rel), ami megakadályozza a tüdőödémát[cite: 7]."
  },
  {
    ppt: "Regionális keringések",
    type: "Helytelen állítás keresése",
    q: "A vázizom keringésére igazak az alábbiak, KIVÉVE:",
    options: [
      "A. A szimpatikus idegrendszer általános aktiválódása minden körülmények között vazokonstrikciót vált ki az izomzatban",
      "B. Az alfa-1 adrenerg receptorok stimulálása vazokonstrikciót okoz",
      "C. A munkavégzés során keletkező helyi metabolitok (adenozin, laktát, K+, H+) lokális vazodilatációt váltanak ki",
      "D. Az arteriolákon a bazális miogén tónus és a szimpatikus vazokonstriktor tónus egyaránt jelen van",
      "E. A béta-2 adrenerg receptorok izgatása fiziológiás adrenalin-szint mellett vazodilatációt okoz"
    ],
    correct: 0,
    exp: "A szimpatikus kolinerg vazodilatáció (anticipációban), a béta-2 stimuláció, valamint a működési hiperémia (metabolikus vazodilatáció) képes felülírni a vazokonstriktor hatást[cite: 7]."
  },
  {
    ppt: "Regionális keringések",
    type: "Helyes állítás keresése",
    q: "Az alábbiak közül melyik okoz vazodilatációt a szisztémás keringésben?",
    options: [
      "A. A szerotonin ép endothelium hiányában",
      "B. A béta-2 adrenerg receptorok aktiválása adrenalinnal",
      "C. Az alfa-1 receptorok aktiválása adrenalinnal",
      "D. Az alfa-1 receptorok aktiválása noradrenalinnal",
      "E. Az endothel sérülésekor felszabaduló endothelin-1"
    ],
    correct: 1,
    exp: "A béta-2 adrenoreceptorok aktiválódása Gs/cAMP útvonalon keresztül a vascularis simaizom relaxációját (vazodilatációt) idézi elő[cite: 7]."
  },
  {
    ppt: "Regionális keringések",
    type: "Helyes állítás keresése",
    q: "Mely sorrend jellemzi helyesen a különböző szervek nyugalmi szimpatikus vazokonstriktor tónusának nagyságát?",
    options: [
      "A. Bőr > vázizom > gastrointestinalis apparátus > agy = coronariák",
      "B. Coronariák > agy > bőr > vázizom > vese",
      "C. Vese > agy > coronariák > vázizom > bőr",
      "D. Agy > bőr > vese > coronariák > vázizom",
      "E. Coronariák > vázizom > vese > agy > bőr"
    ],
    correct: 0,
    exp: "A bőrben, vázizomban és splanchnikus területen magas a nyugalmi szimpatikus vazokonstriktor tónus, míg a létfontosságú szervekben (agy, szív) szinte kizárólag a lokális metabolikus autoreguláció dominál[cite: 7]."
  },
  {
    ppt: "Regionális keringések",
    type: "Helyes állítás keresése",
    q: "Az alábbi tényezők közül melyik okoz VAZOKONSTRIKCIÓT a pulmonális keringésben (Euler–Liljestrand mechanizmus)?",
    options: [
      "A. Alveoláris hipoxia",
      "B. Alveoláris hipokapnia",
      "C. Alkalózis",
      "D. Nitrogén-monoxid (NO)",
      "E. Prosztaciklin"
    ],
    correct: 0,
    exp: "A tüdőben a hipoxiás pulmonális vazokonstrikció (HPV, Euler–Liljestrand reflex) a rosszul szellőző alveolusok felől az ép ventilációjú területek felé tereli a perfúziót[cite: 7]."
  },

  // =========================================================================
  // 9. TÉMA: Légzésmechanika és a légzés szabályozása
  // =========================================================================
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Helyes állítás keresése",
    q: "Melyik központ felelős a fiziológiás légzés alapritmusának generálásáért?",
    options: [
      "A. A nucleus parabrachialis",
      "B. A pneumotaxikus központ (híd)",
      "C. A nyúltvelő dorzális magcsoportja (DRG) és a pre-Bötzinger komplex",
      "D. A gerincvelő thoracalis szakasza",
      "E. Az apneuziás központ"
    ],
    correct: 2,
    exp: "A pre-Bötzinger komplexus pacemaker neuronjai és a dorsalis respiratoricus magcsoport (DRG) képezik az alapvető belégzési ritmusgenerátort[cite: 7]."
  },
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Helyes állítás keresése",
    q: "Milyen szintű agytörzsi sérülés vagy átmetszés után szűnik meg teljesen a spontán légzés?",
    options: [
      "A. Kétoldali vagotomia után",
      "B. A híd középső harmadában történő átmetszés után",
      "C. A nyúltvelő caudalis végénél (nyúltvelő-gerincvelő határán) történő átmetszés után",
      "D. A gerincvelő első thoracalis (Th1) szegmensének magasságában",
      "E. A híd feletti középagyi átmetszés után"
    ],
    correct: 2,
    exp: "A bulbaris légzőközpont a nyúltvelőben található; ha a kapcsolat megszakad a gerincvelői légző motoros neuronokkal (C3-C5 n. phrenicus), a spontán légzés azonnal leáll[cite: 7]."
  },
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Helyes állítás keresése",
    q: "Hogyan változik a légzés kétoldali vagotomia (a n. vagus mindkét oldali átvágása) után?",
    options: [
      "A. Frekvenciája csökken, amplitúdója csökken",
      "B. Frekvenciája csökken, amplitúdója növekszik (lassú, mély légzés)",
      "C. Frekvenciája és amplitúdója teljesen változatlan marad",
      "D. Frekvenciája fokozódik, amplitúdója fokozódik",
      "E. Légzésbénulást okoz"
    ],
    correct: 1,
    exp: "Kiesik a tüdő feszülési receptoraiból induló Hering–Breuer reflex (amely a belégzés idő előtti leállításáért felel), ezért a belégzések elnyúltabbá, mélyebbé és ritkábbá válnak[cite: 7]."
  },
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Helyes állítás keresése",
    q: "A normál nyugodt kilégzés végén a tüdőben maradó gázmennyiség elnevezése:",
    options: [
      "A. reziduális volumen (RV)",
      "B. funkcionális reziduális kapacitás (FRC)",
      "C. vitálkapacitás (VC)",
      "D. exspirációs rezerv volumen (ERV)",
      "E. inspirációs kapacitás (IC)"
    ],
    correct: 1,
    exp: "Az FRC = ERV + RV, az a térfogat, amely a passzív nyugodt kilégzés végén a tüdőben marad az egyensúlyi nyugalmi ponton[cite: 7]."
  },
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Helyes állítás keresése",
    q: "Mikor nagyobb az intrapulmonális (alveoláris) nyomás, mint a légköri nyomás?",
    options: [
      "A. A belégzés teljes ideje alatt",
      "B. A kilégzés alatt (különösen annak első részében)",
      "C. Nyílt légmell (pneumothorax) esetén",
      "D. Mindig kisebb",
      "E. A kilégzést követő légzésszünetben"
    ],
    correct: 1,
    exp: "A levegő kiáramlásához pozitív nyomásgradiens szükséges a külvilág felé: kilégzésben az intrapulmonális nyomás +1..+3 Hgmm-re emelkedik a légkörihez képest[cite: 7]."
  },
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Helyes állítás keresése",
    q: "Egy egészséges emberben nyugalmi körülmények között a légzés perctérfogatának finom szabályozásában melyik tényező a LEGLÉNYEGESEBB?",
    options: [
      "A. A perifériás chemoreceptorok reakciója a pCO2 változásaira",
      "B. A centrális kemoreceptorok reakciója az agyszöveti/liquor pCO2 és H+ változásaira",
      "C. A perifériás kemoreceptorok reakciója a pO2 változásaira",
      "D. A tüdő feszülési receptorainak reflexe",
      "E. A centrális kemoreceptorok közvetlen pO2 érzékenysége"
    ],
    correct: 1,
    exp: "Nyugodt légzésnél a legfőbb vezérlő jel az artériás pCO2 agytörzsi diffúziója: a liquorban keletkező H+-ionok stimulálják a centrális chemoreceptorokat[cite: 7]."
  },
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Helyes állítás keresése",
    q: "A légutak ellenállását közvetlenül CSÖKKENTI (bronchodilatációt okoz):",
    options: [
      "A. maximális erővel történő kilégzés (dinamikus légúti kompresszió)",
      "B. acetilkolin adása",
      "C. a n. vagus tüdőhöz futó ágainak elektromos ingerlése",
      "D. szelektív béta-2 receptor agonisták (pl. salbutamol) adása",
      "E. hisztamin és leukotriének felszabadulása"
    ],
    correct: 3,
    exp: "A béta-2 adrenerg receptorok serkentése cAMP úton ellazítja a hörgők simaizomzatát, tágítja a lumenüket és csökkenti a légúti rezisztenciát[cite: 7]."
  },
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Helyes állítás keresése",
    q: "A tüdő alveoláris surfactantjának (felületaktív anyagának) hiányában:",
    options: [
      "A. az O2 diffúziós kapacitása megnövekszik",
      "B. a tüdő compliance (tágulékonysága) drasztikusan csökken, megnő a felületi feszültség",
      "C. a légúti ellenállás lecsökken",
      "D. a légzési munka lényegesen kisebb lesz",
      "E. az alveolusok összeesési (atelektázia) tendenciája megszűnik"
    ],
    correct: 1,
    exp: "A II-es típusú pneumocyták által termelt surfactant csökkenti a felületi feszültséget; hiányában (IRDS) a tüdő merevvé válik, compliance-e zuhan, a légzési munka kimerítően megnő[cite: 7]."
  },
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Helytelen állítás keresése",
    q: "A légzőizmok fokozott munkavégzését eredményezik az alábbi állapotok, KIVÉVE:",
    options: [
      "A. csökkent tüdőcompliance (pl. tüdőfibrosis)",
      "B. csökkent légúti ellenállás",
      "C. a légzési perctérfogat jelentős növekedése (fizikai munka, hiperventiláció)",
      "D. bronchoconstrictio (asztmás roham)",
      "E. a surfactant csökkent termelődése"
    ],
    correct: 1,
    exp: "A csökkent légúti ellenállás KÖNNYÍTI a levegő áramlását, így csökkenti az izmok terhelését[cite: 7]."
  },
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Helytelen állítás keresése",
    q: "Válassza ki az egyetlen HELYTELEN állítást a légzésmechanikáról!",
    options: [
      "A. A nyugodt belégzés aktív izommunkát igényel, míg a nyugodt kilégzés túlnyomórészt passzív folyamat",
      "B. Nyugodt légzés esetén az intrathoracalis (pleuralis) és az intrapulmonalis (alveolaris) nyomások a teljes ciklus alatt mindig azonos fázisban és azonos előjellel változnak",
      "C. Nyugodt légzés során az intrapleuralis nyomás a légzési ciklus teljes tartama alatt szubatmoszférikus (negatív) marad",
      "D. A nyugodt belégzés során a mellkas tágulása miatt az intrathoracalis nyomás még negatívabbá válik",
      "E. A belégzés kezdetén az intrapulmonalis nyomás átmenetileg a légköri nyomás alá esik"
    ],
    correct: 1,
    exp: "Kilégzésben az intrapulmonalis nyomás POZITÍVVÁ válik (+1..+2 Hgmm), míg a pleurális nyomás mindvégig NEGATÍV marad a külvilághoz képest[cite: 7]."
  },

  // =========================================================================
  // 10. TÉMA: Testfolyadékok, vérképzés és hemosztázis
  // =========================================================================
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "A vérképző őssejtek differenciálódását és a vérsejtek termelődését serkentő citokinek (kolónia-stimuláló faktorok) szerepe:",
    options: [
      "A. az őssejtek elköteleződésének (differenciálódásának) és proliferációjának irányítása egy adott sejtvonal felé",
      "B. kizárólag a sejtek fagocitáló mozgásának serkentése",
      "C. az érett sejtek apoptózisának felgyorsítása",
      "D. a plazmafehérjék lebontása",
      "E. a hemoglobin glikációja"
    ],
    correct: 0,
    exp: "A hematopoetikus növekedési faktorok (EPO, TPO, G-CSF, GM-CSF, IL-3) a multipotens őssejtek irányított érését és osztódását stimulálják[cite: 7]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "A laboratóriumi vizsgálat során a beteg vizeletében nincs urobilinogén (UBG), a vérplazmában viszont a bilirubin direkt (konjugált) reakciót mutatott. Mi a legvalószínűbb kórfolyamat?",
    options: [
      "A. intravascularis haemolysis",
      "B. vesebetegség",
      "C. Gilbert-szindróma",
      "D. hemoglobin szintézis zavara",
      "E. epevezeték elzáródása (mechanikus/posthepaticus icterus)"
    ],
    correct: 4,
    exp: "Elzáródásos epekőnél a májban már konjugált bilirubin nem jut be a bélbe, így nem képződik belőle UBG; a felgyülemlő direkt bilirubin visszalép a vérbe és a vizelettel ürül[cite: 7]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helytelen állítás keresése",
    q: "Válassza ki az emberi vérre vonatkozó normálértékek közül az egyetlen HELYTELENT!",
    options: [
      "A. Hematokrit: 0,40 - 0,50 (40-50%)",
      "B. Vörösvértestszám: 4,2 - 5,5 T/liter (millió/ul)",
      "C. Egy vörösvértest átlagos hemoglobintartalma (MCH): 28 - 33 pg",
      "D. Fehérvérsejtszám: 4 - 10 G/liter (ezer/ul)",
      "E. Átlagos vörösvértest-térfogat (MCV): 140 - 180 fl"
    ],
    correct: 4,
    exp: "A normális MCV értéke 80–95 fl; a 140–180 fl súlyosan kóros, extrém méret lenne[cite: 7]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helytelen állítás keresése",
    q: "A humán vérplazma összetevőinek koncentrációjára érvényes értékek közül melyik HELYTELEN?",
    options: [
      "A. Vérplazma összes fehérjekoncentrációja: 20 - 40 g/liter",
      "B. Éhomi plazma glükózkoncentrációja: 4,0 - 5,5 mmol/l",
      "C. Összes plazmalipid: 4,5 - 8,5 g/liter",
      "D. Ketontestek éhomi szintje: < 0,5 mmol/l",
      "E. Plazma Na+ koncentrációja: 135 - 145 mmol/l"
    ],
    correct: 0,
    exp: "A normális plazmafehérje koncentráció 60–80 g/l; a 20–40 g/l súlyos, életveszélyes hipoproteinémia[cite: 7]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helytelen állítás keresése",
    q: "A perifériás vérben normálisan előforduló fehérvérsejttípusok közé tartoznak az alábbiak, KIVÉVE:",
    options: [
      "A. limfociták",
      "B. szegmentált neutrofil granulociták",
      "C. monociták",
      "D. érett eritrociták",
      "E. eozinofil granulociták"
    ],
    correct: 3,
    exp: "Az eritrociták vörösvértestek, nem a fehérvérsejtek csoportjába tartoznak[cite: 7]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helytelen állítás keresése",
    q: "A véralvadási kaszkádban közvetlen kofaktorként vagy szubsztrátként nélkülözhetetlenek, KIVÉVE:",
    options: [
      "A. a fibrinogén",
      "B. a K-vitamin (gamma-glutamil karboxilációhoz)",
      "C. a plazma nátriumkoncentrációjának apró ingadozásai",
      "D. az ionizált kalcium (Ca2+, IV. faktor)",
      "E. a vérlemezkék negatív töltésű foszfolipid felszíne"
    ],
    correct: 2,
    exp: "A véralvadási enzimek aktivitása Ca2+-függő; a plazma Na+-nak nincs specifikus kofaktor szerepe az alvadási kaszkádban[cite: 7]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helytelen állítás keresése",
    q: "Válassza ki az egyetlen HELYTELEN állítást a vér oxigéntranszportjáról!",
    options: [
      "A. A hemoglobin O2-telítettsége a pCO2 növekedésével csökken (Bohr-effektus)",
      "B. A vér teljes oxigéntartalma független a vér hemoglobin-koncentrációjától",
      "C. A vérplazma kis mennyiségben fizikailag oldott O2-t is tartalmaz",
      "D. A pH csökkenése (acidózis) jobbra tolja az O2-disszociációs görbét, segítve az O2 leadását",
      "E. A hőmérséklet emelkedése csökkenti a hemoglobin oxigén iránti affinitását"
    ],
    correct: 1,
    exp: "A vér oxigénszállító kapacitása döntően a hemoglobin mennyiségétől függ: 1 g Hb 1,34 ml O2-t képes kötni; függetlenségről beszélni durva tévedés[cite: 7]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helytelen állítás keresése",
    q: "Válassza ki a csontvelői vérlemezkeképződésre (thrombopoiesis) vonatkozó HELYTELEN állítást!",
    options: [
      "A. A thrombocyták a megakaryocyták citoplazmanyúlványainak feldarabolódásával jönnek létre",
      "B. A thrombocyták mag nélküli citoplazmatöredékek",
      "C. A folyamat fő humorális stimulátora a thrombopoietin (TPO)",
      "D. A vérlemezkék a fehérvérsejtek citoplazmájának fragmentációjából alakulnak ki a keringésben",
      "E. Élettartamuk a vérben kb. 8-10 nap"
    ],
    correct: 3,
    exp: "A vérlemezkék a csontvelői megakaryocytákból származnak, semmi közük a fehérvérsejtekhez[cite: 7]."
  }
];

// Kérdések beolvasása az index globális tömbjébe
window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS.concat(pdf20Questions);