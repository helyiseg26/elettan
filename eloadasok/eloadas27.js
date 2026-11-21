// eloadasok/eloadas27.js
window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-27",
    title: "27–28. Előadás: Regionális vérkeringés (Szív, Agy, Tüdő, Vázizom, Bőr, Vese és Hepato-splanchnicus terület)",
    shortName: "Regionális vérkeringések",
    html: `
        <div style="font-family: inherit; line-height: 1.75; color: var(--text);">

            <!-- BEVEZETÉS: REGIONÁLIS ÁRAMLÁS ÉS REDISZTRIBÚCIÓ -->
            <div style="background: var(--info-bg); border-left: 4px solid var(--primary-light); padding: 1.2rem; border-radius: 8px; margin-bottom: 2rem;">
                <h3 style="margin-top: 0; color: var(--primary);">Bevezetés: A regionális véráramlás alapelvei és a perctérfogat redisztribúciója</h3>
                <p>Minden egyes szerv vérátáramlását a hidrodinamikai Ohm-törvény szabja meg: <strong><code>Q = ΔP / R</code></strong>, ahol a hajtóerő (<code>ΔP</code>) az adott szerv artériás és vénás oldala közötti nyomáskülönbség, az ellenállás (<code>R</code>) pedig elsősorban a helyi rezisztenciaerek, az <strong>arteriolák átmérőjétől</strong> (<code>R ∝ 1 / r⁴</code>) függ [PPT: Szív/Agy 2. dia].</p>
                <ul>
                    <li><strong>Perctérfogat-eloszlás nyugalomban (CO = 5 L/perc) vs. Nehéz dinamikus izommunkában (CO = 25 L/perc) [PPT: Szív/Agy 3. dia]:</strong>
                        <ul>
                            <li><strong>Vázizomzat:</strong> Nyugalomban a PTF <strong>20%-át (1 L/perc)</strong> kapja, nehéz fizikai munkában viszont a <strong>72–80%-át (18–20 L/perc)</strong> – ez 18–20-szoros véráramlás-növekedés [PPT: Szív/Agy 3. dia; Vázizom 2. dia]!</li>
                            <li><strong>Szív (Koronáriák):</strong> Nyugalomban <strong>5% (0,25 L/perc)</strong> → terheléskor <strong>5% (1,25 L/perc)</strong>. Bár a százalékos részesedés változatlan marad, az ötszörösére növekvő perctérfogat miatt a koszorúerek abszolút vérátáramlása <strong>5-szörösére nő</strong> [PPT: Szív/Agy 3. dia].</li>
                            <li><strong>Agy:</strong> Nyugalomban <strong>15% (0,75 L/perc)</strong> → terheléskor <strong>3% (0,75 L/perc)</strong>. A százalékos arány csökken, mert az agy <strong>abszolút vérátáramlása (750 ml/perc) szigorúan állandó marad</strong> [PPT: Szív/Agy 3. dia].</li>
                            <li><strong>Vese és Hepato-splanchnicus terület:</strong> Nyugalomban egyenként <strong>25–25%-ot (1,25–1,25 L/perc)</strong> kapnak, de terheléskor erős szimpatikus (α₁) érszűkület lép fel bennük, így részesedésük <strong>3–4%-ra (0,75–1 L/perc)</strong> esik vissza (<em>redisztribúció</em> a dolgozó vázizom javára) [PPT: Szív/Agy 3. dia].</li>
                            <li><strong>Bőr:</strong> Nyugalomban <strong>5% (0,25 L/perc)</strong> → terheléskor <strong>11% (2,75 L/perc)</strong>. Bár a presszor válasz eleinte szűkíti a bőrereket, a fokozott izommunka miatti hőtermelés aktiválja a hipotalamusz hőleadó központját, ami kitágítja a bőr ereit [PPT: Szív/Agy 3. dia; Vázizom 5. dia].</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- I. RÉSZ: A SZÍV VÉRELLÁTÁSA – KORONÁRIAKERINGÉS -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2rem;">
                I. RÉSZ: A Szív Vérkeringése (Koronáriakeringés) [PPT: 1. blokk, 4–10. dia]
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. Anatómiai és élettani sajátosságok [PPT: 5–6. dia]
            </h3>
            <ul>
                <li><strong>Alapadatok [PPT: 5, 9. dia]:</strong> A koszorúerek (<em>a. coronaria dextra et sinistra</em>) nyugalmi vérátáramlása kb. <strong>250 ml/perc</strong> (a perctérfogat ~5%-a, fajlagosan 0,8–1,0 ml/g/perc) [PPT: 5, 9. dia].</li>
                <li><strong>Extrém magas oxigénextrakció (AV-O₂ különbség = 70–80%!) [PPT: 5. dia]:</strong><br>
                Míg a szervezet többi szövete (beleértve az agyat is) nyugalomban az artériás vér oxigéntartalmának mindössze 10–25%-át vonja ki, addig a szívizom már nyugalmi állapotban is kiszedi az oxigén <strong>70–80%-át</strong> (a sinus coronarius vénás vérében a legalacsonyabb az oxigénszaturáció az egész testben!) [PPT: 5, 12. dia].<br>
                <em>Élettani következmény:</em> Terheléskor a szívizom <strong>nem képes érdemben fokozni az oxigénextrakciót</strong> (nincs tartalék a kivonásban) – megnövekedett oxigénigényét kizárólag a <strong>koronária-átáramlás arányos fokozásával</strong> tudja fedezni!</li>
                <li><strong>Végartériás jelleg és kapillárissűrűség [PPT: 5. dia]:</strong> A szívizomban rendkívül sűrű a kapillárishálózat (közel 1 kapilláris jut 1 szívizomrostra, kivéve az AV-csomó és a kamrai septum területét, ahol kisebb a sűrűség, ezért ezek érzékenyebbek az oxigénhiányra). A koronáriaágak között funkcionálisan kevés az anasztomózis (végartériák).</li>
                <li><strong>Rétegződés és a transzmurális nyomásgradiens [PPT: 5–6. dia]:</strong><br>
                A nagy koronáriaágak a szív külső felszínén (epicardium) futnak, és merőlegesen hatolnak be a szívizomzatba (<em>intramuralis artériák: Class A és Class B erek</em>) a legbelső réteg, a <strong>subendocardium</strong> felé [PPT: 5. dia]. A szisztolé alatt a bal kamra falában uralkodó magas szöveti nyomás (belül a kamraüregben 120 Hgmm, kívül a pericardialis térben 0 Hgmm) mechanikusan <strong>összenyomja a subendocardialis ereket</strong> [PPT: 5–6. dia]. Emiatt a subendocardium a legérzékenyebb az ischaemiára (itt alakul ki leggyakrabban a szívinfarktus) [PPT: 5–6. dia].</li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. A koronária-átáramlás fázisos jellege a szívciklus során [PPT: 6–7. dia]
            </h3>
            <p>Mivel a szívizom összehúzódása kívülről összenyomja a saját ereit, a bal és a jobb koronária véráramlása egészen eltérő görbét mutat a szívciklus fázisai alatt [PPT: 6–7. dia]:</p>

            <!-- KORONÁRIA FÁZISOS ÁRAMLÁS SVG ÁBRA -->
            <div style="text-align: center; margin: 1.5rem 0;">
                <svg viewBox="0 0 650 200" style="max-width: 100%; height: auto; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
                    <!-- Bal kamra (LCF) -->
                    <rect x="20" y="20" width="295" height="160" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="8"/>
                    <text x="167" y="45" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">BAL KORONÁRIA (LCF)</text>
                    <text x="167" y="72" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">• Izovolumetriás kontrakció (IC):</text>
                    <text x="167" y="90" fill="#cbd5e1" font-size="10" text-anchor="middle">Az áramlás NULLÁRA esik (sőt rövid retrográd áramlás)!</text>
                    <text x="167" y="114" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">• Izotóniás ejekció:</text>
                    <text x="167" y="132" fill="#cbd5e1" font-size="10" text-anchor="middle">Mérsékelt áramlás (magas aortanyomás miatt).</text>
                    <text x="167" y="156" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">• Izovolumetriás relaxáció &amp; Diasztolé:</text>
                    <text x="167" y="172" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">MAXIMÁLIS ÁRAMLÁS (a vér ~80%-a ekkor áramlik)!</text>

                    <!-- Jobb kamra (RCF) -->
                    <rect x="335" y="20" width="295" height="160" fill="#1e293b" stroke="#c084fc" stroke-width="2" rx="8"/>
                    <text x="482" y="45" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">JOBB KORONÁRIA (RCF)</text>
                    <text x="482" y="75" fill="#cbd5e1" font-size="11" text-anchor="middle">A jobb kamra szisztolés nyomása csak ~25 Hgmm,</text>
                    <text x="482" y="95" fill="#cbd5e1" font-size="11" text-anchor="middle">ami jóval kisebb az aortanyomásnál (120/80 Hgmm).</text>
                    <text x="482" y="125" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">→ Az áramlás FOLYAMATOS,</text>
                    <text x="482" y="145" fill="#cbd5e1" font-size="11" text-anchor="middle">és a szisztolé alatt éri el a maximumát</text>
                    <text x="482" y="165" fill="#cbd5e1" font-size="10" text-anchor="middle">(követi az aortanyomás görbéjét)!</text>
                </svg>
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">7. Dia: A bal és jobb koronária fázisos véráramlása a szívciklus alatt [PPT: 7. dia].</div>
            </div>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Miért életveszélyes az extrém tachycardia koszorúér-betegségben?]:</strong><br>
                <em>„Mivel a bal kamra vérellátásának döntő része a diasztolé alatt történik, ha a szívfrekvencia extrém magasra (pl. 180–200/perc) ugrik, a szívciklus lerövidülése szinte kizárólag a <strong>diasztolé időtartamát csökkenti le</strong>! Emiatt nem marad idő a bal kamra falának átáramlására, és súlyos szívizom-ischaemia (angina pectoris / infarktus) alakul ki!”</em> [PPT: 10. dia]
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. A koronáriakeringés szabályozása [PPT: 8–10. dia]
            </h3>
            <ul>
                <li><strong>Lokális metabolikus szabályozás (A LEGFŐBB MECHANIZMUS!) [PPT: 8–9. dia]:</strong><br>
                A koszorúereknek <strong>nagy a bazális tónusa</strong>, és <strong>40–140 Hgmm</strong> nyomástartományban párhuzamos metabolikus és miogén autoreguláció működik bennük [PPT: 8–9. dia]. Fokozott szívmunka esetén a szívizomsejtekből felszabaduló metabolitok – elsősorban az <strong>adenozin</strong>, továbbá <strong>↓ pO₂, ↑ pCO₂, ↓ pH</strong> – azonnal elernyesztik az arteriolákat (használat-függő, funkcionális hyperaemia) [PPT: 9. dia]. A nyugalmi átáramlás és a maximális vazodilatáció közötti különbség a <strong>koronária áramlási rezerv (flow reserve)</strong> [PPT: 9. dia].</li>
                <li><strong>Idegi és humorális hatások (Direkt vs. Indirekt hatás!) [PPT: 10. dia]:</strong>
                    <ul>
                        <li>A koronáriák <strong>NEM vesznek részt közvetlenül a vérnyomás-szabályozó reflexekben</strong> (nincs nyugalmi vasoconstrictor tónusuk) [PPT: 8, 10. dia].</li>
                        <li>A szimpatikus izgalom és a keringő adrenalin a koronária ellenállás-arterioláin túlsúlyban lévő <strong>β₂-receptorokon</strong> direkt <strong>vazodilatációt</strong> okoz (az α₁-receptorok csak a nagy epicardialis ágakon dominálnak) [PPT: 10. dia].</li>
                        <li>A szimpatikus aktiváció mégis hatalmas áramlásnövekedést vált ki <strong>indirekt módon</strong>: a β₁-receptorokon fokozza a szívfrekvenciát és a kontraktilitást → nő a szívmunka → felszaporodnak a vazodilatátor metabolitok (adenozin) → kitágulnak a koronáriák [PPT: 10. dia]!</li>
                    </ul>
                </li>
            </ul>

            <!-- II. RÉSZ: AZ AGYI VÉRKERINGÉS -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                II. RÉSZ: Az Agyi Vérkeringés (Cerebrális Keringés) [PPT: 1. blokk, 11–23. dia]
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. Általános jellemzők, Vér-agy gát és a Monro–Kellie-törvény [PPT: 12–13. dia]
            </h3>
            <ul>
                <li><strong>Alapadatok [PPT: 12. dia]:</strong> Az agy a testtömeg mindössze 2%-a, mégis a perctérfogat <strong>15%-át (750 ml/perc, azaz ~50 ml/100g/perc CBF)</strong> és a szervezet teljes oxigénfogyasztásának 20%-át igényli [PPT: 12. dia]. Az AV-O₂ különbség alacsony (~10%) [PPT: 12. dia]. Vérellátását a két <em>a. carotis interna</em> és a két <em>a. vertebralis</em> biztosítja, amelyek a koponyaalapon a <strong>Circulus arteriosus Willisiben</strong> egyesülnek [PPT: 12. dia].</li>
                <li><strong>Vér-agy gát (BBB – Blood-Brain Barrier) és a liquor [PPT: 12. dia]:</strong><br>
                Az agyi kapillárisok endothelsejtjei között szoros zárókapcsolatok (<strong>tight junctions</strong>) találhatók, kívülről pedig az asztrociták talpai és pericyták burkolják őket [PPT: 12, 18. dia]. Könnyen átjutnak rajta a légzési gázok (<strong>O₂, CO₂</strong>) és a zsíroldékony molekulák, míg az ionok, fehérjék és vízoldékony anyagok csak specifikus transzporterekkel léphetnek át (ezért az agyban <strong>nem érvényesül a klasszikus Starling-féle filtráció</strong>; az agyi extracelluláris folyadék az endothelsejtek aktív szekréciós terméke) [PPT: 12. dia].<br>
                <em>Felhajtóerő:</em> Mivel az agy és a liquor fajsúlya közel megegyezik, Archimedes törvénye értelmében az agy lebeg a liquorban [PPT: 12. dia].</li>
                <li><strong>Monro–Kellie-törvény és az Agyi Perfúziós Nyomás (CPP) [PPT: 13. dia]:</strong>
                    <ul>
                        <li>A felnőtt koponya merev, tágulásra képtelen csontos üreg, amelyben három gyakorlatilag összenyomhatatlan térfogat található [PPT: 13. dia]:<br>
                        <strong><code>V_agy + V_vér + V_CSF ≈ ÁLLANDÓ</code></strong> [PPT: 13. dia].<br>
                        Ha bármelyik térfogata nő (pl. agyvérzés, tumor, agyödéma), a másik kettőnek ki kell szorulnia a koponyából, különben az <strong>intracranialis nyomás (ICP, normálisan 10–20 Hgmm)</strong> meredeken megemelkedik [PPT: 13. dia]!</li>
                        <li><strong>Agyi perfúziós nyomás (CPP) [PPT: 13. dia]:</strong> <code>CPP = MAP − ICP</code> (normálisan: 90 − 15 = <strong>75 Hgmm</strong>; ha a CVP meghaladja az ICP-t, akkor <code>CPP = MAP − CVP</code>) [PPT: 13. dia]. Ha az ICP emelkedik, csökken a CPP és az agyi vérátáramlás (CBF) [PPT: 13. dia]!</li>
                    </ul>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. Az agyi véráramlás szabályozása és a Neurovascularis Egység (NVU) [PPT: 14–19. dia]
            </h3>
            <ul>
                <li><strong>1. Miogén autoreguláció [PPT: 15–16. dia]:</strong><br>
                <strong>60 és 140 Hgmm artériás középnyomás (MAP) között</strong> az agyi vérátáramlás (CBF) állandó marad, mert nyomásemelkedéskor az agyi arteriolák összehúzódnak (↑ R) [PPT: 16. dia].<br>
                <em>Testhelyzet hatása:</em> Álló vagy ülő helyzetben a koponya ~30 cm-rel a szív felett helyezkedik el, ezért a hidrosztatikai nyomáskülönbség miatt a koponyában mérhető MAP <strong>10–15 (kb. 20) Hgmm-rel alacsonyabb</strong>, mint a szív magasságában (pl. 90 helyett csak ~70–75 Hgmm), ami már közel esik az autoregulációs sáv 60 Hgmm-es alsó határához [PPT: 16. dia]!</li>
                <li><strong>2. Metabolikus reguláció (A legfőbb szabályozó!) [PPT: 17. dia]:</strong>
                    <ul>
                        <li><strong>A pCO₂ drámai hatása:</strong> Az agyi erek rendkívül érzékenyek az artériás <strong>pCO₂</strong> változására (fiziológiásan 40 Hgmm, ami pontosan a görbe legmeredekebb szakaszára esik!) [PPT: 17. dia]. A CO₂ szabadon átdiffundál a vér-agy gáton, és a liquorban (CSF) H⁺-ionokat képezve pH-csökkenést okoz [PPT: 17. dia]. <strong>Hypercapnia (↑ pCO₂)</strong> hatalmas <strong>vazodilatációt</strong> vált ki (akár megduplázza a CBF-et!), míg <strong>hypocapnia (↓ pCO₂)</strong> erős <strong>vazokonstrikciót</strong> okoz [PPT: 17. dia].</li>
                        <li><em>pO₂ szerepe:</em> Az agyi erek az oxigénhiányra kevésbé érzékenyek: a pO₂ csak akkor okoz jelentős vazodilatációt, ha kritikusan alacsony szintre (<strong>&lt; 60 Hgmm</strong>) esik [PPT: 17. dia].</li>
                        <li><em>Használat-függő (regionális) átrendeződés:</em> Ha az agy bizonyos területeit intenzíven használjuk (pl. beszéd, írás, mozgás), ott több CO₂ és adenozin termelődik → helyi vazodilatáció alakul ki, míg a nem használt agyterületeken enyhe vazokonstrikció lép fel, így a koponyán átáramló össz-vérmennyiség állandó marad!</li>
                    </ul>
                </li>
                <li><strong>3. Neurovascularis Egység (NVU) és Funkcionális Hyperaemia [PPT: 17–18. dia]:</strong><br>
                Az NVU elemei: <strong>neuronok, asztrociták, mikrogliák, pericyták, endothelsejtek és vaszkuláris simaizomsejtek</strong> [PPT: 18. dia]. Az aktív serkentő neuronokból felszabaduló <strong>glutamát</strong> ingerli a környező asztrocitákat → emelkedik az asztrocita intracelluláris [Ca²⁺]-szintje → az asztrocita nyúlványai (<em>foot processes</em>) vazoaktív anyagokat (<strong>NO, K⁺, arachidonsav-metabolitok / PGE₂, adenozin</strong>) bocsátanak ki a penetráló arteriolákra → helyi vazodilatáció (<strong>funkcionális hyperaemia</strong> – ezen alapul az fMRI működése!) [PPT: 17–18. dia].<br>
                <em>Visszafelé is működik (Vasculo-neuronalis kapcsolat):</em> Kezeletlen hypertoniában az érfal megvastagodása rontja az NVU jelátvitelét, ami hosszú távon neuronpusztuláshoz és kognitív hanyatláshoz (demenciához) vezet [PPT: 18. dia]!</li>
                <li><strong>4. Idegi szabályozás [PPT: 19. dia]:</strong><br>
                Az agyi erek <strong>nem vesznek részt közvetlenül a cardiovascularis reflexekben</strong>, és a lokális szabályozás felülírja az idegi hatásokat [PPT: 19. dia]. A szimpatikus adrenerg (α₁) hatás nyugalomban elhanyagolható [PPT: 19. dia]. Csak <strong>hirtelen, nagy erőkifejtéskor / extrém vérnyomás-emelkedéskor</strong> van jelentősége: ekkor a szimpatikus izgalom összehúzza a <strong>nagy és közepes agyi artériákat</strong>, megakadályozva, hogy a magas nyomáslökés elérje és szétrepessze a vékony falú, törékeny kis agyi ereket [PPT: 19. dia]!</li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Miért szédülünk el gumimatrac-fújáskor és felálláskor?]:</strong><br>
                <em>„Két klasszikus hétköznapi jelenség is az agyi autoreguláción alapul: (1) Ha fekvő helyzetből hirtelen felpattanunk, a koponya 30 cm-rel a szív fölé kerül, a MAP pedig átmenetileg kieshet a 60 Hgmm-es autoregulációs sáv alá – amíg a baroreceptor-reflex 1–2 másodperc alatt nem korrigál, megszédülünk (viszont ha elájulunk és eldőlünk, a fej újra egy magasságba kerül a szívvel, és magunkhoz térünk!). (2) Ha gyorsan fújunk fel egy nagy gumimatracot, <strong>hiperventillálunk</strong>: kimossuk a vérből a CO₂-t, az agyi erek a hypocapnia miatt összeszűkülnek, csökken a CBF, és 20–30 másodperc múlva megszédülünk!”</em> [PPT: 16–17. dia]
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. Klinikai Összefoglalás: Agyi Ischaemiás Reflex, Cushing-reflex és Beékelődés [PPT: 20–23. dia]
            </h3>
            <p>Ha a koponyaűri nyomás (ICP) <strong>33 Hgmm fölé</strong> emelkedik (pl. agyvérzés, tumor), a transzmurális nyomás (<code>P_TM = MAP − ICP</code>) lecsökken, és kívülről összenyomja az agyi ereket [PPT: 20. dia]. Az agytörzs ischaemiája kiváltja a <strong>Cushing-reflexet</strong> (<strong>Cushing-triász:</strong> extrém magas vérnyomás + paradox bradycardia + szabálytalan légzés) [PPT: 22–23. dia]. Klinikai szempontból ez az életveszélyes <strong>agyi beékelődés (herniatio)</strong> közvetlen előjele: a magas koponyaűri nyomás a nyúltvelőt lefelé préseli az öreglyukba (<em>foramen magnum</em>), ami összenyomja a légző- és keringési központokat, percek alatt halált okozva [PPT: 23. dia]!</p>

            <!-- III. RÉSZ: A PULMONÁLIS KERINGÉS (KISVÉRKÖR) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                III. RÉSZ: A Pulmonális Vérkeringés (Kisvérkör) [PPT: 2. blokk, 1–14. dia]
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. Hemodinamikai jellemzők és a tüdő Starling-erői [PPT: 2–6. dia]
            </h3>
            <ul>
                <li><strong>Kettős vérellátás és alacsony ellenállású rendszer [PPT: 2–3. dia]:</strong> A tüdőnek kettős vérellátása van: (1) a <em>kisvérköri (pulmonális) keringés</em>, amely vénás vért szállít az alveolusokhoz gázcsere céljából, és (2) a nagyvérkörből eredő <em>bronchialis artériák</em>, amelyek oxigéndús vérrel táplálják a hörgők falát [PPT: 2. dia]. Mivel a kis- és nagyvérkör <strong>sorosan van kapcsolva</strong>, a perctérfogatuk megegyezik (5,0–5,5 L/perc), viszont a pulmonális erek rövidek, tágak és vékony falúak, így az ellenállásuk kb. <strong>egytizede</strong> a nagyvérkörinek (1,1 vs. 16,5 Hgmm·min/L), a pulmonális középnyomás pedig mindössze <strong>14–15 Hgmm</strong> (szisztolés: 25 Hgmm, diasztolés: 8–10 Hgmm) [PPT: 2–3. dia].</li>
                <li><strong>Miért nincs tüdőödéma fiziológiás körülmények között? (Pulmonális Starling-erők) [PPT: 4–5. dia]:</strong><br>
                A pulmonális kapillárisokban a hidrosztatikai nyomás nagyon alacsony (<strong>P<sub>c</sub> ≈ 7–8 Hgmm</strong>), míg az intersticiális nyomás enyhén negatív (<strong>P<sub>is</sub> ≈ -8 Hgmm</strong>). A plazma onkotikus nyomása (Π<sub>c</sub> = 28 Hgmm) és az intersticium onkotikus nyomása (Π<sub>is</sub> = 14 Hgmm) egyenlegeként a <em>trans-endothelialis effektív filtrációs nyomás</em> mindössze <strong><code>P_eff = (7 − (-8)) − (28 − 14) = +1 Hgmm</code></strong> [PPT: 4. dia]! Ez a minimális, folyamatosan filtrálódó folyadékmennyiség azonnal elvezetődik a peribronchovascularis nyirokerekbe, amelyeket a légzőmozgások ritmikusan masszíroznak (pumpálnak) [PPT: 4–5. dia]. Eközben az alveoláris hám (<em>trans-epithelialis</em> erő: +22 Hgmm az intersticium felé) és a szoros hámkapcsolások teljesen szárazon tartják az alveolusok belsejét [PPT: 4–5. dia].</li>
                <li><strong>A tüdőödéma kialakulása (Akut vs. Krónikus) [PPT: 6–7. dia]:</strong><br>
                Tüdőödéma alakul ki, ha (1) emelkedik a pulmonális vénás nyomás (pl. <strong>balszívfél-elégtelenség</strong> vagy <strong>mitralis billentyűszűkület</strong> miatt), (2) emelkedik a pulmonális artériás nyomás (pl. tüdőfibrózis), vagy (3) nő a kapilláris permeabilitás (pl. belélegzett toxinok, gyulladás) [PPT: 6. dia].<br>
                <em>Fontos klinikai különbség [PPT: 7. dia]:</em> Hirtelen bal kamrai elégtelenségben a bal pitvari nyomás <strong>25 Hgmm fölé</strong> ugrik, a nyirokerek nem bírják elszállítani a hirtelen felszaporodó filtrátumot, és akut, életveszélyes tüdőödéma alakul ki. Ha azonban a nyomás lassan, hónapok alatt emelkedik (pl. krónikus mitralis stenosisban), a nyirokerek kitágulnak és kapacitásuk sokszorosára nő, így akár 30–35 Hgmm-es bal pitvari nyomás mellett sem alakul ki ödéma [PPT: 7. dia]!</li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. A pulmonális keringés szabályozása: Hypoxiás Pulmonális Vazokonstrikció (HPV) [PPT: 8–11. dia]
            </h3>
            <ul>
                <li><strong>Idegi hatás és a nyitott kapillárisok toborzása (Recruitment) [PPT: 8. dia]:</strong> A szimpatikus idegrendszer direkt hatása a tüdőerekre elhanyagolható [PPT: 8. dia]. Terheléskor (amikor a PTF 5-ről 25 L/percre nő) a pulmonális artériás nyomás alig emelkedik (15-ről csak ~25–30 Hgmm-re), mert a korábban zárt csúcsi kapillárisok megnyílnak és a nagy tágulékonyságú (compliance) erek kitágulnak, így az ellenállás lecsökken [PPT: 8. dia].</li>
                <li><strong>Humorális szabályozás és a tüdő „anyagcsere-szűrő” szerepe [PPT: 9. dia]:</strong> A pulmonális keringésben a hisztamin, a szerotonin, a katekolaminok (főként a <em>v. pulmonalis</em> összehúzásával, ami segíti a bal szívfél telődését) és az Angiotenzin-II <strong>vazokonstrikciót</strong>, míg a VIP, az NO, az ANP és a bradikinin <strong>vazodilatációt</strong> okoz [PPT: 9. dia].<br>
                <em>A pulmonális endothelium metabolikus funkciója [PPT: 9. dia]:</em> A tüdő kapillárisainak hatalmas endothelfelülete szinte teljes egészében (80–90%-ban) lebontja a vérben keringő vazoaktív anyagokat (bradikinin, hisztamin, szerotonin, prosztaglandinok), miközben az <strong>ACE enzim</strong> itt aktiválja az Angiotenzin-I-et Angiotenzin-II-vé [PPT: 9. dia]!</li>
                <li><strong>Lokális szabályozás – A nagyvérkör FORDÍTOTTJA! [PPT: 10–11. dia]:</strong><br>
                Míg a nagyvérkörben az oxigénhiány értágulatot okoz, addig a kisvérkörben az <strong>alveoláris hypoxia (↓ pO₂ &lt; 73 Hgmm)</strong>, a <strong>hypercapnia (↑ pCO₂)</strong> és az <strong>acidosis (↓ pH)</strong> erős <strong>VAZOKONSTRIKCIÓT</strong> vált ki (a pO₂ 73 Hgmm alá esése ötszörösére növeli a helyi ellenállást!) [PPT: 10–11. dia]. Miogén autoreguláció pedig <strong>NINCS</strong> [PPT: 10. dia].<br>
                <em>Élettani célja [PPT: 11. dia]:</em> Ha egy tüdőlebeny hörgője elzáródik (hipoventilláció), ott lecsökken az oxigénnyomás. A hypoxiás vazokonstrikció elzárja ennek a rosszul szellőző területnek a vérellátását, és <strong>áttereli a vért a jól átszellőzött alveolusok felé</strong>, megakadályozva, hogy oxigénszegény vénás vér keveredjen az artériás vérbe [PPT: 11. dia]!</li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Magashegyi betegség, perui lakosok és a Mount Everest]:</strong><br>
                <em>„A hypoxiás pulmonális vazokonstrikció lokális tüdőbetegségben életmentő, de ha a belélegzett levegő oxigéntartalma mindenütt alacsony (pl. 3500–4000 méter felett az Andokban, Peruban, vagy hegymászáskor oxigénpalack nélkül), akkor <strong>a tüdő összes ereje egyszerre szűkül össze</strong>! Ez súlyos <strong>pulmonális hypertoniához</strong> vezet, amely egyrészt túlterheli a jobb kamrát, másrészt olyan magasra emeli a kapillárisnyomást, hogy kialakul az életveszélyes <strong>magashegyi tüdőödéma (HAPE)</strong>!”</em> [PPT: 11. dia]
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. A gravitáció hatása és a tüdő 3 perfúziós zónája (West-zónák) [PPT: 12–14. dia]
            </h3>
            <p>A tüdő csúcsa és bázisa között álló helyzetben kb. <strong>25–30 cm</strong> a szintkülönbség, ami ~18–20 Hgmm hidrosztatikai nyomáskülönbséget jelent [PPT: 12. dia]. Mivel a pulmonális artériás nyomás eleve alacsony (~15–16 Hgmm), a gravitáció miatt a tüdő csúcsában a nyomás leesik (~7 Hgmm-re), a bázisán pedig megemelkedik (~24 Hgmm-re) [PPT: 12. dia]. Ennek megfelelően az alveoláris nyomás (P<sub>A</sub>), az artériás nyomás (P<sub>pa</sub>) és a vénás nyomás (P<sub>pv</sub>) viszonya három zónát hoz létre [PPT: 13–14. dia]:</p>
            <ul>
                <li><strong>1. Zóna (Csúcs – Csak kóros esetben!): <code>P<sub>A</sub> &gt; P<sub>pa</sub> &gt; P<sub>pv</sub></code></strong> – Az alveoláris nyomás kívülről összenyomja a kapillárisokat, <strong>nincs véráramlás (stasis)</strong>, csak ventilláció van (fiziológiás holttér; V/Q ≈ 3) [PPT: 13. dia]. <em>Egészséges emberben nyugalomban NINCS 1. zóna!</em> Csak súlyos vérvesztéskor, szívelégtelenségben vagy pozitív nyomású gépi lélegeztetéskor jelenik meg [PPT: 14. dia].</li>
                <li><strong>2. Zóna (Felső-középső rész): <code>P<sub>pa</sub> &gt; P<sub>A</sub> &gt; P<sub>pv</sub></code></strong> – <strong>Szakaszos (intermittáló) áramlás:</strong> csak a szisztolé csúcsán nyílnak meg a kapillárisok, diasztoléban az alveoláris nyomás összenyomja őket (V/Q ≈ 0,8–1,0) [PPT: 13. dia].</li>
                <li><strong>3. Zóna (Alsó rész / Bázis): <code>P<sub>pa</sub> &gt; P<sub>pv</sub> &gt; P<sub>A</sub></code></strong> – <strong>Folyamatos áramlás</strong> mind szisztoléban, mind diasztoléban, mert mind az artériás, mind a vénás nyomás meghaladja az alveoláris nyomást (V/Q ≈ 0,7) [PPT: 13. dia]. <em>Lefekvéskor az egész tüdő a 3. zónába kerül, fizikai munkában pedig a 3. zóna felfelé terjed a csúcs irányába!</em> [PPT: 14. dia].</li>
            </ul>

            <!-- IV. RÉSZ: VÁZIZOM, BŐR, VESE ÉS HEPATO-SPLANCHNICUS KERINGÉS -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                IV. RÉSZ: Vázizom, Bőr, Vese és a Hepato-splanchnicus Terület Keringése [PPT: 3. blokk, 1–19. dia]
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. A vázizomzat vérkeringése [PPT: 1–5. dia]
            </h3>
            <ul>
                <li><strong>Alapadatok és fázisos áramlás [PPT: 2. dia]:</strong> Nyugalmi átáramlása 3–4 ml/100g/perc (a PTF ~20%-a, ~1 L/perc), maximális terheléskor elérheti a <strong>20 L/percet (a PTF 80%-át)</strong> [PPT: 2. dia]. Ritmikus izommunka során az áramlás <strong>fázisos</strong>: az izom-összehúzódás (kompresszió) mechanikusan elszorítja az ereket (ezért a tartós, statikus izomfeszítés hamar kifáradáshoz és ischaemiás fájdalomhoz vezet!), míg az elernyedéskor (dekompresszió) hatalmas mennyiségű vér áramlik át rajta [PPT: 2. dia].</li>
                <li><strong>Vázizompumpa [PPT: 2. dia]:</strong> Az izmok között futó mélyvénák ritmikus összenyomása és az egyirányú vénabillentyűk működése („második szív”) pumpálja vissza a vért a szív felé [PPT: 2. dia].</li>
                <li><strong>A fizikai munkavégzés 3 egymást követő keringési fázisa és a Funkcionális Szimpatolízis [PPT: 4–5. dia]:</strong>
                    <ol>
                        <li><em>0. fázis (Központi parancs / Előkészítés):</em> Már a mozgás elindításakor a motoros kéreg aktiválja a <strong>szimpatikus kolinerg (M-AChR)</strong> rostokat → előzetes <strong>vazodilatáció</strong> a használni kívánt izmokban [PPT: 4–5. dia].</li>
                        <li><em>1. fázis (Általános presszor válasz):</em> A szimpatikus adrenerg (α₁) tónus fokozódása az egész szervezetben (beleértve a <strong>nem-dolgozó izmokat</strong>, a vesét és a splanchnicus területet is!) <strong>vazokonstrikciót</strong> okoz → emelkedik a vérnyomás [PPT: 5. dia].</li>
                        <li><em>2. fázis (Funkcionális szimpatolízis a dolgozó izomban):</em> A működő vázizomban felszaporodó <strong>lokális metabolitok (↑ pCO₂, ↓ pO₂, adenozin, K⁺, tejsav, ↓ pH, H₂O₂)</strong> és az endothelből felszabaduló <strong>NO/PGI₂</strong>, valamint a keringő adrenalin (<strong>β₂-receptoron</strong>) <strong>felülírják a szimpatikus α₁-érszűkítő parancsot</strong> (<em>funkcionális szimpatolízis</em>) → hatalmas értágulat a dolgozó izomban, miközben a nem-dolgozó izmokban fennmarad az érszűkület [PPT: 4–5. dia]!</li>
                    </ol>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. A bőr vérkeringése és a hőszabályozás [PPT: 6–9. dia]
            </h3>
            <p>A bőr vérátáramlása nyugalomban a PTF ~5%-a (~250 ml/perc), de elsődleges feladata nem a bőr táplálása, hanem a <strong>hőszabályozás</strong>: extrém hidegben <strong>&lt; 100 ml/perc</strong> alá eshet, míg forróságban akár <strong>8 L/percre</strong> is felugorhat [PPT: 7. dia]! Két eltérő szerkezetű és szabályozású bőrterületet különböztetünk meg [PPT: 7–9. dia]:</p>
            <ul>
                <li><strong>Acralis (apikális) bőrterületek (tenyér, talp, ujjak, orr, fülkagyló) [PPT: 7–8. dia]:</strong><br>
                Szőrtelen bőrfelületek, ahol bőségesek az <strong>arteriovenosus (A-V) anasztomózisok</strong> és az <strong>ellenáramlásos hőcserélő érrendszer</strong> (a mélyben egymás mellett futó artéria átadja a hőjét a visszatérő hideg vénás vérnek, így a végtagok végein minimális a hőveszteség) [PPT: 7. dia]. Nincs bazális tónusuk, csak erős <strong>szimpatikus adrenerg (α₁) vasoconstrictor tónusuk</strong>: hidegben maximálisan összehúzódnak (<em>hőtárolás</em>), melegben a szimpatikus tónus csökkenésével passzívan kitágulnak [PPT: 7–8. dia].<br>
                <em>Hideg-indukált vazodilatáció (Hunting-reakció) [PPT: 8. dia]:</em> Ha az ujjakat tartósan extrém hideg éri, 5–10 perc után a szimpatikus idegvégződések átmenetileg kimerülnek (csökken a NA-leadás), így az erek hirtelen kitágulnak, átmelegítve az ujjakat a fagyási sérülés ellen, majd újra összehúzódnak [PPT: 8. dia].</li>
                <li><strong>Nem-acralis bőrterületek (törzs, végtagok szőrrel borított részei) [PPT: 7, 9. dia]:</strong><br>
                Nincsenek A-V anasztomózisok, van közepes bazális és konstriktor tónusuk [PPT: 7. dia]. Hőségben a hipotalamusz aktiválja a <strong>szimpatikus kolinerg (M-AChR)</strong> rostokat, amelyek egyrészt közvetlenül tágítják az ereket, másrészt serkentik a <strong>verejtékmirigyeket</strong>: a verejtékmirigyekből felszabaduló <strong>kallikrein enzim</strong> a szöveti kininogénből <strong>bradikinint</strong> hasít ki, ami helyileg még tovább tágítja a bőrereket (<em>aktív vazodilatáció → fokozott hőleadás</em>) [PPT: 9. dia]! <em>(Megjegyzés: a tenyér és talp verejtékezése viszont emocionális/stressz alapú, és nem a hőszabályozást szolgálja!)</em></li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Miért életveszélyes alkoholt inni fagyos hidegben?]:</strong><br>
                <em>„Hidegben a bőrerek szimpatikus összehúzódása megvédi a testmagot a kihűléstől. Ha valaki ilyenkor „melegedés” céljából megiszik egy-két feles töményet, az alkohol centrálisan gátolja a vazomotor központot, így <strong>kitágulnak a bőr erei (vazodilatáció)</strong>. A meleg vér kiáramlik a bőrbe, a hőreceptorok azt jelzik az agynak, hogy „de jó meleg van” (kipirul az arca), valójában viszont rohamosan szökik a hő a környezetbe, és a beteg sokkal gyorsabban kihűl (hipotermia)!”</em> [PPT: 8. dia]
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. A vese vérkeringése [PPT: 10–13. dia]
            </h3>
            <ul>
                <li><strong>Alapadatok és a medulla érzékenysége [PPT: 11–12. dia]:</strong> A vese a perctérfogat <strong>~25%-át (~1,2 L/perc)</strong> kapja, de az AV-O₂ különbség nagyon alacsony (~8–10%), mert a hatalmas vérátáramlás elsősorban a glomeruláris filtrációt szolgálja [PPT: 11–12. dia]. A vér <strong>95%-a a vesekéregbe (cortex)</strong> jut, míg a vesevelőbe (medulla, <em>vasa recta</em>) csak 5% jut: mivel a medulláris tubulussejtek rendkívül energiaigényes aktív iontranszportot végeznek, az oxigénhiány határán dolgoznak, így <strong>sokk vagy vérnyomásesés esetén a vesevelő károsodik legelőször (akut tubuláris nekrózis)</strong> [PPT: 12. dia]!</li>
                <li><strong>Kettős kapillárishálózat és Autoreguláció [PPT: 11–13. dia]:</strong> A vesében két arteriola (<em>afferens</em> és <em>efferens</em>) és két kapillárishálózat (<em>glomerularis</em> és <em>peritubularis / vasa recta</em>) kapcsolódik sorba [PPT: 11–12. dia]. A vese véráramlása (RBF) és a filtrációs ráta (GFR) <strong>80–180 (kb. 90–200) Hgmm MAP között szigorúan állandó marad</strong> két mechanizmus révén [PPT: 11, 13. dia]:
                    <br>1. <strong>Miogén autoreguláció (Bayliss-effektus):</strong> Itt a legkifejezettebb a szervezetben! Nyomásemelkedésre az afferens arteriola összehúzódik [PPT: 13. dia].
                    <br>2. <strong>Tubulo-glomeruláris feedback (TGF):</strong> Ha nő a vérnyomás és a filtráció, több Na⁺/Cl⁻ jut a distalis tubulusba → a <strong>macula densa</strong> érzékeli, és helyileg összehúzza az afferens arteriolát, visszaállítva a normál RBF-et és GFR-t [PPT: 13. dia].
                </li>
                <li><strong>Idegi és humorális hatás [PPT: 13. dia]:</strong> Erős presszor válaszban (pl. vérvesztés, futás) a szimpatikus izgalom (α₁) és az Angiotenzin-II összehúzza a veseereket (redisztribúció) [PPT: 13. dia].</li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                4. A hepato-splanchnicus terület vérkeringése [PPT: 14–19. dia]
            </h3>
            <ul>
                <li><strong>Alapadatok és a portális keringés [PPT: 15–17. dia]:</strong> Nyugalomban a perctérfogat <strong>~25%-át</strong> kapja (étkezés után – <em>postprandialisan</em> – <strong>~35%-ra</strong> nő) [PPT: 15. dia]. A gyomor-bélrendszer, a lép és a hasnyálmirigy vénás vére a <strong>vena portae-n</strong> keresztül a májba ömlik, ahol egy második kapillárishálózaton (<em>máj-szinuszoidok</em>, diszkontinuus endothelium!) halad át, mielőtt a <em>vv. hepaticae-n</em> át a vena cava inferiorba jutna [PPT: 15–17. dia].</li>
                <li><strong>Kettős vérellátás és a máj-artéria puffer reakciója [PPT: 16–17. dia]:</strong> A máj vérének ~75%-át a kis nyomású (~8–9 Hgmm) v. portae, ~25%-át pedig az oxigéndús <em>a. hepatica</em> szállítja [PPT: 16–17. dia]. A két rendszer között fordított egyensúly (<strong>máj-artéria puffer reakció</strong>) működik: ha csökken a portális vénás áramlás, az a. hepatica kitágul (az adenozin kimosódásának csökkenése miatt), és fordítva [PPT: 17. dia].</li>
                <li><strong>Vérraktár funkció és a First-Pass effektus [PPT: 16, 18. dia]:</strong> A máj-szinuszoidok és a splanchnicus vénák hatalmas, alacsony ellenállású vérraktárt alkotnak: szimpatikus izgalomra (venokonstrikció) jelentős mennyiségű vért pumpálnak a szív felé [PPT: 16, 18. dia]. Emellett a bélből felszívódó tápanyagok és szájon át bevett gyógyszerek először a májon haladnak át (<em>first-pass metabolizmus</em> – kivéve a végbél alsó harmadából felszívódó kúpokat, amelyek a v. cava inferiorba jutva elkerülik a májat!) [PPT: 18. dia].</li>
                <li><strong>Klinikai összefüggés – Portális hypertonia és Oesophagus varixok [PPT: 19. dia]:</strong> Májcirrhosisban a kötőszövetes átépülés miatt megnő a máj-szinuszoidok ellenállása, ami megemeli a v. portae nyomását (<em>portális hypertonia</em>) [PPT: 19. dia]. Ennek két súlyos következménye van: (1) a fokozott kapilláris filtráció miatt folyadék lép ki a hasüregbe (<strong>ascites / hasvízkór</strong>), és (2) a pangó vér portocavalis anasztomózisokon keresztül kerülőutat keres – többek között a nyelőcső alsó vénáin át (<strong>oesophagus varixok</strong>), amelyek megrepedése életveszélyes vérzést okoz [PPT: 19. dia]!</li>
            </ul>

            <!-- ÖSSZEFOGLALÓ -->
            <div style="background: var(--box-bg); border-left: 4px solid var(--accent); padding: 1.2rem; border-radius: 8px; margin-top: 2rem;">
                <h4 style="margin-top: 0; color: var(--primary);">Legfontosabb vizsgapontok ZH-ra:</h4>
                <ul>
                    <li><strong>Szív (Koronáriák):</strong> AV-O₂ különbség <strong>70–80%</strong>; bal koronária áramlása <strong>fázisos</strong> (diasztoléban ~80%, IC alatt 0); fő szabályozó az <strong>adenozin</strong> és a <strong>β₂-receptor</strong> [PPT: 1. blokk 5–10. dia].</li>
                    <li><strong>Agy:</strong> Autoreguláció <strong>60–140 Hgmm</strong>; legfőbb szabályozó a <strong>pCO₂</strong> (hypercapnia = erős értágulat, hiperventilláció = érszűkület); <strong>NVU</strong> (asztrocita Ca²⁺ ↑ → NO/K⁺/PGE₂); <strong>Monro–Kellie-törvény</strong> (<code>CPP = MAP − ICP</code>) [PPT: 1. blokk 12–18. dia].</li>
                    <li><strong>Tüdő (Kisvérkör):</strong> Alacsony ellenállás (MAP ~14 Hgmm); <strong>alveoláris hypoxia (↓ pO₂ &lt; 73 Hgmm) = VAZOKONSTRIKCIÓ</strong>; 3 West-zóna (egészséges emberben nyugalomban nincs 1. zóna, fekve minden a 3. zónába kerül) [PPT: 2. blokk 3, 10–14. dia].</li>
                    <li><strong>Vázizom:</strong> Terheléskor a PTF 80%-a; <strong>funkcionális szimpatolízis</strong> (a lokális metabolitok felülírják a szimpatikus α₁-vazokonstrikciót) [PPT: 3. blokk 2, 5. dia].</li>
                    <li><strong>Bőr:</strong> Acralis területeken (tenyér/talp) A-V anasztomózisok + csak szimpatikus α₁ (hőtárolás); nem-acralis területeken szimpatikus kolinerg + verejtékmirigy <strong>bradikinin</strong> (hőleadás) [PPT: 3. blokk 7–9. dia].</li>
                    <li><strong>Vese &amp; Splanchnicus:</strong> Vese autoreguláció 80–180 Hgmm (myogen + TGF), a <strong>medulla</strong> érzékeny a hypoxiára [PPT: 3. blokk 11–13. dia]. Májcirrhosis → portális hypertonia → <strong>ascites és oesophagus varixok</strong> [PPT: 3. blokk 19. dia].</li>
                </ul>
            </div>

        </div>
    `
});
