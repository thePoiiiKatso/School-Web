import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/admin/parents.css";

const parents = [
  { id: "PAR-001", name: "Lerato Molefe", relationship: "Mother", phone: "+267 71 234 5678", email: "lerato@example.com", children: "Thabo Molefe, Naledi Molefe", count: 2, status: "Active" },
  { id: "PAR-002", name: "Kagiso Dlamini", relationship: "Father", phone: "+267 72 345 6789", email: "kagiso@example.com", children: "Sipho Dlamini", count: 1, status: "Active" },
  { id: "PAR-003", name: "Bathusi Kgosi", relationship: "Guardian", phone: "+267 73 456 7890", email: "bathusi@example.com", children: "Lesedi Kgosi", count: 1, status: "Active" },
  { id: "PAR-004", name: "Tebogo Mokoena", relationship: "Mother", phone: "+267 74 567 8901", email: "tebogo@example.com", children: "Karabo Mokoena, Refilwe Mokoena", count: 2, status: "Active" },
  { id: "PAR-005", name: "Tumisang Sefako", relationship: "Father", phone: "+267 75 678 9012", email: "tumisang@example.com", children: "Otlotleng Sefako", count: 1, status: "Active" },
  { id: "PAR-006", name: "Mpho Kgale", relationship: "Mother", phone: "+267 76 789 0123", email: "mpho@example.com", children: "Tebogo Kgale", count: 1, status: "Pending" },
  { id: "PAR-007", name: "Kebadiretse Ndlovu", relationship: "Guardian", phone: "+267 77 890 1234", email: "keba@example.com", children: "Botshelo Ndlovu", count: 1, status: "Active" },
];

