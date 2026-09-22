# Wallywood – Frontend

Wallywood er en webshop for filmplakater, bygget som eksamensprojekt til faget **Avanceret Frontend** (H1WE010126, TechCollege).

Brugeren kan browse filmplakater sorteret efter genre, åbne den enkelte plakat for at se flere detaljer, og (under udvikling) lægge plakater i en indkøbskurv.

## Teknologier

- **React 19** + **TypeScript**
- **Vite** som build-tool
- **React Router** til routing
- **styled-components** til styling
- Data hentes fra et selvbygget REST API (bygget i faget Dataservice- og integration)

## Kom i gang

### Forudsætninger

- [Node.js](https://nodejs.org/) (v18 eller nyere anbefales)
- Wallywood API'et skal køre lokalt på `http://localhost:3000`

### Installation

```bash
git clone https://github.com/<dit-brugernavn>/wallywood-frontend-fredag.git
cd wallywood-frontend-fredag
npm install
```

### Kør projektet

```bash
npm run dev
```

Sitet kører herefter på `http://localhost:5173` (standard Vite-port).

### Andre kommandoer

```bash
npm run build     # Bygger projektet til produktion
npm run preview   # Kører en lokal preview af build'et
npm run lint      # Kører ESLint
```

## Projektstruktur

```
src/
├── assets/                 # Billeder og ikoner
├── components/
│   ├── genreFilter/        # Filtrering af plakater efter genre
│   ├── posterList/
│   └── types/               # Delte TypeScript-typer
├── GlobalStyles/            # Tema til styled-components
├── hooks/
│   ├── useFetch.tsx          # Generisk hook til at hente data fra API'et
│   └── userandomposters.tsx
├── pages/
│   ├── home.tsx
│   ├── plakater.tsx           # Oversigt med genre-filter (layout for /plakater)
│   ├── posterGrid.tsx          # Grid med plakater (indeks-route under /plakater)
│   ├── posterDetailPage.tsx    # Detaljevisning af en enkelt plakat
│   ├── om-os.tsx
│   ├── kontakt.tsx
│   └── loginpage.tsx
├── partials/
│   ├── Navbar.tsx
│   └── cards.tsx               # Genanvendeligt plakat-kort
└── App.tsx                     # Routing
```


