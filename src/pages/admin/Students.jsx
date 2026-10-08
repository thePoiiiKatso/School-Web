import { useState } from "react";
import Icon from "../../components/Icon";

const students = [
  { id: "ST-0001", name: "Thabo Mokoena", gender: "Male", age: 12, grade: "6A", parent: "Lerato Mokoena", parentPhone: "+267 71 234 5678", status: "Active" },
  { id: "ST-0002", name: "Naledi Kgosi", gender: "Female", age: 12, grade: "6B", parent: "Kabelo Kgosi", parentPhone: "+267 72 345 6789", status: "Active" },
  { id: "ST-0003", name: "Kagiso Mokwena", gender: "Male", age: 13, grade: "7A", parent: "Boitumelo Mokwena", parentPhone: "+267 73 456 7890", status: "Active" },
  { id: "ST-0004", name: "Refilwe Sepokgolo", gender: "Female", age: 13, grade: "7B", parent: "Tshepo Sepokgolo", parentPhone: "+267 74 567 8901", status: "Active" },
  { id: "ST-0005", name: "Lesedi Pule", gender: "Male", age: 11, grade: "5A", parent: "Karabo Pule", parentPhone: "+267 75 678 9012", status: "Active" },
  { id: "ST-0006", name: "Palesa Ditiro", gender: "Female", age: 11, grade: "5B", parent: "Mpho Ditiro", parentPhone: "+267 76 789 0123", status: "Inactive" },
];

