import './Avatar.css';

export function Avatar() {
  return (
    <button className="avatar-button" aria-label="User Profile">
      <div className="avatar-circle">
        <span className="avatar-initial">A</span>
      </div>
    </button>
  );
}
