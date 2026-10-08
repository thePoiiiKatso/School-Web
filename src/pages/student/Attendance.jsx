import React, { useMemo, useState } from "react";
import "../../styles/attendance.css";

const subjects = [
  {
    name: "Mathematics",
    present: 9,
    total: 10,
    color: "#7357d9",
  },
  {
    name: "English",
    present: 9,
    total: 10,
    color: "#18a9c9",
  },
  {
    name: "Life Orientation",
    present: 8,
    total: 10,
    color: "#f6c515",
  },
  {
    name: "Science",
    present: 9,
    total: 10,
    color: "#2878df",
  },
  {
    name: "Setswana",
    present: 8,
    total: 10,
    color: "#f28b18",
  },
  {
    name: "History",
    present: 9,
    total: 10,
    color: "#19b56b",
  },
];

const attendanceRecords = [
  {
    date: "28 Apr 2025",
    subject: "Mathematics",
    status: "Present",
    time: "08:00 - 09:00",
  },
  {
    date: "28 Apr 2025",
    subject: "English",
    status: "Present",
    time: "09:15 - 10:15",
  },
  {
    date: "28 Apr 2025",
    subject: "Life Orientation",
    status: "Late",
    time: "10:30 - 11:30",
  },
  {
    date: "28 Apr 2025",
    subject: "Break",
    status: "Break",
    time: "11:30 - 12:00",
  },
  {
    date: "28 Apr 2025",
    subject: "Science",
    status: "Present",
    time: "12:00 - 13:00",
  },
];

const calendarDays = [
  { day: 1, status: "present" },
  { day: 2, status: "present" },
  { day: 3, status: "late" },
  { day: 4, status: "present" },
  { day: 5, status: "" },
  { day: 6, status: "" },
  { day: 7, status: "present" },
  { day: 8, status: "present" },
  { day: 9, status: "present" },
  { day: 10, status: "late" },
  { day: 11, status: "" },
  { day: 12, status: "" },
  { day: 13, status: "" },
  { day: 14, status: "present" },
  { day: 15, status: "present" },
  { day: 16, status: "present" },
  { day: 17, status: "" },
  { day: 18, status: "absent" },
  { day: 19, status: "" },
  { day: 20, status: "" },
  { day: 21, status: "" },
  { day: 22, status: "present" },
  { day: 23, status: "present" },
  { day: 24, status: "present" },
  { day: 25, status: "" },
  { day: 26, status: "" },
  { day: 27, status: "" },
  { day: 28, status: "present", selected: true },
  { day: 29, status: "present" },
  { day: 30, status: "present" },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12.5 9.2 17 19 7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 8 8 8M16 8l-8 8" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5.5" width="16" height="15" rx="2" />
      <path d="M8 3.5v4M16 3.5v4M4 10h16" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 20V10M12 20V5M19 20v-7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 7l5 5-5 5" />
    </svg>
  );
}

