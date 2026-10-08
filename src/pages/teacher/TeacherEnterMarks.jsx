import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/teacher/exams.css";

const initialStudents = [
  { id: 1, name: "Thabo Molefe", mark: 88, comment: "" },
  { id: 2, name: "Naledi Kgosi", mark: 82, comment: "" },
  { id: 3, name: "Rorisang Kgosi", mark: null, comment: "" },
  { id: 4, name: "Tumisang Mokoena", mark: 75, comment: "" },
  { id: 5, name: "Refilwe Sepokgolo", mark: null, comment: "" },
  { id: 6, name: "Lesedi Pule", mark: 55, comment: "" },
  { id: 7, name: "Karabo Mokwena", mark: 91, comment: "" },
  { id: 8, name: "Palesa Ditiro", mark: 68, comment: "" },
  { id: 9, name: "Otlotleng Sefako", mark: null, comment: "" },
  { id: 10, name: "Botshelo Ndlovu", mark: 45, comment: "" },
];

const classesList = ["Grade 6A", "Grade 6B"];

const initials = (name) =>
  name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();

const getGrade = (mark, max) => {
  if (mark === null || mark === "" || isNaN(mark)) return "-";
  const pct = (Number(mark) / max) * 100;
  if (pct >= 80) return "A";
  if (pct >= 70) return "B";
  if (pct >= 60) return "C";
  if (pct >= 50) return "D";
  return "F";
};

function TeacherEnterMarks({ onBack }) {
  const [students, setStudents] = useState(initialStudents);
  const [selectedClass, setSelectedClass] = useState("Grade 6A");
  const [maxMarks] = useState(100);

  const setMark = (id, value) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, mark: value === "" ? null : Number(value) } : s))
    );
  };

  const setComment = (id, value) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, comment: value } : s))
    );
  };

  const enteredMarks = students.filter((s) => s.mark !== null && s.mark !== "").map((s) => s.mark);
  const enteredCount = enteredMarks.length;
  const average = enteredCount
    ? Math.round(enteredMarks.reduce((a, b) => a + b, 0) / enteredCount)
    : 0;
  const highest = enteredCount ? Math.max(...enteredMarks) : 0;
  const lowest = enteredCount ? Math.min(...enteredMarks) : 0;

  return (
    <>
      <section className="teacher-submissions-header">
        <button type="button" className="teacher-submissions-back" onClick={onBack}>
          <Icon name="arrow" size={18} />
        </button>
        <div className="teacher-submissions-header-text">
          <h1>Mathematics Test 1 - Enter Marks</h1>
          <p>Grade 6A &middot; Apr 28, 2025 &middot; 08:00 - 10:00 &middot; Room 12 &middot; 100 marks</p>
        </div>
      </section>

      <div className="teacher-exams-toolbar">
        <select
          className="teacher-exams-select"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          {classesList.map((c) => <option key={c}>{c}</option>)}
        </select>
        <div style={{ flex: 1 }}></div>
        <div className="teacher-submissions-filter">
          <button type="button" className="teacher-submissions-filter-btn active">
            Current Term
          </button>
          <button type="button" className="teacher-submissions-filter-btn">
            All Terms
          </button>
        </div>
        <button type="button" className="teacher-exams-add">
          <Icon name="check" size={15} />
          Save Marks
        </button>
      </div>

      <div className="teacher-exams-layout">
        <div className="teacher-exams-main">
          <div className="teacher-card" style={{ padding: 0 }}>
            <div className="teacher-card-header" style={{ padding: "18px 20px 0" }}>
              <div className="teacher-card-title">
                <div className="teacher-card-title-icon"><Icon name="exam" size={16} /></div>
                <h2>Enter Marks - {selectedClass}</h2>
              </div>
              <span style={{ fontSize: "0.78rem", color: "#64748b" }}>
                {enteredCount} of {students.length} entered
              </span>
            </div>
            <div style={{ padding: "10px 16px 16px" }}>
              <table className="teacher-marks-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Student</th>
                    <th>Mark</th>
                    <th>Out Of</th>
                    <th>Grade</th>
                    <th>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s, index) => {
                    const grade = getGrade(s.mark, maxMarks);
                    return (
                      <tr key={s.id}>
                        <td>{index + 1}.</td>
                        <td>
                          <div className="teacher-submissions-student">
                            <div className="teacher-submissions-avatar">{initials(s.name)}</div>
                            <strong>{s.name}</strong>
                          </div>
                        </td>
                        <td>
                          <input
                            type="number"
                            className="teacher-marks-input"
                            value={s.mark === null ? "" : s.mark}
                            onChange={(e) => setMark(s.id, e.target.value)}
                            placeholder="-"
                            min="0"
                            max={maxMarks}
                          />
                        </td>
                        <td>{maxMarks}</td>
                        <td>
                          {grade !== "-" ? (
                            <span className={`teacher-grade-pill ${grade.toLowerCase()}`}>
                              {grade}
                            </span>
                          ) : (
                            <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>—</span>
                          )}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="teacher-marks-comment"
                            value={s.comment}
                            onChange={(e) => setComment(s.id, e.target.value)}
                            placeholder="Add a short comment..."
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="teacher-exams-side">
          <div className="teacher-exam-detail">
            <div className="teacher-exam-detail-top">
              <div className="teacher-exam-detail-icon">
                <Icon name="exam" size={22} />
              </div>
              <div className="teacher-exam-detail-title">
                <h2>Mathematics Test 1</h2>
                <span>Mathematics &middot; Grade 6A</span>
              </div>
            </div>

            <div className="teacher-exam-detail-info">
              <div className="teacher-exam-info-row">
                <div className="teacher-exam-info-icon"><Icon name="calendar" size={14} /></div>
                <span>Apr 28, 2025</span>
              </div>
              <div className="teacher-exam-info-row">
                <div className="teacher-exam-info-icon"><Icon name="clock" size={14} /></div>
                <span>08:00 - 10:00</span>
              </div>
              <div className="teacher-exam-info-row">
                <div className="teacher-exam-info-icon"><Icon name="building" size={14} /></div>
                <span>Room 12</span>
              </div>
              <div className="teacher-exam-info-row">
                <div className="teacher-exam-info-icon"><Icon name="file" size={14} /></div>
                <span>100 marks</span>
              </div>
            </div>
          </div>

          <div className="teacher-card">
            <div className="teacher-card-header">
              <div className="teacher-card-title">
                <div className="teacher-card-title-icon"><Icon name="chart" size={16} /></div>
                <h2>Class Summary</h2>
              </div>
            </div>
            <div className="teacher-marks-summary">
              <div className="teacher-marks-summary-item blue">
                <strong>{enteredCount}</strong>
                <span>Entered</span>
              </div>
              <div className="teacher-marks-summary-item green">
                <strong>{average}%</strong>
                <span>Average</span>
              </div>
              <div className="teacher-marks-summary-item purple">
                <strong>{highest}</strong>
                <span>Highest</span>
              </div>
              <div className="teacher-marks-summary-item yellow">
                <strong>{lowest}</strong>
                <span>Lowest</span>
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
                <span>Save Marks</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="chart" size={15} /></div>
                <span>Publish Results</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="message" size={15} /></div>
                <span>Send Report</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="file" size={15} /></div>
                <span>Print Class List</span>
              </button>
            </div>
          </div>

          <div className="teacher-keep-going">
            <div className="teacher-keep-going-icon"><Icon name="check" size={20} /></div>
            <div>
              <strong>Grade fairly</strong>
              <span>Every mark is a story of effort.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherEnterMarks;