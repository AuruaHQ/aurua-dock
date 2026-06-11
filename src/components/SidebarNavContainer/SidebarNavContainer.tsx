import './SidebarNavContainer.css';

interface SidebarNavContainerProps {
  children: React.ReactNode;
}

export function SidebarNavContainer({ children }: SidebarNavContainerProps) {
  return (
    <div className="sidebar-nav-container">
      {children}
    </div>
  );
}
