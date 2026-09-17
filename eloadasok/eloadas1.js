window.LEKTURAK.push({
    id: "ppt1-content",
    title: "1. Előadás: A sejtmembrán transzportfolyamatai",
    shortName: "Transzportfolyamatok",
    tag: "HUN_1_Transzport.pdf",
    html: `
        <article class="transport-lecture" style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.65; color: #1e293b; max-width: 960px; margin: 0 auto; padding: 10px;">

          <header style="border-bottom: 2px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 32px;">
            <h1 style="color: #0f172a; font-size: 2rem; margin-bottom: 8px;">A Sejtmembrán Transzportfolyamatai</h1>
            <p style="color: #64748b; font-size: 1.1rem; margin: 0;">Részletes élettani összefoglaló a biofizikai alapoktól a komplex hámtranszportig</p>
          </header>

          <!-- 1. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">1. A szervezet vízterei és a membrán alapvető szerepe</h2>
            <p>
              Az emberi szervezet folyadékterei dinamikusan elválasztott, mégis szoros kölcsönhatásban lévő kompartmentekre oszlanak. Az össztérfogat alapvetően két fő részre oszlik: az <strong>intracelluláris térre (ICF)</strong>, azaz a sejten belüli folyadékra, valamint az <strong>extracelluláris térre (ECF)</strong>. Az extracelluláris tér további két fontos alcsoportból áll:
            </p>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 6px;"><strong>Vérplazma:</strong> az érpályán belül helyezkedik el, és a gyors keringés biztosítja a tápanyagok és gázok folyamatos szállítását.</li>
              <li style="margin-bottom: 6px;"><strong>Intersticiális folyadék (szövetközti tér):</strong> közvetlenül körülveszi a sejteket, lassabb kicserélődésű pufferzónát alkotva a kapillárisok és a sejtmembrán között.</li>
            </ul>
            <p>
              A szervezet a külső környezettel a bőrön, a légutakon, a vesén és a gyomor-bél traktuson keresztül tart fenn folyadékcserét. A sejt szintjén a határfelületet maga a sejtmembrán képviseli.
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin-top: 16px;">
              <h3 style="color: #0f172a; margin-top: 0;">A membrán kettős természete: Határfelület és Transzportkapu</h3>
              <p>
                A plazmamembrán egyszerre <em>elválaszt (barrier)</em> és <em>összeköt (transzport)</em>. Ezen kettősség révén négy alapvető grádienst és funkciót alakít ki:
              </p>
              <ol style="padding-left: 20px;">
                <li style="margin-bottom: 6px;"><strong>Kémiai funkció:</strong> koncentrációkülönbségeket (grádienseket) tart fenn a sejt belseje és külseje között.</li>
                <li style="margin-bottom: 6px;"><strong>Ozmotikus funkció:</strong> meghatározza az effektív részecskekoncentrációt, amivel szabályozza a sejttérfogatot.</li>
                <li style="margin-bottom: 6px;"><strong>Elektromos funkció:</strong> az aszimmetrikus ioneloszlás révén nyugalmi membránpotenciált épít fel.</li>
                <li style="margin-bottom: 6px;"><strong>Információs funkció:</strong> receptorok és szignáltranszdukciós láncok révén érzékeli a külső ingereket.</li>
              </ol>
              <p style="margin-bottom: 0;">
                <strong>Szerkezeti felépítés:</strong> A membrán alapját a foszfolipid kettősréteg (lipid bilayer) adja. Egy foszfolipid molekula egy hidrofil (vízkedvelő) poláris fejből (bázis + foszfát + glicerin) és két hidrofób (víztaszító) apoláris zsírsavláncból áll (~3,5 nm lánchossz). A vizes fázisban a láncok egymás felé fordulnak, így egy körülbelül 7 nm vastag hidrofób kontinuum jön létre, amelyben integráns és perifériás fehérjék, valamint kapuzott ioncsatornák horgonyoznak.
              </p>
            </div>
          </section>

          <!-- 2. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">2. A membrántranszportok rendszerezése</h2>
            <p>
              Ahhoz, hogy megértsük, mikor és milyen úton jut át egy molekula a membránon, több szempont szerint kell osztályoznunk a folyamatokat:
            </p>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; margin: 16px 0;">
                <thead>
                  <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                    <th style="padding: 10px; font-weight: 600;">Szempont</th>
                    <th style="padding: 10px; font-weight: 600;">Kategóriák</th>
                    <th style="padding: 10px; font-weight: 600;">Lényegi mechanizmus / Élettani jelentőség</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Irány</td>
                    <td style="padding: 10px;">Influx vs. Efflux</td>
                    <td style="padding: 10px;">Anyag belépése a sejtbe (influx) vagy kilépése onnan (efflux).</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Elektromos jelleg</td>
                    <td style="padding: 10px;">Elektrogén vs. Elektroneutrális</td>
                    <td style="padding: 10px;">Elektrogén, ha nettó töltésmozgással jár (módosítja a membránpotenciált; pl. 3 Na⁺ ki / 2 K⁺ be). Elektroneutrális, ha a transzportált töltések kiegyenlítik egymást.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Energetikai háttér</td>
                    <td style="padding: 10px;">Passzív vs. Aktív</td>
                    <td style="padding: 10px;">A passzív transzport nem igényel metabolikus energiát, a grádiens mentén zajlik lefelé. Az aktív transzport a grádiens ellenében dolgozik közvetlen (elsődleges) vagy közvetett (másodlagos) ATP-felhasználással.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: 600;">Mechanizmus</td>
                    <td style="padding: 10px;">Lipidfázison át, Ioncsatorna, Mobil Carrier</td>
                    <td style="padding: 10px;">Szabad átjutás a zsírrétegen; pórusokon keresztüli ionáramlás; vagy konformációváltozást végző fehérje általi szállítás.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Kölcsönhatások a transzportban:</strong> Az anyagok mozgása nem elszigetelt. Létrejöhet <em>direkt kompetíció</em> azonos kötőhelyekért, <em>kapcsolt szállítás</em> (szimport, antiport), <em>elektrosztatikus vonzás/taszítás</em> az ionok között, valamint <em>ozmotikus vízáramlás</em> az oldott részecskék elmozdulásának hatására.
            </p>
          </section>

          <!-- 3. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">3. Passzív transzport I.: Diffúzió a lipidrétegen keresztül</h2>
            <p>
              A hidrofób zsírsavláncokból álló belső mag miatt a membrán lipidfázisán keresztül kizárólag kis méretű, <strong>apoláris/hidrofób molekulák</strong> és <strong>neutrális gázok (O₂, CO₂, N₂)</strong> képesek szabadon átjutni. A hajtóerő a két oldal közötti koncentrációkülönbség.
            </p>

            <div style="background-color: #f8fafc; border-left: 4px solid #0ea5e9; padding: 14px; margin: 16px 0;">
              <h3 style="margin-top: 0; color: #0369a1;">A diffúzió matematikai leírása: Fick I. törvénye</h3>
              <p>A diffúziós anyagáram (fluxus, Φ) nagyságát az alábbi összefüggés írja le:</p>
              <p style="font-family: monospace; font-size: 1.1rem; text-align: center; margin: 12px 0;">
                -Φ = D · A · (dc / dx)
              </p>
              <p>
                Ahol <strong>D</strong> a diffúziós állandó (cm²/s), <strong>A</strong> a felület nagysága, <strong>dc/dx</strong> pedig a koncentrációgrádiens a membrán vastagsága mentén.<br>
                Egyenletes membránvastagságot (<em>l</em>) és koncentrációkülönbséget (c₁ - c₂) feltételezve:
              </p>
              <p style="font-family: monospace; font-size: 1.1rem; text-align: center; margin: 12px 0;">
                -Φ = P · A · (c₁ - c₂)
              </p>
              <p style="margin-bottom: 0;">
                Ahol <strong>P</strong> a <em>permeabilitási állandó</em>. A lipidfázison át történő diffúziónál a P értéke egyenesen arányos a <strong>partíciós koefficienssel (β)</strong>, ami az adott anyag zsíroldékonyságának mértéke. Minél jobban oldódik egy molekula lipidekben, annál nagyobb a permeabilitása.
              </p>
            </div>

            <p>
              <strong>A membrán áteresztőképességének spektruma:</strong>
            </p>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 4px;"><strong>Ionok (Na⁺, K⁺ ~10⁻¹² cm/s, Cl⁻ ~10⁻¹⁰ cm/s):</strong> hidrátburkuk és töltésük miatt a tiszta lipidrétegen gyakorlatilag nem képesek áthatolni.</li>
              <li style="margin-bottom: 4px;"><strong>Kisméretű poláris molekulák (Glükóz ~10⁻⁸ cm/s, Karbamid/Glicerol ~10⁻⁶ cm/s):</strong> lassan vagy alig jutnak át.</li>
              <li style="margin-bottom: 4px;"><strong>Víz (H₂O ~10⁻² cm/s):</strong> kis mérete révén kismértékben átszivárog a lipidek között is, de élettani volumenben speciális pórusokra van szüksége.</li>
            </ul>
          </section>

          <!-- 4. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">4. Passzív transzport II.: Ioncsatornák és a kapuzás biofizikája</h2>
            <p>
              Mivel az ionok a lipidrétegen nem jutnak át, a természet speciális fehérjealagutakat, <strong>ioncsatornákat</strong> alakított ki számukra. A csatornákban az ionok vizes közegben mozognak, ami rendkívül gyors transzportot tesz lehetővé (akár 10⁷–10⁸ ion/másodperc).
            </p>

            <h3 style="color: #0f172a;">A csatorna alapvető szerkezeti elemei</h3>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 8px;">
                <strong>Szelektivitási szűrő (Selectivity filter):</strong> Az ioncsatorna legszűkebb része. Az ionok a vizes fázisban nem "csupaszon", hanem hidrátburokkal körülvéve léteznek. Ahhoz, hogy átférjenek a szűrőn, a hidrátburkot le kell dobniuk (dehidratáció). A szelektivitási szűrőben lévő aminosavak oldalláncai pontosan olyan térbeli elrendezésben kínálnak oxigéneket az ion számára, ami energetikailag tökéletesen pótolja a leváló vízmolekulákat – de csak a megfelelő méretű ion számára.
              </li>
              <li style="margin-bottom: 8px;">
                <strong>Kapu (Gate) és Szenzor (Sensor):</strong> A kapu konformációváltozással nyitja vagy zárja a pórust. A feszültségszenzor (feszültségfüggő csatornáknál az S₄ szegmens) a membrán elektromos terének változására elmozdul, és mechanikusan meghúzza a kaput.
              </li>
            </ul>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="margin-top: 0; color: #0f172a;">Hajtóerő és az Ionáramok alaptörvénye</h3>
              <p>
                Az ionok mozgását nem csupán a koncentrációgrádiens határozza meg, hanem a membrán két oldala közötti elektromos feszültség is. A kettő eredője az <strong>elektrokémiai potenciálkülönbség (dEKP = V_m - V_x)</strong>, ahol <em>V_m</em> a pillanatnyi membránpotenciál, <em>V_x</em> pedig az adott ion Nernst-féle egyensúlyi potenciálja.
              </p>
              <p style="font-family: monospace; font-size: 1.05rem; text-align: center;">
                I_x = g_x · (V_m - V_x)
              </p>
              <p>
                Ahol <strong>I_x</strong> az ionáram, <strong>g_x</strong> az ion konduktanciája (vezetőképessége, a nyitott csatornák számától függ).<br>
                Egyetlen csatorna áramát tekintve a makroszkopikus áram: <code>I_x = n · i_x</code> (ahol <em>n</em> a kinyílt csatornák száma, <em>i_x</em> az egyedi áram).
              </p>
              <p style="margin-bottom: 0;">
                <strong>Élettani áramirány konvenció:</strong>
                <br>• <em>Kifelé irányuló áram (outward, pozitív):</em> pozitív töltés hagyja el a sejtet (K⁺ vagy Na⁺ kiáramlás, vagy Cl⁻ belépés!).
                <br>• <em>Befelé irányuló áram (inward, negatív):</em> pozitív töltés lép be a sejtbe (Na⁺ vagy Ca²⁺ beáramlás, vagy Cl⁻ kilépés!).
              </p>
            </div>

            <h3 style="color: #0f172a;">Molekuláris felépítés: Nav, Cav, Kv és Kir csatornák</h3>
            <p>
              A feszültségfüggő nátrium- (<strong>Na_v</strong>) és kalciumcsatornák (<strong>Ca_v</strong>) egyetlen hatalmas polipeptidláncból állnak, amely 4 ismétlődő transzmembrán doménre (I–IV) tagolódik. Minden domén 6 transzmembrán hélixet (S₁–S₆) tartalmaz:
            </p>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 4px;"><strong>S₄ szegmens:</strong> pozitív töltésű aminosavakat (arginin, lizin) tartalmaz, ez működik feszültségszenzorként.</li>
              <li style="margin-bottom: 4px;"><strong>S₅–S₆ közötti extracelluláris hurok (P-loop):</strong> benyúlik a membránba, és kialakítja magát a vezető pórust és a szelektivitási szűrőt.</li>
              <li style="margin-bottom: 4px;"><strong>S₆ szegmens:</strong> a kapu és az inaktiváció mechanizmusában játszik szerepet.</li>
            </ul>
            <p>
              Ezzel szemben a feszültségfüggő káliumcsatornák (<strong>K_v</strong>) 4 különálló alegységből állnak össze (tetramer szerkezet), ahol minden alegység 6 transzmembrán szegmentumot tartalmaz. A befelé egyenirányító káliumcsatornák (<strong>K_ir</strong>) egyszerűbb felépítésű tetramerek: alegységenként csak 2 transzmembrán szegmentumuk van (S₁–S₂), köztük a pórusképző hurokkal.
            </p>

            <h3 style="color: #0f172a;">Kapuzási (Gating) mechanizmusok és dinamika</h3>
            <p>A csatornák nyitását különféle ingerek válthatják ki:</p>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 6px;"><strong>Feszültség-vezérelt:</strong> membrán depolarizáció (pl. Na_v, K_v, Ca_v) vagy hiperpolarizáció (pl. K_ir, I_f pacemaker áram) hatására nyílnak.</li>
              <li style="margin-bottom: 6px;"><strong>Ligand-vezérelt (külső ligand):</strong> kation-szelektív nikotinerg acetilkolin-receptor (nAChR), ionotrop glutamátreceptorok (NMDA, AMPA), vagy anion-szelektív GABA_A-receptor (Cl⁻ belépés -> gátlás).</li>
              <li style="margin-bottom: 6px;"><strong>Ligand-vezérelt (belső ligand):</strong> pl. ATP-szenzitív K⁺-csatorna (K_ATP, az intracelluláris ATP szint emelkedése zárja).</li>
              <li style="margin-bottom: 6px;"><strong>G-fehérje függő vagy foszforilációfüggő:</strong> kinázok általi foszforiláció (PO₄²⁻) szabályozza a vezetőképességet.</li>
              <li style="margin-bottom: 6px;"><strong>Mechanoszenzitív:</strong> a membrán mechanikai deformációja feszíti nyitott állapotba a pórust (pl. belső fül szőrsejtjei).</li>
            </ul>

            <div style="background-color: #f1f5f9; border-radius: 8px; padding: 16px; margin-top: 16px;">
              <h4 style="margin-top: 0; color: #0f172a;">Egyedi csatornaműködés (Single channel patch-clamp)</h4>
              <p>
                Amikor <em>patch-clamp</em> technikával (egy mikropipettával "gigaseal" nagy ellenállású szigetelést képezve a membránon) megfigyelünk egyetlen ioncsatornát, alapvető különbséget látunk a mikroszkopikus és a makroszkopikus áram között:
              </p>
              <ul style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 4px;">Egyetlen csatorna digitális jellegű: <strong>vagy teljesen nyitva van, vagy teljesen zárva</strong> (négyszögletes áramimpulzusok láthatók, pA nagyságrendben).</li>
                <li style="margin-bottom: 4px;">A nyitott állapot időtartama és latenciája sztochasztikus (valószínűségi természetű).</li>
                <li style="margin-bottom: 0;">A klasszikus, sima lefutású sejtáram (makroszkopikus áram) sok ezer egyedi csatorna nyitási valószínűség-eloszlásának összegéből adódik össze. Ha nincs inaktiváció, a csatorna többször is kinyílhat az inger alatt.</li>
              </ul>
            </div>
          </section>

          <!-- 5. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">5. Mobil carrier által mediált transzport</h2>
            <p>
              A hordozó (carrier) fehérjék nem nyílt pórust alkotnak, hanem a szállítandó anyagot egy specifikus kötőhelyen megkötik, majd nagy konformációváltozáson mennek keresztül, és az ellenkező oldalon felszabadítják a molekulát.
            </p>

            <h3 style="color: #0f172a;">Kinetikai jellemzők és Michaelis-Menten leírás</h3>
            <p>
              A carrier-mediált transzport működése analóg az enzimreakciókkal, így a <strong>Michaelis-Menten kinetika</strong> érvényes rá:
            </p>
            <p style="font-family: monospace; font-size: 1.05rem; text-align: center; margin: 12px 0;">
              V = (V_max · [S]) / (K_m + [S])
            </p>
            <p>
              Ahol <strong>V_max</strong> a maximális transzportsebesség, <strong>K_m</strong> az a szubsztrátkoncentráció, amelynél a transzport sebessége eléri a félmaximumot (V_max / 2). A K_m a carrier szubsztrát iránti affinitását fejezi ki (kisebb K_m = nagyobb affinitás).
            </p>

            <div style="background-color: #fffbeb; border: 1px solid #fef3c7; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h4 style="margin-top: 0; color: #92400e;">Alapvető különbség: Egyszerű diffúzió vs. Facilitált diffúzió</h4>
              <p>
                • <strong>Egyszerű diffúziónál</strong> a transzport sebessége egyenesen, <em>lineárisan nő</em> a szubsztrát koncentrációjával. Nem létezik felső határ, mert a lipidrészecskék közötti átjutásnak nincs köthető kapacitása.
                <br>• <strong>Carrier-mediált (facilitált) diffúziónál</strong> a görbe <em>telítési jelleget (szaturáció)</em> mutat. Ahogy minden fehérje kötőhelye telítődik, a rendszer eléri a <strong>V_max</strong> platóját. Ezen felül megjelenik a <strong>kompetíció</strong> jelensége is: egy hasonló szerkezetű molekula versenghet a kötőhelyért, leszorítva az eredeti anyagot.
              </p>
            </div>

            <p><strong>A hordozók típusai kapcsolt szállítás szerint:</strong></p>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 4px;"><strong>Uniport:</strong> egyetlen típusú molekula szállítása a grádiens irányába (pl. GLUT-transzporterek).</li>
              <li style="margin-bottom: 4px;"><strong>Szimport (kotranszport):</strong> két vagy több különböző anyag egyidejű szállítása azonos irányba.</li>
              <li style="margin-bottom: 4px;"><strong>Antiport (ellen-transzport):</strong> két különböző anyag cseréje ellentétes irányban.</li>
            </ul>
          </section>

          <!-- 6. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">6. Elsődleges aktív transzport és a Na⁺/K⁺ pumpa</h2>
            <p>
              Az elsődleges (primer) aktív transzport során <strong>a carrier fehérje és az ATP-áz enzimaktivitás egyetlen azonos molekuláris entitást alkot</strong>. A fehérje maga hidrolizálja az ATP-t, és a felszabaduló kémiai energiát közvetlenül használja fel arra, hogy ionokat mozgasson az elektrokémiai grádiensükkel szemben.
            </p>

            <h3 style="color: #0f172a;">Az ATP-ázok főbb típusai</h3>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 6px;"><strong>P-típusú ATP-ázok:</strong> A működési ciklus során a fehérje egy aszpartát oldallánca kovalensen foszforilálódik (P = foszforiláció). Ide tartozik a Na⁺/K⁺-pumpa, a Ca²⁺-pumpák (PMCA a plazmamembránban, SERCA a szarkoplazmatikus retikulumban), valamint a gyomor és vese H⁺/K⁺-pumpája.</li>
              <li style="margin-bottom: 6px;"><strong>V-típusú ATP-ázok:</strong> Vakuoláris protonpumpák. Nem képeznek foszforilált intermediert; lizoszómák, endoszómák belsejét savanyítják H⁺ bepumpálásával.</li>
              <li style="margin-bottom: 6px;"><strong>F-típusú ATP-ázok:</strong> A mitokondrium belső membránjában és baktériumokban található több alegységes (F₀-F₁) komplexek, amelyek fiziológiásan a protonok beáramlását használják ATP szintézisére (ATP-szintáz).</li>
            </ul>

            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="margin-top: 0; color: #1e40af;">A Na⁺/K⁺-pumpa mélyreható élettana</h3>
              <p>
                A pumpa minden élő sejt membránjában megtalálható, és az alapanyagcsere jelentős részét ez emészti fel.<br>
                <strong>Sztöchiometria:</strong> 1 ATP molekula hidrolízisével <strong>3 Na⁺-iont juttat ki a sejtből, és 2 K⁺-iont pumpál be</strong>. Mivel minden ciklusban 1 nettó pozitív töltést távolít el a sejt belsejéből, a pumpa működése <strong>elektrogén</strong> (közvetlenül is hozzájárul a negatív belső nyugalmi potenciál fenntartásához körülbelül -2 és -5 mV közötti értékkel).
              </p>
              
              <p><strong>Ciklikus konformációváltozás (E₁–E₂ mechanizmus):</strong></p>
              <ol style="padding-left: 20px;">
                <li style="margin-bottom: 4px;"><em>E₁ állapot:</em> A citoplazma felé nyitott, nagy affinitással megköt 3 Na⁺-iont.</li>
                <li style="margin-bottom: 4px;"><em>Foszforiláció:</em> Az ATP hidrolizál, a foszfátcsoport az enzimre kötődik (E₁~P).</li>
                <li style="margin-bottom: 4px;"><em>Konformációváltás:</em> Átfordul E₂~P állapotba, a kötőhelyek az extracelluláris tér felé nyílnak meg, a Na⁺ iránti affinitás lecsökken, így a 3 Na⁺ disszociál a külső térbe.</li>
                <li style="margin-bottom: 4px;"><em>K⁺ kötés és defoszforiláció:</em> Az E₂ állapot megköt 2 extracelluláris K⁺-iont, ami kiváltja a defoszforilációt.</li>
                <li style="margin-bottom: 4px;"><em>Visszatérés:</em> A pumpa visszaugrik az E₁ állapotba, a K⁺ iránti affinitás lecsökken, a 2 K⁺ felszabadul a citoplazmában.</li>
              </ol>

              <p><strong>A Na⁺/K⁺-pumpa 6 nélkülözhetetlen élettani feladata:</strong></p>
              <ul style="padding-left: 20px;">
                <li style="margin-bottom: 4px;"><strong>1. Aszimmetrikus ioneloszlás fenntartása:</strong> magas intracelluláris K⁺ és magas extracelluláris Na⁺ koncentráció biztosítása.</li>
                <li style="margin-bottom: 4px;"><strong>2. Nyugalmi membránpotenciál fenntartása:</strong> megteremti a K⁺ koncentrációgrádienst, ami a K⁺ szivárgó áramon keresztül a nyugalmi potenciál legfőbb meghatározója.</li>
                <li style="margin-bottom: 4px;"><strong>3. Akciós potenciál utáni helyreállítás:</strong> az ingerületek során beáramlott Na⁺ és kiáramlott K⁺ visszarendezése.</li>
                <li style="margin-bottom: 4px;"><strong>4. Hajtóerő a szekunder aktív transzportokhoz:</strong> a felépített hatalmas meredek befelé irányuló Na⁺-grádiens biztosítja az energiát a glükóz, aminosavak, ionok másodlagos szállításához.</li>
                <li style="margin-bottom: 4px;"><strong>5. Sejttérfogat szabályozása:</strong> megakadályozza, hogy a sejten belüli nem diffundáló fehérjék ozmotikus hatása miatt víz áramoljon be és a sejt szétpukkadjon.</li>
                <li style="margin-bottom: 4px;"><strong>6. Hőtermelés:</strong> az ATP energiájának egy része hővé alakul, részt vesz a testhőmérséklet fenntartásában.</li>
              </ul>

              <p style="margin-bottom: 0;">
                <strong>Szabályozás és Farmakológia:</strong>
                <br>• <em>Aktiválja:</em> az intracelluláris [Na⁺] és az extracelluláris [K⁺] növekedése; hormonálisan serkenti az <strong>inzulin, aldoszteron, tiroxin és katekolaminok</strong>.
                <br>• <em>Specifikus gátlószerei:</em> a <strong>szívglikozidok (ouabain, digoxin)</strong>. Ha a pumpát gátoljuk, a Na⁺ bent reked -> a sejt depolarizálódik és megduzzad. Szívizomban a megnövekedett belső [Na⁺] miatt a Na⁺/Ca²⁺ cserélő lassul, így a Ca²⁺ felhalmozódik az izomrostokban, ami fokozza az összehúzódás erejét (<strong>pozitív inotrop hatás</strong>).
              </p>
            </div>
          </section>

          <!-- 7. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">7. Másodlagos (szekunder) aktív transzport</h2>
            <p>
              A másodlagos aktív transzport során <strong>a carrier fehérje és az ATP-áz nem ugyanaz a molekula</strong>. A transzporter közvetlenül nem hidrolizál ATP-t. Az energiaforrás egy másik ion (leggyakrabban a Na⁺) elektrokémiai grádiense, amelyet az elsődleges pumpa épített fel. Ahogy a Na⁺ "lefelé gurul" a saját meredek koncentráció- és elektromos lejtőjén a sejtbe, az általa felszabadított energiát a carrier arra használja, hogy egy másik molekulát a saját grádiensével szemben "felhúzzon".
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 16px 0;">
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
                <h4 style="margin-top: 0; color: #1e40af;">Szimport (Kotranszport) példák</h4>
                <ul style="padding-left: 18px; margin-bottom: 0;">
                  <li style="margin-bottom: 6px;"><strong>Na⁺-Glükóz szimport (SGLT):</strong> 1 vagy 2 Na⁺ belépése hajtja a glükóz sejtbe való felvételét a koncentrációgrádiens ellenében (bélhám, vese tubulusok).</li>
                  <li style="margin-bottom: 6px;"><strong>Na⁺-Aminosav szimport:</strong> aminosavak felszívása a bélben és visszaszívása a vesében.</li>
                  <li style="margin-bottom: 0;"><strong>Na⁺-K⁺-2Cl⁻ szimport (NKCC):</strong> elektroneutrális transzport; 1 Na⁺, 1 K⁺ és 2 Cl⁻ lép be egyszerre a sejtbe (NKCC2 a vese Henle-kacsában, NKCC1 mirigyhámokban).</li>
                </ul>
              </div>

              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
                <h4 style="margin-top: 0; color: #1e40af;">Antiport (Ellen-transzport) példák</h4>
                <ul style="padding-left: 18px; margin-bottom: 0;">
                  <li style="margin-bottom: 6px;"><strong>Na⁺/Ca²⁺ cserélő (NCX):</strong> 3 Na⁺ lép be a sejtbe 1 Ca²⁺ kilépéséért cserébe (elektrogén hatás: nettó +1 töltés lép be). Kiemelkedő a szívizomsejtek ellazulásában.</li>
                  <li style="margin-bottom: 0;"><strong>Na⁺/H⁺ antiport (NHE):</strong> 1 Na⁺ belépése fejében 1 H⁺-t pumpál ki a sejtből. Kulcsszerepet játszik az intracelluláris pH beállításában és a vese sav-bázis szabályozásában.</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- 8. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">8. Transzmembrán víztranszport és ozmózis</h2>
            <p>
              A víz transzmembrán mozgása alapvetően passzív folyamat, amelyet specifikus transzmembrán fehérjék, az <strong>aquaporinok (AQP)</strong> tesznek rendkívül gyorssá. A víz mozgatórugója a két oldal közötti <strong>ozmotikus nyomáskülönbség (Π)</strong>.
            </p>

            <div style="background-color: #f8fafc; border-left: 4px solid #0ea5e9; padding: 14px; margin: 16px 0;">
              <h3 style="margin-top: 0; color: #0369a1;">Az ozmotikus nyomás: Van 't Hoff törvénye</h3>
              <p style="font-family: monospace; font-size: 1.1rem; text-align: center; margin: 12px 0;">
                Π = R · T · C_osm
              </p>
              <p style="margin-bottom: 0;">
                Ahol <strong>R</strong> az egyetemes gázállandó, <strong>T</strong> az abszolút hőmérséklet, <strong>C_osm</strong> pedig az ozmotikusan aktív részecskék moláris koncentrációja.<br>
                <em>1 Ozmol = 6 · 10²³ db ozmotikusan aktív részecske</em> az oldatban. Fontos fogalom az <strong>effektív ozmolalitás (tónus)</strong>: csak azok a részecskék hoznak létre tartós ozmotikus vízáramlást, amelyek maguk nem képesek szabadon átjutni a membránon (impermeábilisak).
              </p>
            </div>

            <h3 style="color: #0f172a;">A környező közeg hatása a sejttérfogatra</h3>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 6px;">
                <strong>Izotóniás közeg:</strong> Az effektív ozmotikus koncentráció megegyezik a sejt belsejével, nincs nettó vízáramlás, a sejt megtartja normális térfogatát.
              </li>
              <li style="margin-bottom: 6px;">
                <strong>Hipertóniás közeg:</strong> A külső térben magasabb az oldott részecskék koncentrációja, ezért a víz a koncentrációgrádiensének megfelelően kiáramlik a sejtből -> a sejt <strong>összezsugorodik</strong>.
              </li>
              <li style="margin-bottom: 6px;">
                <strong>Hipotóniás közeg:</strong> A külső tér hígabb, a víz ozmózissal beáramlik a sejtbe -> a sejt <strong>megduzzad</strong>. Erősen hipotóniás közegben a sejtmembrán feszültsége eléri a szakítószilárdságát és felhasad:
                <br>• Vörösvértesteknél ez a <strong>hemolízis</strong>.
                <br>• Az agyban a sejtek duzzadása <strong>agyödémához</strong> vezet, ami a zárt koponyacsontok miatt életveszélyes nyomásfokozódást okoz.
              </li>
            </ul>
          </section>

          <!-- 9. FEJEZET -->
          <section style="margin-bottom: 40px;">
            <h2 style="color: #1e40af; border-left: 4px solid #3b82f6; padding-left: 12px; margin-bottom: 16px;">9. Transzepitheliális transzport: Abszorpció és Szekréció</h2>
            <p>
              A szervezet belső környezetét hámrétegek (epithelium) határolják el a külső külvilágtól (pl. bél lumenje, vese tubulusai, mirigyek kivezetőcsövei). A hámsejtek polarizáltak: van egy <strong>apikális (luminális)</strong> és egy <strong>bazolaterális</strong> membránfelszínük, amelyeken teljesen eltérő transzportfehérjék találhatók.
            </p>

            <h3 style="color: #0f172a;">A két transzportútvonal</h3>
            <ol style="padding-left: 20px;">
              <li style="margin-bottom: 6px;">
                <strong>Paracelluláris útvonal (sejtek között):</strong> Az anyagok a szomszédos sejtek közötti résen haladnak át. A gátat a sejteket összekapcsoló <em>tight junction (szoros kapcsolat)</em> képezi. Ez lehet szoros ("tight", alig áteresztő) vagy szivárgó ("leaky", jelentős víz- és ionáteresztő). Itt <strong>kizárólag passzív diffúzió</strong> mehet végbe, korlátozott szelektivitással.
              </li>
              <li style="margin-bottom: 6px;">
                <strong>Transzcelluláris útvonal (sejteken át):</strong> Az anyag átlép az apikális membránon, keresztülhalad a citoplazmán, majd kilép a bazolaterális oldalon (vagy fordítva). Nagyfokú szelektivitás jellemzi, és a passzív diffúziótól a primér/szekunder aktív folyamatokig minden mechanizmust igénybe vesz.
              </li>
            </ol>

            <h3 style="color: #0f172a;">Klasszikus transzepitheliális modellek az élettani előadásból</h3>

            <!-- Modell 1 -->
            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
              <h4 style="margin-top: 0; color: #1e40af;">A) Elsődleges aktív folyamatok hámsejtekben</h4>
              <p>Három kulcsfontosságú ATP-áz határozza meg a hámok működését:</p>
              <ul style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 6px;"><strong>1. H⁺-ATPáz a vese gyűjtőcsatorna interkaláris sejtjeiben:</strong> Közvetlenül protont pumpál a vizeletbe az apikális oldalon, ami a sav-bázis egyensúly szabályozásának és a vizeletsavanyításnak az alapja.</li>
                <li style="margin-bottom: 6px;"><strong>2. H⁺/K⁺-ATPáz a gyomor fedősejtjeiben (parietális sejtek):</strong> Protont szekretál a gyomornedvbe K⁺ felvétele ellenében, kialakítva az emésztéshez szükséges extrém savas kémhatást.</li>
                <li style="margin-bottom: 0;"><strong>3. Na⁺/K⁺-ATPáz minden hámsejt bazolaterális membránjában:</strong> Folyamatosan távolítja el a Na⁺-ot a sejtből az interstícium felé. Ezzel alacsonyan tartja az intracelluláris [Na⁺]-t (~15 mM szemben az extracelluláris ~145 mM-mal), megteremtve a hajtóerőt az összes többi apikális transzport számára.</li>
              </ul>
            </div>

            <!-- Modell 2 -->
            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
              <h4 style="margin-top: 0; color: #1e40af;">B) Glükóz és Na⁺ reabszorpció (Vese tubulus és Vékonybél)</h4>
              <p>Hogyan szívódik vissza a glükóz a vizeletből vagy táplálékból a vérkeringésbe a koncentrációgrádiens ellenében?</p>
              <ol style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 4px;"><em>Apikális belépés:</em> A <strong>Na⁺-glükóz kotranszporter (SGLT)</strong> a Na⁺ beáramlásának energiájával bejuttatja a glükózt a sejtbe (ezt a lépést gátolja specifikusan a <strong>florizin</strong>).</li>
                <li style="margin-bottom: 4px;"><em>Bazolaterális kilépés:</em> A sejtben felhalmozódott glükóz a <strong>GLUT-2</strong> transzporteren keresztül, facilitált diffúzióval távozik az interstícium és a kapillárisok felé.</li>
                <li style="margin-bottom: 0;"><em>A motor:</em> A bazolaterális <strong>Na⁺/K⁺-pumpa</strong> folyamatosan kipumpálja a bejutott nátriumot, míg a K⁺ csatornákon át a kálium visszaszivárog. A Cl⁻ paracellulárisan követi a nátriumot a pozitív transepithelialis töltésvonzás miatt.</li>
              </ol>
            </div>

            <!-- Modell 3 -->
            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
              <h4 style="margin-top: 0; color: #1e40af;">C) NaCl és Vízszekréció (Exokrin mirigyek, pl. Primer nyálszekréció)</h4>
              <p>Hogyan termelnek a mirigyek folyadékot a lumenbe?</p>
              <ol style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 4px;">A bazolaterális oldalon elhelyezkedő <strong>NKCC1 szimporter</strong> a Na⁺-grádiens terhére Cl⁻-t halmoz fel a mirigysejt belsejében.</li>
                <li style="margin-bottom: 4px;">Az apikális membránon lévő <strong>Cl⁻ csatornák (pl. Ca²⁺-aktivált Cl⁻ csatorna, CFTR)</strong> megnyílnak, így a klorid a lumenbe áramlik.</li>
                <li style="margin-bottom: 0;">A lumen negatívvá váló elektromos tere vonzza a <strong>Na⁺ ionokat, amelyek paracelluláris úton</strong> áramlanak a váladékba. A felhalmozódó NaCl ozmotikusan vizet szív maga után transzcellulárisan (aquaporinokon át) és paracellulárisan -> megszületik az izoozmotikus primer nyál.</li>
              </ol>
            </div>

            <!-- Modell 4 -->
            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
              <h4 style="margin-top: 0; color: #1e40af;">D) Elektrolit visszaszívás a Henle-kacs vastag felszálló szárában (TAL)</h4>
              <p>A vizeletkoncentrálás kulcsa:</p>
              <ul style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 4px;">Az apikális membránon a <strong>Na⁺-K⁺-2Cl⁻ kotranszporter (NKCC2)</strong> veszi fel az ionokat a tubuláris folyadékból.</li>
                <li style="margin-bottom: 4px;">Az apikális <strong>ROMK káliumcsatorna</strong> a K⁺ egy részét visszajuttatja a lumenbe, ami <em>pozitív luminális potenciált</em> hoz létre; ez a pozitív taszítás hajtja a Ca²⁺, Mg²⁺ és Na⁺ paracelluláris visszaszívását.</li>
                <li style="margin-bottom: 0;">A bazolaterális oldalon a Na⁺/K⁺-pumpa és a Cl⁻ csatornák juttatják az ionokat az interstíciumba.</li>
              </ul>
            </div>
          </section>

          <!-- ÖSSZEGZÉS -->
          <footer style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 20px; margin-top: 32px;">
            <h3 style="color: #38bdf8; margin-top: 0;">Összegzés a vizsgához</h3>
            <p style="margin-bottom: 0; font-size: 0.95rem; line-height: 1.6;">
              Minden sejt transzportjának energetikai motorja a <strong>bazolaterális Na⁺/K⁺-ATPáz</strong>. Ez építi fel az aszimmetrikus ionmegoszlást és az elektrokémiai Na⁺-grádienst, amelyet a <strong>másodlagos aktív transzporterek</strong> (SGLT, NKCC, NCX, NHE) közvetlenül felhasználnak egyéb anyagok hegynek felfelé történő mozgatására. A víz mozgása sosem aktív: mindig az oldott anyagok (effektív ozmolok) által létrehozott ozmotikus nyomáskülönbséget követi aquaporin csatornákon keresztül.
            </p>
          </footer>

        </article>
    `
});