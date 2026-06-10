import { useState, useEffect } from 'react';
import { AppCatalog } from './components/AppCatalog';
import { InstalledApps } from './components/InstalledApps';
import { UserProfile } from './components/UserProfile';
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
      <aside className="dock-sidebar">
        <div className="dock-logo">
          <div className="dock-logo-icon">A</div>
          <span>Aurua Dock</span>
        </div>
        
        <nav className="dock-nav">
          <button
            className={`dock-nav-item ${view === 'installed' ? 'active' : ''}`}
            onClick={() => setView('installed')}
          >
            <span className="dock-nav-icon">📦</span>
            <span>Installed</span>
          </button>
          <button
            className={`dock-nav-item ${view === 'catalog' ? 'active' : ''}`}
            onClick={() => setView('catalog')}
          >
            <span className="dock-nav-icon">🌐</span>
            <span>Discover</span>
          </button>
        </nav>

        <div className="dock-sidebar-footer">
          <UserProfile />
        </div>
      </aside>

      <main className="dock-main">
        {view === 'installed' && <InstalledApps apps={installedApps} onRefresh={loadInstalledApps} />}
        {view === 'catalog' && <AppCatalog onInstall={loadInstalledApps} />}
      </main>
    </div>
  );
}
