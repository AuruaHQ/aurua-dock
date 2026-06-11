const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#f6f6f7',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173');
    // mainWindow.webContents.openDevTools(); // Uncomment to debug
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist-vite/index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  // Register Ctrl+R / Cmd+R for refresh
  globalShortcut.register('CommandOrControl+R', () => {
    if (mainWindow) {
      mainWindow.webContents.reload();
    }
  });

  // Check for updates
  if (!process.env.NODE_ENV === 'development') {
    autoUpdater.checkForUpdatesAndNotify();
  }

  app.on('activate', () => {
  // Unregister all shortcuts
  globalShortcut.unregisterAll();
  
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// IPC Handlers for app management
ipcMain.handle('get-installed-apps', async () => {
  // TODO: Return list of installed Aurua apps
  return [];
});

ipcMain.handle('install-app', async (event, appId) => {
  // TODO: Download and install app
  console.log('Installing app:', appId);
  return { success: true };
});

ipcMain.handle('launch-app', async (event, appId) => {
  // TODO: Launch installed app
  console.log('Launching app:', appId);
  return { success: true };
});

ipcMain.handle('uninstall-app', async (event, appId) => {
  // TODO: Uninstall app
  console.log('Uninstalling app:', appId);
  return { success: true };
});