function Attendance() {
  const [selectedDay, setSelectedDay] = useState(28);

  const overallAttendance = useMemo(() => {
    const totalPresent = subjects.reduce(
      (sum, subject) => sum + subject.present,
      0
    );

    const totalClasses = subjects.reduce(
      (sum, subject) => sum + subject.total,
      0
    );

    return Math.round((totalPresent / totalClasses) * 100);
  }, []);

  return (
    <div className="attendance-page">
      <div className="attendance-page-header">
        <div>
          <div className="attendance-breadcrumb">
            <span>Dashboard</span>
            <strong>/</strong>
            <span>Attendance</span>
          </div>

          <h1>Attendance</h1>

          <p>
            Track your attendance records and keep up with your classes.
          </p>
        </div>

        <button className="attendance-back-button">
          Back to Dashboard
        </button>
      </div>

      <section className="attendance-summary">
        <div className="attendance-overview-card">
          <div
            className="attendance-circle"
            style={{
              "--attendance-progress": `${overallAttendance}%`,
            }}
          >
            <div className="attendance-circle-inner">
              <strong>{overallAttendance}%</strong>
              <span>Overall</span>
              <span>Attendance</span>
            </div>
          </div>

          <div className="attendance-overview-details">
            <div className="attendance-detail-item">
              <span className="status-dot present"></span>
              <span>Present</span>
              <strong>46</strong>
            </div>

            <div className="attendance-detail-item">
              <span className="status-dot late"></span>
              <span>Late</span>
              <strong>3</strong>
            </div>

            <div className="attendance-detail-item">
              <span className="status-dot absent"></span>
              <span>Absent</span>
              <strong>1</strong>
            </div>
          </div>
        </div>

        <div className="attendance-stat-card present-card">
          <div className="attendance-stat-icon">
            <CheckIcon />
          </div>

          <span>Present</span>
          <strong>46</strong>
          <small>days</small>
        </div>

        <div className="attendance-stat-card late-card">
          <div className="attendance-stat-icon">
            <ClockIcon />
          </div>

          <span>Late</span>
          <strong>3</strong>
          <small>days</small>
        </div>

        <div className="attendance-stat-card absent-card">
          <div className="attendance-stat-icon">
            <CloseIcon />
          </div>

          <span>Absent</span>
          <strong>1</strong>
          <small>day</small>
        </div>
      </section>

      <section className="attendance-main-grid">
        <div className="attendance-left-column">
          <div className="attendance-panel subject-panel">
            <div className="attendance-panel-header">
              <div className="attendance-title">
                <div className="panel-icon">
                  <ChartIcon />
                </div>

                <h2>Subject Attendance</h2>
              </div>

              <button className="view-all-button">
                View All
                <ArrowIcon />
              </button>
            </div>

            <div className="subject-table">
              <div className="subject-table-header">
                <span>Subject</span>
                <span>Present</span>
                <span>Total</span>
                <span>Percentage</span>
              </div>

              {subjects.map((subject) => {
                const percentage = Math.round(
                  (subject.present / subject.total) * 100
                );

                return (
                  <div className="subject-row" key={subject.name}>
                    <div className="subject-name">
                      <span
                        className="subject-color"
                        style={{ backgroundColor: subject.color }}
                      ></span>
                      <span>{subject.name}</span>
                    </div>

                    <span>{subject.present}</span>

                    <span>{subject.total}</span>

                    <div className="percentage-cell">
                      <div className="percentage-bar">
                        <span style={{ width: `${percentage}%` }}></span>
                      </div>

                      <strong>{percentage}%</strong>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="attendance-panel records-panel">
            <div className="attendance-panel-header">
              <div className="attendance-title">
                <div className="panel-icon">
                  <ClockIcon />
                </div>

                <h2>Recent Attendance Records</h2>
              </div>

              <button className="view-all-button">
                View All
                <ArrowIcon />
              </button>
            </div>

            <div className="records-table">
              <div className="records-table-header">
                <span>Date</span>
                <span>Subject</span>
                <span>Status</span>
                <span>Time</span>
              </div>

              {attendanceRecords.map((record, index) => (
                <div className="record-row" key={`${record.subject}-${index}`}>
                  <span>{record.date}</span>

                  <span>{record.subject}</span>

                  <span>
                    <span
                      className={`attendance-status ${record.status.toLowerCase()}`}
                    >
                      {record.status === "Present" && <CheckIcon />}
                      {record.status === "Late" && <ClockIcon />}
                      {record.status === "Break" && <ClockIcon />}
                      {record.status}
                    </span>
                  </span>

                  <span>{record.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="attendance-right-column">
          <div className="attendance-panel calendar-panel">
            <div className="calendar-header">
              <div className="attendance-title">
                <div className="panel-icon">
                  <CalendarIcon />
                </div>

                <h2>Monthly Overview</h2>
              </div>

              <div className="calendar-month">
                <span>April 2025</span>
                <button>‹</button>
                <button>›</button>
              </div>
            </div>

            <div className="calendar-weekdays">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

            <div className="calendar-grid">
              {calendarDays.map((item) => (
                <button
                  key={item.day}
                  className={`calendar-day ${item.status} ${
                    selectedDay === item.day ? "selected" : ""
                  }`}
                  onClick={() => setSelectedDay(item.day)}
                >
                  <span>{item.day}</span>

                  {item.status && (
                    <i className={`calendar-dot ${item.status}`}></i>
                  )}
                </button>
              ))}
            </div>

            <div className="calendar-legend">
              <span>
                <i className="legend-dot present"></i>
                Present
              </span>

              <span>
                <i className="legend-dot late"></i>
                Late
              </span>

              <span>
                <i className="legend-dot absent"></i>
                Absent
              </span>
            </div>
          </div>

          <div className="attendance-tip-card">
            <div className="tip-content">
              <span className="tip-label">KEEP GOING!</span>

              <h3>
                Great attendance
                <br />
                builds a brighter future.
              </h3>

              <p>
                Your commitment to showing up makes a difference!
              </p>

              <button>
                <span>★</span>
                You're doing great!
              </button>
            </div>

            <div className="student-illustration">
              <div className="student-head"></div>
              <div className="student-body"></div>
              <div className="student-shirt"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Attendance;