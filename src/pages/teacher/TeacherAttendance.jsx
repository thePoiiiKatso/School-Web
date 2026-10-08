import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/teacher/attendance.css";

const classes = [
  { id: "c1", name: "Mathematics", className: "Grade 6A", count: 32, color: "blue" },
  { id: "c2", name: "English", className: "Grade 6A", count: 32, color: "purple" },
  { id: "c3", name: "Science", className: "Grade 6B", count: 30, color: "green" },
  { id: "c4", name: "Setswana", className: "Grade 6B", count: 30, color: "orange" },
];

const initialStudents = [
  { id: 1, name: "Thabo Molefe", status: "Present", time: "07:32", notes: "-" },
  { id: 2, name: "Naledi Kgosi", status: "Present", time: "07:35", notes: "-" },
  { id: 3, name: "Rorisang Kgosi", status: "Late", time: "08:15", notes: "Traffic" },
  { id: 4, name: "Tumisang Mokoena", status: "Present", time: "07:28", notes: "-" },
  { id: 5, name: "Refilwe Sepokgolo", status: "Absent", time: "-", notes: "Sick" },
  { id: 6, name: "Lesedi Pule", status: "Present", time: "07:40", notes: "-" },
  { id: 7, name: "Karabo Mokwena", status: "Present", time: "07:31", notes: "-" },
  { id: 8, name: "Palesa Ditiro", status: "Late", time: "08:05", notes: "Doctor" },
  { id: 9, name: "Otlotleng Sefako", status: "Present", time: "07:33", notes: "-" },
  { id: 10, name: "Botshelo Ndlovu", status: "Present", time: "07:36", notes: "-" },
];

const initials = (name) =>
  name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();

