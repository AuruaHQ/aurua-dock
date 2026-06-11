import './ActiveNavItem.css';

interface ActiveNavItemProps {
  label: string;
}

export function ActiveNavItem({ label }: ActiveNavItemProps) {
  return (
    <button className="active-nav-item">
      <span>{label}</span>
    </button>
  );
}
