import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/admin/exams.css";

const exams = [
  { id: "EX-001", date: "Apr 28, 2025", time: "08:00 - 10:00", name: "Mathematics Test 1", subject: "Mathematics", class: "Grade 6A", classColor: "blue", duration: "2h 00m", teacher: "Mr. T. Kgosi", status: "Scheduled" },
  { id: "EX-002", date: "Apr 29, 2025", time: "09:00 - 11:00", name: "English Paper 1", subject: "English", class: "Grade 7B", classColor: "purple", duration: "2h 00m", teacher: "Ms. P. Motsamai", status: "Scheduled" },
  { id: "EX-003", date: "Apr 30, 2025", time: "08:00 - 10:00", name: "Science Practical", subject: "Science", class: "Grade 6A", classColor: "green", duration: "2h 00m", teacher: "Mr. L. Phiri", status: "Scheduled" },
  { id: "EX-004", date: "May 02, 2025", time: "09:00 - 11:00", name: "Setswana Paper 1", subject: "Setswana", class: "Grade 5B", classColor: "orange", duration: "2h 00m", teacher: "Ms. T. Mokoena", status: "Scheduled" },
  { id: "EX-005", date: "May 05, 2025", time: "10:00 - 12:00", name: "Life Skills Test", subject: "Life Skills", class: "Grade 4A", classColor: "purple", duration: "2h 00m", teacher: "Mr. B. Taole", status: "Scheduled" },
  { id: "EX-006", date: "May 06, 2025", time: "08:00 - 10:00", name: "History Paper", subject: "History", class: "Grade 7A", classColor: "blue", duration: "2h 00m", teacher: "Mr. S. Dlamini", status: "Scheduled" },
];

const subjects = ["All Subjects", "Mathematics", "English", "Science", "Setswana", "Life Skills", "History"];
const classesList = ["All Classes", "Grade 6A", "Grade 6B", "Grade 5A", "Grade 5B", "Grade 4A", "Grade 7A", "Grade 7B"];
const statuses = ["All Statuses", "Scheduled", "Ongoing", "Completed"];

const subjectColors = {
  Mathematics: "blue",
  English: "purple",
  Science: "green",
  Setswana: "orange",
  "Life Skills": "purple",
  History: "orange",
};

const initials = (name) =>
  name.replace("Mr. ", "").replace("Mrs. ", "").replace("Ms. ", "").split(" ")
    .map((p) => p[0]).slice(0, 2).join("").toUpperCase();

