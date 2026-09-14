import React, { useState } from "react";
import "../../styles/dashboard.css";
import Classes from "./Classes";

const navigation = [
  { label: "Dashboard", icon: "home" },
  { label: "My Classes", icon: "book" },
  { label: "Timetable", icon: "calendar" },
  { label: "Attendance", icon: "check" },
  { label: "Assignments", icon: "file" },
  { label: "Exams", icon: "exam" },
  { label: "Results", icon: "results" },
  { label: "Announcements", icon: "megaphone", badge: 2 },
  { label: "Messages", icon: "message" },
  { label: "Profile", icon: "user" },
  { label: "Settings", icon: "settings" },
];

const timetable = [
  {
    time: "08:00 - 09:00",
    subject: "Mathematics",
    room: "Room 12",
    status: "Ongoing",
    color: "purple",
  },
  {
    time: "09:15 - 10:15",
    subject: "English",
    room: "Room 8",
    status: "Upcoming",
    color: "cyan",
  },
  {
    time: "10:30 - 11:30",
    subject: "Life Orientation",
    room: "Room 6",
    status: "Upcoming",
    color: "yellow",
  },
  {
    time: "12:00 - 13:00",
    subject: "Science",
    room: "Room 14",
    status: "Upcoming",
    color: "blue",
  },
  {
    time: "13:30 - 14:30",
    subject: "Setswana",
    room: "Room 10",
    status: "Upcoming",
    color: "orange",
  },
  {
    time: "14:45 - 15:45",
    subject: "History",
    room: "Room 11",
    status: "Upcoming",
    color: "green",
  },
];

const assignments = [
  {
    subject: "Mathematics",
    title: "Algebra Worksheet",
    due: "Due: 28 Apr 2025",
    status: "Due Soon",
    color: "purple",
  },
  {
    subject: "English",
    title: "Essay: My Community",
    due: "Due: 30 Apr 2025",
    status: "Not Started",
    color: "green",
  },
  {
    subject: "Life Orientation",
    title: "Project",
    due: "Due: 2 May 2025",
    status: "In Progress",
    color: "yellow",
  },
];

const announcements = [
  {
    title: "School Fees Reminder",
    text: "Please ensure that all school fees are paid before the end of this month...",
    date: "Apr 28",
    color: "red",
  },
  {
    title: "Inter-House Sports Day",
    text: "The inter-house sports day will be held on 15 May 2025. All students are encouraged...",
    date: "Apr 26",
    color: "yellow",
  },
  {
    title: "Exam Schedule Released",
    text: "The mid-term exam timetable is now available on the portal. Kindly check your class...",
    date: "Apr 24",
    color: "green",
  },
];

const events = [
  {
    day: "15",
    month: "May",
    title: "Inter-House Sports Day",
    details: "School Ground • 08:00 AM",
    color: "purple",
  },
  {
    day: "22",
    month: "May",
    title: "Parent-Teacher Meeting",
    details: "Main Hall • 02:00 PM",
    color: "blue",
  },
  {
    day: "30",
    month: "May",
    title: "End of Term 2",
    details: "School • All Day",
    color: "green",
  },
];

