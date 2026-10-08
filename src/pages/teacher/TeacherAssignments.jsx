import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/teacher/assignments.css";

const assignments = [
  { id: "a1", title: "Algebra Worksheet", subject: "Mathematics", className: "Grade 6A", due: "Apr 25, 2025", status: "Active", submitted: 24, total: 32 },
  { id: "a2", title: "Essay: My Community", subject: "English", className: "Grade 6A", due: "Apr 24, 2025", status: "Overdue", submitted: 30, total: 32 },
  { id: "a3", title: "Science Project", subject: "Science", className: "Grade 6B", due: "Apr 30, 2025", status: "Active", submitted: 18, total: 30 },
  { id: "a4", title: "Setswana Oral Presentation", subject: "Setswana", className: "Grade 6B", due: "Apr 28, 2025", status: "Grading", submitted: 28, total: 30 },
  { id: "a5", title: "Life Skills Reflection", subject: "Life Skills", className: "Grade 6A", due: "Apr 22, 2025", status: "Graded", submitted: 32, total: 32 },
];

const classesList = ["All Classes", "Grade 6A", "Grade 6B"];
const statuses = ["All Statuses", "Active", "Overdue", "Grading", "Graded"];
const subjectOptions = ["Mathematics", "English", "Science", "Setswana", "Life Skills"];
const classOptions = ["Grade 6A", "Grade 6B"];

function TeacherAssignments({ onViewSubmissions }) {
  const [selectedId, setSelectedId] = useState(assignments[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState("All Classes");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [showAddModal, setShowAddModal] = useState(false);

  const selected = assignments.find((a) => a.id === selectedId) || assignments[0];

  const filtered = assignments.filter((a) => {
    const matchesSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = classFilter === "All Classes" || a.className === classFilter;
    const matchesStatus = statusFilter === "All Statuses" || a.status === statusFilter;
    return matchesSearch && matchesClass && matchesStatus;
  });

  const totalCount = assignments.length;
  const activeCount = assignments.filter((a) => a.status === "Active").length;
  const gradingCount = assignments.filter((a) => a.status === "Grading").length;
  const overdueCount = assignments.filter((a) => a.status === "Overdue").length;

  return (
    <>
      <section className="teacher-welcome">
        <div className="teacher-welcome-text">
          <h1>Assignments</h1>
          <p>Create, manage and grade assignments for your classes.</p>
        </div>
        <img src="/students1.jpg" alt="Bokamoso jwa Rona" className="teacher-welcome-image" />
      </section>

      <section className="teacher-mini-stats">
        <div className="teacher-mini-stat blue">
          <div className="teacher-mini-stat-icon"><Icon name="clipboard" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Total Assignments</span>
            <strong>{totalCount}</strong>
            <small>This term</small>
          </div>
        </div>
        <div className="teacher-mini-stat green">
          <div className="teacher-mini-stat-icon"><Icon name="check" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Active</span>
            <strong>{activeCount}</strong>
            <small>Open for submission</small>
          </div>
        </div>
        <div className="teacher-mini-stat purple">
          <div className="teacher-mini-stat-icon"><Icon name="file" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Grading Needed</span>
            <strong>{gradingCount}</strong>
            <small>To be reviewed</small>
          </div>
        </div>
        <div className="teacher-mini-stat yellow">
          <div className="teacher-mini-stat-icon"><Icon name="clock" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Overdue</span>
            <strong>{overdueCount}</strong>
            <small>Past due date</small>
          </div>
        </div>
      </section>

      <div className="teacher-assignments-layout">
        <div className="teacher-assignments-main">
          <div className="teacher-assignments-toolbar">
            <div className="teacher-assignments-search">
              <Icon name="search" size={16} />
              <input
                type="text"
                placeholder="Search assignments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="teacher-assignments-select"
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
            >
              {classesList.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select
              className="teacher-assignments-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
            <button
              type="button"
              className="teacher-assignments-add"
              onClick={() => setShowAddModal(true)}
            >
              <Icon name="plus" size={15} />
              New Assignment
            </button>
          </div>

          <div className="teacher-assignment-list">
            {filtered.map((a) => {
              const percent = Math.round((a.submitted / a.total) * 100);
              return (
                <div
                  className={`teacher-assignment-card ${selectedId === a.id ? "selected" : ""}`}
                  key={a.id}
                  onClick={() => setSelectedId(a.id)}
                >
                  <div className="teacher-assignment-top">
                    <div className="teacher-assignment-icon">
                      <Icon name="file" size={20} />
                    </div>
                    <div className="teacher-assignment-info">
                      <h3>{a.title}</h3>
                      <span>{a.subject} &middot; {a.className}</span>
                    </div>
                    <span className={`teacher-assignment-status ${a.status.toLowerCase()}`}>
                      {a.status}
                    </span>
                  </div>

                  <div className="teacher-assignment-meta">
                    <span><Icon name="calendar" size={13} /> Due: {a.due}</span>
                    <span><Icon name="users" size={13} /> {a.submitted} of {a.total} submitted</span>
                  </div>

                  <div className="teacher-assignment-progress">
                    <div className="teacher-assignment-progress-label">
                      <span>Submission progress</span>
                      <strong>{percent}%</strong>
                    </div>
                    <div className="teacher-assignment-progress-bar">
                      <div
                        className="teacher-assignment-progress-fill"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="teacher-assignment-actions">
                    <button
                      type="button"
                      className="teacher-assignment-action"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onViewSubmissions) onViewSubmissions();
                      }}
                    >
                      View Submissions
                      <Icon name="arrow" size={14} />
                    </button>
                    <button
                      type="button"
                      className="teacher-assignment-action-icon"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon name="edit" size={15} />
                    </button>
                    <button
                      type="button"
                      className="teacher-assignment-action-icon danger"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon name="trash" size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="teacher-assignments-side">
          <div className="teacher-assignment-detail">
            <div className="teacher-assignment-detail-top">
              <div className="teacher-assignment-detail-icon">
                <Icon name="file" size={22} />
              </div>
              <div className="teacher-assignment-detail-title">
                <h2>{selected.title}</h2>
                <span>{selected.subject} &middot; {selected.className}</span>
              </div>
              <span className={`teacher-assignment-status ${selected.status.toLowerCase()}`}>
                {selected.status}
              </span>
            </div>

            <div className="teacher-assignment-detail-info">
              <div className="teacher-assignment-info-row">
                <div className="teacher-assignment-info-icon"><Icon name="calendar" size={14} /></div>
                <span>Due: {selected.due}</span>
              </div>
              <div className="teacher-assignment-info-row">
                <div className="teacher-assignment-info-icon"><Icon name="users" size={14} /></div>
                <span>{selected.submitted} of {selected.total} submitted</span>
              </div>
              <div className="teacher-assignment-info-row">
                <div className="teacher-assignment-info-icon"><Icon name="book" size={14} /></div>
                <span>{selected.total - selected.submitted} pending review</span>
              </div>
            </div>

            <div className="teacher-assignment-detail-progress">
              <div className="teacher-assignment-progress-label">
                <span>Submission progress</span>
                <strong>{Math.round((selected.submitted / selected.total) * 100)}%</strong>
              </div>
              <div className="teacher-assignment-progress-bar">
                <div
                  className="teacher-assignment-progress-fill"
                  style={{ width: `${(selected.submitted / selected.total) * 100}%` }}
                ></div>
              </div>
            </div>

            <button
              type="button"
              className="teacher-assignment-view-details"
              onClick={() => onViewSubmissions && onViewSubmissions()}
            >
              View Full Assignment
              <Icon name="arrow" size={14} />
            </button>
          </div>

          <div className="teacher-card">
            <div className="teacher-card-header">
              <div className="teacher-card-title">
                <div className="teacher-card-title-icon"><Icon name="lightning" size={16} /></div>
                <h2>Quick Actions</h2>
              </div>
            </div>
            <div className="teacher-quick-actions">
              <button
                type="button"
                className="teacher-quick-item"
                onClick={() => setShowAddModal(true)}
              >
                <div className="teacher-quick-item-icon"><Icon name="plus" size={15} /></div>
                <span>Create Assignment</span>
              </button>
              <button
                type="button"
                className="teacher-quick-item"
                onClick={() => onViewSubmissions && onViewSubmissions()}
              >
                <div className="teacher-quick-item-icon"><Icon name="file" size={15} /></div>
                <span>View Submissions</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="check" size={15} /></div>
                <span>Grade Now</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="message" size={15} /></div>
                <span>Send Reminder</span>
              </button>
            </div>
          </div>

          <div className="teacher-keep-going">
            <div className="teacher-keep-going-icon"><Icon name="file" size={20} /></div>
            <div>
              <strong>Feedback matters</strong>
              <span>Quick, clear feedback helps learners grow.</span>
            </div>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div
          className="teacher-submission-modal-overlay"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="teacher-submission-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="teacher-submission-modal-header">
              <div className="teacher-submission-doc-icon">
                <Icon name="plus" size={20} />
              </div>
              <div className="teacher-submission-modal-header-text">
                <h3>New Assignment</h3>
                <span>Fill in the details to publish a new assignment.</span>
              </div>
              <button
                type="button"
                className="teacher-submission-modal-close"
                onClick={() => setShowAddModal(false)}
              >
                <Icon name="trash" size={16} />
              </button>
            </div>

            <div className="teacher-submission-modal-body">
              <div className="teacher-assignment-form-grid">
                <div className="teacher-assignment-form-field">
                  <label>Subject</label>
                  <select defaultValue="">
                    <option value="" disabled>Select subject</option>
                    {subjectOptions.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="teacher-assignment-form-field">
                  <label>Class</label>
                  <select defaultValue="">
                    <option value="" disabled>Select class</option>
                    {classOptions.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="teacher-assignment-form-field full">
                  <label>Title</label>
                  <input type="text" placeholder="e.g. Algebra Worksheet" />
                </div>
                <div className="teacher-assignment-form-field full">
                  <label>Description / Instructions</label>
                  <textarea placeholder="Give clear instructions for the assignment." />
                </div>
                <div className="teacher-assignment-form-field">
                  <label>Due Date</label>
                  <input type="date" />
                </div>
                <div className="teacher-assignment-form-field">
                  <label>Total Marks</label>
                  <input type="number" placeholder="e.g. 100" />
                </div>
                <div className="teacher-assignment-form-field full">
                  <label>Attachment (Optional)</label>
                  <input type="file" />
                </div>
                <label className="teacher-assignment-check full">
                  <input type="checkbox" defaultChecked />
                  <span>Notify students about this assignment</span>
                </label>
              </div>
            </div>

            <div className="teacher-submission-modal-footer">
              <button
                type="button"
                className="teacher-submission-btn secondary"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="teacher-submission-btn primary"
                onClick={() => setShowAddModal(false)}
              >
                <Icon name="check" size={15} />
                Publish Assignment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TeacherAssignments;