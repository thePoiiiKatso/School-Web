import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/admin/teachers.css";

const teachers = [
  { id: "TCH-001", name: "Mr. K. Molefe", subject: "Mathematics", classes: "Grade 6A, 6B", status: "Active" },
  { id: "TCH-002", name: "Mrs. D. Ramotswe", subject: "English", classes: "Grade 6A, 6B", status: "Active" },
  { id: "TCH-003", name: "Mr. T. Kgosi", subject: "Science", classes: "Grade 5A, 5B", status: "Active" },
  { id: "TCH-004", name: "Mrs. P. Motsamai", subject: "Setswana", classes: "Grade 6A", status: "Active" },
  { id: "TCH-005", name: "Mr. S. Dlamini", subject: "History / Social Studies", classes: "Grade 7A", status: "Active" },
  { id: "TCH-006", name: "Mrs. L. Pule", subject: "Life Skills", classes: "Grade 5A, 5B", status: "On Leave" },
  { id: "TCH-007", name: "Mr. B. Tsheko", subject: "Mathematics", classes: "Grade 7B", status: "Active" },
];

const subjects = [
  "All Subjects",
  "Mathematics",
  "English",
  "Science",
  "Setswana",
  "History / Social Studies",
  "Life Skills",
];

const classesList = [
  "All Classes",
  "Grade 5A",
  "Grade 5B",
  "Grade 6A",
  "Grade 6B",
  "Grade 7A",
  "Grade 7B",
];

const statuses = ["All Status", "Active", "On Leave"];

const subjectColors = {
  Mathematics: "blue",
  English: "purple",
  Science: "green",
  Setswana: "orange",
  "History / Social Studies": "yellow",
  "Life Skills": "blue",
};

