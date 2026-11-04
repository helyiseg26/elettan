/**
 * Orvosi és Fogorvosi Élettan Kérdésbank - ZH2/5 Tematika
 */

window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS || [];

(function () {
  const zh2Questions = [
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "A véglemezpotenciálra (EPP) jellemző:",
      options: [
        "A. egy elektrotónusos membránpotenciál-változás",
        "B. a vázizomrostot közvetlenül hiperpolarizálja",
        "C. kifejezett refrakter-periódussal rendelkezik",
        "D. reverzál potenciálja -80 mV körüli érték",
        "E. kialakulásáért muszkarinos típusú ACh receptorok a felelősek"
      ],
      correct: 0,
      exp: "A véglemezpotenciál (EPP) a nikotinos acetilkolin receptorok megnyílása révén létrejövő, dekrementummal terjedő lokális elektrotónusos depolarizáció."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "A neuromuszkuláris junkció:",
      options: [
        "A. egy elektromos szinapszis",
        "B. egy különleges kémiai szinapszis",
        "C. működése teljesen független a lokális magnézium koncentrációtól",
        "D. működése az acetilkolin bontásától független",
        "E. működése független a külső ionmiliőtől"
      ],
      correct: 1,
      exp: "A motoros véglemez az alfa-motoneuron és a vázizomrost közötti speciális kémiai szinapszis, amelyben acetilkolin a transzmitter."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Válassza ki az egyetlen HELYES állítást!",
      options: [
        "A. a serkentő poszt-szinaptikus potenciál (EPSP) a poszt-szinaptikus sejt hiperpolarizációja",
        "B. a serkentő poszt-szinaptikus potenciál (EPSP) és a véglemez potenciál (EPP) alapvető biofizikai jellemzői megegyeznek",
        "C. általában egyetlen serkentő poszt-szinaptikus potenciál (EPSP) elegendő, hogy a poszt-szinaptikus neuronon akciós potenciált váltson ki",
        "D. a gátló poszt-szinaptikus potenciált (IPSP) nem-szelektív kationcsatornák megnyílása hozza létre",
        "E. a serkentő poszt-szinaptikus potenciál (EPSP) a minden-vagy-semmi törvényét követi"
      ],
      correct: 1,
      exp: "Mind az EPSP, mind az EPP ligandum-vezérelt csatornák által mediált lokális, dekrementummal terjedő, gradált depolarizáció."
    },
    {
      ppt: "zh2/5",
      type: "Helytelen állítás keresése",
      q: "Válassza ki az egyetlen HELYTELEN állítást a motoros egységekről!",
      options: [
        "A. a vázizom akciós potenciáljának refrakter periódusa rövidebb, mint a kalcium tranziens időtartama",
        "B. inkomplett tetanusz során az egyes összehúzódások között még megfigyelhető relaxáció",
        "C. a motoros egységet egyetlen moto-neuron innerválja",
        "D. a motoros egységek a szervezetben mindig azonos számú izomrostot tartalmaznak",
        "E. a tetanusz alapját az egyes összehúzódások szummációja jelenti"
      ],
      correct: 3,
      exp: "A motoros egységek mérete jelentősen eltér: a finommozgásokat végző szemizmokban alig 5-10 izomrost, a testtartó törzsizmokban akár több száz vagy ezer izomrost tartozik egy motoneuronhoz."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "A vázizomok szarkoplazmatikus retikulumának kalcium csatornájának elnevezése:",
      options: [
        "A. dihidropiridin receptor (DHPR)",
        "B. rianodin receptor (RyR1)",
        "C. nikotin-típusú receptor",
        "D. L-típusú kalcium csatorna",
        "E. IP3 receptor"
      ],
      correct: 1,
      exp: "A szarkoplazmatikus retikulum membránjában a kalcium kiáramlásáért a rianodin receptor (RyR1 izoforma) felelős, amit a T-tubulus feszültségérzékelő DHPR-ja közvetlen mechanikai kapcsolattal nyit meg."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Simaizomban az összehúzódás során a citoplazmába történő belépést követően a kalcium melyik fehérjéhez kötődik?",
      options: [
        "A. Calmodulin",
        "B. Miozin könnyűlánc",
        "C. Troponin C",
        "D. Tropomiozin",
        "E. Protein kináz A"
      ],
      correct: 0,
      exp: "A simaizomban hiányzik a troponin rendszer; a Ca2+ a kalmodulinhoz kötődik, és a keletkező komplex aktiválja a miozin könnyűlánc kinázt (MLCK)."
    },
    {
      ppt: "zh2/5",
      type: "Helytelen állítás keresése",
      q: "Válassza ki az egyetlen HELYTELEN állítást a simaizomra vonatkozóan!",
      options: [
        "A. a simaizmokban a kontrakció latenciája meghaladja a 100 ms-ot",
        "B. simaizom sejteken nem figyelhető meg harántcsíkolat",
        "C. többegységes simaizomban az egyes sejtek egymástól függetlenül működnek",
        "D. a simaizom sejt membránpotenciálja a vázizoméhoz képest hiperpolarizáltabb",
        "E. viszcerális simaizomban a sejtek között számos gap junction található"
      ],
      correct: 3,
      exp: "A simaizomsejtek nyugalmi membránpotenciálja kevésbé negatív (-50 és -60 mV közötti), mint a vázizomrostoké (-90 mV)."
    },
    {
      ppt: "zh2/5",
      type: "Helytelen állítás keresése",
      q: "Vázizomban:",
      options: [
        "A. az izom összehúzódásakor a szarkomerek megrövidülnek",
        "B. az akto-miozin kölcsönhatás során a miozinfej ATP-t hidrolizál",
        "C. az akto-miozin kölcsönhatás során a vékony és vastag filamentumok elmozdulnak egymás mellett",
        "D. az akto-miozin kölcsönhatás megindításához a Ca2+ ionok a troponin C alegységéhez kötődnek",
        "E. a kialakítható aktív kereszthidak száma független a szarkomér hosszától"
      ],
      correct: 4,
      exp: "A kifejthető izomerő és a kereszthidak száma szigorúan a szarkomér kiindulási hosszától és az aktin-miozin átfedés mértékétől függ."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Vázizmokban:",
      options: [
        "A. a vastag filamentum troponin I-t tartalmaz",
        "B. a vastag filamentum miozint nem tartalmaz",
        "C. a vékony filamentum troponin K-t tartalmaz",
        "D. a vékony filamentum troponin C-t tartalmaz",
        "E. a vékony filamentum tropomiozint nem tartalmaz"
      ],
      correct: 3,
      exp: "A vékony filamentumot aktin, tropomiozin és a troponin komplex (I, T, C alegységek) alkotja."
    },
    {
      ppt: "zh2/5",
      type: "Többszörös választás",
      q: "Vázizom fiziológiás működése esetén a relaxáció:\n1. a SERCA ATPáz működése következtében alakul ki\n2. a sarcolemma kalcium pumpa (PMCA) működése következtében alakul ki\n3. az intracelluláris kalcium koncentráció csökkenése miatt következik be\n4. a sarcolemma DHPR működése következtében jön létre",
      options: [
        "A. ha csak az 1., 2. és 3. igaz",
        "B. ha csak az 1. és a 3. igaz",
        "C. ha csak a 2. és 4. igaz",
        "D. ha csak a 4. igaz",
        "E. ha az összes válasz igaz"
      ],
      correct: 0,
      exp: "A relaxáció feltétele a citoszol szabad Ca2+ szintjének visszacsökkentése, amit a SERCA és a plazmamembrán Ca2+-pumpája valósít meg."
    },
    {
      ppt: "zh2/5",
      type: "Helytelen állítás keresése",
      q: "Mi NEM igaz a szív pacemaker-sejtjeire?",
      options: [
        "A. spontán diasztolés depolarizáció meredekebbé válik szimpatikus ingerlés hatására",
        "B. membránpotenciáljuk folyamatosan változik",
        "C. maximális diasztolés depolarizáció nagysága kevésbé negatív, mint a szív munkaizomsejtjeinek nyugalmi potenciálja",
        "D. a spontán diasztolés depolarizáció laposabbá válik paraszimpatikus ingerek hatására",
        "E. a membránpotenciál időbeli változása megszűnik a sejt repolarizációja után"
      ],
      correct: 4,
      exp: "A pacemaker sejtekben nincs stabil nyugalmi potenciál; a repolarizáció végét követően azonnal megindul a spontán diasztolés depolarizáció (prepotenciál)."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Az EKG-n a T-hullám oka:",
      options: [
        "A. a pitvarok repolarizációja",
        "B. a pitvarok depolarizációja",
        "C. az ingerület terjedése a His-kötegben",
        "D. a kamrák repolarizációja",
        "E. a kamrák depolarizációja"
      ],
      correct: 3,
      exp: "A kamrák munkaizomzatának repolarizációja jelenik meg a testen elvezetett EKG görbén T-hullámként."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Az EKG PQ-szakasza megfelel:",
      options: [
        "A. kamrai depolarizációnak",
        "B. az SA-csomóról a pitvari izomzatra történő átvezetésnek",
        "C. kamrai repolarizációnak",
        "D. az AV-csomó és a His-köteg repolarizációjának",
        "E. a pitvari depolarizációnak és az AV-csomón keresztüli átvezetésnek"
      ],
      correct: 4,
      exp: "A PQ-szakasz a pitvari izomzat depolarizációját és az ingerület AV-csomón, His-kötegen keresztüli átvezetését foglalja magában."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Mely ioncsatornák megnyílása felelős a kamrai akciós potenciálra jellemző plató fázis kialakulásáért?",
      options: [
        "A. a Na+/K+-pumpa önmagában képes a platót kialakítani",
        "B. kizárólag a feszültségfüggő Ca2+-csatornáké",
        "C. a késői K+ és a Ca2+-csatornák egyidejű megnyílása",
        "D. csak a gyors Na+-csatornáké",
        "E. csak a késői K+ csatornáké"
      ],
      correct: 2,
      exp: "A platófázist (2-es fázis) a befelé irányuló L-típusú Ca2+-áram és a kifelé folyó egyenirányító K+-áramok kényes dinamikus egyensúlya tartja fenn."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Mi a szív ingerületképző és -vezető rendszerének legutolsó tagja, amely még rendelkezik inherens pacemaker aktivitással?",
      options: [
        "A. az AV csomó",
        "B. a Purkinje-hálózat",
        "C. a His-köteg",
        "D. a bal pitvari izomzat",
        "E. a bal kamrai izomzat"
      ],
      correct: 1,
      exp: "A tercier ingerképző központot a Purkinje-rostok alkotják, amelyek saját inherent frekvenciája 20–40/perc."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Mely területre NEM jellemző a spontán diasztolés depolarizáció?",
      options: [
        "A. kamrai munkaizomzat",
        "B. Tawara-szárak",
        "C. AV csomó",
        "D. His-köteg",
        "E. sinus-csomó"
      ],
      correct: 0,
      exp: "A kamrai munkaizomsejtek membránpotenciálja stabil (-90 mV), és fiziológiás körülmények között nem mutat diasztolés prepotenciált."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Hol a leggyorsabb az akciós potenciál vezetési sebessége a szívben?",
      options: [
        "A. a Purkinje-rostokban",
        "B. a His kötegben",
        "C. a bal kamrában",
        "D. a jobb kamrában",
        "E. az AV csomóban"
      ],
      correct: 0,
      exp: "A Purkinje-rostokban mérhető a legnagyobb vezetési sebesség (kb. 2–4 m/s), míg a leglassabb az AV-csomóban (~0,05 m/s)."
    },
    {
      ppt: "zh2/5",
      type: "Helytelen állítás keresése",
      q: "A bal kamra munkaizomzata fő tömegének depolarizációjára mi NEM igaz az alábbiak közül?",
      options: [
        "A. A depolarizáció hátterében álló akciós potenciál TTX jelenlétében is kiváltható",
        "B. Befelé irányuló Ca2+ áramkomponenssel rendelkezik",
        "C. A subendocardium felől a subepicardium felé terjed",
        "D. Az apex irányából a basis felé halad",
        "E. Az R-hullám kialakulása leginkább ehhez a folyamathoz köthető"
      ],
      correct: 0,
      exp: "A munkaizomzat 0. fázisának gyors felszálló szárát feszültségfüggő Na+-csatornák hozzák létre, amelyeket a tetrodotoxin (TTX) gátol."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Milyen feszültségtartományba esnek a szokásos testfelszíni EKG hullámainak amplitúdói?",
      options: [
        "A. 0,1-1 mikrovolt",
        "B. 50-100 mikrovolt",
        "C. 3-10 millivolt",
        "D. 0,1-2 millivolt",
        "E. 50-100 millivolt"
      ],
      correct: 3,
      exp: "A testfelszínen regisztrált EKG hullámok amplitúdója a millivoltos tartományba esik (0,1–2 mV)."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Mely kóros állapotok megítélésében várhatjuk az EKG-tól a legkevesebb közvetlen információt?",
      options: [
        "A. A szív csökkent mechanikai pumpafunkciója",
        "B. Szívritmuszavarok",
        "C. Nagymértékben csökkent coronaria-átáramlás",
        "D. Jobbkamra-hipertrófia",
        "E. Pitvar-kamrai átvezetési zavar"
      ],
      correct: 0,
      exp: "Az EKG elektromos potenciálokat regisztrál; a mechanikai kontraktilitásról és pumpateljesítményről (pl. ejekciós frakció) közvetlen képet nem ad."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "A szívizom nem tetanizálható, mert:",
      options: [
        "A. a szívizomsejtek nem tartalmaznak kalciumot",
        "B. a mechanikai válasz időtartama általában jóval rövidebb, mint a depolarizáció",
        "C. hosszú mechanikai refrakter periódussal bír",
        "D. az elektromos refrakter periódus és a mechanikai válasz időtartama csaknem megegyezik",
        "E. a szívizom Ca2+-pumpái kimerülnek"
      ],
      correct: 3,
      exp: "A plató miatt az abszolút refrakter stádium a kontrakció ellazulási szakaszáig tart, így a szívizom nem képes szummációra és tetanizációra."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "A szívglikozidok (pl. digitalis) pozitív inotróp hatásának mechanizmusa:",
      options: [
        "A. serkentik az intracelluláris cAMP termelődést",
        "B. gátolják a Na+/K+-ATPáz működését a sejtfelszíni membránban",
        "C. blokkolják a szív béta-adrenerg receptorait",
        "D. csökkentik a kontraktilis fehérjék számára elérhető Ca2+ szintet",
        "E. közvetlenül serkentik az adenilát-ciklázt"
      ],
      correct: 1,
      exp: "A Na+/K+-pumpa gátlása megemeli a citoszol Na+ szintjét, ami lassítja a Na+/Ca2+ kicserélőt (NCX), így megnöveli a szarkoplazmatikus Ca2+-raktározást és a kontrakciós erőt."
    },
    {
      ppt: "zh2/5",
      type: "Relációanalízis",
      q: "ÁLLÍTÁS: Az extracelluláris Ca2+ teljes elvonása után a szív nem képes összehúzódni,\nMERT\nINDOKLÁS: Az extracelluláris Ca2+ ionoknak alapvető szerepük van a kontrakcióhoz szükséges Ca2+ mennyiség sarcoplasmaticus reticulumból való felszabadításában.",
      options: [
        "A. Az állítás és az indoklás is igaz, és köztük összefüggés van",
        "B. Az állítás és az indoklás is igaz, de nincs köztük összefüggés",
        "C. Az állítás igaz, az indoklás hamis",
        "D. Az állítás hamis, az indoklás igaz",
        "E. Mindkettő hamis"
      ],
      correct: 0,
      exp: "A szívizomban Ca2+-indukált Ca2+-felszabadulás (CICR) van: a sarcolemma L-típusú csatornáin beáramló külső Ca2+ indítja el az SR rianodin receptorainak megnyílását."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Az izovolumetriás kamrai kontrakció során:",
      options: [
        "A. a bal pitvari nyomás gyorsan növekszik",
        "B. a bal kamrai nyomás gyorsan emelkedik",
        "C. az aortanyomás gyorsan emelkedik",
        "D. az aortanyomás lassan emelkedik",
        "E. a bal pitvari nyomás lassan emelkedik"
      ],
      correct: 1,
      exp: "Mivel mind az AV-, mind a semilunaris billentyűk zártak, a kamraizomzat feszülésének növekedése a kamrai nyomás meredek emelkedéséhez vezet térfogatváltozás nélkül."
    },
    {
      ppt: "zh2/5",
      type: "Helytelen állítás keresése",
      q: "Válassza ki az egyetlen HELYTELEN állítást a szívciklusra vonatkozóan!",
      options: [
        "A. Diasztolé alatt az aortában uralkodó nagyobb nyomás a semilunaris billentyűket zárva tartja",
        "B. A tricuspidalis billentyű hiányos záródása súlyos keringési zavarokat okozhat",
        "C. Az izometriás kontrakció végén az AV-billentyűk kinyílnak",
        "D. Az ejekciós fázis alatt a kamrák kiürülnek",
        "E. Az izometriás kontrakció alatt az AV- és a semilunaris billentyűk is zárva vannak"
      ],
      correct: 2,
      exp: "Az izometriás kontrakció végén a megemelkedett kamrai nyomás a semilunaris billentyűket nyitja ki, az AV-billentyűk már a fázis legelején záródtak."
    },
    {
      ppt: "zh2/5",
      type: "Helytelen állítás keresése",
      q: "Az alábbi megállapítások közül melyik NEM igaz a szívciklusra?",
      options: [
        "A. a pitvari nyomásgörbén lévő c-hullám leginkább az AV-billentyűk záródásának következménye",
        "B. az első szívhang az AV-billentyűk záródásának következménye",
        "C. a pitvari nyomásgörbén lévő v-hullám közvetlenül az AV-billentyűk megnyílása előtt jelentkezik",
        "D. a kamrai szisztolé néhány milliszekundummal a QRS komplexum után kezdődik",
        "E. a pitvarkontrakció az AV-csomó pacemaker sejtjei révén jön létre"
      ],
      correct: 4,
      exp: "A pitvarkontrakciót normális körülmények között a sinus-csomó (primer ingerképző) vezérli, nem az AV-csomó."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "A Frank-Starling törvény kimondja, hogy:",
      options: [
        "A. a szívfrekvencia az artériás vérnyomással egyenesen arányos",
        "B. a szívizom összehúzódásának ereje a szarkomerek kezdeti (vég-diasztolés) hosszának függvénye",
        "C. a kamrák perctérfogata független a vénás telődéstől",
        "D. a bal és jobb kamra perctérfogata tartósan eltér egymástól",
        "E. az utóterhelés emelkedése közvetlenül növeli a pulzustérfogatot"
      ],
      correct: 1,
      exp: "A Frank-Starling mechanizmus a szív heterometriás autoregulációja: a vég-diasztolés rostnyúlás növeli a kontraktilis erőt és a lökettérfogatot."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Melyik állítás igaz a vénás telődés növelése esetén?",
      options: [
        "A. az izomrostok megrövidülési sebessége csökken",
        "B. a kamrai end-diasztolés nyomás csökken",
        "C. csökken az izomrostok passzív feszülése",
        "D. a kamrafal feszülése nő",
        "E. a pulzustérfogat szükségszerűen lecsökken"
      ],
      correct: 3,
      exp: "A Laplace-törvény értelmében a megnövekedett intrakardiális volumen és vég-diasztolés nyomás feszíti a falat, így növeli a falfeszülést."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Mi a mechanizmusa egy szívátültetésen átesett személy fizikai terhelésre jelentkező perctérfogat-növekedésének?",
      options: [
        "A. reflexesen csökkenő vagustónus",
        "B. a terhelés hatására csökkenő end-diasztolés nyomás",
        "C. a fokozott vénás visszaáramlás miatti Frank-Starling mechanizmus",
        "D. lecsökken a szisztolé időtartama",
        "E. a transzplantált szív nem képes a perctérfogat növelésére"
      ],
      correct: 2,
      exp: "A vegetatív beidegzéstől megfosztott (denervált) szívben a mozgó izmok által pumpált fokozott vénás telődés a heterometriás Frank-Starling autoregulációval növeli a lökettérfogatot."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "A bal kamra által végzett mechanikai munka lényegesen nagyobb, mint a jobb kamráé, mert a bal kamra:",
      options: [
        "A. által produkált lökettérfogat lényegesen nagyobb",
        "B. kontrakciója jóval lassabb",
        "C. vénás telődése lényegesen nagyobb",
        "D. lényegesen nagyobb perifériás ellenállással szemben továbbítja a vért",
        "E. falában nincsenek szarkomerek"
      ],
      correct: 3,
      exp: "A két kamra által továbbított vértérfogat egyforma, de a bal kamra a szisztémás artériás középnyomással (~100 Hgmm) szemben dolgozik a kisvérköri nyomáshoz (~15 Hgmm) képest."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Mi a következménye a vagus (n. X.) megnövekedett aktivitásának a sinus-csomó sejtjeiben?",
      options: [
        "A. nő a K+ konduktancia",
        "B. nő a Ca2+ konduktancia",
        "C. csökken az extracelluláris K+ koncentráció",
        "D. nő a spontán diasztolés depolarizáció meredeksége",
        "E. meredeken emelkedik a szívfrekvencia"
      ],
      correct: 0,
      exp: "A kolinerg M2 receptorok aktivációja megnyitja az IK,ACh káliumcsatornákat, ami hiperpolarizációt és a prepotenciál ellaposodását okozza (negatív kronotrópia)."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "Számítsa ki a perctérfogatot, ha a szívfrekvencia 150/min és a pulzustérfogat 70 ml!",
      options: [
        "A. 10,5 l/min",
        "B. 8,0 l/min",
        "C. 7,0 l/min",
        "D. 5,5 l/min",
        "E. 3,0 l/min"
      ],
      correct: 0,
      exp: "Perctérfogat = Szívfrekvencia * Pulzustérfogat = 150/perc * 0,07 liter = 10,5 liter/perc."
    },
    {
      ppt: "zh2/5",
      type: "Helyes állítás keresése",
      q: "A pozitív inotróp ágensek:",
      options: [
        "A. mindig közvetlenül csökkentik a bal kamra ejekciós frakcióját",
        "B. hatásukat a szív béta-1 adrenerg receptoraira hatva is létrehozhatják",
        "C. hatásukat muszkarinos receptorok stimulálásával fejtik ki",
        "D. a kamrafunkciós görbét lefelé és jobbra tolják",
        "E. csökkentik a bal kamrai kontrakció sebességét"
      ],
      correct: 1,
      exp: "A béta-1 adrenerg receptorok Gs fehérjén keresztül emelik a cAMP-t, ami a protein kináz A révén serkenti az L-típusú Ca2+-csatornákat és növeli a kontraktilitást."
    }
  ];

  window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS.concat(zh2Questions);
})();