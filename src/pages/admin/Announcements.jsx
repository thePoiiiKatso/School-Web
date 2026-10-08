import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/admin/announcements.css";

const announcements = [
  {
    id: "AN-001",
    priority: "High",
    title: "School Fees Reminder",
    body: "Please ensure all outstanding school fees are paid before the end of April. Contact the office for payment plans.",
    audiences: ["All", "Parents"],
    date: "25 Apr 2025",
    author: "Admin Office",
    color: "red",
  },
  {
    id: "AN-002",
    priority: "Normal",
    title: "Parent-Teacher Meeting",
    body: "The termly Parent-Teacher Meeting will be held on 15 May 2025 at 18:00 in the Main Hall.",
    audiences: ["Parents", "Teachers"],
    date: "15 May 2025",
    author: "Principal",
    color: "blue",
  },
  {
    id: "AN-003",
    priority: "High",
    title: "Exam Timetable Released",
    body: "The mid-year examination timetable is now available. Students should check their exam dates and venues.",
    audiences: ["Students", "Parents", "Teachers"],
    date: "22 Apr 2025",
    author: "Academic Office",
    color: "yellow",
  },
  {
    id: "AN-004",
    priority: "Low",
    title: "Inter-House Sports Day",
    body: "The Inter-House Sports Day will take place on 22 May 2025. All students are encouraged to participate.",
    audiences: ["All"],
    date: "20 Apr 2025",
    author: "Sports Department",
    color: "green",
  },
  {
    id: "AN-005",
    priority: "Normal",
    title: "Library Closed for Maintenance",
    body: "The school library will be closed on 26 April 2025 for routine maintenance. Normal service resumes on Monday.",
    audiences: ["All"],
    date: "18 Apr 2025",
    author: "Admin Office",
    color: "blue",
  },
];

const categories = ["All Categories", "Fees", "Academics", "Events", "Sports", "General"];
const statuses = ["All Statuses", "Published", "Draft", "Scheduled"];

const initials = (name) =>
  name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();

function Announcements() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  const filtered = announcements.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlight = filtered[0] || announcements[0];

  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon"><Icon name="megaphone" size={26} /></div>
          <div>
            <div className="admin-breadcrumb"><span>Dashboard</span><span>/</span><span>Announcements</span></div>
            <h1>Announcements</h1>
            <p>Post and manage school-wide notices and updates.</p>
          </div>
        </div>
        <img src="/students1.jpg" alt="Announcements" className="admin-page-header-image" />
      </section>

      <section className="admin-mini-stats admin-mini-stats-4">
        <div className="admin-mini-stat blue">
          <div className="admin-mini-stat-icon"><Icon name="megaphone" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Total</span>
            <strong>24</strong>
            <small>+ 3 this month</small>
          </div>
        </div>
        <div className="admin-mini-stat green">
          <div className="admin-mini-stat-icon"><Icon name="check" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Published</span>
            <strong>18</strong>
            <small>75% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat purple">
          <div className="admin-mini-stat-icon"><Icon name="file" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Drafts</span>
            <strong>4</strong>
            <small>17% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat yellow">
          <div className="admin-mini-stat-icon"><Icon name="clock" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Scheduled</span>
            <strong>2</strong>
            <small>8% of total</small>
          </div>
        </div>
      </section>

      <div className="admin-announcements-layout">
        <div className="admin-announcements-main">
          <div className="admin-toolbar">
            <div className="admin-toolbar-search">
              <Icon name="search" size={18} />
              <input
                type="text"
                placeholder="Search announcements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select className="admin-toolbar-select" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select className="admin-toolbar-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              {statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
            <button type="button" className="admin-add-button">
              <Icon name="plus" size={16} />
              New Announcement
            </button>
          </div>

          <div className="admin-announcement-list">
            {filtered.map((a) => (
              <div className="admin-announcement-card" key={a.id}>
                <div className="admin-announcement-card-top">
                  <span className={`admin-priority-pill ${a.priority.toLowerCase()}`}>{a.priority}</span>
                  {a.audiences.map((aud) => (
                    <span className="admin-audience-tag" key={aud}>{aud}</span>
                  ))}
                  <time>{a.date}</time>
                </div>

                <h3>{a.title}</h3>
                <p>{a.body}</p>

                <div className="admin-announcement-card-footer">
                  <div className="admin-announcement-author">
                    <div className="admin-announcement-author-avatar">{initials(a.author)}</div>
                    <span>{a.author}</span>
                  </div>
                  <div className="admin-row-actions">
                    <button type="button" className="admin-icon-button"><Icon name="edit" size={15} /></button>
                    <button type="button" className="admin-icon-button danger"><Icon name="trash" size={15} /></button>
                    <button type="button" className="admin-action-dots">...</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-announcements-side">
          <div className="admin-highlight-card">
            <div className={`admin-highlight-header ${highlight.color}`}>
              <span><Icon name="megaphone" size={12} /> Latest</span>
              <h3>{highlight.title}</h3>
            </div>
            <div className="admin-highlight-body">
              <p>{highlight.body}</p>
              <span className="admin-highlight-date">
                <Icon name="calendar" size={13} />
                {highlight.date}
              </span>
              <button type="button" className="admin-view-details-btn">
                Read Full Announcement
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
                <span>New Announcement</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="book" size={15} /></div>
                <span>Manage Categories</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="message" size={15} /></div>
                <span>Sent Announcements</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="file" size={15} /></div>
                <span>View Drafts</span>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="clock" size={16} /></div>
                <h2>Scheduled</h2>
              </div>
              <button type="button" className="admin-view-all">View All <Icon name="arrow" size={14} /></button>
            </div>
            <div className="admin-scheduled-list">
              <div className="admin-scheduled-item">
                <div className="admin-scheduled-date">
                  <strong>28</strong>
                  Apr
                </div>
                <div className="admin-scheduled-text">
                  <strong>Mid-Term Break Notice</strong>
                  <span>Parents, Students</span>
                </div>
              </div>
              <div className="admin-scheduled-item">
                <div className="admin-scheduled-date">
                  <strong>01</strong>
                  May
                </div>
                <div className="admin-scheduled-text">
                  <strong>Workers' Day Holiday</strong>
                  <span>All</span>
                </div>
              </div>
              <div className="admin-scheduled-item">
                <div className="admin-scheduled-date">
                  <strong>10</strong>
                  May
                </div>
                <div className="admin-scheduled-text">
                  <strong>Exam Week Reminder</strong>
                  <span>Students, Parents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Announcements;