// eloadasok/eloadas21.js
window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-21",
    title: "21. Előadás: A szívciklus",
    shortName: "A szívciklus",
    html: `
        <div style="font-family: inherit; line-height: 1.7; color: var(--text);">

            <!-- BEVEZETÉS ÉS ALAPELVEK -->
            <div style="background: var(--info-bg); border-left: 4px solid var(--primary-light); padding: 1.2rem; border-radius: 8px; margin-bottom: 2rem;">
                <h3 style="margin-top: 0; color: var(--primary);">Bevezetés: Két ellentétes működési elv egy helyen [PPT: 3.1–3.3. dia]</h3>
                <p>A keringési rendszer felépítésében a természet egy látszólag feloldhatatlan mechanikai paradoxont hidalt át sikeresen [PPT: 3.2. dia]:</p>
                <ul>
                    <li><strong>Szív:</strong> szigorúan <strong>ciklikus, szakaszos működésű pumpa</strong> (váltakozó összehúzódási és elernyedési fázisokkal) [PPT: 3.2. dia].</li>
                    <li><strong>Érpálya:</strong> a perifériás szövetek és kapillárisok felé <strong>folytonos véráramlást</strong> igényel és tart fenn [PPT: 3.2. dia].</li>
                    <li><strong>A közvetítő mechanizmus (Szélkazán-funkció):</strong> Az aorta és a nagy elasztikus artériák tágulékonysága (compliance) teszi lehetővé, hogy a kamrából kilökött szakaszos pulzustérfogat kinetikai és nyomási energiájának egy része az érfal rugalmas feszülésében tárolódjon, majd a diasztolé alatt továbbhajtsa a vért, így a folytonos áramlást biztosítsa [PPT: 3.2. dia].</li>
                </ul>

                <h4 style="color: var(--primary-light); margin-top: 1rem;">A szisztolé és diasztolé valódi definíciója [PPT: 3.3. dia]:</h4>
                <p>A szívciklus azon véráramlással és vérnyomással kapcsolatos mechanikai és elektromos események összessége, amelyek egyetlen diasztolé és az azt követő szisztolé alatt lezajlanak [PPT: 3.3. dia]:</p>
                <ul>
                    <li><strong>Szisztolé (Systole):</strong> a szívizomzat <strong>aktív összehúzódása és a vér továbbítása</strong> [PPT: 3.3. dia].</li>
                    <li><strong>Diasztolé (Diastole):</strong> a szívizomzat <strong>aktív relaxációjának ÉS a kamrák újratöltődésének periódusa</strong> [PPT: 3.3. dia].</li>
                    <li><em>Megjegyzés:</em> A pitvaroknak és a kamráknak külön-külön van szisztolé és diasztolé állapota. Általánosságban a klinikai gyakorlatban a szisztolé alatt a <em>kamrai összehúzódást</em>, diasztolé alatt a <em>kamrai telődést</em> értjük [PPT: 3.3. dia].</li>
                </ul>

                <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin-top: 0.8rem; border-radius: 4px;">
                    <strong>🎙️ [Oktatói kiegészítés – A diasztolé NEM passzív pihenés!]:</strong><br>
                    <em>„Sok tankönyvben még ma is úgy találjátok megfogalmazva, hogy a szisztolé a munka, a diasztolé pedig a szív pihenése. Ezt a gondolatot azonnal felejtsétek el! A diasztolé egy rendkívül aktív, óriási energiaigényű élettani folyamat: a kalciumot a SERCA pumpáknak vissza kell szívniuk az SR-be, a kereszthidaknak ATP-t kell bontaniuk a szétváláshoz, és a kamrának megfelelően kell tágulnia a vér befogadására. Klinikai szempontból legalább annyi kardiális beteg szenved <strong>diasztolés diszfunkcióban</strong> (elégtelen telődésben), mint szisztolés pumpahibában!” [PPT: 3.3. dia]</em>
                </div>
            </div>

            <!-- I. RÉSZ: A SZÍVCIKLUS ESEMÉNYEI ÉS A WIGGERS-DIAGRAM -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2rem;">
                I. RÉSZ: A Szívciklus Fázisai és a Wiggers-diagram
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. A Wiggers-diagram komplex elemzése [PPT: 3.4. dia]
            </h3>
            <p>A Carl J. Wiggers által megalkotott diagram a kardiológia legfontosabb összefoglaló ábrája, amely egyetlen közös időtengelyen ábrázolja a bal szívfélben lezajló nyomásváltozásokat, a kamratérfogatot, az EKG-t és a szívhangokat [PPT: 3.4. dia]:</p>

            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 8px;">Fázis neve</th>
                        <th style="padding: 8px;">AV-billentyű (mitrális)</th>
                        <th style="padding: 8px;">Semilunaris (aorta)</th>
                        <th style="padding: 8px;">Kamranyomás és térfogat</th>
                        <th style="padding: 8px;">EKG / Szívhang [PPT: 3.4. dia]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>1. Izovolumetriás kontrakció [PPT: 3.4. dia]</strong></td>
                        <td><strong>ZÁRVA</strong> (nyomás miatt becsapódik)</td>
                        <td><strong>ZÁRVA</strong></td>
                        <td>Nyomás meredeken nő (8 → 80 Hgmm), térfogat <strong>állandó (EDV ~130 ml)</strong> [PPT: 3.4. dia]</td>
                        <td>QRS-csúcs után; <strong>1. szívhang (S1)</strong> keletkezik [PPT: 3.4. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>2. Gyors ejekció [PPT: 3.4. dia]</strong></td>
                        <td>ZÁRVA</td>
                        <td><strong>NYITVA</strong></td>
                        <td>Nyomás eléri a csúcsot (~120 Hgmm), térfogat zuhan (SV 2/3-a kiürül) [PPT: 3.4. dia]</td>
                        <td>ST-szakasz [PPT: 3.4. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>3. Csökkent ejekció [PPT: 3.4. dia]</strong></td>
                        <td>ZÁRVA</td>
                        <td>NYITVA</td>
                        <td>Nyomás csökkenni kezd, a kamraürülés lelassul [PPT: 3.4. dia]</td>
                        <td>T-hullám csúcsa [PPT: 3.4. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>4. Izovolumetriás relaxáció [PPT: 3.4. dia]</strong></td>
                        <td><strong>ZÁRVA</strong></td>
                        <td><strong>ZÁRVA</strong> (aortanyomás alá esik)</td>
                        <td>Nyomás zuhan (100 → 5 Hgmm), térfogat <strong>állandó (ESV ~50-60 ml)</strong> [PPT: 3.4. dia]</td>
                        <td>T-hullám vége; <strong>2. szívhang (S2)</strong> és dicrot bemélyedés az aortán [PPT: 3.4. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>5. Gyors kamratelődés [PPT: 3.4. dia]</strong></td>
                        <td><strong>NYITVA</strong></td>
                        <td>ZÁRVA</td>
                        <td>Nyomás alacsony, a térfogat meredeken emelkedik (telődés 60-70%-a) [PPT: 3.4. dia]</td>
                        <td>Izoelektromos szakasz; esetleg <strong>3. szívhang (S3)</strong> [PPT: 3.4. dia]</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>6. Csökkent telődés (Diastasis) [PPT: 3.4. dia]</strong></td>
                        <td>NYITVA</td>
                        <td>ZÁRVA</td>
                        <td>A beáramlás lelassul, nyomásgradiens szinte kiegyenlítődik [PPT: 3.4. dia]</td>
                        <td>Nyugalmi szakasz [PPT: 3.4. dia]</td>
                    </tr>
                    <tr>
                        <td><strong>7. Pitvari szisztolé [PPT: 3.4. dia]</strong></td>
                        <td>NYITVA</td>
                        <td>ZÁRVA</td>
                        <td>Pitvarkontrakció → 'a'-hullám a pitvarban, utolsó 10-15% vér bepréselése [PPT: 3.4. dia]</td>
                        <td><strong>P-hullám</strong>; esetleg <strong>4. szívhang (S4)</strong> [PPT: 3.4. dia]</td>
                    </tr>
                </tbody>
            </table>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Hogyan tanuljátok meg a Wiggers-diagramot?]:</strong><br>
                <em>„A Wiggers-diagramtól minden másodéves hallgató retteg, mert azt hiszik, egy tucat görbét kell fejből felrajzolni. Pedig elég egyetlen logikai láncot követni:
                1. Mindig a <strong>kamrai nyomásgörbe</strong> a vezérfonál! Látjátok, hogy a szisztolében felmegy 120 Hgmm-re, diasztoléban leesik 0-5 Hgmm-re.
                2. Az aorta nyomása sosem esik 80 Hgmm alá az elasztikus fal visszarugózása miatt. Ahol a kamranyomás felülről metszi az aortanyomást, ott nyílik ki az aortabillentyű; ahol alulról metszi, ott csapódik be!
                3. Ahol a kamranyomás a pitvari nyomás (kb. 5 Hgmm) fölé emelkedik, becsapódik a mitrális billentyű; ahol alá esik, kinyílik!
                4. Amikor mindkét billentyű zárva van: az az <strong>izovolumetriás szakasz</strong> – nyomás változik, térfogat mozdulatlan. Ha ezt a logikát követitek, azonnal le tudjátok vezetni az egészet!” [PPT: 3.4. dia]</em>
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. Izometriás és izotóniás fázisok a szívciklusban [PPT: 3.5, 3.6. dia]
            </h3>
            <p>A vázizomélettanból ismert alapvető kontrakciótípusok szigorú sorrendben követik egymást a szívben [PPT: 3.5, 3.6. dia]:</p>
            <ul>
                <li><strong>Izometriás (izovolumetriás) kontrakció [PPT: 3.5. dia]:</strong>
                    A kamraizomzat feszülése meredeken nő, de mivel valamennyi billentyű zárva van, a folyadék összenyomhatatlan, így a szívizomsejtek <strong>nem tudnak megrövidülni</strong>, és a kamra térfogata változatlan marad [PPT: 3.5. dia]. Ez a szakasz kizárólag a nyomás felépítésére szolgál az aorta diastolés nyomásának (80 Hgmm) leküzdéséhez [PPT: 3.4, 3.5. dia].
                </li>
                <li><strong>Izotóniás (auxotóniás) ejekció [PPT: 3.6. dia]:</strong>
                    Amint az aortabillentyű kinyílik, a szívizomsejtek <strong>elkezdenek megrövidülni</strong>, és vért löknek ki a nagyerekbe [PPT: 3.6. dia]. A szívben a terhelés a szisztolé során folyamatosan változik, ezért valójában <em>auxotóniás</em> (változó feszülés melletti megrövidülés) összehúzódás zajlik [PPT: 3.6. dia].
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. A kamratelődés dinamikája és a frekvenciafüggés [PPT: 3.7. dia]
            </h3>
            <p>A kamrák diasztolés telődése nem egyenletes sebességgel zajlik [PPT: 3.7. dia]:</p>
            <ul>
                <li><strong>1. Gyors telődési fázis (Rapid inflow):</strong> Az AV-billentyűk nyitásakor a kamra szívó hatása és a pitvarban felgyűlt vér nyomáskülönbsége miatt a végdiasztolés térfogat mintegy <strong>60–70%-a az első harmadban beáramlik</strong> [PPT: 3.7. dia]!</li>
                <li><strong>2. Csökkent telődési fázis (Diastasis):</strong> A nyomásgradiens lecsökken, a vénás visszaáramlásból csak kis mennyiségű vér csordogál át közvetlenül a kamrába [PPT: 3.7. dia].</li>
                <li><strong>3. Pitvari szisztolé („atrial kick”):</strong> A pitvar összehúzódása a maradék <strong>10–15% vért</strong> préseli be a diasztolé legvégén [PPT: 3.7. dia].</li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Pitvarfibrilláció és a szívfrekvencia csapdája]:</strong><br>
                <em>„Gyakori tévhit, hogy a pitvarok pumpálják tele a kamrát. Nem! Nyugalomban a kamra már 85-90%-ban tele van, mire a pitvar szisztoléja egyáltalán megkezdődik. Ezért van az, hogy ha egy idős betegnél pitvarfibrilláció alakul ki (amikor a pitvar nem húzódik össze, csak rezeg), nyugalomban a beteg szinte teljesen tünetmentes lehet! De mi történik terheléskor vagy magas szívfrekvenciánál (>150/perc)? Nézzétek meg a 3.7. dián a szaggatott zöld vonalat: a frekvencia emelkedésével a diasztolés idő drasztikusan lerövidül! Eltűnik a diasztázis, a kamrának nincs ideje passzívan megtelni, és a pitvari szisztolé szerepe hirtelen életbevágóvá válik (akár a perctérfogat 30-40%-át is adhatja!). Ha ilyenkor hiányzik a pitvari szisztolé, a perctérfogat összeomlik, és a beteg keringési sokkba kerül!” [PPT: 3.7. dia]</em>
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                4. A billentyűk mechanikája és a szívhangok [PPT: 3.8–3.10. dia]
            </h3>
            <ul>
                <li><strong>A billentyűk működésének alaptörvénye [PPT: 3.8. dia]:</strong>
                    A szívbillentyűk <strong>tisztán passzív mechanikai struktúrák</strong>. Sem idegi beidegzés, sem aktív izomösszehúzódás nem mozgatja őket; kizárólag a két oldalukon fellépő <strong>hidrosztatikai nyomáskülönbség nyitja és zárja őket</strong> [PPT: 3.8. dia]!
                    <ul>
                        <li><em>Papilláris izmok és ínhúrok (chordae tendineae) szerepe:</em> <strong>NEM a billentyűket zárják!</strong> A kamrai szisztolé során megfeszülnek, és megakadályozzák, hogy a hatalmas kamranyomás átfordítsa a vitorlákat a pitvarba (meggátolják a prolapsust és a regurgitációt) [PPT: 3.8. dia].</li>
                    </ul>
                </li>
                <li><strong>A szívhangok eredete [PPT: 3.9. dia]:</strong>
                    <ul>
                        <li><strong>1. szívhang (S1):</strong> Az <strong>AV-billentyűk (mitrális és tricuspidalis) záródása</strong> hozza létre a szisztolé kezdetén. Mélyebb tónusú, tompább és hosszabb („lub”), a kamraizomzat és a vérrezgések felerősítik [PPT: 3.9. dia].</li>
                        <li><strong>2. szívhang (S2):</strong> A <strong>semilunaris billentyűk (aorta és pulmonalis) záródása</strong> okozza a diasztolé kezdetén. Magasabb frekvenciájú, rövidebb, csattanóbb jellegű („dub”) [PPT: 3.9. dia]. Fiziológiásan belégzéskor kettőzött lehet (a pulmonalis komponens késik a megnövekedett vénás telődés miatt).</li>
                        <li><strong>3. szívhang (S3):</strong> A korai gyors telődési fázisban a kamrafalnak csapódó véráram turbulenciája kelti. Gyermekekben, fiatal sportolókban fiziológiás lehet; felnőttben súlyos kamrai tágulatot, szívelégtelenséget jelez (kamrai protodiasztolés gallop) [PPT: 3.9. dia].</li>
                        <li><strong>4. szívhang (S4):</strong> A pitvari szisztolé alatt a merev, csökkent compliance-ű kamrafalnak ütköző vér okozza (preszisztolés gallop; mindig patológiás: kamrahipertrófia, ischaemia) [PPT: 3.9. dia].</li>
                    </ul>
                </li>
                <li><strong>Hallgatózási pontok (Punctum maximumok) a mellkason [PPT: 3.10. dia]:</strong>
                    <ol>
                        <li><strong>Aortabillentyű:</strong> Jobb oldali 2. bordaköz, közvetlenül a sternum mellett (parasternalisan) [PPT: 3.10. dia].</li>
                        <li><strong>Pulmonalis billentyű:</strong> Bal oldali 2. bordaköz parasternalisan [PPT: 3.10. dia].</li>
                        <li><strong>Tricuspidalis billentyű:</strong> Bal oldali 4–5. bordaköz parasternalisan vagy a processus xiphoideus felett [PPT: 3.10. dia].</li>
                        <li><strong>Bicuspidalis (Mitrális) billentyű:</strong> Bal oldali 5. bordaköz a medioclavicularis vonalban (a szívcsúcslökés helyén) [PPT: 3.10. dia].</li>
                        <li><em>Erb-pont:</em> Bal oldali 3. bordaköz parasternalisan (az aorta és mitrális zörejek kiválóan hallhatók itt).</li>
                    </ol>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                5. A szívzörejek mechanizmusa és típusai [PPT: 3.11. dia]
            </h3>
            <p>Fiziológiás viszonyok között az erekben és a szívben a véráramlás <strong>lamináris</strong>, ami teljesen hangtalan [PPT: 3.11. dia]. Ha a billentyűk morfológiája vagy működése károsodik, az áramlás <strong>turbulenssé válik</strong>, és hallható kóros <strong>szívzörejeket (murmur)</strong> generál [PPT: 3.11. dia]:</p>

            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 8px;">Kórkép</th>
                        <th style="padding: 8px;">Zörej fázisa</th>
                        <th style="padding: 8px;">Karakter és mechanizmus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Aorta stenosis [PPT: 3.11. dia]</strong></td>
                        <td><strong>Szisztolés</strong> (ejekciós)</td>
                        <td>Kinyílási zavar; a kamrának szűk szájadékon át kell kipréselnie a vért → orsó alakú (crescendo-decrescendo) durva szisztolés zörej [PPT: 3.11. dia].</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Mitrális regurgitáció / insufficientia [PPT: 3.11. dia]</strong></td>
                        <td><strong>Szisztolés</strong> (holoszisztolés)</td>
                        <td>Záródási elégtelenség; a kamrai szisztolé alatt a magas nyomás visszapréseli a vért a bal pitvarba → szalagszerű, állandó intenzitású szisztolés zörej [PPT: 3.11. dia].</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Aorta regurgitáció / insufficientia [PPT: 3.11. dia]</strong></td>
                        <td><strong>Diasztolés</strong></td>
                        <td>Záródási elégtelenség; a diasztolé alatt az aortából a magas nyomás visszafolyik az elernyedt bal kamrába → decrescendo korai diasztolés zörej [PPT: 3.11. dia].</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Mitrális stenosis [PPT: 3.11. dia]</strong></td>
                        <td><strong>Diasztolés</strong></td>
                        <td>Kinyílási zavar; a diasztolés telődés alatt a szűk mitrális szájon át zúdul a vér → nyitási kattanás (opening snap) után halk mély morajlás (diastolic rumble), preszisztolés felerősödéssel [PPT: 3.11. dia].</td>
                    </tr>
                    <tr>
                        <td><strong>Patent ductus arteriosus (PDA) [PPT: 3.11. dia]</strong></td>
                        <td><strong>Folyamatos</strong> (kontinuus)</td>
                        <td>Mivel az aortanyomás mind szisztoléban, mind diasztoléban meghaladja a pulmonalis artéria nyomását, a vér szünet nélkül áramlik → folyamatos „l Northrop-gépzörej” [PPT: 3.11. dia].</td>
                    </tr>
                </tbody>
            </table>

            <!-- II. RÉSZ: TÉRFOGATOK, REZERVÁK ÉS A PV-HUROK -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 3rem;">
                II. RÉSZ: Kamrai Térfogatok, Rezervák és a Nyomás-Térfogat Hurok
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. A kamrai térfogatok normálértékei és az ejekciós frakció (EF) [PPT: 3.12. dia]
            </h3>
            <ul>
                <li><strong>Végdiasztolés térfogat (End-Diastolic Volume, EDV) [PPT: 3.12. dia]:</strong>
                    A kamrában a diasztolé és a pitvari összehúzódás legvégén található maximális vértérfogat: kamránként <strong>~110–130 ml</strong> [PPT: 3.12. dia].
                </li>
                <li><strong>Végszisztolés térfogat (End-Systolic Volume, ESV) [PPT: 3.12. dia]:</strong>
                    A kamrai szisztolé befejeztével a kamrában visszamaradó minimális vértérfogat: kamránként <strong>~40–50 ml</strong> (a kamra SOHA nem ürül ki teljesen!) [PPT: 3.12. dia].
                </li>
                <li><strong>Pulzustérfogat (Stroke Volume, SV) [PPT: 3.12. dia]:</strong>
                    Az egyetlen szisztolé során a nagyerekbe továbbított vértérfogat:
                    <div style="background: var(--bg); border: 1px solid var(--border); border-radius: 6px; padding: 0.5rem; text-align: center; margin: 0.5rem 0; font-weight: bold;">
                        SV = EDV - ESV = 120 ml - 50 ml = ~70 ml / kamra [PPT: 3.12. dia]
                    </div>
                </li>
                <li><strong>Ejekciós Frakció (EF) [PPT: 3.12. dia]:</strong>
                    A kamra pumpatevékenységének legfontosabb klinikai mérőszáma; kifejezi, hogy a végdiasztolés térfogat hányad részét képes kilökni a szív egy összehúzódással:
                    <div style="background: var(--bg); border: 1px solid var(--border); border-radius: 6px; padding: 0.5rem; text-align: center; margin: 0.5rem 0; font-weight: bold; color: var(--primary-light);">
                        EF = SV / EDV = (EDV - ESV) / EDV   (Normálérték: ≥ 0,55 vagy 55–65%) [PPT: 3.12. dia]
                    </div>
                    <em>Klinikai jelentőség:</em> Ha az EF 50% alá esik, szisztolés szívelégtelenségről beszélünk (40% alatt súlyos szívelégtelenség, HFrEF) [PPT: 3.12. dia].
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. Diasztolés és szisztolés rezerva [PPT: 3.13. dia]
            </h3>
            <p>Nyugalomban a szív a maximális kapacitásának csak egy töredékét használja fel. Fizikai terheléskor a pulzustérfogat (SV) növelésére kétirányú anatómiai és funkcionális tartalékkal rendelkezik [PPT: 3.13. dia]:</p>
            <ul>
                <li><strong>Diasztolés rezerva (Diastolic reserve) [PPT: 3.13. dia]:</strong>
                    A fokozott vénás visszaáramlás révén az EDV a nyugalmi 120 ml-ről <strong>akár 160–180 ml-re növelhető</strong> (a szívizomrostok megnyúlása a Frank-Starling törvény révén növeli az erőt) [PPT: 3.13. dia].
                </li>
                <li><strong>Szisztolés rezerva (Systolic reserve) [PPT: 3.13. dia]:</strong>
                    Erőteljes szimpatikus stimuláció hatására a fokozott inotrópia miatt a kamra sokkal jobban kiürül, így az ESV a nyugalmi 50 ml-ről <strong>akár 15–20 ml-re csökkenthető</strong> [PPT: 3.13. dia].
                </li>
                <li>A két rezerva együttes aktiválásával a pulzustérfogat (SV) nyugalmi 70 ml-ről extrém terhelésnél akár <strong>130–150 ml-re duplázódhat</strong> [PPT: 3.13. dia]!</li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. A Nyomás-Térfogat Hurok (PV-loop) és adaptációi [PPT: 3.14. dia]
            </h3>
            <p>A bal kamrai nyomás-térfogat diagram a szívciklus teljes mechanikáját egyetlen zárt hurokként ábrázolja [PPT: 3.14. dia]:</p>
            <ul>
                <li><strong>A hurok 4 szakasza [PPT: 3.14. dia]:</strong>
                    <ol>
                        <li><strong>Telődési szakasz (Period of filling):</strong> A mitrális billentyű nyitásától a záródásáig fut (ESV → EDV, ~50 ml-ről ~120 ml-re alacsony, 5-10 Hgmm nyomás mellett). Az alsó határgörbe az <strong>EDPVR</strong> (End-Diastolic Pressure-Volume Relationship, a passzív kamrai compliance) [PPT: 3.14. dia].</li>
                        <li><strong>Izovolumetriás kontrakció:</strong> Függőleges vonal felfelé (térfogat = állandó 120 ml, nyomás: 10 → 80 Hgmm) [PPT: 3.14. dia].</li>
                        <li><strong>Ejekciós szakasz:</strong> Aortabillentyű nyitásától a záródásáig fut balra és felfelé (nyomás 80 → 120 → 100 Hgmm, térfogat 120 → 50 ml). A felső végpontok burkológörbéje az <strong>ESPVR</strong> (End-Systolic Pressure-Volume Relationship, a kontraktilitás / inotrópia mérője!) [PPT: 3.14. dia].</li>
                        <li><strong>Izovolumetriás relaxáció:</strong> Függőleges vonal lefelé (térfogat = állandó 50 ml, nyomás: 100 → 5 Hgmm) [PPT: 3.14. dia].</li>
                    </ol>
                </li>
                <li><strong>A PV-hurok adaptációi terhelésre [PPT: 3.14. dia]:</strong>
                    <ul>
                        <li><em>Preload növekedése (Megnövekedett vénás telődés):</em> A hurok jobbra szélesedik (nő az EDV), a szisztolés nyomáscsúcs kissé emelkedik, és <strong>megnő a pulzustérfogat (SV ↑)</strong> [PPT: 3.14. dia].</li>
                        <li><em>Afterload növekedése (Megnövekedett vérnyomás / TPR):</em> A hurok felfelé magasodik (magasabb szisztolés nyomáscsúcs), az ejekció hamarabb leáll, az <strong>ESV megnő, és átmenetileg csökken a pulzustérfogat (SV ↓)</strong> [PPT: 3.14. dia].</li>
                    </ul>
                </li>
            </ul>

            <!-- III. RÉSZ: A SZÍV MUNKÁJA, PRELOAD ÉS AFTERLOAD -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 3rem;">
                III. RÉSZ: A Szív Munkája, Preload, Afterload és Lépcsőjelenség
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. A szív külső munkája: Kinetikai vs. Nyomási munka [PPT: 3.16–3.17. dia]
            </h3>
            <p>A szív által egy szívciklus alatt végzett teljes külső munka (Stroke Work, pulzusmunka) két komponensből tevődik össze [PPT: 3.16. dia]:</p>
            <ul>
                <li><strong>1. Kinetikai munka ($W_k = \frac{1}{2} \cdot m \cdot v^2$) [PPT: 3.16. dia]:</strong>
                    A vér tömegének felgyorsításához és az aortába történő átmozgatásához szükséges mozgási energia. Nyugalomban ez a teljes külső munka <strong>mindössze 1–5%-át</strong> teszi ki (extrém fizikai terhelésnél, nagy kiáramlási sebességnél érheti el a 10-15%-ot) [PPT: 3.16. dia]!
                </li>
                <li><strong>2. Nyomási / Térfogati munka ($W_p = P \times \Delta V = SV \times MAP$) [PPT: 3.16. dia]:</strong>
                    Az a munka, amely a kamrai vértérfogat (SV) nyomásának felépítéséhez és a szisztémás artériás középnyomással (MAP) szembeni kilökéséhez szükséges. <strong>Ez teszi ki a szív külső munkájának 95–99%-át!</strong> [PPT: 3.16. dia].
                </li>
                <li><strong>Geometriai jelentés [PPT: 3.17. dia]:</strong>
                    A pulzusmunka (Stroke Work) pontosan <strong>megfelel a nyomás-térfogat hurok (PV-loop) belső területének</strong> ($p \times V$) [PPT: 3.17. dia]!
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. Az Afterload (Utóterhelés) kardiológiai fogalma [PPT: 3.17, 3.18. dia]
            </h3>
            <ul>
                <li><strong>Definíció [PPT: 3.18. dia]:</strong>
                    Az utóterhelés mindazon tényezők összessége, amelyek <strong>hozzájárulnak a kamrafal feszüléséhez az ejekció (szisztolé) során</strong>. Gyakorlatilag az a hidrodinamikai ellenállás, amelyet a kamrának le kell küzdenie a vér kilökéséhez [PPT: 3.18. dia].
                </li>
                <li><strong>Értelmezés és tévhit [PPT: 3.18. dia]:</strong>
                    Az afterload leginkább az aortanyomással arányos, de <strong>AZ AORTANYOMÁS NEM AZONOS AZ AFTERLOADDAL!</strong> Az aortanyomás csupán egyik meghatározója a kamrafal feszülésének [PPT: 3.18. dia].
                </li>
                <li><strong>Az afterload meghatározó tényezői [PPT: 3.18. dia]:</strong>
                    <ol>
                        <li><strong>Teljes Perifériás Ellenállás (TPR) és érimpedancia:</strong> az érpálya statikus és pulzatilis ellenállása, valamint a vér viszkozitása [PPT: 3.18. dia].</li>
                        <li><strong>A kamra geometriája (Laplace-törvény):</strong> a kamra belső sugara és falvastagsága [PPT: 3.19. dia].</li>
                        <li><strong>Pleuralis (mellkasi) nyomás:</strong> a pozitív intrapleuralis nyomás (pl. kilégzés, Valsalva-manőver) kívülről nyomja a szívfalat, csökkentve a transzmurális feszülést, serkenti a kiürülést; a negatív intrapleuralis nyomás (erőltetett belégzés) növeli a transzmurális falfeszülést [PPT: 3.18. dia].</li>
                    </ol>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. A Preload (Előterhelés) kardiológiai fogalma [PPT: 3.19–3.21. dia]
            </h3>
            <ul>
                <li><strong>Definíció [PPT: 3.20. dia]:</strong>
                    Az előterhelés mindazon tényezők összessége, amelyek <strong>hozzájárulnak a kamrafal feszüléséhez a diasztolé legvégén</strong> (a szisztolés kontrakciót közvetlenül megelőző pillanatban) [PPT: 3.20. dia].
                </li>
                <li><strong>Értelmezés [PPT: 3.20. dia]:</strong>
                    A preload leginkább a <strong>végdiasztolés térfogattal (EDV)</strong> vagy nyomással (EDP) arányos, de nem azonos vele – a falfeszülést jelenti [PPT: 3.20. dia]!
                </li>
                <li><strong>Az előterhelést meghatározó tényezők [PPT: 3.20. dia]:</strong>
                    <ol>
                        <li><strong>Vénás telődés és centrális vénás nyomás (CVP):</strong> a keringő vértérfogat, vénás tónus, vázizompumpa, légzési szívóhatás és a gravitáció (fekvő vs. álló testhelyzet) [PPT: 3.20. dia].</li>
                        <li><strong>Kamrai compliance:</strong> a kamrafal rugalmas tágulékonysága [PPT: 3.20. dia].</li>
                        <li><strong>Szívfrekvencia:</strong> meghatározza a diasztolés telődési idő hosszát [PPT: 3.20. dia].</li>
                        <li><strong>Pitvari kontraktilitás:</strong> a pitvari szisztolé hatékonysága [PPT: 3.20. dia].</li>
                    </ol>
                </li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">Preload és Afterload szemléltetése klasszikus izommodellben [PPT: 3.21. dia]:</h4>
            <ul>
                <li><strong>A: Nyugalmi állapot (Resting):</strong> terheletlen izom [PPT: 3.21. dia].</li>
                <li><strong>B: Preload hozzáadva (Preload-added):</strong> a kis előterhelő súly felakasztása megnyújtja az izmot a nyugalmi hosszára (beállítja a szarkomerhosszt a diasztolé végén!) [PPT: 3.21. dia].</li>
                <li><strong>C: Afterload hozzáadva (Afterload-added):</strong> egy alátámasztott nehéz súlyt akasztunk az izomra, amely az izmot nyugalomban már nem nyújtja tovább [PPT: 3.21. dia].</li>
                <li><strong>D: Kontrakció (Afterload lifted):</strong> ingerléskor az izom először izometriásan megfeszül, amíg el nem éri az afterload súlyát, majd izotóniásan megrövidül és felemeli a terhet [PPT: 3.21. dia].</li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                4. A pozitív lépcsőjelenség (Treppe / Bowditch-effektus) [PPT: 3.22. dia]
            </h3>
            <ul>
                <li><strong>Jelenség [PPT: 3.22. dia]:</strong>
                    Ha egy nyugalomban lévő emlősszívet (beleértve az embert) hirtelen magasabb frekvenciával kezdünk ingerelni, a kezdeti összehúzódások ereje lépcsőzetesen, ütésről ütésre <strong>fokozatosan növekszik</strong>, amíg el nem ér egy új, magasabb egyensúlyi platót [PPT: 3.22. dia].
                </li>
                <li><strong>Sejtélettani mechanizmus [PPT: 3.22. dia]:</strong>
                    A magasabb szívfrekvencia mellett időegység alatt sokkal több akciós potenciál fut le → több Na+ lép be a sejtbe. A sarcolemma Na+/K+-ATPáz pumpája a rövidülő diasztolé alatt nem képes maradéktalanul kipumpálni ezt a nátriumtöbbletet. A felhalmozódó intracelluláris nátrium lecsökkenti az NCX gradiensét, így a kalcium eltávolítása lassul, és az SR túltöltődik Ca2+-nal. Ennek következtében minden szisztolénál egyre hatalmasabb Ca-transzfer szabadul fel, ami növeli a kontrakció erejét [PPT: 3.22. dia].
                </li>
                <li><strong>Faji különbségek [PPT: 3.22. dia]:</strong>
                    Emberben, kutyában és macskában pozitív lépcsőjelenség látható; nyúlban lapos; patkányban és egérben viszont <strong>negatív lépcsőjelenség</strong> figyelhető meg (mert náluk nyugalomban is maximálisan telített az SR kalciumraktára) [PPT: 3.22. dia].
                </li>
            </ul>

            <!-- ÖSSZEFOGLALÓ KULCSPONTOK SZIGORLATRA -->
            <div style="background: var(--box-bg); border-left: 4px solid var(--accent); padding: 1.2rem; border-radius: 8px; margin-top: 2rem;">
                <h4 style="margin-top: 0; color: var(--primary);">Legfontosabb szigorlati kulcspontok (Take-Home Messages):</h4>
                <ul>
                    <li>A <strong>Wiggers-diagram</strong> a kamranyomás, aortanyomás, pitvari nyomás, kamratérfogat, EKG és szívhangok párhuzamos kapcsolata [PPT: 3.4. dia].</li>
                    <li>Az <strong>izovolumetriás szakaszokban</strong> (kontrakció és relaxáció) valamennyi billentyű zárva van, a térfogat állandó (EDV, ill. ESV), a nyomás meredeken változik [PPT: 3.4. dia].</li>
                    <li>A <strong>billentyűk passzív mechanikai szelepek</strong>: nyitásukat és zárásukat kizárólag a nyomáskülönbség irányítja [PPT: 3.8. dia]. A papilláris izmok nem zárnak, hanem a prolapsust akadályozzák meg [PPT: 3.8. dia]!</li>
                    <li><strong>Szívhangok:</strong> S1 = AV-billentyűk záródása (szisztolé eleje); S2 = semilunaris billentyűk záródása (diasztolé eleje) [PPT: 3.9. dia].</li>
                    <li><strong>Szívzörejek:</strong> Aorta stenosis és Mitralis regurgitáció = <em>szisztolés</em>; Aorta regurgitáció és Mitralis stenosis = <em>diasztolés</em>; PDA = <em>folyamatos</em> [PPT: 3.11. dia].</li>
                    <li>A kamratelődés döntő része (70-80%) a <strong>korai gyors telődés alatt</strong> zajlik; a pitvari szisztolé nyugalomban csak 10-15%-ot ad, de tachycardia esetén nélkülözhetetlen [PPT: 3.7. dia]!</li>
                    <li><strong>Ejekciós Frakció:</strong> $EF = SV / EDV \ge 55\%$ [PPT: 3.12. dia].</li>
                    <li>A <strong>PV-hurok belső területe</strong> pontosan megfelel a szív külső pulzusmunkájának (Stroke Work) [PPT: 3.17. dia].</li>
                    <li>A szív külső munkájának <strong>95–99%-a nyomási munka ($W_p = SV \times MAP$)</strong>, a mozgási/kinetikai munka csupán 1–5% [PPT: 3.16. dia]!</li>
                    <li><strong>Preload:</strong> a diasztolé végi kamrafalfeszülés (arányos az EDV-vel) [PPT: 3.20. dia]. <strong>Afterload:</strong> a vér kilökésével szembeni falfeszülés az ejekció alatt (arányos az aortanyomással / TPR-rel) [PPT: 3.18. dia].</li>
                    <li><strong>Bowditch-féle lépcsőjelenség (Treppe):</strong> magasabb szívfrekvencián a Na+/K+-pumpa relatív elégtelensége miatti intracelluláris Ca-akkumuláció fokozza az összehúzódás erejét [PPT: 3.22. dia].</li>
                </ul>
            </div>

        </div>
    `
});