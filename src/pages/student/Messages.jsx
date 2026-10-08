import { useState } from "react";
import "../../styles/messages.css";

const conversations = [
  {
    id: 1,
    name: "Mr. Kabelo Molefe",
    role: "Mathematics Teacher",
    initials: "KM",
    color: "blue",
    unread: 2,
    time: "10:42 AM",
    preview: "Please remember to submit your assignment...",
    messages: [
      {
        sender: "them",
        text: "Good morning. Please remember to submit your Mathematics assignment before Friday.",
        time: "10:35 AM",
      },
      {
        sender: "me",
        text: "Good morning Sir. I will make sure I submit it before Friday.",
        time: "10:39 AM",
      },
      {
        sender: "them",
        text: "Great. Also make sure you complete all the questions.",
        time: "10:42 AM",
      },
    ],
  },
  {
    id: 2,
    name: "Ms. Naledi Dube",
    role: "English Teacher",
    initials: "ND",
    color: "purple",
    unread: 1,
    time: "Yesterday",
    preview: "Your essay feedback is now available.",
    messages: [
      {
        sender: "them",
        text: "Your essay feedback is now available. Please check the comments before the next submission.",
        time: "Yesterday",
      },
      {
        sender: "me",
        text: "Thank you Ma'am. I will check the feedback.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: 3,
    name: "Mrs. Boitumelo Kgosidintsi",
    role: "Class Teacher",
    initials: "BK",
    color: "green",
    unread: 0,
    time: "Yesterday",
    preview: "The class meeting has been moved to...",
    messages: [
      {
        sender: "them",
        text: "The class meeting has been moved to Thursday afternoon.",
        time: "Yesterday",
      },
      {
        sender: "me",
        text: "Okay, thank you for letting me know.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: 4,
    name: "ICT Department",
    role: "School Administration",
    initials: "IT",
    color: "orange",
    unread: 0,
    time: "02 May",
    preview: "The student portal maintenance is complete.",
    messages: [
      {
        sender: "them",
        text: "The student portal maintenance is complete and all services are available again.",
        time: "02 May",
      },
    ],
  },
];

function Icon({ type }) {
  const icons = {
    search: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 5 5" />
      </svg>
    ),

    send: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),

    plus: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),

    more: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
      </svg>
    ),

    phone: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M6.5 3.5 9 3l2 5-2 1.5c1 2 2.5 3.5 4.5 4.5L15 12l5 2 .5 2.5c.2 1.1-.5 2.2-1.6 2.5-2.1.5-5.1-.5-8.3-3.7S5.4 9.1 5.9 7c.3-1.1 1.4-1.8 2.5-1.6" />
      </svg>
    ),

    smile: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
      </svg>
    ),

    close: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M6 6l12 12M18 6 6 18" />
      </svg>
    ),

    chevron: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="m7 10 5 5 5-5" />
      </svg>
    ),

    paperclip: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="m21.4 11.6-8.8 8.8a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5" />
      </svg>
    ),
  };

  return icons[type];
}

function Messages() {
  const [selectedId, setSelectedId] = useState(1);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [showNewMessage, setShowNewMessage] = useState(false);

  const selectedConversation = conversations.find(
    (conversation) => conversation.id === selectedId
  );

  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation.name.toLowerCase().includes(search.toLowerCase()) ||
      conversation.role.toLowerCase().includes(search.toLowerCase())
  );

  const handleSend = () => {
    if (!message.trim()) return;
    setMessage("");
  };

  return (
    <div className="messages-content">
      <div className="messages-page-header">
        <div>
          <h1>Messages</h1>
          <p>Communicate with your teachers and school staff</p>
        </div>

        <button
          className="new-message-button"
          onClick={() => setShowNewMessage(true)}
        >
          <Icon type="plus" />
          New Message
        </button>
      </div>

      <div className="messages-container">
        <aside className="messages-sidebar">
          <div className="messages-search">
            <Icon type="search" />

            <input
              type="text"
              placeholder="Search conversations..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="conversation-heading">
            <span>Conversations</span>
            <strong>{conversations.length}</strong>
          </div>

          <div className="conversation-list">
            {filteredConversations.length > 0 ? (
              filteredConversations.map((conversation) => (
                <button
                  key={conversation.id}
                  className={`conversation-item ${
                    selectedId === conversation.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedId(conversation.id)}
                >
                  <div
                    className={`conversation-avatar ${conversation.color}`}
                  >
                    {conversation.initials}
                  </div>

                  <div className="conversation-details">
                    <div className="conversation-top">
                      <strong>{conversation.name}</strong>
                      <span>{conversation.time}</span>
                    </div>

                    <div className="conversation-bottom">
                      <p>{conversation.preview}</p>

                      {conversation.unread > 0 && (
                        <span className="unread-count">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="no-conversations">
                <p>No conversations found.</p>
              </div>
            )}
          </div>
        </aside>

        <section className="chat-section">
          <div className="chat-header">
            <div className={`chat-avatar ${selectedConversation.color}`}>
              {selectedConversation.initials}
            </div>

            <div className="chat-person">
              <strong>{selectedConversation.name}</strong>
              <span>{selectedConversation.role}</span>
            </div>

            <div className="chat-actions">
              <button>
                <Icon type="phone" />
              </button>

              <button>
                <Icon type="more" />
              </button>
            </div>
          </div>

          <div className="chat-messages">
            <div className="message-date">
              <span>Today</span>
            </div>

            {selectedConversation.messages.map((item, index) => (
              <div
                key={index}
                className={`message-row ${
                  item.sender === "me" ? "sent" : "received"
                }`}
              >
                <div className="message-bubble">
                  <p>{item.text}</p>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="message-composer">
            <button className="composer-icon">
              <Icon type="paperclip" />
            </button>

            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSend();
                }
              }}
            />

            <button
              className="send-button"
              onClick={handleSend}
              disabled={!message.trim()}
            >
              <Icon type="send" />
            </button>
          </div>
        </section>
      </div>

      {showNewMessage && (
        <div
          className="new-message-overlay"
          onClick={() => setShowNewMessage(false)}
        >
          <div
            className="new-message-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="new-message-header">
              <div>
                <h2>New Message</h2>
                <p>Send a message to a teacher or school staff member</p>
              </div>

              <button
                className="new-message-close"
                onClick={() => setShowNewMessage(false)}
              >
                <Icon type="close" />
              </button>
            </div>

            <div className="new-message-form">
              <label>To</label>

              <div className="message-select-wrapper">
                <select defaultValue="">
                  <option value="" disabled>
                    Select teacher or staff member
                  </option>
                  <option>Mr. Kabelo Molefe</option>
                  <option>Ms. Naledi Dube</option>
                  <option>Mrs. Boitumelo Kgosidintsi</option>
                  <option>ICT Department</option>
                </select>

                <Icon type="chevron" />
              </div>

              <label>Subject</label>

              <input
                className="new-message-input"
                type="text"
                placeholder="Enter message subject"
              />

              <label>Message</label>

              <textarea
                className="new-message-textarea"
                placeholder="Write your message..."
              />

              <div className="new-message-actions">
                <button
                  className="cancel-message-button"
                  onClick={() => setShowNewMessage(false)}
                >
                  Cancel
                </button>

                <button
                  className="send-new-message-button"
                  onClick={() => setShowNewMessage(false)}
                >
                  <Icon type="send" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages;