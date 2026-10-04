/**
 * Orvosi / Fogorvosi Élettan Kérdésbank - PDF 30 (el 30.pdf)
 * Besorolva a hivatalos előadási tematika alapján:
 * - A sejtmembrán transzportfolyamatai
 * - A sejtműködés szabályozása, jelátviteli folyamatok
 * - Elektromos membránsajátságok
 * - Az akciós potenciál mechanizmusa
 * - A szív ingerületképzése és elektrofiziológiája
 * - Elektrokardiográfia (EKG)
 * - Szívciklus és hemodinamika
 * - Keringésszabályozás és vegetatív reflexek
 * - Regionális keringések (koronária, agyi, bőr, pulmonális)
 * - Légzésmechanika és a légzés szabályozása
 * - Testfolyadékok, vérképzés, vércsoportok és hemosztázis
 */

window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS || [];

const pdf30Questions = [
  // =========================================================================
  // 1. TÉMA: A sejtmembrán transzportfolyamatai
  // =========================================================================
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Helyes állítás keresése",
    q: "A vér-agy gát transzportjára és permeabilitására vonatkozó relációanalízis:\nÁLLÍTÁS: A lipidoldékony anyagok és a víz átjutását a vér-agy gát nem korlátozza számottevő mértékben,\nMERT\nINDOKLÁS: A CO2, az O2 és a víz könnyen áthalad a vér-agy gáton.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mind az állítás, mind az indoklás hamis"
    ],
    correct: 1,
    exp: "Mindkét kijelentés fiziológiai tény: az apoláris gázok és a víz a szoros endothelsejteken át szabadon diffundálnak, azonban a gázok átjutása nem indoka az összes lipidoldékony molekula szabad átjutásának, így önmagában nem közvetlen oksági magyarázat[cite: 9]."
  },

  // =========================================================================
  // 2. TÉMA: A sejtműködés szabályozása, jelátviteli folyamatok
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A heterotrimer G-proteinekre igaz állítások:\n1. Három különböző alegységből (alfa, béta, gamma) álló membránfehérjék\n2. Nem rendelkeznek intrinsic ATP-áz aktivitással (GTP-ázzal bírnak)\n3. Aktiválódásuk során GTP-kötött alfa és béta-gamma alegységekre disszociálnak\n4. Egyes esetekben (Gs) kiválthatják az adenilát-cikláz aktivitásának fokozódását",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A heterotrimer G-fehérjék GTP-t kötnek és hidrolizálnak (nem ATP-t), aktivációkor az alfa-GTP és a béta-gamma komplex elválik, és a Gs típus aktiválja az AC enzimet[cite: 9]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A foszfolipáz-C (PLC) aktivitásának fokozódása:\n1. Megemeli az inozitol-triszfoszfát (IP3) és a diacil-glicerin (DAG) koncentrációját\n2. Egy specifikus G-protein (Gq) aktiválódásának köszönhető\n3. Az intracelluláris kalciumkoncentráció megemelkedését váltja ki az SR/ER raktárakból\n4. A protein kináz C (PKC) aktiválódásához vezet",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A Gq-kapcsolt receptorok a PLC béta aktiválásával PIP2-ből IP3-at és DAG-ot hasítanak, ami Ca2+-felszabadulást és PKC stimulációt eredményez[cite: 9]."
  },

  // =========================================================================
  // 3. TÉMA: Elektromos membránsajátságok és Munkaizom elektrofiziológia
  // =========================================================================
  {
    ppt: "Elektromos membránsajátságok",
    type: "Helyes állítás keresése",
    q: "Egy kamrai szívizomsejtben nyugalomban növelve a K+-konduktanciát:",
    options: [
      "A. az akciós potenciál generálásának küszöbértéke pozitívabbá válik",
      "B. a nyugalmi membránpotenciál közelebb kerül a kálium egyensúlyi potenciáljához (hiperpolarizáció alakul ki)",
      "C. a sejt spontán akciós potenciálokat generál",
      "D. a K+ Nernst-potenciálja megváltozik",
      "E. megszűnik a Na+/K+-pumpa működése"
    ],
    correct: 1,
    exp: "A K+-permeabilitás növelése hiperpolarizálja a sejtet, a nyugalmi membránpotenciált a K+ egyensúlyi potenciálja (-94 mV körül) felé tolja el[cite: 9]."
  },
  {
    ppt: "Elektromos membránsajátságok",
    type: "Helyes állítás keresése",
    q: "Melyik állítás IGAZ a nyugalomban lévő kamrai és pitvari munkaizomrostokra?",
    options: [
      "A. A Na+ elektrokémiai potenciálgrádiense kifelé mutat",
      "B. A K+ elektrokémiai potenciálgrádiense befelé mutat",
      "C. A gyors Na+-csatornák aktiválódásának küszöbe -85 mV",
      "D. A feszültségfüggő gyors Na+-csatornák a küszöb elérésekor regeneratív módon nyílnak meg",
      "E. Nyugalomban a membrán nátriumkonduktanciája dominál"
    ],
    correct: 3,
    exp: "A szív munkaizomzatában a Nav1.5 csatornák feszültségfüggő aktivációs kapui kb. -65..-60 mV küszöbnél nyílnak meg[cite: 9]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "Mi történik a kamrai szívizomsejtek akciós potenciáljának platófázisa (2. fázis) alatt?",
    options: [
      "A. Befelé irányuló Ca2+-áram folyik az L-típusú feszültségfüggő kalciumcsatornákon keresztül",
      "B. A gyors nátriumcsatornák tartósan nyitott állapotban maradnak",
      "C. A K+-konduktancia eléri abszolút maximumát",
      "D. A membránpotenciál visszatér a nyugalmi szintre",
      "E. Nettó Cl- kiáramlás tartja fenn a depolarizációt"
    ],
    correct: 0,
    exp: "A platót az L-típusú Ca2+-csatornákon (Cav1.2) beáramló Ca2+ és a lassan aktiválódó késői egyenirányító K+-áramok dinamikus egyensúlya képezi[cite: 9]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "Mi játszik közvetlen szerepet a sinuscsomó sejtjeinek spontán diasztolés depolarizációjában (prepotenciál)?",
    options: [
      "A. A nátriumkonduktancia tartós csökkenése",
      "B. A hiperpolarizáció hatására aktiválódó, befelé irányuló nem-specifikus kationáram (f-áram, HCN csatornák) és a T/L-típusú Ca2+-áramok",
      "C. A késői káliumkonduktancia meredek növekedése",
      "D. A Cl- konduktancia nagymértékű fokozódása",
      "E. A Na+/K+-pumpa leállása"
    ],
    correct: 1,
    exp: "A pacemaker potenciál emelkedését az If (funny-áram, HCN), a csökkenő K+-kiáramlás, valamint a T- és L-típusú Ca2+-beáramlás együttesen hozza létre[cite: 9]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "A sinuscsomó által vezérelt szívfrekvencia akkor módosul, ha megváltozik:",
    options: [
      "A. a spontán diasztolés depolarizáció meredeksége",
      "B. a szimpatikus vagy paraszimpatikus (vagus) tónus mértéke",
      "C. a maximális diasztolés potenciál nagysága",
      "D. az akciós potenciál kiváltásának küszöbpotenciálja",
      "E. a felsorolt tényezők bármelyike módosíthatja a frekvenciát"
    ],
    correct: 4,
    exp: "A szívfrekvenciát a maximális diasztolés potenciál értéke, a küszöbfeszültség és a prepotenciál meredeksége egyaránt közvetlenül megszabja[cite: 9]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Mely élettani hatások érvényesülnek a szívben a szimpatikus tónus fokozódása esetén?\n1. A szívizom kontraktilitása nő (pozitív inotropia)\n2. A szív ingerlékenysége fokozódik (pozitív bathmotropia)\n3. Az atrioventricularis átvezetés sebessége nő (pozitív dromotropia)\n4. A pacemaker sejtek spontán diasztolés depolarizációjának sebessége nő (pozitív kronotropia)",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A szimpatikus idegrendszer béta-1 receptorokon át pozitív kronotrop, inotrop, dromotrop és bathmotrop hatásokat fejt ki[cite: 9]."
  },

  // =========================================================================
  // 4. TÉMA: Elektrokardiográfia (EKG)
  // =========================================================================
  {
    ppt: "Elektrokardiográfia (EKG)",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Az alábbi tényezők közül melyek képesek megnövelni az R-hullám amplitúdóját a standard elvezetésekben?\n1. Balkamra-hypertrophia\n2. Az eredő elektromos szívvektor balra történő tengelydeviációja\n3. Vékony mellkasfal fiatal egyénekben\n4. Jobbkamra-hypertrophia standard I-es elvezetésben",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "A megvastagodott bal kamraizomzat és a bal tengelyállás az I-es és bal oldali mellkasi elvezetésekben magas, vaskos R-hullámokat eredményez[cite: 9]."
  },
  {
    ppt: "Elektrokardiográfia (EKG)",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Milyen esetekben változhat meg tartósan a szív elektromos főtengelyének (frontális tengelyállás) iránya?\n1. Balkamra-hypertrophia (bal deviáció)\n2. Jobbkamra-hypertrophia (jobb deviáció)\n3. Bal elülső vagy hátsó hemiblokk (szárblokkok)\n4. Fiziológiás sinusarrhythmia légzés közben",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A kamrai izomtömeg hypertrophiája és a Tawara-szárak vezetési zavarai határozzák meg a kóros tengelyeltéréseket; a sinusarrhythmia tiszta ritmuszavar, nem változtatja a frontális kamrai tengelyt[cite: 9]."
  },

  // =========================================================================
  // 5. TÉMA: Szívciklus és hemodinamika
  // =========================================================================
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helyes állítás keresése",
    q: "A bal kamra diasztolés telődésére igaz:",
    options: [
      "A. Teljesen független a bal pitvari nyomástól",
      "B. Az izovolumetriás relaxáció alatt megy végbe",
      "C. A mitralis billentyű szűkülete (stenosis) esetén a kamrai telődés jelentősen csökken",
      "D. Az aorta billentyű nyitásával kezdődik",
      "E. A telődés egésze a pitvari szisztolé alatt zajlik le"
    ],
    correct: 2,
    exp: "A mitralis stenosis gátolja a pitvar-kamrai átáramlást a gyors és lassú telődési fázisban, csökkentve a végdiasztolés volument (EDV)[cite: 9]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A pulzustérfogatra (lökettérfogat, SV) igaz állítások:\n1. Értéke az end-diasztolés volumen (EDV) és az end-szisztolés volumen (ESV) különbsége\n2. Növekszik, ha a megelőző diasztolé időtartama hosszabb (fokozott telődés)\n3. Pozitív inotrop szerekkel (kontraktilitás növelésével) fokozható\n4. Értéke megegyezik a bal kamrai end-diasztolés térfogattal",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "SV = EDV - ESV; a kamrából kilökött vér normálisan az EDV mintegy 55-65%-a (ejekciós frakció), nem a teljes EDV[cite: 9]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Mely állítások IGAZAK a perctérfogatra (CO)?\n1. A szívfrekvencia szélsőséges növekedése során egy határon túl csökkenhet is a lerövidült telődés miatt\n2. Egyenlő a jobb és bal kamra által percenként továbbított vérmennyiséggel (külön-külön számítva)\n3. Növekszik, ha a vénás telődés (előterhelés) fokozódik (Frank–Starling mechanizmus)\n4. Fizikai terhelés során akár négyszeresére-ötszörösére is emelkedhet",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A perctérfogat = HR * SV; mindkét szívfél azonos volument ürít, és extrém tachycardiánál az elégtelen diasztolés telődés korlátozza a növekedést[cite: 9]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Intenzív fizikai dinamikus izommunka során jellemzően megnövekszik:\n1. A vázizmok részesedése a teljes perctérfogatból\n2. A bőr véráramlása (hőleadás végett a későbbi fázisban)\n3. A szisztémás perctérfogat\n4. A vesék és splanchnikus szervek abszolút vérátáramlása",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "Munkavégzésben a vese és a GI-traktus véráramlása a szimpatikus vazokonstrikció miatt lecsökken a dolgozó izmok javára[cite: 9]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Aortainsufficientia (aortabillentyű-elégtelenség) esetén tipikusan megfigyelhető:\n1. A diasztolés vérnyomás jelentősen csökken (a kamrába visszaáramló vér miatt)\n2. A pulzusnyomás (PP = Psyst - Pdiast) nagymértékben megnő\n3. A szisztolés vérnyomás kompenzatorikusan emelkedik a nagy lökettérfogat miatt\n4. A lökettérfogat extrém módon lecsökken",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "A billentyűzáródás hiányában a vér visszazuhan a kamrába: alacsony diasztolés és magas szisztolés nyomás alakul ki (ugráló Corrigan-pulzus)[cite: 9]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Válassza ki a funkcionális érszakaszok helyes élettani párosításait!\n1. Vénák — kapacitáserek\n2. Arteriolák — rezisztenciaerek\n3. Nagyelasztikus artériák (aorta) — compliance- / szélkazán-erek\n4. Kapillárisok — diffúziós mikrocirkulációs erek",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "Az aorta rugalmassága simítja a pulzációt, az arteriolák adják a perifériás ellenállást, a kapillárisok cserélnek anyagot, a vénák vért tárolnak[cite: 9]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A turbulens áramlás kialakulásának valószínűsége megnő az erekben, ha:\n1. A Reynolds-szám meghaladja a kritikus értéket (~2000 felett)\n2. A vér lineáris áramlási sebessége fokozódik\n3. Az ér lumenének átmérője hirtelen megnő (pl. aneurysma)\n4. A vér viszkozitása csökken (pl. súlyos anaemia)",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "Re = (v * d * rho) / eta; az alacsony viszkozitás, tágult lumen vagy magas áramlási sebesség mind a turbulencia felé tolja a folyadékmozgást[cite: 9]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Mi növelheti meg közvetlenül a szisztémás artériás középnyomást (MAP)?\n1. A perctérfogat (CO) emelkedése\n2. A teljes perifériás vascularis ellenállás (TPR) emelkedése (szisztémás vazokonstrikció)\n3. A keringő vértérfogat jelentős növekedése\n4. A hematokrit csökkenése súlyos anaemiában",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "MAP = CO * TPR; a növekvő perctérfogat és érellenállás vérnyomásemelő; a hematokrit csökkenése viszont csökkenti a viszkozitást és a TPR-t[cite: 9]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Milyen változások következnek be a vérnyomás hosszú távú szabályozásában a keringő vértérfogat akut csökkenésekor (hypovolaemia)?\n1. Csökken a pitvari natriuretikus faktor (ANF/ANP) termelődése\n2. Fokozódik az ADH (vazopresszin) szekréciója a neurohipofízisből\n3. Aktiválódik a renin-angiotenzin-aldoszteron rendszer (RAAS)\n4. Csökken a vese nátrium- és víz-visszaszívása",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "Hypovolaemiában az alacsony nyomású feszülési receptorok jelzésére leáll az ANP, felszabadul az ADH és a renin, fokozva a vízretenciót[cite: 9]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helyes állítás keresése",
    q: "A vascularis nyomásviszonyokra vonatkozó relációanalízis:\nÁLLÍTÁS: A vérnyomás értéke magasabb a vena cava inferiorban, mint a szisztémás kapillárisokban,\nMERT\nINDOKLÁS: A kapillárisok lényegesen vékonyabb fallal rendelkeznek, mint a vena cava inferior.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás HAMIS, de az indoklás IGAZ",
      "E. Mind az állítás, mind az indoklás hamis"
    ],
    correct: 3,
    exp: "A vér a hidrosztatikai gradiens mentén halad előre: a kapillárisokban a nyomás ~25–30 Hgmm, míg a vena cavában már csak 0–4 Hgmm (így az állítás hamis, az indoklás anatómiailag igaz)[cite: 9]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helyes állítás keresése",
    q: "A nyirokkeringésre és ödémaképződésre vonatkozó relációanalízis:\nÁLLÍTÁS: A nyirokerek dilatációja vagy megnyílása szöveti ödéma kialakulásához vezet,\nMERT\nINDOKLÁS: A hypoproteinaemia a plazma onkotikus nyomásának csökkenését idézi elő.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás HAMIS, de az indoklás IGAZ",
      "E. Mind az állítás, mind az indoklás hamis"
    ],
    correct: 3,
    exp: "A nyirokerek tágulata/elvezetése csökkenti az ödémát (az elzáródása okoz lymphedemát), a hypoproteinaemia valóban csökkenti az onkotikus szívóerőt[cite: 9]."
  },

  // =========================================================================
  // 6. TÉMA: Keringésszabályozás és vegetatív reflexek
  // =========================================================================
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Csökkent artériás középnyomás hatására beinduló baroreceptor-reflex válaszban:\n1. Fokozódik a szívhez futó szimpatikus rostok aktivitása\n2. Szisztémás vazokonstrikció jön létre az arteriolákon (TPR nő)\n3. A sinus caroticus baroreceptorainak afferens tüzelési frekvenciája csökken\n4. A szimpatikus vénakonstrikció miatt csökken a vénák vértároló kapacitása",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A vérnyomás esése felfüggeszti a depresszor gátlást (diszinhibíció), így a szimpatikus tónus emelkedik, visszahozva a vérnyomást a normál szintre[cite: 9]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A vérben fiziológiás koncentrációban keringő adrenalin hemodinamikai hatásai:\n1. Béta-2 receptorokon át csökkenti a teljes perifériás ellenállást a vázizomban\n2. Csökkenti a diasztolés vérnyomást\n3. Béta-1 receptorokon fokozza a szívfrekvenciát és lökettérfogatot, így emeli a szisztolés nyomást\n4. Növeli a pulzusnyomást (PP)",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "Fiziológiás adrenalin-adagban a béta-hatások dominálnak: a megnövekedett szisztolés és a süllyedő diasztolés nyomás miatt a pulzusnyomás jelentősen tágul[cite: 9]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Mely tényezők javítják közvetlenül a szív felé irányuló vénás visszaáramlást?\n1. Az alsó végtagi vázizmok ritmikus összehúzódása (izompumpa a vénabillentyűkkel)\n2. A mély belégzés során létrejövő negatív intrathoracalis nyomás (mellkasi szívóhatás)\n3. A szimpatikus vazomotor tónus által kiváltott vénakonstrikció\n4. A perifériás rezisztenciaerek extrém mértékű összehúzódása",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "Az izompumpa, a belégzési szívóhatás és a szimpatikus kapacitásér-konstrikció hajtja a vért a jobb pitvar felé[cite: 9]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A szelektív alfa-1 receptor antagonista prazosin alkalmazásának keringési következményei:\n1. Csökken a teljes perifériás vascularis ellenállás (TPR)\n2. Szisztémás vazodilatáció alakul ki az arteriolákon és vénákon\n3. Csökken az artériás vérnyomás\n4. Jelentősen megemelkedik a hematokrit érték",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "A prazosin az alfa-1 receptorok blokkolásával felfüggeszti a szimpatikus nyugalmi tónust, vazodilatációt és vérnyomásesést hoz létre[cite: 9]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A megnövekedett intracranialis nyomás következtében fellépő Cushing-reflexre jellemző:\n1. Súlyos agytörzsi ischaemia váltja ki\n2. Megemeli a nagyvérköri artériás középnyomást (masszív szimpatikus aktiváció)\n3. Reflexes bradycardiát okoz a magas nyomású baroreceptorok ingerlése révén\n4. Csökkenti a perifériás vascularis rezisztenciát",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A Cushing-reakció szisztémás hipertóniát és paradox bradycardiát eredményez az agyi perfúzió fenntartására[cite: 9]."
  },

  // =========================================================================
  // 7. TÉMA: Regionális keringések
  // =========================================================================
  {
    ppt: "Regionális keringések",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Mely tényezők fokozzák a koszorúerek (koronáriák) vérátáramlását?\n1. A lokális szöveti hypoxia és az adenozin felszaporodása\n2. A kamrai diasztolé időtartamának megnyúlása\n3. A tejsav és lokális metabolitok felhalmozódása\n4. A kamrák szisztolés izovolumetriás összehúzódása a bal kamrában",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "A szisztolé alatt az intramuralis nyomás összenyomja a bal kamra ereit (csökkenti az áramlást), a tágulatot a diasztolé és a helyi metabolitok (adenozin) adják[cite: 9]."
  },
  {
    ppt: "Regionális keringések",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A pulmonális kisvérköri keringésben megfigyelhető ventiláció-perfúzió illesztésre (Euler–Liljestrand mechanizmus) jellemző:\n1. A rosszul szellőző, hipoxiás tüdőszegmensekben vazokonstrikció alakul ki\n2. A lokális hiperkapnia és acidózis szintén vazokonstrikciót vált ki a kisvérkörben\n3. A vér a jobban átlélegeztetett alveolusok felé terelődik\n4. A hipoxia vazodilatációt okoz a pulmonális kapillárisok szintjén",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A tüdő keringése ellentétesen viselkedik a szisztémás erekkel: az alveoláris hipoxia vazokonstrikciót okoz az ideális gázcsere fenntartásához[cite: 9]."
  },

  // =========================================================================
  // 8. TÉMA: Légzésmechanika és a légzés szabályozása
  // =========================================================================
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Helyes állítás keresése",
    q: "A Hering–Breuer reflexre igaz állítás:",
    options: [
      "A. A tüdő és a légutak simaizmában lévő lassan adaptálódó feszülési receptorok aktiválják mély belégzéskor",
      "B. Kizárólag a kilégzés végén lép működésbe",
      "C. Legfontosabb efferens útvonala a n. sympathicus",
      "D. Kiiktatása azonnali légzésleállást okoz",
      "E. A glomus caroticum chemoreceptoraiból indul ki"
    ],
    correct: 0,
    exp: "A Hering–Breuer belégzés-gátló reflex megvédi a tüdőt a túlfeszüléstől: a n. vagus rostjain át leállítja a belégző központot és beindítja a kilégzést[cite: 9]."
  },
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Az artériás vér oxigéntenziójának (pO2) jelentős csökkenése (hipoxémia):\n1. Közvetlenül aktiválja a perifériás chemoreceptorokat (glomus caroticum, glomus aorticum)\n2. Reflexesen növeli a légzési perctérfogatot (hiperventiláció)\n3. A centrális chemoreceptorokat közvetlenül NEM aktiválja\n4. Reflexesen a depresszor központ aktivációjához és vérnyomáseséshez vezet",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A hipoxiát kizárólag a perifériás kemoreceptorok érzékelik (a centrálisak CO2/H+-t mérnek), és a légzés serkentésével párhuzamosan szimpatikus presszor választ váltanak ki[cite: 9]."
  },
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Az artériás szén-dioxid koncentráció (pCO2) megemelkedése (hiperkapnia):\n1. A nyúltvelői centrális kemoreceptorokon keresztül erőteljesen serkenti a légzést\n2. A perifériás kemoreceptorokat is aktiválja\n3. Reflexesen fokozza a szimpatikus vazomotor aktivitást (vérnyomásemelő hatás)\n4. Lokálisan az agy ereiben kifejezett vazokonstrikciót okoz",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A hiperkapnia a legerősebb légzési stimulus, és szisztémás presszor választ ad, miközben az agyban lokálisan vazodilatációt (nem konstrikciót) hoz létre[cite: 9]."
  },

  // =========================================================================
  // 9. TÉMA: Testfolyadékok, vérképzés, vércsoportok és hemosztázis
  // =========================================================================
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A vörösvértestek termelődése (erythropoiesis):\n1. Fokozódik, ha a szervezet tartósan alacsony oxigén-parciális nyomású helyen (magaslaton) tartózkodik\n2. Felnőttkorban fiziológiásan a vörös csontvelőben zajlik\n3. Fokozódik a vese által termelt erythropoetin (EPO) hatására\n4. Vasat, folsavat és B12-vitamint igényel a zavartalan sejtosztódáshoz és hemoglobinszintézishez",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A hipoxia az EPO-termelés legfőbb ingere, a differenciálódáshoz pedig DNS-szintézis faktorok (B12, folsav) és a vasionok nélkülözhetetlenek[cite: 9]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Az elöregedett vörösvértestek pusztulásakor keletkező termékek sorsa:\n1. A hemből biliverdin, majd bilirubin keletkezik, ami a májban glukuronsavval konjugálódik\n2. A felszabaduló vas túlnyomó része ferritin és transzferrin formájában raktározódik vagy újrahasznosul\n3. A globin fehérjelánc aminosavakra bomlik le és visszakerül az aminosav-poolba\n4. A szabad vas jelentős része normálisan változatlan formában ürül a vizelettel",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "A vasat a szervezet szigorúan visszatartja és újrahasznosítja; a vizelettel történő vasvesztés fiziológiásan minimális[cite: 9]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A hemoglobin oxigénleadását (az O2-disszociációs görbe jobbra tolódását) elősegíti:\n1. Az alacsony szöveti pH (Bohr-effektus)\n2. A lokális szöveti hőmérséklet emelkedése\n3. A magas szöveti pCO2 érték\n4. A 2,3-biszfoszfoglicerát (2,3-BPG) koncentrációjának növekedése a vörösvértestben",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A metabolikusan aktív szövet környezete (meleg, acidotikus, CO2-dús, magas 2,3-BPG) csökkenti a Hb oxigénaffinitását, segítve az O2 leadását[cite: 9]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "A hemoglobin gázkötésére vonatkozó relációanalízis:\nÁLLÍTÁS: A pCO2 növekedése a hemoglobin szaturációs görbéjét jobbra tolja,\nMERT\nINDOKLÁS: CO2 jelenlétében karboxihemoglobin képződik.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás IGAZ, de az indoklás HAMIS",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 2,
    exp: "Az állítás igaz (Bohr-effektus), de az indoklás hamis, mert a CO2 karbamino-hemoglobint képez; karboxihemoglobin szén-monoxid (CO) jelenlétében jön létre[cite: 9]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "A hemoglobin gázkötésére vonatkozó relációanalízis:\nÁLLÍTÁS: A pCO2 növekedése a hemoglobin szaturációs görbéjét jobbra tolja,\nMERT\nINDOKLÁS: A hemoglobin CO iránti affinitása lényegesen nagyobb, mint az O2 iránti affinitása.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 1,
    exp: "Mindkét kijelentés külön-külön érvényes élettani tény, de a szén-monoxid affinitása nem indoka és magyarázata a szén-dioxid Bohr-effektusának[cite: 9]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A humán AB0- és Rh-vércsoportrendszerre igaz állítások:\n1. A B-vércsoportú egyének vörösvértestjein a H-antigénhez galaktóz kapcsolódik\n2. A 0-s vércsoportú egyének vörösvértestjein csak a módosítatlan H-antigén van jelen\n3. Az AB vércsoportú személy plazmája sem anti-A, sem anti-B antitestet nem tartalmaz\n4. Rh-negatív személyek vérében normálisan születéskor jelen vannak az anti-D antitestek",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "Az anti-D nem természetes ellenanyag: csak immunizáció (Rh+ vérrel való érintkezés) után termelődik, születéstől nincs jelen a plazmában[cite: 9]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "Az újszülöttkori hemolitikus betegségre (erythroblastosis fetalis) vonatkozó relációanalízis:\nÁLLÍTÁS: Rh-pozitív anyák magzataiban erythroblastosis fetalis nem alakulhat ki az Rh-rendszer összeférhetetlensége miatt,\nMERT\nINDOKLÁS: A D-antigén rendkívül erős immunogén sajátossággal bír.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS közvetlen kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 1,
    exp: "Az állítás igaz (Rh-pozitív anya nem termel anti-D-t, nála Rh-inkompatibilitás nem lép fel), és az indoklás is valós tény, de az anya védelmének oka a saját D-antigén jelenléte (immuntolerancia), nem pedig az antigén immunogenitása[cite: 9]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A vérplazma fiziológiás ozmolaritására érvényes állítások:\n1. Értéke szigorúan a 280 - 295 mOsm/L tartományban mozog (magasabb mint 260, de alacsonyabb mint 320)\n2. Döntő hányadát a nátrium- és kloridionok adják\n3. A plazmában jelen lévő összes oldott ozmotikusan aktív részecske száma határozza meg\n4. Kizárólag a plazmafehérjék (albuminok) mennyiségének függvénye",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "A plazma teljes ozmolaritását a kis szervetlen ionok szabják meg; a fehérjék csupán a kolloidozmotikus (onkotikus) nyomásért (~25 Hgmm, kb. 1-2 mOsm/L) felelősek[cite: 9]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "A sárgaság típusaira vonatkozó relációanalízis:\nÁLLÍTÁS: Posthepaticus (mechanikus elzáródásos) icterusban az UBG koncentrációja csökken vagy hiányzik a vizeletben,\nMERT\nINDOKLÁS: Az epeutak záródása miatt a bilirubin nem jut le a bélrendszerbe, ahol a bélbaktériumok urobilinogénné alakíthatnák.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "Ha az epeút elzáródik, a konjugált bilirubin nem kerül a bélbe, elmarad az UBG-képződés, így az nem szívódik vissza és nem jut a vizeletbe sem[cite: 9]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "Anaemia perniciosára vonatkozó relációanalízis:\nÁLLÍTÁS: Anaemia perniciosában a B12-vitamin felszívódása gátolt a terminális ileumban,\nMERT\nINDOKLÁS: Az anaemia perniciosás betegekben a gyomornyálkahártya atrófiája miatt hiányzik az intrinsic faktor termelődése.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük közvetlen kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A B12-vitamin kizárólag a fedősejtek által termelt intrinsic faktorhoz kötve képes felszívódni az ileumból; ennek hiánya vészvérűséget (anaemia perniciosa) okoz[cite: 9]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Az anaemia perniciosára (megaloblasztos anaemia) laboratóriumilag és klinikailag jellemző:\n1. A vörösvértestek átlagos térfogata (MCV) megnövekedett (makrocitózis, MCV > 100 fl)\n2. A festékindex (MCH) 1-nél vagy normálnál nagyobb (hiperkróm makrociter anaemia)\n3. A szérum indirekt bilirubinszintje enyhén emelkedhet az ineffektív vérképzés miatt\n4. A vérzési és alvadási idő kifejezetten megnyúlt a tiszta vashiányos kórképekhez képest",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "A B12-hiány sejtosztódási zavart, óriás vörösvértesteket és fokozott intramedulláris pusztulást okoz, a vérzési idő izolált B12-hiányban alapvetően nem érintett[cite: 9]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "A vörösvértest-süllyedésre (We) vonatkozó relációanalízis:\nÁLLÍTÁS: Szisztémás gyulladások esetén a vörösvértestek süllyedési sebessége fokozódik,\nMERT\nINDOKLÁS: Gyulladásos folyamatokban a májban fokozódik az akut fázis fehérjék (fibrinogén, immunglobulinok) termelődése.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "Az aszimmetrikus plazmafehérjék (fibrinogén, globulinok) csökkentik a vvt-k felületi negatív zéta-potenciálját, elősegítve a pénztekercs-képződést és a gyors süllyedést[cite: 9]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "A véralvadási kaszkádban a protrombináz komplexre és a trombin keletkezésére igaz:",
    options: [
      "A. A protrombináz komplex aktivált vérlemezke membrán felületén alakul ki",
      "B. Kialakulásához és működéséhez aktivált X-es faktor (Xa), aktivált V-ös faktor (Va), foszfolipid és Ca2+ szükséges",
      "C. A keletkező trombin hasítja le a fibrinopeptideket a fibrinogénről",
      "D. A protrombin (II. faktor) proteolitikus hasításával jön létre az aktív trombin",
      "E. A felsorolt állítások mindegyike igaz"
    ],
    correct: 4,
    exp: "A protrombináz komplex (Xa, Va, Ca2+, PL) a vérlemezke felületén végzi a protrombin-trombin átalakítást, ami a fibrinháló képződésének kulcslépése[cite: 9]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "Érsérüléskor a primer hemosztázis során a thrombocyta-aggregációra igaz:",
    options: [
      "A. A vérlemezkékből felszabaduló tromboxán A2 (TXA2) és ADP fokozza az aggregációt",
      "B. A folyamat acetilszalicilsavval (aszpirin) gátolható a COX-1 enzim irreverzibilis blokkolásán keresztül",
      "C. A folyamat elengedhetetlen lépése a kollagénnel és a von Willebrand-faktorral való interakció",
      "D. A vérlemezkék alakváltozáson mennek keresztül és degranulálódnak",
      "E. A felsorolt megállapítások mindegyike helyes"
    ],
    correct: 4,
    exp: "A sérült endothel alól szabaddá váló kollagénhez kötődő vérlemezkék aktiválódnak, TXA2-t és ADP-t ürítenek, ami újabb vérlemezkéket toboroz a fehér vérrögbe[cite: 9]."
  }
];

// Kérdések beolvasása az index globális kérdéslistájába
window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS.concat(pdf30Questions);