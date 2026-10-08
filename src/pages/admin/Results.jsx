import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/admin/results.css";

const results = [
  { id: 1, name: "Thabo Mokoena", className: "Grade 6A", subject: "Mathematics", mark: 88, grade: "A", teacher: "Mr. T. Kgosi" },
  { id: 2, name: "Naledi Kgosi", className: "Grade 6B", subject: "English", mark: 82, grade: "B", teacher: "Ms. P. Motsamai" },
  { id: 3, name: "Kagiso Mokwena", className: "Grade 7A", subject: "Science", mark: 75, grade: "B", teacher: "Mr. L. Phiri" },
  { id: 4, name: "Refilwe Sepokgolo", className: "Grade 7B", subject: "Setswana", mark: 68, grade: "C", teacher: "Ms. T. Mokoena" },
  { id: 5, name: "Lesedi Pule", className: "Grade 5A", subject: "Life Skills", mark: 55, grade: "D", teacher: "Ms. P. Motsamai" },
  { id: 6, name: "Palesa Ditiro", className: "Grade 5B", subject: "Mathematics", mark: 91, grade: "A", teacher: "Mr. T. Kgosi" },
  { id: 7, name: "Karabo Mokwena", className: "Grade 6A", subject: "History", mark: 78, grade: "B", teacher: "Mr. S. Dlamini" },
  { id: 8, name: "Otlotleng Sefako", className: "Grade 4A", subject: "Science", mark: 42, grade: "F", teacher: "Mr. L. Phiri" },
];

const subjects = ["All Subjects", "Mathematics", "English", "Science", "Setswana", "Life Skills", "History"];
const classesList = ["All Classes", "Grade 4A", "Grade 5A", "Grade 5B", "Grade 6A", "Grade 6B", "Grade 7A", "Grade 7B"];
const terms = ["All Terms", "Term 1", "Term 2", "Term 3"];

const initials = (name) =>
  name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();

function Results() {
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState("All Classes");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");
  const [termFilter, setTermFilter] = useState("All Terms");

  const filtered = results.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) || r.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = classFilter === "All Classes" || r.className === classFilter;
    const matchesSubject = subjectFilter === "All Subjects" || r.subject === subjectFilter;
    return matchesSearch && matchesClass && matchesSubject;
  });

  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon"><Icon name="chart" size={26} /></div>
          <div>
            <div className="admin-breadcrumb"><span>Dashboard</span><span>/</span><span>Results</span></div>
            <h1>Results</h1>
            <p>Enter, review and publish student results.</p>
          </div>
        </div>
        <img src="/students3.jpg" alt="Results" className="admin-page-header-image" />
      </section>

      <section className="admin-mini-stats admin-mini-stats-4">
        <div className="admin-mini-stat blue">
          <div className="admin-mini-stat-icon"><Icon name="chart" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Total Results</span>
            <strong>248</strong>
            <small>+ 12 this term</small>
          </div>
        </div>
        <div className="admin-mini-stat green">
          <div className="admin-mini-stat-icon"><Icon name="check" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Passed</span>
            <strong>218</strong>
            <small>88% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat orange">
          <div className="admin-mini-stat-icon"><Icon name="user" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Failed</span>
            <strong>18</strong>
            <small>7% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat purple">
          <div className="admin-mini-stat-icon"><Icon name="results" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Average</span>
            <strong>72%</strong>
            <small>+ 3% from last term</small>
          </div>
        </div>
      </section>

      <div className="admin-results-layout">
        <div className="admin-results-main">
          <div className="admin-toolbar">
            <div className="admin-toolbar-search">
              <Icon name="search" size={18} />
              <input
                type="text"
                placeholder="Search by student, subject..."
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
            <select className="admin-toolbar-select" value={termFilter} onChange={(e) => setTermFilter(e.target.value)}>
              {terms.map((t) => <option key={t}>{t}</option>)}
            </select>
            <button type="button" className="admin-add-button">
              <Icon name="plus" size={16} />
              Enter Results
            </button>
          </div>

          <div className="admin-card" style={{ padding: 0 }}>
            <div className="admin-card-header" style={{ padding: "18px 20px 0" }}>
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="chart" size={16} /></div>
                <h2>Class Results</h2>
              </div>
            </div>
            <div style={{ padding: "10px 16px 16px" }}>
              <table className="admin-results-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Student</th>
                    <th>Class</th>
                    <th>Subject</th>
                    <th>Mark</th>
                    <th>Grade</th>
                    <th>Teacher</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((rec, index) => (
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
                      <td>{rec.subject}</td>
                      <td><strong style={{ color: "#0f172a" }}>{rec.mark}%</strong></td>
                      <td>
                        <span className={`admin-grade-pill ${rec.grade.toLowerCase()}`}>{rec.grade}</span>
                      </td>
                      <td>{rec.teacher}</td>
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

        <div className="admin-results-side">
          <div className="admin-top-student-card">
            <div className="admin-top-student-header">
              <div className="admin-top-student-avatar">PD</div>
              <div className="admin-top-student-info">
                <strong>Palesa Ditiro</strong>
                <span>Top Student &middot; Grade 5B</span>
              </div>
            </div>
            <div className="admin-top-student-stats">
              <div className="admin-top-student-stat">
                <span>Average</span>
                <strong>91%</strong>
              </div>
              <div className="admin-top-student-stat">
                <span>Subjects</span>
                <strong>8</strong>
              </div>
            </div>
          </div>

          <div className="admin-results-overview-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="chart" size={16} /></div>
                <h2>Results Overview</h2>
              </div>
            </div>

            <div className="admin-results-donut-wrap">
              <div className="admin-results-donut">
                <svg viewBox="0 0 36 36" className="admin-results-donut-svg">
                  <path d="M18 2.5 a15.5 15.5 0 1 1 0 31 a15.5 15.5 0 1 1 0 -31" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                  <path d="M18 2.5 a15.5 15.5 0 1 1 0 31 a15.5 15.5 0 1 1 0 -31" fill="none" stroke="#16a34a" strokeWidth="4" strokeDasharray="88 100" strokeLinecap="round" />
                </svg>
                <div className="admin-results-donut-text">
                  <strong>88%</strong>
                  <span>Pass Rate</span>
                </div>
              </div>
              <div className="admin-grade-legend">
                <div className="admin-grade-legend-row">
                  <span className="admin-grade-legend-dot a" />
                  <span>A</span>
                  <strong>62</strong>
                </div>
                <div className="admin-grade-legend-row">
                  <span className="admin-grade-legend-dot b" />
                  <span>B</span>
                  <strong>78</strong>
                </div>
                <div className="admin-grade-legend-row">
                  <span className="admin-grade-legend-dot c" />
                  <span>C</span>
                  <strong>56</strong>
                </div>
                <div className="admin-grade-legend-row">
                  <span className="admin-grade-legend-dot d" />
                  <span>D</span>
                  <strong>22</strong>
                </div>
                <div className="admin-grade-legend-row">
                  <span className="admin-grade-legend-dot f" />
                  <span>F</span>
                  <strong>18</strong>
                </div>
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
                <span>Enter Results</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="check" size={15} /></div>
                <span>Publish Results</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="file" size={15} /></div>
                <span>View Report Cards</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="chart" size={15} /></div>
                <span>Print Transcripts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;