function TeacherAttendance() {
  const [selectedClassId, setSelectedClassId] = useState(classes[0].id);
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");

  const selectedClass = classes.find((c) => c.id === selectedClassId) || classes[0];

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const presentCount = students.filter((s) => s.status === "Present").length;
  const absentCount = students.filter((s) => s.status === "Absent").length;
  const lateCount = students.filter((s) => s.status === "Late").length;
  const attendanceRate = Math.round((presentCount / students.length) * 100);

  const setStatus = (id, status) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              status,
              time:
                status === "Present"
                  ? "07:35"
                  : status === "Late"
                  ? "08:10"
                  : "-",
            }
          : s
      )
    );
  };

  return (
    <>
      <section className="teacher-welcome">
        <div className="teacher-welcome-text">
          <h1>Attendance</h1>
          <p>Mark today's attendance for your classes.</p>
        </div>
        <img src="/students3.jpg" alt="Bokamoso jwa Rona" className="teacher-welcome-image" />
      </section>

      <section className="teacher-mini-stats">
        <div className="teacher-mini-stat blue">
          <div className="teacher-mini-stat-icon"><Icon name="book" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>My Classes</span>
            <strong>{classes.length}</strong>
            <small>Assigned to me</small>
          </div>
        </div>
        <div className="teacher-mini-stat green">
          <div className="teacher-mini-stat-icon"><Icon name="check" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Present Today</span>
            <strong>{presentCount}</strong>
            <small>{attendanceRate}% of class</small>
          </div>
        </div>
        <div className="teacher-mini-stat purple">
          <div className="teacher-mini-stat-icon"><Icon name="user" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Absent</span>
            <strong>{absentCount}</strong>
            <small>To be followed up</small>
          </div>
        </div>
        <div className="teacher-mini-stat yellow">
          <div className="teacher-mini-stat-icon"><Icon name="clock" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Late</span>
            <strong>{lateCount}</strong>
            <small>Arrived late</small>
          </div>
        </div>
      </section>

      <div className="teacher-attendance-toolbar">
        <button type="button" className="teacher-attendance-date">
          <Icon name="calendar" size={15} />
          22 Apr 2025
        </button>
        <select
          className="teacher-attendance-select"
          value={selectedClassId}
          onChange={(e) => setSelectedClassId(e.target.value)}
        >
          {classes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} - {c.className}
            </option>
          ))}
        </select>
        <div className="teacher-attendance-search">
          <Icon name="search" size={16} />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button type="button" className="teacher-attendance-mark">
          <Icon name="check" size={15} />
          Mark Attendance
        </button>
      </div>

      <div className="teacher-attendance-layout">
        <div className="teacher-attendance-left">
          <div className="teacher-card" style={{ padding: 16 }}>
            <div className="teacher-card-header" style={{ marginBottom: 8 }}>
              <div className="teacher-card-title">
                <h2>My Classes</h2>
              </div>
            </div>
            <div className="teacher-attendance-class-list">
              {classes.map((c) => (
                <button
                  type="button"
                  key={c.id}
                  className={`teacher-attendance-class-item ${selectedClassId === c.id ? "active" : ""}`}
                  onClick={() => setSelectedClassId(c.id)}
                >
                  <span className={`teacher-attendance-class-dot ${c.color}`}></span>
                  <span className="teacher-attendance-class-name">
                    {c.name} {c.className}
                  </span>
                  <span className="teacher-attendance-class-count">{c.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="teacher-attendance-main">
          <div className="teacher-card" style={{ padding: 0 }}>
            <div className="teacher-card-header" style={{ padding: "18px 20px 0" }}>
              <div className="teacher-card-title">
                <div className="teacher-card-title-icon"><Icon name="check" size={16} /></div>
                <h2>
                  {selectedClass.name} - {selectedClass.className} (22 Apr 2025)
                </h2>
              </div>
            </div>
            <div style={{ padding: "10px 16px 16px" }}>
              <table className="teacher-attendance-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Student</th>
                    <th>Status</th>
                    <th>In</th>
                    <th>Mark</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((s, index) => (
                    <tr key={s.id}>
                      <td>{index + 1}.</td>
                      <td>
                        <div className="teacher-attendance-student">
                          <div className="teacher-attendance-avatar">{initials(s.name)}</div>
                          <div className="teacher-attendance-student-text">
                            <strong>{s.name}</strong>
                            {s.notes !== "-" && <span>{s.notes}</span>}
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`teacher-status-pill ${s.status.toLowerCase()}`}>
                          {s.status}
                        </span>
                      </td>
                      <td>{s.time}</td>
                      <td>
                        <div className="teacher-status-actions">
                          <button
                            type="button"
                            className={`teacher-status-btn present ${s.status === "Present" ? "active" : ""}`}
                            onClick={() => setStatus(s.id, "Present")}
                          >
                            P
                          </button>
                          <button
                            type="button"
                            className={`teacher-status-btn absent ${s.status === "Absent" ? "active" : ""}`}
                            onClick={() => setStatus(s.id, "Absent")}
                          >
                            A
                          </button>
                          <button
                            type="button"
                            className={`teacher-status-btn late ${s.status === "Late" ? "active" : ""}`}
                            onClick={() => setStatus(s.id, "Late")}
                          >
                            L
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="teacher-attendance-right">
          <div className="teacher-attendance-rate-card">
            <div className="teacher-card-header">
              <div className="teacher-card-title">
                <div className="teacher-card-title-icon"><Icon name="chart" size={16} /></div>
                <h2>Attendance Rate</h2>
              </div>
            </div>
            <div className="teacher-rate-top">
              <div className="teacher-rate-donut">
                <svg viewBox="0 0 36 36" className="teacher-rate-donut-svg">
                  <path d="M18 2.5 a15.5 15.5 0 1 1 0 31 a15.5 15.5 0 1 1 0 -31" fill="none" stroke="#e2e8f0" strokeWidth="3.5" />
                  <path d="M18 2.5 a15.5 15.5 0 1 1 0 31 a15.5 15.5 0 1 1 0 -31" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeDasharray={`${attendanceRate} 100`} strokeLinecap="round" />
                </svg>
                <div className="teacher-rate-donut-text">
                  <strong>{attendanceRate}%</strong>
                  <span>Present</span>
                </div>
              </div>
              <div className="teacher-rate-legend">
                <div className="teacher-rate-legend-row">
                  <span className="teacher-rate-dot blue" />
                  <span>Present</span>
                  <strong>{presentCount}</strong>
                </div>
                <div className="teacher-rate-legend-row">
                  <span className="teacher-rate-dot red" />
                  <span>Absent</span>
                  <strong>{absentCount}</strong>
                </div>
                <div className="teacher-rate-legend-row">
                  <span className="teacher-rate-dot purple" />
                  <span>Late</span>
                  <strong>{lateCount}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="teacher-card">
            <div className="teacher-card-header">
              <div className="teacher-card-title">
                <div className="teacher-card-title-icon"><Icon name="lightning" size={16} /></div>
                <h2>Quick Actions</h2>
              </div>
            </div>
            <div className="teacher-quick-actions">
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="check" size={15} /></div>
                <span>Save Attendance</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="file" size={15} /></div>
                <span>View Monthly Report</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="message" size={15} /></div>
                <span>Message Parents</span>
              </button>
            </div>
          </div>

          <div className="teacher-keep-going">
            <div className="teacher-keep-going-icon"><Icon name="check" size={20} /></div>
            <div>
              <strong>Attendance matters</strong>
              <span>Consistent attendance builds strong learners.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherAttendance;