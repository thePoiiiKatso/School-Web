import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/admin/classes.css";

const initialClasses = [
  { id: "CLS-001", badge: "6A", name: "Grade 6A", grade: "Grade 6", section: "A", teacher: "Ms. D. Ramokgopa", students: 32, boys: 18, girls: 14, status: "Active", color: "blue" },
  { id: "CLS-002", badge: "6B", name: "Grade 6B", grade: "Grade 6", section: "B", teacher: "Mr. T. Kgosi", students: 30, boys: 16, girls: 14, status: "Active", color: "purple" },
  { id: "CLS-003", badge: "5A", name: "Grade 5A", grade: "Grade 5", section: "A", teacher: "Ms. P. Motsamai", students: 28, boys: 15, girls: 13, status: "Active", color: "green" },
  { id: "CLS-004", badge: "5B", name: "Grade 5B", grade: "Grade 5", section: "B", teacher: "Mr. S. Dlamini", students: 26, boys: 14, girls: 12, status: "Active", color: "orange" },
  { id: "CLS-005", badge: "4A", name: "Grade 4A", grade: "Grade 4", section: "A", teacher: "Ms. L. Pule", students: 25, boys: 13, girls: 12, status: "Active", color: "pink" },
  { id: "CLS-006", badge: "4B", name: "Grade 4B", grade: "Grade 4", section: "B", teacher: "Mr. B. Tsheko", students: 24, boys: 12, girls: 12, status: "Active", color: "cyan" },
  { id: "CLS-007", badge: "3A", name: "Grade 3A", grade: "Grade 3", section: "A", teacher: "Ms. N. Sechele", students: 24, boys: 12, girls: 12, status: "Active", color: "blue" },
  { id: "CLS-008", badge: "3B", name: "Grade 3B", grade: "Grade 3", section: "B", teacher: "Mrs. K. Molefe", students: 22, boys: 11, girls: 11, status: "Inactive", color: "purple" },
];

