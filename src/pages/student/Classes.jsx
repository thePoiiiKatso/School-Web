import React from "react";
import "../../styles/classes.css";

const classes = [
  {
    name: "Mathematics",
    teacher: "Mr. Motswana",
    grade: "Grade 10",
    nextLesson: "Monday, 08:00 - 09:00",
    room: "A12",
    attendance: 94,
    image: "/maths2.jpg",
    icon: "∑",
  },
  {
    name: "English",
    teacher: "Ms. Dube",
    grade: "Grade 10",
    nextLesson: "Monday, 09:00 - 10:00",
    room: "B04",
    attendance: 91,
    image: "/maths3.jpg",
    icon: "Aa",
  },
  {
    name: "Science",
    teacher: "Mr. Molefe",
    grade: "Grade 10",
    nextLesson: "Tuesday, 08:00 - 09:00",
    room: "C02",
    attendance: 96,
    image: "/science.jpg",
    icon: "⚗",
  },
  {
    name: "Computer Studies",
    teacher: "Mr. Kgosi",
    grade: "Grade 10",
    nextLesson: "Tuesday, 10:00 - 11:00",
    room: "Computer Lab",
    attendance: 98,
    image: "/computer.jpg",
    icon: "</>",
  },
  {
    name: "Setswana",
    teacher: "Ms. Phiri",
    grade: "Grade 10",
    nextLesson: "Wednesday, 08:00 - 09:00",
    room: "B06",
    attendance: 92,
    image: "/setswana.jpg",
    icon: "S",
  },
  {
    name: "Life Orientation",
    teacher: "Mr. Thikago",
    grade: "Grade 10",
    nextLesson: "Wednesday, 09:00 - 10:00",
    room: "A08",
    attendance: 90,
    image: "/life-orientation.jpg",
    icon: "♡",
  },
];

function Classes() {
  const teacherCount = new Set(
    classes.map((subject) => subject.teacher)
  ).size;

  return (
    <div className="classes-page">
      {/* Hero Section */}
      <section className="classes-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p>Hello, Thabo</p>

          <h1>My Classes</h1>

          <span>
            Here are the subjects you are currently enrolled in.
          </span>

          <small>
            Stay focused, keep learning, achieve your goals.
          </small>
        </div>
      </section>

      {/* Summary Section */}
      <section className="class-summary">
        <div className="summary-item">
          <div className="summary-icon">◆</div>

          <div>
            <span>Total Classes</span>
            <strong>{classes.length}</strong>
          </div>
        </div>

        <div className="summary-divider"></div>

        <div className="summary-item">
          <div className="summary-icon">♟</div>

          <div>
            <span>Teachers</span>
            <strong>{teacherCount}</strong>
          </div>
        </div>

        <div className="summary-divider"></div>

        <div className="summary-item lesson-summary">
          <div className="summary-icon">▦</div>

          <div>
            <span>Next Lesson Today</span>

            <strong>
              Mathematics · 08:00 - 09:00
            </strong>
          </div>
        </div>

        <div className="enrolled-badge">
          <span>✓</span>

          You are enrolled in {classes.length} classes this term.
        </div>
      </section>

      {/* Classes Grid */}
      <section className="class-grid">
        {classes.map((subject) => (
          <article
            className="class-card"
            key={subject.name}
          >
            {/* Class Image */}
            <div className="class-image">
              <img
                src={subject.image}
                alt={`${subject.name} class`}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="image-dark"></div>

              <div className="subject-icon">
                {subject.icon}
              </div>
            </div>

            {/* Class Content */}
            <div className="class-body">
              <div className="class-heading">
                <div>
                  <h2>{subject.name}</h2>

                  <div className="teacher-row">
                    <span>
                      ♙ {subject.teacher}
                    </span>

                    <span>
                      {subject.grade}
                    </span>
                  </div>
                </div>

                {/* Attendance */}
                <div className="attendance-circle">
                  <strong>
                    {subject.attendance}%
                  </strong>

                  <span>
                    Attendance
                  </span>
                </div>
              </div>

              {/* Class Information */}
              <div className="class-info">
                <div>
                  <span className="info-label">
                    ▣ &nbsp; Next Lesson
                  </span>

                  <strong>
                    {subject.nextLesson}
                  </strong>
                </div>

                <div>
                  <span className="info-label">
                    ♧ &nbsp; Room
                  </span>

                  <strong>
                    {subject.room}
                  </strong>
                </div>
              </div>

              {/* Buttons */}
              <div className="card-actions">
                <button
                  type="button"
                  className="details-button"
                  onClick={() => {
                    alert(
                      `${subject.name} timetable will open soon.`
                    );
                  }}
                >
                  View Details →
                </button>

                <button
                  type="button"
                  className="timetable-button"
                  onClick={() => {
                    alert(
                      `${subject.name} timetable will open soon.`
                    );
                  }}
                >
                  ▣ Timetable
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Notice */}
      <div className="classes-notice">
        <span className="notice-icon">i</span>

        <span>
          View Details takes you directly to this subject's timetable.
        </span>

        <strong>
          Keep Going
        </strong>
      </div>
    </div>
  );
}

export default Classes;