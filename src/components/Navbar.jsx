import { useState, useEffect, useRef } from "react";
import Icon from "./Icon";
import "../styles/admin/navbar.css";

function Navbar({ role = "admin", userName, userRole, onSwitchRole, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isTeacher = role === "teacher";

  const displayName = userName || (isTeacher ? "Mr. T. Kgosi" : "Admin User");
  const displayRole = userRole || (isTeacher ? "Teacher" : "Administrator");
  const initials = isTeacher ? "TK" : "AD";
  const profileClass = isTeacher ? "teacher-profile" : "admin-profile";
  const avatarClass = isTeacher ? "teacher-profile-avatar" : "admin-profile-avatar";
  const infoClass = isTeacher ? "teacher-profile-info" : "admin-profile-info";
  const arrowClass = isTeacher ? "teacher-profile-arrow" : "admin-profile-arrow";
  const notifClass = isTeacher ? "teacher-notification" : "admin-notification";
  const notifBadgeClass = isTeacher ? "teacher-notification-badge" : "admin-notification-badge";
  const searchClass = isTeacher ? "teacher-search" : "admin-search";
  const navbarClass = isTeacher ? "teacher-navbar" : "admin-navbar";
  const actionsClass = isTeacher ? "teacher-navbar-actions" : "admin-navbar-actions";

  return (
    <header className={navbarClass}>
      <div className={searchClass}>
        <Icon name="search" size={20} />
        <input
          type="text"
          placeholder={
            isTeacher
              ? "Search classes, students, or resources..."
              : "Search anything..."
          }
        />
      </div>

      <div className={actionsClass}>
        <button type="button" className={notifClass} aria-label="Notifications">
          <Icon name="bell" size={22} />
          <span className={notifBadgeClass}>{isTeacher ? 3 : 2}</span>
        </button>

        <div className="navbar-profile-wrap" ref={menuRef}>
          <div
            className={profileClass}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className={avatarClass}>{initials}</div>
            <div className={infoClass}>
              <strong>{displayName}</strong>
              <span>{displayRole}</span>
            </div>
            <span className={arrowClass}>
              <Icon name="chevron" size={16} />
            </span>
          </div>

          {menuOpen && (
            <div className="navbar-profile-menu">
              <div className="navbar-profile-menu-header">
                <div className={avatarClass}>{initials}</div>
                <div className={infoClass}>
                  <strong>{displayName}</strong>
                  <span>{displayRole}</span>
                </div>
              </div>

              <div className="navbar-profile-menu-divider"></div>

              <button
                type="button"
                className={`navbar-profile-menu-item ${role === "admin" ? "active" : ""}`}
                onClick={() => {
                  setMenuOpen(false);
                  if (onSwitchRole) onSwitchRole("admin");
                }}
              >
                <Icon name="settings" size={16} />
                Admin Portal
              </button>

              <button
                type="button"
                className={`navbar-profile-menu-item ${role === "teacher" ? "active" : ""}`}
                onClick={() => {
                  setMenuOpen(false);
                  if (onSwitchRole) onSwitchRole("teacher");
                }}
              >
                <Icon name="user" size={16} />
                Teacher Portal
              </button>

              <div className="navbar-profile-menu-divider"></div>

              <button
                type="button"
                className="navbar-profile-menu-item danger"
                onClick={() => {
                  setMenuOpen(false);
                  if (onLogout) onLogout();
                }}
              >
                <Icon name="arrow" size={16} />
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;