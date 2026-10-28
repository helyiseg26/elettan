// eloadasok/eloadas14.js
window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-14",
    title: "14. Előadás: A cerebellum, a basalis ganglionok és az agykéreg szerepe a mozgásszabályozásban",
    shortName: "Kisagy és Törzsdúcok",
    html: `
        <div style="font-family: inherit; line-height: 1.7; color: var(--text);">

            <!-- BEVEZETŐ -->
            <div style="background: var(--info-bg); border-left: 4px solid var(--primary-light); padding: 1.2rem; border-radius: 8px; margin-bottom: 2rem;">
                <h3 style="margin-top: 0; color: var(--primary);">Bevezetés és áttekintés [PPT: 1. dia]</h3>
                <p>A szomatomotoros rendszerben a gerincvelői és agytörzsi végrehajtó struktúrák működését két nagy párhuzamos visszacsatoló rendszer hangolja össze: a <strong>cerebellum (kisagy)</strong> és a <strong>basalis ganglionok (törzsdúcok)</strong>. A basalis ganglionok a belső mozgástervezésért, a kívánt motoros programok kiválasztásáért és indításáért felelősek, míg a kisagy a mozgások valós idejű koordinációját, hibajavítását és a motoros tanulást végzi az agykéreggel szoros együttműködésben.</p>
            </div>

            <!-- I. KISAGY -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                I. A kisagy (Cerebellum) élettana és funkciói [PPT: 2–3. dia]
            </h3>
            
            <h4 style="color: var(--primary-light); margin-top: 1rem;">1. A kisagy fő feladatai [PPT: 2. dia]:</h4>
            <ul>
                <li><strong>Egyensúly megtartása:</strong> a test gravitációhoz viszonyított térbeli helyzetének és stabilitásának biztosítása.</li>
                <li><strong>Mozgáskoordináció:</strong> különösen a gyors, összetett, többízületi mozgások folyamatos és valós idejű pályakorrekciója.</li>
                <li><strong>Motoros tanulás:</strong> a mozgások pontosságának javítása ismétlés és a tapasztalt hibák korrekciója révén.</li>
                <li><strong>Kognitív funkciók:</strong> időzítés, nyelvi folyamatok és belső prediktív modellek támogatása.</li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">2. A kisagy anatómiai tagolása [PPT: 2. dia]:</h4>
            <p>A kisagyi vermis és féltekék lebenykékre (lobuli) és hasadékokra (fissurae) tagolódnak:</p>
            <ul>
                <li><em>Vermis részei felülről lefelé:</em> culmen (1.), declive (2.), vermal folium (3.), vermal tuber (4.), vermal pyramis (5.), vermal uvula (6.).</li>
                <li><em>Féltekei lebenyek és hasadékok:</em> quadrangular lobule (7.), primary fissure (8.), simplex lobule (9.), superior posterior fissure (10.), superior semilunar lobule (11.), horizontal fissure (12.), inferior semilunar lobule (13.), ansoparamedian fissure (14.), gracile lobule (15.), prebiventral fissure (16.), biventral lobule (17.), secondary fissure (18.), cerebellar tonsil / mandula (19.).</li>
            </ul>

            <div style="background: var(--box-bg); border: 1px solid var(--box-border); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                <strong style="color: var(--primary);">Alapvető élettani sajátosságok [PPT: 2. dia]:</strong>
                <ul>
                    <li>A kisagy közvetlen elektromos stimulációja <strong>nem vált ki tudatosuló érzéseket</strong>, és <strong>nem követi figyelemre méltó motoros aktivitás</strong> (nem okoz közvetlen izomrángást).</li>
                    <li>Számos szenzoros bemenetet fogad (proprioceptív, vesztibuláris, vizuális, akusztikus), de ezek a kisagy szintjén <strong>nem tudatosulnak</strong>.</li>
                    <li>Bár kulcsszerepe van a mozgások tényleges lefolyásában, <strong>direkt módon nem vesz részt a kivitelezésben</strong>: nincsenek közvetlen gerincvelői leszálló efferensei, hatását mindig az agytörzsi magvak és a motoros talamokortikális hurkok modulálásán keresztül fejti ki.</li>
                </ul>
            </div>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">3. A motoros tanulás modellje: Prizmaszemüveg-kísérlet [PPT: 3. dia]</h4>
            <p>A kísérlet a kisagy adaptív hibajavító képességét demonstrálja célbadobás során:</p>
            <ul>
                <li><strong>Szemüveg előtt (Before):</strong> az alany pontosan a célpontba dob (0 cm horizontális kitérés).</li>
                <li><strong>Prizmaszemüveg felvételekor (Prisms In):</strong> a lencse oldalra tolja a látóteret; az első dobások nagymértékben mellémennek. Ismételt kísérletek során a vizuális hibajelzések alapján a cerebellum fokozatosan módosítja a motoros parancsot, míg a dobások újra pontosak lesznek.</li>
                <li><strong>Szemüveg levétele után (After):</strong> azonnal kompenzatorikus hiba („after-effect” / utóhatás) jelenik meg az ellenkező irányba, ami igazolja, hogy a kisagy új belső reprezentációt alakított ki. Kisagyi károsodás esetén ez a plasztikus adaptáció teljesen hiányzik.</li>
            </ul>

            <!-- II. KISAGYI MIKROSTRUKTÚRA -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                II. A kisagyi modulok felépítése és szövettana [PPT: 4–5. dia]
            </h3>
            <p>A kisagyi kéreg szövettani felépítése a teljes felületen szigorúan azonos, sztereotip modulokból áll [PPT: 4–5. dia].</p>

            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 10px; text-align: left;">Rost / Sejttípus</th>
                        <th style="padding: 10px; text-align: left;">Eredet és Lefutás</th>
                        <th style="padding: 10px; text-align: left;">Funkció és Hatás [PPT: 4–5. dia]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Moharost (Mossy fiber)</strong></td>
                        <td>Agytörzsi magvakból (nuclei pontis, vestibularis magvak) és a spinocerebellaris pályákból ered (szenzoros info a perifériáról és a kéregből).</td>
                        <td><strong>Serkentő (+)</strong>: kollaterálist ad a mély kisagyi magvakhoz, a kéregben pedig a szemcsesejteket serkenti.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Szemcsesejt és Párhuzamos rostok</strong></td>
                        <td>A stratum granulosum sejtjei; axonjaik a molekuláris rétegben T-alakban elágazva <strong>párhuzamos rostokként (parallel fibers)</strong> futnak.</td>
                        <td><strong>Serkentő (+)</strong> (glutamát): egyszerre több ezer Purkinje-sejt dendritjét érik el, enyhe depolarizációt („simple spikes”) váltva ki.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Kúszórost (Climbing fiber)</strong></td>
                        <td>Kizárólag az <strong>Oliva inferiorból</strong> ered (szomatoszenzoros, vizuális és kérgi információk).</td>
                        <td><strong>Erősen serkentő (+)</strong>: közvetlenül rátekeredik egyetlen Purkinje-sejt dendritfájára; masszív depolarizációt, <strong>komplex akciós potenciált („complex spike”)</strong> vált ki – ez képezi a motoros hibajelet!</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Purkinje-sejt</strong></td>
                        <td>A stratum ganglionare hatalmas, faágszerű dendritrendszerrel bíró sejtjei; <strong>a kisagykéreg egyetlen kimenő neuronjai</strong>.</td>
                        <td><strong>GÁTLÓ (−)</strong> (GABA): axonjai a mély kisagyi magvakra vetülnek, és folyamatos tónusos gátlás alatt tartják azokat.</td>
                    </tr>
                    <tr>
                        <td><strong>Mély kisagyi magvak (Deep nuclei)</strong></td>
                        <td>Nucleus dentatus, interpositus (emboliformis + globosus), fastigii.</td>
                        <td>A kisagy <strong>fő kimenete</strong>: serkentő (+) vetülést adnak a talamusz és az agytörzs felé, amit a Purkinje-sejtek gátló mintázata modulál.</td>
                    </tr>
                </tbody>
            </table>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">Kérgi rétegek és gátló interneuronok [PPT: 5. dia]:</h4>
            <ul>
                <li><strong>Stratum moleculare:</strong> párhuzamos rostok, Purkinje dendritfák, valamint <strong>csillagsejtek (stellate cells)</strong> és <strong>kosársejtek (basket cells)</strong> – feladatuk a szomszédos Purkinje-sejtek laterális gátlása.</li>
                <li><strong>Stratum ganglionare (Purkinje-réteg):</strong> a Purkinje-sejtek sejttestjei egyetlen rétegben sorakoznak.</li>
                <li><strong>Stratum granulosum:</strong> óriási sűrűségű szemcsesejtek és gátló <strong>Golgi-sejtek</strong> alkotják (a mossy rost – szemcsesejt szinapszisok visszacsatolt szabályozása).</li>
            </ul>

            <!-- III. FUNKCIONÁLIS FELOSZTÁS -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                III. A kisagy funkcionális részei [PPT: 6–7. dia]
            </h3>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 1rem; margin: 1rem 0;">
                <!-- Vestibulocerebellum -->
                <div style="background: var(--bg); border: 1.5px solid var(--border); border-radius: 8px; padding: 1.2rem;">
                    <h4 style="color: var(--primary); margin-top:0;">1. Vestibulocerebellum (Archicerebellum) [PPT: 6–7. dia]</h4>
                    <p><strong>Anatómia:</strong> Lobus flocculonodularis.</p>
                    <p><strong>Bemenet:</strong> Vestibularis apparatus és vestibularis magvak.</p>
                    <p><strong>Kimenet / Mag:</strong> Közvetlenül a <em>vestibularis magvakhoz</em> és a <em>nucleus fastigii</em>-hez.</p>
                    <p><strong>Funkciók [PPT: 7. dia]:</strong></p>
                    <ul>
                        <li>A törzs izmainak koordinációja.</li>
                        <li>Járás és az egyensúly megtartása, a fej reflexes mozgásai.</li>
                        <li>Az extraokuláris izmok koordinációja (szemmozgások, VOR).</li>
                    </ul>
                </div>

                <!-- Spinocerebellum -->
                <div style="background: var(--bg); border: 1.5px solid var(--border); border-radius: 8px; padding: 1.2rem;">
                    <h4 style="color: var(--primary); margin-top:0;">2. Spinocerebellum (Paleocerebellum) [PPT: 6–7. dia]</h4>
                    <p><strong>Anatómia:</strong> Vermis és az intermedier félteke (paravermis).</p>
                    <p><strong>Bemenet:</strong> Spinocerebelláris és trigeminális pályák, látó- és hallórendszer.</p>
                    <p><strong>Kimenet és Kapcsolt magvak [PPT: 6. dia]:</strong></p>
                    <ul>
                        <li><em>Vermis → Nucleus fastigii →</em> Mediális leszálló rendszerek (törzs- és végtagmozgások, járás).</li>
                        <li><em>Intermedier félteke → Interposed nuclei (n. interpositus) →</em> Laterális leszálló rendszerek (végtagok motoros végrehajtása).</li>
                    </ul>
                    <p><strong>Összehasonlító funkció [PPT: 7. dia]:</strong></p>
                    <ul>
                        <li><em>„Belső feedback kör” (tr. spinocerebellaris ventralis):</em> motoros pályakollaterálisok, amelyek a tervezett, <strong>elvárt eredményt</strong> közvetítik.</li>
                        <li><em>„Külső feedback kör” (tr. spinocerebellaris dorsalis et ventralis):</em> proprioceptorokból érkező információ a <strong>tényleges eredményről</strong>.</li>
                    </ul>
                </div>

                <!-- Cerebrocerebellum -->
                <div style="background: var(--bg); border: 1.5px solid var(--border); border-radius: 8px; padding: 1.2rem;">
                    <h4 style="color: var(--primary); margin-top:0;">3. Cerebrocerebellum (Neocerebellum) [PPT: 6–7. dia]</h4>
                    <p><strong>Anatómia:</strong> Laterális kisagyi féltekék.</p>
                    <p><strong>Bemenet:</strong> Agykéreg (corticopontine bemenet a híd magvakon át).</p>
                    <p><strong>Kimenet / Mag [PPT: 6. dia]:</strong> <strong>Nucleus dentatus</strong> → motoros és premotoros agykéreg (a talamuszon keresztül).</p>
                    <p><strong>Funkciók [PPT: 7. dia]:</strong></p>
                    <ul>
                        <li>Nagy ügyességet kívánó, tanult mozgások koordinációja (motoros tervezés [motor planning], elindítás, leállítás).</li>
                        <li>Kognitív funkciók és időzítés.</li>
                    </ul>
                </div>
            </div>

            <!-- IV. KISAGYI TÜNETEK -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                IV. A cerebrocerebellum lézióinak következményei (Cerebelláris tünettan) [PPT: 8–17. dia]
            </h3>
            <p>Kisagyi károsodáskor <strong>nincs izombénulás</strong> és nincs érzéskiesés, a mozgások azonban elveszítik harmonikus lefolyásukat [PPT: 8. dia]:</p>

            <div style="background: var(--card-bg); border: 1.5px solid var(--border); border-radius: 8px; padding: 1.2rem; margin: 1rem 0;">
                <ul>
                    <li><strong>Ataxia [PPT: 8. dia]:</strong> a mozgáskoordináció általános szétesése; bizonytalan, széles alapú, dülöngélő járás.</li>
                    <li><strong>Dysmetria [PPT: 8–11. dia]:</strong> a mozgás célpontjának és távolságának elvétése (mellényúlás ujj-orr próbánál [PPT: 9–11. dia]). Lehet <em>hypermetria</em> (túllövés) vagy <em>hypometria</em> (alullövés).</li>
                    <li><strong>Intentiós tremor [PPT: 8, 11. dia]:</strong> célkövető kinetikus remegés; nyugalomban nem látható, de a célhoz közeledve felerősödik az antagonista izmok elégtelen fékezőműködése miatt.</li>
                    <li><strong>Dysarthria (skandáló beszéd) [PPT: 8, 12. dia]:</strong> a beszédizmok koordinációjának zavara; szaggatott, szótagoló, robbanékony hangsúlyozás („h.hhh....aaaa a......l....lo” [PPT: 12. dia]).</li>
                    <li><strong>Dysdiadochokinesis / Adiadochokinesis [PPT: 8, 13. dia]:</strong> gyors alternáló, ellentétes irányú mozgások kivitelezésének képtelensége (pl. tenyér és kézhát gyors váltogatása [PPT: 13. dia]).</li>
                    <li><strong>Az izomtónus megváltozása [PPT: 8, 14–15. dia]:</strong> jellemzően <strong>hypotonia</strong> az agykérget és agytörzset érintő folyamatos serkentő kimenet kiesése miatt [PPT: 14–15. dia].</li>
                    <li><strong>Dyssynergia (a mozgások dekompozíciója) [PPT: 8. dia]:</strong> az összetett mozgás szétesik; a beteg a többízületi mozgást darabos, különálló lépésekben hajtja végre.</li>
                    <li><strong>Visszacsapódási tünet (Rebound fenomén / Holmes-tünet) [PPT: 8, 16. dia]:</strong> az ellenállással szemben behajlított kart hirtelen elengedve az antagonista fék hiánya miatt a beteg megüti magát.</li>
                    <li><strong>Általános összegzés [PPT: 17. dia]:</strong> kifejezetten erős tudatos kontroll válik szükségessé a mozgások kivitelezéséhez – még olyan esetekben is, ahol normálisan automatizmusok működnének.</li>
                </ul>
            </div>

            <!-- V. BASALIS GANGLIONOK ANATÓMIA ÉS HÁLÓZAT -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                V. A basalis ganglionok és az agykéreg kapcsolatai [PPT: 20–23. dia]
            </h3>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">1. Anatómiai struktúrák [PPT: 21. dia]:</h4>
            <ul>
                <li><strong>Striatum (Neostriatum / Corpus striatum):</strong> <strong>Nucleus caudatus</strong> (fej, test, farok) + <strong>Putamen</strong>.</li>
                <li><strong>Nucleus lenticularis:</strong> Putamen + Globus pallidus.</li>
                <li><strong>Globus pallidus (Pallidum):</strong> külső szegmens (<strong>GPe</strong>) és belső szegmens (<strong>GPi</strong>).</li>
                <li><strong>Középagyi és diencephalicus magvak:</strong> <strong>Substantia nigra</strong> (pars compacta [SNpc] és pars reticulata [SNpr]), valamint <strong>Nucleus subthalamicus</strong>.</li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">2. Bemenet és Kimenet logikája [PPT: 22. dia]:</h4>
            <ul>
                <li>Kevés bemenet érkezik a gerincvelő felől.</li>
                <li>A legfontosabb bemeneti struktúra: a <strong>neostriatum</strong> (bemenetek forrása: agykéreg [corticostriatalis pályák], hypothalamus, nucleus subthalamicus, substantia nigra).</li>
                <li>Fő kimenő csatorna: <strong>Globus pallidus interna (GPi)</strong> – célpontja: <strong>motoros thalamus (VA-VL magok)</strong> → motoros agykéreg.</li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">3. Direkt és Indirekt pálya [PPT: 23. dia]:</h4>
            <p>Ipsilateralis feldolgozó kör – Contralateralis hatás (a piramispálya kereszteződése miatt) [PPT: 23. dia]:</p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 1rem; margin: 1rem 0;">
                <div style="background: var(--bg); border: 2px solid var(--success); border-radius: 8px; padding: 1rem;">
                    <h5 style="color: var(--success); margin-top:0;">DIRECT PATHWAY [PPT: 23. dia]</h5>
                    <p><em>„increases excitatory thalamic input to cortex → TURNS UP motor activity”</em></p>
                    <ol>
                        <li>Cortex serkenti a Striatumot (+, glutamát).</li>
                        <li>Striatum gátolja a GPi-t (−, GABA).</li>
                        <li>A GPi gátlása feloldja a Thalamus tónusos gátlását (<strong>disinhibíció</strong>).</li>
                        <li>A VA-VL motoros talamusz serkenti a motoros kérget (+).</li>
                        <li>A motoros aktivitás megindul / fokozódik.</li>
                    </ol>
                </div>
                <div style="background: var(--bg); border: 2px solid var(--danger); border-radius: 8px; padding: 1rem;">
                    <h5 style="color: var(--danger); margin-top:0;">INDIRECT PATHWAY [PPT: 23. dia]</h5>
                    <p><em>„decreases excitatory thalamic input to cortex → TURNS DOWN motor activity”</em></p>
                    <ol>
                        <li>Cortex serkenti a Striatumot (+).</li>
                        <li>Striatum gátolja a Globus pallidus externát (GPe) (−).</li>
                        <li>A GPe kiesése felszabadítja a <strong>Nucleus subthalamicust</strong> a gátlás alól.</li>
                        <li>A Nucleus subthalamicus erősen serkenti a GPi-t (+, glutamát).</li>
                        <li>A GPi fokozottan gátolja a VA-VL Thalamust (−).</li>
                        <li>A talamusz kérgi serkentése csökken → a mozgás gátlódik.</li>
                    </ol>
                </div>
            </div>

            <!-- VI. DOPAMIN ÉS ACETILKOLIN -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                VI. A Dopamin és az Acetilkolin szerepe [PPT: 24–25. dia]
            </h3>

            <div style="background: var(--box-bg); border: 1.5px solid var(--box-border); padding: 1.2rem; border-radius: 8px; margin: 1rem 0;">
                <h4 style="color: var(--primary); margin-top:0;">A DOPAMIN FOKOZZA A MOTOROS AKTIVITÁST [PPT: 24–25. dia]:</h4>
                <p>A Substantia nigra pars compacta dopaminerg neuronjai szabályozzák a striatumot:</p>
                <ul>
                    <li><strong>D1 receptorok:</strong> $G_s$ fehérjéhez kötött → <strong>cAMP nő</strong> → <em>Turns UP the Direct Pathway</em> (serkenti a direkt pályát) [PPT: 24. dia].</li>
                    <li><strong>D2 receptorok:</strong> $G_i$ fehérjéhez kötött → <strong>cAMP csökken</strong> → <em>Turns DOWN the Indirect Pathway</em> (gátolja az indirekt pályát) [PPT: 24. dia].</li>
                    <li><strong>Közös kimenet:</strong> megnövekedett VA/VL ingerlés a kéreg felé → <strong>MORE MOTOR ACTIVITY</strong> [PPT: 24. dia].</li>
                </ul>

                <h4 style="color: var(--danger); margin-top:1rem;">Az ACETILKOLIN CSÖKKENTI A MOTOROS AKTIVITÁST [PPT: 24–25. dia]:</h4>
                <p>A striatális kolinerg interneuronok hatása:</p>
                <ul>
                    <li>Gátolja a striatum sejtjeit a direkt pályában (<em>Turns DOWN the Direct Pathway</em>) [PPT: 24–25. dia].</li>
                    <li>Serkenti a striatum sejtjeit az indirekt pályában (<em>Turns UP the Indirect Pathway</em>) [PPT: 24–25. dia].</li>
                    <li><strong>Közös kimenet:</strong> csökkent VA/VL ingerlés a kéreg felé → <strong>LESS MOTOR ACTIVITY</strong> [PPT: 24. dia].</li>
                </ul>
            </div>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">A basalis ganglionok funkciói [PPT: 26. dia]:</h4>
            <ul>
                <li>Alapvető mozgási mintázatok generálása.</li>
                <li>Motoros programok prezentálása az asszociációs cortexből érkező információk hatására.</li>
                <li>Izomtónus és mozgások szabályozása.</li>
                <li>Emocionális indíttatású mozgások elindítása.</li>
                <li>Kognitív és affektív funkciók integrációja.</li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">Károsodásuk tünetcsoportjai [PPT: 27. dia]:</h4>
            <ul>
                <li><strong>Plusz (vagy hyperkineticus) tünetek:</strong> TREMOR, RIGIDITÁS, CHOREA, ATHETOSIS, BALLISMUS.</li>
                <li><strong>Mínusz (vagy hypokineticus) tünetek:</strong> HYPO- vagy AKINESIA.</li>
            </ul>

            <!-- VII. KLINIKAI KÓRKÉPEK -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                VII. A basalis ganglionok kórképei [PPT: 28–34. dia]
            </h3>

            <!-- Parkinson -->
            <div style="background: var(--bg); border: 1.5px solid var(--border); border-left: 5px solid #2b6cb0; border-radius: 8px; padding: 1.2rem; margin-bottom: 1rem;">
                <h4 style="color: var(--primary); margin-top:0;">1. Parkinson-kór (Paralysis agitans) [PPT: 28–30. dia]</h4>
                <p>James Parkinson írta le 1817-ben (<em>„An Essay on the Shaking Palsy”</em>) [PPT: 28. dia].</p>
                <ul>
                    <li><strong>Parkinsonos triász [PPT: 28–29. dia]:</strong>
                        <ol>
                            <li><strong>Akinesia / Hypokinesia:</strong> mozgásszegénység, mozgásindítási blokk, mimikaszegény lárvaarc, csoszogó apró léptű járás karmozgás nélkül.</li>
                            <li><strong>Rigiditás:</strong> ólomcső- vagy fogaskerék-tünet (egyenletes izomtónusfokozódás flexorokban és extenzorokban).</li>
                            <li><strong>Tremor (nyugalmi):</strong> 4–6 Hz-es nyugalmi remegés („pirulagörgető” mozgás), amely akaratlagos mozgáskor csökken.</li>
                        </ol>
                    </li>
                    <li><strong>Ok [PPT: 28–29. dia]:</strong> a dopaminerg <strong>nigrostriatalis pálya károsodása</strong> (Substantia nigra pars compacta sejtjeinek pusztulása).</li>
                    <li><strong>Szövettan [PPT: 28–29. dia]:</strong> <strong>Lewy-testek</strong> (a degenerálódó dopaminerg sejtekben felhalmozódó fehérje depozitumok).</li>
                    <li><strong>Hálózati mechanizmus [PPT: 30. dia]:</strong>
                        <ul>
                            <li><em>Direkt pálya:</em> dopamin serkentés kiesik $\rightarrow$ direkt pálya aktivitása lecsökken $\rightarrow$ <strong>LESS MOTOR ACTIVITY</strong>.</li>
                            <li><em>Indirekt pálya:</em> dopamin gátlás kiesik (disinhibíció) $\rightarrow$ indirekt pálya aktivitása megnő $\rightarrow$ <strong>LESS MOTOR ACTIVITY</strong>.</li>
                        </ul>
                    </li>
                    <li><strong>Kezelés [PPT: 28–29. dia]:</strong> L-DOPA alkalmazása, mély agyi stimuláció (DBS), dopaminerg sejtek transzplantációja a striatumba (kísérleti).</li>
                </ul>
            </div>

            <!-- Huntington -->
            <div style="background: var(--bg); border: 1.5px solid var(--border); border-left: 5px solid #d69e2e; border-radius: 8px; padding: 1.2rem; margin-bottom: 1rem;">
                <h4 style="color: #b7791f; margin-top:0;">2. Huntington-kór (Huntington-chorea) [PPT: 31–33. dia]</h4>
                <p>George Huntington írta le 1872-ben [PPT: 31. dia].</p>
                <ul>
                    <li><strong>Motoros tünetek [PPT: 31. dia]:</strong> akaratlan, hirtelen megjelenő, céltalan, testszerte jelentkező <strong>choreiform mozgások</strong> („vitustánc”), melyeket a beteg képtelen irányítani vagy megakadályozni.</li>
                    <li><strong>Genetika [PPT: 31. dia]:</strong> autoszomális domináns öröklődés; 4-es kromoszóma rövid karja, <em>huntingtin</em> gén mutációja; incidencia: 5–10 / 100 000.</li>
                    <li><strong>Pszichiátriai és affektív tünetek [PPT: 31. dia]:</strong> depresszió, szorongás, ingerlékenység, apátia, pszichotikus állapot, demencia. A betegség lefolyása jelenleg nem állítható meg.</li>
                    <li><strong>Hálózati mechanizmus [PPT: 33. dia]:</strong>
                        A striatumban elpusztulnak a kolinerg sejtek és a GPe felé vetülő GABAerg neuronok (indirekt pálya) $\rightarrow$ az indirekt fék kiesik $\rightarrow$ a Thalamus gátlása megszűnik $\rightarrow$ <strong>MORE MOTOR ACTIVITY</strong>.
                    </li>
                </ul>
            </div>

            <!-- Hemiballismus -->
            <div style="background: var(--bg); border: 1.5px solid var(--border); border-left: 5px solid var(--danger); border-radius: 8px; padding: 1.2rem;">
                <h4 style="color: var(--danger); margin-top:0;">3. Hemiballismus [PPT: 34. dia]</h4>
                <ul>
                    <li><strong>Ok [PPT: 34. dia]:</strong> az egyik oldali <strong>Nucleus subthalamicus károsodása</strong> (leggyakrabban vascularis stroke miatt).</li>
                    <li><strong>Tünet [PPT: 34. dia]:</strong> az ellenoldali végtagokban megjelenő jellegzetes, nagy amplitúdójú, heves, dobáló, ballisztikus akaratlan mozgások.</li>
                    <li><strong>Hálózati mechanizmus [PPT: 34. dia]:</strong> az STN nem tudja serkenteni a GPi-t $\rightarrow$ az indirekt pálya leáll $\rightarrow$ megnövekedett VA/VL drive a motoros kéreg felé → <strong>MORE MOTOR ACTIVITY</strong>.</li>
                </ul>
            </div>

            <!-- VIII. MOTOROS KÉREG ÉS PÁLYÁK -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                VIII. A motoros agykéreg és a leszálló pályarendszerek [PPT: 35–39. dia]
            </h3>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">1. A mozgásszervezés kérgi mezői [PPT: 35–36. dia]:</h4>
            <ul>
                <li><strong>Primer motoros cortex (M1):</strong> Gyrus praecentralis, <strong>Brodmann 4</strong> – a motoros feladatok tényleges kivitelezése; pontszerű somatotopia jellemzi (<strong>motoros homunculus</strong>: kéz, ujjak, ajkak és arc aránytalanul nagy területtel [PPT: 35. dia]).</li>
                <li><strong>Praemotoros cortex (PMA):</strong> „Nem-primer” motoros kéreg, <strong>Brodmann 6</strong> lateralis része – az akaratlagos mozgások előkészítése. Az innen elvezetett aktivitás mindig megelőzi a primer kéreg tüzelését (<strong>„readiness” / készenléti potenciál</strong>) [PPT: 36. dia]. <em>Izolált sérülése:</em> <strong>apraxia</strong> (az összetett mozgások kivitelezése lehetetlenné válik izombénulás nélkül) [PPT: 36. dia].</li>
                <li><strong>Szupplementer motoros area (SMA):</strong> Brodmann 6 medialis felszíne – belső indíttatású, kétkezes szekvenciák koordinálása [PPT: 35. dia].</li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">2. A Tractus corticospinalis (Piramispálya) [PPT: 37–38. dia]:</h4>
            <ul>
                <li><strong>Összetétel [PPT: 37. dia]:</strong> $2 \\times 10^6$ axon.
                    <ul>
                        <li>~60%: primer motoros kéreg (M1)</li>
                        <li>~20%: praemotoros kéreg (Brodmann 6)</li>
                        <li>~20%: somatosensoros kéreg (S1)</li>
                    </ul>
                </li>
                <li><strong>Betz-féle óriás piramissejtek [PPT: 38. dia]:</strong> az V. rétegben találhatók, $2 \\times 34\\,000$ axon (~3%). Vastag, myelinizált rostok (16 μm átmérő), vezetési sebességük <strong>70 m/s (252 km/h)</strong> – a leggyorsabb kapcsolat az agy és a gerincvelő között a finom ujjmozgásokhoz.</li>
                <li><strong>Lefutás és célpontok [PPT: 37–38. dia]:</strong> Capsula interna → Pedunculus cerebri → Pons → Nyúltvelői piramisok → ellenoldali gerincvelő szürkeállománya:
                    <ul>
                        <li><em>Alfa-motoneuronok:</em> közvetlen (monoszinaptikus) kapcsolatok distalis izmokhoz, és közvetett (poliszinaptikus) kapcsolatok.</li>
                        <li><em>Gamma-motoneuronok:</em> poliszinaptikus átkapcsolódás.</li>
                        <li><em>Tractus corticospinalis lateralis:</em> a piramiskereszteződésben átkereszteződött rostok (~80–90%).</li>
                        <li><em>Tractus corticospinalis anterior:</em> elöl leszálló, szegmentálisan kereszteződő rostok (~10–20%).</li>
                    </ul>
                </li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">3. Az „Extrapyramidalis rendszer” (Agytörzsi leszálló pályák) [PPT: 39. dia]:</h4>
            <ul>
                <li>Formatio reticularis → <em>tractus reticulospinalis lateralis és medialis</em>.</li>
                <li>Vestibularis magvak → <em>tractus vestibulospinalis</em>.</li>
                <li>Nucleus ruber → <em>tractus rubrospinalis</em>.</li>
                <li>Tectum → <em>tractus tectospinalis</em> (nyaki szegmentumokba).</li>
                <li><strong>Különösen érzékeny terület [PPT: 39. dia]:</strong> <strong>Capsula interna</strong>, ahol a leszálló pályák koncentráltan futnak (tipikus stroke predilekciós hely!).</li>
            </ul>

            <!-- IX. MOTONEURON SZINDRÓMÁK -->
            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                IX. Motoneuron-szindrómák és kérgi léziók [PPT: 40–43. dia]
            </h3>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">A szomatomotoros kéreg sérülései [PPT: 40. dia]:</h4>
            <ul>
                <li><strong>„Stroke” [PPT: 40. dia]:</strong> a piramispálya kereszteződése miatt <strong>MINDIG az ellenoldali (kontralateralis) testfelet érinti</strong>.</li>
                <li><strong>Betz-sejtek kiesése (csak kísérletesen) [PPT: 40. dia]:</strong> nem jelentkezik bénulás és nincs tónusváltozás sem, csupán a kezekkel és ujjakkal végzett finom mozgások kivitelezése válik képtelenné.</li>
                <li><strong>M1 izolált sérülése (izolált piramislaesio) [PPT: 40. dia]:</strong> <strong>hypotonia</strong> (a motoros kéreg által fenntartott folyamatos tónusos stimuláció kiesése miatt).</li>
                <li><strong>Kéreg és mélyebb struktúrák együttes sérülése (Stroke – basalis ganglionok, capsula interna) [PPT: 40. dia]:</strong>
                    <ul>
                        <li><em>Akutan:</em> hypotonia, areflexia, paralysis.</li>
                        <li><em>Krónikusan:</em> hypertonia, hyperreflexia, paralysis.</li>
                    </ul>
                </li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1.5rem;">Felső vs. Alsó Motoneuron Szindróma Összehasonlítása [PPT: 41–43. dia]:</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 10px;">Jellemző</th>
                        <th style="padding: 10px;">Felső-motoneuron-szindróma (Centrális) [PPT: 41–42. dia]</th>
                        <th style="padding: 10px;">Alsó-motoneuron-szindróma (Perifériás) [PPT: 43. dia]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Lézió helye</strong></td>
                        <td>A leszálló motoros pályák sérülése bárhol (agykéreg, capsula interna, agytörzs, gerincvelő) [PPT: 41. dia].</td>
                        <td>A gerincvelői elülső szarvi motoneuronok vagy a perifériás motoros idegrostok károsodása [PPT: 43. dia].</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Kiterjedés</strong></td>
                        <td>Kiterjedt végtagbénulás (hemiplegia/paraplegia); a törzsizmok funkciója általában megtartott (kétoldali projekció miatt) [PPT: 41. dia].</td>
                        <td>Az izmok egy szűk, körülírt csoportjának érintettsége [PPT: 43. dia].</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Izomtónus</strong></td>
                        <td>Akutan: hypotonia (petyhüdt bénulás) [PPT: 41. dia];<br>Krónikusan: <strong>Spasticitás (hypertonia)</strong> [PPT: 42. dia].</td>
                        <td><strong>Hypotonia, petyhüdt bénulás</strong> [PPT: 43. dia].</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Reflexek</strong></td>
                        <td>Akutan: areflexia [PPT: 41. dia];<br>Krónikusan: <strong>Hyperreflexia</strong> (a reflexkörök reaktiválódása miatt) [PPT: 42. dia].</td>
                        <td><strong>Hypo- és areflexia</strong> (a szegmentális reflexív fizikailag megszakad) [PPT: 43. dia].</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Kóros reflexek</strong></td>
                        <td><strong>A Babinski-jel megjelenése</strong> (pozitív extensor talpi válasz) [PPT: 42. dia].</td>
                        <td><strong>Nincsenek abnormális reflexek</strong> (Babinski-jel negatív) [PPT: 43. dia].</td>
                    </tr>
                    <tr>
                        <td><strong>Izomsorvadás (Atrophia)</strong></td>
                        <td>Késői és mérsékelt (inaktivitási atrophia) [PPT: 41–42. dia].</td>
                        <td><strong>Kifejezett és gyors sorvadás</strong> az érintett izmokban (denervációs atrophia) [PPT: 43. dia].</td>
                    </tr>
                </tbody>
            </table>

            <!-- ÖSSZEGZÉS ZH-RA -->
            <div style="background: var(--box-bg); border-left: 4px solid var(--accent); padding: 1.2rem; border-radius: 8px; margin-top: 1.5rem;">
                <h4 style="margin-top: 0; color: var(--primary);">Legfontosabb vizsgapontok ZH-ra:</h4>
                <ul>
                    <li>A <strong>Purkinje-sejt</strong> a kisagykéreg egyetlen kimenete, és mindig <strong>gátló (GABA)</strong> hatást fejt ki a mély kisagyi magvakra [PPT: 4. dia].</li>
                    <li>A kisagy sérülése nem okoz plegiát, hanem <strong>ataxiát, dysmetriát, intentiós tremort, dysarthriát</strong> és <strong>dysdiadochokinesist</strong> eredményez [PPT: 8. dia].</li>
                    <li>A <strong>Dopamin mindig serkenti a mozgást</strong>: a D1 receptorokon át aktiválja a direkt pályát, a D2 receptorokon át gátolja az indirekt pályát [PPT: 24. dia]. Az <strong>Acetilkolin gátolja a mozgást</strong> [PPT: 24–25. dia].</li>
                    <li><strong>Parkinson-kórban</strong> a dopamin hiánya miatt mindkét pálya a mozgás elnyomása felé tolódik (hypokinesia, rigiditás, nyugalmi tremor) [PPT: 28–30. dia].</li>
                    <li><strong>Huntington-kórban</strong> az indirekt fék pusztul el (hyperkinesis, chorea) [PPT: 31–33. dia].</li>
                    <li><strong>Hemiballismusban</strong> az ellenoldali <em>nucleus subthalamicus</em> sérül [PPT: 34. dia].</li>
                    <li>A <strong>piramispálya</strong> óriás Betz-sejtjei 70 m/s-os sebességgel vezetik az ingerületet a legfinomabb akaratlagos ujjmozgásokhoz [PPT: 38. dia].</li>
                    <li>Felső motoneuron károsodás krónikus tünetei: <strong>spasticitás, hyperreflexia és pozitív Babinski-jel</strong> [PPT: 42. dia].</li>
                </ul>
            </div>

        </div>
    `
});