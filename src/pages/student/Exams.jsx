import "../../styles/exams.css";

const upcomingExams = [
  {
    subject: "Mathematics",
    code: "MAT101",
    date: "15 May 2025",
    time: "09:00 AM",
    duration: "2 Hours",
    room: "Room 204",
    type: "Written",
  },
  {
    subject: "English",
    code: "ENG101",
    date: "20 May 2025",
    time: "10:00 AM",
    duration: "2 Hours",
    room: "Room 108",
    type: "Written",
  },
  {
    subject: "Science",
    code: "SCI101",
    date: "22 May 2025",
    time: "09:00 AM",
    duration: "2 Hours",
    room: "Lab 2",
    type: "Practical",
  },
];

const completedExams = [
  {
    subject: "English",
    code: "ENG101",
    date: "10 May 2025",
    score: "72%",
    grade: "B",
  },
  {
    subject: "Life Orientation",
    code: "LOR101",
    date: "08 May 2025",
    score: "85%",
    grade: "A",
  },
];

function Icon({ type }) {
  const icons = {
    exam: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 7h8M8 11h5M8 15h3" />
        <path d="m15 15 1.5 1.5L19 14" />
      </svg>
    ),

    calendar: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </svg>
    ),

    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),

    check: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),

    trophy: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
        <path d="M8 6H5v2a3 3 0 0 0 3 3M16 6h3v2a3 3 0 0 1-3 3" />
        <path d="M12 13v4M8 21h8M10 17h4" />
      </svg>
    ),

    book: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z" />
        <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
      </svg>
    ),

    location: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),

    tips: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 18h6M10 21h4" />
        <path d="M8.5 14.5C7.5 13.5 6 12 6 9.5a6 6 0 1 1 12 0c0 2.5-1.5 4-2.5 5-.8.8-1.5 1.5-1.5 2.5h-4c0-1-.7-1.7-1.5-2.5Z" />
      </svg>
    ),
  };

  return icons[type];
}

