import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { AppCatalog } from './components/AppCatalog';
import { InstalledApps } from './components/InstalledApps';
import './App.css';

export default function App() {
  const [view, setView] = useState<'installed' | 'catalog'>('installed');
  const [installedApps, setInstalledApps] = useState<string[]>([]);

  useEffect(() => {
    loadInstalledApps();
  }, []);

  async function loadInstalledApps() {
    if (window.auruaDock) {
      const apps = await window.auruaDock.getInstalledApps();
      setInstalledApps(apps);
    }
  }

  return (
    <div className="dock-app">
      <Sidebar view={view} onViewChange={setView} />

      <main className="dock-main">
        {view === 'installed' && <InstalledApps apps={installedApps} onRefresh={loadInstalledApps} />}
        {view === 'catalog' && <AppCatalog onInstall={loadInstalledApps} />}
      </main>
    </div>
  );
}
