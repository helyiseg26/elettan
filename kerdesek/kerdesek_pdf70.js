/**
 * Orvosi / Fogorvosi Élettan Kérdésbank - PDF 70 (el70.pdf)
 * Besorolva a hivatalos előadási tematika alapján:
 * - A sejtműködés szabályozása, jelátviteli folyamatok
 * - Szénhidrát- és lipidanyagcsere, a pancreas hormonjai
 * - Mellékvesekéreg és mellékvesevelő hormonjai
 * - Pajzsmirigy és kalcium-anyagcsere
 * - Nemi működések és szaporodásbiológia
 * - Táplálkozásélettan, vitaminok és energiaháztartás
 * - Termoreguláció (hőszabályozás, láz)
 */

window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS || [];

const pdf70Questions = [
  // =========================================================================
  // 1. TÉMA: Mellékvesekéreg, Stressz és Glükokortikoidok
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A kortizol anti-allergiás és gyulladáscsökkentő hatásának mechanizmusai:\n1. Csökkenti a kapillárisok permeabilitását (endothel stabilizálás)\n2. Csökkenti a hisztamin és leukotriének felszabadulását a hízósejtekből\n3. Csökkenti a keringő eozinofil granulociták és limfociták számát\n4. Fokozza a vazodilatációt",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "A glükokortikoidok gátolják a foszfolipáz A2-t (lipokortin/annexin révén), csökkentik a kapillárispermeabilitást és a hisztaminfelszabadulást, valamint eozinopéniát és limfopéniát okoznak."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A kortizol fiziológiás és farmakológiai hatásai:\n1. A májban metabolizálódik és metabolitjai konjugálva a vizelettel ürülnek\n2. A vérplazmában túlnyomórészt transzkortinhoz (CBG) kötődve szállítódik\n3. Szekréciója cirkadián (diurnális) ritmust mutat: a kora reggeli órákban tetőzik\n4. Szabadon filtrálódik a vesében, ha albuminhoz van kötve",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A kortizol CBG-hez kötött, májban inaktiválódik, reggel a legmagasabb a szintje; az albuminhoz kötött frakció a glomeruláris szűrőn nem filtrálódhat szabadon."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Ha a szervezetbe kívülről tartósan glükokortikoidot (pl. kortizolt) juttatunk be, az csökkenti a mellékvesekéreg endogén kortizolszekrécióját,\nMERT\nINDOKLÁS: A magas perifériás kortizolszint negatív visszacsatolással gátolja a hipotalamusz CRH- és az adenohipofízis ACTH-elválasztását.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A hosszan tartó szteroidterápia a negatív feedback révén szupresszálja a CRH/ACTH tengelyt, ami a mellékvesekéreg zona fasciculata és reticularis atrófiájához vezet."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Kortizol hatására a vérplazma glükózszintje emelkedik,\nMERT\nINDOKLÁS: A kortizol fokozza az extrahepatikus szövetekben (vázizom, kötőszövet) a fehérjék katabolizmusát, amivel aminosav-prekurzorokat biztosít a máj glükoneogeneziséhez.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A kortizol diabetogén hormon: az izomból aminosavakat mobilizál, serkenti a máj glükoneogenetikus enzimjeit és csökkenti a perifériás glükózfelvételt."
  },

  // =========================================================================
  // 2. TÉMA: Szénhidrát- és lipidanyagcsere, a Pancreas hormonjai
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Az inzulin szekrécióját serkenti a hasnyálmirigy béta-sejtjeiben:\n1. A vérplazma emelkedett glükózszintje\n2. Keringő aminosavak (különösen arginin és leucin)\n3. Gasztrointesztinális hormonok (inkretinek: GLP-1, GIP, valamint CCK)\n4. Béta-ketosavak felhalmozódása",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "Az inzulinszekréció fő ingere a glükóz, de az aminosavak, az inkretinek (entero-inzuláris tengely) és a ketosavak is közvetlenül fokozzák az exocitózist."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Nagy dózisú inzulin heveny beadását (vagy túladagolását) követően:\n1. Csökken a vérplazma K+-koncentrációja (hipokalémia veszélye)\n2. Fokozódik a vázizomsejtek és zsírsejtek glükózfelvétele (GLUT4 kihelyeződés)\n3. Csökken a vérplazma glükózszintje (hipoglikémia)\n4. Csökken a vérplazma Na+-koncentrációja",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "Az inzulin stimulálja a Na+/K+-ATP-ázt, ami K+-ot léptet be a sejtekbe (hipokalémia), és kiváltja a GLUT4 fúzióját; a plazma Na+-koncentrációját közvetlenül nem csökkenti."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: 50 g glükóz orális bevitele kifejezettebb inzulinszekréciót vált ki a hasnyálmirigyből, mint ugyanennyi glükóz intravénás infúziója (inkretin-hatás),\nMERT\nINDOKLÁS: Az orálisan bejutó tápanyagok hatására a bélnyálkahártya endokrin sejtjeiből inkretin hormonok (GLP-1, GIP) szabadulnak fel, melyek serkentik a béta-sejtek inzulinkiáramlását.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "Ez az inkretin-hatás élettani alapja: a bélrendszer hormonjai előzetesen felkészítik és fokozzák a pancreas béta-sejtjeinek válaszát az orális táplálékfelvételre."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A májsejtek a szisztémás perifériás szöveteknél lényegesen magasabb inzulinkoncentrációnak vannak kitéve,\nMERT\nINDOKLÁS: A hasnyálmirigy vénás vére közvetlenül a vena portae-ba ömlik, és az inzulin mintegy 50%-a már az első májon való áthaladáskor lebomlik.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A portális keringés közvetlenül a májba viszi a pancreas hormonszekrétumát, ahol a hepatocyták 'first-pass' mechanizmussal az inzulin felét azonnal eliminálják."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Éhezés során a májban zajló glükoneogenezis a vércukorszint fenntartásának nélkülözhetetlen elemévé válik,\nMERT\nINDOKLÁS: A máj glikogénraktárai körülbelül 12-24 óra alatt kimerülnek, így a táplálékból felvett glükóz hiányát csak endogén szintézissel (laktátból, aminosavakból, glicerinből) lehet pótolni.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A máj korlátozott glikogénraktárai gyorsan kiürülnek éhezéskor, ezt követően a vázizomból mobilizált aminosavakból (alanin) és zsírszöveti glicerinből a glükoneogenezis látja el az agyat."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A glikozilált hemoglobin (HbA1c) szintjének meghatározásával következtetni lehet a vizsgálatot megelőző 2-3 hónap átlagos vércukorszintjére,\nMERT\nINDOKLÁS: A glükóz hemoglobinhoz történő kötődése egy specifikus enzim által katalizált gyors, reverzíbilis folyamat.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás IGAZ, de az indoklás HAMIS",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 2,
    exp: "A HbA1c valóban a vörösvértestek élettartamának (120 nap) megfelelő retrospektív glikémiás kontrollt mutatja, de a folyamat NEM enzimatikus, hanem spontán, nem-enzimatikus glikáció (Maillard-reakció)."
  },

  // =========================================================================
  // 3. TÉMA: Mellékvesevelő és Katekolaminok
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Az adrenalin béta-1 adrenerg receptorokhoz való kötődésének celluláris hatásai a szívizomsejtekben:\n1. Gs-protein útvonalon keresztül aktiválódik az adenilát-cikláz enzim\n2. Növekszik az intracelluláris cAMP-koncentráció\n3. Aktiválódik a protein kináz A (PKA), amely foszforilálja az L-típusú Ca2+-csatornákat és a foszfolambánt\n4. A foszfolipáz-C (PLC) aktivációja révén megnő a citoszolikus IP3 szint",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A béta-1 receptor Gs/cAMP/PKA mechanizmussal működik; a PLC/IP3 tengely a Gq-kapcsolt alfa-1 receptorok sajátossága."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A noradrenalin és adrenalin alfa-1 adrenerg receptorokhoz való kötődése az erek simaizomzatában kiváltja:\n1. A Gq-protein közvetítésével a foszfolipáz-C (PLC) aktiválódását\n2. A membrán PIP2 foszfolipidjének hasítását IP3-ra és diacilglicerinre (DAG)\n3. Az IP3 által mediált kalciumfelszabadulást a szarkoplazmatikus retikulumból\n4. A simaizom összehúzódását és vazokonstrikciót",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "Az alfa-1 receptor a klasszikus Gq/PLC/IP3/Ca2+ útvonalat használja a vascularis simaizom kontrakciójának kiváltására."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A mellékvesevelő daganata (phaeochromocytoma) esetén tapasztalható klasszikus tünetegyüttes:\n1. Paroxizmális vagy tartós hypertonia\n2. Tachycardia és palpitáció\n3. Hyperglycaemia és fokozott glikogenolízis\n4. Megnövekedett alapanyagcsere, verejtékezés és fejfájás",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A phaeochromocytoma túlzott katekolamin-túltermelése masszív vazokonstrikciót, hypertoniát, tachycardiát és hipermetabolikus állapotot (hyperglycaemia, fogyás) idéz elő."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A preszinaptikus alfa-2 adrenerg autoreceptorok stimulálása csökkenti a noradrenalin felszabadulását a szimpatikus axonvégződésekből,\nMERT\nINDOKLÁS: A preszinaptikus alfa-2 receptorok aktivációja Gi-fehérjén keresztül gátolja a feszültségfüggő Ca2+-csatornákat és a transzmitter-exocitózist (negatív autoinhibíció).",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A preszinaptikus alfa-2 receptor negatív feedback gátlást végez a szimpatikus végkészüléken: megakadályozza a noradrenalin túlzott kiáramlását a szinaptikus résbe."
  },

  // =========================================================================
  // 4. TÉMA: Pajzsmirigyhormonok és Szintézisük
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A pajzsmirigyhormonok hiányára (veleszületett vagy szerzett hypothyreosis) jellemző:\n1. Újszülöttkorban kezeletlen esetben kretenizmust (súlyos mentális és testi retardációt) okoz\n2. Felnőttkorban myxoedema, száraz, hideg bőr és meglassultság alakul ki\n3. Gyermekkorban a csontkor elmarad a tényleges biológiai életkortól\n4. Csökkent hidegtűrés és obstipáció kíséri",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "Pajzsmirigyhormon hiányában az agy fejlődése leáll, a csontosodás késik, az alapanyagcsere zuhan, és glükózaminoglikán-felhalmozódás miatt myxoedema jön létre."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A thionamid típusú tireosztatikum, a metimazol (tiamazol) gátolja a jódozott tironinok (T3, T4) szintézisét,\nMERT\nINDOKLÁS: A metimazol hatékonyan gátolja a pajzsmirigy peroxidáz (TPO) enzim működését.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A TPO felelős a jodid oxidációjáért, a tirozilgyökök jódozásáért (organifikáció) és a kapcsolási reakcióért; a metimazol ezt az enzimet gátolja."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Emberben a táplálékkal bevitt jód hiányának tünetei csak hetek vagy hónapok múlva jelentkeznek,\nMERT\nINDOKLÁS: A pajzsmirigy follikulusainak kolloidjában tireoglobulinhoz kötve több heti vagy havi szükségletnek megfelelő hormon és jód raktározódik.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük közvetlen kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A pajzsmirigy kivételes szerv: a kolloidban extracellulárisan raktározott tireoglobulin révén akár 2-3 hónapra elegendő hormontartalékkal rendelkezik."
  },

  // =========================================================================
  // 5. TÉMA: Nemi működések és Szaporodásbiológia
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Ivarérett hím egyednek kívülről huzamos ideig adagolt tesztoszteron hatására a spermiumszám drasztikusan lecsökken (azoospermia),\nMERT\nINDOKLÁS: A magas szisztémás tesztoszteronszint negatív visszacsatolással gátolja a hipotalamusz GnRH- és a hipofízis LH/FSH-szekrécióját, ami az intratesticularis tesztoszterontermelés leállásához vezet.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "Az exogén szteroid leállítja az endogén gonadotropinokat, így a herén belüli mikrokörnyezetben megszűnik a spermatogenezishez szükséges extrém magas tesztoszteronkoncentráció."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Az ovulációt követően a női testhőmérséklet mintegy 0,5 °C-kal megemelkedik (termogén hatás),\nMERT\nINDOKLÁS: A sárgatest (corpus luteum) által termelt progeszteron a hipotalamikus hőközpont neuronjaira hatva megemeli a testhőmérséklet alapjelét.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A luteális fázisban a progeszteron közvetlenül a preoptikus area termoszenzitív neuronjaira hat, kiváltva a bazális testhőmérséklet emelkedését."
  },

  // =========================================================================
  // 6. TÉMA: Táplálkozásélettan, Vitaminok és Energiaháztartás
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Mennyi az egészséges felnőtt ember normális testtömegindexének (BMI) fiziológiás referencia-tartománya?",
    options: [
      "A. 18,5 - 24,9 kg/m2 (kb. 20 - 25 kg/m2)",
      "B. 16 - 20 kg/m2",
      "C. 25 - 30 kg/m2",
      "D. kevesebb mint 16 kg/m2",
      "E. több mint 30 kg/m2"
    ],
    correct: 0,
    exp: "A normális BMI tartomány 18,5–24,9 kg/m2; 25 felett túlsúlyról, 30 felett obezitásról beszélünk."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Mennyi a javasolt napi minimális fehérjebevitel egészséges felnőttben a nitrogénegyensúly fenntartásához?",
    options: [
      "A. 0,8 g / testtömeg-kg / nap",
      "B. 0,8 kg / testtömeg-kg",
      "C. 3,4 g / ttkg",
      "D. 0,12 kg / ttkg",
      "E. 0,12 g / ttkg"
    ],
    correct: 0,
    exp: "A WHO és a táplálkozási irányelvek szerint a javasolt fehérjebevitel 0,8 g/ttkg/nap jó biológiai értékű fehérjékből."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Melyik adat adja meg az emberi fiziológiás fehérjeminimum (amely alatt elkerülhetetlen a fehérjevesztés) legjobb becslését?",
    options: [
      "A. 20 mg/nap",
      "B. 35 - 40 g/nap (kb. 0,5 g/ttkg/nap egy 70 kg-os emberben)",
      "C. 150 - 200 g/nap",
      "D. 200 mg/nap",
      "E. 5 g/nap"
    ],
    correct: 1,
    exp: "A fiziológiás fehérjeminimum az a legkisebb fehérjemennyiség (kb. 35–40 g/nap), amellyel éppen fenntartható a szervezet nulla nitrogénegyensúlya."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Melyik vitamin hiánya okozza a skorbutot (kollagénszintézis zavara, vérzékenység, fogvesztés)?",
    options: [
      "A. C-vitamin (aszkorbinsav)",
      "B. A-vitamin",
      "C. E-vitamin",
      "D. K-vitamin",
      "E. D-vitamin"
    ],
    correct: 0,
    exp: "A C-vitamin kofaktora a prolil- és lizil-hidroxiláz enzimeknek; hiányában a tropokollagén hélix instabil marad, kötőszöveti és kapilláris vérzékenységet okozva."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Melyik vitamin hiánya vezet hemeralopiához (farkasvakság) és xerophthalmiához (szaruhártya-kiszáradás)?",
    options: [
      "A. A-vitamin (retinol)",
      "B. E-vitamin",
      "C. C-vitamin",
      "D. B12-vitamin",
      "E. B1-vitamin"
    ],
    correct: 0,
    exp: "Az A-vitaminból képződő 11-cisz-retinal a rodopszin prosztetikus csoportja, hiánya szürkületi vakságot és a hámfelületek elszarusodását (xerophthalmia) okozza."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Melyik vitamin hiánya vezet véralvadási zavarokhoz és vérzésekhez a protrombin (II.), VII., IX. és X. faktorok karboxilációjának kiesése miatt?",
    options: [
      "A. K-vitamin (fillokinon / menakinon)",
      "B. Niacin",
      "C. A-vitamin",
      "D. B12-vitamin",
      "E. C-vitamin"
    ],
    correct: 0,
    exp: "A K-vitamin kofaktora a gamma-glutamil-karboxiláz enzimnek, amely a véralvadási faktorok Ca2+-kötő Gla-doménjének kialakításához nélkülözhetetlen."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Melyik vitamin elengedhetetlen a tiamin-pirofoszfát (TPP / ko-karboxiláz) koenzim bioszintéziséhez?",
    options: [
      "A. B1-vitamin (tiamin)",
      "B. A-vitamin",
      "C. B12-vitamin",
      "D. C-vitamin",
      "E. K-vitamin"
    ],
    correct: 0,
    exp: "A B1-vitamin aktív formája a TPP, amely a piruvát-dehidrogenáz és az alfa-ketoglutarát-dehidrogenáz elengedhetetlen koenzime (hiánya a beriberi)."
  },

  // =========================================================================
  // 7. TÉMA: Termoreguláció (Hőszabályozás és Láz)
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Hol található a központi idegrendszerben a hőszabályozás elsődleges integráló központja?",
    options: [
      "A. A hipotalamuszban (area preoptica és elülső hipotalamusz a hőleadásért, hátulsó a hőtermelésért)",
      "B. Az agyalapi mirigyben (hypophysis)",
      "C. A nagyagykéreg parietális lebenyében",
      "D. A vázizomzatban",
      "E. A kisagykéregben"
    ],
    correct: 0,
    exp: "A hipotalamusz preoptikus régiója monitorozza a vér hőmérsékletét és a perifériás termoreceptorok jeleit, koordinálva a hőtermelő és hőleadó effektorokat."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Melyik fizikai folyamat felelős a száraz környezetben fellépő közvetlen, nem-párolgásos konvektív hőleadásért?",
    options: [
      "A. Konvekció (hőáramlás a testfelszínnel érintkező, mozgó levegőréteg útján)",
      "B. Verítékezés",
      "C. Didergés",
      "D. Evaporáció (párolgás)",
      "E. Kémiai termogenezis"
    ],
    correct: 0,
    exp: "A test a hőjét vezetéssel (kondukció), áramlással (konvekció), sugárzással (radiáció) és párolgással (evaporáció) adja le; a konvekció a levegő mozgásával szállítja el a hőt."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Melyik helyi mediátornak van kulcsfontosságú, közvetlen szerepe a láz (febris) kialakulásában a hipotalamikus alapjel (set-point) elállításán keresztül?",
    options: [
      "A. Prosztaglandin E2 (PGE2)",
      "B. Bradikinin",
      "C. Prosztaciklin (PGI2)",
      "D. Niacin",
      "E. Prosztaglandin A1"
    ],
    correct: 0,
    exp: "Az endogén pirogének (IL-1, IL-6, TNF-alfa) hatására az OVLT endotheljében COX-2 révén PGE2 termelődik, amely a preoptikus neuronok EP3 receptorain át megemeli a termosztát alapjelét."
  }
];

// Kérdések összefűzése a globális listával
window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS.concat(pdf70Questions);