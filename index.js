const { app, BrowserWindow } = require('electron');
const fs = require('fs-extra'); // Usa fs-extra
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true, // Attenzione alla sicurezza in produzione
            contextIsolation: false,
        }
    });

    const templatePath = path.join(__dirname, 'docs/index.html');

    /* funzioni lanciate come setup per app */

    checkAndCreateDbClientFolder();

    /* carica app */

    win.loadFile(templatePath);

    win.webContents.openDevTools();

    win.maximize();
    win.setMenuBarVisibility(false);
    win.setApplicationMenu(null);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

/***************************************/
/***************************************/
/**************FUNCTION*****************/
/***************************************/
/***************************************/

async function checkAndCreateDbClientFolder() {
    const folderPath = path.join('C:', 'DBVisualizer' , 'Client');

    try {
        await fs.ensureDir(folderPath);
        console.log(`La cartella "${folderPath}" esiste oppure è stata creata con successo.`);
    } catch (err) {
        console.error(`Errore durante la creazione della cartella "${folderPath}":`, err);
    }
}

