import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/admin/events.css";

const events = [
  {
    id: "EV-001",
    day: "15",
    month: "May",
    title: "Parent-Teacher Meeting",
    location: "Main Hall",
    time: "18:00 - 20:00",
    type: "Meeting",
    color: "purple",
    description: "Termly meeting between parents and teachers to discuss student progress and upcoming exams.",
  },
  {
    id: "EV-002",
    day: "22",
    month: "May",
    title: "Inter-House Sports Day",
    location: "School Grounds",
    time: "08:00 - 16:00",
    type: "Sports",
    color: "green",
    description: "Annual inter-house sports competition. All students participate in their house colours.",
  },
  {
    id: "EV-003",
    day: "30",
    month: "May",
    title: "Grade 7B Prize Giving",
    location: "School Hall",
    time: "14:00 - 16:00",
    type: "Academic",
    color: "blue",
    description: "Award ceremony for academic excellence and outstanding performance in Term 2.",
  },
  {
    id: "EV-004",
    day: "05",
    month: "Jun",
    title: "Science Fair",
    location: "School Hall",
    time: "09:00 - 13:00",
    type: "Academic",
    color: "orange",
    description: "Students present their science projects. Open to parents and the wider community.",
  },
  {
    id: "EV-005",
    day: "16",
    month: "Jun",
    title: "Youth Day Celebration",
    location: "School Grounds",
    time: "10:00 - 14:00",
    type: "Culture",
    color: "pink",
    description: "Cultural performances, speeches and activities in celebration of Youth Day.",
  },
  {
    id: "EV-006",
    day: "28",
    month: "Jun",
    title: "Term 2 Ends",
    location: "All Classes",
    time: "13:00",
    type: "Holiday",
    color: "yellow",
    description: "Last day of Term 2. Report cards will be issued to all students.",
  },
];

const types = ["All Types", "Academic", "Sports", "Meeting", "Holiday", "Culture"];
const statuses = ["All Statuses", "Upcoming", "Past"];

const typeColors = {
  Sports: "sports",
  Academic: "academic",
  Meeting: "meeting",
  Holiday: "holiday",
  Culture: "culture",
};

function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  const filtered = events.filter((e) => {
    const matchesSearch = e.title.toLowerCase().includes(searchTerm.toLowerCase()) || e.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "All Types" || e.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const highlight = filtered[0] || events[0];

  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon"><Icon name="calendar" size={26} /></div>
          <div>
            <div className="admin-breadcrumb"><span>Dashboard</span><span>/</span><span>Events</span></div>
            <h1>Events</h1>
            <p>Manage school events, meetings and important dates.</p>
          </div>
        </div>
        <img src="/students2.jpg" alt="Events" className="admin-page-header-image" />
      </section>

      <section className="admin-mini-stats admin-mini-stats-4">
        <div className="admin-mini-stat blue">
          <div className="admin-mini-stat-icon"><Icon name="calendar" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Total Events</span>
            <strong>18</strong>
            <small>+ 3 this term</small>
          </div>
        </div>
        <div className="admin-mini-stat green">
          <div className="admin-mini-stat-icon"><Icon name="check" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>This Month</span>
            <strong>6</strong>
            <small>33% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat purple">
          <div className="admin-mini-stat-icon"><Icon name="clock" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Upcoming</span>
            <strong>9</strong>
            <small>50% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat yellow">
          <div className="admin-mini-stat-icon"><Icon name="file" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Past</span>
            <strong>3</strong>
            <small>17% of total</small>
          </div>
        </div>
      </section>

      <div className="admin-events-layout">
        <div className="admin-events-main">
          <div className="admin-toolbar">
            <div className="admin-toolbar-search">
              <Icon name="search" size={18} />
              <input
                type="text"
                placeholder="Search events by title or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select className="admin-toolbar-select" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>
            <select className="admin-toolbar-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              {statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
            <button type="button" className="admin-add-button">
              <Icon name="plus" size={16} />
              Create Event
            </button>
          </div>

          <div className="admin-event-list">
            {filtered.map((e) => (
              <div className="admin-event-card" key={e.id}>
                <div className={`admin-event-date ${e.color}`}>
                  <strong>{e.day}</strong>
                  <span>{e.month}</span>
                </div>

                <div className="admin-event-info">
                  <h3>{e.title}</h3>
                  <div className="admin-event-meta">
                    <span><Icon name="pin" size={12} /> {e.location}</span>
                    <span><Icon name="clock" size={12} /> {e.time}</span>
                  </div>
                </div>

                <span className={`admin-event-type ${typeColors[e.type]}`}>{e.type}</span>

                <div className="admin-event-actions">
                  <button type="button" className="admin-icon-button"><Icon name="edit" size={15} /></button>
                  <button type="button" className="admin-icon-button danger"><Icon name="trash" size={15} /></button>
                  <button type="button" className="admin-action-dots">...</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-events-side">
          <div className="admin-highlight-card">
            <div className={`admin-highlight-header ${highlight.color}`}>
              <span className="next-event-label">
                <Icon name="calendar" size={12} /> Next Event
              </span>
              <h3>{highlight.title}</h3>
              <p className="date">{highlight.day} {highlight.month} &middot; {highlight.time}</p>
            </div>
            <div className="admin-highlight-body">
              <div className="admin-highlight-info-row">
                <div className="admin-highlight-info-icon"><Icon name="pin" size={14} /></div>
                <span>{highlight.location}</span>
              </div>
              <div className="admin-highlight-info-row">
                <div className="admin-highlight-info-icon"><Icon name="clock" size={14} /></div>
                <span>{highlight.time}</span>
              </div>
              <p className="admin-highlight-description">{highlight.description}</p>
              <button type="button" className="admin-view-details-btn">
                View Event
                <Icon name="arrow" size={14} />
              </button>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="lightning" size={16} /></div>
                <h2>Quick Actions</h2>
              </div>
            </div>
            <div className="admin-quick-list">
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="plus" size={15} /></div>
                <span>Create Event</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="calendar" size={15} /></div>
                <span>Manage Calendar</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="users" size={15} /></div>
                <span>Invite Parents</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="file" size={15} /></div>
                <span>Event Templates</span>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <h2>May 2025</h2>
              </div>
            </div>
            <div className="admin-calendar">
              <div className="calendar-grid">
                <span className="calendar-day-label">Su</span>
                <span className="calendar-day-label">Mo</span>
                <span className="calendar-day-label">Tu</span>
                <span className="calendar-day-label">We</span>
                <span className="calendar-day-label">Th</span>
                <span className="calendar-day-label">Fr</span>
                <span className="calendar-day-label">Sa</span>
                {["", "", "", "", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"].map((d, i) => {
                  if (d === "") return <span key={i}></span>;
                  const isEvent = d === "15" || d === "22" || d === "30";
                  return (
                    <span key={i} className={`calendar-day ${isEvent ? "event" : ""}`}>
                      {d}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;