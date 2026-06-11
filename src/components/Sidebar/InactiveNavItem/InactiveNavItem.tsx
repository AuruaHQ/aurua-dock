import './InactiveNavItem.css';

interface InactiveNavItemProps {
  label: string;
  onClick: () => void;
}

export function InactiveNavItem({ label, onClick }: InactiveNavItemProps) {
  return (
    <button className="inactive-nav-item" onClick={onClick}>
      <span>{label}</span>
    </button>
  );
}
