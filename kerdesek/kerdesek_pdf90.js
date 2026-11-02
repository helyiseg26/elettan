/**
 * Orvosi / Fogorvosi Élettan Kérdésbank - 2. ZH / 1. Blokk (zh2/1)
 * Témakörök:
 * - 19. Előadás: A szív elektromos sajátságai, EKG
 * - 20. Előadás: A szívizomsejt kontraktilitása és a szív mechanikája (E-C csatolás, CICR)
 * - 21. Előadás: A szívciklus, Wiggers-diagram, billentyűmechanika és szívhangok
 */

window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS || [];

const zh2_1_Questions = [
  // =========================================================================
  // I. INGERKÉPZÉS ÉS ELEKTROFIZIOLÓGIA (19. & 20. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/1",
    type: "Helytelen állítás keresése",
    q: "Mi NEM IGAZ a szív pacemaker-sejtjeire (SA- és AV-csomó)?",
    options: [
      "A. A spontán diasztolés depolarizáció meredekebbé válik szimpatikus ingerlés hatására",
      "B. Membránpotenciáljuk a diasztolé alatt folyamatosan változik (nincs stabil nyugalmi potenciál)",
      "C. Maximális diasztolés potenciáljuk (MDP) kevésbé negatív (-60 mV), mint a munkaizomzat nyugalmi potenciálja",
      "D. A spontán diasztolés depolarizáció laposabbá válik paraszimpatikus ingerek hatására",
      "E. A membránpotenciál időbeli változása megszűnik a szívizomzat depolarizációja után"
    ],
    correct: 4,
    exp: "A pacemaker sejtekben az automácia folyamatos: a repolarizáció legnegatívabb pontját (MDP, kb. -60 mV) elérve azonnal újraindul a spontán diasztolés depolarizáció (If funny-áram és Ca-áramok), nem áll le a működés [PPT: 1.4, 1.11. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helytelen állítás keresése",
    q: "A bal kamra munkaizomzata fő tömegének depolarizációjára mi NEM IGAZ az alábbiak közül?",
    options: [
      "A. A subendocardium felől a subepicardium felé terjed",
      "B. Az apex (szívcsúcs) irányából a basis felé halad",
      "C. Az EKG-n az R-hullám kialakulása leginkább ehhez a folyamathoz köthető",
      "D. Rendelkezik egy korai befelé irányuló Ca2+-áram komponenssel",
      "E. A depolarizáció hátterében álló akciós potenciál TTX jelenlétében is kiváltható"
    ],
    correct: 4,
    exp: "A kamrai munkaizomzat gyors akciós potenciáljának 0. fázisát a feszültségfüggő gyors nátriumcsatornák (Nav1.5) hozzák létre. Bár a szív Nav1.5 izoformája kevésbé érzékeny a tetrodotoxinra (TTX), mint az idegsejt Nav1.4-e, magasabb koncentrációjú TTX jelenlétében a Na-áram kiesik, így a gyors AP nem váltható ki [PPT: 1.4, 1.7. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Mely ioncsatornák megnyílása felelős a kamrai akciós potenciálra jellemző platófázis (2. fázis) kialakulásáért és fenntartásáért?",
    options: [
      "A. A Na+/K+-pumpa elektrogén működése önmagában képes a platót fenntartani",
      "B. Csak a feszültségfüggő gyors Na+-csatornák tartós nyitvatartása",
      "C. Csak a feszültségfüggő T-típusú Ca2+-csatornák működése",
      "D. A lassan aktiválódó késői K+-áramok (IKr, IKs) és a befelé folyó L-típusú Ca2+-áram (ICa,L) egyidejű jelenléte",
      "E. Csak a belső egyenirányító K+-csatornák (IK1) nyitása"
    ],
    correct: 3,
    exp: "A platófázist a Cav1.2 csatornákon befelé folyó depolarizáló Ca2+-áram és a repolarizációra törekvő kifelé folyó késői K+-áramok (IKr, IKs) kényes egyensúlya tartja fenn mintegy 200-300 ms-ig [PPT: 1.7. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Többszörös választás",
    q: "Mi történik a kamrai szívizomsejtek akciós potenciáljának plátója (2. fázis) alatt?\n1. Befelé irányuló Ca2+-áram folyik az L-típusú csatornákon (Cav1.2) keresztül\n2. A gyors Na+-csatornák (Nav1.5) inaktivált állapotban vannak\n3. A Ca2+-konduktancia magas értéket ér el\n4. A membrán abszolút refrakter állapotban van",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 4,
    exp: "A plató alatt az L-típusú Ca-áram maximális, a gyors nátriumcsatornák h-kapui inaktiváltak, ezért semmilyen újabb ingerrel nem váltható ki új AP (abszolút refrakter stádium) [PPT: 1.7, 1.8. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "A kamrai szívizomsejtekben hol helyezkednek el a feszültségfüggő L-típusú Ca2+-csatornák (Cav1.2 / DHPR)?",
    options: [
      "A. A mitokondriumok belső membránjában",
      "B. A szarkoplazmatikus retikulum longitudinális tubulusaiban",
      "C. A sarcolemmában és túlnyomórészt a T-tubulusok membránjában",
      "D. Szabadon a citoplazmatikus mátrixban",
      "E. A terminális ciszternák belső lumenében"
    ],
    correct: 2,
    exp: "Az LTCC / Cav1.2 csatornák a sarcolemmában és különösen a szarkomerek Z-vonalánál mélyre türemkedő T-tubulusok falában találhatók, szemben a terminális ciszternák RyR2 receptoraival [PPT: 2.4, 2.5. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Az alábbi szerek közül melyik gátolja specifikusan a kamrai szívizomsejtek L-típusú Ca2+-csatornáit?",
    options: [
      "A. Nifedipin",
      "B. Cézium",
      "C. Tetraetil-ammónium (TEA)",
      "D. 4-aminopiridin (4-AP)",
      "E. Szaxitoxin (STX)"
    ],
    correct: 0,
    exp: "A nifedipin a dihidropiridin-típusú Ca-csatorna blokkolók prototípusa, amely a Cav1.2 (L-típusú) csatornák gátlásával csökkenti a szívizom kontraktilitását és tágítja az ereket [PPT: 2.7. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helytelen állítás keresése",
    q: "A szarkoplazmatikus retikulumból (SR) történő kalcium-felszabadulás serkentésében az alábbi tényezők játszanak szerepet, KIVÉVE:",
    options: [
      "A. L-típusú Ca2+-csatornán belépő trigger kalcium",
      "B. Rianodin receptor (RyR2) Ca2+-kötése",
      "C. Inzulin receptor aktivációja",
      "D. IP3-receptorok aktivációja (másodlagos hírvivő úton)",
      "E. Erőteljes béta1-adrenerg stimuláció (PKA általi RyR2 foszforiláció)"
    ],
    correct: 2,
    exp: "A szívben a kalcium-felszabadulás döntő mechanizmusa a CICR (Cav1.2 -> RyR2). Az inzulin receptor tirozin-kináz aktivitású, a glükóztranszportot és anabolizmust szabályozza, közvetlenül nem serkenti az SR kalciumürítését [PPT: 2.5, 2.8. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "A szívizom fiziológiás körülmények között miért NEM tetanizálható?",
    options: [
      "A. Mert a szívizomsejtekben nincs troponin-tropomiozin komplex",
      "B. Mert a mechanikai összehúzódás ideje lényegesen hosszabb, mint az akciós potenciál ideje",
      "C. Mert az elektromos abszolút refrakter periódus szinte a mechanikai kontrakció végéig kitart",
      "D. Mert a szívizomban nincsenek feszültségfüggő Na+-csatornák",
      "E. Mert a szívizomsejtben a kalcium kizárólag az extracelluláris térből származik"
    ],
    correct: 2,
    exp: "A hosszú platófázis miatt az abszolút refrakter periódus (~250 ms) csaknem lefedi a mechanikai kontrakció idejét. Emiatt a szívizom az elernyedés előtt nem ingerelhető újra, merevgörcs (tetanusz) nem alakulhat ki [PPT: 1.8, 2.2. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Relációanalízis",
    q: "A szívizom még erőteljes szimpatikus izgalom esetén sem tetanizálható,\nMERT\na szívizom akciós potenciáljának hosszú platója miatt az abszolút refrakter periódus szinte a mechanikai kontrakció végéig kitart.",
    options: [
      "A. Az állítás és az indoklás is igaz, köztük összefüggés van",
      "B. Az állítás és az indoklás is igaz, de nincs köztük összefüggés",
      "C. Az állítás igaz, az indoklás hamis",
      "D. Az állítás hamis, az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "Mindkét tagmondat igaz, és a refrakter periódus hossza közvetlen magyarázata annak, hogy miért fiziológiás képtelenség tetanizálni a szívizmot [PPT: 1.8, 2.2. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Az emberi szív ingerképző és ingerületvezető rendszerében hol a LEGGYORSABB az ingerület terjedési sebessége?",
    options: [
      "A. Pitvari munkaizomzat",
      "B. Sinuscsomó",
      "C. Kamrai munkaizomzat",
      "D. Atrioventricularis (AV-) csomó",
      "E. Purkinje-rostok"
    ],
    correct: 4,
    exp: "A Purkinje-rostokban a leggyorsabb az ingerületvezetés (kb. 4 m/s), ami lehetővé teszi, hogy a kamrák csúcstól a bázis felé szinkronizáltan húzódjanak össze [PPT: 1.18. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Az alábbi struktúrák közül hol a LEGLASSÚBB az ingerületvezetési sebesség a szívben?",
    options: [
      "A. Purkinje-rostok",
      "B. Kamrai munkaizomzat",
      "C. AV-csomó (Aschoff–Tawara csomó)",
      "D. His-köteg",
      "E. Bachmann-köteg"
    ],
    correct: 2,
    exp: "Az AV-csomóban a leglassabb a vezetés (~0,05 m/s) a sejtek vékony átmérője és a ritka réskapcsolatok (gap junction) miatt [PPT: 1.18. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Mi a szív ingerképző és ingerületvezető rendszerének legutolsó tagja, amely fiziológiásan még rendelkezik intrinsic pacemaker aktivitással?",
    options: [
      "A. Az AV-csomó",
      "B. A bal pitvari munkaizomzat",
      "C. A Purkinje-hálózat",
      "D. A His-köteg törzse",
      "E. A kamrai szívizomrostok"
    ],
    correct: 2,
    exp: "A tercier ingerképző központot a His-köteg és a Purkinje-rostok alkotják (saját frekvencia: 20-40/perc). A kamrai munkaizomzat nem rendelkezik pacemaker képességgel [PPT: 1.14. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Mely szívterületre NEM jellemző élettani körülmények között a spontán diasztolés depolarizáció?",
    options: [
      "A. Kamrai munkaizomzat",
      "B. Tawara-szárak",
      "C. AV-csomó",
      "D. His-köteg",
      "E. Sinuscsomó"
    ],
    correct: 0,
    exp: "A kamrai munkaizomsejtek stabil nyugalmi membránpotenciállal (-85 mV) bírnak, amelyet az IK1 csatornák tartanak fenn; nincsen bennük If funny-áram [PPT: 1.4, 1.7. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Többszörös választás",
    q: "Mi játszik szerepet a sinuscsomó sejtjeinek spontán diasztolés depolarizációjában?\n1. A K+-konduktancia csökkenése a repolarizáció végén\n2. A hiperpolarizáció által aktiválódó, nem-specifikus kationáram (If / HCN4)\n3. A T-típusú Ca2+-csatornák (Cav3.1) korai megnyílása\n4. Az SR spontán kalciumszikrái által kiváltott NCX transzport (kalciumóra)",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 4,
    exp: "A modern felfogás szerint a pacemaker potenciált a membránóra (csökkenő K-kiáramlás, If beáramlás, Cav3.1 nyitás) és a kalciumóra (SR szikrák miatti NCX depolarizáció) kapcsolt rendszere hozza létre [PPT: 1.11, 1.12, 1.13. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Mi a következménye a nervus vagus (X. agyideg) megnövekedett aktivitásának a sinuscsomó sejtjeiben?",
    options: [
      "A. Nő a K+-konduktancia (IK,ACh aktiváció) és csökken a spontán diasztolés depolarizáció meredeksége",
      "B. Nő az L-típusú Ca2+-konduktancia",
      "C. Csökken az extracelluláris káliumkoncentráció",
      "D. Nő a prepotenciál meredeksége és gyorsul a szívfrekvencia",
      "E. Negatívabb irányba tolódik az akciós potenciál küszöbértéke"
    ],
    correct: 0,
    exp: "A vagusból felszabaduló acetilkolin az M2 receptorokon keresztül Gi-fehérjét aktivál, megnyitja az IK,ACh káliumcsatornákat (hiperpolarizáció) és csökkenti a cAMP-t, így ellaposítja a prepotenciált (negatív kronotropia) [PPT: 5.7. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Ha a szív frekvenciája jelentősen fokozódik (tachycardia):",
    options: [
      "A. A kamrai diasztolé időtartama nem változik",
      "B. Az átvezetési idő rövidül, és a diasztolés idő arányaiban drasztikusan lerövidül",
      "C. A kamrák akciós potenciáljának időtartama nem változik",
      "D. A szisztolé és diasztolé idejének aránya mereven állandó marad",
      "E. A kontrakciók ereje minden esetben csökken"
    ],
    correct: 1,
    exp: "Frekvenciaemelkedéskor a szívciklus idejéből a kamrai diasztolé sokkal nagyobb mértékben rövidül le, mint a szisztolé [PPT: 3.7. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Az ingerületnek a pitvarokról kamrákra történő átterjedésekor jelentkező élettani késleltetés (AV-késés):",
    options: [
      "A. A His-kötegben lévő lassan vezető rostok miatt alakul ki",
      "B. Az EKG-n a QT-intervallum formájában jelentkezik",
      "C. Oka az AV-csomóban található vékony, lassan vezető szívizomsejtek sajátsága",
      "D. Az EKG-n az ST-szakasz felel meg neki",
      "E. Kifejezetten rontja a kamrai telődést"
    ],
    correct: 2,
    exp: "Az AV-késleltetés (~0,12-0,16 s) a lassú AV-csomói átvezetés eredménye, ami biztosítja, hogy a pitvarok összehúzódása befejeződjön a kamrai szisztolé előtt [PPT: 1.18. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Relációanalízis",
    q: "Az AV-csomó ingerületvezetése a leglassabb a szívben,\nMERT\na kamrai összehúzódás csak a pitvari szisztolé teljes befejeződése és a vér átömlése után kezdődhet meg élettani szempontból.",
    options: [
      "A. Az állítás és az indoklás is igaz, köztük összefüggés van",
      "B. Az állítás és az indoklás is igaz, de nincs köztük összefüggés",
      "C. Az állítás igaz, az indoklás hamis",
      "D. Az állítás hamis, az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "Mindkét állítás igaz, és a lassú AV-vezetés célja pontosan az optimális mechanikai hemodinamikai időzítés biztosítása [PPT: 1.18. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Relációanalízis",
    q: "Az AV-csomó teljes pusztulása (III. fokú AV-blokk) a pitvari és a kamrai ritmus függetlenné válását eredményezi,\nMERT\naz AV-csomó és a His-köteg képezi az egyetlen olyan elektromos átvezetési útvonalat, ahol az ingerület a pitvarokról átterjedhet a kamrákra.",
    options: [
      "A. Az állítás és az indoklás is igaz, köztük összefüggés van",
      "B. Az állítás és az indoklás is igaz, de nincs köztük összefüggés",
      "C. Az állítás igaz, az indoklás hamis",
      "D. Az állítás hamis, az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A pitvarokat és kamrákat a szív kötőszövetes anulus fibrosusa elektromosan teljesen elszigeteli; az egyetlen funkcionális híd az AV-csomó – His-köteg tengely [PPT: 1.2, 1.18. dia]."
  },

  // =========================================================================
  // II. ELEKTROKARDIOGRÁFIA (EKG) (19. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Milyen feszültségtartományba esik egy szokásos módon rögzített standard testfelszíni EKG-görbe hullámainak amplitúdója?",
    options: [
      "A. 0,1 - 1 mikrovolt",
      "B. 50 - 100 mikrovolt",
      "C. 3 - 10 volt",
      "D. 0,1 - 2 millivolt (mV)",
      "E. 50 - 100 millivolt (mV)"
    ],
    correct: 3,
    exp: "A testfelszínen elvezetett EKG-hullámok feszültsége fiziológiásan a 0,1–2 mV közötti tartományban mozog (pl. a QRS komplexum 1-1,5 mV körüli) [PPT: 1.23. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Az EKG-görbén a T-hullám fiziológiás oka:",
    options: [
      "A. A pitvarok repolarizációja",
      "B. A pitvarok depolarizációja",
      "C. Az ingerület terjedése a His-kötegben",
      "D. A kamrák gyors repolarizációja",
      "E. A kamrák depolarizációja"
    ],
    correct: 3,
    exp: "A T-hullám a kamrai izomzat repolarizációját (3. fázis) tükrözi a testfelszínen [PPT: 1.23, 1.36. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Az EKG-n a PQ-szakasz (illetve PR-intervallum) fiziológiásan megfelel:",
    options: [
      "A. A kamrai depolarizációnak",
      "B. Kizárólag a sinuscsomó ingerületképzésének",
      "C. A kamrai repolarizációnak",
      "D. Az AV-csomó és a His-köteg repolarizációjának",
      "E. A pitvari depolarizációnak és az AV-csomón keresztüli átvezetésnek"
    ],
    correct: 4,
    exp: "A PQ-távolság a P-hullám kezdetétől a QRS elejéig tart (fiziológiásan 0,12–0,20 s), felöleli a pitvari depolarizációt és az AV-átvezetési késést [PPT: 1.36. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helytelen állítás keresése",
    q: "Az elektrokardiogram (EKG) közvetlen információt szolgáltat az alábbi paraméterekről, KIVÉVE:",
    options: [
      "A. A szívritmus és az ingerületvezetés zavarai",
      "B. A kamraizomzat refrakter állapota és repolarizációja",
      "C. A szívizom ischaemiás repolarizációs eltérései",
      "D. A szívizomzat pillanatnyi összehúzódási ereje (kontraktilitása)",
      "E. A szív elektromos főtengelyének iránya"
    ],
    correct: 3,
    exp: "Az EKG kizárólag a szív elektromos potenciálváltozásait regisztrálja a testfelszínen; a mechanikai erőkifejtésről, pumpafunkcióról és nyomásokról nem ad közvetlen információt [PPT: 1.38. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Mely kóros állapot megítélésében várhatjuk a testfelszíni EKG-tól a LEVKEVESEBB közvetlen információt?",
    options: [
      "A. Pitvar-kamrai átvezetési zavarok (AV-blokkok)",
      "B. Myocardialis ischaemia és koszorúér-elzáródás",
      "C. Jobb kamra hipertrófia",
      "D. Kamrai extraszisztolék és tachycardiák",
      "E. A szív csökkent mechanikai pumpafunkciója (ejekciós frakció)"
    ],
    correct: 4,
    exp: "A mechanikai pumpafunkció (EF, perctérfogat) közvetlenül echokardiográfiával mérhető; EKG-n elektromechanikai disszociációban (PEA) akár normális EKG mellett is állhat a mechanikai szív [PPT: 1.38. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Az EKG-regisztrátum mely része esik egybe a kamrai szívizomsejtek maximális kalciumkonduktanciájával (platófázisával)?",
    options: [
      "A. A Q-hullám",
      "B. A T-hullám leszálló szára",
      "C. A P-hullám",
      "D. Az ST-szakasz",
      "E. A PQ-szakasz"
    ],
    correct: 3,
    exp: "Az ST-szakasz alatt a teljes kamrai izomzat depolarizált állapotban van (2. plató fázis), így nincs mérhető feszültségkülönbség a sejtek között (izoelektromos vonal) [PPT: 1.23, 1.34. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Többszörös választás",
    q: "Milyen esetekben változhat meg a szív elektromos főtengelyének iránya a frontális síkban (Cabrera-kör)?\n1. Bal kamra hipertrófia (bal deviáció)\n2. Jobb kamra hipertrófia (jobb deviáció)\n3. Terhesség és elhízás (rekesz felnyomódása miatt bal deviáció)\n4. Sovány, aszténiás testalkat (cseppszív / jobb deviáció)",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 4,
    exp: "A frontális elektromos tengelyállást mind anatómiai izomtömeg-változások (hipertrófiák), mind alkati és rekeszállási tényezők erősen módosítják (-30° és +90° között normális) [PPT: 1.35. dia]."
  },

  // =========================================================================
  // III. A SZÍVCIKLUS ÉS A BILLENTYŰK MECHANIKÁJA (21. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "A bal kamra izovolumetriás kontrakciója során:",
    options: [
      "A. A bal pitvari nyomás lassan csökken",
      "B. Az aortanyomás azonnal meredeken emelkedik",
      "C. Az aortanyomás lassan emelkedik",
      "D. A bal kamrai nyomás meredeken és gyorsan emelkedik zárt billentyűk mellett",
      "E. A bal kamrai vértérfogat drasztikusan lecsökken"
    ],
    correct: 3,
    exp: "Az izovolumetriás kontrakcióban valamennyi billentyű zárva van, a folyadék összenyomhatatlan (térfogat = EDV = állandó), miközben a kamranyomás 8-ról 80 Hgmm-re szökik fel [PPT: 3.4, 3.5. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helytelen állítás keresése",
    q: "Válassza ki az egyetlen HELYTELEN állítást a szívciklus eseményeivel kapcsolatban!",
    options: [
      "A. Diasztolé alatt az aortában uralkodó nagyobb nyomás a semilunaris billentyűket zárva tartja",
      "B. Az izometriás (izovolumetriás) kontrakció alatt valamennyi billentyű zárva van",
      "C. Az izometriás (izovolumetriás) kontrakció legvégén az AV-billentyűk nyílnak ki",
      "D. Az auxotóniás ejekciós fázis alatt a kamrák vért löknek ki a nagyerekbe",
      "E. A tricuspidalis billentyű hiányos záródása szisztolés regurgitációt okoz"
    ],
    correct: 2,
    exp: "Az izovolumetriás kontrakció végén, amikor a kamranyomás meghaladja a diasztolés aortanyomást (80 Hgmm), a semilunaris (aorta-) billentyű nyílik ki! Az AV-billentyűk a szisztolé legelején záródnak be [PPT: 3.4. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "A Wiggers-diagram bal kamrai nyomás-térfogat görbéjén mikor nyílik ki a mitrális (bicuspidalis) billentyű?",
    options: [
      "A. Az izovolumetriás kontrakció kezdetén",
      "B. Az ejekciós fázis legmagasabb nyomáspontján",
      "C. Az izovolumetriás relaxáció legvégén, amikor a kamranyomás a pitvari nyomás alá esik",
      "D. Az aorta billentyű becsapódásának pillanatában",
      "E. A pitvari szisztolé csúcsán"
    ],
    correct: 2,
    exp: "Az izovolumetriás relaxáció végén, amint a meredeken zuhanó kamranyomás a bal pitvari nyomás (~5 Hgmm) alá süllyed, a mitrális billentyű passzívan kinyílik, megindítva a gyors telődést [PPT: 3.4, 3.14. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helytelen állítás keresése",
    q: "Az alábbi megállapítások közül melyik NEM IGAZ a szívciklusra?",
    options: [
      "A. A pitvari nyomásgörbén látható 'c'-hullám az AV-billentyűk korai szisztolés bedomborodásának következménye",
      "B. Az I. szívhang (S1) az AV-billentyűk záródásakor keletkező mechanikai rezgések eredménye",
      "C. A pitvari nyomásgörbe 'v'-hulláma a kamrai diasztolé kezdetén, a pitvari telődés csúcsán észlelhető",
      "D. A kamrai szisztolé néhány milliszekundummal a QRS-komplexum csúcsa után kezdődik",
      "E. A pitvarkontrakciót közvetlenül az AV-csomó intrinsic sejtjei vezérlik"
    ],
    correct: 4,
    exp: "A pitvarkontrakciót a primer pacemaker, vagyis a sinuscsomó (SA-csomó) által generált ingerület váltja ki (EKG P-hullám), nem az AV-csomó [PPT: 1.14, 3.4. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "A második szívhangot (S2) mi idézi elő a szívciklus során?",
    options: [
      "A. A semilunaris billentyűk (aorta és pulmonalis) záródása a kamrai ejekció végén",
      "B. A semilunaris billentyűk megnyílása",
      "C. Az AV-billentyűk záródása a szisztolé kezdetén",
      "D. Az AV-billentyűk kinyílása a diasztolé kezdetén",
      "E. A vér gyors beáramlása miatti kamrafal-rezgés fiatalokban"
    ],
    correct: 0,
    exp: "A 2. szívhang magasabb frekvenciájú, rövidebb csattanó hang, amelyet a semilunaris billentyűk becsapódása hoz létre az izovolumetriás relaxáció kezdetén [PPT: 3.9. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Az első szívhangra (S1) jellemző:",
    options: [
      "A. A semilunaris billentyűk nyitásakor keletkezik",
      "B. Mélyebb tónusú, hosszabb hang, amelyet az AV-billentyűk záródása és a kamrafal rezgése hoz létre a szisztolé kezdetén",
      "C. Pontosan egybeesik az EKG T-hullámának végével",
      "D. Kizárólag kóros körülmények között (szívelégtelenségben) hallható",
      "E. A pitvari szisztolé alatti turbulencia kelti"
    ],
    correct: 1,
    exp: "Az S1 mélyebb tónusú ('lub'), az izovolumetriás kontrakció kezdetén az AV-billentyűk záródásakor keletkezik a QRS lecsengése után [PPT: 3.4, 3.9. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "A kamrák diasztolés telődésének dinamikájára mi jellemző nyugalomban?",
    options: [
      "A. A vér döntő része a pitvari szisztolé alatt préselődik be a kamrákba",
      "B. A kamratelődés 60-70%-a a korai gyors telődési fázisban zajlik le passzívan",
      "C. A telődési sebesség szigorúan egyenletes a teljes diasztolé alatt",
      "D. A pitvarok összehúzódása adja a végdiasztolés térfogat több mint 50%-át",
      "E. A kamra nem igényel pozitív töltőnyomást a telődéshez"
    ],
    correct: 1,
    exp: "A kamrák telődésének döntő többsége az AV-billentyűk kinyílását követő korai gyors telődés alatt lezajlik; a pitvari szisztolé nyugalomban csak a maradék 10-15%-ot préseli be [PPT: 3.7. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "A szívbillentyűk működésének mechanikai alaptörvénye:",
    options: [
      "A. A papilláris izmok aktív kontrakciója húzza össze és zárja be a vitorlás billentyűket",
      "B. A billentyűk tiszta passzív struktúrák: kizárólag a két oldalukon fellépő hidrosztatikai nyomáskülönbség nyitja és zárja őket",
      "C. A vegetatív idegrendszer kolinerg rostjai közvetlenül idegzik be a billentyűk vitorláit",
      "D. Az aorta billentyű nyitásához ATP-függő simaizom-elernyedés szükséges",
      "E. A chordae tendineae ínhúrok feladata a billentyűk aktív nyitása"
    ],
    correct: 1,
    exp: "A billentyűk szelepekként tisztán a nyomásgrádiens mentén mozognak; a papilláris izmok nem zárnak, hanem megakadályozzák a vitorlák átfordulását (prolapsus) a kamrai szisztoléban [PPT: 3.8. dia]."
  },

  // =========================================================================
  // IV. CELLULÁRIS KONTRAKTILITÁS ÉS KALCIUM-CIKLUS (20. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/1",
    type: "Relációanalízis",
    q: "Az extracelluláris Ca2+ teljes elvonása után az emlősszív rövid időn belül képtelen összehúzódni,\nMERT\naz L-típusú Ca2+-csatornákon át belépő extracelluláris trigger kalcium nélkülözhetetlen a szarkoplazmatikus retikulum RyR2 receptorainak megnyitásához (CICR).",
    options: [
      "A. Az állítás és az indoklás is igaz, köztük összefüggés van",
      "B. Az állítás és az indoklás is igaz, de nincs köztük összefüggés",
      "C. Az állítás igaz, az indoklás hamis",
      "D. Az állítás hamis, az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A szívizom E-C csatolása CICR mechanizmusú: szemben a vázizommal, a külső kalcium belépése nélkül nem indulhat meg az SR Ca2+-kiáramlása [PPT: 2.5, 2.8. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Relációanalízis",
    q: "Az extracelluláris Ca2+-koncentráció kísérletes növelése fokozza a szívizom összehúzódási erejét,\nMERT\na megnövekedett külső kalciumszint miatt több trigger kalcium lép be a plató alatt, ami nagyobb kalciumhullámot szabadít fel az SR-ből.",
    options: [
      "A. Az állítás és az indoklás is igaz, köztük összefüggés van",
      "B. Az állítás és az indoklás is igaz, de nincs köztük összefüggés",
      "C. Az állítás igaz, az indoklás hamis",
      "D. Az állítás hamis, az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A magasabb külső [Ca2+] fokozza az ICa,L áramot és növeli az SR kalciumtelítettségét, ami fokozza az inotrópiát [PPT: 2.6, 5.13. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Relációanalízis",
    q: "A kamrai munkaizomrostok akciós potenciáljának platófázisa alatt alkalmazott szupramaximális ingerek sem váltanak ki újabb akciós potenciált,\nMERT\na membrán a platófázis alatt abszolút refrakter periódusban van a gyors feszültségfüggő Na+-csatornák inaktivációja miatt.",
    options: [
      "A. Az állítás és az indoklás is igaz, köztük összefüggés van",
      "B. Az állítás és az indoklás is igaz, de nincs köztük összefüggés",
      "C. Az állítás igaz, az indoklás hamis",
      "D. Az állítás hamis, az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A 0-tól a 3. fázis közepéig tartó abszolút refrakter fázis alatt a Na-csatornák inaktiváltak, új AP semmilyen ingerrel nem generálható [PPT: 1.8. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "Hogyan fokozzák a szívglikozidok (pl. digitalis / digoxin) a szívizomzat kontrakciós erejét (pozitív inotrop hatás)?",
    options: [
      "A. Közvetlenül serkentik a szarkoplazmatikus retikulum SERCA2a pumpáját",
      "B. Gátolják a sarcolemma Na+/K+-ATP-áz pumpáját, ami az intracelluláris Na+ felhalmozódásán és az NCX gátlásán át növeli az SR Ca2+-tartalmát",
      "C. Gátolják a szív béta1-adrenerg receptorait",
      "D. Megnyitják a szarkolemma belső egyenirányító káliumcsatornáit (IK1)",
      "E. Csökkentik a troponin C kalciumérzékenységét"
    ],
    correct: 1,
    exp: "A Na+/K+-pumpa gátlása megemeli a citoszol nátriumszintjét, ami gátolja a kalcium NCX általi leadását; a bennrekedő Ca2+ túltölti az SR-t, növelve a szisztolés erőt [PPT: 2.10, 2.14. dia]."
  },
  {
    ppt: "zh2/1",
    type: "Helyes állítás keresése",
    q: "A bal kamra által végzett mechanikai pulzusmunka (Stroke Work) miért lényegesen nagyobb, mint a jobb kamráé?",
    options: [
      "A. Mert a bal kamra kontrakciója lényegesen lassabb lefolyású",
      "B. Mert a bal kamra fala vastagabb, és a nagyvérköri magas ellenállással (120 Hgmm vs. 25 Hgmm) szemben továbbítja a vért",
      "C. Mert a bal kamra által kilökött vér térfogata többszöröse a jobb kamráénak",
      "D. Mert a bal kamra vénás telődése jelentősen meghaladja a jobb kamráét",
      "E. Mert a bal kamrában nincsenek papilláris izmok"
    ],
    correct: 1,
    exp: "A két kamra pulzustérfogata (SV ~70 ml) egyensúlyban azonos, de a bal kamra szisztolés nyomása hatszorosa a jobb kamráénak, így a nyomási munka (W = P * V) is sokszorosa [PPT: 2.24, 3.16. dia]."
  }
];

// Kérdések hozzáfűzése a központi listához
window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS.concat(zh2_1_Questions);