const grades = ["All Grades", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7"];
const teachers = ["All Teachers", "Ms. D. Ramokgopa", "Mr. T. Kgosi", "Ms. P. Motsamai", "Mr. S. Dlamini", "Ms. L. Pule", "Mr. B. Tsheko", "Ms. N. Sechele"];

const subjects = ["Mathematics", "English", "Setswana", "Science", "Social Studies"];

const initials = (name) =>
  name.replace("Ms. ", "").replace("Mr. ", "").replace("Mrs. ", "").split(" ")
    .map((p) => p[0]).slice(0, 2).join("").toUpperCase();

function Classes() {
  const [view, setView] = useState("list");
  const [classes] = useState(initialClasses);
  const [selectedId, setSelectedId] = useState(initialClasses[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [gradeFilter, setGradeFilter] = useState("All Grades");
  const [teacherFilter, setTeacherFilter] = useState("All Teachers");

  const selected = classes.find((c) => c.id === selectedId);

  const filtered = classes.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = gradeFilter === "All Grades" || c.grade === gradeFilter;
    const matchesTeacher = teacherFilter === "All Teachers" || c.teacher === teacherFilter;
    return matchesSearch && matchesGrade && matchesTeacher;
  });

  if (view === "add") return <AddClass onCancel={() => setView("list")} />;

  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon"><Icon name="book" size={26} /></div>
          <div>
            <div className="admin-breadcrumb"><span>Dashboard</span><span>/</span><span>Classes</span></div>
            <h1>Classes</h1>
            <p>Manage all classes, teachers and student groups across the school.</p>
          </div>
        </div>
        <img src="/students2.jpg" alt="Classes" className="admin-page-header-image" />
      </section>

      <div className="admin-classes-layout">
        <div className="admin-classes-main">
          <section className="admin-mini-stats admin-mini-stats-4">
            <div className="admin-mini-stat blue">
              <div className="admin-mini-stat-icon"><Icon name="book" size={20} /></div>
              <div className="admin-mini-stat-text">
                <span>Total Classes</span>
                <strong>24</strong>
                <small>+ 2 this term</small>
              </div>
            </div>
            <div className="admin-mini-stat green">
              <div className="admin-mini-stat-icon"><Icon name="check" size={20} /></div>
              <div className="admin-mini-stat-text">
                <span>Active Classes</span>
                <strong>20</strong>
                <small>83% of total</small>
              </div>
            </div>
            <div className="admin-mini-stat yellow">
              <div className="admin-mini-stat-icon"><Icon name="clock" size={20} /></div>
              <div className="admin-mini-stat-text">
                <span>Inactive Classes</span>
                <strong>4</strong>
                <small>17% of total</small>
              </div>
            </div>
            <div className="admin-mini-stat purple">
              <div className="admin-mini-stat-icon"><Icon name="user" size={20} /></div>
              <div className="admin-mini-stat-text">
                <span>Total Teachers</span>
                <strong>18</strong>
                <small>Linked to classes</small>
              </div>
            </div>
          </section>

          <div className="admin-toolbar">
            <div className="admin-toolbar-search">
              <Icon name="search" size={18} />
              <input type="text" placeholder="Search classes by name, grade, or teacher..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <select className="admin-toolbar-select" value={gradeFilter} onChange={(e) => setGradeFilter(e.target.value)}>
              {grades.map((g) => <option key={g}>{g}</option>)}
            </select>
            <select className="admin-toolbar-select" value={teacherFilter} onChange={(e) => setTeacherFilter(e.target.value)}>
              {teachers.map((t) => <option key={t}>{t}</option>)}
            </select>
            <button type="button" className="admin-add-button" onClick={() => setView("add")}>
              <Icon name="plus" size={16} />
              Add Class
            </button>
          </div>

          <div className="admin-table-wrap">
            <table className="admin-class-table">
              <thead>
                <tr>
                  <th>Class Name</th>
                  <th>Grade</th>
                  <th>Section</th>
                  <th>Teacher</th>
                  <th>Students</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((cls) => (
                  <tr key={cls.id} onClick={() => setSelectedId(cls.id)} style={{ cursor: "pointer" }}>
                    <td>
                      <div className="admin-student-cell">
                        <div className={`admin-class-badge ${cls.color}`}>{cls.badge}</div>
                        <div className="admin-student-cell-text">
                          <strong>{cls.name}</strong>
                        </div>
                      </div>
                    </td>
                    <td>{cls.grade}</td>
                    <td>{cls.section}</td>
                    <td>
                      <div className="admin-class-teacher-name">
                        <div className="admin-student-avatar" style={{ width: 30, height: 30, fontSize: "0.68rem" }}>
                          {initials(cls.teacher)}
                        </div>
                        <strong>{cls.teacher}</strong>
                      </div>
                    </td>
                    <td>{cls.students}</td>
                    <td>
                      <span className={`admin-pill ${cls.status === "Active" ? "green" : "red"}`}>
                        {cls.status}
                      </span>
                    </td>
                    <td>
                      <div className="admin-row-actions">
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

        <div className="admin-classes-side">
          <div className="admin-class-detail-card">
            <div className="admin-class-detail-top">
              <div className={`admin-class-badge ${selected.color}`} style={{ width: 44, height: 44, fontSize: "0.95rem" }}>
                {selected.badge}
              </div>
              <div className="admin-class-detail-title">
                <h2>{selected.name}</h2>
              </div>
              <span className={`admin-pill ${selected.status === "Active" ? "green" : "red"}`}>
                {selected.status}
              </span>
            </div>

            <div className="admin-class-detail-meta">
              <span><Icon name="book" size={13} /> {selected.grade}</span>
              <span><Icon name="user" size={13} /> Section {selected.section}</span>
            </div>

            <div className="admin-class-teacher-row">
              <div className="admin-student-avatar" style={{ width: 46, height: 46, fontSize: "0.88rem" }}>
                {initials(selected.teacher)}
              </div>
              <div className="admin-class-teacher-info">
                <strong>{selected.teacher}</strong>
                <span>Class Teacher</span>
              </div>
              <button type="button" className="admin-class-view-btn">View Teacher</button>
            </div>

            <div className="admin-class-count-grid">
              <div className="admin-class-count blue">
                <div className="admin-class-count-icon"><Icon name="users" size={16} /></div>
                <strong>{selected.students}</strong>
                <span>Students</span>
              </div>
              <div className="admin-class-count purple">
                <div className="admin-class-count-icon"><Icon name="user" size={16} /></div>
                <strong>{selected.boys}</strong>
                <span>Boys</span>
              </div>
              <div className="admin-class-count pink">
                <div className="admin-class-count-icon"><Icon name="user" size={16} /></div>
                <strong>{selected.girls}</strong>
                <span>Girls</span>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="book" size={16} /></div>
                <h2>Subjects</h2>
              </div>
            </div>
            <div className="admin-subjects-list">
              {subjects.map((s) => (
                <div className="admin-subject-line" key={s}>
                  <span>{s}</span>
                  <Icon name="chevron" size={14} />
                </div>
              ))}
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
                <div className="admin-quick-icon"><Icon name="users" size={15} /></div>
                <span>View Students</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="file" size={15} /></div>
                <span>View Timetable</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="chart" size={15} /></div>
                <span>View Results</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="megaphone" size={15} /></div>
                <span>Send Announcement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AddClass({ onCancel }) {
  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon"><Icon name="book" size={26} /></div>
          <div>
            <div className="admin-breadcrumb"><span>Classes</span><span>/</span><span>Add Class</span></div>
            <h1>Add New Class</h1>
            <p>Create a new class and assign it a teacher and room.</p>
          </div>
        </div>
      </section>

      <div className="admin-form-layout">
        <form className="admin-form-card" onSubmit={(e) => e.preventDefault()}>
          <div className="admin-form-section-title">
            <div className="admin-card-title-icon"><Icon name="book" size={16} /></div>
            Class Information
          </div>
          <div className="admin-form-grid">
            <div className="admin-form-field"><label>Class Name <span className="required">*</span></label><input type="text" placeholder="e.g. Grade 6A" required /></div>
            <div className="admin-form-field">
              <label>Grade <span className="required">*</span></label>
              <select required defaultValue=""><option value="" disabled>Select grade</option><option>Grade 3</option><option>Grade 4</option><option>Grade 5</option><option>Grade 6</option><option>Grade 7</option></select>
            </div>
            <div className="admin-form-field">
              <label>Section</label>
              <input type="text" placeholder="e.g. A" />
            </div>
            <div className="admin-form-field">
              <label>Class Teacher <span className="required">*</span></label>
              <select required defaultValue="">
                <option value="" disabled>Select teacher</option>
                {teachers.slice(1).map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="admin-form-field"><label>Room</label><input type="text" placeholder="e.g. Room 12" /></div>
            <div className="admin-form-field"><label>Capacity</label><input type="number" placeholder="e.g. 35" /></div>
          </div>
          <div className="admin-form-actions">
            <button type="button" className="admin-secondary-button" onClick={onCancel}>Cancel</button>
            <button type="submit" className="admin-primary-button"><Icon name="check" size={16} />Save Class</button>
          </div>
        </form>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="admin-form-hero">
            <img src="/students3.jpg" alt="Class" className="admin-form-hero-image" />
            <div className="admin-form-hero-text">Every classroom is a new beginning</div>
          </div>
          <div className="admin-quick-info">
            <h3>Quick Information</h3>
            <div className="admin-quick-info-row"><div className="admin-quick-info-icon"><Icon name="book" size={15} /></div><div className="admin-quick-info-text"><strong>Class Name</strong><span>Use a clear, consistent name like "Grade 6A".</span></div></div>
            <div className="admin-quick-info-row"><div className="admin-quick-info-icon"><Icon name="user" size={15} /></div><div className="admin-quick-info-text"><strong>Class Teacher</strong><span>Assign a teacher who will manage the class.</span></div></div>
            <div className="admin-quick-info-row"><div className="admin-quick-info-icon"><Icon name="building" size={15} /></div><div className="admin-quick-info-text"><strong>Room</strong><span>The classroom where the class meets.</span></div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Classes;