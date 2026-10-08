import React, { useEffect, useState } from "react";
import "../../styles/timetable.css";

const timetableData = [
  {
    time: "08:00 - 09:00",
    start: "08:00",
    end: "09:00",
    subject: "Mathematics",
    teacher: "Mr. Kgosi",
    room: "Room 12",
    type: "Lesson",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=500&q=80",
    color: "purple",
  },
  {
    time: "09:15 - 10:15",
    start: "09:15",
    end: "10:15",
    subject: "English",
    teacher: "Mrs. Molefe",
    room: "Room 8",
    type: "Lesson",
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=500&q=80",
    color: "cyan",
  },
  {
    time: "10:30 - 11:30",
    start: "10:30",
    end: "11:30",
    subject: "Life Orientation",
    teacher: "Mr. Moagi",
    room: "Room 6",
    type: "Lesson",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80",
    color: "yellow",
  },
  {
    time: "11:30 - 12:00",
    start: "11:30",
    end: "12:00",
    subject: "Break",
    teacher: "",
    room: "School Courtyard",
    type: "Break",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=500&q=80",
    color: "gray",
  },
  {
    time: "12:00 - 13:00",
    start: "12:00",
    end: "13:00",
    subject: "Science",
    teacher: "Mrs. Dube",
    room: "Room 14",
    type: "Lesson",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80",
    color: "blue",
  },
  {
    time: "13:30 - 14:30",
    start: "13:30",
    end: "14:30",
    subject: "Setswana",
    teacher: "Mme Motsamai",
    room: "Room 10",
    type: "Lesson",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=500&q=80",
    color: "orange",
  },
  {
    time: "14:45 - 15:45",
    start: "14:45",
    end: "15:45",
    subject: "History",
    teacher: "Mr. Thato",
    room: "Room 11",
    type: "Lesson",
    image:
      "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=500&q=80",
    color: "green",
  },
];

const weekDays = [
  {
    day: "MON",
    date: "28",
    month: "APR",
    fullDate: "Monday, 28 April 2025",
  },
  {
    day: "TUE",
    date: "29",
    month: "APR",
    fullDate: "Tuesday, 29 April 2025",
  },
  {
    day: "WED",
    date: "30",
    month: "APR",
    fullDate: "Wednesday, 30 April 2025",
  },
  {
    day: "THU",
    date: "01",
    month: "MAY",
    fullDate: "Thursday, 1 May 2025",
  },
  {
    day: "FRI",
    date: "02",
    month: "MAY",
    fullDate: "Friday, 2 May 2025",
  },
];

function TimeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function getMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function Timetable() {
  const [selectedDay, setSelectedDay] = useState(0);

  const [currentMinutes, setCurrentMinutes] = useState(() => {
    const now = new Date();

    return now.getHours() * 60 + now.getMinutes();
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      setCurrentMinutes(
        now.getHours() * 60 + now.getMinutes()
      );
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  const activeLesson = timetableData.find((lesson) => {
    if (lesson.type === "Break") {
      return false;
    }

    const start = getMinutes(lesson.start);
    const end = getMinutes(lesson.end);

    return currentMinutes >= start && currentMinutes < end;
  });

  const getProgress = (lesson) => {
    if (!lesson) {
      return 0;
    }

    const start = getMinutes(lesson.start);
    const end = getMinutes(lesson.end);

    const progress =
      ((currentMinutes - start) / (end - start)) * 100;

    return Math.min(100, Math.max(0, progress));
  };

  return (
    <div className="timetable-page">
      <div className="timetable-page-header">
        <div>
          <div className="timetable-breadcrumb">
            <span>Dashboard</span>
            <span>/</span>
            <strong>Timetable</strong>
          </div>

          <h1>My Timetable</h1>

          <p>
            View your daily classes, lessons and school schedule.
          </p>
        </div>

        <div className="timetable-date-box">
          <CalendarIcon />

          <div>
            <span>Selected day</span>

            <strong>
              {weekDays[selectedDay].fullDate}
            </strong>
          </div>
        </div>
      </div>

      <section className="timetable-days">
        <button
          type="button"
          className="day-arrow"
          onClick={() =>
            setSelectedDay((current) =>
              current === 0
                ? weekDays.length - 1
                : current - 1
            )
          }
        >
          ‹
        </button>

        <div className="day-list">
          {weekDays.map((day, index) => (
            <button
              type="button"
              key={day.fullDate}
              className={`day-card ${
                selectedDay === index ? "selected" : ""
              }`}
              onClick={() => setSelectedDay(index)}
            >
              <span>{day.day}</span>

              <strong>{day.date}</strong>

              <small>{day.month}</small>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="day-arrow"
          onClick={() =>
            setSelectedDay((current) =>
              current === weekDays.length - 1
                ? 0
                : current + 1
            )
          }
        >
          ›
        </button>
      </section>

      {activeLesson && selectedDay === 0 && (
        <section className="live-lesson-card">
          <div className="live-image">
            <img
              src={activeLesson.image}
              alt={activeLesson.subject}
            />

            <span className="live-label">
              <span></span>
              LIVE NOW
            </span>
          </div>

          <div className="live-content">
            <div className="live-heading">
              <div>
                <span>Currently in progress</span>

                <h2>{activeLesson.subject}</h2>
              </div>

              <div className="live-time">
                <TimeIcon />
                {activeLesson.time}
              </div>
            </div>

            <div className="live-details">
              <span>
                <UserIcon />
                {activeLesson.teacher}
              </span>

              <span>
                <MapIcon />
                {activeLesson.room}
              </span>
            </div>

            <div className="progress-area">
              <div className="progress-top">
                <span>Lesson progress</span>

                <strong>
                  {Math.round(getProgress(activeLesson))}%
                </strong>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${getProgress(activeLesson)}%`,
                  }}
                ></div>
              </div>

              <span className="progress-note">
                Class is currently underway
              </span>
            </div>
          </div>
        </section>
      )}

      <section className="timetable-content">
        <div className="timetable-main-card">
          <div className="timetable-card-header">
            <div className="timetable-card-title">
              <div className="title-icon">
                <CalendarIcon />
              </div>

              <div>
                <h2>
                  {weekDays[selectedDay].day === "MON"
                    ? "Monday's Schedule"
                    : `${weekDays[selectedDay].day}'s Schedule`}
                </h2>

                <span>
                  {weekDays[selectedDay].fullDate}
                </span>
              </div>
            </div>

            <span className="lesson-count">
              {timetableData.length} activities
            </span>
          </div>

          <div className="full-timetable-list">
            {timetableData.map((lesson) => {
              const start = getMinutes(lesson.start);
              const end = getMinutes(lesson.end);

              const isLive =
                selectedDay === 0 &&
                lesson.type !== "Break" &&
                currentMinutes >= start &&
                currentMinutes < end;

              const isPast =
                selectedDay === 0 &&
                currentMinutes >= end;

              return (
                <div
                  className={`full-timetable-row ${
                    isLive ? "live-row" : ""
                  } ${isPast ? "past-row" : ""}`}
                  key={lesson.time}
                >
                  <div className="full-time">
                    <strong>{lesson.start}</strong>

                    <span>{lesson.end}</span>
                  </div>

                  <div
                    className={`schedule-line ${lesson.color}`}
                  >
                    <span></span>
                  </div>

                  <div className="schedule-image">
                    <img
                      src={lesson.image}
                      alt={lesson.subject}
                    />

                    {isLive && (
                      <span className="image-live-dot"></span>
                    )}
                  </div>

                  <div className="schedule-info">
                    <div className="schedule-title-row">
                      <h3>{lesson.subject}</h3>

                      {isLive && (
                        <span className="schedule-live">
                          Live now
                        </span>
                      )}

                      {lesson.type === "Break" && (
                        <span className="schedule-break">
                          Break
                        </span>
                      )}
                    </div>

                    {lesson.type === "Break" ? (
                      <p>
                        Take a break and recharge before
                        your next lesson.
                      </p>
                    ) : (
                      <div className="schedule-meta">
                        <span>
                          <UserIcon />
                          {lesson.teacher}
                        </span>

                        <span>
                          <MapIcon />
                          {lesson.room}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="schedule-status">
                    {isLive ? (
                      <span className="status-live">
                        Ongoing
                      </span>
                    ) : isPast ? (
                      <span className="status-completed">
                        Completed
                      </span>
                    ) : lesson.type === "Break" ? (
                      <span className="status-break">
                        Break
                      </span>
                    ) : (
                      <span className="status-upcoming">
                        Upcoming
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="timetable-side">
          <div className="quick-card">
            <div className="quick-card-header">
              <div>
                <span>Today</span>

                <h2>Schedule Overview</h2>
              </div>

              <div className="quick-calendar">
                <CalendarIcon />
              </div>
            </div>

            <div className="overview-number">
              <strong>6</strong>

              <span>Lessons</span>
            </div>

            <div className="overview-divider"></div>

            <div className="overview-item">
              <span className="overview-dot blue"></span>

              <div>
                <strong>5</strong>

                <span>Classes</span>
              </div>
            </div>

            <div className="overview-item">
              <span className="overview-dot yellow"></span>

              <div>
                <strong>1</strong>

                <span>Break</span>
              </div>
            </div>

            <div className="overview-item">
              <span className="overview-dot green"></span>

              <div>
                <strong>1</strong>

                <span>Live now</span>
              </div>
            </div>
          </div>

          <div className="focus-card">
            <div className="focus-image">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                alt="Students studying together"
              />
            </div>

            <div className="focus-content">
              <span>STUDENT TIP</span>

              <h2>
                Stay focused on your lessons.
              </h2>

              <p>
                Keep up with your timetable and arrive
                prepared for every class.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Timetable;