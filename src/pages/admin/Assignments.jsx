import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/admin/assignments.css";

const assignments = [
  { id: "AS-001", title: "Algebra Worksheet", description: "Solve problems 1-20", subject: "Mathematics", class: "Grade 6A", classColor: "blue", teacher: "Mr. T. Kgosi", due: "Apr 25, 2025", status: "Active" },
  { id: "AS-002", title: "Essay: My Community", description: "Write a 400-word essay", subject: "English", class: "Grade 7B", classColor: "purple", teacher: "Ms. D. Ramokgopa", due: "Apr 24, 2025", status: "Overdue" },
  { id: "AS-003", title: "Science Project", description: "Create a model of the solar system", subject: "Science", class: "Grade 6A", classColor: "green", teacher: "Mr. L. Phiri", due: "Apr 30, 2025", status: "Active" },
  { id: "AS-004", title: "Setswana Oral Presentation", description: "Topic: Our Culture", subject: "Setswana", class: "Grade 5B", classColor: "orange", teacher: "Ms. T. Mokoena", due: "Apr 28, 2025", status: "Active" },
  { id: "AS-005", title: "Life Skills Reflection", description: "Write about your goals", subject: "Life Skills", class: "Grade 4A", classColor: "pink", teacher: "Ms. P. Motsamai", due: "Apr 22, 2025", status: "Overdue" },
  { id: "AS-006", title: "Computer Lab Task", description: "Create a simple presentation", subject: "Computer Studies", class: "Grade 6B", classColor: "blue", teacher: "Mr. T. Kgosi", due: "Apr 29, 2025", status: "Active" },
  { id: "AS-007", title: "Creative Arts Drawing", description: "Draw a landscape", subject: "Creative Arts", class: "Grade 5A", classColor: "purple", teacher: "Ms. N. Sechele", due: "May 2, 2025", status: "Upcoming" },
  { id: "AS-008", title: "Physical Education Report", description: "Write about your favourite sport", subject: "Physical Education", class: "Grade 6B", classColor: "green", teacher: "Mr. D. Kgafela", due: "May 7, 2025", status: "Upcoming" },
];

const subjects = ["All Subjects", "Mathematics", "English", "Science", "Setswana", "Life Skills", "Computer Studies", "Creative Arts", "Physical Education"];
const classesList = ["All Classes", "Grade 6A", "Grade 6B", "Grade 5A", "Grade 5B", "Grade 4A", "Grade 7B"];
const statuses = ["All Statuses", "Active", "Overdue", "Upcoming"];

const subjectColors = {
  Mathematics: "blue",
  English: "purple",
  Science: "green",
  Setswana: "orange",
  "Life Skills": "pink",
  "Computer Studies": "blue",
  "Creative Arts": "purple",
  "Physical Education": "green",
};

const initials = (name) =>
  name.replace("Mr. ", "").replace("Mrs. ", "").replace("Ms. ", "").split(" ")
    .map((p) => p[0]).slice(0, 2).join("").toUpperCase();

