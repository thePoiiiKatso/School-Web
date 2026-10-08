
import { useState } from "react";
import "../../styles/announcements.css";

const announcements = [
  {
    title: "Mid-Year Examinations Schedule Released",
    category: "Academic",
    date: "12 May 2025",
    time: "10:30 AM",
    priority: "Important",
    description:
      "The mid-year examination timetable has been released. Students are advised to check their examination dates, times and venues carefully.",
    fullDescription:
      "The mid-year examination timetable has officially been released by the Academic Office. All students are required to review their examination dates, starting times, subjects and examination venues carefully. Students should arrive at least 15 minutes before the scheduled examination time and bring all required examination materials. If you notice any issue with your timetable, please contact the Academic Office as soon as possible.",
    author: "Academic Office",
  },
  {
    title: "Library Hours Extended During Examination Period",
    category: "General",
    date: "10 May 2025",
    time: "02:15 PM",
    priority: "General",
    description:
      "The library will remain open until 9:00 PM during the examination period to provide students with additional study time.",
    fullDescription:
      "To support students during the upcoming examination period, the school library will extend its operating hours until 9:00 PM. Students are encouraged to make use of the additional study time for revision, research and preparation. Please remember to maintain a quiet study environment and return borrowed materials according to the library rules.",
    author: "Library Services",
  },
  {
    title: "Assignment Submission Deadline Reminder",
    category: "Academic",
    date: "08 May 2025",
    time: "09:00 AM",
    priority: "Important",
    description:
      "Students are reminded to submit all outstanding assignments before the stated deadlines. Late submissions may be subject to penalties.",
    fullDescription:
      "Students are reminded that all outstanding assignments must be submitted before the deadlines provided by their respective teachers. Please check your assignment requirements carefully and make sure that all required work has been completed. Late submissions may be subject to penalties unless an extension has been approved by the relevant teacher.",
    author: "Academic Office",
  },
  {
    title: "Student Wellness Workshop",
    category: "Events",
    date: "06 May 2025",
    time: "11:45 AM",
    priority: "General",
    description:
      "A student wellness workshop will be held this Friday. The session will cover study habits, stress management and exam preparation.",
    fullDescription:
      "The Student Affairs Department will host a student wellness workshop this Friday. The session will focus on healthy study habits, managing academic pressure, preparing effectively for examinations and maintaining a healthy balance during the academic term. All students are encouraged to attend and participate in the discussion.",
    author: "Student Affairs",
  },
  {
    title: "Campus Network Maintenance",
    category: "IT Services",
    date: "03 May 2025",
    time: "04:20 PM",
    priority: "General",
    description:
      "The campus network will undergo scheduled maintenance. Some online services may be temporarily unavailable during this period.",
    fullDescription:
      "The ICT Department will carry out scheduled maintenance on the campus network. During the maintenance period, students and staff may experience temporary interruptions when accessing the student portal, learning management system, Wi-Fi and other online services. The maintenance is expected to be completed as quickly as possible. Please save your work before the maintenance begins.",
    author: "ICT Department",
  },
];

function Icon({ type }) {
  const icons = {
    megaphone: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 11v2a2 2 0 0 0 2 2h2l7 4V5L7 9H5a2 2 0 0 0-2 2Z" />
        <path d="M14 8h3a4 4 0 0 1 0 8h-3" />
        <path d="M7 15l1.5 5" />
      </svg>
    ),
    calendar: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </svg>
    ),
    clock: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    book: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z" />
        <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
      </svg>
    ),
    event: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
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
    arrow: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
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
  };

  return icons[type];
}

