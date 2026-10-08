import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/teacher/classes.css";

const initialClasses = [
  { id: "c1", code: "M", name: "Mathematics", className: "Grade 6A", time: "07:30 - 08:30", students: 32, attendance: 94, room: "Room 12", color: "blue" },
  { id: "c2", code: "E", name: "English", className: "Grade 6A", time: "08:40 - 09:40", students: 32, attendance: 92, room: "Room 12", color: "purple" },
  { id: "c3", code: "S", name: "Science", className: "Grade 6B", time: "10:00 - 11:00", students: 30, attendance: 89, room: "Room 14", color: "green" },
  { id: "c4", code: "S", name: "Setswana", className: "Grade 6B", time: "11:10 - 12:10", students: 30, attendance: 96, room: "Room 14", color: "orange" },
];

const grades = ["All Grades", "Grade 6A", "Grade 6B"];

function TeacherClasses() {
  const [classes] = useState(initialClasses);
  const [selectedId, setSelectedId] = useState(initialClasses[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [gradeFilter, setGradeFilter] = useState("All Grades");

  const selected = classes.find((c) => c.id === selectedId) || classes[0];

  const filtered = classes.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.className.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = gradeFilter === "All Grades" || c.className === gradeFilter;
    return matchesSearch && matchesGrade;
  });

  const totalStudents = classes.reduce((sum, c) => sum + c.students, 0);
  const avgAttendance = Math.round(
    classes.reduce((sum, c) => sum + c.attendance, 0) / classes.length
  );

  return (
    <>
      <section className="teacher-welcome">
        <div className="teacher-welcome-text">
          <h1>My Classes</h1>
          <p>Manage the classes you teach and their learners.</p>
        </div>
        <img src="/students2.jpg" alt="Bokamoso jwa Rona" className="teacher-welcome-image" />
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
          <div className="teacher-mini-stat-icon"><Icon name="users" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Total Students</span>
            <strong>{totalStudents}</strong>
            <small>Across classes</small>
          </div>
        </div>
        <div className="teacher-mini-stat purple">
          <div className="teacher-mini-stat-icon"><Icon name="clipboard" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Lessons This Week</span>
            <strong>20</strong>
            <small>5 per class</small>
          </div>
        </div>
        <div className="teacher-mini-stat yellow">
          <div className="teacher-mini-stat-icon"><Icon name="check" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Avg Attendance</span>
            <strong>{avgAttendance}%</strong>
            <small>This term</small>
          </div>
        </div>
      </section>

      <div className="teacher-classes-layout">
        <div className="teacher-classes-main">
          <div className="teacher-card" style={{ padding: 14 }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <div className="teacher-search" style={{ flex: 1, minWidth: 200, padding: "9px 14px" }}>
                <Icon name="search" size={16} />
                <input
                  type="text"
                  placeholder="Search classes by name or grade..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                value={gradeFilter}
                onChange={(e) => setGradeFilter(e.target.value)}
                style={{ background: "#f1f5f9", border: "1px solid transparent", borderRadius: 10, padding: "10px 14px", fontSize: "0.85rem", color: "#334155", fontFamily: "inherit", cursor: "pointer" }}
              >
                {grades.map((g) => <option key={g}>{g}</option>)}
              </select>
            </div>
          </div>

          <div className="teacher-class-grid">
            {filtered.map((cls) => (
              <div
                className="teacher-class-card"
                key={cls.id}
                onClick={() => setSelectedId(cls.id)}
                style={{ cursor: "pointer" }}
              >
                <div className={`teacher-class-card-header ${cls.color}`}>
                  <div className="teacher-class-card-icon">{cls.code}</div>
                  <div>
                    <strong>{cls.name}</strong>
                    <span>{cls.className} &middot; {cls.time}</span>
                  </div>
                </div>

                <div className="teacher-class-card-body">
                  <div className="teacher-class-info-row">
                    <div className="teacher-class-info-icon"><Icon name="users" size={15} /></div>
                    <div className="teacher-class-info-text">
                      <strong>{cls.students} Students</strong>
                      <span>Enrolled</span>
                    </div>
                  </div>
                  <div className="teacher-class-info-row">
                    <div className="teacher-class-info-icon"><Icon name="check" size={15} /></div>
                    <div className="teacher-class-info-text">
                      <strong>{cls.attendance}% Attendance</strong>
                      <span>This term</span>
                    </div>
                  </div>
                  <div className="teacher-class-info-row">
                    <div className="teacher-class-info-icon"><Icon name="building" size={15} /></div>
                    <div className="teacher-class-info-text">
                      <strong>{cls.room}</strong>
                      <span>Assigned Room</span>
                    </div>
                  </div>
                </div>

                <div className="teacher-class-card-footer">
                  <button
                    type="button"
                    className="teacher-class-action"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Class
                    <Icon name="arrow" size={14} />
                  </button>
                  <button
                    type="button"
                    className="teacher-class-action-icon"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon name="check" size={15} />
                  </button>
                  <button
                    type="button"
                    className="teacher-class-action-icon"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon name="message" size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="teacher-classes-side">
          <div className="teacher-class-detail-card">
            <div className="teacher-class-detail-top">
              <div className={`teacher-class-detail-badge ${selected.color}`}>{selected.code}</div>
              <div className="teacher-class-detail-title">
                <h2>{selected.name}</h2>
                <span>{selected.className} &middot; {selected.time}</span>
              </div>
            </div>

            <div className="teacher-class-count-grid">
              <div className="teacher-class-count blue">
                <div className="teacher-class-count-icon"><Icon name="users" size={15} /></div>
                <strong>{selected.students}</strong>
                <span>Students</span>
              </div>
              <div className="teacher-class-count purple">
                <div className="teacher-class-count-icon"><Icon name="check" size={15} /></div>
                <strong>{selected.attendance}%</strong>
                <span>Attendance</span>
              </div>
            </div>

            <button type="button" className="teacher-class-view-details">
              View Full Class
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
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="check" size={15} /></div>
                <span>Take Attendance</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="plus" size={15} /></div>
                <span>Add Assignment</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="chart" size={15} /></div>
                <span>Enter Results</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="message" size={15} /></div>
                <span>Message Class</span>
              </button>
            </div>
          </div>

          <div className="teacher-keep-going">
            <div className="teacher-keep-going-icon"><Icon name="book" size={20} /></div>
            <div>
              <strong>Every lesson counts</strong>
              <span>Keep your learners engaged and curious.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherClasses;