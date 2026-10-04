/**
 * Orvosi / Fogorvosi Élettan Kérdésbank - PDF 50 (el 50.pdf)
 * Besorolva a hivatalos előadási tematika alapján:
 * - A hallás és egyensúlyozás mechanizmusa
 * - A gerincvelő és az agytörzs szerepe a mozgáskoordinációban
 * - A cerebellum, törzsdúcok és a motoros cortex
 * - Veseélettan: Glomeruláris filtráció és clearance
 * - Veseélettan: Tubuláris transzportfolyamatok és vizeletkoncentrálás
 * - Veseélettan: Vizeletürítés és a húgyhólyag működése
 * - Folyadék- és elektrolitháztartás, Kalcium-anyagcsere
 * - Sav-bázis háztartás és kompenzációs mechanizmusok
 */

window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS || [];

const pdf50Questions = [
  // =========================================================================
  // 1. TÉMA: A hallás és egyensúlyozás mechanizmusa
  // =========================================================================
  {
    ppt: "A hallás és egyensúlyozás mechanizmusa",
    type: "Helyes állítás keresése",
    q: "A vestibularis rendszer szőrsejtjeinek kisülési frekvenciájára (tüzelésére) igaz:",
    options: [
      "A. a szőrök bármilyen irányú hajlítására egyformán növekszik",
      "B. növekszik (depolarizáció), ha a sztereocíliák a kinocílium felé hajlanak el",
      "C. csökken, ha a sztereocíliák a kinocílium felé hajlanak el",
      "D. változatlan marad, ha a szőröket a kinocílium felé hajlítjuk",
      "E. csak a perilympha áramlása képes módosítani a kisülési sebességet"
    ],
    correct: 1,
    exp: "A sztereocíliák kinocílium felé hajlása megfeszíti a 'tip link'-eket, megnyitja a mechanoelektromos kationcsatornákat, ami K+-beáramlást és depolarizációt vált ki (az ellenkező irány hiperpolarizációt okoz)."
  },
  {
    ppt: "A hallás és egyensúlyozás mechanizmusa",
    type: "Helytelen állítás keresése",
    q: "Az alábbi funkciók közül melyik NEM a vesztibuláris apparátus élettani feladata?",
    options: [
      "A. a szöggyorsulás és fejrotáció érzékelése (félkörös ívjáratok)",
      "B. a lineáris gyorsulás és a gravitáció irányának érzékelése (otolith szervek: macula utriculi et sacculi)",
      "C. a hangforrás térbeli lokalizációja a frekvenciaspektrum elemzésével",
      "D. a testtartás és az egyensúly reflexes beállítása (vestibulospinalis reflexek)",
      "E. a tekintet stabilizálása a fej elmozdulása közben (vestibulo-ocularis reflex, VOR)"
    ],
    correct: 2,
    exp: "A hangok térbeli lokalizációja a hallópálya (cochlea, oliva superior szintek) feladata az interaurális időkülönbség és intenzitáskülönbség alapján, nem a vesztibuláris rendszeré."
  },
  {
    ppt: "A hallás és egyensúlyozás mechanizmusa",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A nystagmusra vonatkozó igaz állítások:\n1. Jelenléte spontán nyugalmi állapotban kóros vesztibuláris vagy cerebelláris laesiót jelezhet\n2. Lassú komponense az agytörzsi vestibuláris magvak és a VOR épségét tükrözi\n3. Megjelenhet élettani körülmények között is (pl. optokinetikus nystagmus vagy forgatás után)\n4. Gyors visszaállító komponense az agykéreg és a hídi formatio reticularis (PPRF) épségét feltételezi",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A nystagmus lassú komponensét a vesztibuláris apparátus és az agytörzsi VOR ív vezérli, míg a gyors korrekciós fázist a felsőbb központok (frontális szemmező, hídi hálózat) indítják el."
  },

  // =========================================================================
  // 2. TÉMA: Gerincvelő, agytörzs és motoros koordináció
  // =========================================================================
  {
    ppt: "A gerincvelő és az agytörzs szerepe a mozgáskoordinációban",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Az intrafuzális rostok az izom összehúzódása közben is megőrizhetik feszességüket,\nMERT\nINDOKLÁS: A gamma-motoneuronok aktivációja összehúzza az intrafuzális rostok két végpólusát, fenntartva az izomorsó érzékenységét.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van (alfa-gamma koaktiváció)",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "Az alfa-gamma koaktiváció lényege, hogy miközben az extrafuzális rostok megrövidülnek, a gamma-efferensek összehúzzák az intrafuzális rostok contractile végeit, így az izomorsó nem ernyed el, és rövidülés közben is képes feszülést mérni."
  },
  {
    ppt: "A gerincvelő és az agytörzs szerepe a mozgáskoordinációban",
    type: "Helyes állítás keresése",
    q: "Melyik reflexet soroljuk a testtartási (poszturális) statikus/statokinetikus reflexek közé?",
    options: [
      "A. Inverz myotaticus reflex",
      "B. Pozitív alátámasztási reakció (mágneses reakció a talp érintésekor)",
      "C. Feszülési saját reflex önmagában",
      "D. Flexor kereszt-extenzor reflex nociceptív ingerre",
      "E. Pupillareflex"
    ],
    correct: 1,
    exp: "A pozitív alátámasztási reakció (a talp feszülésekor az extenzorok tónusfokozódása) az állást és testsúlytartást biztosító alapvető poszturális reflex."
  },
  {
    ppt: "A gerincvelő és az agytörzs szerepe a mozgáskoordinációban",
    type: "Helyes állítás keresése",
    q: "Melyik jelenségnek NINCS közvetlen szerepe a vázizom összehúzódási erejének fokozásában?",
    options: [
      "A. Több motoros egység bevonása (recruitment / térbeli szummáció)",
      "B. Az aktív motoros egységek nagyobb tüzelési frekvenciával történő ingerlése (időbeli szummáció / tetanizáció)",
      "C. További agonista izomcsoportok szinergista aktiválódása",
      "D. Az egyes izomrostokban kialakuló akciós potenciálok időtartamának megnyúlása",
      "E. Krónikus terhelésre kialakuló izomhipertrófia"
    ],
    correct: 3,
    exp: "A vázizom akciós potenciálja 'minden vagy semmi' jellegű, időtartama nem nyúlik meg az izomerő növelésekor; az erőt a motoros egységek száma és kisülési frekvenciája határozza meg."
  },

  // =========================================================================
  // 3. TÉMA: Cerebellum, törzsdúcok és motoros cortex
  // =========================================================================
  {
    ppt: "A cerebellum, törzsdúcok és a motoros cortex",
    type: "Helyes állítás keresése",
    q: "Melyik tünetre számítunk típusosan a KISAGYAT (cerebellum) érintő károsodások esetén?",
    options: [
      "A. Nyugalmi 'pénzszámoló' tremor",
      "B. Célirányos akaratlagos mozgásokat kísérő intenciós tremor és ataxia",
      "C. Csak a törzset érintő rigor",
      "D. Csak az alvás alatt fellépő tremor",
      "E. Fogaskerék-tünet"
    ],
    correct: 1,
    exp: "A cerebellaris laesio klasszikus triádja a mozgás közben felerősödő intenciós tremor, a mozgáskoordináció zavara (ataxia / dysmetria) és az izomhipotónia (a nyugalmi tremor a törzsdúcok/Parkinson tünete)."
  },
  {
    ppt: "A cerebellum, törzsdúcok és a motoros cortex",
    type: "Helyes állítás keresése",
    q: "A hiperkinetikus extrapiramidális mozgászavarok (pl. chorea, athetosis, ballizmus) mely agyi terület kóros elváltozásakor alakulnak ki?",
    options: [
      "A. Primer motoros kéreg (Brodmann 4)",
      "B. Gerincvelői Renshaw-sejtek",
      "C. Bazális ganglionok (striatum / nucleus subthalamicus indirekt gátló útvonalának károsodása)",
      "D. Hypothalamus elülső magcsoportja",
      "E. Formatio reticularis"
    ],
    correct: 2,
    exp: "A törzsdúcok gátló (indirekt) pályájának kiesése gátlástalan motoros kérgi tüzelést és akaratlan, hirtelen túlmozgásokat (chorea, hemiballismus) okoz."
  },
  {
    ppt: "A cerebellum, törzsdúcok és a motoros cortex",
    type: "Helyes állítás keresése",
    q: "A gyrus praecentralis (primer motoros kéreg) és az onnan kiinduló leszálló corticospinalis pálya alapvető szerepet játszik:",
    options: [
      "A. a finom, akaratlagos, tudatos mozgások kivitelezésében",
      "B. a szaglási ingerek diszkriminációjában",
      "C. a fájdalomérző reflexek gátlásában",
      "D. a látótér perifériás feltérképezésében",
      "E. a gyomor-bél motilitás vezérlésében"
    ],
    correct: 0,
    exp: "A gyrus praecentralis (piramispálya) a disztális végtagizmok precíziós, akaratlagos motoros mintázatainak közvetlen kivitelezője."
  },
  {
    ppt: "A cerebellum, törzsdúcok és a motoros cortex",
    type: "Helyes állítás keresése",
    q: "A kisagykéreg (cerebellum) funkcionális működésére jellemző:",
    options: [
      "A. koordinálja a szomatofunkcionális mozgásokat, összeméri a szándékolt és a megvalósult mozgást, szabályozza az izomtónust",
      "B. károsodása esetén a tünetek mindig az ellenoldali (kontralaterális) testen jelentkeznek",
      "C. az érző stimulusok közvetlenül benne tudatosulnak",
      "D. károsodása esetén a beszéd ritmusa és artikulációja (skandáló beszéd) sosem változik meg",
      "E. kizárólag a vegetatív szívreflexeket szabályozza"
    ],
    correct: 0,
    exp: "A kisagy a mozgások hibajavító komparátora. Károsodása azonos oldali (ipszilaterális) tüneteket, ataxiát és skandáló beszédet okoz."
  },
  {
    ppt: "A cerebellum, törzsdúcok és a motoros cortex",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Igaz állítások a törzsdúcokra (bazális ganglionok):\n1. Fontos szerepet játszanak az automatikus mozgásprogramok indításában és gátlásában\n2. Szerepet játszanak az izomtónus normális szabályozásában\n3. Területükön a dopamin kulcsfontosságú neurotranszmitter (substantia nigra pars compacta)\n4. Közvetlen szinapszisokat adnak a gerincvelői izmok alfa-motoneuronjaira",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A törzsdúcok a kérgen és talamuszon keresztül hurkokban fejtik ki hatásukat, közvetlen leszálló gerincvelői motoneuron-kapcsolatuk nincsen."
  },

  // =========================================================================
  // 4. TÉMA: Vese: Glomeruláris filtráció és Clearance
  // =========================================================================
  {
    ppt: "Veseélettan: Glomeruláris filtráció és clearance",
    type: "Helyes állítás keresése",
    q: "Milyen összefüggés van egy anyag renális clearance értéke (C) és extrakciós koefficiense (E) között? (RPF: renális plazmaáramlás)",
    options: [
      "A. C = RPF - E",
      "B. C = RPF / E",
      "C. RPF = C * E",
      "D. C = RPF * E",
      "E. C = RPF + E"
    ],
    correct: 3,
    exp: "Mivel E = (Part - Pven) / Part, a vesén átáramló plazmából megtisztított virtuális plazmatérfogat C = RPF * E képlettel adható meg."
  },
  {
    ppt: "Veseélettan: Glomeruláris filtráció és clearance",
    type: "Helyes állítás keresése",
    q: "A juxtamedullaris nephronokhoz tartozó vasa recta erek milyen érszakasznak felelnek meg egy corticalis nephron anatómiai felépítéséhez viszonyítva?",
    options: [
      "A. arteriola afferens",
      "B. arteriola efferens",
      "C. glomeruluskapilláris",
      "D. peritubuláris kapillárisok speciálisan elnyúlt hajhurok-szerű hálózata",
      "E. arteria interlobularis"
    ],
    correct: 3,
    exp: "A vasa recta erek a juxtamedulláris nephronok arteriola efferenseiből eredő, a velő mélyére leszálló peritubuláris kapilláris hurkok."
  },
  {
    ppt: "Veseélettan: Glomeruláris filtráció és clearance",
    type: "Helyes állítás keresése",
    q: "Válassza ki a helyes sorrendet a renális keringési és kiválasztási paraméterek fiziológiás nagysága szerint (ml/perc egységben)! (RBF: renális véráramlás, RPF: renális plazmaáramlás, GFR: glomeruláris filtrációs ráta, V: percdiurézis)",
    options: [
      "A. RBF (~1200) > RPF (~600) > GFR (~125) > Percdiurézis (~1)",
      "B. RBF > GFR > RPF > Percdiurézis",
      "C. RPF > RBF > GFR > Percdiurézis",
      "D. GFR > RBF > RPF > Percdiurézis",
      "E. RBF > RPF > Percdiurézis > GFR"
    ],
    correct: 0,
    exp: "Fiziológiás értékek: RBF kb. 1200-1300 ml/min, RPF kb. 600-660 ml/min, GFR kb. 120-125 ml/min, vizeletelválasztás (V) kb. 1-1,5 ml/min."
  },
  {
    ppt: "Veseélettan: Glomeruláris filtráció és clearance",
    type: "Helyes állítás keresése",
    q: "Mely képletek határozzák meg legnagyobb mértékben a glomerulusfiltrátum makromolekuláris fehérjementességét (filtrációs gát)?",
    options: [
      "A. A glomeruláris bazálmembrán (negatív töltésű heparán-szulfát proteoglikánjai és laminin hálózata) és a podocyták résmembránjai (slit diaphragm)",
      "B. Csak a mesangialis sejtek összehúzódása",
      "C. Kizárólag a fenesztrált endothelsejtek pórusmérete",
      "D. Az arteriola afferens simaizomsejtjei",
      "E. A Bowman-tok fali lemeze"
    ],
    correct: 0,
    exp: "A filtrációs barrier méret- és töltésszelektív gát: a negatív töltésű bazálmembrán és a podocyták nefrin tartalmú résmembránjai taszítják a negatív töltésű albumint."
  },
  {
    ppt: "Veseélettan: Glomeruláris filtráció és clearance",
    type: "Helyes állítás keresése",
    q: "A glomerulotubuláris egyensúly (glomerulo-tubular balance) lényege:",
    options: [
      "A. A glomeruláris filtrációs ráta (GFR) emelkedése maga után vonja a proximális tubulusban folyó abszolút nátrium- és víz-reabszorpció arányos fokozódását",
      "B. A proximális tubulus reabszorpciója növeli a GFR-t",
      "C. A GFR csökkenése növeli a reninelválasztást",
      "D. A macula densa gátolja a proximális tubulust",
      "E. Az aldoszteron közvetlenül a glomeruluskapillárisokra hat"
    ],
    correct: 0,
    exp: "A glomerulotubuláris egyensúly biztosítja, hogy a GFR spontán ingadozásai ellenére a proximális tubulus mindig a filtrált só és víz állandó hányadát (~65%-át) visszaszívja."
  },
  {
    ppt: "Veseélettan: Glomeruláris filtráció és clearance",
    type: "Helyes állítás keresése",
    q: "Állítsa növekvő sorrendbe az alábbi anyagokat a vesében tapasztalható extrakciós koefficiensük (E) alapján!",
    options: [
      "A. glükóz (E=0) < inulin (E~0,2) < kreatinin (E~0,25) < PAH (E~0,9)",
      "B. PAH < kreatinin < inulin < glükóz",
      "C. glükóz < PAH < inulin < kreatinin",
      "D. inulin < glükóz < kreatinin < PAH",
      "E. kreatinin < inulin < PAH < glükóz"
    ],
    correct: 0,
    exp: "A glükóz teljesen visszaszívódik (E=0); az inulin csak filtrálódik (E=GFR/RPF ~0,2); a kreatinin enyhén szekretálódik is; a PAH szinte teljesen kiválasztódik a peritubuláris kapillárisokból szekrécióval (E~0,9)."
  },
  {
    ppt: "Veseélettan: Glomeruláris filtráció és clearance",
    type: "Helyes állítás keresése",
    q: "Állítsa clearance értékük szerint növekvő sorrendbe az alábbi anyagokat fiziológiás viszonyok között!",
    options: [
      "A. glükóz (C=0) < inulin (C=GFR ~125 ml/min) < kreatinin (C~140 ml/min) < PAH (C~600 ml/min)",
      "B. PAH < kreatinin < inulin < glükóz",
      "C. inulin < kreatinin < PAH < glükóz",
      "D. glükóz < PAH < inulin < kreatinin",
      "E. kreatinin < inulin < glükóz < PAH"
    ],
    correct: 0,
    exp: "C_glükóz = 0; C_inulin = GFR; C_kreatinin = GFR + minimális tubuláris szekréció; C_PAH = RPF (filtráció + maximális szekréció)."
  },
  {
    ppt: "Veseélettan: Glomeruláris filtráció és clearance",
    type: "Helytelen állítás keresése",
    q: "Válassza ki az egyetlen HELYTELEN állítást a clearance meghatározásokról!",
    options: [
      "A. A glükóz clearance normális vércukorszint mellett kisebb, mint az inulin clearance",
      "B. Az inulin clearance fiziológiás tartományban független a vérplazma inulin koncentrációjától",
      "C. A PAH clearance magas plazmakoncentrációk mellett a transzportmaximum elérése miatt csökken, megközelítve a GFR-t",
      "D. A PAH clearance teljesen független a plazma PAH koncentrációjától bármilyen extrém magas értéknél",
      "E. A vérplazma glükózkoncentrációját a veseküszöb (~10 mmol/l) fölé emelve a glükóz clearance folyamatosan növekszik"
    ],
    correct: 3,
    exp: "A PAH tubuláris szekréciója transzportmaximumhoz (Tm) kötött; ha a plazmaszint telíti a carriercsatornákat, az extrakció és a clearance lecsökken a GFR szintjére."
  },
  {
    ppt: "Veseélettan: Glomeruláris filtráció és clearance",
    type: "Helyes állítás keresése",
    q: "A glomeruláris kapillárisok és a nagyvérköri szisztémás kapillárisok közötti legfontosabb hidrodinamikai különbség:",
    options: [
      "A. A glomeruluskapillárisokban a hidrosztatikai nyomás mindvégig magas és csaknem állandó (~50 Hgmm), míg a szisztémás kapillárisokban az artériás végtől a vénás vég felé meredeken esik",
      "B. A glomeruluskapillárisokban a filtrációt nem befolyásolja az onkotikus nyomás",
      "C. A szisztémás kapillárisokban a vérplazma fehérjekoncentrációja a kétszeresére dúsul",
      "D. A glomeruluskapillárisokban reabszorpció folyik a vénás végen",
      "E. A glomerulusokban nincs efferens arteriola"
    ],
    correct: 0,
    exp: "A glomerulus két arteriola (afferens és efferens) közé van beékelve, ami magas, stabil filtrációs hidrosztatikai nyomást biztosít a teljes kapillárishosszon."
  },

  // =========================================================================
  // 5. TÉMA: Vese: Tubuláris transzport és Vizeletkoncentrálás
  // =========================================================================
  {
    ppt: "Veseélettan: Tubuláris transzportfolyamatok és vizeletkoncentrálás",
    type: "Helyes állítás keresése",
    q: "Melyik tubulusszakaszban a LEGALACSONYABB a tubuláris szűrlet ozmotikus koncentrációja hígító veseműködés (vízdiurézis) esetén?",
    options: [
      "A. Proximális tubulus",
      "B. Henle-kacs hajtűkanyarulata",
      "C. Disztális kanyarulatos csatorna vége és a gyűjtőcsatorna legvégső szakasza (ADH hiányában akár 50-70 mOsm/kg)",
      "D. Henle-kacs vékony leszálló szára",
      "E. Glomerulusfiltrátum"
    ],
    correct: 2,
    exp: "A Henle-kacs vastag felszálló szára és a disztális tubulus sót von ki víz nélkül, így a gyűjtőcsatornába hipoozmotikus folyadék érkezik, amely ADH hiányában extrém híg vizeletként (50 mOsm/L) ürül."
  },
  {
    ppt: "Veseélettan: Tubuláris transzportfolyamatok és vizeletkoncentrálás",
    type: "Helyes állítás keresése",
    q: "Mely tubulusszakaszban reabszorbeálódik a legnagyobb mennyiségű víz és oldott anyag a glomerulusfiltrátumból?",
    options: [
      "A. A gyűjtőcsatornákban",
      "B. A Henle-kacs vastag felszálló szárában",
      "C. A disztális kanyarulatos csatornában",
      "D. A proximális tubulusban (a filtrátum kb. 65-70%-a izoozmotikusan)",
      "E. A papilláris vezetékben"
    ],
    correct: 3,
    exp: "A proximális tubulus kefeszegélye és aktív kotranszporterei a filtrált víz, NaCl, NaHCO3 65-70%-át, valamint a glükóz és aminosavak 100%-át visszaszívják."
  },
  {
    ppt: "Veseélettan: Tubuláris transzportfolyamatok és vizeletkoncentrálás",
    type: "Helytelen állítás keresése",
    q: "A Henle-kacs transzportfolyamataira érvényes állítások közül melyik a HELYTELEN?",
    options: [
      "A. A vékony leszálló szár kifejezetten vízpermeábilis (AQP1), de nátriumra szinte átjárhatatlan",
      "B. A vékony leszálló szár vízpermeabilitása szigorúan ADH-függő",
      "C. A vastag felszálló szár vízre teljesen impermeábilis",
      "D. A vastag felszálló szárban aktív transzport működik (Na+/K+/2Cl- szimportőr)",
      "E. A vastag felszálló szár 'hígító szegmentumként' funkcionál"
    ],
    correct: 1,
    exp: "A vékony leszálló szár állandó konstitutív vízcsatornákkal (AQP1) rendelkezik, transzportja NEM ADH-függő (az ADH a gyűjtőcsatorna AQP2 csatornáira hat)."
  },
  {
    ppt: "Veseélettan: Tubuláris transzportfolyamatok és vizeletkoncentrálás",
    type: "Helytelen állítás keresése",
    q: "A proximális tubulus hámsejtjeire jellemző morfológiai és funkcionális sajátosságok, KIVÉVE:",
    options: [
      "A. Apikális luminális felszínén sűrű kefeszegély helyezkedik el a felület növelésére",
      "B. Nagy számú mitokondriumot tartalmaz a bazolaterális Na+/K+-pumpa energiaellátására",
      "C. Vízre és kismolekulákra rendkívül nagy permeabilitású",
      "D. Nagy transzepitheliális elektrokémiai és ozmotikus gradienst tart fenn a két oldal között",
      "E. Nagy anyagmennyiségek izoozmotikus transzportjára képes"
    ],
    correct: 3,
    exp: "A proximális tubulus laza hám ('leaky epithelium'): a paracelluláris rések miatt NEM képes nagy ozmotikus vagy elektromos gradienst fenntartani, transzportja izoozmotikus."
  },
  {
    ppt: "Veseélettan: Tubuláris transzportfolyamatok és vizeletkoncentrálás",
    type: "Helyes állítás keresése",
    q: "A gyűjtőcsatorna fősejtjeiben (principal cells) elhelyezkedő luminalis konduktív nátriumcsatorna (ENaC) specifikus gátlószere:",
    options: [
      "A. Amilorid (kálium-megtakarító diuretikum)",
      "B. Furoszemid (kacsdiuretikum)",
      "C. Hidroklorotiazid",
      "D. Acetazolamid",
      "E. Mannitol"
    ],
    correct: 0,
    exp: "Az amilorid és triamteren közvetlenül gátolja az ENaC csatornákat a késői disztális tubulusban és gyűjtőcsatornában, megakadályozva a Na+-beáramlást és a K+-ürítést."
  },
  {
    ppt: "Veseélettan: Tubuláris transzportfolyamatok és vizeletkoncentrálás",
    type: "Helytelen állítás keresése",
    q: "Válassza ki a veseműködésre és a diurézisre vonatkozó HELYTELEN állítást!",
    options: [
      "A. A V2 vazopresszin-receptorok gátlása (vaptánok) ozmotikus diurézist vált ki",
      "B. A furoszemid és a tiazidok gátolják a nátrium-reabszorpciót és fokozott K+-vesztést okozhatnak",
      "C. Az infundált mannitol nem szívódik vissza, és ozmotikus diurézist okoz",
      "D. Az alkohol gátolja a hypothalamusban az ADH felszabadulását, így tiszta vízdiurézist okoz",
      "E. A dekompenzált diabetes mellitusban fellépő polyuria ozmotikus diurézisnek felel meg"
    ],
    correct: 0,
    exp: "A V2 receptorok gátlása az aquaporin-2 beépülést akadályozza meg, így VÍZDIURÉZIST (aquaresist) vált ki, nem ozmotikus diurézist."
  },

  // =========================================================================
  // 6. TÉMA: Vizeletürítés és a húgyhólyag működése
  // =========================================================================
  {
    ppt: "Veseélettan: Vizeletürítés és a húgyhólyag működése",
    type: "Helyes állítás keresése",
    q: "A vizelet tárolásának (kontinencia / hólyagtelődés) fázisában:",
    options: [
      "A. fokozódik a hólyaghoz futó szimpatikus efferens rostok aktivitása (béta-3 ellazítja a detrusort, alfa-1 zárja a belső sphinctert)",
      "B. a n. pelvicus paraszimpatikus aktivitása éri el a csúcsértékét",
      "C. a külső akaratlagos sphincter azonnal ellazul",
      "D. a m. detrusor urinae ritmikusan összehúzódik",
      "E. az intravesicalis nyomás meredeken 80 vízcm fölé emelkedik"
    ],
    correct: 0,
    exp: "A kontinenciát a szimpatikus tónus (n. hypogastricus) és a szomatikus beidegzés (n. pudendus - külső záróizom) tartja fenn; a paraszimpatikus reflex csak az ürítéskor (mictio) aktiválódik."
  },
  {
    ppt: "Veseélettan: Vizeletürítés és a húgyhólyag működése",
    type: "Helyes állítás keresése",
    q: "A vizelési reflex beindulásakor (ürítési fázis):",
    options: [
      "A. a hídi vizelési központ (Barrington-mag) koordinációjával a paraszimpatikus efferensek összehúzzák a m. detrusort, miközben a sphincterek ellazulnak",
      "B. az urethra belső sphincterének szimpatikus tónusa meredeken nő",
      "C. a n. pudendus motoros rostjainak tüzelése reflexesen megnégyszereződik",
      "D. a hólyagfal receptív relaxációja zajlik",
      "E. a gerincvelői szimpatikus preganglionáris neuronok stimulálódnak"
    ],
    correct: 0,
    exp: "A mictio koordinált folyamat: a paraszimpatikus (S2-S4) detrusor-kontrakcióval egy időben gátlódik a belső sphincter szimpatikus és a külső sphincter szomatikus motoros tónusa."
  },

  // =========================================================================
  // 7. TÉMA: Folyadék- és elektrolitháztartás, Kalcium-anyagcsere
  // =========================================================================
  {
    ppt: "Folyadék- és elektrolitháztartás, Kalcium-anyagcsere",
    type: "Helyes állítás keresése",
    q: "Az aldoszteron elválasztását serkenti a mellékvesekéregben:",
    options: [
      "A. Hyperkalaemia (a vérplazma K+-szintjének közvetlen emelkedése) és az Angiotenzin II",
      "B. Hypernatraemia",
      "C. Pitvari natriuretikus peptid (ANP)",
      "D. Hypervolaemia",
      "E. A plazma ozmolaritásának hirtelen esése"
    ],
    correct: 0,
    exp: "Az aldoszteron szekréció legfőbb közvetlen stimulusa az extracelluláris K+ emelkedése (hyperkalaemia) és a RAAS rendszer aktivációjakor keletkező Angiotenzin II (az ANP gátolja!)."
  },
  {
    ppt: "Folyadék- és elektrolitháztartás, Kalcium-anyagcsere",
    type: "Helyes állítás keresése",
    q: "A pitvari natriuretikus peptid (ANP) renális hatásai:",
    options: [
      "A. Tágítja az afferens arteriolát, fokozza a GFR-t, gátolja a Na+-visszaszívást a gyűjtőcsatornában, és gátolja a renin-aldoszteron tengelyt",
      "B. Csökkenti a percdiurézist",
      "C. Serkenti az ADH felszabadulását",
      "D. Szűkíti a vese afferens ereit",
      "E. Fokozza a szomjúságérzetet"
    ],
    correct: 0,
    exp: "Az ANP vérvolumen-csökkentő hormon: növeli a filtrációt, fokozza a nátrium- és vízürítést, valamint gátolja az aldoszteron szekrécióját."
  },
  {
    ppt: "Folyadék- és elektrolitháztartás, Kalcium-anyagcsere",
    type: "Helyes állítás keresése",
    q: "A parathormon (PTH) élettani hatásai:",
    options: [
      "A. Növeli a vérplazma ionizált kalciumszintjét, serkenti a csontreszorpciót, fokozza a renális Ca2+-visszaszívást és aktiválja az 1-alfa-hidroxilázt",
      "B. Fokozza a vese proximális tubulusában a foszfátreabszorpciót",
      "C. Csökkenti az osteoclastok aktivitását",
      "D. Csökkenti a kalcitriol szintézisét",
      "E. Növeli a plazma foszfátszintjét"
    ],
    correct: 0,
    exp: "A PTH kalciumszint-emelő és foszfátürítő (foszfatúriás) hormon: mozgósítja a csontok Ca-tartalmát, disztálisan visszaszívja a Ca2+-t, és aktiválja a D-vitamin szintézisét."
  },
  {
    ppt: "Folyadék- és elektrolitháztartás, Kalcium-anyagcsere",
    type: "Helytelen állítás keresése",
    q: "Válassza ki a kalcium- és D-vitamin anyagcserére vonatkozó HELYTELEN állítást!",
    options: [
      "A. A renális kalcium-reabszorpció szempontjából a kalcitonin és a parathormon antagonisták",
      "B. A vese kalcium-reabszorpciója szempontjából a kalcitriol és a parathormon antagonisták",
      "C. D-vitamin hiányban gyermekekben rachitis (angolkór), felnőttekben osteomalacia alakul ki",
      "D. A kalcitriol gátolja a mellékpajzsmirigy parathormon elválasztását (negatív feedback)",
      "E. A parathormon a vesében serkenti az 1-alfa-hidroxiláz enzimet"
    ],
    correct: 1,
    exp: "A kalcitriol és a PTH nem antagonisták a Ca-visszaszívásban: mindketten a plazma Ca2+-szintjének fenntartását segítik elő (a kalcitonin a valódi antagonista)."
  },
  {
    ppt: "Folyadék- és elektrolitháztartás, Kalcium-anyagcsere",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A renális káliumürítés fokozódásához vezet:\n1. Fokozott aldoszteronelválasztás\n2. Magas káliumtartalmú táplálék tartós fogyasztása\n3. Fokozott nátrium-kínálat és áramlási sebesség a gyűjtőcsatornákban (pl. kacsdiuretikumok)\n4. Acidózis a tubulussejtekben",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "Az aldoszteron és a megnövekedett disztális Na-áramlás fokozza a K+-szekréciót; az acidózis viszont gátolja a K+-leadást (a tubulussejtek H+-t ürítenek K+ helyett)."
  },

  // =========================================================================
  // 8. TÉMA: Sav-bázis háztartás és kompenzációs mechanizmusok
  // =========================================================================
  {
    ppt: "Sav-bázis háztartás és kompenzációs mechanizmusok",
    type: "Helyes állítás keresése",
    q: "A sav-bázis háztartás zavaraira és kompenzációjára igaz:",
    options: [
      "A. Tartós, heves hányás során fellépő gyomorsav-vesztés metabolikus alkalózist okoz",
      "B. Cukorbeteg ketoacidózisban akut metabolikus alkalózis a leggyakoribb eltérés",
      "C. A respiratorikus acidózis renális kompenzációja a vér bikarbonátszintjét csökkenti",
      "D. A respiratorikus alkalózis kompenzációjában a vesék nem vesznek részt",
      "E. Metabolikus acidózisban a tüdő hipoventilációval kompenzál"
    ],
    correct: 0,
    exp: "A HCl vesztése (hányás) metabolikus alkalózist hoz létre; a vesék respirációs acidózisban bikarbonátot tartanak vissza, metabolikus acidózisban pedig hiperventiláció (Kussmaul-légzés) lép fel."
  },
  {
    ppt: "Sav-bázis háztartás és kompenzációs mechanizmusok",
    type: "Helyes állítás keresése",
    q: "Miért szab határt a szervezet a metabolikus alkalózis respiratorikus kompenzációjának?",
    options: [
      "A. Mert a hipoventilációval együtt járó hipoxia (az artériás pO2 kritikus esése) a perifériás kemoreceptorokon át felülírja a légzésdepressziót",
      "B. Mert a tüdő nem képes csökkenteni a frekvenciát",
      "C. Mert az agyvérzés veszélye miatt leáll a respiráció",
      "D. Mert a bikarbonát lebomlik",
      "E. Mert a vérnyomás azonnal nullára zuhanna"
    ],
    correct: 0,
    exp: "Metabolikus alkalózisban a légzőközpont hipoventilációval növelné a pCO2-t, de a kialakuló hipoxia (~pO2 < 60 Hgmm) azonnal bekapcsolja a perifériás glomusztesteket, megakadályozva a további légzésdepressziót."
  },
  {
    ppt: "Sav-bázis háztartás és kompenzációs mechanizmusok",
    type: "Helytelen állítás keresése",
    q: "Válassza ki a sav-bázis zavarok laboratóriumi paramétereire vonatkozó HELYTELEN állítást!",
    options: [
      "A. Respiratorikus alkalózisban a vérplazma pCO2 értéke a fiziológiás (40 Hgmm) alatt van",
      "B. Respiratorikus acidózisban a plazma pCO2 értéke a normálisnál magasabb",
      "C. Akut dekompenzált metabolikus acidózisban a vérplazma bikarbonátkoncentrációja magasabb a normálisnál",
      "D. Hosszasan fenntartott akaratlagos hiperventiláció respiratorikus alkalózishoz vezethet",
      "E. Respiratorikus acidózis kompenzációjaként a vese fokozza a H+-szekréciót és a bikarbonát-újraképzést"
    ],
    correct: 2,
    exp: "Metabolikus acidózisban a bikarbonát koncentráció KISEBB a fiziológiásnál (< 22-24 mmol/L), mivel a pufferelés során a felhalmozódó savak felélik a bázistartalékot."
  },
  {
    ppt: "Sav-bázis háztartás és kompenzációs mechanizmusok",
    type: "Helyes állítás keresése",
    q: "A vérplazma megnövekedett bikarbonátkoncentrációja ([HCO3-] > 28 mmol/L) mely kórképekre jellemző?",
    options: [
      "A. Krónikus respiratorikus acidózis (renális kompenzáció) és metabolikus alkalózis",
      "B. Akut respiratorikus alkalózis",
      "C. Tiszta diabeteses ketoacidózis",
      "D. Tejsavacidózis",
      "E. Hasmenés okozta sav-bázis zavar"
    ],
    correct: 0,
    exp: "Magas plazma-bikarbonát két esetben látható: primer metabolikus alkalózisban (pl. hányás), vagy krónikus légzési elégtelenségben (respiratorikus acidózisban), ahol a vese kompenzatorikusan visszatartja a bikarbonátot."
  },
  {
    ppt: "Sav-bázis háztartás és kompenzációs mechanizmusok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A vesében a protonszekréciót (H+-kiválasztást a vizeletbe) fokozza:\n1. Szisztémás acidózis\n2. Hiperkapnia (emelkedett artériás pCO2)\n3. Hypokalaemia\n4. Fokozott intracelluláris szénsavanhidráz enzimaktivitás",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A vese tubulussejtjei acidózisban, hiperkapniában és hypokalaemiában (amikor a sejtbe H+ lép be K+ helyett) egyaránt fokozzák a luminalis protonleadást (NHE3 és H+-ATP-ázok révén)."
  }
];

// Kérdések hozzáadása az index központi listájához
window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS.concat(pdf50Questions);