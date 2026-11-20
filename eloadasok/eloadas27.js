// eloadasok/eloadas27.js
window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-27",
    title: "27. Előadás: Regionális vérkeringés: A szív és az agy vérellátása",
    shortName: "A szív és az agy vérellátása",
    html: `
        <div style="font-family: inherit; line-height: 1.7; color: var(--text);">

            <!-- BEVEZETÉS: REGIONÁLIS ÁRAMLÁS ÉS REDISZTRIBÚCIÓ (1-3. DIA) -->
            <div style="background: var(--info-bg); border-left: 4px solid var(--primary-light); padding: 1.2rem; border-radius: 8px; margin-bottom: 2rem;">
                <h3 style="margin-top: 0; color: var(--primary);">1. Regionális véráramlás és a perctérfogat redisztribúciója [PPT: 1–3. dia]</h3>
                <p>Minden szerv vérátáramlását a helyi nyomásgradiens és az érrezisztencia aránya határozza meg: <code>Q = ΔP / R</code> [PPT: 2. dia].</p>
                <ul>
                    <li><strong>Perctérfogat-megoszlás nyugalomban (CO = 5 L/perc) vs. Nehéz izommunkában (CO = 25 L/perc) [PPT: 3. dia]:</strong>
                        <ul>
                            <li><strong>Vázizomzat:</strong> 20% (1 L/perc) → <strong>72% (18 L/perc)</strong> (18-szoros növekedés!) [PPT: 3. dia].</li>
                            <li><strong>Szív (Koronáriák):</strong> 5% (0,25 L/perc) → <strong>5% (1,25 L/perc)</strong> (százalékosan állandó, de abszolút értékben 5-szörösére nő!) [PPT: 3. dia].</li>
                            <li><strong>Agy:</strong> 15% (0,75 L/perc) → <strong>3% (0,75 L/perc)</strong> (abszolút vérátáramlása szigorúan állandó marad!) [PPT: 3. dia].</li>
                            <li><strong>Vese és Splanchnicus terület:</strong> egyenként 25% (1,25 L/perc) → <strong>3–4% (0,75–1 L/perc)</strong> (erős szimpatikus vazokonstrikció szorítja vissza őket a vázizom javára) [PPT: 3. dia].</li>
                            <li><strong>Bőr:</strong> 5% (0,25 L/perc) → <strong>11% (2,75 L/perc)</strong> (hőleadás fokozása miatt kitágulnak az erek) [PPT: 3. dia].</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- I. RÉSZ: A SZÍV VÉRELLÁTÁSA – KORONÁRIAKERINGÉS (4-10. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2rem;">
                I. RÉSZ: A Szív Vérkeringése (Koronáriakeringés) [PPT: 4–10. dia]
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. Anatómiai és élettani sajátosságok [PPT: 5, 8. dia]
            </h3>
            <ul>
                <li><strong>Alapadatok [PPT: 5. dia]:</strong> Nyugalmi átáramlása ~250 ml/perc (a perctérfogat 5%-a, kb. 0,8–1 ml/g/perc) [PPT: 5, 9. dia].</li>
                <li><strong>Extrém magas oxigénextrakció (AV-O₂ különbség = 70–80%!) [PPT: 5. dia]:</strong>
                    <br>Míg a többi szerv (beleértve az agyat is!) az artériás vér oxigéntartalmának csak 10–25%-át vonja ki nyugalomban, a szívizom már nyugalmi állapotban is kiszedi az oxigén 70–80%-át [PPT: 5, 12. dia]!
                    <br><em>Következmény:</em> A szívizom <strong>NEM tudja fokozni az oxigénextrakciót</strong> terheléskor – a megnövekedett oxigénigényt kizárólag a <strong>koronária-átáramlás fokozásával</strong> képes kielégíteni!
                </li>
                <li><strong>Végartériás jelleg és kapillárissűrűség [PPT: 5. dia]:</strong> A szívizomban rendkívül sűrű a kapillárishálózat (1 kapilláris jut 1 szívizomrostra, kivéve az AV-csomó és a septum területét, ahol kisebb a sűrűség, így ezek érzékenyebbek az ischaemiára). Az artériás ágak között kevés a funkcionális anasztomózis (végartériák).</li>
                <li><strong>Rétegződés és a transzmurális nyomásgradiens [PPT: 5–6. dia]:</strong>
                    <br>A nagy koronáriaágak az epicardiumon futnak, és merőlegesen hatolnak be a myocardiumba a <strong>subendocardium</strong> felé (Class A és Class B erek) [PPT: 5. dia]. A szisztolé alatt a bal kamra falában uralkodó magas szöveti nyomás (belül 120 Hgmm, kívül 0 Hgmm) <strong>összenyomja a subendocardialis ereket</strong> [PPT: 5–6. dia]! Emiatt a subendocardium a legérzékenyebb az ischaemiára (itt alakul ki leggyakrabban az infarktus)!
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. A koronária-átáramlás fázisos jellege a szívciklus során [PPT: 6–7. dia]
            </h3>
            <p>Mivel a szívizom összehúzódása mechanikusan komprimálja a saját ereit, a bal és jobb koronária áramlása eltérően alakul [PPT: 6–7. dia]:</p>

            <!-- KORONÁRIA FÁZISOS ÁRAMLÁS SVG ÁBRA -->
            <div style="text-align: center; margin: 1.5rem 0;">
                <svg viewBox="0 0 650 200" style="max-width: 100%; height: auto; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
                    <!-- Bal kamra (LCF) -->
                    <rect x="20" y="20" width="295" height="160" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="8"/>
                    <text x="167" y="45" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">BAL KORONÁRIA (LCF)</text>
                    <text x="167" y="72" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">• Izovolumetriás kontrakció (IC):</text>
                    <text x="167" y="90" fill="#cbd5e1" font-size="10" text-anchor="middle">Az áramlás NULLÁRA esik (sőt retrográd áramlás)!</text>
                    <text x="167" y="114" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">• Izotóniás ejekció:</text>
                    <text x="167" y="132" fill="#cbd5e1" font-size="10" text-anchor="middle">Alacsony, mérsékelt áramlás (magas aortanyomás miatt).</text>
                    <text x="167" y="156" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">• Izovolumetriás relaxáció & Diasztolé:</text>
                    <text x="167" y="172" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">MAXIMÁLIS ÁRAMLÁS (a vér 80%-a ekkor áramlik)!</text>

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
                <em>„Mivel a bal kamra vérellátásának döntő része a diasztolé alatt történik, ha a szívfrekvencia extrém magasra (pl. 180–200/perc) ugrik, a szívciklus lerövidülése szinte kizárólag a <strong>diasztolé időtartamát csökkenti le</strong>! Emiatt nem marad idő a bal kamra falának átáramlására, és súlyos szívizom-ischaemia (angina pectoris / infarktus) alakul ki!” [PPT: 10. dia]</em>
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. A koronáriakeringés szabályozása [PPT: 8–10. dia]
            </h3>
            <ul>
                <li><strong>Lokális metabolikus szabályozás (A LEGFŐBB MECHANIZMUS!):</strong>
                    <br>A szívizom ereinek <strong>nagy a bazális tónusa</strong> (autoregulációs tartomány: <strong>40–140 Hgmm</strong>) [PPT: 8–9. dia]. Fokozott szívmunka esetén a helyben felszabaduló metabolitok – elsősorban az <strong>adenozin</strong>, valamint <strong>↓ pO₂, ↑ pCO₂, ↓ pH, K⁺</strong> – azonnal kitágítják az ereket (funkcionális hyperaemia) [PPT: 9. dia]. A nyugalmi és a maximális vazodilatáció közötti különbség a <strong>koronária áramlási rezerv (flow reserve)</strong> [PPT: 9. dia].
                </li>
                <li><strong>Idegi és humorális hatások (Direkt vs. Indirekt hatás!) [PPT: 10. dia]:</strong>
                    <ul>
                        <li>A koronáriák <strong>NEM vesznek részt közvetlenül a presszor/depresszor reflexekben</strong> (nincs vasoconstrictor tónusuk) [PPT: 8, 10. dia].</li>
                        <li>A szimpatikus izgalom és az adrenalin a koronária simaizomzatán lévő <strong>β₂-receptorokon</strong> direkt <strong>vazodilatációt</strong> okoz (az α₁-receptorok csak a nagy epicardialis ágakon vannak túlsúlyban, az ellenállás-arteriolákon a β₂ dominál!) [PPT: 10. dia].</li>
                        <li>A szimpatikus izgalom mégis drasztikusan növeli a koronária-áramlást <strong>indirekt módon</strong>: fokozza a szív munkáját (β₁) → több metabolit (adenozin) termelődik → metabolikus vazodilatáció [PPT: 10. dia]!</li>
                    </ul>
                </li>
            </ul>

            <!-- II. RÉSZ: AZ AGYI VÉRKERINGÉS (11-23. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                II. RÉSZ: Az Agyi Vérkeringés (Cerebrális Keringés) [PPT: 11–23. dia]
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. Általános jellemzők, Vér-agy gát és a Monro–Kellie-elv [PPT: 12–13. dia]
            </h3>
            <ul>
                <li><strong>Alapadatok [PPT: 12. dia]:</strong> Az agy a testtömeg 2%-a, de a perctérfogat <strong>15%-át (750 ml/perc, azaz 50 ml/100g/perc)</strong> és a szervezet oxigénfogyasztásának 20%-át igényli! Az AV-O₂ különbség alacsony (~10–25%) [PPT: 12. dia]. Ellátása: két <em>a. carotis interna</em> és két <em>a. vertebralis</em> → <strong>Circulus arteriosus Willisi</strong> [PPT: 12. dia].</li>
                <li><strong>Vér-agy gát (BBB – Blood-Brain Barrier) [PPT: 12. dia]:</strong>
                    <br>Az agyi kapillárisok endothelsejtjeit szoros zárókapcsolatok (<strong>tight junctions</strong>) kötik össze, kívülről pedig az asztrociták talpai és pericyták veszik körül [PPT: 12, 18. dia]. Átjárható zsíroldékony anyagokra és gázokra (<strong>O₂, CO₂</strong>), míg az ionok, fehérjék és vízoldékony molekulák csak specifikus transzporterekkel jutnak át (ezért itt nem érvényesül a klasszikus Starling-féle kapilláris filtráció!) [PPT: 12. dia].
                </li>
                <li><strong>Monro–Kellie-törvény és az Agyi Perfúziós Nyomás (CPP) [PPT: 13. dia]:</strong>
                    <ul>
                        <li>A felnőtt koponya merev, tágulásra képtelen csontos tok [PPT: 13. dia]. Benne három összenyomhatatlan kompartment található: <code>V_agy (~80%) + V_vér (~10%) + V_liquor (~10%) = ÁLLANDÓ</code> [PPT: 13. dia]. Ha bármelyik térfogata nő (pl. agyvérzés, tumor, agyödéma), a másik kettőnek ki kell szorulnia, különben meredeken emelkedik az <strong>intracranialis nyomás (ICP, normálisan 10–15 Hgmm)</strong> [PPT: 13. dia]!</li>
                        <li><strong>Agyi perfúziós nyomás képlete [PPT: 13. dia]:</strong> <code>CPP = MAP - ICP</code> (normálisan: 90 - 15 = <strong>75 Hgmm</strong>) [PPT: 13. dia]. Ha az ICP emelkedik, csökken a CPP és az agyi vérátáramlás (CBF) [PPT: 13. dia]!</li>
                        <li><em>Felhajtóerő:</em> Az agy fajsúlya közel azonos a liquoréval, így Archimedes törvénye alapján az agy lebeg a liquorban (a 1,5 kg-os agy tényleges súlya a koponyaalapon mindössze ~50 gramm!) [PPT: 12. dia].</li>
                    </ul>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. Az agyi véráramlás szabályozása és a Neurovascularis Egység (NVU) [PPT: 14–19. dia]
            </h3>
            <ul>
                <li><strong>1. Miogén autoreguláció [PPT: 16. dia]:</strong> <strong>60 és 140 Hgmm MAP között</strong> az agyi vérátáramlás (CBF) teljesen állandó marad! 60 Hgmm alatt az erek nem tudnak tovább tágulni (hipoperfúzió, ájulás), 140 Hgmm felett pedig a nyomás áttöri a vazokonstrikciót (hiperperfúzió, agyödéma, vérzésveszély) [PPT: 16. dia].</li>
                <li><strong>2. Metabolikus reguláció (A legfőbb szabályozó!) [PPT: 17. dia]:</strong>
                    <ul>
                        <li><strong>A pCO₂ drámai hatása:</strong> Az agyi erek rendkívül érzékenyek az artériás <strong>pCO₂</strong> változására! <strong>Hypercapnia (↑ pCO₂ → CSF pH csökkenés)</strong> hatalmas <strong>vazodilatációt</strong> okoz (megduplázhatja a CBF-et!), míg <strong>hypocapnia (↓ pCO₂, pl. pánikroham alatti hiperventilláció!) erős vazokonstrikciót</strong> vált ki, ami szédüléshez és ájuláshoz vezet [PPT: 17. dia]!</li>
                        <li><em>pO₂ szerepe:</em> A pO₂ csak akkor okoz jelentős vazodilatációt, ha kritikusan alacsony szintre (<50 Hgmm) esik [PPT: 17. dia].</li>
                    </ul>
                </li>
                <li><strong>3. Neurovascularis Egység (NVU) és Funkcionális Hyperaemia [PPT: 17–18. dia]:</strong>
                    <br>Az NVU elemei: <strong>neuronok, asztrociták, mikrogliák, pericyták, endothel és simaizomsejtek</strong> [PPT: 18. dia]. Amikor egy agyterület aktívan dolgozik (pl. beszéd, olvasás, mozgás), a felszabaduló glutamát ingerli az asztrocitákat → emelkedik az asztrocita intracelluláris [Ca²⁺] → az asztrocita talpai vazoaktív anyagokat (<strong>NO, K⁺, arachidonsav-metabolitok / PGE₂, adenozin</strong>) ürítenek a penetráló arteriolákra → helyi vazodilatáció (<strong>funkcionális hyperaemia</strong> – ezen alapul az fMRI vizsgálat!) [PPT: 17–18. dia].
                </li>
                <li><strong>4. Idegi szabályozás [PPT: 19. dia]:</strong>
                    <br>Az agyi erek <strong>nem vesznek részt a vérnyomás-szabályozó reflexekben</strong> [PPT: 14, 19. dia]! Nyugalomban a szimpatikus (α₁) hatás elhanyagolható [PPT: 19. dia]. Csak <strong>extrém vérnyomás-emelkedéskor (pl. súlyos fizikai erőkifejtés)</strong> van jelentősége: ekkor a szimpatikus izgalom összehúzza a nagy és közepes agyi artériákat, jobbra tolva az autoregulációs görbét, megvédve ezzel a törékeny agyi kapillárisokat a szétrepedéstől [PPT: 19. dia]!
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. Klinikai Összefoglalás: A Cushing-reflex és a Beékelődés Veszélye [PPT: 20–23. dia]
            </h3>
            <p>Ha a koponyaűri nyomás (ICP) 33 Hgmm fölé emelkedik, a transzmurális nyomás (<code>P_TM = MAP - ICP</code>) lecsökken, összenyomva az agyi ereket [PPT: 20. dia]. Az agytörzs ischaemiája kiváltja a <strong>Cushing-reflexet</strong> (extrém hypertonia + bradycardia + szabálytalan légzés) [PPT: 22–23. dia]. Klinikai szempontból a Cushing-triász az <strong>agyi beékelődés (herniatio) közvetlen előjele</strong>, ami azonnali idegsebészeti / intenzív terápiás beavatkozást igényel [PPT: 23. dia]!</p>

            <!-- ÖSSZEFOGLALÓ -->
            <div style="background: var(--box-bg); border-left: 4px solid var(--accent); padding: 1.2rem; border-radius: 8px; margin-top: 2rem;">
                <h4 style="margin-top: 0; color: var(--primary);">Legfontosabb vizsgapontok ZH-ra:</h4>
                <ul>
                    <li><strong>Redisztribúció terheléskor:</strong> Vázizom (20% → 72%), bőr (5% → 11%) nő; vese és splanchnicus csökken; szív (5% marad, abszolút 5x nő); <strong>agy abszolút áramlása állandó (750 ml/perc)</strong> [PPT: 3. dia].</li>
                    <li><strong>Koronáriakeringés:</strong> AV-O₂ különbség <strong>70–80%</strong> (csak áramlásnöveléssel tud több O₂-höz jutni) [PPT: 5. dia]. A bal koronária áramlása <strong>fázisos</strong> (IC alatt nullára esik, diasztoléban maximális) [PPT: 7. dia]. Fő szabályozó: <strong>adenozin</strong> (metabolikus) és β₂-receptorok [PPT: 9–10. dia].</li>
                    <li><strong>Agyi keringés:</strong> Autoreguláció <strong>60–140 Hgmm</strong> között [PPT: 16. dia]. <code>CPP = MAP - ICP</code> [PPT: 13. dia]. Monro–Kellie-törvény [PPT: 13. dia].</li>
                    <li><strong>Agyi metabolikus reguláció:</strong> Legérzékenyebb a <strong>pCO₂-re</strong> (hypercapnia = erős vazodilatáció; hiperventilláció/hypocapnia = vazokonstrikció) [PPT: 17. dia].</li>
                    <li><strong>Neurovascularis egység (NVU):</strong> Neuronok → asztrocita [Ca²⁺] ↑ → NO, K⁺, arachidonsav-származékok → funkcionális hyperaemia [PPT: 18. dia].</li>
                </ul>
            </div>

        </div>
    `
});