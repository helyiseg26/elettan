window.LEKTURAK.push({
    id: "ppt4-content",
    title: "4. Előadás: Az akciós potenciál mechanizmusa és vezetése",
    shortName: "Akciós potenciál",
    tag: "S-4-Akciós.pdf &bull; Tantermi hanganyaggal",
    html: `
        <article class="action-potential-lecture" style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.65; color: #1e293b; max-width: 960px; margin: 0 auto; padding: 24px;">

          <header style="border-bottom: 2px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 32px;">
            <h1 style="color: #0f172a; font-size: 2rem; margin-bottom: 8px;">Az Akciós Potenciál Ionmechanizmusa és Terjedése</h1>
            <p style="color: #64748b; font-size: 1.1rem; margin: 0;">Részletes orvosi élettani összefoglaló a Hodgkin–Huxley biofizikai modelltől a toalett analógián és kapukinetikán át a szaltatorikus regenerációig</p>
          </header>

          <!-- 1. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">1. Az akciós potenciál mint digitális információ és szövetspecifikus formái</h2>
            <p>
              Az akciós potenciál (AP) az ingerlékeny szövetek (idegsejtek, izomsejtek) egyedülálló válaszreakciója, amely a <strong>„minden-vagy-semmi” (all-or-none) törvényt</strong> követi[cite: 1]. Ez azt jelenti, hogy ha a membrán depolarizációja eléri a kritikus ingerküszöböt, az akciós potenciál sztereotip, maximális amplitúdóval fut le; ha nem éri el, egyáltalán nem alakul ki[cite: 1]. Az idegrendszerben az akciós potenciál egy digitális alapegységként, egyetlen <strong>elemi információként („bit of information”)</strong> szolgál[cite: 1].
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="color: #0f172a; margin-top: 0;">Különböző szöveti akciós potenciálok összehasonlítása</h3>
              <p>
                Bár a különböző sejttípusok akciós potenciáljainak időtartama nagyságrendi eltéréseket mutat, <strong>három közös alaptulajdonság</strong> mindegyikben azonos: a pillanatszerűen gyors depolarizáció (upstroke), a 0 mV fölé emelkedő túllövés (overshoot), valamint az elnyújtottabb repolarizációs fázis[cite: 1].
              </p>
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; margin-top: 12px;">
                  <thead>
                    <tr style="border-bottom: 2px solid #cbd5e1; background-color: #f1f5f9;">
                      <th style="padding: 8px;">Szövettípus</th>
                      <th style="padding: 8px;">Nyugalmi feszültség</th>
                      <th style="padding: 8px;">Csúcsérték (Overshoot)</th>
                      <th style="padding: 8px;">Időtartam és Morfológia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px; font-weight: 600;">Motoros neuron</td>
                      <td style="padding: 8px; font-family: monospace;">-70 mV</td>
                      <td style="padding: 8px; font-family: monospace; color: #1d4ed8;">+30 mV</td>
                      <td style="padding: 8px;">Rendkívül rövid, kb. <strong>1–2 ms</strong>; gyors tüskepotenciál utóhiperpolarizációval[cite: 1].</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px; font-weight: 600;">Vázizomrost</td>
                      <td style="padding: 8px; font-family: monospace;">-90 mV</td>
                      <td style="padding: 8px; font-family: monospace; color: #1d4ed8;">+30 mV</td>
                      <td style="padding: 8px;">Gyors lefutású, kb. <strong>3–5 ms</strong>; a mechanikai rángás közvetlen elektromos kiváltója[cite: 1].</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; font-weight: 600;">Kamrai szívizomsejt</td>
                      <td style="padding: 8px; font-family: monospace;">-90 mV</td>
                      <td style="padding: 8px; font-family: monospace; color: #1d4ed8;">+20 ... +25 mV</td>
                      <td style="padding: 8px;">Extrém hosszú, kb. <strong>200–300 ms</strong>; a feszültségfüggő Ca²⁺ csatornák miatti hosszas platófázis biztosítja, hogy a refrakter periódus a mechanikai összehúzódás végéig tartson, megelőzve az életveszélyes tetániás görcsöt[cite: 1]!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- 2. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">2. A motoros neuron akciós potenciáljának fázisai</h2>
            <p>
              Egy motoneuron akciós potenciáljának időbeli lefutását tanulmányozva az alábbi egymást követő fázisok különíthetők el:
            </p>
            <ol style="padding-left: 20px;">
              <li style="margin-bottom: 8px;">
                <strong>Nyugalmi potenciál (-70 mV):</strong> A polarizált alapállapot, amelyet dominánsan a K⁺ szivárgó áramai és a Na⁺/K⁺ pumpa aszimmetriája tart fenn[cite: 1].
              </li>
              <li style="margin-bottom: 8px;">
                <strong>Prepotenciál (Foot / lokális feszültségváltozás):</strong> Külső behatásra elektrotónusos áramok érik el a membránt, ami lassan, fokozatosan elkezdi felfelé tolni a feszültséget a küszöb irányába[cite: 1].
              </li>
              <li style="margin-bottom: 8px;">
                <strong>Küszöbpotenciál (Threshold, kb. -55 ... -50 mV):</strong> Az a kritikus feszültségszint, ahol a feszültségfüggő Na⁺-csatornák aktivációja eléri az önfenntartó lavinaszerű fázist[cite: 1].
              </li>
              <li style="margin-bottom: 8px;">
                <strong>Upstroke (felszálló szár / gyors depolarizáció):</strong> A membrán meredeken és robbanásszerűen depolarizálódik a pozitív tartomány felé haladva[cite: 1].
              </li>
              <li style="margin-bottom: 8px;">
                <strong>Túllövés (Overshoot):</strong> A membránpotenciál 0 mV feletti, pozitív tartományba eső szakasza (a motoneuronban +30 mV-ig emelkedik)[cite: 1]. A teljes <strong>amplitúdó</strong> a nyugalmi szinttől a csúcsig mért teljes feszültségugrás (kb. 100–110 mV)[cite: 1].
              </li>
              <li style="margin-bottom: 8px;">
                <strong>Repolarizáció (leszálló szár):</strong> A Na⁺-csatornák inaktivációja és a feszültségfüggő K⁺-csatornák késleltetett megnyílása miatt a feszültség gyorsan visszazuhan a negatív tartományba[cite: 1].
              </li>
              <li style="margin-bottom: 0;">
                <strong>Utóhiperpolarizáció (Afterhyperpolarization / Undershoot):</strong> A feszültség átmenetileg a nyugalmi szintnél is mélyebbre zuhan (megközelíti a K⁺ egyensúlyi potenciálját, a -90 mV-ot), mivel a K⁺-csatornák csak lassan záródnak be[cite: 1]. A csatornák teljes záródásával a potenciál visszatér a stabil -70 mV-ra[cite: 1].
              </li>
            </ol>
          </section>

          <!-- 3. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">3. Az akciós potenciál ionmechanizmusa és a Hodgkin-ciklus</h2>
            <p>
              Az akciós potenciál lefutása a nátrium (<code>g_Na</code>) és kálium (<code>g_K</code>) konduktanciák szigorúan összehangolt, dinamikus változásainak eredménye. A pillanatnyi feszültséget minden időpillanatban a <strong>Húregyenlet</strong> írja le:
            </p>
            <p style="font-family: monospace; font-size: 1.05rem; text-align: center; margin: 12px 0;">
              V_m = (g_Na / g_T) · E_Na + (g_K / g_T) · E_K
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">A két ellentétes visszacsatolási hurok</h3>
              
              <div style="margin-bottom: 16px;">
                <h4 style="color: #b91c1c; margin-bottom: 4px;">1. A pozitív visszacsatolás: A Hodgkin-ciklus (Upstroke)</h4>
                <p style="margin-bottom: 0;">
                  A küszöb elérésekor megnyílnak az első feszültségfüggő Na⁺-csatornák -> <strong>Na⁺ belépés történik a sejtbe</strong> lefelé haladva az elektrokémiai grádiens mentén -> ez <strong>további depolarizációt</strong> okoz -> a növekvő depolarizáció hatására <strong>még több feszültségfüggő Na⁺-csatorna nyílik meg (g_Na robbanásszerűen nő)</strong>[cite: 1]. Ez egy önmagát gerjesztő, regeneratív pozitív feedback (Hodgkin-ciklus), ami az egekbe emeli a membránpotenciált a nátrium egyensúlyi potenciálja (<code>E_Na = +60 mV</code>) felé törekedve[cite: 1].
                </p>
              </div>

              <div>
                <h4 style="color: #15803d; margin-bottom: 4px;">2. A negatív visszacsatolás: Repolarizáció és Utóhiperpolarizáció</h4>
                <p style="margin-bottom: 0;">
                  A csúcs elérésekor a rendszer két okból fordul meg:
                  <br>• <em>Párhuzamos g_Na csökkenés:</em> A Na⁺-csatornák belső kapuzása leállítja a beáramlást (inaktiváció)[cite: 1].
                  <br>• <em>Lassúbb és elnyújtott g_K növekedés:</em> Késleltetve, de hatalmas mértékben megnyílnak a feszültségfüggő K⁺-csatornák[cite: 1]. Mivel a belső tér ekkor erősen pozitív (+30 mV), óriási hajtóerő feszül a K⁺ kiáramlására[cite: 1]. A masszív <strong>K⁺ kilépés negatív feedbackként</strong> működik: visszahúzza a membránpotenciált a negatív tartományba, sőt az elhúzódó K⁺-áramlás miatt az utóhiperpolarizáció fázisában közelebb szorítja a V_m-et az E_K-hoz (-90 mV)[cite: 1].
                </p>
              </div>
            </div>
          </section>

          <!-- 4. FEJEZET: HANGANYAG KIEGÉSZÍTÉSSEL -->
          <section style="margin-bottom: 40px;">
            <span class="slide-tag">Előadási hanganyag alapján kiegészítve</span>
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">4. A molekuláris kapuzás biofizikája (Hodgkin–Huxley modell: m, h, n kapuk)</h2>
            <p>
              Alan Hodgkin és Andrew Huxley matematikai modellje a csatornák vezetőképességét feszültségfüggő kapuk állapotaként írja le.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 16px 0;">
              
              <!-- Na+ csatorna -->
              <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px;">
                <h3 style="margin-top: 0; color: #1e40af;">A Na⁺-csatorna kinetikája: g_Na = g_Na-max · m³ · h</h3>
                <ul style="padding-left: 18px; margin-bottom: 0; font-size: 0.95rem;">
                  <li style="margin-bottom: 6px;">
                    <strong>Aktivációs kapu (m):</strong> 3 darab azonos, gyorsan nyíló kapu alkotja (ezért <code>m³</code>). Időállandója rendkívül kicsi: <strong>τ<sub>m</sub> = 0,1 ms</strong>[cite: 1].
                  </li>
                  <li style="margin-bottom: 6px;">
                    <strong>Inaktivációs kapu (h):</strong> 1 darab kapu képviseli. Lassabban mozdul: időállandója <strong>τ<sub>h</sub> = 1 ms</strong>[cite: 1].
                    <br><em>A tanárnő szóbeli hangsúlya a hanganyagból:</em> A $h$ paraméter nem azt fejezi ki, hogy mennyi van inaktiválva, hanem ellenkezőleg: <strong>azt mutatja meg, hogy a csatornák mekkora hányada NINCS MÉG inaktiválva</strong> (vagyis mekkora hányad érhető még el a vezetésre)!
                  </li>
                  <li style="margin-bottom: 0;">
                    <strong>Működési ciklus:</strong>
                    <br>1. <em>Nyugalmi zárt:</em> m = 0, h = 1 (aktiválható alapállapot)[cite: 1].
                    <br>2. <em>Aktivált nyitott:</em> m = 1, h = 1 (Na⁺ zúdul befelé)[cite: 1].
                    <br>3. <em>Inaktivált zárt:</em> m = 1, h = 0 (a kapu becsapódik)[cite: 1].
                    <br>4. <em>Recovery from inactivation:</em> A csatorna inaktivált állapotból fizikailag nem nyitható meg újra! Előbb repolarizáció kell, hogy a $h$ kapu újra kinyíljon és az $m$ visszazárjon (visszatérés az 1. állapotba)[cite: 1].
                  </li>
                </ul>
              </div>

              <!-- K+ csatorna -->
              <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px;">
                <h3 style="margin-top: 0; color: #1e40af;">A K⁺-csatorna kinetikája: g_K = g_K-max · n⁴</h3>
                <ul style="padding-left: 18px; margin-bottom: 0; font-size: 0.95rem;">
                  <li style="margin-bottom: 6px;">
                    <strong>Aktivációs kapu (n):</strong> 4 darab alegységnek kell egyidejűleg nyitott állapotba kerülnie (ezért <code>n⁴</code>)[cite: 1].
                  </li>
                  <li style="margin-bottom: 6px;">
                    <strong>Lassú működés:</strong> Időállandója <strong>τ<sub>n</sub> = 2 ms</strong>[cite: 1]. Hússzor lassabb, mint a nátrium aktivációja[cite: 1]!
                  </li>
                  <li style="margin-bottom: 0;">
                    <strong>Késői egyenirányító (Delayed Rectifier):</strong> Pontosan ez a lassúság teszi lehetővé az akciós potenciál kialakulását: mire a K⁺ csatornák megnyílnak, a Na⁺ csatornák már elvégezték a depolarizációt és javában inaktiválódnak[cite: 1]. Ha a K⁺ azonnal kinyílna, kioltaná a nátrium depolarizáló hatását és sosem jönne létre akciós potenciál[cite: 1].
                  </li>
                </ul>
              </div>

            </div>
          </section>

          <!-- 5. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">5. Ionáramok szétválasztása Voltage-clamp technikával és Farmakológia</h2>
            <p>
              A <strong>voltage-clamp (feszültségzár)</strong> technika lehetővé teszi a membránpotenciál fix értéken tartását (pl. +20 mV-on), így a tiszta ionáramok mérhetők[cite: 1]. Normálisan egy <em>vegyes áram</em> regisztrálható: először egy gyors, befelé irányuló negatív hullám (I_Na), majd egy elnyújtott, kifelé mutató pozitív áram (I_K)[cite: 1].
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 16px 0;">
              
              <div style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 14px;">
                <h4 style="margin-top: 0; color: #991b1b;">A Na⁺-csatornák gátlószerei</h4>
                <ul style="padding-left: 18px; margin-bottom: 0; font-size: 0.92rem;">
                  <li style="margin-bottom: 6px;"><strong>Tetrodotoxin (TTX):</strong> Gömbhalból származik; <strong>1200-szor mérgezőbb a cianidnál</strong>[cite: 1]! Kívülről dugózza el a Na⁺-pórust[cite: 1]. Ha TTX-et adunk, az I_Na kiesik, <strong>csak a tiszta K⁺ kifelé áram mérhető</strong>[cite: 1].</li>
                  <li style="margin-bottom: 6px;"><strong>Saxitoxin (STX):</strong> Páncélos ostoros algák mérge; hasonlóan bénítja a külső pórust[cite: 1].</li>
                  <li style="margin-bottom: 0;">
                    <strong>Helyi érzéstelenítők (Lidokain, Tetrakain, Bupivakain):</strong>
                    <br>A belső pórus felől kötődnek. <strong>Use-dependens (használatfüggő) gátlást</strong> mutatnak: minél gyakrabban tüzel egy idegrost (pl. fájdalompálya), annál erősebben gátolják, szelektíven kiiktatva a fájdalomérzetet[cite: 1]!
                  </li>
                </ul>
              </div>

              <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 14px;">
                <h4 style="margin-top: 0; color: #1e40af;">A K⁺-csatornák specifikus blokkolói</h4>
                <ul style="padding-left: 18px; margin-bottom: 0; font-size: 0.92rem;">
                  <li style="margin-bottom: 8px;"><strong>Tetraetilammónium (TEA):</strong> Specifikusan blokkolja a késői egyenirányító <code>I_K</code> áramot. Ha TEA-t adunk, a K⁺ áram megszűnik, <strong>csak az izolált, gyors befelé folyó Na⁺ áram látható</strong>[cite: 1].</li>
                  <li style="margin-bottom: 8px;"><strong>4-aminopiridin (4-AP):</strong> A tranziens kifelé irányuló káliumáramot (<code>I_to</code>) gátolja[cite: 1].</li>
                  <li style="margin-bottom: 0;"><strong>Báriumion (Ba²⁺):</strong> A nyugalmi potenciált fenntartó befelé egyenirányító káliumáramot (<code>I_K1</code>) bénítja meg, kifejezett depolarizációt előidézve[cite: 1].</li>
                </ul>
              </div>

            </div>
          </section>

          <!-- 6. FEJEZET: HANGANYAG KIEGÉSZÍTÉSSEL (A TOALETT-ANALÓGIA) -->
          <section style="margin-bottom: 40px;">
            <span class="slide-tag">Előadási hanganyag alapján kiegészítve</span>
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">6. Ingerlékenység, Küszöb és a Toalett-öblítőtartály analógia</h2>
            <p>
              Ahhoz, hogy a membrán elérje az ingerküszöböt, adott elektromos töltésmennyiséget kell a felületre vinni: <code>Q = I · t</code> (töltés = áramerősség × időtartam)[cite: 1].
            </p>

            <div style="background-color: #f8fafc; border-left: 4px solid #6366f1; padding: 14px; margin: 16px 0;">
              <h3 style="margin-top: 0; color: #4338ca;">Az intenzitás–időtartam hiperbola paraméterei</h3>
              <ul style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 6px;">
                  <strong>Reobázis (Rheobasis):</strong> Az a minimális áramerősség, amely elméletileg végtelen hosszú ideig hatva éppen képes kiváltani az akciós potenciált[cite: 1]. Ennél kisebb áramerősséggel bármilyen hosszan ingerlünk, sosem keletkezik AP[cite: 1].
                </li>
                <li style="margin-bottom: 0;">
                  <strong>Kronaxia (Chronaxia):</strong> A <strong>kétszeres reobázishoz (2 × Rheobasis)</strong> tartozó minimális ingeridőtartam[cite: 1]. A szövetek ingerlékenységének legpontosabb összehasonlító mértéke: minél kisebb a kronaxia, annál gyorsabban ingerelhető a sejt[cite: 1].
                </li>
              </ul>
            </div>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin-top: 16px;">
              <h3 style="color: #0f172a; margin-top: 0;">A tanárnő toalett-öblítőtartály analógiája a hanganyagból:</h3>
              <p>
                A küszöb feltétele szigorú árammérleg: <strong>az inward Na⁺ áramnak meg kell haladnia az outward K⁺ és Cl⁻ áramok összegét</strong>[cite: 1]!
              </p>
              <p style="margin-bottom: 0; font-size: 0.95rem; color: #475569;">
                <em>Hogyan magyarázza ezt a professzornő a toalett példájával?</em>
                <br>• <strong>Szubthreshold (küszöb alatti) inger:</strong> Ha az öblítőkart csak gyengén billentjük meg, a belső szelep kicsit felnyílik, némi víz kifolyik, de visszahullik a helyére (ez a lecsengő elektrotónusos potenciál).
                <br>• <strong>A küszöb elérése:</strong> Ha a kart elérjük a kritikus billenési pontig lenyomni, az egész mechanizmus felcsapódik, a tartály teljes tartalma lezúdul (akciós potenciál), és az áramlást már nem lehet félúton leállítani! Teljesen mindegy, mekkora erővel nyomtuk le a kart, mindig ugyanakkora víztömeg ömlik ki („minden vagy semmi” törvény).
                <br>• <strong>Frekvenciakódolás:</strong> Mivel egyetlen AP feszültsége mindig azonos, az idegrendszer a stimulus erősségét nem az amplitúdóval, hanem az <strong>akciós potenciálok gyakoriságával (tüzelési frekvenciájával)</strong> közvetíti az agy felé!
              </p>
            </div>
          </section>

          <!-- 7. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">7. Refrakteritás: Az ingerelhetetlenség fázisai</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 16px 0;">
              <div style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 14px;">
                <h4 style="margin-top: 0; color: #991b1b;">1. Abszolút refrakter fázis (ARP)</h4>
                <p style="font-size: 0.95rem; margin-bottom: 0;">
                  A membrán <strong>teljesen ingerelhetetlen</strong>, semmilyen extrém erős ingerrel sem váltható ki új AP[cite: 1].
                  <br><em>Molekuláris oka:</em> A Na⁺-csatornák döntő többsége <strong>inaktivált állapotban van (h = 0)</strong>, fizikailag nem nyithatók meg újra[cite: 1]. (Toalett: amíg a tartály teljesen üres, nem indítható új öblítés).
                  <br><em>Szerepe:</em> Garantálja az <strong>AP egyirányú terjedését</strong>, és megakadályozza az ingerületek összeolvadását (fúzióját)[cite: 1]!
                </p>
              </div>

              <div style="background-color: #fffbeb; border: 1px solid #fef3c7; border-radius: 8px; padding: 14px;">
                <h4 style="margin-top: 0; color: #92400e;">2. Relatív refrakter fázis (RRP)</h4>
                <p style="font-size: 0.95rem; margin-bottom: 0;">
                  Újabb akciós potenciál kiváltható, de <strong>kizárólag a nyugalminál jóval nagyobb ingerintenzitással</strong>[cite: 1].
                  <br><em>Molekuláris oka:</em> A Na⁺-csatornák egy része már visszanyerte aktiválható zárt állapotát, de a K⁺ vezetőképesség még mindig emelkedett[cite: 1]. A K⁺ kiáramlás közvetlenül a depolarizáció ellen dolgozik, ezért sokkal több Na⁺-t kell kényszeríteni a sejtbe a küszöb eléréséhez[cite: 1].
                </p>
              </div>
            </div>
          </section>

          <!-- 8. FEJEZET: HANGANYAG KIEGÉSZÍTÉSSEL (A SZALTATORIKUS VEZETÉS VALÓDI LÉNYEGE) -->
          <section style="margin-bottom: 40px;">
            <span class="slide-tag">Előadási hanganyag alapján kiegészítve</span>
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">8. Az akciós potenciál terjedése: Folytonos vs. Szaltatorikus regeneráció</h2>
            <p>
              Amikor egy ponton AP alakul ki, a belső felület pozitívvá válik a szomszédos nyugalmi szakaszokhoz képest, elindítva a helyi áramköröket (local circuits)[cite: 1].
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">A tanárnő szóbeli kulcsmondata: Hogyan működik valójában a szaltatorikus vezetés?</h3>
              <p>
                A szaltatorikus szó ugrálást jelent, de <strong>a valóságban az akciós potenciál nem ugrik át a térben</strong>!
              </p>
              <ul style="padding-left: 20px;">
                <li style="margin-bottom: 8px;">
                  <strong>Az internódium alatt (a mielinhüvelyben):</strong> A vastag többrétegű lipidszigetelés miatt a transzmembrán ellenállás ($r_m$) óriási, a kapacitás ($c_m$) pedig minimális[cite: 1]. A mielin alatt <strong>villámgyors elektrotónusos áramlás</strong> folyik szivárgás és feszültségveszteség nélkül[cite: 1]!
                </li>
                <li style="margin-bottom: 0;">
                  <strong>A Ranvier-csomóknál:</strong> Itt nincs szigetelés, viszont elképesztő sűrűségben ülnek a feszültségfüggő Na⁺-csatornák[cite: 1]. Amikor a gyors elektrotónusos feszültség eléri a csomót, átlépi a küszöböt, és <strong>az akciós potenciál újra és újra regenerálódik (amplifikálódik, újraépül)</strong>[cite: 1]! 
                  <br><em>Konklúzió:</em> A Ranvier-csomók nem ugródeszkák, hanem <strong>jelerősítő állomások</strong>. A mielinizáció lehetővé teszi, hogy ritkábban kelljen időigényes csatornanyitásokat végezni, így a vezetés nagyságrendekkel gyorsabbá és energiatakarékosabbá válik[cite: 1].
                </li>
              </ul>
            </div>

            <p style="margin-top: 14px;">
              <strong>Vezetési sebesség képlete:</strong> <code>v = √[ (K · r_m · dV/dt) / (r_i · c_m) ]</code>. A sebességet a rostátmérő növekedése (kisebb $r_i$), a mielinizáció (hatalmas $r_m$, kicsi $c_m$) és a melegebb testhőmérséklet növeli[cite: 1].
            </p>
          </section>

          <!-- 9. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">9. Rendszerező szintézis: Akciós potenciál vs. Elektrotónusos potenciál</h2>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; margin: 16px 0;">
                <thead>
                  <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                    <th style="padding: 10px; font-weight: 600;">Tulajdonság</th>
                    <th style="padding: 10px; font-weight: 600; color: #1e40af;">Akciós potenciál (AP)</th>
                    <th style="padding: 10px; font-weight: 600; color: #64748b;">Elektrotónusos válasz</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Ingerküszöb</td>
                    <td style="padding: 10px;"><strong>Van küszöbpotenciál</strong> (elérése kötelező)[cite: 1]</td>
                    <td style="padding: 10px;">Nincs küszöb (bármilyen kis inger kiváltja)[cite: 1]</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Polaritás</td>
                    <td style="padding: 10px;">Kizárólag <strong>depolarizáció</strong>[cite: 1]</td>
                    <td style="padding: 10px;">Depolarizáció vagy hiperpolarizáció egyaránt lehet[cite: 1]</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Amplitúdó jellege</td>
                    <td style="padding: 10px;"><strong>Egységnyi amplitúdó</strong> („Minden vagy semmi” válasz)[cite: 1]</td>
                    <td style="padding: 10px;">Tetszőleges, graduált (az ingerintenzitással arányos)[cite: 1]</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Túllövés (Overshoot)</td>
                    <td style="padding: 10px;"><strong>Van túllövés</strong> (a feszültség 0 mV fölé szalad)[cite: 1]</td>
                    <td style="padding: 10px;">Nincs túllövés (nem lépi át a 0 mV-ot)[cite: 1]</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Refrakter periódus</td>
                    <td style="padding: 10px;"><strong>Refrakter periódus követi</strong> (ARP és RRP)[cite: 1]</td>
                    <td style="padding: 10px;">Nincs refrakter periódus (szummálódni képes)[cite: 1]</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: 600;">Terjedési mechanizmus</td>
                    <td style="padding: 10px;"><strong>Decrementum nélkül terjed</strong> (aktív, regeneratív)[cite: 1]</td>
                    <td style="padding: 10px;">Decrementummal terjed (térben és időben elhalványul)[cite: 1]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- ÖSSZEGZÉS -->
          <footer style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 20px; margin-top: 32px;">
            <h3 style="color: #38bdf8; margin-top: 0;">Összegzés a vizsgához</h3>
            <p style="margin-bottom: 0; font-size: 0.95rem; line-height: 1.6;">
              Az akciós potenciál a küszöböt elérő depolarizáció hatására indul be, amikor az <strong>inward Na⁺ áram felülmúlja az outward K⁺ és Cl⁻ áramokat</strong>[cite: 1]. A gyors upstroke-ot a feszültségfüggő Na⁺-csatornák aktiválódása (<code>m³</code> kapuk, τ<sub>m</sub> = 0,1 ms) és a pozitív <strong>Hodgkin-ciklus</strong> hajtja, amit a csatornák inaktivációja (<code>h</code> kapu, τ<sub>h</sub> = 1 ms) és a késleltetett K⁺-csatornák megnyílása (<code>n⁴</code> kapu, τ<sub>n</sub> = 2 ms) állít meg, kialakítva a repolarizációt és az utóhiperpolarizációt[cite: 1]. A Na⁺-inaktiváció felelős az <strong>abszolút refrakter fázisért</strong>, ami egyirányúsítja az ingerületet[cite: 1]. A mielinhüvely megnöveli a transzmembrán ellenállást (<code>r_m</code>) és lecsökkenti a kapacitást (<code>c_m</code>), ami a <strong>Ranvier-csomók közötti szaltatorikus vezetés</strong> révén villámgyors, energiatakarékos és magas biztonsági tényezőjű ingerületvezetést garantál[cite: 1].
            </p>
          </footer>

        </article>
    `
});