function Assignments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState("All Classes");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [selectedId, setSelectedId] = useState(assignments[0].id);

  const selected = assignments.find((a) => a.id === selectedId) || assignments[0];

  const filtered = assignments.filter((a) => {
    const matchesSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase()) || a.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = classFilter === "All Classes" || a.class === classFilter;
    const matchesSubject = subjectFilter === "All Subjects" || a.subject === subjectFilter;
    const matchesStatus = statusFilter === "All Statuses" || a.status === statusFilter;
    return matchesSearch && matchesClass && matchesSubject && matchesStatus;
  });

  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon"><Icon name="file" size={26} /></div>
          <div>
            <div className="admin-breadcrumb"><span>Dashboard</span><span>/</span><span>Assignments</span></div>
            <h1>Assignments</h1>
            <p>Manage all assignments across classes and subjects.</p>
          </div>
        </div>
        <img src="/students1.jpg" alt="Assignments" className="admin-page-header-image" />
      </section>

      <section className="admin-mini-stats admin-mini-stats-4">
        <div className="admin-mini-stat blue">
          <div className="admin-mini-stat-icon"><Icon name="file" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Total Assignments</span>
            <strong>48</strong>
            <small>+ 6 this month</small>
          </div>
        </div>
        <div className="admin-mini-stat green">
          <div className="admin-mini-stat-icon"><Icon name="check" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Active</span>
            <strong>38</strong>
            <small>79% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat orange">
          <div className="admin-mini-stat-icon"><Icon name="clock" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Overdue</span>
            <strong>6</strong>
            <small>13% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat purple">
          <div className="admin-mini-stat-icon"><Icon name="calendar" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Upcoming (7 days)</span>
            <strong>12</strong>
            <small>25% of total</small>
          </div>
        </div>
      </section>

      <div className="admin-assignments-layout">
        <div className="admin-assignments-main">
          <div className="admin-toolbar">
            <div className="admin-toolbar-search">
              <Icon name="search" size={18} />
              <input
                type="text"
                placeholder="Search assignments by title, subject, class or teacher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select className="admin-toolbar-select" value={classFilter} onChange={(e) => setClassFilter(e.target.value)}>
              {classesList.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select className="admin-toolbar-select" value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)}>
              {subjects.map((s) => <option key={s}>{s}</option>)}
            </select>
            <select className="admin-toolbar-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              {statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
            <button type="button" className="admin-add-button">
              <Icon name="plus" size={16} />
              Add Assignment
            </button>
          </div>

          <div className="admin-table-wrap" style={{ padding: 0 }}>
            <table className="admin-assignment-table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" className="admin-table-checkbox" />
                  </th>
                  <th>Title</th>
                  <th>Subject</th>
                  <th>Class</th>
                  <th>Teacher</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((a) => (
                  <tr key={a.id} onClick={() => setSelectedId(a.id)} style={{ cursor: "pointer" }}>
                    <td>
                      <input type="checkbox" className="admin-table-checkbox" onClick={(e) => e.stopPropagation()} />
                    </td>
                    <td>
                      <div className="admin-assignment-title">
                        <strong>{a.title}</strong>
                        <span>{a.description}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`admin-tag ${subjectColors[a.subject] || "blue"}`}>{a.subject}</span>
                    </td>
                    <td>
                      <span className={`admin-class-dot-inline ${a.classColor}`}></span>
                      {a.class}
                    </td>
                    <td>
                      <div className="admin-teacher-inline">
                        <div className="admin-student-avatar" style={{ width: 28, height: 28, fontSize: "0.62rem" }}>
                          {initials(a.teacher)}
                        </div>
                        <strong>{a.teacher}</strong>
                      </div>
                    </td>
                    <td>
                      <span className="admin-due-date">
                        <Icon name="calendar" size={13} />
                        {a.due}
                      </span>
                    </td>
                    <td>
                      <span className={`admin-status-badge ${a.status.toLowerCase()}`}>{a.status}</span>
                    </td>
                    <td>
                      <div className="admin-row-actions" style={{ justifyContent: "flex-end" }}>
                        <button type="button" className="admin-icon-button"><Icon name="user" size={15} /></button>
                        <button type="button" className="admin-icon-button"><Icon name="edit" size={15} /></button>
                        <button type="button" className="admin-action-dots">...</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-assignments-side">
          <div className="admin-assignment-overview">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="file" size={16} /></div>
                <h2>Assignment Overview</h2>
              </div>
            </div>

            <div className="admin-assignment-overview-top">
              <div className="admin-assignment-overview-icon">
                <Icon name="file" size={22} />
              </div>
              <div className="admin-assignment-overview-title">
                <h3>{selected.title}</h3>
                <span>{selected.subject} &middot; {selected.class}</span>
              </div>
              <span className={`admin-status-badge ${selected.status.toLowerCase()}`}>{selected.status}</span>
            </div>

            <div className="admin-assignment-info-row">
              <div className="admin-assignment-info-icon"><Icon name="user" size={14} /></div>
              <span>{selected.teacher}</span>
            </div>

            <div className="admin-assignment-info-row">
              <div className="admin-assignment-info-icon"><Icon name="calendar" size={14} /></div>
              <span>Due: {selected.due}</span>
            </div>

            <div className="admin-assignment-description">
              {selected.description}. Show all steps or details as required.
            </div>

            <button type="button" className="admin-view-details-btn">
              View Details
              <Icon name="arrow" size={14} />
            </button>
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
                <span>Create Assignment</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="file" size={15} /></div>
                <span>Manage Submissions</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="chart" size={15} /></div>
                <span>View All Assignments</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="book" size={15} /></div>
                <span>Assignment Templates</span>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="clock" size={16} /></div>
                <h2>Upcoming Deadlines</h2>
              </div>
              <button type="button" className="admin-view-all">View All <Icon name="arrow" size={14} /></button>
            </div>
            <div className="admin-deadline-list">
              <div className="admin-deadline-item">
                <span className="admin-deadline-dot red" />
                <div className="admin-deadline-text">
                  <strong>Essay: My Community</strong>
                  <span>English &middot; Grade 7B &middot; Apr 24</span>
                </div>
              </div>
              <div className="admin-deadline-item">
                <span className="admin-deadline-dot yellow" />
                <div className="admin-deadline-text">
                  <strong>Algebra Worksheet</strong>
                  <span>Mathematics &middot; Grade 6A &middot; Apr 25</span>
                </div>
              </div>
              <div className="admin-deadline-item">
                <span className="admin-deadline-dot green" />
                <div className="admin-deadline-text">
                  <strong>Science Project</strong>
                  <span>Science &middot; Grade 6A &middot; Apr 30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Assignments;