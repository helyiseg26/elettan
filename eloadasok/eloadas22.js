// eloadasok/eloadas22.js
window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-22",
    title: "22. Előadás: A perctérfogat autoregulációja",
    shortName: "Perctérfogat autoregulációja",
    html: `
        <div style="font-family: inherit; line-height: 1.7; color: var(--text);">

            <!-- BEVEZETÉS ÉS ALAPFOGALMAK -->
            <div style="background: var(--info-bg); border-left: 4px solid var(--primary-light); padding: 1.2rem; border-radius: 8px; margin-bottom: 2rem;">
                <h3 style="margin-top: 0; color: var(--primary);">Bevezetés: A perctérfogat (Cardiac Output, CO) és a szabályozás szintjei [PPT: 4.1–4.2. dia]</h3>
                <p>A szív alapvető élettani funkciója a szervezet metabolikus igényeinek megfelelő <strong>perctérfogat (Cardiac Output, CO)</strong> fenntartása és adaptálása a változó körülmények között [PPT: 4.2. dia]:</p>
                <ul>
                    <li><strong>Perctérfogat definíciója [PPT: 4.2. dia]:</strong>
                        Az egy perc alatt a bal (vagy jobb) kamrából a nagyerekbe kipumpált vértérfogat.
                        <div style="background: var(--bg); border: 1px solid var(--border); border-radius: 6px; padding: 0.6rem; text-align: center; margin: 0.6rem 0; font-weight: bold; font-size: 1.05rem;">
                            CO = SV × HR = 70 ml/ütés × 75 ütés/perc = 5,25 L/perc [PPT: 4.2. dia]
                        </div>
                        Ahol <strong>SV (Stroke Volume, pulzustérfogat)</strong> az egy összehúzódás alatt kidobott vér (~70 ml), <strong>HR (Heart Rate, szívfrekvencia)</strong> a percenkénti szívdobbanások száma (~70–75/perc) [PPT: 4.2. dia].
                    </li>
                    <li><strong>Szívindex (Cardiac Index, CI) [PPT: 4.2. dia]:</strong>
                        Mivel a perctérfogat egy 45 kg-os és egy 120 kg-os emberben természetes módon eltér, a klinikai gyakorlatban a testfelszínre (BSA, m<sup>2</sup>) standardizált értéket használják:
                        <div style="background: var(--bg); border: 1px solid var(--border); border-radius: 6px; padding: 0.5rem; text-align: center; margin: 0.5rem 0; font-weight: bold; color: var(--primary-light);">
                            Szívindex = CO / Testfelszín   (Fiziológiás normálérték: 2,6 – 4,2 L/perc/m<sup>2</sup>) [PPT: 4.2. dia]
                        </div>
                        Közvetlenül megmutatja, hogy a szív mint pumpa mennyire látja el hatékonyan az adott testtömegű szervezetet [PPT: 4.2. dia].
                    </li>
                    <li><strong>A perctérfogat kétirányú szabályozási rendszere [PPT: 4.2. dia]:</strong>
                        <ul>
                            <li><strong>Autoreguláció (Intrinsic / Heterometriás szabályozás):</strong> A szív saját, beépített mechanizmusa, amely kizárólag a <em>pulzustérfogatot (SV)</em> szabályozza a szarkomerek hosszának változtatásán keresztül, állandó szívfrekvencia mellett [PPT: 4.2. dia].</li>
                            <li><strong>Neuroendokrin reguláció (Extrinsic / Homeometriás szabályozás):</strong> Külső idegi és hormonális hatások összessége, amely mind a <em>pulzustérfogatot (SV)</em>, mind a <em>szívfrekvenciát (HR)</em> erőteljesen módosítja [PPT: 4.2. dia].</li>
                        </ul>
                    </li>
                </ul>

                <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin-top: 0.8rem; border-radius: 4px;">
                    <strong>🎙️ [Oktatói kiegészítés – 'A fűszernek áradnia kell' és a perctérfogat abszolút parancsa]:</strong><br>
                    <em>„Mindig a Dűne híres mondását szoktam idézni a hallgatóknak: 'A fűszernek áradnia kell!' A szívélettanban ez a perctérfogatra vonatkozik: a perctérfogatnak minden körülmények között áradnia kell! Ha a perctérfogat a szükséglet alá esik, az agy és a szív keringése másodpercek alatt kritikussá válik, és keringési sokk, eszméletvesztés lép fel. A szív mindent ennek az egyetlen paraméternek rendel alá: ha kell, kitágul, ha kell, megfeszül, ha kell, frekvenciát emel, csak hogy a perctérfogatot fenntartsa!” [PPT: 4.2. dia]</em>
                </div>
            </div>

            <!-- I. RÉSZ: EGYENSÚLYI ÁLLAPOT ÉS A FRANK-STARLING MECHANIZMUS -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2rem;">
                I. RÉSZ: A Szív Egyensúlyi Állapota és a Frank–Starling Törvény
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. A szív egyensúlyi állapotának feltételei és az aszimmetria [PPT: 4.3. dia]
            </h3>
            <p>A szív zárt keringési rendszerbe kapcsolt pumpaként egyensúlyi állapotban (steady-state) működik [PPT: 4.3. dia]:</p>
            <ul>
                <li><strong>Az egyensúlyi állapot feltételei [PPT: 4.3. dia]:</strong>
                    <ol>
                        <li>A szívfrekvencia (HR) állandó [PPT: 4.3. dia].</li>
                        <li>A töltőnyomás (tágulási nyomás) állandó [PPT: 4.3. dia].</li>
                        <li><strong>Vénás telődés (Venous Return) = Pulzustérfogat (Stroke Volume)</strong>: ami vér beáramlik a kamrába, pontosan annyit kell a kamrának kilöknie [PPT: 4.3. dia]!</li>
                        <li>Nincs jelen külső neuroendokrin (vegetatív idegi vagy hormonális) szabályozás [PPT: 4.3. dia].</li>
                    </ol>
                </li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Alapvető keringési aszimmetria: Miért késik a vénás válasz?]:</strong><br>
                <em>„Nagyon figyeljetek a 4.3. dia alsó feliratára, mert ez egy klasszikus szigorlati logikai kérdés:
                Ha <strong>megváltozik a vénás telődés</strong>, annak következménye a kamra pulzustérfogatán <strong>AZONNAL</strong> (már a legközelebbi szisztolé során) megjelenik, hiszen a beáramló vér közvetlenül megnyújtja a kamrafalat!
                Ezzel szemben, ha <strong>megváltozik a pulzustérfogat</strong> (pl. a kamra hirtelen többet lök ki az aortába), annak következménye a vénás visszaáramláson csak <strong>JELENTŐS KÉSÉSSEL</strong> (több szívciklus, akár fél perc múlva) jelentkezik! Miért? Mert a kilökött vérnek át kell vándorolnia a teljes nagyvérköri érpályán: az elasztikus artériákon, az arteriolákon, a kapillárishálózaton, a hatalmas kapacitású vénás öblökön, mire visszaér a jobb szívfélbe. Emiatt az aszimmetria miatt a szívnek képesnek kell lennie önállóan, ütésről ütésre pufferelni a pillanatnyi térfogateltéréseket!” [PPT: 4.3. dia]</em>
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. A Frank–Starling mechanizmus működése 1: A perifériás ellenállás (Afterload) növekedése [PPT: 4.4–4.6. dia]
            </h3>
            <p>Mi történik, ha a szív állandó vénás beáramlás és szívfrekvencia mellett hirtelen megnövekedett perifériás ellenállással (TPR / Afterload emelkedés) találja szembe magát [PPT: 4.4. dia]?</p>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">A) Az időbeli lefolyás lépésről lépésre (Ütésről ütésre) [PPT: 4.4, 4.5. dia]:</h4>
            <ol>
                <li><strong>1. ciklus (Az ellenállás-ugrás pillanata):</strong> A kamra megkezdi a szisztolét, de a megnövekedett aortanyomással szemben a normál összehúzódási erő nem képes a teljes pulzustérfogatot kilökni. Az ejekció hamarabb leáll → <strong>a pulzustérfogat (SV) átmenetileg lecsökken</strong> [PPT: 4.4. dia].</li>
                <li>Mivel kevesebb vér távozott, a szisztolé végén a kamrában több vér marad vissza → <strong>megnő a végszisztolés térfogat (ESV ↑)</strong> [PPT: 4.4. dia].</li>
                <li><strong>2. ciklus:</strong> A változatlan vénás visszaáramlásból érkező normál vérmennyiség rárakódik a megnövekedett ESV-re → <strong>a végdiasztolés térfogat ugrásszerűen megnő (EDV ↑)</strong> [PPT: 4.4. dia].</li>
                <li>A nagyobb EDV jobban kitágítja a kamrát, a szarkomerek megnyúlnak → a Frank–Starling törvény értelmében <strong>a kamraizomzat sokkal nagyobb összehúzódási erőt fejt ki</strong> [PPT: 4.4. dia].</li>
                <li><strong>3–5. ciklus (Új egyensúly elérése):</strong> A fokozott összehúzódási erő révén a kamra a magasabb aortanyomással szemben is képes pontosan ugyanazt a kiindulási pulzustérfogatot (~70 ml) kilökni [PPT: 4.4. dia]!</li>
            </ol>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">B) Megjelenése a Nyomás-Térfogat (PV) Hurkon [PPT: 4.6. dia]:</h4>
            <ul>
                <li><strong>Megnövekedett utóterhelés esetén [PPT: 4.6. dia]:</strong>
                    <ul>
                        <li>A hurok felső széle magasabbra csúszik az ESPVR vonal mentén (aorta nyomás ↑)[cite: 30].</li>
                        <li>A hurok jobbra tolódik a térfogattengelyen[cite: 30].</li>
                        <li><strong>Az új egyensúlyi állapotban [PPT: 4.6. dia]:</strong>
                            <ul>
                                <li><strong>Pulzustérfogat (SV): VÁLTOZATLAN</strong> (a hurok szélessége megegyezik a kontrollal!) [PPT: 4.6. dia].</li>
                                <li><strong>Végdiasztolés térfogat (EDV): MEGNŐTT (↑)</strong> [PPT: 4.6. dia].</li>
                                <li><strong>Végszisztolés térfogat (ESV): MEGNŐTT (↑)</strong> [PPT: 4.6. dia].</li>
                                <li><strong>Ejekciós Frakció (EF = SV / EDV): CSÖKKENT (↓)</strong> [PPT: 4.6. dia].</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><strong>Csökkent utóterhelés esetén (Vazodilatáció / Afterload esés) [PPT: 4.6. dia]:</strong>
                    A hurok balra és lefelé tolódik[cite: 30]. Az új egyensúlyban: <strong>SV változatlan</strong>, <strong>EDV csökkent (↓)</strong>, <strong>ESV csökkent (↓)</strong>, <strong>EF megnőtt (↑)</strong> [PPT: 4.6. dia].
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. A Frank–Starling mechanizmus működése 2: A vénás telődés (Preload) változása [PPT: 4.7–4.9. dia]
            </h3>
            <p>Hogyan reagál a szív, ha a perifériás ellenállás változatlan, de hirtelen megnő a szív felé áramló vénás vérmennyiség (pl. fekvő testhelyzet, infúzió) [PPT: 4.7. dia]?</p>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">A) Az időbeli lefolyás lépései [PPT: 4.7. dia]:</h4>
            <ol>
                <li>Hirtelen megnő a vénás telődés → a diasztolé alatt több vér áramlik a kamrába → <strong>a végdiasztolés térfogat meredeken megemelkedik (EDV ↑)</strong> [PPT: 4.7. dia].</li>
                <li>A kamrafal megnyúlik, a szarkomerhossz nő → a megnövekedett falfeszülés miatt a kamra <strong>jóval nagyobb összehúzódási erőt fejt ki</strong> a szisztolében [PPT: 4.7. dia].</li>
                <li>Az erőteljesebb szisztolé lényegesen nagyobb vértérfogatot lök ki az aortába → <strong>a pulzustérfogat (SV) megnő</strong> [PPT: 4.7. dia]!</li>
                <li>Néhány ciklus alatt a megnövekedett pulzustérfogat eléri a megnövekedett vénás telődés ütemét, és beáll az új egyensúlyi állapot [PPT: 4.7. dia].</li>
            </ol>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">B) Megjelenése a PV-hurkon [PPT: 4.8, 4.9. dia]:</h4>
            <ul>
                <li><strong>Megnövekedett előterhelés (Preload ↑) [PPT: 4.8. dia]:</strong>
                    A hurok jobb oldala jobbra tolódik az EDPVR passzív compliance görbe mentén[cite: 32].
                    <strong>Új egyensúly [PPT: 4.8. dia]:</strong> <strong>SV megnőtt (↑)</strong>, <strong>EDV megnőtt (↑)</strong>, <strong>ESV kismértékben nőtt (↑)</strong>, <strong>EF enyhén nő vagy változatlan</strong> [PPT: 4.8. dia].
                </li>
                <li><strong>Csökkent előterhelés (Preload ↓ / Vérzés, felállás) [PPT: 4.8. dia]:</strong>
                    A hurok balra szűkül[cite: 32]. <strong>Új egyensúly [PPT: 4.8. dia]:</strong> <strong>SV csökkent (↓)</strong>, <strong>EDV csökkent (↓)</strong>, <strong>ESV csökkent (↓)</strong> [PPT: 4.8. dia].
                </li>
                <li><strong>Vena Cava Occlusio kísérleti módszer [PPT: 4.9. dia]:</strong>
                    Kísérletes körülmények között a vena cava inferior átmeneti leszorításával fokozatosan csökkentik a vénás beáramlást[cite: 33]. Az egymást követő PV-hurkok bal alsó pontjait összekötve kapjuk meg az <strong>EDPVR</strong> görbét, a bal felső pontok lineáris illesztése pedig az <strong>ESPVR</strong> egyenest adja meg (amelynek meredeksége a tiszta inotrópia legpontosabb mérőszáma!) [PPT: 4.9. dia].
                </li>
            </ul>

            <!-- II. RÉSZ: A FRANK-STARLING TÖRVÉNY MOLEKULÁRIS MECHANIZMUSA -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 3rem;">
                II. RÉSZ: A Frank–Starling Törvény Molekuláris Mechanizmusa
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. A három bizonyított celluláris pillér [PPT: 4.10–4.13. dia]
            </h3>
            <p>Hogyan képes a szívizom pusztán a mechanikai megnyújtás hatására nagyobb erőt kifejteni anélkül, hogy több kalcium szabadulna fel az SR-ből? A modern sejtélettan három szinergista mechanizmust azonosított [PPT: 4.13. dia]:</p>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">1. pillér: A Troponin-C kalciumérzékenysége hosszfüggő [PPT: 4.10. dia]:</h4>
            <ul>
                <li>Ha a szarkomer hossza a nyugalmi 1,65 μm-ről a fiziológiás 2,15 μm-re növekszik, a feszülés-kalcium koncentráció görbe meredeken <strong>balra tolódik</strong> (a $pCa_{50}$ értéke alacsonyabb kalciumkoncentrációk felé vándorol) [PPT: 4.10, 4.12. dia]!</li>
                <li><strong>Ez azt jelenti:</strong> változatlan intracelluláris kalciumszint mellett a megnyújtott szarkomer Troponin C alegysége sokkal nagyobb affinitással köti a kalciumot, így sokkal több kereszthíd tud bekapcsolódni az erőgenerálásba [PPT: 4.10. dia]!</li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">2. pillér: A működő kereszthidak száma hosszfüggő [PPT: 4.11. dia]:</h4>
            <ul>
                <li>A fiziológiás szarkomerhossz-tartományban (1,8 – 2,2 μm) a nyújtás optimálisabb geometriai átfedést hoz létre a vékony (aktin) és vastag (miozin) filamentumok között [PPT: 4.11. dia].</li>
                <li>Nő a szarkomer hossztengelye mentén elérhető aktomiozin kötések száma [PPT: 4.11. dia].</li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">3. pillér: A filamentumok közötti távolság (Lattice spacing) csökkenése és a Titin [PPT: 4.12. dia]:</h4>
            <ul>
                <li>Mivel a szívizomsejt citoplazmája állandó térfogatú vízbázisú gél, a sejt hosszirányú megnyújtása a keresztmetszet csökkenésével jár [PPT: 4.12. dia].</li>
                <li><strong>Lattice spacing csökkenés:</strong> A vékony és vastag filamentumok közötti <strong>oldalirányú távolság lecsökken</strong> → az aktin és a miozin közelebb kerül egymáshoz → a miozin fejek sokkal könnyebben és gyorsabban érik el az aktin kötőhelyeit [PPT: 4.12. dia]!</li>
                <li><strong>A Titin óriásfehérje mechanikai szerepe [PPT: 4.12. dia]:</strong>
                    A titin molekula (N2B és N2BA izoformák) a Z-lemezt köti össze a vastag filamentummal[cite: 36]. Megnyújtáskor a titin PEVK és Ig doménjei megfeszülnek, és egy befelé irányuló radiális erőt ($F \cdot \sin\theta$) fejtenek ki, amely fizikailag <strong>összepréseli a filamentumrácsot</strong>, közvetlenül csökkentve a térközt [PPT: 4.12. dia]!
                </li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – A megdőlt dogma: Nő-e a kalcium-felszabadulás?]:</strong><br>
                <em>„A 4.13. dián láttok egy nagyon fontos megjegyzést: régebben azt tanították, hogy a szarkomer megnyújtása fokozza az SR-ből kiáramló kalcium mennyiségét. Ma már ezt a nemzetközi kardiális elektrofiziológia megkérdőjelezi és elveti! Fluoreszcens kalciummérésekkel egyértelműen igazolták, hogy a Frank–Starling mechanizmus alatt a citoplazmatikus kalcium-transz素晴ens amplitúdója NEM változik! Nem a kalcium mennyisége nő, hanem a Troponin C érzékenysége és a filamentumok geometriai közelsége javul!” [PPT: 4.13. dia]</em>
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. A Frank–Starling törvény definíciója és érvényesülése [PPT: 4.13, 4.14. dia]
            </h3>
            <ul>
                <li><strong>Klasszikus definíció (Otto Frank 1895, Ernest Starling 1914) [PPT: 4.13. dia]:</strong>
                    A szív összehúzódásának erejét a <strong>kamrafal kiindulási feszülése, illetve a szívizomrostok végdiasztolés hossza (End-Diastolic Volume) határozza meg</strong> [PPT: 4.13. dia].
                </li>
                <li><strong>Mikor működik a törvény [PPT: 4.14. dia]?</strong>
                    A Frank–Starling mechanizmus a szív <strong>minden egyes ütésénél jelen van</strong>, de éber szervezetben a szimpatikus és paraszimpatikus idegrendszer tónusa elfedheti [PPT: 4.14. dia].
                    <em>Legfontosabb élettani helyzetek, ahol tisztán megfigyelhető [PPT: 4.14. dia]:</em>
                    <ol>
                        <li><strong>A két szívfél szinkronizációja [PPT: 4.14. dia]:</strong> Ha a jobb kamra akár csak 1 cseppel több vért lökne ki percenként, mint a bal, perceken belül tüdőödéma alakulna ki; a Frank–Starling törvény biztosítja, hogy a bal kamra a hozzá érkező többletvér hatására azonnal megnöveli a saját ejekcióját, szigorúan egyensúlyban tartva a kis- és nagyvérkört!</li>
                        <li><strong>Testhelyzet-változások kompenzálása [PPT: 4.14. dia]:</strong> Fekvésből felálláskor (ortosztázis) a gravitáció miatt lecsökken a vénás visszaáramlás, a Frank–Starling mechanizmus azonnal csökkenti a szív pulzustérfogatát, megakadályozva a vérnyomáskiugrást [PPT: 4.14. dia].</li>
                        <li><strong>Enyhe fizikai munka edzett személyeken [PPT: 4.14. dia]:</strong> Mielőtt a szimpatikus idegrendszer bekapcsolna, a fokozott izompumpa miatti vénás telődés-növekedést a szív tisztán autoregulációval dolgozza fel [PPT: 4.14. dia].</li>
                    </ol>
                </li>
            </ul>

            <!-- III. RÉSZ: AZ ANREP-EFFEKTUS -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 3rem;">
                III. RÉSZ: Az Utóterhelés Autoregulációja: Az Anrep-effektus
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. Kétfázisú adaptáció az utóterhelés ugrására [PPT: 4.15. dia]
            </h3>
            <p>Gleb von Anrep orosz-brit fiziológus 1912-ben írta le, hogy ha az aortát hirtelen leszűkítik (Transverse Aortic Constriction, TAC → az afterload drasztikusan megugrik), a szív két teljesen eltérő időskálájú fázisban alkalmazkodik [PPT: 4.15. dia]:</p>

            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 10px; text-align: left;">Fázis</th>
                        <th style="padding: 10px; text-align: left;">Időskála [PPT: 4.15. dia]</th>
                        <th style="padding: 10px; text-align: left;">Mechanizmus</th>
                        <th style="padding: 10px; text-align: left;">Kamrai paraméterek [PPT: 4.15. dia]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>1. Korai fázis (Frank-Starling válasz) [PPT: 4.15. dia]</strong></td>
                        <td>Azonnali (<strong>1 percen belül</strong>) [PPT: 4.15. dia]</td>
                        <td>Tisztán <strong>heterometriás szabályozás</strong>: a magas aortanyomással szemben a kamra nem tud kiürülni, az EDV és a szarkomerhossz megnyúlik [PPT: 4.15. dia].</td>
                        <td>A bal kamra kitágul (LVV nő), a Stroke Work nő, de az <strong>Ejekciós Frakció drámaian lezuhan: 68% → 35%</strong> [PPT: 4.15. dia]!</td>
                    </tr>
                    <tr>
                        <td><strong>2. Késői fázis (Valódi Anrep-effektus / SFR) [PPT: 4.15. dia]</strong></td>
                        <td>Lassú, progresszív (<strong>10–15 perc alatt</strong> fejlődik ki) [PPT: 4.15. dia]</td>
                        <td><strong>Slow Force Response (SFR)</strong>: a szívizom belső inotrópiája fokozódik autokrin úton, a szarkomerek visszarövidülnek a normál hosszukra [PPT: 4.15, 4.16. dia]!</td>
                        <td>A kamra mérete normalizálódik (a tágulat megszűnik!), a nyomás tovább emelkedik, és az <strong>Ejekciós Frakció teljesen helyreáll: 35% → 67%</strong> [PPT: 4.15. dia]!</td>
                    </tr>
                </tbody>
            </table>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. Az Anrep-effektus autokrin molekuláris mechanizmusa [PPT: 4.16. dia]
            </h3>
            <p>Hogyan növeli meg a kamra a kontraktilitását külső idegi hatás nélkül az utóterhelés tartós fennállásakor [PPT: 4.16. dia]?</p>

            <div style="background: var(--bg); border: 1.5px solid var(--border); border-radius: 8px; padding: 1.2rem; margin: 1rem 0;">
                <h4 style="color: var(--primary); margin-top:0;">A jelátviteli kaszkád lépései (Cingolani-modell, 2013) [PPT: 4.16. dia]:</h4>
                <ol style="margin-left: 1.2rem; line-height: 1.8;">
                    <li><strong>Mechanikai nyújtás (Myocardial Stretch):</strong> A magas afterload miatt feszülő kamrafal mechanoszenzoros receptorokat aktivál [PPT: 4.16. dia].</li>
                    <li><strong>Autokrin mediátorok felszabadulása:</strong> A szívizomsejtekből lokálisan <strong>Angiotenzin II (Ang II)</strong> és <strong>Endothelin-1 (ET-1)</strong> szabadul fel a szövetközti térbe [PPT: 4.16. dia].</li>
                    <li><strong>Receptorok aktivációja:</strong> Az Ang II az <strong>AT1</strong> receptorhoz, az ET-1 az <strong>ETA</strong> receptorhoz kötődik a szarkolemmán [PPT: 4.16. dia].</li>
                    <li><strong>Redox kaszkád és kinázok:</strong> A receptorok NADPH-oxidáz (NOX) közvetítésével reaktív oxigéngyököket (ROS) termelnek, aktiválva az ERK1/2 kinázokat [PPT: 4.16. dia].</li>
                    <li><strong>A Na+/H+ cserélő (NHE-1) foszforilációja:</strong> Az aktivált NHE-1 a citoplazmatikus protonokért cserébe masszív nátrium-beáramlást indít el [PPT: 4.16. dia].</li>
                    <li><strong>Intracelluláris nátrium felhalmozódás:</strong> A szubmembranózus térben megemelkedik a [Na+]i szintje [PPT: 4.16. dia].</li>
                    <li><strong>NCX reverz üzemmód (vagy csökkent Ca-leadás):</strong> A magas belső nátriumszint megfordítja a Na+/Ca2+ kicserélőt (NCX reverse mode), vagy gátolja a kalcium leadását → <strong>nettó Ca2+ lép be a szívizomsejtbe</strong> [PPT: 4.16. dia]!</li>
                    <li><strong>Fokozott kontraktilitás:</strong> Az SR kalciumraktára feltöltődik, a szisztolés kalcium-transz素晴ens amplitúdója megnő → <strong>a szív összehúzódási ereje 15 perc alatt progresszíven megnő</strong> [PPT: 4.15, 4.16. dia]!</li>
                </ol>
            </div>

            <!-- ÖSSZEFOGLALÓ KULCSPONTOK SZIGORLATRA -->
            <div style="background: var(--box-bg); border-left: 4px solid var(--accent); padding: 1.2rem; border-radius: 8px; margin-top: 2rem;">
                <h4 style="margin-top: 0; color: var(--primary);">Legfontosabb szigorlati kulcspontok (Take-Home Messages):</h4>
                <ul>
                    <li>A <strong>perctérfogat (CO)</strong> a szív alapvető teljesítménymutatója: $CO = SV \times HR \approx 5-5,5$ L/perc; standardizált formája a <strong>Szívindex (2,6–4,2 L/perc/m2)</strong> [PPT: 4.2. dia].</li>
                    <li>Az <strong>autoreguláció (heterometriás szabályozás)</strong> a szív belső sajátossága: állandó szívfrekvencia mellett a <em>pulzustérfogatot</em> állítja be a szarkomerhossz változtatásával [PPT: 4.2, 4.13. dia].</li>
                    <li><strong>Vénás telődés változása:</strong> azonnal megjelenik a pulzustérfogaton; a <strong>pulzustérfogat változása</strong> csak késéssel jut vissza a vénás telődésre [PPT: 4.3. dia].</li>
                    <li><strong>Megnövekedett Afterload esetén a Frank-Starling adaptáció:</strong> új egyensúlyban az <strong>SV változatlan</strong>, de az <strong>EDV és ESV megnő</strong>, az <strong>EF csökken</strong> [PPT: 4.6. dia].</li>
                    <li><strong>Megnövekedett Preload esetén:</strong> a végdiasztolés telődés növeli a szarkomerhosszt, és az <strong>SV megnő</strong> [PPT: 4.8. dia].</li>
                    <li>A Frank–Starling törvény <strong>nem kalcium-felszabadulás növekedésen alapul</strong>, hanem: 1. a Troponin C Ca-érzékenységének fokozódásán, 2. a működő kereszthidak számának növekedésén, és 3. a filamentumok közötti távolság (lattice spacing) csökkenésén a <strong>Titin</strong> feszülése miatt [PPT: 4.10–4.13. dia]!</li>
                    <li><strong>Anrep-effektus:</strong> Hirtelen afterload növekedésre az azonnali Frank-Starling tágulatot egy lassú (10-15 perces) autokrin adaptáció követi (Ang II, ET-1, NHE-1, NCX reverz → Ca2+ ↑), amely helyreállítja az ejekciós frakciót és megszünteti a kamratágulatot [PPT: 4.15, 4.16. dia]!</li>
                </ul>
            </div>

        </div>
    `
});