import './InstalledApps.css';

interface InstalledAppsProps {
  apps: string[];
  onRefresh: () => void;
}

export function InstalledApps({ apps, onRefresh }: InstalledAppsProps) {
  async function handleLaunch(appId: string) {
    if (window.auruaDock) {
      await window.auruaDock.launchApp(appId);
    }
  }

  return (
    <div className="installed-apps">
      <header className="installed-header">
        <h1>Installed Apps</h1>
        <button className="refresh-btn" onClick={onRefresh}>
          Refresh
        </button>
      </header>

      {apps.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📦</div>
          <h2>No apps installed yet</h2>
          <p>Browse the catalog to install your first Aurua app</p>
        </div>
      ) : (
        <div className="installed-grid">
          {apps.map((app) => (
            <div key={app} className="installed-card">
              <div className="installed-icon">A</div>
              <div className="installed-info">
                <h3>{app}</h3>
                <p>Version 1.0.0</p>
              </div>
              <button
                className="launch-btn"
                onClick={() => handleLaunch(app)}
              >
                Launch
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
