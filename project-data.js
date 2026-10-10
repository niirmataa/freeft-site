'use strict';
const REPO = 'https://github.com/niirmataa/free_falcon_sign';
const SNAPSHOT = '2d2cdf52304cee9cf513487d4296392262df22f4';
const source = path => `${REPO}/blob/${SNAPSHOT}/${path}`;
const workState = source('proofs/ft1536/development/T12_1/source3/WORK_STATE.md');
const paper = name => source(`proofs/ft1536/paper/${name}`);
const PROJECT_NODES = {
  keygen: {
    eyebrow:'AKTUALNY FRONT PRAC / B1.07', title:'Szósta bramka już w modelu wykonania.',
    body:'B1.05 zamyka lokalny wynik NTRU, a B1.06 — równania publicznego h i odwrotności dla tego samego materiału. BATCH_051 rozszerza B1.07 o bramkę certyfikatu, odrzucenia, ponowienia i zaakceptowane wyjście z pętli.',
    remaining:'Relokacja workspace pozostaje do wyprowadzenia. Trzeba jeszcze połączyć ten sam materiał f/g/F/G/h na wejściach koderów, transport warunków wejścia przez próby i pełne wywołanie. LegalWorkspace jest nadal jawnym lokalnym wejściem.',
    scope:'B1.05 / B1.06: PROVED_KERNEL_SCOPED, NOT_REVIEWED. B1.07: PARTIAL_PROOF, Acceptance NOT MET, NOT_REVIEWED.', url:workState
  },
  reduction:{
    eyebrow:'MATEMATYCZNY RDZEŃ / KLASYCZNY ROM', title:'Od fałszerstwa do problemu kratowego.',
    body:'Manuskrypt przedstawia warunkową redukcję EUF-CMA do MT-ISIS: konkretny reduktor, stratę kolizyjną i kierunkowe porównanie drugich momentów. Przesłanki dotyczą praw odpowiedzi i wskazanego eksperymentu.',
    remaining:'Przesłanki muszą zostać zrealizowane przez właściwe wykonanie implementacji. Osobne twierdzenie obliczeniowe dotyczy publicznej symulacji i określonej klasy testów z certyfikatem kosztu.',
    scope:'Wynik warunkowy w modelu klasycznym. Pełna instancja dla implementacji i redukcja QROM pozostają poza tym zakresem.',url:paper('main.tex')
  },
  sampler:{
    eyebrow:'ROZKŁADY / MODELE ILOŚCIOWE',title:'Losowość ma konkretne prawo.',
    body:'Odebrany T01 składa region do 16 prób po H2P w modelu IID. Nowszy rachunek manuskryptu rozróżnia nieuwarunkowany sample-then-check i próbę warunkowaną na zaakceptowany region.',
    remaining:'To wykonanie źródłowe musi rozstrzygnąć, który AttemptShape jest realizowany. Dwa warianty mają różne przesłanki i straty; nie są zamiennymi deklaracjami bezpieczeństwa.',
    scope:'T01: WholeRegionBad ≤ 2⁻⁸⁰ w G_retry_IID. Manuskrypt: e₂(k) < 2⁻³² lub e₂(k_cond) < 2⁻¹⁷ przy odpowiednich przesłankach. Wykładniki nie oznaczają poziomu bezpieczeństwa schematu.',url:paper('main.tex')
  },
  bytes:{
    eyebrow:'INTERFEJS / KODOWANIE / WERYFIKACJA',title:'Równanie musi dotrzeć do bajtów.',
    body:'L_V wiąże weryfikator bajtowy z poprawionym, przypiętym kandydatem w jawnym modelu C. Lokalny model B3 opisuje nagłówek, końcowe bity zerowe i dokładne zużycie danych przez kodeki.',
    remaining:'Lokalny round-trip nie zamyka globalnego połączenia emitowanego klucza, podpisu i obserwacji przeciwnika. Pełna kompozycja A3/A4 oraz końcówka kodowania KeyGen nadal wymagają dowodów.',
    scope:'STATIC round-trip: 1536 współczynników signed-16. Raw comp-0: domena [−9216, 9216]. STATIC nie oznacza stałej długości podpisu ani stałoczasowości.',url:paper('sec_02_parameters.tex')
  },
  security:{
    eyebrow:'CEL / PEŁNY ARGUMENT',title:'Zamknięte części. Otwarte połączenia.',
    body:'Celem jest jeden eksperyment obejmujący rzeczywisty generator, rozkład emitowanych kluczy, Sign i wynikowe bajty. Warunkowa redukcja, lokalne dowody oraz publiczna symulacja dostarczają części tego argumentu.',
    remaining:'Most dla rzeczywistego podpisywania, prawo kluczy i globalne interfejsy bajtowe pozostają otwarte. S06 ma status diagnostyk wymagających korekt. Stałoczasowość całej implementacji to osobny cel.',
    scope:'Brak deklaracji end-to-end implementation security, certyfikowanego poziomu bitowego i QROM. Estymacje nie są formalną gwarancją.',url:paper('README.md')
  },
  paper:{
    eyebrow:'PUBLIKACJA / RESEARCH DRAFT 0.3',title:'Artykuł prowadzący przez argument.',
    body:'„Free FT: Ternary Lattice Signatures with a Code-Bound Security Reduction”, autor: Niirmata. Obecny draft oddziela redukcję warunkową, wyniki źródłowe, publiczną symulację i otwarte połączenia.',
    remaining:'Finalny eksport musi wyznaczyć główne twierdzenie. Do przygotowania pozostają m.in. pełny przegląd literatury oraz publicznie dostępny pakiet reprodukcyjny; część receiptów jest lokalna.',
    scope:'Przygotowanie do ePrint, nie opublikowany artykuł. 117 wybranych pinów wejściowych i 21 grup roszczeń w checkerze dokumentu — bez nowego replayu Lean.',url:paper('README.md')
  }
};
const PROJECT_EVENTS = [
 {id:'origin',date:'Początki projektu',order:'2026-01-01',meta:'KONTEKST HISTORYCZNY',type:'code',status:'PUNKT WYJŚCIA',color:'blue',title:'Od Falcon EXTRA do pełnoternarnego sekretu',text:'Free FT rozwija historyczną implementację Falcon EXTRA / ternary. FT1536 staje się głównym profilem badawczym Niirmaty.',detail:'Wymiar 1536, moduł 18433 i współczynniki propozycji sekretu −1, 0, +1 wyznaczają tożsamość profilu. To kontekst projektu, nie datowany commit założycielski. FT768 i FT3072 pozostają propozycjami.',url:source('README.md')},
 {id:'floor',date:'20.09.2026',order:'2026-09-20',meta:'FLOOR_CT',type:'code',status:'ODEBRANO ZAKRESOWO',color:'green',title:'Poprawka selektora floor trafia do aktywnego kandydata',text:'FLOOR_CT zastępuje końcowy wybór operacjami unsigned AND/OR. Review odtwarza zgodność źródeł, lokalne dowody i porównanie A/B.',detail:'Zachowano zgodność wyników surowych słów, także dla ujemnego zera. Wyniki kompilacji i eksperymenty czasowe dotyczą przypiętego zakresu; brak wykrytego sygnału nie dowodzi stałoczasowości całego podpisu.',url:source('proofs/ft1536/validation/2026-09-20-floor-ct/README.md')},
 {id:'numeric',date:'21.09.2026',order:'2026-09-21',meta:'H3 / ORDERED NUMERIC CENTER',type:'proof',status:'ODEBRANO ZAKRESOWO',color:'green',title:'Domknięcie lewej gałęzi i granic centrów',text:'LEFT_ROOT_CORRELATED_TRANSFER łączy wynik prawej gałęzi z lewą i obejmuje aktywne punkty przed floor/cast dla certyfikowanych wejść.',detail:'Raport podaje skończone |μ| ≤ 937866518 w przypiętym modelu dla emitowanych kluczy. Argument ma jawny zakres mieszany: analityczny i kernelowy. Historyczny ORDERED_REACH zachowuje swój częściowy status.',url:source('proofs/ft1536/validation/2026-09-21-left-root-transfer/README.md')},
 {id:'iid',date:'22.09.2026',order:'2026-09-22',meta:'T01 / IID RETRY',type:'proof',status:'PASS_SCOPED_REVIEW',color:'green',title:'Od pojedynczego próbkowania do regionu 16 prób',text:'T01 składa granicę H6P przez rzeczywisty region po H2P z limitem 16 prób w G_retry_IID: WholeRegionBad ≤ 2⁻⁸⁰.',detail:'To wynik dla wskazanego regionu IID, nie granica warunkowana powodzeniem podpisu i nie twierdzenie o rzeczywistym PRNG. Review zachowuje osobno zakres źródłowy, analityczny i kernelowy.',url:source('proofs/ft1536/validation/2026-09-22-iid-retry-independent/README.md')},
 {id:'p02',date:'29.09.2026',order:'2026-09-29',meta:'P02 / V02',type:'proof',status:'REVIEWED · PARTIAL',color:'blue',title:'Odbiór P02 precyzuje granicę arytmetyki źródłowej',text:'Przyjęto LE64 i wykonanie literalnych słów w dokładnych domenach V02. Częściowy wynik pozostaje częściowy także po review.',detail:'no_add_dispatch ujawnia niespełnialność przesłanki AddCallObligation. Matematyczne add/mul/div/sqrt, real-rint i domeny wywołującego nadal wymagają właściwych eksportów; nie są uzyskane przez sam odbiór.',url:source('docs/onboarding/STATE.md')},
 {id:'development',date:'30.09.2026',order:'2026-09-30',meta:'DEVELOPMENT / T12_1',type:'code',status:'HISTORIA W GIT',color:'blue',title:'Rozwój zapisany w małych krokach',text:'Nowości T12.1 otrzymują osobne drzewo development i małe commity. Odbiór i końcowe stages są odrębnym krokiem.',detail:'Źródła rozdzielono na run2, source3 i t5, z zachowaniem zależności archiwalnych i pochodzenia. Zapis kodu nie oznacza automatycznie nowego proofu ani niezależnego odbioru.',url:source('proofs/ft1536/development/T12_1/README.md')},
 {id:'b105',date:'09.10.2026',order:'2026-10-09',meta:'B1.05 / BATCH_032',type:'proof',status:'PROVED · NOT_REVIEWED',color:'green',title:'Dokładne równanie NTRU dla zachowanego materiału',text:'B1.05 osiąga lokalne Acceptance w zakresie kernelowym. Wynik dotyczy równania NTRU i materiału tego samego wykonania źródłowego.',detail:'Status to PROVED_KERNEL_SCOPED / NOT_REVIEWED. Nie jest to zakończenie całego KeyGen ani twierdzenie o prawie emitowanych kluczy. Następne połączenia muszą zachować tożsamość wektorów.',url:workState},
 {id:'b106',date:'10.10.2026',order:'2026-10-10T07:28:53',meta:'B1.06 / BATCH_046',type:'proof',status:'PROVED · NOT_REVIEWED',color:'green',title:'Publiczne h i odwrotność dla tego samego klucza',text:'Źródłowe obliczenie publiczne daje kanoniczne h oraz obie relacje z fInv dla zachowanego materiału. B1.06 osiąga lokalne Acceptance.',detail:'Kierunki forward i inverse są uzasadniane przez konkretne wykonanie. Lokalny wynik nadal wymaga kompozycji z wywołującym i kodowaniem; niezależny odbiór pozostaje niewykonany.',url:`${REPO}/commit/59384f2ab370f3548248e8b405de5d9125abfee9`},
 {id:'rng',date:'10.10.2026',order:'2026-10-10T09:08:59',meta:'B1.07 / BATCH_048',type:'proof',status:'CZĘŚCIOWO',color:'blue',title:'Gotowość RNG bez założenia „już gotowy”',text:'Pełny prefix gotowości obejmuje set_seed, rng_ready i obie pierwsze próbki o granicy współczynników 1.',detail:'Jawne obserwacje wywołań Linuksa obejmują również porażki. Ten wynik nie jest dowodem jakości entropii, dostępności ziarna ani bezpieczeństwa generatora.',url:`${REPO}/commit/915178a19324445cdfa8b7ea2a1b0e0842ac4ad6`},
 {id:'syntax',date:'10.10.2026',order:'2026-10-10T10:32:54',meta:'B1.07 / BATCH_049',type:'proof',status:'CZĘŚCIOWO',color:'blue',title:'Cała składnia wywołującego jest powiązana ze źródłem',text:'407 linii KeyGen: składnia, bramki, wyjście z pętli i końcówka wywołań kodowania tworzą jeden powiązany obiekt.',detail:'Pełna składnia nie jest jeszcze wykonaniem całego wywołania. Kontrole pojemności buforów następują po zaakceptowaniu próby — sukces próby i sukces emisji pozostają odrębne.',url:`${REPO}/commit/0e38ca35610e4d406444d27c2459e32aec2388d2`},
 {id:'paper',date:'10.10.2026',order:'2026-10-10T13:25:38',meta:'PAPER / DRAFT 0.3',type:'paper',status:'W REDAKCJI',color:'blue',title:'Manuskrypt prowadzi przez argument, nie przez partie prac',text:'Redakcja rozwija motywację, zachowanie przy porażce i samodzielny dowód redukcji. B1.05 i B1.06 występują jako zwykłe propozycje matematyczne.',detail:'Identyfikatory partii trafiają do tabeli zgodności w dodatku. Abstrakt i główna formuła pozostają zgodne z obecnym zakresem. To przygotowanie do ePrint, bez deklaracji zamknięcia całej implementacji.',url:`${REPO}/commit/dfdc50bbdba0bbc10c2a6ffecedadbd26f9b18ae`},
 {id:'sixth',date:'10.10.2026',order:'2026-10-10T13:32:56',meta:'B1.07 / BATCH_051 · NAJNOWSZE',type:'proof',status:'PARTIAL · NOT_REVIEWED',color:'blue',title:'Szósta bramka, ponowienia i zaakceptowane wyjście',text:'Chronologia sześciu bramek obejmuje odrzucenie certyfikatu, kolejne próby i końcowy break. Materiał w obcych blokach jest przenoszony przez te przejścia.',detail:'LegalWorkspace jest jawnym lokalnym wejściem. Relokacja workspace, odwrócenie warunków bloków tabel M0, wspólny materiał na wejściach koderów i pełne wywołanie pozostają otwarte. B1.07: Acceptance NOT MET.',url:`${REPO}/commit/${SNAPSHOT}`}
];
