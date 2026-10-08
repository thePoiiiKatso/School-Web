import Icon from "./Icon";

const navigationItems = [
  { label: "Dashboard", icon: "home" },
  { label: "Students", icon: "users" },
  { label: "Teachers", icon: "user" },
  { label: "Parents", icon: "users" },
  { label: "Classes", icon: "book" },
  { label: "Subjects", icon: "file" },
  { label: "Attendance", icon: "check" },
  { label: "Assignments", icon: "clipboard" },
  { label: "Exams", icon: "exam" },
  { label: "Results", icon: "chart" },
  { label: "Announcements", icon: "megaphone" },
  { label: "Events", icon: "calendar" },
  { label: "Messages", icon: "message" },
  { label: "Settings", icon: "settings" },
];

function Sidebar({ currentPage, onNavigate }) {
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-brand">
        <img src="/logo.png" alt="Bokamoso jwa Rona School Logo" />
        <div>
          <strong>Bokamoso jwa Rona</strong>
          <span>School Portal</span>
        </div>
      </div>

      <nav className="admin-sidebar-nav">
        {navigationItems.map((item) => (
          <button
            type="button"
            key={item.label}
            className={`admin-nav-item ${
              currentPage === item.label ? "active" : ""
            }`}
            onClick={() => onNavigate(item.label)}
          >
            <Icon name={item.icon} size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="admin-sidebar-footer">
        <div className="admin-sidebar-line"></div>
        <p>Better Education</p>
        <strong>Brighter Futures</strong>
      </div>
    </aside>
  );
}

export default Sidebar;