const initials = (name) =>
  name
    .replace("Mr. ", "")
    .replace("Mrs. ", "")
    .replace("Ms. ", "")
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function Teachers() {
  const [view, setView] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");
  const [classFilter, setClassFilter] = useState("All Classes");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filtered = teachers.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject =
      subjectFilter === "All Subjects" || t.subject === subjectFilter;
    const matchesClass =
      classFilter === "All Classes" || t.classes.includes(classFilter);
    const matchesStatus =
      statusFilter === "All Status" || t.status === statusFilter;
    return matchesSearch && matchesSubject && matchesClass && matchesStatus;
  });

  if (view === "add") {
    return <AddTeacher onCancel={() => setView("list")} />;
  }

  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon">
            <Icon name="user" size={26} />
          </div>
          <div>
            <div className="admin-breadcrumb">
              <span>Our Teachers</span>
              <span>/</span>
              <span>Teachers</span>
            </div>
            <h1>Teachers</h1>
            <p>Manage your teaching staff, subjects and class assignments.</p>
          </div>
        </div>
        <img
          src="/students2.jpg"
          alt="Teachers"
          className="admin-page-header-image"
        />
      </section>

      <div className="admin-teachers-layout">
        <div className="admin-teachers-main">
          <section className="admin-mini-stats admin-mini-stats-4">
            <div className="admin-mini-stat blue">
              <div className="admin-mini-stat-icon">
                <Icon name="users" size={20} />
              </div>
              <div className="admin-mini-stat-text">
                <span>Total Teachers</span>
                <strong>18</strong>
                <small>+ 2 new this term</small>
              </div>
            </div>
            <div className="admin-mini-stat green">
              <div className="admin-mini-stat-icon">
                <Icon name="check" size={20} />
              </div>
              <div className="admin-mini-stat-text">
                <span>Active Teachers</span>
                <strong>16</strong>
                <small>+ 1 new this term</small>
              </div>
            </div>
            <div className="admin-mini-stat purple">
              <div className="admin-mini-stat-icon">
                <Icon name="clock" size={20} />
              </div>
              <div className="admin-mini-stat-text">
                <span>On Leave</span>
                <strong>1</strong>
                <small>1 back this term</small>
              </div>
            </div>
            <div className="admin-mini-stat yellow">
              <div className="admin-mini-stat-icon">
                <Icon name="book" size={20} />
              </div>
              <div className="admin-mini-stat-text">
                <span>Subjects Taught</span>
                <strong>12</strong>
                <small>Across all teachers</small>
              </div>
            </div>
          </section>

          <div className="admin-toolbar">
            <div className="admin-toolbar-search">
              <Icon name="search" size={18} />
              <input
                type="text"
                placeholder="Search by name, subject or class..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="admin-toolbar-select"
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
            >
              {subjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <select
              className="admin-toolbar-select"
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
            >
              {classesList.map((c) => (
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
          </div>

          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: 40 }}>
                    <input type="checkbox" className="admin-table-checkbox" />
                  </th>
                  <th>Name</th>
                  <th>Employee ID</th>
                  <th>Subjects</th>
                  <th>Classes</th>
                  <th>Status</th>
                  <th style={{ width: 140 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((teacher) => (
                  <tr key={teacher.id}>
                    <td>
                      <input type="checkbox" className="admin-table-checkbox" />
                    </td>
                    <td>
                      <div className="admin-student-cell">
                        <div className="admin-student-avatar">
                          {initials(teacher.name)}
                        </div>
                        <div className="admin-student-cell-text">
                          <strong>{teacher.name}</strong>
                          <span>Teacher</span>
                        </div>
                      </div>
                    </td>
                    <td>{teacher.id}</td>
                    <td>
                      <span
                        className={`admin-tag ${
                          subjectColors[teacher.subject] || "blue"
                        }`}
                      >
                        {teacher.subject}
                      </span>
                    </td>
                    <td>{teacher.classes}</td>
                    <td>
                      <span
                        className={`admin-status-dot ${
                          teacher.status === "On Leave" ? "inactive" : ""
                        }`}
                      >
                        {teacher.status}
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
                        <button type="button" className="admin-icon-button">
                          <Icon name="message" size={16} />
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
          </div>
        </div>

        <div className="admin-teachers-side">
          <button
            type="button"
            className="admin-primary-button admin-primary-button-block"
            onClick={() => setView("add")}
          >
            <Icon name="plus" size={16} />
            Add Teacher
          </button>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon">
                  <Icon name="lightning" size={16} />
                </div>
                <h2>Quick Actions</h2>
              </div>
            </div>

            <div className="admin-quick-list">
              <div className="admin-quick-list-item">
                <div className="admin-quick-info-icon">
                  <Icon name="book" size={15} />
                </div>
                <div className="admin-quick-info-text">
                  <strong>Assign Subject</strong>
                  <span>Link a teacher to a subject</span>
                </div>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-info-icon">
                  <Icon name="users" size={15} />
                </div>
                <div className="admin-quick-info-text">
                  <strong>Assign Class</strong>
                  <span>Give a teacher a class</span>
                </div>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-info-icon">
                  <Icon name="user" size={15} />
                </div>
                <div className="admin-quick-info-text">
                  <strong>View All Teachers</strong>
                  <span>See the complete list</span>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon">
                  <Icon name="chart" size={16} />
                </div>
                <h2>Teacher Overview</h2>
              </div>
            </div>

            <div className="admin-overview">
              <div className="admin-donut">
                <svg viewBox="0 0 36 36" className="admin-donut-svg">
                  <path
                    d="M18 2.5 a15.5 15.5 0 1 1 0 31 a15.5 15.5 0 1 1 0 -31"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="3.5"
                  />
                  <path
                    d="M18 2.5 a15.5 15.5 0 1 1 0 31 a15.5 15.5 0 1 1 0 -31"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="3.5"
                    strokeDasharray="89 100"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="admin-donut-text">
                  <strong>89%</strong>
                  <span>Active</span>
                </div>
              </div>
              <div className="admin-legend">
                <div className="admin-legend-row">
                  <span className="admin-legend-dot green" />
                  <span>Active</span>
                  <strong>16</strong>
                </div>
                <div className="admin-legend-row">
                  <span className="admin-legend-dot yellow" />
                  <span>On Leave</span>
                  <strong>1</strong>
                </div>
                <div className="admin-legend-row">
                  <span className="admin-legend-dot red" />
                  <span>Inactive</span>
                  <strong>1</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-quote-card">
            <p>"A great teacher can change a child's future."</p>
            <div className="admin-quote-icon">
              <Icon name="book" size={22} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AddTeacher({ onCancel }) {
  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon">
            <Icon name="user" size={26} />
          </div>
          <div>
            <div className="admin-breadcrumb">
              <span>Teachers</span>
              <span>/</span>
              <span>Add Teacher</span>
            </div>
            <h1>Add New Teacher</h1>
            <p>Enter the teacher's details below. All fields marked with * are required.</p>
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
              <input type="text" placeholder="e.g. Mr. K. Molefe" required />
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
                Employee ID <span className="required">*</span>
              </label>
              <input type="text" placeholder="e.g. TCH-008" required />
            </div>
            <div className="admin-form-field">
              <label>
                Email <span className="required">*</span>
              </label>
              <input type="email" placeholder="teacher@school.com" required />
            </div>
            <div className="admin-form-field">
              <label>
                Phone Number <span className="required">*</span>
              </label>
              <input type="tel" placeholder="+267 71 234 5678" required />
            </div>
          </div>

          <div className="admin-form-section-title">
            <div className="admin-card-title-icon">
              <Icon name="book" size={16} />
            </div>
            Teaching Information
          </div>

          <div className="admin-form-grid">
            <div className="admin-form-field">
              <label>
                Subject <span className="required">*</span>
              </label>
              <select required defaultValue="">
                <option value="" disabled>
                  Select subject
                </option>
                {subjects.slice(1).map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="admin-form-field">
              <label>
                Assigned Class <span className="required">*</span>
              </label>
              <select required defaultValue="">
                <option value="" disabled>
                  Select class
                </option>
                {classesList.slice(1).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="admin-form-field">
              <label>
                Employment Type <span className="required">*</span>
              </label>
              <select required defaultValue="">
                <option value="" disabled>
                  Select type
                </option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
              </select>
            </div>
            <div className="admin-form-field">
              <label>Date Joined</label>
              <input type="date" />
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
              <label>Notes (Optional)</label>
              <textarea placeholder="e.g. Qualifications, responsibilities, etc."></textarea>
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
              Save Teacher
            </button>
          </div>
        </form>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="admin-form-hero">
            <img
              src="/students3.jpg"
              alt="Teacher"
              className="admin-form-hero-image"
            />
            <div className="admin-form-hero-text">
              Great teachers shape great futures
            </div>
          </div>

          <div className="admin-quick-info">
            <h3>Quick Information</h3>
            <div className="admin-quick-info-row">
              <div className="admin-quick-info-icon">
                <Icon name="user" size={15} />
              </div>
              <div className="admin-quick-info-text">
                <strong>Employee ID</strong>
                <span>Unique identifier for the teacher.</span>
              </div>
            </div>
            <div className="admin-quick-info-row">
              <div className="admin-quick-info-icon">
                <Icon name="book" size={15} />
              </div>
              <div className="admin-quick-info-text">
                <strong>Subject &amp; Class</strong>
                <span>Assign subjects and classes to the teacher.</span>
              </div>
            </div>
            <div className="admin-quick-info-row">
              <div className="admin-quick-info-icon">
                <Icon name="message" size={15} />
              </div>
              <div className="admin-quick-info-text">
                <strong>Contact Details</strong>
                <span>Email and phone number for communication.</span>
              </div>
            </div>
          </div>

          <div className="admin-tip-box">
            <Icon name="lightning" size={18} />
            <div>
              <strong>Tip</strong>
              <span>
                You can assign or change subjects and classes at any time from
                the Teachers page.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teachers;