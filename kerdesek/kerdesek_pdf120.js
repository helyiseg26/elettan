/**
 * Orvosi / Fogorvosi Élettan Kérdésbank - 2. ZH / 4. Blokk (zh2/4)
 * Témakörök:
 * - 4. Előadás: A hypothalamus funkciói és a vegetatív idegrendszer (magok, hormonok, hőszabályozás, receptorok, Horner, mérgezések)
 * - 16. Előadás: A magatartás szabályozása – Motiváció, jutalmazás, addikció (Amygdala, Klüver-Bucy, VTA-NAc dopamin, drogmechanizmusok)
 * - 17. Előadás: A magasabb agykérgi funkciók: EEG, alvás-ébrenlét, tanulás és memória (EEG ritmusok, NREM/REM, afáziák, Aplysia, LTP)
 */

window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS || [];

const zh2_4_Questions = [
  // =========================================================================
  // I. A HYPOTHALAMUS ÉS A NEUROENDOKRIN RENDSZER (4. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A neurohypophysis (hipofízis hátsó lebeny) hormonjaira (vazopresszin/ADH és oxitocin) igaz:",
    options: [
      "A. A neurohypophysis endokrin mirigysejtjei szintetizálják őket helyben",
      "B. A portális hypophysealis keringés útján jutnak el a hátsó lebenybe",
      "C. A hypothalamus nagysejtes magjaiban (SON és PVN) termelődnek, és axoplazmatikus transzporttal jutnak a hátsó lebenybe, amely csupán raktározza és üríti őket",
      "D. Szekréciójukat kizárólag a hipofízis elülső lebenyének trofhormonjai serkentik",
      "E. Termelődésük nem áll semmilyen idegi vagy ozmotikus szabályozás alatt"
    ],
    correct: 2,
    exp: "Az ADH és az oxitocin magnocelluláris neuronokban (nucleus supraopticus és paraventricularis) szintetizálódik; a neurohypophysis nem valódi mirigy, csak idegvégződéseket tartalmazó raktározó és ürítő szerv [PPT: 4.7, 4.8. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helytelen állítás keresése",
    q: "A hypothalamus releasing és inhibiting hormonjainak szekréciójára melyik állítás HELYTELEN?",
    options: [
      "A. A releasing hormonok a hipofízeális portális keringés útján jutnak az adenohypophysishez",
      "B. A releasing és inhibiting hormonok szekréciója szigorúan pulzatilis (löketszerű) mintázatot mutat",
      "C. A prolaktin-gátló hormon (PIH) kémiailag azonos a dopaminnal",
      "D. A PIH (dopamin) folyamatos, tónusos gátlás alatt tartja az adenohypophysis prolaktin-termelését",
      "E. Valamennyi hypothalamicus releasing és inhibiting hormon folyamatos, egyenletes szinten ürül a vérbe"
    ],
    correct: 4,
    exp: "A hypothalamicus hormonok szekréciója pulzatilis jellegű, ami megóvja a célsejtek receptorait a deszenzitizációtól; az egyetlen kivétel a PIH (dopamin), amely folyamatos, tónusos gátlást fejt ki [PPT: 4.9, 4.13. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A hypothalamus hőszabályozó működésére melyik megállapítás IGAZ?",
    options: [
      "A. Az elülső hypothalamus (AHN) a fűtőközpont, kiesése poikilotermiát okoz",
      "B. Az elülső hypothalamus (AHN) a hűtőközpont (izzadás, bőrvazodilatáció); kiesése centrális lázat (hipertermiát) idéz elő",
      "C. A hátsó hypothalamus (PHN) felel a hőleadásért; kiesése fagyási sérülést gátol",
      "D. A centrális hőérzékelő receptorok nem reagálnak a vér hőmérsékletére",
      "E. Láz esetén a hypothalamus belső alapértéke (set-point) lecsökken 35 °C-ra"
    ],
    correct: 1,
    exp: "Az Anterior Hypothalamic Nucleus (AHN) a hűtőközpont (sérülésekor hipertermia lép fel), míg a Posterior Hypothalamic Nucleus (PHN) a fűtőközpont (didergés, érszűkület; sérülése poikilotermiát okoz) [PPT: 4.17. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A táplálékfelvétel hypothalamicus központjaira és szabályozására jellemző:",
    options: [
      "A. Az éhségközpont a VMN (ventromedialis mag), sérülése súlyos elhízáshoz vezet",
      "B. Az éhségközpont a laterális hypothalamus (LHN, sérülése afágiát és fogyást okoz); a jóllakottságközpont a ventromedialis mag (VMN, sérülése hiperfágiát, elhízást és dühkitöréseket okoz)",
      "C. A ghrelin a zsírszövetből felszabadulva közvetlenül jóllakottságot vált ki",
      "D. A leptin az üres gyomorból felszabadulva az éhségérzet legfőbb serkentője",
      "E. A nucleus arcuatus orexigén NPY/AgRP neuronjai az étvágy gátlását közvetítik"
    ],
    correct: 1,
    exp: "Az LHN a táplálékfelvétel indítója (éhségközpont), míg a VMN a telítettség érzője (jóllakottságközpont); a VMN léziója hyperphagiát, obesitast és agressziót vált ki [PPT: 4.19, 4.24. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A cirkadián ritmus biológiai órájára (SCN) és a melatonintermelésre jellemző:",
    options: [
      "A. Az SCN a látókéregből kapja a legfőbb bemenetét a hallóidegen át",
      "B. Az SCN a retina melanopszint tartalmazó ganglionsejtjeitől kap közvetlen fényinformációt; sötétben a tobozmirigy (corpus pineale) fokozza a melatonintermelést",
      "C. A melatonin szintézisét a napfény és a monitorok kék fénye drámaian felerősíti",
      "D. Az orexin peptidek a tobozmirigyben termelődnek és mély NREM alvást indukálnak",
      "E. Az SCN károsodása nem befolyásolja a testhőmérséklet vagy a kortizolszint napi ritmusát"
    ],
    correct: 1,
    exp: "A tractus retinohypothalamicus a melanopszinos intrinsic fotoreceptor ganglionsejtekből fut az SCN-be, amely szimpatikus közvetítéssel sötétben aktiválja a tobozmirigy melatonin-elválasztását [PPT: 4.26. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A krónikus alkoholizmusban kialakuló Wernicke–Korsakoff-szindróma oka és vezető tünetei:",
    options: [
      "A. C-vitamin hiány; bőr- és ízületi vérzések",
      "B. B1-vitamin (tiamin) hiány miatti corpora mammillaria degeneráció; anterográd amnézia és konfabuláció (kitalált történetekkel való lyukkitöltés)",
      "C. B12-vitamin hiány; vészes vérszegénység és ataxia",
      "D. A dopamin hiánya a striatumban nyugalmi tremorral",
      "E. Az amygdala kétoldali elhalása pszichés vaksággal"
    ],
    correct: 1,
    exp: "A Korsakoff-szindrómát tiaminhiány miatti mammilláris test és talamusz laesio okozza; a beteg képtelen új tényeket megjegyezni, az emlékezeti űrt nem szándékos konfabulációval tölti ki [PPT: 4.27. dia]."
  },

  // =========================================================================
  // II. A VEGETATÍV IDEGRENDSZER ÉS FARMAKOLÓGIÁJA (4. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "Melyik állítás írja le a szimpatikus idegrendszer posztganglionáris beidegzésének klasszikus KIVÉTELÉT?",
    options: [
      "A. A szívizomsejtek beidegzése, ahol acetilkolin szabadul fel",
      "B. A hőszabályozó verejtékmirigyek posztganglionáris szimpatikus rostjai, amelyek acetilkolint ürítenek és muszkarinos (M) receptorokon hatnak",
      "C. A vese ereinek beidegzése, ahol dopamin a fő neurotranszmitter",
      "D. A vázizomzat erei, amelyek soha nem kapnak szimpatikus beidegzést",
      "E. A pupillatágító izom, amelyen muszkarinos receptorok találhatók"
    ],
    correct: 1,
    exp: "A legtöbb posztganglionáris szimpatikus rost noradrenalint termel, de a verejtékmirigyekhez és egyes vazodilatátor rostokhoz futó szimpatikus axonok kolinergek (muszkarinos receptoron hatnak) [PPT: 4.31, 4.32. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A mellékvesevelő funkcionális felépítésére és szekrétumára igaz:",
    options: [
      "A. Tisztán posztganglionáris paraszimpatikus mirigy",
      "B. Módosult szimpatikus ganglion, ahol a preganglionáris kolinerg rostok N2 nikotinos receptorokon hatnak; kromaffin sejtjei kb. 80% adrenalint és 20% noradrenalint ürítenek a szisztémás keringésbe",
      "C. Csak szteroidhormonokat termel koleszterinből",
      "D. Kizárólag parakrin hatású neurotranszmittereket bocsát ki a szövetközti térbe",
      "E. Beidegzését a nervus vagus közvetíti"
    ],
    correct: 1,
    exp: "A mellékvesevelő embryológiailag módosult szimpatikus ganglion, chromaffin sejtjeit preganglionaris szimpatikus rostok (ACh, N2) idegzik be, és döntően adrenalint (80%) juttat a vérbe [PPT: 4.31, 4.32. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A tüdőcsúcs tumora (Pancoast-tumor) által kiváltott Horner-szindróma azonos oldali (ipsilateralis) tünetei:",
    options: [
      "A. Mydriasis, exophthalmus és profúz verejtékezés",
      "B. Ptosis (szemhéjcsüngés), miosis (szűk pupilla), enophthalmus és anhidrosis (izzadás hiánya az arcbélfélen)",
      "C. Végtagi spasticitás és Babinski-jel",
      "D. Nyugalmi tachycardia és vérnyomáskiugrás",
      "E. Kétoldali látótérkiesés"
    ],
    correct: 1,
    exp: "A felső nyaki szimpatikus határköteg (ganglion cervicale superius) kompressziója szimpatikus kiesési tüneteket okoz a fejen: ptosis, miosis, enophthalmus és anhidrosis [PPT: 4.44. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "Koponyaűri vérzés vagy térfoglalás esetén a tentorium alatti beékelődés (herniatio) miért okoz egyoldali tág, fénymerev pupillát (anisocoria)?",
    options: [
      "A. Mert a megnövekedett nyomás közvetlenül aktiválja a szimpatikus nyaki gangliont",
      "B. Mert a nyomás közvetlenül összenyomja a nervus oculomotoriust (III. agyideg), lebénítva a külső felszínén futó paraszimpatikus pupillaszűkítő rostokat",
      "C. Mert az agykéreg látókérge elhal",
      "D. Mert a retina csapjai és pálcikái mechanikusan elszakadnak",
      "E. Mert a liquortermelés azonnal leáll"
    ],
    correct: 1,
    exp: "A n. oculomotorius külső felületén futnak a pupillaszűkítő paraszimpatikus rostok; mechanikai kompressziójukkor a gátolatlan szimpatikus tónus miatt tág, fénymerev pupilla alakul ki (életveszélyes beékelődési jel!) [PPT: 4.45. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A muszkarinerg mérgezés (pl. légyölő galóca, szerves foszfát rovarirtók, harcigázok) tünetei és életmentő antidótuma:",
    options: [
      "A. Tág pupilla, szájszárazság; ellenszer: Fizosztigmin",
      "B. Miosis (tűhegynyi pupilla), profúz nyálfolyás, könnyezés, izzadás, súlyos bronchoconstrictio és tüdőváladékozás, bradycardia; ellenszer: Atropin",
      "C. Spasticus bénulás; ellenszer: Dantrolén",
      "D. Magas láz és száraz bőr; ellenszer: Adrenalin",
      "E. Hipoglikémiás kóma; ellenszer: Glukagon"
    ],
    correct: 1,
    exp: "A masszív paraszimpatikus hiperaktivitás (szerves foszfát észterek kolinészteráz-bénítása) fulladásos bronchospasmust és bradycardiát okoz; specifikus kompetitív antagonistája az Atropin [PPT: 4.46. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "Az Atropa belladonna (nadragulya) által okozott atropin-mérgezés klasszikus tünetei és antidótuma:",
    options: [
      "A. Tűhegynyi pupilla, hasmenés; ellenszer: Pilocarpin",
      "B. Maximálisan tág pupillák (mydriasis), meleg és porszáraz vörös bőr, tachycardia, szájszárazság, vizeletretenció; ellenszer: Fizosztigmin (reverzibilis kolinészteráz-gátló)",
      "C. Petyhüdt izombénulás; ellenszer: Kuráre",
      "D. Súlyos hiponatrémia; ellenszer: Furosemid",
      "E. Eszméletvesztés azonnali vérnyomáseséssel; ellenszer: Propranolol"
    ],
    correct: 1,
    exp: "Az atropin blokkolja a muszkarinos receptorokat: meleg, száraz bőr (nincs izzadás), mydriasis, tachycardia; a fizikailag átjutó Fizosztigmin megemeli az ACh-szintet és kiszorítja az atropint [PPT: 4.47. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "Miért tilos nem-szelektív béta-blokkolót (pl. propranolol) adni inzulinkezelés alatt álló cukorbetegeknek?",
    options: [
      "A. Mert azonnali hiperglikémiás ketoacidózist provokálnak",
      "B. Mert elnémítják a hipoglikémia életmentő szimpatikus figyelmeztető tüneteit (tachycardia, palpitáció, kézremegés), így a beteg figyelmeztetés nélkül kómába eshet",
      "C. Mert közvetlenül serkentik az inzulin elválasztását a béta-sejtekből",
      "D. Mert megakadályozzák a glükóz vizelettel történő kiürülését",
      "E. Mert lebontják az endogén glukagont"
    ],
    correct: 1,
    exp: "A leeső vércukor szimpatikus vészreakciót indít (béta-adrenerg tachycardia és remegés); a béta-blokkoló kikapcsolja ezen vészcsengőket, és gátolja a máj glikogenolízisét is [PPT: 4.48. dia]."
  },

  // =========================================================================
  // III. MAGATARTÁS, JUTALMAZÁS ÉS ADDIKCIÓ (16. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A szervezet komplex magatartási válasza milyen három párhuzamos komponensből tevődik össze?",
    options: [
      "A. Kérgi, kisagyi és gerincvelői",
      "B. Szomatikus motoros, vegetatív idegrendszeri és endokrin/hormonális válaszból",
      "C. Tudatos, tudatalatti és reflexválaszból",
      "D. Érzékelési, feldolgozási és kiválasztási folyamatból",
      "E. Anyagcsere, hőszabályozási és légzési komponensből"
    ],
    correct: 1,
    exp: "A magatartás nem csupán az izmok mozgása: kötelezően együtt jár vegetatív változásokkal (vérnyomás, pulzus) és hormonális válasszal (pl. HPA-tengely kortizol és katekolaminok) [PPT: 16.2. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "Az érzelmek keletkezésére vonatkozó elméletek közül mi a James–Lange elmélet lényege?",
    options: [
      "A. A kéreg és a hypothalamus teljesen függetlenül működik",
      "B. Az érzelmi stimulus először a szomatikus és viszcerális testi választ váltja ki, és ennek perifériás visszajelzése szüli meg magát az érzelmet ('nem azért futunk, mert félünk, hanem azért félünk, mert futunk')",
      "C. Az érzelmek székhelye kizárólag a kisagyban található",
      "D. A testi válasz semmilyen szerepet nem játszik az affektív állapotban",
      "E. Az érzelmek tisztán intellektuális kérgi konstrukciók vegetatív kísérőjelenség nélkül"
    ],
    correct: 1,
    exp: "A James–Lange elmélet szerint a perifériás vegetatív és motoros reakciók visszajelzése hozza létre a szubjektív érzelmi élményt; a Cannon–Bard elmélet szerint viszont a kéreg és szubkortex párhuzamosan aktiválódik [PPT: 16.6. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A temporális lebeny és az AMYGDALA kétoldali ablációja után megjelenő Klüver–Bucy szindróma tünetei:",
    options: [
      "A. Spasztikus merevség, dühkitörések és hiperreflexia",
      "B. Kóros szelídség és félelemvesztés, pszichés vakság (vizuális agnózia), hiperorális viselkedés, hiperfágia/pica, inadekvát hiperszexualitás és a társas rangvesztés",
      "C. Súlyos beszédértési zavar és motoros afázia",
      "D. Narkolepszia és kataplexia nappali rohamokkal",
      "E. Retrográd amnézia a rövid távú memória megtartásával"
    ],
    correct: 1,
    exp: "Az amygdala a félelem és a biológiai veszélyfelismerés főközpontja; kétoldali kiesésekor az állat/ember elveszíti a félelmet, mindent a szájába vesz, képtelen felismerni a tárgyak érzelmi jelentőségét [PPT: 16.10, 16.11. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A központi idegrendszeri jutalmazási rendszerben (reward system) mi tekinthető a jutalmazás 'közös valutájának', és melyik a fő anatómiai pálya?",
    options: [
      "A. Szerotonin; a raphe magvakból a gerincvelőbe futó pálya",
      "B. Dopamin; az Area Tegmentalis Ventralisból (VTA) a Nucleus Accumbensbe és a prefrontális kéregbe vetülő mezokortikolimbikus pálya",
      "C. Acetilkolin; a basalis Meynert-magból a hippocampusba futó pálya",
      "D. Noradrenalin; a locus coeruleusból az agytörzsbe szállópálya",
      "E. GABA; a striatumból a globus pallidusba futó indirekt pálya"
    ],
    correct: 1,
    exp: "Bármilyen természetes (étel, szex) vagy mesterséges jutalom (drogok) végső soron a VTA-ból a Nucleus accumbensbe (ventralis striatum) vetülő mezolimbikus dopamin-felszabadulást fokozza [PPT: 16.15, 16.18. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A jutalmazás pszichobiológiájában mi a különbség a 'Liking' (hedonikus gyönyör) és a 'Wanting' (motivációs vágy) között addikcióban?",
    options: [
      "A. A kettő teljesen azonos, egymástól elválaszthatatlan fogalom",
      "B. A 'Liking' az azonnali fogyasztási élvezet, míg a 'Wanting' a jutalom megszerzésére irányuló kényszeres hajtóerő; függőségben a dopamin a 'Wanting'-ot pörgeti fel extrém módon, miközben a 'Liking' lecsökken",
      "C. A drogfüggőségben kizárólag a 'Liking' növekszik, a 'Wanting' megszűnik",
      "D. A 'Wanting' kizárólag a táplálékfelvételre érvényes, drogokra nem",
      "E. A 'Liking'-et a dopamin, a 'Wanting'-ot az endorfinok irányítják"
    ],
    correct: 1,
    exp: "Berridge modellje: a dopamin nem magát az élvezetet ('Liking'), hanem a megszerzésre irányuló késztetést és motivációt ('Wanting') kódolja; a drogfüggő sóvárog a szer után, miközben maga a droghatás már alig okoz örömet [PPT: 16.16. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "Hogyan növelik az OPIÁTOK (pl. morfin, heroin) a dopaminszintet a Nucleus accumbensben?",
    options: [
      "A. Közvetlenül megfordítják a dopamin transzporter (DAT) működését",
      "B. A VTA GABAerg gátló interneuronjain lévő mű-opioid receptorokhoz kötődve gátolják a gátlósejteket -> DIZINHIBÍCIÓ révén a dopaminerg neuronok felszabadulnak és tüzelni kezdenek",
      "C. Blokkolják a posztszinaptikus dopamin D2 receptorokat",
      "D. Gátolják a monoamin-oxidáz (MAO) enzimet a szinaptikus résben",
      "E. Serkentik a nikotinos acetilkolin receptorokat a prefrontális kéregben"
    ],
    correct: 1,
    exp: "Az opiátok dizinhibíciós mechanizmussal hatnak: a dopaminsejteket normálisan fékező helyi GABAerg interneuronokat hiperpolarizálják, így a dopaminerg sejtek kisülése és a dopaminfelszabadulás megugrik [PPT: 16.20, 16.24. dia]."
  },

  // =========================================================================
  // IV. MAGASABB AGYKÉRGI MŰKÖDÉSEK: EEG ÉS ALVÁS (17. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "Az éber, nyugalmi állapotban, zárt szem mellett regisztrálható domináns EEG ritmus:",
    options: [
      "A. Béta-ritmus (14–30 Hz)",
      "B. Delta-ritmus (0,5–3 Hz)",
      "C. Alfa-ritmus (8–13 Hz, főként az occipitalis lebeny felett; szemnyitásra deszinkronizálódik / Berger-reakció)",
      "D. Téta-ritmus (4–7 Hz)",
      "E. Gamma-ritmus (> 30 Hz)"
    ],
    correct: 2,
    exp: "A nyugalmi ébrenlét zárt szemmel az alfa-hullámok (8–13 Hz) ideje; szemnyitáskor az érzékszervi ingerület azonnal deszinkronizálja a kérget gyors béta-aktivitássá alakítva (alfa-blokád) [PPT: 17.2. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Többszörös választás",
    q: "A REM alvás (Rapid Eye Movement / Paradox alvás) jellegzetes elektrofiziológiai és élettani sajátosságai:\n1. Deszinkronizált, gyors, ébrenléthez hasonló alacsony feszültségű béta-szerű EEG aktivitás\n2. Gyors konjugált szemmozgások és PGO (Pons-Geniculatum-Occipitale) tüskék\n3. A vázizmok teljes atóniája (posztszinaptikus motoneuron-gátlás miatt), kivéve a légző- és külső szemizmokat\n4. Szabálytalan pulzus és légzés, spontán pénisz- és csikló-erekció, élénk narratív álmok",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 4,
    exp: "A REM 'paradox', mert a deszinkronizált kérgi EEG ellenére az ébresztési küszöb magas; az izomatónia megvédi az embert az álmok lemorgásától, a vegetatív funkciók pedig fluktuálnak [PPT: 17.4, 17.6. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "Az alvás-ébrenlét flip-flop kapcsolójában mi az alvást generáló fő agyi mag, és mi az OREXIN (hipokretin) stabilizáló szerepe?",
    options: [
      "A. A nucleus accumbens altat; az orexin gátolja a talamuszt",
      "B. Az alvást a preoptikus hypothalamus VLPO magja indítja be (GABA és galanin közvetítésével gátolja az agytörzsi RAS ébresztő magvait); a laterális hypothalamus orexinje az ébrenléti magvakat serkenti, stabilizálva az éberséget (hiánya narkolepsziát okoz)",
      "C. A locus coeruleus altat noradrenalinnal; az orexin melatonin szintézist indít",
      "D. A hippocampus CA1 régiója kapcsolja ki az ébrenlétet alvási orsók útján",
      "E. A tobozmirigy közvetlenül gátolja a gerincvelői motoneuronokat"
    ],
    correct: 1,
    exp: "A bistabil flip-flop kapcsolóban a VLPO gátolja az ébresztő hálózatot. Az orexinerg neuronok rögzítik a kapcsolót az ébrenlét oldalán; hiányukban a rendszer instabil, váratlan REM-rohamok és kataplexia lép fel (narkolepszia) [PPT: 17.16, 17.18. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A Borbély Ádám-féle kétfolyamat-modellben mi a homeosztatikus alvási nyomás (Process S) legfontosabb agyi biokémiai mediátora, amelyet a koffein gátol?",
    options: [
      "A. Dopamin",
      "B. Adenozin (az ébrenléti ATP-felhasználás mellékterméke, amely felhalmozódva serkenti a VLPO-t és gátolja a kolinerg sejteket)",
      "C. Glutamát",
      "D. Karbamid",
      "E. Orexin B"
    ],
    correct: 1,
    exp: "Az ébren töltött órák alatt folyamatosan nő az extracelluláris adenozin, ami az A1 és A2A receptorokon át fokozza az alváskésztetést; a koffein ezen adenozin-receptorok kompetitív antagonistája [PPT: 17.12, 17.20. dia]."
  },

  // =========================================================================
  // V. ASSZOCIÁCIÓS KÉREG, BESZÉD ÉS AFÁZIÁK (17. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A prefrontális asszociációs kéreg kétoldali súlyos roncsolódásakor (klasszikus példa: Phineas Gage esete) milyen kiesési tünetek figyelhetők meg?",
    options: [
      "A. Kiterjedt spasztikus végtagbénulás és afázia",
      "B. A szociális normák és gátlások felbomlása, agresszió, trágárság, a tervezés, döntéshozatal és a munkamemória súlyos elégtelensége",
      "C. Teljes süketség és vakság",
      "D. A nyújtási reflexek teljes kiesése",
      "E. Hallucinációk és Huntington-chorea"
    ],
    correct: 1,
    exp: "Phineas Gage vasúti művezető prefrontális léziója után fizikailag felépült, de személyisége megsemmisült: megbízható vezetőből gátlástalan, tervezésre képtelen, szociálisan inadekvát emberré vált [PPT: 17.4, 17.6. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A jobb oldali (nem-domináns) fali parietális lebeny sérülésekor kialakuló NEGLECT-szindrómára mi jellemző?",
    options: [
      "A. A beteg jobb oldali látótere teljesen kiesik",
      "B. Térfél-elhanyagolás: a beteg nem vak a bal oldalra, de az agya negligálja a bal térfelet és saját bal testfelét (pl. rajzoláskor a lap bal felét üresen hagyja, csak a jobb arcát borotválja)",
      "C. Kétoldali alsó végtagi paraplégia",
      "D. A hallott beszéd megértésének teljes hiánya",
      "E. A testhőmérséklet szabályozásának összeomlása"
    ],
    correct: 1,
    exp: "A jobb PTO asszociációs kéreg a térbeli figyelemért és testsémáért felel; sérülésekor a beteg teljesen figyelmen kívül hagyja a kontralaterális (bal) világ és saját teste létezését [PPT: 17.8. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A motoros (Broca-) afázia jellemző tünetei és léziójának lokalizációja:",
    options: [
      "A. Wernicke-terület sérülése; folyékony, de értelmetlen szóáradat",
      "B. Bal gyrus frontalis inferior (Brodmann 44, 45); a beszédértés MEGTARTOTT, de a spontán beszédképzés akadozó, agrammatikus, távirati stílusú, szegényes",
      "C. Fasciculus arcuatus lézió; a szavak megismétlésének izolált képtelensége",
      "D. A gégeizmok perifériás n. recurrens bénulása",
      "E. Teljes beszédképtelenség ép írásbeli kifejezéssel"
    ],
    correct: 1,
    exp: "A Broca-afázia motoros típusú: a beteg pontosan érti a hozzá intézett beszédet, de a szavak kimondásának motoros programozása akadozik, ami komoly frusztrációt okoz számára [PPT: 17.9, 17.10. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A szenzoros (Wernicke-) afázia jellemző tünetei és léziójának lokalizációja:",
    options: [
      "A. Bal gyrus temporalis superior hátsó része (Brodmann 22); a beszédértés SÚLYOSAN KÁROSODOTT, a beteg beszéde viszont folyamatos, gyors, dallamos, de teljesen értelmetlen, neologizmusokkal teli ('szósaláta')",
      "B. Broca-terület léziója jó beszédértéssel",
      "C. A belső fül csiga (cochlea) kétoldali elhalása",
      "D. Az íráskészség megtartottsága a beszédértés kiesése mellett",
      "E. Térbeli tájékozódási zavar"
    ],
    correct: 0,
    exp: "A Wernicke-terület a szemantikai beszédértés központja; kiesésekor a beteg nem érti a nyelvet, és saját értelmetlen, folyékony beszédhibáit sem észleli [PPT: 17.9, 17.10. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A vezetéses (kondukciós) afáziára mi jellemző és mely képlet sérülése okozza?",
    options: [
      "A. A Broca-terület és a gége közötti idegek elszakadása",
      "B. A Wernicke- és Broca-területet összekötő Fasciculus arcuatus sérülése; a spontán beszéd és a beszédértés jó, de a beteg KÉPTELEN a hallott szavakat megismételni",
      "C. Az elülső commissura átvágása epilepszia miatt",
      "D. A két agyfélteke corpus callosumának veleszületett hiánya",
      "E. A primer hallókéreg kétoldali infarktusa"
    ],
    correct: 1,
    exp: "A fasciculus arcuatus átvágásakor az érzékszervi beszédértés nem tud közvetlenül átkapcsolódni a frontális motoros kivitelező mezőbe, így a hallott szöveg utánmondása blokkolt [PPT: 17.9, 17.10. dia]."
  },

  // =========================================================================
  // VI. TANULÁS, MEMÓRIA ÉS SZINAPTIKUS PLASZTICITÁS (17. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "Eric Kandel Aplysia (tengeri nyúl) kopoltyú-visszahúzási reflexkísérleteiben mi a HABITUÁCIÓ közvetlen szinaptikus mechanizmusa?",
    options: [
      "A. Új szinaptikus tüskék növekedése a motoros neuronon",
      "B. Preszinaptikus feszültségfüggő kalciumcsatorna inaktiváció és neurotranszmitter (glutamát) depléció a szenzoros végződésben",
      "C. A posztszinaptikus receptorok azonnali endocitózisa",
      "D. Szerotoninerg interneuronok túlműködése",
      "E. A vázizomzat kalciumraktárainak kimerülése"
    ],
    correct: 1,
    exp: "Az ártalmatlan inger ismétlésekor a szenzoros neuron végződésében kevesebb Ca2+ lép be és kiürülnek a vezikulák (transzmitter depléció), így a reflexválasz fokozatosan elhal [PPT: 17.14. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "Az Aplysia kísérletekben mi a SZENZITIZÁCIÓ (érzékenyítés) szinaptikus mechanizmusa károsító áramütés után?",
    options: [
      "A. A motoros idegsejt axonjának elfajulása",
      "B. A facilitáló interneuronokból szerotonin ürül -> cAMP és PKA aktiváció -> feszültségfüggő K+-csatornák záródnak -> az akciós potenciál megnyúlik -> masszív Ca2+-beáramlás és fokozott glutamátürítés (preszinaptikus facilitáció)",
      "C. Az acetilkolin azonnali lebontása kolinészterázzal",
      "D. A posztszinaptikus membrán hiperpolarizációja",
      "E. A gliasejtek gátlása"
    ],
    correct: 1,
    exp: "A szerotonin a cAMP-PKA úton foszforilálja és zárja a K+-csatornákat, ami késlelteti a repolarizációt: a megnyúlt akciós potenciál alatt sokkal több Ca2+ áramlik be, sokszorozva a transzmitterleadást [PPT: 17.14. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A Hosszú Távú Potenciáció (LTP) kialakulásának molekuláris mechanizmusa a hippocampus CA1 piramissejtjein:",
    options: [
      "A. Alacsony frekvenciás ingerlésre a GABA receptorok kloridárama aktiválja a géneket",
      "B. Nagyfrekvenciás tetanikus stimuláció erősen depolarizálja a posztszinapszist -> az elektrosztatikus taszítás kilöki a gátló Mg2+-dugót az NMDA receptor pórusából -> masszív Ca2+-beáramlás indul -> a CaMKII aktivációja révén ÚJ AMPA RECEPTOROK épülnek be a posztszinaptikus membránba",
      "C. A tirozin-kináz közvetlen gátlása megakadályozza a szinapszisok megerősödését",
      "D. A dendrittüskék azonnali visszahúzódása és felszívódása",
      "E. A retrográd nitrogén-monoxid (NO) gátolja a preszinaptikus glutamátürítést"
    ],
    correct: 1,
    exp: "Az LTP a tanulás sejtes modellje: a depolarizáció eltávolítja a magnézium-blokkot az NMDA csatornából, a belépő Ca2+ aktiválja a CaMKII-t, ami új AMPA receptorok membránba épülését indítja el, tartósan megnövelve a szinapszis érzékenységét [PPT: 17.26, 17.27. dia]."
  },
  {
    ppt: "zh2/4",
    type: "Helyes állítás keresése",
    q: "A kétoldali hippocampus-eltávolításon átesett híres H.M. beteg neurológiai profiljára igaz:",
    options: [
      "A. A műtét után semmilyen korábbi emlékét nem tudta felidézni",
      "B. Súlyos, tiszta ANTEROGRÁD amnézia alakult ki: képtelen volt új deklaratív (ténybeli) emlékeket rögzíteni, miközben a rövid távú munkamemóriája és az új motoros/procedurális készségek megtanulása épen megmaradt",
      "C. A procedurális (mozgásos) tanulási képessége teljesen megsemmisült",
      "D. Beszédképzése Broca-típusú afáziává alakult át",
      "E. A személyisége Phineas Gage-hez hasonlóan agresszívvá és gátlástalanná vált"
    ],
    correct: 1,
    exp: "A hippocampus a deklaratív emlékek konszolidációjának kapuja: hiányában új tények nem rögzülnek (anterográd amnézia), de a motoros procedurális tanulás (amely a kisagyhoz és striatumhoz kötött) érintetlen marad [PPT: 17.23. dia]."
  }
];

// Kérdések hozzáfűzése a központi listához
window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS.concat(zh2_4_Questions);