function Icon({ name, size = 22 }) {
  const paths = {
    home: (
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9.5V21h13V9.5" />
        <path d="M9.5 21v-6h5v6" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
        <path d="M4 5.5v16" />
        <path d="M8 7h8" />
        <path d="M8 11h7" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
        <path d="M8 14h3M13 14h3M8 18h3" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    file: (
      <>
        <path d="M6 3h8l5 5v13H6z" />
        <path d="M14 3v6h5M9 13h6M9 17h6" />
      </>
    ),
    exam: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
    results: (
      <>
        <path d="M5 20V10M12 20V4M19 20v-7" />
      </>
    ),
    megaphone: (
      <>
        <path d="m4 11 13-5v12L4 14z" />
        <path d="M17 10.5h3a2 2 0 0 1 0 4h-3" />
        <path d="m7 15 2 5" />
      </>
    ),
    message: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.1h-2.6v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.5-1H6.4v-2.6h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.1h2.6v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1V14h-.1a1.7 1.7 0 0 0-1.5 1Z" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    bell: (
      <>
        <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    lightning: (
      <>
        <path d="m13 2-9 12h7l-1 8 9-12h-7z" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function Dashboard() {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const handleNavigation = (label) => {
    if (label === "Dashboard" || label === "My Classes") {
      setCurrentPage(label);
    }
  };

  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar">
        <div className="sidebar-brand">
          <img
            src="/logo.png"
            alt="Bokamoso jwa Rona School Logo"
          />

          <div>
            <strong>Bokamoso jwa Rona</strong>
            <span>School Portal</span>
          </div>
        </div>

        <nav className="dashboard-navigation">
          {navigation.map((item) => (
            <button
              type="button"
              key={item.label}
              className={`navigation-item ${
                currentPage === item.label ? "active" : ""
              }`}
              onClick={() => handleNavigation(item.label)}
            >
              <Icon name={item.icon} size={21} />
              <span>{item.label}</span>

              {item.badge && (
                <span className="navigation-badge">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-line"></div>
          <p>Learning Today</p>
          <strong>Building Tomorrow</strong>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="search-box">
            <Icon name="search" size={20} />
            <input
              type="text"
              placeholder="Search anything..."
            />
          </div>

          <div className="header-actions">
            <button
              type="button"
              className="notification-button"
              aria-label="Notifications"
            >
              <Icon name="bell" size={23} />
              <span>2</span>
            </button>

            <div className="profile-mini">
              <div className="profile-avatar">
                TM
              </div>

              <div className="profile-mini-info">
                <strong>Thabo Molefe</strong>
                <span>Student</span>
              </div>

              <span className="profile-arrow">
                ˅
              </span>
            </div>
          </div>
        </header>

        {currentPage === "My Classes" ? (
          <Classes />
        ) : (
          <>
            <section className="welcome-banner">
              <div className="welcome-content">
                <span className="welcome-small">
                  Welcome back,
                </span>

                <h1>Thabo Molefe</h1>

                <p>
                  Here's your school overview for today.
                </p>
              </div>
            </section>

            <section className="summary-grid">
              <div className="summary-card classes-card">
                <div className="summary-icon">
                  <Icon name="book" size={27} />
                </div>

                <div className="summary-content">
                  <span>My Classes</span>
                  <strong>6</strong>

                  <button
                    type="button"
                    onClick={() => setCurrentPage("My Classes")}
                  >
                    View my classes
                    <Icon name="arrow" size={16} />
                  </button>
                </div>
              </div>

              <div className="summary-card attendance-card">
                <div className="summary-icon">
                  <Icon name="calendar" size={27} />
                </div>

                <div className="summary-content">
                  <span>Attendance</span>
                  <strong>94%</strong>

                  <small>↑ 2% from last week</small>
                </div>
              </div>

              <div className="summary-card assignments-card">
                <div className="summary-icon">
                  <Icon name="file" size={27} />
                </div>

                <div className="summary-content">
                  <span>Assignments</span>
                  <strong>3</strong>

                  <button type="button">
                    View assignments
                    <Icon name="arrow" size={16} />
                  </button>
                </div>
              </div>

              <div className="summary-card results-card">
                <div className="summary-icon">
                  <Icon name="results" size={27} />
                </div>

                <div className="summary-content">
                  <span>Results</span>
                  <strong>78%</strong>

                  <small>↑ 5% from last term</small>

                  <button type="button">
                    View results
                    <Icon name="arrow" size={16} />
                  </button>
                </div>
              </div>
            </section>

            <section className="dashboard-grid">
              <div className="dashboard-column large-column">
                <div className="dashboard-card timetable-card">
                  <div className="card-header">
                    <div className="card-title">
                      <Icon name="calendar" size={23} />
                      <h2>Today's Timetable</h2>
                    </div>

                    <div className="date-selector">
                      Monday, 28 April 2025
                      <span>‹</span>
                      <span>›</span>
                    </div>
                  </div>

                  <div className="timetable-list">
                    {timetable.map((item) => (
                      <div
                        className="timetable-row"
                        key={item.time}
                      >
                        <div
                          className={`time-marker ${item.color}`}
                        ></div>

                        <div className="lesson-time">
                          {item.time}
                        </div>

                        <div className="lesson-info">
                          <strong>{item.subject}</strong>
                          <span>{item.room}</span>
                        </div>

                        <span
                          className={`lesson-status ${
                            item.status === "Ongoing"
                              ? "ongoing"
                              : ""
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="quote-card">
                  <div>
                    <span>—</span>

                    <p>
                      Discipline today
                      <br />
                      builds success tomorrow.
                    </p>
                  </div>

                  <img
                    src="/student6.jpg"
                    alt="Students studying"
                  />
                </div>
              </div>

              <div className="dashboard-column middle-column">
                <div className="dashboard-card assignments-panel">
                  <div className="card-header">
                    <div className="card-title">
                      <Icon name="file" size={22} />
                      <h2>Recent Assignments</h2>
                    </div>

                    <button
                      type="button"
                      className="view-all"
                    >
                      View all
                      <Icon name="arrow" size={15} />
                    </button>
                  </div>

                  <div className="assignment-list">
                    {assignments.map((assignment) => (
                      <div
                        className="assignment-row"
                        key={assignment.title}
                      >
                        <div
                          className={`assignment-icon ${assignment.color}`}
                        >
                          <Icon name="file" size={18} />
                        </div>

                        <div className="assignment-info">
                          <strong>{assignment.subject}</strong>
                          <span>{assignment.title}</span>
                          <small>{assignment.due}</small>
                        </div>

                        <span
                          className={`assignment-status ${assignment.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {assignment.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="dashboard-card quick-links">
                  <div className="card-header">
                    <div className="card-title">
                      <Icon name="lightning" size={22} />
                      <h2>Quick Links</h2>
                    </div>
                  </div>

                  <div className="quick-link-grid">
                    <button
                      type="button"
                      className="quick-link purple"
                    >
                      <Icon name="file" size={21} />
                      <span>Submit Assignment</span>
                    </button>

                    <button
                      type="button"
                      className="quick-link green"
                    >
                      <Icon name="results" size={21} />
                      <span>Check Results</span>
                    </button>

                    <button
                      type="button"
                      className="quick-link blue"
                    >
                      <Icon name="calendar" size={21} />
                      <span>View Timetable</span>
                    </button>

                    <button
                      type="button"
                      className="quick-link red"
                    >
                      <Icon name="message" size={21} />
                      <span>Messages</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="dashboard-column right-column">
                <div className="dashboard-card announcements-panel">
                  <div className="card-header">
                    <div className="card-title">
                      <Icon name="megaphone" size={22} />
                      <h2>Announcements</h2>
                    </div>

                    <button
                      type="button"
                      className="view-all"
                    >
                      View all
                      <Icon name="arrow" size={15} />
                    </button>
                  </div>

                  <div className="announcement-list">
                    {announcements.map((announcement) => (
                      <div
                        className="announcement-row"
                        key={announcement.title}
                      >
                        <span
                          className={`announcement-dot ${announcement.color}`}
                        ></span>

                        <div className="announcement-info">
                          <strong>{announcement.title}</strong>
                          <p>{announcement.text}</p>
                        </div>

                        <time>{announcement.date}</time>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="dashboard-card events-panel">
                  <div className="card-header">
                    <div className="card-title">
                      <Icon name="calendar" size={21} />
                      <h2>Upcoming Events</h2>
                    </div>

                    <button
                      type="button"
                      className="view-all"
                    >
                      View all
                      <Icon name="arrow" size={15} />
                    </button>
                  </div>

                  <div className="event-list">
                    {events.map((event) => (
                      <div
                        className="event-row"
                        key={event.title}
                      >
                        <div
                          className={`event-date ${event.color}`}
                        >
                          <strong>{event.day}</strong>
                          <span>{event.month}</span>
                        </div>

                        <div className="event-info">
                          <strong>{event.title}</strong>
                          <span>{event.details}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default Dashboard;