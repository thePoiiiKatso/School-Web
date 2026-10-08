import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/teacher/resources.css";

const resources = [
  { id: "r1", title: "Algebra Notes - Chapter 1", subject: "Mathematics", className: "Grade 6A", type: "PDF", date: "Apr 20, 2025", size: "1.4 MB", desc: "Full notes on solving linear equations, with worked examples." },
  { id: "r2", title: "English Grammar Rules", subject: "English", className: "Grade 6A", type: "PDF", date: "Apr 18, 2025", size: "980 KB", desc: "A guide to common grammar rules for Grade 6 learners." },
  { id: "r3", title: "Science Lab Safety Video", subject: "Science", className: "Grade 6B", type: "Video", date: "Apr 15, 2025", size: "42 MB", desc: "A short video on safety rules before doing a science practical." },
  { id: "r4", title: "Setswana Proverbs Worksheet", subject: "Setswana", className: "Grade 6B", type: "DOC", date: "Apr 12, 2025", size: "512 KB", desc: "A printable worksheet with traditional Setswana proverbs." },
  { id: "r5", title: "Khan Academy - Algebra", subject: "Mathematics", className: "Grade 6A", type: "Link", date: "Apr 10, 2025", size: "khanacademy.org", desc: "External link to free Algebra practice from Khan Academy." },
  { id: "r6", title: "Life Skills Poster", subject: "Life Skills", className: "Grade 6A", type: "Image", date: "Apr 08, 2025", size: "780 KB", desc: "A colourful poster about personal goal-setting for learners." },
];

const subjects = ["All Subjects", "Mathematics", "English", "Science", "Setswana", "Life Skills"];
const types = ["All Types", "PDF", "DOC", "Video", "Link", "Image"];
const subjectOptions = ["Mathematics", "English", "Science", "Setswana", "Life Skills"];
const classOptions = ["Grade 6A", "Grade 6B"];
const typeOptions = ["PDF", "DOC", "Video", "Link", "Image"];

function getIconName(type) {
  if (type === "PDF") return "file";
  if (type === "DOC") return "file";
  if (type === "Video") return "chart";
  if (type === "Link") return "arrow";
  return "book";
}

