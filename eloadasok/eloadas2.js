window.LEKTURAK.push({
    id: "ppt2-content",
    title: "2. Előadás: A sejtműködés szabályozása, jelátviteli folyamatok",
    shortName: "Szignalizáció",
    tag: "HUN_2_Szignalizacio.pdf",
    html: `
        <article class="signaling-lecture" style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.65; color: #1e293b; max-width: 960px; margin: 0 auto; padding: 10px;">

          <header style="border-bottom: 2px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 32px;">
            <h1 style="color: #0f172a; font-size: 2rem; margin-bottom: 8px;">A Sejtműködés Szabályozása és Jelátviteli Folyamatai</h1>
            <p style="color: #64748b; font-size: 1.1rem; margin: 0;">Részletes orvosi élettani összefoglaló a receptoroktól a molekuláris kaszkádokon át a szívizom szabályozásáig</p>
          </header>

          <!-- 1. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">1. Az információ-áramlás alaplogikája és a szignáltranszdukció lépései</h2>
            <p>
              Ahogyan az anyagtranszport során, úgy az információ-áramlásban is alapvető igazság: <em>„A sejtmembrán elválaszt és összeköt”</em>. A hidrofil extracelluláris hírvivők (hormonok, neurotranszmitterek, parakrin faktorok) nem képesek áthatolni a hidrofób lipid kettősrétegen, ezért a sejtnek a membránon keresztül kell átalakítania a külső kémiai ingert intracelluláris biokémiai válaszreakcióvá. Ezt a folyamatot nevezzük <strong>szignáltranszdukciónak</strong>.
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="color: #0f172a; margin-top: 0;">A jeltovábbítás 7 elemi lépése</h3>
              <ol style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 6px;"><strong>Hírvivő felismerése:</strong> Az elsődleges hírvivő (ligandum) nagy affinitással és specifitással kötődik a sejtfelszíni vagy intracelluláris receptorához.</li>
                <li style="margin-bottom: 6px;"><strong>Transzmembrán jelátvitel:</strong> A receptor konformációváltozása átírja a jelet a membrán belső oldalára (pl. heterotrimer G-fehérjék aktiválása révén).</li>
                <li style="margin-bottom: 6px;"><strong>A jel felerősítése (amplifikáció):</strong> Effektor enzimek aktiválódnak, amelyek kisméretű, gyorsan diffundáló <em>másodlagos hírvivő molekulák</em> tömegét hozzák létre.</li>
                <li style="margin-bottom: 6px;"><strong>Foszforilációs kaszkád elindítása:</strong> A másodlagos hírvivők protein kinázokat (főként szerin/treonin specifikus kinázokat) aktiválnak.</li>
                <li style="margin-bottom: 6px;"><strong>Célfehérjék funkciójának modulálása:</strong> A kinázok és foszfatázok dinamikus egyensúlya reverzibilisen foszforilálja/defoszforilálja a strukturális fehérjéket, ioncsatornákat és enzimeket.</li>
                <li style="margin-bottom: 6px;"><strong>Génexpresszió módosulása (opcionális):</strong> Hosszú távú adaptáció esetén transzkripciós faktorok aktiválódnak, megváltoztatva a fehérjeszintézist a magban.</li>
                <li style="margin-bottom: 0;"><strong>Végrehajtó sejtválasz:</strong> Megváltozik a sejt működése (kontrakció, szekréció, osztódás, anyagcsere-változás).</li>
              </ol>
            </div>

            <p>
              <strong>A legfontosabb másodlagos hírvivők (Second Messengers):</strong>
              <br>Közös jellemzőjük, hogy kis méretű, nem fehérje természetű molekulák, amelyek a citoplazmában gyorsan eloszlanak: <strong>cAMP</strong> (ciklikus adenozin-monofoszfát), <strong>cGMP</strong> (ciklikus guanozin-monofoszfát), <strong>IP₃</strong> (inozit-1,4,5-triszfoszfát), <strong>DAG</strong> (diacilglicerin), <strong>Ca²⁺</strong> és a <strong>NO</strong> (nitrogén-monoxid gáz).
            </p>
          </section>

          <!-- 2. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">2. A receptorok nagy rendszertana</h2>
            <p>
              Alapvető élettani különbség van a szenzoros <em>receptorsejt</em> (pl. fotoreceptor, szőrsejt) és a jelátviteli <em>receptorfehérje</em> között. A jelátvitelben a receptor olyan specifikus fehérje makromolekula, amely a ligandum megkötésére specifikus választ generál.
            </p>

            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; margin: 16px 0;">
                <thead>
                  <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                    <th style="padding: 10px; font-weight: 600;">Lokalizáció</th>
                    <th style="padding: 10px; font-weight: 600;">Fő típus</th>
                    <th style="padding: 10px; font-weight: 600;">Szerkezet</th>
                    <th style="padding: 10px; font-weight: 600;">Közvetített hatás és Sebesség</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;" rowspan="3">Membránreceptorok (felszíni)</td>
                    <td style="padding: 10px;"><strong>Ionotróp</strong></td>
                    <td style="padding: 10px;">Ligand-vezérelt ioncsatorna (több alegységes pórus)</td>
                    <td style="padding: 10px;">Közvetlen ionáram, azonnali membránpotenciál-változás (milliszekundumos nagyságrend).</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px;"><strong>Metabotróp (7-TM)</strong></td>
                    <td style="padding: 10px;">7 transzmembrán hélix, heterotrimer G-fehérjéhez kapcsolva</td>
                    <td style="padding: 10px;">Másodlagos hírvivő kaszkádok generálása (másodperces nagyságrend).</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px;"><strong>Metabotróp (1-TM)</strong></td>
                    <td style="padding: 10px;">1 transzmembrán hélix, intrinsic enzimaktivitás (pl. Tirozin-kináz)</td>
                    <td style="padding: 10px;">Közvetlen autofoszforiláció, növekedési és metabolikus utak indítása (percek-órák).</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: 600;">Intracelluláris receptorok</td>
                    <td style="padding: 10px;"><strong>Citoplazmatikus vagy Nukleáris</strong></td>
                    <td style="padding: 10px;">Ligand-aktivált transzkripciós faktorok</td>
                    <td style="padding: 10px;">Génátírás, fehérjeszintézis megváltoztatása (órák-napok, tartós hatás).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- 3. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">3. Ionotróp receptorok: A villámgyors közvetlen ioncsatornák</h2>
            <p>
              Valódi ionotróp receptor esetén <strong>a receptor és az ioncsatorna egyetlen azonos fehérjeentitás</strong>. Nincs szükség közvetítő molekulákra: a külső ligand kötődése közvetlenül elforgatja az alegységeket, megnyitva a központi pórust.
            </p>

            <h3 style="color: #0f172a;">A nikotinos acetilkolin-receptor (nAChR) szerkezete</h3>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 6px;">
                <strong>Izom típusú nAChR (Neuromuscularis junctio - NMJ):</strong> Pentamer felépítésű komplex, összetétele <strong>2α, 1β, 1γ, 1δ</strong> alegység. A csatorna megnyílásához 2 acetilkolin molekula egyidejű kötődése szükséges a két α alegységhez.
              </li>
              <li style="margin-bottom: 6px;">
                <strong>Idegi típusú nAChR (Központi idegrendszer és mellékvesevelő kromaffin sejtjei):</strong> Heteropentamer szerkezet, jellemzően <strong>2α és 3β</strong> alegységből (pl. α₄ és β₂ alegységek kombinációjából) épül fel.
              </li>
            </ul>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h4 style="margin-top: 0; color: #1e40af;">A főbb ionotróp receptorok élettani profilja</h4>
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                  <thead>
                    <tr style="border-bottom: 2px solid #cbd5e1;">
                      <th style="padding: 8px;">Mediátor</th>
                      <th style="padding: 8px;">Receptor</th>
                      <th style="padding: 8px;">Csatorna jellege</th>
                      <th style="padding: 8px;">Élettani hatás a membránra</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px;">Acetilkolin</td>
                      <td style="padding: 8px;"><strong>n-AChR</strong></td>
                      <td style="padding: 8px;">Nem-specifikus monovalens kationcsatorna (Na⁺ / K⁺)</td>
                      <td style="padding: 8px; color: #b91c1c; font-weight: 600;">Depolarizáció (EPSP / véglemez-potenciál)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px;">Glutamát</td>
                      <td style="padding: 8px;"><strong>AMPA</strong></td>
                      <td style="padding: 8px;">Nem-specifikus monovalens kationcsatorna (Na⁺ / K⁺)</td>
                      <td style="padding: 8px; color: #b91c1c; font-weight: 600;">Gyors depolarizáció</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px;">Glutamát</td>
                      <td style="padding: 8px;"><strong>NMDA</strong></td>
                      <td style="padding: 8px;">Nem-specifikus kationcsatorna (Na⁺ / K⁺ / <strong>Ca²⁺</strong>)</td>
                      <td style="padding: 8px; color: #b91c1c; font-weight: 600;">Depolarizáció + masszív Ca²⁺ belépés (plaszticitás)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px;">GABA</td>
                      <td style="padding: 8px;"><strong>GABA_A</strong></td>
                      <td style="padding: 8px;">Szelektív Cl⁻ csatorna</td>
                      <td style="padding: 8px; color: #15803d; font-weight: 600;">Repolarizáció / Hiperpolarizáció (IPSP, gátlás)</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px;">Glicin</td>
                      <td style="padding: 8px;"><strong>Glicin R</strong></td>
                      <td style="padding: 8px;">Szelektív Cl⁻ csatorna</td>
                      <td style="padding: 8px; color: #15803d; font-weight: 600;">Repolarizáció / Hiperpolarizáció (gerincvelői gátlás)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- 4. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">4. Metabotróp (7-TM) receptorok és a klasszikus G-fehérje ciklus</h2>
            <p>
              A metabotróp receptorok legnagyobb családját a <strong>7 transzmembrán hélixből (7-TM)</strong> álló receptorok alkotják. A polipeptidlánc N-terminálisa extracellulárisan, a C-terminálisa intracellulárisan helyezkedik el.
            </p>

            <div style="background-color: #f8fafc; border-left: 4px solid #6366f1; padding: 14px; margin: 16px 0;">
              <h3 style="margin-top: 0; color: #4338ca;">A 7-TM receptor funkcionális doménjei</h3>
              <ul style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 4px;"><strong>III., VI. és VII. transzmembrán domén:</strong> Együtt alakítják ki a mély, zsebszerű <em>agonista-kötőhelyet</em> a membrán síkján belül.</li>
                <li style="margin-bottom: 4px;"><strong>V–VI. intracelluláris hurok:</strong> Meghatározza a <em>G-fehérje-szelektivitást</em> (eldönti, hogy a receptor Gs, Gi vagy Gq fehérjéhez tud-e kapcsolódni).</li>
                <li style="margin-bottom: 0;"><strong>C-terminális citoplazmatikus farok:</strong> Felelős a <em>G-fehérje fizikai megkötéséért</em> és a regulációs foszforilációs helyek hordozásáért.</li>
              </ul>
            </div>

            <h3 style="color: #0f172a;">A heterotrimer G-fehérjék működési ciklusa</h3>
            <p>
              A klasszikus G-fehérjék három alegységből (<strong>α, β, γ</strong>) épülnek fel. Az α alegység nukleotid-kötő zsebbel rendelkezik. A ciklus 4 fázisban zajlik:
            </p>
            <ol style="padding-left: 20px;">
              <li style="margin-bottom: 8px;">
                <strong>Nyugalmi állapot:</strong> Az α alegységhez <strong>GDP</strong> kötődik, és szorosan asszociál a βγ dimerrel egy inaktív trimert alkotva a membrán belső felszínén.
              </li>
              <li style="margin-bottom: 8px;">
                <strong>Agonista kötődés és GDP/GTP csere:</strong> Amikor az agonista megköti a 7-TM receptort, a receptor konformációt vált és katalizálja a GDP leválását az α alegységről, amelynek helyére <strong>GTP</strong> lép be. A GTP kötése miatt az α alegység és a receptor disszociál.
              </li>
              <li style="margin-bottom: 8px;">
                <strong>Szétválás és effektor aktiváció:</strong> A G-fehérje szétesik szabad <strong>α-GTP</strong>-re és <strong>βγ-komplexre</strong>. Mindkét komponens önálló jelátviteli ágat indít el:
                <br>• <em>α-alegység:</em> A membrán síkjában diffundálva enzimatikus effektorokat kapcsol be (Adenilát-cikláz, Foszfolipáz C, cGMP-foszfodieszteráz).
                <br>• <em>βγ-komplex:</em> Közvetlenül modulálja a membránhoz kötött ioncsatornákat (pl. K⁺ csatornák nyitása, Ca²⁺ csatornák gátlása) – ez egy membránhoz kötött, lokális hatás.
              </li>
              <li style="margin-bottom: 0;">
                <strong>GTP hidrolízis és a válasz lecsengése:</strong> Az α alegység intrinsic (belső) GTP-áz aktivitással bír: a GTP-t lassan hidrolizálja <strong>GDP + szervetlen foszfáttá (Pi)</strong>. Ekkor az α alegység leválik az effektorról, újra egyesül a βγ komplexszel, és visszaáll az inaktív alapállapot. Agonista hiányában a rendszer nyugalomban marad.
              </li>
            </ol>
          </section>

          <!-- 5. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">5. G-fehérje családok és másodlagos hírvivő kaszkádok</h2>
            <p>
              Az α-alegység típusa határozza meg, hogy a receptor milyen másodlagos hírvivő utat aktivál vagy gátol a sejtben.
            </p>

            <!-- Gs és Gi -->
            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
              <h3 style="margin-top: 0; color: #1e40af;">Az Adenilát-cikláz (AC) – cAMP – Protein Kináz A (PKA) tengely</h3>
              <p>
                Az adenilát-cikláz az ATP-ből ciklikus adenozin-monofoszfátot (cAMP) képez, ami aktiválja a Protein Kináz A-t (PKA). A PKA specifikus szerin és treonin oldalláncokon foszforilálja célfehérjéit.
              </p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px;">
                <div style="background: #ffffff; border: 1px solid #93c5fd; border-radius: 6px; padding: 12px;">
                  <strong style="color: #1d4ed8;">G_s (Stimuláló): cAMP szint NŐ</strong>
                  <ul style="padding-left: 16px; margin: 8px 0 0 0; font-size: 0.92rem;">
                    <li style="margin-bottom: 4px;"><strong>Adrenerg (β₁, β₂, β₃):</strong> szív, GI traktus, zsírsejtek</li>
                    <li style="margin-bottom: 4px;"><strong>Purinerg (A₂):</strong> vazodilatáció</li>
                    <li style="margin-bottom: 4px;"><strong>Dopaminerg (D₁):</strong> veserekeringés, agy</li>
                    <li style="margin-bottom: 4px;"><strong>Hisztaminerg (H₂):</strong> gyomor fedősejtek (sósav)</li>
                    <li style="margin-bottom: 4px;"><strong>Vazopresszin (V₂):</strong> vesegyűjtőcsatorna (vízvisszaszívás)</li>
                    <li style="margin-bottom: 4px;"><strong>Szerotonerg (5-HT₄):</strong> bélmotilitás</li>
                    <li style="margin-bottom: 4px;"><strong>Prosztanoidok:</strong> PGD, PGI (prosztaciklin - vérlemezkegátlás)</li>
                    <li style="margin-bottom: 4px;"><strong>GI hormonok:</strong> VIP, Szekretin, Glukagon</li>
                    <li style="margin-bottom: 0;"><strong>Hipofízis hormonok:</strong> ACTH, TSH, FSH, LH</li>
                  </ul>
                </div>
                <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 12px;">
                  <strong style="color: #475569;">G_i (Inhibitor): cAMP szint CSÖKKEN</strong>
                  <ul style="padding-left: 16px; margin: 8px 0 0 0; font-size: 0.92rem;">
                    <li style="margin-bottom: 4px;"><strong>Adrenerg (α₂):</strong> preszinaptikus gátlás, simaizom</li>
                    <li style="margin-bottom: 4px;"><strong>Kolinerg (M₂, M₄):</strong> szív (negatív inotróp/kronotróp), agy</li>
                    <li style="margin-bottom: 4px;"><strong>Purinerg (A₁):</strong> szívfrekvencia csökkentése</li>
                    <li style="margin-bottom: 4px;"><strong>Dopaminerg (D₂, D₃, D₅):</strong> gátló dopamin receptorok</li>
                    <li style="margin-bottom: 4px;"><strong>Szerotonerg (5-HT₁):</strong> vazokonstriktív/gátló neuronális</li>
                    <li style="margin-bottom: 4px;"><strong>GABA_B:</strong> lassú preszinaptikus és posztszinaptikus gátlás</li>
                    <li style="margin-bottom: 4px;"><strong>Metabotróp glutamát (mGluR 2, 3, 4):</strong> neuronok</li>
                    <li style="margin-bottom: 4px;"><strong>Szomatosztatin:</strong> GI traktus, adenohipofízis gátlása</li>
                    <li style="margin-bottom: 0;"><strong>Opiát receptorok (μ, δ, κ):</strong> fájdalomcsillapítás, GI neuronok</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Gq -->
            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
              <h3 style="margin-top: 0; color: #1e40af;">A Foszfolipáz C (PLC) – IP₃ / DAG – PKC / Ca²⁺ tengely (G_q)</h3>
              <p>
                A <strong>G_q</strong> fehérje aktiválja a membránkötött <strong>Foszfolipáz C-t (PLC)</strong>, amely a membrán foszfolipidjét, a foszfatidilinozit-4,5-biszfoszfátot (<strong>PIP₂</strong>) két párhuzamos hírvivőre hasítja:
              </p>
              <ul style="padding-left: 20px;">
                <li style="margin-bottom: 6px;">
                  <strong>IP₃ (Inozit-1,4,5-triszfoszfát):</strong> Vízoldékony molekula, a citoszolba diffundál és megköti az endoplazmatikus retikulum (ER) ligand-vezérelt Ca²⁺-csatornáit (IP₃R) -> <strong>Ca²⁺ szabadul fel a citoszolba</strong>.
                </li>
                <li style="margin-bottom: 6px;">
                  <strong>DAG (Diacilglicerin):</strong> Zsíroldékony lévén a membránban marad, és a felszabadult Ca²⁺-ionokkal együtt aktiválja a <strong>Protein Kináz C-t (PKC)</strong>, ami további effektor fehérjéket foszforilál.
                </li>
              </ul>
              <p style="margin-bottom: 0;">
                <strong>Tipikus G_q kapcsolt receptorok:</strong>
                <br>• <strong>Adrenerg (α₁):</strong> érsimaizom összehúzódás, vérnyomásemelés.
                <br>• <strong>Kolinerg (M₁, M₃, M₅):</strong> mirigyszekréció, gyomor fedősejtek, simaizom kontrakció.
                <br>• <strong>Vazopresszin (V₁):</strong> érsimaizom vazokonstriktív hatás.
                <br>• <strong>Hisztaminerg (H₁):</strong> hízósejtek, allergiás reakciók, simaizom kontrakció.
                <br>• <strong>Purinerg (P2y, P2u), Prosztaglandin E (PGE₁), Tromboxán (TXA₂):</strong> vérlemezke aggregáció és simaizom tónus.
              </p>
            </div>

            <!-- Gt és G0 -->
            <div style="background-color: #f1f5f9; border-radius: 8px; padding: 14px;">
              <h4 style="margin-top: 0; color: #0f172a;">Egyéb speciális G-fehérjék</h4>
              <ul style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 4px;"><strong>G_t (Transzducin):</strong> A látás fototranszdukciójában aktiválja a cGMP-foszfodieszterázt -> cGMP szint CSÖKKEN -> kationcsatornák záródnak -> fotoreceptor hiperpolarizáció.</li>
                <li style="margin-bottom: 0;"><strong>G_0 és G_12/13:</strong> Kináz kaszkádokon (ERK) és kis G-fehérjéken (Rho) keresztül kapcsolódnak a génátíráshoz, sejtosztódáshoz és citoszkeleton átrendeződéshez.</li>
              </ul>
            </div>
          </section>

          <!-- 6. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">6. Monomer G-fehérjék (Kis GTP-ázok): Molekuláris kapcsolók</h2>
            <p>
              A heterotrimer komplexektől eltérően a monomer G-fehérjék egyetlen polipeptidláncból állnak (hasonlítanak a heterotrimer G-fehérjék α alegységéhez). Bináris <strong>molekuláris kapcsolóként</strong> működnek a sejtben:
            </p>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 4px;"><strong>GDP-kötött forma:</strong> Inaktív („OFF” állapot).</li>
              <li style="margin-bottom: 4px;"><strong>GTP-kötött forma:</strong> Aktív („ON” állapot) – köti és aktiválja az effektorait.</li>
            </ul>

            <div style="background-color: #fffbeb; border: 1px solid #fef3c7; border-radius: 8px; padding: 14px; margin: 16px 0;">
              <h4 style="margin-top: 0; color: #92400e;">A működést irányító két kulcsfehérje</h4>
              <p style="margin-bottom: 0;">
                • <strong>GEF (Guanine nucleotide Exchange Factor):</strong> Segíti a GDP távozását és a GTP belépését -> <em>BEKAPCSOLJA</em> a fehérjét.
                <br>• <strong>GAP (GTPase-Activating Protein):</strong> Sok ezerszeresére gyorsítja a monomer fehérje saját, lassú GTP-bontó aktivitását -> elősegíti a GTP hidrolízisét GDP-vé -> <em>KIKAPCSOLJA</em> a fehérjét.
              </p>
            </div>

            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; margin: 16px 0;">
                <thead>
                  <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                    <th style="padding: 10px; font-weight: 600;">Család</th>
                    <th style="padding: 10px; font-weight: 600;">Példák</th>
                    <th style="padding: 10px; font-weight: 600;">Fő biológiai funkció</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Ras</td>
                    <td style="padding: 10px;">H-Ras, K-Ras, N-Ras</td>
                    <td style="padding: 10px;">Sejtproliferáció, növekedési faktorok szignáljai, MAPK kaszkád.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Rho</td>
                    <td style="padding: 10px;">RhoA, RhoB, RhoC</td>
                    <td style="padding: 10px;">Aktin citoszkeleton átrendeződés, sejtmozgás (migráció), kontrakció.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Rac</td>
                    <td style="padding: 10px;">Rac1, Rac2, Rac3</td>
                    <td style="padding: 10px;">Lamellipódium képződés (membrane ruffling), reaktív oxigéngyökök (ROS) termelése.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Cdc42</td>
                    <td style="padding: 10px;">Cdc42</td>
                    <td style="padding: 10px;">Sejtpolaritás kialakítása, filopódiumok szerveződése.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Rab</td>
                    <td style="padding: 10px;">Rab1, Rab5, Rab7, Rab11</td>
                    <td style="padding: 10px;">Vezikuláris transzport, membránfúzió és endoszómális forgalom.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Ran</td>
                    <td style="padding: 10px;">Ran</td>
                    <td style="padding: 10px;">Nukleocitoplazmatikus transzport (fehérjék és RNS ki-be szállítása a magpóruson).</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: 600;">Arf / Sar1</td>
                    <td style="padding: 10px;">Arf1, Arf6, Sar1</td>
                    <td style="padding: 10px;">Vezikulaképződés burokfehérjék (COP, klatrin) toborzása révén.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- 7. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">7. A receptor-deszenzitizáció dinamikája és a szignaloszóma</h2>
            <p>
              Ha egy sejt tartósan magas ligandum-koncentrációnak van kitéve, a túlterhelés elkerülésére <strong>deszenzitizációs folyamat</strong> indul be, amely fokozatosan lekapcsolja a választ:
            </p>
            <ol style="padding-left: 20px;">
              <li style="margin-bottom: 6px;">A 7-TM receptor tartósan köti a ligandumot.</li>
              <li style="margin-bottom: 6px;">Aktiválódik a <strong>GRK (G-protein coupled receptor kinase)</strong>, amely specifikusan foszforilálja a receptor intracelluláris C-terminális farkát.</li>
              <li style="margin-bottom: 6px;">A foszforiláció következtében a G-fehérje disszociál a receptorról.</li>
              <li style="margin-bottom: 6px;">A G-fehérje helyére egy gátló adapterfehérje, a <strong>β-arresztin</strong> kötődik a foszforilált receptorhoz.</li>
            </ol>

            <div style="background-color: #f8fafc; border-left: 4px solid #f59e0b; padding: 14px; margin: 16px 0;">
              <h3 style="margin-top: 0; color: #b45309;">A β-arresztin kötődésének 4 súlyos következménye</h3>
              <ol style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 4px;"><strong>Sterikus gátlás:</strong> A receptor fizikailag nem képes többé G-fehérjét kötni.</li>
                <li style="margin-bottom: 4px;"><strong>Affinitáscsökkenés (funkcionális deszenzitizáció):</strong> Csökken a külső ligandum kötődési erőssége.</li>
                <li style="margin-bottom: 4px;"><strong>Internalizáció:</strong> A β-arresztin klatrin-burkos gödröket toboroz, a receptor endocitózissal bekerül a sejt belsejébe (down-regulation vagy recirkuláció céljából).</li>
                <li style="margin-bottom: 0;"><strong>Szignaloszóma képződés:</strong> Az internalizált receptor-arresztin komplex nem némul el teljesen, hanem új intracelluláris jelátviteli platformot alkot: toborozza az <strong>Akt és ERK kinázokat</strong>, elindítva a túlélést és sejtosztódást irányító másodlagos utakat!</li>
              </ol>
            </div>
          </section>

          <!-- 8. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">8. Enzimatikus jelerősítés (Amplifikáció)</h2>
            <p>
              Miért elegendő pikomólos vagy nanomólos hormonkoncentráció a masszív sejtválasz kiváltásához? A válasz az egymást követő lépések <strong>enzimatikus multiplikációjában</strong> rejlik.
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="margin-top: 0; color: #0f172a;">A jelerősítés számszerű mechanizmusa</h3>
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                  <thead>
                    <tr style="border-bottom: 2px solid #cbd5e1;">
                      <th style="padding: 8px;">Szint / Lépés</th>
                      <th style="padding: 8px;">Molekulák száma (Példa)</th>
                      <th style="padding: 8px;">Biológiai esemény</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px; font-weight: 600;">1. Elsődleges hírvivő</td>
                      <td style="padding: 8px; font-family: monospace;">1 molekula</td>
                      <td style="padding: 8px;">1 db β- vagy α-adrenerg agonista beköt a receptorba.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px; font-weight: 600;">2. Effektor enzim</td>
                      <td style="padding: 8px; font-family: monospace;">1 molekula</td>
                      <td style="padding: 8px;">1 db aktív Adenilát-cikláz vagy Foszfolipáz C aktiválódik.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px; font-weight: 600;">3. Másodlagos hírvivő</td>
                      <td style="padding: 8px; font-family: monospace;">100 molekula</td>
                      <td style="padding: 8px;">Az enzim folyamatos működéssel 100 db cAMP-t vagy DAG-ot szintetizál.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px; font-weight: 600;">4. Protein kináz aktiváció</td>
                      <td style="padding: 8px; font-family: monospace;">100 molekula</td>
                      <td style="padding: 8px;">100 db PKA vagy PKC enzim válik aktívvá.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px; font-weight: 600;">5. Célfehérje foszforiláció</td>
                      <td style="padding: 8px; font-family: monospace;">10 000 molekula</td>
                      <td style="padding: 8px;">Minden egyes kináz többszörös ciklusban foszforilál más enzimeket.</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; font-weight: 600; color: #1e40af;">6. Kémiai végtermék</td>
                      <td style="padding: 8px; font-family: monospace; font-weight: 700; color: #1e40af;">1 000 000 molekula</td>
                      <td style="padding: 8px; font-weight: 600;">A foszforilált anyagcsere-enzimek hatalmas tömegű végterméket termelnek!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style="margin: 12px 0 0 0; font-size: 0.95rem; color: #475569;">
                <em>Végeredmény:</em> Egyetlen receptor-kötődési aktus <strong>egymilliószorosára sokszorozódik</strong> a kaszkádban.
              </p>
            </div>
          </section>

          <!-- 9. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">9. Intracelluláris és nukleáris receptorok (Lipofil hírvivők)</h2>
            <p>
              Az apoláris, hidrofób hormonok képesek egyszerű passzív diffúzióval átlépni a foszfolipid kettősrétegen. Számukra a receptor nem a felszínen, hanem a sejt belsejében helyezkedik el:
            </p>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 6px;">
                <strong>Citoplazmatikus receptorok:</strong> Szteroid hormonok (pl. tesztoszteron, ösztrogén, progeszteron, kortizol, aldoszteron) receptorai a citoszolban találhatók. A hormon kötődése után a komplex transzlokálódik a sejtmagba.
              </li>
              <li style="margin-bottom: 6px;">
                <strong>Nukleáris receptorok:</strong> A tiroxin (T3/T4 pajzsmirigyhormonok) receptora már eleve a sejtmagban, a kromatinhoz kötve várja a ligandumát.
              </li>
              <li style="margin-bottom: 6px;">
                <strong>Intracelluláris NO-receptor:</strong> Az oldható guanilát-cikláz (sGC) enzim hem-csoportjához kötődve cGMP képződést vált ki (főleg simaizom relaxációban).
              </li>
            </ul>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; margin-top: 14px;">
              <h4 style="margin-top: 0; color: #0f172a;">A génexpressziós hatásmechanizmus</h4>
              <p style="margin-bottom: 0;">
                A ligandum-receptor komplex <strong>transzkripciós faktorként működik</strong>. Specifikus DNS szakaszokhoz (hormon-reszponzív elemekhez) kapcsolódva serkenti vagy gátolja a transzkripciót -> módosul az mRNS szintézis -> új fehérjék (enzimek, transzporterek) szintetizálódnak. A válasz kialakulása órákat igényel, de a hatás napokig fennmarad.
              </p>
            </div>
          </section>

          <!-- 10. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">10. A Ca²⁺ mint univerzális másodlagos hírvivő</h2>
            <p>
              Az intracelluláris szabad Ca²⁺ szint emelkedése <strong>minden esetben a sejtaktiváció kísérő jelensége, vagyis egy ubiquiter (mindenütt jelen lévő) szignál</strong>.
            </p>

            <div style="background-color: #f8fafc; border-left: 4px solid #0ea5e9; padding: 14px; margin: 16px 0;">
              <h3 style="margin-top: 0; color: #0369a1;">A gigantikus koncentrációgrádiens</h3>
              <p style="font-family: monospace; font-size: 1.05rem; text-align: center; margin: 12px 0;">
                [Ca²⁺]_extracelluláris = 1,13 – 1,32 mM &nbsp;&nbsp;vs.&nbsp;&nbsp; [Ca²⁺]_intracelluláris = 0,1 – 1 µM
              </p>
              <p style="margin-bottom: 0;">
                A sejt nyugalomban a belső Ca²⁺ szintet extrém alacsonyan tartja (~100 nM = 0,1 µM), míg a külső térben ez több mint 10 000-szer magasabb (~1,2 mM). Ez óriási elektrokémiai hajtóerőt jelent a Ca²⁺ beáramlására. Steady-state (nyugalmi) állapotban a <em>Ca²⁺-influx = Ca²⁺-efflux</em> egyensúly fennállása kötelező.
              </p>
            </div>

            <h3 style="color: #0f172a;">A 6 fő útvonal a Ca²⁺ citoszolba juttatására ([Ca²⁺]_i növelése)</h3>
            <ol style="padding-left: 20px;">
              <li style="margin-bottom: 4px;"><strong>L-típusú feszültségfüggő Ca²⁺-csatorna (Cav):</strong> Hosszan nyíló, nagy vezetőképességű csatorna (szívizom, simaizom).</li>
              <li style="margin-bottom: 4px;"><strong>T-típusú Ca²⁺-csatorna:</strong> Alacsony feszültségküszöbű, átmeneti áramot biztosító csatorna (pacemaker működés).</li>
              <li style="margin-bottom: 4px;"><strong>Ligand-kapuzott Ca²⁺-csatornák (ROC):</strong> Közvetlen beáramlás ingerületátvivő anyagok hatására (pl. NMDA-receptor).</li>
              <li style="margin-bottom: 4px;"><strong>Raktár-vezérelt Ca²⁺-csatornák (SOCE):</strong> Az ER kiürülése esetén a membránban pórust nyitnak a külső Ca²⁺ felvételére.</li>
              <li style="margin-bottom: 4px;"><strong>Na⁺-csatornák közvetett hatása:</strong> A Na⁺ belépése megemeli a belső [Na⁺]-t, ami gátolja vagy megfordítja az NCX működését.</li>
              <li style="margin-bottom: 4px;"><strong>NCX reverz módú működése:</strong> Erős depolarizáció vagy magas belső Na⁺ esetén 3 Na⁺ lép ki, és 1 Ca²⁺ lép be a sejtbe!</li>
            </ol>

            <h3 style="color: #0f172a;">Hogyan tünteti el a sejt a Ca²⁺-t a citoszolból ([Ca²⁺]_i csökkentése)?</h3>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 4px;"><strong>PMCA (Plazmamembrán Ca²⁺-ATPáz):</strong> Elsődleges aktív transzporttal közvetlenül a külső térbe pumpálja a Ca²⁺-t.</li>
              <li style="margin-bottom: 4px;"><strong>NCX forward mód:</strong> Másodlagos aktív transzporttal 3 Na⁺ beáramlása hajtja 1 Ca²⁺ eltávolítását a külső térbe.</li>
              <li style="margin-bottom: 4px;"><strong>SERCA (SR/ER Ca²⁺-ATPáz):</strong> A belső raktárakba (szarkoplazmatikus retikulum) pumpálja vissza a Ca²⁺-t; működését a <strong>foszfolamban (PLB)</strong> gátolja/szabályozza.</li>
              <li style="margin-bottom: 0;"><strong>Mitokondriális felvétel:</strong> Masszív terhelés esetén a mitokondrium elektrokémiai grádiense terhére gyorsan felveszi a felesleges kalciumot.</li>
            </ul>

            <div style="background-color: #f1f5f9; border-radius: 8px; padding: 14px; margin-top: 16px;">
              <h4 style="margin-top: 0; color: #0f172a;">A felszabadult Ca²⁺ molekuláris célpontjai</h4>
              <ul style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 4px;"><strong>Troponin-C:</strong> Szív- és vázizomban elindítja az aktin-miozin filamentumok elcsúszását (kontrakció).</li>
                <li style="margin-bottom: 4px;"><strong>Kalmodulin (CaM) / CaMKII:</strong> Ca²⁺-függő protein kináz II aktiválása, amely globális foszforilációt végez.</li>
                <li style="margin-bottom: 4px;"><strong>Protein Kináz C (PKC):</strong> A DAG-gal kooperálva transzlokálódik a membránhoz és aktiválódik.</li>
                <li style="margin-bottom: 0;"><strong>Ca²⁺-szenzitív ioncsatornák:</strong> Pl. Ca²⁺-aktivált K⁺ és Cl⁻ csatornák nyitása.</li>
              </ul>
            </div>
          </section>

          <!-- 11. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">11. Élettani és kórélettani integráció: Adrenerg és Ca²⁺ szignalizáció a szívizomban</h2>
            <p>
              A szívizom adrenerg szabályozása a szignáltranszdukció orvosi élettani csúcspéldája: tökéletesen szemlélteti, hogyan válik egy fiziológiás adaptáció kóros maladaptációvá.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 16px 0;">
              <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px;">
                <h4 style="margin-top: 0; color: #166534;">1. Fiziológiás adaptáció: Inotrópia</h4>
                <p style="font-size: 0.95rem; margin-bottom: 0;">
                  A szimpatikus aktiváció során a noradrenalin megköti a <strong>β₁-adrenerg receptort</strong> -> G_s aktiváció -> cAMP ↑ -> <strong>PKA aktiváció</strong>. A PKA foszforilálja az <strong>L-típusú Ca²⁺-csatornákat (I_Ca-L)</strong>, növelve a Ca²⁺ beáramlást. A megnövekedett [Ca²⁺]_i hatására a szív összehúzódási ereje fokozódik (<strong>pozitív inotróp hatás</strong>).
                </p>
              </div>

              <div style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 14px;">
                <h4 style="margin-top: 0; color: #991b1b;">2. Maladaptáció: Arrhythmogenesis & Remodeling</h4>
                <p style="font-size: 0.95rem; margin-bottom: 0;">
                  A magas [Ca²⁺]_i aktiválja a <strong>CaMKII</strong> kinázt. A CaMKII tovább foszforilálja az I_Ca-L csatornát -> <em>ördögi kör (circulus vitiosus)</em> alakul ki még több Ca²⁺-mal. A CaMKII átfoszforilálja a többi ioncsatornát is (I_Na, I_Cl-Ca, I_Ks, I_Kr, I_K1, I_to) -> elektromos instabilitás, korai és késői utódepolarizációk -> <strong>Arrhythmia (életveszélyes ritmuszavar)</strong>! Hosszú távon pedig strukturális szívizom-átépülés (<strong>Remodeling</strong>, szívelégtelenség) alakul ki.
                </p>
              </div>
            </div>

            <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 14px;">
              <h4 style="margin-top: 0; color: #1e40af;">A beépített fék: β₃-adrenerg kardioprotekció</h4>
              <p style="margin-bottom: 0;">
                A szívizomban jelen lévő <strong>β₃-adrenerg receptorok</strong> stimulációja fokozza a <strong>NO (nitrogén-monoxid)</strong> termelődését. A megnövekedett NO szint gátolja a túlzott Ca²⁺ beáramlást és a CaMKII hiperaktivációját, ezzel <strong>kardioprotektív védelmet</strong> nyújt a toxikus szimpatikus túlstimulációval szemben.
              </p>
            </div>
          </section>

          <!-- 12. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">12. Térbeli pontosság: Kompartmentalizáció, AKAP és a PDE-barrier</h2>
            <p>
              Hogyan lehetséges, hogy a citoplazmában szabadon diffundáló cAMP egyszerre tud szívizom-összehúzódást fokozni anélkül, hogy a sejt összes többi PKA-függő fehérjéjét kontrollálatlanul bekapcsolná? A megoldás a <strong>jelátviteli kompartmentalizáció</strong>.
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="margin-top: 0; color: #0f172a;">A mikrodomének két fő építőköve</h3>
              <ol style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 10px;">
                  <strong>AKAP (A-Kinase Anchoring Protein) scaffold fehérjék:</strong>
                  <br>Az AKAP olyan „horgonyzó állvány”, amely fizikai közelségbe köti egymással a láncolat elemeit. Egyetlen AKAP fehérjéhez kapcsolódhat:
                  <ul style="padding-left: 18px; margin-top: 4px;">
                    <li style="margin-bottom: 2px;">a β-adrenerg receptor,</li>
                    <li style="margin-bottom: 2px;">az Adenilát-cikláz és a G_s fehérje,</li>
                    <li style="margin-bottom: 2px;">a Protein Kináz A (PKA) és a Protein Kináz C (PKC),</li>
                    <li style="margin-bottom: 2px;">Protein foszfatázok,</li>
                    <li style="margin-bottom: 2px;">Citoszkeletális elemek,</li>
                    <li style="margin-bottom: 2px;">valamint maguk a célpontként szolgáló <strong>Ca²⁺- és K⁺-csatornák</strong>.</li>
                  </ul>
                  <em>Élettani haszon:</em> A molekuláknak nem kell diffúzióval keresniük egymást; a jelátvitel sebessége ezredmásodpercekre gyorsul, és a scaffold fehérje lehetővé teszi a különböző jelutak precíz konvergenciáját.
                </li>
                <li style="margin-bottom: 0;">
                  <strong>A PDE-barrier (Foszfodieszteráz gát):</strong>
                  <br>A mikrodomén szélét sűrűn körülveszik a <strong>PDE (cAMP-foszfodieszteráz)</strong> enzimek. Amint az Adenilát-cikláz által termelt cAMP ki akarna szökni a mikrodoménből, a PDE azonnal hidrolizálja (inaktiválja). Ezáltal a magas cAMP-koncentráció szigorúan a mikrodoménen belül marad, lokális mikro-gradienst képezve a cél-PKA körül.
                </li>
              </ol>
            </div>
          </section>

          <!-- 13. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">13. A jelátviteli útvonalak specificitása és a kereszthatások (Cross-talk)</h2>
            <p>
              Gyakori kérdés, hogy miért vált ki ugyanaz a szignálmolekula (pl. adrenalin) májsejtben glikogenolízist, simaizomban elernyedést, szívizomban pedig fokozott összehúzódást? A választ nem a hírvivő, hanem a célsejt belső felépítése hordozza.
            </p>

            <h3 style="color: #0f172a;">A sejt szintű válasz specificitását megszabó 4 alaptényező</h3>
            <ol style="padding-left: 20px;">
              <li style="margin-bottom: 6px;"><strong>Milyen receptor expresszálódik a sejten?</strong> (Pl. α₁ vs. β₂ adrenerg receptor).</li>
              <li style="margin-bottom: 6px;"><strong>A receptor milyen szignáltranszdukciós útvonallal kapcsolódik?</strong> (G_s vs. G_i vs. G_q).</li>
              <li style="margin-bottom: 6px;"><strong>Milyen lipid raft-ban és hol foglal helyet a membránban?</strong> (Membrán mikrodomén topológia).</li>
              <li style="margin-bottom: 6px;"><strong>Hogyan kompartmentalizálódik a sejt belső tere?</strong> (Specifikus AKAP és PDE elrendeződések).</li>
            </ol>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; margin-top: 14px;">
              <h4 style="margin-top: 0; color: #0f172a;">Útvonal-kombinációk a sejtekben</h4>
              <ul style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 4px;"><strong>Lineáris útvonal (Cell A):</strong> 1 ligandum -> 1 receptor -> közvetlen, dedikált válasz.</li>
                <li style="margin-bottom: 4px;"><strong>Elágazó útvonal (Cell B):</strong> Egyetlen aktivált receptor több intracelluláris hírvivő láncot indít el, kettős sejtválaszt adva (pl. PLC -> IP₃ és DAG ág).</li>
                <li style="margin-bottom: 4px;"><strong>Kereszthatás / Cross-talk (Cell C):</strong> Két különböző receptor által indított útvonal keresztezi egymást: az egyik aktiválja vagy éppen gátolja a másik lánc köztes elemét (finomhangolás).</li>
                <li style="margin-bottom: 0;"><strong>Receptor-diverzitás (Cell D):</strong> Ugyanaz a ligandum egy másik szövetben teljesen más receptortípust aktivál, radikálisan eltérő végrehajtó választ eredményezve.</li>
              </ul>
            </div>
          </section>

          <!-- ÖSSZEGZÉS -->
          <footer style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 20px; margin-top: 32px;">
            <h3 style="color: #38bdf8; margin-top: 0;">Összegzés a vizsgához</h3>
            <p style="margin-bottom: 0; font-size: 0.95rem; line-height: 1.6;">
              A sejtszintű szabályozás lényege a <strong>felismerés, amplifikáció és lokalizáció</strong> hármasa. Az ionotróp receptorok az azonnali elektromos választ biztosítják, a 7-TM metabotróp receptorok G-fehérjéken (G_s, G_i, G_q) keresztül többlépcsős másodlagos hírvivő kaszkádokat indítanak, míg az intracelluláris receptorok tartós génexpressziós változást hoznak létre. A jelerősítés révén 1etlen molekula akár 1 000 000 terméket generálhat. A kontrollt a <strong>GRK/β-arresztin deszenzitizáció</strong>, a monomer G-fehérjék (GEF/GAP) kapcsolói, valamint az <strong>AKAP scaffold fehérjék és a PDE-barrierek</strong> által kialakított szigorú mikrodomének garantálják.
            </p>
          </footer>

        </article>
    `
});