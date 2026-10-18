# Free FT — strona projektu

Statyczna strona rodziny FT (Free Falcon):
https://niirmataa.github.io/freeft-site/

Źródło prawdy projektu: https://github.com/niirmataa/free_falcon_sign
Dane stanu: `project-data.js` (aktualizowane przy kamieniach milowych).

## Snapshot 15 października 2026

Stan opublikowanych źródeł: `d6810991e17345f3f1c49abd4a461a4fddc046d8` (17:11 CEST).
Historia zachowuje poprzednie wpisy i ich odnośniki. Aktualizacja dodaje
odbiory zakresowe, wyniki lokalne, korektę modelu KeyGen i tor S05.
Nie obejmuje późniejszych nieopublikowanych commitów ani nie zastępuje
replayu dowodów. Bieżące teksty mapy pochodzą z raportów przypiętych do
tego snapshotu; daty zdarzeń odpowiadają commitom zapisującym wynik.

## Snapshot 15 października 2026 — aktualizacja wieczorna

Stan opublikowanych źródeł: `16ba00be37be1cff7feb289af422d2b6022a3f2a` (21:57 CEST).
Sześć nowych wpisów dokumentuje #140–145: parametryczny motylek, pierwszą
grupę i przebieg, generyczną pętlę grup, wszystkie osiem środkowych przebiegów
pierwszego FFT oraz źródłowe składniki MUL/SQR gałęzi potrajania.
Zachowano 26 wcześniejszych wpisów, ich statusy i źródła; dawną etykietę
„FRONT PRAC” oznaczono jako początek etapu. Łącznie 32 punkty historii.
Udokumentowano również odrzucony lemat logn=9 i nieprzyjętą opcjonalną
równość ekspandera. Nowe kroki mają PROVED_KERNEL_SCOPED / NOT_REVIEWED;
cytowane audyty są audytami własnymi autora. Całe pierwsze FFT, rt2 i pełny
udany KeyGen pozostają otwarte. W S05 i run2 brak zmian względem poprzedniego
snapshotu. Aktualizacja strony nie obejmuje nowego replayu Lean/Sage.

## Snapshot 18 października 2026

Publiczne źródła: `09ef5c61a1474bf00c850b8bcf4e09822a68e493` (11:44 CEST).
Dodano 14 punktów historii, łącznie 46; zachowano treść, statusy i źródła
wszystkich 32 wcześniejszych wpisów. Dawny znacznik frontu #145 zastąpiono
historyczną etykietą składników potrajania.

Aktualizacja obejmuje obie FFT i bramki norm dla seed9, postęp konstrukcyjnej
publicznej NTT do #167, liczniki S05, audyt integracyjny i korektę jego pokrycia,
częściowy wynik Z_LOWER134 oraz odzyskanie historycznych pinów.
Całe generyczne wywołanie forward #167 jest udowodnione przy jawnej legalnej
pamięci; jego dwa konkretne zastosowania pozostają poza tym snapshotem.
Pełny KeyGen, dodatnia liczbowa masa sukcesu i połączenie z realnym Sign są
otwarte. Zachowano NOT_REVIEWED i odrębność publicznej symulacji od Sign.

Daty części commitów #148–153 są niemonotoniczne względem przodków Git.
Etapy połączono we wpis 15–16 października, z porządkiem końcowego checkpointu
#153; nie dopisano fikcyjnych godzin. Równoważność dodatniej masy i istnienia
świadka nie jest na stronie przedstawiana jako porównanie trudności metod.
Źródła manuskryptu nie zmieniły się; zlecenie R2 nie oznacza odebranego review.
Aktualizacja jest redakcyjna, bez nowego replayu Lean/Sage.
