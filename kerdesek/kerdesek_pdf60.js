/**
 * Orvosi / Fogorvosi Élettan Kérdésbank - PDF 60 (el60.pdf)
 * Besorolva a hivatalos előadási tematika alapján:
 * - Veseélettan: Glomeruláris filtráció és clearance
 * - Veseélettan: Tubuláris transzportfolyamatok és vizeletkoncentrálás
 * - Sav-bázis háztartás és kompenzációs mechanizmusok
 * - A sejtműködés szabályozása, endokrinológia és hormonális mechanizmusok
 * - Nemi működések és szaporodásbiológia
 * - Szénhidrát-anyagcsere és a pancreas endokrin funkciói
 * - Pajzsmirigy, Mellékvese és Növekedési hormon
 */

window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS || [];

const pdf60Questions = [
  // =========================================================================
  // 1. TÉMA: Vese: Glomeruláris filtráció és Clearance
  // =========================================================================
  {
    ppt: "Veseélettan: Glomeruláris filtráció és clearance",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Az alábbi tényezők és paraméterek közül melyek növelik a glomeruláris filtrációs rátát (GFR)?\n1. Az afferens arteriola tágulata (dilatációja)\n2. A glomeruluskapillárisokban uralkodó hidrosztatikai nyomás növekedése\n3. A vérplazma fehérjekoncentrációjának és onkotikus nyomásának csökkenése\n4. A renális plazmaáramlás (RPF) növekedése",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A nettó filtrációs nyomás (Puf = P_kapi - P_Bowman - Pi_kapi) nő, ha a hidrosztatikai nyomás emelkedik, ha csökken az onkotikus ellennyomás, vagy ha az afferens tágulat növeli az átáramlást."
  },
  {
    ppt: "Veseélettan: Glomeruláris filtráció és clearance",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Az alábbi hemodinamikai változások közül melyek CSÖKKENTIK a glomeruláris filtrációs rátát (GFR)?\n1. Az afferens arteriola szűkülete (konstrikciója)\n2. Az efferens arteriola tágulata (dilatációja)\n3. A renális plazmaáramlás (RPF) csökkenése\n4. A tubuláris folyadékáramlás és a disztális NaCl-kínálat jelentős csökkenése",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "Az afferens szűkület és az efferens tágulat esést okoz a glomerulus hidrosztatikai nyomásában; a disztális NaCl esése viszont a tubuloglomeruláris feedback (TGF) révén tágítja az afferens eret, tehát az növelné a GFR-t."
  },
  {
    ppt: "Veseélettan: Glomeruláris filtráció és clearance",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Egészséges emberben az endogén kreatinin clearance kismértékben alulbecsüli a valódi glomeruláris filtráció mértékét,\nMERT\nINDOKLÁS: A vizelettel ürített kreatinin kb. 10-15%-a a proximális tubulusokban aktív szekrécióval választódik ki.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás HAMIS, de az indoklás IGAZ",
      "E. Mindkettő hamis"
    ],
    correct: 3,
    exp: "A tubuláris szekréció miatt a vizeletbe több kreatinin kerül, így a kreatinin clearance nem alul-, hanem mintegy 10-20%-kal FELÜLBECSÜLI a valódi GFR-t (állítás hamis, indoklás igaz)."
  },
  {
    ppt: "Veseélettan: Glomeruláris filtráció és clearance",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Emberi vizeletben myoglobin súlyos kóros körülmények között (pl. kiterjedt crush-szindróma, rhabdomyolysis) sem jelenhet meg,\nMERT\nINDOKLÁS: A myoglobin molekulatömege és negatív töltése következtében nem képes átjutni a glomeruláris filtrációs gáton.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mind az állítás, mind az indoklás HAMIS"
    ],
    correct: 4,
    exp: "A myoglobin kis méretű fehérje (~17 kDa), masszív izompusztuláskor könnyen átjut a szűrőn, megjelenik a vizeletben (myoglobinuria), és akut tubuláris nekrózist okozhat."
  },

  // =========================================================================
  // 2. TÉMA: Vese: Tubuláris transzport és Vizeletkoncentrálás
  // =========================================================================
  {
    ppt: "Veseélettan: Tubuláris transzportfolyamatok és vizeletkoncentrálás",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Milyen transzportfehérjék találhatók a proximális tubulus hámsejtek LUMINÁLIS (apikális) kefeszegély membránjában?\n1. Na+/H+ antiporter (NHE3)\n2. Na+/glükóz szimporterek (SGLT2 és SGLT1)\n3. Cl-/anion (pl. formiát, oxalát) cserélők\n4. Na+/K+-ATP-áz pumpa",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "Az NHE3, az SGLT-k és az aminosav/anion transzporterek az apikális luminális felszínen találhatók; a Na+/K+-ATP-áz kizárólag a BAZOLATERÁLIS membránban működik."
  },
  {
    ppt: "Veseélettan: Tubuláris transzportfolyamatok és vizeletkoncentrálás",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Mely anyagok koncentrációja csökken meredeken (legalább a kiindulási érték felére vagy nullára), mire a szűrlet a proximális tubulus végéhez ér?\n1. Glükóz (100%-os visszaszívás)\n2. Bikarbonát (HCO3-, kb. 85-90%-os visszaszívás)\n3. Aminosavak (szinte teljes visszaszívás)\n4. Karbamid (urea) és kreatinin",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A glükóz és aminosavak teljesen, a bikarbonát döntő része visszaszívódik, így tubuláris koncentrációjuk a plazmaszint töredékére esik; a kreatinin és inulin koncentrációja a vízvisszaszívás miatt nő."
  },
  {
    ppt: "Veseélettan: Tubuláris transzportfolyamatok és vizeletkoncentrálás",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A cortico-medullaris ozmotikus velőgradiens nagyságát CSÖKKENTIK az alábbi tényezők:\n1. A vasa recta velőkeringés átáramlásának túlzott fokozódása ('medullary washout')\n2. Kacsdiuretikumok (furoszemid) adagolása a Na+/K+/2Cl- transzport gátlásával\n3. Pitvari natriuretikus peptid (ANP) felszabadulása\n4. A Henle-kacs vastag felszálló szárán történő fokozott aktív nátriumtranszport",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A gyors velőátáramlás kimossa az intersticiális ozmolitokat, a furoszemid megbénítja az ellenáramlásos sokszorozót, az ANP pedig velőtágulatot okoz; az aktív TAL transzport ezzel szemben építi a gradienst."
  },
  {
    ppt: "Veseélettan: Tubuláris transzportfolyamatok és vizeletkoncentrálás",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A cortico-medullaris ozmotikus gradiens koncentráló vesében nagyobb, mint hígító veseműködés esetén,\nMERT\nINDOKLÁS: Koncentráló vesében ADH hatására több urea lép ki a belső velői papilláris gyűjtőcsatornából a papilláris intersticiumba.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "Az ADH aktiválja az UT-A1 és UT-A3 karbamid-transzportereket a belső velőben, így az urea felhalmozódik a papilláris intersticiumban, kialakítva az akár 1200 mOsm/kg-os csúcsgradienst."
  },
  {
    ppt: "Veseélettan: Tubuláris transzportfolyamatok és vizeletkoncentrálás",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Szabad vízfelvétel mellett a tiszta NaCl-bevitelt követően az extracelluláris folyadéktér volumene jelentősen megnő,\nMERT\nINDOKLÁS: A NaCl-bevitelt követően kialakuló hyperosmoticus normovolaemia rövidesen isoosmoticus hypervolaemiává alakul át a szomjúság és a gyors ozmoreguláció révén.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük közvetlen kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A sóbevitel növeli az EC ozmolaritást, ami vizet von el az IC térből, valamint szomjúságot és ADH-szekréciót vált ki. A megivott és visszatartott víz az EC teret izoozmotikusan hipervolémiássá tágítja."
  },
  {
    ppt: "Veseélettan: Tubuláris transzportfolyamatok és vizeletkoncentrálás",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A szénsavanhidráz gátlása (acetazolamid) a proximális tubulusban csökkenti a nátrium-reabszorpciót,\nMERT\nINDOKLÁS: Ezen a tubulusszakaszon a nátrium visszaszívásának jelentős része a szénsav-eredetű H+-ionok luminalis szekréciójához (NHE3 antiport) kötött.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük közvetlen kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A szénsavanhidráz hiányában csökken az intracelluláris H+ képződés, ami leállítja a Na+/H+ cserét (NHE3), így a Na+ és a HCO3- a vizeletben marad (bikarbonátúria és diurézis)."
  },

  // =========================================================================
  // 3. TÉMA: Sav-bázis háztartás és kompenzációs mechanizmusok
  // =========================================================================
  {
    ppt: "Sav-bázis háztartás és kompenzációs mechanizmusok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Tartós, heves hiperventiláció tetániás izomgörcsöket provokálhat,\nMERT\nINDOKLÁS: A hiperventiláció hatására megnő az alveoláris levegőben az oxigén parciális nyomása.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is IGAZ, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 1,
    exp: "A tetánia oka a pCO2 esése miatti respiratorikus alkalózis: a lúgosodó plazmában a fehérjék több Ca2+-t kötnek meg, az ionizált Ca2+ szint leesik, ami fokozza a motoneuronok ingerlékenységét (az O2-tenzió emelkedése igaz, de nem ez okozza a görcsöt)."
  },
  {
    ppt: "Sav-bázis háztartás és kompenzációs mechanizmusok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Nátrium-bikarbonát (NaHCO3) infúziójával a fennálló súlyos hiperkalémia hatékonyan mérsékelhető,\nMERT\nINDOKLÁS: A kialakuló alkalózis hatására a sejtekből protonok lépnek ki, miközben az extracelluláris térből káliumionok vándorolnak be a sejtek belsejébe.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "Az alkalinizálás protonokat von el a pufferekből, aminek kompenzálására a sejtekből H+ lép ki az extracelluláris térbe, elektrokémiai egyensúlyként pedig K+ lép be a sejtekbe, csökkentve a veszélyes plazma-káliumszintet."
  },

  // =========================================================================
  // 4. TÉMA: Általános endokrinológia, Hipofízis és Növekedési hormon
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A peptidhormonok szintézisére és szekréciójára vonatkozó állítások közül melyik a HELYTELEN?",
    options: [
      "A. A szintézis során a riboszómákon először egy szignál peptidet tartalmazó preprohormon képződik",
      "B. A szekrécióra kész érett hormon a citoplazmatikus szekréciós granulumokban raktározódik",
      "C. A szintetizált peptidhormonok a szintézis után közvetlenül nem raktározódnak, hanem azonnal szabad diffúzióval hagyják el a sejtet",
      "D. A szekréció exocitózissal valósul meg az intracelluláris Ca2+ és/vagy cAMP szintjének emelkedésekor",
      "E. A Golgi-apparátusban enzimatikus hasítások és poszttranszlációs módosítások mehetnek végbe"
    ],
    correct: 2,
    exp: "A peptidhormonok vezikulákban raktározódnak és exocitózissal ürülnek (a szteroid hormonokra jellemző, hogy nem raktározódnak nagy mennyiségben, hanem szintézis után diffundálnak)."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A növekedési hormon (GH / STH) metabolikus hatásaira igazak az alábbiak, KIVÉVE:",
    options: [
      "A. Serkenti a lipolízist az adipocytákban és növeli a plazma szabad zsírsavszintjét",
      "B. Növeli a glükózfelvételt és a glükóz oxidációját a nyugalmi vázizomzatban és a zsírszövetben",
      "C. Fokozza a máj glükoneogenezisét és emeli a vércukorszintet (diabetogén hatás)",
      "D. Fokozza a sejtek aminosav-felvételét és serkenti a fehérjeszintézist",
      "E. A májban termelődő IGF-1 (szomatomedin C) révén serkenti az epiphysealis porcok növekedését"
    ],
    correct: 1,
    exp: "A GH anti-inzulin (diabetogén) hormon: CSÖKKENTI a glükózfelvételt az izomban és zsírszövetben, a glükózt a központi idegrendszer számára tartja fenn."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Mely tényezők fokozzák a növekedési hormon (hGH) szekrécióját az adenohipofízisben?\n1. Hypoglycaemia és éhezés\n2. A keringő aminosavak (pl. arginin) koncentrációjának növekedése\n3. Fizikai megterhelés és mély alvás (lassú hullámú NREM alvás kezdetén)\n4. Szomatosztatin infúziója",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A hipoglikémia, az arginin, a stressz, a mozgás és az alvás serkenti a GH-t; a szomatosztatin (GHIH) ezzel szemben a legerősebb fiziológiás gátló faktora."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A hormonális szabályozás sajátosságaira vonatkozó megállapítások közül melyik a HELYTELEN?",
    options: [
      "A. Receptor down-reguláció során a tartósan magas hormonszint hatására csökken a funkcionális receptorok száma a célsejten",
      "B. Homológ deszenzitizáció során a célsejt csak a saját túlzott ligandumával szemben válik érzéketlenebbé",
      "C. Heterológ deszenzitizáció esetén egy hormon hatására más receptorok jelátvitele is gátlódik",
      "D. A tejmirigyek denervációja (az emlőbimbó érző beidegzésének átvágása) növeli a tejelválasztást és tejürülést",
      "E. Az adenohipofízis hormonjainak szekréciója pulzatilis és cirkadián ritmust mutat"
    ],
    correct: 3,
    exp: "A szopási inger nélkül nincs oxitocin-felszabadulás (nincs tejürülés / let-down reflex) és csökken a prolaktin is, így a denerváció leállítja a normális laktációt."
  },

  // =========================================================================
  // 5. TÉMA: Pajzsmirigy és Mellékvesevelő
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A pajzsmirigyhormonok (T3, T4) élettani hatásaira igazak az alábbiak, KIVÉVE:",
    options: [
      "A. Növelik az alapanyagcserét és a szervezet szöveti oxigénfogyasztását (kalorigén hatás)",
      "B. Növelik a szívizom béta-1 adrenerg receptorainak sűrűségét, ezáltal növelik a pulzust és perctérfogatot",
      "C. Megnyújtják az ínreflexek reflexidejét (lassítják a reflexválaszt)",
      "D. Nélkülözhetetlenek az idegrendszer embrionális és posztnatális éréséhez",
      "E. Növelik a Na+/K+-ATP-áz enzimek expresszióját a legtöbb szövetben"
    ],
    correct: 2,
    exp: "A pajzsmirigyhormonok GYORSÍTJÁK az ideg- és izomműködést, így a reflexidő hiperfunkcióban LERÖVIDÜL (a reflexidő megnyúlása a hypothyreosis jellemzője)."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A mellékvesevelő működésére vonatkozó állítások közül melyik a HELYTELEN?",
    options: [
      "A. A humán felnőtt mellékvesevelőből szekretált katekolaminok mintegy 80%-a noradrenalin és csak 20%-a adrenalin",
      "B. A katekolamin-bioszintézis sebességmeghatározó enzime a tirozin-hidroxiláz",
      "C. A preganglionáris szimpatikus rostokból felszabaduló acetilkolin (nikotinos receptoron) stimulálja a kromaffin sejtek szekrécióját",
      "D. Az acetilkolin megkötődése a kromaffin sejtek depolarizációját és Ca2+-beáramlását váltja ki",
      "E. A mellékvesevelő funkcionálisan és fejlődéstanilag egy módosult szimpatikus ganglionnak felel meg"
    ],
    correct: 0,
    exp: "Éppen fordítva: a humán mellékvesevelő termelésének kb. 80%-a ADRENALIN és csak 20%-a noradrenalin (a feniletanolamin-N-metil-transzferáz enzim magas aktivitása miatt)."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A thyreoidea-stimuláló hormonra (TSH) igazak az alábbiak, KIVÉVE:",
    options: [
      "A. Tirozin-kináz típusú intrinsic enzimatikus receptorhoz kötődik a pajzsmirigysejtek felszínén",
      "B. Két alegységből (nem-specifikus alfa és hormon-specifikus béta) álló glikoprotein",
      "C. Szekrécióját a hypothalamus TRH serkenti, míg a szabad T3/T4 negatív visszacsatolással gátolja",
      "D. Stimulálja a pajzsmirigy jódfelvételét (NIS), tireoglobulin-szintézisét és endocitózisát",
      "E. Gs-proteinhez kapcsolt metabotróp receptoron át az adenilát-cikláz/cAMP útvonalat aktiválja"
    ],
    correct: 0,
    exp: "A TSH receptora nem tirozin-kináz, hanem hettranszmembrános Gs-protein kapcsolt receptor, amely cAMP-n és PKA-n keresztül fejti ki hatását."
  },

  // =========================================================================
  // 6. TÉMA: Szénhidrát-anyagcsere és a Pancreas hormonjai
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Az alábbi szövetek közül melyekben INZULIN-FÜGGŐ a glükóz sejtbe történő felvétele (GLUT4 transzporterrel)?\n1. Vázizomzat nyugalomban\n2. Zsírszövet (adipocyták)\n3. Szívizomzat\n4. Vörösvértestek és a vese proximális tubulusai",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "A vázizom, szívizom és zsírszövet GLUT4-et használ, melynek membránba helyeződése inzulin-dependens; a vörösvértestek (GLUT1), a máj (GLUT2) és az agy (GLUT3) felvétele inzulin-független."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A glukagon hormon élettani hatásaira igazak:\n1. Növeli a májsejtek glükózleadását\n2. Serkenti a glikogenolízist a májban (cAMP/PKA úton)\n3. Fokozza a máj glükoneogenezisét aminosavakból és laktátból\n4. Gátolja a ketontestek képződését",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A glukagon katabolikus, éhomi hormon: glükózt szabadít fel a májból, és serkenti (nem gátolja!) a ketogenezist a szabad zsírsavak béta-oxidációjának elősegítésével."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Mely klinikai és laboratóriumi tünetek jellemzik a dekompenzált 1-es típusú diabetes mellitust (IDDM)?\n1. Hiperglikémia és glukozúria\n2. Ozmotikus diurézis okozta polyuria és következményes polydipsia\n3. Ketoacidózis és acetonszagú lehelet\n4. Negatív nitrogénegyensúly és testsúlyvesztés a fokozott fehérjelebontás miatt",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "Abszolút inzulinhiányban a sejtek éheznek, felpörög a lipolízis (ketoacidózis) és a proteolízis (súlyvesztés), miközben a glukozúria ozmotikus polyuriát generál."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A proinzulin molekulára vonatkozó igaz megállapítások:\n1. Egyetlen polipeptidláncból álló bioszintetikus prekurzor\n2. Három diszulfidhidat tartalmaz a láncon belül\n3. A hasnyálmirigy B-sejtjeiben ekvimoláris mennyiségű C-peptidre és érett inzulinra hasad\n4. Biológiai aktivitása és vércukorcsökkentő ereje a célsejteken többszöröse az inzulinénak",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A proinzulin egy láncú molekula, de biológiai aktivitása elenyésző (mindössze kb. 5-10%-a az érett kétláncú inzulinénak)."
  },

  // =========================================================================
  // 7. TÉMA: Nemi működések és Szaporodásbiológia
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A hím nemi működésekre és a spermatogenezisre igazak az alábbiak, KIVÉVE:",
    options: [
      "A. A normális spermatogenezis lezajlásához mind az FSH, mind a magas intratesticularis tesztoszteron szint elengedhetetlen",
      "B. A spermiumképzéshez a tesztoszteron jelenléte nem szükséges, azt egyedül az LH irányítja",
      "C. Az LH a Leydig-sejtek tesztoszteron-szintézisét serkenti",
      "D. A Sertoli-sejtek által termelt inhibin negatív visszacsatolással gátolja az adenohipofízis FSH elválasztását",
      "E. A tesztoszteron a perifériás célszervek egy részében (pl. prostata) 5-alfa-dihidrotesztoszteronná (DHT) alakulva fejti ki hatását"
    ],
    correct: 1,
    exp: "A spermatogenezis leáll tesztoszteron hiányában; az LH csupán a Leydig-sejteket stimulálja, amelyek megtermelik a folyamathoz szükséges helyi tesztoszteront."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A progeszteron élettani hatásaira igaz állítások, KIVÉVE:",
    options: [
      "A. Elősegíti az endometrium szekréciós fázisának kialakulását a luteális fázisban",
      "B. Csökkenti a myometrium spontán kontrakcióit (nyugalomban tartja a méhet)",
      "C. Csökkenti a méhizomzat oxitocin iránti érzékenységét",
      "D. Depolarizációt és azonnali akciós potenciálokat vált ki az uterus simaizomsejtjeiben",
      "E. A luteális fázisban kisfokú (kb. 0,5 °C-os) testhőmérséklet-emelkedést okoz a hypothalamusban"
    ],
    correct: 3,
    exp: "A progeszteron hiperpolarizálja és stabilizálja a myometrium membránját ('progeszteron-blokk'), gátolva a depolarizációt és a koraszülést."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Az ovulációt közvetlenül megelőző órákban mely hormon plazmakoncentrációjának kiugró emelkedése (LH-csúcs) indítja el a tüszőrepedést?",
    options: [
      "A. Prolaktin",
      "B. Luteinizáló hormon (LH)",
      "C. Progeszteron",
      "D. Oxitocin",
      "E. Inhibin"
    ],
    correct: 1,
    exp: "A domináns tüsző magas ösztrogénszintje pozitív visszacsatolást vált ki, ami masszív LH-kiáramláshoz (LH-peak) és 24-36 órán belül ovulációhoz vezet."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Az ösztrogének biológiai hatásai nőkben:\n1. Elősegítik az ovárium tüszőinek érését és fokozzák a méh endometriumának proliferációját\n2. Serkentik az emlőmirigyek kivezetőcsöveinek fejlődését\n3. Csökkentik a plazma LDL-koleszterin szintjét és védik az érfalat\n4. A ciklus késői follikuláris fázisában pozitív feedback révén kiváltják az LH-csúcsot",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "Az ösztrogének a női szekunder nemi jellegek fenntartói, proliferatív hatásúak a nemi szerveken, antiaterogének a lipidprofilra nézve, és felelősek az ovulációs LH-lökésért."
  }
];

// Kérdések összefűzése a központi listával
window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS.concat(pdf60Questions);