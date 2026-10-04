// eloadasok/eloadas11.js
// 11. Előadás: A hallás, egyensúlyozás és a kémiai érzékelés (szaglás, ízlelés) élettana

window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-11",
    title: "11. Előadás – Hallás, egyensúlyozás és kémiai érzékelés (szaglás, ízlelés)",
    shortName: "Hallás, egyensúly és kémiai érzékelés",
    html: `
    <div style="line-height: 1.75; font-size: 1.02rem;">

        <!-- 1. BLOKK: BEVEZETÉS ÉS A HANG FIZIKAI TULAJDONSÁGAI (1-7. DIA) -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 1–7. Dia: Bevezetés a hallásba és a hang fizikai alapjai</h3>
            <p>
                A hallás és az egyensúlyozás mechanikai energiát alakít át elektromos receptorpotenciállá. Mindkét rendszer közös alapreceptora a szekunder érzékhámsejtnek minősülő <strong>szőrsejt</strong>.
            </p>
            <ul>
                <li><strong>A hang mint fizikai jelenség (3–4. dia):</strong> A hang a levegő részecskéinek longitudinális mechanikai nyomáshulláma (sűrűsödési és ritkulási fázisok ritmikus terjedése). Három kulcsparamétere van:
                    <ul>
                        <li><em>Frekvencia (f, Hz):</em> Időegység alatti rezgésszám, a <strong>hangmagasságot</strong> határozza meg.</li>
                        <li><em>Amplitúdó (&Delta;p):</em> A maximális nyomásváltozás nagysága, a <strong>hangintenzitást és hangerőt</strong> szabja meg.</li>
                        <li><em>Hullámhossz (&lambda; = c / f):</em> Két sűrűsödési csúcs térbeli távolsága a közegbeli terjedési sebesség (c) függvényében.</li>
                    </ul>
                </li>
                <li><strong>Tiszta hang vs. Összetett hang és hangszín (4. dia):</strong>
                    <ul>
                        <li><em>Tiszta hang:</em> Egyetlen szinuszos frekvenciából áll (pl. hangvilla).</li>
                        <li><em>Összetett zenei hang:</em> Egy <strong>alapfrekvenciából</strong> és annak egész számú többszöröseiből, a <strong>felharmonikusokból</strong> tevődik össze (1 oktáv = az alapfrekvencia pontos megkétszerezése).</li>
                        <li><em>Hangszín (Timbre):</em> A felharmonikusok relatív jelenléte és amplitúdóaránya adja meg a hangszer vagy emberi hang egyedi karakterét (ezért szól máshogy ugyanaz az 'A' hang fuvolán és hegedűn).</li>
                    </ul>
                </li>
                <li><strong>A Decibel (dB) skála és a fül érzékenysége (5–7. dia):</strong>
                    <ul>
                        <li><em>Miért dB skálát használunk?</em> A fül által érzékelt legkisebb és legnagyobb hangintenzitás között mintegy <strong>10¹²-szeres (egymillió-milliószoros)</strong> különbség van. Ezt a hatalmas dinamikát logaritmikus skálával kezeljük: <code>L (dB) = 20 &bull; log₁₀(P / P₀)</code>.</li>
                        <li><em>Referencia-hangnyomás (P₀):</em> <strong>2 &times; 10⁻⁵ N/m² (20 &mu;Pa)</strong>, ami a 2000 Hz-nél még éppen hallható küszöbnyomás.</li>
                        <li><em>Fontos:</em> <strong>A 0 dB NEM azt jelenti, hogy nincs hang!</strong> A 0 dB az emberi hallásküszöböt jelenti (ahol P = P₀, így log₁₀(1) = 0). Minden +10 dB tízszeres, minden +20 dB százszoros energiát jelent.</li>
                        <li><em>Károsodási határok:</em> A normál beszéd 50–60 dB, a fájdalomküszöb 120–130 dB, de <strong>90–100 dB feletti tartós zajexpozíció már maradandó Corti-szervi szőrsejtpusztulást okoz</strong>.</li>
                        <li><em>Phon skála és izofon görbék (6–7. dia):</em> Az emberi fül 20 Hz és 20 000 Hz között hall, de nem egyformán érzékeny. Legérzékenyebb a <strong>2000–5000 Hz</strong> közötti sávban (beszédhangok). Az azonos dB nem jelent azonos szubjektív hangosságot. <strong>Phon:</strong> az adott hanggal megegyező hangosságúnak érzett 1000 Hz-es tiszta hang decibel-értéke.</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- 2. BLOKK: A FÜL ANATÓMIÁJA ÉS AZ IMPEDANCIAILLESZTÉS (8-11. DIA) -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 8–11. Dia: A külső- és középfül: Hallójárati rezonancia és impedanciaillesztés</h3>
            <p><strong>Hogyan jut el a levegőben terjedő nyomáshullám a folyadékkal teli belső fülbe?</strong></p>
            <ul>
                <li><strong>Külső fül (8–9. dia):</strong> A fülkagyló összegyűjti és a térbeli lokalizációhoz irányfüggően megszűri a hangot. A külső hallójárat egy vakon végződő cső, amelynek saját rezonanciafrekvenciája van: a <strong>2000–5000 Hz közötti hangokat 10–15 dB-lel felerősíti</strong>.</li>
                <li><strong>A középfül impedanciaillesztése (10. dia):</strong>
                    <ul>
                        <li><em>Az akusztikai probléma:</em> A levegő alacsony akusztikai impedanciájú közeg, míg a cochleáris folyadék (perilympha) magas impedanciájú. Ha a hang közvetlenül a folyadékfelszínre érkezne, <strong>az energia 99%-a visszaverődne</strong>, és mindössze 1% jutna be a belső fülbe.</li>
                        <li><em>A mechanikai megoldás:</em> A hallócsontocskák (malleus / kalapács, incus / üllő, stapes / kengyel) mechanikai transzformátorként illesztik az impedanciát:
                            <br>1. <strong>Felületarány:</strong> A dobhártya rezgő felülete (kb. 55 mm²) jóval nagyobb, mint a kengyeltalp / ovális ablak felülete (kb. 3,2 mm²). Ez kb. <strong>17-szeres nyomáskoncentrációt</strong> eredményez.
                            <br>2. <strong>Emelőhatás:</strong> A kalapács nyele hosszabb, mint az üllő hosszú nyúlványa, ez kétkarú emelőként további kb. <strong>1,3-szeres erőnövekedést</strong> ad.
                            <br>&rarr; <em>Összességében:</em> 17 &times; 1,3 = <strong>kb. 20–22-szeres nyomásfokozódás jön létre</strong> az ovális ablakon, ami veszteségmentesen mozgatja meg a perilymphát.
                        </li>
                    </ul>
                </li>
                <li><strong>Középfülizmok és az akusztikus reflex (11. dia):</strong>
                    <ul>
                        <li><strong>m. stapedius:</strong> A <em>n. facialis (VII.)</em> idegzi be. Kontrakciója elhúzza a kengyeltalpát az ovális ablaktól, csökkentve a hangátvitelt. Erős hangoknál (&gt;80 dB) kétoldali reflexet ad. A VII. agyideg bénulásakor a reflex kiesik, ami <strong>hyperacusishoz</strong> (a hangok bántóan hangos észleléséhez) vezet.</li>
                        <li><strong>m. tensor tympani:</strong> A <em>n. trigeminus (V/3 motoros ág)</em> idegzi be. A kalapácshoz tapad, feszíti a dobhártyát.</li>
                        <li><em>Klinikai korlát:</em> Az akusztikus reflex latenciaideje 25–150 ms. Ezért <strong>lassú, tartós zajok ellen véd, de a hirtelen robbanás/lövés impulzuszaja ellen nem nyújt védelmet</strong>, mert a hullám már átért, mire az izom összehúzódna.</li>
                        <li><em>Vokális és rágási adaptáció:</em> Beszéd, rágás és nyelés előtt az agytörzsi motoros központok előre összehúzzák ezeket az izmokat, hogy a saját magunk által keltett csontvezetett hangok ne tompítsák el a hallásunkat.</li>
                    </ul>
                </li>
            </ul>

            <div style="text-align: center; margin: 1.5rem 0;">
                <svg viewBox="0 0 620 180" style="max-width: 100%; height: auto; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
                    <line x1="80" y1="30" x2="80" y2="150" stroke="#facc15" stroke-width="6"/>
                    <text x="80" y="170" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">Dobhártya (55 mm²)</text>
                    <line x1="80" y1="70" x2="200" y2="70" stroke="#94a3b8" stroke-width="4"/>
                    <line x1="200" y1="70" x2="250" y2="90" stroke="#94a3b8" stroke-width="4"/>
                    <circle cx="200" cy="70" r="5" fill="#ef4444"/>
                    <text x="170" y="55" fill="#ef4444" font-size="10">Forgáspont (1,3x emelő)</text>
                    <line x1="260" y1="75" x2="260" y2="105" stroke="#38bdf8" stroke-width="6"/>
                    <text x="260" y="125" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Ovális ablak (3,2 mm²)</text>
                    <rect x="270" y="40" width="320" height="100" fill="#1e3a8a" opacity="0.4" rx="6"/>
                    <text x="430" y="75" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Cochlearis perilympha</text>
                    <text x="430" y="98" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">22-szeres nyomásfokozódás!</text>
                    <text x="430" y="120" fill="#cbd5e1" font-size="11" text-anchor="middle">Impedanciaillesztés nélkül az energia 99%-a visszaverődne.</text>
                </svg>
            </div>
        </div>

        <!-- 3. BLOKK: A COCHLEA, SZŐRSEJTEK ÉS AZ UTAZÓHULLÁM (12-18. DIA) -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 12–18. Dia: A csiga biofizikája: Corti-szerv, szőrsejtek és a Békésy-féle utazóhullám</h3>
            <p><strong>A belső fül anatómiája és az endocochlearis potenciál (12–14. dia):</strong></p>
            <ul>
                <li>A cochlea 3 folyadéktérre oszlik:
                    <ul>
                        <li><strong>Scala vestibuli:</strong> Perilympha tölti ki (Na⁺-gazdag, 0 mV).</li>
                        <li><strong>Scala tympani:</strong> Perilympha (0 mV), a kerek ablaknál ér véget.</li>
                        <li><strong>Scala media (Ductus cochlearis):</strong> <strong>Endolympha</strong> tölti ki, amit a stria vascularis termel. Egyedülálló összetételű: magas K⁺ és rendkívül alacsony Na⁺.</li>
                        <li><em>Endocochlearis potenciál (+80 mV):</em> Az endolympha +80 mV-ra van töltve a perilymphához képest. Mivel a szőrsejt belseje -45 és -70 mV közötti, <strong>a szőrsejt csúcsi membránján keresztül 125–150 mV-os elektrokémiai hajtóerő segíti a K⁺ beáramlását</strong>.</li>
                    </ul>
                </li>
            </ul>

            <p style="margin-top: 1rem;"><strong>Corti-szerv: Belső (IHC) és Külső (OHC) szőrsejtek (15, 17. dia):</strong></p>
            <ul>
                <li><strong>Belső szőrsejtek (IHC - Inner Hair Cells):</strong>
                    <br>• ~3500 sejt, 1 sorban.
                    <br>• <strong>Az afferens hallóidegrostok 90–95%-a kizárólag az IHC-kkel szinaptizál.</strong>
                    <br>• <em>Funkció:</em> Valódi szekunder érzékhámsejtek, ők a hallás elsődleges szenzorai: <strong>„IHC = amit az agy hall”</strong>.
                </li>
                <li><strong>Külső szőrsejtek (OHC - Outer Hair Cells) és a Cochlearis Erősítő:</strong>
                    <br>• ~12 000 sejt, 3 sorban, stereociliumaik beágyazódnak a tectorialis membránba.
                    <br>• <strong>Elektromotilitás:</strong> Membránjuk tele van egy feszültségfüggő motorfehérjével, a <strong>prestinnel</strong>. Depolarizációra az OHC megrövidül, hiperpolarizációra megnyúlik.
                    <br>• <em>Funkció:</em> <strong>Cochlearis amplifier (akusztikus erősítő)</strong>: a basilaris membrán rezgését helyben mechanikusan felerősítik és kiélezik. Nélkülük a hallásunk 40–50 dB-lel tompább lenne. <strong>„OHC = ahogyan a cochlea ráhangol”</strong>.
                </li>
            </ul>

            <p style="margin-top: 1rem;"><strong>A mechanotranszdukció lépései a szőrsejten (15. dia):</strong></p>
            <ol>
                <li>A basilaris membrán kitérésekor a szőrsejt stereociliumai elhajlanak a leghosszabb felé.</li>
                <li>A stereociliumok csúcsait összekötő <strong>tip-link (fehérjeszál) megfeszül</strong>.</li>
                <li>A feszülés kinyitja a mechanoszenzitív kationcsatornákat.</li>
                <li><strong>K⁺-ionok áramlanak BE</strong> a magas K⁺-tartalmú endolymphából a sejtbe. (Itt a K⁺ depolarizál, mert a hajtóerő befelé mutat).</li>
                <li>A depolarizáció hatására a basolateralis membrán feszültségfüggő Ca²⁺-csatornái megnyílnak.</li>
                <li>A beáramló Ca²⁺ <strong>glutamát neurotranszmittert</strong> szabadít fel az afferens idegrostra.</li>
                <li>Ha a stereociliumok ellentétes irányba (a rövidebbek felé) hajlanak: a tip-link lazul, a csatornák záródnak, a sejt hiperpolarizálódik és a transzmitterleadás leáll.</li>
            </ol>

            <p style="margin-top: 1rem;"><strong>Békésy György utazóhullám-elmélete és a Tonotópia (16, 18. dia):</strong></p>
            <ul>
                <li>A basilaris membrán tulajdonságai változnak a csiga mentén:
                    <br>• A <strong>bázisnál (ovális ablak közelében): keskeny és merev</strong> &rarr; a <strong>magas frekvenciájú hangok</strong> váltanak ki maximális kitérést.
                    <br>• A <strong>csúcsnál (apex / helicotrema): széles és rugalmas</strong> &rarr; az <strong>alacsony frekvenciájú hangok</strong> váltanak ki maximális kitérést.
                </li>
                <li><strong>Utazóhullám (Travelling wave):</strong> A stapes mozgása hullámot indít el a basilaris membránon, amely végigfut, de amplitúdója egy meghatározott ponton éri el a csúcsát, majd hirtelen lecseng. Az ott lévő szőrsejtek aktiválódnak a legerősebben.</li>
                <li><strong>Tonotópia (Helykód):</strong> A frekvencia térbeli elhelyezkedéssé alakul a csigában, amit a hallópálya és a hallókéreg mindvégig megtart (Békésy György Nobel-díj, 1961).</li>
            </ul>
        </div>

        <!-- 4. BLOKK: LOKALIZÁCIÓ, PÁLYA ÉS KÓRFORTEK (19-21. DIA) -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 19–21. Dia: Binaurális hanglokalizáció, a hallópálya és halláscsökkenések</h3>
            <p><strong>Honnan jön a hang? Binaurális összehasonlítás az agytörzsben (19. dia):</strong></p>
            <ul>
                <li><strong>ITD (Interaural Time Difference - Időkülönbség):</strong> Alacsony frekvenciákon (&lt;1,5–2 kHz) a hang előbb éri el a közelebbi fület, mint a távolabbit. Átkapcsolási magja: <strong>Oliva superior medialis (MSO)</strong>.</li>
                <li><strong>ILD (Interaural Level Difference - Intenzitáskülönbség):</strong> Magas frekvenciákon (&gt;2–3 kHz) a koponya hangárnyékot vet, így a távolabbi fülben halkabb a hang. Átkapcsolási magja: <strong>Oliva superior lateralis (LSO)</strong>.</li>
            </ul>

            <p style="margin-top: 1rem;"><strong>A hallópálya állomásai (20. dia):</strong></p>
            <ol>
                <li>Cochlea (IHC szőrsejtek).</li>
                <li>Nervus cochlearis (VIII. agyideg hallóága, ganglion spirale).</li>
                <li>Cochleáris magvak (nyúltvelő-híd határ).</li>
                <li><strong>Oliva superior komplexum</strong> (itt válik kétoldalivá az ingerület).</li>
                <li>Lemniscus lateralis &rarr; Colliculus inferior (középagy).</li>
                <li>Corpus geniculatum mediale (CGM, Thalamus).</li>
                <li><strong>Primer hallókéreg (A1 / Brodmann 41, 42, Heschl-gyrus):</strong> Temporalis lebeny felső része. Mivel a pálya kétoldali, <strong>féloldali kérgi sérülés nem okoz egyoldali süketséget</strong>, csak a térbeli lokalizáció romlik.</li>
            </ol>

            <p style="margin-top: 1rem;"><strong>Halláscsökkenések típusai (21. dia):</strong></p>
            <ul>
                <li><strong>Vezetéses (Konduktív):</strong> Külső fül (fülzsír) vagy középfül (dobhártya-perforáció, <em>otosclerosis</em>). A belső fül ép, csontvezetéssel a hang hallható (Rinne-teszt negatív).</li>
                <li><strong>Szenzorineurális (Idegi):</strong> Szőrsejtek károsodása (zajártalom, aminoglikozid antibiotikumok) vagy a n. cochlearis sérülése. Lég- és csontvezetés egyaránt romlik. Időskori halláscsökkenésnél (presbyacusis) a bázis magas frekvenciái vesznek el először.</li>
            </ul>
        </div>

        <!-- 5. BLOKK: AZ EGYENSÚLYOZÁS ÉLETTANA (22-37. DIA) -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 22–37. Dia: A vesztibuláris rendszer és az egyensúlyozás reflexei</h3>
            <p><strong>Multiszenzoros integráció:</strong> Az egyensúlyt a <strong>Vesztibuláris rendszer + Látás + Propriocepció</strong> együttesen biztosítja.</p>
            <ul>
                <li><strong>Vesztibuláris szőrsejtek (26. dia):</strong> A stereociliumok mellett egy vaskos <strong>kinocilium</strong> található. A kinocilium felé dőlés depolarizációt (tüzelés &uarr;), a kinociliumtól elfelé dőlés hiperpolarizációt (tüzelés &darr;) vált ki. Nyugalomban is van alaptüzelés.</li>
                <li><strong>Félkörös ívjáratok (27–28. dia):</strong>
                    <ul>
                        <li>3 ívjárat (anterior, posterior, lateralis), receptormezőjük az ampullában lévő <strong>crista ampullaris</strong>, kocsonyás <strong>cupulával</strong>.</li>
                        <li><em>Adekvát inger:</em> <strong>SZÖGGYORSULÁS (fejrotáció)</strong>. Állandó sebességű forgásra nem reagálnak, csak a gyorsulásra és lassulásra.</li>
                        <li><em>Push-pull elv (28. dia):</em> A két oldal szinergista párokat alkot (pl. balra forgatásnál a bal horizontális ívjárat gerjed, a jobb horizontális gátlódik).</li>
                    </ul>
                </li>
                <li><strong>Otolith szervek: Utriculus és Sacculus (29. dia):</strong>
                    <ul>
                        <li>Receptormező: <strong>macula</strong>. A szőrsejteket kalcium-karbonát kristályokat tartalmazó <strong>otolith-membrán</strong> fedi.</li>
                        <li><em>Adekvát inger:</em> <strong>LINEÁRIS GYORSULÁS és GRAVITÁCIÓ</strong>.</li>
                        <li><strong>Utriculus:</strong> Vízszintes elrendezés &rarr; horizontális lineáris gyorsulás (autó indulása/fékezése) és fej oldalra döntése.</li>
                        <li><strong>Sacculus:</strong> Függőleges elrendezés &rarr; vertikális gyorsulás (lift) és gravitáció.</li>
                    </ul>
                </li>
                <li><strong>Vesztibuláris reflexek (30–32. dia):</strong>
                    <ul>
                        <li><strong>Vestibulospinalis reflex (VSR):</strong> Az extensor izmok tónusát szabályozza a testtartás automatikus megtartásához.</li>
                        <li><strong>Vestibulo-ocularis reflex (VOR):</strong> A szemizmokat a fejmozgással azonos sebességgel, de ellentétes irányba mozgatja, stabilizálva a retinális képet.</li>
                        <li><strong>Kinetosis (Mozgásbetegség):</strong> Szenzoros konfliktus (a szem nyugalmat jelez, a vesztibuláris rendszer mozgást) váltja ki a vegetatív tüneteket (szédülés, hányinger).</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- 6. BLOKK: KÉMIAI ÉRZÉKELÉS: SZAGLÁS (1-16. DIA) -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 Kémiai érzékelés: A szaglás élettana (1–16. dia)</h3>
            <p><strong>A szaglóhám és a szaganyagok felismerése (1–7. dia):</strong></p>
            <ul>
                <li>A szaglóhámban lévő szaglóneuronok <strong>bipoláris primer érzősejtek</strong>, melyek csillói a nyálkarétegbe nyúlnak. A bazális sejtekből 4–6 hetente folyamatosan regenerálódnak.</li>
                <li><strong>Szagreceptorok (Buck & Axel, Nobel-díj 2004):</strong> ~350–400 funkcionális 7-TM G-fehérje kapcsolt receptor. <strong>Egy neuron kizárólag egyetlen receptortípust fejez ki!</strong></li>
            </ul>

            <p style="margin-top: 1rem;"><strong>A szaglási jelátvitel lépései (8. dia):</strong></p>
            <ol>
                <li>Szagmolekula kötődik a 7-TM receptorhoz &rarr; <strong>G_olf fehérje</strong> aktiválódik.</li>
                <li>Adenilát-cikláz III aktiváció &rarr; <strong>cAMP szint nő</strong>.</li>
                <li>A cAMP kinyitja a <strong>CNG kationcsatornákat</strong> &rarr; Na⁺ és Ca²⁺ áramlik a sejtbe.</li>
                <li>A Ca²⁺ kinyitja a <strong>Ca²⁺-aktivált Cl⁻-csatornákat (Anoctamin-2)</strong>. A magas belső klorid miatt <strong>Cl⁻ ÁRAMLIK KI, ami jelentős járulékos depolarizációt okoz</strong>!</li>
                <li>Akciós potenciál indul az axonon a bulbus olfactoriusba.</li>
            </ol>

            <p style="margin-top: 1rem;"><strong>Központi feldolgozás (9–13. dia):</strong></p>
            <ul>
                <li><strong>Glomerulusok:</strong> Az azonos receptort kifejező szaglósejtek axonjai ugyanabba a glomerulusba futnak be (~1000:1 konvergencia a mitrális sejtekre). A szagokat az aktivált glomerulusok térbeli mintázata kódolja.</li>
                <li><strong>Pálya:</strong> A szaglópálya <strong>nem megy át először a thalamuson</strong>! Közvetlenül a primer szaglókéregbe (Piriform cortex), az amygdalába (érzelmek) és az entorhinalis kéregbe (memória, hippocampus) vetül. A tudatos azonosítás később az orbitofrontalis kéregben történik.</li>
            </ul>
        </div>

        <!-- 7. BLOKK: KÉMIAI ÉRZÉKELÉS: ÍZLELÉS (17-29. DIA) -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 Kémiai érzékelés: Az ízérzékelés élettana (17–29. dia)</h3>
            <p><strong>Az 5 alapíz és a transzdukció molekuláris mechanizmusai (17–25. dia):</strong></p>
            <ul>
                <li>Az ízérzősejtek módosult hámsejtek (szekunder érzéksejtek) az ízlelőbimbókban (papilla fungiformis, foliata, circumvallata; a filiformis nem tartalmaz ízlelőbimbót!).</li>
                <li><strong>Sós íz:</strong> Na⁺ lép be az <strong>ENaC</strong> csatornán &rarr; depolarizáció &rarr; a <strong>CALHM1/3 csatornán át ATP ürül</strong> nem-vezikuláris úton az afferens idegre.</li>
                <li><strong>Savanyú íz:</strong> H⁺ protonok lépnek be az <strong>Otopetrin-1 (Otop1)</strong> csatornán &rarr; Kir2.1 gátlódik &rarr; depolarizáció &rarr; feszültségfüggő Ca²⁺ csatornák nyílnak &rarr; transzmitterürülés.</li>
                <li><strong>Édes, Umami, Keserű (II. típusú sejtek közös kaszkádja):</strong>
                    <ul>
                        <li><em>Édes:</em> <strong>T1R2 + T1R3</strong> heterodimer.</li>
                        <li><em>Umami:</em> <strong>T1R1 + T1R3</strong> heterodimer.</li>
                        <li><em>Keserű:</em> <strong>T2R</strong> receptorcsalád tagjai (~30 típus).</li>
                        <li><em>Jelátvitel:</em> Ligandkötés &rarr; <strong>Gustducin</strong> &rarr; <strong>PLC&beta;2</strong> aktiváció &rarr; IP₃ képződik &rarr; Ca²⁺ szabadul fel az ER-ből &rarr; a <strong>TRPM5 csatorna kinyílik</strong> &rarr; Na⁺ beáramlás miatti depolarizáció &rarr; a <strong>CALHM1/3 csatornán át ATP szabadul fel</strong>.</li>
                    </ul>
                </li>
            </ul>

            <p style="margin-top: 1rem;"><strong>Ízérző pályarendszer (26–27. dia):</strong></p>
            <ul>
                <li>Nyelv elülső 2/3: <strong>VII. agyideg (chorda tympani)</strong>; hátsó 1/3: <strong>IX. agyideg</strong>; garat/epiglottis: <strong>X. agyideg</strong>.</li>
                <li>Átkapcsolás: <strong>Nucleus tractus solitarii (NTS)</strong> &rarr; Thalamus <strong>VPM mag</strong> &rarr; <strong>Primer ízérző kéreg: Insula</strong> és gyrus postcentralis bázisa.</li>
            </ul>
        </div>

        <!-- ÖSSZEFOGLALÓ KÁRTYA -->
        <div style="background: #fffaf0; border: 1.5px solid #feebc8; border-radius: 8px; padding: 1.2rem; margin-top: 1.5rem;">
            <h4 style="color: #b7791f; margin-bottom: 0.4rem;">💡 Kulcsfogalmak a vizsgára a 11. előadásból:</h4>
            <p style="margin: 0; font-size: 0.95rem;">
                <strong>1. Hallásfizika:</strong> 20–20 000 Hz tartomány, legérzékenyebb 2–5 kHz. 0 dB = hallásküszöb. Phon = szubjektív hangosságszint (1 kHz dB-értéke).<br>
                <strong>2. Impedanciaillesztés:</strong> Dobhártya/ovális ablak felületarány (17x) + hallócsont emelőhatás (1,3x) &rarr; ~22-szeres nyomásfokozódás a középfülben.<br>
                <strong>3. Akusztikus reflex:</strong> m. stapedius (VII) és m. tensor tympani (V/3). Latenciája 25–150 ms (nem véd robbanás ellen). Kiesése hyperacusist okoz.<br>
                <strong>4. Cochlea:</strong> Endolympha (+80 mV, magas K⁺). K⁺-beáramlás depolarizál tip-link feszüléskor. IHC (fő érzékelő) vs. OHC (prestin, elektromotilitás, erősítő).<br>
                <strong>5. Békésy utazóhullám:</strong> Bázis = keskeny/merev (magas frekvencia); Apex = széles/laza (mély frekvencia) &rarr; Tonotópia.<br>
                <strong>6. Vesztibuláris:</strong> Ívjáratok = szöggyorsulás (ampulla, cupula, push-pull); Otolithok = lineáris gyorsulás/gravitáció (macula, otoconia; Utriculus=vízszintes, Sacculus=függőleges). Kinocilium felé dőlés depolarizál. VOR és VSR reflexek.<br>
                <strong>7. Szaglás:</strong> Bipoláris neuronok (4-6 hetes megújulás). 1 neuron = 1 receptortípus. G_olf &rarr; ACIII &rarr; cAMP &rarr; CNG csatorna &rarr; Ca²⁺-aktivált Cl⁻ kiáramlás (depolarizál). Nem megy át először a thalamuson.<br>
                <strong>8. Ízérzés:</strong> Sós = ENaC; Savanyú = Otop1; Édes (T1R2+T1R3), Umami (T1R1+T1R3), Keserű (T2R) &rarr; Gustducin &rarr; PLC&beta;2 &rarr; IP₃ &rarr; Ca²⁺ &rarr; TRPM5 &rarr; CALHM1/3-on át ATP ürülés. VII, IX, X &rarr; NTS &rarr; VPM thalamus &rarr; Insula.
            </p>
        </div>

    </div>
    `
});