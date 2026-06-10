import { useState, useEffect } from 'react';
import { TitleBar } from './components/TitleBar/TitleBar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { AppDirectory } from './pages/AppDirectory/AppDirectory';
import { Avatar } from './components/Avatar/Avatar';
import './App.css';

type View = 'dashboard' | 'app-directory';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
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
        <Sidebar currentView={currentView} onViewChange={setCurrentView} />

        <main className="dock-main">
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'app-directory' && <AppDirectory onInstall={loadInstalledApps} />}
        </main>
      </div>
      <Avatar />
    </>
  );
}
