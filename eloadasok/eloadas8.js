// eloadasok/eloadas8.js
// 8. Előadás: Transzporterek, a GABA-switch, centrális glutamáterg és GABAerg szinapszisok, szinaptikus plaszticitás (LTP és LTD)

window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-8",
    title: "8. Előadás – Transzporterek, GABA-switch, NMDA/AMPA és szinaptikus plaszticitás",
    shortName: "GABA-switch, szinapszisok és LTP",
    html: `
    <div style="line-height: 1.75; font-size: 1.02rem;">

        <!-- BEVEZETÉS ÉS HÁTTÉR -->
        <div style="background: rgba(43, 108, 176, 0.08); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">🎙️ Tanári bevezetés a 8. előadáshoz</h3>
            <p>
                A tanár kiemeli: a korábbiakban az ioncsatornákról volt szó, most viszont áttérünk a <strong>pumpákra és transzporterekre</strong>, amelyek az intracelluláris ionkörnyezetet (különösen a kalciumot, a kloridot és a pH-t) tartják fenn[cite: 6, 7]. 
                Ezután megnézzük a központi idegrendszer két legfontosabb neurotranszmitterét (a serkentő <em>glutamátot</em> és a gátló <em>GABA-t</em>), azok receptorait, és levezetjük, hogyan működik a tanulás és a memóriatárolás élettani alapja: a <strong>szinaptikus plaszticitás (LTP és LTD)</strong>[cite: 6, 7]!
            </p>
        </div>

        <!-- 17-18. DIA: TRANSZPORTEREK ÉS A GABA-SWITCH -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 17–18. Dia: A neuronális transzporterek és a „GABA-switch” jelenség</h3>
            <p><strong>A neuronális környezetet szabályozó transzporterek és pumpák[cite: 7]:</strong></p>
            <ul>
                <li><strong>Na⁺/K⁺-ATPáz:</strong> A nyugalmi nátrium- és kálium-koncentrációgrádiensek alapvető fenntartója (3 Na⁺ ki, 2 K⁺ be, ATP bontása mellett)[cite: 7].</li>
                <li><strong>Intracelluláris Ca²⁺ eltávolítása:</strong> A nyugalmi nanomoláris Ca²⁺-szint fenntartására két fő mechanizmus szolgál: a nagy affinitású <em>Ca²⁺/Mg²⁺-ATPáz (PMCA)</em>, valamint a nagy kapacitású <em>Na⁺/Ca²⁺ cserélő (NCX)</em>, amely a tanár szóbeli pontosítása szerint <strong>3 Na⁺ beáramlása terhére 1 Ca²⁺ iont pumpál ki</strong> a sejtből[cite: 6, 7].</li>
                <li><strong>Intracelluláris pH szabályozása:</strong> A <em>Na⁺/H⁺ cserélő (NHE)</em> és a <em>Cl⁻/HCO₃⁻ cserélő</em> mechanizmusokon keresztül történik[cite: 6, 7]. Ennek komoly jelentősége van, mert az intracelluláris pH eltolódása alapvetően módosítja a szinapszisok működését és az ingerlékenységet[cite: 6].</li>
            </ul>

            <p style="margin-top: 1rem;"><strong>A klorid-egyensúly és a fejlődéstani „GABA-switch” (kiemelt vizsgaanyag!)[cite: 6, 7]:</strong></p>
            <ul>
                <li>A GABA<sub>A</sub>-receptor kloridcsatorna[cite: 6, 7]. A Cl⁻ áramlási irányát mindig a membránpotenciál és a klorid Nernst-potenciálja (E<sub>Cl</sub>) közötti viszony határozza meg[cite: 6]. Ezt a belső [Cl⁻]<sub>i</sub> koncentrációt két transzporter egyensúlya szabja meg[cite: 6, 7]:
                    <ul>
                        <li><strong>NKCC1 (Na⁺-K⁺-2Cl⁻ kotranszporter):</strong> Cl⁻-t visz <strong>BEFELÉ</strong> a sejtbe[cite: 6, 7].</li>
                        <li><strong>KCC2 és KCC3 (K⁺-Cl⁻ kotranszporter):</strong> Cl⁻-t transzportál <strong>KIFELÉ</strong> a sejtből[cite: 6, 7].</li>
                    </ul>
                </li>
                <li><strong>A GABA-switch lényege[cite: 6, 7]:</strong>
                    <ul>
                        <li><strong>Magzati / korai életkorban:</strong> Az <strong>NKCC1 dominál</strong>[cite: 6, 7]. Emiatt a neuron belsejében szokatlanul magas a kloridkoncentráció ([Cl⁻]<sub>i</sub> &approx; 25 mM)[cite: 6, 7]. A klorid egyensúlyi potenciálja így <strong>-40 mV</strong> körül alakul[cite: 6, 7]. Amikor a GABA kinyitja a GABA<sub>A</sub>-receptort, a kloridionok a sejt belsejéből <em>kifelé áramlanak</em> (anionkiáramlás = depolarizáció!), ami akciós potenciálokat vált ki[cite: 6, 7]! <strong>A magzati korban a GABA serkentő hatású</strong>, ami elengedhetetlen a fejlődő agykéreg strukturálódásához[cite: 6, 7]!</li>
                        <li><strong>Felnőttkorban:</strong> Bekapcsol a <strong>KCC2 expressziója</strong>, amely kiszivattyúzza a kloridot ([Cl⁻]<sub>i</sub> &approx; 7 mM-ra csökken), így E<sub>Cl</sub> mélyen negatívvá válik (<strong>-70 / -75 mV</strong>)[cite: 6, 7]. A GABA receptor nyitásakor a klorid befelé áramlik &rarr; <strong>hiperpolarizáció (IPSP), azaz klasszikus gátlás</strong> jön létre[cite: 6, 7].</li>
                        <li><em>Különbség fajok között:</em> A tanár kiemeli, hogy főemlősökben és emberben a GABA-switch még a születés előtt lezajlik, míg rágcsálókban a születés utáni napokban figyelhető meg[cite: 6].</li>
                    </ul>
                </li>
            </ul>

            <!-- GABA switch SVG ábra -->
            <div style="text-align: center; margin: 1.5rem 0;">
                <svg viewBox="0 0 650 220" style="max-width: 100%; height: auto; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
                    <!-- Magzati állapot -->
                    <circle cx="160" cy="110" r="55" fill="#3b0764" stroke="#c084fc" stroke-width="2"/>
                    <text x="160" y="80" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">Magzati kor: NKCC1 dominál</text>
                    <text x="160" y="105" fill="#cbd5e1" font-size="11" text-anchor="middle">Magas [Cl⁻]ᵢ &approx; 25 mM</text>
                    <text x="160" y="125" fill="#facc15" font-size="11" text-anchor="middle">E_Cl &approx; -40 mV</text>
                    <text x="160" y="150" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">GABA = DEPOLARIZÁCIÓ (Serkentés!)</text>

                    <!-- Fejlődési nyíl -->
                    <path d="M 250 110 L 370 110" stroke="#facc15" stroke-width="3" marker-end="url(#arrow)"/>
                    <text x="310" y="95" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">"GABA-switch"</text>

                    <!-- Felnőtt állapot -->
                    <circle cx="480" cy="110" r="55" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
                    <text x="480" y="80" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Felnőtt kor: KCC2 expresszió</text>
                    <text x="480" y="105" fill="#cbd5e1" font-size="11" text-anchor="middle">Alacsony [Cl⁻]ᵢ &approx; 7 mM</text>
                    <text x="480" y="125" fill="#facc15" font-size="11" text-anchor="middle">E_Cl &approx; -75 mV</text>
                    <text x="480" y="150" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">GABA = HIPERPOLARIZÁCIÓ (Gátlás!)</text>
                </svg>
                <div style="font-size: 0.85rem; color: #718096; margin-top: 4px;">17–18. Dia: A GABA-switch transzporter-háttere és a klorid-áramlás iránya[cite: 7].</div>
            </div>
        </div>

        <!-- 19-20. DIA: CENTRÁLIS SZINAPTIKUS VÁLASZOK (EPSP ÉS IPSP BIOFIZIKÁJA) -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 19–20. Dia: A posztszinaptikus elektromos válasz: EPSP és IPSP</h3>
            <p><strong>Mi határozza meg a szinaptikus potenciál megfordulási (reverzál) potenciálját?[cite: 6, 7]</strong></p>
            <ul>
                <li><strong>EPSP (Excitatórikus posztszinaptikus potenciál)[cite: 7]:</strong>
                    <ul>
                        <li><em>Jellege:</em> Helyi, gradált depolarizáció[cite: 7].</li>
                        <li><em>Csatorna:</em> Nem-specifikus kationcsatornák (AMPA, NMDA, nAChR), amelyek átengedik a Na⁺, K⁺ (és esetleg Ca²⁺) ionokat[cite: 6, 7].</li>
                        <li><em>Megfordulási potenciál (Reversal potential):</em> <strong>0 mV körül</strong> van[cite: 6, 7]! A tanár részletesen elmagyarázza: a Na⁺ egyensúlyi potenciálja (+60 mV), a K⁺-é (-90 mV); mivel a csatorna mindkettőt átengedi, a két érték súlyozott eredője 0 mV-ra esik[cite: 6]. Az EPSP tehát 0 mV felé törekszik depolarizálni a membránt[cite: 6]!</li>
                    </ul>
                </li>
                <li><strong>IPSP (Inhibitórikus posztszinaptikus potenciál)[cite: 7]:</strong>
                    <ul>
                        <li><em>Jellege:</em> Membránellenállás csökkenése, legtöbbször hiperpolarizáció[cite: 6, 7].</li>
                        <li><em>Csatorna:</em> Szelektív Cl⁻-csatornák (GABA<sub>A</sub>, Glicin) vagy K⁺-csatornák (GABA<sub>B</sub>)[cite: 6, 7].</li>
                        <li><em>Megfordulási potenciál:</em> Cl⁻ esetén kb. <strong>-70 / -74 mV</strong>, K⁺ esetén kb. <strong>-90 mV</strong>[cite: 6].</li>
                        <li><em>Söntölő (Shunting) gátlás:</em> A tanár kiemeli: ha a membránpotenciál éppen megegyezik a klorid egyensúlyi potenciáljával (-74 mV), a GABA<sub>A</sub>-receptor kinyílásakor látszólag semmi sem történik (nem változik a feszültség)[cite: 6]. Mégis óriási a gátló hatás, mert a nyitott kloridcsatornák „lesöntölik” a membránt: drasztikusan lecsökkentik a bemeneti ellenállást, így a beérkező serkentő EPSP-k árama egyszerűen elszivárog, és nem tudja depolarizálni a sejtet[cite: 6]!</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- 21-23. DIA: GLUTAMÁTERG TRANSZMISSZIÓ (AMPA ÉS NMDA) -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 21–23. Dia: Ionotrop glutamátreceptorok: AMPA vs. NMDA receptorok</h3>
            <p><strong>A központi idegrendszer szinapszisainak kb. 70%-a glutamáterg[cite: 6]!</strong></p>
            <ul>
                <li><strong>1. Non-NMDA receptorok (fő képviselő: AMPA-receptor)[cite: 7]:</strong>
                    <ul>
                        <li>Alegységek: GluA1–4 (heterotetramer)[cite: 7].</li>
                        <li><em>Működés:</em> Gyorsan aktiválódó és gyorsan inaktiválódó nem-szelektív kationcsatorna (Na⁺ be, K⁺ ki)[cite: 6, 7]. Általában Ca²⁺-ra nem átjárható (kivéve a GluA2-t nem tartalmazó formákat)[cite: 6].</li>
                        <li><em>Funkció:</em> A bazális, gyors szinaptikus neurotranszmisszió (a normál EPSP) létrehozója[cite: 6, 7].</li>
                    </ul>
                </li>
                <li><strong>2. NMDA-receptorok (A biológia legkülönlegesebb koincidencia-detektora!)[cite: 7]:</strong>
                    <ul>
                        <li>Alegységek: GluN1, GluN2A–D, GluN3A–B[cite: 7]. GluN1/GluN2 heterotetramerek[cite: 6].</li>
                        <li><em>Kettős aktivációs feltétel:</em>
                            <ol>
                                <li><strong>Kémiai ligandumkötés:</strong> Glutamát kötődik a GluN2-re, ÉS kötelező kotranszmitterként <strong>Glicin (vagy D-szerin)</strong> kötődik a GluN1-re[cite: 6, 7]!</li>
                                <li><strong>Elektromos feltétel (Feszültségfüggő Mg²⁺-blokk feloldása):</strong> Nyugalmi membránpotenciálon (-70 mV körül) egy extracelluláris Mg²⁺ ion dugóként ül a pórusban, mert a sejt belsejének negatív töltése oda vonzza[cite: 6, 7]. Hiába van jelen glutamát, ionáram nincs[cite: 6]! Csak akkor lökődik ki a Mg²⁺ a pórusból, ha a posztszinaptikus membrán <strong>-30 / -20 mV-ra depolarizálódik</strong> (pl. az AMPA receptorok heves működése miatt)[cite: 6, 7]!</li>
                            </ol>
                        </li>
                        <li><em>Permeabilitás:</em> Nemcsak Na⁺-t és K⁺-t enged át, hanem <strong>rendkívül nagy a Ca²⁺-áteresztő képessége</strong>[cite: 6, 7]! A beáramló Ca²⁺ másodlagos hírvivőként fehérjekinázokat (CaMKII, PKC) és NOS enzimet aktivál, elindítva a szinaptikus plaszticitást[cite: 6, 7].</li>
                        <li><em>Farmakológia:</em> Specifikus blokkolója az <strong>APV (AP-5)</strong> kísérleti szer, valamint a klinikai <strong>Memantin</strong> (Alzheimer-kórban a GluN2B gátlásával lassítja a leépülést)[cite: 6, 7].</li>
                    </ul>
                </li>
            </ul>

            <!-- NMDA és AMPA kooperáció SVG ábra -->
            <div style="text-align: center; margin: 1.5rem 0;">
                <svg viewBox="0 0 620 210" style="max-width: 100%; height: auto; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
                    <!-- Membrán kettős réteg -->
                    <rect x="20" y="80" width="580" height="20" fill="#334155" opacity="0.6"/>
                    
                    <!-- AMPA receptor -->
                    <rect x="100" y="55" width="40" height="70" fill="#38bdf8" rx="4"/>
                    <path d="M 120 40 L 120 135" stroke="#facc15" stroke-width="3" marker-end="url(#arrow)"/>
                    <text x="120" y="30" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">Na⁺ be (Depolarizáció)</text>
                    <text x="120" y="160" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">AMPA receptor</text>
                    <text x="120" y="180" fill="#cbd5e1" font-size="10" text-anchor="middle">Gyors EPSP</text>

                    <!-- Depolarizációs kapcsolat -->
                    <path d="M 150 110 C 200 110, 220 110, 260 110" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
                    <text x="205" y="100" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">Depolarizáció (-30 mV)</text>

                    <!-- NMDA receptor -->
                    <rect x="270" y="55" width="50" height="70" fill="#ec4899" rx="4"/>
                    <circle cx="295" cy="40" r="9" fill="#38bdf8"/>
                    <text x="295" y="44" fill="#000" font-size="9" font-weight="bold" text-anchor="middle">Mg²⁺</text>
                    <path d="M 295 48 L 295 20" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>
                    <path d="M 295 65 L 295 135" stroke="#22c55e" stroke-width="4" marker-end="url(#arrow)"/>
                    <text x="295" y="160" fill="#ec4899" font-size="12" font-weight="bold" text-anchor="middle">NMDA receptor</text>
                    <text x="295" y="180" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">Masszív Ca²⁺ beáramlás!</text>

                    <!-- Szöveg jobbra -->
                    <text x="400" y="75" fill="#facc15" font-size="13" font-weight="bold">Koincidencia-detekció:</text>
                    <text x="400" y="100" fill="#cbd5e1" font-size="11">1. Glutamát + Glicin jelenléte[cite: 6, 7]</text>
                    <text x="400" y="120" fill="#cbd5e1" font-size="11">2. AMPA által keltett depolarizáció[cite: 6, 7]</text>
                    <text x="400" y="140" fill="#cbd5e1" font-size="11">3. Mg²⁺ kirepül &rarr; Ca²⁺ lép be[cite: 6, 7]</text>
                    <text x="400" y="165" fill="#ec4899" font-size="12" font-weight="bold">&rarr; LTP (Hosszú távú potencírozás)[cite: 6, 7]!</text>
                </svg>
                <div style="font-size: 0.85rem; color: #718096; margin-top: 4px;">21–23. Dia: Az AMPA és NMDA receptorok együttműködése és a feszültségfüggő magnézium-blokk feloldása[cite: 7].</div>
            </div>
        </div>

        <!-- 24-25. DIA: GABAERG TRANSZMISSZIÓ ÉS FARMAKOLÓGIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 24–25. Dia: A GABAerg neurotranszmisszió és farmakológiája</h3>
            <p><strong>A központi idegrendszer fő gátló transzmittere a GABA (gamma-aminovajsav), a második a glicin[cite: 6, 7]:</strong></p>
            <ul>
                <li><strong>GABA<sub>A</sub>-receptor (Ionotrop):</strong>
                    <ul>
                        <li>Pentamer szerkezetű ligand-vezérelt Cl⁻-csatorna[cite: 6, 7]. A gyors IPSP közvetítője[cite: 6, 7].</li>
                        <li><strong>Benzodiazepinek (pl. diazepam, xanax):</strong> Nem a GABA kötőhelyre, hanem allosztérikus modulációs helyre kötődnek[cite: 6, 7]. Megnövelik a csatorna <strong>nyílási frekvenciáját</strong> (többször nyílik meg)[cite: 6, 7] &rarr; szorongásoldó, nyugtató hatás[cite: 6, 7].</li>
                        <li><strong>Barbiturátok:</strong> Szintén allosztérikus serkentők, de ők a csatorna <strong>nyitvatartási idejét (burst időtartamát) nyújtják meg</strong>[cite: 6, 7] &rarr; sokkal erősebb altató, narkotikus hatás (túladagolva halálos légzésbénulás!)[cite: 6, 7].</li>
                        <li><strong>Bicucullin:</strong> Szelektív kompetitív antagonista a GABA helyen[cite: 6, 7] &rarr; görcskeltő[cite: 6].</li>
                        <li><strong>Picrotoxin:</strong> Közvetlenül a kloridcsatorna pórusát dugaszolja el[cite: 6, 7] &rarr; epileptiform görcsöket provokál a gátlás kiesése miatt[cite: 6, 7].</li>
                        <li><strong>Sztrichnin:</strong> Bár a GABA<sub>A</sub>-t is kissé gátolja, legfőbb támadáspontja a gerincvelői <strong>glicin-receptor blokkolása</strong>[cite: 6, 7] &rarr; tónusos, halálos izomgörcsök[cite: 6]!</li>
                    </ul>
                </li>
                <li><strong>GABA<sub>B</sub>-receptor (Metabotrop):</strong>
                    <ul>
                        <li>G<sub>i</sub>-fehérjéhez kapcsolt dimer receptor[cite: 6, 7].</li>
                        <li>Adenylyl-ciklázt gátol (cAMP &darr;)[cite: 6, 7], kinyitja a posztszinaptikus K⁺-csatornákat (lassú IPSP-t adva)[cite: 6, 7], és gátolja a preszinaptikus Ca²⁺-csatornákat (transzmitterürülés csökkentése)[cite: 6, 7].</li>
                        <li>Specifikus agonistája: <strong>Baclofen</strong> (centrális izomrelaxáns spasticitásban)[cite: 6, 7].</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- 26-30. DIA: SZINAPTIKUS PLASZTICITÁS (LTP ÉS LTD) -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 26–30. Dia: Szinaptikus plaszticitás: Rövid és Hosszú távú változások (LTP és LTD)</h3>
            <p><strong>A szinapszisok erőssége nem kőbe vésett, hanem aktivitásfüggően dinamikusan változik[cite: 6, 7]:</strong></p>
            <ul>
                <li><strong>1. Rövid távú plaszticitás (milliszekundumok – percek)[cite: 6, 7]:</strong>
                    <ul>
                        <li><strong>Rövid távú facilitáció:</strong> Két gyors egymást követő ingerlésnél a 2. EPSP jóval nagyobb, mint az 1., mert a preszinaptikus terminálisban felhalmozódik a <em>reziduális (maradék) Ca²⁺</em>, amit a pumpák még nem tudtak eltávolítani[cite: 6, 7].</li>
                        <li><strong>Rövid távú depresszió:</strong> Isételt ingerlés hatására a 2. válasz kisebb lesz, mert a terminális azonnal felszabadítható vezikulakészlete (RRP - Readily Releasable Pool) átmenetileg kimerül[cite: 6, 7].</li>
                    </ul>
                </li>
                <li><strong>2. Hosszú távú potencírozás (Long-Term Potentiation, LTP)[cite: 6, 7]:</strong>
                    <ul>
                        <li><em>Kiváltás:</em> Magas frekvenciájú tetanikus ingerlés (<strong>HFS: 100 Hz, 1 másodpercig</strong>)[cite: 6, 7].</li>
                        <li><em>Hatás:</em> Az EPSP meredeksége tartósan (órákon, napokon, éveken át) akár 150–200%-ra nő a kiindulási szinthez képest[cite: 6, 7]! Ez a tanulás és memória celluláris alapja[cite: 6].</li>
                        <li><em>Mechanizmusa:</em>
                            <ol>
                                <li>A tetanikus stimuláció óriási glutamátkiáramlást és elhúzódó depolarizációt kelt az AMPA receptorokon[cite: 6, 7].</li>
                                <li>A depolarizáció kilöki a Mg²⁺-blokkot az NMDA receptorokból[cite: 6, 7].</li>
                                <li><strong>Hatalmas mennyiségű Ca²⁺ áramlik a posztszinaptikus tüskébe</strong> az NMDA csatornákon át[cite: 6, 7]!</li>
                                <li><strong>Korai fázis (percek):</strong> A magas Ca²⁺ aktiválja a CaMKII kinázt &rarr; foszforilálja az AMPA receptorokat (megnő az ionáteresztésük) ÉS tartalék AMPA receptorokat épít be a membránba (több receptor = nagyobb EPSP!)[cite: 6, 7].</li>
                                <li><strong>Késői fázis (órák–évek):</strong> Génátírás, fehérjeszintézis, új szinaptikus tüskék növekedése (morfológiai átépülés)[cite: 6, 7]!</li>
                            </ol>
                        </li>
                    </ul>
                </li>
                <li><strong>3. Hosszú távú depresszió (Long-Term Depression, LTD)[cite: 6, 7]:</strong>
                    <ul>
                        <li><em>Kiváltás:</em> Alacsony frekvenciájú tartós ingerlés (<strong>LFS: 1 Hz, 15 percen át</strong>)[cite: 6, 7].</li>
                        <li><em>Hatás:</em> A szinaptikus válasz tartósan a kiindulási szint 80%-a alá csökken[cite: 7].</li>
                        <li><em>Mechanizmusa:</em> A lassú ingerlés csak mérsékelt Ca²⁺-beáramlást okoz[cite: 6]. Ez a kis Ca²⁺ nem kinázokat, hanem <strong>foszfatázokat (pl. kalcineurint)</strong> aktivál, amelyek defoszforilálják az AMPA receptorokat, és internalizálják (endocitózissal eltüntetik) őket a membránból[cite: 6]! A szinapszis meggyengül (ez felelős a felejtésért és a neuronhálózatok újrahangolásáért)[cite: 6].</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- ÖSSZEFOGLALÓ KÁRTYA -->
        <div style="background: #fffaf0; border: 1.5px solid #feebc8; border-radius: 8px; padding: 1.2rem; margin-top: 1.5rem;">
            <h4 style="color: #b7791f; margin-bottom: 0.4rem;">💡 Kulcsfogalmak a vizsgára a 8. előadásból:</h4>
            <p style="margin: 0; font-size: 0.95rem;">
                <strong>1. GABA-switch:</strong> Magzatban NKCC1 dominál &rarr; magas [Cl⁻]ᵢ &rarr; E_Cl &approx; -40 mV &rarr; GABA depolarizál (serkent)[cite: 6, 7]. Felnőttben KCC2 &rarr; alacsony [Cl⁻]ᵢ &rarr; E_Cl &approx; -75 mV &rarr; GABA hiperpolarizál (gátol)[cite: 6, 7].<br>
                <strong>2. Reverzálpotenciál:</strong> EPSP = 0 mV (kevert Na⁺/K⁺ áram)[cite: 6, 7]; IPSP = -74 mV (Cl⁻) vagy -90 mV (K⁺)[cite: 6]. Ha V_m = E_Cl, söntölő gátlás lép fel[cite: 6]!<br>
                <strong>3. NMDA receptor:</strong> Koincidencia-detektor (Glutamát + Glicin ÉS depolarizáció a Mg²⁺ blokk kilökéséhez)[cite: 6, 7]. Ca²⁺-áteresztő[cite: 6, 7]. Gátlója az APV és Memantin[cite: 6, 7].<br>
                <strong>4. GABA_A farmakológia:</strong> Benzodiazepinek a frekvenciát[cite: 6, 7], barbiturátok a nyitvatartási időt nyújtják[cite: 6, 7]. Picrotoxin csatornablokkoló, sztrichnin glicin-antagonista[cite: 6, 7].<br>
                <strong>5. LTP kiváltása:</strong> HFS (100 Hz, 1s)[cite: 7] &rarr; NMDA nyitás &rarr; nagy Ca²⁺[cite: 6, 7] &rarr; CaMKII &rarr; AMPA foszforiláció és új AMPA receptorok beépülése[cite: 6, 7].<br>
                <strong>6. LTD kiváltása:</strong> LFS (1 Hz, 15 min)[cite: 7] &rarr; mérsékelt Ca²⁺ &rarr; foszfatázok &rarr; AMPA receptorok endocitózisa[cite: 6].
            </p>
        </div>

    </div>
    `
});