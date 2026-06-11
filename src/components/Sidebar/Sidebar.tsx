import { Logo } from '../Logo/Logo';
import './Sidebar.css';
import { ActiveNavItem } from './ActiveNavItem/ActiveNavItem';
import { InactiveNavItem } from './InactiveNavItem/InactiveNavItem';
import { SidebarNavContainer } from '../SidebarNavContainer/SidebarNavContainer';
import { DownloadManager } from '../DownloadManager/DownloadManager';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <aside className="sidebar">
      <Logo />
      
      <nav className="sidebar-nav">
        <SidebarNavContainer>
          {activeView === 'dashboard' ? (
            <ActiveNavItem label="Dashboard" />
          ) : (
            <InactiveNavItem label="Dashboard" onClick={() => onViewChange('dashboard')} />
          )}
          
          {activeView === 'directory' ? (
            <ActiveNavItem label="App Directory" />
          ) : (
            <InactiveNavItem label="App Directory" onClick={() => onViewChange('directory')} />
          )}
        </SidebarNavContainer>
      </nav>

      <div className="sidebar-download-manager">
        <DownloadManager />
      </div>
    </aside>
  );
}
