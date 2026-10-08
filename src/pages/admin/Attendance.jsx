import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/admin/attendance.css";

const classes = [
  { id: "all", name: "All Classes", count: 124, color: "blue" },
  { id: "6A", name: "Grade 6A", count: 32, color: "green" },
  { id: "6B", name: "Grade 6B", count: 30, color: "green" },
  { id: "5A", name: "Grade 5A", count: 28, color: "purple" },
  { id: "5B", name: "Grade 5B", count: 26, color: "purple" },
  { id: "4A", name: "Grade 4A", count: 25, color: "orange" },
  { id: "4B", name: "Grade 4B", count: 24, color: "orange" },
  { id: "3A", name: "Grade 3A", count: 24, color: "pink" },
  { id: "3B", name: "Grade 3B", count: 22, color: "pink" },
];

const attendanceRecords = [
  { id: 1, name: "Thabo Molefe", className: "Grade 6A", status: "Present", checkIn: "07:32", notes: "-" },
  { id: 2, name: "Naledi Molefe", className: "Grade 6A", status: "Present", checkIn: "07:35", notes: "-" },
  { id: 3, name: "Rorisang Kgosi", className: "Grade 6A", status: "Late", checkIn: "08:15", notes: "Traffic" },
  { id: 4, name: "Tumisang Mokoena", className: "Grade 6A", status: "Present", checkIn: "07:28", notes: "-" },
  { id: 5, name: "Refilwe Sepokgolo", className: "Grade 6A", status: "Absent", checkIn: "-", notes: "Sick" },
  { id: 6, name: "Lesedi Pule", className: "Grade 6A", status: "Present", checkIn: "07:40", notes: "-" },
  { id: 7, name: "Karabo Mokwena", className: "Grade 6A", status: "Present", checkIn: "07:31", notes: "-" },
  { id: 8, name: "Palesa Ditiro", className: "Grade 6A", status: "Late", checkIn: "08:05", notes: "Doctor" },
  { id: 9, name: "Otlotleng Sefako", className: "Grade 6A", status: "Present", checkIn: "07:33", notes: "-" },
  { id: 10, name: "Botshelo Ndlovu", className: "Grade 6A", status: "Present", checkIn: "07:36", notes: "-" },
];

const initials = (name) =>
  name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();

