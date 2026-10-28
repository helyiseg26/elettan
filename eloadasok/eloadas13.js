// eloadasok/eloadas3.js
window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-3",
    title: "3. Előadás: A vázizomműködés gerincvelői és agytörzsi kontrollja",
    shortName: "Gerincvelő és agytörzs",
    html: `
        <div style="font-family: inherit; line-height: 1.7; color: var(--text);">

            <!-- BEVEZETŐ ÉS TÉTEL ÁTTEKINTÉS -->
            <div style="background: var(--info-bg); border-left: 4px solid var(--primary-light); padding: 1.2rem; border-radius: 8px; margin-bottom: 2rem;">
                <h3 style="margin-top: 0; color: var(--primary);">Bevezetés: A szomatomotoros rendszer lényege</h3>
                <p><em>„Amit az emberiség mindössze tenni tud, az a dolgok mozgatása. Ezt izmok hajtják egyedül végre, akár erdőt döntünk ki, akár egy szót suttogunk el.”</em> (Sir Charles Sherrington)</p>
                <p>A szomatomotoros működés a vázizmok akaratlagos és automatikus szabályozásán keresztül teszi lehetővé a külvilággal való interakciót, a testtartás fenntartását és a célvezérelt mozgások kivitelezését.</p>
            </div>

            <!-- 1. FEJEZET -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. A szomatomotoros működések formái és szabályozási elvei
            </h3>
            
            <h4 style="color: var(--primary-light); margin-top: 1rem;">A szomatomotoros működés megjelenési formái:</h4>
            <ul>
                <li><strong>Reflex-szabályozott mozgások:</strong>
                    <ul>
                        <li><strong>Veleszületett reflexek:</strong> sztereotip, genetikailag kódolt védő vagy vegetatív-motoros válaszok (pl. <em>cornea-reflex</em>, <em>nyelés</em>, <em>köhögés</em>, pupillareflex, flexor- és saját reflexek).</li>
                        <li><strong>Tanult (kondicionált) reflexek:</strong> tapasztalatok és ismételt ingertársítások révén kialakult adaptív reflexválaszok.</li>
                    </ul>
                </li>
                <li><strong>Program-szabályozott mozgások:</strong>
                    <ul>
                        <li><strong>Veleszületett ritmikus motoros programok:</strong> pl. <em>légzés</em> ritmusa; állatoknál a <em>járás</em> gerincvelői mintázatgenerátora (embernél a járás jóval magasabb kérgi koordinációt és tanulási fázist igényel).</li>
                        <li><strong>Tanult mozgásprogramok:</strong> komplex, finom koordinációt igénylő automatizmusok (pl. <em>sporttevékenységek</em>, hangszeres játék, írás, gépelés).</li>
                    </ul>
                </li>
                <li><strong>A tevékenység célja szerinti felosztás:</strong>
                    <ul>
                        <li><strong>Testtartási (poszturális) mozgások:</strong> a test gravitációval szembeni támasztása és a test térbeli orientációjának, egyensúlyának folyamatos fenntartása.</li>
                        <li><strong>Célirányos mozgások:</strong> a környezet manipulálására vagy megváltoztatására irányuló mozgások.</li>
                    </ul>
                </li>
                <li><strong>A külső megfigyelő megítélése szerint:</strong>
                    <ul>
                        <li><strong>Akaratlagos mozgás:</strong> tudatos döntésen alapuló, célvezérelt cselekvés.</li>
                        <li><strong>Akarattól független (automatikus/reflexes) mozgás:</strong> szándék nélkül bekövetkező kompenzáció vagy válasz.</li>
                    </ul>
                </li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">Szabályozási rendszerek: Feedback vs. Feed-forward</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1rem 0;">
                <div style="background: var(--bg); border: 1px solid var(--border); border-radius: 8px; padding: 1rem;">
                    <h5 style="color: var(--primary); margin-top:0;">1. Zárt láncú (Feedback / Visszacsatolásos) szabályozás</h5>
                    <p><strong>Példák:</strong> Precíziós írás, lassú célkövető szemmozgások, ismeretlen tömegű teher megtartása.</p>
                    <p><strong>Működése:</strong> A központ kiadja a kívánt parancsjelet az izomzatnak. Az érzékelők (pl. izomorsó, ínorsó) folyamatosan regisztrálják a pillanatnyi állapotot (tényleges hossz, feszülés). Az <strong>összehasonlító egység</strong> képzi a <em>hibajelet</em> (kívánt állapot − tényleges állapot), és szükség esetén azonnali korrekció történik.</p>
                    <ul>
                        <li><strong>Előnyök:</strong> A kivitelezés folyamatos ellenőrzése; precíz korrekciós lehetőség; nem igényel előzetes mintakészletet vagy tervezést.</li>
                        <li><strong>Hátrány:</strong> Időigényes! A szabályozás hatékonyságát korlátozza az afferens és efferens pályák vezetési sebessége és a szinaptikus késések.</li>
                    </ul>
                </div>
                <div style="background: var(--bg); border: 1px solid var(--border); border-radius: 8px; padding: 1rem;">
                    <h5 style="color: var(--primary); margin-top:0;">2. Nyílt láncú (Feed-forward / Előrecsatolásos, Ballisztikus) szabályozás</h5>
                    <p><strong>Példák:</strong> Kosárra dobás, futball labdarúgás, gyors zongorafutam, ugrás elrugaszkodási pillanata.</p>
                    <p><strong>Működése:</strong> A bemeneti szenzoros jelek (pl. látás: célpont távolsága) alapján a motoros kérgi és kisagyi központok előre kiszámítják a teljes mozgásprogramot, és a parancsjel egyetlen gyors impulzussorozatként fut le a végrehajtó izmokhoz.</p>
                    <ul>
                        <li><strong>Előny:</strong> Rendkívüli gyorsaság, a reakcióidő minimalizálható.</li>
                        <li><strong>Hátrányok:</strong> A mozgás indulása után már <strong>nincs lehetőség korrekcióra</strong> (a hiba csak a következő kísérletnél javítható a kisagy segítségével); óriási memóriaterhelést jelent a sok előre tanult motoros program tárolása; precíz előzetes tervezést igényel.</li>
                    </ul>
                </div>
            </div>

            <!-- 2. FEJEZET -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. A motoros központok hierarchikus és párhuzamos szerveződése
            </h3>
            <p>A központi idegrendszer mozgásszabályozó egységei evolúciós rétegződés szerint hierarchiába szerveződnek, ahol az alá- és fölérendeltség elve szoros horizontális együttműködéssel és hurokpályákkal párosul:</p>
            <ul>
                <li><strong>Agykéreg (Cortex):</strong> A legmagasabb szintű tervező, döntéshozó és finommozgást végrehajtó központ (primer motoros kéreg, premotoros kéreg, szupplementer motoros área).</li>
                <li><strong>Törzsdúcok (Basalis ganglionok):</strong> Belső mozgástervezés, komplex programok szelekciója, a nem kívánt mozgások szűrése és gátlása (talamo-kortikális hurkokon át fejtik ki hatásukat).</li>
                <li><strong>Kisagy (Cerebellum):</strong> Valós idejű hibajavítás, időzítés, a mozgás koordinációja és a motoros tanulás központja (összehasonlítja a kérgi parancsot a perifériás visszajelzéssel).</li>
                <li><strong>Agytörzs (Formatio reticularis, Vestibularis magvak, Nucleus ruber):</strong> Testtartási tónus elosztása, egyensúlyi és védő reflexek integrációja, a mozgásindítás kapuzása.</li>
                <li><strong>Gerincvelő (Spinal cord):</strong> A legalsó végrehajtó és integráló szint: tartalmazza a motoneuron-készletet (motor neuron pool), a védő és nyújtási reflexíveket, valamint az automatikus mintázatgenerátorokat (CPG).</li>
            </ul>

            <div style="background: var(--box-bg); border: 1px solid var(--box-border); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                <strong>Fontos szabályozási elvek:</strong>
                <ul>
                    <li><strong>By-pass (hierarchia kikerülése):</strong> A hierarchia közbenső szintjei kikerülhetők. Például a kéregből induló piramispálya (tractus corticospinalis) közvetlen kapcsolatot létesíthet az agytörzsi/gerincvelői alfa-motoneuronokkal a legfinomabb akaratlagos distalis ujjmozgásokhoz anélkül, hogy az agytörzsi átkapcsolódásra kényszerülne.</li>
                    <li><strong>Szenzoros bemenetek jelenléte minden szinten:</strong> A propriocepció és az exteroceptív információk nemcsak a felső kérgi szintekre jutnak el, hanem közvetlenül visszacsatolnak a gerincvelőbe, az agytörzsbe és a kisagyba is.</li>
                    <li><strong>Alárendelt központok feléledése (Release-tünetek):</strong> Ép viszonyok között a magasabb rendű kérgi struktúrák folyamatos <em>tonusos leszálló gátlást</em> fejtenek ki az alacsonyabb, filogenetikailag ősibb központokra. A kérgi vagy agytörzsi gátlás kiesésekor az alsóbb struktúrák felszabadulnak, és hiperreflexia, spazmus, kóros reflexek (pl. Babinski-tünet) vagy rigiditás alakul ki.</li>
                </ul>
            </div>

            <!-- 3. FEJEZET -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. A vázizomzat beidegzése és az erőkifejtés szabályozása
            </h3>
            
            <h4 style="color: var(--primary-light); margin-top: 1rem;">A motoneuronok és a neuromuszkuláris junkció</h4>
            <p>A gerincvelő elülső szarvában (és az agytörzsi motoros agyidegmagvakban) elhelyezkedő nagyméretű multipoláris sejtek a <strong>végső közös pálya</strong> elemei (Sherrington-féle „final common path”). Axonjaik a ventralis gyökön keresztül hagyják el a gerincvelőt.</p>
            <ul>
                <li><strong>Transzmitter:</strong> Acetil-kolin (ACh).</li>
                <li><strong>Receptor:</strong> Nikotinos típusú acetil-kolin receptor (izom-típusú nAChR, pentamer ionotróp kationcsatorna: Na<sup>+</sup> és Ca<sup>2+</sup> beáramlás, K<sup>+</sup> kiáramlás).</li>
                <li><strong>Bénító farmakon:</strong> <em>Kuráre</em> (d-tubokurarin) – kompetitív antagonista a nikotinos ACh-receptoron, petyhüdt bénulást okoz.</li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">A motoros egység (Motor Unit)</h4>
            <p><strong>Definíció:</strong> Egyetlen alfa-motoneuron és az általa beidegzett összes extrafusalis vázizomrost funkcionális egysége.</p>
            <ul>
                <li><em>Beidegzési arány (innervációs ráta):</em> 
                    Finom, differenciált mozgást végző izmokban kicsi (pl. külső szemizmok: 1 motoneuron / 3–5 izomrost, kéz ujjmozgatói: 1 : 10–50). Nagy tömegű, támasztó izmokban magas (pl. m. gastrocnemius, m. gluteus maximus: 1 : 1000–2000 izomrost).</li>
                <li><strong>Aszinkron aktiválódás:</strong> Nyugalmi tónus és szubmaximális kontrakció esetén a motoros egységek nem egyszerre tüzelnek, hanem egymást váltva (aszinkron módon). Ez biztosítja a sima, rángásmentes izomerőt és megvédi az izomzatot a korai kifáradástól.</li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">Az izomválasz erejének fokozási mechanizmusai:</h4>
            <ol>
                <li><strong>Tüzelési frekvencia növelése (Időbeli szummáció / Tetanizáció):</strong> Ha a motoneuron frekvenciája meghaladja a rángás lecsengési sebességét, a kontraktilis elemekben a Ca<sup>2+</sup> szint tartósan magasan marad, így az egyes rángások szummálódnak (inkoherens vagy komplett tetanus).</li>
                <li><strong>Recruitment (Térbeli szummáció / Motoros egységek toborzása):</strong> 
                    A szükségletnek megfelelően újabb motoros egységek kapcsolódnak be a <strong>Henneman-féle méretelv (Size Principle)</strong> szerint:
                    <ul>
                        <li>Először a kis sejtméretű, alacsony küszöbű, lassú, de fáradhatatlan egységek aktiválódnak (<strong>I-es típusú, vörös/lassú SO rostok</strong>).</li>
                        <li>Növekvő terhelésnél lépnek be a közepes méretű egységek (<strong>IIA típusú, FOG rostok</strong>).</li>
                        <li>Maximális robbanékony erőkifejtésnél kapcsolódnak be a legnagyobb méretű, legmagasabb ingerküszöbű, gyorsan fáradó egységek (<strong>IIB/IIX típusú, fehér/gyors FG rostok</strong>).</li>
                    </ul>
                </li>
            </ol>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">Visszacsatolt gátlás: A Renshaw-sejtek</h4>
            <p>Az alfa-motoneuron axonja a gerincvelőből való kilépés előtt kollaterálist ad egy gátló interneuronhoz, a <strong>Renshaw-sejthez</strong>. A Renshaw-sejt gátló transzmittert (<strong>glicint</strong>) termel, és visszacsatolva gátolja magát az aktivált alfa-motoneuront és a környező szomszédos motoneuronokat (<em>rekurrens/visszacsatolt gátlás</em>). Szerepe: megakadályozza a túlzott frekvenciájú, kontrolálatlan kisülést, és élesíti a motoros kontrasztot. <em>(A sztrichnin mérgezés a glicin-receptorok blokkolásával halálos merevgörcsöt idéz elő a Renshaw-gátlás kiesése miatt!)</em></p>

            <!-- 4. FEJEZET -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                4. Proprioceptorok: Az izomorsó és a Golgi-féle ínorsó
            </h3>
            
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 10px; text-align: left;">Jellemző</th>
                        <th style="padding: 10px; text-align: left;">Izomorsó (Muscle spindle)</th>
                        <th style="padding: 10px; text-align: left;">Golgi-féle ínorsó (Golgi tendon organ)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Elhelyezkedés</strong></td>
                        <td>A normál izomrostokkal <strong>párhuzamosan</strong> kapcsolva</td>
                        <td>Az izom és az ín találkozásánál, <strong>sorosan</strong> kapcsolva</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Adekvát inger</strong></td>
                        <td>Az <strong>izomhossz</strong> és a hosszváltozás sebessége</td>
                        <td>Az <strong>izomfeszülés</strong> (izomerő/tenzió)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Afferens rostok</strong></td>
                        <td>
                            • <strong>Ia típusú</strong> (primer, annulospiralis végződés) – gyors dinamikus és statikus hosszérzékelés<br>
                            • <strong>II-es típusú</strong> (szekunder, virágcsokor-végződés) – tisztán statikus hosszérzékelés
                        </td>
                        <td><strong>Ib típusú</strong> vastag myelinizált rostok</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Motoros beidegzés</strong></td>
                        <td><strong>Gamma-motoneuronok</strong> (a két kontraktilis pólust idegzik be)</td>
                        <td>Nincs saját motoros beidegzése</td>
                    </tr>
                    <tr>
                        <td><strong>Funkció passzív nyújtáskor</strong></td>
                        <td>Azonnal megnyúlik → <strong>kisülési frekvencia nő</strong></td>
                        <td>Csak extrém nagy megnyújtáskor jelez mérsékelten</td>
                    </tr>
                    <tr>
                        <td><strong>Funkció aktív izomkontrakciókor</strong></td>
                        <td>Tehermentesül (ellazul) → <strong>kisülési frekvencia csökken</strong> (kivéve gamma koaktivációkor!)</td>
                        <td>A feszülő inak összenyomják a kollagén rostok közti idegvégződést → <strong>kisülési frekvencia meredeken nő</strong></td>
                    </tr>
                </tbody>
            </table>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">A Gamma-hurok és az Alfa-Gamma koaktiváció jelentősége</h4>
            <p>Ha a vázizom összehúzódik, a vele párhuzamosan futó izomorsók megrövidülnének és ellazulnának („belógnának”), így az afferens Ia rostok elhallgatnának: az idegrendszer elveszítené a kontrollt az izom pillanatnyi hossza felett. Ennek kivédésére a leszálló motoros pályák mindig egyidejűleg serkentik mind az alfa-, mind a gamma-motoneuronokat (<strong>alfa-gamma koaktiváció</strong>).</p>
            <p>A <strong>gamma-motoneuronok</strong> aktiválódása hatására az intrafusalis rostok két végén lévő harántcsíkolt kontraktilis pólusok összehúzódnak. Ez megfeszíti az orsó középső, receptoros szakaszát, ezáltal még erőteljes izomrövidülés közben is fenntartja az izomorsó megfelelő alapfeszülését és folyamatos érzékenységét.</p>

            <!-- 5. FEJEZET -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                5. Gerincvelői reflexmechanizmusok
            </h3>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">A) A feszítési reflex (Myotatikus / Nyújtási reflex, Stretch-reflex, Saját reflex)</h4>
            <ul>
                <li><strong>Szinonimái:</strong> Ínreflex (a klinikai kiváltás módja miatt), proprioceptív reflex.</li>
                <li><strong>Szinaptikus felépítés:</strong> <strong>Monoszinaptikus ív</strong> (egyetlen központi szinapszis a szenzoros Ia afferens és az alfa-motoneuron között – a leggyorsabb reflex a szervezetben).</li>
                <li><strong>Folyamata:</strong>
                    <ol>
                        <li>Az izom passzív vagy hirtelen megnyúlása aktiválja az izomorsót.</li>
                        <li>A Ia afferens rost a spinalis ganglionon keresztül belép a dorsalis szarvon át, majd a ventralis szarvban közvetlen serkentő szinapszist ad a saját izom alfa-motoneuronjára.</li>
                        <li>A motoneuron összehúzódásra készteti a megnyújtott izmot (homonim serkentés).</li>
                    </ol>
                </li>
                <li><strong>Reciprok gátlás (Reciprok innerváció):</strong> A Ia afferens kollaterálist ad egy gátló interneuronra (<em>Ia gátló interneuron</em>) is, amely egyidejűleg hiperpolarizálja és gátolja az <strong>antagonista izomcsoport</strong> motoneuronjait, megelőzve az ellentétes izomműködés miatti mechanikai blokkot.</li>
                <li><strong>Klinikai saját reflexek és szegmentális szintjeik:</strong>
                    <ul>
                        <li><strong>Biceps-reflex:</strong> C5–C6</li>
                        <li><strong>Radialis reflex (m. brachioradialis):</strong> C5–C6</li>
                        <li><strong>Triceps-reflex:</strong> C7–C8</li>
                        <li><strong>Patella-reflex:</strong> L2–L4</li>
                        <li><strong>Achilles-reflex:</strong> L5–S1–S2</li>
                        <li><strong>Masseter-reflex:</strong> Agytörzsi reflex, a n. trigeminus (V/3) közvetíti!</li>
                    </ul>
                </li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">B) A flexor reflex (Menekülési / Bőr / Nociceptív / Idegen reflex)</h4>
            <ul>
                <li><strong>Szinonimái:</strong> Exteroceptív reflex, withdrawal reflex.</li>
                <li><strong>Inger:</strong> Károsító, fájdalmas (nociceptív) vagy erős mechanikai behatás a bőrre (Aδ és C afferens rostok).</li>
                <li><strong>Szinaptikus szerveződés:</strong> Szigorúan <strong>poliszinaptikus</strong> (számos excitátoros és gátló interneuronon átfutó ív több szegmentumon keresztül).</li>
                <li><strong>Válasz:</strong>
                    <ul>
                        <li><strong>Ipsilateralis végtagon:</strong> Flexor motoneuronok serkentése + extenzor motoneuronok reciprok gátlása → a végtag hirtelen elrántása a veszélyforrástól.</li>
                        <li><strong>Kontralateralis végtagon (Keresztezett extenzor reflex):</strong> Az interneuronok átkereszteződnek a túloldalra: ott a flexorokat gátolják, az extenzorokat pedig serkentik. Célja a testtömeg azonnali átvétele és a stabilitás megőrzése a másik lábon!</li>
                    </ul>
                </li>
                <li><strong>Klinikai felületes bőrreflexek:</strong>
                    <ul>
                        <li><strong>Hasbőr reflex (epigastricus, mesogastricus, hypogastricus):</strong> T7–T12 szegmentumok.</li>
                        <li><strong>Cremaster reflex:</strong> L1–L2.</li>
                        <li><strong>Normál plantáris reflex:</strong> A talp külső élének végigkarcolásakor a lábujjak plantárflexiója (lefelé görbülése).</li>
                        <li><strong>Kóros felületes reflex (Babinski-jel):</strong> A piramispálya (felső motoneuron) károsodásakor a talp ingerlésére az öregujj lassú tónusos dorsalflexiója („felfelé állása”) és a többi ujj legyezőszerű szétterülése alakul ki. <em>(1-1,5 éves korig a nem teljes myelinizáció miatt még fiziológiás!)</em></li>
                    </ul>
                </li>
            </ul>

            <!-- ÖSSZEHASONLÍTÓ TÁBLÁZAT -->
            <h4 style="color: var(--primary-light); margin-top: 1.5rem;">A myotatikus és a flexor reflex részletes összehasonlítása:</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 8px;">Szempont</th>
                        <th style="padding: 8px;">Myotatikus (Nyújtási) reflex</th>
                        <th style="padding: 8px;">Flexor (Bőr/Menekülési) reflex</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Szinaptikus felépítés</strong></td>
                        <td><strong>Monoszinaptikus</strong></td>
                        <td><strong>Poliszinaptikus</strong></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Reflexidő</strong></td>
                        <td>Nagyon rövid (csak egyetlen centrális szinapszis)</td>
                        <td>Hosszú, és az inger intenzitásától függ</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Efferens válasz kiterjedése</strong></td>
                        <td>Szigorúan a stimulált izomra korlátozódik</td>
                        <td>Ingererősségtől függően több ízületre és a túloldalra is terjed (irradiáció, recruitment)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>„Local sign”</strong></td>
                        <td><strong>Nincs</strong> (mindig ugyanaz az izom húzódik össze)</td>
                        <td><strong>Van</strong>: a mozgás iránya pontosan igazodik a stimulus bőrfelületi helyéhez</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Habituáció</strong></td>
                        <td>Nincs (mindig azonos válasz)</td>
                        <td>Kifejezett (ártalmatlan inger ismétlésekor a reflexválasz fokozatosan gyengül)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Szenzitizáció</strong></td>
                        <td>Nincs</td>
                        <td>Kifejezett (erős szövetkárosító inger után az ingerküszöb csökken, a válasz hevesebb)</td>
                    </tr>
                    <tr>
                        <td><strong>Kondicionálás</strong></td>
                        <td>Nincs</td>
                        <td>Lehetséges (klasszikus kondicionálással tanulható és adaptálható)</td>
                    </tr>
                </tbody>
            </table>

            <!-- 6. FEJEZET -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                6. A gerincvelői shock (Spinalis shock)
            </h3>
            <p>A gerincvelő hirtelen, teljes harántsérülése (traumás transsectio) esetén azonnal megszakad minden felsőbb agykérgi és agytörzsi kapcsolat. A kórkép két élesen elkülönülő fázisban zajlik le:</p>
            
            <div style="background: var(--danger-bg); border-left: 4px solid var(--danger); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                <h4 style="color: var(--danger-text); margin-top: 0;">1. Akut fázis (Közvetlenül a trauma után):</h4>
                <ul>
                    <li>A sérüléstől kaudálisan minden érzőműködés kiesik (teljes anesztézia).</li>
                    <li><strong>Petyhüdt bénulás (flaccid paresis/plegia):</strong> az izomtónus teljesen megszűnik az állandó facilitáló agytörzsi hatások hirtelen kiesése miatt.</li>
                    <li>A szegmentális szomatikus reflexek (feszítési, flexor) kiválthatatlanok (areflexia).</li>
                    <li>A gerincvelői vegetatív reflexek bénulnak (vizelet- és székletretenció, atóniás hólyag).</li>
                    <li><strong>Vazomotor tónus megszűnése:</strong> a leszálló szimpatikus aktiváció kiesik → vasodilatatio, drasztikus vérnyomásesés (neurogén/spinális sokk).</li>
                </ul>
            </div>

            <div style="background: var(--success-bg); border-left: 4px solid var(--success); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                <h4 style="color: var(--success-text); margin-top: 0;">2. Krónikus / Helyreállási fázis (Embernél hetek-hónapok, kb. 8–10 hónap alatt alakul ki):</h4>
                <ul>
                    <li>Az érzéskiesés és a mozgásbénulás véglegesen megmarad (a sérült központi axonok nem regenerálódnak a hegszövet és gátló faktorok miatt).</li>
                    <li><strong>Spaszticitás és rigiditás:</strong> Az extenzor és flexor izmok tónusa fokozódik (felszabadulnak a gátlás alól, és a denervációs hiperszenzitivitás miatt a gerincvelői neuronok túlérzékennyé válnak).</li>
                    <li>A <strong>feszítési reflexek élénkké válnak</strong> (hiperreflexia, klónusz jelenhet meg).</li>
                    <li>A <strong>flexor reflexek fokozódnak</strong>, megjelennek a kóros release-reflexek (Babinski-jel).</li>
                    <li>A vegetatív automatizmusok visszatérnek (reflexes vizeletürítés – automata hólyag).</li>
                    <li><strong>Tömegreflex (Mass reflex):</strong> Enyhe perifériás ingerre (pl. a bőr megérintése vagy a hólyag telődése) generalizált, masszív gerincvelői válasz alakul ki: mindkét alsó végtag heves hajlítása, spontán vizelés, székelés, izzadás és vérnyomáskiugrás.</li>
                </ul>
            </div>

            <!-- 7. FEJEZET -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                7. Központi mintázatgeneráló hálózatok (CPG - Central Pattern Generators)
            </h3>
            <p><strong>Fogalom:</strong> Olyan autonóm idegsejthálózatok a gerincvelőben és az agytörzsben, amelyek ritmikus, koordinált motoros kimenetet képesek generálni <em>még ritmikus szenzoros bemenet vagy felsőbb agykérgi vezérlés hiányában is</em>.</p>
            <ul>
                <li><strong>Elhelyezkedésük és funkcióik:</strong>
                    <ul>
                        <li><strong>Agytörzs:</strong> Légzés ritmusa (pre-Bötzinger komplex), rágás, nyelés, szopás, hányás, gyors saccadikus szemmozgások.</li>
                        <li><strong>Gerincvelő (Locomotor network):</strong> Végtagok alternáló mozgása járás, futás, úszás során (állatkísérletekben gerincvelő-átmetszés és a hátsó gyökerek átvágása után is regisztrálható a m. tibialis anterior és m. gastrocnemius alternáló tüzelése).</li>
                    </ul>
                </li>
                <li><strong>Működési mechanizmus (Félközpont-modell / Half-center modell):</strong> A flexor és extenzor motoneuronokat ellátó interneuronos csoportok kölcsönösen, reciprok módon gátolják egymást. Amikor az egyik csoport elfárad vagy adaptálódik, a gátlás megszűnik, és a másik csoport kisül (oszcilláció).</li>
                <li><strong>Felsőbb agytörzsi kontroll:</strong>
                    A középagyi lokomotoros régió (<strong>MLR – Mesencephalic Locomotor Region</strong>) a hídi és nyúltvelői retikuláris magvakon (MRF) keresztül vetül a ventrolaterális kötegben (VLF) a gerincvelői lokomotoros hálózatra. 
                    <strong>Alapvető törvényszerűség:</strong> Az MLR stimulációs frekvenciájának (erősségének) növelése <em>nem az egyes lépések erejét, hanem a lokomóció sebességét és módját változtatja meg</em> (pl. négylábúaknál: lassú séta → gyors séta → ügetés [trot] → vágta [gallop]).
                </li>
            </ul>

            <!-- 8. FEJEZET -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                8. Az agytörzs szerepe az izomtónusban: Átmetszéses kísérletek
            </h3>
            <p>Az agytörzsi magvak és a kéreg közötti tónusszabályozó egyensúlyt klasszikus kísérleti átmetszésekkel (Sherrington) térképezték fel:</p>

            <div style="background: var(--bg); border: 1.5px solid var(--border); border-radius: 8px; padding: 1.2rem; margin: 1rem 0;">
                <h4 style="color: var(--primary); margin-top:0;">A tónusszabályozó agytörzsi rendszerek:</h4>
                <ol>
                    <li><strong>Serkentő hatású rendszerek (Feszítő tónust fokozzák):</strong>
                        <ul>
                            <li><strong>Nucleus vestibularis lateralis (Deiters-mag):</strong> Saját belső (pacemaker-szerű) aktivitással rendelkezik, a tractus vestibulospinalison át erőteljesen serkenti az antigravitációs extenzor izmok motoneuronjait.</li>
                            <li><strong>Hídi formatio reticularis:</strong> Szintén a feszítő izomtónust serkenti (tractus reticulospinalis pontinus).</li>
                        </ul>
                    </li>
                    <li><strong>Gátló hatású rendszerek:</strong>
                        <ul>
                            <li><strong>Nyúltvelői (bulbáris) formatio reticularis:</strong> Gátolja az antigravitációs izmok motoneuronjait (tractus reticulospinalis medullaris). <em>Fontos: Nincs önálló tónusa! Működéséhez elengedhetetlen a felsőbb agykérgi (corticoreticularis) serkentő bemenet.</em></li>
                            <li><strong>Nucleus ruber (középagy):</strong> A tractus rubrospinalison keresztül a <strong>flexor izmokat serkenti</strong> és az extenzorokat gátolja (distalis izmok finomabb kontrollja).</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
                <div style="background: var(--card-bg); border: 2px solid var(--danger); border-radius: 8px; padding: 1.2rem;">
                    <h4 style="color: var(--danger); margin-top:0;">Decerebrációs rigiditás</h4>
                    <p><strong>Átmetszés helye:</strong> Az agytörzs átvágása a colliculus superior és inferior között (a <em>nucleus ruber alatt</em>: alacsonyan decerebrált állat).</p>
                    <p><strong>Mechanizmus:</strong></p>
                    <ul>
                        <li>Megszakad a kapcsolat az agykéreg és a nyúltvelői gátló formatio reticularis között → <strong>a gátló központ elhallgat</strong>.</li>
                        <li>Kiesik a flexorokat segítő <strong>nucleus ruber</strong> hatása.</li>
                        <li>A <strong>Deiters-mag</strong> és a hídi formatio reticularis serkentő hatása fékezetlenül érvényesül.</li>
                    </ul>
                    <p><strong>Tünet:</strong> Extrém feszítő izomtónus. Mind a négy végtag deszkaszerűen mereven kinyújtva, a hát és nyak hátrahajlik (opisthotonus), a farok felcsapódik. Az állat a talpára állítható mint egy játékbábu, de járni nem tud.</p>
                </div>

                <div style="background: var(--card-bg); border: 2px solid var(--accent); border-radius: 8px; padding: 1.2rem;">
                    <h4 style="color: #b7791f; margin-top:0;">Dekortikációs rigiditás (Wernicke-Mann tartás)</h4>
                    <p><strong>Átmetszés / Károsodás:</strong> Az agykéreg vagy a capsula interna kétoldali léziója (a <em>nucleus ruber felett</em>).</p>
                    <p><strong>Mechanizmus:</strong></p>
                    <ul>
                        <li>A nucleus ruber épen marad!</li>
                        <li>A Deiters-mag túlsúlya miatt az alsó végtagokban az extenzor tónus dominál.</li>
                        <li>A nucleus ruber megmaradt aktivitása miatt a felső végtagokban a <strong>flexor izmok tónusa fokozódik</strong>.</li>
                    </ul>
                    <p><strong>Klinikai kép embernél (Stroke, Wernicke-Mann bénulás):</strong> A felső végtag flexióban és pronációban van a mellkas előtt („kolduló tartás”), az alsó végtag deszkakeményen nyújtva (extensio), ezért a beteg járáskor merev lábát félkörívben kaszálva lendíti előre (circumductio).</p>
                </div>
            </div>

            <!-- ÖSSZEGZÉS -->
            <div style="background: var(--box-bg); border-left: 4px solid var(--accent); padding: 1.2rem; border-radius: 8px; margin-top: 1.5rem;">
                <h4 style="margin-top: 0; color: var(--primary);">Összefoglaló kulcspontok orvosi vizsgára:</h4>
                <ul>
                    <li>A szomatomotoros rendszerben a <strong>monoszinaptikus nyújtási reflex</strong> biztosítja az izomhossz állandóságát és a testtartást, míg a <strong>poliszinaptikus flexor reflex</strong> a védelmet.</li>
                    <li>Az <strong>izomorsó</strong> az izom megnyúlását (hosszát) méri és párhuzamosan kapcsolt; érzékenységét a <strong>gamma-motoneuronok</strong> tartják fenn (alfa-gamma koaktiváció).</li>
                    <li>A <strong>Golgi-ínorsó</strong> sorosan kapcsolt tenzióérzékelő (Ib rostok), amely túlzott megfeszüléskor gátolja a saját izmot (inverz myotatikus reflex).</li>
                    <li><strong>Spinalis shockban</strong> kezdetben minden reflex és tónus kiesik (petyhüdt bénulás), majd a gátlás alól felszabadulva hiperreflexia, spazmus és kóros reflexek (Babinski) alakulnak ki.</li>
                    <li><strong>Decerebrációban</strong> (n. ruber alatt) mind a 4 végtag mereven nyújtott (Deiters-mag túlsúly). <strong>Dekortikációban</strong> (n. ruber felett) az alsó végtag nyújtott, de a felső végtag flexióban van!</li>
                </ul>
            </div>

        </div>
    `
});