function Exams() {
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState("All Classes");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  const filtered = exams.filter((e) => {
    const matchesSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase()) || e.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = classFilter === "All Classes" || e.class === classFilter;
    const matchesSubject = subjectFilter === "All Subjects" || e.subject === subjectFilter;
    const matchesStatus = statusFilter === "All Statuses" || e.status === statusFilter;
    return matchesSearch && matchesClass && matchesSubject && matchesStatus;
  });

  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon"><Icon name="exam" size={26} /></div>
          <div>
            <div className="admin-breadcrumb"><span>Dashboard</span><span>/</span><span>Exams</span></div>
            <h1>Exams</h1>
            <p>Schedule and manage all school examinations.</p>
          </div>
        </div>
        <img src="/students2.jpg" alt="Exams" className="admin-page-header-image" />
      </section>

      <section className="admin-mini-stats admin-mini-stats-4">
        <div className="admin-mini-stat blue">
          <div className="admin-mini-stat-icon"><Icon name="exam" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Total Exams</span>
            <strong>24</strong>
            <small>+ 3 this month</small>
          </div>
        </div>
        <div className="admin-mini-stat green">
          <div className="admin-mini-stat-icon"><Icon name="calendar" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Upcoming</span>
            <strong>12</strong>
            <small>50% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat orange">
          <div className="admin-mini-stat-icon"><Icon name="clock" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Ongoing</span>
            <strong>3</strong>
            <small>12% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat purple">
          <div className="admin-mini-stat-icon"><Icon name="check" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Completed</span>
            <strong>9</strong>
            <small>38% of total</small>
          </div>
        </div>
      </section>

      <div className="admin-exams-layout">
        <div className="admin-exams-main">
          <div className="admin-toolbar">
            <div className="admin-toolbar-search">
              <Icon name="search" size={18} />
              <input
                type="text"
                placeholder="Search exams by name, subject, class or teacher..."
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
              Schedule Exam
            </button>
          </div>

          <div className="admin-card" style={{ padding: 0 }}>
            <div className="admin-card-header" style={{ padding: "18px 20px 0" }}>
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="exam" size={16} /></div>
                <h2>Upcoming Exams</h2>
              </div>
            </div>
            <div style={{ padding: "10px 16px 16px" }}>
              <table className="admin-exam-table">
                <thead>
                  <tr>
                    <th>Date &amp; Time</th>
                    <th>Exam Name</th>
                    <th>Subject</th>
                    <th>Class</th>
                    <th>Duration</th>
                    <th>Teacher</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((exam) => (
                    <tr key={exam.id}>
                      <td>
                        <div className="admin-exam-datetime">
                          <strong>{exam.date}</strong>
                          <span>{exam.time}</span>
                        </div>
                      </td>
                      <td><span className="admin-exam-name">{exam.name}</span></td>
                      <td>
                        <span className={`admin-tag ${subjectColors[exam.subject] || "blue"}`}>{exam.subject}</span>
                      </td>
                      <td>
                        <span className={`admin-class-dot-inline ${exam.classColor}`}></span>
                        {exam.class}
                      </td>
                      <td><span className="admin-exam-duration">{exam.duration}</span></td>
                      <td>
                        <div className="admin-teacher-inline">
                          <div className="admin-student-avatar" style={{ width: 28, height: 28, fontSize: "0.62rem" }}>
                            {initials(exam.teacher)}
                          </div>
                          <strong>{exam.teacher}</strong>
                        </div>
                      </td>
                      <td>
                        <span className={`admin-status-badge ${exam.status.toLowerCase()}`}>{exam.status}</span>
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
        </div>

        <div className="admin-exams-side">
          <div className="admin-exam-stats-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="chart" size={16} /></div>
                <h2>Exam Statistics</h2>
              </div>
            </div>
            <div className="admin-exam-stats-top">
              <div className="admin-exam-donut">
                <svg viewBox="0 0 36 36" className="admin-exam-donut-svg">
                  <path d="M18 2.5 a15.5 15.5 0 1 1 0 31 a15.5 15.5 0 1 1 0 -31" fill="none" stroke="#2563eb" strokeWidth="4" strokeDasharray="25 100" strokeLinecap="butt" />
                  <path d="M18 2.5 a15.5 15.5 0 1 1 0 31 a15.5 15.5 0 1 1 0 -31" fill="none" stroke="#7c3aed" strokeWidth="4" strokeDasharray="25 100" strokeDashoffset="-25" strokeLinecap="butt" />
                  <path d="M18 2.5 a15.5 15.5 0 1 1 0 31 a15.5 15.5 0 1 1 0 -31" fill="none" stroke="#16a34a" strokeWidth="4" strokeDasharray="25 100" strokeDashoffset="-50" strokeLinecap="butt" />
                  <path d="M18 2.5 a15.5 15.5 0 1 1 0 31 a15.5 15.5 0 1 1 0 -31" fill="none" stroke="#ea580c" strokeWidth="4" strokeDasharray="25 100" strokeDashoffset="-75" strokeLinecap="butt" />
                </svg>
                <div className="admin-exam-donut-text">
                  <strong>24</strong>
                  <span>Total</span>
                </div>
              </div>
              <div className="admin-exam-legend">
                <div className="admin-exam-legend-row">
                  <span className="admin-exam-legend-dot blue" />
                  <span>Math</span>
                  <strong>8</strong>
                </div>
                <div className="admin-exam-legend-row">
                  <span className="admin-exam-legend-dot purple" />
                  <span>English</span>
                  <strong>6</strong>
                </div>
                <div className="admin-exam-legend-row">
                  <span className="admin-exam-legend-dot green" />
                  <span>Science</span>
                  <strong>5</strong>
                </div>
                <div className="admin-exam-legend-row">
                  <span className="admin-exam-legend-dot orange" />
                  <span>Setswana</span>
                  <strong>3</strong>
                </div>
                <div className="admin-exam-legend-row">
                  <span className="admin-exam-legend-dot yellow" />
                  <span>Others</span>
                  <strong>2</strong>
                </div>
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
                  return (
                    <span key={i} className="calendar-day">{d}</span>
                  );
                })}
              </div>
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
                <span>Schedule New Exam</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="file" size={15} /></div>
                <span>Manage Exam Papers</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="check" size={15} /></div>
                <span>Enter Results</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="megaphone" size={15} /></div>
                <span>Notify Teachers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exams;