function Exams() {
  return (
    <div className="exams-content">

      <div className="exams-page-header">
        <div className="exams-title-icon">
          <Icon type="exam" />
        </div>

        <div>
          <h1>Exams</h1>
          <p>View your upcoming and completed examinations</p>
        </div>
      </div>

      <div className="exam-summary-grid">

        <div className="exam-summary-card blue-summary">
          <div className="exam-summary-icon">
            <Icon type="calendar" />
          </div>
          <span>Upcoming Exams</span>
          <strong>3</strong>
          <small>Scheduled this term</small>
        </div>

        <div className="exam-summary-card purple-summary">
          <div className="exam-summary-icon">
            <Icon type="check" />
          </div>
          <span>Completed Exams</span>
          <strong>2</strong>
          <small>Already completed</small>
        </div>

        <div className="exam-summary-card green-summary">
          <div className="exam-summary-icon">
            <Icon type="exam" />
          </div>
          <span>Total Exams</span>
          <strong>5</strong>
          <small>This academic term</small>
        </div>

        <div className="exam-summary-card yellow-summary">
          <div className="exam-summary-icon">
            <Icon type="trophy" />
          </div>
          <span>Average Score</span>
          <strong>78%</strong>
          <small>Current performance</small>
        </div>

      </div>

      <div className="exams-layout">

        <div className="exams-main-column">

          <section className="exams-card">

            <div className="exams-card-header">

              <div className="exams-card-title">
                <span>
                  <Icon type="calendar" />
                </span>

                <div>
                  <h2>Upcoming Exams</h2>
                  <p>Your scheduled examinations</p>
                </div>
              </div>

              <span className="exam-count">3 Exams</span>

            </div>

            <div className="upcoming-exams">

              {upcomingExams.map((exam) => (
                <div className="upcoming-exam" key={exam.code}>

                  <div className="exam-date-box">
                    <strong>{exam.date.split(" ")[0]}</strong>
                    <span>{exam.date.split(" ")[1].substring(0, 3)}</span>
                  </div>

                  <div className="exam-info">

                    <div className="exam-info-top">
                      <h3>{exam.subject}</h3>
                      <span className="exam-type">{exam.type}</span>
                    </div>

                    <span className="exam-code">{exam.code}</span>

                    <div className="exam-details">

                      <span>
                        <Icon type="clock" />
                        {exam.time}
                      </span>

                      <span>
                        <Icon type="clock" />
                        {exam.duration}
                      </span>

                      <span>
                        <Icon type="location" />
                        {exam.room}
                      </span>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </section>

          <section className="exams-card">

            <div className="exams-card-header">

              <div className="exams-card-title">
                <span>
                  <Icon type="check" />
                </span>

                <div>
                  <h2>Completed Exams</h2>
                  <p>Your previous examination results</p>
                </div>
              </div>

            </div>

            <div className="completed-table">

              <div className="completed-table-header">
                <span>Subject</span>
                <span>Date</span>
                <span>Score</span>
                <span>Grade</span>
              </div>

              {completedExams.map((exam) => (
                <div className="completed-row" key={exam.code}>

                  <div className="completed-subject">
                    <span className="completed-icon">
                      <Icon type="book" />
                    </span>

                    <div>
                      <strong>{exam.subject}</strong>
                      <small>{exam.code}</small>
                    </div>
                  </div>

                  <span className="completed-date">
                    {exam.date}
                  </span>

                  <strong className="completed-score">
                    {exam.score}
                  </strong>

                  <span className={`exam-grade grade-${exam.grade.toLowerCase()}`}>
                    {exam.grade}
                  </span>

                </div>
              ))}

            </div>

          </section>

        </div>

        <div className="exams-side-column">

          <section className="exam-calendar-card">

            <div className="side-exam-title">
              <span>
                <Icon type="calendar" />
              </span>

              <h3>Exam Calendar</h3>
            </div>

            <div className="calendar-month">
              <strong>May 2025</strong>
            </div>

            <div className="calendar-days">

              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
              <span>S</span>

              <i></i>
              <i></i>
              <i></i>

              <b>1</b>
              <b>2</b>
              <b>3</b>
              <b>4</b>
              <b>5</b>
              <b>6</b>
              <b>7</b>
              <b>8</b>
              <b>9</b>
              <b>10</b>
              <b>11</b>
              <b>12</b>
              <b>13</b>
              <b>14</b>
              <b className="exam-day">15</b>
              <b>16</b>
              <b>17</b>
              <b>18</b>
              <b>19</b>
              <b className="exam-day">20</b>
              <b>21</b>
              <b className="exam-day">22</b>
              <b>23</b>
              <b>24</b>
              <b>25</b>
              <b>26</b>
              <b>27</b>
              <b>28</b>
              <b>29</b>
              <b>30</b>
              <b>31</b>

            </div>

            <div className="calendar-legend">
              <span>
                <i></i>
                Exam
              </span>
            </div>

          </section>

          <section className="exam-tips-card">

            <div className="side-exam-title">
              <span>
                <Icon type="tips" />
              </span>

              <h3>Exam Tips</h3>
            </div>

            <div className="exam-tip">
              <strong>Prepare Early</strong>
              <p>Start revising several days before your exam.</p>
            </div>

            <div className="exam-tip">
              <strong>Get Enough Rest</strong>
              <p>Make sure you get enough sleep before exam day.</p>
            </div>

            <div className="exam-tip">
              <strong>Arrive Early</strong>
              <p>Be at your examination room at least 15 minutes early.</p>
            </div>

          </section>

          <section className="exam-motivation-card">

            <div className="motivation-icon">
              <Icon type="trophy" />
            </div>

            <h3>You’ve Got This!</h3>

            <p>
              Stay focused, prepare well and believe in yourself.
              Your hard work will pay off.
            </p>

          </section>

        </div>

      </div>

    </div>
  );
}

export default Exams;