const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('auruaDock', {
  getInstalledApps: () => ipcRenderer.invoke('get-installed-apps'),
  installApp: (appId) => ipcRenderer.invoke('install-app', appId),
  launchApp: (appId) => ipcRenderer.invoke('launch-app', appId),
  uninstallApp: (appId) => ipcRenderer.invoke('uninstall-app', appId),
});
