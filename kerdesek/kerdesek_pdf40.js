/**
 * Orvosi / Fogorvosi Élettan Kérdésbank - PDF 40 (el 40.pdf)
 * Besorolva a hivatalos előadási tematika alapján:
 * - A sejtmembrán transzportfolyamatai
 * - A sejtműködés szabályozása, jelátviteli folyamatok
 * - Elektromos membránsajátságok
 * - Az akciós potenciál mechanizmusa
 * - Általános szenzoros működések, receptorok
 * - A fájdalomérzékelés, a fájdalomcsillapítás elvi lehetőségei
 * - A gerincvelő és az agytörzs szerepe a mozgáskoordinációban
 * - Vegetatív idegrendszer és Hypothalamus
 * - A szív ingerületképzése és elektrofiziológiája
 * - Szívciklus és hemodinamika
 * - Keringésszabályozás és vegetatív reflexek
 * - Légzésmechanika és gázcsere
 * - Testfolyadékok, vérképzés és hemosztázis
 */

window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS || [];

const pdf40Questions = [
  // =========================================================================
  // 1. TÉMA: A sejtmembrán transzportfolyamatai
  // =========================================================================
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A Na+ egyensúlyi potenciálja nagymértékben eltér a nyugalmi membránpotenciáltól,\nMERT\nINDOKLÁS: A Na+/K+-pumpa működése jelentős mennyiségű Na+-t távolít el a sejtből (alacsonyan tartja az intracelluláris Na+ szintet).",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS közvetlen kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A Na+/K+-pumpa folyamatos kifelé pumpálása tartja fenn az alacsony belső és magas külső Na+ koncentrációt, ami miatt az E_Na (+60 mV körül) messze eltér a negatív nyugalmi feszültségtől (-70..-90 mV)[cite: 10]."
  },
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A nyugalomban lévő membrán két oldalán lévő Na+-ionok elektrokémiai potenciálgrádiense közel nulla,\nMERT\nINDOKLÁS: Az aktív pumpa működése fenntartja az alacsony intracelluláris nátriumkoncentrációt.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás HAMIS, de az indoklás IGAZ",
      "E. Mindkettő hamis"
    ],
    correct: 3,
    exp: "A Na+-ra ható elektrokémiai hajtóerő (Vm - ENa) nyugalomban hatalmas, befelé mutat (kb. -140 mV), tehát nem közel nulla (állítás hamis); a pumpa viszont valóban fenntartja az alacsony belső Na+-t (indoklás igaz)[cite: 10]."
  },
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Az extracelluláris tér Na+-koncentrációjának csökkentése csökkenti a Na+ egyensúlyi potenciál értékét,\nMERT\nINDOKLÁS: A Na+-csatornák inaktivációja feszültségfüggő folyamat.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is IGAZ, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 1,
    exp: "A Nernst-egyenlet szerint az ENa a külső Na+ arányában csökken, és a Nav inaktivációja valóban feszültségfüggő, de a kettő között nincs oki kapcsolat[cite: 10]."
  },
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Az ionok ioncsatornákon át történő mozgása tulajdonképpen egyszerű diffúzió,\nMERT\nINDOKLÁS: Az ionoknak az ioncsatornák pórusán keresztül történő mozgása az elektrokémiai gradienssel szemben is történhet.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mind az állítás, mind az indoklás HAMIS"
    ],
    correct: 4,
    exp: "Az ioncsatornákon átáramló transzport facilitált diffúzió (nem egyszerű), és KIZÁRÓLAG a meglévő elektrokémiai gradiens mentén mehet végbe, azzal szemben sohasem[cite: 10]."
  },

  // =========================================================================
  // 2. TÉMA: A sejtműködés szabályozása, jelátviteli folyamatok
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Minden G-protein-kapcsolt receptor aktiválása megváltoztatja az adenilát-cikláz aktivitását,\nMERT\nINDOKLÁS: Az intracelluláris cAMP nem tölt be másodlagos hírvivő szerepet.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mind az állítás, mind az indoklás HAMIS"
    ],
    correct: 4,
    exp: "Számos GPCR más utat (pl. Gq - PLC/IP3) aktivál, és a cAMP az egyik legfontosabb klasszikus másodlagos hírvivő[cite: 10]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Az intracelluláris cAMP fontos másodlagos hírvivő molekula,\nMERT\nINDOKLÁS: Minden G-protein-kapcsolt receptor fokozza az adenilát-cikláz aktivitását.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás IGAZ, de az indoklás HAMIS",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 2,
    exp: "A cAMP valóban kulcsfontosságú másodlagos messenger, de a Gi-kapcsolt receptorok gátolják, a Gq-kapcsoltak pedig nem befolyásolják közvetlenül az AC enzimet[cite: 10]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Az intracelluláris Ca2+-koncentráció növekedése csak a Ca2+ extracelluláris térből történő belépésének nyomán következhet be,\nMERT\nINDOKLÁS: A Ca2+-ATP-áz a Ca-ionok citoplazmából történő eltávolításáért felelős, ami kizárólag az extracelluláris térbe történhet.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mind az állítás, mind az indoklás HAMIS"
    ],
    correct: 4,
    exp: "A citoplazma Ca2+-szintje az intracelluláris SR/ER raktárakból is emelkedhet (IP3, RyR), és a SERCA pumpa az SR lumenébe pumpálja vissza a Ca2+-t (nem csak kifelé a sejtből)[cite: 10]."
  },

  // =========================================================================
  // 3. TÉMA: Az akciós potenciál mechanizmusa és elektrotonus
  // =========================================================================
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Az elektrotónusos membránpotenciál-változások nagyobb átmérőjű idegroston távolabbra terjednek ki,\nMERT\nINDOKLÁS: A nagyobb átmérőjű idegrostok nagyobb intracelluláris tengelyellenállással rendelkeznek.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás IGAZ, de az indoklás HAMIS",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 2,
    exp: "A vastag rostban a hosszanti belső ellenállás (ri) KISEBB, emiatt a térállandó (lambda) nagyobb, így a helyi potenciálváltozás messzebbre jut el[cite: 10]."
  },
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Helyes állítás keresése",
    q: "Egy idegsejt melyik részén helyezkednek el a feszültségfüggő Na+-csatornák a legnagyobb sűrűségben (denzitásban)?",
    options: [
      "A. A dendritek disztális ágain",
      "B. A Ranvier-féle befűződések membránjában és az axon eredési dombján (axoniniciális szegmens)",
      "C. A szinapszis preszinaptikus aktív zónájában",
      "D. Az axon velőshüvellyel fedett internodális szakaszán",
      "E. A sejttest plazmamembránjában egyenletesen eloszolva"
    ],
    correct: 1,
    exp: "A szaltatórikus vezetés kulcsa, hogy a feszültségfüggő Na+-csatornák a Ranvier-csomópontokban és az axoneredésnél tömörülnek extrém nagy sűrűségben[cite: 10]."
  },
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Válassza ki a gyorsan inaktiválódó ioncsatornákat:\n1. Feszültségfüggő gyors Na+-csatorna (Nav)\n2. T-típusú feszültségfüggő Ca2+-csatorna\n3. Gyorsan inaktiválódó (A-típusú) K+-csatorna\n4. Késői egyenirányító K+-csatorna (Kv/IK)",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "A Nav, a T-típusú Ca2+ (transient) és az A-típusú káliumcsatornák gyors inaktivációt mutatnak; a késői K+-csatornák lassan vagy alig inaktiválódnak[cite: 10]."
  },
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Mi jellemző a serkentő posztszinaptikus potenciálra (EPSP)?\n1. Olyan ionok áramlása hozza létre, melyek elektrokémiai gradiensük mentén lépnek át\n2. Térben és időben összegződhet (szummáció) más posztszinaptikus potenciálokkal\n3. Kialakulása alapvető a neuronok akciós potenciáljának kiváltásában\n4. Kialakulásakor a membránpotenciál a kálium egyensúlyi potenciálja felé mozdul el",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "Az EPSP kationbeáramlás miatt depolarizál (a reverzálpotenciálja 0 mV körül van), nem a kálium negatív egyensúlyi feszültsége felé tart[cite: 10]."
  },

  // =========================================================================
  // 4. TÉMA: Szenzoros működések és Fájdalomérzékelés
  // =========================================================================
  {
    ppt: "Általános szenzoros működések",
    type: "Helyes állítás keresése",
    q: "Mi a receptív mező élettani definíciója?",
    options: [
      "A. A preszinaptikus idegsejt tüzelési frekvenciája",
      "B. A szenzoros periféria azon területe, amelynek ingerlése megváltoztatja egy adott érző neuron aktivitását",
      "C. Az agy azon területe, ahová az érzőpályák befutnak",
      "D. Az idegsejt anatómiai elhelyezkedése a ganglionban",
      "E. A reflexív motoros végkészüléke"
    ],
    correct: 1,
    exp: "A receptív mező az a receptor- vagy testfelszín, ahonnan érkező ingerekre az adott neuron válaszol[cite: 10]."
  },
  {
    ppt: "Általános szenzoros működések",
    type: "Helyes állítás keresése",
    q: "A tapintás térbeli felbontása (két-pont diszkrimináció):",
    options: [
      "A. az ujjbegyeken és az ajkakon a legfinomabb / legkisebb küszöbű",
      "B. az alsó végtag és a hát felszínén a legfinomabb",
      "C. az arcon a legkevésbé kifejezett",
      "D. a testfelszínen mindenhol teljesen azonos",
      "E. független a primer érzőkéreg reprezentációjának méretétől"
    ],
    correct: 0,
    exp: "Az ujjbegyen a receptív mezők kicsik és sűrűn helyezkednek el, így a két-pont diszkriminációs küszöb mindössze 1-2 mm[cite: 10]."
  },
  {
    ppt: "Általános szenzoros működések",
    type: "Helyes állítás keresése",
    q: "A szabad idegvégződések adekvát ingerlésekor kiváltható elsődleges érzet:",
    options: [
      "A. a fájdalom (nocicepció) és a hőérzet",
      "B. a látás",
      "C. a hallás",
      "D. a szagérzés",
      "E. kizárólag a mély vibráció"
    ],
    correct: 0,
    exp: "A szöveti szabad idegvégződések túlnyomórészt termoreceptorként és nociceptorként működnek[cite: 10]."
  },
  {
    ppt: "A fájdalomérzékelés, a fájdalomcsillapítás elvi lehetőségei",
    type: "Helyes állítás keresése",
    q: "A viszc улицыális (zsigeri) fájdalom leggyakoribb és leghatékonyabb kiváltó oka:",
    options: [
      "A. kisfeszültségű elektromos inger",
      "B. az üreges szervek simaizomfalának feszülése, túltágulása vagy görcsös kontrakciója, illetve ischaemiája",
      "C. a szerv sebészi metszése vagy vágása önmagában",
      "D. a testhőmérséklet enyhe emelkedése",
      "E. az intraluminális gázok normális áramlása"
    ],
    correct: 1,
    exp: "A zsigerek érzéketlenek a vágásra/égésre, de rendkívül heves fájdalommal válaszolnak a fal feszülésére, feszítésére és az ischaemiára[cite: 10]."
  },
  {
    ppt: "A fájdalomérzékelés, a fájdalomcsillapítás elvi lehetőségei",
    type: "Helytelen állítás keresése",
    q: "A fájdalom receptoraira (nociceptorok) érvényes megállapítások közül válassza ki a HELYTELENT!",
    options: [
      "A. A fájdalom receptorai anatómiailag csupasz, szabad idegvégződések",
      "B. A bőr felszínes rétegeiben és a savós hártyákon igen nagy sűrűségben találhatók",
      "C. Az artériák adventitiájában is megtalálhatók",
      "D. A nociceptorok vastag, tokkal körülvett speciális kötőszöveti képletek",
      "E. Ízületi tokokban és fogbélben szintén bőségesen előfordulnak"
    ],
    correct: 3,
    exp: "A nociceptorok morfológiailag nem tokkal körülvett végtestek (mint a Pacini vagy Meissner), hanem szabad idegvégződések[cite: 10]."
  },
  {
    ppt: "A fájdalomérzékelés, a fájdalomcsillapítás elvi lehetőségei",
    type: "Helytelen állítás keresése",
    q: "A fájdalom összetevőire vonatkozó párosítások közül melyik a HELYTELEN?",
    options: [
      "A. Kognitív komponens — a fájdalom forrásának, okának és következményeinek intellektuális értékelése (NEM pusztán hangulati reakció)",
      "B. Motoros komponens — a fájdalomra adott védekező reflex (pl. flexor reflex)",
      "C. Szenzoros-diszkriminatív komponens — a fájdalom helyének, minőségének és intenzitásának megkülönböztetése",
      "D. Affektív/vegetatív komponens — szorongás, félelem, vérnyomás- és pulzusváltozás, verejtékezés",
      "E. Pszichomotoros komponens — a fájdalomra adott jellegzetes viselkedési reakciók"
    ],
    correct: 0,
    exp: "A hangulati és érzelmi reakció az affektív/emocionális komponenshez tartozik; a kognitív komponens a tapasztalatokon alapuló gondolati értékelés[cite: 10]."
  },
  {
    ppt: "A fájdalomérzékelés, a fájdalomcsillapítás elvi lehetőségei",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A kisugárzó (referred) fájdalomra igaz állítások:\n1. Gyakran a zsigeri szervvel azonos embrionális dermatómába tartozó bőrterületre vetül (Head-zónák)\n2. Hátterében a zsigeri és szomatikus afferensek azonos gerincvelői másodrendű neuronokon történő konvergenciája áll\n3. A lokalizált mély és a kisugárzó felületi fájdalom egyidejűleg is fennállhat\n4. Sebészi hegek, korábbi sérülések megváltoztathatják a kisugárzás irányát",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A konvergencia-projekció elmélet magyarázza a kisugárzó fájdalmat: a közös gerincvelői felszálló pálya miatt az agykéreg a bőrből érkezőként értelmezi az ingert[cite: 10]."
  },

  // =========================================================================
  // 5. TÉMA: Gerincvelő és motoros reflexek
  // =========================================================================
  {
    ppt: "A gerincvelő és az agytörzs szerepe a mozgáskoordinációban",
    type: "Helyes állítás keresése",
    q: "A Golgi-féle ínorsó (ínreceptor) és az izomorsó közötti legfontosabb funkcionális különbség:",
    options: [
      "A. Az ínorsó az izom összehúzódásakor keletkező feszülést (erőt) érzékeli, míg az izomorsó az izom hosszúságát és annak változási sebességét",
      "B. A Golgi-féle ínorsó sokkal érzékenyebb a passzív nyújtásra",
      "C. Az izomorsó sorba, a Golgi-ínorsó párhuzamosan kapcsolt az izomrostokkal",
      "D. Az ínorsó kizárólag serkenti a saját izom motoneuronjait",
      "E. Az izomorsóban nincsenek intrafuzális rostok"
    ],
    correct: 0,
    exp: "Az izomorsó (párhuzamos kapcsolás) a megnyúlást, a Golgi-ínorsó (soros kapcsolás) a feszülést/összehúzódási erőt monitorozza[cite: 10]."
  },
  {
    ppt: "A gerincvelő és az agytörzs szerepe a mozgáskoordinációban",
    type: "Helyes állítás keresése",
    q: "Ha egy beidegzett vázizmot hirtelen túlzott erővel nyújtunk meg, a kezdeti összehúzódást követően az izom védekezően elernyed (bicska-reflex). Mi felelős a relaxációért?",
    options: [
      "A. A gamma-motoneuronok kisülési frekvenciájának hirtelen emelkedése",
      "B. A Golgi-féle ínreceptorok afferenseinek (Ib rostok) fokozott aktivitása és a saját motoneuront gátló interneuron aktiválódása",
      "C. Az annulospirális végződések gátlása",
      "D. A motoros véglemez kimerülése",
      "E. A n. vagus reflexe"
    ],
    correct: 1,
    exp: "A túlnyújtás ingerli a Golgi-ínorsót, az Ib afferensek gátló interneuronokon át leállítják az azonos izom alfa-motoneuronjait, megelőzve az ín elszakadását[cite: 10]."
  },
  {
    ppt: "A gerincvelő és az agytörzs szerepe a mozgáskoordinációban",
    type: "Helyes állítás keresése",
    q: "Az alábbiak közül melyik képlet NEM része a klasszikus monoszinaptikus saját (nyújtási) reflexívnek?",
    options: [
      "A. A Golgi-féle ínorsó és gátló interneuronja",
      "B. Az izomorsó primer annulospirális végződése",
      "C. Az Ia típusú vastag myelinhüvelyes érzőafferens rost",
      "D. Az elülső szarvi alfa-motoneuron",
      "E. A motoros véglemezen ható acetilkolin"
    ],
    correct: 0,
    exp: "A monoszinaptikus reflexben nincs interneuron (izomorsó -> Ia rost -> alfa-motoneuron); a Golgi-ínorsó reflexe diszinaptikus[cite: 10]."
  },
  {
    ppt: "A gerincvelő és az agytörzs szerepe a mozgáskoordinációban",
    type: "Helyes állítás keresése",
    q: "A gerincvelői alfa-motoneuronok funkciója:",
    options: [
      "A. Az izomorsók intrafuzális rostjainak motoros beidegzése",
      "B. A vázizmok munkaizomrostjainak (extrafuzális rostok) közvetlen beidegzése, alkotva a mozgatórendszer végső közös útvonalát",
      "C. A simaizmok beidegzése a vegetatív szervekben",
      "D. A Golgi-ínorsó érzékenységének beállítása",
      "E. Zsigeri mirigyek beidegzése"
    ],
    correct: 1,
    exp: "Sherrington klasszikus kifejezésével az alfa-motoneuron a mozgatórendszer 'végső közös útja', amely közvetlenül az extrafuzális izomrostokat kontraktálja[cite: 10]."
  },
  {
    ppt: "A gerincvelő és az agytörzs szerepe a mozgáskoordinációban",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A centrális szinapszisokban az ingerületátvitelre és preszinaptikus gátlásra igaz:\n1. Mind az AMPA-, mind az NMDA-receptorok ligand-vezérelt serkentő glutamát receptorok\n2. A preszinaptikus gátlás kialakításában a GABA (GABA_A és GABA_B receptorok) és a glicin játszik kulcsszerepet\n3. Az NMDA-receptor fiziológiás feszültségfüggő Mg2+-blokk alatt áll nyugalomban\n4. A preszinaptikus gátlás csökkenti a terminálisba beáramló Ca2+ mennyiségét",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A glutamát a fő serkentő (AMPA/NMDA), míg a GABA és glicin preszinaptikus gátlással szabályozza a transzmitterleadást a kalciumcsatornák modulációján keresztül[cite: 10]."
  },

  // =========================================================================
  // 6. TÉMA: Vegetatív idegrendszer és Hypothalamus
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "A vegetatív idegrendszer szimpatikus részére jellemző:",
    options: [
      "A. A preganglionáris rostjai a thoracalis és lumbalis (Th1-L2/L3) gerincvelői szakaszokból erednek",
      "B. A preganglionáris rostok neurotranszmittere a noradrenalin",
      "C. Kivétel nélkül minden posztganglionáris rostja adrenerg",
      "D. A craniosacralis kiáramlás képezi az anatómiai bázisát",
      "E. Posztganglionáris rostjai mindig sokkal rövidebbek, mint a paraszimpatikusé"
    ],
    correct: 0,
    exp: "A szimpatikus idegrendszer thoracolumbalis eredetű, a preganglionáris rostok kolinergek (Ach), és a verejtékmirigyekhez futó posztganglionáris rostok szintén kolinergek[cite: 10]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "A verejtékmirigyeket funkcionálisan beidegző vegetatív rostok típusa:",
    options: [
      "A. Posztganglionáris paraszimpatikus adrenerg rostok",
      "B. Posztganglionáris szimpatikus kolinerg rostok (Ach transzmitterrel, M3 receptoron)",
      "C. Preganglionáris szimpatikus adrenerg rostok",
      "D. Posztganglionáris paraszimpatikus nikotinos rostok",
      "E. Szenzoros C-típusú rostok"
    ],
    correct: 1,
    exp: "Klasszikus kivétel: a hőszabályozó verejtékmirigyek beidegzése anatómiailag szimpatikus, de a posztganglionáris rostok acetilkolint szabadítanak fel muszkarinos receptorokra[cite: 10]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "A szimpatikus aktivitásfokozódás alábbi következményei közül mely(ek) hozható(k) létre atropin (muszkarinreceptor-antagonista) adagolásával is?\n1. A szívfrekvencia fokozódása (tachycardia)\n2. A pupillatágulat (mydriasis)\n3. A nyálelválasztás és bélmotilitás gátlása\n4. A hőszabályozó verejtékezés fokozódása",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha mindegyik igaz"
    ],
    correct: 0,
    exp: "Az atropin blokkolja a paraszimpatikus tónust (frekvencia nő, nyál csökken), de a verejtékezést GÁTOLJA (száraz, forró bőr), mivel az kolinerg muszkarinos[cite: 10]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Többszörös választás (A: 1,2,3 | B: 1,3 | C: 2,4 | D: 4 | E: mind)",
    q: "Mely jelenségek jönnek létre a paraszimpatikus idegrendszer tónusának fokozódásakor?\n1. Miosis (pupillaszűkület a m. sphincter pupillae összehúzódásával)\n2. A szem közelre való alkalmazkodása (akkommodáció a m. ciliaris kontrakciójával)\n3. A gyomor sósavszekréciójának és motilitásának fokozódása\n4. A pancreas exokrin és endokrin szekréciójának serkentése",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és a 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz (1, 2, 3, 4) igaz"
    ],
    correct: 4,
    exp: "A paraszimpatikus idegrendszer a 'rest and digest' működésekért felel: pupillaszűkület, akkommodáció, emésztőnedv- és inzulinszekréció[cite: 10]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "A testhőmérséklet centrális szabályozása és a homeosztatikus funkciók integrációja melyik agyi struktúrához kötött legszorosabban?",
    options: [
      "A. Hypophysis elülső lebeny",
      "B. Thalamus ventrobasalis magcsoport",
      "C. Medulla oblongata",
      "D. Hypothalamus (preoptikus area és elülső magok)",
      "E. Cerebellum"
    ],
    correct: 3,
    exp: "A hypothalamus a vegetatív és endokrin integráció, valamint a testhőmérsékleti alapjel (termoregulációs központ) legfőbb irányítója[cite: 10]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helytelen állítás keresése",
    q: "A hypothalamus működésére vonatkozó alábbi állítások közül melyik a HELYTELEN?",
    options: [
      "A. Részt vesz a vegetatív idegrendszeri és a hormonális mechanizmusok integrációjában",
      "B. Neuroszekréciós hormonokat (ADH, oxitocin) termel, melyek az axonokon át a neurohipofízisbe jutnak",
      "C. Statineket és liberineket termel, melyek a portális keringés útján szabályozzák az adenohipofízist",
      "D. Egyáltalán nincs hatással az adenohipofízis (hypophysis elülső lebeny) hormontermelésére",
      "E. Szerepet játszik a cirkadián ritmusok, a táplálék- és vízfelvétel vezérlésében"
    ],
    correct: 3,
    exp: "A hypothalamus a hypophyseotrop hormonjaival (TRH, CRH, GnRH, GHRH, szomatosztatin, dopamin) közvetlenül irányítja az adenohipofízist[cite: 10]."
  },

  // =========================================================================
  // 7. TÉMA: Keringés és vegetatív reflexek
  // =========================================================================
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A szívizom még erőteljes szimpatikus izgalom esetén sem tetanizálható,\nMERT\nINDOKLÁS: A szimpatikus hatás kialakításáért a béta-1 adrenerg receptorok aktivitása felelős a szívizomsejteken.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is IGAZ, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 1,
    exp: "A tetanizálhatatlanság oka az elnyújtott platófázis és a hosszú abszolút refrakter periódus (nem a béta-1 receptor megléte, bár az indoklás maga igaz tény)[cite: 10]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Az extracelluláris Ca2+ teljes elvonása után a szív nem képes összehúzódni,\nMERT\nINDOKLÁS: Az extracelluláris Ca2+-ionoknak alapvető szerepük van a szarkoplazmatikus retikulumból történő Ca2+-felszabadulás beindításában (CICR).",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A szívizomban a kalcium által indukált kalciumfelszabadulás (CICR) működik: az L-típusú csatornán beáramló 'trigger' Ca2+ nélkül a RyR2 nem nyílik meg, kontrakció nincs[cite: 10]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Teljes atrioventricularis átvezetési blokk (III. fokú AV-blokk) esetén a pitvarok és kamrák egymástól teljesen függetlenül működnek,\nMERT\nINDOKLÁS: Teljes átvezetési blokk esetén a sinuscsomó akciós potenciáljai nem érik el a kamrákat, így a kamrai heterotóp pacemaker központok veszik át a kamrák vezérlését.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "III. fokú blokkban a pitvarok a sinusritmus (60-80/min), a kamrák a lassú junkcionális vagy idioventrikuláris ritmus (25-40/min) szerint húzódnak össze disszociáltan[cite: 10]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A centrális artériás pulzushullámon az incisura (dicrot rés) a catacrot (leszálló) száron alakul ki,\nMERT\nINDOKLÁS: Aortainsufficientiában a billentyű záródási elégtelensége miatt az incisura sokkal kifejezettebbé válik.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás IGAZ, de az indoklás HAMIS",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 2,
    exp: "Az incisura a catacrot száron az aorta billentyű záródását jelzi (állítás igaz); billentyű-elégtelenségben (aortainsufficientia) a záródás elmaradása miatt az incisura ellaposodik vagy elvész (indoklás hamis)[cite: 10]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A vér lineáris áramlási sebessége a szisztémás kapillárisokban a legnagyobb,\nMERT\nINDOKLÁS: A véráramlás sebessége egyenesen arányos az adott érszakasz összesített keresztmetszetével.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mind az állítás, mind az indoklás HAMIS"
    ],
    correct: 4,
    exp: "A kontinuitási egyenlet szerint v = Q / A (a sebesség fordítottan arányos az összekeresztmetszettel); mivel a kapillárisok összkerekesztmetszete óriási, ott a sebesség a LEGLASSÚBB[cite: 10]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Ha a hematokrit értéke jelentősen nő, akkor a szívre háruló munka nagysága nem változik,\nMERT\nINDOKLÁS: A magasabb hematokrit növeli a Reynolds-szám értékét.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mind az állítás, mind az indoklás HAMIS"
    ],
    correct: 4,
    exp: "A polycythaemia növeli a vér viszkozitását és a perifériás ellenállást, így a szív munkája nő; a nagyobb viszkozitás pedig csökkenti (nem növeli) a Reynolds-számot[cite: 10]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Az akut balkamra-elégtelenség tüdőödéma kialakulásához vezet,\nMERT\nINDOKLÁS: A balkamra-elégtelenség vénás pangást okoz a kisvérkörben, ami megnöveli a tüdőkapillárisokban a hidrosztatikus nyomást.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A bal kamra elégtelen pumpálása retrográd nyomásemelkedést idéz elő a tüdővénákban és kapillárisokban, a hidrosztatikus filtráció meghaladja a reabszorpciót, tüdőödémát okozva[cite: 10]."
  },
  {
    ppt: "Regionális keringések",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A Bayliss-effektus (miogén autoreguláció) révén az artériás perfúziós nyomás emelkedésekor az adott érszakasz véráramlása stabil marad,\nMERT\nINDOKLÁS: A Bayliss-effektus során a transzmuralis nyomás növekedése a rezisztenciaerek simaizmának összehúzódását és az ér ellenállásának növekedését váltja ki.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük közvetlen kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A simaizom feszülésérzékeny csatornáinak megnyílása depolarizációt és vazokonstrikciót okoz, így a növekvő ellenállás kivédi a túlzott átáramlást a vesében és agyban[cite: 10]."
  },

  // =========================================================================
  // 8. TÉMA: Légzésmechanika és Gázcsere
  // =========================================================================
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: Ha a gerincvelőt a nyaki és háti szakasz határán (C7-Th1 szinten) átvágjuk, a kísérleti alany nem fullad meg (képes a spontán légzésre),\nMERT\nINDOKLÁS: A rekeszizmot (diaphragma) beidegző n. phrenicus a gerincvelő C3-C5 nyaki szegmentumaiból ered.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük közvetlen kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A rekeszizom mozgató magjai a nyaki intumescentia felett (C3-C5) találhatók, így a C7 alatti sérülés a bordaközi izmokat ugyan bénítja, de a rekeszlégzést megkíméli[cite: 10]."
  },
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A surfactant jelenlétében a tüdő compliance (tágulékonysága) növekszik,\nMERT\nINDOKLÁS: A surfactant csökkenti az alveoláris folyadékréteg felületi feszültségét.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük szoros kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A surfactant dipalmitoil-foszfatidilkolin molekulái mérséklik a felületi feszültséget, így az alveolusok kisebb nyomással tágíthatók (a compliance nő)[cite: 10]."
  },
  {
    ppt: "Légzésmechanika és a légzés szabályozása",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A hemoglobin Fe2+ ionja egyaránt alkalmas az O2 és a CO2 szállítására,\nMERT\nINDOKLÁS: Az O2 és a CO2 kötődését a hemoglobin Fe2+ ionjához a parciális nyomásviszonyok határozzák meg.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mind az állítás, mind az indoklás HAMIS"
    ],
    correct: 4,
    exp: "A CO2 NEM a hem Fe2+ ionjához kötődik, hanem a globin polipeptidláncok szabad N-terminális aminocsoportjaihoz (karbamino-vegyület)[cite: 10]."
  },

  // =========================================================================
  // 9. TÉMA: Testfolyadékok, vérképzés és hemosztázis
  // =========================================================================
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A globulinok csoportjába tartozó plazmafehérjék rendelkeznek ozmotikus aktivitással,\nMERT\nINDOKLÁS: A kolloidozmotikus (onkotikus) nyomás a kapilláris filtráció és reabszorpció egyensúlyának szabályozásában fontos tényező.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is IGAZ, de köztük NINCS közvetlen kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 1,
    exp: "Bár a legnagyobb onkotikus erőt az albumin adja, a globulinok is részt vesznek a kolloidozmotikus nyomásban (mindkét mondat igaz, de nem egymás magyarázatai)[cite: 10]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A vörösvértest-térfogat és a hematokrit érték ismeretében a teljes vértérfogat meghatározható,\nMERT\nINDOKLÁS: A hematokrit érték kifejezi, hogy a teljes vértérfogat hányad részét teszi ki a vörösvértest-tömeg.",
    options: [
      "A. Az állítás és az indoklás is IGAZ, és köztük közvetlen kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük nincs összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "Vértérfogat = Vörösvértest-térfogat / Hematokrit; a hígításos elvvel megmért vvt-térfogat és a Htk alapján pontosan kiszámítható a vérvolumen[cite: 10]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A hemoglobin szintézisében a B12-vitamin nem játszik közvetlen szerepet,\nMERT\nINDOKLÁS: B12-vitamin hiányában hypochrom microcyter anaemia jön létre.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás IGAZ, de az indoklás HAMIS",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 2,
    exp: "A B12 a sejtmag DNS-szintéziséhez kell (a vas és porfirin kell a hemoglobinhoz), de hiányában NEM mikrociter, hanem makrociter/hiperkróm megaloblasztos anaemia alakul ki[cite: 10]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A szöveti oxigénhiány fokozza a vörösvértestképződést (erythropoiesis),\nMERT\nINDOKLÁS: Az oxigénhiány közvetlenül, hormonális közvetítés nélkül stimulálja a csontvelői őssejteket.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás IGAZ, de az indoklás HAMIS",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 2,
    exp: "A hipoxia hatása hormonálisan közvetített: a vesében megnöveli az eritropoetin (EPO) termelését, és ez az endokrin faktor stimulálja a csontvelőt[cite: 10]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Relációanalízis (A: mindkettő igaz + összefüggés | B: mindkettő igaz, nincs összefüggés | C: igaz-hamis | D: hamis-igaz | E: mindkettő hamis)",
    q: "ÁLLÍTÁS: A test összvízkészletének heveny csökkenése következtében hemokoncentráció nem következik be,\nMERT\nINDOKLÁS: A vízvesztés nem vonja maga után a keringő plazmatérfogat csökkenését.",
    options: [
      "A. Az állítás és az indoklás is igaz, és köztük kauzális összefüggés van",
      "B. Az állítás és az indoklás is igaz, de köztük NINCS kauzális összefüggés",
      "C. Az állítás igaz, de az indoklás hamis",
      "D. Az állítás hamis, de az indoklás igaz",
      "E. Mind az állítás, mind az indoklás HAMIS"
    ],
    correct: 4,
    exp: "A vízvesztés csökkenti a plazmatérfogatot (hypovolaemia), ezáltal a sejtes elemek és fehérjék besűrűsödnek (hemokoncentráció alakul ki)[cite: 10]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "A vérlemezkék citoplazmájában a hemosztázis során bekövetkező [Ca2+] emelkedés alapvető szerepet játszik:",
    options: [
      "A. a sűrű és alfa-granulumokban tárolt aggregációs faktorok (ADP, szerotonin, vWF) szekréciójában és a citoszkeleton átrendeződésében",
      "B. a miozin könnyűlánc-kináz inaktiválásában",
      "C. a ciklikus AMP (cAMP) szint tartós megemelésében",
      "D. a vérlemezke-szétesés közvetlen gátlásában",
      "E. a prosztaciklin szintézisében"
    ],
    correct: 0,
    exp: "A megnövekedett intracelluláris kalcium indítja be a thrombocyta degranulációját, alakváltozását (pszeudopódiumok) és a glikoprotein IIb/IIIa receptorok aktivációját[cite: 10]."
  }
];

// Kérdések összefűzése a globális listával
window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS.concat(pdf40Questions);