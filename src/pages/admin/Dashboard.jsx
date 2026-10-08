import Icon from "../../components/Icon";

const stats = [
  { label: "Total Students", value: "248", foot: "+ 5 this term", color: "blue", icon: "users" },
  { label: "Total Teachers", value: "18", foot: "+ 2 this term", color: "green", icon: "user" },
  { label: "Total Parents", value: "220", foot: "+ 8 this term", color: "purple", icon: "users" },
  { label: "Total Classes", value: "12", foot: "Across all grades", color: "yellow", icon: "book" },
  { label: "Subjects", value: "8", foot: "Core subjects", color: "orange", icon: "file" },
];

const activities = [
  { time: "09:24 AM", title: "New student registered", role: "Admin", detail: "Thabo Mokoena (Grade 6A)", color: "blue", icon: "users" },
  { time: "08:50 AM", title: "Attendance updated", role: "Teacher", detail: "Grade 6B - 12 learners", color: "green", icon: "check" },
  { time: "08:32 AM", title: "Results published", role: "Teacher", detail: "Mathematics - Grade 6A", color: "purple", icon: "chart" },
  { time: "08:15 AM", title: "New parent registered", role: "Admin", detail: "Lerato Molefe", color: "yellow", icon: "users" },
  { time: "07:45 AM", title: "New announcement", role: "Admin", detail: "School fees reminder", color: "orange", icon: "megaphone" },
];

const quickActions = [
  { label: "Add Student", icon: "users", color: "blue" },
  { label: "Add Teacher", icon: "user", color: "green" },
  { label: "Create Class", icon: "book", color: "purple" },
  { label: "Add Parent", icon: "users", color: "yellow" },
  { label: "Post Announcement", icon: "megaphone", color: "orange" },
  { label: "Manage Events", icon: "calendar", color: "cyan" },
];

const events = [
  { day: "15", month: "May", title: "Parent-Teacher Meeting", location: "Main Hall", color: "purple", icon: "users" },
  { day: "22", month: "May", title: "Inter-House Sports Day", location: "School Grounds", color: "blue", icon: "check" },
  { day: "30", month: "May", title: "Grade 7B Prize Giving", location: "School Hall", color: "orange", icon: "megaphone" },
];

const announcements = [
  { title: "School fees reminder", date: "25 Apr 2025", color: "red", icon: "megaphone" },
  { title: "Parent-Teacher Meeting", date: "15 May 2025", color: "yellow", icon: "users" },
  { title: "School will be closed", date: "30 Apr 2025", color: "blue", icon: "calendar" },
];

const calendarDays = [
  "", "", 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, "", "", "",
];

const calendarEvents = [15, 22];
const calendarToday = 8;

function AdminDashboard() {
  return (
    <>
      <section className="admin-welcome">
        <div className="admin-welcome-text">
          <span>Good morning,</span>
          <h1>Admin User</h1>
          <p>
            Welcome to Bokamoso jwa Rona School Portal. Manage your
            school, students, teachers and everything that keeps it
            running smoothly.
          </p>
        </div>
        <img
          src="/students1.jpg"
          alt="Bokamoso jwa Rona School"
          className="admin-welcome-image"
        />
      </section>

      <section className="admin-stats-grid">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`admin-stat-card ${stat.color}`}
          >
            <div className="admin-stat-icon">
              <Icon name={stat.icon} size={22} />
            </div>
            <span className="admin-stat-label">{stat.label}</span>
            <strong className="admin-stat-value">{stat.value}</strong>
            <span className="admin-stat-foot">{stat.foot}</span>
          </div>
        ))}
      </section>

      <section className="admin-main-grid">
        <div className="admin-main-column">
          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon">
                  <Icon name="clock" size={18} />
                </div>
                <h2>Recent Activity</h2>
              </div>
              <button type="button" className="admin-view-all">
                View All
                <Icon name="arrow" size={14} />
              </button>
            </div>

            <div className="admin-activity-table">
              <div className="activity-head-row">
                <span>Time</span>
                <span>Activity</span>
                <span>By</span>
                <span>Details</span>
              </div>

              {activities.map((activity, index) => (
                <div className="activity-table-row" key={index}>
                  <span className="activity-time">{activity.time}</span>
                  <div className="activity-title-cell">
                    <div className={`activity-icon ${activity.color}`}>
                      <Icon name={activity.icon} size={16} />
                    </div>
                    <span>{activity.title}</span>
                  </div>
                  <span className="activity-role">{activity.role}</span>
                  <span className="activity-detail">{activity.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon">
                  <Icon name="lightning" size={18} />
                </div>
                <h2>Quick Actions</h2>
              </div>
            </div>

            <div className="quick-actions-grid">
              {quickActions.map((action) => (
                <button
                  type="button"
                  key={action.label}
                  className={`quick-action ${action.color}`}
                >
                  <div className="quick-action-icon">
                    <Icon name={action.icon} size={20} />
                  </div>
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="admin-side-column">
          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon">
                  <Icon name="calendar" size={18} />
                </div>
                <h2>School Calendar</h2>
              </div>
            </div>

            <div className="admin-calendar">
              <div className="calendar-head">
                <span>April 2025</span>
                <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>
                  Today
                </span>
              </div>

              <div className="calendar-grid">
                <span className="calendar-day-label">Mon</span>
                <span className="calendar-day-label">Tue</span>
                <span className="calendar-day-label">Wed</span>
                <span className="calendar-day-label">Thu</span>
                <span className="calendar-day-label">Fri</span>
                <span className="calendar-day-label">Sat</span>
                <span className="calendar-day-label">Sun</span>

                {calendarDays.map((day, index) => {
                  if (day === "") {
                    return <span key={index}></span>;
                  }
                  const isToday = day === calendarToday;
                  const isEvent = calendarEvents.includes(day);
                  const classes = `calendar-day ${isToday ? "today" : ""} ${isEvent ? "event" : ""}`;
                  return (
                    <span key={index} className={classes}>
                      {day}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon">
                  <Icon name="calendar" size={18} />
                </div>
                <h2>Upcoming Events</h2>
              </div>
              <button type="button" className="admin-view-all">
                View All
                <Icon name="arrow" size={14} />
              </button>
            </div>

            <div className="event-list">
              {events.map((event) => (
                <div className="event-item" key={event.title}>
                  <div className="event-date">
                    <strong>{event.day}</strong>
                    <span>{event.month}</span>
                  </div>
                  <div className="event-info">
                    <strong>{event.title}</strong>
                    <span>{event.location}</span>
                  </div>
                  <div className={`event-item-icon ${event.color}`}>
                    <Icon name={event.icon} size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon">
                  <Icon name="megaphone" size={18} />
                </div>
                <h2>Latest Announcements</h2>
              </div>
              <button type="button" className="admin-view-all">
                View All
                <Icon name="arrow" size={14} />
              </button>
            </div>

            <div className="announcement-list">
              {announcements.map((item) => (
                <div className="announcement-item" key={item.title}>
                  <div className={`announcement-item-icon ${item.color}`}>
                    <Icon name={item.icon} size={16} />
                  </div>
                  <div className="announcement-item-text">
                    <strong>{item.title}</strong>
                    <span>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-brand-card">
            <img src="/logo.png" alt="Bokamoso jwa Rona" />
            <strong>Bokamoso jwa Rona</strong>
            <div className="admin-brand-accent"></div>
            <span>Together we build better learners</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminDashboard;