import { HelpSupport } from '../HelpSupport/HelpSupport';
import { NotificationBell } from '../NotificationBell/NotificationBell';
import { Avatar } from '../Avatar/Avatar';
import './UserActions.css';

export function UserActions() {
  return (
    <div className="user-actions-pill">
      <HelpSupport />
      <NotificationBell />
      <Avatar />
    </div>
  );
}
