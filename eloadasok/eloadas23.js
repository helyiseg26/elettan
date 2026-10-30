// eloadasok/eloadas23.js
window.LEKTURAK = window.LEKTURAK || [];

window.LEKTURAK.push({
    id: "eloadas-23",
    title: "23. Előadás: A szívműködés neuroendokrin szabályozása, a szív munkája",
    shortName: "Neuroendokrin szabályozás & Szívelégtelenség",
    html: `
        <div style="font-family: inherit; line-height: 1.7; color: var(--text);">

            <!-- BEVEZETÉS ÉS NEUROANATÓMIAI ALAPOK -->
            <div style="background: var(--info-bg); border-left: 4px solid var(--primary-light); padding: 1.2rem; border-radius: 8px; margin-bottom: 2rem;">
                <h3 style="margin-top: 0; color: var(--primary);">Bevezetés: A szívműködés neuroendokrin szabályozása (Homeometriás szabályozás) [PPT: 5.1–5.4. dia]</h3>
                <p>Míg az autoreguláció (heterometriás szabályozás / Frank–Starling mechanizmus) a szív saját, belső rostmegnyúlásán alapul, addig a <strong>neuroendokrin szabályozás (homeometriás szabályozás)</strong> a szív működését a szervezet pillanatnyi igényeihez igazítja külső vegetatív idegi és hormonális hatások révén [PPT: 5.1, 5.2. dia]:</p>
                <ul>
                    <li><strong>A szív kettős vegetatív beidegzése [PPT: 5.2. dia]:</strong>
                        <ul>
                            <li><strong>Szimpatikus idegrendszer:</strong> A nyúltvelői cardioaccelerator központból indul, a gerincvelő Th1–Th5 oldalsó szarvaiból lép ki, a paravertebralis szimpatikus dúcokban (főként a ganglion stellatumban) átkapcsolódik, majd a nervi cardiaci ágain keresztül éri el a sinuscsomót, AV-csomót és a kamrai munkaizomzatot [PPT: 5.2, 5.4. dia].</li>
                            <li><strong>Paraszimpatikus idegrendszer:</strong> A nyúltvelői cardioinhibitor központból (nucleus dorsalis nervi vagi és nucleus ambiguus) ered a <strong>nervus vagus (X. agyideg)</strong> rostjain át; a szív falában vagy a plexus cardiacusban elhelyezkedő intramurális ganglionokban kapcsolódik át [PPT: 5.2, 5.4. dia].</li>
                        </ul>
                    </li>
                    <li><strong>Az intrinsic kardiális idegrendszer (ICNS, Intrinsic Cardiac Nervous System) [PPT: 5.3, 5.4. dia]:</strong>
                        A szív nem csupán passzív végrehajtó szerv, hanem saját belső ideghálózattal rendelkezik. A pitvarok és a nagyerek tövénél elhelyezkedő ganglionált fonatok (ganglionated plexi, GP) mintegy 100 ganglionból és több tízezer neuronból álló lokális hálózatot alkotnak [PPT: 5.3, 5.4. dia].
                        Integrálják a szimpatikus és paraszimpatikus bemeneteket, és a szívizomsejtek feszülésérzékelőivel kétirányú lokális reflexkapcsolatban állnak [PPT: 5.4. dia].
                    </li>
                </ul>
                <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin-top: 0.8rem; border-radius: 4px;">
                    <strong>🎙️ [Oktatói kiegészítés – A szív 'kis agya' (ICNS) és a pitvarfibrilláció sebészete]:</strong><br>
                    <em>„A 5.3. és 5.4. dián látható ábra a modern kardiológia egyik legfontosabb felfedezése: a szív saját 'kis agya' (intrinsic kardiális idegrendszer). Korábban azt hitték, hogy a bolygóideg és a szimpatikus rostok közvetlenül rácsatlakoznak a szívizomsejtekre. Nem így van! A szív felszínén, az epikardiális zsírszövetben komplex neuronális hálózat van, amely lokális reflexköröket működtet. Ennek óriási klinikai jelentősége van a katéteres ablációknál: ha a kardiológus elégeti a tüdővénák beömlésénél lévő ganglionált fonatokat (ganglionated plexi ablation), azzal gyakran véglegesen megszüntethető a pitvarfibrilláció!” [PPT: 5.3, 5.4. dia]</em>
                </div>
            </div>

            <!-- I. RÉSZ: VEGETATÍV SZABÁLYOZÁS ÉS SEJTSZINTŰ MECHANIZMUSOK -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 2rem;">
                I. RÉSZ: Vegetatív Szabályozás és Sejtszintű Mechanizmusok
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. A szimpatikus idegrendszer hatásai és a sejtszintű kaszkád [PPT: 5.5, 5.6. dia]
            </h3>
            <p>A szimpatikus idegrendszer aktivációja az adaptáció legfontosabb eszköze vészhelyzetben (fight or flight) és fizikai terheléskor [PPT: 5.5. dia]:</p>
            <ul>
                <li><strong>Neurotranszmitterek és hormonok [PPT: 5.5. dia]:</strong>
                    <ul>
                        <li>Postganglionaris szimpatikus rostok: <strong>noradrenalin</strong> (közvetlen szinaptikus felszabadulás) [PPT: 5.5. dia].</li>
                        <li>Mellékvesevelő: keringésbe jutó <strong>adrenalin és noradrenalin 10:1 arányban</strong> [PPT: 5.5. dia].</li>
                    </ul>
                </li>
                <li><strong>A szív öt alapvető „tróp” tulajdonságának pozitív modulációja [PPT: 5.5. dia]:</strong>
                    <ol>
                        <li><strong>Pozitív inotrop hatás:</strong> fokozódik a szívizom összehúzódási ereje és a nyomásfelépítés sebessége ($dP/dt$) [PPT: 5.5. dia].</li>
                        <li><strong>Pozitív kronotrop hatás:</strong> emelkedik a szívfrekvencia (tachycardia) a sinuscsomó spontán diasztolés depolarizációjának gyorsulása miatt [PPT: 5.5. dia].</li>
                        <li><strong>Pozitív dromotrop hatás:</strong> gyorsul az ingerületvezetési sebesség (különösen az AV-csomóban rövidül az átvezetési idő) [PPT: 5.5. dia].</li>
                        <li><strong>Pozitív batmotrop hatás:</strong> fokozódik az ingerlékenység (csökken az ingerküszöb) [PPT: 5.5. dia].</li>
                        <li><strong>Pozitív lüzitrop hatás:</strong> <strong>gyorsul a szívizom elernyedése (relaxációja)</strong>, ami nélkülözhetetlen a kamrák telődéséhez magas szívfrekvenciánál [PPT: 5.5. dia]!</li>
                    </ol>
                </li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">A szimpatikus stimuláció sejtszintű mechanizmusa (β1-kaszkád) [PPT: 5.6. dia]:</h4>
            <ol style="line-height: 1.8;">
                <li>A noradrenalin és adrenalin a szívizomsejt membránjában lévő <strong>β1-adrenerg receptorhoz</strong> kötődik [PPT: 5.5, 5.6. dia].</li>
                <li>A receptor aktiválja a stimuláló G-fehérjét (<strong>Gsα</strong>) [PPT: 5.6. dia].</li>
                <li>A Gsα stimulálja az <strong>adenilát-cikláz (AC)</strong> enzimet, ami az ATP-ből ciklikus adenozin-monofoszfátot (<strong>cAMP ↑</strong>) állít elő [PPT: 5.6. dia].</li>
                <li>A megnövekedett cAMP aktiválja a <strong>Protein Kináz A (PKA)</strong> enzimet [PPT: 5.6. dia].</li>
                <li><strong>A PKA szimultán módon több kulcsfehérjét foszforilál [PPT: 5.6. dia]:</strong>
                    <ul>
                        <li><em>L-típusú Ca2+-csatorna (Cav1.2 / LTCC):</em> kinyílási valószínűsége megnő → több trigger Ca2+ lép be a szisztolé alatt [PPT: 5.6. dia].</li>
                        <li><em>Rianodin receptor (RyR2):</em> Ca-érzékenysége fokozódik → robbanásszerű, masszív kalciumhullám szabadul fel az SR-ből (<strong>pozitív inotrópia</strong>) [PPT: 5.6. dia].</li>
                        <li><em>Foszfolambán (PLB / PLN):</em> foszforilálódik → leválik a SERCA2a-ról → a SERCA2a gátlása megszűnik, és villámgyorsan visszapumpálja a Ca2+-t a raktárba (<strong>pozitív lüzitrópia!</strong>) [PPT: 5.6. dia].</li>
                        <li><em>Troponin I (TnI) és MyBPC:</em> foszforilációjuk csökkenti a troponin C Ca-affinitását a diasztoléban, elősegítve a kalcium gyors leválását és az izomrostok azonnali szétválását [PPT: 5.6. dia].</li>
                        <li><em>HCN funny-csatornák az SA-csomóban:</em> a cAMP közvetlenül kötődik a csatorna citoplazmatikus CNBD doménjéhez, pozitívabb irányba tolva a nyitási feszültséget → meredekebb diasztolés depolarizáció (<strong>pozitív kronotrópia</strong>) [PPT: 5.6. dia].</li>
                    </ul>
                </li>
            </ol>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Miért létfontosságú a pozitív lüzitrópia?]:</strong><br>
                <em>„Gondoljatok bele: ha a szimpatikus idegrendszer felviszi a szívfrekvenciát 150-180/percre, a szívverések közötti diasztolés szünet a harmadára zsugorodik össze! Ha a szívizom csak erősebben húzódna össze, de a relaxációja nem gyorsulna meg, a kamrának egyszerűen nem maradna ideje elernyedni a következő szisztolé előtt. A szív egy görcsös, félig elernyedt állapotban ragadna. A foszfolambán PKA általi foszforilációja az egyik legcsodálatosabb élettani adaptáció: a SERCA2a felpörgetésével a szív pontosan annyival gyorsabban lazul el, amennyivel a magas frekvencia miatt kevesebb ideje maradt a diasztoléra!” [PPT: 5.6. dia]</em>
            </div>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. A paraszimpatikus szabályozás (Nervus vagus) és a vagustónus [PPT: 5.7, 5.8. dia]
            </h3>
            <ul>
                <li><strong>Beidegzési terület [PPT: 5.7. dia]:</strong>
                    A nervus vagus preganglionaris rostjai a plexus cardiacusban végződnek, a postganglionaris kolinerg rostok elsősorban a <strong>sinuscsomót és az AV-csomót idegzik be masszívan</strong> [PPT: 5.7. dia].
                    A pitvari munkaizomzatra is jelentős hatást gyakorolnak, míg a kamrai munkaizomzatra gyakorolt direkt hatásuk mérsékeltebb (de a szimpatikus tónus gátlásán keresztül kamrán is érvényesül) [PPT: 5.7. dia].
                </li>
                <li><strong>Neurotranszmitter és receptor [PPT: 5.7. dia]:</strong>
                    <strong>Acetilkolin (ACh)</strong>, amely a szív sejtjein lévő <strong>M2 muszkarinos acetilkolin receptorokhoz</strong> kötődik [PPT: 5.7. dia].
                </li>
                <li><strong>Sejtszintű gátló mechanizmus [PPT: 5.7, 5.8. dia]:</strong>
                    Az M2 receptor gátló G-fehérjéhez (<strong>Giα</strong>) kapcsolódik → <strong>gátolja az adenilát-ciklázt (AC)</strong> → lezuhan a cAMP szint és csökken a PKA aktivitása (antagonizálja a szimpatikus hatást) [PPT: 5.7, 5.8. dia].
                    Ezzel párhuzamosan a Gi βγ-alegysége közvetlenül megnyitja az acetilkolin-kapuzott káliumcsatornákat (<strong>IK,ACh</strong>) → K+-kiáramlás, a sejt hiperpolarizálódik, az SA- és AV-csomói akciós potenciál küszöbértéke távolabb kerül [PPT: 5.7. dia].
                </li>
                <li><strong>Negatív tróp hatások [PPT: 5.7. dia]:</strong>
                    Negatív kronotropia (bradycardia), negatív dromotropia (AV-átvezetés lassulása, AV-blokk veszélye), negatív batmotropia és negatív inotropia (főként pitvaron) [PPT: 5.7. dia].
                </li>
                <li><strong>Farmakológia:</strong> Az <strong>Atropin</strong> specifikus kompetitív M2-receptor antagonista; kiiktatja a paraszimpatikus gátlást, azonnali frekvenciaemelkedést vált ki [PPT: 5.7. dia].</li>
                <li><strong>Vagustónus nyugalomban [PPT: 5.8. dia]:</strong>
                    Nyugodt éber állapotban a szívműködést a <strong>folyamatos paraszimpatikus (vagus) tónus uralja</strong> [PPT: 5.8. dia].
                    A sinuscsomó veleszületett saját frekvenciája (intrinsic rate) <strong>100–110 ütés/perc</strong> lenne; a vagus állandó fékező hatása tartja ezt a normális <strong>60–75/perc</strong> nyugalmi tartományban [PPT: 5.8. dia]!
                </li>
            </ul>

            <div style="background: var(--box-bg); border-left: 3px solid var(--accent); padding: 0.8rem; margin: 1rem 0; border-radius: 4px;">
                <strong>🎙️ [Oktatói kiegészítés – Miért 100-at ver a transzplantált szív?]:</strong><br>
                <em>„Amikor egy beteg új szívet kap (szívtranszplantáció), a sebészek elvágják a recipiens idegeit, és az új szervet denerváltan ültetik be. Nincs vagus-összeköttetés, nincs paraszimpatikus fék! Egy szívátültetett beteg nyugalmi pulzusa sosem lesz 60-70/perc: a denervált szív pontosan a saját sinuscsomói alapfrekvenciáján, 100-110-es percenkénti ütemmel ver éjjel-nappal!” [PPT: 5.8. dia]</em>
            </div>

            <!-- II. RÉSZ: HOMEOMETRIÁS SZABÁLYOZÁS ÉS AZ INOTRÓPIA -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 3rem;">
                II. RÉSZ: A Homeometriás Szabályozás és az Inotrópia
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. A kontraktilitás (inotrópia) mint homeometriás mechanizmus [PPT: 5.9–5.11. dia]
            </h3>
            <ul>
                <li><strong>A kontraktilitás (inotrópia) definíciója [PPT: 5.9. dia]:</strong>
                    A szívizom belső (intrinsic), relatív erőkifejtő képessége, amely <strong>teljesen FÜGGETLEN a kiindulási rosthossztól (preload) és a szívfrekvenciától</strong> [PPT: 5.9. dia]!
                    A homeometriás szabályozás azt jelenti, hogy az összehúzódási erő megváltozása <em>anélkül</em> következik be, hogy a szarkomer hossza megváltozna [PPT: 5.9. dia].
                </li>
                <li><strong>Mérőszáma a klinikumban:</strong> A bal kamrai izovolumetriás nyomásnövekedés maximális meredeksége (<strong>$dP/dt_{max}$</strong>) [PPT: 5.9, 5.10. dia].</li>
                <li><strong>Molekuláris háttere [PPT: 5.9. dia]:</strong>
                    Az inotrópia mértéke elsősorban a szisztolé alatti <strong>intracelluláris szabad kalciumkoncentráció emelkedésétől ($[Ca^{2+}]_i$)</strong> és az aktív, erőgeneráló aktomiozin kereszthidak számától függ [PPT: 5.9. dia].
                </li>
            </ul>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">Az inotrópia megjelenése a PV-hurkon és a Frank–Starling görbén [PPT: 5.10, 5.11. dia]:</h4>
            <ul>
                <li><strong>A Nyomás-Térfogat (PV) hurkon [PPT: 5.10. dia]:</strong>
                    Pozitív inotróp hatásra (↑ Inotropy) a végszisztolés nyomás-térfogat görbe (<strong>ESPVR</strong>) meredeksége megnő (balra meredekebbé válik) [PPT: 5.10. dia].
                    Változatlan preload (EDV) mellett a kamra mélyebben ürül ki → <strong>az ESV csökken, a pulzustérfogat (SV ↑) és az ejekciós frakció (EF ↑) megnő</strong> [PPT: 5.10. dia]!
                </li>
                <li><strong>A Frank–Starling kamrafunkciós görbén [PPT: 5.11. dia]:</strong>
                    A pulzustérfogat (SV) ábrázolva a végdiasztolés nyomás (LVEDP) függvényében:
                    <ul>
                        <li><em>Pozitív (+) inotrópia (A → C pont):</em> A teljes görbe <strong>balra és felfelé tolódik el</strong> [PPT: 5.11. dia]. Kisebb végdiasztolés nyomásnál is lényegesen nagyobb pulzustérfogatot ürít a szív (EDV ↓, SV ↑, EF ↑) [PPT: 5.11. dia].</li>
                        <li><em>Negatív (-) inotrópia / Szívelégtelenség (A → B pont):</em> A görbe <strong>jobbra és lefelé laposodik el</strong> [PPT: 5.11. dia]. A szív csak magas töltőnyomások mellett képes minimális pulzustérfogatot fenntartani [PPT: 5.11. dia].</li>
                    </ul>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. Az inotrópiát befolyásoló tényezők és inotróp szerek [PPT: 5.12, 5.13. dia]
            </h3>
            <ul>
                <li><strong>Az inotrópiát növelő élettani tényezők [PPT: 5.12. dia]:</strong>
                    Szimpatikus aktiváció (β1), az afterload hirtelen ugrása (Anrep-effektus), mérsékelt szívfrekvencia-emelkedés (Bowditch-féle lépcsőjelenség) [PPT: 5.12. dia].
                </li>
                <li><strong>Az inotrópiát csökkentő tényezők [PPT: 5.12. dia]:</strong>
                    Paraszimpatikus stimuláció (vagus), szisztolés szívelégtelenség, kardiomiopátiák, myocardialis ischaemia és hypoxia, acidózis, β-blokkolók [PPT: 5.12. dia].
                </li>
                <li><strong>Pozitív inotróp gyógyszerek és ionhatások [PPT: 5.13. dia]:</strong>
                    Mindegyik a citoplazmatikus $[Ca^{2+}]_i$ szintjét emeli meg:
                    <ol>
                        <li><strong>β-adrenerg agonisták (Dobutamin, Dopamin, Izoprenalin):</strong> a cAMP-PKA úton nyitva tartják a Cav1.2 Ca-csatornákat [PPT: 5.13. dia].</li>
                        <li><strong>Szívglikozidok (Digitalis / Digoxin):</strong> a membrán Na+/K+-ATPáz gátlásával közvetve csökkentik az NCX Ca2+-leadását [PPT: 5.13. dia].</li>
                        <li><strong>Foszfodiészteráz-gátlók (Milrinon):</strong> gátolják a cAMP lebomlását a szívizomsejtben.</li>
                        <li><strong>Magas extracelluláris $[Ca^{2+}]$ és alacsony $[Na^+]$:</strong> fokozzák a Ca-beáramlást és csökkentik az NCX kiáramlási hajtóerejét [PPT: 5.13. dia].</li>
                    </ol>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. Humorális szabályozás és a frekvencia élettana [PPT: 5.14–5.16. dia]
            </h3>
            <ul>
                <li><strong>Hormonális hatások a szívre [PPT: 5.14. dia]:</strong>
                    <ul>
                        <li><strong>Katekolaminok (Mellékvesevelő):</strong> adrenalin és noradrenalin pozitív tróp hatásai [PPT: 5.14. dia].</li>
                        <li><strong>Pajzsmirigyhormonok (T3 / T4):</strong> erőteljes pozitív inotrop és kronotrop hatás. Növelik a β1-receptorok denzitását (upreguláció) a szívben, fokozzák a SERCA2a expresszióját, és a gyorsabb alfa-MHC (miozin nehézlánc) izoforma szintézisét serkentik [PPT: 5.14. dia]. (Túlműködés / thyreotoxicosis esetén sinus tachycardia, pitvarfibrilláció és magas perctérfogatú szívelégtelenség alakulhat ki!) [PPT: 5.14. dia].</li>
                        <li><strong>Angiotenzin II:</strong> közvetlen pozitív inotrop hatás, serkenti a kardiális sejtnövekedést és a patológiás bal kamra hipertrófia kialakulását [PPT: 5.14. dia].</li>
                    </ul>
                </li>
                <li><strong>A szívfrekvenciát módosító élettani tényezők [PPT: 5.15. dia]:</strong>
                    <ul>
                        <li><em>Életkor:</em> újszülötteknél 120–140/perc, felnőttben 60–80/perc, időskorban a szinuszcsomó degenerációja miatt bradycardia vagy relatív tachycardia jelentkezhet [PPT: 5.15. dia].</li>
                        <li><em>Nem:</em> felnőtt nők átlagos szívfrekvenciája kissé magasabb, mint a férfiaké [PPT: 5.15. dia].</li>
                        <li><em>Edzettség:</em> sportolóknál a magas nyugalmi vagustónus miatt kifejezett <strong>sportolói bradycardia (≤ 50–60/perc)</strong> alakul ki, amit megnövekedett pulzustérfogat ellensúlyoz [PPT: 5.15. dia].</li>
                        <li><em>Testhőmérséklet:</em> <strong>Lázban</strong> 1 °C testhőmérséklet-emelkedés mintegy <strong>10 ütés/perc frekvencia-növekedést</strong> okoz. <strong>Hypothermiában</strong> a szívfrekvencia és az inotrópia meredeken zuhan [PPT: 5.15. dia].</li>
                    </ul>
                </li>
                <li><strong>A szívfrekvencia és a perctérfogat kapcsolata ($CO = SV \times HR$) [PPT: 5.16. dia]:</strong>
                    <ul>
                        <li>A szívfrekvencia növelése kezdetben növeli a perctérfogatot.</li>
                        <li><strong>Ha HR > 150–160/perc (Extrém tachycardia):</strong> a diasztolés telődési idő oly mértékben lerövidül, hogy a kamrának nincs ideje megtelni vérrel → a pulzustérfogat (SV) drasztikusan lezuhan → <strong>a perctérfogat (CO) meredeken esni kezd</strong> [PPT: 5.16. dia]!</li>
                        <li><strong>Ha HR < 50/perc (Súlyos bradycardia):</strong> a pulzustérfogat maximális növelése sem képes ellensúlyozni a ritka összehúzódásokat → <strong>a CO lecsökken</strong> [PPT: 5.16. dia]!</li>
                        <li>Mindkét esetben a <strong>keringési sokk tünetei</strong> jelentkeznek: szédülés, eszméletvesztés (syncope), vérnyomásesés, légszomj és mellkasi angina [PPT: 5.16. dia].</li>
                    </ul>
                </li>
            </ul>

            <!-- III. RÉSZ: A SZÍV ENERGETIKÁJA ÉS A SZÍVELÉGTELENSÉG -->
            <h2 style="color: var(--primary); border-bottom: 3px solid var(--primary-light); padding-bottom: 0.5rem; margin-top: 3rem;">
                III. RÉSZ: A Szív Energetikája és a Szívelégtelenség Patofiziológiája
            </h2>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 1.5rem;">
                1. A szív energiaszükséglete és metabolizmusa [PPT: 5.17–5.19. dia]
            </h3>
            <ul>
                <li><strong>Elképesztő ATP-forgalom [PPT: 5.18. dia]:</strong>
                    Egy átlagos ember napi ATP-szükséglete nyugalomban 70–80 mol.
                    Az emberi szív önmagában <strong>napi 10–12 mol ATP-t használ fel</strong>!
                    Ez testsúlyra átszámítva <strong>napi 5–6 kg ATP-nek</strong> és 500 kJ energiának felel meg [PPT: 5.18. dia]!
                </li>
                <li><strong>A myocardialis ATP felhasználásának megoszlása [PPT: 5.18. dia]:</strong>
                    <ul>
                        <li><strong>70–75%: Mechanikai erőgenerálás és iontranszport:</strong>
                            <ul>
                                <li>Aktomiozin-ATPáz (kereszthíd-elmozdulás és leválás): <strong>50–55%</strong> [PPT: 5.18. dia].</li>
                                <li>SERCA2a kalciumpumpa (relaxáció, Ca visszavétel): <strong>10–15%</strong> [PPT: 5.18. dia].</li>
                                <li>Sarcolemmalis Na+/K+-ATPáz pumpa: <strong>5–6%</strong> [PPT: 5.18. dia].</li>
                            </ul>
                        </li>
                        <li><strong>25–30%: Belső alapanyagcsere:</strong> fehérjeszintézis, nukleinsav- és lipidmetabolizmus [PPT: 5.18. dia].</li>
                    </ul>
                </li>
                <li><strong>Energiatermelés és szubsztrátok [PPT: 5.19. dia]:</strong>
                    A szív <strong>nem rendelkezik jelentős ATP-raktárral</strong>: egyetlen szívdobbanás a teljes ATP-készlet 2%-át éli fel! Folyamatos utánpótlás nélkül a szív <strong>kevesebb mint 1 percen belül leállna</strong> [PPT: 5.19. dia]!
                    Az ATP-termelés szinte kizárólagos forrása az aerob <strong>oxidatív foszforiláció</strong> a mitokondriumokban [PPT: 5.19. dia]:
                    <ul>
                        <li><strong>60–90% Nem szénhidrát:</strong> szabad zsírsavak (β-oxidáció) és ketontestek égetése [PPT: 5.19. dia].</li>
                        <li><strong>10–40% Szénhidrátok:</strong> glükóz, laktát és piruvát oxidációja [PPT: 5.19. dia]. (A szív kiválóan képes a vázizmok által termelt laktátot szubsztrátként hasznosítani!).</li>
                        <li><strong>Abszolút oxigénfüggőség:</strong> Az anaerob glikolízis a szív ATP-igényét csak percekig képes részben fedezni; coronaria-elzáródás esetén a szívizom összehúzódása másodperceken belül leáll [PPT: 5.19. dia]!</li>
                    </ul>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                2. Szívelégtelenség (Heart Failure): Típusok és Tünettan [PPT: 5.20–5.23. dia]
            </h3>
            <p>Szívelégtelenségről akkor beszélünk, ha a szív mint pumpa képtelen a szövetek metabolikus igényeinek megfelelő perctérfogatot biztosítani normális töltőnyomások mellett [PPT: 5.21. dia]:</p>

            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem;">
                <thead>
                    <tr style="background: var(--info-bg); border-bottom: 2px solid var(--border);">
                        <th style="padding: 10px; text-align: left;">Osztályozás</th>
                        <th style="padding: 10px; text-align: left;">Patofiziológiai mechanizmus</th>
                        <th style="padding: 10px; text-align: left;">Klinikai következmény [PPT: 5.21. dia]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Előreható elégtelenség (Forward failure)</strong></td>
                        <td><strong>Szisztolés diszfunkció:</strong> csökkent ejekció, az összehúzódási erő és az ejekciós frakció (EF < 40%) elégtelen [PPT: 5.21. dia].</td>
                        <td><strong>Csökkent szöveti perfúzió:</strong> gyengeség, fáradékonyság, hypotonia, veseelégtelenség, cardiogen sokk [PPT: 5.21, 5.23. dia].</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td><strong>Visszafelé ható elégtelenség (Backward failure)</strong></td>
                        <td><strong>Diasztolés diszfunkció:</strong> inadekvát telődés merev, megvastagodott kamrafal vagy tágulási gátoltság miatt [PPT: 5.21. dia].</td>
                        <td><strong>Vénás pangás (Congestio):</strong> a szív mögötti érpályákban megnő a hidrosztatikai nyomás → folyadékkilépés, ödémák [PPT: 5.21, 5.23. dia].</td>
                    </tr>
                </tbody>
            </table>

            <h4 style="color: var(--primary-light); margin-top: 1rem;">Bal szívfél vs. Jobb szívfél elégtelenség klinikai képe [PPT: 5.23. dia]:</h4>
            <ul>
                <li><strong>Bal szívfél elégtelenség (Left-sided failure) [PPT: 5.23. dia]:</strong>
                    A bal kamra elégtelensége miatt a vér visszatorlódik a bal pitvarba és a tüdővénákba → <strong>kisvérköri (pulmonalis) vénás pangás</strong> alakul ki [PPT: 5.21, 5.23. dia].
                    <em>Vezető tünetek [PPT: 5.23. dia]:</em>
                    <ul>
                        <li><strong>Dyspnoe:</strong> nehézlégzés terhelésre (exertional dyspnea), majd nyugalomban is [PPT: 5.23. dia].</li>
                        <li><strong>Orthopnoe:</strong> a beteg vízszintesen fekve fullad, csak ülve, több párnán tud aludni [PPT: 5.23. dia].</li>
                        <li><strong>Paroxysmalis Nocturnalis Dyspnoe (PND):</strong> éjszaka a végtagi ödémák visszaszívódása megterheli a kisvérkört, a beteg hirtelen fulladásos köhögésre ébred [PPT: 5.23. dia].</li>
                        <li><strong>Pulmonalis pangás és Tüdőödéma:</strong> szörtyzörejek a tüdő felett (crackles, wheezes), habos-véres köpetürítés [PPT: 5.23. dia].</li>
                        <li>Cyanosis, tachypnoe, szisztémás fáradtság [PPT: 5.23. dia].</li>
                    </ul>
                </li>
                <li><strong>Jobb szívfél elégtelenség (Right-sided failure / Cor pulmonale) [PPT: 5.23. dia]:</strong>
                    A jobb kamra elégtelensége miatt a vér visszatorlódik a vena cava rendszerébe → <strong>nagyvérköri vénás pangás</strong> [PPT: 5.21, 5.23. dia].
                    <em>Vezető tünetek [PPT: 5.23. dia]:</em>
                    <ul>
                        <li><strong>Megnövekedett centrális vénás nyomás (CVP ↑):</strong> tágult nyaki vénák (distended jugular veins) [PPT: 5.23. dia].</li>
                        <li><strong>Hepatomegalia és Splenomegalia:</strong> vérbő, megnagyobbodott máj és lép, jobb bordaív alatti tompa fájdalom [PPT: 5.23. dia].</li>
                        <li><strong>Ascites:</strong> hasűri folyadékgyülem [PPT: 5.23. dia].</li>
                        <li><strong>Perifériás szimmetrikus ödéma (Dependent edema):</strong> a gravitációnak kitett mélypontokon (boka, lábszár, fekvő betegnél keresztcsonttájék) megjelenő ujjbenyomatot tartó ödéma [PPT: 5.23. dia].</li>
                        <li>Gastrointestinalis pangás: étvágytalanság (anorexia), puffadás, emésztési zavarok [PPT: 5.23. dia].</li>
                    </ul>
                </li>
            </ul>

            <h3 style="color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.4rem; margin-top: 2rem;">
                3. A szívelégtelenség gyógyszeres terápiája a Frank–Starling görbén [PPT: 5.24. dia]
            </h3>
            <p>A Goodman & Gilman farmakológiai tankönyvből származó híres ábra a terápia célját a kamrafunkciós görbén mutatja be [PPT: 5.24. dia]:</p>
            <ul>
                <li><strong>A kezeletlen dekompenzált szívelégtelenség állapota (Vörös pont):</strong>
                    A lapos, kóros görbén a szív csak extrém magas végdiasztolés nyomás (preload) mellett képes biztosítani egy minimális pulzustérfogatot.
                    <em>Kettős csapda:</em> Egyszerre állnak fenn az <strong>alacsony perctérfogat tünetei (Low CO)</strong> és a <strong>súlyos pangásos tünetek (Congestive symptoms)</strong> [PPT: 5.24. dia]!
                </li>
                <li><strong>A három gyógyszertípus vektoriális hatása [PPT: 5.24. dia]:</strong>
                    <ol>
                        <li><strong>Pozitív Inotróp szer (I) (pl. Digoxin, Dobutamin) [PPT: 5.24. dia]:</strong>
                            Közvetlenül emeli a szívizom kontraktilitását → <strong>a lapos görbét függőlegesen felfelé emeli</strong> egy magasabb szintre. A pulzustérfogat nő, de a preload önmagában még magas maradhat [PPT: 5.24. dia].
                        </li>
                        <li><strong>Vazodilatátor (V) (pl. ACE-gátlók, ARB-k, Nitrátok) [PPT: 5.24. dia]:</strong>
                            Csökkenti a szisztémás érellenállást (Afterload ↓) → megkönnyíti a kamra kiürülését, a munkapontot <strong>balra és felfelé tolja</strong> [PPT: 5.24. dia].
                        </li>
                        <li><strong>Diureticum (D) (Vízhajtók: Furosemid) [PPT: 5.24. dia]:</strong>
                            Nátrium- és vízürítéssel csökkenti az intravascularis térfogatot → <strong>a munkapontot vízszintesen balra tolja</strong>, kihozva a beteget az életveszélyes tüdőödémás és pangásos zónából [PPT: 5.24. dia]! (Önmagában adva kissé csökkentheti az SV-t, ezért kell kombinálni!).
                        </li>
                    </ol>
                </li>
                <li><strong>A kombinált terápia sikere (V + I + D, Zöld pont) [PPT: 5.24. dia]:</strong>
                    A vazodilatátor, inotróp szer és diuretikum együttes adásával a beteg munkapontja visszakerül a normális működési zónába: <strong>a pulzustérfogat normálisra áll vissza úgy, hogy a preload alacsony, és a pangásos tünetek teljesen megszűnnek</strong> [PPT: 5.24. dia]!
                </li>
            </ul>

            <!-- ÖSSZEFOGLALÓ KULCSPONTOK SZIGORLATRA -->
            <div style="background: var(--box-bg); border-left: 4px solid var(--accent); padding: 1.2rem; border-radius: 8px; margin-top: 2rem;">
                <h4 style="margin-top: 0; color: var(--primary);">Legfontosabb szigorlati kulcspontok (Take-Home Messages):</h4>
                <ul>
                    <li>A <strong>homeometriás szabályozás (kontraktilitás / inotrópia)</strong> rosthossztól független belső erőnövekedést jelent a szisztolés $[Ca^{2+}]_i$ szintjének emelésével [PPT: 5.9. dia].</li>
                    <li><strong>Szimpatikus stimuláció (β1):</strong> Gs → cAMP ↑ → PKA aktiváció → LTCC és RyR2 foszforiláció (+ inotropia), foszfolambán foszforiláció → SERCA aktiválódás (<strong>+ lüzitropia</strong>), HCN stimuláció (+ kronotropia) [PPT: 5.5, 5.6. dia].</li>
                    <li><strong>Paraszimpatikus gátlás (Vagus, ACh):</strong> M2 receptor → Gi → cAMP ↓, IK,ACh csatornák nyitása → hiperpolarizáció és negatív tróp hatások [PPT: 5.7. dia]. Nyugalomban a <strong>vagustónus dominál</strong> (a 110-es intrinsic frekvenciát 70-re fékezi) [PPT: 5.8. dia].</li>
                    <li>A <strong>szív ATP-igénye óriási (napi 5-6 kg!)</strong>; 70-75%-át az erőgenerálás (aktomiozin ATPáz 55%, SERCA 15%) emészti fel [PPT: 5.18. dia].</li>
                    <li>A szív kizárólag <strong>aerob oxidációval</strong> képes működni (60-90%-ban zsírsavakat, 10-40%-ban laktátot és glükózt éget); anaerob glikolízissel nem tartható fenn a működés [PPT: 5.19. dia]!</li>
                    <li><strong>Szívfrekvencia határok:</strong> HR > 150/perc esetén a diasztolés telődési idő hiánya miatt a CO zuhanni kezd; HR < 50/perc esetén szintén esik a perctérfogat [PPT: 5.16. dia].</li>
                    <li><strong>Bal szívfél elégtelenség:</strong> pulmonalis pangás, dyspnoe, orthopnoe, PND, tüdőödéma [PPT: 5.23. dia].</li>
                    <li><strong>Jobb szívfél elégtelenség:</strong> nagyvérköri pangás, tágult nyaki vénák, hepatomegalia, ascites, perifériás bokaödéma [PPT: 5.23. dia].</li>
                    <li><strong>Szívelégtelenség kombinált terápiája:</strong> Pozitív inotróp (I ↑ erő), Vazodilatátor (V ↓ afterload), Diuretikum (D ↓ preload és ödéma megszüntetése) [PPT: 5.24. dia].</li>
                </ul>
            </div>

        </div>
    `
});