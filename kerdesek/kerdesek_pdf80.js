/**
 * Orvosi / Fogorvosi Élettan Kérdésbank - PDF 80 (el80.pdf)
 * Besorolva a hivatalos előadási tematika alapján:
 * - A sejtműködés szabályozása, jelátviteli folyamatok
 * - Neuromuscularis junctio és szinaptikus transzmisszió
 * - Izomélettan (vázizom és simaizom)
 * - Gasztrointesztinális működések: Nyálelválasztás, Nyelés és Gyomorműködés
 * - Gasztrointesztinális működések: Pancreas és Máj/Epe működése
 * - Gasztrointesztinális működések: Vékonybél és Vastagbél működése, Felszívódás
 * - Táplálkozásélettan, energiaháztartás és anyagcsere
 */

window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS || [];

const pdf80Questions = [
  // =========================================================================
  // 1. TÉMA: Szinaptikus transzmisszió és Neuromuscularis junctio
  // =========================================================================
  {
    ppt: "Neuromuscularis junctio",
    type: "Helyes állítás keresése",
    q: "A szinaptikus vezikulák fúzióját a preszinaptikus membránnal közvetlenül kiváltja:",
    options: [
      "A. a kloridcsatornák megnyílása",
      "B. a káliumcsatornák megnyílása",
      "C. a feszültségfüggő kalciumcsatornák megnyílása és a beáramló Ca2+ (SNARE komplex aktiváció)",
      "D. a nátrium-kálium pumpa megfordulása",
      "E. a gyors nátriumcsatornák közvetlen mechanikai kapcsolata"
    ],
    correct: 2,
    exp: "A preszinaptikus terminális depolarizációja nyitja a feszültségfüggő Ca2+-csatornákat; a beáramló Ca2+ a szinaptotagminhoz kötődve indítja el a vezikulák fúzióját és a transzmitter exocitózisát[cite: 14]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Helyes állítás keresése",
    q: "A kémiai szinapszisok működésére általánosan érvényes állítás:",
    options: [
      "A. egyes ionotróp receptorok aktiválódása a posztszinaptikus sejt cAMP szintjének közvetlen csökkenését idézi elő",
      "B. a kémiai szinapszisokban az ingerület mindkét irányban szabadon terjedhet",
      "C. a preszinaptikus membránon nincsenek receptorok",
      "D. a posztszinaptikus sejten mind ionotróp, mind metabotróp receptorok előfordulhatnak",
      "E. a preszinaptikus végződésben nem alakulhat ki akciós potenciál"
    ],
    correct: 3,
    exp: "A kémiai szinapszisok egyirányúak (unidirekcionálisak); a posztszinaptikus membrán a transzmittertől függően hordozhat gyors ionotróp csatornákat és lassúbb metabotróp (GPCR) receptorokat is[cite: 14]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Helyes állítás keresése",
    q: "A szinaptikus integrációra (szummációra) igaz:",
    options: [
      "A. a posztszinaptikus potenciálok potencírozódása az intracelluláris kalcium csökkenésének következménye",
      "B. a szinaptikus gátlás mindig két vagy több különálló szinapszis együttműködését igényli",
      "C. a serkentő posztszinaptikus potenciálok térbeli szummációja két vagy több független szinapszis egyidejű aktiválódásakor jön létre",
      "D. az EPSP kialakulása során a posztszinaptikus sejt hiperpolarizálódik",
      "E. az időbeli szummáció független az akciós potenciálok frekvenciájától"
    ],
    correct: 2,
    exp: "Térbeli szummáció akkor alakul ki, ha a neuron különböző dendritjein egyidejűleg érkező EPSP-k elektrotonusosan összegződnek az axondombon[cite: 14]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Helyes állítás keresése",
    q: "A véglemezpotenciálra (EPP) jellemző:",
    options: [
      "A. a vázizmot hiperpolarizálja",
      "B. kifejezett refrakter periódussal rendelkezik",
      "C. reverzálpotenciálja -80 mV körüli érték",
      "D. kialakulásáért muszkarinos típusú Ach receptorok felelősek",
      "E. egy elektrotónusos, graduált helyi membránpotenciál-változás"
    ],
    correct: 4,
    exp: "Az EPP a nikotinos acetilkolin receptorok által közvetített helyi, graduált elektrotónusos depolarizáció, mely normálisan eléri az akciós potenciál küszöbét[cite: 14]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Helyes állítás keresése",
    q: "A neuromuscularis junctio morfológiai és funkcionális sajátossága:",
    options: [
      "A. működése független a lokális magnéziumkoncentrációtól",
      "B. működése az acetilkolin enzimatikus bontásától független",
      "C. működése teljesen független a külső ionmiliőtől",
      "D. egy réskapcsolatokkal összekötött elektromos szinapszis",
      "E. egy különlegesen nagy biztonsági tényezővel (safety factor) bíró kémiai szinapszis"
    ],
    correct: 4,
    exp: "A motoros véglemez speciális kémiai szinapszis: egyetlen idegi akciós potenciál elegendő acetilkolint szabadít fel ahhoz, hogy a biztonsági sáv miatt a vázizomban minden esetben akciós potenciált váltson ki[cite: 14]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Helyes állítás keresése",
    q: "A központi idegrendszer gátló szinapszisaiban a GABA_A receptorokra igaz:",
    options: [
      "A. működésük sztrichninnel specifikusan gátolható",
      "B. ligandum-vezérelt kloridcsatornák (anioncsatornák), melyek kloridbeáramlással hiperpolarizációt (IPSP) okoznak",
      "C. metabotróp jellegű, G-proteinhez kapcsolt receptorok",
      "D. szelektíven átjárhatóak Ca2+-ionokra",
      "E. kálium-szelektív ioncsatornák"
    ],
    correct: 1,
    exp: "A GABA_A ionotróp Cl--csatorna; nyitása hiperpolarizálja a posztszinaptikus membránt (a sztrichnin a glicinreceptorok gátlószere, a GABA_B pedig a metabotróp forma)[cite: 14]."
  },

  // =========================================================================
  // 2. TÉMA: Izomélettan (Vázizom és Simaizom)
  // =========================================================================
  {
    ppt: "Neuromuscularis junctio",
    type: "Helyes állítás keresése",
    q: "Vázizomban az akto-miozin kereszthíd-ciklusra igaz:",
    options: [
      "A. az akto-miozin interakció során a miozinfej defoszforilálódik",
      "B. az akto-miozin ciklus ATP hiányában is zavartalanul végbemegy",
      "C. a kontrakció során maguk a vékony filamentumok rövidülnek meg",
      "D. a kontrakció megindításához a Ca2+-nak a troponin C alegységéhez kell kötődnie",
      "E. az ATP hidrolízise az aktin filamentumon megy végbe"
    ],
    correct: 3,
    exp: "A vázizom kontrakciójának indító lépése a Ca2+ kötődése a troponin C-hez, ami elmozdítja a tropomiozint és szabaddá teszi az aktin kötőhelyeit a miozinfejek számára[cite: 14]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Helyes állítás keresése",
    q: "A lassú oxidatív (I-es típusú, vörös) vázizomrostokra jellemző:",
    options: [
      "A. magas mioglobintartalom és dús kapillarizáció",
      "B. alacsony mitokondriumszám",
      "C. fehér szín és anaerob glikolitikus dominancia",
      "D. nagy rostátmérő és gyors fáradékonyság",
      "E. rendkívül nagy SR Ca2+-pumpa aktivitás"
    ],
    correct: 0,
    exp: "Az I-es típusú rostok aerob anyagcseréjűek, sok mioglobint és mitokondriumot tartalmaznak, vörösek, fáradásállóak (pl. tónusos tartóizmok)[cite: 14]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Helytelen állítás keresése",
    q: "A gyors glikolitikus (II/B vagy II/X típusú, fehér) vázizomrostokra jellemzők az alábbiak, KIVÉVE:",
    options: [
      "A. nagy rostátmérő és nagy glikogénraktár",
      "B. fehér szín az alacsony mioglobintartalom miatt",
      "C. magas miozin ATP-áz aktivitás",
      "D. nagy sűrűségű szarkoplazmatikus retikulum és gyors Ca2+-felszabadulás",
      "E. alacsony miozin ATP-áz aktivitás és magas oxidatív enzimkapacitás"
    ],
    correct: 4,
    exp: "A gyors glikolitikus rostok miozin ATP-áz aktivitása magas (gyors kontrakció), mitokondriumszámuk alacsony, gyorsan fáradnak[cite: 14]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Helytelen állítás keresése",
    q: "A simaizmok működésére vonatkozó állítások közül melyik a HELYTELEN?",
    options: [
      "A. A 'latch-state' (retesz-állapot) minimális ATP-felhasználás mellett valósít meg tartós tónusos összehúzódást",
      "B. Simaizomban az összehúzódás és elernyedés sebessége lényegesen lassabb, mint harántcsíkolt izomban",
      "C. A simaizomsejtekben mind vékony (aktin), mind vastag (miozin) filamentumok jelen vannak",
      "D. A 'latch-state' állapotban a defoszforilált miozinfejek nagyon lassan válnak le az aktinról",
      "E. A simaizmok retesz-állapota extrém fokú, folyamatos ATP-felhasználás mellett jön létre"
    ],
    correct: 4,
    exp: "A latch-állapot lényege pont az energiatakarékosság: a defoszforilált kereszthidak nagyon lassan disszociálnak, így a feszülés minimális ATP-hidrolízissel hosszú ideig fennmarad[cite: 14]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Helytelen állítás keresése",
    q: "A simaizomsejtek elektrofiziológiájára érvényes állítások közül melyik a HELYTELEN?",
    options: [
      "A. Többegységes (multi-unit) simaizomban (pl. iris, vas deferens) az egyes sejtek elektromosan szigeteltek, függetlenül működnek",
      "B. A simaizomsejtek nyugalmi membránpotenciálja (-50..-60 mV) a vázizoméhoz (-90 mV) képest lényegesen hiperpolarizáltabb",
      "C. A simaizomsejtekben nincsenek szarkomerek és harántcsíkolat",
      "D. Egyegységes (single-unit / viszcerális) simaizomban a sejteket dús réskapcsolatok (gap junction) kötik funkcionális szincíciumba",
      "E. A simaizmok kontrakciójának latenciája jóval meghaladja a vázizmokét (>100 ms)"
    ],
    correct: 1,
    exp: "A simaizmok nyugalmi membránpotenciálja kevésbé negatív (-50..-60 mV), tehát DEPOLARIZÁLTABB a vázizom -90 mV-os potenciáljához képest (nem hiperpolarizáltabb)[cite: 14]."
  },

  // =========================================================================
  // 3. TÉMA: Gasztrointesztinális: Nyálelválasztás, Nyelés és Nyelőcső
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "A nyálmirigyek szekréciójának intenzitásának fokozódásakor (magas nyáláramlási sebesség mellett):",
    options: [
      "A. a nyál ozmotikus koncentrációja csökken, teljesen tiszta vízzé válik",
      "B. a nyál ozmotikus koncentrációja és Na+-tartalma fokozódik (közelebb kerül a plazma izoozmotikus szintjéhez)",
      "C. a nyál K+-koncentrációja meredeken a plazmaszint tízszeresére nő",
      "D. a termelt nyál mennyisége gátlódik",
      "E. a bikarbonáttartalom lecsökken"
    ],
    correct: 1,
    exp: "A primer nyál izoozmotikus; a kivezetőcsövek NaCl-t szívnak vissza és K+/HCO3--at szekretálnak. Nagy áramlási sebességnél a kivezetőcsöveknek kevesebb ideje van a visszaszívásra, így a nyál ozmolaritása, Na+- és Cl--koncentrációja megnő[cite: 14]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A nyál összetételére és a nyálelválasztásra vonatkozó állítások közül melyik a HELYTELEN?",
    options: [
      "A. A nyálmirigyek primer szekrétuma a vérplazmával izoozmotikus folyadék",
      "B. A nyálmirigyek kivezetőcsöveiben a hám szorosan záró (tight), vízre alig permeábilis",
      "C. A kivezetőcsövekben zajló Na+-visszaszívást és K+-leadást az aldoszteron is serkenti",
      "D. A nyál végső ozmotikus koncentrációja annál alacsonyabb, minél intenzívebb a nyálelválasztás",
      "E. A nyál tartalmaz mucint, alfa-amilázt, lizozimot és bikarbonátot"
    ],
    correct: 3,
    exp: "Éppen ellenkezőleg: lassú szekréciónál a nyál erősen hipoozmotikus, míg intenzív nyálelválasztáskor az ozmotikus koncentráció megemelkedik (közelít a plazmáéhoz)[cite: 14]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A nyelőcső (oesophagus) funkcionális anatómiájára és motorikájára igazak az alábbiak, KIVÉVE:",
    options: [
      "A. A felső harmad falát harántcsíkolt izomzat alkotja, melyet a n. vagus szomatikus motoros rostjai idegeznek be nikotinos receptorokon keresztül",
      "B. Az alsó harmad simaizomzatát az enterális idegrendszer és a n. vagus preganglionáris rostjai hálózzák be",
      "C. Nyelésszünetben a nyelőcső középső mellkasi szakaszának lumenében szubatmoszférikus (negatív) nyomás mérhető",
      "D. Mind a felső, mind az alsó oesophagealis sphincter nyugalmi tónusát kizárólag a simaizom saját miogén tónusa tartja fenn külső idegi behatás nélkül",
      "E. A primer perisztaltikus hullámot a nyelésközpont indítja el a vaguson keresztül"
    ],
    correct: 3,
    exp: "A felső sphincter (UES) harántcsíkolt izom, tónusát folyamatos szomatikus motoros tüzelés tartja fenn; az alsó sphincter (LES) tónusát pedig miogén és kolinerg/peptidreg idegi faktorok együttesen biztosítják[cite: 14]."
  },

  // =========================================================================
  // 4. TÉMA: Gasztrointesztinális: Gyomorműködés és Sósavszekréció
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "A gyomor sósavszekréciójának fiziológiás szabályozására igaz:",
    options: [
      "A. a gyomornedv pH-jának esése (erős savasodás) serkenti a gasztrin elválasztását",
      "B. a gyomor D-sejtjeiből felszabaduló szomatosztatin gátolja a G-sejtek gasztrin- és a parietális sejtek sósavszekrécióját",
      "C. a H1-típusú hisztaminreceptorok gátlása megszünteti a savszekréciót",
      "D. a gasztrintermelést a GRP (gastrin-releasing peptide) közvetlenül gátolja",
      "E. az intraluminális aminosavak és peptidek gátolják a gasztrinszekréciót"
    ],
    correct: 1,
    exp: "A pH < 3 alá esésekor a D-sejtek szomatosztatint ürítenek, amely parakrin úton gátolja mind a gasztrintermelő G-sejteket, mind a savtermelő parietális sejteket (negatív feedback)[cite: 14]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A gyomornedv összetételére és szekréciójára vonatkozó állítások közül melyik a HELYTELEN?",
    options: [
      "A. A B12-vitamin felszívódásához nélkülözhetetlen intrinsic faktort a fedősejtek (parietális sejtek) termelik",
      "B. A gyomornyálkahártya fősejtjei inaktív pepszinogént szekretálnak",
      "C. A felszíni hámsejtek mucin- és HCO3--gazdag védőréteget választanak ki",
      "D. A gyomornedv fiziológiás pH-ja aktív emésztéskor 1-2 körüli",
      "E. A gyomornedvben normálisan nagy koncentrációban gasztrin hormon található az emésztéshez"
    ],
    correct: 4,
    exp: "A gasztrin ENDOKRIN hormon: a G-sejtek a kapillárisok felé (a véráramba) szekretálják, NEM a gyomor üregébe a gyomornedvbe[cite: 14]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "A parietális sejtek H+/K+-ATP-áz pumpája által végzett sósavelválasztás hatékonyan gátolható:",
    options: [
      "A. protonpumpa-gátlókkal (pl. omeprazol) és H2-receptor antagonistákkal (pl. cimetidin, famotidin)",
      "B. H1-receptor blokkolókkal",
      "C. gasztrin analógokkal",
      "D. béta-2 adrenerg agonistákkal",
      "E. a szénsavanhidráz enzim genetikai fokozásával"
    ],
    correct: 0,
    exp: "A savszekréció közvetlenül a protonpumpa gátlásával (PPI), valamint a hisztamin H2-receptorok és a muszkarin M3-receptorok blokkolásával csökkenthető[cite: 14]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A gyomormotilitásra és a gyomorürülésre érvényes állítások közül melyik a HELYTELEN?",
    options: [
      "A. A táplálékfelvételkor a gyomor fundusa és proximális teste receptív relaxációval alkalmazkodik a térfogathoz (vago-vagalis reflex)",
      "B. A gyomor perisztaltikus hullámai a gyomor középső részén (pacemaker zóna) indulnak és az antrum/pylorus felé terjednek",
      "C. A gyomor perisztaltikus kontrakciói a középső résztől retrográd módon a cardia felé haladnak",
      "D. A duodenumba jutó savas vegyhatás, hiperozmolaritás és zsírok enterogasztrikus reflexek és enterohormonok (szekretin, CCK) révén lassítják a gyomorürülést",
      "E. Az antrum erőteljes szisztoléja a falatot a zárt pylorusnak préselve aprítja és homogenizálja"
    ],
    correct: 2,
    exp: "A gyomorperisztaltika aborális irányú: a pacemaker zónától a pylorus felé halad, retrográd hullámok fiziológiásan nincsenek (csak hányásban)[cite: 14]."
  },

  // =========================================================================
  // 5. TÉMA: Gasztrointesztinális: Pancreas és Máj/Epe működése
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "A hasnyálmirigy enzimben gazdag exokrin szekrécióját, valamint az epehólyag összehúzódását legerősebben kiváltja:",
    options: [
      "A. a vékonybéltartalom savas pH-ja",
      "B. a cellulóz jelenléte",
      "C. a zsírok (zsírsavak, monogliceridek) és peptidek jelenléte a duodenumban (kolecisztokinin / CCK stimuláció)",
      "D. a glükóz magas szintje a vérben",
      "E. a szimpatikus túlsúly"
    ],
    correct: 2,
    exp: "A kimus zsírsav- és aminosav-tartalma serkenti az I-sejtek CCK szekrécióját; a CCK acinussejt-szekréciót és epehólyag-kontrakciót vált ki az Oddi-sphincter ellazulása mellett[cite: 14]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "A hasnyálban lévő inaktív tripszinogén aktív tripszinné alakulását a vékonybél lumenében elindítja:",
    options: [
      "A. a gyomorból érkező pepszin",
      "B. a gasztrin",
      "C. a nyombélhám kefeszegélyéhez kötött enteropeptidáz (enterokináz)",
      "D. a kolecisztokinin",
      "E. az intraluminális lúgos bikarbonát önmagában"
    ],
    correct: 2,
    exp: "Az enteropeptidáz levágja a tripszinogén hexapeptid gátló szakaszát; a képződő tripszin azután autokatalitikusan és a többi proenzimet (kimotripsinogén, proelasztáz stb.) aktiválva indítja a fehérjeemésztést[cite: 14]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "Az epe termelésére és az epesavak enterohepatikus körforgására igazak az alábbiak, KIVÉVE:",
    options: [
      "A. Az epesavak micellákba rendeződve nélkülözhetetlenek a lipidek emésztéséhez és felszívódásához",
      "B. A májsejtek canalicularis membránjában ATP-dependens ABC transzporterek (pl. BSEP) választják ki az epesavakat",
      "C. Az epeutak cholangiocytái szekretin hatására bikarbonátban gazdag folyadékot szekretálnak",
      "D. A bélbe ürült epesavak kb. 95%-a a terminális ileumban aktív Na+-szimporttal (ASBT) visszaszívódik, és csak 5%-uk ürül a széklettel",
      "E. Az epével kiválasztott epesavak mintegy 90%-a a széklettel kiürül a szervezetből"
    ],
    correct: 4,
    exp: "Éppen ellenkezőleg: az epesavkészlet 95%-a visszaszívódik az enterohepatikus keringésben, a széklettel naponta mindössze a készlet kb. 5%-a vész el[cite: 14]."
  },

  // =========================================================================
  // 6. TÉMA: Gasztrointesztinális: Vékony- és Vastagbél, Felszívódás
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "A szénhidrátok vékonybélben zajló emésztésére és felszívódására igaz:",
    options: [
      "A. a glükóz, galaktóz és fruktóz mindegyike felszívódik az enterocytákon keresztül",
      "B. a fruktóz Na+-dependens szimporttal (SGLT1) lép be a bélhámsejtekbe",
      "C. az alfa-amiláz képes lebontani a növényi cellulózt is",
      "D. a diszacharidok (pl. laktóz, szacharóz) intakt formában, emésztetlenül szívódnak fel a keringésbe",
      "E. a tejcukor (laktóz) emésztését a hasnyálmirigy amiláza végzi a bél lumenében"
    ],
    correct: 0,
    exp: "A glükóz és galaktóz SGLT1-gyel (másodlagosan aktív), a fruktóz GLUT5-tel (facilitált diffúzió) lép be, majd GLUT2-vel hagyják el a sejtet a kapillárisok felé[cite: 14]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "A vékonybél perisztaltikus reflexére (Bayliss–Starling bélreflex) igaz:",
    options: [
      "A. a bélfal feszülése a bolus mögött kontrakciót (Ach, P-anyag), a bolus előtt pedig relaxációt (NO, VIP) vált ki",
      "B. a perisztaltika független az enterális idegrendszer épségétől",
      "C. a cirkuláris izomzat elernyedésében a szimpatikus kolinerg axonok vesznek részt",
      "D. a bolus előtt kontrakciós gyűrű alakul ki",
      "E. a gátló interneuronokból acetilkolin szabadul fel"
    ],
    correct: 0,
    exp: "A bélfal mechanoreceptorainak izgalma orálisan körkörös kontrakciót, aborálisan pedig a körkörös izomzat VIP/NO-mediált elernyedését hozza létre, előretolva a béltartalmat[cite: 14]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "A vastagbél motoros működésére jellemző:",
    options: [
      "A. a tömegperisztaltika (mass movement) naponta néhány alkalommal jelentkező, a béltartalmat nagy távolságra továbbító mozgásforma",
      "B. a székletürítési reflex kizárólag a gerincvelő elpusztítása után működik",
      "C. a vastagbélben semmilyen szegmentáló hausztráció nem figyelhető meg",
      "D. a vastagbél falából hiányzik az enterális idegrendszer",
      "E. a belső analis sphinctert harántcsíkolt izomzat alkotja"
    ],
    correct: 0,
    exp: "A tömegperisztaltika (gastrocolicus reflex által kiváltva) a colon tartalmát gyorsan a rectumba továbbítja, kiváltva a székelési ingert[cite: 14]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A székelési (defaecatiós) reflexre és a záróizmokra igazak az alábbiak, KIVÉVE:",
    options: [
      "A. A rectumfal feszülése afferens jeleket indít a sacralis gerincvelőbe (S2-S4)",
      "B. A paraszimpatikus efferensek összehúzzák a rectumot és ellazítják a belső analis sphinctert",
      "C. A belső analis sphinctert simaizom, a külső analis sphinctert akaratlagosan beidegzett harántcsíkolt izom alkotja",
      "D. A külső analis sphincter ellazítása szomatikus motoros (n. pudendus) gátlás útján akaratlagosan vezérelhető",
      "E. A külső analis sphinctert simaizomsejtek, a belsőt harántcsíkolt izomrostok építik fel"
    ],
    correct: 4,
    exp: "Éppen fordítva: az internus simaizom (vegetatív kontroll), az externus harántcsíkolt vázizom (szomatikus akaratlagos kontroll)[cite: 14]."
  },

  // =========================================================================
  // 7. TÉMA: Táplálkozásélettan és Anyagcsere
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Melyik tápanyagtípusnak a LEGMAGASABB a specifikus dinamikus hatása (SDA / táplálkozási termogenezis)?",
    options: [
      "A. Fehérjék (akár 20-30%-os alapanyagcsere-emelkedés az emésztés és feldolgozás során)",
      "B. Szénhidrátok (~5-6%)",
      "C. Zsírok / Lipidek (~4%)",
      "D. Vitaminok",
      "E. Ásványi sók"
    ],
    correct: 0,
    exp: "A fehérjék aminosavakra bontása, a karbamidszintézis és a glükoneogenezis jelentős ATP-t igényel, így a fehérjefogyasztás növeli leginkább a posztprandiális hőtermelést[cite: 14]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Mely tápanyagok esetében tér el lényegesen a fizikai égéshő az élettani haszonértéktől a humán szervezetben?",
    options: [
      "A. Fehérjék (a fizikai égéshő kb. 23 kJ/g, de az élettani haszonérték csak 17,2 kJ/g, mert a nitrogéntartalom karbamid formájában ürül)",
      "B. Szénhidrátok (glükóz, keményítő)",
      "C. Zsírok (trigliceridek)",
      "D. Zsírsavak",
      "E. Egyik tápanyagnál sincs eltérés"
    ],
    correct: 0,
    exp: "A szénhidrátok és zsírok teljesen CO2-vé és vízzé égnek el a szervezetben is, de a fehérjék nitrogénjét a szervezet nem tudja oxidálni, karbamidként üríti, így az élettani haszonérték alacsonyabb a fizikai bomba-kalorimetriás értéknél[cite: 14]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Melyik hormon GÁTOLJA hatékonyan a zsírszövetben a lipolízist a hormon-szenzitív lipáz (HSL) defoszforilálásával?",
    options: [
      "A. Inzulin",
      "B. Glukagon",
      "C. Adrenalin",
      "D. Kortizol",
      "E. Növekedési hormon (GH)"
    ],
    correct: 0,
    exp: "Az inzulin a legerősebb antilipolitikus hormon: a foszfodiészteráz aktiválásával és a foszfatázok stimulálásával inaktiválja a HSL-t, megállítva a szabad zsírsavak felszabadulását[cite: 14]."
  }
];

// Kérdések összefűzése a globális listával
window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS.concat(pdf80Questions);