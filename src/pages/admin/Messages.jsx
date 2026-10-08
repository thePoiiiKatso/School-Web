import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/admin/messages.css";

const conversations = [
  {
    id: 1,
    name: "Lerato Molefe",
    role: "Parent - Grade 6A",
    initials: "LM",
    color: "blue",
    unread: 2,
    time: "10:42 AM",
    preview: "Thank you for the update on Thabo...",
    messages: [
      { sender: "them", text: "Good morning. I wanted to ask about Thabo's progress in Mathematics.", time: "10:35 AM" },
      { sender: "me", text: "Good morning Mrs. Molefe. Thabo is doing very well. He scored 88% on the last test.", time: "10:39 AM" },
      { sender: "them", text: "Thank you for the update on Thabo. We are very proud of him.", time: "10:42 AM" },
    ],
  },
  {
    id: 2,
    name: "Mr. T. Kgosi",
    role: "Mathematics Teacher",
    initials: "TK",
    color: "purple",
    unread: 1,
    time: "Yesterday",
    preview: "The Grade 6A results have been submitted.",
    messages: [
      { sender: "them", text: "The Grade 6A results have been submitted for review.", time: "Yesterday" },
      { sender: "me", text: "Thank you. I will review and publish them by end of day.", time: "Yesterday" },
    ],
  },
  {
    id: 3,
    name: "Mrs. D. Ramotswe",
    role: "English Teacher",
    initials: "DR",
    color: "green",
    unread: 0,
    time: "Yesterday",
    preview: "I need 5 extra copies of the exam paper.",
    messages: [
      { sender: "them", text: "I need 5 extra copies of the English exam paper for Grade 7B.", time: "Yesterday" },
      { sender: "me", text: "Noted. They will be ready by tomorrow morning.", time: "Yesterday" },
    ],
  },
  {
    id: 4,
    name: "Lerato Mokoena",
    role: "Parent - Grade 6A",
    initials: "LM",
    color: "orange",
    unread: 0,
    time: "02 May",
    preview: "Thank you for the quick response.",
    messages: [
      { sender: "them", text: "Thank you for the quick response regarding my query.", time: "02 May" },
    ],
  },
];

function Messages() {
  const [selectedId, setSelectedId] = useState(1);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const selected = conversations.find((c) => c.id === selectedId) || conversations[0];

  const filtered = conversations.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.role.toLowerCase().includes(search.toLowerCase())
  );

  const handleSend = () => {
    if (!message.trim()) return;
    setMessage("");
  };

  return (
    <>
      <section className="admin-messages-page-header">
        <div className="admin-messages-page-header-left">
          <div className="admin-messages-page-header-icon">
            <Icon name="message" size={26} />
          </div>
          <div>
            <div className="admin-breadcrumb">
              <span>Dashboard</span>
              <span>/</span>
              <span>Messages</span>
            </div>
            <h1>Messages</h1>
            <p>Communicate with parents, teachers and staff.</p>
          </div>
        </div>
      </section>

      <div className="admin-messages-layout">
        <div className="admin-messages-container">
          <aside className="admin-messages-sidebar">
            <div className="admin-messages-search">
              <Icon name="search" size={16} />
              <input
                type="text"
                placeholder="Search conversations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="admin-conversation-heading">
              <span>Conversations</span>
              <strong>{conversations.length}</strong>
            </div>

            <div className="admin-conversation-list">
              {filtered.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`admin-conversation-item ${selectedId === c.id ? "active" : ""}`}
                  onClick={() => setSelectedId(c.id)}
                >
                  <div className={`admin-conversation-avatar ${c.color}`}>{c.initials}</div>
                  <div className="admin-conversation-details">
                    <div className="admin-conversation-top">
                      <strong>{c.name}</strong>
                      <span>{c.time}</span>
                    </div>
                    <div className="admin-conversation-bottom">
                      <p>{c.preview}</p>
                      {c.unread > 0 && <span className="admin-unread-count">{c.unread}</span>}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          <section className="admin-chat-section">
            <div className="admin-chat-header">
              <div className={`admin-chat-avatar ${selected.color}`}>{selected.initials}</div>
              <div className="admin-chat-person">
                <strong>{selected.name}</strong>
                <span>{selected.role}</span>
              </div>
              <div className="admin-chat-actions">
                <button type="button"><Icon name="message" size={16} /></button>
                <button type="button"><Icon name="user" size={16} /></button>
              </div>
            </div>

            <div className="admin-chat-messages">
              <div className="admin-message-date">
                <span>Today</span>
              </div>

              {selected.messages.map((m, i) => (
                <div
                  key={i}
                  className={`admin-message-row ${m.sender === "me" ? "sent" : "received"}`}
                >
                  <div className="admin-message-bubble">
                    <p>{m.text}</p>
                    <span>{m.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="admin-message-composer">
              <button type="button" className="admin-composer-icon">
                <Icon name="file" size={16} />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
              />
              <button
                type="button"
                className="admin-send-button"
                onClick={handleSend}
                disabled={!message.trim()}
              >
                <Icon name="arrow" size={17} />
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Messages;