// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, dialog, protocol } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const fs = require('fs');

let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    minWidth: 1228,
    height: 802,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

app.on('ready', () => {
  protocol.registerFileProtocol('custom-protocol', (request, callback) => {
    const url = request.url.substring(18);
    callback({ path: path.normalize(`${url}`) });
  });
});

ipcMain.handle('minimize-event', () => {
  mainWindow.minimize();
});

ipcMain.handle('maximize-event', () => {
  mainWindow.maximize();
});

ipcMain.handle('unmaximize-event', () => {
  mainWindow.unmaximize();
});

ipcMain.handle('close-event', () => {
  app.quit();
});

ipcMain.handle('open-file-event', () => {
  dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [
      { name: 'Видео', extensions: ['mkv', 'avi', 'mp4'] },
    ],
  });
});

ipcMain.handle('open-folder-event', async () => {
  const result = await dialog.showOpenDialog({ properties: ['openDirectory'] });
  const dirPath = result.filePaths[0];
  const files = fs.readdirSync(dirPath);
  return `${dirPath}/${files[2]}`.replaceAll('\\', '/');
});
