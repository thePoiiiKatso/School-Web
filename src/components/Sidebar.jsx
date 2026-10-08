import Icon from "./Icon";

const adminItems = [
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

const teacherItems = [
  { label: "Dashboard", icon: "home" },
  { label: "My Classes", icon: "book" },
  { label: "Attendance", icon: "check" },
  { label: "Assignments", icon: "clipboard" },
  { label: "Exams", icon: "exam" },
  { label: "Resources", icon: "file" },
  { label: "Messages", icon: "message" },
  { label: "Profile", icon: "user" },
];

function Sidebar({ role = "admin", currentPage, onNavigate }) {
  const isTeacher = role === "teacher";
  const items = isTeacher ? teacherItems : adminItems;
  const className = isTeacher ? "teacher-sidebar" : "admin-sidebar";
  const brandClass = isTeacher ? "teacher-sidebar-brand" : "admin-sidebar-brand";
  const navClass = isTeacher ? "teacher-sidebar-nav" : "admin-sidebar-nav";
  const navItemClass = isTeacher ? "teacher-nav-item" : "admin-nav-item";
  const footerClass = isTeacher ? "teacher-sidebar-footer" : "admin-sidebar-footer";
  const lineClass = isTeacher ? "teacher-sidebar-line" : "admin-sidebar-line";

  return (
    <aside className={className}>
      <div className={brandClass}>
        <img src="/logo.png" alt="Bokamoso jwa Rona School Logo" />
        <div>
          <strong>Bokamoso jwa Rona</strong>
          <span>School Portal</span>
        </div>
      </div>

      <nav className={navClass}>
        {items.map((item) => (
          <button
            type="button"
            key={item.label}
            className={`${navItemClass} ${currentPage === item.label ? "active" : ""}`}
            onClick={() => onNavigate(item.label)}
          >
            <Icon name={item.icon} size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className={footerClass}>
        <div className={lineClass}></div>
        {isTeacher ? (
          <>
            <p>Teach</p>
            <strong>Inspire. Build.</strong>
          </>
        ) : (
          <>
            <p>Better Education</p>
            <strong>Brighter Futures</strong>
          </>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;