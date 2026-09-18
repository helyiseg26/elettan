// eloadasok/eloadas6.js
// 6. Előadás: A szinaptikus átvitel és integráció, neurotranszmitterek és receptorok élettana

window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-6",
    title: "6. Előadás – A szinapszis, neurotranszmisszió és szinaptikus integráció, receptorpotenciál",
    shortName: "Szinapszis és receptorok",
    html: `
    <div style="line-height: 1.7; font-size: 1.02rem;">

        <!-- 1-2. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 1–2. Dia: A somatomotoros rendszer és a neuromuscularis junctio (NMJ)</h3>
            <p><strong>A somatomotoros pálya felépítése és beidegzése:</strong></p>
            <ul>
                <li><strong>Elrendezés:</strong> A motoneuron sejttestje a központi idegrendszerben (a gerincvelő elülső szarvában vagy az agytörzsi motoros agyidegmagvakban) helyezkedik el. Axonja megszakítás nélkül halad egészen a vázizomrostig.</li>
                <li><strong>Szinapszisok száma a periférián:</strong> Egyetlenegy szinapszis található: a <em>neuromuscularis junctio</em> (NMJ, motoros véglemez).</li>
                <li><strong>Neurotranszmitter:</strong> <strong>Acetil-kolin (ACh)</strong>.</li>
                <li><strong>Receptor:</strong> <strong>Nikotinos kolinerg receptor (nAChR) – „izom” altípus</strong> (összetétele: 2α, β, γ, δ alegység).</li>
                <li><strong>Működése:</strong> Ionotrop nem-specifikus kationcsatorna, amely Na<sup>+</sup>- és K<sup>+</sup>-áteresztő. Aktivációja véglemez-potenciált (EPP) és akciós potenciált vált ki a vázizmon.</li>
                <li><strong>Specifikus blokkolója (antagonista):</strong> <em>d-tubocurarin</em> (kuráre – dél-amerikai nyílméreg, melyet nem maguk a békák termelnek, hanem a táplálékláncban fogyasztott rovarokból/növényekből dúsul fel).</li>
            </ul>

            <!-- Ábra SVG formában -->
            <div style="text-align: center; margin: 1.5rem 0;">
                <svg viewBox="0 0 600 240" style="max-width: 100%; height: auto; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
                    <circle cx="90" cy="50" r="22" fill="#22c55e" />
                    <text x="90" y="55" font-size="12" fill="#fff" font-weight="bold" text-anchor="middle">Motoneuron</text>
                    <!-- Axon -->
                    <line x1="90" y1="72" x2="90" y2="175" stroke="#22c55e" stroke-width="5" />
                    <!-- Idegvégződés / Véglemez -->
                    <path d="M 80 175 L 90 190 L 100 175" fill="none" stroke="#22c55e" stroke-width="4" />
                    <rect x="68" y="160" width="44" height="42" fill="none" stroke="#eab308" stroke-width="2" stroke-dasharray="3,3" />
                    <text x="50" y="180" fill="#eab308" font-size="14" font-weight="bold">1</text>
                    <!-- Vázizom -->
                    <ellipse cx="200" cy="205" rx="140" ry="22" fill="#eab308" opacity="0.85" />
                    <text x="200" y="210" fill="#000" font-weight="bold" font-size="13" text-anchor="middle">Vázizom</text>
                    <!-- Magyarázó nyilak és szöveg -->
                    <path d="M 120 180 L 170 180" stroke="#ef4444" stroke-width="4" marker-end="url(#arrow)" />
                    <text x="180" y="175" fill="#38bdf8" font-size="13" font-weight="bold">Neuromuscularis junctio (NMJ)</text>
                    <text x="180" y="195" fill="#cbd5e1" font-size="12">Transzmitter: Acetil-kolin (ACh)</text>
                    <text x="180" y="215" fill="#facc15" font-size="12">Receptor: Nikotinos AChR (izom típus) | Gátló: d-Tubocurarin</text>
                </svg>
                <div style="font-size: 0.85rem; color: #718096; margin-top: 4px;">1–2. Dia ábrája: Somatomotoros elrendezés (egy neuron, egy végfácán szinapszis).</div>
            </div>
        </div>

        <!-- 3-4. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 3–4. Dia: A parasympathicus idegrendszer</h3>
            <p><strong>A paraszimpatikus pálya kétneuronossága és transzmitterei:</strong></p>
            <ul>
                <li><strong>Felépítés:</strong> Mindig két neuronból áll a periférián. A <em>preganglionáris neuron</em> sejttestje az agytörzsben (III., VII., IX., X. agyidegek magvai) vagy a gerincvelő sacralis szakaszán található.</li>
                <li><strong>Átkapcsolódás (1. szinapszis - Paraszimpatikus ganglion):</strong>
                    <ul>
                        <li>Gyakran az effektor szerv falában vagy annak közvetlen szomszédságában található (intramuralis ganglion).</li>
                        <li>Transzmitter: <strong>Acetil-kolin (ACh)</strong>.</li>
                        <li>Receptor: <strong>Nikotinos kolinerg receptor (nAChR) – „neuron” altípus</strong>.</li>
                    </ul>
                </li>
                <li><strong>Effektor szerv beidegzése (2. szinapszis):</strong>
                    <ul>
                        <li>A postganglionáris neuron beidegzi a simaizmot, szívizmot vagy mirigyeket.</li>
                        <li>Transzmitter: <strong>Acetil-kolin (ACh)</strong>.</li>
                        <li>Receptor: <strong>Muszkarinos kolinerg receptor (mAChR)</strong> (G-fehérjéhez kapcsolt metabotrop receptorok).</li>
                    </ul>
                </li>
                <li><em>Tanári megjegyzés:</em> A klinikai gyakorlatban sokszor úgy mondják, hogy „a n. vagus beidegzi a szívet”, de szigorúan véve a vagusrost a szív fali ganglionsejtjére kapcsolódik át, és a rövid postganglionáris rost idegzi be magát a szívizmot!</li>
            </ul>

            <!-- Paraszimpatikus ábra -->
            <div style="text-align: center; margin: 1.5rem 0;">
                <svg viewBox="0 0 650 260" style="max-width: 100%; height: auto; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
                    <!-- Preganglionaris sejt -->
                    <circle cx="80" cy="40" r="18" fill="#38bdf8" />
                    <text x="80" y="44" fill="#000" font-size="10" font-weight="bold" text-anchor="middle">Pre-gangl.</text>
                    <line x1="80" y1="58" x2="80" y2="120" stroke="#38bdf8" stroke-width="4" />
                    <!-- 1. szinapszis doboz -->
                    <rect x="60" y="110" width="40" height="40" fill="none" stroke="#facc15" stroke-width="2" />
                    <text x="45" y="135" fill="#facc15" font-weight="bold">1</text>
                    <!-- Postganglionaris sejt -->
                    <circle cx="80" cy="140" r="16" fill="#0284c7" />
                    <line x1="80" y1="156" x2="80" y2="210" stroke="#0284c7" stroke-width="4" />
                    <!-- 2. szinapszis doboz -->
                    <rect x="60" y="200" width="40" height="35" fill="none" stroke="#facc15" stroke-width="2" />
                    <text x="45" y="222" fill="#facc15" font-weight="bold">2</text>
                    <!-- Effektor sejt -->
                    <ellipse cx="80" cy="245" rx="35" ry="12" fill="#f97316" />
                    <!-- Szöveges magyarázatok jobbra -->
                    <text x="140" y="125" fill="#38bdf8" font-size="13" font-weight="bold">1. Ganglionáris szinapszis:</text>
                    <text x="150" y="145" fill="#cbd5e1" font-size="12">• Transzmitter: Acetil-kolin (ACh)</text>
                    <text x="150" y="163" fill="#cbd5e1" font-size="12">• Receptor: nAChR ("neuron" altípus: α2β3) | Gátló: Hexamethonium</text>

                    <text x="140" y="200" fill="#f97316" font-size="13" font-weight="bold">2. Neuroeffektor szinapszis:</text>
                    <text x="150" y="220" fill="#cbd5e1" font-size="12">• Transzmitter: Acetil-kolin (ACh)</text>
                    <text x="150" y="238" fill="#cbd5e1" font-size="12">• Receptor: Muszkarinos kolinerg receptor (mAChR: M1-M5) | Gátló: Atropin</text>
                </svg>
                <div style="font-size: 0.85rem; color: #718096; margin-top: 4px;">3–4. Dia: Paraszimpatikus elrendezés (két kolinerg lépcső: nAChR, majd mAChR).</div>
            </div>
        </div>

        <!-- 5-6. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 5–6. Dia: A sympathicus idegrendszer (A szokásos elrendezés)</h3>
            <p><strong>A szimpatikus beidegzés és a transzmitter-kettősség:</strong></p>
            <ul>
                <li><strong>Preganglionáris neuron:</strong> A gerincvelő thoracolumbalis (Th1–L2/L3) oldalsó szarvában található. Axonja kilép a paravertebralis dúcláncba vagy praevertebralis ganglionokba (pl. ggl. coeliacum, ggl. mesentericum superius/inferius).</li>
                <li><strong>1. Szinapszis (Szimpatikus ganglion):</strong>
                    <ul>
                        <li>Transzmitter: <strong>Acetil-kolin (ACh)</strong>.</li>
                        <li>Receptor: <strong>Nikotinos ACh receptor (nAChR – neuron típus)</strong>.</li>
                    </ul>
                </li>
                <li><strong>2. Szinapszis (Effektor sejt – szív, simaizom, mirigy):</strong>
                    <ul>
                        <li>Transzmitter: <strong>Noradrenalin (NA)</strong> (nem adrenalin!).</li>
                        <li>Receptor: <strong>Adrenerg receptorok (α<sub>1</sub>, α<sub>2</sub>, β<sub>1</sub>, β<sub>2</sub>, β<sub>3</sub>)</strong>.</li>
                    </ul>
                </li>
                <li><strong>Fontos tanári hangsúly a mellékvesevelőről és a katekolaminokról:</strong>
                    <ul>
                        <li>A perifériás szimpatikus idegvégződésekből <strong>kizárólag noradrenalin</strong> szabadul fel, mert a postganglionáris neuron nem expresszálja a PNMT enzimet (feniletanolamin-N-metiltranszferáz), amely a noradrenalinból adrenalint szintetizálna!</li>
                        <li><strong>Adrenalin</strong> szinte kizárólag a <strong>mellékvesevelőből</strong> (módosult szimpatikus ganglion) jut a vérkeringésbe hormonként.</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- 7. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 7. Dia: Nikotinos acetil-kolin receptorok (nAChR)</h3>
            <p><strong>Szerkezet és altípusok részletesen:</strong></p>
            <ul>
                <li><strong>Szerkezet:</strong> Pentamer felépítésű (5 transzmembrán alegység fog közre egy központi pórust), ionotrop ligand-vezérelt nem-specifikus kationcsatorna. Átengedi a Na<sup>+</sup> és K<sup>+</sup> ionokat (és kis mértékben a Ca<sup>2+</sup>-ot is).</li>
                <li><strong>Aktiváció:</strong> 2 ACh molekula kötődése kinyitja a pórust &rarr; masszív Na<sup>+</sup>-beáramlás &rarr; depolarizáció (EPP vagy EPSP).</li>
                <li><strong>Két fő altípus farmakológiája:</strong>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 0.8rem; font-size: 0.95rem;">
                        <tr style="background: #e2e8f0; color: #1a365d;">
                            <th style="padding: 6px; border: 1px solid #cbd5e1;">Tulajdonság</th>
                            <th style="padding: 6px; border: 1px solid #cbd5e1;">Izom típus (N<sub>M</sub>)</th>
                            <th style="padding: 6px; border: 1px solid #cbd5e1;">Neuron típus (N<sub>N</sub>)</th>
                        </tr>
                        <tr>
                            <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Előfordulás</strong></td>
                            <td style="padding: 6px; border: 1px solid #cbd5e1;">Vázizom motoros véglemez (NMJ)</td>
                            <td style="padding: 6px; border: 1px solid #cbd5e1;">Vegetatív ganglionok, KIR, mellékvesevelő</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Alegységek</strong></td>
                            <td style="padding: 6px; border: 1px solid #cbd5e1;">(α1)<sub>2</sub> β1 γ δ</td>
                            <td style="padding: 6px; border: 1px solid #cbd5e1;">α<sub>2</sub> β<sub>3</sub> (pl. α3 és β4 variációk)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Agonista</strong></td>
                            <td style="padding: 6px; border: 1px solid #cbd5e1;">ACh, Nikotin</td>
                            <td style="padding: 6px; border: 1px solid #cbd5e1;">ACh, Nikotin</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Specifikus blokkoló (Antagonista)</strong></td>
                            <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>d-Tubocurarin</strong> (perifériás izomrelaxáns)</td>
                            <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Hexamethonium</strong> (ganglionblokkoló)</td>
                        </tr>
                    </table>
                </li>
            </ul>
        </div>

        <!-- 8. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 8. Dia: Muszkarinos acetil-kolin receptorok (mAChR)</h3>
            <p><strong>G-fehérjéhez kapcsolt (metabotrop) 7-transzmembrán (7TM) receptorcsalád:</strong></p>
            <ul>
                <li><strong>Agonista:</strong> Acetil-kolin, Muszkarin (a légyölő galóca, <em>Amanita muscaria</em> toxinja).</li>
                <li><strong>Klasszikus kompetitív antagonista:</strong> <strong>Atropin</strong> (a nadragulya, <em>Atropa belladonna</em> alkaloidja).
                    <ul>
                        <li><em>Klinikai/élettani hatásai:</em> Pupillatágulat (mydriasis – régen kozmetikai célra használták a nők), nyálelválasztás és hörgőváladék gátlása (műtéti premedikációban szájszárazság elérésére, aspiráció kivédésére), szívfrekvencia növelése (parasympatholyticum).</li>
                    </ul>
                </li>
                <li><strong>Az 5 altípus felosztása:</strong>
                    <ul>
                        <li><strong>M<sub>1</sub>, M<sub>3</sub>, M<sub>5</sub> (Páratlanok):</strong> <strong>G<sub>q</sub></strong> fehérjéhez kapcsolódnak &rarr; Foszfolipáz C (PLC) aktiváció &rarr; IP<sub>3</sub> és DAG képződés &rarr; intracelluláris [Ca<sup>2+</sup>] növekedés. (M<sub>1</sub>: agy; M<sub>3</sub>: simaizom kontrakció, mirigy szekréció; M<sub>5</sub>: agyi erek).</li>
                        <li><strong>M<sub>2</sub>, M<sub>4</sub> (Párosak):</strong> <strong>G<sub>i</sub></strong> fehérjéhez kapcsolódnak &rarr; Adenilát-cikláz gátlása &rarr; [cAMP] csökken.
                            <br><strong>M<sub>2</sub> a szívben kiemelten fontos:</strong> A G<sub>i</sub> béta-gamma alegysége közvetlenül kinyitja a GIRK (K<sub>ACh</sub>) káliumcsatornákat &rarr; K<sup>+</sup>-kiáramlás &rarr; hiperpolarizáció &rarr; negatív kronotrop hatás (lassuló szívverés).
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- 9-10. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 9–10. Dia: Adrenerg receptorok (&beta; és &alpha;)</h3>
            <p><strong>A katekolaminok receptorai: szignáltranszdukció és affinitási sorrend:</strong></p>
            <ul>
                <li><strong>&beta;-adrenerg receptorok (&beta;<sub>1</sub>, &beta;<sub>2</sub>, &beta;<sub>3</sub>):</strong>
                    <ul>
                        <li>Minden &beta;-receptor <strong>G<sub>s</sub></strong> fehérjéhez kapcsolt &rarr; Adenilát-cikláz aktiváció &rarr; <strong>[cAMP] &uarr;</strong> &rarr; Protein Kináz A (PKA) aktiváció.</li>
                        <li><strong>&beta;<sub>1</sub>-receptor (Szívizom):</strong> Pozitív szívhatások (pozitív kronotrop, inotrop, dromotrop, batmotrop) &rarr; túlserkentése arrhythmiát okozhat! Klinikai jelentőség: <em>béta-blokkolók</em>. Affinitás: Adrenalin &approx; Noradrenalin (vagy Adr &gt; NA).</li>
                        <li><strong>&beta;<sub>2</sub>-receptor:</strong> Simaizom-relaxáció (bronchodilatatio, vazodilatatio a vázizom ereiben). Affinitás: <strong>Adrenalin &gt;&gt; Noradrenalin</strong>.</li>
                    </ul>
                </li>
                <li><strong>&alpha;-adrenerg receptorok (&alpha;<sub>1</sub>, &alpha;<sub>2</sub>):</strong>
                    <ul>
                        <li><strong>&alpha;<sub>1</sub>-receptor:</strong> <strong>G<sub>q</sub></strong> kapcsolt &rarr; IP<sub>3</sub>/DAG &rarr; <strong>[Ca<sup>2+</sup>] &uarr;</strong> &rarr; simaizom-összehúzódás, vazokonstriktio (vérnyomás emelkedés). Affinitás: <strong>Noradrenalin &gt; Adrenalin</strong>.</li>
                        <li><strong>&alpha;<sub>2</sub>-receptor:</strong> <strong>G<sub>i</sub></strong> kapcsolt &rarr; <strong>[cAMP] &darr;</strong>. Jellemzően <em>preszinaptikus autoreceptor</em>ként működik a szimpatikus idegvégződésen, gátolva a további noradrenalin felszabadulást (negatív feedback).</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- 11. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 11. Dia: A kolinerg szinapszis felépítése és működési ciklusa</h3>
            <p><strong>A kolinerg transzmisszió lépései:</strong></p>
            <ol>
                <li><strong>Szintézis:</strong> A preszinaptikus citoplazmában Acetil-CoA + Kolin &rarr; <strong>Kolin-acetil-transzferáz (ChAT)</strong> által katalizálva Acetil-kolin (ACh) keletkezik.</li>
                <li><strong>Vezikuláris tárolás:</strong> Proton-gradiens (H<sup>+</sup>-antiport) terhére ACh transzportálódik a szinaptikus vezikulákba. A vezikula ATP-t és proteoglikánokat (PG) is tartalmaz.</li>
                <li><strong>Exocitózis:</strong> AP érkezik &rarr; feszültségfüggő Ca<sup>2+</sup>-csatornák nyílnak &rarr; Ca<sup>2+</sup>-beáramlás &rarr; SNARE fehérjék fúziója &rarr; ACh kiürül a szinaptikus résbe.</li>
                <li><strong>Bontás a résben:</strong> Az ACh-t az <strong>Acetilkolin-észteráz (AChE)</strong> szupergyorsan hasítja <em>acetátra</em> és <em>kolinra</em>.</li>
                <li><strong>Kolin visszavétele:</strong> A kolin Na<sup>+</sup>-kotranszporttal (szimporterrel) visszakerül a preszinaptikus végződésbe (ez a szintézis sebességmeghatározó lépése). Az acetát diffúzióval elúszik.</li>
                <li><strong>Kotranszmitterek:</strong> A vezikulákból ACh mellett ATP és neuropeptidek is felszabadulnak, melyek módosítják a posztszinaptikus választ.</li>
            </ol>
        </div>

        <!-- 12. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 12. Dia: Az adrenerg szinapszis és a farmakológiai beavatkozások (Kokain vs. Rezerpin)</h3>
            <p><strong>A noradrenalin (NA) sorsa és manipulálása:</strong></p>
            <ul>
                <li><strong>A felszabadult NA három lehetséges sorsa:</strong>
                    <ol>
                        <li><strong>Visszavétel (Reuptake 1):</strong> A fő út! Egy nagy affinitású, preszinaptikus Na<sup>+</sup>/Cl<sup>-</sup> kapcsolt kotranszporter (NET - Noradrenalin Transporter) visszaveszi a végződésbe.</li>
                        <li><strong>Diffúzió és enzimes lebontás:</strong> A keringéssel a májba jut, ahol a <strong>COMT</strong> (Katekol-O-metiltranszferáz) és a <strong>MAO</strong> (Monoamin-oxidáz) bontja le (fő végtermék: VMA - vanillin-mandulasav).</li>
                        <li><strong>Intracelluláris MAO bontás:</strong> A visszavett NA a mitokondriális MAO enzim által helyben lebomlik, ha nem csomagolódik vezikulába.</li>
                    </ol>
                </li>
                <li><strong>A Kokain és a Rezerpin ellentétes hatásmechanizmusa:</strong>
                    <ul>
                        <li><strong>Kokain:</strong> A <em>preszinaptikus membrán reuptake transzporterét (NET)</em> gátolja. Emiatt a NA a szinaptikus résben marad &rarr; elhúzódó, túlzott szimpatikus és KIR-i stimuláció, eufória, tachikardia, vazokonstriktio.</li>
                        <li><strong>Rezerpin:</strong> A <em>vezikuláris transzportert (VMAT)</em> gátolja, ami a citoplazmából pumpálná a NA-t a vezikulákba. Mivel a NA nem tud a vezikulába jutni, a citoplazmában a MAO elbontja &rarr; a szinaptikus vezikulák kiürülnek, a NA raktárak kimerülnek &rarr; szimpatolitikus hatás (vérnyomáscsökkenés, szedáció/depresszió).</li>
                    </ul>
                </li>
            </ul>

            <!-- Kokain és Rezerpin SVG ábra -->
            <div style="text-align: center; margin: 1.5rem 0;">
                <svg viewBox="0 0 600 240" style="max-width: 100%; height: auto; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
                    <!-- Végbunkó -->
                    <path d="M 50 120 C 150 20, 450 20, 550 120 C 450 220, 150 220, 50 120 Z" fill="#1e293b" stroke="#eab308" stroke-width="3" />
                    <!-- Vezikula -->
                    <circle cx="420" cy="120" r="30" fill="#334155" stroke="#38bdf8" stroke-width="2" />
                    <text x="420" y="125" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">Vezikula</text>
                    <!-- VMAT és rezerpin -->
                    <rect x="380" y="112" width="16" height="16" fill="#f59e0b" />
                    <text x="360" y="95" fill="#f87171" font-size="12" font-weight="bold">Rezerpin 🛑</text>
                    <line x1="360" y1="100" x2="385" y2="115" stroke="#f87171" stroke-width="2" />
                    <!-- MAO -->
                    <text x="290" y="80" fill="#cbd5e1" font-size="12">MAO bontás</text>
                    <!-- NET transzporter és Kokain -->
                    <rect x="280" y="195" width="25" height="20" fill="#22c55e" />
                    <text x="292" y="240" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">Kokain gátol 🛑</text>
                    <line x1="292" y1="225" x2="292" y2="215" stroke="#f87171" stroke-width="2" />
                    <text x="210" y="160" fill="#38bdf8" font-size="12">NA reuptake (NET)</text>
                </svg>
                <div style="font-size: 0.85rem; color: #718096; margin-top: 4px;">12. Dia: Adrenerg varicositas / szinapszis farmakológiája.</div>
            </div>
        </div>

        <!-- 13-14. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 13–14. Dia: A szinaptikus integráció alapjai és formái</h3>
            <p><strong>Hogyan dolgozza fel a neuron a beérkező jeleket?</strong></p>
            <ul>
                <li><strong>Axondomb (axon initial segment):</strong> Az AP keletkezési helye a neuronon, mert itt a legmagasabb a feszültségfüggő Na<sup>+</sup>-csatornák sűrűsége (legkisebb ingerküszöb).</li>
                <li><strong>Retrográd terjedés:</strong> Az axondombon keletkező AP visszaterjedhet a somára és dendritekre, ezzel „törli” (reseteli) az előző integrációs állapotot.</li>
                <li><strong>Elektrotónusos potenciálok tulajdonságai:</strong> A dendriteken keletkező EPSP-k és IPSP-k gradáltak és dekrementummal (csillapodva) terjednek. A soma-hoz közelebbi szinapszis hatása jóval erősebb, mint a disztális dendritágaké.</li>
                <li><strong>Denervációs túlérzékenység:</strong> Ha az idegellátás megszűnik, a posztszinaptikus sejt felszínén felszaporodnak a receptorok (up-regulation), így a keringő transzmitterekre túlérzékennyé válik.</li>
                <li><strong>Integrációs formák rendszerezése:</strong>
                    <ul>
                        <li><strong>Monoszinaptikus jelenségek:</strong> Potencírozás (poszt-tetanikus), facilitáció, gátlás, adaptáció, plaszticitás.</li>
                        <li><strong>Poliszinaptikus jelenségek:</strong> Konvergencia (sok bemenet egy sejtre), Divergencia (egy neuron sok sejtet idegez be), Térbeli szummáció, Aktív zóna és Széli (szubliminális) zóna.</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- 15. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 15. Dia: Térbeli és időbeli szummáció</h3>
            <p><strong>A szinaptikus összegződés két formája:</strong></p>
            <ul>
                <li><strong>Térbeli szummáció (Spatial summation):</strong> Két vagy több, térben különböző dendriten vagy szinapszison <em>egyidejűleg</em> érkező szubküszöbös EPSP a somán összeadódik, és együttesen elérik a kisülési küszöböt.</li>
                <li><strong>Időbeli szummáció (Temporal summation):</strong> Egyetlen szinapszison keresztül érkezik két vagy több akciós potenciál <em>gyorsan egymás után</em>. Mivel az első EPSP lecsengése több tíz milliszekundumig tart, a második EPSP rárakódik (szuperponálódik) az elsőre, így elérve a küszöböt.</li>
            </ul>

            <!-- Szummáció SVG ábra -->
            <div style="text-align: center; margin: 1.5rem 0;">
                <svg viewBox="0 0 650 200" style="max-width: 100%; height: auto; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
                    <!-- Térbeli grafikon -->
                    <text x="200" y="30" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Térbeli szummáció</text>
                    <line x1="50" y1="80" x2="320" y2="80" stroke="#64748b" stroke-width="1.5" />
                    <!-- Egyedi EPSP-k -->
                    <path d="M 60 80 Q 80 50 100 80" fill="none" stroke="#facc15" stroke-width="2" />
                    <text x="80" y="100" fill="#cbd5e1" font-size="10" text-anchor="middle">1 AP (Input 1)</text>
                    <path d="M 140 80 Q 160 50 180 80" fill="none" stroke="#facc15" stroke-width="2" />
                    <text x="160" y="100" fill="#cbd5e1" font-size="10" text-anchor="middle">1 AP (Input 2)</text>
                    <!-- Összegzett EPSP -->
                    <path d="M 230 80 Q 260 20 290 80" fill="none" stroke="#22c55e" stroke-width="3" />
                    <text x="260" y="100" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">Egyidejű Input 1+2</text>

                    <!-- Időbeli grafikon -->
                    <text x="490" y="30" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Időbeli szummáció</text>
                    <line x1="370" y1="80" x2="620" y2="80" stroke="#64748b" stroke-width="1.5" />
                    <path d="M 390 80 Q 405 55 420 80" fill="none" stroke="#facc15" stroke-width="2" />
                    <!-- Lépcsőzetes összegződés -->
                    <path d="M 470 80 Q 485 55 495 65 Q 510 30 535 80" fill="none" stroke="#22c55e" stroke-width="3" />
                    <text x="505" y="100" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">2 gyors egymást követő AP</text>
                </svg>
                <div style="font-size: 0.85rem; color: #718096; margin-top: 4px;">15. Dia: Térbeli (spatial) és időbeli (temporal) szummáció mechanizmusa.</div>
            </div>
        </div>

        <!-- 16-17. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 16–17. Dia: Szinaptikus facilitáció és poszt-tetanikus potencírozás (PTP)</h3>
            <p><strong>A preszinaptikus kalcium-akkumuláció szerepe:</strong></p>
            <ul>
                <li><strong>Szinaptikus facilitáció (rövid távú):</strong> Ha két akciós potenciál 10–50 ms-on belül érkezik a preszinaptikus végződésbe, a második EPSP lényegesen nagyobb amplitúdójú lesz (V<sub>2</sub> &gt; V<sub>1</sub>), mint az első.
                    <br>Képlet: <code>F = (V<sub>2</sub> - V<sub>1</sub>) / V<sub>1</sub></code>.
                    <br><em>Oka:</em> Az első AP alatt beáramlott Ca<sup>2+</sup>-ot a Ca-pumpák még nem tudták teljesen eltávolítani a terminálisból (maradék Ca<sup>2+</sup>, „residual calcium”), így a második AP által beáramló Ca<sup>2+</sup> hozzáadódik ehhez, jóval több transzmitter exocitózisát kiváltva.
                </li>
                <li><strong>Poszt-tetanikus potencírozás (PTP):</strong> Tartós, nagyfrekvenciájú ingerlés (pl. 20–60 Hz-es tetanikus impulzussorozat) alatt és után a szinapszis válaszkészsége percekig fokozott marad. A repetitív AP-k miatt a posztszinaptikus sejten akciós potenciálsorozat generálódik.</li>
            </ul>
        </div>

        <!-- 18. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 18. Dia: Preszinaptikus és posztszinaptikus gátlás</h3>
            <p><strong>A gátlás két alapvető anatómiai és funkcionális formája:</strong></p>
            <ul>
                <li><strong>Posztszinaptikus gátlás:</strong> Egy gátló interneuron (pl. GABA-erg vagy glicinerg) közvetlenül a posztszinaptikus neuron somáján vagy dendritjén képez szinapszist. A nyíló Cl<sup>-</sup>-csatornák (vagy K<sup>+</sup>-csatornák) hiperpolarizációt (IPSP) váltanak ki &rarr; az egész sejttest ingerlékenysége csökken minden bemenettel szemben.</li>
                <li><strong>Preszinaptikus gátlás (Axo-axonális szinapszis):</strong>
                    <ul>
                        <li>A gátló axon közvetlenül a <em>serkentő neuron végbunkójára (axonterminálisára)</em> csatlakozik!</li>
                        <li><em>Mechanizmusa:</em> Részleges depolarizációt okoz a terminálison (pl. GABA<sub>A</sub> receptoron keresztül), ami inaktiválja a feszültségfüggő Na<sup>+</sup>-csatornákat, vagy GABA<sub>B</sub> receptoron át csökkenti a feszültségfüggő Ca<sup>2+</sup>-csatornák nyitását. Emiatt kevesebb transzmitter ürül a serkentő végbunkóból.</li>
                        <li><em>Óriási előnye:</em> <strong>Szelektív!</strong> Csak egyetlen specifikus bemenetet iktat ki, miközben a célsejt többi szinapszisa és általános ingerlékenysége teljesen érintetlen marad.</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- 19. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 19. Dia: A neurotranszmitterek osztályozása</h3>
            <p><strong>Kis molekulájú gyors transzmitterek vs. Lassú neuropeptidek:</strong></p>
            <ul>
                <li><strong>I. Kis molekulájú, gyors transzmitterek (helyben, a terminálisban szintetizálódnak):</strong>
                    <ul>
                        <li><strong>Class I:</strong> Acetil-kolin (ACh).</li>
                        <li><strong>Class II (Biogén aminok):</strong> Noradrenalin, Adrenalin, Dopamin, Szerotonin (5-HT), Hisztamin.</li>
                        <li><strong>Class III (Aminosavak):</strong> <strong>GABA</strong> (fő gátló az agyban), <strong>Glicin</strong> (fő gátló a gerincvelőben és agytörzsben), <strong>Glutamát</strong> (fő serkentő a KIR-ben), Aszpartát.</li>
                    </ul>
                </li>
                <li><strong>II. Neuropeptidek (lassú, tartós modifikáció, a sejttest rER-én szintetizálódnak):</strong>
                    <ul>
                        <li>Hipotalamikus releasing/inhibiting hormonok: CRH, TRH, GHRH, GnRH, Somatostatin.</li>
                        <li>Agyi és gastrointestinalis peptidek: P-anyag (fájdalomközvetítés), Enkefalinok, Endorfinok (opiát peptidek), VIP, CCK, Gasztrin, Neurotenzin.</li>
                        <li>Egyéb: Angiotenzin II, Bradikinin, CGRP, Calcitonin.</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- 20-21. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 20–21. Dia: A receptorműködés alapjai – Elsődleges, másodlagos, harmadlagos receptorok</h3>
            <p><strong>Az érzékelés jelátalakítási mechanizmusa (Transzdukció):</strong></p>
            <ul>
                <li><strong>A receptor kettős értelme a biológiában:</strong>
                    <ol>
                        <li><em>Molekuláris receptor:</em> Speciális transzmembrán fehérje, amely ligandumot köt vagy fizikai ingert érzékel.</li>
                        <li><em>Szenzoros receptor (érzéksejt):</em> Egy anatómiai sejtféleség, amely a külvilág vagy a belső környezet fizikai/kémiai ingereit elektromos jellé alakítja (transzdukció).</li>
                    </ol>
                </li>
                <li><strong>Szenzoros receptorok osztályozása a sejttípus alapján:</strong>
                    <ul>
                        <li><strong>Elsődleges (primer) érzékhámsejt:</strong> Valódi idegsejt, amely maga képez axont a központi idegrendszer felé. A receptorpotenciál közvetlenül ezen a sejten generál akciós potenciált! <em>Példák:</em> Szaglóhámsejtek (olfactorius receptorok), bőr mechanoreceptorai (pl. Pacini-test).</li>
                        <li><strong>Másodlagos (szekunder) érzékhámsejt:</strong> Módosult hámsejt, nincs saját axonja. Az ingerre receptorpotenciállal válaszol, ami transzmitterfelszabadulást vált ki a sejthez kapcsolódó primer afferens neuronra, és ezen az afferens axonon generálódik AP! <em>Példák:</em> Ízlelőbimbók sejtjei, belső fül szőrsejtjei (hallás és egyensúlyozás).</li>
                        <li><strong>Harmadlagos (tercier) érzékhámsejt:</strong> Két közbeiktatott sejtlépcső van a primer afferens neuronig (receptor &rarr; bipoláris sejt &rarr; ganglionsejt). A fotoreceptor maga csak gradált potenciálváltozást mutat! <em>Példa:</em> A retina fotoreceptorai (pálcikák és csapok).</li>
                    </ul>
                </li>
                <li><strong>A receptorpotenciál:</strong> Gradált, lokális potenciálváltozás (nem akciós potenciál!), amelynek nagysága arányos az inger erősségével.</li>
            </ul>
        </div>

        <!-- 22. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 22. Dia: Az inger kódolása – Analógból digitális (Amplitúdó &rarr; Frekvencia)</h3>
            <p><strong>Miért van szükség frekvenciakódolásra a központi idegrendszer felé?</strong></p>
            <ul>
                <li><strong>Minden-vagy-semmi törvény:</strong> Az akciós potenciál amplitúdója állandó, nem tudja kódolni az inger nagyságát. Ezzel szemben a receptorpotenciál gradált (analóg jel), de nem tudna dekrementum nélkül eljutni a gerincvelőbe/agyba.</li>
                <li><strong>Frekvenciakódolás:</strong> A receptorpotenciál amplitúdója az axondombon <strong>akciós potenciál frekvenciává (tüzelési frekvencia)</strong> konvertálódik.
                    <ul>
                        <li>Kis inger &rarr; kicsi receptorpotenciál &rarr; alacsony AP-frekvencia.</li>
                        <li>Erős inger &rarr; nagy receptorpotenciál &rarr; magas AP-frekvencia.</li>
                    </ul>
                </li>
                <li><strong>A refrakter stádium szerepe:</strong> Az AP-t abszolút és relatív refrakter stádium követi. Gyenge receptorpotenciál csak a relatív refrakter stádium végén tud újabb AP-t kiváltani, míg egy kifejezetten nagy depolarizáció képes a relatív refrakter periódus korai szakaszában is áttörni a küszöböt, így sokkal gyorsabban követik egymást az akciós potenciálok.</li>
            </ul>
        </div>

        <!-- 23. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 23. Dia: Az inger-válasz összefüggés (Pszichofizikai törvények / Hatványfüggvény)</h3>
            <p><strong>Stevens-féle hatványtörvény és felbontóképesség:</strong></p>
            <ul>
                <li>A kiváltott receptorválasz (R) és az ingerintenzitás (S) közötti kapcsolat <strong>nem lineáris</strong>, hanem hatványfüggvényt követ:
                    <br><code style="font-weight: bold; color: #d69e2e;">R = k &bull; S<sup>n</sup></code> &nbsp; vagy logaritmikus formában: &nbsp; <code>log(R) = n &bull; log(S) + b</code>.
                </li>
                <li>A legtöbb receptornál <strong>n &lt; 1</strong> (a dián pl. <em>n = 0,52</em>). Ennek élettani lényege:
                    <ul>
                        <li>A küszöb-inger közelében (kis ingerintenzitásoknál) a görbe meredek &rarr; <strong>rendkívül nagy a felbontóképesség</strong>, az apró különbségeket is pontosan érzékeljük.</li>
                        <li>Nagy ingerintenzitásoknál a görbe ellaposodik &rarr; a receptor védett a telítődéstől, óriási dinamikai tartományt képes lefedni (pl. a fül a suttogástól a sugárhajtómű dübörgéséig).</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- 24. DIA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 24. Dia: A receptorok adaptációja (Fázikus és Tónusos receptorok)</h3>
            <p><strong>Hogyan reagál a receptor a hosszan tartó állandó ingerre?</strong></p>
            <ul>
                <li><strong>Gyorsan adaptálódó (Fázikus) receptor:</strong>
                    <ul>
                        <li>Csak az inger kezdetére és/vagy végére ad választ (deriváló jellegű: az inger <em>változási sebességét</em> érzékeli).</li>
                        <li>A receptorpotenciál gyorsan visszaáll a nyugalmi értékre, az AP-kisülés megszűnik az állandósult inger alatt.</li>
                        <li><em>Példa:</em> Pacini-test (vibrációérzékelés), szaglás (gyorsan megszokjuk a szagokat), tapintó receptorok (ruha viselése a bőrön).</li>
                    </ul>
                </li>
                <li><strong>Lassan adaptálódó (Tónusos) receptor:</strong>
                    <ul>
                        <li>Az inger teljes fennállása alatt folyamatosan kisül, az AP-frekvencia alig vagy csak mérsékelten csökken.</li>
                        <li>Az inger <em>abszolút nagyságát / intenzitását</em> kódolja.</li>
                        <li><em>Példa:</em> Merkel-korong, Ruffini-végződés, fájdalomreceptorok (nociceptorok – a szervezet védelmében nem szabad kikapcsolniuk!), izomorsó, carotis sinus baroreceptorok.</li>
                    </ul>
                </li>
                <li><strong>Fázisos-tónusos receptor:</strong> Az inger kezdetén nagy frekvenciájú dinamikus választ ad (fázisos fázis), majd egy alacsonyabb, de stabil frekvenciájú kisüléssel folytatódik (tónusos fázis).</li>
            </ul>
        </div>

        <!-- ÖSSZEFOGLALÓ KÁRTYA -->
        <div style="background: #fffaf0; border: 1.5px solid #feebc8; border-radius: 8px; padding: 1.2rem; margin-top: 1.5rem;">
            <h4 style="color: #b7791f; margin-bottom: 0.4rem;">💡 Kulcsfogalmak a vizsgára a 6. előadásból:</h4>
            <p style="margin: 0; font-size: 0.95rem;">
                <strong>1. Somatomotoros:</strong> 1 neuron &rarr; NMJ &rarr; nAChR (izom: α1<sub>2</sub>β1γδ) &rarr; gátló: d-tubocurarin.<br>
                <strong>2. Paraszimpatikus:</strong> Ganglionban nAChR (neuron: α2β3, gátló: hexamethonium) &rarr; Effektoron mAChR (M1-M5, gátló: atropin).<br>
                <strong>3. Szimpatikus:</strong> Ganglionban nAChR (ACh) &rarr; Effektoron adrenerg (α, β; transzmitter kizárólag Noradrenalin!). Adrenalin csak a mellékvesevelőből jön.<br>
                <strong>4. Kokain vs. Rezerpin:</strong> Mindkettő NA-transzportot gátol: a kokain a reuptake-et (NET) gátolja (szinaptikus résben nő a NA &rarr; stimuláció), a rezerpin a vezikuláris bejutást (VMAT) gátolja (raktárak kiürülnek &rarr; szimpatolitikus).<br>
                <strong>5. Szinaptikus facilitáció:</strong> A rövid időn belüli 2. AP nagyobb választ ad a preszinaptikus maradék Ca<sup>2+</sup> miatt.<br>
                <strong>6. Preszinaptikus gátlás:</strong> Axo-axonális kapcsolattal szelektíven iktat ki egy adott bemenetet anélkül, hogy a teljes posztszinaptikus sejtet gátolná.<br>
                <strong>7. Receptorpotenciál:</strong> Gradált, elektrotónusos analóg potenciálváltozás, amely az axondombon frekvenciakódolt akciós potenciálokká alakul.
            </p>
        </div>

    </div>
    `
});