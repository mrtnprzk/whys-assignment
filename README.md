# WHYS Assignment

This project was created with "npx create-react-app my-app --template typescript"

## Available Scripts

In the project directory, you can run:

### `npm install`

After you cloned the project, please install the necessary packages by using "npm install" in the project directory

### `npm start`

Runs the app in the development mode with "npm start".\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Description

Úkolem je připravit projekt, kde bude jedna stránka která má vykreslit článek a komentáře k němu. Komentáře se musí vykreslit až po vykreslení článku a jsou seřazeny od nejnovějšího nahoře.

Napiš to v Reactu tak, jak to umíš. Pokud možno, piš to funkcionálně (ne class komponenty). Můžeš nám napsat do emailu cokoliv, co tě napadlo během psaní a jak se to většinou řeší v produkčním kódu a proč.

Jak to má vypadat:

- vytvoř komponenty, které vykreslí článek a komentáře
- vytvoř komponentu `Articles` která vykreslí ostatní komponenty a ještě tlačítko pro načtení dalších komentářů (zobraz až po získání a vykreslení komentářů)
- komponenta `Articles` bude získávat data (článek a komentáře)
- simuluj získání dat asynchronním kódem (zobrazí se po nějaké době)
- data jsou definovana v `src/data/articles.json`, dostupné globálně

Pokyny:

- kód by měl běžet v Chrome 80 a novější
- jak si poradíš se styly je na tobě a uvítáme, když si s tím pohraješ
- kód musí být čitelný a dobře fungovat
- počítej s případným rozšířením projektu, ale ať je kód zároveň přiměřeně jednoduchý vůči zadání
- v souboru `README.md` sepiš jak projekt rozjet
- Finální projekt nám pošli jako `GitHub` (nebo Gitlab atp.) repozitář.