// eloadasok/eloadas7.js
// 7. Előadás: Neuronok és gliasejtek membránsajátságai, neuronális ionáramok és akciós potenciál mintázatok

window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-7",
    title: "7. Előadás – Gliasejtek, neuronális membránfunkciók és ionáramok",
    shortName: "Glia és neuronális ionáramok",
    html: `
    <div style="line-height: 1.75; font-size: 1.02rem;">

        <!-- BEVEZETÉS ÉS HÁTTÉR -->
        <div style="background: rgba(43, 108, 176, 0.08); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">🎙️ Tanári bevezetés a 7. előadáshoz</h3>
            <p>
                A tanár az előadás elején leszögezi: az elkövetkező előadásokban a funkcionális idegrendszer építőkockáit vesszük sorra[cite: 5]. Először megvizsgáljuk az egyedi sejteket (gliasejtek, majd neuronok), megnézzük ezek membránjait és ioncsatornáit, majd az elemi hálózatok összekapcsolódását, és végül azt, hogyan lesz mindebből összehangolt agykérgi működés és EEG[cite: 5]. 
                Bár a diák nagy része a neuronokról szól, az előadást a méltatlanul háttérbe szorított <strong>gliasejtekkel</strong> kezdjük, amelyek nélkül a neuronok egyetlen percig sem lennének képesek működni[cite: 5]!
            </p>
        </div>

        <!-- 1-3. DIA: GLIASEJTEK TÍPUSAI ÉS FUNKCIÓI -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 1–3. Dia: A gliasejtek típusai és funkciói</h3>
            <p><strong>A központi (KIR) és perifériás idegrendszer (PIR) gliasejtjeinek felosztása és élettani feladatai:</strong></p>
            <ul>
                <li><strong>Oligodendrocyta (KIR) és Schwann-sejt (PIR):</strong>
                    <ul>
                        <li><em>Funkció:</em> Kialakítják a <strong>myelinhüvelyt</strong> az axonok körül[cite: 7].</li>
                        <li><em>Élettani jelentőség:</em> Növelik a membrán ellenállását és csökkentik a kapacitását, ezáltal lehetővé teszik a gyors, energiatakarékos <strong>szaltatórikus ingerületvezetést</strong> (a Ranvier-befűződések között ugrálva). Egyetlen oligodendrocyta több axon szakaszát is velőshüvellyel látja el, míg a Schwann-sejt csak egyetlen internodiumot[cite: 7].</li>
                    </ul>
                </li>
                <li><strong>Asztrociták (Protoplazmás a szürkeállományban, Fibrózus a fehérállományban):</strong>
                    <ul>
                        <li><strong>Territoriális elrendeződés („labdák a játszóházban”):</strong> A tanár kiemeli, hogy az asztrociták a KIR-ben saját térfogatot foglalnak el, nem fedik át egymást, hanem szigorúan elhatárolt doméneket uralnak[cite: 5].</li>
                        <li><strong>Extracelluláris K⁺-pufferelés:</strong> Amikor a neuronok nagy frekvenciával tüzelnek, rengeteg K⁺ áramlik ki az extracelluláris térbe[cite: 5]. Ha ez ott maradna, tartósan depolarizálná a szomszédos idegsejteket, gátolva a repolarizációt (excitotoxicitást és görcsöket okozva)[cite: 5]. Az asztrociták felveszik és elvezetik a felesleges K⁺-t (spatial buffering), ezzel védve a neuronokat[cite: 5, 7].</li>
                        <li><strong>Takarítás és metabolikus podpora:</strong> Eltávolítják a szinaptikus résből a kiszabadult neurotranszmittereket (főleg a glutamátot és GABA-t), és glutaminná alakítva visszajuttatják a neuronokhoz[cite: 5, 7].</li>
                        <li><strong>Neurovaszkuláris kapcsolás (NVU - Neurovascular Unit):</strong> Az asztrociták nyúlványaikkal (perivascularis talpak) körülveszik az agyi kapillárisokat[cite: 7]. Amikor a neuronok fokozottan tüzelnek, az asztrocita ezt érzékeli, és helyi <em>vazodilatációt</em> (értágulatot) indít el a véráramlás növelésére[cite: 5, 7]. Ez a neurovaszkuláris csatolás képezi a funkcionális mágneses rezonancia képalkotás (fMRI) alapját[cite: 5, 7]!</li>
                    </ul>
                </li>
                <li><strong>Microglia:</strong> Mezodermális eredetű immunsejtek; a KIR „őrző-védői”, rezidens makrofágok és antigén-prezentáló sejtek, amelyek fagocitózissal takarítják el az elhalt sejteket és kórokozókat[cite: 5, 7].</li>
                <li><strong>Ependyma sejtek:</strong> Csillós hámsejtek, amelyek az agykamrák falát és a canalis centralist bélelik[cite: 7]. Részt vesznek a <em>cerebrospinalis folyadék (CSF / liquor)</em> termelésében, áramoltatásában, és mechanikai/funkcionális gátat képeznek az agyállomány és a liquor között[cite: 5, 7].</li>
                <li><strong>Speciális gliák:</strong> Radiális glia (fejlődés során irányítja a neuronok vándorlását), Bergmann-glia (a kisagyban a Purkinje-sejteket támogatja), Müller-sejtek (a retina támasztó gliái)[cite: 5, 7].</li>
            </ul>
        </div>

        <!-- 4-5. DIA: GLIASEJTEK MEMBRÁNSA JÁTSÁGAI ÉS A HÁROMRÉSZES SZINAPSZIS -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 4–5. Dia: A gliasejtek membránsajátságai és a háromrészes szinapszis (Tripartite Synapse)</h3>
            <p><strong>Miért NEM képeznek a gliasejtek akciós potenciált? (Kiemelt tanári magyarázat):</strong></p>
            <ul>
                <li><strong>Nyugalmi membránpotenciál:</strong> Rendkívül negatív, <strong>-80 és -90 mV</strong> közötti[cite: 5, 7]. Ennek oka, hogy a gliamembránban óriási sűrűségben találhatók K⁺-áramok (beirányuló egyenirányító K⁺-csatornák, Kir)[cite: 5, 7]. A nyugalmi potenciál szinte pontosan a K⁺ Nernst-potenciáljára áll be[cite: 5].</li>
                <li><strong>Feszültségfüggő Na⁺-csatornák hiánya:</strong> A gliasejtek membránjában a Na⁺-csatornák denzitása elenyészően kicsi: mindössze kb. <strong>0,1 / &mu;m<sup>2</sup></strong> (szemben a neuronokkal, ahol ez akár 1000–10 000 / &mu;m<sup>2</sup> is lehet)[cite: 5, 7]!</li>
                <li><strong>Következmény:</strong> Bármilyen inger éri a gliasejtet, azon <strong>csak elektrotónusos (passzív) potenciálváltozás alakulhat ki, AKCIÓS POTENCIÁL NEM</strong>[cite: 5, 7]. Érett állapotban a gliasejt elektromosan nem ingerlékeny sejt[cite: 5].</li>
                <li><strong>Asztrociták Ca²⁺-hullámai:</strong> Ha akciós potenciál nincs is, a kommunikáció létezik: a környező neuronok transzmitterürítésére válaszul az asztrocitákban <em>lassú intracelluláris Ca²⁺-koncentráció hullámok</em> futnak végig (ezt a kísérleti videókon fluoreszcens Ca²⁺-indikátorokkal, pl. GCaMP6-tal teszik láthatóvá)[cite: 5, 7].</li>
                <li><strong>A Háromrészes szinapszis („Tripartite Synapse”):</strong>
                    <ul>
                        <li>A klasszikus szinapsziskép (preszinaptikus végbunkó + posztszinaptikus sejt) a valóságban kiegészül egy harmadik elemmel: a szinapszist szorosan beborító <strong>asztrocita nyúlvánnyal</strong>[cite: 5, 7]!</li>
                        <li>Az asztrocita metabotrop glutamátreceptorain (mGluR) keresztül érzékeli az idegi neurotranszmittert (Nt), válaszként megemeli a belső Ca²⁺-szintjét, és maga is molekulákat – ún. <strong>gliotranszmittereket (Gt)</strong> – bocsát ki (pl. glutamátot, ATP-t, D-szerint)[cite: 5, 7]. Ezek visszahatnak mind a pre-, mind a posztszinapszisra, aktívan szabályozva a szinaptikus átvitel erősségét[cite: 5, 7]!</li>
                    </ul>
                </li>
            </ul>

            <!-- Háromrészes szinapszis SVG ábra -->
            <div style="text-align: center; margin: 1.5rem 0;">
                <svg viewBox="0 0 620 220" style="max-width: 100%; height: auto; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
                    <!-- Preszinaptikus végbunkó -->
                    <path d="M 60 40 C 130 40, 150 90, 150 110 C 150 130, 130 180, 60 180" fill="#1e3a8a" stroke="#38bdf8" stroke-width="3"/>
                    <text x="95" y="115" fill="#fff" font-size="12" font-weight="bold">Preszinapszis</text>
                    <circle cx="130" cy="90" r="5" fill="#facc15"/>
                    <circle cx="135" cy="115" r="5" fill="#facc15"/>
                    <circle cx="128" cy="135" r="5" fill="#facc15"/>
                    <!-- Posztszinaptikus sejt -->
                    <path d="M 230 40 C 170 40, 160 90, 160 110 C 160 130, 170 180, 230 180" fill="#1e293b" stroke="#94a3b8" stroke-width="3"/>
                    <text x="185" y="115" fill="#cbd5e1" font-size="11" font-weight="bold">Poszt-</text>
                    <!-- Asztrocita nyúlvány (borítás) -->
                    <path d="M 120 15 C 155 35, 175 35, 190 15 C 210 50, 180 80, 155 75 C 130 80, 100 50, 120 15 Z" fill="#b91c1c" opacity="0.85" stroke="#ef4444" stroke-width="2"/>
                    <text x="155" y="45" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">Asztrocita</text>
                    <!-- Szöveges magyarázat -->
                    <text x="300" y="70" fill="#facc15" font-size="13" font-weight="bold">1. Neurotranszmitter (Nt):</text>
                    <text x="310" y="90" fill="#cbd5e1" font-size="11">A preszinapszisból glutamát ürül a résbe[cite: 5, 7].</text>
                    <text x="300" y="125" fill="#f87171" font-size="13" font-weight="bold">2. Gliotranszmitter (Gt):</text>
                    <text x="310" y="145" fill="#cbd5e1" font-size="11">Asztrocita mGluR aktiváció &rarr; Ca²⁺ hullám &rarr; D-szerin/ATP ürülés[cite: 5, 7].</text>
                    <text x="300" y="180" fill="#38bdf8" font-size="11"><strong>Tripartite Synapse = Kétirányú neuronális és gliális szabályozás[cite: 5, 7]!</strong></text>
                </svg>
                <div style="font-size: 0.85rem; color: #718096; margin-top: 4px;">4–5. Dia: A háromrészes szinapszis (Tripartite synapse) felépítése[cite: 7].</div>
            </div>
        </div>

        <!-- 6-8. DIA: AKCIÓS POTENCIÁL VS. ELEKTROTÓNUSOS VÁLTOZÁSOK -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 6–8. Dia: A neuronális funkciók egységei: Akciós potenciál vs. Elektrotónusos potenciál</h3>
            <p><strong>A neuron funkcionális polaritása (Dendrit &rarr; Szóma &rarr; Axondomb &rarr; Axon &rarr; Terminális)[cite: 5, 7]:</strong></p>
            <ul>
                <li><strong>Recepció és Integráció (Dendritek és Szóma):</strong> Itt a szinapszisok bejövő jeleit fogadja a sejt. Ezek kizárólag <em>analóg, elektrotónusos potenciálváltozások</em> (EPSP és IPSP)[cite: 5, 7].</li>
                <li><strong>Kódolás és Trigger zóna (Axon hillock / axondomb):</strong> Itt dől el minden! Mivel itt a legnagyobb a feszültségfüggő Na⁺-csatornák sűrűsége, ha az analóg jelek szummációja eléri a küszöböt, a sejt <em>digitális akciós potenciált</em> generál[cite: 5, 7].</li>
                <li><strong>Vezetés (Axon):</strong> Az AP dekrementum (csillapítás) nélkül végigfut a terminálisig[cite: 5, 7].</li>
                <li><strong>Output (Axonterminális):</strong> A beérkező AP kinyitja a feszültségfüggő Ca²⁺-csatornákat, ami transzmitterexocitózist vált ki[cite: 5, 7].</li>
            </ul>

            <p style="margin-top: 1rem;"><strong>A két alapvető jeltípus összehasonlító táblázata (A vizsgáztató kedvenc kérdése!)[cite: 5]:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 0.6rem; font-size: 0.95rem;">
                <tr style="background: #e2e8f0; color: #1a365d;">
                    <th style="padding: 7px; border: 1px solid #cbd5e1;">Szempont</th>
                    <th style="padding: 7px; border: 1px solid #cbd5e1;">Akciós Potenciál (AP)[cite: 5, 7]</th>
                    <th style="padding: 7px; border: 1px solid #cbd5e1;">Elektrotónusos Potenciálváltozás[cite: 5, 7]</th>
                </tr>
                <tr>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Jel jellege</strong></td>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Digitális</strong>: "Minden vagy semmi" törvény[cite: 5, 7]</td>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Analóg</strong>: gradált, amplitúdója arányos az ingerrel[cite: 5, 7]</td>
                </tr>
                <tr>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Küszöbérték</strong></td>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;">Kifejezett tüzelési küszöbe van (pl. -50 mV)[cite: 5, 7]</td>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Nincs küszöbe</strong>, a legkisebb inger is kiváltja[cite: 5, 7]</td>
                </tr>
                <tr>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Terjedési mód</strong></td>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Dekrementum NÉLKÜLI</strong> (amplitúdója végig azonos)[cite: 5, 7]</td>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Dekrementummal terjed</strong> (térben és időben elhal)[cite: 5, 7]</td>
                </tr>
                <tr>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Összegződés (Szummáció)</strong></td>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>NINCS szummáció</strong> (a refrakteritás miatt kioltják egymást)[cite: 5, 7]</td>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>VAN szummáció</strong> (térbeli és időbeli összegződés)[cite: 5, 7]</td>
                </tr>
                <tr>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Refrakter periódus</strong></td>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;">Van (abszolút és relatív fázis)[cite: 5, 7]</td>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>NINCS refrakter periódus</strong>[cite: 5, 7]</td>
                </tr>
                <tr>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Membrántulajdonság</strong></td>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;">Aktív membrán (feszültségfüggő Na⁺ és K⁺ csatornák)[cite: 5, 7]</td>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;">Passzív membrán (ligand-vezérelt csatornák)[cite: 5, 7]</td>
                </tr>
                <tr>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>Élettani példák</strong></td>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;">Axonális AP, szívizom/vázizom AP[cite: 5, 7]</td>
                    <td style="padding: 6px; border: 1px solid #cbd5e1;">EPSP, IPSP, EPP (véglemez-potenciál), Receptorpotenciál[cite: 5, 7]</td>
                </tr>
            </table>
        </div>

        <!-- 9-11. DIA: NEURONOK TÜZELÉSI MINTÁZATAI ÉS INFORMÁCIÓKÓDJA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 9–11. Dia: Az emlős idegrendszer neuronjainak tüzelési mintázatai és az információkód</h3>
            <p><strong>Nem minden neuron tüzel egyformán! A tüzelési mintázatok típusai[cite: 5, 7]:</strong></p>
            <ul>
                <li><strong>Kérgi piramissejt (Neocortex):</strong>
                    <ul>
                        <li><em>Regular firing (Szabályos tüzelés):</em> Folyamatos depolarizációra viszonylag alacsony, egyenletes vagy fokozatosan lassuló frekvenciájú AP-sorozatot ad[cite: 5, 7].</li>
                        <li><em>Burst firing (Csomagokban tüzelés):</em> Rövid idő alatt 3–5 nagyfrekvenciás AP-t lő ki egy csomagban, majd szünet következik[cite: 5, 7].</li>
                    </ul>
                </li>
                <li><strong>Cerebelláris Purkinje-sejt (Kisagy):</strong> Folyamatos, spontán, rendkívül nagy frekvenciájú tüzelést mutat (akár 100–200 Hz felett), komplex és egyszerű tüskékkel[cite: 5, 7].</li>
                <li><strong>Thalamocortikális relay neuronok (Kétarcú működés!):</strong>
                    <ul>
                        <li><em>Tónusos / Transzfer mód (Ébrenléti állapot):</em> A neuron enyhén depolarizált (-60 mV körül)[cite: 5, 7]. Az érzékszervekből érkező jeleket egy az egyben, hűségesen közvetíti az agykéreg felé[cite: 5, 7].</li>
                        <li><em>Burst mód (Alvás / NREM):</em> A neuron hiperpolarizált (-70 mV alatt)[cite: 5, 7]. Ekkor a T-típusú Ca²⁺-csatornák de-inaktiválódnak, és ritmikus burst tüzelést váltanak ki, ami „levágja” az agykérget a bejövő szenzoros ingerekről (alvási orsók és delta hullámok generálása)[cite: 5, 7]!</li>
                    </ul>
                </li>
                <li><strong>Hogyan kódolódik az információ az AP-kban? (A tanár analógiája a számítógépekkel)[cite: 5]:</strong>
                    <ul>
                        <li>Egyetlen AP = pusztán 1 bit információt jelent (vagy kisült a sejt [1], vagy nem [0])[cite: 5, 7].</li>
                        <li>A valódi biológiai információt az <strong>AP-sorozatok</strong> hordozzák: a tüzelés <em>frekvenciája</em>, a frekvencia <em>időbeli változása</em> (gyorsulás/lassulás), a csomagok <em>hossza</em>, valamint több neuron közötti <em>szinkronizáció</em> (hogy egyszerre vagy elcsúsztatva tüzelnek-e)[cite: 5, 7]!</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- 12-16. DIA: IONCSATORNÁK HETEROGENITÁSA ÉS A TÜZELÉS SZABÁLYOZÁSA -->
        <div style="background: rgba(43, 108, 176, 0.05); border-left: 5px solid #2b6cb0; padding: 1.2rem; margin-bottom: 1.8rem; border-radius: 6px;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">📌 12–16. Dia: Neuronális ioncsatornák (Ca²⁺ és K⁺ áramok) és tüzelési dinamika</h3>
            <p><strong>A neuronális membrán elektromos heterogenitása[cite: 5, 7]:</strong></p>
            <p>
                A sejt különböző részein gyökeresen eltérő ioncsatornák találhatók: a dendriten és szómán speciális K⁺-, Ca²⁺- és HCN-csatornák (I<sub>h</sub> pacemakercsatornák); az axondombon és Ranvier-csomókon óriási sűrűségű feszültségfüggő Na⁺ (Nav) és K⁺ (Kv) csatornák; míg a terminálisban feszültségfüggő Ca²⁺ (Cav) csatornák helyezkednek el[cite: 5, 7].
            </p>

            <p style="margin-top: 1rem;"><strong>Feszültségfüggő Ca²⁺-áramok típusai és funkciói (Kiemelt vizsgaanyag!)[cite: 5, 7]:</strong></p>
            <ul>
                <li><strong>T-típusú Ca²⁺-áram (I<sub>T</sub> - Low Voltage Activated / Alacsony feszültségű):</strong>
                    <ul>
                        <li><em>Küszöb:</em> <strong>-65 mV alatt</strong> már aktiválódik[cite: 5, 7]!</li>
                        <li><em>Jellemző:</em> Tranziens (I<sub>T</sub>: Transient), nagyon gyorsan inaktiválódik[cite: 5, 7].</li>
                        <li><em>Funkció:</em> Ritmusos tüzelés, pacemaker-potenciálok (szív SA-csomóban és talamikus idegsejtekben), burst tüzelés alvásban[cite: 5, 7].</li>
                        <li><em>Specifikus gátlószere:</em> <strong>Nikkel-ionok (Ni²⁺)</strong>[cite: 5, 7].</li>
                    </ul>
                </li>
                <li><strong>L-típusú Ca²⁺-áram (I<sub>L</sub> - High Voltage Activated / Magas feszültségű):</strong>
                    <ul>
                        <li><em>Küszöb:</em> Magas, csak <strong>-20 mV körül</strong> nyílik[cite: 5, 7].</li>
                        <li><em>Jellemző:</em> Hosszan tartó (I<sub>L</sub>: Long-lasting), lassan inaktiválódik[cite: 5, 7].</li>
                        <li><em>Funkció:</em> Szívizom platófázisa, excitáció-kontrakció csatolás, enzimaktiválás és génexpresszió[cite: 5, 7].</li>
                        <li><em>Gátlószerei:</em> <strong>Dihidropiridinek (pl. nifedipin), Verapamil</strong> (klasszikus kardiológiai Ca-antagonisták)[cite: 5, 7]!</li>
                    </ul>
                </li>
                <li><strong>N-, P/Q-, R-típusú Ca²⁺-áramok:</strong>
                    <ul>
                        <li>Főleg a preszinaptikus idegvégződésekben találhatók[cite: 5, 7].</li>
                        <li><em>Funkció:</em> Az akciós potenciál hatására megnyílva ők felelősek a neurotranszmitter-ürülésért[cite: 5, 7]!</li>
                        <li><em>Gátlók:</em> &omega;-conotoxin (N-típus, kúpcsiga mérge), &omega;-agatoxin (P/Q-típus, pókméreg)[cite: 5, 7].</li>
                    </ul>
                </li>
            </ul>

            <p style="margin-top: 1rem;"><strong>A feszültségfüggő K⁺-áramok szerepe az AP mintázat alakításában[cite: 5, 7]:</strong></p>
            <ul>
                <li><strong>I<sub>A</sub> (A-típusú tranziens K⁺-áram):</strong> Depolarizációkor villámgyorsan kinyílik, ami fékezi a membránt &rarr; <em>késlelteti az első AP kialakulását</em> (delayed firing) és ritkítja a frekvenciát[cite: 5, 7].</li>
                <li><strong>I<sub>M</sub> (M-áram):</strong> Egy nem-inaktiválódó K⁺-áram, amely stabilizálja a nyugalmat. Muszkarinos kolinerg receptorok aktivációja (ACh) <em>gátolja</em> az M-áramot, ami a neuron hirtelen, heves tüzelését váltja ki[cite: 5, 7]!</li>
                <li><strong>I<sub>AHP</sub> (Utóhiperpolarizációs Ca²⁺-aktivált K⁺-áram):</strong> Az AP-k alatt beáramló Ca²⁺ kinyitja ezeket a K⁺-csatornákat &rarr; mély, hosszan tartó <em>utóhiperpolarizáció</em> jön létre, ami fokozatosan leállítja az AP-sorozatot (frekvenciaadaptáció)[cite: 5, 7].</li>
            </ul>
        </div>

        <!-- ÖSSZEFOGLALÓ KÁRTYA -->
        <div style="background: #fffaf0; border: 1.5px solid #feebc8; border-radius: 8px; padding: 1.2rem; margin-top: 1.5rem;">
            <h4 style="color: #b7791f; margin-bottom: 0.4rem;">💡 Kulcsfogalmak a vizsgára a 7. előadásból:</h4>
            <p style="margin: 0; font-size: 0.95rem;">
                <strong>1. Gliasejtek ingerlékenysége:</strong> Nyugalmi potenciáljuk mély (-80/-90 mV) a sok Kir csatorna miatt, de Na⁺-csatornáik sűrűsége elhanyagolható (0,1/&mu;m²) &rarr; NEM képeznek AP-t, csak elektrotónusos változást[cite: 5, 7]!<br>
                <strong>2. Asztrociták fő feladatai:</strong> K⁺ pufferelés (spatial buffering), transzmitter-felvétel, neurovaszkuláris kapcsolás (NVU &rarr; fMRI alapja), Ca²⁺ hullámok és gliotranszmitterek ürítése[cite: 5, 7].<br>
                <strong>3. Tripartite szinapszis:</strong> Preszinapszis + Posztszinapszis + Asztrocita nyúlvány (Gt: D-szerin, ATP, glutamát)[cite: 5, 7].<br>
                <strong>4. AP vs. Elektrotónusos:</strong> AP digitális, küszöbhöz kötött, dekrementum nélküli, refrakteritása van, nincs szummáció; az elektrotónusos analóg, nincs küszöbe, dekrementummal terjed, nincs refrakteritása és szummálódik[cite: 5, 7].<br>
                <strong>5. T-típusú Ca²⁺ (I<sub>T</sub>):</strong> -65 mV alatt nyílik (LVA), tranziens, Ni²⁺ gátolja, talamikus burst-ökért és pacemaker működésért felel[cite: 5, 7].<br>
                <strong>6. L-típusú Ca²⁺ (I<sub>L</sub>):</strong> -20 mV körül nyílik (HVA), lassan inaktiválódik, dihidropiridinek és verapamil gátolják[cite: 5, 7].<br>
                <strong>7. K⁺-áramok hatásai:</strong> I<sub>A</sub> késlelteti a tüzelést, I<sub>M</sub> gátlása (ACh) fokozza az ingerlékenységet, I<sub>AHP</sub> mély hiperpolarizációval leállítja az AP-sorozatot[cite: 5, 7].
            </p>
        </div>

    </div>
    `
});