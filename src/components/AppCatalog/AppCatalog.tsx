import { APP_CATALOG } from '../../lib/catalog';
import { Header } from '../Header/Header';
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
      <Header />

      {Object.entries(APP_CATALOG).map(([categoryName, category]) => (
        <section key={categoryName} className="catalog-section">
          <div className="catalog-category-header">
            <h2 className="catalog-org-title">{categoryName}</h2>
            <p className="catalog-category-description">{category.description}</p>
          </div>
          <div className="catalog-grid">
            {category.apps.map((app) => (
              <div key={app.id} className="app-card">
                <button
                  className="app-install-btn"
                  onClick={() => handleInstall(app.id)}
                >
                  Install
                </button>
                <div className="app-icon" style={{ background: app.color }}>
                  {app.icon}
                </div>
                <div className="app-info">
                  <h3 className="app-name">{app.name}</h3>
                  <p className="app-description">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
