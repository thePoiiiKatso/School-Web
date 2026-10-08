import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/teacher/messages.css";

const messages = [
  { id: 1, name: "Lerato Molefe", role: "Parent - Grade 6A", initials: "LM", color: "blue", time: "10:42 AM", unread: 2, subject: "Thabo's Mathematics progress", body: "Good morning Mr. Kgosi,\n\nI wanted to ask about Thabo's progress in Mathematics. He has been practising at home and I wanted to know how he is doing in class.\n\nThank you,\nLerato Molefe" },
  { id: 2, name: "Mrs. D. Ramotswe", role: "English Teacher", initials: "DR", color: "purple", time: "Yesterday", unread: 1, subject: "Shared English exam paper", body: "Hi,\n\nI have attached the draft for the Grade 6A English exam paper for your review. Please let me know if there is anything you would like to change.\n\nThanks,\nD. Ramotswe" },
  { id: 3, name: "Mr. T. Kgosi", role: "Head of Department", initials: "TK", color: "green", time: "Yesterday", unread: 0, subject: "Staff meeting reminder", body: "Good afternoon everyone,\n\nReminder that our department meeting is on Friday at 14:00 in the staff room. Please bring your term progress reports.\n\nRegards,\nT. Kgosi" },
  { id: 4, name: "Lerato Mokoena", role: "Parent - Grade 6A", initials: "LM", color: "yellow", time: "02 May", unread: 0, subject: "Absence note for Karabo", body: "Good morning,\n\nKarabo was absent yesterday due to illness. I have attached the doctor's note.\n\nThank you for understanding,\nLerato Mokoena" },
  { id: 5, name: "Mr. B. Taole", role: "Life Skills Teacher", initials: "BT", color: "pink", time: "30 Apr", unread: 0, subject: "Class project collaboration", body: "Hi,\n\nWould you like to collaborate on a joint project between Mathematics and Life Skills this term? I have some ideas I'd like to share.\n\nRegards,\nB. Taole" },
];

const types = ["All Types", "Unread", "Parents", "Staff", "Archived"];
const recipientOptions = ["Lerato Molefe (Parent)", "Mrs. D. Ramotswe (Teacher)", "Mr. T. Kgosi (HoD)", "Mr. B. Taole (Teacher)"];

