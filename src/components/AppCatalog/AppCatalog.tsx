import { APP_CATALOG } from '../../lib/catalog';
import './AppCatalog.css';

interface AppCatalogProps {
  onInstall: () => void;
}

export function AppCatalog({ onInstall }: AppCatalogProps) {
  async function handleInstall(appId: string) {
    if (window.auruaDock) {
      await window.auruaDock.installApp(appId);
      onInstall();
    }
  }

  return (
    <div className="app-catalog">
      <header className="catalog-header">
        <h1>Discover Aurua Apps</h1>
        <p>Browse and install apps across the entire Aurua ecosystem</p>
      </header>

      {Object.entries(APP_CATALOG).map(([org, apps]) => (
        <section key={org} className="catalog-section">
          <h2 className="catalog-org-title">{org}</h2>
          <div className="catalog-grid">
            {apps.map((app) => (
              <div key={app.id} className="app-card">
                <div className="app-icon" style={{ background: app.color }}>
                  {app.icon}
                </div>
                <div className="app-info">
                  <h3 className="app-name">{app.name}</h3>
                  <p className="app-description">{app.description}</p>
                </div>
                <button
                  className="app-install-btn"
                  onClick={() => handleInstall(app.id)}
                >
                  Install
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
