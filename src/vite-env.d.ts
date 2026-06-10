/// <reference types="vite/client" />

interface Window {
  auruaDock?: {
    getInstalledApps: () => Promise<string[]>;
    installApp: (appId: string) => Promise<{ success: boolean }>;
    launchApp: (appId: string) => Promise<{ success: boolean }>;
    uninstallApp: (appId: string) => Promise<{ success: boolean }>;
  };
}