function TeacherResources() {
  const [selectedId, setSelectedId] = useState(resources[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [showAddModal, setShowAddModal] = useState(false);

  const selected = resources.find((r) => r.id === selectedId) || resources[0];

  const filtered = resources.filter((r) => {
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = subjectFilter === "All Subjects" || r.subject === subjectFilter;
    const matchesType = typeFilter === "All Types" || r.type === typeFilter;
    return matchesSearch && matchesSubject && matchesType;
  });

  const totalCount = resources.length;
  const pdfCount = resources.filter((r) => r.type === "PDF" || r.type === "DOC").length;
  const videoCount = resources.filter((r) => r.type === "Video").length;
  const linkCount = resources.filter((r) => r.type === "Link").length;

  return (
    <>
      <section className="teacher-welcome">
        <div className="teacher-welcome-text">
          <h1>Resources</h1>
          <p>Upload and share teaching materials with your classes.</p>
        </div>
        <img src="/students3.jpg" alt="Bokamoso jwa Rona" className="teacher-welcome-image" />
      </section>

      <section className="teacher-mini-stats">
        <div className="teacher-mini-stat blue">
          <div className="teacher-mini-stat-icon"><Icon name="file" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Total Resources</span>
            <strong>{totalCount}</strong>
            <small>In your library</small>
          </div>
        </div>
        <div className="teacher-mini-stat green">
          <div className="teacher-mini-stat-icon"><Icon name="file" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Documents</span>
            <strong>{pdfCount}</strong>
            <small>PDF and DOC files</small>
          </div>
        </div>
        <div className="teacher-mini-stat purple">
          <div className="teacher-mini-stat-icon"><Icon name="chart" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Videos</span>
            <strong>{videoCount}</strong>
            <small>Learning clips</small>
          </div>
        </div>
        <div className="teacher-mini-stat yellow">
          <div className="teacher-mini-stat-icon"><Icon name="arrow" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Links</span>
            <strong>{linkCount}</strong>
            <small>External resources</small>
          </div>
        </div>
      </section>

      <div className="teacher-resources-layout">
        <div className="teacher-resources-main">
          <div className="teacher-resources-toolbar">
            <div className="teacher-resources-search">
              <Icon name="search" size={16} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="teacher-resources-select"
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
            >
              {subjects.map((s) => <option key={s}>{s}</option>)}
            </select>
            <select
              className="teacher-resources-select"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>
            <button
              type="button"
              className="teacher-resources-add"
              onClick={() => setShowAddModal(true)}
            >
              <Icon name="plus" size={15} />
              Upload Resource
            </button>
          </div>

          <div className="teacher-resources-grid">
            {filtered.map((r) => (
              <div
                className={`teacher-resource-card ${selectedId === r.id ? "selected" : ""}`}
                key={r.id}
                onClick={() => setSelectedId(r.id)}
              >
                <div className="teacher-resource-top">
                  <div className={`teacher-resource-icon ${r.type.toLowerCase()}`}>
                    <Icon name={getIconName(r.type)} size={22} />
                  </div>
                  <div className="teacher-resource-info">
                    <h3>{r.title}</h3>
                    <span>{r.subject} &middot; {r.className}</span>
                  </div>
                </div>

                <div className="teacher-resource-meta">
                  <span><Icon name="file" size={12} /> {r.type} &middot; {r.size}</span>
                  <span><Icon name="calendar" size={12} /> {r.date}</span>
                </div>

                <div className="teacher-resource-actions">
                  <button
                    type="button"
                    className="teacher-resource-action"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon name="arrow" size={14} />
                    Open
                  </button>
                  <button
                    type="button"
                    className="teacher-resource-action-icon"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon name="edit" size={15} />
                  </button>
                  <button
                    type="button"
                    className="teacher-resource-action-icon danger"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon name="trash" size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="teacher-resources-side">
          <div className="teacher-resource-detail">
            <div className="teacher-resource-detail-top">
              <div className={`teacher-resource-detail-icon ${selected.type.toLowerCase()}`}>
                <Icon name={getIconName(selected.type)} size={26} />
              </div>
              <div className="teacher-resource-detail-title">
                <h2>{selected.title}</h2>
                <span>{selected.subject} &middot; {selected.className}</span>
              </div>
            </div>

            <div className="teacher-resource-detail-info">
              <div className="teacher-resource-info-row">
                <div className="teacher-resource-info-icon"><Icon name="file" size={14} /></div>
                <span>{selected.type} &middot; {selected.size}</span>
              </div>
              <div className="teacher-resource-info-row">
                <div className="teacher-resource-info-icon"><Icon name="calendar" size={14} /></div>
                <span>Uploaded {selected.date}</span>
              </div>
              <div className="teacher-resource-info-row">
                <div className="teacher-resource-info-icon"><Icon name="book" size={14} /></div>
                <span>{selected.subject}</span>
              </div>
            </div>

            <div className="teacher-resource-desc">{selected.desc}</div>

            <button type="button" className="teacher-resource-detail-btn">
              <Icon name="arrow" size={14} />
              Open Resource
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
              <button
                type="button"
                className="teacher-quick-item"
                onClick={() => setShowAddModal(true)}
              >
                <div className="teacher-quick-item-icon"><Icon name="plus" size={15} /></div>
                <span>Upload Resource</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="file" size={15} /></div>
                <span>Create Folder</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="message" size={15} /></div>
                <span>Share Resource</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="chart" size={15} /></div>
                <span>Manage Storage</span>
              </button>
            </div>
          </div>

          <div className="teacher-keep-going">
            <div className="teacher-keep-going-icon"><Icon name="book" size={20} /></div>
            <div>
              <strong>Share the knowledge</strong>
              <span>Good resources make great lessons.</span>
            </div>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="teacher-submission-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="teacher-submission-modal" onClick={(e) => e.stopPropagation()}>
            <div className="teacher-submission-modal-header">
              <div className="teacher-submission-doc-icon">
                <Icon name="plus" size={20} />
              </div>
              <div className="teacher-submission-modal-header-text">
                <h3>Upload Resource</h3>
                <span>Add a new teaching resource to your library.</span>
              </div>
              <button
                type="button"
                className="teacher-submission-modal-close"
                onClick={() => setShowAddModal(false)}
              >
                <Icon name="trash" size={16} />
              </button>
            </div>

            <div className="teacher-submission-modal-body">
              <div className="teacher-assignment-form-grid">
                <div className="teacher-assignment-form-field full">
                  <label>Title</label>
                  <input type="text" placeholder="e.g. Algebra Notes - Chapter 2" />
                </div>
                <div className="teacher-assignment-form-field">
                  <label>Subject</label>
                  <select defaultValue="">
                    <option value="" disabled>Select subject</option>
                    {subjectOptions.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="teacher-assignment-form-field">
                  <label>Class</label>
                  <select defaultValue="">
                    <option value="" disabled>Select class</option>
                    {classOptions.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="teacher-assignment-form-field">
                  <label>Type</label>
                  <select defaultValue="">
                    <option value="" disabled>Select type</option>
                    {typeOptions.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="teacher-assignment-form-field">
                  <label>Link URL (Optional)</label>
                  <input type="text" placeholder="https://" />
                </div>
                <div className="teacher-assignment-form-field full">
                  <label>Description</label>
                  <textarea placeholder="A short description of the resource." />
                </div>
                <div className="teacher-assignment-form-field full">
                  <label>File Upload</label>
                  <input type="file" />
                </div>
                <label className="teacher-assignment-check full">
                  <input type="checkbox" defaultChecked />
                  <span>Make this resource visible to students</span>
                </label>
              </div>
            </div>

            <div className="teacher-submission-modal-footer">
              <button
                type="button"
                className="teacher-submission-btn secondary"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="teacher-submission-btn primary"
                onClick={() => setShowAddModal(false)}
              >
                <Icon name="check" size={15} />
                Upload Resource
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TeacherResources;