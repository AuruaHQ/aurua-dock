import './Dashboard.css';

interface DashboardProps {
  installedApps: string[];
}

export function Dashboard({ installedApps }: DashboardProps) {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Your installed applications and updates</p>
      </div>

      <div className="dashboard-content">
        {installedApps.length === 0 ? (
          <div className="empty-state">
            <p>No apps installed yet</p>
            <span>Browse the App Directory to get started</span>
          </div>
        ) : (
          <div className="installed-apps-grid">
            {/* Installed apps will be shown here */}
            <p>Installed apps list here</p>
          </div>
        )}
      </div>
    </div>
  );
}
