/**
 * Orvosi / Fogorvosi Élettan Kérdésbank - PDF 10
 * Besorolva a hivatalos előadási tematika alapján:
 * - A sejtmembrán transzportfolyamatai
 * - A sejtműködés szabályozása, jelátviteli folyamatok
 * - Elektromos membránsajátságok
 * - Az akciós potenciál mechanizmusa
 * - Neuromuscularis junctio
 * - A szív ingerületképzése és elektrofiziológiája
 * - Elektrokardiográfia (EKG)
 * - Szívciklus és hemodinamika
 * - Keringésszabályozás és vegetatív reflexek
 * - Testfolyadékok, vérképzés és hemosztázis
 * - Légzésélettan és gáztranszport
 */

window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS || [];

const pdf10Questions = [
  // =========================================================================
  // 1. TÉMA: A sejtmembrán transzportfolyamatai
  // =========================================================================
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Helyes állítás keresése",
    q: "A membránon keresztül történő aktív transzportra jellemző:",
    options: [
      "A. csak bizonyos molekulatömeg alatt történik",
      "B. a transzport sebessége arányos a koncentráció-gradienssel",
      "C. ioncsatornán keresztül történik",
      "D. energiaigényes folyamat, carrier (transzporter) molekulát igényel",
      "E. nem igényel carrier molekulát"
    ],
    correct: 3,
    exp: "Az aktív transzport elektrokémiai gradienssel szemben hajtja az anyagot, metabolikus energiát igényel, és transzportfehérjéhez (carrier/pumpa) kötött[cite: 4]."
  },
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Helyes állítás keresése",
    q: "A membránon keresztül történő másodlagosan aktív transzportra jellemző:",
    options: [
      "A. mindkét koncentráció a kiegyenlítődés irányába változik",
      "B. nem mutat telítési kinetikát",
      "C. a transzport sebessége arányos a koncentráció-gradiensek különbségével",
      "D. két koncentráció-különbség közül az egyik csökkenése hajtja a másik gradiens felépülését (egyik lefelé, másik felfelé transzportálódik)",
      "E. mindkét koncentráció-gradiens nő közvetlenül az ATP energiájának felhasználásával"
    ],
    correct: 3,
    exp: "A másodlagosan aktív transzportban az egyik ion (jellemzően Na+) az elektrokémiai gradiense mentén lép be, és ez a felszabaduló hajtóerő fedezi a másik partner gradienssel szembeni transzportját[cite: 4]."
  },
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Helyes állítás keresése",
    q: "A passzív transzportra jellemző:",
    options: [
      "A. befektetett kémiai energiát igényel",
      "B. sebessége független a hőmérséklettől",
      "C. a transzport sebessége arányos a koncentráció-gradienssel (egyszerű diffúzió esetén)",
      "D. a transzport sebessége a koncentráció-gradiens függvényében minden esetben telítési kinetikát mutat",
      "E. csak bizonyos molekulatömeg alatt történik"
    ],
    correct: 2,
    exp: "A Fick I. törvény értelmében az egyszerű passzív diffúzió fluxusa egyenesen arányos a membrán két oldala közti koncentráció-gradienssel[cite: 4]."
  },
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Helyes állítás keresése",
    q: "A membránon keresztül történő passzív transzportra jellemző:",
    options: [
      "A. soha nem igényel carrier molekulát",
      "B. adott idő alatt transzportált anyag mennyisége arányos a koncentráció-gradienssel",
      "C. minden esetben feszültségfüggő ioncsatornán keresztül történik",
      "D. minden esetben karrierfehérjét igényel",
      "E. energiaigényes folyamat"
    ],
    correct: 1,
    exp: "A gradiens mentén történő passzív anyagmozgás sebessége arányos a hajtóerőként fellépő koncentráció-különbséggel[cite: 4]."
  },
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Helyes állítás keresése",
    q: "A felsorolt transzportfolyamatok közül melyik használ ATP-t közvetlenül?",
    options: [
      "A. a glükóz sejtbe történő transzportja",
      "B. a Na+ sejtből történő kijuttatása",
      "C. az O2 és a CO2 átjutása a sejtmembránon",
      "D. az aminosavak sejtbe történő szimportja",
      "E. a víz sejtekbe történő belépése ozmózis kapcsán"
    ],
    correct: 1,
    exp: "A Na+/K+-ATP-áz enzim közvetlen ATP-hidrolízissel mozgatja a Na+-t kifelé (primer aktív transzport)[cite: 4]."
  },
  {
    ppt: "A sejtmembrán transzportfolyamatai",
    type: "Helyes állítás keresése",
    q: "Mely transzportfolyamatokra jellemző a szaturáció (telítési kinetika) jelensége?",
    options: [
      "A. aktív transzport és facilitált diffúzió",
      "B. aktív transzport és passzív diffúzió",
      "C. facilitált diffúzió és egyszerű diffúzió",
      "D. kizárólag az egyszerű passzív diffúzió",
      "E. mindenfajta transzportra kivétel nélkül jellemző"
    ],
    correct: 0,
    exp: "Ahol a transzportot korlátozott számú specifikus fehérje kötőhely (carrier/transzporter) közvetíti, ott maximális transzportkapacitás és szaturáció alakul ki[cite: 4]."
  },

  // =========================================================================
  // 2. TÉMA: A sejtműködés szabályozása, jelátviteli folyamatok
  // =========================================================================
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "A sejtfelszíni membránban található receptorokra általánosan érvényes, hogy:",
    options: [
      "A. kizárólag egy szignáltranszdukciós útvonalat képesek aktiválni",
      "B. egy funkcionális ligandumkötő hellyel minden esetben rendelkeznek",
      "C. kivétel nélkül G-proteinhez kötöttek",
      "D. több rokon ligandummal szemben is azonos affinitást mutatnak",
      "E. szerkezetüket tekintve kizárólag 7 transzmembrán hélixet tartalmaznak"
    ],
    correct: 1,
    exp: "A sejtmembrán receptorainak elengedhetetlen közös funkcionális egysége az extracelluláris ligandkötő domén (specifikus kötőhely)[cite: 4]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Az ionotróp receptorokra jellemző:",
    options: [
      "A. egyben ligandum-vezérelt ioncsatornák is",
      "B. a hozzájuk kötődő ionok hatására belső kaszkádokat aktiválnak",
      "C. minden esetben heterotrimer G-proteinhez kapcsoltak",
      "D. ATP-szenzitív intracelluláris transzkripciós faktorok",
      "E. működésük független a neurotranszmitter jelenlététől"
    ],
    correct: 0,
    exp: "Az ionotróp receptorok maguk alkotnak ioncsatornát (pl. nikotinos acetilkolin receptor), a ligandumkötés közvetlen csatornanyitást eredményez[cite: 4]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Melyik állítás IGAZ az alábbiak közül a másodlagos hírvivő folyamatokra?",
    options: [
      "A. Az inozitol-triszfoszfát (IP3) kalciumot szabadít fel az intracelluláris kalciumraktárakból",
      "B. A béta-adrenerg receptorok aktiválódása mindig csökkenti az adenilát-cikláz aktivitását",
      "C. A muszkarin-típusú acetilkolin receptorok ioncsatorna receptorok",
      "D. A G-proteinek sohasem képesek az intracelluláris cAMP-szint csökkentésére",
      "E. A protein kináz C-t (PKC) diacilglicerin és kizárólag a cAMP aktiválja"
    ],
    correct: 0,
    exp: "A Gq útvonalon képződő IP3 a szarkoplazmatikus/endoplazmatikus retikulum membránjának IP3 receptoraihoz kötve Ca2+-kiáramlást idéz elő[cite: 4]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "Melyik állítás IGAZ a celluláris szignáltranszdukciós rendszerekre?",
    options: [
      "A. Az intracelluláris cAMP növekedése közvetlenül a protein kináz A (PKA) aktiválódásához vezet",
      "B. Az inzulin receptorhoz kötődése a receptor autofoszforilációját eredményezi (tirozin-kináz)",
      "C. A foszfolipáz-C (PLC) aktivitása növeli az intracelluláris IP3 szintet",
      "D. A muszkarinos acetilkolin receptor a G-protein kapcsolt (metabotrop) receptorok közé tartozik",
      "E. A felsorolt állítások mindegyike helyes és igaz"
    ],
    correct: 4,
    exp: "Mind a PKA-cAMP tengely, az inzulin tirozin-kináz receptor autofoszforilációja, a PLC-IP3 képződés, mind az M-Ach metabotrop jellege alapvető élettani tény[cite: 4]."
  },
  {
    ppt: "A sejtműködés szabályozása, jelátviteli folyamatok",
    type: "Helyes állítás keresése",
    q: "A vérben fiziológiás dózisban keringő adrenalin:",
    options: [
      "A. elsősorban alfa-adrenoreceptorokat aktivál",
      "B. mind az artériás, mind a vénás rendszerben vazodilatációt vált ki",
      "C. mind az artériás, mind a vénás rendszerben kizárólag vazokonstrikiót okoz",
      "D. acetilkolin receptorokat stimulál",
      "E. elsősorban béta-adrenoreceptorokat (béta-1, béta-2) aktivál nagyobb affinitással"
    ],
    correct: 4,
    exp: "Fiziológiás (alacsony) plazmakoncentrációban az adrenalin nagyobb affinitást mutat a béta-adrenerg receptorokhoz, mint az alfa-receptorokhoz[cite: 4]."
  },

  // =========================================================================
  // 3. TÉMA: Elektromos membránsajátságok
  // =========================================================================
  {
    ppt: "Elektromos membránsajátságok",
    type: "Helyes állítás keresése",
    q: "A nyugalmi membránpotenciált több permeábilis ion jelenlétében leírja:",
    options: [
      "A. a Goldman–Hodgkin–Katz egyenlet",
      "B. Fick első törvénye",
      "C. Fick második törvénye",
      "D. a Boltzmann-egyenlet",
      "E. a Nernst-egyenlet (egyensúlyi potenciál egyetlen ionra)"
    ],
    correct: 0,
    exp: "A GHK-feszültségegyenlet az összes meghatározó ion (K+, Na+, Cl-) koncentrációgrádiensét és relatív membránpermeabilitását összegzi[cite: 4]."
  },
  {
    ppt: "Elektromos membránsajátságok",
    type: "Helyes állítás keresése",
    q: "A nyugalmi membránpotenciál kialakításában meghatározó szereppel bír:",
    options: [
      "A. a testhőmérséklet ingadozása",
      "B. a membránfehérjék laterális diffúziója",
      "C. a nyugalmi magas káliumkonduktancia (K+-szivárgó csatornák)",
      "D. a nátriumkonduktancia dominanciája",
      "E. a kloridgradiens aktív felépítése"
    ],
    correct: 2,
    exp: "A nyugalmi sejtmembrán permeabilitása K+-ionokra sokszorosa a többi ionénak, így a nyugalmi potenciál a K+ Nernst-potenciáljához fekszik a legközelebb[cite: 4]."
  },
  {
    ppt: "Elektromos membránsajátságok",
    type: "Helyes állítás keresése",
    q: "Melyik ion koncentrációgrádiensétől függ leginkább az idegsejt nyugalmi membránpotenciálja?",
    options: [
      "A. bikarbonát",
      "B. kalcium",
      "C. klorid",
      "D. nátrium",
      "E. kálium"
    ],
    correct: 4,
    exp: "Mivel nyugalomban a kálium permeabilitása (P_K) a legnagyobb, a nyugalmi potenciál értéke közvetlenül a káliumgrádiens függvénye[cite: 4]."
  },
  {
    ppt: "Elektromos membránsajátságok",
    type: "Helytelen állítás keresése",
    q: "A nyugalmi membránpotenciál fenntartásában melyik tényező NEM játszik közvetlen szerepet?",
    options: [
      "A. A K+ ionok aktív transzportja a Na+/K+-pumpa révén",
      "B. A sejtmembránban található glükóz transzporterek (GLUT)",
      "C. A K+ ionok egyenlőtlen megoszlása a membrán két oldalán",
      "D. A membrán ionpermeabilitási viszonyai",
      "E. A Cl- ionok megoszlása a membrán két oldalán"
    ],
    correct: 1,
    exp: "A glükóz transzporterek (GLUT) semleges szerves molekulát facilitálnak, töltésmozgást nem végeznek, így nincs közvetlen elektrofiziológiai hatásuk[cite: 4]."
  },
  {
    ppt: "Elektromos membránsajátságok",
    type: "Helyes állítás keresése",
    q: "Az alábbiak közül mely folyamat csökkenti a nyugalmi membránpotenciál értékét közel 0 mV-ra?",
    options: [
      "A. a sejtek izotóniás KCl oldatba történő helyezése",
      "B. a Cl- SO4(2-)-ra történő cseréje az extracelluláris térben",
      "C. a Na+/K+-pumpa azonnali gátlása metabolikus inhibitorral (pl. cianid)",
      "D. a Cl- csatornák specifikus gátlása",
      "E. a külső tér Na+ tartalmának kolinra történő cseréje"
    ],
    correct: 0,
    exp: "Izotóniás KCl-ben az extracelluláris K+ megközelíti az intracelluláris értéket ([K+]ki ≈ [K+]be), így a K+ egyensúlyi potenciálja és a membránpotenciál is 0 mV-ra csökken[cite: 4]."
  },
  {
    ppt: "Elektromos membránsajátságok",
    type: "Helyes állítás keresése",
    q: "Az ingerlékeny szövetekre általánosan jellemző, hogy:",
    options: [
      "A. a sejtek intracelluláris Na+ koncentrációja nagyobb mint a K+ koncentrációjuk",
      "B. nyugalmi membránpotenciállal rendelkeznek, a sejtek belseje negatív a külső felszínhez képest",
      "C. az akciós potenciált kiváltó ingerre először a K+, majd a Na+ permeabilitás nő",
      "D. a sejtmembrán ionpermeabilitása átmenetileg nő hiperpolarizáció hatására",
      "E. a sejtek ingerlékenysége fokozódik tartós hiperpolarizáció esetén"
    ],
    correct: 1,
    exp: "Minden élő sejt nyugalmi állapotban elektronegatív belső térrel rendelkezik a külső környezetéhez viszonyítva[cite: 4]."
  },
  {
    ppt: "Elektromos membránsajátságok",
    type: "Helyes állítás keresése",
    q: "Az extracelluláris tér K+-koncentrációjának növelése (hiperkalémia) a sejtmembrán:",
    options: [
      "A. K+-csatorna sűrűségét növeli",
      "B. Na+-permeabilitását azonnal megszünteti",
      "C. hiperpolarizációját okozza",
      "D. depolarizációját okozza",
      "E. membránpotenciál értékét nem változtatja meg"
    ],
    correct: 3,
    exp: "A külső K+ emelkedése csökkenti a koncentráció-különbséget és a K+ kiáramlás hajtóerejét, ami depolarizálja a nyugalmi membránt[cite: 4]."
  },

  // =========================================================================
  // 4. TÉMA: Az akciós potenciál mechanizmusa
  // =========================================================================
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Helyes állítás keresése",
    q: "Az idegrost akciós potenciálja felszálló szárának kialakításában a legfontosabb:",
    options: [
      "A. a lassú káliumcsatornák szerepe",
      "B. a szivárgó káliumcsatornák szerepe",
      "C. a feszültségfüggő gyors nátriumcsatornák megnyílása (Nav)",
      "D. a kloridcsatornák aktiválódása",
      "E. a Na+/K+-pumpa aktivitása"
    ],
    correct: 2,
    exp: "A küszöbpotenciálnál lavinaszerűen megnyíló feszültségfüggő Na+-csatornákon befelé áramló nátrium felel a felszálló szár gyors depolarizációjáért[cite: 4]."
  },
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Helyes állítás keresése",
    q: "Az idegsejt akciós potenciálja leszálló szárának kialakításában a legfontosabb:",
    options: [
      "A. a szivárgó nátriumcsatornák szerepe",
      "B. a feszültségfüggő késői egyenirányító káliumcsatornák (Kv) megnyílása és a Nav csatornák inaktivációja",
      "C. a nátriumcsatornák nyitva maradása",
      "D. a kloridcsatornák gátlása",
      "E. a Ca2+-pumpa közvetlen működése"
    ],
    correct: 1,
    exp: "A Nav inaktiválódása és a késői feszültségfüggő K+-csatornák (Kv) megnyílása (K+ kiáramlás) állítja helyre a nyugalmi feszültséget[cite: 4]."
  },
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Helyes állítás keresése",
    q: "Az idegsejt akciós potenciáljának csúcsértékénél (overshoot):",
    options: [
      "A. a K+-ra ható hajtóerő kisebb, mint nyugalomban",
      "B. a transzmembrán potenciál amplitúdója csökkent, előjele változatlan",
      "C. az aktivált feszültségfüggő Na+-csatornák inaktiválódni kezdenek / konduktanciájuk eléri maximumát",
      "D. a nátriumkonduktancia lényegesen kisebb, mint a nyugalmi káliumkonduktancia",
      "E. a Na+-ra ható elektrokémiai hajtóerő nagyobb, mint a nyugalmi potenciálon"
    ],
    correct: 2,
    exp: "A csúcson a potenciál megközelíti a nátrium egyensúlyi potenciálját (+50..+60 mV), a Na+ beáramlás hajtóereje minimálisra esik, a Nav csatornák inaktiválódnak[cite: 4]."
  },
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Helyes állítás keresése",
    q: "Egy idegsejten melyik tényezőtől függ leginkább az akciós potenciál túllövésének (overshoot) nagysága?",
    options: [
      "A. intracelluláris kalciumkoncentráció",
      "B. az axon átmérője",
      "C. az extracelluláris nátriumkoncentráció ([Na+]ec)",
      "D. a szupratreshold stimulus nagysága",
      "E. intracelluláris kloridkoncentráció"
    ],
    correct: 2,
    exp: "A túllövés maximumát az E_Na (nátrium Nernst-potenciálja) korlátozza, amely közvetlenül az extracelluláris Na+-koncentrációtól függ[cite: 4]."
  },
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Helyes állítás keresése",
    q: "Az akciós potenciál axonális terjedésére érvényes:",
    options: [
      "A. sebessége annál nagyobb, minél vékonyabb a rostátmérő",
      "B. velőhüvelyes roston két Ranvier-csomópontot ugrik át egyszerre",
      "C. regeneratív jellegű (amplitúdója nem csökken a távolsággal)",
      "D. dekrementer (csillapodó) jellegű terjedést mutat",
      "E. sebessége egyenesen arányos a membrán kapacitásával"
    ],
    correct: 2,
    exp: "Az akciós potenciál 'minden vagy semmi' törvényű, regeneratív folyamat: az egymást követő membránszakaszokon azonos amplitúdóval fut végig[cite: 4]."
  },
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Helyes állítás keresése",
    q: "Az extracelluláris Na+-koncentrációt fokozatosan csökkentve az akciós potenciál amplitúdója:",
    options: [
      "A. a Na+-koncentráció csökkenésével arányosan csökken",
      "B. a Na+-koncentráció csökkenésével arányosan nő",
      "C. egy bizonyos küszöbkoncentráció eléréséig nem változik",
      "D. ugrásszerűen nő",
      "E. semmilyen körülmények között nem változik"
    ],
    correct: 0,
    exp: "A külső Na+ csökkenésével az E_Na kevésbé pozitív értékre tolódik, így a depolarizáció csúcsa és az AP amplitúdója arányosan lecsökken[cite: 4]."
  },
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Helyes állítás keresése",
    q: "Melyik állítás IGAZ az idegsejtek membránján kialakuló relatív refrakter periódus vonatkozásában?",
    options: [
      "A. a K+-csatornák teljes mértékben inaktiváltak",
      "B. a Na+-csatornák egy része már inaktivációból visszatérve aktiválható állapotba került",
      "C. csökkent a nátrium egyensúlyi potenciálja",
      "D. csökken az akciós potenciál kiváltásának küszöbe a nyugalmihoz képest",
      "E. a sejt membránja semmilyen erős ingerrel nem ingerelhető"
    ],
    correct: 1,
    exp: "A repolarizáció során a nátriumcsatornák inaktivációs kapui fokozatosan kinyílnak, így szupranormális ingerrel már kiváltható új akciós potenciál[cite: 4]."
  },
  {
    ppt: "Az akciós potenciál mechanizmusa",
    type: "Helyes állítás keresése",
    q: "Az ingerlékeny sejtek (ideg, izom) abban különböznek alapvetően más sejtektől, hogy:",
    options: [
      "A. működésüket ionáramok befolyásolják",
      "B. membránjukban aktív transzportfolyamatok működnek",
      "C. képesek nátrium- (vagy más ion-) permeabilitásuk gyors, tranziens megváltoztatására inger hatására",
      "D. membránjuk két oldala között ionkoncentráció-gradiens található",
      "E. membránjuk nyugalmi potenciállal rendelkezik"
    ],
    correct: 2,
    exp: "Feszültségfüggő ioncsatornáik révén az ingerlékeny sejtek képesek gyors, szabályozott vezetőképesség-változást és akciós potenciált produkálni[cite: 4]."
  },

  // =========================================================================
  // 5. TÉMA: Neuromuscularis junctio
  // =========================================================================
  {
    ppt: "Neuromuscularis junctio",
    type: "Helyes állítás keresése",
    q: "A vázizomrostok szarkoplazmatikus retikulumának kalciumcsatornája:",
    options: [
      "A. dihidropiridin receptor (DHPR)",
      "B. rianodin receptor (RyR1)",
      "C. nikotin-típusú acetilkolin receptor",
      "D. L-típusú feszültségfüggő kalciumcsatorna",
      "E. SERCA ATP-áz"
    ],
    correct: 1,
    exp: "A vázizom szarkoplazmatikus retikulum membránjában a RyR1 felelős a Ca2+ kalcium-indukált felszabadulásáért[cite: 4]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Helyes állítás keresése",
    q: "Válassza ki az egyetlen HELYES megoldást a posztszinaptikus potenciálokról:",
    options: [
      "A. az EPSP a posztszinaptikus sejt hiperpolarizációja",
      "B. a serkentő posztszinaptikus potenciál (EPSP) és a véglemezpotenciál (EPP) alapvető biofizikai jellemzői megegyeznek",
      "C. a központi idegrendszerben mindig egyetlen EPSP elegendő akciós potenciál kiváltásához",
      "D. a gátló posztszinaptikus potenciált (IPSP) nem szelektív kationcsatornák megnyílása hozza létre",
      "E. az EPSP a minden vagy semmi törvényét követi"
    ],
    correct: 1,
    exp: "Mindkét potenciálváltozás helyi, dekrementummal terjedő, összegződésre képes (graduált) depolarizáció[cite: 4]."
  },
  {
    ppt: "Neuromuscularis junctio",
    type: "Helyes állítás keresése",
    q: "A véglemezpotenciálra (EPP) jellemző:",
    options: [
      "A. elektrotónusos membránpotenciál-változás",
      "B. a vázizmot hiperpolarizálja",
      "C. kifejezett refrakter periódussal rendelkezik",
      "D. reverzálpotenciálja -80 mV körüli érték",
      "E. kialakulásáért muszkarinos típusú acetilkolin receptorok a felelősek"
    ],
    correct: 0,
    exp: "Az EPP egy nikotinos receptorok által közvetített helyi, elektrotónusos depolarizációs potenciál, amely normálisan eléri az akciós potenciál küszöbét[cite: 4]."
  },

  // =========================================================================
  // 6. TÉMA: A szív ingerületképzése és elektrofiziológiája
  // =========================================================================
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "Mely ioncsatornák egyidejű működése felelős a kamrai akciós potenciál platófázisáért?",
    options: [
      "A. a Na+/K+-pumpa önmagában képes a platót fenntartani",
      "B. kizárólag a gyors nátriumcsatornák nyitva maradása",
      "C. a késői kálium- és az L-típusú Ca2+-csatornák egyidejű árama",
      "D. csak a gyors feszültségfüggő Na+-csatornáké",
      "E. csak a szivárgó kloridcsatornáké"
    ],
    correct: 2,
    exp: "A platót (2. fázis) az L-típusú kalciumcsatornákon át beáramló Ca2+ és a repolarizáló K+-áramok kényes dinamikus egyensúlya tartja fenn[cite: 4]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "A kamrai szívizomsejtekben hol helyezkednek el az L-típusú Ca2+-csatornák?",
    options: [
      "A. a mitokondriumok membránjában",
      "B. az endoplazmatikus retikulumon",
      "C. a sarcolemmában és a T-tubulusok membránjában",
      "D. szabadon a citoplazmában",
      "E. a sejtmaghártyában"
    ],
    correct: 2,
    exp: "Az L-típusú kalciumcsatornák (DHPR) a szarkolemmában és a T-tubulus rendszerben találhatók[cite: 4]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "Melyik vegyület gátolja a kamrai szívizomsejtek L-típusú Ca2+-csatornáit?",
    options: [
      "A. nifedipin (dihidropiridin származék)",
      "B. cézium",
      "C. tetraetil-ammónium (TEA)",
      "D. 4-aminopiridin (4-AP)",
      "E. szaxitoxin (STX)"
    ],
    correct: 0,
    exp: "A nifedipin, verapamil és diltiazem az L-típusú feszültségfüggő kalciumcsatornák klasszikus gátlószerei[cite: 4]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "A szív ingerületvezető rendszerének legutolsó tagja, amely még rendelkezik pacemaker sajátsággal:",
    options: [
      "A. a bal pitvari munkaizomzat",
      "B. a bal kamrai munkaizomzat",
      "C. a Purkinje-rosthálózat",
      "D. a His-köteg",
      "E. az AV-csomó"
    ],
    correct: 2,
    exp: "A Purkinje-hálózat képezi a tercier ingerképző központot (kb. 20-40/min saját frekvenciával)[cite: 4]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "A szív pacemaker sejtjei által létrehozott akciós potenciálok frekvenciája legfőképpen mitől függ?",
    options: [
      "A. a jobb pitvarban mérhető vérhőmérséklettől önmagában",
      "B. az L-típusú Ca-csatornák inaktivációs sebességétől",
      "C. a pacemaker sejtek nyugalmi feszültségének abszolút stabilitásától",
      "D. a spontán diasztolés depolarizáció (prepotenciál) sebességétől / meredekségétől",
      "E. az akciós potenciál platófázisának hosszától"
    ],
    correct: 3,
    exp: "Minél meredekebb a diasztolés prepotenciál, a membrán annál hamarabb éri el a tüzelési küszöböt, ami növeli a szívfrekvenciát[cite: 4]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "Fiziológiás körülmények között a szív alábbi képletei közül melyik bír a legmeredekebb spontán diasztolés depolarizációval?",
    options: [
      "A. a His-köteg",
      "B. a Purkinje-rostok",
      "C. a sinuscsomó (SA-csomó)",
      "D. a kamrai munkaizomrostok",
      "E. az AV-csomó"
    ],
    correct: 2,
    exp: "A sinuscsomó prepotenciálja a legmeredekebb, ez határozza meg fiziológiásan a szívfrekvenciát (overdrive szupresszió)[cite: 4]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "Mely területre NEM jellemző fiziológiás körülmények között a spontán diasztolés depolarizáció?",
    options: [
      "A. kamrai munkaizomzat",
      "B. Tawara-szárak",
      "C. AV-csomó",
      "D. His-köteg",
      "E. sinuscsomó"
    ],
    correct: 0,
    exp: "A kamrai munkaizomzat stabil nyugalmi potenciállal rendelkezik (-85..-90 mV), nincsen pacemaker aktivitása[cite: 4]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "A kamrai munkaizomsejtekre érvényes állítás:",
    options: [
      "A. hiányoznak a T-tubulusok és a szarkoplazmatikus retikulum",
      "B. nem szükséges extracelluláris Ca2+ a kontrakcióhoz",
      "C. a kontrakciót kizárólag a plazmamembrán Ca2+-pumpája hozza létre",
      "D. az aktin hiányzik a kontraktilis rendszerből",
      "E. az akciós potenciál hossza a több száz milliszekundumos nagyságrendet is eléri"
    ],
    correct: 4,
    exp: "A kamrai akciós potenciál a platófázis miatt tipikusan 200–300 ms hosszú[cite: 4]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "Az emberi szívben hol a LEGLASSÚBB az ingerület vezetési sebessége?",
    options: [
      "A. a Purkinje-rostokban",
      "B. a kamrai munkaizomzatban",
      "C. az AV-csomóban",
      "D. a His-kötegben",
      "E. a pitvari munkaizomzatban"
    ],
    correct: 2,
    exp: "Az AV-csomóban a leglassabb az ingerületvezetés (kb. 0,02-0,05 m/s), ami biztosítja a fiziológiás pitvar-kamrai átvezetési késést[cite: 4]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "Az emberi szívben hol a LEGGYORSABB az ingerület vezetése?",
    options: [
      "A. pitvari munkaizomzat",
      "B. sinuscsomó",
      "C. kamrai munkaizomzat",
      "D. AV-csomó",
      "E. Purkinje-rostok"
    ],
    correct: 4,
    exp: "A Purkinje-rostok vezetési sebessége a legmagasabb (2-4 m/s), biztosítva a kamrák szinkronizált összehúzódását[cite: 4]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "A szívizom fiziológiás körülmények között miért NEM tetanizálható?",
    options: [
      "A. a szívizomsejtek nem tartalmaznak kalciumot",
      "B. a mechanikai válasz időtartama jóval rövidebb, mint a depolarizáció",
      "C. az elektromos refrakter periódus és a mechanikai válasz időtartama csaknem megegyezik",
      "D. hiányoznak belőle a feszültségfüggő Na+-csatornák",
      "E. a szívizomban nincs troponin-C"
    ],
    correct: 2,
    exp: "A platófázis miatt a refrakter periódus csaknem addig tart, mint maga a kontrakció, így újabb akciós potenciállal nem lehet görcsös összehúzódást (tetanuszt) kiváltani[cite: 4]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "A pozitív inotrop szerek (pl. béta-1 agonisták):",
    options: [
      "A. mindig kizárólag a szívfrekvenciát növelik a kontrakciós erő változása nélkül",
      "B. hatásukat béta-1 adrenerg receptorokra hatva fejtik ki",
      "C. muszkarinos receptorok stimulálásával hatnak",
      "D. a kamrafunkciós görbét jobbra és lefelé tolják el",
      "E. csökkentik a kamrai nyomásemelkedés sebességét (dp/dt)"
    ],
    correct: 1,
    exp: "A szív béta-1 receptorainak aktivációja cAMP/PKA útvonalon keresztül fokozza a Ca2+-beáramlást és növeli az összehúzódás erejét (pozitív inotropia)[cite: 4]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "A szívglikozidok (pl. digitalis, digoxin) pozitív inotrop hatásának celluláris mechanizmusa:",
    options: [
      "A. serkentik a szív béta-adrenerg receptorait",
      "B. gátolják a szív béta-adrenerg receptorait",
      "C. közvetlenül serkentik az intracelluláris adenilát-ciklázt",
      "D. gátolják a Na+/K+-ATP-áz működését a sarcolemmában",
      "E. megkötik az intracelluláris kalciumot"
    ],
    correct: 3,
    exp: "A Na+/K+-pumpa gátlása növeli az intracelluláris Na+-t, ami gátolja a Na+/Ca2+ antiportert (NCX), így nő az SR Ca2+-tartalma és a kontrakciós erő[cite: 4]."
  },
  {
    ppt: "A szív ingerületképzése és elektrofiziológiája",
    type: "Helyes állítás keresése",
    q: "A szív ingerületvezető és munkaizomzatának akciós potenciáljaira közösen jellemző:",
    options: [
      "A. a szív valamennyi területén tartalmaz egy befelé irányuló Ca2+-áram komponenst",
      "B. az akciós potenciál alakja azonos a szív valamennyi területén",
      "C. lassú vezetési sebességgel rendelkeznek a Purkinje-rostokban",
      "D. a K+ sejtbe való belépésekor jön létre a depolarizáció",
      "E. a sinuscsomóban a nátriumáram felel a felszálló szárért"
    ],
    correct: 0,
    exp: "Akár a sinuscsomó prepotenciáljáról/felszálló száráról, akár a munkaizomzat platójáról van szó, a Ca2+-beáramlás minden szívizomsejtnél jelen van[cite: 4]."
  },

  // =========================================================================
  // 7. TÉMA: Elektrokardiográfia (EKG)
  // =========================================================================
  {
    ppt: "Elektrokardiográfia (EKG)",
    type: "Helyes állítás keresése",
    q: "Milyen tartományba esik a standard végtagi és mellkasi EKG hullámainak feszültségamplitúdója?",
    options: [
      "A. 0,1 - 1 V",
      "B. 50 - 100 mikroV",
      "C. 3 - 10 V",
      "D. 0,1 - 2 mV",
      "E. 50 - 100 mV"
    ],
    correct: 3,
    exp: "A testfelszínen mérhető EKG-hullámok tipikusan a 0,1–2 mV-os feszültségtartományban mozognak[cite: 4]."
  },
  {
    ppt: "Elektrokardiográfia (EKG)",
    type: "Helyes állítás keresése",
    q: "Fiziológiás viszonyok között mennyi az atrioventrikuláris átvezetési idő (PQ-intervallum) hossza?",
    options: [
      "A. 0,12 - 0,20 s (120 - 200 ms)",
      "B. legfeljebb 0,08 s",
      "C. 0,12 - 0,16 ms",
      "D. 1,2 - 1,6 ms",
      "E. 1,2 - 1,6 s"
    ],
    correct: 0,
    exp: "A normális PQ-távolság 0,12–0,20 másodperc (120–200 ms)[cite: 4]."
  },
  {
    ppt: "Elektrokardiográfia (EKG)",
    type: "Helyes állítás keresése",
    q: "Az EKG regisztrátumon a T-hullám fiziológiás oka:",
    options: [
      "A. a pitvarok repolarizációja",
      "B. a pitvarok depolarizációja",
      "C. az ingerület terjedése a His-kötegben",
      "D. a kamrák repolarizációja",
      "E. a kamrák depolarizációja"
    ],
    correct: 3,
    exp: "A T-hullám a kamrai munkaizomzat repolarizációjának felel meg[cite: 4]."
  },
  {
    ppt: "Elektrokardiográfia (EKG)",
    type: "Helyes állítás keresése",
    q: "Az EKG-n a PQ-szakasz (illetve intervallum) megfelel:",
    options: [
      "A. a kamrák depolarizációjának",
      "B. kizárólag a sinuscsomó ingerületképzésének",
      "C. a kamrák repolarizációjának",
      "D. az AV-csomó repolarizációjának",
      "E. a pitvari depolarizációnak és az AV-csomón történő kamrai átvezetésnek"
    ],
    correct: 4,
    exp: "A PQ-távolság a pitvari aktiváció kezdetétől a kamrai munkaizomzat depolarizációjának megindulásáig tart[cite: 4]."
  },
  {
    ppt: "Elektrokardiográfia (EKG)",
    type: "Helytelen állítás keresése",
    q: "Az elektrokardiogram (EKG) közvetlen információt szolgáltat az alábbi paraméterekről, KIVÉVE:",
    options: [
      "A. az ingerület vezetési sebessége és zavarai a szívben",
      "B. a kamrák refrakter állapota és repolarizációja",
      "C. a szívizom ischaemiás repolarizációs eltérései",
      "D. a szívizom mechanikai kontraktilitása (pumpaereje)",
      "E. a ritmuszavarok típusa"
    ],
    correct: 3,
    exp: "Az EKG kizárólag elektromos jelenségeket regisztrál, a mechanikai összehúzódási erőről (kontraktilitás) közvetlen adatot nem nyújt[cite: 4]."
  },
  {
    ppt: "Elektrokardiográfia (EKG)",
    type: "Helyes állítás keresése",
    q: "Mely kóros állapotok megítélésében várhatjuk a felületi EKG-tól a LEVKEVESEBB közvetlen információt?",
    options: [
      "A. pitvar-kamrai átvezetési zavarok",
      "B. coronaria-keringési zavar / ischaemia",
      "C. jobb kamrai hypertrophia",
      "D. szívritmuszavarok",
      "E. a szív csökkent mechanikai pumpafunkciója (ejekciós frakció csökkenése)"
    ],
    correct: 4,
    exp: "A szív mechanikai pumpateljesítményét, ejekciós frakcióját és billentyűhibáit echokardiográfiával vizsgálják, nem EKG-val[cite: 4]."
  },
  {
    ppt: "Elektrokardiográfia (EKG)",
    type: "Helyes állítás keresése",
    q: "Az EKG-regisztrátum mely része esik egybe a kamraizomsejtek maximális L-típusú Ca2+-konduktanciájával (platófázis)?",
    options: [
      "A. a Q-hullám",
      "B. a T-hullám vége",
      "C. a P-hullám",
      "D. az ST-szakasz",
      "E. a PQ-szakasz"
    ],
    correct: 3,
    exp: "Az izoelektromos ST-szakasz alatt a teljes kamrai izomzat depolarizált, a platófázisban van, ahol az L-típusú Ca2+-áram aktív[cite: 4]."
  },
  {
    ppt: "Elektrokardiográfia (EKG)",
    type: "Helyes állítás keresése",
    q: "Az ingerületnek a pitvarokról kamrákra történő átterjedésekor jelentkező késleltetés (AV-késés):",
    options: [
      "A. a His-kötegben található lassan vezető rostok miatt alakul ki",
      "B. az EKG-n a QT-intervallum formájában jelentkezik",
      "C. oka az AV-csomó kis átmérőjű, lassan vezető sejtjeinek sajátságaiban rejlik",
      "D. az EKG-n az ST-szakasz felel meg neki",
      "E. rontja a kamrai telődést"
    ],
    correct: 2,
    exp: "Az AV-csomó keskeny sejtjei és kevésbé sűrű gap junction kapcsolatai lassítják a vezetést, így a kamrák optimálisan feltelődhetnek a kamrai szisztolé előtt[cite: 4]."
  },

  // =========================================================================
  // 8. TÉMA: Szívciklus és hemodinamika
  // =========================================================================
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helyes állítás keresése",
    q: "A kamrák izovolumetriás kontrakciója során:",
    options: [
      "A. a bal pitvari nyomás lassan csökken",
      "B. az aortanyomás azonnal gyorsan emelkedik",
      "C. az aortanyomás lassan csökken az aorta billentyű nyitásáig",
      "D. a bal kamrai nyomás meredeken és gyorsan emelkedik zárt billentyűk mellett",
      "E. a bal pitvari nyomás ugrásszerűen a kamrai szintre nő"
    ],
    correct: 3,
    exp: "Az izovolumetriás összehúzódás idején minden billentyű zárva van, a kamra térfogata állandó, miközben a feszülés és az üregi nyomás meredeken felszökik[cite: 4]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helyes állítás keresése",
    q: "A bal kamra által végzett mechanikai munka miért lényegesen nagyobb, mint a jobb kamráé?",
    options: [
      "A. a bal kamra által kilökött pulzustérfogat lényegesen nagyobb",
      "B. a bal kamra kontrakciója lényegesen lassabb",
      "C. vénás telődése jóval nagyobb, mint a jobb kamráé",
      "D. lényegesen nagyobb perifériás ellenállással (szisztémás nyomással) szemben továbbítja a vért",
      "E. a bal kamra frekvenciája eltér a jobb kamráétól"
    ],
    correct: 3,
    exp: "A két kamra lökettérfogata azonos, de a bal kamrának a szisztémás keringés kb. 5-6-szor nagyobb nyomásával szemben kell vért pumpálnia (W = P * V)[cite: 4]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helyes állítás keresése",
    q: "Válassza ki a helyes állítást a szívciklus billentyűműködéséről!",
    options: [
      "A. Diasztolé alatt az aortában uralkodó nagyobb nyomás a semilunaris billentyűket zárva tartja",
      "B. A tricuspidalis billentyű fiziológiásan nyitva áll az ejekció alatt",
      "C. Az izometriás (izovolumetriás) kontrakció végén az AV billentyűk nyílnak ki",
      "D. Az izotóniás kontrakció alatt nem ürül vér a kamrákból",
      "E. Az izovolumetriás relaxáció alatt az AV-billentyűk nyitva vannak"
    ],
    correct: 0,
    exp: "Diasztoléban a kamrai nyomás alacsonyabb, mint az aortanyomás, ezért a retrográd nyomáskülönbség a zsebes (semilunaris) billentyűket zártan tartja[cite: 4]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Számolásos feladat",
    q: "Egy páciens szívfrekvenciája 150/min, pulzustérfogata (SV) 70 ml. Mennyi a perctérfogata?",
    options: [
      "A. 7,0 l/min",
      "B. 5,5 l/min",
      "C. 10,5 l/min",
      "D. 3,0 l/min",
      "E. 8,0 l/min"
    ],
    correct: 2,
    exp: "Perctérfogat = Szívfrekvencia * Pulzustérfogat = 150/min * 70 ml = 10 500 ml/min = 10,5 l/min[cite: 4]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Számolásos feladat",
    q: "Egy beteg vérnyomása 150/90 Hgmm. Mennyi az artériás középnyomás (MAP) becsült értéke?",
    options: [
      "A. 120 Hgmm",
      "B. 150 Hgmm",
      "C. 90 Hgmm",
      "D. 60 Hgmm",
      "E. 110 Hgmm"
    ],
    correct: 4,
    exp: "MAP = Diasztolés nyomás + (Szisztolés - Diasztolés nyomás) / 3 = 90 + (150 - 90)/3 = 90 + 20 = 110 Hgmm[cite: 4]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helyes állítás keresése",
    q: "Válassza ki a helyes sorrendet a vérnyomás csökkenésére a keringési rendszerben!",
    options: [
      "A. Aorta > vena cava > arteriolák > kapillárisok",
      "B. Vena cava > aorta > arteriolák > kapillárisok",
      "C. Kapillárisok > arteriolák > vena cava > aorta",
      "D. Vena cava superior > aorta > arteriolák > kapillárisok",
      "E. Aorta > arteriolák > kapillárisok > nagy vénák (vena cava)"
    ],
    correct: 4,
    exp: "A vér a magasabb hidrosztatikus nyomású területről az alacsonyabb felé áramlik: Aorta (~100 Hgmm) -> Arteriolák (~60-35 Hgmm) -> Kapillárisok (~30-15 Hgmm) -> Vénák (~5-0 Hgmm)[cite: 4]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helyes állítás keresése",
    q: "Az alábbiak közül melyik paraméter egyezik meg fiziológiásan a nagy- és a kisvérkörben?",
    options: [
      "A. a diasztolés vérnyomás",
      "B. egyik sem",
      "C. a perctérfogat (átlagos áramlási volumen)",
      "D. a teljes perifériás vascularis ellenállás",
      "E. a szisztolés csúcsnyomás"
    ],
    correct: 2,
    exp: "Mivel a szisztémás és pulmonális keringés sorba kapcsolt rendszer, időátlagban mindkét kamrának azonos perctérfogatot kell pumpálnia[cite: 4]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helytelen állítás keresése",
    q: "Az alábbi megállapítások közül melyik NEM IGAZ a szívciklusra?",
    options: [
      "A. a pitvari nyomásgörbe c-hulláma az AV-billentyűk kamrai szisztolé alatti beboltosulásának következménye",
      "B. az I. szívhang az AV-billentyűk záródásakor keletkező rezgések következménye",
      "C. a pitvari nyomásgörbe v-hulláma a kamrai diasztolé kezdetén, a vénás telődés csúcsán látható",
      "D. a kamrai szisztolé néhány milliszekundummal a QRS komplexum után indul",
      "E. a pitvarkontrakciót közvetlenül az AV-csomó pacemaker sejtjei vezérlik"
    ],
    correct: 4,
    exp: "A pitvarkontrakciót a sinuscsomó (SA-csomó) által keltett ingerület váltja ki, nem az AV-csomó[cite: 4]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helytelen állítás keresése",
    q: "A pulzusvolumen (lökettérfogat) csökkenését az alábbiak mindegyike létrehozhatja, KIVÉVE:",
    options: [
      "A. a kamra kontraktilitásának csökkenése",
      "B. a kamrai kontrakciós erő romlása",
      "C. a kamrai utóterhelés (afterload) jelentős emelkedése",
      "D. a szívfrekvencia mérsékelt csökkenése (megnyúlt diasztolés telődés mellett)",
      "E. a centrális vénás nyomás (előterhelés) lecsökkenése"
    ],
    correct: 3,
    exp: "A frekvencia csökkenése megnyújtja a telődési időt, így az EDV növekedése a Frank–Starling mechanizmus révén növeli a lökettérfogatot[cite: 4]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helyes állítás keresése",
    q: "Ha a szívfrekvencia jelentősen fokozódik (tachycardia):",
    options: [
      "A. a szisztolé és diasztolé idejének aránya nem változik",
      "B. a kontrakciók amplitúdója nem változhat",
      "C. az átvezetési idő rövidül és a diasztolés idő arányaiban drasztikusan lerövidül",
      "D. a kamrai akciós potenciál időtartama teljesen változatlan marad",
      "E. a diasztolé ideje nem változik"
    ],
    correct: 2,
    exp: "Magas frekvencián a diasztolé időtartama sokkal nagyobb arányban rövidül meg, mint a szisztolé, és az AV-átvezetési idő is mérséklődik[cite: 4]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helyes állítás keresése",
    q: "Melyik állítás IGAZ a vénás telődés (kamrai előterhelés) növelése esetén?",
    options: [
      "A. Az izomrostok megrövidülési sebessége csökken",
      "B. A kamrai végdiasztolés nyomás csökken",
      "C. Csökken az izomrostok passzív feszülése",
      "D. A kamrai falfeszülés és az end-diasztolés térfogat nő (Frank–Starling mechanizmus)",
      "E. A kamrafal maximális szisztolés feszülése csökken"
    ],
    correct: 3,
    exp: "A megnövekedett vénás beáramlás tágítja a kamrát, növeli a rostok kiindulási hosszát, falfeszülését és az ebből kifejtett aktív erőt[cite: 4]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Helyes állítás keresése",
    q: "Válassza ki a helyes sorrendet a vér lineáris áramlási sebességére vonatkozóan!",
    options: [
      "A. aorta > vena cava inferior > arteriolák > kapillárisok",
      "B. vena cava inferior > aorta > arteriolák > kapillárisok",
      "C. kapillárisok > arteriolák > vena cava > aorta",
      "D. kapillárisok > aorta > arteriolák > vena cava",
      "E. aorta > vena cava > kapillárisok > arteriolák"
    ],
    correct: 0,
    exp: "A lineáris sebesség fordítottan arányos az érkeresztmetszettel: leggyorsabb a legkisebb keresztmetszetű aortában, ezt követik a nagy vénák, majd a hatalmas összegzett keresztmetszetű mikrocirkuláció[cite: 4]."
  },
  {
    ppt: "Szívciklus és hemodinamika",
    type: "Számolásos feladat",
    q: "A Poiseuille-egyenlet szerint mi történik egy ér ellenállásával, ha a sugara a kétszeresére tágul (megduplázódik)?",
    options: [
      "A. az ellenállás a kétszeresére nő",
      "B. az ellenállás a felére csökken",
      "C. az ellenállás 16-szorosára nő",
      "D. az ellenállás az eredeti 1/16-ára (tizenhatodára) csökken",
      "E. a rezisztencia változatlan marad"
    ],
    correct: 3,
    exp: "Az érrezisztancia a sugár 4. hatványával fordítottan arányos (R ~ 1 / r^4). Ha a sugár 2-szeresére nő: 1 / 2^4 = 1/16[cite: 4]."
  },

  // =========================================================================
  // 9. TÉMA: Keringésszabályozás és vegetatív reflexek
  // =========================================================================
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Helyes állítás keresése",
    q: "A perifériás chemoreceptor reflexre jellemző:",
    options: [
      "A. receptorai kizárólag a jobb pitvar falában találhatók",
      "B. aktivációja fokozza a szimpatikus vazomotor tónust és a légzési perctérfogatot",
      "C. soha nem aktiválódik fizikai munkavégzés vagy hipoxia során",
      "D. főként béta-2 receptorokon keresztül közvetlen vazokonstrikciót vált ki",
      "E. nem aktiválható metabolikus acidózissal"
    ],
    correct: 1,
    exp: "A glomus caroticum/aorticum chemoreceptorai az artériás pO2 esésére, pCO2 emelkedésére és a pH csökkenésére aktiválódnak, fokozva a légzést és a szimpatikus tónust[cite: 4]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Helyes állítás keresése",
    q: "A jobb pitvar feszülési receptorainak ingerlésekor fellépő Bainbridge-reflex alacsony kiindulási pulzus mellett:",
    options: [
      "A. csökkenti az artériás középnyomást",
      "B. csökkenti a perctérfogatot",
      "C. reflexesen csökkenti a szimpatikus tónust",
      "D. növeli a szívfrekvenciát (tachycardiát vált ki)",
      "E. növeli a teljes perifériás ellenállást"
    ],
    correct: 3,
    exp: "A pitvari telődés fokozódása a szívfrekvencia növelésével akadályozza meg a vénás vér feltorlódását a szív előtt[cite: 4]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Helyes állítás keresése",
    q: "Mi a következménye a nervus vagus (n. X) fokozott aktivitásának a sinuscsomó sejtjeiben?",
    options: [
      "A. nő a K+-konduktancia (IK,Ach megnyílása) és csökken a spontán diasztolés depolarizáció sebessége",
      "B. nő a transzmembrán Ca2+-konduktancia",
      "C. csökken az extracelluláris K+ koncentráció",
      "D. nő a prepotenciál meredeksége",
      "E. pozitívabbá válik az akciós potenciál küszöbértéke"
    ],
    correct: 0,
    exp: "Az acetilkolin M2 receptorokon át aktiválja a GIRK káliumcsatornákat, ami hiperpolarizációt és a prepotenciál ellaposodását okozza (negatív kronotropia)[cite: 4]."
  },
  {
    ppt: "Keringésszabályozás és vegetatív reflexek",
    type: "Helyes állítás keresése",
    q: "Mi egy denervált (szívátültetésen átesett) személyben a fizikai terhelésre fellépő perctérfogat-növekedés fő mechanizmusa?",
    options: [
      "A. reflexesen csökkenő vagustónus",
      "B. a kamrai end-diasztolés nyomás csökkenése",
      "C. a fokozott vénás visszaáramlás (Frank–Starling mechanizmus) és a keringő katekolaminok hatása",
      "D. az intrakardiális idegdúcok azonnali stimulációja",
      "E. az átültetett szív képtelen növelni a perctérfogatot"
    ],
    correct: 2,
    exp: "Vegetatív beidegzés hiányában az izompumpa által növelt vénás telődés (heterometriás autoreguláció) és a mellékvesevelőből felszabaduló keringő adrenalin biztosítja a választ[cite: 4]."
  },

  // =========================================================================
  // 10. TÉMA: Testfolyadékok, vérképzés és hemosztázis
  // =========================================================================
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Számolásos feladat",
    q: "Egy átlagos 70 kg-os felnőtt összvízkészlete (TBW) fiziológiásan megközelítőleg:",
    options: [
      "A. 15 liter",
      "B. 90 liter",
      "C. 25 liter",
      "D. 11 liter",
      "E. 42 liter (a testtömeg kb. 60%-a)"
    ],
    correct: 4,
    exp: "Normál hidratáltság mellett a testtömeg kb. 60%-a víz: 70 kg * 0,60 = 42 liter[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "Az extracelluláris folyadékterek (ECF) közül a LEGNAGYOBB térfogatú:",
    options: [
      "A. vérplazma (intravasalis folyadék)",
      "B. intersticiális folyadék (szövetközti tér)",
      "C. szemcsarnokvíz",
      "D. liquor cerebrospinalis",
      "E. emésztőnedvek összessége"
    ],
    correct: 1,
    exp: "Az extracelluláris tér (testtömeg 20%-a, ~14 l) 3/4-ét az intersticiális folyadék (~10,5–11 l), míg 1/4-ét a plazma teszi ki[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "A szöveti sejtek közvetlen mikrokörnyezetét képezi:",
    options: [
      "A. az intersticiális tér és folyadék",
      "B. a plazmatér",
      "C. a transzcelluláris kompartment",
      "D. a kapillárisfal basalis laminája",
      "E. a nyirokerek lumene"
    ],
    correct: 0,
    exp: "A sejtek nem közvetlenül a vérplazmával, hanem az intersticiális szövetközti folyadékkal érintkeznek[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "A diapedézis élettani folyamata közvetlen kapcsolatban van a:",
    options: [
      "A. sarlósejtes anaemiával",
      "B. anaemia perniciosával",
      "C. hirtelen szívmegállással",
      "D. véralvadási kaszkáddal",
      "E. neutrofil granulociták (és monociták) kapillárisfalon át történő kivándorlásával (emigrációjával)"
    ],
    correct: 4,
    exp: "A diapedézis az a mechanizmus, amellyel a fehérvérsejtek az endothelsejtek közötti réseken át a keringésből a gyulladt szövetbe vándorolnak[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "A citrátok (pl. nátrium-citrát) kiváló in vitro véralvadásgátlók, mert:",
    options: [
      "A. rendkívül lassan metabolizálódnak",
      "B. megkötik a Hageman-faktort (XII-es faktor)",
      "C. megkötik a K-vitamint a plazmában",
      "D. pufferelik a plazmafehérjéket",
      "E. a Ca2+-ionokkal oldható kelátot képeznek"
    ],
    correct: 4,
    exp: "A citrát megköti az ionizált kalciumot (IV-es faktor), amely nélkülözhetetlen a prothrombináz és tenáz komplexek aktivitásához[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "Az egészséges emberi vérplazma nátriumkoncentrációja normálisan:",
    options: [
      "A. kb. 100 mmol/l",
      "B. kb. 120 mmol/l",
      "C. pontosan 156 mmol/l",
      "D. kb. 135 - 145 mmol/l (átlagosan 140 mmol/l)",
      "E. kb. 160 mmol/l"
    ],
    correct: 3,
    exp: "A fiziológiás plazma-nátrium referenciaértéke 135–145 mmol/l[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "Az emberi éhomi vérplazma glükózkoncentrációja normálisan:",
    options: [
      "A. 2 - 3 mmol/ml",
      "B. 4 - 5,5 nmol/l",
      "C. 2 - 3 mmol/l",
      "D. 4 - 5,5 mmol/ml",
      "E. 4,0 - 5,5 mmol/l"
    ],
    correct: 4,
    exp: "Az éhomi vércukorszint normál tartománya 4,0–5,5 mmol/l (kb. 70–100 mg/dl)[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "Hozzávetőleg mennyi a vér egy mikroliterében (mm3) a vörösvértestek (vvt) átlagos száma?",
    options: [
      "A. 50 000 / mikroliter",
      "B. 4,5 - 5,0 millió / mikroliter (4,5 - 5,0 * 10^6 / mm3)",
      "C. 1 000 000 / mikroliter",
      "D. 100 000 / mikroliter",
      "E. 500 000 / mikroliter"
    ],
    correct: 1,
    exp: "Egészséges felnőttekben a vvt-szám nőknél 4,0–5,0 millió/ul, férfiaknál 4,5–5,5 millió/ul (4,5–5,5 * 10^12/l)[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "Felnőtt egyén vérében a vérlemezkék (thrombocyták) száma normálisan:",
    options: [
      "A. 150 000 - 350 000 / mikroliter",
      "B. 700 000 / mikroliter",
      "C. 1 000 000 / mikroliter",
      "D. 700 000 / ml",
      "E. 300 000 / ml"
    ],
    correct: 0,
    exp: "A normál thrombocytaszám 150 000–350 000 / mikroliter (150–350 * 10^9/l)[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "Felnőtt ember vérében a leukocyták (fehérvérsejtek) száma átlagosan:",
    options: [
      "A. 4 000 - 10 000 / mikroliter (átlagosan kb. 6 000 - 8 000 / mikroliter)",
      "B. 1 000 / mikroliter",
      "C. 700 000 / mikroliter",
      "D. 1 000 / ml",
      "E. 7 000 / ml"
    ],
    correct: 0,
    exp: "A fehérvérsejtszám fiziológiás referenciaértéke 4 000–10 000 / mikroliter (4–10 G/l)[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "Az emberi vérplazma összes fehérjekoncentrációja normálisan:",
    options: [
      "A. 25 - 35 g/l",
      "B. 60 - 80 g/l",
      "C. 60 - 80 mg/l",
      "D. 150 - 170 g/l",
      "E. 150 - 170 mg/l"
    ],
    correct: 1,
    exp: "A plazmafehérjék fiziológiás koncentrációja 60–80 g/l[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Számolásos feladat",
    q: "Mennyi a vizsgált személy vörösvértestjeinek átlagos hemoglobintartalma (MCH), ha a vvt-száma 3 T/l, a hemoglobin koncentrációja pedig 120 g/l?",
    options: [
      "A. 40 ng",
      "B. 40%",
      "C. 360 mikrog",
      "D. 40 g/l",
      "E. 40 pg/vvt"
    ],
    correct: 4,
    exp: "MCH = Hemoglobin (g/l) / Vvt-szám (10^12/l) = 120 / 3 = 40 pg/sejt[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "Az alábbiak közül melyik IGAZ a csontvelői vérlemezkeképződésre (thrombopoiesis)?",
    options: [
      "A. Nagymértékben csökken lépmegnagyobbodás esetén",
      "B. Fehérvérsejtek citoplazmájának leválásával történik",
      "C. Éretlen diploid őssejtek direkt osztódásával alakul ki",
      "D. A csontvelői megakaryocyták citoplazmanyúlványainak fragmentálódásával keletkeznek",
      "E. A folyamathoz elengedhetetlen a von Willebrand-faktor közvetlen jelenléte"
    ],
    correct: 3,
    exp: "A vérlemezkék sejtmag nélküli citoplazmatöredékek, melyek a csontvelői óriássejtek (megakaryocyták) feldarabolódásával jönnek létre[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "A vese és a szövetek oxigenizációjának csökkenése (hipoxia) közvetlen kiváltó oka:",
    options: [
      "A. a keringő erythrocyták azonnali pusztulásának",
      "B. a fehérvérsejtek számának gyors növekedésének",
      "C. az erythropoetin (EPO) termelés növekedésének a vesében",
      "D. a thrombocyta-aggregáció gátlásának",
      "E. a hemoglobin glikációjának"
    ],
    correct: 2,
    exp: "A csökkent szöveti oxigéntenzió a HIF-1 transzkripciós faktor révén fokozza a vese peritubuláris intersticiális sejtjeiben az EPO termelését[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "Válassza ki az alábbiak közül a klasszikus vashiányos anaemiára jellemző laboratóriumi profilt!",
    options: [
      "A. Anaemia normál MCV és emelkedett MCH mellett",
      "B. Anaemia nagyobb MCV és nagyobb MCH mellett",
      "C. Anaemia makrocitózissal és kisebb MCH-val",
      "D. Anaemia nagyobb MCV és normál MCH mellett",
      "E. Anaemia microcytosissal (alacsony MCV) és a fiziológiásnál kisebb MCH-értékkel (hypochromia)"
    ],
    correct: 4,
    exp: "Vashiányban csökken a hemoglobin szintézise, emiatt a vörösvértestek kisebbek (mikrociter, MCV < 80 fl) és világosabbak (hipokróm, MCH < 27 pg)[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "A vér festékindexének (vagy MCH értékének) meghatározásához feltétlenül szükséges ismerni:",
    options: [
      "A. a vörösvértestek átlagos térfogatát (MCV) és a haematocritot",
      "B. a vörösvértestszámot és a vérplazma ozmolaritását",
      "C. a vér hemoglobin koncentrációját és a vörösvértestszámot",
      "D. a haematocritot és a fehérvérsejtszámot",
      "E. a vér össztérfogatát és a szérum vas koncentrációját"
    ],
    correct: 2,
    exp: "A festékindex és az MCH az egységnyi térfogatban lévő hemoglobin koncentráció és a vvt-szám hányadosából adódik[cite: 4]."
  },
  {
    ppt: "Testfolyadékok, vérképzés és hemosztázis",
    type: "Helyes állítás keresése",
    q: "A vérzési idő (pl. Duke-teszt) kóros megnyúlásának oka lehet:",
    options: [
      "A. kumarinkezelés önmagában (plazmatikus alvadás gátlása)",
      "B. izolált K-vitamin felszívódási zavar normál thrombocytaszámmal",
      "C. hemofília A (VIII. faktor hiány)",
      "D. hemofília B (IX. faktor hiány)",
      "E. nagy mennyiségű aszpirin alkalmazása (thrombocyta cyclooxigenáz gátlás)"
    ],
    correct: 4,
    exp: "A vérzési idő a primer hemosztázist (vérlemezke-funkciót) méri; az aszpirin gátolja a thrombocyta-aggregációt, ami megnyújtja a vérzési időt, míg a klasszikus véralvadási faktorhiányok (pl. hemofília) az alvadási időt hosszabbítják meg[cite: 4]."
  },

  // =========================================================================
  // 11. TÉMA: Légzésélettan és gáztranszport
  // =========================================================================
  {
    ppt: "Légzésélettan és gáztranszport",
    type: "Helyes állítás keresése",
    q: "Melyik kombináció adja meg helyesen a szisztémás nagyvérkörben a nyugalmi kevert VÉNÁS vér gáztenzióinak nagyságát?",
    options: [
      "A. pO2: 40 Hgmm, pCO2: 46 Hgmm",
      "B. pO2: 100 Hgmm, pCO2: 40 Hgmm",
      "C. pO2: 46 Hgmm, pCO2: 40 Hgmm",
      "D. pO2: 95 Hgmm, pCO2: 46 Hgmm",
      "E. pO2: 40 Hgmm, pCO2: 40 Hgmm"
    ],
    correct: 0,
    exp: "A perifériás vénás vér átlagos oxigéntenziója 40 Hgmm, szén-dioxid tenziója pedig 46 Hgmm (az artériás vér 95-100 Hgmm pO2 és 40 Hgmm pCO2 értékeivel szemben)[cite: 4]."
  },
  {
    ppt: "Légzésélettan és gáztranszport",
    type: "Helyes állítás keresése",
    q: "A vérben a CO2 döntő hányada (~70%) milyen formában transzportálódik?",
    options: [
      "A. karbamid molekulákban",
      "B. a szénsav-anhidráz (karboanhidráz) enzimhez tartósan kötve",
      "C. fizikailag oldott bikarbonát (HCO3-) formájában a plazmában",
      "D. karbamino-hemoglobin formájában a vörösvértestekben",
      "E. fizikailag szabadon oldott szén-dioxidként"
    ],
    correct: 2,
    exp: "A szöveti kapillárisokban a vvt-be belépő CO2-ből szénsav, majd bikarbonát keletkezik, mely az AE1 transzporteren át a plazmába lép; ez teszi ki a CO2-transzport mintegy 70%-át[cite: 4]."
  },
  {
    ppt: "Légzésélettan és gáztranszport",
    type: "Helyes állítás keresése",
    q: "Melyik állítás HELYES a szén-monoxid (CO) hemoglobinhoz kötődésére vonatkozóan?",
    options: [
      "A. A hemoglobin CO iránti affinitása több mint 200-szor nagyobb, mint az O2 iránti affinitása",
      "B. Cianidion jelenléte elengedhetetlen a kötődéshez",
      "C. CO kötődésekor carbamino-haemoglobin alakul ki",
      "D. A kötődés során a hem Fe(2+) ionja azonnal Fe(3+)-má oxidálódik",
      "E. Nem okoz eltolódást az oxigén-telítési görbe lefutásában"
    ],
    correct: 0,
    exp: "A CO rendkívül erősen kötődik a hemhez (kb. 210-250-szeres affinitás), karboxihemoglobint (HbCO) képez, és az O2-disszociációs görbét balra tolja, gátolva a szöveti oxigénleadást[cite: 4]."
  }
];

// Kérdések beolvasása az index központi listájába
window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS.concat(pdf10Questions);