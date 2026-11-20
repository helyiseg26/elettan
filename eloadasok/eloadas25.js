// eloadasok/eloadas25.js
window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-25",
    title: "25. Előadás: Cardiovascularis reflexek 1–2.: A vérkeringés idegi szabályozása",
    shortName: "Cardiovascularis reflexek",
    html: `
        <div style="font-family: inherit; line-height: 1.7; color: var(--text);">

            <!-- BEVEZETÉS: A VÉRKERINGÉS SZABÁLYOZÁSÁNAK ALAPELVEI (1–4. DIA) -->
            <div style="background: var(--info-bg); border-left: 4px solid var(--primary-light); padding: 1.2rem; border-radius: 8px; margin-bottom: 2rem;">
                <h3 style="margin-top: 0; color: var(--primary);">1. Alapelvek: Az artériás középnyomás (MAP) szabályozása és hierarchiája [PPT: 1–4. dia]</h3>
                <p>A vérkeringés központi szabályozott paramétere az <strong>artériás középnyomás (MAP – Mean Arterial Pressure)</strong>, amelynek fenntartása garantálja a szövetek megfelelő vérátáramlását (perfúzióját) [PPT: 2. dia].</p>
                <ul>
                    <li><strong>Alapösszefüggés [PPT: 2. dia]:</strong> <code>MAP = Perctérfogat (Ptf / CO) × Teljes Perifériás Ellenállás (TPR)</code>
                        <ul>
                            <li>A <strong>Perctérfogat (CO – Cardiac Output)</strong> szabályozása a szívműködés szabályozásán keresztül valósul meg: <code>Pulzustérfogat (PV) × Szívfrekvencia (HR)</code> [PPT: 2. dia].</li>
                            <li>A <strong>Teljes Perifériás Ellenállás (TPR)</strong> szabályozása az erek (elsősorban a rezisztenciaerek, azaz az <strong>arteriolák</strong>) működésének és sugarának szabályozásán alapul (Hagen–Poiseuille-törvény: <code>TPR ∝ 1 / r&sup4;</code>) [PPT: 2. dia].</li>
                        </ul>
                    </li>
                    <li><strong>A keringésszabályozás kétféle rendszerezése [PPT: 3–4. dia]:</strong>
                        <ul>
                            <li><em>Mechanizmus szerinti felosztás (ezt követjük az előadáson):</em> <strong>1. Központi / idegi (neurális)</strong>, <strong>2. Renális (veséhez kötődő)</strong>, <strong>3. Hormonális / humorális</strong>, és <strong>4. Lokális szabályozás</strong> [PPT: 3–4. dia].</li>
                            <li><em>Időbeli lefutás szerinti felosztás (más tankönyvekben):</em>
                                <br>• <strong>Rövid távú szabályozás (másodpercek–percek):</strong> megegyezik a <em>neurális (idegi)</em> szabályozással [PPT: 3. dia].
                                <br>• <strong>Középtávú szabályozás (30 perc – néhány óra):</strong> megfelel a <em>humorális és lokális</em> szabályozásnak [PPT: 3. dia].
                                <br>• <strong>Hosszú távú szabályozás (órák–napok–hetek):</strong> megegyezik a <em>renális</em> szabályozással (a keringő vértérfogat beállítása révén) [PPT: 3. dia].</li>
                        </ul>
                    </li>
                </ul>
                <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin-top: 0.8rem; border-radius: 4px;">
                    <strong>🎙️ [Oktatói kiegészítés – A szabályozási rendszerek szigorú hierarchiája]:</strong><br>
                    <em>„Ezt a sorrendet véssétek az eszetekbe, mert minden vizsgakérdésnél visszaköszön: a <strong>hormonális szabályozás mindig felülírja az idegi szabályozás hatásait</strong>, a <strong>lokális szabályozó tényezők pedig felülírják mind a hormonális, mind az idegi hatásokat</strong>! Tehát a lokális hatás mindig érvényesül. Hiába parancsolja a szimpatikus idegrendszer a vázizom arterioláinak, hogy húzódjanak össze: ha az izom dolgozik és elfogy az oxigén, a felszaporodó lokális metabolitok úgyis ki fogják tágítani az ereket!”</em> [PPT: 3–4. dia]
                </div>
            </div>

            <!-- I. RÉSZ: A NYÚLTVELŐI CARDIOVASCULARIS KÖZPONTOK (5–13. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2rem;">
                I. RÉSZ: A Nyúltvelői Cardiovascularis Központok Hálózata [PPT: 5–13. dia]
            </h2>

            <p>A nyúltvelőben (medulla oblongata) elhelyezkedő kardiorespiratorikus magcsoportok szervezik a keringési és légzési reflexeket [PPT: 5. dia].</p>

            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 10px; text-align: left;">Központ neve</th>
                        <th style="padding: 10px; text-align: left;">Elhelyezkedés</th>
                        <th style="padding: 10px; text-align: left;">Élettani funkció, kapcsolatok és transzmitterek [PPT: 5–13. dia]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>NTS</strong><br><em>(Nucleus Tractus Solitarii)</em></td>
                        <td>Caudalis medulla (dorzálisan elhelyezkedő hosszú magcsoport) [PPT: 5. dia]</td>
                        <td><strong>Elsődleges szenzoros átkapcsoló állomás (relé-központ)</strong> [PPT: 6. dia]. A perifériás receptorokból érkező afferens rostok (n. IX., n. X.) itt képezik az első szinapszisukat, majd az NTS eldönti, hogy az információt az <strong>RVLM-be</strong>, a <strong>CVLM-be</strong> vagy közvetlenül a <strong>n. ambiguusba</strong> küldi [PPT: 6–7. dia]. Emellett itt található a dorzális légzőneuron-csoport (belégző neuronok) is [PPT: 6. dia].</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>RVLM</strong><br><em>(Rostro-Ventro-Lateralis Medulla)</em></td>
                        <td>Rostralis medulla (ventrolaterálisan) [PPT: 5. dia]</td>
                        <td><strong>„Presszor központ” (Szimpatikus premotoros neuronok)</strong> [PPT: 8–10. dia]. <strong>Intrinsic (tónusos) aktivitással rendelkezik:</strong> spontán akciós potenciálokat generál, amelyet a vér pCO₂-szintje serkent [PPT: 8, 36. dia]. Leszálló axonjai a gerincvelő oldalsó szarvában (IML) lévő szimpatikus preganglionáris neuronokat serkentik [PPT: 8. dia].</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>CVLM</strong><br><em>(Caudalis-Ventro-Lateralis Medulla)</em></td>
                        <td>Caudalis medulla (ventrolaterálisan) [PPT: 5. dia]</td>
                        <td><strong>„Depresszor központ”</strong> [PPT: 12–13. dia]. <strong>Nincs intrinsic aktivitása</strong> (teljesen a bejövő ingerektől függ) [PPT: 12. dia]. Két fő kimenete van: (1) <strong>GABA-erg gátló rostokkal gátolja az RVLM-et</strong> (és a gerincvelői IML átkapcsolást is) [PPT: 12–13. dia]; (2) <strong>serkentő rostokkal aktiválja a n. ambiguust</strong> [PPT: 13. dia]. Nincs közvetlen perifériás efferense!</td>
                    </tr>
                    <tr>
                        <td><strong>nAmb</strong><br><em>(Nucleus Ambiguus)</em></td>
                        <td>Caudalis medulla [PPT: 5. dia]</td>
                        <td><strong>Kardioinhibitorikus központ</strong> [PPT: 12–13. dia]. Innen indulnak ki a <strong>n. vagus (X.) paraszimpatikus preganglionáris rostjai</strong> a szív sinuscsomójához (SA), AV-csomójához és kisebb mértékben a pitvarokhoz [PPT: 12–13. dia].</td>
                    </tr>
                </tbody>
            </table>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – A „Dobozból kiugró rugós figura” analógia (RVLM vs. CVLM)]:</strong><br>
                <em>„Volt-e olyan játékotok gyerekkorotokban, hogy egy dobozból egy rugós figura akar kiugrani, és a kezetekkel kell visszanyomni a tetejét? Na, ez a két központ pontosan így néz ki! A rugós figura az <strong>RVLM</strong>: mivel intrinsic aktivitása van, állandóan ki akar ugrani és fel akarja nyomni a vérnyomást. A kéz, ami lenyomva tartja és gátolja, a <strong>CVLM</strong>: amíg a CVLM gátolja az RVLM-et, a vérnyomás normális marad; ha viszont a gátló hatás megszűnik (levesszük a kezünket), a rugós figura azonnal kiugrik a dobozból, és drasztikusan megemelkedik a szimpatikus aktivitás!”</em> [PPT: 13. dia]
            </div>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">Részletes idegi pályák és funkcionális sajátosságok [PPT: 6–11. dia]:</h4>
            <ul>
                <li><strong>Felsőbb agyi központok hatása az NTS-re [PPT: 7. dia]:</strong> Az NTS nemcsak a perifériás receptoroktól, hanem a motoros kéregből, érzőkéregből, frontális lebenyből, amygdalából, limbikus rendszerből és a hipotalamuszból is kap információt [PPT: 7. dia]. Ezért vált ki az öröm, a bánat vagy az ijedtség azonnali szívfrekvencia-, vérnyomás- és légzésváltozást [PPT: 7. dia].</li>
                <li><strong>Az RVLM heterogén szerveződése [PPT: 9. dia]:</strong> Az RVLM neuronjai nem egységes masszát alkotnak, hanem szervspecifikus alcsoportokba rendeződnek (külön magcsoport fut a szívizomhoz, a bőr ereihez, a vázizom ereihez, a zsigerekhez) [PPT: 9. dia]. Így az afferens pályák képesek szelektíven csak bizonyos magcsoportokat aktiválni (pl. hőreceptorok ingerlésekor főként a bőr erei szűkülnek) [PPT: 9. dia].</li>
                <li><strong>Szimpatikus adrenerg vs. Aktív vazodilatátor rostok [PPT: 10–11. dia]:</strong>
                    <ul>
                        <li>Ha általánosságban <em>„szimpatikus aktivitásról”</em> beszélünk, az mindig a <strong>szimpatikus adrenerg rostokra</strong> vonatkozik, amelyek végződéseiből <strong>noradrenalin (NA)</strong> szabadul fel (szív: β₁; arteriolák: α₁; vénák: α₁, α₂; mellékvesevelő: Adr/NA ürítés) [PPT: 10, 23. dia].</li>
                        <li><em>Aktív vazodilatátor mechanizmusok (amelyek NEM vesznek részt a szisztémás TPR és vérnyomás szabályozásában!):</em>
                            <br>1. <strong>Szimpatikus kolinerg rostok:</strong> Kisebb számban ACh-t szabadítanak fel (főként a bőr ereinél, verejtékmirigyeknél és a vázizom ereinél), amely NO-n keresztül értágulatot okoz [PPT: 11. dia]. Nem az RVLM-ből, hanem a hipotalamuszból és az agykéregből indulnak (vegetatív funkciók) [PPT: 11. dia].
                            <br>2. <strong>Paraszimpatikus posztganglionáris rostok:</strong> A nyálmirigyek, a pia mater és a külső nemi szervek (corpus cavernosum penis) ereit tágítják (ACh / NO), de a szisztémás TPR-t nem változtatják meg számottevően [PPT: 11. dia].
                            <br>3. <strong>Axonreflex:</strong> A bőr nociceptoraiból kiinduló antidrom ingerületvezetés (P-anyag, hisztamin) [PPT: 11, 44. dia].
                            <br>4. <strong>Nitroxiderg (nitrerg) rostok:</strong> Főként a központi idegrendszer bizonyos ereinél okoznak lokális vazodilatációt [PPT: 11. dia].
                        </li>
                    </ul>
                </li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Hogyan felelj a szimpatikus értágulatról?]:</strong><br>
                <em>„Ha valakinek a szimpatikus hatásról kell beszélnie, ami az ereken megnyilvánul, akkor ne ezzel kezdje! Ez olyan, mintha az emlősöket kellene valakinek elmagyarázni, és azt nem a kacsacsőrű emlőssel kezdi, hanem keres olyan tulajdonságokat, amik általánosak. Ezeknek a rostoknak a teljes perifériás ellenállás szempontjából nincs különösebb jelentősége!”</em> [PPT: 11. dia]
            </div>

            <!-- II. RÉSZ: A MAGASNYOMÁSÚ BARORECEPTOR REFLEX (14–26. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                II. RÉSZ: A Magasnyomású Baroreceptor Reflex [PPT: 14–26. dia]
            </h2>

            <p>Ez a keringési rendszer legfontosabb <strong>vérnyomás-puffer mechanizmusa</strong>: másodpercek alatt képes kivédeni a testhelyzet-változás (pl. felállás) okozta vérnyomás-ingadozásokat [PPT: 24. dia].</p>
            <ul>
                <li><strong>Receptorok helye és afferens idegei [PPT: 16. dia]:</strong> A keringés magas nyomású szakaszán elhelyezkedő feszülési (mechano-) receptorok:
                    <ul>
                        <li><strong>Sinus caroticus:</strong> az a. carotis interna eredésénél (carotis oszlásnál) → afferens ideg: <strong>n. glossopharyngeus (IX.)</strong> Hering-féle ága [PPT: 16. dia].</li>
                        <li><strong>Sinus aorticus (Arcus aortae):</strong> az aortaív falában → afferens ideg: <strong>n. vagus (X.)</strong> [PPT: 16. dia]. (Küszöbértéke kb. 30 Hgmm-rel magasabb, mint a sinus caroticusé!) [PPT: 17. dia].</li>
                    </ul>
                </li>
                <li><strong>Rosttípusok, küszöbérték és dinamikus érzékenység [PPT: 17–18. dia]:</strong>
                    <ul>
                        <li><strong>A-típusú (myelinizált) és C-típusú (velőtlen) rostok:</strong> Az A-rostok alacsonyabb küszöbértékűek, míg a C-rostok magasabb nyomástartományban (200 Hgmm felett is) aktívak maradnak [PPT: 17. dia].</li>
                        <li><strong>Kritikus alsó határ (MAP < 60 Hgmm):</strong> Ha a beteg artériás középnyomása <strong>60 Hgmm alá esik</strong>, a magasnyomású baroreceptorok aktivitása <strong>nulla (nem tüzelnek)</strong> [PPT: 17. dia]! Emiatt ilyen alacsony nyomásnál ez a reflex már nem képes befolyásolni (emelni) a vérnyomást [PPT: 17. dia].</li>
                        <li><strong>Maximális érzékenységi tartomány (~95–100 Hgmm):</strong> A normál fiziológiás MAP körül a görbe a legmeredekebb, így már minimális nyomásváltozás is hatalmas receptoraktivitás-változást vált ki [PPT: 17. dia].</li>
                        <li><strong>Pulzusnyomás (dP/dt) érzékelése [PPT: 18. dia]:</strong> A receptorok nemcsak az átlagnyomást, hanem a <strong>nyomásváltozás sebességét</strong> és a <strong>pulzusnyomást</strong> is érzékelik (minden szisztoléban sűrű akciós potenciál-sorozatot tüzelnek, diasztoléban pedig elhallgatnak) [PPT: 18. dia]. Ezért vérzéses sokk kezdetén, amikor a MAP még normális, de a pulzusnyomás már beszűkül, a baroreceptorok már jeleznek [PPT: 18. dia]!</li>
                    </ul>
                </li>
            </ul>

            <!-- BARORECEPTOR REFLEX SVG ÁBRA -->
            <div style="text-align: center; margin: 1.5rem 0;">
                <svg viewBox="0 0 650 220" style="max-width: 100%; height: auto; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
                    <!-- Stimulus -->
                    <rect x="20" y="80" width="110" height="60" fill="#1e293b" stroke="#facc15" stroke-width="2" rx="6"/>
                    <text x="75" y="105" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">↑ MAP (Feszülés)</text>
                    <text x="75" y="125" fill="#cbd5e1" font-size="10" text-anchor="middle">Carotis & Aorta</text>

                    <!-- Afferens -->
                    <line x1="130" y1="110" x2="195" y2="110" stroke="#38bdf8" stroke-width="2.5"/>
                    <text x="162" y="100" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">n. IX, X (+)</text>

                    <!-- NTS -->
                    <rect x="195" y="85" width="75" height="50" fill="#1d4ed8" stroke="#60a5fa" stroke-width="2" rx="6"/>
                    <text x="232" y="115" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">NTS</text>

                    <!-- NTS -> nAmb -->
                    <path d="M 270 95 L 330 55" stroke="#22c55e" stroke-width="2"/>
                    <text x="295" y="65" fill="#22c55e" font-size="11" font-weight="bold">+</text>
                    <rect x="330" y="30" width="90" height="45" fill="#065f46" stroke="#34d399" stroke-width="2" rx="6"/>
                    <text x="375" y="57" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">nAmb</text>

                    <!-- nAmb -> Vagus -->
                    <line x1="420" y1="52" x2="490" y2="52" stroke="#22c55e" stroke-width="2"/>
                    <rect x="490" y="25" width="140" height="55" fill="#1e293b" stroke="#22c55e" stroke-width="2" rx="6"/>
                    <text x="560" y="48" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">↑ n. Vagus (X.)</text>
                    <text x="560" y="68" fill="#cbd5e1" font-size="10" text-anchor="middle">↓ HR → ↓ Ptf → ↓ MAP</text>

                    <!-- NTS -> CVLM -->
                    <path d="M 270 125 L 330 165" stroke="#22c55e" stroke-width="2"/>
                    <text x="295" y="160" fill="#22c55e" font-size="11" font-weight="bold">+</text>
                    <rect x="330" y="145" width="90" height="45" fill="#581c87" stroke="#c084fc" stroke-width="2" rx="6"/>
                    <text x="375" y="172" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">CVLM</text>

                    <!-- CVLM -| RVLM -->
                    <line x1="420" y1="167" x2="465" y2="167" stroke="#ef4444" stroke-width="3"/>
                    <line x1="465" y1="157" x2="465" y2="177" stroke="#ef4444" stroke-width="3"/>
                    <text x="442" y="155" fill="#ef4444" font-size="11" font-weight="bold">GABA (-)</text>

                    <!-- RVLM -> Sympathetic -->
                    <rect x="475" y="140" width="155" height="60" fill="#7f1d1d" stroke="#f87171" stroke-width="2" rx="6"/>
                    <text x="552" y="162" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">↓ RVLM → ↓ SIR tónus</text>
                    <text x="552" y="182" fill="#cbd5e1" font-size="10" text-anchor="middle">Vasodilatatio → ↓ TPR → ↓ MAP</text>
                </svg>
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">15–21. Dia: A magasnyomású baroreceptor-reflex depresszor válasza [PPT: 15, 20–21. dia].</div>
            </div>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">A két ellentétes reflexív részletes menete [PPT: 20–23. dia]:</h4>
            <ul>
                <li><strong>1. Vérnyomás-emelkedés (↑ MAP) → „Depresszor válasz” (↓ MAP) [PPT: 20–21. dia]:</strong>
                    <br>Baroreceptorok tüzelése ↑ → n. IX, X → NTS → <strong>CVLM aktiváció</strong> → (1) gátolja az RVLM-et (szimpatikus tónus ↓); (2) serkenti a nAmb-t (n. vagus ↑) [PPT: 20. dia].
                    <ul>
                        <li><em>Szív:</em> Negatív kronotróp, dromotróp (vagus ↑ és SIR ↓) és negatív inotróp, luzitróp, batmotróp (SIR ↓) hatás → <strong>HR ↓</strong>, <strong>végszisztolés térfogat (ESV) ↑</strong> [PPT: 21. dia].</li>
                        <li><em>Vénák:</em> Szimpatikus tónus ↓ → kapacitásuk nő (tágulnak) → vénás visszaáramlás ↓ → <strong>végdiasztolés térfogat (EDV) ↓</strong> [PPT: 21. dia]. <em>(Megjegyzés: bár a bradikardia miatt hosszabb a diasztolé, a vénás kapacitásnövekedés ezt felülírja, így az EDV összességében csökken!)</em> [PPT: 21. dia].</li>
                        <li><em>Perctérfogat és TPR:</em> Pulzustérfogat (EDV − ESV) ↓ és HR ↓ → <strong>Ptf ↓</strong>; arteriolák tágulnak → <strong>TPR ↓</strong>; mellékvesevelő Adr/NA-leadása ↓ → <strong>MAP ↓</strong> [PPT: 21. dia].</li>
                    </ul>
                </li>
                <li><strong>2. Vérnyomás-esés (↓ MAP, pl. hirtelen felálláskor – orthostasis) → „Presszor válasz” (↑ MAP) [PPT: 22–23. dia]:</strong>
                    <br>Fekvő vagy ülő helyzetből felálláskor a vér az alsó végtagok vénáiba süllyed → vénás visszaáramlás ↓ → Ptf ↓ → átmeneti MAP ↓ (ha lassan kapcsol a reflex, megszédülünk) [PPT: 22. dia].
                    <ul>
                        <li><em>Központi kapcsolás:</em> Baroreceptorok tüzelése ↓ → n. IX, X ↓ → NTS ↓ → CVLM aktivitása ↓ → <strong>az RVLM felszabadul a gátlás alól</strong> (szimpatikus kiáramlás ↑), a nAmb aktivitása csökken (vagus ↓) [PPT: 22. dia].</li>
                        <li><em>Végrehajtás:</em> Szíven +krono/dromo/ino/luzi/batmotróp hatás (<strong>HR ↑, ESV ↓</strong>); vénák összehúzódnak (kapacitás ↓ → vénás visszaáramlás ↑ → <strong>EDV ↑</strong>); pulzustérfogat ↑ → <strong>Ptf ↑</strong>; arteriolák összehúzódnak (<strong>TPR ↑</strong>); mellékvesevelő Adr/NA ↑ → <strong>MAP néhány másodperc alatt helyreáll</strong> [PPT: 23. dia]!</li>
                    </ul>
                </li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">Resetting (A baroreceptor-reflex átállítódása) [PPT: 24–26. dia]:</h4>
            <p>Ha a baroreceptor-reflex ennyire hatékonyan puffereli a vérnyomást, hogyan alakulhat ki tartós magasvérnyomás-betegség (hypertonia)? A válasz a <strong>resetting</strong> jelensége [PPT: 25. dia]:</p>
            <ul>
                <li><strong>1. Centrális resetting [PPT: 25–26. dia]:</strong> Fizikai munka, sport vagy stressz során a motoros kéreg és a hipotalamusz az NTS szintjén átmenetileg megemeli a szabályozás alapjelét (set-point), így a baroreceptor-reflex engedélyezi a magasabb vérnyomást (nem lassítja le a szívet) [PPT: 25–26. dia].</li>
                <li><strong>2. Perifériás resetting [PPT: 25. dia]:</strong> Tartósan (órákig–napokig) fennálló hypertonia esetén maga a baroreceptor alakítja át az érzékenységi görbéjét (a görbe jobbra tolódik a magasabb nyomás felé), és az új, kórosan magas értéket fogadja el fiziológiás normálnak [PPT: 25. dia]. <em>Klinikai következmény:</em> Ha a hypertoniás páciens kihagyja a vérnyomáscsökkentő gyógyszerét, a vérnyomása azonnal visszaugrik a megemelkedett értékre, mert a baroreceptorai már ahhoz igazodtak [PPT: 25. dia]!</li>
            </ul>

            <!-- III. RÉSZ: MAP NÖVELŐ (PRESSZOR) CARDIOVASCULARIS REFLEXEK (27–48. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                III. RÉSZ: Vérnyomást Növelő (Presszor) Cardiovascularis Reflexek [PPT: 27–48. dia]
            </h2>
            <p>A magasnyomású baroreceptor-reflex kivételével a szervezet többi presszor reflexe <strong>nem vesz részt a nyugalmi vérnyomás-szabályozásban</strong>; ezek terhelés, stressz vagy életveszélyes állapotok során aktiválódnak, és a baroreceptor set-point feljebb tolásával (centrális resetting) emelik a vérnyomást [PPT: 27, 48. dia].</p>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. Kemoreceptor-reflex (Perifériás és Centrális) [PPT: 28–38. dia]
            </h3>
            <ul>
                <li><strong>Perifériás kemoreceptorok (Glomus caroticum és Glomus aorticum) [PPT: 28–32. dia]:</strong>
                    <ul>
                        <li><em>Szerkezet és sejtes mechanizmus [PPT: 29. dia]:</em> Az aortaív mentén és a carotis oszlásnál található, rendkívül magas alapanyagcseréjű és vérellátású testecskék [PPT: 29. dia]. Ha csökken az artériás vér <strong>pO₂-szintje (hypoxia)</strong> vagy a vérátáramlás, a sejtekben kevesebb ATP termelődik és enyhén savanyodik a citoplazma → bezárnak a <strong>kétpórusú (K₂P) K⁺-csatornák</strong> → csökken a K⁺-konduktancia → depolarizáció → Ca²⁺-beáramlás → neurotranszmitter-ürülés (ATP, ACh) a n. IX. és n. X. afferensekre [PPT: 29. dia].</li>
                        <li><em>Adekvát inger és érzékenységi görbe [PPT: 30–31. dia]:</em> Az <strong>adekvát inger a hypoxia (↓ pO₂)</strong> – ez az egyetlen receptor a szervezetben, amelyik az oxigénhiányt detektálja [PPT: 30–31. dia]! Fiziológiás pO₂ (90–95 Hgmm) mellett aktivitásuk alacsony, nem hatnak az RVLM-re [PPT: 30. dia]. <strong>60 Hgmm pO₂ alatt</strong> viszont az aktivitásuk meredeken megugrik és serkenti az RVLM-et [PPT: 30. dia]. A <strong>hypercapnia (↑ pCO₂)</strong>, az <strong>acidosis (↓ pH)</strong> és a <strong>szérum K⁺-szint emelkedése</strong> fokozza a receptorok érzékenységét (a görbét pozitív irányba tolja el, így már magasabb pO₂ mellett is aktiválják az RVLM-et) [PPT: 30–31. dia].</li>
                        <li><em>Keringési válasz [PPT: 32. dia]:</em> n. IX, X → NTS → <strong>RVLM aktiváció → szimpatikus vazokonstrikció (↑ TPR → ↑ MAP)</strong> [PPT: 32. dia]. Bár az NTS közvetlenül a nAmb-t is serkenti (átmeneti bradikardia), a párhuzamosan beinduló hiperventilláció (tüdőfeszülési reflex) visszafogja a vagust, így a szívfrekvencia stabil marad [PPT: 32. dia].</li>
                    </ul>
                </li>
                <li><strong>Centrális kemoreceptorok (Nyúltvelői kemoszenzitív magcsoportok) [PPT: 33–38. dia]:</strong>
                    <ul>
                        <li><em>Adekvát inger és mechanizmus [PPT: 35. dia]:</em> Kizárólag a liquor (CSF) és a vér <strong>pCO₂-emelkedése (hypercapnia) és pH-csökkenése (acidosis)</strong> [PPT: 35. dia]. A vér-agy gáton a H⁺-ionok csak lassan jutnak át, de a <strong>CO₂ szabadon átdiffundál</strong> a liquorba, ahol a szénsavanhidráz enzim H⁺-t képez [PPT: 35. dia]. A liquor pH-esése bezárja a K⁺-csatornákat → depolarizáció → receptoraktivitás ↑ [PPT: 35. dia]. <strong>A hypoxia NEM aktiválja őket</strong> (sőt, az oxigénhiány károsítja/elpusztítja a neuronokat!) [PPT: 35, 37. dia].</li>
                        <li><em>Hatás [PPT: 36–37. dia]:</em> Nemcsak a légzőközpont alapritmusát adják, hanem közvetlenül fokozzák az RVLM intrinsic aktivitását → <strong>presszor válasz (MAP ↑)</strong> [PPT: 36–37. dia].</li>
                    </ul>
                </li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Életveszélyes klinikai hiba: Tiszta oxigén adása hypoxiás + hypotoniás betegnek!]:</strong><br>
                <em>„Tegyük fel, hogy a betegünk egyszerre hypoxiás (pO₂ = 50 Hgmm) ÉS hypotoniás (MAP = 50 Hgmm). Jó ilyenkor oxigént adni neki? Biztos ártani nem árt? Dehogynem! 50 Hgmm-es középnyomásnál a magasnyomású baroreceptor-reflex már teljesen kikapcsolt (0 aktivitás)! Ilyenkor a perifériás kemoreceptor-reflex az <strong>utolsó védelmi vonal</strong>, amely a hypoxia révén még fenntartja a vérnyomást. Ha tiszta oxigént adsz a betegnek, megszünteted a hypoxiát, kikapcsolod a kemoreceptor-reflexet is, és a beteg vérnyomása végzetesen összeomlik!”</em> [PPT: 31. dia]
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. Az Agyi Ischaemiás Válasz és a Cushing-reflex [PPT: 39–41. dia]
            </h3>
            <ul>
                <li><strong>Agyi ischaemiás válasz („Utolsó védelmi vonal”) [PPT: 39–40. dia]:</strong>
                    <ul>
                        <li><em>Kiváltó ok:</em> Ha a <strong>MAP < 60 Hgmm</strong>, az <strong>intracranialis nyomás (ICP) > 33 Hgmm</strong>, vagy súlyos <strong>anoxia</strong> miatt drasztikusan csökken az agyi vérátáramlás [PPT: 39–40. dia].</li>
                        <li><em>Mechanizmus és hatás:</em> A nyúltvelői vazomotor neuronok helyi hypoxiája és a felhalmozódó CO₂ közvetlenül, maximális erővel kisüti az RVLM-et [PPT: 40. dia]. A szisztémás arteriolák extrém módon összehúzódnak (a veseerek szinte teljesen elzáródnak!), a vérnyomás pedig <strong>220–250+ / 130+ Hgmm-re</strong> szökik fel, hogy fenntartsa az agyi perfúziót [PPT: 40. dia]. Ha 5–10 percen belül nem rendeződik a perfúzió, a beteg meghal [PPT: 40. dia].</li>
                    </ul>
                </li>
                <li><strong>Cushing-reflex (Speciális eset: Koponyaűri nyomásfokozódás – ICP ↑) [PPT: 41. dia]:</strong>
                    <ul>
                        <li><em>Kórélettani ördögi kör:</em> Agyvérzés, lassan szivárgó aneurizma, agydaganat vagy agyödéma miatt az <strong>ICP meghaladja a 33 Hgmm-t</strong> [PPT: 39, 41. dia]. A magas ICP kívülről összenyomja a merev koponyába zárt agyi ereket → agyi ischaemia → RVLM maximális aktivációja → extrém vérnyomás-emelkedés, hogy átpréselje a vért az agyon (ami viszont tovább fokozza a vérzést és az ICP-t!) [PPT: 41. dia].</li>
                        <li><strong>Cushing-triász (Diagnosztikai életmentő jel!):</strong>
                            <br>1. <strong>Extrém magas vérnyomás</strong> (250 Hgmm körüli szisztolés érték) [PPT: 41. dia].
                            <br>2. <strong>Bradikardia (40–50/perc)</strong> (a magas vérnyomás miatti baroreceptor-aktiváció és a nAmb direkt ingerlése lassítja a szívet) [PPT: 41. dia].
                            <br>3. <strong>Szabálytalan, kóros légzés</strong> (a nyúltvelői légzőközpontok nyomódása miatt) [PPT: 41. dia].
                            <br><em>(Azonnali idegsebészeti beavatkozást – koponyalékelést / dekompressziót – igényel!)</em> [PPT: 41. dia].
                        </li>
                    </ul>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. Lovén-reflex és az Exercise Pressor Reflex [PPT: 42–48. dia]
            </h3>
            <ul>
                <li><strong>Lovén-reflex (Felszínes bőrfájdalomra adott kettős válasz) [PPT: 43–45. dia]:</strong>
                    <ul>
                        <li><em>1. Szisztémás hatás:</em> A bőr nociceptorainak ingerlése (pl. csípés, vágás) a gerincvelői hátsó szarvon át felszállva aktiválja az RVLM-et → szisztémás vazokonstrikció → <strong>↑ MAP</strong> [PPT: 43, 45. dia].</li>
                        <li><em>2. Lokális hatás (Axonreflex):</em> A fájdalomreceptortól <strong>antidrom (ellenirányú)</strong> ingerületvezetéssel a kollaterális idegvégződésekből <strong>P-anyag (Substance P)</strong> és <strong>hisztamin</strong> szabadul fel az erek mentén → <strong>helyi vazodilatáció és vérbőség</strong> („hús” reakció) alakul ki a sérülés helyén, ami segíti a szöveti regenerációt [PPT: 44–45. dia]. (Mivel nem érinti a gerincvelőt, klasszikus axonreflex!) [PPT: 44. dia].</li>
                    </ul>
                </li>
                <li><strong>Exercise Pressor Reflex (Izommunka hatása) [PPT: 47–48. dia]:</strong>
                    <ul>
                        <li><em>Receptorok:</em> A dolgozó vázizomban felszabaduló metabolitokat (<strong>adenozin, tejsav, K⁺</strong>) kemoreceptorok (purinerg, TRPV1, ASIC csatornák), az izom mechanikai összehúzódását pedig <strong>III-as típusú szenzoros végződések</strong> (nem az izomorsó!) érzékelik [PPT: 47. dia].</li>
                        <li><em>Hatás:</em> NTS → RVLM aktiváció (presszor válasz: <strong>↑ MAP, ↑ HR</strong>) + a dorzális légzőneuronok serkentése (hiperventilláció) [PPT: 48. dia].</li>
                    </ul>
                </li>
            </ul>

            <!-- IV. RÉSZ: MAP CSÖKKENTŐ (DEPRESSZOR) REFLEXEK (49–53. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                IV. RÉSZ: Vérnyomást Csökkentő (Depresszor) Reflexek [PPT: 49–53. dia]
            </h2>

            <ul>
                <li><strong>1. Alacsony nyomású (Cardiopulmonalis) baroreceptor-reflex [PPT: 50–51. dia]:</strong>
                    <ul>
                        <li><em>Helye és ingere:</em> A nagyvénák (vena cava superior/inferior), a jobb pitvar és a pulmonális artéria falában lévő feszülési receptorok [PPT: 51. dia]. Nem a nyomást, hanem a <strong>vénás visszaáramlást és a keringő vértérfogatot</strong> figyelik [PPT: 51. dia].</li>
                        <li><em>Válasz fokozott vértérfogat (Ptf ↑) esetén:</em> NTS → CVLM ↑ → RVLM ↓ [PPT: 51. dia]. Az azonnali vazodilatációs ág nem jelentős; a fő hatás a <strong>lassú humorális/renális válasz</strong>: a szimpatikus tónus csökkenése miatt <strong>csökken a renin, angiotenzin II, aldoszteron és az ADH</strong> szekréciója → fokozódik a víz- és nátriumürítés → csökken a keringő vértérfogat és a MAP [PPT: 51. dia].</li>
                    </ul>
                </li>
                <li><strong>2. Bainbridge-reflex [PPT: 51. dia]:</strong>
                    <ul>
                        <li><em>Mechanizmus:</em> A jobb pitvari feszülési receptorok hirtelen vénás vértorlódás esetén szabályozzák a szívfrekvenciát: ha az alap <strong>HR alacsony</strong>, növelik a frekvenciát (<strong>tachycardia</strong>), hogy továbbítsák a vért; ha az alap <strong>HR magas</strong> (és a rövid diasztolé miatt torlódik a vér), csökkentik a frekvenciát (<strong>bradikardia</strong>), hogy hosszabb legyen a telődési idő [PPT: 51. dia]. (Emberben a magasnyomású baroreceptor-reflex dominanciája miatt kevésbé jelentős, inkább kutyákban/négylábúakban írták le) [PPT: 51. dia].</li>
                    </ul>
                </li>
                <li><strong>3. Goltz-reflex [PPT: 52–53. dia]:</strong>
                    <ul>
                        <li><em>Inger és pálya:</em> A hasi mechanoreceptorok erős ütése (pl. gyomorszájra mért ütés bokszban vagy autóbalesetben a kormánykeréktől) [PPT: 53. dia].</li>
                        <li><em>Hatás:</em> Afferens impulzusok → NTS → közvetlenül a <strong>nucleus ambiguust aktiválják</strong> → a <strong>n. vagus tónusa masszívan megnő</strong> → súlyos bradikardia, <strong>akár szívmegállás (asystolia)</strong> és ájulás következik be [PPT: 53. dia].</li>
                    </ul>
                </li>
                <li><strong>4. Klinikai és kísérletes carotis-manipulációk [PPT: 53. dia]:</strong>
                    <ul>
                        <li><em>Carotis sinus nyomás (ütés a nyakra / szoros gallér):</em> A mechanikai nyomás magas vérnyomást imitál a sinus caroticusban → baroreceptor-reflex → hirtelen vérnyomásesés és ájulás [PPT: 53. dia].</li>
                        <li><em>Kísérletes carotis okklúzió (elszorítás):</em> Ha a carotis oszlás <strong>alatt (proximálisan)</strong> szorítjuk el az eret, a sinus caroticus alacsony nyomást érzékel → <strong>presszor válasz (MAP ↑)</strong>; ha a carotis oszlás <strong>felett (disztálisan)</strong> szorítjuk el, a vér feltorlódik a sinusban → <strong>depresszor válasz (MAP ↓)</strong> [PPT: 53. dia].</li>
                    </ul>
                </li>
            </ul>

            <!-- ÖSSZEFOGLALÓ -->
            <div style="background: var(--box-bg); border-left: 4px solid var(--accent); padding: 1.2rem; border-radius: 8px; margin-top: 2rem;">
                <h4 style="margin-top: 0; color: var(--primary);">Legfontosabb vizsgapontok ZH-ra:</h4>
                <ul>
                    <li><strong>Szabályozási hierarchia:</strong> Lokális > Hormonális > Idegi szabályozás [PPT: 3–4. dia].</li>
                    <li><strong>Nyúltvelői magok:</strong> <strong>NTS</strong> = afferens relé; <strong>RVLM</strong> = presszor központ (intrinsic aktivitás, SIR kiáramlás); <strong>CVLM</strong> = depresszor központ (nincs intrinsic aktivitása, GABA-val gátolja az RVLM-et és serkenti a nAmb-t); <strong>nAmb</strong> = n. vagus eredése [PPT: 5–13. dia].</li>
                    <li><strong>Magasnyomású baroreceptorok:</strong> Sinus caroticus (n. IX) és aorticus (n. X); <strong>MAP < 60 Hgmm alatt 0 aktivitás</strong>; érzékelik a pulzusnyomást (dP/dt) is; tartós hypertoniában <strong>perifériás resetting</strong> alakul ki [PPT: 16–18, 25. dia].</li>
                    <li><strong>Kemoreceptorok:</strong> Perifériás (glomus caroticum/aorticum) = <strong>↓ pO₂</strong> (K₂P csatorna záródik, <60 Hgmm alatt hat az RVLM-re); Centrális = <strong>↑ pCO₂ / ↓ pH</strong> (hypoxia elpusztítja őket!) [PPT: 28–37. dia].</li>
                    <li><strong>Cushing-triász (ICP > 33 Hgmm):</strong> Extrém hypertonia + paradox bradikardia + szabálytalan légzés [PPT: 41. dia].</li>
                    <li><strong>Lovén-reflex:</strong> Felszínes fájdalom → szisztémás vazokonstrikció (↑ MAP) + lokális axonreflexes vazodilatáció (P-anyag, hisztamin) [PPT: 43–45. dia].</li>
                    <li><strong>Depresszor reflexek:</strong> Cardiopulmonalis receptorok (főként ↓ renin/Ang II/aldoszteron/ADH), Bainbridge-reflex (vénás torlódás → HR-korrekció), Goltz-reflex (hasfal ütése → vagus ↑ → asystolia) [PPT: 50–53. dia].</li>
                </ul>
            </div>

        </div>
    `
});