function Attendance() {
  const [selectedClass, setSelectedClass] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = attendanceRecords.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredByClass = selectedClass === "all"
    ? filtered
    : filtered.filter((r) => r.className.toLowerCase().endsWith(selectedClass.toLowerCase().replace("grade", "").trim()));

  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon"><Icon name="check" size={26} /></div>
          <div>
            <div className="admin-breadcrumb"><span>Dashboard</span><span>/</span><span>Attendance</span></div>
            <h1>Attendance</h1>
            <p>Track and manage student attendance across all classes.</p>
          </div>
        </div>
        <img src="/students3.jpg" alt="Attendance" className="admin-page-header-image" />
      </section>

      <section className="admin-mini-stats admin-mini-stats-4">
        <div className="admin-mini-stat green">
          <div className="admin-mini-stat-icon"><Icon name="users" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Total Students</span>
            <strong>124</strong>
            <small>+ 2 this month</small>
          </div>
        </div>
        <div className="admin-mini-stat green">
          <div className="admin-mini-stat-icon"><Icon name="check" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Present Today</span>
            <strong>107</strong>
            <small>86.3%</small>
          </div>
        </div>
        <div className="admin-mini-stat orange">
          <div className="admin-mini-stat-icon"><Icon name="user" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Absent Today</span>
            <strong>12</strong>
            <small>9.7%</small>
          </div>
        </div>
        <div className="admin-mini-stat purple">
          <div className="admin-mini-stat-icon"><Icon name="clock" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Late Today</span>
            <strong>5</strong>
            <small>4.0%</small>
          </div>
        </div>
      </section>

      <div className="admin-toolbar">
        <button type="button" className="admin-date-filter">
          <Icon name="calendar" size={16} />
          22 Apr 2025
          <Icon name="chevron" size={14} />
        </button>
        <select className="admin-toolbar-select">
          <option>All Classes</option>
          <option>Grade 6A</option>
          <option>Grade 6B</option>
          <option>Grade 5A</option>
        </select>
        <select className="admin-toolbar-select">
          <option>All Grades</option>
          <option>Grade 6</option>
          <option>Grade 5</option>
          <option>Grade 4</option>
        </select>
        <div className="admin-toolbar-search">
          <Icon name="search" size={18} />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button type="button" className="admin-add-button">
          <Icon name="chart" size={16} />
          View Report
        </button>
        <button type="button" className="admin-small-btn">
          <Icon name="check" size={16} />
          Mark Attendance
        </button>
      </div>

      <div className="admin-attendance-layout">
        <div className="admin-attendance-side-left">
          <div className="admin-card" style={{ padding: 16 }}>
            <div className="admin-card-header" style={{ marginBottom: 10 }}>
              <div className="admin-card-title">
                <h2>Classes</h2>
              </div>
            </div>
            <div className="admin-class-list">
              {classes.map((c) => (
                <div
                  key={c.id}
                  className={`admin-class-list-item ${selectedClass === c.id ? "active" : ""}`}
                  onClick={() => setSelectedClass(c.id)}
                >
                  <span className={`admin-class-list-dot ${c.color}`}></span>
                  <span className="admin-class-list-name">{c.name}</span>
                  <span className="admin-class-list-count">{c.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="admin-attendance-main">
          <div className="admin-card" style={{ padding: 0 }}>
            <div className="admin-card-header" style={{ padding: "18px 20px 0" }}>
              <div className="admin-card-title">
                <h2>Attendance - {selectedClass === "all" ? "All Classes" : `Grade ${selectedClass}`} (22 Apr 2025)</h2>
              </div>
            </div>
            <div style={{ padding: "10px 20px 16px" }}>
              <table className="admin-attendance-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Student</th>
                    <th>Class</th>
                    <th>Status</th>
                    <th>In</th>
                    <th>Notes</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredByClass.map((rec, index) => (
                    <tr key={rec.id}>
                      <td><span className="admin-student-number">{index + 1}.</span></td>
                      <td>
                        <div className="admin-student-photo-cell">
                          <div className="admin-student-avatar" style={{ width: 30, height: 30, fontSize: "0.68rem" }}>
                            {initials(rec.name)}
                          </div>
                          <strong>{rec.name}</strong>
                        </div>
                      </td>
                      <td>{rec.className}</td>
                      <td>
                        <span className={`admin-status-pill ${rec.status.toLowerCase()}`}>
                          <Icon name={rec.status === "Present" ? "check" : rec.status === "Late" ? "clock" : "user"} size={11} />
                          {rec.status}
                        </span>
                      </td>
                      <td>{rec.checkIn}</td>
                      <td>{rec.notes}</td>
                      <td>
                        <div className="admin-row-actions" style={{ justifyContent: "flex-end" }}>
                          <button type="button" className="admin-icon-button"><Icon name="edit" size={15} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="admin-attendance-side-right">
          <div className="admin-attendance-rate-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <h2>Attendance Rate</h2>
              </div>
            </div>
            <div className="admin-attendance-rate-top">
              <div className="admin-rate-donut">
                <svg viewBox="0 0 36 36" className="admin-rate-donut-svg">
                  <path d="M18 2.5 a15.5 15.5 0 1 1 0 31 a15.5 15.5 0 1 1 0 -31" fill="none" stroke="#e2e8f0" strokeWidth="3.5" />
                  <path d="M18 2.5 a15.5 15.5 0 1 1 0 31 a15.5 15.5 0 1 1 0 -31" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeDasharray="86.3 100" strokeLinecap="round" />
                </svg>
                <div className="admin-rate-donut-text">
                  <strong>86.3%</strong>
                  <span>Present</span>
                </div>
              </div>
              <div className="admin-rate-legend">
                <div className="admin-rate-legend-row">
                  <span className="admin-rate-dot blue" />
                  <span>Present</span>
                  <strong>107</strong>
                </div>
                <div className="admin-rate-legend-row">
                  <span className="admin-rate-dot red" />
                  <span>Absent</span>
                  <strong>12</strong>
                </div>
                <div className="admin-rate-legend-row">
                  <span className="admin-rate-dot purple" />
                  <span>Late</span>
                  <strong>5</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <h2>April 2025</h2>
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
                {["", "31", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"].map((d, i) => {
                  if (d === "") return <span key={i}></span>;
                  return (
                    <span key={i} className={`calendar-day ${d === "22" ? "today" : ""}`}>
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

export default Attendance;