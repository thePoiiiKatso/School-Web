import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/admin/subjects.css";

const initialSubjects = [
  { id: "SB-001", name: "Mathematics", category: "Core", classes: 6, teachers: 3, color: "blue", icon: "chart", description: "Numbers, algebra, geometry and problem solving." },
  { id: "SB-002", name: "English", category: "Core", classes: 6, teachers: 2, color: "purple", icon: "book", description: "Reading, writing, comprehension and grammar." },
  { id: "SB-003", name: "Science", category: "Core", classes: 6, teachers: 2, color: "green", icon: "file", description: "Life science, physical science and experiments." },
  { id: "SB-004", name: "Setswana", category: "Core", classes: 6, teachers: 2, color: "orange", icon: "book", description: "Local language, culture and oral tradition." },
  { id: "SB-005", name: "Social Studies", category: "Core", classes: 5, teachers: 1, color: "yellow", icon: "building", description: "History, geography and community studies." },
  { id: "SB-006", name: "Life Skills", category: "Core", classes: 4, teachers: 1, color: "cyan", icon: "user", description: "Personal development and everyday living skills." },
  { id: "SB-007", name: "Computer Studies", category: "Elective", classes: 2, teachers: 1, color: "blue", icon: "file", description: "Basic computing, typing and digital literacy." },
  { id: "SB-008", name: "Creative Arts", category: "Elective", classes: 2, teachers: 1, color: "pink", icon: "book", description: "Drawing, painting, music and drama." },
  { id: "SB-009", name: "Physical Education", category: "Elective", classes: 3, teachers: 2, color: "green", icon: "check", description: "Sports, fitness and healthy living." },
  { id: "SB-010", name: "Agriculture", category: "Elective", classes: 2, teachers: 1, color: "orange", icon: "building", description: "Farming, crops and animal care basics." },
];

const grades = ["All Grades", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7"];
const types = ["All Types", "Core", "Elective"];

function Subjects() {
  const [subjects] = useState(initialSubjects);
  const [selectedId, setSelectedId] = useState(initialSubjects[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [gradeFilter, setGradeFilter] = useState("All Grades");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const selected = subjects.find((s) => s.id === selectedId) || subjects[0];

  const filtered = subjects.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "All Types" || s.category === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon"><Icon name="book" size={26} /></div>
          <div>
            <div className="admin-breadcrumb"><span>Dashboard</span><span>/</span><span>Subjects</span></div>
            <h1>Subjects</h1>
            <p>Manage the master list of subjects taught across the school.</p>
          </div>
        </div>
        <img src="/students3.jpg" alt="Subjects" className="admin-page-header-image" />
      </section>

      <section className="admin-mini-stats admin-mini-stats-4">
        <div className="admin-mini-stat blue">
          <div className="admin-mini-stat-icon"><Icon name="book" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Total Subjects</span>
            <strong>10</strong>
            <small>+ 1 this term</small>
          </div>
        </div>
        <div className="admin-mini-stat green">
          <div className="admin-mini-stat-icon"><Icon name="check" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Core Subjects</span>
            <strong>6</strong>
            <small>60% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat purple">
          <div className="admin-mini-stat-icon"><Icon name="file" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Electives</span>
            <strong>4</strong>
            <small>40% of total</small>
          </div>
        </div>
        <div className="admin-mini-stat yellow">
          <div className="admin-mini-stat-icon"><Icon name="user" size={20} /></div>
          <div className="admin-mini-stat-text">
            <span>Teachers Assigned</span>
            <strong>18</strong>
            <small>Across all subjects</small>
          </div>
        </div>
      </section>

      <div className="admin-subjects-layout">
        <div className="admin-subjects-main">
          <div className="admin-toolbar">
            <div className="admin-toolbar-search">
              <Icon name="search" size={18} />
              <input
                type="text"
                placeholder="Search subjects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select className="admin-toolbar-select" value={gradeFilter} onChange={(e) => setGradeFilter(e.target.value)}>
              {grades.map((g) => <option key={g}>{g}</option>)}
            </select>
            <select className="admin-toolbar-select" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>
            <button type="button" className="admin-add-button">
              <Icon name="plus" size={16} />
              Add Subject
            </button>
          </div>

          <div className="admin-subject-grid">
            {filtered.map((s) => (
              <div
                className="admin-subject-card"
                key={s.id}
                onClick={() => setSelectedId(s.id)}
                style={{ cursor: "pointer" }}
              >
                <div className={`admin-subject-card-header ${s.color}`}>
                  <div className="admin-subject-card-icon">
                    <Icon name={s.icon} size={20} />
                  </div>
                  <div>
                    <strong>{s.name}</strong>
                    <span>{s.category}</span>
                  </div>
                </div>

                <div className="admin-subject-card-body">
                  <div className="admin-subject-info-row">
                    <div className="admin-subject-info-icon">
                      <Icon name="book" size={14} />
                    </div>
                    <div className="admin-subject-info-text">
                      <strong>{s.classes} Classes</strong>
                      <span>Uses this subject</span>
                    </div>
                  </div>
                  <div className="admin-subject-info-row">
                    <div className="admin-subject-info-icon">
                      <Icon name="user" size={14} />
                    </div>
                    <div className="admin-subject-info-text">
                      <strong>{s.teachers} Teachers</strong>
                      <span>Assigned to teach</span>
                    </div>
                  </div>
                </div>

                <div className="admin-subject-card-footer">
                  <button
                    type="button"
                    className="admin-subject-action"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Subject
                    <Icon name="arrow" size={14} />
                  </button>
                  <button
                    type="button"
                    className="admin-subject-action-icon"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon name="edit" size={15} />
                  </button>
                  <button
                    type="button"
                    className="admin-subject-action-icon danger"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon name="trash" size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-subjects-side">
          <div className="admin-highlight-card">
            <div className={`admin-highlight-header ${selected.color}`}>
              <span className="subject-category">
                <Icon name="book" size={12} />
                {selected.category} Subject
              </span>
              <h3>{selected.name}</h3>
            </div>
            <div className="admin-highlight-body">
              <p className="admin-highlight-description">{selected.description}</p>

              <div className="admin-subject-count-grid">
                <div className="admin-subject-count blue">
                  <div className="admin-subject-count-icon"><Icon name="book" size={15} /></div>
                  <strong>{selected.classes}</strong>
                  <span>Classes</span>
                </div>
                <div className="admin-subject-count purple">
                  <div className="admin-subject-count-icon"><Icon name="user" size={15} /></div>
                  <strong>{selected.teachers}</strong>
                  <span>Teachers</span>
                </div>
              </div>

              <button type="button" className="admin-view-details-btn">
                View Subject Details
                <Icon name="arrow" size={14} />
              </button>
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
                <span>Add Subject</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="user" size={15} /></div>
                <span>Assign Teachers</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="file" size={15} /></div>
                <span>Manage Syllabus</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="chart" size={15} /></div>
                <span>Subject Reports</span>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="chart" size={16} /></div>
                <h2>Subject Overview</h2>
              </div>
            </div>
            <div className="admin-subject-count-grid">
              <div className="admin-subject-count blue">
                <div className="admin-subject-count-icon"><Icon name="book" size={15} /></div>
                <strong>6</strong>
                <span>Core</span>
              </div>
              <div className="admin-subject-count purple">
                <div className="admin-subject-count-icon"><Icon name="file" size={15} /></div>
                <strong>4</strong>
                <span>Electives</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subjects;