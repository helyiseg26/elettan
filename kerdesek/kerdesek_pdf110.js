/**
 * Orvosi / Fogorvosi Élettan Kérdésbank - 2. ZH / 3. Blokk (zh2/3)
 * Témakörök:
 * - 18. Előadás: A vázizom és a simaizom élettana (kontrakció, szarkomer, E-C csatolás, MLCK, latch-state)
 * - 3. Előadás: A vázizomműködés gerincvelői és agytörzsi kontrollja (reflexek, proprioceptorok, decerebráció)
 * - 14. Előadás: A cerebellum, basalis ganglionok és a motoros kéreg élettana (Parkinson, Huntington, pályák)
 */

window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS || [];

const zh2_3_Questions = [
  // =========================================================================
  // I. SIMAIZOM ÉLETTANA ÉS MOLEKULÁRIS SZABÁLYOZÁSA (18. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/3",
    type: "Relációanalízis",
    q: "Simaizmokon a miozin könnyűlánc foszfatáz (MLCP) aktiválódása izomelernyedést (relaxációt) eredményez,\nMERT\na simaizom összehúzódási állapota a miozin szabályozó könnyűláncának (MLC20) foszforiláltsági szintjétől függ.",
    options: [
      "A. Az állítás és az indoklás is igaz, köztük összefüggés van",
      "B. Az állítás és az indoklás is igaz, de nincs köztük összefüggés",
      "C. Az állítás igaz, az indoklás hamis",
      "D. Az állítás hamis, az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A simaizomban a szabályozás a vastag filamentumon (miozinon) történik: az MLCK általi foszforiláció indítja a kontrakciót, míg az MLCP általi defoszforiláció megszünteti a kereszthidak ciklusát, elernyedést okozva [PPT: 18.2, 18.24. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Relációanalízis",
    q: "Simaizmokban az összehúzódást a vékony filamentum szintjén is lehet szabályozni,\nMERT\na simaizom összehúzódását kizárólag a miozin könnyűlánc foszforiláltsága befolyásolja.",
    options: [
      "A. Az állítás és az indoklás is igaz, köztük összefüggés van",
      "B. Az állítás és az indoklás is igaz, de nincs köztük összefüggés",
      "C. Az állítás igaz, az indoklás hamis",
      "D. Az állítás hamis, az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 2,
    exp: "Az állítás igaz: bár a fő szabályozó a miozin foszforilációja, a vékony filamentumhoz kötődő calponin és caldesmon szintén finomhangolja az aktin elérhetőségét. Az indoklás hamis a 'kizárólag' kitétel miatt [PPT: 18.2, 18.26. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helytelen állítás keresése",
    q: "Válassza ki az egyetlen HELYTELEN megoldást a simaizomzat működésére vonatkozóan!",
    options: [
      "A. A simaizomsejtekben mind vékony (aktin), mind vastag (miozin) filamentumok megtalálhatók",
      "B. Simaizmokon az összehúzódás sebessége jelentősen lassabb, mint a vázizomban",
      "C. A retesz-állapotban (latch-state) a miozin fej defoszforilált állapotban kapaszkodik az aktinhoz",
      "D. Simaizmokon a retesz-állapot (latch-state) extrém magas ATP-felhasználás mellett megvalósuló görcsös összehúzódás",
      "E. Simaizmokon idegi hatások nélkül, tisztán hormonális úton is kiváltható összehúzódás (farmakomechanikai csatolás)"
    ],
    correct: 3,
    exp: "A retesz-állapot (latch-state) élettani lényege éppen az energiatakarékosság: a defoszforilált, de aktinhoz kötve maradt miozin fejek minimális ATP-felhasználás mellett képesek tartós tónust (pl. érfalban, sphincterekben) fenntartani [PPT: 18.2, 18.27. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "Simaizomban az összehúzódás során a citoplazmatikus kalciumszint megemelkedését követően a kalcium melyik regulatórikus fehérjéhez kötődik?",
    options: [
      "A. Troponin C",
      "B. Kalmodulin",
      "C. Tropomiozin",
      "D. Kalszekvesztrin",
      "E. Protein Kináz A"
    ],
    correct: 1,
    exp: "A simaizomban nincs troponin komplex; a szabad kalcium 4 kalciumkötő hellyel bíró kalmodulinhoz (CaM) kötődik, és ez a Ca-CaM komplex aktiválja a miozin könnyűlánc kinázt (MLCK) [PPT: 18.16, 18.24. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helytelen állítás keresése",
    q: "Válassza ki az egyetlen HELYTELEN állítást a simaizomsejtek elektrofiziológiájáról!",
    options: [
      "A. Simaizomsejteken mikroszkóp alatt nem figyelhetők meg harántcsíkolatot adó szarkomerek",
      "B. Viszcerális (egy-egységes) simaizomban a sejtek között kiterjedt réskapcsolatok (gap junction) találhatók",
      "C. A simaizmokon a kontrakció latenciaideje általában meghaladja a 100 ms-ot",
      "D. Többegységes (multi-unit) simaizomban az egyes sejtek elektromosan függetlenül működnek és külön beidegzést kapnak",
      "E. A simaizomsejt nyugalmi membránpotenciálja a vázizoméhoz képest jóval negatívabb (erősen hiperpolarizált)"
    ],
    correct: 4,
    exp: "A simaizom nyugalmi membránpotenciálja kevésbé negatív (-50..-60 mV), mint a vázizomé (-80..-90 mV), és a szivárgó áramok miatt gyakran ritmikusan oszcillál [PPT: 18.5, 18.18. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "Mi a simaizomzatra jellemző farmakomechanikai kapcsolat lényege?",
    options: [
      "A. Kizárólag feszültségfüggő Na+-csatornákon át beáramló áram váltja ki",
      "B. Akciós potenciál és a sejtmembrán depolarizációja NÉLKÜL létrejövő összehúzódás, amelyet metabotrop receptorok (pl. Gq -> IP3) közvetítenek",
      "C. A motoros véglemezen felszabaduló kuráre által közvetített izomgörcs",
      "D. Csak izolált mitokondriumokon kiváltható folyamat",
      "E. Kizárólag a Ca2+-ATP-áz gátlásával idézhető elő"
    ],
    correct: 1,
    exp: "A farmakomechanikai csatolásban a ligandkötés (pl. noradrenalin alfa-1, oxitocin) Gq-fehérjén át PLC-t aktivál, az IP3 pedig közvetlenül üríti az SR kalciumraktárait anélkül, hogy a membránpotenciál megváltozna [PPT: 18.2, 18.20. dia]."
  },

  // =========================================================================
  // II. A HARÁNTCSÍKOLT VÁZIZOM ÉLETTANA (18. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/3",
    type: "Helytelen állítás keresése",
    q: "Vázizom kontrakciója és a kereszthíd-ciklus során melyik állítás HELYTELEN?",
    options: [
      "A. A szarkomerek megrövidülése során a vékony és vastag filamentumok elcsúsznak egymás mellett",
      "B. Az izomösszehúzódás során az A-csík (anizotrop sáv) hossza állandó marad",
      "C. A kialakítható funkcionális kereszthidak száma teljesen független a szarkomer hosszától",
      "D. Az erőlökés (power stroke) során a miozin fej 90 fokról 45 fokos szögbe csapódik át",
      "E. A kontrakció megindításához a Ca2+-ionoknak a Troponin C alegységhez kell kötődniük"
    ],
    correct: 2,
    exp: "A Gordon–Huxley–Julian hossz-feszülés kísérlet bizonyította, hogy az aktív erő és a működő kereszthidak száma szigorúan szarkomerhossz-függő: optimális átfedés 2,0–2,25 mikrométernél van, 3,65 felett az átfedés és az erő nullára esik [PPT: 18.11, 18.12. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "A vázizom elektromechanikai kapcsolatában (E-C csatolás) mi biztosítja a kalcium kiáramlását az SR-ből?",
    options: [
      "A. A T-tubulus DHPR (Cav1.1) feszültségérzékelője és az SR RyR1 kalciumcsatornája közötti KÖZVETLEN FIZIKAI kapcsolat",
      "B. Az extracelluláris térből beáramló trigger kalcium (CICR mechanizmus)",
      "C. A sarcolemmalis Na+/Ca2+ cseremechanizmus (NCX) reverz üzemmódja",
      "D. A citoplazmatikus kalmodulin közvetlen kötődése a tropomiozinhoz",
      "E. A parvalbumin fehérje aktív ATP-bontása"
    ],
    correct: 0,
    exp: "Vázizomban a DHPR mechanikai kapcsolókarként közvetlen fizikai érintkezésben áll a RyR1 csatornával; nem igényel külső trigger Ca-beáramlást a megnyíláshoz (szemben a szívizommal!) [PPT: 18.8. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "Mi a hullamerevség (Rigor mortis) közvetlen sejtélettani oka?",
    options: [
      "A. A tejsav túlzott felhalmozódása miatt kicsapódnak az izomfehérjék",
      "B. Az ATP teljes hiánya miatt a miozin fej képtelen leoldódni az aktin filamentumról, így a kereszthidak megmerevednek 45 fokos szögben",
      "C. A troponin C lebomlása a lizoszómák által",
      "D. A sarcolemma feszültségfüggő Na+-csatornáinak tartós megnyílása",
      "E. A motoneuronok kontrollálatlan acetilkolin-szivárgása"
    ],
    correct: 1,
    exp: "A kereszthíd leválásához új ATP-molekula kötődése kötelező. Halál után az ATP-szintézis leáll, az aktomiozin komplex szétválása lehetetlenné válik [PPT: 18.11. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "Malignus hipertermiában a vázizomzat kontrollálatlan, életveszélyes kalcium-kiáramlását mely fehérje mutációja okozza, és mi annak specifikus antidótuma?",
    options: [
      "A. A disztrofin hiánya; antidótum: Neostigmin",
      "B. A szarkolemma Nav1.4 csatornájának hibája; antidótum: Tetrodotoxin",
      "C. A szarkoplazmatikus retikulum RyR1 rianodin receptorának genetikai hibája; antidótum: Dantrolén",
      "D. A SERCA2a pumpa bénulása; antidótum: Atropin",
      "E. A nikotinos acetilkolin receptor autoantitestjei; antidótum: Kuráre"
    ],
    correct: 2,
    exp: "A RyR1 mutációja altatószerek (pl. halotán) hatására masszív Ca-kiáramlást, izomtetániát és hipertermiát okoz; életmentő specifikus gátlószere a Dantrolén [PPT: 18.8, 18.14. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helytelen állítás keresése",
    q: "A motoros egységre és a vázizom kontrakciójára vonatkozóan melyik állítás HELYTELEN?",
    options: [
      "A. Egyetlen motoros egységet egyetlen alfa-motoneuron és az általa beidegzett izomrostok alkotnak",
      "B. Egyetlen motoros egységen belül a kontrakció mindig maximális (tetanikus)",
      "C. Az izomerő fokozása az aktív motoros egységek számának toborzásával (recruitment) történik",
      "D. A motoros egységek minden izomban kivétel nélkül azonos számú izomrostot tartalmaznak",
      "E. A vázizom akciós potenciáljának refrakter periódusa (2-3 ms) sokkal rövidebb, mint az izomrángás időtartama (20-100 ms)"
    ],
    correct: 3,
    exp: "A beidegzési arány rendkívül változó: finom szemmozgató izmokban 1 motoneuron : 3-5 rost, míg durva tartóizmokban (pl. m. quadriceps) 1 : 1000-2000 izomrost [PPT: 18.13, 18.14. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "A lassú oxidatív (I-es típusú, vörös / SO) vázizomrostokra jellemző tulajdonság:",
    options: [
      "A. Alacsony mitokondriumszám és csekély kapillarizáció",
      "B. Gyors fáradékonyság és fehér szín",
      "C. Magas mioglobintartalom, gazdag kapillárishálózat és nagy oxidatív fáradhatatlanság",
      "D. Nagyon magas glikolitikus kapacitás és nagy rostátmérő",
      "E. A motoros toborzás legvégén kapcsolódnak be"
    ],
    correct: 2,
    exp: "Az I-es típusú rostok magas mioglobin- és mitokondriumtartalmú, vörös, lassú, de fáradhatatlan tartóizmok, amelyek a Henneman-méretelv szerint legelsőként aktiválódnak [PPT: 18.14. dia]."
  },

  // =========================================================================
  // III. GERINCVELŐI ÉS AGYTÖRZSI KONTROLL (3. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "Milyen anatómiai és funkcionális különbség van az izomorsó és a Golgi-féle ínorsó között?",
    options: [
      "A. Az izomorsó sorosan, a Golgi-ínorsó párhuzamosan kapcsolt az izomrostokkal",
      "B. Az izomorsó a normál izomrostokkal párhuzamosan kapcsolt hosszérzékelő (Ia és II rostok), míg az ínorsó sorosan kapcsolt feszülésérzékelő (Ib rostok)",
      "C. A Golgi-ínorsó rendelkezik gamma-motoneuron beidegzéssel, az izomorsó nem",
      "D. Az izomorsó kizárólag a passzív izomrövidülést regisztrálja",
      "E. Mindkét receptor afferensei közvetlenül és kizárólag a piramispályához kapcsolódnak"
    ],
    correct: 1,
    exp: "Az izomorsó párhuzamosan kapcsolva az izomhosszt méri (Ia, II afferensek, gamma beidegzés), míg a Golgi-ínorsó a muszkulotendinózus határon sorosan mér feszülést (Ib rostok) [PPT: 3.4. fejezet, táblázat]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "Mi az alfa-gamma koaktiváció élettani jelentősége a vázizomműködés során?",
    options: [
      "A. Megakadályozza a szinaptikus neurotranszmitter kiürülését a neuromuscularis junctióban",
      "B. Aktív izomrövidülés közben a gamma-motoneuronok összehúzzák az intrafusalis rostok két pólusát, feszesen tartva a középső receptorzónát, így az izomorsó kontrakció alatt is érzékeny marad",
      "C. Kikapcsolja a gerincvelői védőreflexeket",
      "D. Teljesen elnyomja a Golgi-féle ínorsó aktivitását",
      "E. Meggátolja a piramispálya ingerületátvitelét"
    ],
    correct: 1,
    exp: "Koaktiváció nélkül az aktívan rövidülő izom mellett a párhuzamos izomorsó ellazulna és elhallgatna; a gamma-tüzelés biztosítja a receptor folyamatos munkakészségét [PPT: 3.4. fejezet]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "A gerincvelői Renshaw-sejtekre és a rekurrens gátlásra jellemző:",
    options: [
      "A. Serkentő interneuronok, amelyek glutamátot ürítenek a hátsó szarvban",
      "B. Az alfa-motoneuron kollaterálisa által aktivált gátló interneuronok, amelyek glicinnel visszacsatolva gátolják magát az alfa-motoneuront és szomszédait (sztrichnin mérgezés gátolja!)",
      "C. A piramispálya Betz-sejtjeivel képeznek közvetlen szinapszist az agykéregben",
      "D. Kizárólag a paraszimpatikus preganglionaris neuronokat fékezik",
      "E. A felső motoneuronok dendritfáján találhatók"
    ],
    correct: 1,
    exp: "A Renshaw-sejt visszacsatolt gátlást végez glicinnel, megakadályozva a motoneuronok túlzott frekvenciájú kisülését. A sztrichnin a glicin-receptorokat gátolja, ami gátláskieséses merevgörcsöt okoz [PPT: 3.3. fejezet]."
  },
  {
    ppt: "zh2/3",
    type: "Többszörös választás",
    q: "A monoszinaptikus nyújtási (myotaticus / saját) reflexre jellemző tulajdonságok:\n1. Receptora az izomorsó, afferense a vastag mielinizált Ia rost\n2. Központi íve egyetlen serkentő szinapszist tartalmaz a saját izom alfa-motoneuronjára\n3. Ia gátló interneuron közvetítésével reciprok gátlást fejt ki az antagonista izomcsoportra\n4. Poliszinaptikus ív révén reflexes végtag-elrántást és keresztezett extenziót vált ki",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "Az 1., 2. és 3. a saját/nyújtási reflex alaptulajdonsága. A 4. a nociceptív flexor (idegen) reflexre és a keresztezett extenzor reflexre jellemző [PPT: 3.5. fejezet]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "A nociceptív flexor reflexre (menekülési / bőrreflex) és a keresztezett extenzor reflexre igaz:",
    options: [
      "A. Monoszinaptikus ív, amely kizárólag a stimulált izomra korlátozódik",
      "B. Károsító ingerre az azonos oldali flexorok serkentődnek és extenzorok gátlódnak (elrántás), míg az ellenoldalon az extenzorok serkentődnek a testtömeg megtartására",
      "C. Nincs reciprok innervációja",
      "D. Receptorai az izomorsók intrafusalis magzsák rostjai",
      "E. Sérülése esetén azonnal Babinski-tünet jelenik meg"
    ],
    correct: 1,
    exp: "A flexor reflex poliszinaptikus védekező reflex: fájdalomra a végtag flexióba rándul, az ellenoldali végtag pedig a keresztezett extenzor reflexszel megfeszül a stabilitásért [PPT: 3.5. fejezet]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "Mi jellemzi a gerincvelői sokk (spinal shock) AKUT fázisát a gerincvelő hirtelen harántsérülése után?",
    options: [
      "A. Kifejezett spasticitás, hyperreflexia és clonus a sérülés alatt",
      "B. A sérüléstől kaudálisan teljes anesztézia, atónia, petyhüdt bénulás (flaccid paralysis), areflexia és a vazomotor tónus megszűnése",
      "C. Azonnal kialakuló tömegreflex (mass reflex)",
      "D. Kóros flexor reflexek és azonnali decerebrációs merevség",
      "E. A széklet- és vizeletürítés azonnali automatizmusa"
    ],
    correct: 1,
    exp: "Akutan a felsőbb facilitáló agytörzsi hatások kiesése miatt petyhüdt bénulás, areflexia és vazomotor kollapszus lép fel; a spasticitás és hiperreflexia csak hetek-hónapok múlva, a krónikus fázisban fejlődik ki [PPT: 3.6. fejezet]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "Milyen tünetegyüttes és mechanizmus jellemzi a Sherrington-féle DECEREBRÁCIÓS rigiditást?",
    options: [
      "A. Az átmetszés a colliculus superior és inferior között (a nucleus ruber alatt) történik: a nyúltvelői gátlás kiesése miatt a Deiters-mag feszítő túlsúlya alakul ki, mind a négy végtag deszkaszerűen mereven kinyújtott",
      "B. Az átmetszés a nucleus ruber felett van: az alsó végtag nyújtott, de a felső végtag flexióban áll",
      "C. Petyhüdt, tónustalan végtagok areflexiával",
      "D. Szelektív kisagyi atrophia intentiós tremorral",
      "E. Csak a törzsizmok flexiója figyelhető meg"
    ],
    correct: 0,
    exp: "Decerebrációban (átmetszés a n. ruber alatt) a flexorokat segítő n. ruber kiesik, és a vestibularis Deiters-mag fékezetlen serkentése miatt mind a 4 végtag mereven feszített (antigravitációs extenzor túlsúly) [PPT: 3.8. fejezet]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "Milyen mechanizmus és testtartás jellemzi a DEKORTIKÁCIÓS rigiditást (embernél pl. stroke utáni Wernicke–Mann tartás)?",
    options: [
      "A. A lézió a nucleus ruber alatt található, mind a négy végtag extensióban van",
      "B. A sérülés a nucleus ruber felett (agykéreg, capsula interna) van: a nucleus ruber épen maradása miatt a felső végtag flexióban ('kolduló tartás'), míg a Deiters-mag hatására az alsó végtag extensióban rögzül",
      "C. Mind a négy végtag petyhüdten bénult",
      "D. Csak a distalis ujjizmok hypotoniája figyelhető meg",
      "E. A vegetatív idegrendszer teljes bénulása"
    ],
    correct: 1,
    exp: "Dekortikációban a nucleus ruber megmarad, így a felső végtag flexorai tónusosak, míg az alsó végtagban az extenzor tónus dominál (félköríves kaszáló járás) [PPT: 3.8. fejezet]."
  },

  // =========================================================================
  // IV. A KISAGY (CEREBELLUM) ÉLETTANA ÉS TÜNETTANA (14. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "A kisagykéreg szövettani felépítésére és belső áramköreire igaz:",
    options: [
      "A. A Purkinje-sejt a kisagykéreg egyetlen kimenő neuronja, és mindig GÁTLÓ (GABAerg) hatást fejt ki a mély kisagyi magvakra",
      "B. A kúszórostok a hídi magvakból indulnak és szemcsesejteken végződnek",
      "C. A kisagy közvetlen gerincvelői leszálló motoros pályákkal mozgatja a végtagokat",
      "D. A Purkinje-sejtek glutamáterg serkentést adnak a talamusz felé",
      "E. A mély kisagyi magvak kizárólag gátló kimenetet adnak az agytörzs felé"
    ],
    correct: 0,
    exp: "A kisagykéreg egyetlen efferense a Purkinje-sejt, amely tónusos GABAerg gátlás alatt tartja a mély magvakat; közvetlen gerincvelői efferense nincs, a motoros kéreg és agytörzs modulációján át hat [PPT: 14.4, 14.5. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "A kisagyi bemenetek közül melyik rosttípus ered KIZÁRÓLAG az alsó oliva magból (Oliva inferior), és mi a funkciója?",
    options: [
      "A. Moharost – egyetlen szemcsesejtet serkent",
      "B. Kúszórost (Climbing fiber) – közvetlenül rátekeredik egyetlen Purkinje-sejt dendritjére, masszív komplex akciós potenciált ('complex spike') vált ki, amely a motoros hibajelet kódolja",
      "C. Párhuzamos rost – lateralisan gátolja a kosársejteket",
      "D. Spinocerebellaris rost – gátolja a mély magvakat",
      "E. Corticopontin rost – dopamint ürít a kisagyban"
    ],
    correct: 1,
    exp: "A kúszórostok kizárólag az oliva inferiorból származnak, 1:1 arányban tekerednek a Purkinje-dendritekre, komplex tüskét generálnak, ami a plasztikus motoros tanulás hibajele [PPT: 14.4. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helytelen állítás keresése",
    q: "A neocerebellum (cerebrocerebellum / laterális féltekék) sérülésekor az alábbi tünetek figyelhetők meg, KIVÉVE:",
    options: [
      "A. Ataxia (széles alapú, dülöngélő mozgáskoordinációs zavar)",
      "B. Dysmetria és mellényúlás (hypermetria / hypometria)",
      "C. Intentiós tremor (a célhoz közeledve felerősödő remegés)",
      "D. Spasticus tónusfokozódás bicskabicska-tünettel és teljes izombénulással (plegia)",
      "E. Dysdiadochokinesis (gyors alternáló mozgások kivitelezésének képtelensége)"
    ],
    correct: 3,
    exp: "A kisagy léziója NEM okoz plegiát és NEM okoz spasticitást; éppen ellenkezőleg: a kisagyi károsodásra izomgyengeség nélküli koordinációvesztés és jellegzetes hypotonia jellemző [PPT: 14.8, 14.14. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "Mi a dysarthria (skandáló beszéd) lényege kisagyi károsodásban?",
    options: [
      "A. A szavak szemantikai megértésének teljes elvesztése",
      "B. A hangképző és artikulációs izmok koordinációjának szétesése: szaggatott, darabos, szótagoló, robbanékony beszéd",
      "C. A gégeizmok perifériás petyhüdt bénulása",
      "D. Kényszeres szóáradat neologizmusokkal",
      "E. A beszéd akaratlagos indításának gátlása rigiditás miatt"
    ],
    correct: 1,
    exp: "A cerebellaris dysarthria a beszédizmok koordinációs zavara (ataxiája): a beteg szótagolva, szaggatottan, nem megfelelő hangsúlyokkal beszél [PPT: 14.8, 14.12. dia]."
  },

  // =========================================================================
  // V. A BASALIS GANGLIONOK ÉS KÓRKÉPEIK (14. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "Hogyan befolyásolja a DOPAMIN a motoros aktivitást a basalis ganglionok hálózatában?",
    options: [
      "A. Gátolja a motoros aktivitást mindkét pályán keresztül",
      "B. A D1 receptorokon át SERKENTI a direkt pályát, a D2 receptorokon át GÁTOLJA az indirekt pályát -> mindkét hatás eredőjeként FOKOZZA a motoros kérgi aktivitást",
      "C. Csökkenti a talamusz serkentő hatását az agykéreg felé",
      "D. Szelektíven elpusztítja a striatális kolinerg interneuronokat",
      "E. Csak a kisagy Purkinje-sejtjein keresztül fejti ki hatását"
    ],
    correct: 1,
    exp: "A substantia nigra dopaminja a D1 (Gs, cAMP nő) úton pörgeti a direkt pályát, a D2 (Gi, cAMP csökken) úton fékezi az indirekt gátló pályát: mindkét mechanizmus feloldja a talamusz gátlását ('Turns UP motor activity') [PPT: 14.24, 14.25. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "Milyen hatást fejt ki az ACETILKOLIN a striatumban a mozgásszabályozásra?",
    options: [
      "A. Mindig fokozza a motoros kérgi kimenetet",
      "B. Gátolja a direkt pályát és serkenti az indirekt pályát -> CSÖKKENTI a motoros aktivitást (antagonizálja a dopamint)",
      "C. Gátolja a Globus pallidus interna GABA-ürítését",
      "D. Szelektíven stimulálja a substantia nigra dopaminsejtjeit",
      "E. Nem vesz részt a basalis ganglionok modulációjában"
    ],
    correct: 1,
    exp: "A striatális kolinerg interneuronok a dopaminnal ellentétesen hatnak: elnyomják a direkt és erősítik az indirekt pályát, fékezve a kérgi mozgásindítást [PPT: 14.24, 14.25. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "A Parkinson-kór klasszikus klinikai triásza és patológiai oka:",
    options: [
      "A. Ataxia, nystagmus, skandáló beszéd; ok: vermis lézió",
      "B. Chorea, demencia, pszichózis; ok: striatális atrophia",
      "C. Akinesia/hypokinesia (mozgásszegénység), rigiditás (ólomcső/fogaskerék tünet) és nyugalmi tremor (4-6 Hz, pirulagörgető); ok: a Substantia nigra pars compacta dopaminerg neuronjainak pusztulása",
      "D. Hemiballismus és epilepszia; ok: nucleus subthalamicus stroke",
      "E. Kifejezett hypotonia és intentiós tremor; ok: nucleus dentatus elhalása"
    ],
    correct: 2,
    exp: "Parkinson-kórban a nigrostriatalis dopamin kiesése miatt mindkét pálya a mozgás elnyomása felé tolódik; szövettanilag Lewy-testek jellemzik [PPT: 14.28, 14.29, 14.30. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "A Huntington-kór (Huntington-chorea) genetikai és hálózati mechanizmusa:",
    options: [
      "A. Autoszomális recesszív; a dopamin túlzott hiánya a középagyban",
      "B. Autoszomális domináns öröklődés (huntingtin gén); a striatumban elpusztulnak az indirekt pálya GABAerg/kolinerg neuronjai -> az indirekt fék kiesése miatt hyperkinesis és akaratlan choreiform mozgások alakulnak ki",
      "C. A piramispálya Betz-sejtjeinek pusztulása flaccid bénulással",
      "D. A Deiters-mag kétoldali kiesése opisthotonusszal",
      "E. A motoneuronok nikotinos receptorainak autoimmun destrukciója"
    ],
    correct: 1,
    exp: "Huntington-kórban a striatum indirekt pályájának neuronjai pusztulnak el, a gátló fék megszűnik, ami kontrollálhatatlan túlmozgásokhoz ('vitustánc') vezet [PPT: 14.31, 14.33. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "A hemiballismus jellegzetes dobáló, heves ellenoldali végtagmozgásait mely agyi struktúra körülírt sérülése (leggyakrabban stroke) idézi elő?",
    options: [
      "A. Nucleus caudatus",
      "B. Nucleus subthalamicus (STN)",
      "C. Nucleus dentatus",
      "D. Substantia nigra pars compacta",
      "E. Gyrus postcentralis"
    ],
    correct: 1,
    exp: "Az ellenoldali nucleus subthalamicus kiesésekor megszűnik a GPi serkentése, leáll az indirekt gátló pálya, ami fékezetlen ballisztikus végtagmozgásokat robbant ki [PPT: 14.34. dia]."
  },

  // =========================================================================
  // VI. A MOTOROS KÉREG ÉS MOTONEURON SZINDRÓMÁK (14. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "A tractus corticospinalis (piramispálya) lefutására és funkciójára igaz:",
    options: [
      "A. Kizárólag a kisagyi kéregből indul ki",
      "B. Rostjainak kb. 80-90%-a a nyúltvelői piramisban átkereszteződik (tr. corticospinalis lateralis), Betz-féle óriás piramissejtjei 70 m/s-os sebességgel közvetítenek a finom ujjmozgásokhoz",
      "C. Rostjai soha nem létesítenek közvetlen kapcsolatot alfa-motoneuronokkal",
      "D. A capsula interna elkerülésével száll le az agytörzsbe",
      "E. Sérülése mindig azonos oldali petyhüdt bénulást idéz elő"
    ],
    correct: 1,
    exp: "A piramispálya keresztezett pálya (ezért okoz ellenoldali bénulást a kérgi stroke), óriás Betz-sejtjei monoszinaptikusan érik el a distalis végtagmozgató motoneuronokat a gyors, precíz ujjmozgásokhoz [PPT: 14.37, 14.38. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helytelen állítás keresése",
    q: "A felső motoneuron (centrális) szindróma krónikus tüneteire mi NEM JELLEMZŐ?",
    options: [
      "A. Kiterjedt spasztikus tónusfokozódás (bicska-tünet)",
      "B. Élénk saját reflexek (hiperreflexia, klónusz)",
      "C. Kóros piramistünetként megjelenő pozitív Babinski-jel (lábfej extenzió, ujjak legyezőszerű szétterülése)",
      "D. Kifejezett, gyors és súlyos denervációs izomsorvadás (izomatrófia)",
      "E. Akaratlagos finommozgások kiesése"
    ],
    correct: 3,
    exp: "A gyors, súlyos izomatrófia és areflexia az ALSÓ motoneuron (perifériás ideg / elülső szarvi sejt) kiesésére jellemző! Felső motoneuronnál csak késői, mérsékelt inaktivitási atrófia lép fel [PPT: 14.41, 14.42, 14.43. dia]."
  },
  {
    ppt: "zh2/3",
    type: "Helyes állítás keresése",
    q: "Az alsó motoneuron (perifériás) lézió klasszikus tünetegyüttese az érintett izmokban:",
    options: [
      "A. Spasztikus merevség, hiperreflexia és Babinski-jel",
      "B. Petyhüdt bénulás (hypotonia), areflexia / hyporeflexia, negatív Babinski-jel és gyors denervációs izomsorvadás",
      "C. Nyugalmi tremor és fogaskerék-tünet",
      "D. Csak a beszédképzés zavara",
      "E. Szenzoros ataxia pozitív Romberg-tünettel"
    ],
    correct: 1,
    exp: "Mivel a perifériás reflexív fizikailag megszakad, az izom petyhüdten lebénul, a reflexek kiesnek, és a trofikus beidegzés hiánya miatt hetek alatt súlyos izomsorvadás fejlődik ki [PPT: 14.43. dia]."
  }
];

// Kérdések hozzáfűzése a központi listához
window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS.concat(zh2_3_Questions);