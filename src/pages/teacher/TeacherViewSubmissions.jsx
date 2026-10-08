import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/teacher/assignments.css";

const submissionStudents = [
  { id: 1, name: "Thabo Molefe", submitted: "Apr 22, 09:15", file: "algebra_thabo.pdf", fileSize: "1.2 MB", mark: 88, status: "Graded", answer: "I solved all 20 problems. For question 15 I used the quadratic formula because factoring was not possible." },
  { id: 2, name: "Naledi Kgosi", submitted: "Apr 22, 10:02", file: "algebra_naledi.pdf", fileSize: "980 KB", mark: 82, status: "Graded", answer: "My working is attached. I double-checked every answer before submitting." },
  { id: 3, name: "Rorisang Kgosi", submitted: "Apr 23, 08:10", file: "algebra_rorisang.pdf", fileSize: "1.4 MB", mark: null, status: "Submitted", answer: "Completed all problems. Question 18 was tricky but I solved it step by step." },
  { id: 4, name: "Tumisang Mokoena", submitted: "Apr 22, 08:45", file: "algebra_tumisang.pdf", fileSize: "1.1 MB", mark: 75, status: "Graded", answer: "I followed the examples from class and completed the worksheet." },
  { id: 5, name: "Refilwe Sepokgolo", submitted: "-", file: "-", fileSize: "-", mark: null, status: "Pending", answer: "" },
  { id: 6, name: "Lesedi Pule", submitted: "Apr 24, 14:30", file: "algebra_lesedi.pdf", fileSize: "1.3 MB", mark: null, status: "Submitted", answer: "Late submission, but I completed everything. Sorry for the delay." },
  { id: 7, name: "Karabo Mokwena", submitted: "Apr 22, 07:55", file: "algebra_karabo.pdf", fileSize: "1.0 MB", mark: 91, status: "Graded", answer: "I also wrote down the extra challenge questions at the end of the worksheet." },
  { id: 8, name: "Palesa Ditiro", submitted: "Apr 25, 09:00", file: "algebra_palesa.pdf", fileSize: "1.6 MB", mark: null, status: "Submitted", answer: "I completed all questions. Thank you for the extended deadline." },
];

const filters = ["All", "Submitted", "Pending", "Graded"];

const initials = (name) =>
  name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();

