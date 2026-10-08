import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/teacher/exams.css";

const exams = [
  { id: "e1", name: "Mathematics Test 1", subject: "Mathematics", className: "Grade 6A", date: "Apr 28, 2025", time: "08:00 - 10:00", duration: "2h 00m", room: "Room 12", totalMarks: 100, status: "Upcoming" },
  { id: "e2", name: "English Paper 1", subject: "English", className: "Grade 6A", date: "Apr 29, 2025", time: "09:00 - 11:00", duration: "2h 00m", room: "Room 12", totalMarks: 100, status: "Upcoming" },
  { id: "e3", name: "Science Practical", subject: "Science", className: "Grade 6B", date: "Apr 30, 2025", time: "08:00 - 10:00", duration: "2h 00m", room: "Room 14", totalMarks: 80, status: "Ongoing" },
  { id: "e4", name: "Setswana Paper 1", subject: "Setswana", className: "Grade 6B", date: "Apr 20, 2025", time: "09:00 - 11:00", duration: "2h 00m", room: "Room 14", totalMarks: 100, status: "Marking" },
  { id: "e5", name: "Life Skills Test", subject: "Life Skills", className: "Grade 6A", date: "Apr 15, 2025", time: "10:00 - 12:00", duration: "2h 00m", room: "Room 12", totalMarks: 60, status: "Completed" },
];

const classesList = ["All Classes", "Grade 6A", "Grade 6B"];
const statuses = ["All Statuses", "Upcoming", "Ongoing", "Marking", "Completed"];
const subjectOptions = ["Mathematics", "English", "Science", "Setswana", "Life Skills"];
const classOptions = ["Grade 6A", "Grade 6B"];