function TeacherMessages() {
  const [selectedId, setSelectedId] = useState(messages[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [showAddModal, setShowAddModal] = useState(false);
  const [reply, setReply] = useState("");

  const selected = messages.find((m) => m.id === selectedId) || messages[0];

  const filtered = messages.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      typeFilter === "All Types" ||
      (typeFilter === "Unread" && m.unread > 0);
    return matchesSearch && matchesType;
  });

  const totalCount = messages.length;
  const unreadCount = messages.filter((m) => m.unread > 0).length;
  const sentCount = 12;
  const archivedCount = 6;

  return (
    <>
      <section className="teacher-welcome">
        <div className="teacher-welcome-text">
          <h1>Messages</h1>
          <p>Communicate with parents, staff and school administration.</p>
        </div>
        <img src="/students1.jpg" alt="Bokamoso jwa Rona" className="teacher-welcome-image" />
      </section>

      <section className="teacher-mini-stats">
        <div className="teacher-mini-stat blue">
          <div className="teacher-mini-stat-icon"><Icon name="message" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Total Messages</span>
            <strong>{totalCount}</strong>
            <small>In inbox</small>
          </div>
        </div>
        <div className="teacher-mini-stat green">
          <div className="teacher-mini-stat-icon"><Icon name="bell" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Unread</span>
            <strong>{unreadCount}</strong>
            <small>Need attention</small>
          </div>
        </div>
        <div className="teacher-mini-stat purple">
          <div className="teacher-mini-stat-icon"><Icon name="arrow" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Sent</span>
            <strong>{sentCount}</strong>
            <small>This term</small>
          </div>
        </div>
        <div className="teacher-mini-stat yellow">
          <div className="teacher-mini-stat-icon"><Icon name="file" size={20} /></div>
          <div className="teacher-mini-stat-text">
            <span>Archived</span>
            <strong>{archivedCount}</strong>
            <small>Older messages</small>
          </div>
        </div>
      </section>

      <div className="teacher-messages-layout">
        <div className="teacher-messages-main">
          <div className="teacher-messages-toolbar">
            <div className="teacher-messages-search">
              <Icon name="search" size={16} />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="teacher-messages-select"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>
            <button
              type="button"
              className="teacher-messages-add"
              onClick={() => setShowAddModal(true)}
            >
              <Icon name="plus" size={15} />
              New Message
            </button>
          </div>

          <div className="teacher-messages-list">
            {filtered.map((m) => (
              <div
                className={`teacher-message-row ${selectedId === m.id ? "selected" : ""} ${m.unread > 0 ? "unread" : ""}`}
                key={m.id}
                onClick={() => setSelectedId(m.id)}
              >
                <div className={`teacher-message-avatar ${m.color}`}>{m.initials}</div>
                <div className="teacher-message-content">
                  <div className="teacher-message-top">
                    <strong>{m.name}</strong>
                    <time>{m.time}</time>
                  </div>
                  <span className="teacher-message-role">{m.role}</span>
                  <p className="teacher-message-preview">{m.subject}</p>
                </div>
                {m.unread > 0 && <span className="teacher-message-badge">{m.unread}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="teacher-messages-side">
          <div className="teacher-message-detail">
            <div className="teacher-message-detail-top">
              <div className={`teacher-message-avatar ${selected.color}`}>
                {selected.initials}
              </div>
              <div className="teacher-message-detail-title">
                <h2>{selected.name}</h2>
                <span>{selected.role} &middot; {selected.time}</span>
              </div>
            </div>

            <div className="teacher-message-subject">{selected.subject}</div>

            <div className="teacher-message-body">{selected.body}</div>

            <div className="teacher-message-reply">
              <label>Reply</label>
              <textarea
                placeholder="Type your reply here..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              />
              <button
                type="button"
                className="teacher-message-send"
                onClick={() => setReply("")}
              >
                <Icon name="arrow" size={14} />
                Send Reply
              </button>
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
              <button
                type="button"
                className="teacher-quick-item"
                onClick={() => setShowAddModal(true)}
              >
                <div className="teacher-quick-item-icon"><Icon name="plus" size={15} /></div>
                <span>New Message</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="check" size={15} /></div>
                <span>Mark as Read</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="file" size={15} /></div>
                <span>Archive</span>
              </button>
              <button type="button" className="teacher-quick-item">
                <div className="teacher-quick-item-icon"><Icon name="trash" size={15} /></div>
                <span>Delete</span>
              </button>
            </div>
          </div>

          <div className="teacher-keep-going">
            <div className="teacher-keep-going-icon"><Icon name="message" size={20} /></div>
            <div>
              <strong>Stay connected</strong>
              <span>Clear communication builds a strong school.</span>
            </div>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="teacher-submission-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="teacher-submission-modal" onClick={(e) => e.stopPropagation()}>
            <div className="teacher-submission-modal-header">
              <div className="teacher-submission-doc-icon">
                <Icon name="message" size={20} />
              </div>
              <div className="teacher-submission-modal-header-text">
                <h3>New Message</h3>
                <span>Send a message to a parent or staff member.</span>
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
                  <label>To</label>
                  <select defaultValue="">
                    <option value="" disabled>Select recipient</option>
                    {recipientOptions.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </div>
                <div className="teacher-assignment-form-field full">
                  <label>Subject</label>
                  <input type="text" placeholder="e.g. Progress update" />
                </div>
                <div className="teacher-assignment-form-field full">
                  <label>Message</label>
                  <textarea placeholder="Write your message here..." />
                </div>
                <label className="teacher-assignment-check full">
                  <input type="checkbox" defaultChecked />
                  <span>Send a copy to my email</span>
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
                <Icon name="arrow" size={15} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TeacherMessages;