function Announcements() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const closeAnnouncement = () => {
    setSelectedAnnouncement(null);
  };

  return (
    <div className="announcements-content">
      <div className="announcements-page-header">
        <div className="announcements-title-icon">
          <Icon type="megaphone" />
        </div>

        <div>
          <h1>Announcements</h1>
          <p>Stay updated with the latest school news and information</p>
        </div>
      </div>

      <div className="announcement-overview">
        <div className="announcement-overview-card blue-overview">
          <div className="overview-icon">
            <Icon type="megaphone" />
          </div>
          <div>
            <span>Total Announcements</span>
            <strong>5</strong>
          </div>
        </div>

        <div className="announcement-overview-card yellow-overview">
          <div className="overview-icon">
            <Icon type="book" />
          </div>
          <div>
            <span>Academic</span>
            <strong>2</strong>
          </div>
        </div>

        <div className="announcement-overview-card green-overview">
          <div className="overview-icon">
            <Icon type="event" />
          </div>
          <div>
            <span>Events</span>
            <strong>1</strong>
          </div>
        </div>

        <div className="announcement-overview-card purple-overview">
          <div className="overview-icon">
            <Icon type="calendar" />
          </div>
          <div>
            <span>This Month</span>
            <strong>5</strong>
          </div>
        </div>
      </div>

      <div className="announcements-toolbar">
        <div className="announcement-search">
          <Icon type="search" />
          <input type="text" placeholder="Search announcements..." />
        </div>

        <select className="announcement-filter" defaultValue="All">
          <option>All</option>
          <option>Academic</option>
          <option>Events</option>
          <option>General</option>
          <option>IT Services</option>
        </select>
      </div>

      <div className="announcements-layout">
        <div className="announcements-main">
          <section className="announcements-card">
            <div className="announcements-card-header">
              <div>
                <h2>Latest Announcements</h2>
                <p>Important updates from your school</p>
              </div>

              <span className="announcement-count">5 Updates</span>
            </div>

            <div className="announcement-list">
              {announcements.map((announcement, index) => (
                <article
                  className={`announcement-item ${
                    index === 0 ? "announcement-featured" : ""
                  }`}
                  key={announcement.title}
                >
                  <div className="announcement-item-icon">
                    <Icon
                      type={
                        announcement.category === "Academic"
                          ? "book"
                          : announcement.category === "Events"
                          ? "event"
                          : "megaphone"
                      }
                    />
                  </div>

                  <div className="announcement-item-content">
                    <div className="announcement-item-top">
                      <div>
                        <span className="announcement-category">
                          {announcement.category}
                        </span>

                        {announcement.priority === "Important" && (
                          <span className="announcement-important">
                            Important
                          </span>
                        )}
                      </div>

                      <span className="announcement-date">
                        <Icon type="calendar" />
                        {announcement.date}
                      </span>
                    </div>

                    <h3>{announcement.title}</h3>

                    <p>{announcement.description}</p>

                    <div className="announcement-footer">
                      <span className="announcement-author">
                        {announcement.author}
                      </span>

                      <span className="announcement-time">
                        <Icon type="clock" />
                        {announcement.time}
                      </span>
                    </div>
                  </div>

                  <button
                    className="announcement-arrow"
                    onClick={() => setSelectedAnnouncement(announcement)}
                    aria-label={`Read ${announcement.title}`}
                  >
                    <Icon type="arrow" />
                  </button>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="announcements-side">
          <section className="announcement-side-card">
            <div className="announcement-side-header">
              <span>
                <Icon type="megaphone" />
              </span>
              <h3>Important Notice</h3>
            </div>

            <div className="important-notice">
              <strong>Examinations are approaching</strong>
              <p>
                Make sure you check your exam timetable and prepare for your
                upcoming assessments.
              </p>
            </div>
          </section>

          <section className="announcement-side-card">
            <div className="announcement-side-header">
              <span>
                <Icon type="calendar" />
              </span>
              <h3>Upcoming Events</h3>
            </div>

            <div className="upcoming-event">
              <div className="event-date">
                <strong>15</strong>
                <span>MAY</span>
              </div>

              <div>
                <strong>Mathematics Exam</strong>
                <p>09:00 AM · Room 204</p>
              </div>
            </div>

            <div className="upcoming-event">
              <div className="event-date">
                <strong>22</strong>
                <span>MAY</span>
              </div>

              <div>
                <strong>Science Practical</strong>
                <p>09:00 AM · Lab 2</p>
              </div>
            </div>
          </section>
        </aside>
      </div>

      {selectedAnnouncement && (
        <div
          className="announcement-modal-overlay"
          onClick={closeAnnouncement}
        >
          <div
            className="announcement-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="announcement-modal-close"
              onClick={closeAnnouncement}
              aria-label="Close announcement"
            >
              <Icon type="close" />
            </button>

            <div className="announcement-modal-icon">
              <Icon
                type={
                  selectedAnnouncement.category === "Academic"
                    ? "book"
                    : selectedAnnouncement.category === "Events"
                    ? "event"
                    : "megaphone"
                }
              />
            </div>

            <div className="announcement-modal-tags">
              <span className="announcement-category">
                {selectedAnnouncement.category}
              </span>

              {selectedAnnouncement.priority === "Important" && (
                <span className="announcement-important">
                  Important
                </span>
              )}
            </div>

            <h2>{selectedAnnouncement.title}</h2>

            <div className="announcement-modal-meta">
              <span>
                <Icon type="calendar" />
                {selectedAnnouncement.date}
              </span>

              <span>
                <Icon type="clock" />
                {selectedAnnouncement.time}
              </span>

              <span>{selectedAnnouncement.author}</span>
            </div>

            <div className="announcement-modal-divider"></div>

            <p className="announcement-modal-description">
              {selectedAnnouncement.fullDescription}
            </p>

            <div className="announcement-modal-footer">
              <span>Official School Announcement</span>

              <button
                className="announcement-modal-button"
                onClick={closeAnnouncement}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Announcements;