function TeacherExams({ onEnterMarks }) {
  const [selectedId, setSelectedId] = useState(exams[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState("All Classes");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [showAddModal, setShowAddModal] = useState(false);

  const selected = exams.find((e) => e.id === selectedId) || exams[0];

  const filtered = exams.filter((e) => {
    const matchesSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = classFilter === "All Classes" || e.className === classFilter;
    const matchesStatus = statusFilter === "All Statuses" || e.status === statusFilter;
    return matchesSearch && matchesClass && matchesStatus;
  });

  const totalCount = exams.length;
  const upcomingCount = exams.filter((e) => e.status === "Upcoming").length;
  const markingCount = exams.filter((e) => e.status === "Marking").length;
  const completedCount = exams.filter((e) => e.status === "Completed").length;

  return (
    <>
      <section className="teacher-welcome">
        <div className="teacher-welcome-text">
          <h1>Exams</h1>
          <p>Schedule and manage exams for your classes.</p>
        </div>
        <img src="/students2.jpg" alt="Bokamoso jwa Rona" className="teacher-welcome-image" />
      </section>

      <section className="teacher-mini-stats">
        <div className="teacher-mini-stat blue">
          <div className="teacher-mini-stat-icon"><Icon name="exam" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Total Exams</span>
            <strong>{totalCount}</strong>
            <small>This term</small>
          </div>
        </div>
        <div className="teacher-mini-stat green">
          <div className="teacher-mini-stat-icon"><Icon name="calendar" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Upcoming</span>
            <strong>{upcomingCount}</strong>
            <small>Scheduled</small>
          </div>
        </div>
        <div className="teacher-mini-stat purple">
          <div className="teacher-mini-stat-icon"><Icon name="file" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Marking Needed</span>
            <strong>{markingCount}</strong>
            <small>To be graded</small>
          </div>
        </div>
        <div className="teacher-mini-stat yellow">
          <div className="teacher-mini-stat-icon"><Icon name="check" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Completed</span>
            <strong>{completedCount}</strong>
            <small>Marked and closed</small>
          </div>
        </div>
      </section>

      <div className="teacher-exams-layout">
        <div className="teacher-exams-main">
          <div className="teacher-exams-toolbar">
            <div className="teacher-exams-search">
              <Icon name="search" size={16} />
              <input
                type="text"
                placeholder="Search exams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="teacher-exams-select"
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
            >
              {classesList.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select
              className="teacher-exams-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
            <button
              type="button"
              className="teacher-exams-add"
              onClick={() => setShowAddModal(true)}
            >
              <Icon name="plus" size={15} />
              Schedule Exam
            </button>
          </div>

          <div className="teacher-exam-list">
            {filtered.map((e) => (
              <div
                className={`teacher-exam-card ${selectedId === e.id ? "selected" : ""}`}
                key={e.id}
                onClick={() => setSelectedId(e.id)}
              >
                <div className="teacher-exam-top">
                  <div className="teacher-exam-icon">
                    <Icon name="exam" size={20} />
                  </div>
                  <div className="teacher-exam-info">
                    <h3>{e.name}</h3>
                    <span>{e.subject} &middot; {e.className}</span>
                  </div>
                  <span className={`teacher-exam-status ${e.status.toLowerCase()}`}>
                    {e.status}
                  </span>
                </div>

                <div className="teacher-exam-meta">
                  <span><Icon name="calendar" size={13} /> {e.date}</span>
                  <span><Icon name="clock" size={13} /> {e.time}</span>
                  <span><Icon name="building" size={13} /> {e.room}</span>
                </div>

                <div className="teacher-exam-actions">
                  <button
                    type="button"
                    className="teacher-exam-action"
                    onClick={(ev) => ev.stopPropagation()}
                  >
                    View Papers
                    <Icon name="arrow" size={14} />
                  </button>
                  <button
                    type="button"
                    className="teacher-assignment-action-icon"
                    onClick={(ev) => ev.stopPropagation()}
                  >
                    <Icon name="edit" size={15} />
                  </button>
                  <button
                    type="button"
                    className="teacher-assignment-action-icon danger"
                    onClick={(ev) => ev.stopPropagation()}
                  >
                    <Icon name="trash" size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="teacher-exams-side">
          <div className="teacher-exam-detail">
            <div className="teacher-exam-detail-top">
              <div className="teacher-exam-detail-icon">
                <Icon name="exam" size={22} />
              </div>
              <div className="teacher-exam-detail-title">
                <h2>{selected.name}</h2>
                <span>{selected.subject} &middot; {selected.className}</span>
              </div>
              <span className={`teacher-exam-status ${selected.status.toLowerCase()}`}>
                {selected.status}
              </span>
            </div>

            <div className="teacher-exam-detail-info">
              <div className="teacher-exam-info-row">
                <div className="teacher-exam-info-icon"><Icon name="calendar" size={14} /></div>
                <span>{selected.date}</span>
              </div>
              <div className="teacher-exam-info-row">
                <div className="teacher-exam-info-icon"><Icon name="clock" size={14} /></div>
                <span>{selected.time}</span>
              </div>
              <div className="teacher-exam-info-row">
                <div className="teacher-exam-info-icon"><Icon name="building" size={14} /></div>
                <span>{selected.room}</span>
              </div>
              <div className="teacher-exam-info-row">
                <div className="teacher-exam-info-icon"><Icon name="file" size={14} /></div>
                <span>{selected.duration} &middot; {selected.totalMarks} marks</span>
              </div>
            </div>

            <button
              type="button"
              className="teacher-exam-detail-btn"
              onClick={() => onEnterMarks && onEnterMarks()}
            >
              Enter Marks
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
                <span>Schedule Exam</span>
              </button>
              <button
                type="button"
                className="teacher-quick-item"
                onClick={() => onEnterMarks && onEnterMarks()}
              >
                <div className="teacher-quick-item-icon"><Icon name="check" size={15} /></div>
                <span>Enter Marks</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="chart" size={15} /></div>
                <span>View Results</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="file" size={15} /></div>
                <span>Print Paper</span>
              </button>
            </div>
          </div>

          <div className="teacher-keep-going">
            <div className="teacher-keep-going-icon"><Icon name="exam" size={20} /></div>
            <div>
              <strong>Be prepared</strong>
              <span>Clear papers and fair marking build trust.</span>
            </div>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="teacher-submission-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="teacher-submission-modal" onClick={(e) => e.stopPropagation()}>
            <div className="teacher-submission-modal-header">
              <div className="teacher-submission-doc-icon">
                <Icon name="plus" size={20} />
              </div>
              <div className="teacher-submission-modal-header-text">
                <h3>Schedule Exam</h3>
                <span>Fill in the details to schedule a new exam.</span>
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
                  <label>Exam Name</label>
                  <input type="text" placeholder="e.g. Mathematics Test 2" />
                </div>
                <div className="teacher-assignment-form-field">
                  <label>Date</label>
                  <input type="date" />
                </div>
                <div className="teacher-assignment-form-field">
                  <label>Duration</label>
                  <input type="text" placeholder="e.g. 2h 00m" />
                </div>
                <div className="teacher-assignment-form-field">
                  <label>Start Time</label>
                  <input type="time" />
                </div>
                <div className="teacher-assignment-form-field">
                  <label>Room</label>
                  <input type="text" placeholder="e.g. Room 12" />
                </div>
                <div className="teacher-assignment-form-field">
                  <label>Total Marks</label>
                  <input type="number" placeholder="e.g. 100" />
                </div>
                <div className="teacher-assignment-form-field">
                  <label>Exam Type</label>
                  <select defaultValue="">
                    <option value="" disabled>Select type</option>
                    <option>Test</option>
                    <option>Mid-Term</option>
                    <option>Final</option>
                    <option>Practical</option>
                  </select>
                </div>
                <label className="teacher-assignment-check full">
                  <input type="checkbox" defaultChecked />
                  <span>Notify students and parents about this exam</span>
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
                Schedule Exam
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TeacherExams;