function TeacherViewSubmissions({ onBack }) {
  const [selected, setSelected] = useState(null);
  const [markInput, setMarkInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = submissionStudents.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "All" ||
      (activeFilter === "Submitted" && s.status === "Submitted") ||
      (activeFilter === "Pending" && s.status === "Pending") ||
      (activeFilter === "Graded" && s.status === "Graded");
    return matchesSearch && matchesFilter;
  });

  const openStudent = (student) => {
    setSelected(student);
    setMarkInput(student.mark !== null ? String(student.mark) : "");
    setFeedback("");
  };

  const closeModal = () => {
    setSelected(null);
    setMarkInput("");
    setFeedback("");
  };

  return (
    <>
      <section className="teacher-submissions-header">
        <button type="button" className="teacher-submissions-back" onClick={onBack}>
          <Icon name="arrow" size={18} />
        </button>
        <div className="teacher-submissions-header-text">
          <h1>Algebra Worksheet</h1>
          <p>Mathematics &middot; Grade 6A &middot; Due Apr 25, 2025 &middot; 100 marks</p>
        </div>
      </section>

      <div className="teacher-submissions-toolbar">
        <div className="teacher-assignments-search">
          <Icon name="search" size={16} />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="teacher-submissions-filter">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`teacher-submissions-filter-btn ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <button type="button" className="teacher-submissions-export">
          <Icon name="file" size={15} />
          Export Marks
        </button>
      </div>

      <div className="teacher-card" style={{ padding: 0 }}>
        <div className="teacher-card-header" style={{ padding: "18px 20px 0" }}>
          <div className="teacher-card-title">
            <div className="teacher-card-title-icon"><Icon name="file" size={16} /></div>
            <h2>Student Submissions</h2>
          </div>
          <span style={{ fontSize: "0.78rem", color: "#64748b" }}>
            {filtered.length} of {submissionStudents.length} students
          </span>
        </div>
        <div style={{ padding: "10px 16px 16px" }}>
          <table className="teacher-submissions-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Student</th>
                <th>Document</th>
                <th>Submitted</th>
                <th>Status</th>
                <th>Mark</th>
                <th style={{ width: 60 }}></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, index) => (
                <tr key={s.id} onClick={() => openStudent(s)}>
                  <td>{index + 1}.</td>
                  <td>
                    <div className="teacher-submissions-student">
                      <div className="teacher-submissions-avatar">{initials(s.name)}</div>
                      <strong>{s.name}</strong>
                    </div>
                  </td>
                  <td>
                    {s.file !== "-" ? (
                      <span className="teacher-submissions-file">
                        <Icon name="file" size={14} />
                        {s.file}
                      </span>
                    ) : (
                      <span style={{ color: "#94a3b8" }}>No document</span>
                    )}
                  </td>
                  <td>{s.submitted}</td>
                  <td>
                    <span className={`teacher-submissions-pill ${s.status.toLowerCase()}`}>
                      {s.status}
                    </span>
                  </td>
                  <td>
                    {s.mark !== null ? (
                      <span className="teacher-submissions-mark">
                        {s.mark}<small>/100</small>
                      </span>
                    ) : (
                      <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>—</span>
                    )}
                  </td>
                  <td>
                    <div className="admin-row-actions" style={{ justifyContent: "flex-end" }}>
                      <button
                        type="button"
                        className="teacher-assignment-action-icon"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon name="edit" size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <div className="teacher-submission-modal-overlay" onClick={closeModal}>
          <div className="teacher-submission-modal" onClick={(e) => e.stopPropagation()}>
            <div className="teacher-submission-modal-header">
              <div className="teacher-submissions-avatar">{initials(selected.name)}</div>
              <div className="teacher-submission-modal-header-text">
                <h3>{selected.name}</h3>
                <span>{selected.status === "Pending" ? "Not submitted yet" : `Submitted ${selected.submitted}`}</span>
              </div>
              <button type="button" className="teacher-submission-modal-close" onClick={closeModal}>
                <Icon name="trash" size={16} />
              </button>
            </div>

            <div className="teacher-submission-modal-body">
              <div className="teacher-submission-doc">
                <div className="teacher-submission-doc-top">
                  <div className="teacher-submission-doc-icon">
                    <Icon name="file" size={20} />
                  </div>
                  <div className="teacher-submission-doc-info">
                    <strong>{selected.file !== "-" ? selected.file : "No document submitted"}</strong>
                    <span>
                      {selected.file !== "-"
                        ? `PDF document \u00B7 ${selected.fileSize} \u00B7 Submitted ${selected.submitted}`
                        : "This student has not submitted any work yet."}
                    </span>
                  </div>
                  {selected.file !== "-" && (
                    <button type="button" className="teacher-submission-download">
                      <Icon name="arrow" size={15} />
                      Open
                    </button>
                  )}
                </div>

                <div className="teacher-submission-doc-preview">
                  {selected.answer || "This student has not submitted any work yet."}
                </div>
              </div>

              <div className="teacher-submission-answer">
                <label>Teacher Feedback</label>
                <textarea
                  placeholder="Add feedback for the student..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>

              <div className="teacher-submission-mark-box">
                <label>Mark:</label>
                <input
                  type="text"
                  className="teacher-submission-mark-input"
                  value={markInput}
                  onChange={(e) => setMarkInput(e.target.value)}
                  placeholder="0"
                />
                <span className="teacher-submission-mark-max">/ 100</span>
              </div>
            </div>

            <div className="teacher-submission-modal-footer">
              <button type="button" className="teacher-submission-btn secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="button" className="teacher-submission-btn primary" onClick={closeModal}>
                <Icon name="check" size={15} />
                Save Grade
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TeacherViewSubmissions;