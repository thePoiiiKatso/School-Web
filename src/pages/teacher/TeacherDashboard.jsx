import Icon from "../../components/Icon";

const myClasses = [
  { id: "c1", code: "M", name: "Mathematics", className: "Grade 6A", time: "07:30 - 08:30", color: "blue" },
  { id: "c2", code: "E", name: "English", className: "Grade 6A", time: "08:40 - 09:40", color: "purple" },
  { id: "c3", code: "S", name: "Science", className: "Grade 6B", time: "10:00 - 11:00", color: "green" },
  { id: "c4", code: "S", name: "Setswana", className: "Grade 6B", time: "11:10 - 12:10", color: "orange" },
];

const schedule = [
  { time: "07:30 - 08:30", subject: "Mathematics", className: "Grade 6A", color: "purple" },
  { time: "08:40 - 09:40", subject: "English", className: "Grade 6A", color: "yellow" },
  { time: "10:00 - 11:00", subject: "Science", className: "Grade 6B", color: "green" },
  { time: "11:10 - 12:10", subject: "Setswana", className: "Grade 6B", color: "orange" },
];

const quickActions = [
  { label: "Add Assignment", icon: "plus" },
  { label: "View My Classes", icon: "book" },
  { label: "Message Students", icon: "message" },
  { label: "Upload Resources", icon: "file" },
];

function TeacherDashboard() {
  return (
    <>
      <section className="teacher-welcome">
        <div className="teacher-welcome-text">
          <h1>Good morning, Mr. Kgosi</h1>
          <p>Great teachers don't just teach subjects, they build brighter futures.</p>
        </div>
        <img src="/students1.jpg" alt="Bokamoso jwa Rona" className="teacher-welcome-image" />
      </section>

      <section className="teacher-mini-stats">
        <div className="teacher-mini-stat blue">
          <div className="teacher-mini-stat-icon"><Icon name="book" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>My Classes</span>
            <strong>4</strong>
            <small>Today's classes</small>
          </div>
        </div>
        <div className="teacher-mini-stat green">
          <div className="teacher-mini-stat-icon"><Icon name="users" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Total Students</span>
            <strong>124</strong>
            <small>Across my classes</small>
          </div>
        </div>
        <div className="teacher-mini-stat purple">
          <div className="teacher-mini-stat-icon"><Icon name="clipboard" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Pending Assignments</span>
            <strong>8</strong>
            <small>To be graded</small>
          </div>
        </div>
        <div className="teacher-mini-stat yellow">
          <div className="teacher-mini-stat-icon"><Icon name="calendar" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Today's Lessons</span>
            <strong>4</strong>
            <small>Classes scheduled</small>
          </div>
        </div>
      </section>

      <div className="teacher-dashboard-grid">
        <div className="teacher-dashboard-left">
          <div className="teacher-card">
            <div className="teacher-card-header">
              <div className="teacher-card-title">
                <div className="teacher-card-title-icon"><Icon name="book" size={18} /></div>
                <h2>My Classes</h2>
              </div>
              <button type="button" className="teacher-view-all">
                View All
                <Icon name="arrow" size={14} />
              </button>
            </div>

            <div className="teacher-class-list">
              {myClasses.map((cls) => (
                <div className="teacher-class-row" key={cls.id}>
                  <div className={`teacher-class-icon ${cls.color}`}>{cls.code}</div>
                  <div className="teacher-class-info">
                    <strong>{cls.name}</strong>
                    <span>{cls.className} &middot; {cls.time}</span>
                  </div>
                  <button type="button" className="teacher-class-view">View Class</button>
                </div>
              ))}
            </div>
          </div>

          <div className="teacher-quote-card">
            <div>
              <p>"Small steps in the classroom create big changes in life."</p>
              <span>- Unknown</span>
            </div>
            <div className="teacher-quote-icon">
              <Icon name="book" size={36} />
            </div>
          </div>

          <div className="teacher-card">
            <div className="teacher-card-header">
              <div className="teacher-card-title">
                <div className="teacher-card-title-icon"><Icon name="chart" size={18} /></div>
                <h2>Today's Overview</h2>
              </div>
            </div>
            <div className="teacher-overview-grid">
              <div className="teacher-overview-tile blue">
                <div className="teacher-overview-icon"><Icon name="book" size={16} /></div>
                <strong>4</strong>
                <span>Classes</span>
              </div>
              <div className="teacher-overview-tile green">
                <div className="teacher-overview-icon"><Icon name="users" size={16} /></div>
                <strong>124</strong>
                <span>Students</span>
              </div>
              <div className="teacher-overview-tile purple">
                <div className="teacher-overview-icon"><Icon name="clipboard" size={16} /></div>
                <strong>8</strong>
                <span>Assignments</span>
              </div>
              <div className="teacher-overview-tile yellow">
                <div className="teacher-overview-icon"><Icon name="message" size={16} /></div>
                <strong>0</strong>
                <span>Messages</span>
              </div>
            </div>
          </div>
        </div>

        <div className="teacher-dashboard-right">
          <div className="teacher-card">
            <div className="teacher-card-header">
              <div className="teacher-card-title">
                <div className="teacher-card-title-icon"><Icon name="clock" size={18} /></div>
                <h2>Today's Schedule</h2>
              </div>
              <button type="button" className="teacher-view-all">
                Full Schedule
                <Icon name="arrow" size={14} />
              </button>
            </div>

            <div className="teacher-schedule-list">
              {schedule.map((item, index) => (
                <div className="teacher-schedule-row" key={index}>
                  <span className={`teacher-schedule-dot ${item.color}`}></span>
                  <span className="teacher-schedule-time">{item.time}</span>
                  <div className="teacher-schedule-info">
                    <strong>{item.subject}</strong>
                    <span>{item.className}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="teacher-card">
            <div className="teacher-card-header">
              <div className="teacher-card-title">
                <div className="teacher-card-title-icon"><Icon name="lightning" size={18} /></div>
                <h2>Quick Actions</h2>
              </div>
            </div>
            <div className="teacher-quick-actions">
              {quickActions.map((action) => (
                <button type="button" className="teacher-quick-item" key={action.label}>
                  <div className="teacher-quick-item-icon">
                    <Icon name={action.icon} size={15} />
                  </div>
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="teacher-keep-going">
            <div className="teacher-keep-going-icon">
              <Icon name="check" size={20} />
            </div>
            <div>
              <strong>Keep going!</strong>
              <span>Your work makes a difference every day.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherDashboard;