// eloadasok/eloadas19.js
window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-19",
    title: "19. Előadás: A szív elektromos sajátságai, EKG",
    shortName: "Szív elektrofiziológia & EKG",
    html: `
        <div style="font-family: inherit; line-height: 1.7; color: var(--text);">

            <!-- BEVEZETÉS ÉS MORFOLÓGIAI ALAPOK -->
            <div style="background: var(--info-bg); border-left: 4px solid var(--primary-light); padding: 1.2rem; border-radius: 8px; margin-bottom: 2rem;">
                <h3 style="margin-top: 0; color: var(--primary);">Bevezetés: A szív sejtjei és funkcionális felosztásuk [PPT: 1.1–1.2. dia]</h3>
                <p>A szív pumpafunkciójának ellátásához szigorúan összehangolt elektromos és mechanikai folyamatokra van szükség. A szív szövettanilag és elektrofiziológiailag többféle sejttípusból épül fel [PPT: 1.2. dia]:</p>
                <ul>
                    <li><strong>Kontraktilis munkaizomszövet (a szív tömegének ~99%-a) [PPT: 1.2. dia]:</strong>
                        <ul>
                            <li>Pitvari és kamrai munkaizomsejtek, amelyek a mechanikai erőkifejtésért és a vér továbbításáért felelősek [PPT: 1.2. dia].</li>
                            <li>Gyors akciós potenciál, stabil nyugalmi membránpotenciál és kifejezett plató jellemzi őket [PPT: 1.2, 1.4. dia].</li>
                        </ul>
                    </li>
                    <li><strong>Ingerképző és ingerületvezető rendszer (~1% tömegarány) [PPT: 1.2. dia]:</strong>
                        <ul>
                            <li><em>Ingerképző sejtek:</em> Sinuscsomó (SA-csomó) és Atrioventricularis csomó (AV-csomó) sejtjei [PPT: 1.2. dia].</li>
                            <li><em>Ingerületvezető pályák:</em> internodális pályák, Bachmann-köteg (interatrialis köteg), His-köteg, bal és jobb Tawara-szárak, valamint a Purkinje-rostok hálózata [PPT: 1.2. dia].</li>
                        </ul>
                    </li>
                </ul>
                <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin-top: 0.8rem; border-radius: 4px;">
                    <strong>🎙️ [Oktatói kiegészítés – Sejtszám vs. Szövettömeg és az Automácia]:</strong><br>
                    <em>„Ha megnézitek a szív mikroszkópos metszetét, egy meglepő ténnyel találkoztok: darabszám szerint a szívben sokkal több nem-szívizomsejt (endothelsejtek, vérsejtek, lymphocyták, kötőszöveti sejtek) található, mint szívizomsejt! Pont olyan ez, mint hogy az emberi szervezetben darabszámra több baktérium él, mint emberi sejt. De ha a szövet tömegét nézzük, a myocardium 99%-át a kontraktilis izomzat teszi ki. A szív másik lenyűgöző tulajdonsága az automácia: az idegrendszertől teljesen elválasztva, izoláltan, egy Petri-csészében is képes önállóan, ritmusosan verni, mert a saját ingerképző rendszere generálja a depolarizációt.” [PPT: 1.2. dia]</em>
                </div>
            </div>

            <!-- I. RÉSZ: AKCIÓS POTENCIÁLOK ÉS IONÁRAMOK -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2rem;">
                I. RÉSZ: A Szív Akciós Potenciáljai és Ionáramai
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. Transzmurális heterogenitás és morfológiai különbségek [PPT: 1.3. dia]
            </h3>
            <p>A szívizom akciós potenciálja (AP) alapvetően különbözik az ideg- és vázizomsejtek akciós potenciáljától [PPT: 1.3. dia]:</p>
            <ul>
                <li><strong>Időtartam:</strong> Míg a vázizom és az idegrost akciós potenciálja mindössze <strong>1–5 ms</strong>, addig a kamrai szívizomsejt akciós potenciálja mintegy <strong>300–400 ms</strong> (testhőmérsékleten, emberben akár 400–500 ms is lehet) – vagyis mintegy százszor hosszabb [PPT: 1.3. dia]!</li>
                <li><strong>Transzmurális rétegek heterogenitása a kamrafalban [PPT: 1.3. dia]:</strong>
                    <ul>
                        <li><strong>Endocardialis sejtek:</strong> laposabb átmenet, hosszú plató, hiányzó incisura [PPT: 1.3. dia].</li>
                        <li><strong>Epicardialis sejtek:</strong> a korai repolarizáció (Ito áram) kifejezett, ezért a csúcs után egy bemélyedés (incisura / notch) látható, létrehozva a jellegzetes <em>„spike and dome” (tüske és dóm)</em> alakzatot; az akciós potenciáljuk rövidebb [PPT: 1.3. dia]!</li>
                        <li><strong>Midmyocardialis (M-) sejtek:</strong> a kamrafal középső zónájában helyezkednek el; itt a leghosszabb az akciós potenciál időtartama [PPT: 1.3. dia]. Ennek a transzmurális időkülönbségnek kulcsszerepe van az EKG T-hullámának kialakulásában és az aritmiák patogenezisében [PPT: 1.3, 1.32. dia].</li>
                    </ul>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. Gyors és lassú akciós potenciálok összehasonlítása [PPT: 1.4. dia]
            </h3>
            <p>A szív sejtjei elektrofiziológiai viselkedésük alapján két nagy csoportba oszthatók [PPT: 1.4. dia]:</p>

            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 10px; text-align: left;">Szempont</th>
                        <th style="padding: 10px; text-align: left;">Gyors válaszú AP (Munkaizomzat, Purkinje) [PPT: 1.4. dia]</th>
                        <th style="padding: 10px; text-align: left;">Lassú válaszú AP (SA- és AV-csomó) [PPT: 1.4. dia]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Felszálló szár (0. fázis)</strong></td>
                        <td>Nagyon meredek, gyors depolarizáció (dV/dt: 500–1000 V/s) [PPT: 1.4. dia]</td>
                        <td>Laposabb, lassú felszálló szár (dV/dt: 1–10 V/s) [PPT: 1.4. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Fő depolarizáló ionáram</strong></td>
                        <td>Feszültségfüggő Na+-áram (INa, Nav1.5) [PPT: 1.4, 1.5. dia]</td>
                        <td>L-típusú Ca2+-áram (ICa,L); <strong>nincs funkcionális Nav!</strong> [PPT: 1.4, 1.5. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>1. fázis (korai repolarizáció)</strong></td>
                        <td>Kifejezett (tüske, spike) [PPT: 1.4. dia]</td>
                        <td><strong>Hiányzik</strong> [PPT: 1.4. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>2. fázis (plató)</strong></td>
                        <td>Hosszú, jól elkülönülő plató (domborulat) [PPT: 1.4. dia]</td>
                        <td><strong>Hiányzik</strong> (a csúcs után azonnal repolarizáció indul) [PPT: 1.4. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Nyugalmi potenciál / 4. fázis</strong></td>
                        <td>Stabil, állandó: <strong>-80 és -90 mV között</strong> [PPT: 1.4. dia]</td>
                        <td><strong>Nincs stabil nyugalmi potenciál!</strong> Legnegatívabb pont (MDP): kb. -60 to -70 mV [PPT: 1.4. dia]</td>
                    </tr>
                    <tr>
                        <td><strong>Spontán diasztolés depolarizáció</strong></td>
                        <td>Fiziológiásan <strong>nincs</strong> (külső ingert igényel) [PPT: 1.4. dia]</td>
                        <td><strong>Van: pacemaker potenciál</strong> (If és Ca-áramok) [PPT: 1.4, 1.11. dia]</td>
                    </tr>
                </tbody>
            </table>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. A kamrai munkaizomsejt AP fázisai és ionáramai [PPT: 1.5–1.7. dia]
            </h3>
            <p>A kamrai akciós potenciál lefutása szekvenciálisan nyíló és záródó ioncsatornák eredője [PPT: 1.6, 1.7. dia]:</p>
            <ul>
                <li><strong>0. fázis – Meredek felszálló szár (Gyors depolarizáció) [PPT: 1.7. dia]:</strong>
                    A szomszédos sejtből érkező elektromos inger hatására a membrán eléri a küszöböt (~ -65 mV). Kinyílnak a feszültségfüggő gyors nátriumcsatornák (<strong>Nav1.4 helyett a szívben Nav1.5 izoforma!</strong>) [PPT: 1.7. dia]. Hatalmas befelé irányuló nátriumáram (<strong>INa</strong>) áramlik be, amely a potenciált +20 to +30 mV-ig viszi fel (overshoot) [PPT: 1.7. dia]. Néhány ezredmásodperc alatt az inaktivációs kapuk (h-kapuk) lezárulnak [PPT: 1.8. dia].
                </li>
                <li><strong>1. fázis – Korai tranziens repolarizáció [PPT: 1.7. dia]:</strong>
                    A Na-csatornák inaktiválódnak, és gyorsan megnyílnak a tranziens kifelé vezető káliumcsatornák (<strong>Ito</strong>), amelyek rövid K+-kiáramlással (és kis Cl--beáramlással) kismértékben repolarizálják a membránt ~0 mV közelébe, létrehozva az incisurát [PPT: 1.7. dia].
                </li>
                <li><strong>2. fázis – Plató fázis [PPT: 1.7. dia]:</strong>
                    A szívizom AP legfontosabb szakasza. Két ellentétes irányú áram dinamikus egyensúlya tartja fenn:
                    <ul>
                        <li><em>Befelé folyó áram:</em> A depolarizáció nyitja a lassú, L-típusú feszültségfüggő kalciumcsatornákat (<strong>Cav1.2 / ICa,L</strong>) [PPT: 1.7. dia]. A Ca2+ lassú beáramlása fenntartja a depolarizált állapotot, és elindítja az izomösszehúzódást (CICR) [PPT: 1.7. dia].</li>
                        <li><em>Kifelé folyó áram:</em> Lassan aktiválódó késői egyenirányító káliumáramok (<strong>IKr</strong> – rapid, és <strong>IKs</strong> – slow komponensek) próbálják repolarizálni a sejtet [PPT: 1.7. dia].</li>
                    </ul>
                </li>
                <li><strong>3. fázis – Terminális repolarizáció [PPT: 1.7. dia]:</strong>
                    Az L-típusú kalciumcsatornák inaktiválódnak, miközben a káliumcsatornák (<strong>IKr, IKs</strong>, majd a negatívabb potenciálokon az <strong>IK1</strong> befelé egyenirányító csatorna) maximálisan aktívak [PPT: 1.7. dia]. A masszív K+-kiáramlás visszahúzza a membránpotenciált a nyugalmi szintre [PPT: 1.7. dia].
                </li>
                <li><strong>4. fázis – Nyugalmi membránpotenciál [PPT: 1.7. dia]:</strong>
                    Stabilan <strong>-85 mV</strong> körüli érték, amelyet az <strong>IK1 (Inward Rectifier K+ channel)</strong> magas nyugalmi K+-konduktanciája tart fenn [PPT: 1.7. dia].</li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – A gömbhal, a tetrodotoxin (TTX) és a Nav1.5 farmakológiája]:</strong><br>
                <em>„Érdekességként szoktam említeni: Japánban nagy ínyencség a fugu (gömbhal), amelynek a szerveiben tetrodotoxin (TTX) található. A szakácsokat éveken át képzik, hogy úgy filézzék a halat, hogy a méreg ne kerüljön az ételbe. Mi történik, ha mégis TTX-mérgezést kap valaki? A TTX specifikusan gátolja az ideg- és vázizomsejtek feszültségfüggő nátriumcsatornáit (Nav1.4), így a légzőizmok megbénulnak, és a beteg megfullad. De miért dobogna mégis a szíve a betegnek? Két okból: egyrészt a szívizom Na-csatornája (a Nav1.5 izoforma) szerkezetileg eltér, és mintegy ezerrel rezisztensebb a TTX-re és a helyi érzéstelenítőkre (lidokain), másrészt az ingerképző sejtekben (sinuscsomóban) egyáltalán nincs is nátriumcsatorna!” [PPT: 1.5, 1.7. dia]</em>
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                4. Refrakteritás és az Extraszisztolé [PPT: 1.8–1.9. dia]
            </h3>
            <ul>
                <li><strong>Abszolút refrakter periódus (ARP / ERP) [PPT: 1.8. dia]:</strong>
                    A 0. fázistól a 3. fázis közepéig (kb. -50 mV-ig) tart. A nátriumcsatornák inaktivált állapotban vannak. <strong>Semmilyen nagyságú ingerrel nem váltható ki újabb akciós potenciál!</strong> [PPT: 1.8. dia]
                </li>
                <li><strong>Relatív refrakter periódus (RRP) [PPT: 1.8. dia]:</strong>
                    A repolarizáció végén (-50 mV-tól a nyugalmi szintig), amikor a Na-csatornák egy része már visszatért zárt (ingerelhető) állapotba. Szupramaximális ingerrel már kiváltható akciós potenciál, de annak meredeksége és amplitúdója csökkent [PPT: 1.8. dia].
                </li>
                <li><strong>A SZÍVIZOM NEM TETANIZÁLHATÓ [PPT: 1.8. dia]!</strong>
                    A hosszú plató miatt az abszolút refrakter periódus csaknem addig tart, mint maga a mechanikai kontrakció (kb. 200–250 ms). Ennek óriási élettani jelentősége van: a szív nem hozható tartós merevgörcsbe (tetanuszba). A relaxáció minden egyes összehúzódás után kötelezően bekövetkezik, így a kamrák mindig képesek újratelődni vérrel [PPT: 1.8. dia]!
                </li>
                <li><strong>Kamrai extraszisztolé és kompenzációs pauza [PPT: 1.9. dia]:</strong>
                    Ha a kamrában egy ektopiás góc miatt a szív egy soron kívüli korai ingert kap a relatív refrakter fázisban, <strong>extraszisztolé</strong> jön létre [PPT: 1.9. dia].
                    Mivel az extraszisztolé refrakter periódusa lefedi azt az időpontot, amikor a következő normális sinuscsomói ingerület érkezne, az a szívizmot refrakter állapotban találja, így <strong>kiesik egy szívverés</strong> [PPT: 1.9. dia]!
                    Ezt követően egy megnyúlt szünet, úgynevezett <strong>kompenzációs pauza</strong> alakul ki, amíg a következő fiziológiás sinus-inger meg nem érkezik [PPT: 1.9. dia].
                </li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Miért 'kihagyásként' érezzük a pulzuson az extraszisztolét?]:</strong><br>
                <em>„A betegek a rendelőben gyakran mondják: 'Doktor úr, néha kihagy a szívem egy ütést, megáll a mellkasomban!' Miért érzik így? Valójában nem kimaradt az ütés, hanem épp ellenkezőleg: jött egy korai pótütés (extraszisztolé). Csakhogy a korai ütésnél a kamrának még nem volt ideje megtelni vérrel a diasztolé alatt! Alig van benne vér, ezért a kamra alig lök ki valamit az aortába, a pulzushullám nem jut el a csuklóig, a radiális artérián semmit nem tapintunk. Aztán jön a hosszú kompenzációs pauza, ami alatt a kamra túltelődik vérrel, és a rákövetkező normál ütés egy hatalmasat lök – ezt érzi meg a beteg dobbanásként!” [PPT: 1.9. dia]</em>
            </div>

            <!-- II. RÉSZ: INGERKÉPZÉS ÉS INGERÜLETVEZETÉS -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 3rem;">
                II. RÉSZ: A Szívritmus Eredete és az Ingerületvezetés
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. A pacemaker mechanizmus: Membránóra és Kalciumóra [PPT: 1.10–1.13. dia]
            </h3>
            <p>A sinuscsomó spontán ritmusgenerálása a legújabb kutatások szerint nem egyetlen csatorna műve, hanem két párhuzamosan ketyegő, egymást kölcsönösen szinkronizáló rendszer („coupled clock”) eredménye [PPT: 1.13. dia]:</p>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">A) Membránóra (Membrane clock) [PPT: 1.11. dia]:</h4>
            <ol>
                <li>A repolarizáció végén a membránpotenciál eléri a maximális diasztolés potenciált (MDP, kb. -60 mV), ahol a K+-csatornák inaktiválódnak, a K+-kiáramlás lecsökken [PPT: 1.11. dia].</li>
                <li>A hiperpolarizáció hatására kinyílnak a <strong>funny-csatornák (HCN4)</strong>, és beindul az <strong>If (funny current)</strong>: nem-szelektív kationáram (főleg Na+-beáramlás), amely elkezdi felfelé tolni a potenciált [PPT: 1.11. dia].</li>
                <li>-50 mV körül bekapcsolódnak az alacsony küszöbű, tranziens T-típusú Ca2+-csatornák (<strong>Cav3.1 / ICa,T</strong>), tovább gyorsítva a depolarizációt [PPT: 1.11. dia].</li>
                <li>Amikor a potenciál eléri a küszöböt (~ -40 mV), kinyílnak a hosszú élettartamú L-típusú Ca2+-csatornák (<strong>Cav1.2, Cav1.3 / ICa,L</strong>), amelyek létrehozzák a 0. fázis lassú felszálló szárát [PPT: 1.11. dia].</li>
            </ol>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">B) Kalciumóra (Calcium clock / Lakatta-mechanizmus) [PPT: 1.12. dia]:</h4>
            <ul>
                <li>A szarkoplazmatikus retikulum (SR) a SERCA2a pumpán keresztül folyamatosan kalciumot gyűjt a diasztolé alatt [PPT: 1.12. dia].</li>
                <li>Amikor az SR kalciumraktára feltöltődik, a diasztolé végén a rianodin receptorokon (RyR2) keresztül spontán, szubmembranózus kalcium-felszabadulások (ún. <strong>kalcium-szikrák / LCR</strong> – local calcium releases) pattannak ki [PPT: 1.12, 1.13. dia].</li>
                <li>A citoplazmába jutó kalciumot a <strong>nátrium-kalcium cseremechanizmus (NCX)</strong> azonnal elkezdi eltávolítani: <strong>1 Ca2+ kilépéséért cserébe 3 Na+ lép be a sejtbe</strong> [PPT: 1.12. dia]!</li>
                <li>Mivel 3 pozitív töltés jön be és csak 2 megy ki, az NCX működése <strong>nettó befelé folyó depolarizáló áramot generál</strong>, ami az akciós potenciál küszöbéig löki a sejtmembránt [PPT: 1.12, 1.13. dia]!</li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – A két óra kézfogása]:</strong><br>
                <em>„A 1.13. dián látható a két óraember kézfogása: a membránóra (a felszíni membrán ioncsatornái) és a kalciumóra (az SR belső szikrái) nem egymás riválisai, hanem tökéletes szinkronban dolgoznak. Ha a membrán depolarizálódik, nő a Ca-beáramlás, ami serkenti az SR-t; ha az SR kalciumot lövell ki, az NCX azonnal depolarizálja a membránt. Ez a kettős biztosítás teszi a szívritmust elképesztően robusztussá és megbízhatóvá!” [PPT: 1.13. dia]</em>
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. Ingerképző központok hierarchiája [PPT: 1.14. dia]
            </h3>
            <p>A szívben szigorú hierarchikus rend érvényesül az ingerképző struktúrák között [PPT: 1.14. dia]:</p>
            <ul>
                <li><strong>Elsődleges (primer) pacemaker – Sinuscsomó (Keith-Flack csomó):</strong>
                    Saját intrinsic frekvenciája: <strong>100–120 ütés/perc</strong> [PPT: 1.14. dia].
                    Nyugalomban a folyamatos paraszimpatikus (vagus) tónus ezt lefékezi a fiziológiás <strong>60–80/perc</strong> értékre [PPT: 1.14. dia].
                </li>
                <li><strong>Másodlagos (szekunder) pacemaker – AV-csomó (Aschoff-Tawara csomó):</strong>
                    Saját frekvenciája: <strong>40–60 ütés/perc</strong> [PPT: 1.14. dia]. Ha a sinuscsomó kiesik, az AV-csomó veszi át a vezetést (junkcionális ritmus) [PPT: 1.14. dia].
                </li>
                <li><strong>Harmadlagos (tercier) pacemaker – His-köteg és Purkinje-rostok:</strong>
                    Saját frekvenciája: <strong>20–45 ütés/perc</strong> [PPT: 1.14. dia]. Biztonsági vésztartalék (kamrai pótütem); önmagában perctérfogat-elégtelenséget és eszméletvesztést (Adams-Stokes szindróma) okozhat [PPT: 1.14. dia].
                </li>
                <li><strong>Kamrai munkaizomsejtek:</strong> Nincs spontán ingerképző képességük [PPT: 1.14. dia]!</li>
                <li><strong>Túlvezérléses elnyomás (Overdrive suppression):</strong> Mindig a leggyorsabb frekvenciájú központ (normálisan a sinuscsomó) vezérli az egész szívet, mert az általa keltett depolarizációs hullámok folyamatosan kisütik és elnyomják a lassabb alárendelt pacemakereket még azelőtt, hogy azok elérhetnék a saját küszöbüket [PPT: 1.14. dia].</li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. Az Ingerület terjedése és az AV-késleltetés [PPT: 1.15–1.18. dia]
            </h3>
            <ul>
                <li><strong>Funkcionális szincícium [PPT: 1.16. dia]:</strong> A szívizomsejtek morfológiailag különálló sejtek, de funkcionálisan egyetlen elektromos egységként viselkednek.
                    <ul>
                        <li>Mechanikai kapcsolat: <em>desmosomák</em> (fascia adherens) a mechanikai szakítás ellen [PPT: 1.16. dia].</li>
                        <li>Elektromos kapcsolat: <strong>gap junction (réskapcsolat) csatornák</strong> (főleg <strong>Connexin 43</strong> a kamrában, Cx40 a pitvarban, Cx45 a csomókban) [PPT: 1.16, 1.17. dia].</li>
                        <li><strong>Vég-vég kapcsolatok dominanciája [PPT: 1.16. dia]:</strong> A réskapcsolatok szinte kizárólag az interkaláris disszkuszokban (Eberth-féle vonalakban), a sejtek hossztengelyének végén találhatók; oldalirányban ezerszer ritkábbak (1:2000 arány!). Ezért az ingerület a rostok hosszában gyorsan, keresztirányban rendkívül lassan terjed [PPT: 1.16. dia]!</li>
                    </ul>
                </li>
                <li><strong>Efaptikus vezetés (Perinexus) [PPT: 1.17. dia]:</strong> Ha a réskapcsolatok bezáródnak (pl. ischaemia, acidózis vagy sejten belüli kalciumfelhalmozódás miatt), a szomszédos sejtek szűk intercelluláris réseiben (perinexus, < 30 nm) a feszültségfüggő Na-csatornák klaszterei közötti elektromos térvezérlés tartja fenn az átvitelt [PPT: 1.17. dia].</li>
                <li><strong>Vezetési sebességek a szívben [PPT: 1.18. dia]:</strong>
                    <ul>
                        <li>Pitvari és kamrai munkaizomzat: <strong>~0,5 m/s</strong> [PPT: 1.18. dia].</li>
                        <li><strong>AV-csomó: ~0,05 m/s (a leglassabb a szívben!) [PPT: 1.18. dia].</strong></li>
                        <li>His-köteg és Tawara-szárak: <strong>~2 m/s</strong> [PPT: 1.18. dia].</li>
                        <li><strong>Purkinje-rostok: ~4 m/s (a leggyorsabb a szívben!) [PPT: 1.18. dia].</strong></li>
                    </ul>
                </li>
                <li><strong>AZ AV-CSOMÓ ÉLETTANI KÉSLELTETÉSÉNEK JELENTŐSÉGE [PPT: 1.18. dia]:</strong>
                    Az AV-csomó sejtjei vékonyak és nagyon kevés gap junctiont tartalmaznak, ezért az ingerület átjutása mintegy <strong>0,12–0,16 másodpercet késik</strong> [PPT: 1.18. dia]. Ennek feladatai [PPT: 1.18. dia]:
                    <ol>
                        <li><em>Időzítés:</em> Lehetővé teszi, hogy a pitvarok összehúzódása teljesen befejeződjön, és a vér átömöljön a kamrákba még a kamrai szisztolé kezdete előtt [PPT: 1.18. dia].</li>
                        <li><em>Frekvenciaszűrés:</em> Pitvarlebegés vagy pitvarfibrilláció esetén (300–500 pitvari ingerület/perc) megvédi a kamrákat a halálos frekvenciájú kamrafibrillációtól [PPT: 1.18. dia].</li>
                        <li><em>Egyenirányítás:</em> Normálisan megakadályozza az ingerület retrográd (kamrából pitvarba történő) visszafutását [PPT: 1.18. dia].</li>
                    </ol>
                </li>
            </ul>

            <!-- III. RÉSZ: EKG ALAPOK ÉS DIAGNOSZTIKA -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 3rem;">
                III. RÉSZ: Az Elektrokardiográfia (EKG) Elmélete és Gyakorlata
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. Mi az EKG és Debrecen történelmi szerepe [PPT: 1.19–1.21. dia]
            </h3>
            <p>Az EKG a szív elektromos működésének során keletkező eredő elektromos dipólusvektor időbeli vetülete a testfelszínen [PPT: 1.21. dia].</p>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Verzár Frigyes és Debrecen büszkesége az EKG történetében]:</strong><br>
                <em>„A 1.20. dián látható archív fotón Einthoven professzor és Verzár Frigyes látható. Verzár professzor úr volt a Debreceni Egyetem Élettani Intézetének legelső igazgatója az I. világháború után. Egy kutatási ösztöndíjjal kiutazott Bécsbe és Leidenbe magához Willem Einthovenhez, aki feltalálta az EKG-t és Nobel-díjat kapott érte. Verzár Frigyes ott megtanulta az EKG elméletét és gyakorlatát, vásárolt egy korabeli legmodernebb húros galvanométeres EKG gépet, elhozta Debrecenbe, és itt az Élettani Intézet folyosóján készítette el Magyarország legelső klinikai EKG felvételét – még Budapestet és a Semmelweist is megelőzve!” [PPT: 1.20. dia]</em>
            </div>

            <p><strong>A „Doboz és nyíl” gondolatkísérlet [PPT: 1.21. dia]:</strong><br>
            A szív elektromos aktivitása egy folyamatosan forgó és nagyságát változtató térbeli vektor. Képzeljünk el egy félig áttetsző papírdobozt, amelynek közepén egy nyíl lebeg. Ha csak egyetlen oldalról világítjuk meg, a vetületi árnyékból nem tudjuk megmondani a nyíl valódi hosszát és térbeli irányát. De ha legalább 2-3 merőleges síkból levetítjük az árnyékát, a vetületekből a trigonometria szabályai szerint tökéletesen rekonstruálható az eredeti vektor iránya és nagysága. Ez az EKG elvezetések lényege [PPT: 1.21. dia]!</p>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. Az elektromos hullámterjedés mérésének alapszabályai [PPT: 1.22. dia]
            </h3>
            <ul>
                <li>Ha a <strong>depolarizációs hullámfront közeledik</strong> a pozitív (mérő) elektród felé → <strong>POZITÍV kitérés</strong> (felfelé irányuló hullám) [PPT: 1.22. dia].</li>
                <li>Ha a <strong>depolarizációs hullámfront távolodik</strong> a pozitív elektródtól → <strong>NEGATÍV kitérés</strong> (lefelé irányuló hullám) [PPT: 1.22. dia].</li>
                <li>Ha a hullámfront <strong>merőleges</strong> az elvezetés tengelyére → izoelektromos vonal vagy bifázisos kitérés [PPT: 1.22. dia].</li>
                <li><strong>Repolarizáció esetén fordított a szabály:</strong> távolodó repolarizáció pozitív, közeledő repolarizáció negatív kitérést ad [PPT: 1.22. dia]!</li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. A normál EKG-görbe hullámai és szakaszai [PPT: 1.23, 1.36. dia]
            </h3>
            <ul>
                <li><strong>P-hullám [PPT: 1.23, 1.36. dia]:</strong> A pitvarok depolarizációja (SA-csomóból indul, felülről lefelé és jobbról balra terjed). Időtartama < 0,10 s.</li>
                <li><strong>PQ-intervallum (PR-távolság) [PPT: 1.36. dia]:</strong> A pitvari depolarizáció kezdetétől a kamrai depolarizáció kezdetéig eltelt idő (tartalmazza a P-hullámot és az AV-csomói átvezetési késést). Normálértéke: <strong>0,12 – 0,20 s</strong> (ha > 0,20 s: I. fokú AV-blokk!) [PPT: 1.36. dia].</li>
                <li><strong>QRS-komplexum (Kamrai depolarizáció) [PPT: 1.23, 1.36. dia]:</strong>
                    Normál időtartama keskeny: <strong>0,08 – 0,10 s</strong> (ha > 0,12 s: szárblokk vagy kamrai ritmuszavar!) [PPT: 1.36. dia].
                    <ul>
                        <li><em>Q-hullám:</em> az első negatív kitérés az R-hullám előtt; a kamrai sövény (septum) balról jobbra történő depolarizációját jelzi [PPT: 1.23. dia].</li>
                        <li><em>R-hullám:</em> az első pozitív kitérés; a kamrák fő tömegének (csúcstól bázis felé, endocardiumtól epicardium felé haladó) depolarizációja [PPT: 1.23. dia].</li>
                        <li><em>S-hullám:</em> az R-hullámot követő negatív hullám; a kamrabázisok késői depolarizációja [PPT: 1.23. dia].</li>
                    </ul>
                </li>
                <li><strong>ST-szakasz [PPT: 1.23, 1.34, 1.36. dia]:</strong> A kamrai depolarizáció végétől (J-pont) a repolarizáció kezdetéig tart. Mivel a plató fázis alatt a teljes kamraizomzat depolarizált állapotban van, nincs potenciálkülönbség: <strong>fiziológiásan szigorúan az izoelektromos vonalon fut</strong> [PPT: 1.23, 1.34. dia]!</li>
                <li><strong>T-hullám [PPT: 1.23, 1.36. dia]:</strong> A kamrák gyors repolarizációját tükrözi.</li>
                <li><strong>QT-szakasz [PPT: 1.36, 1.37. dia]:</strong> A kamrai elektromos szisztolé teljes ideje (QRS elejétől a T végéig). Normálértéke frekvenciafüggő: <strong>0,35 – 0,43 s</strong> [PPT: 1.36, 1.37. dia].</li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Alapvető szigorlati kérdés: Miért POZITÍV a T-hullám?]:</strong><br>
                <em>„Gondoljatok bele: ha a repolarizáció pont ugyanott kezdődne, ahol a depolarizáció indult, akkor mivel a repolarizáció ellentétes előjelű folyamat, a T-hullámnak lefelé (negatívnak) kellene mutatnia! De miért mutat felfelé az R-hullámmal azonos irányba (konkordáns)? Mert a szívfalban a repolarizáció NEM ott indul, ahol a depolarizáció! Az epicardialis sejtekben az akciós potenciál rövidebb, mint az endocardiumban. Ezért a kamra külső felszíne (az epicardium) hamarabb kezd repolarizálódni, mint a belseje! Vagyis a repolarizációs hullámfront távolodik a pozitív elektródtól (epicardium → endocardium irányba fut). Távolodó hullámfront = negatív előjel, repolarizáció = negatív előjel: mínusz szorozva mínusszal az PLUSZ! Ezért lesz a normál T-hullám pozitív kitérésű!” [PPT: 1.23, 1.32. dia]</em>
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                4. A standard 12 elvezetéses rendszer [PPT: 1.24–1.30. dia]
            </h3>
            <p>A klinikai EKG a szív elektromos terét 12 standard elvezetésből rögzíti, amelyek két térbeli síkra oszlanak [PPT: 1.30. dia]:</p>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">A) Frontális síkú elvezetések (6 végtagi elvezetés) [PPT: 1.24–1.28. dia]:</h4>
            <ul>
                <li><strong>Einthoven-féle bipoláris végtagi elvezetések (I, II, III) [PPT: 1.24. dia]:</strong>
                    Két végtag közötti valós feszültségkülönbséget mérnek:
                    <ul>
                        <li><strong>I. elvezetés:</strong> Jobb kar (-) → Bal kar (+) [0°] [PPT: 1.24. dia].</li>
                        <li><strong>II. elvezetés:</strong> Jobb kar (-) → Bal láb (+) [+60°] (általában a legnagyobb R-hullám, mert iránya egybeesik a szív tengelyével!) [PPT: 1.24. dia].</li>
                        <li><strong>III. elvezetés:</strong> Bal kar (-) → Bal láb (+) [+120°] [PPT: 1.24. dia].</li>
                        <li><strong>Einthoven-szabály:</strong> $II = I + III$ [PPT: 1.24. dia].</li>
                    </ul>
                </li>
                <li><strong>Wilson-féle centrális terminál (CT) [PPT: 1.25, 1.26. dia]:</strong>
                    A jobb kar, bal kar és bal láb elektródáit egy-egy 5 kOhm-os ellenálláson keresztül egy közös csillagpontba kötik össze. Ez a csillagpont a három vektor eredőjeként stabilan <strong>0 mV-os virtuális földpotenciált</strong> ad, ami referenciaként szolgál az unipoláris elvezetésekhez [PPT: 1.25. dia].
                </li>
                <li><strong>Goldberger-féle megnövelt (augmented) unipoláris elvezetések (aVR, aVL, aVF) [PPT: 1.27, 1.28. dia]:</strong>
                    Goldberger rájött, hogy ha az éppen mért végtag ellenállását lekapcsolja a Wilson-féle csillagpontról, a mért jel alakja nem torzul, de az <strong>amplitúdója 50%-kal megnő (augmented)</strong> [PPT: 1.27. dia]!
                    <ul>
                        <li><strong>aVR:</strong> Jobb kar felé néz [-150°] (fiziológiásan minden hulláma negatív!) [PPT: 1.27, 1.28. dia].</li>
                        <li><strong>aVL:</strong> Bal kar felé néz [-30°] [PPT: 1.27, 1.28. dia].</li>
                        <li><strong>aVF:</strong> Bal láb felé lefelé néz [+90°] [PPT: 1.27, 1.28. dia].</li>
                    </ul>
                </li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">B) Horizontális síkú elvezetések (6 mellkasi unipoláris elvezetés: V1–V6) [PPT: 1.29, 1.30. dia]:</h4>
            <p>A pozitív mérőelektródokat a mellkasfal meghatározott pontjaira helyezik, a referencia a Wilson-féle centrális terminál (CT) [PPT: 1.29. dia]:</p>
            <ul>
                <li><strong>V1:</strong> 4. bordaköz, a sternum jobb széle (jobb kamra felett; döntően negatív rS komplexum) [PPT: 1.30. dia].</li>
                <li><strong>V2:</strong> 4. bordaköz, a sternum bal széle [PPT: 1.30. dia].</li>
                <li><strong>V3:</strong> a V2 és V4 közötti távolság felezőpontja [PPT: 1.30. dia].</li>
                <li><strong>V4:</strong> 5. bordaköz a bal medioclavicularis vonalban (szívcsúcs felett) [PPT: 1.30. dia].</li>
                <li><strong>V5:</strong> 5. bordaköz a bal elülső hónaljvonalban (a V4 magasságában) [PPT: 1.30. dia].</li>
                <li><strong>V6:</strong> 5. bordaköz a bal középső hónaljvonalban (bal kamra szabad fala felé néz; domináns magas R-hullám) [PPT: 1.30. dia].</li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                5. Diagnosztikai szabályok és Patológiás EKG mintázatok [PPT: 1.31–1.35. dia]
            </h3>
            <ul>
                <li><strong>Szinkronizáció szabálya [PPT: 1.32. dia]:</strong> Minél szinkronizáltabban depolarizálódnak a szívizomsejtek a gyors Purkinje-rendszeren át, annál keskenyebb és magasabb a QRS komplexum. Ha az ingerület a lassú munkaizomzaton át botorkál (pl. szárblokk, kamrai extraszisztolé), a QRS kiszélesedik (> 0,12 s) és deformálttá válik [PPT: 1.32. dia].</li>
                <li><strong>Szövettömeg szabálya (Kamrai hipertrófia) [PPT: 1.33. dia]:</strong>
                    <ul>
                        <li><em>Bal kamra hipertrófia (LVH):</em> megnő a bal kamra izomtömege → a vektor balra és hátra fordul → extrém magas R-hullámok a bal kamrai elvezetésekben (V5, V6, I, aVL) és mély S-hullámok V1-ben, bal tengelyállással [PPT: 1.33. dia].</li>
                        <li><em>Jobb kamra hipertrófia (RVH):</em> a vektor jobbra tolódik → magas R-hullám jelenik meg V1-ben, jobb tengelyállással [PPT: 1.33. dia].</li>
                    </ul>
                </li>
                <li><strong>Az izoelektromos vonal és az ischaemia formái [PPT: 1.34. dia]:</strong>
                    Az akut vérellátási zavar depolarizálja a nyugalmi membránpotenciált és megrövidíti a platót, ami sérülési áramot (injury current) hoz létre:
                    <ul>
                        <li><strong>Szubendocardialis ischaemia:</strong> az endocardium sérülékenyebb rétege ischaemiás → <strong>ST-depresszió</strong> (vízszintes vagy lejtős lefutással) és/vagy negatív T-hullám [PPT: 1.34. dia].</li>
                        <li><strong>Transzmuralis ischaemia (STEMI):</strong> a szívizomfal teljes vastagsága ischaemiás elzáródás alá kerül (akut szívinfarktus) → <strong>ST-eleváció</strong> (monofázisos görbe) [PPT: 1.34. dia]!</li>
                        <li><strong>Elhalt szövet (nekrózis / infarktus után):</strong> elektromosan néma zóna, az elektród „átlát” a lyukon a szemközti ép fal felé távolodó vektorra → <strong>patológiás (mély és széles) Q-hullám</strong> alakul ki (> 9 órával az infarktus után tartósan megmarad) [PPT: 1.33, 1.34. dia].</li>
                    </ul>
                </li>
                <li><strong>A szív elektromos tengelye (Cabrera-kör) [PPT: 1.35. dia]:</strong>
                    A frontális síkban az eredő QRS-fővektor iránya. Normál tartomány: <strong>-30° és +90° között</strong> (átlagosan kb. +60°, a II. elvezetés irányába) [PPT: 1.35. dia].
                    <ul>
                        <li><em>Bal deviáció (-30° és -90° között):</em> bal kamra hipertrófia, bal szárblokk, terhesség és elhízás (rekesz felnyomja a szívet) [PPT: 1.35. dia].</li>
                        <li><em>Jobb deviáció (+90° és +180° között):</em> jobb kamra hipertrófia, tüdőembólia, sovány-magas alkatú egyének (cseppszív / vertikális szív) [PPT: 1.35. dia].</li>
                    </ul>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                6. A Bazett-formula és amit az EKG NEM mutat [PPT: 1.37–1.39. dia]
            </h3>
            <ul>
                <li><strong>A korrigált QT-távolság (QTc) és a Bazett-formula [PPT: 1.37. dia]:</strong>
                    Mivel magasabb szívfrekvenciánál a szívizom AP lerövidül, a QT-szakasz hossza fiziológiásan a szívfrekvenciával fordítottan arányosan változik. Ezért frekvenciára korrigált értéket (QTc) számolunk:
                    <div style="background: var(--bg); border: 1px solid var(--border); border-radius: 6px; padding: 0.6rem; text-align: center; margin: 0.8rem 0; font-weight: bold; font-size: 1.05rem;">
                        QTc = QT / √(RR távolság másodpercben)
                    </div>
                    <em>Klinikai határ:</em> Fiziológiásan <strong>QTc < 0,44 s</strong>. Ha a QTc > 0,44 s, <strong>hosszú QT szindrómáról (LQTS)</strong> beszélünk, amely életveszélyes kamrai tachycardiára (Torsades de pointes) és hirtelen szívhalálra hajlamosít [PPT: 1.37. dia]!
                </li>
            </ul>

            <div style="background: var(--box-bg); border-left: 4px solid var(--danger); padding: 1rem; margin: 1.5rem 0; border-radius: 6px;">
                <h4 style="margin-top: 0; color: var(--danger);">⚠️ MIT NEM TUDHATUNK MEG AZ EKG-BÓL? (Klasszikus szigorlati csapda! [PPT: 1.38. dia]):</h4>
                <p>Az EKG KIZÁRÓLAG az elektromos feszültségváltozásokat regisztrálja a testfelszínen! Ezért az EKG-ból:</p>
                <ul>
                    <li><strong>NEM állapítható meg a szívizomzat kontrakciós ereje!</strong> [PPT: 1.38. dia]</li>
                    <li><strong>NEM kapunk információt a szív pumpafunkciójáról, perctérfogatáról vagy ejekciós frakciójáról!</strong> [PPT: 1.38. dia]</li>
                    <li><strong>NEM ad tájékoztatást a szívüregek belsejében uralkodó nyomásokról!</strong> [PPT: 1.38. dia]</li>
                </ul>
                <p><em>Klinikai példa:</em> Pulzus nélküli elektromos aktivitásban (PEA / elektromechanikai disszociáció) az EKG-monitoron teljesen szabályos szinuszritmus látható, miközben a szív mint pumpa egyáltalán nem mozog, és a beteg keringése leállt!</p>
            </div>

            <!-- ÖSSZEFOGLALÓ KULCSPONTOK SZIGORLATRA -->
            <div style="background: var(--box-bg); border-left: 4px solid var(--accent); padding: 1.2rem; border-radius: 8px; margin-top: 2rem;">
                <h4 style="margin-top: 0; color: var(--primary);">Legfontosabb szigorlati kulcspontok (Take-Home Messages):</h4>
                <ul>
                    <li>A <strong>gyors szívizom AP</strong> 0. fázisát a TTX-rezisztensebb <strong>Nav1.5</strong> csatornák hozzák létre; a 2. fázis platóját az <strong>L-típusú Cav1.2</strong> csatornák Ca2+-beáramlása tartja fenn [PPT: 1.7. dia].</li>
                    <li>A <strong>sinuscsomóban (lassú AP)</strong> nincs Nav1.5; a felszálló szárat az <strong>ICa,L</strong> hozza létre, a spontán diasztolés depolarizációt pedig az <strong>If funny-áram és a Ca-óra (SR Ca2+-szikrák + NCX)</strong> ketyegése vezérli [PPT: 1.4, 1.11, 1.12. dia].</li>
                    <li>A szívizom <strong>tetanizálhatatlan</strong>, mert az abszolút refrakter periódusa majdnem a mechanikai kontrakció végéig kitart [PPT: 1.8. dia].</li>
                    <li>Az <strong>AV-csomói átvezetési késés (0,05 m/s)</strong> biztosítja a pitvarok teljes kiürülését a kamrai összehúzódás előtt [PPT: 1.18. dia].</li>
                    <li>A <strong>T-hullám azért pozitív</strong> a normál elvezetésekben, mert a repolarizáció az <strong>epicardiumban</strong> kezdődik (ahol rövidebb az AP), és az endocardium felé távolodik az elektródtól [PPT: 1.23, 1.32. dia]!</li>
                    <li><strong>Elvezetések:</strong> I, II, III (Einthoven bipoláris, II = I + III); aVR, aVL, aVF (Goldberger megnövelt unipoláris); V1–V6 (Wilson mellkasi unipoláris) [PPT: 1.24–1.30. dia].</li>
                    <li><strong>Ischaemiás jelek:</strong> szubendocardialis ischaemia = <em>ST-depresszió</em>; transzmuralis infarktus = <em>ST-eleváció</em> (STEMI); nekrózis = <em>patológiás Q-hullám</em> [PPT: 1.34. dia].</li>
                    <li><strong>Bazett-formula:</strong> $QTc = QT / \sqrt{RR}$; ha > 0,44 s, kamrai ritmuszavar és hirtelen szívhalál kockázata áll fenn [PPT: 1.37. dia].</li>
                </ul>
            </div>

        </div>
    `
});