const grades = ["All Grades", "Grade 5", "Grade 6", "Grade 7"];
const classes = ["All Classes", "5A", "5B", "6A", "6B", "7A", "7B"];
const statuses = ["All Status", "Active", "Inactive"];

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function Students() {
  const [view, setView] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [gradeFilter, setGradeFilter] = useState("All Grades");
  const [classFilter, setClassFilter] = useState("All Classes");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filtered = students.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.parent.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade =
      gradeFilter === "All Grades" || s.grade.startsWith(gradeFilter.split(" ")[1]);
    const matchesClass =
      classFilter === "All Classes" || s.grade === classFilter;
    const matchesStatus =
      statusFilter === "All Status" || s.status === statusFilter;
    return matchesSearch && matchesGrade && matchesClass && matchesStatus;
  });

  if (view === "add") {
    return <AddStudent onCancel={() => setView("list")} />;
  }

  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon">
            <Icon name="users" size={26} />
          </div>
          <div>
            <div className="admin-breadcrumb">
              <span>Dashboard</span>
              <span>/</span>
              <span>Students</span>
            </div>
            <h1>Students</h1>
            <p>Manage student records, class assignments and academic information.</p>
          </div>
        </div>
        <img
          src="/students2.jpg"
          alt="Students"
          className="admin-page-header-image"
        />
      </section>

      <section className="admin-mini-stats">
        <div className="admin-mini-stat blue">
          <div className="admin-mini-stat-icon">
            <Icon name="users" size={20} />
          </div>
          <div className="admin-mini-stat-text">
            <span>Total Students</span>
            <strong>248</strong>
            <small>+ 12 this term</small>
          </div>
        </div>
        <div className="admin-mini-stat green">
          <div className="admin-mini-stat-icon">
            <Icon name="user" size={20} />
          </div>
          <div className="admin-mini-stat-text">
            <span>Boys</span>
            <strong>128</strong>
            <small>52% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat purple">
          <div className="admin-mini-stat-icon">
            <Icon name="user" size={20} />
          </div>
          <div className="admin-mini-stat-text">
            <span>Girls</span>
            <strong>120</strong>
            <small>48% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat yellow">
          <div className="admin-mini-stat-icon">
            <Icon name="book" size={20} />
          </div>
          <div className="admin-mini-stat-text">
            <span>Grade 6</span>
            <strong>86</strong>
            <small>35% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat orange">
          <div className="admin-mini-stat-icon">
            <Icon name="book" size={20} />
          </div>
          <div className="admin-mini-stat-text">
            <span>Grade 7</span>
            <strong>78</strong>
            <small>31% of total</small>
          </div>
        </div>
      </section>

      <div className="admin-toolbar">
        <div className="admin-toolbar-search">
          <Icon name="search" size={18} />
          <input
            type="text"
            placeholder="Search by name, student ID, or class..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="admin-toolbar-select"
          value={gradeFilter}
          onChange={(e) => setGradeFilter(e.target.value)}
        >
          {grades.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
        <select
          className="admin-toolbar-select"
          value={classFilter}
          onChange={(e) => setClassFilter(e.target.value)}
        >
          {classes.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          className="admin-toolbar-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {statuses.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <button
          type="button"
          className="admin-primary-button"
          onClick={() => setView("add")}
        >
          <Icon name="plus" size={16} />
          Add Student
        </button>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th style={{ width: 40 }}>
                <input type="checkbox" className="admin-table-checkbox" />
              </th>
              <th>Student</th>
              <th>Student ID</th>
              <th>Grade</th>
              <th>Class</th>
              <th>Parent / Guardian</th>
              <th>Status</th>
              <th style={{ width: 120 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((student) => (
              <tr key={student.id}>
                <td>
                  <input type="checkbox" className="admin-table-checkbox" />
                </td>
                <td>
                  <div className="admin-student-cell">
                    <div
                      className={`admin-student-avatar ${
                        student.gender === "Female" ? "female" : ""
                      }`}
                    >
                      {initials(student.name)}
                    </div>
                    <div className="admin-student-cell-text">
                      <strong>{student.name}</strong>
                      <span>
                        {student.gender}, {student.age} years
                      </span>
                    </div>
                  </div>
                </td>
                <td>{student.id}</td>
                <td>
                  <span className="admin-tag blue">
                    Grade {student.grade.charAt(0)}
                  </span>
                </td>
                <td>
                  <span className="admin-tag purple">{student.grade}</span>
                </td>
                <td>
                  <div className="admin-student-cell-text">
                    <strong>{student.parent}</strong>
                    <span>{student.parentPhone}</span>
                  </div>
                </td>
                <td>
                  <span
                    className={`admin-status-dot ${
                      student.status === "Inactive" ? "inactive" : ""
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td>
                  <div className="admin-row-actions">
                    <button type="button" className="admin-icon-button">
                      <Icon name="user" size={16} />
                    </button>
                    <button type="button" className="admin-icon-button">
                      <Icon name="edit" size={16} />
                    </button>
                    <button
                      type="button"
                      className="admin-icon-button danger"
                    >
                      <Icon name="trash" size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="admin-table-footer">
          <span>
            Showing 1 to {filtered.length} of {filtered.length} students
          </span>
          <div className="admin-pagination">
            <button type="button" className="admin-page-button">
              <Icon name="chevron" size={14} />
            </button>
            <button type="button" className="admin-page-button active">
              1
            </button>
            <button type="button" className="admin-page-button">
              2
            </button>
            <button type="button" className="admin-page-button">
              3
            </button>
            <button type="button" className="admin-page-button">
              <Icon name="chevron" size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function AddStudent({ onCancel }) {
  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon">
            <Icon name="users" size={26} />
          </div>
          <div>
            <div className="admin-breadcrumb">
              <span>Students</span>
              <span>/</span>
              <span>Add Student</span>
            </div>
            <h1>Add New Student</h1>
            <p>Enter the student's details below. All fields marked with * are required.</p>
          </div>
        </div>
      </section>

      <div className="admin-form-layout">
        <form className="admin-form-card" onSubmit={(e) => e.preventDefault()}>
          <div className="admin-form-section-title">
            <div className="admin-card-title-icon">
              <Icon name="user" size={16} />
            </div>
            Personal Information
          </div>

          <div className="admin-form-grid">
            <div className="admin-form-field">
              <label>
                Full Name <span className="required">*</span>
              </label>
              <input type="text" placeholder="e.g. Thabo Mokoena" required />
            </div>
            <div className="admin-form-field">
              <label>
                Date of Birth <span className="required">*</span>
              </label>
              <input type="date" required />
            </div>
            <div className="admin-form-field">
              <label>
                Gender <span className="required">*</span>
              </label>
              <select required defaultValue="">
                <option value="" disabled>
                  Select gender
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="admin-form-field">
              <label>
                Student ID <span className="required">*</span>
              </label>
              <input type="text" placeholder="e.g. ST-0007" required />
            </div>
            <div className="admin-form-field">
              <label>
                Grade <span className="required">*</span>
              </label>
              <select required defaultValue="">
                <option value="" disabled>
                  Select grade
                </option>
                <option>Grade 5</option>
                <option>Grade 6</option>
                <option>Grade 7</option>
              </select>
            </div>
            <div className="admin-form-field">
              <label>
                Class <span className="required">*</span>
              </label>
              <select required defaultValue="">
                <option value="" disabled>
                  Select class
                </option>
                <option>5A</option>
                <option>5B</option>
                <option>6A</option>
                <option>6B</option>
                <option>7A</option>
                <option>7B</option>
              </select>
            </div>
          </div>

          <div className="admin-form-section-title">
            <div className="admin-card-title-icon">
              <Icon name="users" size={16} />
            </div>
            Parent / Guardian Information
          </div>

          <div className="admin-form-grid">
            <div className="admin-form-field">
              <label>
                Parent / Guardian Name <span className="required">*</span>
              </label>
              <input type="text" placeholder="e.g. Lerato Mokoena" required />
            </div>
            <div className="admin-form-field">
              <label>
                Contact Number <span className="required">*</span>
              </label>
              <input type="tel" placeholder="e.g. +267 71 234 5678" required />
            </div>
            <div className="admin-form-field">
              <label>
                Relationship <span className="required">*</span>
              </label>
              <select required defaultValue="">
                <option value="" disabled>
                  Select relationship
                </option>
                <option>Mother</option>
                <option>Father</option>
                <option>Guardian</option>
                <option>Grandparent</option>
              </select>
            </div>
            <div className="admin-form-field">
              <label>Email (Optional)</label>
              <input type="email" placeholder="e.g. parent@example.com" />
            </div>
          </div>

          <div className="admin-form-section-title">
            <div className="admin-card-title-icon">
              <Icon name="file" size={16} />
            </div>
            Additional Information
          </div>

          <div className="admin-form-grid">
            <div className="admin-form-field full">
              <label>Address</label>
              <input type="text" placeholder="e.g. 123 Example Street, Gaborone" />
            </div>
            <div className="admin-form-field full">
              <label>Medical Notes (Optional)</label>
              <textarea placeholder="e.g. Allergic to peanuts, asthma, etc."></textarea>
            </div>
          </div>

          <div className="admin-form-actions">
            <button
              type="button"
              className="admin-secondary-button"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button type="submit" className="admin-primary-button">
              <Icon name="check" size={16} />
              Save Student
            </button>
          </div>
        </form>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="admin-form-hero">
            <img
              src="/students3.jpg"
              alt="Student"
              className="admin-form-hero-image"
            />
            <div className="admin-form-hero-text">
              Every learner matters
            </div>
          </div>

          <div className="admin-quick-info">
            <h3>Quick Information</h3>
            <div className="admin-quick-info-row">
              <div className="admin-quick-info-icon">
                <Icon name="user" size={15} />
              </div>
              <div className="admin-quick-info-text">
                <strong>Student ID</strong>
                <span>Unique identifier for the student.</span>
              </div>
            </div>
            <div className="admin-quick-info-row">
              <div className="admin-quick-info-icon">
                <Icon name="book" size={15} />
              </div>
              <div className="admin-quick-info-text">
                <strong>Grade &amp; Class</strong>
                <span>Assign the student to their grade and class.</span>
              </div>
            </div>
            <div className="admin-quick-info-row">
              <div className="admin-quick-info-icon">
                <Icon name="users" size={15} />
              </div>
              <div className="admin-quick-info-text">
                <strong>Parent / Guardian</strong>
                <span>Link the student to a parent or guardian.</span>
              </div>
            </div>
            <div className="admin-quick-info-row">
              <div className="admin-quick-info-icon">
                <Icon name="check" size={15} />
              </div>
              <div className="admin-quick-info-text">
                <strong>Medical Notes</strong>
                <span>Add any important health information.</span>
              </div>
            </div>
          </div>

          <div className="admin-tip-box">
            <Icon name="lightning" size={18} />
            <div>
              <strong>Tip</strong>
              <span>
                You can edit the student's details at any time from the Students
                page.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Students;