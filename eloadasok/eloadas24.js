// eloadasok/eloadas24.js
window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-24",
    title: "24. Előadás: A keringési rendszer általános jellemzői, hemodinamika, artériás- és vénás keringés, mikrocirkuláció és az értónus",
    shortName: "Keringés alapjai, Hemodinamika & Értónus",
    html: `
        <div style="font-family: inherit; line-height: 1.75; color: var(--text);">

            <!-- I. RÉSZ: A KERINGÉSI RENDSZER ÁLTALÁNOS JELLEMZŐI (1-18. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 1rem;">
                I. RÉSZ: A Keringési Rendszer Általános Jellemzői és Szerkezete [PPT: 1–18. dia]
            </h2>

            <div style="background: var(--info-bg); border-left: 4px solid var(--primary-light); padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="margin-top: 0; color: var(--primary);">1. Epidemiológiai háttér és történeti áttekintés [PPT: 1–4. dia]</h3>
                <p>A szív- és érrendszeri (cardiovascularis) betegségek jelentik a vezető halálokot mind globálisan, mind hazánkban [PPT: 2–3. dia]:</p>
                <ul>
                    <li><strong>Globális adatok (2023) [PPT: 2. dia]:</strong> A világ összes halálozásának közel <strong>38,5%-át</strong> (16,6 millió fő) keringési betegségek okozzák – ezen belül az iszkémiás szívbetegség (9,6 millió) és a sztrók (6,2 millió) áll az élen, messze megelőzve a daganatos (15,2%) és a légzőszervi (13,4%) megbetegedéseket [PPT: 2. dia].</li>
                    <li><strong>Magyarországi helyzet (KSH, 2023) [PPT: 3. dia]:</strong> A 128 176 haláleset <strong>48%-a (61 517 fő)</strong> vezethető vissza a keringési rendszer betegségeire (iszkémiás szívbetegség: 23%, sztrók: 7,8%). Ez az arány jelentősen meghaladja a 32,7%-os uniós átlagot, aminek hátterében főként a magas dohányzási és elhízási arány áll [PPT: 3. dia].</li>
                </ul>
                <p style="margin-bottom: 0.3rem;"><strong>Történeti mérföldkövek [PPT: 4. dia]:</strong></p>
                <ul>
                    <li><strong>Andrea Cesalpino (1519–1603):</strong> Elsőként használta a <em>„circulatio”</em> (vérkeringés) kifejezést, és pontosan leírta a szívbillentyűk egyirányú szelepszerű működését (<em>Questiones Peripatheticae</em>, 1571) [PPT: 4. dia].</li>
                    <li><strong>William Harvey (1578–1657):</strong> A modern kísérletes élettan megalapítója. Egyszerű, leszorításos vénatesztekkel kísérletesen bizonyította, hogy a vénákban a vér kizárólag a szív felé áramlik, és felismerte a két zárt vérkört (<em>De Motu Cordis</em>, 1628) [PPT: 4. dia].</li>
                </ul>
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                2. A két vérkör összehasonlítása és a keringés feladatai [PPT: 5–8. dia]
            </h3>
            <p>A keringési rendszer lényegében egy ciklikusan működő szívó-nyomó pumpából (szív) és egy változó keresztmetszetű, elágazó, tágulékony csőrendszerből (véredények) áll [PPT: 5. dia]. Három fő egysége van [PPT: 6. dia]:</p>
            <ul>
                <li><strong>Nagyvérkör (szisztémás keringés):</strong> A bal kamrából indul (aorta) és a jobb pitvarban ér véget (vena cava superior/inferior) [PPT: 6. dia].</li>
                <li><strong>Kisvérkör (pulmonáris keringés):</strong> A jobb kamrából indul (truncus pulmonalis) és a bal pitvarban ér véget (venae pulmonales) [PPT: 6. dia].</li>
                <li><strong>Nyirokkeringés:</strong> Nyitott rendszer, amely a szövetközti térből a nyirokkapillárisokon és a fő nyirokvezetékeken át a nagyvénákba (angulus venosus) juttatja vissza a filtrált folyadék- és fehérjefelesleget [PPT: 6. dia].</li>
            </ul>

            <p><strong>Miért ugyanannyi a két vérkör perctérfogata, miközben a kisvérkörben töredéke a nyomás?</strong><br>
            Mivel a két vérkör <strong>sorba van kapcsolva</strong>, a jobb és a bal kamrának percenként hajszálpontosan ugyanannyi vért (5,0–5,5 litert) kell átpumpálnia – különben az egyik vérkörben rövid idő alatt életveszélyes vértorlódás alakulna ki [PPT: 7, 14. dia]. A kisvérköri erek azonban rövidebbek, tágabbak és sokkal kisebb az ellenállásuk (kb. egytizede a nagyvérkörinek), így ugyanehhez az áramláshoz a jobb kamrának sokkal kisebb nyomást kell kifejtenie [PPT: 7, 26. dia]:</p>

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
                        <td>120 Hgmm / &gt;5 Hgmm</td>
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
                        <td>91 Hgmm (93 − 2 Hgmm)</td>
                        <td>6 Hgmm (14 − 8 Hgmm)</td>
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

            <p><strong>A keringési rendszer 3 fő élettani feladata [PPT: 8. dia]:</strong></p>
            <ol>
                <li><strong>Anyagszállítás:</strong> A tápanyagok (O₂, glükóz, aminosavak, zsírsavak) eljuttatása a sejtekhez, valamint az anyagcsere-végtermékek (CO₂, karbamid, tejsav) elszállítása a kiválasztó szervekhez [PPT: 8. dia].</li>
                <li><strong>Homeosztázis fenntartása:</strong> Az extracelluláris folyadéktér térfogatának, ozmolalitásának és ionösszetételének szabályozása a vesék folyamatos átáramoltatásán keresztül [PPT: 8. dia].</li>
                <li><strong>Integráció és védelem:</strong> Hormonok szállítása a célszervekhez, az immunrendszer sejtjeinek és fehérjéinek keringtetése, valamint a hőszabályozás (hőleadás a bőr erein keresztül) [PPT: 8. dia].</li>
            </ol>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                3. Az érfal szerkezete, sebesség- és nyomásviszonyok, perctérfogat-megoszlás [PPT: 9–18. dia]
            </h3>

            <p><strong>Az erek szövettani felépítése és funkcionális különbségei [PPT: 9–10. dia]:</strong></p>
            <ul>
                <li><strong>Tunica intima (belső réteg):</strong> Egyrétegű laphám (<strong>endothelium</strong>) és a <em>membrana elastica interna</em>. Az endothel nem csupán passzív bélés: fontos vazoaktív anyagokat (értágító nitrogén-monoxidot [NO], érszűkítő endothelin-1-et) és véralvadásgátló faktorokat termel [PPT: 9. dia].</li>
                <li><strong>Tunica media (középső réteg):</strong> Körkörösen elrendeződő <strong>simaizomsejtek</strong> és elasztikus rostok alkotják. A simaizmok összehúzódása (vazokonstrikció) és elernyedése (vazodilatáció) határozza meg az ér sugarát és ezzel az ellenállást [PPT: 9. dia].</li>
                <li><strong>Tunica externa / adventitia (külső réteg):</strong> Külső kötőszövetes tok, amely rögzíti az eret a környezetéhez; ebben futnak az eret beidegző vazomotor idegrostok és a nagyerek saját falát tápláló kis erek (<em>vasa vasorum</em>) [PPT: 9. dia].</li>
                <li><strong>Értípusok szerkezeti eltérései [PPT: 10. dia]:</strong> Az artériák fala a nagy nyomás miatt vastag, izmos és elasztikus; a vénák fala vékonyabb, kevesebb simaizmot tartalmaz, lumenük viszont tágabb. A <strong>kapillárisok</strong> falából teljesen hiányzik a tunica media és externa: mindössze egyetlen réteg endothelsejtből és alapmembránból állnak, ami minimalizálja a diffúziós távolságot [PPT: 10. dia].</li>
            </ul>

            <p><strong>Miért pont a kapillárisokban a leglassabb a véráramlás? (Folytonossági egyenlet) [PPT: 11, 48. dia]:</strong><br>
            A folytonossági egyenlet kimondja, hogy zárt csőrendszerben az időegység alatt átáramló térfogat (<em>Q</em>) minden keresztmetszetben állandó: <code>Q = A · v</code> (ahol <em>A</em> az összkeresztmetszet, <em>v</em> az áramlási sebesség). Ebből következik, hogy az áramlási sebesség fordítottan arányos az adott érszakasz összkeresztmetszetével: <code>v ∼ 1 / A</code> [PPT: 11. dia].</p>
            <ul>
                <li>Míg az aorta keresztmetszete mindössze <strong>2,5 cm²</strong> (itt a sebesség ~40–50 cm/s), addig a több milliárd kapilláris együttes összkeresztmetszete eléri a <strong>~4 500 cm²-t</strong> (közel 2000-szerese az aortáénak!) [PPT: 11. dia].</li>
                <li>Emiatt a vér áramlása a kapillárisokban lelassul <strong>~0,1–1 cm/s-ra</strong>, ami bőséges időt biztosít a gázok és tápanyagok kicserélődésére [PPT: 11, 48. dia]. A venulák és vénák egyesülésével az összkeresztmetszet ismét csökken, így a vér áramlási sebessége újra felgyorsul a szív felé [PPT: 11. dia].</li>
                <li>Az átlagos keringési idő nyugalomban kb. <strong>1 perc</strong> (a legrövidebb a szív saját ereiben, a koronáriákban: ~10 mp) [PPT: 11. dia].</li>
            </ul>

            <p><strong>Nyomásviszonyok és az érpálya funkcionális felosztása [PPT: 12–13, 18. dia]:</strong></p>
            <ul>
                <li><strong>Elasztikus nagyartériák (Szélkazánerek):</strong> Az aortában és a nagy artériákban a vérnyomás a szívciklussal szinkronban pulzál (120/80 Hgmm) [PPT: 7, 12. dia].</li>
                <li><strong>Arteriolák = Rezisztenciaerek:</strong> Az arteriolák vastag simaizomfallal és szűk lumennel rendelkeznek. Ezen a szakaszon történik a keringési rendszer <strong>legnagyobb nyomásesése (~50–60 Hgmm-es zuhanás!)</strong>, és <strong>itt tűnik el a pulzálás</strong> – a kapillárisokba már egyenletes, folyamatos véráram lép be [PPT: 12, 18. dia].</li>
                <li><strong>Kapillárisok = Kicserélődési (Exchange) erek:</strong> Nyugalomban a teljes vértérfogat mindössze <strong>5%-át</strong> tartalmazzák, de hatalmas felületükön zajlik a teljes anyagcsere [PPT: 12–13. dia].</li>
                <li><strong>Vénák és venulák = Kapacitáserek (Vérraktárak):</strong> Nagy tágulékonyságuk miatt nyugalomban a teljes vérmennyiség <strong>60%-a</strong> itt található (emellett 15% a szisztémás artériákban, 12% a tüdőerekben, 8% a szívben) [PPT: 13, 18. dia].</li>
            </ul>

            <p><strong>Kapcsolási elrendezés, perctérfogat-megoszlás és vérraktárak [PPT: 14–17. dia]:</strong></p>
            <ul>
                <li><strong>Párhuzamos kapcsolás a nagyvérkörben:</strong> A nagyvérköri szervek egymással <strong>párhuzamosan</strong> vannak kapcsolva (<code>1/R_total = 1/R₁ + 1/R₂ + ...</code>) [PPT: 14. dia]. Ennek két óriási előnye van: (1) minden szerv friss, artériás vért kap, és (2) egy szerv helyi értágulata (pl. munkavégző vázizom) úgy csökkenti a teljes perifériás ellenállást (TPR), hogy közben nem rontja a többi szerv vérellátását [PPT: 14. dia].</li>
                <li><strong>Nyugalmi PTF-eloszlás (5–5,5 L/perc) vs. Fizikai munka [PPT: 14–15. dia]:</strong> Nyugalomban a vese (20–25%) és a splanchnicus/GI terület (20–25%) kapja a legtöbb vért; a vázizom részesedése 15–20%, az agyé 13–15%, a szívé 4–5%, a bőré 3–6%, a csontoké és zsírszöveté 10–15% [PPT: 14–15. dia]. Intenzív fizikai munkában a PTF akár 25 L/percig nő, és a véráramlás átrendeződik (<em>redisztribúció</em>): a vázizmok részesedése elérheti a 72–80%-ot, míg a splanchnicus és veseerek összeszűkülnek [PPT: 15. dia].</li>
                <li><strong>A szervezet vérraktárai [PPT: 17. dia]:</strong> Szükség esetén (pl. vérvesztéskor) szimpatikus izgalomra vért képesek a keringésbe juttatni: <strong>Lép</strong> (~100 ml; összehúzódása vvt-dús vért présel ki, így 1–2%-kal megemelheti a hematokritot), <strong>Máj</strong> (200–300 ml), <strong>Nagy hasi vénák</strong> (~300 ml), <strong>Bőr vénás plexusai</strong> (200–300 ml), <strong>Szív</strong> (50–100 ml szisztolés rezerv) és <strong>Tüdő</strong> (100–200 ml) [PPT: 17. dia].</li>
            </ul>

            <!-- II. RÉSZ: HEMODINAMIKAI ALAPOK (19-33. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                II. RÉSZ: Hemodinamikai Alapok – A Véráramlás Fizikai Törvényei [PPT: 19–33. dia]
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. A hidrodinamikai Ohm-törvény és a vérnyomás meghatározói [PPT: 20–25. dia]
            </h3>
            <p>Az elektromosságból ismert Ohm-törvény (<code>I = U / R</code>) pontosan alkalmazható a csőrendszerben áramló folyadékokra is [PPT: 21. dia]:</p>
            <div style="background: var(--box-bg); border-left: 4px solid var(--primary); padding: 1rem; border-radius: 6px; margin: 0.8rem 0;">
                <strong><code>Q = ΔP / R</code></strong> &nbsp;→&nbsp; a teljes nagyvérkörre felírva: &nbsp;<strong><code>MAP = PTF × TPR</code></strong> &nbsp;(ahol <code>PTF = SV × HR</code>) [PPT: 21–22, 24. dia]
            </div>
            <ul>
                <li><strong>Mit jelent ez a gyakorlatban?</strong> Az áramlást (<em>Q</em>, azaz a perctérfogatot) az érpálya két vége közötti nyomáskülönbség (<code>ΔP = P_Aorta − P_vena cava</code>) hajtja előre, és az érpálya ellenállása (<em>R</em>, azaz a TPR) fékezi [PPT: 22. dia]. Mivel a jobb pitvarba torkolló vena cava nyomása közel 0 Hgmm (2–3 Hgmm), a hajtóerő gyakorlatilag megegyezik az artériás középnyomással (<strong>MAP</strong>) [PPT: 7, 22, 24. dia].</li>
                <li><strong>Kiemelt vizsgaelv (Ok-okozati irány!) [PPT: 24. dia]:</strong> A szervezetben <strong>nincs</strong> olyan mechanizmus, amely a vérnyomást (MAP) önmagában, közvetlenül állítaná át! A vérnyomás mindig egy <em>következményes változó</em>: kizárólag a <strong>perctérfogat (PTF)</strong> és/vagy a <strong>teljes perifériás ellenállás (TPR)</strong> megváltoztatásával módosítható [PPT: 24. dia].</li>
                <li><strong>Hogyan számoljuk ki az artériás középnyomást (MAP)? [PPT: 25. dia]:</strong><br>
                Nyugalomban a diasztolé kétszer hosszabb ideig tart (2/3 rész), mint a szisztolé (1/3 rész), ezért a MAP nem a szisztolés (SP) és a diasztolés (DP) nyomás egyszerű számtani átlaga, hanem közelebb esik a diasztolés értékhez [PPT: 25. dia]:<br>
                <strong><code>MAP = DP + 1/3 · PP</code></strong> &nbsp;(ahol <code>PP = SP − DP</code>, a pulzusnyomás) [PPT: 25. dia].<br>
                <em>Példa:</em> 120/80 Hgmm-es vérnyomásnál a PP = 40 Hgmm, így a <code>MAP = 80 + 40/3 ≈ 93 Hgmm</code> [PPT: 7, 25. dia].</li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                2. A Hagen–Poiseuille-törvény részletes magyarázata [PPT: 26–28, 31–32. dia]
            </h3>
            <p>A Hagen–Poiseuille-törvény megmutatja, hogy pontosan milyen fizikai tényezőktől függ egy cső (ér) áramlási ellenállása (<em>R</em>), illetve az átáramló folyadék mennyisége (<em>Q</em>) [PPT: 28. dia]:</p>
            <div style="background: var(--box-bg); border-left: 4px solid var(--primary); padding: 1rem; border-radius: 6px; margin: 0.8rem 0;">
                <strong><code>R = (8 · η · L) / (π · r⁴)</code></strong> &nbsp;&nbsp;és az Ohm-törvénybe behelyettesítve:&nbsp;&nbsp; <strong><code>Q = (ΔP · π · r⁴) / (8 · η · L)</code></strong> [PPT: 28. dia]
            </div>
            <p>Nézzük meg egyesével a képletben szereplő változók élettani és kórélettani jelentőségét:</p>
            <ol>
                <li><strong>Érhossz (L) – Egyenes arányosság (<code>R ∼ L</code>) [PPT: 26. dia]:</strong><br>
                Minél hosszabb az ér, annál nagyobb felületen súrlódik a vér az érfalhoz, így nő az ellenállás. Rövid távon (akutan) a szervezet nem tudja változtatni az erek hosszát, de ez magyarázza részben a rövidebb kisvérkör kisebb ellenállását [PPT: 26. dia].<br>
                <em>Kórélettani vonatkozás:</em> Hosszú távon az elhízás drasztikusan megnöveli az érhálózat hosszát: <strong>minden 0,5 kg zsírszövet kb. 320 km új vérér képződését (angiogenezis) indukálja</strong> [PPT: 26. dia]. Ez megemeli a TPR-t és a szükséges perctérfogatot, ami tartós magas vérnyomáshoz (hypertoniához) vezet [PPT: 26. dia].</li>

                <li><strong>Viszkozitás (η) – Egyenes arányosság (<code>R ∼ η</code>) [PPT: 27, 31–32. dia]:</strong><br>
                A viszkozitás a folyadék „belső súrlódását” (sűrűségét/nyúlósságát) jelenti. A vér viszkozitása kb. 3–4-szerese a vízének, és két dologtól függ: elsősorban a <strong>hematokrittól (Hct</strong>, a vörösvértestek térfogataránya), másodsorban a plazmafehérjéktől (főként a fibrinogéntől és globulinoktól, amelyek gyulladásban felszaporodnak) [PPT: 27, 31. dia].
                    <ul>
                        <li><em>Hematokrit-hatás [PPT: 27. dia]:</em> Normál Hct (~42–45%) felett a viszkozitás exponenciálisan ugrik meg. <strong>Polycythaemiában</strong> vagy tiltott <strong>EPO-dopping</strong> használatakor a túl sok vvt miatt a vér „besűrűsödik”, az ellenállás (TPR) meredeken nő, ami súlyosan túlterheli a szívet és trombózisveszélyt okoz [PPT: 27. dia].</li>
                        <li><em>A vér nem-newtoni folyadék [PPT: 31–32. dia]:</em> A víz viszkozitása állandó (newtoni folyadék), a vér viszkozitása azonban függ az áramlási sebességtől és az ér átmérőjétől [PPT: 31. dia]:
                            <br>– <strong>Lassú áramlásnál (rouleaux-képződés):</strong> Alacsony áramlási sebességnél a vörösvértestek pénztekercsszerűen összetapadnak, ami megnöveli a viszkozitást [PPT: 31. dia].
                            <br>– <strong>Fåhræus–Lindqvist-effektus [PPT: 32. dia]:</strong> Nagyon szűk erekben (&lt;0,3–1 mm átmérő, azaz az arteriolákban és kapillárisokban) a vvt-k az ér középvonalába (tengelyébe) rendeződnek (<em>axiális migráció</em>), míg az érfal mentén egy vékony, sejtmentes plazmaréteg alakul ki. Ennek köszönhetően az erekben a vér <strong>látszólagos viszkozitása meredeken csökken</strong>, ami megkönnyíti a mikrokeringést [PPT: 32. dia]!</li>
                    </ul>
                </li>

                <li><strong>Érsugár (r) – A negyedik hatvány törvénye (<code>R ∼ 1 / r⁴</code>) [PPT: 28. dia]:</strong><br>
                Ez a keringésélettan legfontosabb összefüggése! Mivel az érsugár a <strong>negyedik hatványon</strong> szerepel a nevezőben, már egy egészen apró átmérőváltozás is óriási hatással van az ellenállásra és a vérátáramlásra [PPT: 28. dia]:
                    <ul>
                        <li>Ha egy arteriola sugara a <strong>felére csökken</strong> (<em>r → 0,5 r</em>), akkor az ellenállása <strong>2⁴ = 16-szorosára nő</strong> (és adott nyomás mellett az átáramló vér mennyisége az <strong>1/16-odára esik vissza</strong>) [PPT: 28. dia]!</li>
                        <li>Ha az érsugár a <strong>kétszeresére nő</strong> (<em>r → 2 r</em>), az ellenállás az <strong>1/16-odára csökken</strong>, és 16-szor több vér áramlik át rajta [PPT: 28. dia].</li>
                    </ul>
                Ezért az <strong>arteriolák simaizomzatának tónusváltozása</strong> a szervezet leggyorsabb és leghatékonyabb eszköze a véráramlás és a vérnyomás szabályozására [PPT: 12, 28. dia].</li>
            </ol>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                3. Lamináris és Turbulens áramlás, a Reynolds-szám [PPT: 29–33. dia]
            </h3>
            <ul>
                <li><strong>Lamináris (réteges) áramlás [PPT: 29. dia]:</strong> Normál körülmények között a vér koncentrikus hengeres rétegekben, párhuzamosan áramlik. Sebességprofilja parabolikus: az érfalhoz tapadó külső réteg sebessége közel nulla, míg az ér tengelyében (közepén) áramló rétegé maximális (a vvt-k is ide sodródnak). Ez az áramlás <strong>hangtalan és energiatakarékos</strong> (<code>Q ∼ ΔP</code>) [PPT: 29, 33. dia].</li>
                <li><strong>Turbulens (örvénylő) áramlás és a Reynolds-szám (Re) [PPT: 29–30. dia]:</strong> Ha az áramlás felgyorsul vagy akadályba ütközik, a rétegek összekeverednek, örvények keletkeznek. Ezt a dimenzió nélküli <strong>Reynolds-szám</strong> jósolja meg [PPT: 30. dia]:<br>
                <strong><code>Re = (v · D · ρ) / η</code></strong> &nbsp;(<em>v</em>: átlagos áramlási sebesség, <em>D</em>: érátmérő, <em>ρ</em>: vér sűrűsége, <em>η</em>: viszkozitás) [PPT: 30. dia].<br>
                Ha <strong>Re &gt; 2000–2200</strong>, az áramlás turbulenssé válik, ami hallható rezgéseket (szívzörejeket, érszűkület feletti zörejeket, illetve vérnyomásméréskor a <em>Korotkov-hangokat</em>) kelt [PPT: 29–30. dia].</li>
                <li><strong>Klinikai buktató a vizsgán (Aortastenosis) [PPT: 30. dia]:</strong> Első ránézésre azt gondolhatnánk, hogy ha az aortabillentyű átmérője (<em>D</em>) a felére szűkül, akkor a képlet számlálója csökken, így <em>Re</em> is csökken. Ez azonban téves! Mivel a szűkületen ugyanannyi vérnek kell átpréselődnie, a folytonossági egyenlet (<code>v ∼ 1/A ∼ 1/D²</code>) miatt az átmérő felére csökkenése <strong>negyedére csökkenti a keresztmetszetet</strong>, ezért az áramlási sebesség (<em>v</em>) a <strong>4-szeresére nő</strong>! Így a számlálóban <code>4 × 0,5 = 2</code> lesz, tehát <strong>a Reynolds-szám megduplázódik</strong>, és hangos szisztolés zörej hallható [PPT: 30, 44. dia]! Súlyos vérszegénységben (<strong>anaemia</strong>) szintén gyakori a turbulens szívzörej, mert a kevés vvt miatt csökken a viszkozitás (<em>η ↓</em>, a nevező kisebb lesz) [PPT: 30. dia].</li>
                <li><strong>Miért káros a turbulencia a szívnek? [PPT: 33. dia]:</strong> Turbulens áramlásnál az örvények felemésztik a mozgási energiát, ezért az áramlás már csak a nyomáskülönbség négyzetgyökével arányos (<code>Q ∼ √ΔP</code>). Ez azt jelenti, hogy ugyanolyan véráramlás fenntartásához a szívnek sokkal nagyobb nyomást és munkát kell kifejtenie [PPT: 33. dia].</li>
            </ul>

            <!-- III. RÉSZ: AZ ARTÉRIÁS KERINGÉS ÉS A PULZUS (34-47. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                III. RÉSZ: Az Artériás Keringés, Compliance és a Pulzushullám [PPT: 34–47. dia]
            </h2>

            <ul>
                <li><strong>Szélkazán-funkció (Windkessel-jelenség) [PPT: 35–38. dia]:</strong> A bal kamra szakaszosan működik: csak a szisztolé alatt (a szívciklus kb. 1/3-ában) pumpál vért az aortába [PPT: 37–38. dia]. Az aorta és a nagyartériák falában lévő bőséges elasztikus rostok a szisztolé alatt kitágulva „elraktározzák” a szív által közölt mozgási energia egy részét rugalmas (helyzeti) energiaként. Majd a diasztolé alatt (a ciklus 2/3-ában), amikor az aortabillentyű bezárul, a kitágult érfal rugalmasan összehúzódik, és továbbnyomja a vért a periféria felé [PPT: 35–38. dia].<br>
                <em>Mi történne, ha az aorta fala merev lenne?</em> Diasztoléban teljesen leállna a véráramlás, a szisztolés nyomás extrém magasra szökne, a szív munkája pedig megduplázódna [PPT: 36. dia]. A szélkazán-funkció tehát a szakaszos kamrai pumpálást <strong>folyamatos perifériás véráramlássá</strong> alakítja [PPT: 35, 38. dia].</li>

                <li><strong>Compliance (tágulékonyság, C) és Késleltetett Compliance [PPT: 39–41. dia]:</strong>
                    <ul>
                        <li><strong>Definíció:</strong> <code>C = ΔV / ΔP</code>, azaz megmutatja, hogy egységnyi nyomásemelkedés (ΔP) mekkora térfogatnövekedést (ΔV) hoz létre az érben [PPT: 39. dia]. Érvényes a következő összefüggés is: <code>Compliance = Tágíthatóság × Befogadóképesség</code> [PPT: 40. dia].</li>
                        <li><strong>Vénás vs. Artériás compliance [PPT: 40. dia]:</strong> A vénák compliance-e <strong>24-szer nagyobb</strong> az artériákénál, mert a vénák fala <strong>8-szor tágíthatóbb</strong>, és alapvető térfogatuk (befogadóképességük) is <strong>3-szor nagyobb</strong> (<code>8 × 3 = 24</code>) [PPT: 40. dia]. Ezért képesek a vénák nagy mennyiségű vért eltárolni minimális nyomásemelkedés mellett [PPT: 13, 40. dia].</li>
                        <li><strong>Késleltetett compliance (Stress-relaxáció / Plaszticitás) [PPT: 41. dia]:</strong> Ha egy érszakaszba hirtelen nagy mennyiségű folyadékot/vért juttatunk (pl. vértranszfúzió), a nyomás először hirtelen megugrik, majd 10–30 perc alatt fokozatosan visszaesik a normál szintre – anélkül, hogy folyadék távozott volna. Ennek oka, hogy az érfal simaizomsejtjei átrendezik a hosszukat (relaxálnak) az új térfogathoz. Fordítva is működik: nagy vérvesztéskor az erek simaizmai „ráfeszülnek” a lecsökkent vértérfogatra, így segítve a vérnyomás fenntartását [PPT: 41. dia].</li>
                    </ul>
                </li>

                <li><strong>Rugalmas cső nyomás-átáramlás diagramja [PPT: 42. dia]:</strong> Egy merev üveg- vagy acélcsőben az áramlás lineárisan (egyenesen arányosan) nő a nyomáskülönbséggel, és már a legkisebb nyomásnál megindul. Ezzel szemben az élő, rugalmas vérérben létezik egy ún. <strong>kritikus záródási nyomás</strong> (kb. 15–20 Hgmm): ez alatt a külső szöveti nyomás összenyomja az eret, így az áramlás teljesen megszűnik. Efölött viszont a nyomás emelkedése egyre jobban kitágítja az eret, így az áramlás (a Poiseuille-törvény <code>r⁴</code> hatása miatt) nem lineárisan, hanem <strong>exponenciálisan meredeken</strong> emelkedik [PPT: 42. dia].</li>

                <li><strong>A centrális pulzushullám szakaszai és a pulzus tapintási jellemzői [PPT: 43–44. dia]:</strong>
                    <ul>
                        <li><em>A pulzushullám részei [PPT: 43. dia]:</em> (1) Meredeken felszálló <strong>anachrot szár</strong> (gyors kamrai ejekció); (2) Leszálló <strong>catachrot szár</strong> (az ejekció lassulása és a nyomásesés); (3) <strong>Incisura</strong> (éles bevágás a leszálló száron, amely pontosan az <strong>aortabillentyű záródásának</strong> pillanatát jelzi); (4) <strong>Dichrot hullám</strong> (a bezárult aortabillentyűről visszaverődő, az aorta elasztikus visszarúgása által keltett másodlagos hullám) [PPT: 43. dia].</li>
                        <li><em>A pulzus 6 klinikai tapintási jellemzője [PPT: 44. dia]:</em> Rhythmicitás (szabályos = <em>rhythmicus</em> / szabálytalan = <em>arrhythmiás</em>), Frekvencia (szapora = <em>frequens</em> / ritka = <em>rarus</em>), Amplitúdó/nagyság (magas = <em>altus</em> / alacsony = <em>parvus</em>), Meredekség/lefolyás (gyorsan emelkedő-eső = <em>celer</em> / lassan emelkedő-eső = <em>tardus</em>), Elnyomhatóság (kemény = <em>durus</em> / lágy = <em>mollis</em>), Equalitás (a két oldalon egyforma = <em>aequalis</em>) [PPT: 44. dia].</li>
                    </ul>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                Klinikai kórképek pulzus- és vérnyomásváltozásai [PPT: 44–47. dia – Kiemelt vizsgatéma!]
            </h3>
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 8px; text-align: left;">Kórkép</th>
                        <th style="padding: 8px; text-align: left;">Kórélettani mechanizmus</th>
                        <th style="padding: 8px; text-align: left;">Vérnyomás &amp; Pulzusnyomás (PP)</th>
                        <th style="padding: 8px; text-align: left;">Pulzus &amp; Hallgatózási lelet</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Aortastenosis</strong><br><em>(Billentyűszűkület)</em> [PPT: 44. dia]</td>
                        <td>A beszűkült szájadékon a bal kamra csak lassan és nehezen tudja kipréselni a vért; a verőtérfogat (SV) csökken [PPT: 44. dia].</td>
                        <td><strong>↓ SP</strong> (alacsonyabb szisztolés)<br><strong>= DP</strong> (változatlan diasztolés)<br>→ <strong>Szűk PP (↓ PP)</strong> [PPT: 44. dia]</td>
                        <td><strong>Pulsus TARDUS et PARVUS</strong> (lassan emelkedő és alacsony hullám) + hangos <strong>szisztolés zörej</strong> (magas Reynolds-szám!) [PPT: 30, 44. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Aortainsufficientia</strong><br><em>(Billentyűelégtelenség)</em> [PPT: 45, 47. dia]</td>
                        <td>Diasztoléban a billentyű nem zár, a vér nagy része visszaáramlik a bal kamrába (regurgitáció). A megnőtt kamrai térfogat (EDV) a Frank–Starling-törvény miatt fokozott SV-t eredményez [PPT: 45. dia].</td>
                        <td><strong>↑ SP</strong> (erősebb kamrai kontrakció)<br><strong>↓↓ DP</strong> (a visszaáramlás miatt drasztikusan zuhan!)<br>→ <strong>Extrém széles PP (↑↑ PP)</strong> [PPT: 45, 47. dia]</td>
                        <td><strong>Pulsus CELER et ALTUS</strong> (gyorsan felcsapó és magas, ún. „peckelő” pulzus) + jellegzetes <strong>diasztolés zörej</strong> [PPT: 45, 47. dia]</td>
                    </tr>
                    <tr>
                        <td><strong>Atherosclerosis</strong><br><em>(Érelmeszesedés, csökkent compliance)</em> [PPT: 46–47. dia]</td>
                        <td>Az aorta fala elmeszesedik, elveszíti rugalmasságát (szélkazán-funkció kiesik), így képtelen tompítani a szisztolés nyomáslökést [PPT: 46. dia].</td>
                        <td><strong>↑↑↑ SP</strong> (extrém magas szisztolés)<br><strong>= / enyhén ↑ DP</strong><br>→ <strong>Széles PP (↑ PP)</strong> [PPT: 46–47. dia]</td>
                        <td><strong>Pulsus CELER et ALTUS</strong> (gyors, magas hullám a merev fal miatt), de <strong>NINCS diasztolés zörej</strong> (a billentyű jól zár!) [PPT: 46–47. dia]</td>
                    </tr>
                </tbody>
            </table>

            <!-- IV. RÉSZ: MICROCIRCULATIO, STARLING-ERŐK ÉS OEDEMA (48-68. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                IV. RÉSZ: A Microcirculatio, a Starling-erők és az Oedema Kórélettana [PPT: 48–68. dia]
            </h2>

            <ul>
                <li><strong>A kapilláriságy felépítése [PPT: 49. dia]:</strong> Az <em>arteriola</em> a <em>metarteriolába</em> folytatódik, amelyből a valódi kapillárisok ágaznak le. A leágazásoknál található simaizomgyűrűk, a <strong>prekapilláris szfinkterek</strong> szabályozzák, hogy éppen mennyi kapilláris legyen nyitva (működésüket elsősorban a szövetek helyi anyagcseretermékei, pl. az O₂-hiány irányítják) [PPT: 49. dia]. A szervezetben 10–40 milliárd kapilláris van, teljes hosszuk ~100 000 km, cserefelületük 500–700 m², és a testben egyetlen sejt sincs 25 μm-nél távolabb egy működő kapilláristól [PPT: 49. dia].</li>
                <li><strong>Anyagtranszport a kapillárisfalon át [PPT: 50–51. dia]:</strong>
                    <ol>
                        <li><em>Diffúzió:</em> A legfontosabb mechanizmus a légzési gázok (O₂, CO₂), a glükóz, az ionok és a zsíroldékony molekulák kicserélődésében (koncentrációgradiens mentén) [PPT: 50. dia].</li>
                        <li><em>Vesicularis transzport (transcytosis):</em> Nagy molekulatömegű fehérjék átjuttatása endothel-vesiculák segítségével [PPT: 50. dia].</li>
                        <li><em>Tömegáramlás (Bulk flow – filtráció és reabszorpció):</em> Nyomáskülönbségek hatására történő egyirányú víz- és oldottanyag-áramlás a sejtek közötti pórusokon. Ennek nem a sejtek táplálása a fő szerepe, hanem a <strong>plazma és a szövetközti (intersticiális) tér közötti folyadékeloszlás szabályozása</strong> [PPT: 50. dia].</li>
                    </ol>
                </li>
                <li><strong>Kapilláristípusok [PPT: 51. dia]:</strong> (1) <em>Folyamatos (continuous):</em> szoros sejtkapcsolások (pl. vázizom, tüdő, és a legszorosabb formája a vér-agy gátban); (2) <em>Fenesztrált (ablakos):</em> pórusokkal áttört endothel a gyors folyadék- és tápanyagcseréhez (veseglomerulusok, bélbolyhok, endokrin mirigyek); (3) <em>Diszkontinuus / Szinuszoid:</em> nagy rések az endothelsejtek között, még a fehérjék és vérsejtek is átjutnak (máj, lép, vörös csontvelő) [PPT: 51. dia].</li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                A 4 Starling-erő és a folyadékmozgás egyensúlya [PPT: 52–60. dia]
            </h3>
            <p>A kapillárisfalon keresztüli folyadékmozgás irányát és mértékét négy nyomásérték – a <strong>Starling-erők</strong> – egyenlege határozza meg [PPT: 52, 57. dia]:</p>
            <div style="background: var(--box-bg); border-left: 4px solid var(--primary); padding: 1rem; border-radius: 6px; margin: 0.8rem 0;">
                <strong><code>P_eff = (P_c − P_i) − (Π_c − Π_i)</code></strong> &nbsp;&nbsp;(ha <code>P_eff &gt; 0</code> → <strong>filtráció</strong> kifelé; ha <code>P_eff &lt; 0</code> → <strong>reabszorpció</strong> befelé) [PPT: 57–58. dia]
            </div>
            <ul>
                <li><strong>1. P<sub>c</sub> (Kapilláris hidrosztatikai nyomás – kifelé nyomja a vizet):</strong> Ez az <strong>egyetlen erő, amely jelentősen változik</strong> a kapilláris hossza mentén! Az artériás végen kb. <strong>30–35 Hgmm</strong>, míg a vénás végen az áramlási ellenállás miatt leesik kb. <strong>10–15 Hgmm-re</strong> [PPT: 59. dia].</li>
                <li><strong>2. P<sub>i</sub> (Intersticiális hidrosztatikai nyomás):</strong> Laza kötőszövetben a nyirokerek szívó hatása miatt enyhén negatív (<strong>-1 – -3 Hgmm</strong>), tehát valójában nem visszanyomja a vizet, hanem enyhe szívó hatásával <em>segíti</em> a filtrációt [PPT: 53. dia].</li>
                <li><strong>3. Π<sub>c</sub> (Plazma kolloidozmotikus / onkotikus nyomás – visszaszívja a vizet):</strong> A kapillárisfalon át nem jutó plazmafehérjék által kifejtett ozmotikus szívóerő, értéke kb. <strong>28 Hgmm</strong> [PPT: 55. dia]. Ebből az <strong>albuminok (45 g/L) adják a nyomás ~80%-át (21,8 Hgmm)</strong> (kisebb molekulasúlyuk és magas koncentrációjuk miatt), a globulinok (25 g/L) kb. 20%-ot (6 Hgmm), míg a fibrinogén részesedése elhanyagolható (0,2 Hgmm) [PPT: 55. dia].</li>
                <li><strong>4. Π<sub>i</sub> (Intersticiális onkotikus nyomás – kifelé szívja a vizet):</strong> A szövetközti térbe kijutott kevés fehérje által kifejtett nyomás, értéke kb. <strong>3–8 Hgmm</strong> [PPT: 56. dia].</li>
            </ul>
            <p><strong>Mi történik a kapilláris két végén? [PPT: 58–60. dia]:</strong><br>
            Mivel az artériás végen magas a hidrosztatikai nyomás (P<sub>c</sub> ≈ 35 Hgmm), itt a kifelé ható erők győznek (<code>P_eff ≈ +10 Hgmm</code>), így a kapilláris <strong>első 2/3-án eredő filtráció</strong> zajlik. Ahogy haladunk a vénás vég felé, a P<sub>c</sub> lecsökken (~15 Hgmm-re), miközben a plazma onkotikus szívóereje (Π<sub>c</sub> = 28 Hgmm) változatlan marad, így az <strong>utolsó 1/3-on eredő reabszorpció</strong> történik (<code>P_eff ≈ -9 Hgmm</code>) [PPT: 59–60. dia]. A naponta filtrálódó kb. 20–30 liter folyadék <strong>90%-a visszaszívódik</strong> a vénás szárba, a maradék <strong>10%-ot (~3 liter/nap, ~2 ml/perc) pedig a nyirokrendszer</strong> szállítja el [PPT: 60. dia].</p>

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
            <p>Oedema akkor alakul ki, ha a szövetközti szabad víztartalom felszaporodik (ennek klinikai jele az ujjbenyomatot megtartó, ún. <em>„pitting” oedema</em>) [PPT: 61. dia]. A Starling-egyenlet alapján 5 okból jöhet létre:</p>
            <ol>
                <li><strong>Megnövekedett nyomás a kapilláris artériás szárában (↑ P<sub>c</sub>) [PPT: 62. dia]:</strong> Ha az arteriolák túlzottan kitágulnak, a magas artériás nyomás bejut a kapillárisokba, fokozva a filtrációt. Példák: extrém hőség, szimpatikus értónus kiesése, értágító gyógyszerek, vagy a <strong>Beriberi-kór</strong> (B₁-vitamin-hiány miatti súlyos perifériás arteriolatágulat) [PPT: 62. dia].</li>
                <li><strong>Megnövekedett nyomás a kapilláris vénás szárában (↑ P<sub>c</sub>) [PPT: 63–65. dia]:</strong> A vénás elfolyás akadályozottsága visszaduzzasztja a vért a kapillárisokba, ami leállítja a reabszorpciót [PPT: 63. dia]:
                    <ul>
                        <li><em>Lokális ok:</em> Vénás kompresszió vagy elzáródás, pl. hosszú repülőutak után kialakuló <strong>mélyvénás thrombosis (DVT)</strong>, amelynek életveszélyes szövődménye a leszakadó vérrög okozta <strong>tüdőembólia</strong> [PPT: 63–65. dia].</li>
                        <li><em>Szisztémás ok:</em> <strong>Jobbszívfél-elégtelenség (JSZE)</strong> esetén a vér a nagyvérköri vénákban pang (alsó végtagi oedema, hasvízkór/ascites); <strong>Balszívfél-elégtelenség (BSZE)</strong> esetén a vér a tüdőerekben pang, ami életveszélyes <strong>tüdőoedemához</strong> vezet [PPT: 63, 71. dia]!</li>
                    </ul>
                </li>
                <li><strong>A plazma onkotikus nyomásának csökkenése (↓ Π<sub>c</sub> – Hypoproteinaemia / Hypoalbuminaemia) [PPT: 66. dia]:</strong> Ha csökken a plazma albuminszintje, gyengül a vizet visszatartó ozmotikus szívóerő [PPT: 66. dia]. Három fő oka: (a) súlyos fehérjehiányos éhezés (<strong>kwashiorkor</strong>), (b) <strong>májelégtelenség / májcirrhosis</strong> (a máj nem termel elég albumint), (c) <strong>nephrosis szindróma</strong> (a károsodott veseglomerulusok áteresztik az albumint a vizeletbe) [PPT: 66. dia].</li>
                <li><strong>Elégtelen nyirokelvezetés (Lymphoedema) [PPT: 67. dia]:</strong> A napi ~3 liter fehérjedús nyirok visszamarad a szövetekben. Oka lehet trópusi parazitás fertőzés (<strong>Filariasis</strong> – a szúnyogcsípéssel terjedő <em>Wuchereria bancrofti</em> fonálféreg elzárja a nyirokereket → <em>elephantiasis</em>), vagy daganatsebészeti nyirokcsomó-eltávolítás (pl. <strong>emlőamputáció / mastectomia</strong> utáni karduzzanat) [PPT: 67. dia].</li>
                <li><strong>Kapilláris permeabilitás fokozódása (↑ Π<sub>i</sub>) [PPT: 68. dia]:</strong> Gyulladás, égés vagy allergiás reakció (pl. méhcsípés) során a hízósejtekből felszabaduló <strong>hisztamin</strong> hatására az endothelsejtek összehúzódnak, rések nyílnak közöttük, és a plazmafehérjék kiszöknek az interstitiumba. Ez megemeli a szövetközti onkotikus nyomást (Π<sub>i</sub>), ami még több vizet szív ki az erekből [PPT: 68. dia].</li>
            </ol>

            <!-- V. RÉSZ: A VÉNÁS KERINGÉS ÉS A CVP (69-78. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                V. RÉSZ: A Vénás Keringés és a Vénás Visszaáramlás (VR) [PPT: 69–78. dia]
            </h2>

            <p>A vénás visszaáramlás (<em>Venous Return, VR</em>) a jobb pitvarba percenként beérkező vér mennyisége – egyensúlyi állapotban pontosan megegyezik a szív perctérfogatával. <strong>6 tényező szabályozza [PPT: 71–77. dia]:</strong></p>
            <ol>
                <li><strong>Vénás tónus [PPT: 71. dia]:</strong> A vénák falában lévő simaizomzat szimpatikus (α₁-receptoron keresztüli) összehúzódása (<em>venokonstrikció</em>) csökkenti a vénák befogadóképességét, és mobilizálja a vért a raktárakból a szív felé (↑ VR) [PPT: 71. dia].</li>
                <li><strong>A jobb szívfél pumpafunkciója [PPT: 71. dia]:</strong> Az egészséges jobb kamra folyamatosan elszívja a vért a jobb pitvarból, alacsonyan tartva a nyomást. Jobbszívfél-elégtelenség (JSZE) esetén a vér feltorlódik, emelkedik a centrális vénás nyomás, és csökken a VR [PPT: 71. dia].</li>
                <li><strong>Légzési pumpa [PPT: 72. dia]:</strong> <strong>Belégzéskor</strong> a rekeszizom lesüllyedése miatt a mellűri (intrathoracalis) nyomás csökken (negatívabb lesz, -2-ről kb. -6 Hgmm-re), miközben a hasűri nyomás emelkedik. Ez a nyomáskülönbség valósággal beszippantja a vért a hasi vénákból a mellkasi nagyvénákba és a jobb pitvarba (↑ VR) [PPT: 72. dia]. <em>Fizikai korlát:</em> -20 Hgmm-nél erősebb szívásnál (pl. zárt hangrés melletti belégzésnél) a vékony falú mellűri vénák összecsuklanak (kollabálnak), ami megakadályozza a további áramlásnövekedést [PPT: 72. dia].</li>
                <li><strong>Gravitáció és testhelyzet [PPT: 73, 77. dia]:</strong> Álló helyzetben a véroszlop hidrosztatikai nyomása a jobb pitvar szintje alatt centiméterenként ~0,77 Hgmm-rel nő, így a bokavénákban a nyomás eléri a <strong>~90 Hgmm-t</strong> [PPT: 73. dia]! Shockos, vérnyomáseséses betegben a lábak megemelése (<strong>Trendelenburg-helyzet</strong>) a gravitáció segítségével visszajuttatja a vért a szívbe (↑ VR) [PPT: 73, 77. dia].<br>
                <em>Klinikai veszélyforrás [PPT: 73. dia]:</em> A jobb pitvar feletti vénákban a hidrosztatikai nyomás <strong>negatív (szubatmoszférikus)</strong>: a koponyaűri <strong>sinus sagittalis superiorban -10 Hgmm</strong>! Emiatt fej-nyaki vagy idegsebészeti műtéteknél, illetve nyaki vénás sérüléseknél a nyitott vénába levegő szívódhat be, ami 5–100 ml felett halálos <strong>légembóliát</strong> okoz [PPT: 73. dia].</li>
                <li><strong>Vázizompumpa és vénabillentyűk [PPT: 74–76. dia]:</strong> Járáskor a lábikra izmainak összehúzódása összepréseli a mélyvénákat, az egyirányú vénabillentyűk pedig csak felfelé, a szív irányába engedik a vért – ezzel a bokavénák nyomása 90 Hgmm-ről <strong>~30 Hgmm-re csökken</strong> [PPT: 74. dia]. Ha a billentyűk elégtelenül zárnak, a vér visszapang és visszértágulat (<strong>varicositas</strong>) alakul ki [PPT: 75. dia].<br>
                <em>Gyakorlati tanács [PPT: 76. dia]:</em> Intenzív futás után tilos azonnal leülni vagy megállni! Ilyenkor a vázizmok erei még tágak, de az izompumpa hirtelen leáll, így a vér az alsó végtagokban pang, leesik a vénás visszaáramlás és a koszorúerek vérellátása („kocogók szívinfarktusa”) – ezért mindig levezető séta szükséges [PPT: 76. dia].</li>
                <li><strong>Teljes perifériás ellenállás (TPR) [PPT: 76. dia]:</strong> Ha a TPR csökken (arteriolatágulat), a vér kisebb ellenálláson keresztül gyorsabban zúdul át az artériás oldalról a vénás oldalra, ami növeli a vénás visszaáramlást (↑ VR) [PPT: 76. dia].</li>
            </ol>
            <ul>
                <li><strong>Centrális Vénás Nyomás (CVP) [PPT: 77–78. dia]:</strong> A jobb pitvarban és a vena cava superiorban uralkodó nyomás, amely jól tükrözi a keringő vértérfogat és a jobb szívfél pumpaerejének viszonyát. Normál értéke <strong>-2 és +6 Hgmm</strong> között van [PPT: 77. dia]. Vérzésben vagy shockban csökken; jobbszívfél-elégtelenségben vagy túltöltésben megemelkedik (+10 Hgmm felett a nyaki vénák tágultak, +15 Hgmm felett láthatóan feszülnek) [PPT: 77–78. dia].</li>
            </ul>

            <!-- VI. RÉSZ: AZ ÉRTÓNUS ÖSSZETEVŐI ÉS VEGETATÍV BEIDEGZÉS (79-124. DIA) -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2.5rem;">
                VI. RÉSZ: Az Értónus Összetevői és a Vegetatív Érbeidegzés [PPT: 79–124. dia]
            </h2>

            <p><strong>Az értónus 3 egymásra épülő komponense [PPT: 82–91. dia]:</strong><br>
            Az erek falában lévő simaizomsejtek nyugalomban sincsenek teljesen elernyedve, hanem egy állandó, részleges összehúzódási állapotot (értónust) tartanak fenn [PPT: 82–83. dia]:</p>
            <ol>
                <li><strong>Bazális tónus [PPT: 83–86, 90. dia]:</strong> A vaszkuláris simaizomsejtek <strong>saját, belső (intrinsic) kontrakciós aktivitása</strong>, amely idegi és hormonális hatásoktól teljesen független. Még egy szervezetből kivett, Petri-csészében tartott izolált érszakaszon is kimutatható, és kizárólag közvetlen simaizom-bénítókkal (pl. <strong>papaverinnel</strong>) szüntethető meg [PPT: 84–85. dia]. Különösen magas az életfontosságú szervek ereiben, a <strong>koronáriákban és az agyi erekben (++++)</strong> [PPT: 90. dia].</li>
                <li><strong>Nyugalmi vazokonstriktor tónus [PPT: 83, 87–88, 90. dia]:</strong> A szimpatikus idegrendszer vazomotor központjából nyugalomban is folyamatosan (kb. 1–2 Hz frekvenciával) érkező akciós potenciálok által fenntartott enyhe érszűkület [PPT: 87. dia]. Különösen magas az <strong>apikális bőrerekben (++++)</strong> (ujjbegyek, fül, orr – hőszabályozás!), a vázizomban (++) és a splanchnicus területen (+), míg az agyi és koronáriaerekben gyakorlatilag nulla (0) [PPT: 90. dia]. Ha egy ilyen terület szimpatikus idegét átvágjuk (<em>szimpatektómia</em>), az ér kitágul [PPT: 82, 88. dia].</li>
                <li><strong>Reflexes vazokonstriktor tónus [PPT: 83, 91. dia]:</strong> Különböző cardiovascularis reflexek (pl. vérnyomásesés baroreceptor-reflexe vagy hipoxia kemoreceptor-reflexe) aktiválódásakor a szimpatikus kisülési frekvencia fokozódása által kiváltott további, fokozott érszűkület [PPT: 83, 91. dia].</li>
            </ol>

            <p><strong>Fontos szabály a paraszimpatikus idegrendszerről [PPT: 88–89. dia]:</strong><br>
            A <strong>paraszimpatikus idegrendszer NEM vesz részt a teljes perifériás ellenállás (TPR) szabályozásában</strong>! Paraszimpatikus értágító rostok csak néhány speciális területhez futnak (pl. az agyhártya/pia mater erei, a külső nemi szervek erektilis szövetei, valamint a nyálmirigyek és gyomor-bélrendszeri mirigyek erei a fokozott szekréció támogatására) [PPT: 88–89. dia].</p>

            <p><strong>A szimpatikus idegrendszer 3 anatómiai és neurotranszmitter-elrendezése [PPT: 92–97. dia]:</strong></p>
            <ul>
                <li><strong>I. Szokásos (szimpatikus adrenerg) elrendezés [PPT: 93. dia]:</strong> Rövid preganglionáris rost (neurotranszmitter: <strong>acetilkolin [ACh]</strong> → nikotinos <em>nAChR</em> receptor a dúcban) → hosszú posztganglionáris rost (neurotranszmitter: <strong>noradrenalin [NA]</strong> → a célszerv <em>α- vagy β-adrenerg receptorai</em>) [PPT: 93. dia].</li>
                <li><strong>II. Ritka (szimpatikus kolinerg) elrendezés [PPT: 94. dia]:</strong> A preganglionáris rost itt is ACh-t használ (nAChR), de a posztganglionáris rost kivételesen szintén <strong>acetilkolint (ACh)</strong> szabadít fel, amely a célszerv <strong>M₃ muszkarinos receptorán</strong> hat! Csak 3 célpontja van: (1) <strong>verejtékmirigyek</strong> (verejtékezés), (2) <strong>m. arrector pili</strong> (szőrszálmerevítés), és (3) <strong>a vázizomzat egyes arteriolái</strong> (értágulatot okoz az izommunka kezdetekor!) [PPT: 94. dia].</li>
                <li><strong>III. Mellékvesevelő (kromaffin sejtek) [PPT: 95–96. dia]:</strong> A mellékvesevelő sejtjei módosult szimpatikus posztganglionáris idegsejtek, amelyek elvesztették axonjaikat. A közvetlenül rájuk kapcsolódó preganglionáris rostok (ACh → nAChR) hatására hormonként <strong>adrenalint (80%) és noradrenalint (20%)</strong> ürítenek közvetlenül a véráramba [PPT: 95–96. dia].</li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                Adrenerg receptorok, jelátvitelük és farmakológiájuk [PPT: 98–124. dia]
            </h3>
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 8px; text-align: left;">Receptor</th>
                        <th style="padding: 8px; text-align: left;">G-fehérje &amp; Jelátvitel</th>
                        <th style="padding: 8px; text-align: left;">Fő lokalizáció és élettani hatás</th>
                        <th style="padding: 8px; text-align: left;">Agonisták / Antagonisták [PPT: 98–124. dia]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>α₁-receptor</strong></td>
                        <td><strong>G<sub>q</sub></strong> → foszfolipáz C (PLC) → ↑ IP₃ / DAG → ↑ intracelluláris [Ca²⁺]<sub>i</sub></td>
                        <td>Ér simaizom (bőr, splanchnicus, vese): <strong>vazokonstrikció</strong>; m. dilatator pupillae (pupillatágulat / mydriasis); záróizmok kontrakciója</td>
                        <td><em>Agonista:</em> Noradrenalin, Fenilefrin<br><em>Antagonista:</em> <strong>Prazosin</strong> (szelektív α₁-blokkoló), Fentolamin, Fenoxibenzamin [PPT: 112–113. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>α₂-receptor</strong></td>
                        <td><strong>G<sub>i</sub></strong> → gátolja az adenilát-ciklázt (AC) → ↓ cAMP</td>
                        <td>Preszinaptikus idegvégződés (<strong>negatív visszacsatolás: gátolja a további NA-felszabadulást</strong>); GI fal relaxációja; trombocita-aggregáció</td>
                        <td><em>Agonista:</em> <strong>Klonidin</strong> (centrális vérnyomáscsökkentő), Noradrenalin<br><em>Antagonista:</em> Yohimbin, Fentolamin [PPT: 114–115. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>β₁-receptor</strong></td>
                        <td><strong>G<sub>s</sub></strong> → aktiválja az AC-t → ↑ cAMP</td>
                        <td>Szívizom: <strong>pozitív kronotróp, dromotróp, inotróp, luzitróp</strong> hatások; vese JGA sejtek: <strong>reninszekréció ↑</strong></td>
                        <td><em>Agonista:</em> Izoproterenol, Adrenalin, Dobutamin<br><em>Antagonista:</em> <strong>Metoprolol, Atenolol</strong> (β₁-szelektív), Propranolol [PPT: 98–103. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>β₂-receptor</strong></td>
                        <td><strong>G<sub>s</sub></strong> → aktiválja az AC-t → ↑ cAMP</td>
                        <td>Simaizom relaxáció: <strong>bronchodilatatio</strong> (hörgőtágulat), <strong>vazodilatáció</strong> (vázizom arteriolák, koronáriák), uterus és hólyag relaxáció; májban glikogenolízis</td>
                        <td><em>Agonista:</em> <strong>Salbutamol</strong> (asztma), Adrenalin, Izoproterenol<br><em>Antagonista:</em> Propranolol (nem-szelektív – asztmában hörgőgörcsöt okozhat, ezért tilos!) [PPT: 104–107. dia]</td>
                    </tr>
                    <tr>
                        <td><strong>β₃-receptor</strong></td>
                        <td><strong>G<sub>s</sub></strong> → aktiválja az AC-t → ↑ cAMP</td>
                        <td>Zsírszövet: <strong>lipolízis</strong> és termogenezis; húgyhólyag detrusor izom relaxációja</td>
                        <td><em>Agonista:</em> Mirabegron (hiperaktív húgyhólyag kezelése) [PPT: 108–109. dia]</td>
                    </tr>
                </tbody>
            </table>

            <!-- ÖSSZEFOGLALÓ -->
            <div style="background: var(--box-bg); border-left: 4px solid var(--accent); padding: 1.2rem; border-radius: 8px; margin-top: 2rem;">
                <h4 style="margin-top: 0; color: var(--primary);">Legfontosabb vizsgapontok ZH-ra:</h4>
                <ul>
                    <li><strong>Hemodinamika:</strong> <code>MAP = PTF × TPR</code> (a MAP mindig következmény!); <code>MAP = DP + 1/3 PP</code> [PPT: 24–25. dia]. Hagen–Poiseuille: ha <code>r</code> felére csökken, <code>R</code> <strong>16-szorosára nő</strong> (2⁴) [PPT: 28. dia].</li>
                    <li><strong>Reynolds-szám:</strong> <code>Re = (v · D · ρ) / η</code> (&gt;2000 → turbulencia). Aortastenosisban D felére csökken → keresztmetszet negyedére → v 4-szeresére nő → Re <strong>megduplázódik</strong> [PPT: 30. dia].</li>
                    <li><strong>Compliance és Pulzus:</strong> Vénás compliance 24-szer nagyobb (8× tágíthatóság × 3× befogadóképesség) [PPT: 40. dia]. Aortastenosis = <em>tardus et parvus</em> + szisztolés zörej [PPT: 44. dia]; Aortainsufficientia = <em>celer et altus</em> + diasztolés zörej + ↓↓ DP [PPT: 45, 47. dia]; Atherosclerosis = <em>celer et altus</em>, nincs zörej, ↑↑↑ SP [PPT: 46–47. dia].</li>
                    <li><strong>Starling-erők és Oedema:</strong> Onkotikus nyomás (28 Hgmm) ~80%-át az <strong>albumin</strong> adja [PPT: 55. dia]. Filtráció (2/3) → Reabszorpció (1/3, 90%) + Nyirok (10%, ~3 L/nap) [PPT: 59–60. dia].</li>
                    <li><strong>Vénás keringés:</strong> Belégzés ↑ VR; sinus sagittalis superiorban <strong>-10 Hgmm</strong> (légembólia veszély!) [PPT: 72–73. dia]; izompumpa 90-ről 30 Hgmm-re csökkenti a bokanyomást [PPT: 74. dia].</li>
                    <li><strong>Értónus és Receptorok:</strong> Bazális tónus (intrinsic, pl. agy/koronária) + nyugalmi vazokonstriktor tónus (szimpatikus, pl. apikális bőr) [PPT: 82, 90. dia]. α₁ (G<sub>q</sub>, vazokonstrikció), α₂ (G<sub>i</sub>, preszinaptikus gátlás), β₁ (G<sub>s</sub>, szív + renin), β₂ (G<sub>s</sub>, vazodilatáció + bronchodilatáció) [PPT: 98–115. dia].</li>
                </ul>
            </div>

        </div>
    `
});
