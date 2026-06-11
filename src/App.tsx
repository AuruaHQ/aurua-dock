import { useState, useEffect } from 'react';
import { TitleBar } from './components/TitleBar/TitleBar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { UserActions } from './components/UserActions/UserActions';
import { CircleButton } from './components/CircleButton/CircleButton';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { AppDirectory } from './pages/AppDirectory/AppDirectory';
import { SplashScreen } from './components/SplashScreen/SplashScreen';
import './App.css';

export default function App() {
  const [installedApps, setInstalledApps] = useState<string[]>([]);
  const [activeView, setActiveView] = useState('dashboard');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    loadInstalledApps();

    // Handle Ctrl+R (or Cmd+R on Mac) to refresh with splash screen
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        setShowSplash(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  async function loadInstalledApps() {
    if (window.auruaDock) {
      const apps = await window.auruaDock.getInstalledApps();
      setInstalledApps(apps);
    }
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <TitleBar />
      <div className="dock-app">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />

        <main className="dock-main">
          <div key={activeView} className={`view-container ${activeView}`}>
            {activeView === 'dashboard' ? (
              <Dashboard installedApps={installedApps} />
            ) : (
              <AppDirectory onInstall={loadInstalledApps} />
            )}
          </div>
        </main>

        <CircleButton />
        <UserActions />
      </div>
    </>
  );
}