const relationships = ["All Relationships", "Mother", "Father", "Guardian"];
const statuses = ["All Status", "Active", "Pending"];
const allStudents = ["Thabo Molefe (Grade 6A)", "Naledi Molefe (Grade 6B)", "Sipho Dlamini (Grade 5A)", "Lesedi Kgosi (Grade 7A)", "Karabo Mokoena (Grade 6A)", "Refilwe Mokoena (Grade 7B)"];

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function Parents() {
  const [view, setView] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [relationshipFilter, setRelationshipFilter] = useState("All Relationships");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [selectedParent, setSelectedParent] = useState(parents[0]);

  const filtered = parents.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.phone.includes(searchTerm);
    const matchesRelationship =
      relationshipFilter === "All Relationships" || p.relationship === relationshipFilter;
    const matchesStatus =
      statusFilter === "All Status" || p.status === statusFilter;
    return matchesSearch && matchesRelationship && matchesStatus;
  });

  if (view === "add") {
    return <AddParent onCancel={() => setView("list")} />;
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
              <span>Parents</span>
            </div>
            <h1>Parents</h1>
            <p>Manage parent and guardian information, link them to students and keep track of their details.</p>
          </div>
        </div>
        <img
          src="/students1.jpg"
          alt="Parents"
          className="admin-page-header-image"
        />
      </section>

      <div className="admin-parents-layout">
        <div className="admin-parents-main">
          <section className="admin-mini-stats admin-mini-stats-4">
            <div className="admin-mini-stat blue">
              <div className="admin-mini-stat-icon"><Icon name="users" size={20} /></div>
              <div className="admin-mini-stat-text">
                <span>Total Parents</span>
                <strong>124</strong>
                <small>+ 4 this month</small>
              </div>
            </div>
            <div className="admin-mini-stat green">
              <div className="admin-mini-stat-icon"><Icon name="user" size={20} /></div>
              <div className="admin-mini-stat-text">
                <span>Parents with 1 Child</span>
                <strong>78</strong>
                <small>63% of total</small>
              </div>
            </div>
            <div className="admin-mini-stat purple">
              <div className="admin-mini-stat-icon"><Icon name="users" size={20} /></div>
              <div className="admin-mini-stat-text">
                <span>Parents with Multiple Children</span>
                <strong>42</strong>
                <small>34% of total</small>
              </div>
            </div>
            <div className="admin-mini-stat yellow">
              <div className="admin-mini-stat-icon"><Icon name="clock" size={20} /></div>
              <div className="admin-mini-stat-text">
                <span>Unlinked Parents</span>
                <strong>4</strong>
                <small>3% of total</small>
              </div>
            </div>
          </section>

          <div className="admin-toolbar">
            <div className="admin-toolbar-search">
              <Icon name="search" size={18} />
              <input
                type="text"
                placeholder="Search by parent name, email, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="admin-toolbar-select"
              value={relationshipFilter}
              onChange={(e) => setRelationshipFilter(e.target.value)}
            >
              {relationships.map((r) => <option key={r}>{r}</option>)}
            </select>
            <select
              className="admin-toolbar-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
            <button type="button" className="admin-secondary-button">
              <Icon name="file" size={15} />
              Export
            </button>
          </div>

          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: 40 }}>
                    <input type="checkbox" className="admin-table-checkbox" />
                  </th>
                  <th>Parent Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Children</th>
                  <th>Status</th>
                  <th style={{ width: 100 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((parent) => (
                  <tr
                    key={parent.id}
                    onClick={() => setSelectedParent(parent)}
                    style={{ cursor: "pointer" }}
                  >
                    <td>
                      <input type="checkbox" className="admin-table-checkbox" onClick={(e) => e.stopPropagation()} />
                    </td>
                    <td>
                      <div className="admin-student-cell">
                        <div className="admin-student-avatar">{initials(parent.name)}</div>
                        <div className="admin-student-cell-text">
                          <strong>{parent.name}</strong>
                          <span>{parent.relationship}</span>
                        </div>
                      </div>
                    </td>
                    <td>{parent.phone}</td>
                    <td>{parent.email}</td>
                    <td>{parent.count}</td>
                    <td>
                      <span className={`admin-status-dot ${parent.status === "Pending" ? "inactive" : ""}`}>
                        {parent.status}
                      </span>
                    </td>
                    <td>
                      <div className="admin-row-actions">
                        <button type="button" className="admin-icon-button"><Icon name="edit" size={16} /></button>
                        <button type="button" className="admin-icon-button"><Icon name="message" size={16} /></button>
                        <button type="button" className="admin-icon-button danger"><Icon name="trash" size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-parents-side">
          <button
            type="button"
            className="admin-primary-button admin-primary-button-block"
            onClick={() => setView("add")}
          >
            <Icon name="plus" size={16} />
            Add Parent
          </button>

          <div className="admin-parent-preview">
            <div className="admin-parent-preview-top">
              <div className="admin-parent-avatar">{initials(selectedParent.name)}</div>
              <div className="admin-parent-preview-info">
                <strong>{selectedParent.name}</strong>
                <span>{selectedParent.relationship}</span>
              </div>
              <button type="button" className="admin-icon-button">
                <Icon name="edit" size={16} />
              </button>
            </div>

            <div className="admin-parent-info-line">
              <div className="admin-quick-info-icon"><Icon name="message" size={14} /></div>
              <span>{selectedParent.phone}</span>
            </div>
            <div className="admin-parent-info-line">
              <div className="admin-quick-info-icon"><Icon name="message" size={14} /></div>
              <span>{selectedParent.email}</span>
            </div>
            <div className="admin-parent-info-line">
              <div className="admin-quick-info-icon"><Icon name="pin" size={14} /></div>
              <span>Gaborone, Botswana</span>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="users" size={16} /></div>
                <h2>Linked Students</h2>
              </div>
            </div>

            <div className="admin-linked-children">
              <div className="admin-linked-child">
                <div className="admin-linked-child-avatar">TM</div>
                <div className="admin-linked-child-info">
                  <strong>Thabo Molefe</strong>
                  <span>Grade 6A - ST-0001</span>
                </div>
                <Icon name="chevron" size={14} />
              </div>
              <div className="admin-linked-child">
                <div className="admin-linked-child-avatar">NM</div>
                <div className="admin-linked-child-info">
                  <strong>Naledi Molefe</strong>
                  <span>Grade 6B - ST-0002</span>
                </div>
                <Icon name="chevron" size={14} />
              </div>
            </div>

            <button type="button" className="admin-link-btn">
              View All Students
            </button>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="check" size={16} /></div>
                <h2>Parent Access</h2>
              </div>
            </div>

            <div className="admin-access-list">
              <div className="admin-access-item">
                <span className="admin-access-check"><Icon name="check" size={12} /></span>
                View child's attendance
              </div>
              <div className="admin-access-item">
                <span className="admin-access-check"><Icon name="check" size={12} /></span>
                View child's results
              </div>
              <div className="admin-access-item">
                <span className="admin-access-check"><Icon name="check" size={12} /></span>
                Receive school announcements
              </div>
              <div className="admin-access-item">
                <span className="admin-access-check"><Icon name="check" size={12} /></span>
                Send messages to teachers
              </div>
            </div>
          </div>

          <div className="admin-relationship-box">
            <strong>
              <Icon name="pin" size={14} />
              Parent-Student Relationship
            </strong>
            <p>This parent is linked to {selectedParent.count} student{selectedParent.count > 1 ? "s" : ""}.</p>
            <button type="button">Manage Relationship</button>
          </div>
        </div>
      </div>
    </>
  );
}

function AddParent({ onCancel }) {
  const [step, setStep] = useState(1);
  const [linkedStudents, setLinkedStudents] = useState([]);

  const toggleStudent = (student) => {
    if (linkedStudents.includes(student)) {
      setLinkedStudents(linkedStudents.filter((s) => s !== student));
    } else {
      setLinkedStudents([...linkedStudents, student]);
    }
  };

  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon">
            <Icon name="users" size={26} />
          </div>
          <div>
            <div className="admin-breadcrumb">
              <span>Parents</span>
              <span>/</span>
              <span>Add Parent</span>
            </div>
            <h1>Add Parent</h1>
            <p>Register a new parent and link them to their children.</p>
          </div>
        </div>
      </section>

      <div className="admin-stepper">
        <div className={`admin-step ${step === 1 ? "active" : ""}`}>
          <span className="admin-step-number">1</span>
          Parent Details
        </div>
        <div className="admin-step-divider"></div>
        <div className={`admin-step ${step === 2 ? "active" : ""}`}>
          <span className="admin-step-number">2</span>
          Linked Students
        </div>
        <div className="admin-step-divider"></div>
        <div className={`admin-step ${step === 3 ? "active" : ""}`}>
          <span className="admin-step-number">3</span>
          Permissions &amp; Access
        </div>
      </div>

      <div className="admin-form-layout">
        <form className="admin-form-card" onSubmit={(e) => e.preventDefault()}>
          <div className="admin-form-section-title">
            <div className="admin-card-title-icon"><Icon name="user" size={16} /></div>
            Personal Information
          </div>

          <div className="admin-form-grid">
            <div className="admin-form-field">
              <label>Full Name <span className="required">*</span></label>
              <input type="text" placeholder="e.g. Lerato Molefe" required />
            </div>
            <div className="admin-form-field">
              <label>ID Number</label>
              <input type="text" placeholder="e.g. 89011512345" />
            </div>
            <div className="admin-form-field">
              <label>Phone Number <span className="required">*</span></label>
              <input type="tel" placeholder="+267 71 234 5678" required />
            </div>
            <div className="admin-form-field">
              <label>Email Address <span className="required">*</span></label>
              <input type="email" placeholder="parent@example.com" required />
            </div>
            <div className="admin-form-field">
              <label>Relationship to Student(s) <span className="required">*</span></label>
              <select required defaultValue="">
                <option value="" disabled>Select relationship</option>
                <option>Mother</option>
                <option>Father</option>
                <option>Guardian</option>
                <option>Grandparent</option>
              </select>
            </div>
            <div className="admin-form-field">
              <label>Gender</label>
              <select defaultValue="">
                <option value="" disabled>Select gender</option>
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>
            <div className="admin-form-field full">
              <label>Address</label>
              <input type="text" placeholder="e.g. Plot 123, Gaborone" />
            </div>
            <div className="admin-form-field">
              <label>Postal Code</label>
              <input type="text" placeholder="e.g. 0000" />
            </div>
          </div>

          <div className="admin-form-section-title">
            <div className="admin-card-title-icon"><Icon name="user" size={16} /></div>
            Account Information
          </div>

          <div className="admin-form-grid">
            <div className="admin-form-field">
              <label>Password <span className="required">*</span></label>
              <input type="password" placeholder="Create a secure password" required />
            </div>
            <div className="admin-form-field">
              <label>Confirm Password <span className="required">*</span></label>
              <input type="password" placeholder="Re-enter password" required />
            </div>
          </div>

          {step === 2 && (
            <>
              <div className="admin-form-section-title">
                <div className="admin-card-title-icon"><Icon name="users" size={16} /></div>
                Link Students
              </div>
              <div className="admin-permissions-list">
                {allStudents.map((student) => (
                  <label key={student} className="admin-permission-item">
                    <input
                      type="checkbox"
                      checked={linkedStudents.includes(student)}
                      onChange={() => toggleStudent(student)}
                    />
                    <div className="admin-permission-item-text">
                      <strong>{student.split(" (")[0]}</strong>
                      <span>{student.split(" (")[1].replace(")", "")}</span>
                    </div>
                  </label>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="admin-form-section-title">
                <div className="admin-card-title-icon"><Icon name="check" size={16} /></div>
                Permissions &amp; Access
              </div>
              <div className="admin-permissions-list">
                <label className="admin-permission-item">
                  <input type="checkbox" defaultChecked />
                  <div className="admin-permission-item-text">
                    <strong>View child's attendance</strong>
                    <span>See daily and term attendance records.</span>
                  </div>
                </label>
                <label className="admin-permission-item">
                  <input type="checkbox" defaultChecked />
                  <div className="admin-permission-item-text">
                    <strong>View child's results</strong>
                    <span>See marks, grades and progress reports.</span>
                  </div>
                </label>
                <label className="admin-permission-item">
                  <input type="checkbox" defaultChecked />
                  <div className="admin-permission-item-text">
                    <strong>Receive school announcements</strong>
                    <span>Get notified about school news and events.</span>
                  </div>
                </label>
                <label className="admin-permission-item">
                  <input type="checkbox" defaultChecked />
                  <div className="admin-permission-item-text">
                    <strong>Send messages to teachers</strong>
                    <span>Communicate with your child's teachers.</span>
                  </div>
                </label>
              </div>
            </>
          )}

          <div className="admin-form-actions">
            <button type="button" className="admin-secondary-button" onClick={onCancel}>
              Cancel
            </button>
            {step > 1 && (
              <button
                type="button"
                className="admin-secondary-button"
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
            )}
            {step < 3 && (
              <button
                type="button"
                className="admin-primary-button"
                onClick={() => setStep(step + 1)}
              >
                Next
                <Icon name="chevron" size={16} />
              </button>
            )}
            {step === 3 && (
              <button type="submit" className="admin-primary-button">
                <Icon name="check" size={16} />
                Save Parent
              </button>
            )}
          </div>
        </form>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="admin-form-hero">
            <img
              src="/students2.jpg"
              alt="Parents"
              className="admin-form-hero-image"
            />
            <div className="admin-form-hero-text">
              Strong partnerships build brighter futures
            </div>
          </div>

          <div className="admin-quick-info">
            <h3>Why do we collect this information?</h3>
            <p style={{ margin: 0, fontSize: "0.78rem", color: "#64748b", lineHeight: 1.5 }}>
              We use this information to keep parents informed, support their
              child's learning, and maintain accurate school records.
            </p>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="check" size={16} /></div>
                <h2>Parent Tips</h2>
              </div>
            </div>
            <div className="admin-access-list">
              <div className="admin-access-item">
                <span className="admin-access-check"><Icon name="check" size={12} /></span>
                Make sure the phone number is active.
              </div>
              <div className="admin-access-item">
                <span className="admin-access-check"><Icon name="check" size={12} /></span>
                Use a valid email address.
              </div>
              <div className="admin-access-item">
                <span className="admin-access-check"><Icon name="check" size={12} /></span>
                You can link more than one child to the same parent.
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="lightning" size={16} /></div>
                <h2>What happens next?</h2>
              </div>
            </div>
            <div className="admin-access-list">
              <div className="admin-access-item">
                <span className="admin-access-check"><Icon name="check" size={12} /></span>
                Add parent details (this page).
              </div>
              <div className="admin-access-item">
                <span className="admin-access-check"><Icon name="check" size={12} /></span>
                Link the parent to their child.
              </div>
              <div className="admin-access-item">
                <span className="admin-access-check"><Icon name="check" size={12} /></span>
                Set permissions and access level.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Parents;