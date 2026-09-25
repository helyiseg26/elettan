// eloadasok/eloadas9.js
// 9. Előadás: Elemi neuronhálózatok, laterális gátlás és az EEG biofizikai alapjai

window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-9",
    title: "9. Előadás – Neuronhálózatok, széli gátlás és az EEG élettana",
    shortName: "Hálózatok és EEG",
    html: `
    <div style="line-height: 1.75; font-size: 1.02rem;">

        <!-- BEVEZETÉS ÉS HÁTTÉR -->
        <div style="background: rgba(43, 108, 176, 0.08); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">🎙️ Tanári bevezetés a 9. előadáshoz</h3>
            <p>
                A tanár kiemeli: miután megértettük az egyedi neuronok és szinapszisok működését, most kilépünk a nagyobb távlatokba. Megvizsgáljuk, hogyan kapcsolódnak össze a neuronok elemi hálózatokká (divergencia, konvergencia, reverberáció), hogyan alakul ki a kontrasztkiemelés és széli gátlás, végül pedig levezetjük, hogyan jön létre a sok ezer idegsejt összehangolt működéséből a fejbőrön elvezethető <strong>elektroenkefalográfia (EEG)</strong>!
            </p>
        </div>

        <!-- 31-33. DIA: ELEMI HÁLÓZATOK: DIVERGENCIA, KONVERGENCIA, REVERBERÁCIÓ -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 31–33. Dia: Elemi neuronhálózatok: Divergencia, Konvergencia és Reverberáció</h3>
            <p><strong>A neuronok kapcsolódásának alapvető geometriai és funkcionális formái a KIR-ben:</strong></p>
            <ul>
                <li><strong>Divergencia (Széttérés / Elosztás):</strong>
                    <ul>
                        <li><em>Lényege:</em> Egyetlen preszinaptikus neuron elágazó axonjával több posztszinaptikus neuront idegez be.</li>
                        <li><em>Típusai:</em> Divergencia azonos pályán belül (egy kötegben terjed szét) vagy több különböző pályarendszer felé (pl. egy érzőinger egyszerre fut az agykéreg, a limbikus rendszer és a kisagy felé).</li>
                        <li><em>Élettani szerepe:</em> Jelerősítés és az információ szétosztása több párhuzamos feldolgozóállomásra.</li>
                    </ul>
                </li>
                <li><strong>Konvergencia (Összefutás / Integráció):</strong>
                    <ul>
                        <li><em>Lényege:</em> Több különböző preszinaptikus neuron (akár egyetlen forrásból, akár teljesen eltérő rendszerekből) egyetlen közös posztszinaptikus neuronra csatlakozik.</li>
                        <li><em>Élettani szerepe:</em> Térbeli szummáció és integratív döntéshozatal (klasszikus példa a gerincvelői &alpha;-motoneuron, a „végső közös pálya”, amelyre tízezernyi serkentő és gátló bemenet konvergál).</li>
                    </ul>
                </li>
                <li><strong>Reverberáció (Öngerjesztő / Visszacsatoló láncok):</strong>
                    <ul>
                        <li><em>Lényege:</em> Olyan zárt hurok, amelyben a serkentő neuron axonkollaterálisa egy közbeiktatott interneuronon keresztül (vagy közvetlenül a saját szómáján: <strong>autapszis</strong>) visszacsatolva újra és újra aktiválja a kiinduló sejtet.</li>
                        <li><em>Élettani hatása:</em> <strong>A bemenő információ sokszorozása és időbeli elnyújtása!</strong> Egyetlen rövid bemeneti akciós potenciál hatására a hálózatban hosszan tartó, ritmikus AP-kisülési sorozat marad fenn (pl. légzőközpont ritmusgenerálása, munkamemória, ébrenlét fenntartása).</li>
                    </ul>
                </li>
            </ul>

            <!-- Divergencia és Konvergencia SVG ábra -->
            <div style="text-align: center; margin: 1.5rem 0;">
                <svg viewBox="0 0 620 200" style="max-width: 100%; height: auto; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
                    <!-- Divergencia -->
                    <circle cx="60" cy="100" r="16" fill="#38bdf8"/>
                    <line x1="76" y1="100" x2="160" y2="40" stroke="#38bdf8" stroke-width="2"/>
                    <line x1="76" y1="100" x2="160" y2="100" stroke="#38bdf8" stroke-width="2"/>
                    <line x1="76" y1="100" x2="160" y2="160" stroke="#38bdf8" stroke-width="2"/>
                    <circle cx="170" cy="40" r="10" fill="#facc15"/>
                    <circle cx="170" cy="100" r="10" fill="#facc15"/>
                    <circle cx="170" cy="160" r="10" fill="#facc15"/>
                    <text x="115" y="190" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Divergencia (1 &rarr; sok)</text>

                    <!-- Konvergencia -->
                    <circle cx="430" cy="40" r="10" fill="#facc15"/>
                    <circle cx="430" cy="100" r="10" fill="#facc15"/>
                    <circle cx="430" cy="160" r="10" fill="#facc15"/>
                    <line x1="440" y1="40" x2="524" y2="100" stroke="#facc15" stroke-width="2"/>
                    <line x1="440" y1="100" x2="524" y2="100" stroke="#facc15" stroke-width="2"/>
                    <line x1="440" y1="160" x2="524" y2="100" stroke="#facc15" stroke-width="2"/>
                    <circle cx="540" cy="100" r="16" fill="#22c55e"/>
                    <text x="485" y="190" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">Konvergencia (sok &rarr; 1)</text>
                </svg>
                <div style="font-size: 0.85rem; color: #718096; margin-top: 4px;">31–32. Dia: A divergencia (szétosztás) és konvergencia (összegzés) hálózati sémája.</div>
            </div>
        </div>

        <!-- 34-35. DIA: HÁLÓZATI FACILITÁCIÓ ÉS OKKLÚZIÓ -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 34–35. Dia: Hálózati facilitáció és okklúzió</h3>
            <p><strong>Mi határozza meg, hogy a populáció válasza több vagy kevesebb lesz, mint az egyedi válaszok összege?</strong></p>
            <ul>
                <li><strong>Aktív (kisülési) zóna:</strong> Az a terület, ahol a preszinaptikus rostok sűrűsége meghaladja a küszöböt, így önmagában képes akciós potenciált kiváltani a posztszinaptikus sejteken.</li>
                <li><strong>Széli (szubliminális / facilitációs) zóna:</strong> Ahol a szinaptikus sűrűség alacsonyabb; itt a preszinaptikus inger csak szubküszöbös EPSP-t hoz létre, önmagában nem vált ki AP-t.</li>
                <li><strong>Hálózati facilitáció (Küszöb alatti ingerlésnél: 0 + 0 = 1!):</strong>
                    <ul>
                        <li>Ha az 'A' bemenetet ingereljük szubküszöbösen: a széli zóna sejtje nem tüzel (0 AP).</li>
                        <li>Ha a 'B' bemenetet ingereljük külön: szintén nem tüzel (0 AP).</li>
                        <li>Ha 'A' és 'B' bemenetet <strong>egyszerre</strong> stimuláljuk: a két szubküszöbös EPSP a közös széli zóna sejtjein térbelileg összeadódik, eléri a küszöböt, és a sejt kisül! A válasz tehát <strong>nagyobb, mint az egyedi válaszok számtani összege</strong>.</li>
                    </ul>
                </li>
                <li><strong>Hálózati okklúzió (Küszöb feletti / szupramarginális ingerlésnél: pl. 5 + 4 = 8!):</strong>
                    <ul>
                        <li>Erős ingernél a bemenetek aktív zónái átfedik egymást.</li>
                        <li>Külön-külön ingerelve a közös sejtek mindkét ingerlésre tüzelnének (pl. A &rarr; 5 sejt, B &rarr; 4 sejt).</li>
                        <li>Együttes ingerléskor a közös neuronok nem tudnak kétszer kisülni a refrakteritás miatt, így az együttes válasz (8 AP) <strong>kisebb lesz, mint a külön mért válaszok algebrai összege (5 + 4 = 9)</strong>.</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- 36-37. DIA: FEEDFORWARD, FEEDBACK ÉS LATERÁLIS GÁTLÁS -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 36–37. Dia: Gátlási körök: Feedforward, Feedback és Laterális (széli) gátlás</h3>
            <p><strong>A gátló interneuronok alapvető elrendeződései:</strong></p>
            <ul>
                <li><strong>Feedforward (Előrecsatolt) gátlás:</strong>
                    <ul>
                        <li>A bejövő serkentő axon közvetlenül aktiválja a posztszinaptikus célsejtet, de egy elágazással egy <em>gátló interneurnot</em> is bekapcsol, amely ugyanerre a célsejtre záródik.</li>
                        <li>Mivel az interneuronon átmenő út két szinapszist igényel (késleltetés!), a célsejt először kisül, de az interneuron azonnal leállítja a további tüzelést. Megvédi a sejtet a túlzott, elnyúló aktivitástól.</li>
                    </ul>
                </li>
                <li><strong>Feedback (Visszacsatolt) gátlás (Klasszikus példa: Renshaw-sejt):</strong>
                    <ul>
                        <li>Az &alpha;-motoneuron axonja kollaterálist ad egy gerincvelői gátló interneuronra (Renshaw-sejt), amely visszacsatolva gátolja magát az &alpha;-motoneuront (negatív feedback).</li>
                        <li><em>Szerepe:</em> Megakadályozza a túlzott motoneuron-kisüléseket és a kóros izomrángásokat, stabilizálja az izomösszehúzódás erejét.</li>
                    </ul>
                </li>
                <li><strong>Laterális (Széli) gátlás és kontrasztkiemelés:</strong>
                    <ul>
                        <li>A centrális, legerősebben ingerelt receptor/csatorna serkentőleg hat a saját felszálló pályájára, miközben gátló interneuronokon keresztül <strong>kikapcsolja a szomszédos, gyengébben ingerelt csatornákat</strong>.</li>
                        <li><em>Következmény:</em> <strong>Kontrasztkiemelés és diszkriminációs képesség javulása!</strong> Az inger szélei élessé válnak, a háttérzaj eltűnik (ez a tapintási kéttű-diszkrimináció és a retinális éleslátás biofizikai alapja).</li>
                    </ul>
                </li>
            </ul>

            <!-- Laterális gátlás és kontrasztkiemelés SVG ábra -->
            <div style="text-align: center; margin: 1.5rem 0;">
                <svg viewBox="0 0 620 220" style="max-width: 100%; height: auto; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
                    <!-- Bemenetek -->
                    <text x="30" y="55" fill="#94a3b8" font-size="11">Gyenge inger (+2)</text>
                    <text x="30" y="115" fill="#facc15" font-size="11" font-weight="bold">ERŐS INGER (+12)</text>
                    <text x="30" y="175" fill="#94a3b8" font-size="11">Gyenge inger (+2)</text>

                    <!-- Fő vonalak -->
                    <line x1="160" y1="50" x2="420" y2="50" stroke="#64748b" stroke-width="2"/>
                    <line x1="160" y1="110" x2="420" y2="110" stroke="#facc15" stroke-width="4"/>
                    <line x1="160" y1="170" x2="420" y2="170" stroke="#64748b" stroke-width="2"/>

                    <!-- Gátló interneuronok középről ki fel és le -->
                    <circle cx="280" cy="75" r="9" fill="#ef4444"/>
                    <line x1="240" y1="110" x2="280" y2="75" stroke="#facc15" stroke-width="2"/>
                    <line x1="280" y1="75" x2="340" y2="50" stroke="#ef4444" stroke-width="2"/>
                    <text x="295" y="75" fill="#ef4444" font-size="10" font-weight="bold">-2 gátlás</text>

                    <circle cx="280" cy="145" r="9" fill="#ef4444"/>
                    <line x1="240" y1="110" x2="280" y2="145" stroke="#facc15" stroke-width="2"/>
                    <line x1="280" y1="145" x2="340" y2="170" stroke="#ef4444" stroke-width="2"/>
                    <text x="295" y="145" fill="#ef4444" font-size="10" font-weight="bold">-2 gátlás</text>

                    <!-- Kimenetek -->
                    <text x="440" y="55" fill="#94a3b8" font-size="12">Kimenet: 2 - 2 = <strong>0 (Néma!)</strong></text>
                    <text x="440" y="115" fill="#22c55e" font-size="13" font-weight="bold">Kimenet: +12 (Éles jel!)</text>
                    <text x="440" y="175" fill="#94a3b8" font-size="12">Kimenet: 2 - 2 = <strong>0 (Néma!)</strong></text>
                </svg>
                <div style="font-size: 0.85rem; color: #718096; margin-top: 4px;">37. Dia: Laterális gátlás és kontrasztkiemelés számszerűsített működése.</div>
            </div>
        </div>

        <!-- 38-46. DIA: AZ AGYKÉRGI TEVÉKENYSÉG ÉS AZ EEG BIOFIZIKÁJA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 38–46. Dia: Az EEG (Elektroenkefalográfia) biofizikai eredete, ritmusai és szinkronizációja</h3>
            <p><strong>Honnan származik a fejbőrön elvezetett elektromos jel? (Kiemelt vizsgatétel!):</strong></p>
            <ul>
                <li><strong>NEM akciós potenciálokból áll!</strong> Az AP-k túl rövidek (1 ms) és aszinkronok, a távoli elvezetésben kioltanák egymást.</li>
                <li><strong>Valódi eredet:</strong> A kéregfelszínre merőlegesen elhelyezkedő <strong>piramissejtek apikális dendritjein kialakuló szummálódó posztszinaptikus potenciálok (EPSP-k és IPSP-k)</strong> által keltett extracelluláris áramok hozzák létre.</li>
                <li><strong>Dipólus elmélet (Sink és Source):</strong>
                    <ul>
                        <li>Ha az apikális dendriten serkentő szinapszis aktiválódik: pozitív ionok (Na⁺/Ca²⁺) áramlanak a sejtbe &rarr; extracellulárisan negatív zóna, ún. <strong>áramnyelő (Current Sink)</strong> keletkezik.</li>
                        <li>A szómánál és a mélyebb rétegekben áram záródik vissza a nyelő felé &rarr; ott extracelluláris pozitív zóna, ún. <strong>áramforrás (Current Source)</strong> jön létre.</li>
                        <li>Ez az extracellularis dipólus mérhető a fejbőr elektródáin mikrovolt (&mu;V) nagyságrendben.</li>
                    </ul>
                </li>
                <li><strong>EKG vs. EEG összehasonlítása (A tanár szóbeli kedvence):</strong>
                    <ul>
                        <li><em>EKG:</em> A szívizomsejtek szorosan összekapcsolt szincíciumot alkotnak, és egyszerre, tökéletes szinkronban depolarizálódnak &rarr; óriási jel, <strong>millivolt (mV)</strong> nagyságrend!</li>
                        <li><em>EEG:</em> Az agykéregben sok milliárd idegsejt dolgozik kisebb, aszinkron csoportokban &rarr; apró, lebegő feszültségek, <strong>mikrovolt (&mu;V)</strong> nagyságrend (kb. 1000-szer kisebb feszültség, mint a szívé!).</li>
                    </ul>
                </li>
                <li><strong>Szinkronizáció vs. Deszinkronizáció:</strong>
                    <ul>
                        <li><strong>Szinkronizált aktivitás:</strong> Nagyszámú neuron egyidejűleg, azonos fázisban depolarizálódik &rarr; <strong>Alacsony frekvencia, de NAGY amplitúdó</strong> (pl. mély NREM alvás delta hullámai, relaxált alfa ritmus).</li>
                        <li><strong>Deszinkronizált aktivitás:</strong> Különböző kis neuronpopulációk egymástól függetlenül, más fázisban dolgoznak &rarr; <strong>Magas frekvencia, de KIS amplitúdó</strong> (pl. éber koncentráció, béta és gamma aktivitás).</li>
                    </ul>
                </li>
                <li><strong>Fiziológiás EEG hullámok frekvenciasávjai:</strong>
                    <ul>
                        <li><strong>Alfa (&alpha;) ritmus (8–13 Hz):</strong> Éber, fizikai és mentális nyugalomban lévő emberben, <strong>zárt szemmel</strong> dominál az occipitalis lebeny felett. Szemnyitásra vagy figyelemre azonnal megszűnik, és béta aktivitás váltja fel (<em>Berger-effektus / alfa-blokád / deszinkronizáció</em>).</li>
                        <li><strong>Béta (&beta;) ritmus (14–30 Hz):</strong> Ébrenléti állapot, nyitott szemmel végzett intellektuális tevékenység, aktív mentális koncentráció (főleg frontalis és centrális elvezetések).</li>
                        <li><strong>Téta (&theta;) ritmus (4–7 Hz):</strong> Álmos felnőttekben, gyermekekben, NREM alvás korai stádiumaiban és a hippocampusban (tanulás/memória).</li>
                        <li><strong>Delta (&delta;) ritmus (0,5–3 Hz):</strong> Mély, lassú hullámú alvás (SWS / NREM 3-4. stádium). Éber felnőttben lokálisan jelen lévő delta ritmus szervi agykárosodást (pl. tumort, infarktust) jelez!</li>
                        <li><strong>Gamma (&gamma;) ritmus (&gt;30–80 Hz):</strong> Különböző agykérgi területek közötti információ-összerendezés, tudatos észlelés ("kötési probléma").</li>
                    </ul>
                </li>
                <li><strong>Kóros EEG mintázatok:</strong>
                    <ul>
                        <li><strong>Tüske-hullám (Spike-and-wave, 3 Hz):</strong> Tipikus absence (petit mal) epilepsziás roham alatt látható generalizált mintázat.</li>
                        <li><strong>Izoelektromos (lapos) vonal:</strong> Semmilyen agykérgi elektromos aktivitás nem detektálható &rarr; az <em>agyhalál</em> megállapításának elengedhetetlen feltétele.</li>
                    </ul>
                </li>
                <li><strong>Kiváltott potenciálok (Evoked Potentials, EP / ERP):</strong>
                    <ul>
                        <li>Külső szenzoros ingerekre (szomatoszenzoros, vizuális, auditív) adott agykérgi válaszok. Mivel az egyedi válasz elveszne a háttér-EEG zajában, sok azonos inger válaszát <em>átlagolják</em> (averaging), így kirajzolódik a specifikus pályák épsége.</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- ÖSSZEFOGLALÓ KÁRTYA -->
        <div style="background: #fffaf0; border: 1.5px solid #feebc8; border-radius: 8px; padding: 1.2rem; margin-top: 1.5rem;">
            <h4 style="color: #b7791f; margin-bottom: 0.4rem;">💡 Kulcsfogalmak a vizsgára a 9. előadásból:</h4>
            <p style="margin: 0; font-size: 0.95rem;">
                <strong>1. Hálózati formák:</strong> Divergencia (1 &rarr; sok, elosztás), Konvergencia (sok &rarr; 1, szummáció), Reverberáció (zárt hurok / autapszis, tartós kisülés).<br>
                <strong>2. Facilitáció vs. Okklúzió:</strong> Szubküszöbös ingernél a széli zónák összeadódása miatt a válasz nagyobb az összegnél (facilitáció: 0 + 0 = 1); szupramarginális ingernél a közös neuronok telítődése miatt a válasz kisebb (okklúzió: 5 + 4 = 8).<br>
                <strong>3. Gátlások:</strong> Renshaw-sejt = visszacsatolt (feedback) gátlás. Laterális gátlás = a szomszédos csatornák kiiktatásával kontrasztkiemelést végez.<br>
                <strong>4. EEG eredete:</strong> Kérgi piramissejtek apikális dendritjeinek posztszinaptikus dipólusai (EPSP/IPSP, sink és source). NEM akciós potenciálok!<br>
                <strong>5. Szinkronizáció:</strong> Szinkronizált = nagy amplitúdó, alacsony frekvencia (alvás, alfa). Deszinkronizált = kis amplitúdó, magas frekvencia (figyelem, béta).<br>
                <strong>6. Hullámok:</strong> Alfa (8–13 Hz, zárt szem, Berger-effektusra gátlódik), Béta (14–30 Hz, koncentráció), Téta (4–7 Hz), Delta (0,5–3 Hz, mély alvás). Kóros: 3 Hz tüske-hullám (epilepszia), izoelektromos (agyhalál).
            </p>
        </div>

    </div>
    `
});