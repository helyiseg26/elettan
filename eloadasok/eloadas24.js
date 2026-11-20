// eloadasok/eloadas24.js
window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-24",
    title: "24. Előadás: A keringési rendszer általános jellemzői, hemodinamika, artériás- és vénás keringés, mikrocirkuláció és az értónus",
    shortName: "Keringés alapjai, Hemodinamika & Értónus",
    html: `
        <div style="font-family: inherit; line-height: 1.7; color: var(--text);">

            <!-- I. RÉSZ: A KERINGÉSI RENDSZER ÁLTALÁNOS JELLEMZŐI (1-18. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 1rem;">
                I. RÉSZ: A Keringési Rendszer Általános Jellemzői és Szerkezete [PPT: 1–18. dia]
            </h2>

            <div style="background: var(--info-bg); border-left: 4px solid var(--primary-light); padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="margin-top: 0; color: var(--primary);">1. Epidemiológiai háttér és történeti áttekintés [PPT: 1–4. dia]</h3>
                <ul>
                    <li><strong>Globális és hazai halálozási adatok (2023) [PPT: 2–3. dia]:</strong>
                        <ul>
                            <li>Világszerte a halálesetek közel <strong>38,5%-át</strong> (16,6 millió fő) a szív- és érrendszeri (cardiovascularis) betegségek okozzák (vezető ok: iszkémiás szívbetegség 9,6 millió, sztrók 6,2 millió), megelőzve a daganatos (15,2%) és légzőszervi (13,4%) betegségeket [PPT: 2. dia].</li>
                            <li><strong>Magyarországon (KSH, 2023) [PPT: 3. dia]:</strong> a 128 176 halálesetből <strong>48% (61 517 fő)</strong> a keringési rendszer betegségeire vezethető vissza (iszkémiás szívbetegség 23%, sztrók 7,8%), ami jelentősen meghaladja a 32,7%-os uniós átlagot (fő rizikófaktorok: dohányzás és elhízás) [PPT: 3. dia].</li>
                        </ul>
                    </li>
                    <li><strong>Történeti mérföldkövek [PPT: 4. dia]:</strong>
                        <ul>
                            <li><strong>Andrea Cesalpino (1519–1603):</strong> először használta a <em>„circulatio”</em> kifejezést, és pontosan leírta a szívbillentyűk egyirányú működését (<em>Questiones Peripatheticae</em>, 1571) [PPT: 4. dia].</li>
                            <li><strong>William Harvey (1578–1657):</strong> a modern kísérletes élettan megalapítója; elsőként bizonyította kísérletesen (leszorításos vénatesztekkel), hogy a vénákban a vér mindig a szív felé áramlik, és felismerte a két zárt vérkört (<em>De Motu Cordis</em>, 1628) [PPT: 4. dia].</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                2. A két vérkör összehasonlítása és a keringés feladatai [PPT: 5–8. dia]
            </h3>
            <p>A keringési rendszer egy ciklikusan működő szívó-nyomó pumpából (szív) és változó dimenziójú, elágazó, tágulékony csőrendszerből (véredények) áll [PPT: 5. dia]. A <strong>nagyvérkör (szisztémás keringés)</strong> a bal kamrától a jobb pitvarig, a <strong>kisvérkör (pulmonáris keringés)</strong> a jobb kamrától a bal pitvarig tart; emellett a <strong>nyirokkeringés</strong> a nyirokkapillárisokból a fő nyirokvezetékeken át a vénás rendszerbe vezeti vissza a szövetközti folyadékfelesleget [PPT: 6. dia].</p>

            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 8px; text-align: left;">Keringésdinamikai paraméter [PPT: 7. dia]</th>
                        <th style="padding: 8px; text-align: left;">NAGYVÉRKÖR (Szisztémás)</th>
                        <th style="padding: 8px; text-align: left;">KISVÉRKÖR (Pulmonáris)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Perctérfogat (PTF / CO)</strong></td>
                        <td>5,0 – 5,5 liter/perc</td>
                        <td><strong>5,0 – 5,5 liter/perc (AZONOS!)</strong></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Kamrai nyomás (szisztolés / diasztolés)</strong></td>
                        <td>120 Hgmm / >5 Hgmm</td>
                        <td>24 Hgmm / 1–2 Hgmm</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Szélkazánér nyomás (Aorta vs. Truncus pulm.)</strong></td>
                        <td>120 / 80 Hgmm (Pulzusnyomás: 40 Hgmm)</td>
                        <td>24 / 9 Hgmm (Pulzusnyomás: 13 Hgmm)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Artériás középnyomás (MAP)</strong></td>
                        <td><strong>93 Hgmm</strong></td>
                        <td><strong>14 Hgmm</strong></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Pitvari nyomás (Jobb vs. Bal pitvar)</strong></td>
                        <td>2–3 Hgmm</td>
                        <td>8 Hgmm</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Nyomásfő (hajtóerő, ΔP)</strong></td>
                        <td>91 Hgmm</td>
                        <td>6 Hgmm</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Teljes ellenállás (TPR vs. PVR)</strong></td>
                        <td>16,5 Hgmm/liter/perc</td>
                        <td><strong>1,5 Hgmm/liter/perc (kb. 1/10-ed!)</strong></td>
                    </tr>
                    <tr>
                        <td><strong>Vérmennyiség megoszlása</strong></td>
                        <td>73% (szívvel együtt kb. 80%)</td>
                        <td>27% (tüdőerekben kb. 12%)</td>
                    </tr>
                </tbody>
            </table>

            <ul>
                <li><strong>A keringési rendszer 3 fő feladata [PPT: 8. dia]:</strong> (1) Tápanyagok (O₂, glükóz, aminosavak) szállítása a sejtekhez, anyagcsere-végtermékek (CO₂, karbamid, tejsav) elszállítása; (2) Az extracelluláris folyadéktér térfogatának és ionösszetételének fenntartása a vesék folyamatos vérellátásával; (3) Hormonok szállítása, immunsejtek keringtetése és hőszabályozás [PPT: 8. dia].</li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                3. Az érfal szerkezete, sebesség- és nyomásviszonyok, perctérfogat-megoszlás [PPT: 9–18. dia]
            </h3>
            <ul>
                <li><strong>Az erek szövettani rétegei [PPT: 9–10. dia]:</strong>
                    <ul>
                        <li><em>Tunica intima:</em> egyrétegű laphám (<strong>endothelium</strong>) + membrana elastica interna. Az endothel vazoaktív anyagokat (NO, endothelin) termel [PPT: 9. dia].</li>
                        <li><em>Tunica media:</em> körkörös <strong>simaizomsejtek</strong> és elasztikus rostok – kontrakciója és relaxációja szabja meg az ér sugarát [PPT: 9. dia].</li>
                        <li><em>Tunica externa (adventitia):</em> kötőszövetes tok, benne futnak a vazomotor idegrostok és a vasa vasorum [PPT: 9. dia].</li>
                        <li><em>Eltérések [PPT: 10. dia]:</em> Az artériák fala vastag, izmos és elasztikus; a vénák fala vékonyabb, lumenük tágabb; a <strong>kapillárisok</strong> fala mindössze egyetlen réteg endothelsejtből és alapmembránból áll (nincs bennük simaizom!).</li>
                    </ul>
                </li>
                <li><strong>Áramlási sebesség és összkeresztmetszet [PPT: 11. dia]:</strong>
                    <br>A folytonossági egyenlet értelmében az áramlási sebesség (v) fordítottan arányos az adott érszakasz összkeresztmetszetével (A): <code>v ∼ 1 / A</code> [PPT: 11. dia]. Az aorta keresztmetszete mindössze <strong>2,5 cm²</strong> (sebesség: ~40–50 cm/s), míg a kapillárisok összkeresztmetszete <strong>~4 500 cm²</strong> (2000-szer nagyobb!), ezért <strong>a kapillárisokban a leglassabb a véráramlás (~0,1–1 cm/s)</strong>, ami bőséges időt biztosít az anyagcserére [PPT: 11, 48. dia]. Az átlagos keringési idő kb. <strong>1 perc</strong> (10 mp-től [koronáriák] több percig terjedhet) [PPT: 11. dia].
                </li>
                <li><strong>Nyomásviszonyok és funkcionális értípusok [PPT: 12–13, 18. dia]:</strong>
                    <ul>
                        <li>A nyomás az érpálya mentén folyamatosan csökken [PPT: 12. dia]. A szívciklussal szinkron pulzáló nyomásingadozások az <strong>arteriolák szintjén tűnnek el</strong>, és <strong>itt következik be a legnagyobb nyomásesés is (~50–60 Hgmm esés!)</strong> → <strong>Arteriolák = Rezisztenciaerek</strong> [PPT: 12, 18. dia].</li>
                        <li><strong>Kapillárisok = Kicserélődési (Exchange) erek:</strong> nyugalomban a vértérfogat mindössze <strong>5%-át</strong> tartalmazzák [PPT: 12–13. dia].</li>
                        <li><strong>Vénák és venulák = Kapacitáserek (Vérraktárak):</strong> nyugalomban a teljes vérmennyiség <strong>60%-a</strong> itt található (továbbá 15% a szisztémás artériákban, 12% a tüdőerekben, 8% a szívben) [PPT: 13, 18. dia].</li>
                    </ul>
                </li>
                <li><strong>Kapcsolási elrendezés és a perctérfogat megoszlása [PPT: 14–16. dia]:</strong>
                    <ul>
                        <li>A kis- és nagyvérkör <strong>sorba van kapcsolva</strong> (<code>R_total = R₁ + R₂</code>), így a két kamra perctérfogata megegyezik [PPT: 14. dia].</li>
                        <li>A nagyvérköri szervek egymással <strong>párhuzamosan vannak kapcsolva</strong> (<code>1/R_total = 1/R₁ + 1/R₂ + ...</code>): ha egy szervben (pl. vázizomban) értágulat lép fel, a teljes perifériás ellenállás (TPR) csökken [PPT: 14. dia]!</li>
                        <li><em>Nyugalmi PTF-eloszlás (5–5,5 L/perc) [PPT: 14–15. dia]:</em> Vese 20–25%, Splanchnicus/GI terület 20–25%, Vázizom 15–20%, Agy 13–15%, Szív 4–5%, Bőr 3–6%, Csontok/zsírszövet 10–15% [PPT: 14–15. dia]. Fizikai munkában a PTF akár 25 L/percig nő, és az izmok részesedése elérheti a 72–80%-ot (redisztribúció) [PPT: 15. dia].</li>
                    </ul>
                </li>
                <li><strong>A szervezet vérraktárai [PPT: 17. dia]:</strong> Lép (~100 ml; összehúzódása 1–2%-kal emelheti a hematokritot), Máj (200–300 ml), Nagy hasi vénák (~300 ml), Bőr vénás plexusai (200–300 ml), Szív (50–100 ml szisztolés rezerv), Tüdő (100–200 ml) [PPT: 17. dia].</li>
            </ul>

            <!-- II. RÉSZ: HEMODINAMIKAI ALAPOK (19-33. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                II. RÉSZ: Hemodinamikai Alapok [PPT: 19–33. dia]
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. Ohm-törvény a keringésben és a Hagen–Poiseuille-törvény [PPT: 20–28. dia]
            </h3>
            <ul>
                <li><strong>Hidrodinamikai Ohm-törvény [PPT: 20–25. dia]:</strong>
                    <br>Az elektromos <code>I = U / R</code> analógiájára: <code>Q = ΔP / R</code>, ahol ΔP = P<sub>Aorta</sub> - P<sub>vena cava</sub> [PPT: 21–22. dia]. Mivel P<sub>vena cava</sub> ≈ 0 Hgmm, ezért: <strong><code>MAP = PTF × TPR</code></strong> (ahol PTF = SV × HR) [PPT: 22, 24–25. dia].
                    <br><em>Kiemelt elv [PPT: 24. dia]:</em> Nincs olyan mechanizmus, amely a MAP-ot önmagában módosítaná; mindig a perctérfogat és/vagy a TPR változása határozza meg a MAP-ot (sohasem fordítva!) [PPT: 24. dia].
                    <br><strong>MAP kiszámítása [PPT: 25. dia]:</strong> Mivel a diasztolé kétszer hosszabb, mint a szisztolé, a MAP nem a számtani átlag, hanem: <code>MAP = DP + 1/3 • PP</code> (ahol PP = SP - DP, a pulzusnyomás) [PPT: 25. dia].
                </li>
                <li><strong>Hagen–Poiseuille-törvény [PPT: 26–28. dia]:</strong>
                    <br><code>R = (8 • η • L) / (π • r&sup4;)</code> → behelyettesítve: <code>Q = (ΔP • π • r&sup4;) / (8 • η • L)</code> [PPT: 28. dia].
                    <ul>
                        <li><strong>Érhossz (L) [PPT: 26. dia]:</strong> Nincs akut fiziológiás szabályozása, de részben ez okozza a kisvérkör kisebb ellenállását. Kórélettani jelentősége: <strong>minden 0,5 kg zsírszövet kb. 320 km új vérér képződését indukálja</strong>, ami növeli a TPR-t és a PTF-et → az elhízás hypertoniához vezet [PPT: 26. dia]!</li>
                        <li><strong>Viszkozitás (η) [PPT: 27, 31–32. dia]:</strong> Főként a <strong>hematokrittól (Hct)</strong> és kisebb mértékben a plazmafehérjéktől (fibrinogén, globulinok – gyulladásban nő!) függ [PPT: 27, 31. dia]. <em>Polycythaemiában</em> (pl. <strong>EPO-dopping</strong>) a Hct drasztikus emelkedése exponenciálisan növeli a viszkozitást és a TPR-t, túlterhelve a szívet [PPT: 27. dia].
                            <br>• <strong>Nem-newtoni folyadék [PPT: 31–32. dia]:</strong> A vér viszkozitása nem állandó: (1) lassú áramlásnál a vvt-k pénztekercsszerűen összecsapzódnak (rouleaux-képződés), így nő a viszkozitás; (2) <strong>Fåhræus–Lindqvist-effektus [PPT: 32. dia]:</strong> nagyon szűk erekben (<0,3–1 mm átmérő) a vvt-k az ér tengelyébe rendeződnek (axiális migráció), a fal mentén plazmaréteg alakul ki, így a látszólagos viszkozitás meredeken csökken [PPT: 32. dia]!
                        </li>
                        <li><strong>Érsugár (r) – A legfőbb szabályozott tényező [PPT: 28. dia]:</strong> Mivel az ellenállás az ér sugarának <strong>negyedik hatványával (r&sup4;)</strong> fordítottan arányos, ha az arteriola sugara a <strong>felére csökken (vazokonstrikció), az ellenállás 2&sup4; = 16-szorosára nő</strong> (az áramlás pedig 16-odára esik vissza)! [PPT: 28. dia]</li>
                    </ul>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                2. Lamináris és Turbulens áramlás, Reynolds-szám [PPT: 29–33. dia]
            </h3>
            <ul>
                <li><strong>Lamináris (réteges) áramlás [PPT: 29. dia]:</strong> Parabolikus sebességprofil: a falhoz tapadó réteg sebessége nulla, a tengelyben áramló rétegé maximális (a vvt-k középre sodródnak). Csendes és energiatakarékos (<code>Q ∼ ΔP</code>) [PPT: 29, 33. dia].</li>
                <li><strong>Turbulens (örvénylő) áramlás és a Reynolds-szám (Re) [PPT: 29–30. dia]:</strong>
                    <br><code>Re = (v • D • ρ) / η</code> (v: átlagsebesség, D: átmérő, ρ: sűrűség, η: viszkozitás) [PPT: 30. dia]. Ha <strong>Re > 2000–2200</strong>, az áramlás turbulenssé válik, ami hallható rezgéseket (szívzörejek, érfeletti zörejek, Korotkov-hangok) kelt [PPT: 29–30, 33. dia].
                    <br><em>Klinikai buktató (Aortastenosis) [PPT: 30. dia]:</em> Ha az ér/billentyű átmérője (D) felére szűkül, a keresztmetszet negyedére csökken, így az áramlási sebesség (v) <strong>4-szeresére nő</strong> → a számlálóban <code>4 × 0,5 = 2</code>, tehát a <strong>Re megduplázódik</strong>, és hangos szisztolés zörej keletkezik [PPT: 30, 44. dia]! Súlyos anaemiában is könnyen kialakul turbulencia a csökkent viszkozitás (η ↓) miatt [PPT: 30. dia].
                    <br><em>Hátránya [PPT: 33. dia]:</em> Turbulens áramlásnál <code>Q ∼ √ΔP</code>, azaz ugyanakkora áramlás fenntartásához sokkal nagyobb nyomásgradiensre és szívmunkára van szükség [PPT: 33. dia].
                </li>
            </ul>

            <!-- III. RÉSZ: AZ ARTÉRIÁS KERINGÉS ÉS A PULZUS (34-47. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                III. RÉSZ: Az Artériás Keringés, Compliance és a Pulzushullám [PPT: 34–47. dia]
            </h2>

            <ul>
                <li><strong>Szélkazán-funkció (Windkessel-jelenség) [PPT: 35–38. dia]:</strong> A bal kamra csak a szisztolé alatt (a szívciklus 1/3-ában) pumpál vért az aortába [PPT: 37–38. dia]. Az elasztikus nagyartériák falában lévő rugalmas rostok kitágulva tárolják a mozgási energia egy részét helyzeti (rugalmas) energiaként, majd a diasztolé alatt (a ciklus 2/3-ában) rugalmasan összeugranak, így <strong>folyamatossá teszik a perifériás véráramlást</strong> [PPT: 35–38. dia]. Ha az aorta fala merev lenne, a diasztoléban megszűnne az áramlás, és a szív munkája megduplázódna [PPT: 36. dia]!</li>
                <li><strong>Compliance (C) és Késleltetett Compliance [PPT: 39–41. dia]:</strong>
                    <ul>
                        <li><code>C = ΔV / ΔP</code> (egységnyi nyomásváltozás által létrehozott térfogatváltozás) [PPT: 39. dia].</li>
                        <li><strong>Vénás vs. Artériás compliance [PPT: 40. dia]:</strong> <code>Compliance = Tágíthatóság × Befogadóképesség</code> [PPT: 40. dia]. A vénák compliance-e <strong>24-szer nagyobb</strong> az artériákénál, mert <strong>8-szor tágíthatóbbak</strong> és <strong>3-szor nagyobb a befogadóképességük</strong> [PPT: 40. dia]!</li>
                        <li><strong>Késleltetett compliance (Stress-relaxáció / Plaszticitás) [PPT: 41. dia]:</strong> Ha egy érszakaszba nagy mennyiségű vér kerül (pl. transzfúzió), a nyomás először megugrik, majd percek alatt visszaesik, mert az érfal simaizomsejtjei átrendezik a hosszukat az új térfogathoz (és fordítva: vérvesztésnél ráfeszülnek a kisebb térfogatra) [PPT: 41. dia].</li>
                    </ul>
                </li>
                <li><strong>Rugalmas cső nyomás-átáramlás diagramja [PPT: 42. dia]:</strong> Míg a merev acélcsőben az áramlás egyenesen arányos a ΔP-vel és az origóból indul, a rugalmas vérérben van egy <strong>kritikus záródási nyomás</strong> (ez alatt az ér összecsuklik és nincs áramlás), felette pedig a nyomás növekedése tágítja az eret, így az áramlás exponenciálisan nő [PPT: 42. dia].</li>
                <li><strong>A centrális pulzushullám és a pulzus tapintási jellemzői [PPT: 43–44. dia]:</strong>
                    <ul>
                        <li><em>Szakaszai [PPT: 43. dia]:</em> Felszálló <strong>anachrot szár</strong> (kamrai ejekció) → leszálló <strong>catachrot szár</strong> → <strong>incisura</strong> (az aortabillentyű záródását jelzi!) → <strong>dichrot hullám</strong> (az elasztikus visszarúgás hulláma) [PPT: 43. dia].</li>
                        <li><em>Tapintási jellemzők [PPT: 44. dia]:</em> Rhythmicitás (rhythmicus/arrhythmiás), Frekvencia (frequens/rarus), Amplitúdó (magas=altus / alacsony=parvus), Meredekség (gyors=celer / lassú=tardus), Elnyomhatóság (kemény=durus / lágy=mollis), Equalitás (kétoldali egyformaság) [PPT: 44. dia].</li>
                    </ul>
                </li>
                <li><strong>Klinikai kórképek pulzus- és vérnyomásváltozásai (44–47. dia – Kiemelt vizsgakérdés!):</strong>
                    <ul>
                        <li><strong>Aortastenosis [PPT: 44. dia]:</strong> Beszűkült szájadék → lassú kiáramlás, csökkent SV → ↓ SP, változatlan DP → szűk pulzusnyomás (↓ PP). A pulzus <strong>TARDUS és PARVUS</strong> (lassú és alacsony), és hangos <strong>szisztolés zörej</strong> hallható [PPT: 44. dia].</li>
                        <li><strong>Aortainsufficientia [PPT: 45, 47. dia]:</strong> Az aortabillentyű nem zár tökéletesen → diasztoléban a vér visszaáramlik a bal kamrába (regurgitáció) → <strong>drasztikusan csökken a DP (↓↓ DP)</strong> [PPT: 45, 47. dia]! A visszaáramló vér megnöveli a kamrai EDV-t → Frank–Starling-törvény miatt erősebb kontrakció → ↑ SV és ↑ SP → extrém széles pulzusnyomás (↑↑ PP) [PPT: 45. dia]. A pulzus <strong>CELER és ALTUS</strong> (gyors és magas, „peckelő” pulzus), és <strong>diasztolés zörej</strong> hallható [PPT: 45, 47. dia].</li>
                        <li><strong>Atherosclerosis (Aortafal elmeszesedése, csökkent compliance) [PPT: 46–47. dia]:</strong> A merev aorta nem tudja elnyelni a szisztolés lökést → <strong>extrém magas SP (↑↑↑ SP)</strong>, míg a DP normális marad vagy enyhén nő (↑ PP) [PPT: 46–47. dia]. A pulzus itt is <strong>CELER és ALTUS</strong>, de <strong>NINCS diasztolés zörej</strong> [PPT: 46–47. dia]!</li>
                    </ul>
                </li>
            </ul>

            <!-- IV. RÉSZ: MICROCIRCULATIO, STARLING-ERŐK ÉS OEDEMA (48-68. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                IV. RÉSZ: A Microcirculatio, Starling-erők és az Oedema Kórélettana [PPT: 48–68. dia]
            </h2>

            <ul>
                <li><strong>A kapilláriságy felépítése [PPT: 49. dia]:</strong> Arteriola → Metarteriola → <strong>Prekapilláris szfinkterek</strong> (a lokális metabolitok szabályozzák a valódi kapillárisok nyitását) → Valódi kapillárisok (10–40 milliárd db, teljes hossz ~100 000 km, felszín 500–700 m²; egyetlen sejt sincs 25 μm-nél messzebb egy kapilláristól!) → Venula [PPT: 49. dia].</li>
                <li><strong>Transzportmechanizmusok [PPT: 50–51. dia]:</strong> (1) <em>Diffúzió:</em> a légzési gázok (O₂, CO₂) és zsíroldékony anyagok fő útja [PPT: 50. dia]; (2) <em>Vesicularis transzport (transcytosis):</em> nagy fehérjék [PPT: 50. dia]; (3) <em>Tömegáramlás (Bulk flow):</em> nyomáskülönbség hatására történő egyirányú folyadékáramlás a pórusokon (folyamatos, fenesztrált [vese, bél] és diszkontinuus/szinuszoid [máj, lép, csontvelő] kapillárisokon), amely a plazma és az interstitium térfogateloszlását szabályozza [PPT: 50–51. dia].</li>
                <li><strong>A 4 Starling-erő és az effektív filtrációs nyomás (P<sub>eff</sub>) [PPT: 52–59. dia]:</strong>
                    <br><code>P_eff = (P_c - P_i) - (Π_c - Π_i)</code> [PPT: 57. dia]
                    <ul>
                        <li><strong>P<sub>c</sub> (kapilláris hidrosztatikai nyomás):</strong> az egyetlen erő, amely változik a kapilláris mentén! Az artériás végen kb. <strong>30–35 Hgmm</strong>, a vénás végen kb. <strong>10–15 Hgmm</strong> [PPT: 59. dia].</li>
                        <li><strong>P<sub>i</sub> (intersticiális hidrosztatikai nyomás):</strong> laza kötőszövetben enyhén negatív (-1 – -3 Hgmm), így szívó hatásával segíti a filtrációt [PPT: 53. dia].</li>
                        <li><strong>Π<sub>c</sub> (plazma kolloidozmotikus / onkotikus nyomás):</strong> kb. <strong>28 Hgmm</strong> (ennek <strong>~80%-át az albuminok [45 g/L → 21,8 Hgmm]</strong>, 20%-át a globulinok [25 g/L → 6 Hgmm] adják; a fibrinogén részesedése elhanyagolható [0,2 Hgmm]) [PPT: 55. dia].</li>
                        <li><strong>Π<sub>i</sub> (intersticiális onkotikus nyomás):</strong> kb. 3–8 Hgmm [PPT: 56. dia].</li>
                    </ul>
                </li>
                <li><strong>Eredő folyadékmozgás [PPT: 58–60. dia]:</strong> A kapilláris <strong>első 2/3-án eredő filtráció</strong> (P<sub>eff</sub> ≈ +10 Hgmm), az <strong>utolsó 1/3-án eredő reabszorpció</strong> (P<sub>eff</sub> ≈ -9 Hgmm) zajlik [PPT: 59–60. dia]. A filtrált folyadék <strong>90%-a visszaszívódik</strong> a vénás szárba, a maradék <strong>10%-ot (~3 liter/nap, ~2 ml/perc) a nyirokrendszer</strong> szállítja el [PPT: 60. dia].</li>
            </ul>

            <!-- STARLING ERŐK SVG ÁBRA -->
            <div style="text-align: center; margin: 1.5rem 0;">
                <svg viewBox="0 0 650 180" style="max-width: 100%; height: auto; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
                    <rect x="40" y="65" width="570" height="50" fill="#1e293b" stroke="#64748b" stroke-width="2" rx="6"/>
                    <text x="110" y="95" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Artériás vég (Pc = 35)</text>
                    <text x="530" y="95" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Vénás vég (Pc = 15)</text>
                    
                    <!-- Filtráció nyíl -->
                    <path d="M 160 65 L 160 25" stroke="#22c55e" stroke-width="3"/>
                    <text x="235" y="42" fill="#22c55e" font-size="12" font-weight="bold">2/3 rész: FILTRÁCIÓ (Peff = +10 Hgmm)</text>

                    <!-- Reabszorpció nyíl -->
                    <path d="M 480 115 L 480 155" stroke="#facc15" stroke-width="3"/>
                    <text x="415" y="145" fill="#facc15" font-size="12" font-weight="bold" text-anchor="end">1/3 rész: REABSORPTIO (90%, Peff = -9 Hgmm)</text>
                    <text x="500" y="145" fill="#38bdf8" font-size="11" font-weight="bold">+ 10% NYIROK (~3 L/nap)</text>
                </svg>
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">59–60. Dia: A kapilláris menti filtráció és reabszorpció dinamikája [PPT: 59–60. dia].</div>
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                Az Oedema (vizenyő) kialakulásának 5 fő mechanizmusa [PPT: 61–68. dia]
            </h3>
            <p>Oedema akkor alakul ki, ha a szövetközti szabad víztartalom felszaporodik (az ujjbenyomatot megtartó, „pitting” oedema) [PPT: 61. dia]:</p>
            <ol>
                <li><strong>Megnövekedett nyomás a kapilláris artériás szárában [PPT: 62. dia]:</strong> Extrém hőség, szimpatikus tónus kiesése, értágítók, <strong>Beriberi-kór</strong> (B₁-vitamin hiány miatti arteriolatágulat) [PPT: 62. dia].</li>
                <li><strong>Megnövekedett nyomás a kapilláris vénás szárában [PPT: 63–65. dia]:</strong>
                    <ul>
                        <li><em>Lokális:</em> Vénás kompresszió vagy elzáródás, pl. <strong>mélyvénás thrombosis (DVT)</strong> hosszú repülőutak után, melynek legsúlyosabb szövődménye a <strong>tüdőembólia</strong> [PPT: 63–65. dia]!</li>
                        <li><em>Szisztémás:</em> <strong>Jobbszívfél-elégtelenség (JSZE)</strong> → a vér a nagyvérköri vénákban pang → alsó végtagi oedema, hasvízkór (ascites); <strong>Balszívfél-elégtelenség (BSZE)</strong> → a vér a kisvérkörben pang → életveszélyes <strong>tüdőoedema</strong> [PPT: 63, 71. dia]!</li>
                    </ul>
                </li>
                <li><strong>A plazma onkotikus nyomásának csökkenése (Hypoproteinaemia / Hypoalbuminaemia) [PPT: 66. dia]:</strong> Oka lehet súlyos <strong>éhezés (kwashiorkor)</strong>, <strong>májelégtelenség / cirrhosis</strong> (nincs albuminszintézis), vagy <strong>nephrosis szindróma</strong> (a vese átereszti az albumint a vizeletbe) [PPT: 66. dia].</li>
                <li><strong>Elégtelen nyirokelvezetés (Lymphoedema) [PPT: 67. dia]:</strong> A napi ~3 liter fehérjedús nyirok visszamarad; oka lehet parazitás fertőzés (<strong>Filariasis – Wuchereria bancrofti</strong> szúnyogcsípés által terjesztve → <em>elephantiasis</em>) vagy daganatsebészeti nyirokcsomó-eltávolítás (pl. <strong>emlőamputáció / mastectomia</strong> utáni karduzzanat) [PPT: 67. dia].</li>
                <li><strong>Kapilláris permeabilitás fokozódása [PPT: 68. dia]:</strong> Gyulladás, égés, allergiás reakció (pl. méhcsípés → hízósejtekből <strong>hisztamin</strong> szabadul fel → az endothelsejtek összehúzódnak, fehérjék jutnak az interstitiumba, megemelve a Π<sub>i</sub>-t) [PPT: 68. dia].</li>
            </ol>

            <!-- V. RÉSZ: A VÉNÁS KERINGÉS ÉS A CVP (69-78. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                V. RÉSZ: A Vénás Keringés és a Vénás Visszaáramlás (VR) [PPT: 69–78. dia]
            </h2>

            <p>A vénás visszaáramlás (Venous Return, VR) a jobb pitvarba percenként beérkező vér mennyisége (egyensúlyban megegyezik a PTF-fel). <strong>6 tényező befolyásolja [PPT: 71–77. dia]:</strong></p>
            <ol>
                <li><strong>Vénás tónus [PPT: 71. dia]:</strong> A vénák falában lévő simaizom szimpatikus (α₁) kontrakciója (venokonstrikció) mobilizálja a vért a raktárakból → ↑ VR [PPT: 71. dia].</li>
                <li><strong>A jobb szívfél pumpafunkciója [PPT: 71. dia]:</strong> JSZE esetén a pangás miatt emelkedik a centrális vénás nyomás [PPT: 71. dia].</li>
                <li><strong>Légzési pumpa [PPT: 72. dia]:</strong> <strong>Belégzéskor</strong> a mellűri (intrathoracalis) nyomás csökken (negatívabb lesz), a hasűri nyomás nő → a vér beszippantódik a mellkasba (↑ VR) [PPT: 72. dia]. <em>Korlát:</em> -20 Hgmm alatt a mellűri vénák összecsuklanak (kollabálnak) [PPT: 72. dia].</li>
                <li><strong>Gravitáció és testhelyzet [PPT: 73. dia]:</strong> Álló helyzetben a jobb pitvar alatt centiméterenként ~0,77 Hgmm-rel nő a hidrosztatikai nyomás (bokánál ~90 Hgmm!) [PPT: 73. dia]. Shockos betegben a lábak megemelése (<strong>Trendelenburg-helyzet</strong>) javítja a VR-t [PPT: 73, 77. dia]. A jobb pitvar felett a nyomás negatív: a <strong>sinus sagittalis superiorban -10 Hgmm</strong> (szubatmoszférikus!), ezért fej-nyaki vénás sérüléseknél/műtéteknél fennáll a halálos <strong>légembólia</strong> (5–100 ml levegő) veszélye [PPT: 73. dia]!</li>
                <li><strong>Vázizompumpa és vénabillentyűk [PPT: 74–75. dia]:</strong> A lábikra izmainak összehúzódása összepréseli a mélyvénákat, az egyirányú vénabillentyűk pedig csak felfelé engedik a vért (90 Hgmm-ről ~30 Hgmm-re csökkentve a bokanyomást) [PPT: 74. dia]. Billentyűelégtelenség esetén visszértágulat (<strong>varicositas</strong>) alakul ki [PPT: 75. dia]. <em>Klinikai tanács [PPT: 76. dia]:</em> Intenzív futás után tilos azonnal leülni vagy megállni, mert az izompumpa leállásával a vér az izmok tágult ereiben pang, leesik a VR és a koronária-perfúzió (kocogók szívinfarktusa) – levezető séta szükséges [PPT: 76. dia]!</li>
                <li><strong>Teljes perifériás ellenállás (TPR) [PPT: 76. dia]:</strong> Ha a TPR csökken (arteriolatágulat), a vér gyorsabban átzúdul a kapillárisokon a vénákba (↑ VR) [PPT: 76. dia].</li>
            </ol>
            <ul>
                <li><strong>Centrális Vénás Nyomás (CVP) [PPT: 77–78. dia]:</strong> Normál értéke <strong>-2 és +6 Hgmm</strong> között van (jól tükrözi a keringő vértérfogatot) [PPT: 77. dia]. Vérzésben/shockban csökken; JSZE-ben megemelkedik (+10 Hgmm felett a nyaki vénák tágultak, +15 Hgmm felett feszülnek) [PPT: 77–78. dia].</li>
            </ul>

            <!-- VI. RÉSZ: AZ ÉRTÓNUS ÖSSZETEVŐI ÉS VEGETATÍV BEIDEGZÉS (79-124. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                VI. RÉSZ: Az Értónus Összetevői és a Vegetatív Érbeidegzés [PPT: 79–124. dia]
            </h2>

            <ul>
                <li><strong>Az értónus 3 komponense [PPT: 82–87. dia]:</strong>
                    <ol>
                        <li><strong>Bazális tónus [PPT: 83–86. dia]:</strong> A vaszkuláris simaizomsejtek <strong>saját belső (intrinsic) kontrakciós aktivitása</strong>, amely idegi és hormonális hatásoktól teljesen független (még egy Petri-csészében izolált érszakaszon is fennáll, csak direkt simaizom-relaxánsokkal, pl. <strong>papaverinnel</strong> függeszthető fel) [PPT: 84–85. dia]. Különösen magas a koronáriákban és az agyi erekben (++++) [PPT: 90. dia].</li>
                        <li><strong>Nyugalmi vazokonstriktor tónus [PPT: 83, 87–88. dia]:</strong> Az ereket beidegző szimpatikus adrenerg rostokon nyugalomban is folyamatosan érkező akciós potenciálok által fenntartott enyhe érszűkület [PPT: 87. dia]. Különösen magas az <strong>apikális bőrerekben (++++)</strong>, a vázizomban (++) és a splanchnicus területen (+) – ezért ha ezeket az idegeket átvágjuk, értágulat következik be [PPT: 82, 88, 90. dia].</li>
                        <li><strong>Reflexes vazokonstriktor tónus [PPT: 83, 91. dia]:</strong> Cardiovascularis reflexek (pl. vérnyomásesés) aktiválódásakor a szimpatikus kisülési frekvencia fokozódása által kiváltott további érszűkület [PPT: 83, 91. dia].</li>
                    </ol>
                </li>
                <li><strong>Fontos szabály [PPT: 88. dia]:</strong> A <strong>paraszimpatikus idegrendszer NEM vesz részt a TPR szabályozásában</strong> (csak speciális területeket – pia mater, erektilis szövetek, nyálmirigyek – idegez be) [PPT: 88–89. dia].</li>
                <li><strong>A vegetatív idegrendszer 3 szimpatikus elrendezése [PPT: 92–97. dia]:</strong>
                    <ul>
                        <li><em>I. Szokásos elrendezés:</em> Preganglionáris (ACh → nAChR) → Posztganglionáris (<strong>Noradrenalin → α/β-receptorok</strong>) [PPT: 93. dia].</li>
                        <li><em>II. Ritka (szimpatikus kolinerg) elrendezés:</em> Preganglionáris (ACh → nAChR) → Posztganglionáris (<strong>Acetilkolin → M₃ muszkarinos receptor</strong>). Célpontok: <strong>verejtékmirigyek, m. arrector pili, és a vázizomzat egyes arteriolái (vazodilatáció!)</strong> [PPT: 94. dia].</li>
                        <li><em>III. Mellékvesevelő (kromaffin sejtek):</em> Módosult szimpatikus posztganglionáris sejtek, amelyek elvesztették axonjaikat; a preganglionáris rostok (ACh → nAChR) hatására <strong>adrenalint (80%) és noradrenalint (20%)</strong> ürítenek közvetlenül a véráramba [PPT: 95–96. dia].</li>
                    </ul>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                Adrenerg receptorok és farmakológiai vonatkozásaik [PPT: 98–124. dia]
            </h3>
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 8px; text-align: left;">Receptor</th>
                        <th style="padding: 8px; text-align: left;">G-fehérje & Jelátvitel</th>
                        <th style="padding: 8px; text-align: left;">Fő lokalizáció és hatás</th>
                        <th style="padding: 8px; text-align: left;">Agonisták / Antagonisták [PPT: 98–124. dia]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>α₁-receptor</strong></td>
                        <td><strong>G_q</strong> → PLC → ↑ IP₃ / DAG → ↑ [Ca²⁺]<sub>i</sub></td>
                        <td>Ér simaizom (bőr, splanchnicus, vese): <strong>vazokonstrikció</strong>; m. dilatator pupillae (mydriasis); záróizmok kontrakciója</td>
                        <td><em>Agonista:</em> Noradrenalin, Fenilefrin<br><em>Antagonista:</em> <strong>Prazosin</strong> (szelektív α₁), Fentolamin, Fenoxibenzamin [PPT: 112–113. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>α₂-receptor</strong></td>
                        <td><strong>G_i</strong> → ↓ AC → ↓ cAMP</td>
                        <td>Preszinaptikus idegvégződés (<strong>negatív visszacsatolás: gátolja a NA-felszabadulást</strong>); GI fal relaxációja; trombocita-aggregáció</td>
                        <td><em>Agonista:</em> <strong>Klonidin</strong> (centrális vérnyomáscsökkentő), Noradrenalin<br><em>Antagonista:</em> Yohimbin, Fentolamin [PPT: 114–115. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>β₁-receptor</strong></td>
                        <td><strong>G_s</strong> → ↑ AC → ↑ cAMP</td>
                        <td>Szívizom: <strong>pozitív kronotróp, dromotróp, inotróp, luzitróp</strong> hatások; JGA sejtek: <strong>reninszekréció ↑</strong></td>
                        <td><em>Agonista:</em> Izoproterenol, Adrenalin, Dobutamin<br><em>Antagonista:</em> <strong>Metoprolol, Atenolol</strong> (β₁-szelektív), Propranolol [PPT: 98–103. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>β₂-receptor</strong></td>
                        <td><strong>G_s</strong> → ↑ AC → ↑ cAMP</td>
                        <td>Simaizom relaxáció: <strong>bronchodilatatio</strong>, <strong>vazodilatáció</strong> (vázizom arteriolák, koronáriák), uterus és húgyhólyag relaxáció; glikogenolízis</td>
                        <td><em>Agonista:</em> <strong>Salbutamol</strong> (asztma), Adrenalin, Izoproterenol<br><em>Antagonista:</em> Propranolol (nem-szelektív – asztmában tilos!) [PPT: 104–107. dia]</td>
                    </tr>
                    <tr>
                        <td><strong>β₃-receptor</strong></td>
                        <td><strong>G_s</strong> → ↑ AC → ↑ cAMP</td>
                        <td>Zsírszövet: <strong>lipolízis</strong> és termogenezis; húgyhólyag detrusor izom relaxációja</td>
                        <td><em>Agonista:</em> Mirabegron (hiperaktív hólyag kezelése) [PPT: 108–109. dia]</td>
                    </tr>
                </tbody>
            </table>

            <!-- ÖSSZEFOGLALÓ -->
            <div style="background: var(--box-bg); border-left: 4px solid var(--accent); padding: 1.2rem; border-radius: 8px; margin-top: 2rem;">
                <h4 style="margin-top: 0; color: var(--primary);">Legfontosabb vizsgapontok ZH-ra:</h4>
                <ul>
                    <li><strong>Hemodinamika:</strong> <code>MAP = PTF × TPR</code>; <code>MAP = DP + 1/3 PP</code> [PPT: 24–25. dia]. Hagen–Poiseuille: ha <code>r</code> felére csökken, <code>R</code> <strong>16-szorosára nő</strong> [PPT: 28. dia].</li>
                    <li><strong>Reynolds-szám:</strong> <code>Re = v • D • ρ / η</code> (>2000 → turbulencia). Aortastenosisban D felére csökken → v 4x nő → Re 2x nő [PPT: 30. dia].</li>
                    <li><strong>Compliance és Pulzus:</strong> Vénás compliance 24x nagyobb (8x tágíthatóság × 3x befogadóképesség) [PPT: 40. dia]. Aortastenosis = <em>tardus et parvus</em> + szisztolés zörej [PPT: 44. dia]; Aortainsufficientia = <em>celer et altus</em> + diasztolés zörej + ↓↓ DP [PPT: 45, 47. dia]; Atherosclerosis = <em>celer et altus</em>, nincs zörej, ↑↑ SP [PPT: 46–47. dia].</li>
                    <li><strong>Starling-erők és Oedema:</strong> Onkotikus nyomás (28 Hgmm) 80%-át az <strong>albumin</strong> adja [PPT: 55. dia]. Filtráció (2/3) → Reabszorpció (1/3, 90%) + Nyirok (10%, ~3 L/nap) [PPT: 59–60. dia].</li>
                    <li><strong>Vénás keringés:</strong> Belégzés ↑ VR; sinus sagittalis superiorban <strong>-10 Hgmm</strong> (légembólia veszély!) [PPT: 72–73. dia]; izompumpa 90-ről 30 Hgmm-re csökkenti a bokanyomást [PPT: 74. dia].</li>
                    <li><strong>Értónus és Receptorok:</strong> Bazális tónus (intrinsic, pl. agy/koronária) + nyugalmi vazokonstriktor tónus (szimpatikus, pl. bőr) [PPT: 82, 90. dia]. α₁ (Gq, vazokonstrikció), α₂ (Gi, preszinaptikus gátlás), β₁ (Gs, szív + renin), β₂ (Gs, vazodilatáció + bronchodilatáció) [PPT: 98–115. dia].</li>
                </ul>
            </div>

        </div>
    `
});