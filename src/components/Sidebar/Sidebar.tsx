import { useState } from 'react';
import './Sidebar.css';

interface SidebarProps {
  view: 'installed' | 'catalog';
  onViewChange: (view: 'installed' | 'catalog') => void;
}

export function Sidebar({ view, onViewChange }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/aurua.png" alt="Aurua" />
      </div>
      
      <nav className="sidebar-nav">
        <button
          className={`sidebar-nav-item ${view === 'installed' ? 'active' : ''}`}
          onClick={() => onViewChange('installed')}
        >
          <span className="sidebar-nav-icon">📦</span>
          <span>Installed</span>
        </button>
        <button
          className={`sidebar-nav-item ${view === 'catalog' ? 'active' : ''}`}
          onClick={() => onViewChange('catalog')}
        >
          <span className="sidebar-nav-icon">🌐</span>
          <span>Discover</span>
        </button>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-user-avatar">A</div>
          <div className="sidebar-user-info">
            <div className="sidebar-user-name">Alex Chavez</div>
            <div className="sidebar-user-status">● Online</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
