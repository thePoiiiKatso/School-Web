import Icon from "./Icon";

function Navbar() {
  return (
    <header className="admin-navbar">
      <div className="admin-search">
        <Icon name="search" size={20} />
        <input type="text" placeholder="Search anything..." />
      </div>

      <div className="admin-navbar-actions">
        <button
          type="button"
          className="admin-notification"
          aria-label="Notifications"
        >
          <Icon name="bell" size={22} />
          <span className="admin-notification-badge">2</span>
        </button>

        <div className="admin-profile">
          <div className="admin-profile-avatar">AD</div>
          <div className="admin-profile-info">
            <strong>Admin User</strong>
            <span>Administrator</span>
          </div>
          <span className="admin-profile-arrow">
            <Icon name="chevron" size={16} />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;