import { Logo } from '../Logo/Logo';
import './Sidebar.css';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <Logo />
      
      <nav className="sidebar-nav">
        <button className="sidebar-nav-item active">
          <span className="sidebar-nav-icon">🌐</span>
          <span>Discover</span>
        </button>
      </nav>
    </aside>
  );
}
