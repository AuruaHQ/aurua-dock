import { Logo } from '../Logo/Logo';
import './Sidebar.css';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <Logo />
      
      <nav className="sidebar-nav">
        <button className="sidebar-nav-item active">
          <span className="sidebar-nav-icon">📊</span>
          <span>Dashboard</span>
        </button>
        <button className="sidebar-nav-item">
          <span className="sidebar-nav-icon">📁</span>
          <span>App Directory</span>
        </button>
      </nav>

      <div className="sidebar-download-manager">
        <div className="download-manager-box">
          <span className="download-manager-icon">⬇️</span>
          <span>Download Manager</span>
        </div>
      </div>
    </aside>
  );
}
