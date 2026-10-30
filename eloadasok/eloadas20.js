// eloadasok/eloadas20.js
window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-20",
    title: "20. Előadás: A szívizomsejt kontraktilitása és a szív mechanikája",
    shortName: "Szívizom kontraktilitás & Mechanika",
    html: `
        <div style="font-family: inherit; line-height: 1.7; color: var(--text);">

            <!-- BEVEZETÉS ÉS ELEKTROMECHANIKAI KAPCSOLAT -->
            <div style="background: var(--info-bg); border-left: 4px solid var(--primary-light); padding: 1.2rem; border-radius: 8px; margin-bottom: 2rem;">
                <h3 style="margin-top: 0; color: var(--primary);">Bevezetés: Elektromechanikai kapcsolat a szívben [PPT: 2.1–2.2. dia]</h3>
                <p>Az <strong>elektromechanikai kapcsolat (excitation-contraction coupling, E-C csatolás)</strong> az a sejtélettani folyamatsor, amely a szarkolemmán végigfutó elektromos ingerületet (akciós potenciált) összekapcsolja a szívizomrostok mechanikai összehúzódásával (kontrakciójával) [PPT: 2.2. dia].</p>
                <ul>
                    <li><strong>Időviszonyok összehangoltsága [PPT: 2.2. dia]:</strong>
                        <ul>
                            <li>A membrán depolarizációja (AP) azonnali, meredek citoplazmatikus kalcium-transzienseket vált ki (a nyugalmi ~100 nM szintről 1000 nM = 1 μM fölé emelkedik a szabad [Ca2+]i) [PPT: 2.2. dia].</li>
                            <li>A kalciumszint csúcsát követően indul meg az erőgenerálás és a szívizomsejt maximális megrövidülése [PPT: 2.2. dia].</li>
                            <li>Mivel a szívizom AP platója hosszan tart (300–400 ms), a mechanikai összehúzódás és az elektromos refrakter periódus szinte párhuzamosan fejeződik be [PPT: 2.2. dia].</li>
                        </ul>
                    </li>
                </ul>
                <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin-top: 0.8rem; border-radius: 4px;">
                    <strong>🎙️ [Oktatói kiegészítés – Miért nem tetanizálható a szívizom?]:</strong><br>
                    <em>„Vázizomban a 2-3 ezredmásodperces akciós potenciál után a sejt már régen újra ingerelhető, miközben az izomrángás még tart – így ha ráküldünk egy 50-100 Hz-es ingersorozatot, a rángások komplett tetanuszba, merevgörcsbe olvadnak össze. A szívnél ez katasztrófa lenne! Ha a szív görcsbe rándulna, nem tudna elernyedni, nem telődne vérrel, és a keringés azonnal összeomlana. A természet ezt zseniálisan oldotta meg: a szív akciós potenciálja mintegy százszor hosszabb, mint a vázizomé, így az abszolút refrakter fázis lefedi a kontrakció nagy részét. A szívizmot fizikai képtelenség tetanizálni!” [PPT: 2.2. dia]</em>
                </div>
            </div>

            <!-- I. RÉSZ: KALCIUM-HOMEOSZTÁZIS ÉS CICR -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2rem;">
                I. RÉSZ: A Szívizomsejt Kalcium-Homeosztázisa
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. Az aktivátor Ca2+ forrásai és a szubcelluláris elemek [PPT: 2.3–2.6. dia]
            </h3>
            <p>A szívizomsejtben a kalcium dinamikus körforgást végez az extracelluláris tér (EC), a citoplazma és a szarkoplazmatikus retikulum (SR) között [PPT: 2.4. dia]:</p>
            <ul>
                <li><strong>Belépés (EC → Citoplazma) [PPT: 2.6. dia]:</strong>
                    <ol>
                        <li>L-típusú feszültségfüggő Ca2+-csatorna (LTCC / Cav1.2) – a fő belépési kapu [PPT: 2.6. dia].</li>
                        <li>T-típusú Ca2+-csatorna (Cav3.1) – főként ingerképző és vezető szövetben [PPT: 2.6. dia].</li>
                        <li>Na+/Ca2+ cseremechanizmus (NCX) reverz üzemmódja (a szisztolé kezdetén) [PPT: 2.6, 2.10. dia].</li>
                    </ol>
                </li>
                <li><strong>Felszabadulás (SR raktár → Citoplazma) [PPT: 2.6. dia]:</strong>
                    <ol>
                        <li><strong>Rianodin receptorok (RyR2 izoforma)</strong> – a kontrakcióért felelős kalcium zömét (~70–80%) ők ürítik ki a citoplazmába [PPT: 2.5, 2.6. dia].</li>
                        <li>Inozitol-triszfoszfát receptorok (IP3R) – kisebb jelentőségű, főleg hormonális modulációban [PPT: 2.6. dia].</li>
                    </ol>
                </li>
                <li><strong>Eltávolítás (Citoplazma → EC tér) [PPT: 2.6. dia]:</strong>
                    <ol>
                        <li>Na+/Ca2+ cseremechanizmus (NCX, előreirányuló transzport: 1 Ca2+ ki / 3 Na+ be) – a citoplazmatikus Ca2+ kb. 20–28%-át távolítja el [PPT: 2.5, 2.6. dia].</li>
                        <li>Sarcolemmalis Ca2+-ATPáz (PMCA pumpa) – kis kapacitású finomhangoló (~1–3%) [PPT: 2.6, 2.9. dia].</li>
                    </ol>
                </li>
                <li><strong>Visszavételezés (Citoplazma → SR raktár) [PPT: 2.6. dia]:</strong>
                    <ol>
                        <li><strong>SERCA2a pumpa (SR Ca2+-ATPáz)</strong> – a citoplazmába jutott kalcium döntő többségét (~70–80%) aktív transzporttal visszaszívja az SR lumenébe [PPT: 2.5, 2.9. dia].</li>
                    </ol>
                </li>
                <li><strong>Dinamikus pufferrendszerek [PPT: 2.6. dia]:</strong>
                    Citoszolos pufferek (miofilamentumok, parvalbumin), SR-beli puffer (<strong>Calsequestrin</strong>), valamint a <strong>mitokondriumok</strong> [PPT: 2.6, 2.11, 2.13. dia].
                </li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">Szubcelluláris összetétel: Szívizom vs. Vázizom (m. soleus) [PPT: 2.5. dia]:</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 8px;">Sejtalkotó relatív térfogataránya (%)</th>
                        <th style="padding: 8px;">Szívizomsejt [PPT: 2.5. dia]</th>
                        <th style="padding: 8px;">Vázizom (m. soleus) [PPT: 2.5. dia]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 8px;">Miofilamentumok</td><td style="padding: 8px;"><strong>50%</strong></td><td style="padding: 8px;">87%</td></tr>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 8px;">Mitokondriumok</td><td style="padding: 8px;"><strong>25–35% (hatalmas energiatermelés!)</strong></td><td style="padding: 8px;">5%</td></tr>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 8px;">T-tubulus rendszer</td><td style="padding: 8px;"><strong>3% (tágasabb, Z-vonalnál)</strong></td><td style="padding: 8px;">0,14%</td></tr>
                    <tr><td style="padding: 8px;">Szarkoplazmatikus retikulum (SR)</td><td style="padding: 8px;"><strong>8%</strong></td><td style="padding: 8px;">3,1%</td></tr>
                </tbody>
            </table>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. A szív kalciumcsatornái: L-típus vs. T-típus [PPT: 2.7. dia]
            </h3>
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 10px; text-align: left;">Jellemző</th>
                        <th style="padding: 10px; text-align: left;">L-típusú Ca2+-csatorna (Cav1.2) [PPT: 2.7. dia]</th>
                        <th style="padding: 10px; text-align: left;">T-típusú Ca2+-csatorna (Cav3.1) [PPT: 2.7. dia]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Kódoló gén</strong></td>
                        <td><em>CACNA1C</em> [PPT: 2.7. dia]</td>
                        <td><em>CACNA1D / CACNA1G</em> [PPT: 2.7. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Lokalizáció</strong></td>
                        <td>Pitvari és kamrai munkaizomzat, ingerképző sejtek [PPT: 2.7. dia]</td>
                        <td>Ingerképző sejtek (SA, AV) és ingerületvezető rendszer [PPT: 2.7. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Aktivációs küszöb</strong></td>
                        <td>Pozitívabb potenciálon nyílik: <strong>-40 mV</strong> [PPT: 2.7. dia]</td>
                        <td>Negatívabb potenciálon nyílik: <strong>-70 mV</strong> (alacsony küszöb) [PPT: 2.7. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Inaktivációs kinetika</strong></td>
                        <td>Lassú inaktiváció (Long-lasting) [PPT: 2.7. dia]</td>
                        <td>Gyors inaktiváció és deaktiváció (Transient) [PPT: 2.7. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Élettani szerep</strong></td>
                        <td><strong>Plató fázis fenntartása, CICR kioldása, kontrakció</strong> [PPT: 2.7. dia]</td>
                        <td><strong>Pacemaker potenciál generálása (diasztolés depolarizáció)</strong> [PPT: 2.7. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Szabályozás</strong></td>
                        <td>Adrenerg stimuláció (β1 → PKA foszforilálja), CaMKII [PPT: 2.7. dia]</td>
                        <td>Membránpotenciál, β-adrenerg receptorok [PPT: 2.7. dia]</td>
                    </tr>
                    <tr>
                        <td><strong>Farmakológia</strong></td>
                        <td><strong>Gátlószerek:</strong> Dihidropiridinek (nifedipin, amlodipin), fenilalkilaminok (verapamil), benzotiazepinek (diltiazem)<br><strong>Aktivátor:</strong> Bay K 8644 [PPT: 2.7. dia]</td>
                        <td><strong>Gátlószerek:</strong> Mibefradil, alacsony koncentrációjú nikkel (Ni2+) [PPT: 2.7. dia]</td>
                    </tr>
                </tbody>
            </table>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. A CICR mechanizmus és a szignál kikapcsolása [PPT: 2.5, 2.8. dia]
            </h3>
            <p>A szívizom elektromechanikai kapcsolatának alapja a <strong>CICR (Calcium-Induced Calcium Release / kalcium által kiváltott kalcium-felszabadulás)</strong> [PPT: 2.8. dia]:</p>
            <ol>
                <li>A szarkolemma és a T-tubulusok depolarizálódnak az akciós potenciál alatt [PPT: 2.5. dia].</li>
                <li>Kinyílnak a feszültségfüggő L-típusú Ca2+-csatornák (LTCC / Cav1.2, dihidropiridin receptorok) [PPT: 2.5. dia].</li>
                <li>Kis mennyiségű extracelluláris kalcium áramlik be a szűk diasztádikus térbe (úgynevezett <em>trigger kalcium</em>) [PPT: 2.5. dia].</li>
                <li>A beáramló Ca2+ közvetlenül a szarkoplazmatikus retikulum terminális ciszternáin ülő <strong>RyR2 rianodin receptorokhoz kötődik</strong> [PPT: 2.5. dia].</li>
                <li>A RyR2 kinyílik, és a koncentrációgrádiens mentén hatalmas kalciumhullám szabadul fel az SR-ből a citoplazmába [PPT: 2.5. dia].</li>
                <li>A felszabadult Ca2+ a vékony filamentum Troponin C alegységéhez kötődik → beindul a szarkomerek összehúzódása [PPT: 2.5. dia].</li>
            </ol>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Fabiato kísérlete és a CICR leállásának rejtélye]:</strong><br>
                <em>„A hatvanas-hetvenes évek végén egy francia származású kutatóorvos, Alexandre Fabiato végzett korszakalkotó kísérleteket: mikromanipulátorral lehúzta a szívizomsejtek külső membránját (ún. 'skinned' szívizomsejt preparátum), és fényméréssel figyelte a retikulum működését. Bebizonyította, hogy ha hirtelen egy pici kalciumot fecskendez a sejtbe, az SR robbanásszerűen kiüríti a saját kalciumtartalmát! De álljunk meg egy pillanatra: a CICR egy önerősítő, pozitív visszacsatolású rendszer (kalcium csinál még több kalciumot). Miért nem robban fel a sejt, mi állítja le a folyamatot? Két fő fék van [PPT: 2.8. dia]:
                1. <strong>A citoszolos kalcium-függő inaktiváció:</strong> amint a citoplazmatikus kalciumkoncentráció elér egy kritikus csúcsot, maguk a RyR2 receptorok gátlás alá kerülnek és bezáródnak [PPT: 2.8. dia].
                2. <strong>A luminális Ca-szenzor (depleció):</strong> ahogy az SR lassan kiürül, a retikulum belső Ca-szintje leesik, és a belső szenzorok (kalszekvesztrin-triadin-junctin komplex) leállítják a további kiáramlást [PPT: 2.8, 2.12. dia].”</em>
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                4. Kalcium pumpák és transzporterek a szívben [PPT: 2.9–2.14. dia]
            </h3>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">A) SERCA2a és a Foszfolambán (PLN) szabályozása [PPT: 2.9. dia]:</h4>
            <ul>
                <li><strong>SERCA2a (Sarco/Endoplasmic Reticulum Ca2+-ATPase):</strong> P-típusú ATP-függő kalciumpumpa az SR longitudinális tubulusaiban. Sztöchiometriája: <strong>2 Ca2+ visszavétele / 1 hidrolizált ATP</strong> [PPT: 2.9. dia].</li>
                <li><strong>Foszfolambán (Phospholamban, PLN):</strong> A SERCA2a nélkülözhetetlen endogén fékje [PPT: 2.9. dia]:
                    <ul>
                        <li><em>Defoszforilált állapotban (nyugalomban):</em> a PLN monomer szorosan kötődik a SERCA2a-hoz, és <strong>gátolja annak aktivitását</strong> (lassítja a Ca-visszavételt) [PPT: 2.9. dia].</li>
                        <li><em>Foszforilált állapotban (β1-adrenerg izgalom):</em> a szimpatikus idegrendszer PKA-n vagy a CaMKII-n keresztül foszforilálja a foszfolambánt. A foszforilált PLN leválik a SERCA-ról (pentamerekké áll össze), megszűnik a gátlás → <strong>a SERCA2a maximális sebességre kapcsol</strong> [PPT: 2.9. dia]!</li>
                        <li><strong>Élettani hatás:</strong> a kalcium villámgyorsan eltűnik a citoplazmából, ami drámaian meggyorsítja a szív elernyedését – ez a <strong>pozitív lüzitrop hatás</strong> [PPT: 2.9. dia]!</li>
                    </ul>
                </li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">B) A Na+/Ca2+ cseremechanizmus (NCX1) és a Digitalis hatásmechanizmusa [PPT: 2.10, 2.14. dia]:</h4>
            <ul>
                <li><strong>Működési elv:</strong> Szekunder aktív transzporter a szarkolemmában. Nem közvetlenül ATP-t használ, hanem a Na+/K+-ATPáz által felépített meredek nátrium elektrokémiai gradiens energiáját [PPT: 2.10. dia].</li>
                <li><strong>Sztöchiometria és elektrogén jelleg:</strong> <strong>3 Na+ cserélődik 1 Ca2+-ra</strong> → nettó pozitív töltésmozgás (áramot generál!) [PPT: 2.10. dia].</li>
                <li><strong>Forward mode (előreirányuló):</strong> 3 Na+ be → 1 Ca2+ ki (nyugalomban és diasztolé alatt kalciumot távolít el a citoplazmából) [PPT: 2.10. dia].</li>
                <li><strong>Reverse mode (fordított):</strong> 3 Na+ ki → 1 Ca2+ be (a korai depolarizáció csúcsán, amikor a membránpozitív potenciál megfordítja a hajtóerőt) [PPT: 2.10. dia].</li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – A piros gyűszűvirág és a szívglikozidok mechanizmusa]:</strong><br>
                <em>„Hogyan erősíti a szív összehúzódását az évszázadok óta használt digitalis (Digitalis purpurea / gyűszűvirág kivonata)? A digitalis NEM a kalciumcsatornára hat közvetlenül! A sejtmembrán Na+/K+-ATPáz pumpáját gátolja. Mivel a nátriumpumpa lelassul, a szívizomsejt citoplazmájában feldúsul a nátrium. Ha magas a belső nátriumszint, lecsökken a nátrium elektrokémiai gradiense – vagyis az NCX nem tudja hatékonyan kicserélni a belső kalciumot beáramló nátriumra! Ennek következtében a kalcium bennreked a citoplazmában, az SR túltöltődik kalciummal, és a következő szisztolénál sokkal hatalmasabb kalciumhullám szabadul fel: ez adja a kifejezett <strong>pozitív inotróp (erőnövelő) hatást</strong>! Csakhogy vigyázat: a túlzott belső kalcium- és nátriumszint késői utódepolarizációkat (DAD) és halálos ritmuszavarokat okozhat!” [PPT: 2.10, 2.14. dia]</em>
            </div>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">C) Calsequestrin és Mitokondriális Pufferelés [PPT: 2.12, 2.13. dia]:</h4>
            <ul>
                <li><strong>Calsequestrin (CSQ2) [PPT: 2.12. dia]:</strong> Az SR terminális ciszternáiban található savas pufferfehérje.
                    Egyetlen kalszekvesztrin molekula akár <strong>40–50 Ca2+ iont</strong> képes megkötni alacsony affinitással, de óriási kapacitással [PPT: 2.12. dia].
                    Magas Ca-szintnél lineáris polimerekké áll össze a membrán alatt, és közvetlen fizikai kapcsolatban áll a RyR2-vel a <em>triadin</em> és <em>junctin</em> fehérjéken keresztül [PPT: 2.12. dia].
                </li>
                <li><strong>Mitokondriális kalciumfelvétel [PPT: 2.13. dia]:</strong>
                    A szisztolé alatt felszabaduló kalcium mintegy <strong>30–35%-át átmenetileg a mitokondriumok veszik fel</strong> az elektrokémiai gradiens mentén a mitokondriális Ca-uniporton (MCU) keresztül [PPT: 2.13. dia].
                    <em>Kettős élettani szerepe [PPT: 2.13. dia]:</em>
                    <ol>
                        <li>Segíti a citoplazmatikus Ca-szint gyors csökkentését (relaxáció serkentése) [PPT: 2.13. dia].</li>
                        <li><strong>Szabályozza az ATP-szintézist:</strong> a mitokondriális mátrixba jutó Ca2+ aktiválja a citrátkör kulcsenzimeit (piruvát-, izocitrát- és alfa-ketoglutarát-dehidrogenáz), így a fokozott mechanikai munkához azonnal hozzáilleszti az ATP-termelés sebességét [PPT: 2.13. dia]!</li>
                    </ol>
                </li>
            </ul>

            <!-- II. RÉSZ: A SZÍVIZOM MECHANIKÁJA ÉS SZARKOMER KAPCSOLATOK -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 3rem;">
                II. RÉSZ: A Szívizom Mechanikája és Geometriája
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. A kontraktilis rendszer és a szarkomer hossz-feszülés viszonya [PPT: 2.15–2.21. dia]
            </h3>
            <p>A szívizom kontraktilis apparátusa hasonló a vázizomhoz (aktin, miozin, troponin, tropomiozin), de a mechanikai működése és elaszticitása alapvetően eltér [PPT: 2.16, 2.21. dia]:</p>
            <ul>
                <li><strong>A szarkomer sávjai és a német terminológia [PPT: 2.18. dia]:</strong>
                    <ul>
                        <li><strong>A-sáv:</strong> Anizotrop sáv (polarizált fényben kettőstörő), a vastag miozin filamentumok hossza [PPT: 2.18. dia].</li>
                        <li><strong>I-sáv:</strong> Izotrop sáv (egyfénytörő), vékony aktin filamentumok [PPT: 2.18. dia].</li>
                        <li><strong>Z-lemez:</strong> <em>Zwischenscheibe</em> (a világos sávok közötti elválasztó korong) [PPT: 2.18. dia].</li>
                        <li><strong>M-vonal:</strong> <em>Mittelscheibe</em> (a szarkomer legközepén lévő lemez) [PPT: 2.18. dia].</li>
                        <li><strong>H-sáv:</strong> <em>Heller</em> (a középső, világosabb zóna) [PPT: 2.18. dia].</li>
                    </ul>
                </li>
                <li><strong>A kereszthidak elérhetősége [PPT: 2.19, 2.20. dia]:</strong>
                    A szarkomer hosszának növekedésével (2,2 μm-ig) párhuzamosan nő az aktin és miozin közötti funkcionális kereszthidak száma, ami növeli az aktív feszülést [PPT: 2.20. dia].
                </li>
                <li><strong>Kamrai hossz-feszülés görbe: Totál = Aktív + Passzív feszülés [PPT: 2.21. dia]:</strong>
                    Míg a vázizomban a passzív feszülés szinte elhanyagolható a fiziológiás tartományban, a szívizomban a <strong>passzív elasztikus feszülés rendkívül meredeken emelkedik</strong> már 1,9–2,2 μm-nél [PPT: 2.21. dia]!
                    Ez a magas passzív ellenállás (amelyet a <strong>titin</strong> fehérje és a kötőszöveti kollagénrostok biztosítanak) <strong>megvédi a szívizmot a túlfeszüléstől</strong> [PPT: 2.21. dia].
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. Laplace törvénye a szívben és a kamrageometria [PPT: 2.22–2.26. dia]
            </h3>
            <p>Hogyan fordítja le a szív a szívizomsejtek által generált falfeszülést a vérkamrákban mérhető hidrosztatikai nyomássá [PPT: 2.23. dia]?</p>

            <div style="background: var(--bg); border: 1.5px solid var(--border); border-radius: 8px; padding: 1rem; margin: 1rem 0;">
                <h4 style="color: var(--primary); margin-top:0;">Laplace törvénye gömbszerű/hengeres üreges szervekre [PPT: 2.23. dia]:</h4>
                <div style="font-size: 1.15rem; font-weight: bold; text-align: center; margin: 0.8rem 0; color: var(--primary-light);">
                    P = 2 × T / R   ↔   T = (P × R) / 2
                </div>
                <p style="margin-bottom:0;">Ahol: <strong>P</strong> = generált intrakavitális nyomás, <strong>T</strong> = falfeszülés (wall tension), <strong>R</strong> = a kamra belső sugara [PPT: 2.23. dia]. Ha a falvastagságot (h) is figyelembe vesszük (falfeszültség / wall stress, σ): <strong>σ = (P × R) / (2 × h)</strong>.</p>
            </div>

            <ul>
                <li><strong>Buborék analógia [PPT: 2.23. dia]:</strong> Ha két szappanbuboréknak azonos a felületi feszültsége (T), a <strong>kisebb sugarú buborékban kétszer akkora nyomás uralkodik</strong>, mint a nagyban (P<sub>1</sub> = 2T/1 = 6, míg P<sub>2</sub> = 2T/2 = 3) [PPT: 2.23. dia]!</li>
                <li><strong>A két kamra geometriai különbsége [PPT: 2.24. dia]:</strong>
                    <ul>
                        <li><em>Bal kamra (LV):</em> Vastag izomfal (9–12 mm), kis belső sugár, ellipszoid/hengeres forma → <strong>hatalmas nyomás generálására alkalmas (120 Hgmm)</strong> viszonylag mérsékelt falfeszülés mellett [PPT: 2.24. dia]!</li>
                        <li><em>Jobb kamra (RV):</em> Vékony fal (3–4 mm), nagy görbületi sugár, félhold (crescent) alakban rátapadva a bal kamrára → <strong>kis nyomású tér (20–25 Hgmm)</strong>, alacsony ellenállású kisvérköri pumpa [PPT: 2.24. dia].</li>
                    </ul>
                </li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – 'Egy sajnálatos következmény' (A tágult szív ördögi köre)]:</strong><br>
                <em>„Nézzétek meg a 2.25. diát, ott a címe: 'Egy sajnálatos következmény'. Mi történik, ha egy szívizombetegségben kitágul a kamra (dilatáció, R<sub>1</sub> < R<sub>2</sub>)? Ahhoz, hogy a tágult szív ugyanazt a 100-120 Hgmm-es szisztolés nyomást felépítse és kilökje a 70 ml vért, a Laplace-törvény értelmében a nagyobb sugár miatt a szívizomsejteknek sokkal hatalmasabb falfeszülést (T<sub>2</sub> > T<sub>1</sub>) kell kifejteniük! A falfeszülés közvetlenül meghatározza az oxigénfogyasztást: a tágult szív rengeteg oxigént éget el pusztán a feszülés fenntartására, a hatásfoka lezuhan, a szív elfárad, még jobban kitágul – ez a szívelégtelenség gyilkos ördögi köre!” [PPT: 2.25. dia]</em>
            </div>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Miért csőszerű a zsiráf szíve?]:</strong><br>
                <em>„A 2.26. dián látjátok a zsiráf, a bálna és az orrszarvú szívének összehasonlítását. A zsiráf feje 2-3 méterrel van a szíve felett, a hidrosztatikai nyomás miatt 250-300 Hgmm-es artériás vérnyomást kell fenntartania, hogy ne ájuljon el ivás vagy futás közben! Hogyan bírja ki a szíve ezt az extrém nyomást? Ha megnézitek a zsiráf bal kamráját a keresztmetszeten, a belső ürege nem gömb, hanem egy extrém módon megvastagodott falú, szűk cső (nagyon kicsi belső sugár!). A Laplace-törvény miatt a minimális sugár védi meg a zsiráf szívizomrostjait a szétszakadástól a 300 Hgmm-es nyomással szemben!” [PPT: 2.26. dia]</em>
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. A kamra feltöltése: 'A szív nem szív!' és a Compliance [PPT: 2.27–2.29. dia]
            </h3>
            <ul>
                <li><strong>Pozitív töltőnyomás igénye [PPT: 2.28. dia]:</strong>
                    A szív mechanikailag egy <strong>nyomópumpa</strong>, nem pedig szívópumpa!
                    A kamrák feltöltődéséhez a vér oldalán <strong>pozitív töltőnyomásra van szükség</strong> (centrális vénás nyomás, CVP; jobb pitvari nyomás, P<sub>RA</sub> > 0 Hgmm) [PPT: 2.28. dia].
                    Ha a pitvari nyomás 0 Hgmm alá (negatív tartományba) esne, a kamrák fala kollabálna és a perctérfogat nullára zuhanna [PPT: 2.28. dia].
                </li>
                <li><strong>Kamrai Compliance (C<sub>V</sub> = ΔV / ΔP) [PPT: 2.29. dia]:</strong>
                    A kamra tágulékonyságát, rugalmas befogadóképességét fejezi ki a diasztolés telődés során [PPT: 2.29. dia]:
                    <ul>
                        <li><em>Normál kamra:</em> alacsony töltőnyomás mellett nagy térfogatú vér képes beáramlani [PPT: 2.29. dia].</li>
                        <li><em>Csökkent compliance (hipertrófia, amyloidosis, ischaemia):</em> a merev, megvastagodott kamrafal miatt már kis térfogatváltozás is <strong>extrém magas végdiasztolés nyomást (EDP)</strong> eredményez → diasztolés szívelégtelenség és tüdőpangás alakul ki [PPT: 2.29. dia]!</li>
                        <li><em>Fokozott compliance (dilatált kardiomiopátia):</em> a tágult kamra nyomás nélkül fogad be hatalmas vértérfogatot [PPT: 2.29. dia].</li>
                    </ul>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                4. A szív funkciós görbéje és az Inotrópia [PPT: 2.30–2.31. dia]
            </h3>
            <p>A szív mechanikai felépítéséből szigorú láncreakció következik [PPT: 2.30. dia]:</p>
            <div style="background: var(--bg); border-left: 4px solid var(--primary); padding: 0.9rem; border-radius: 6px; margin: 1rem 0; font-weight: 600;">
                ↑ Centrális Vénás Nyomás → ↑ Töltőnyomás → ↑ Vénás Telődés → ↑ Végdiasztolés Térfogat és Nyomás (EDV / EDP) → ↑ Szarkomerhossz → ↑ Falfeszülés / Erőgenerálás → ↑ Nyomásgenerálás → ↑ Ejekció / Pulzustérfogat (SV) → ↑ Perctérfogat (CO) → ↑ A szív munkája [PPT: 2.30. dia]
            </div>

            <ul>
                <li><strong>A szív funkciós görbéje (Frank-Starling görbe) [PPT: 2.30. dia]:</strong>
                    A végdiasztolés nyomás (LVEDP) és a kilökött pulzustérfogat (SV) közötti összefüggést mutatja be [PPT: 2.30. dia].
                </li>
                <li><strong>Inotrópia (Myocardialis kontraktilitás) [PPT: 2.31. dia]:</strong>
                    A szívizom belső, intrinsic erőkifejtő képessége, amely <strong>független a kiindulási rosthossztól (preload)</strong> [PPT: 2.31. dia].
                    <ul>
                        <li><strong>Pozitív (+) inotrópia (β1-stimuláció, fizikai aktivitás, szívglikozidok):</strong> a funkciós görbe <strong>balra és felfelé tolódik el</strong> (C pont). Ugyanannál a végdiasztolés nyomásnál a szív jóval nagyobb pulzustérfogatot lök ki [PPT: 2.31. dia]!</li>
                        <li><strong>Negatív (-) inotrópia (szívelégtelenség, hypoxia, β-blokkolók):</strong> a görbe <strong>jobbra és lefelé lapul el</strong> (B pont). Azonos telődés mellett a szív csak csökkent pulzustérfogatot képes üríteni [PPT: 2.31. dia].</li>
                    </ul>
                </li>
            </ul>

            <!-- ÖSSZEFOGLALÓ KULCSPONTOK SZIGORLATRA -->
            <div style="background: var(--box-bg); border-left: 4px solid var(--accent); padding: 1.2rem; border-radius: 8px; margin-top: 2rem;">
                <h4 style="margin-top: 0; color: var(--primary);">Legfontosabb szigorlati kulcspontok (Take-Home Messages):</h4>
                <ul>
                    <li>A szívizom <strong>CICR mechanizmussal</strong> működik: az L-típusú Ca-csatornán (Cav1.2) belépő kevés külső trigger kalcium nyitja meg a szarkoplazmatikus retikulum <strong>RyR2</strong> kalciumcsatornáit [PPT: 2.5, 2.8. dia].</li>
                    <li>Nincs fizikai kapcsolat a DHPR és RyR között (szemben a vázizommal!) [PPT: 2.5. dia].</li>
                    <li>A szívizom <strong>nem tetanizálható</strong>, mert a hosszú plató miatt az abszolút refrakter periódus szinte a kontrakció végéig kitart [PPT: 2.2. dia].</li>
                    <li>A <strong>SERCA2a</strong> veszi vissza a kalcium ~75%-át az SR-be; endogén fékje a <strong>foszfolambán (PLN)</strong>, melynek foszforilációja gyorsítja az elernyedést (<em>pozitív lüzitrópia</em>) [PPT: 2.9. dia].</li>
                    <li>A <strong>Na+/Ca2+ cseremechanizmus (NCX)</strong> 3 Na+-t cserél 1 Ca2+-ra; a <strong>digitalis</strong> a Na+/K+-pumpa gátlásával közvetve csökkenti a Ca-leadást, így növeli a szív kontrakciós erejét (<em>pozitív inotrópia</em>) [PPT: 2.10. dia].</li>
                    <li>A mitokondriumok a Ca2+ mintegy 30-35%-át pufferolják, aktiválva az ATP-szintézist a fokozott mechanikai igényhez [PPT: 2.13. dia].</li>
                    <li><strong>Laplace törvénye:</strong> P = 2T / R; a tágult kamra (dilatáció, R ↑) azonos szisztolés nyomáshoz sokkal nagyobb falfeszülést igényel, ami súlyosbítja a szívelégtelenséget [PPT: 2.23, 2.25. dia].</li>
                    <li><strong>A szív nem szívópumpa:</strong> pozitív centrális vénás töltőnyomás nélkül a kamrák nem tudnak telődni [PPT: 2.28. dia].</li>
                    <li><strong>Inotrópia:</strong> a rosthossztól független belső összehúzódási képesség; a Frank-Starling görbét balra-fel tolja el [PPT: 2.31. dia].</li>
                </ul>
            </div>

        </div>
    `
});