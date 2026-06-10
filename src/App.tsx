import { useState, useEffect } from 'react';
import { TitleBar } from './components/TitleBar/TitleBar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { AppCatalog } from './components/AppCatalog/AppCatalog';
import { Avatar } from './components/Avatar/Avatar';
import './App.css';

export default function App() {
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
    <>
      <TitleBar />
      <div className="dock-app">
        <Sidebar />

        <main className="dock-main">
          <AppCatalog onInstall={loadInstalledApps} />
        </main>
      </div>
      <Avatar />
    </>
  );
}
