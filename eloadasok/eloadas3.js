window.LEKTURAK.push({
    id: "ppt3-content",
    title: "3. Előadás: Elektromos membránsajátságok",
    shortName: "Elektromos sajátságok",
    tag: "S-3-Elektromos.pdf &bull; Tantermi hanganyaggal",
    html: `
        <article class="electrical-properties-lecture" style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.65; color: #1e293b; max-width: 960px; margin: 0 auto; padding: 24px;">

          <header style="border-bottom: 2px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 32px;">
            <h1 style="color: #0f172a; font-size: 2rem; margin-bottom: 8px;">Elektromos Membránsajátságok</h1>
            <p style="color: #64748b; font-size: 1.1rem; margin: 0;">Részletes élettani összefoglaló a Donnan-egyensúlytól a nyugalmi potenciálon, az RC-áramköri viselkedésen és a tanári hanganyag szóbeli magyarázatain át a passzív kábel-tulajdonságokig</p>
          </header>

          <!-- 1. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">1. A sejt mint Donnan-rendszer és a Donnan-potenciál határai</h2>
            <p>
              Ha egy szemipermeábilis membrán két oldalán diffúzibilis ionok találhatók, de az egyik térfélben nagyméretű, a membránon átjutni képtelen <strong>nem-diffúzibilis anionok</strong> (fehérjék, szerves foszfátok: <code>Prot⁻</code>) rekednek, speciális passzív termodinamikai állapot alakul ki: a <strong>Gibbs–Donnan-egyensúly</strong>.
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="color: #0f172a; margin-top: 0;">A Donnan-egyensúly két alaptörvénye</h3>
              <ol style="padding-left: 20px; margin-bottom: 12px;">
                <li style="margin-bottom: 8px;">
                  <strong>Makroszkopikus elektroneutralitás elve:</strong> Mindkét kompartmentben a pozitív és negatív töltések összegének makroszkopikusan meg kell egyeznie:
                  <br><code style="font-size: 1rem;">[K⁺]_A = [Cl⁻]_A + [Prot⁻]_A</code> &nbsp;&nbsp;és&nbsp;&nbsp; <code style="font-size: 1rem;">[K⁺]_B = [Cl⁻]_B</code>
                </li>
                <li style="margin-bottom: 0;">
                  <strong>A Donnan-féle ionszorzat törvénye:</strong> Egyensúlyi állapotban az elektrokémiai potenciálnak minden szabadon diffundáló ionra (K⁺, Cl⁻) nézve nullának kell lennie, aminek feltétele az ionkoncentrációk szorzatának egyenlősége a két térfél között:
                  <br><code style="font-size: 1rem;">[K⁺]_A · [Cl⁻]_A = [K⁺]_B · [Cl⁻]_B</code>
                </li>
              </ol>
              <p style="margin-bottom: 0; font-size: 0.95rem; color: #334155;">
                <em>Konkrét számpélda a diáról:</em> Ha a kiinduláskor az A oldalon 0,1 M K⁺ és 0,1 M Prot⁻ van, a B oldalon pedig 0,1 M K⁺ és 0,1 M Cl⁻, az egyensúly beálltakor a diffúzió révén az A oldalon <code>[K⁺] = 0,133 M</code> és <code>[Cl⁻] = 0,033 M</code> lesz, míg a B oldalon <code>[K⁺] = 0,066 M</code> és <code>[Cl⁻] = 0,066 M</code> alakul ki.
              </p>
            </div>

            <div style="background-color: #fffbeb; border: 1px solid #fef3c7; border-radius: 8px; padding: 14px; margin-top: 14px;">
              <h4 style="margin-top: 0; color: #92400e;">Miért nem elegendő a Donnan-potenciál a sejt nyugalmi potenciáljának megmagyarázására?</h4>
              <p>
                A nem-diffúzibilis fehérjék jelenléte miatt a membrán két oldala között elektromos kettősréteg képződik, amely a fehérjéket tartalmazó oldalt negatívvá teszi a külsőhöz képest. Ez a makroszkopikus elektroneutralitást csupán mikroszkopikus mértékben sérti meg a membrán közvetlen felszínén.
              </p>
              <p style="margin-bottom: 0;">
                A Donnan-egyensúly által generált potenciálkülönbség nagyságrendileg csupán <strong>-10 mV</strong>. Ezért a Donnan-potenciál <strong>önmagában képtelen megmagyarázni az élő, ingerlékeny sejtekre jellemző erősen negatív (-70 mV és -90 mV közötti) nyugalmi membránpotenciált</strong>!
              </p>
            </div>
          </section>

          <!-- 2. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">2. A nyugalmi membránpotenciál eredete és a Nernst-egyenlet</h2>
            <p>
              A valódi nyugalmi potenciál kialakulásának alapfeltétele az aktív transzportfolyamatok által felépített és fenntartott <strong>aszimmetrikus ioneloszlás</strong>. A sejt lényegében egy több-komponensű koncentrációs elemként működik, ahol a nyugalmi feszültséget az ionok szelektív szivárgása által létrehozott <strong>diffúziós potenciál</strong> adja.
            </p>

            <h3 style="color: #0f172a;">Fiziológiás ionkoncentrációk és Nernst-féle egyensúlyi potenciálok (37 °C-on)</h3>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; margin: 16px 0;">
                <thead>
                  <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                    <th style="padding: 10px; font-weight: 600;">Ion</th>
                    <th style="padding: 10px; font-weight: 600;">Intracelluláris koncentráció [X]ᵢ</th>
                    <th style="padding: 10px; font-weight: 600;">Extracelluláris koncentráció [X]ₒ</th>
                    <th style="padding: 10px; font-weight: 600;">Egyensúlyi potenciál (E_x)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600; color: #1d4ed8;">Na⁺</td>
                    <td style="padding: 10px; font-family: monospace;">15,0 mmol/l</td>
                    <td style="padding: 10px; font-family: monospace;">150,0 mmol/l</td>
                    <td style="padding: 10px; font-family: monospace; font-weight: 700; color: #1d4ed8;">+60 mV</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600; color: #b91c1c;">K⁺</td>
                    <td style="padding: 10px; font-family: monospace;">150,0 mmol/l</td>
                    <td style="padding: 10px; font-family: monospace;">5,5 mmol/l</td>
                    <td style="padding: 10px; font-family: monospace; font-weight: 700; color: #b91c1c;">-90 mV</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: 600; color: #15803d;">Cl⁻</td>
                    <td style="padding: 10px; font-family: monospace;">9,0 mmol/l</td>
                    <td style="padding: 10px; font-family: monospace;">125,0 mmol/l</td>
                    <td style="padding: 10px; font-family: monospace; font-weight: 700; color: #15803d;">-70 mV</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="background-color: #f8fafc; border-left: 4px solid #0ea5e9; padding: 14px; margin: 16px 0;">
              <h4 style="margin-top: 0; color: #0369a1;">A Nernst-egyenlet</h4>
              <p>Egyetlen adott ion egyensúlyi potenciálját – azt a membránfeszültséget, amelynél a koncentrációgrádiens és az elektromos taszítóerő pontosan kiegyenlíti egymást, így a nettó ionáramlás megszűnik – a Nernst-egyenlet számítja ki:</p>
              <p style="font-family: monospace; font-size: 1.05rem; text-align: center; margin: 12px 0;">
                E_x = - (R · T) / (z · F) · ln([X]ₒ / [X]ᵢ)
              </p>
              <p style="margin-bottom: 0;">
                37 °C-on, 10-es alapú logaritmusra áttérve K⁺ ionra (ahol z = +1) a képlet egyszerűsített alakja:
                <br><code style="display: block; text-align: center; margin-top: 6px; font-size: 1.05rem;">E_K = -61,5 · log([K⁺]ₒ / [K⁺]ᵢ) &nbsp;= -90 mV</code>
              </p>
            </div>
          </section>

          <!-- 3. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">3. A nyugalmi membránpotenciál matematikai leírása: GHK és Húregyenlet</h2>
            <p>
              Mivel a sejtmembrán egyidejűleg több ionra is átjárható, a tényleges nyugalmi membránpotenciált (<code>V_m ≈ -70 mV</code>) nem egyetlen ion Nernst-potenciálja határozza meg, hanem az összes diffundáló ion súlyozott eredője.
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="color: #0f172a; margin-top: 0;">1. Goldman–Hodgkin–Katz (GHK) feszültségegyenlet</h3>
              <p>Az ionok relatív membránpermeabilitásait (p_K, p_Na, p_Cl) veszi alapul:</p>
              <p style="font-family: monospace; font-size: 0.95rem; text-align: center; margin: 12px 0; overflow-x: auto;">
                V_m = - (R · T / F) · ln [ (p_K·[K⁺]ₒ + p_Na·[Na⁺]ₒ + p_Cl·[Cl⁻]ᵢ) / (p_K·[K⁺]ᵢ + p_Na·[Na⁺]ᵢ + p_Cl·[Cl⁻]ₒ) ]
              </p>
              <p style="font-size: 0.9rem; color: #475569; margin-bottom: 0;">
                <em>Fontos részlet:</em> Mivel a Cl⁻ negatív töltésű anion, a törtben az intracelluláris és extracelluláris koncentrációjának helye felcserélődik a kationokhoz képest!
              </p>
            </div>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="color: #0f172a; margin-top: 0;">2. A Húregyenlet (Chord Conductance Equation)</h3>
              <p>
                A membránt egyenértékű párhuzamos elektromos áramkörként modellezi, ahol minden ionág egy telepből (Nernst-egyensúlyi potenciál, E_x) és egy vezetőképességből (konduktancia, g_x) áll:
              </p>
              <p style="font-family: monospace; font-size: 1.05rem; text-align: center; margin: 12px 0;">
                V_m = (g_K / g_T) · E_K + (g_Na / g_T) · E_Na + (g_Cl / g_T) · E_Cl + (g_Ca / g_T) · E_Ca
              </p>
              <p style="margin-bottom: 0;">
                Ahol <code>g_T = g_K + g_Na + g_Cl + g_Ca</code> a membrán teljes vezetőképessége (konduktanciája).
                <br><strong>A húregyenlet kulcsüzenete:</strong> A nyugalmi potenciál ahhoz az egyensúlyi potenciálhoz fekszik a legközelebb, amelyik ionra nézve a legnagyobb a membrán vezetőképessége. Nyugalomban a káliumcsatornák vannak döntően nyitva (<code>g_K ≫ g_Na</code>), ezért a V_m (-70 mV) nagyon közel esik az E_K-hoz (-90 mV).
              </p>
            </div>
          </section>

          <!-- 4. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">4. Konduktancia- és koncentráció-változások hatása a membránpotenciálra</h2>
            <p>
              A húregyenlet és az elektrokémiai potenciálkülönbség (<code>dEKP = V_m - E_x</code>) alapján pontosan megjósolható, hogyan mozdul el a membránpotenciál az egyes ioncsatornák nyitása vagy a külső ionkoncentrációk eltolódása során.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 16px 0;">
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
                <h4 style="margin-top: 0; color: #1e40af;">Konduktancia (g) változások hatása</h4>
                <ul style="padding-left: 18px; margin-bottom: 0; font-size: 0.95rem;">
                  <li style="margin-bottom: 6px;"><strong>g_K növekedése (g_K ↑):</strong> Hiperpolarizáció vagy repolarizáció (a V_m közeledik a -90 mV-hoz; pl. ATP-depléció a szívben K_ATP csatornákon át).</li>
                  <li style="margin-bottom: 6px;"><strong>g_K csökkenése (g_K ↓):</strong> Depolarizáció (Ba²⁺ vagy más K⁺-csatorna blokkolók hatására).</li>
                  <li style="margin-bottom: 6px;"><strong>g_Na növekedése (g_Na ↑):</strong> Hirtelen, masszív depolarizáció (az akciós potenciál felszálló szára / upstroke, afelé tart, hogy elérje a +60 mV-ot).</li>
                  <li style="margin-bottom: 6px;"><strong>g_Cl növekedése (g_Cl ↑):</strong> Repolarizáció vagy hiperpolarizáció, a potenciál stabilizálása a -70 mV-on (GABA_A és glicin receptorok gátló hatása).</li>
                  <li style="margin-bottom: 0;"><strong>g_Ca növekedése (g_Ca ↑):</strong> Depolarizáció (a szívizom akciós potenciál plató fázisa).</li>
                </ul>
              </div>

              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
                <h4 style="margin-top: 0; color: #1e40af;">Extracelluláris koncentrációk változása</h4>
                <ul style="padding-left: 18px; margin-bottom: 0; font-size: 0.95rem;">
                  <li style="margin-bottom: 8px;">
                    <strong>K⁺ₒ növekedése (Hyperkalaemia):</strong>
                    <br>A meredek kiáramlási grádiens csökken -> az E_K pozitívabbá válik -> <strong>kifejezett depolarizáció</strong>!
                  </li>
                  <li style="margin-bottom: 8px;">
                    <strong>Na⁺ₒ csökkenése:</strong>
                    <br>Enyhe hiperpolarizáció; az akciós potenciál csúcsértékének (overshoot) csökkenése.
                  </li>
                  <li style="margin-bottom: 0;">
                    <strong>Cl⁻ₒ csökkenése:</strong>
                    <br>A klorid kiáramlási iránya megváltozik -> <strong>átmeneti depolarizáció</strong> következik be.
                  </li>
                </ul>
              </div>
            </div>

            <div style="background-color: #f1f5f9; border-radius: 8px; padding: 16px; margin-top: 16px;">
              <h4 style="margin-top: 0; color: #0f172a;">A nyugalmi potenciál és az I_K1 csatorna görbéje</h4>
              <p style="margin-bottom: 0;">
                Ha a sejt ideális káliumelektródaként viselkedne (<code>g_K = g_T</code>), akkor a V_m pontosan követné az E_K egyenesét. Magas extracelluláris K⁺ koncentrációknál a mért V_m görbe valóban ráfekszik a Nernst-féle E_K vonalra. Alacsony [K⁺]ₒ tartományban azonban a V_m görbe ellaposodik és eltávolodik az E_K-tól. Ennek oka: a nyugalmi potenciált biztosító káliumcsatorna (<strong>I_K1</strong>) <em>befelé egyenirányító</em> sajátságú, ami azt jelenti, hogy <strong>alacsony külső K⁺ koncentrációnál a g_K vezetőképessége lecsökken</strong>, így a háttér Na⁺-áteresztés relatív súlya megnő!
              </p>
            </div>
          </section>

          <!-- 5. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">5. A Na⁺/K⁺ pumpa elektrofiziológiai szerepe (Az Ouabain kísérlet)</h2>
            <p>
              A Na⁺/K⁺-ATPáz a működése során 3 Na⁺-iont pumpál ki és 2 K⁺-iont juttat be. Mivel minden ciklusban 1 pozitív elemi töltést távolít el a citoszolból, a pumpa működése <strong>elektrogén</strong>.
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="margin-top: 0; color: #1e40af;">Az Ouabain kísérlet két fázisa:</h3>
              <ol style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 8px;">
                  <strong>1. fázis – Azonnali depolarizáció (2–5 mV):</strong>
                  <br>Az ouabain hozzáadását követően a membránpotenciál azonnal depolarizálódik kb. 2–5 mV-ot, mivel azonnal kiesik a pumpa által generált folyamatos, kifelé irányuló pozitív nettó áram.
                </li>
                <li style="margin-bottom: 0;">
                  <strong>2. fázis – Lassú, progresszív depolarizáció (több óra alatt 0 mV felé):</strong>
                  <br>A pumpa leállása miatt a passzív szivárgások lassan kimerítik a belső ionkészleteket, a K⁺ elszivárog, a Na⁺ beáramlik, a transzmembrán grádiens teljesen összeomlik.
                </li>
              </ol>
            </div>
          </section>

          <!-- 6. FEJEZET: HANGANYAG KIEGÉSZÍTÉSSEL -->
          <section style="margin-bottom: 40px;">
            <span class="slide-tag">Előadási hanganyag alapján kiegészítve</span>
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">6. Passzív elektromos membránsajátságok: A kondenzátor feltöltése és az Időállandó (τ_m)</h2>
            <p>
              A biológiai membrán elektromos szempontból nem egy egyszerű ellenállás, hanem egy <strong>párhuzamosan kapcsolt ellenállás-kondenzátor (RC) áramkör</strong>:
            </p>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 6px;"><strong>Membránellenállás (r_m):</strong> Az ioncsatornákon átfolyó szivárgási árammal szembeni ellenállás.</li>
              <li style="margin-bottom: 6px;"><strong>Membránkapacitás (c_m):</strong> A vékony foszfolipid kettősréteg egy kiváló szigetelő (dielektrikum), amely elválasztja a két vezető folyadékteret (az ionokkal teli intracelluláris és extracelluláris teret).</li>
            </ul>

            <div style="background-color: #f8fafc; border-left: 4px solid #6366f1; padding: 14px; margin: 16px 0;">
              <h3 style="margin-top: 0; color: #4338ca;">A tanárnő szóbeli magyarázata a hangfelvételről: Miért késik a feszültség kialakulása?</h3>
              <p>
                Ha a sejt egy tiszta ellenállásból álló test lenne, akkor az Ohm-törvény szerint az áram belépésekor a feszültség azonnal, szögletesen felugrana a maximális értékre.
                <br><strong>A valóságban azonban nem ez történik:</strong>
                <br>Mivel a membrán egy kondenzátor, a belépő áram először a kondenzátort kezdi el feltölteni: <em>adott mennyiségű töltést kell felhalmozni a két felületen</em> ahhoz, hogy a potenciálkülönbség létrejöjjön! Ez időt vesz igénybe, ezért a feszültség fokozatosan, egy <strong>exponenciális telítési görbe mentén</strong> éri el a végértékét ($V_\\infty$).
              </p>
              <p style="margin-bottom: 0;">
                <strong>A membrán időállandója (τ_m = r_m · c_m):</strong>
                <br>Az az időtartam, amely alatt a membránpotenciál-változás eléri a maximális feszültségugrás ($V_\\infty$) <strong>63%-át (0,63 · V_∞)</strong> a bekapcsoláskor, illetve kikapcsoláskor a 37%-ára csökken vissza.
                <br><em>Élettani tanulság:</em> Minél rövidebb egy sejt időállandója, annál gyorsabban feltöltődik a kondenzátor, és annál hamarabb alakul ki a kívánt feszültségváltozás a membránon!
              </p>
            </div>
          </section>

          <!-- 7. FEJEZET: HANGANYAG KIEGÉSZÍTÉSSEL -->
          <section style="margin-bottom: 40px;">
            <span class="slide-tag">Előadási hanganyag alapján kiegészítve</span>
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">7. Elektrotónusos terjedés hengeres sejtekben: Belső ellenállás és Térkonstans (λ)</h2>
            <p>
              Hosszúkás képletekben (idegsejtek axonjai, váz- és szívizomrostok) a sejt alakja henger. Itt a membrán passzív viselkedését már nem írhatjuk le egyetlen pontszerű modellel.
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="color: #0f172a; margin-top: 0;">A tanárnő szóbeli magyarázata a belső ellenállásról ($r_i$):</h3>
              <p>
                • <em>Ha az intracelluláris ellenállás nulla lenne ($r_i = 0$):</em> az áram ellenállás nélkül szétterjedne, így a sejt belseje minden pontban teljesen egyforma feszültségű (ekvipotenciális) lenne.
                <br>• <em>A valóságban ($r_i \\neq 0$):</em> a szűk belső citoplazma tele van ionokkal és fehérjékkel, amelyeknek a mozgó töltések folyamatosan nekiütköznek. Ez <strong>belső axiális ellenállást ($r_i$)</strong> képez!
                <br>• Ráadásul az áram előrehaladása közben a membránon keresztül ($r_m$) folyamatosan szivárognak el a töltések a külső térbe.
              </p>
              <p style="margin-bottom: 0;">
                <strong>Következmény:</strong> Az áraminjektálás helyétől távolodva a membránpotenciál mindkét irányban exponenciálisan elhalványul (<strong>dekrementer / csillapodó terjedés</strong>)!
              </p>
            </div>

            <div style="background-color: #f8fafc; border-left: 4px solid #0ea5e9; padding: 14px; margin: 16px 0;">
              <h4 style="margin-top: 0; color: #0369a1;">A térkonstans összefüggése: λ = √(r_m / r_i)</h4>
              <p style="font-family: monospace; font-size: 1.05rem; text-align: center; margin: 12px 0;">
                V_x = V₀ · e^(-x / λ)
              </p>
              <p style="margin-bottom: 0;">
                <strong>A térkonstans definíciója a hanganyagból:</strong> Az a távolság az injektálás helyétől mérve, amely alatt a feszültségváltozás az eredeti csúcsérték (V₀) <strong>37%-ára (0,37 · V₀)</strong> csökken vissza.
                <br><em>Szóbeli aranyköpés a professzornőtől:</em> <strong>Minél nagyobb a térkonstans (λ), annál jobb a vezetés!</strong> Nagy térkonstans esetén a jel sokkal messzebbre képes eljutni a kábelen anélkül, hogy elhalna. A szervezet ezt vastagabb axonokkal (kisebb $r_i$) és mielinhüvellyel (óriási $r_m$) biztosítja!
              </p>
            </div>
          </section>

          <!-- 8. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">8. Az elektrotónusos potenciálváltozások és a küszöb elérése</h2>
            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="color: #0f172a; margin-top: 0;">Az elektrotónusos válasz 6 kardinális tulajdonsága:</h3>
              <ol style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 6px;"><strong>Fokozatos (graduált) amplitúdó:</strong> A nagysága szigorúan arányos az inger (áram) erősségével.</li>
                <li style="margin-bottom: 6px;"><strong>Kétirányú lehet:</strong> Pozitív áramnál <em>depolarizáció</em>, negatív áramnál <em>hiperpolarizáció</em> alakul ki.</li>
                <li style="margin-bottom: 6px;"><strong>Időbeli lefutását a membrán időállandója (τ_m) szabja meg:</strong> Exponenciálisan épül fel és cseng le.</li>
                <li style="margin-bottom: 6px;"><strong>Térbeli terjedése dekrementer:</strong> A távolsággal a térkonstans (λ) szerint csillapodik.</li>
                <li style="margin-bottom: 6px;"><strong>Nincs refrakter periódusa:</strong> Időben és térben szummálódhatnak (összeadódhatnak).</li>
                <li style="margin-bottom: 0;"><strong>Passzív, lineáris viselkedés:</strong> A feszültségfüggő Na⁺-csatornák még nem nyílnak meg érdemben.</li>
              </ol>
            </div>

            <div style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; margin-top: 16px;">
              <h4 style="margin-top: 0; color: #991b1b;">Átmenet az Akciós Potenciálba: A Küszöb (Threshold)</h4>
              <p style="margin-bottom: 0;">
                Amikor a depolarizáló elektrotónusos áram nagysága eléri a kritikus szintet – a <strong>küszöbpotenciált (Threshold, kb. -60 mV és -55 mV között)</strong> –, a lokális válasz minőségi ugráson megy keresztül. A feszültségfüggő gyors Na⁺-csatornák tömegesen kinyílnak, a regeneratív Hodgkin-ciklus beindul, és megszületik az „minden vagy semmi” jellegű, önmagát fenntartó <strong>akciós potenciál</strong>!
              </p>
            </div>
          </section>

          <!-- ÖSSZEGZÉS -->
          <footer style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 20px; margin-top: 32px;">
            <h3 style="color: #38bdf8; margin-top: 0;">Összegzés a vizsgához</h3>
            <p style="margin-bottom: 0; font-size: 0.95rem; line-height: 1.6;">
              A Donnan-egyensúly passzív -10 mV-os potenciáljával szemben az élő sejtek nyugalmi feszültségét (V_m ≈ -70 mV) a <strong>Na⁺/K⁺ pumpa által létrehozott aszimmetrikus ioneloszlás és a domináns K⁺-szivárgás</strong> határozza meg. A membrán potenciálját a Nernst-potenciálok vezetőképességgel súlyozott összege adja (<strong>Húregyenlet</strong>). A membrán passzív elektromos tulajdonságait két biofizikai konstans uralja: az <strong>időállandó (τ_m = r_m · c_m)</strong> a kondenzátor feltöltődésének időbeli késleltetését (63%), míg a <strong>térkonstans (λ)</strong> a belső ellenállás ($r_i$) és a membránszivárgás ($r_m$) által megszabott távolsági csillapodást (37%) írja le a küszöbpotenciál eléréséig.
            </p>
          </footer>

        </article>
    `
});