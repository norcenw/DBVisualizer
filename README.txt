📁 Gestione File:

- Drag & Drop del file CSV

- File Recenti: elenco degli ultimi file aperti

- Carico solo csv

- Simile ad Excel



Grafici automatici per analisi rapide:

se numerica: istogramma

se testuale: top 10 valori

se data: andamento nel tempo

Includi una barra laterale per selezionare colonne, nascondere, cambiare tipo di dato.

📁 Gestione File & Directory
Pacchetto	Descrizione
fs-extra	Estensione di fs, semplifica copia, rimozione, creazione directory
path		Incluso in Node.js, per gestire i path in modo sicuro e cross-platform
chokidar	Osserva modifiche su file/cartelle in tempo reale

📊 Lettura e Parsing CSV/JSON
Pacchetto	Descrizione
csv-parser	Legge file CSV in streaming, leggero e veloce (ideale per grandi file)
fast-csv	Parsing + scrittura CSV, molto completo
papaparse	Ottimo anche lato frontend, supporta chunk e worker
neat-csv	Wrapper semplice su csv-parser per parsing rapido in async
jsonfile	Legge/scrive file JSON facilmente (senza fs.readFile a mano)
🛠️ Salvataggio dati e impostazioni
Pacchetto	Descrizione
electron-store	Salva dati utente e configurazioni come file JSON, super comodo
lowdb	Piccolo database JSON locale, utile per salvare dati strutturati per clienti
better-sqlite3	Se vuoi qualcosa di più potente ma sempre locale (SQLite sincrono)
📦 Utility JS
Pacchetto	Descrizione
lodash	Utility per filtrare, mappare, gestire grandi set di dati
date-fns	Per gestire e formattare le date (utile per timestamp CSV)
zod	Validazione strutturata dei dati (es. controllo formato CSV)
🧩 UI e componenti (se usi React o frontend custom)
Pacchetto	Descrizione
tailwindcss	CSS utility-first, veloce per styling
shadcn/ui	Componenti React belli e modulari
ag-grid-community	Tabella performante con scroll virtuale, filtri e altro
react-virtualized	Liste e tabelle virtuali, perfetto per grandi dataset
react-window	Alternativa più leggera di react-virtualized
🧠 Altri utili
Pacchetto	Descrizione
electron-is-dev	Per sapere se sei in modalità dev o produzione
electron-updater	Per aggiornamenti automatici (se usi electron-builder)
dotenv	Per gestire variabili d’ambiente in fase di build o deploy
Bonus: Dev Tools
Pacchetto	Descrizione
concurrently	Avvia più comandi Node insieme (es. Electron + Webpack)
nodemon	Per autoricaricare main process Electron in dev
electron-reload	Reload automatico su modifiche durante lo sviluppo
