import { Logo } from '../Logo/Logo';
import './Sidebar.css';

interface SidebarProps {
  currentView: 'dashboard' | 'app-directory';
  onViewChange: (view: 'dashboard' | 'app-directory') => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  return (
    <aside className="sidebar">
      <Logo />
      
      <nav className="sidebar-nav">
        <button 
          className={`sidebar-nav-item ${currentView === 'dashboard' ? 'active' : ''}`}
          onClick={() => onViewChange('dashboard')}
        >
          <span className="sidebar-nav-icon">📊</span>
          <span>Dashboard</span>
        </button>
        <button 
          className={`sidebar-nav-item ${currentView === 'app-directory' ? 'active' : ''}`}
          onClick={() => onViewChange('app-directory')}
        >
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
