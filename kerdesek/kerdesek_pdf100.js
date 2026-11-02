/**
 * Orvosi / Fogorvosi Élettan Kérdésbank - 2. ZH / 2. Blokk (zh2/2)
 * Témakörök:
 * - 20. Előadás: A szív mechanikája, Laplace törvénye, szarkomer feszülés
 * - 22. Előadás: A perctérfogat autoregulációja (Frank–Starling törvény, Preload, Afterload, Anrep-effektus)
 * - 23. Előadás: A szívműködés neuroendokrin szabályozása, szív munkája, szívelégtelenség patofiziológiája
 */

window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS || [];

const zh2_2_Questions = [
  // =========================================================================
  // I. FRANK-STARLING MECHANIZMUS, PRELOAD ÉS AFTERLOAD (20. & 22. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "A szív előterhelését (preload) elsődlegesen meghatározó tényező:",
    options: [
      "A. Az aorta szisztolés csúcsnyomása",
      "B. A kamra végdiasztolés térfogata (EDV) és falfeszülése",
      "C. Az érpálya teljes perifériás ellenállása (TPR)",
      "D. A szimpatikus és paraszimpatikus tónus pillanatnyi aránya",
      "E. Az Anrep-effektus"
    ],
    correct: 1,
    exp: "A preload (előterhelés) az a falfeszülés, amely a diasztolé legvégén terheli a kamrát; közvetlenül arányos a végdiasztolés térfogattal (EDV) és a vénás telődéssel [PPT: 3.20, 4.7. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "A szív utóterhelését (afterload) elsődlegesen meghatározó keringési tényező:",
    options: [
      "A. A centrális vénás nyomás (CVP)",
      "B. A kamra végdiasztolés térfogata (EDV)",
      "C. Az érpálya teljes perifériás ellenállása (TPR) és az artériás vérnyomás",
      "D. A Frank–Starling mechanizmus",
      "E. A bal kamrai compliance növekedése"
    ],
    correct: 2,
    exp: "Az utóterhelés (afterload) az az ellenállás / falfeszülés, amelyet a kamrának az ejekció során le kell küzdenie; elsősorban az artériás középnyomással és a TPR-rel arányos [PPT: 3.18, 4.4. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Többszörös választás",
    q: "A Frank–Starling törvényre vonatkozóan mely állítás(ok) IGAZ(ak)?\n1. Azt mondja ki, hogy a szívizom összehúzódási ereje a szarkomerek kiindulási (végdiasztolés) hosszának függvénye\n2. Magyarázatot ad arra, hogyan tartható fenn változatlan pulzustérfogat az utóterhelés hirtelen emelkedése után is\n3. Magyarázatot ad arra, hogy miért egyenlő hosszú távon a jobb és a bal kamra perctérfogata\n4. Lényege, hogy a rostmegnyúlás fokozza a szarkoplazmatikus retikulumból felszabaduló kalcium mennyiségét",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 0,
    exp: "Az 1., 2. és 3. állítás a Frank–Starling törvény klasszikus élettani feladatait írja le. A 4. állítás hamis: a nyújtás nem a felszabaduló kalcium mennyiségét növeli, hanem a Troponin C Ca2+-érzékenységét és a filamentumok geometriai átfedését javítja [PPT: 4.10, 4.13, 4.14. dia]!"
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "Hirtelen megnövekedett utóterhelés (afterload emelkedés) esetén a Frank–Starling adaptáció révén kialakuló ÚJ egyensúlyi állapotban:",
    options: [
      "A. A pulzustérfogat (SV) tartósan a felére csökken",
      "B. A végdiasztolés térfogat (EDV) csökken, a végszisztolés térfogat (ESV) nem változik",
      "C. A pulzustérfogat (SV) változatlan marad, miközben az EDV és az ESV megnő, az ejekciós frakció (EF) pedig csökken",
      "D. Az ejekciós frakció jelentősen megnő",
      "E. A kamra szisztolés csúcsnyomása csökken"
    ],
    correct: 2,
    exp: "Az afterload ugrásakor az első ciklusban csökken az ürülés, emiatt nő az ESV. A beáramló vénás vér erre rárakódva megemeli az EDV-t; a megnyúlt kamra erősebben húzódik össze, így az SV visszaáll a normálisra, de nagyobb végtérfogatok (EDV és ESV nő) és alacsonyabb EF mellett [PPT: 4.4, 4.6. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Relációanalízis",
    q: "Ha megváltozik a szív felé áramló vénás telődés, annak hatása a kamrai pulzustérfogaton azonnal megjelenik,\nMERT\na kamrai pulzustérfogat hirtelen megváltozása szintén azonnal, időkésés nélkül módosítja a jobb szívfélbe visszaérkező vénás beáramlást.",
    options: [
      "A. Az állítás és az indoklás is igaz, köztük összefüggés van",
      "B. Az állítás és az indoklás is igaz, de nincs köztük összefüggés",
      "C. Az állítás igaz, az indoklás hamis",
      "D. Az állítás hamis, az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 2,
    exp: "Alapvető keringési aszimmetria: a vénás telődés azonnal megnyújtja a kamrát (azonnali válasz az SV-n), de a kamrából kilökött vérnek át kell folynia a teljes nagyvérköri érpályán és mikrocirkuláción, mire visszajut a vénás oldalra (jelentős időkésés!) [PPT: 4.3. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "A Frank–Starling törvény sejtélettani alapját az alábbi mechanizmusok képezik, KIVÉVE:",
    options: [
      "A. A Troponin C kalcium iránti affinitásának hosszfüggő növekedése",
      "B. Az aktomiozin kereszthidak optimálisabb átfedése a fiziológiás szarkomerhosszon",
      "C. A filamentumok közötti távolság (lattice spacing) csökkenése a Titin feszülése miatt",
      "D. A szarkoplazmatikus retikulum Cav1.2 csatornák általi masszív kalcium-túltöltődése",
      "E. A szarkomer megnyúlása a passzív elasztikus feszülés meredek emelkedésével jár"
    ],
    correct: 3,
    exp: "A Frank–Starling mechanizmus tisztán rosthossz-függő (heterometriás) folyamat: fluoreszcens mérések igazolták, hogy a szisztolés kalciumtranszfer nem növekszik megnyújtáskor [PPT: 4.10, 4.13. dia]!"
  },

  // =========================================================================
  // II. LAPLACE TÖRVÉNYE ÉS A KAMRAMECHANIKA (20. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "A gömb/henger alakú üreges szervekre érvényes Laplace-törvény (P = 2T / R) alapján miért védi a bal kamrát a vastagabb fal és a kisebb görbületi sugár?",
    options: [
      "A. Mert a kisebb belső sugár (R) miatt azonos falfeszülés mellett sokkal nagyobb intrakavitális nyomás (P) hozható létre",
      "B. Mert a vastag kamrafal növeli az izomrostok belső compliance-ét",
      "C. Mert a kisebb sugár miatt a kamra nem igényel pozitív töltőnyomást",
      "D. Mert a bal kamrában a szarkomerek hossza nem éri el az 1,6 mikrométert",
      "E. Mert a jobb kamrához képest a bal kamra fala nem tartalmaz titin fehérjét"
    ],
    correct: 0,
    exp: "Laplace törvénye szerint P = 2T / R. Kisebb görbületi sugár mellett a szívizomrostok falfeszülése hatékonyabban transzformálódik magas intrakavitális hidrosztatikai nyomássá (120 Hgmm vs. 25 Hgmm) [PPT: 2.23, 2.24. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "A Laplace-törvény értelmében mi a szívizomzat kitágulásának (kamrai dilatáció, R megnövekedése) 'sajnálatos következménye' szívelégtelenségben?",
    options: [
      "A. A tágult kamrában lecsökken a vérnyomás felépítéséhez szükséges oxigénfogyasztás",
      "B. A nagyobb belső sugár (R) miatt azonos szisztolés vérnyomás felépítéséhez a szívizomrostoknak sokkal nagyobb falfeszülést (T) kell kifejteniük, ami növeli az oxigénigényt",
      "C. A kamrafal feszülése nullára zuhan az ejekció alatt",
      "D. Az ejekciós frakció automatikusan 80% fölé emelkedik",
      "E. A dilatáció megvédi a szívizmot az ischaemiától"
    ],
    correct: 1,
    exp: "Mivel T = (P * R) / 2, a tágult kamrában (nagyobb R) ugyanakkora szisztolés nyomáshoz sokkal nagyobb feszülést kell kifejteni. Mivel a falfeszülés a szív oxigénfogyasztásának fő meghatározója, a tágult szív rengeteg energiát éget el, ami tovább súlyosbítja az elégtelenséget [PPT: 2.25. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Relációanalízis",
    q: "A szív élettani működése során elengedhetetlen a pozitív centrális vénás töltőnyomás (CVP > 0 Hgmm),\nMERT\na szív mechanikailag nyomópumpaként működik, negatív intratorakális vagy intrakavitális szívóhatással önmagában nem képes feltelődni.",
    options: [
      "A. Az állítás és az indoklás is igaz, köztük összefüggés van",
      "B. Az állítás és az indoklás is igaz, de nincs köztük összefüggés",
      "C. Az állítás igaz, az indoklás hamis",
      "D. Az állítás hamis, az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "'A szív nem szívópumpa!': a kamrák passzív diasztolés telődéséhez elengedhetetlen a pozitív pitvari töltőnyomás; negatív nyomás esetén a kamrafal kollabálna [PPT: 2.28. dia]."
  },

  // =========================================================================
  // III. AZ ANREP-EFFEKTUS ÉS A LÉPCSŐJELENSÉG (21. & 22. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "Mi az Anrep-effektus lényege az utóterhelés hirtelen, tartós megemelkedésekor?",
    options: [
      "A. Azonnali vagus-aktiváció, amely bradycardiával védi a kamrákat",
      "B. A korai Frank–Starling tágulatot egy lassú (10–15 perces) autokrin inotrópia-fokozódás (Slow Force Response) követi, ami megszünteti a tágulatot és helyreállítja az ejekciós frakciót",
      "C. A kamraizomzat tartós merevgörcse (tetanusza)",
      "D. A pulzustérfogat azonnali, végleges lezuhanása",
      "E. A szívizomsejtek szimpatikus denervációja"
    ],
    correct: 1,
    exp: "Az Anrep-effektus kétfázisú: az 1 percen belüli kamratágulatot egy 10-15 perc alatt kifejlődő lassú erőnövekedés követi, melynek során a szarkomerek visszarövidülnek és a méret normalizálódik [PPT: 4.15. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "Milyen autokrin/parakrin mediátorok és transzporterek indítják el a lassú erőválaszt (Slow Force Response) az Anrep-effektus molekuláris mechanizmusában?",
    options: [
      "A. Acetilkolin és muszkarinos M2 receptorok",
      "B. Lokális Angiotenzin II és Endothelin-1 felszabadulás -> NHE-1 aktiváció -> megnövekedett belső [Na+]i -> NCX reverz mód -> emelkedett Ca2+-beáramlás",
      "C. A SERCA2a gátlása foszfolambán által",
      "D. A troponin C lebontása proteázokkal",
      "E. A nátriumcsatornák teljes inaktiválódása"
    ],
    correct: 1,
    exp: "A kamrafal feszülése Ang II és ET-1 felszabadulást vált ki, ami ROS és ERK1/2 közvetítésével foszforilálja a Na+/H+ cserélőt (NHE-1). A nátriumdúsulás az NCX reverz üzemmódján át kalciumtöbbletet visz be a sejtbe, növelve az inotrópiát [PPT: 4.16. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "A Bowditch-féle pozitív lépcsőjelenség (Treppe) sejtélettani mechanizmusa:",
    options: [
      "A. Magasabb frekvencián a szívizomsejtbe akciós potenciálonként belépő Na+-t a Na+/K+-pumpa a rövidülő diasztolé alatt nem tudja maradéktalanul eltávolítani, a relatív Na+-dúsulás gátolja az NCX-et, és túltölti az SR-t kalciummal",
      "B. A szívizom kifáradása miatti ATP-hiány",
      "C. A paraszimpatikus idegvégződések kimerülése",
      "D. A szarkomerek irreversibilis megrövidülése",
      "E. A troponin I leválása a vékony filamentumról"
    ],
    correct: 0,
    exp: "Magasabb szívfrekvencián ütésről ütésre nő a kontrakció ereje, mert a nátriumpumpa relatív lemaradása miatt a citoplazmatikus Ca-ürítés lassul, és az SR kalciumraktára maximálisan feltöltődik [PPT: 3.22. dia]."
  },

  // =========================================================================
  // IV. NEUROENDOKRIN SZABÁLYOZÁS ÉS SEJTSZINTŰ KASZKÁD (23. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "A szív összehúzódási erejének (kontraktilitás / inotrópia) növekedése homeometriás szabályozás révén:",
    options: [
      "A. Szigorúan a szarkomerek kiindulási végdiasztolés megnyúlásán alapul",
      "B. A szisztolés citoplazmatikus szabad kalciumszint és az aktív kereszthidak számának növekedésén alapul, a kiindulási rosthossztól (preload) függetlenül",
      "C. Kizárólag a szívfrekvencia esésével együtt valósulhat meg",
      "D. Mindig az ejekciós frakció csökkenésével jár együtt",
      "E. Csak izolált, denervált szíven figyelhető meg"
    ],
    correct: 1,
    exp: "A homeometriás szabályozás (inotrópia) lényege, hogy a kontrakciós erő a rosthossztól függetlenül nő a citoplazmatikus [Ca2+]i transzfer emelkedése révén [PPT: 2.31, 5.9. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "A szimpatikus idegrendszer szívre gyakorolt hatásai közül mi a pozitív LÜZITROP hatás és mi annak sejtélettani alapja?",
    options: [
      "A. Az ingerületvezetési sebesség gyorsulása az AV-csomóban",
      "B. A szívizom elernyedésének (relaxációjának) meggyorsulása, amit a foszfolambán (PLN) PKA általi foszforilációja és a SERCA2a felpörgése okoz",
      "C. Az ingerküszöb csökkenése a munkaizomzatban",
      "D. A nyugalmi membránpotenciál hiperpolarizációja",
      "E. A spontán diasztolés depolarizáció ellaposodása"
    ],
    correct: 1,
    exp: "A pozitív lüzitrópia a gyorsabb relaxációt jelenti. A foszforilált foszfolambán leválik a SERCA2a-ról, így a kalciumpumpa maximális sebességgel szippantja vissza a kalciumot az SR-be, ami magas szívfrekvenciánál biztosítja a kamrák újratelődését [PPT: 2.9, 5.5, 5.6. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Többszörös választás",
    q: "Milyen fehérjéket foszforilál a szívizomsejtben a béta1-adrenerg stimuláció során aktiválódó Protein Kináz A (PKA)?\n1. L-típusú Ca2+-csatornák (Cav1.2) – nyitási valószínűség nő\n2. Rianodin receptorok (RyR2) – Ca-érzékenység és felszabadulás fokozódik\n3. Foszfolambán (PLN) – leválik a SERCA2a-ról, gyorsul a Ca-visszavétel\n4. Troponin I (TnI) – gyorsítja a kalcium leválását a vékony filamentumról",
    options: [
      "A. ha csak az 1., 2. és 3. igaz",
      "B. ha csak az 1. és 3. igaz",
      "C. ha csak a 2. és 4. igaz",
      "D. ha csak a 4. igaz",
      "E. ha az összes válasz igaz"
    ],
    correct: 4,
    exp: "A PKA szimultán koordinált foszforilációval növeli az összehúzódási erőt (Cav1.2, RyR2), és ezzel párhuzamosan gyorsítja az elernyedést is (PLN, TnI), létrehozva a pozitív inotrop és lüzitrop hatást [PPT: 5.6. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "A paraszimpatikus idegrendszer (nervus vagus) szívhatásaira jellemző:",
    options: [
      "A. Fő transzmittere a noradrenalin, receptora az alfa-1 adrenerg receptor",
      "B. Elsősorban a sinuscsomót és az AV-csomót idegzi be: M2 receptorokon át Gi-fehérjével gátolja az adenilát-ciklázt és megnyitja az IK,ACh csatornákat",
      "C. Kifejezett pozitív dromotrop és batmotrop hatást fejt ki",
      "D. A kamrai izomzat kontraktilitását a szimpatikus hatásnál erőteljesebben serkenti",
      "E. Fiziológiásan megszünteti a kamrák refrakteritását"
    ],
    correct: 1,
    exp: "A nervus vagus acetilkolint ürít az M2 muszkarinos receptorokra, csökkenti a cAMP-t (Gi) és K+-csatornákat nyit, ami bradycardiát és lassult AV-átvezetést eredményez [PPT: 5.7. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Relációanalízis",
    q: "Egy szívátültetésen átesett (denervált szívű) beteg nyugalmi pulzusa kb. 100–110 ütés/perc,\nMERT\negészséges emberben nyugalomban a folyamatos paraszimpatikus (vagus) tónus fékezi le a sinuscsomó veleszületett intrinsic frekvenciáját 70/perc értékre.",
    options: [
      "A. Az állítás és az indoklás is igaz, köztük összefüggés van",
      "B. Az állítás és az indoklás is igaz, de nincs köztük összefüggés",
      "C. Az állítás igaz, az indoklás hamis",
      "D. Az állítás hamis, az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "Nyugalomban a szívműködést a vagustónus uralja; a vagusfék kiesésekor (pl. denerváció, atropin) a szív a sinuscsomó intrinsic alapütemével (~100-110/perc) ver [PPT: 1.14, 5.8. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "Hogyan befolyásolják a pajzsmirigyhormonok (T3/T4) a szívműködést?",
    options: [
      "A. Szelektíven gátolják a szív béta1-adrenerg receptorait",
      "B. Növelik a szívizom béta1-receptorainak sűrűségét (upreguláció), fokozzák a SERCA2a expresszióját és a gyorsabb alfa-MHC szintézisét -> tachycardia és megnövekedett kontraktilitás",
      "C. Negatív inotrop és negatív kronotrop hatást fejtenek ki",
      "D. Blokkolják az L-típusú Ca2+-csatornákat",
      "E. Megnyújtják a kamrai akciós potenciál platóját 800 ms-ra"
    ],
    correct: 1,
    exp: "A pajzsmirigyhormonok fokozzák a katekolamin-érzékenységet (béta-receptor upreguláció) és gyorsítják a kalcium-visszavételt (SERCA), ami hyperthyreosisban palpitációt, tachycardiát és megnövekedett perctérfogatot eredményez [PPT: 5.14. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Relációanalízis",
    q: "A pajzsmirigyhormonok fokozzák a katekolaminok szívre gyakorolt hatását,\nMERT\na tiroxin növeli a szívizom béta-adrenerg receptorainak számát (permisszív hatás).",
    options: [
      "A. Az állítás és az indoklás is igaz, köztük összefüggés van",
      "B. Az állítás és az indoklás is igaz, de nincs köztük összefüggés",
      "C. Az állítás igaz, az indoklás hamis",
      "D. Az állítás hamis, az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A T3/T4 növeli a funkcionális béta-adrenerg receptorok expresszióját a szívben, ez képezi a katekolaminok iránti fokozott kardiovaszkuláris érzékenység alapját [PPT: 5.14. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "Mi történik a perctérfogattal (CO), ha a szívfrekvencia extrém magasra emelkedik (HR > 160–180/perc)?",
    options: [
      "A. A perctérfogat a frekvenciával egyenes arányban tovább növekszik a végtelenségig",
      "B. A kamrai diasztolés telődési idő oly mértékben lerövidül, hogy a kamrának nincs ideje megtelni vérrel -> a pulzustérfogat zuhanása miatt a perctérfogat csökkenni kezd",
      "C. A kamrai végdiasztolés térfogat eléri a 300 ml-t",
      "D. Az aortanyomás automatikusan nullára esik",
      "E. A perctérfogat nem függ a szívfrekvenciától"
    ],
    correct: 1,
    exp: "Szélsőséges tachycardiánál a diasztolé kritikusan beszűkül, a kamra telődése elégtelenné válik, emiatt a pulzustérfogat drasztikus esése magával rántja a perctérfogatot is [PPT: 5.16. dia]."
  },

  // =========================================================================
  // V. A SZÍV METABOLIZMUSA ÉS ENERGETIKÁJA (23. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "Milyen energiaforrásokat hasznosít az emberi szívizomzat fiziológiás nyugalmi körülmények között az ATP termeléséhez?",
    options: [
      "A. Kizárólag anaerob glikolízisből származó glükózt",
      "B. 60–90%-ban szabad zsírsavak béta-oxidációját, 10–40%-ban szénhidrátokat (glükóz, laktát, piruvát)",
      "C. Kizárólag kreatin-foszfátot külső oxigén nélkül",
      "D. Túlnyomórészt fehérjéket és aminosavakat",
      "E. Csak a májban képződött glikogént"
    ],
    correct: 1,
    exp: "A szív szinte kizárólag aerob oxidatív foszforilációval működik a hatalmas mitokondrium-tömegében; fő szubsztrátjai a szabad zsírsavak, de kiválóan égeti a vázizmok által termelt laktátot is [PPT: 2.5, 5.19. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "A szívizomzat által felhasznált hatalmas mennyiségű ATP (napi 5–6 kg!) döntő többségét (~70–75%) mire fordítja a sejt?",
    options: [
      "A. A sejtmagi DNS-replikációra",
      "B. Mechanikai erőgenerálásra és iontranszportra (Aktomiozin-ATPáz ~55%, SERCA2a Ca-pumpa ~15%, Na+/K+-pumpa ~5%)",
      "C. Hőleadásra a bőr felé",
      "D. Zsírsavak szintézisére a citoplazmában",
      "E. Glikogén raktározására"
    ],
    correct: 1,
    exp: "A kardiális ATP-felhasználás oroszlánrészét a kontraktilis kereszthidak csúszása (aktomiozin-ATPáz) és a relaxációhoz szükséges kalcium visszaszívása (SERCA2a) emészti fel [PPT: 5.18. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "A bal kamra által egy szívciklus alatt végzett külső mechanikai munka (Stroke Work) komponenseire igaz:",
    options: [
      "A. A külső munka 95–99%-a nyomási/térfogati munka (Wp = SV * MAP), míg a vér felgyorsítására fordított kinetikai munka nyugalomban mindössze 1–5%",
      "B. A kinetikai munka teszi ki a munka több mint 80%-át",
      "C. A szív külső munkája nem felel meg a PV-hurok belső területének",
      "D. A nyomási munka független a bal kamra által kilökött vértérfogattól",
      "E. A szívnek nem kell munkát végeznie az aortanyomással szemben"
    ],
    correct: 0,
    exp: "A külső munka szinte egésze a vér nyomásának felépítésére és az artériás középnyomással szembeni továbbítására fordítódik; a PV-hurok területe pontosan ezt a nyomási pulzusmunkát adja meg [PPT: 3.16, 3.17. dia]."
  },

  // =========================================================================
  // VI. SZÍVELÉGTELENSÉG ÉS FARMAKOLÓGIA (23. ELŐADÁS)
  // =========================================================================
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "A bal szívfél elégtelenségének (Left-sided heart failure) vezető klinikai tünetei:",
    options: [
      "A. Hasi ascites és májmegnagyobbodás (hepatomegalia)",
      "B. Tágult nyaki vénák és bokaödéma",
      "C. Kisvérköri (pulmonalis) vénás pangás: terhelési dyspnoe, orthopnoe, paroxysmalis nocturnalis dyspnoe és tüdőödéma",
      "D. A centrális vénás nyomás (CVP) izolált emelkedése",
      "E. Portális hipertónia"
    ],
    correct: 2,
    exp: "A bal kamra elégtelenségekor a vér a bal pitvarba és a tüdővénákba torlódik vissza, ami kisvérköri hidrosztatikai nyomásemelkedést, légszomjat (dyspnoe, orthopnoe) és tüdővizenyőt okoz [PPT: 5.23. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "A jobb szívfél elégtelenségének (Right-sided heart failure / Cor pulmonale) vezető klinikai tünetei:",
    options: [
      "A. Tüdőödéma és habos köpetürítés",
      "B. Nagyvérköri vénás pangás: megnövekedett centrális vénás nyomás (CVP), tágult nyaki vénák, hepatomegalia, ascites és szimmetrikus alsó végtagi bokaödéma",
      "C. Izolált bal kamra hypertrophia",
      "D. Az aorta billentyű záródási elégtelensége",
      "E. Az artériás pulzusnyomás megduplázódása"
    ],
    correct: 1,
    exp: "A jobb kamra elégtelensége a vena cava rendszerében okoz pangást, ami megnövekedett CVP-hez, májpangáshoz és a gravitációnak kitett perifériás ödémákhoz vezet [PPT: 5.21, 5.23. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "Hogyan módosítja a Frank–Starling kamrafunkciós görbét a szívelégtelenség gyógyszeres kezelésében alkalmazott diuretikum (pl. furosemid)?",
    options: [
      "A. Közvetlenül növeli a szívizom összehúzódási erejét és a görbét függőlegesen felfelé emeli",
      "B. Nátrium- és vízürítéssel csökkenti a keringő plazmavolument és a végdiasztolés töltőnyomást (preload), így a munkapontot vízszintesen balra tolja, megszüntetve a pangásos és ödémás tüneteket",
      "C. Tágítja az arteriolákat, csökkentve az afterloadot",
      "D. Megnyújtja a szívizom akciós potenciálját",
      "E. Gátolja a szív béta1-receptorait"
    ],
    correct: 1,
    exp: "A diuretikum az intravascularis volumen csökkentésével mérsékli a preloadot (EDP), így a munkapontot balra mozgatva kihozza a beteget az életveszélyes tüdőödémás és pangásos zónából [PPT: 5.24. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "Hogyan módosítja a Frank–Starling kamrafunkciós görbét egy pozitív inotróp szer (pl. digoxin, dobutamin) szívelégtelenségben?",
    options: [
      "A. A lapos, elégtelen görbét függőlegesen felfelé emeli egy magasabb teljesítményű szintre, növelve az összehúzódási erőt és a pulzustérfogatot",
      "B. Kizárólag a végdiasztolés nyomást növeli",
      "C. Vízszintesen balra tolja a munkapontot változatlan kontraktilitás mellett",
      "D. Csökkenti a szisztolés nyomásemelkedés meredekségét (dP/dt)",
      "E. Megnöveli az utóterhelést (afterload)"
    ],
    correct: 0,
    exp: "A pozitív inotróp szerek a citoplazmatikus Ca2+-szint emelésével növelik a szív saját erejét, így a kamrafunkciós görbe felfelé és balra tolódik el [PPT: 2.31, 5.11, 5.24. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Helyes állítás keresése",
    q: "Mi a kombinált terápia (Inotróp szer + Vazodilatátor + Diuretikum) célja krónikus dekompenzált szívelégtelenségben a kamrafunkciós görbén?",
    options: [
      "A. A pulzustérfogat nullára csökkentése a szív pihentetésére",
      "B. A szívfrekvencia tartós 180/perc fölé emelése",
      "C. A pulzustérfogat normalizálása úgy, hogy a végdiasztolés töltőnyomás (preload) az alacsony, biztonságos tartományba kerül, megszüntetve a tüdő- és perifériás pangást",
      "D. A teljes perifériás ellenállás megkétszerezése",
      "E. A bal kamra dilatációjának fokozása"
    ],
    correct: 2,
    exp: "Az inotróp emeli az erőt, a vazodilatátor csökkenti az afterloadot, a vízhajtó pedig megszünteti a tüdőödémát okozó magas töltőnyomást, visszaállítva a fiziológiás munkapontot [PPT: 5.24. dia]."
  },
  {
    ppt: "zh2/2",
    type: "Relációanalízis",
    q: "A szívizomsejtek hypoxia és koszorúér-elzáródás esetén másodperceken belül elveszítik kontraktilis funkciójukat,\nMERT\na szívizomzat nem rendelkezik számottevő ATP-raktárral, és az anaerob glikolízis képtelen fedezni a mechanikai munkához szükséges hatalmas energiaigényt.",
    options: [
      "A. Az állítás és az indoklás is igaz, köztük összefüggés van",
      "B. Az állítás és az indoklás is igaz, de nincs köztük összefüggés",
      "C. Az állítás igaz, az indoklás hamis",
      "D. Az állítás hamis, az indoklás igaz",
      "E. Mindkettő hamis"
    ],
    correct: 0,
    exp: "A szív egyetlen ütés alatt elhasználja ATP-készletének mintegy 2%-át; folyamatos aerob oxidáció nélkül az ATP másodpercek alatt kimerül, és a szívizom összehúzódása azonnal leáll [PPT: 5.19. dia]."
  }
];

// Kérdések hozzáfűzése a központi listához
window.EXTRA_QUIZ_QUESTIONS = window.EXTRA_QUIZ_QUESTIONS.concat(zh2_2_Questions);