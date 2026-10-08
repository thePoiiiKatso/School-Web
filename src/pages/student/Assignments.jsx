import React, { useMemo, useState } from "react";
import "../../styles/assignments.css";

const assignmentsData = [
  {
    id: 1,
    subject: "Mathematics",
    title: "Algebra Practice Set",
    description: "Solve problems from chapter 5 (pages 120-135).",
    dueDate: "Apr 25, 2025",
    dueInfo: "2 days left",
    status: "Due Soon",
    color: "purple",
  },
  {
    id: 2,
    subject: "Science",
    title: "Science Project",
    description: "Create a model of the water cycle.",
    dueDate: "Apr 28, 2025",
    dueInfo: "5 days left",
    status: "In Progress",
    color: "green",
  },
  {
    id: 3,
    subject: "English",
    title: "Essay Writing",
    description: "Write an essay on 'The Importance of Education'.",
    dueDate: "Apr 22, 2025",
    dueInfo: "Today",
    status: "Due Soon",
    color: "orange",
  },
  {
    id: 4,
    subject: "Computer Science",
    title: "Web Development Assignment",
    description: "Build a simple responsive webpage.",
    dueDate: "Apr 30, 2025",
    dueInfo: "7 days left",
    status: "In Progress",
    color: "blue",
  },
  {
    id: 5,
    subject: "Social Studies",
    title: "History Research",
    description: "Research and write about World War II.",
    dueDate: "May 5, 2025",
    dueInfo: "12 days left",
    status: "Not Started",
    color: "cyan",
  },
  {
    id: 6,
    subject: "Chemistry",
    title: "Lab Report",
    description: "Write a report on the chemical reaction experiment.",
    dueDate: "May 2, 2025",
    dueInfo: "9 days left",
    status: "Completed",
    color: "purple",
  },
];

function AssignmentIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M6 3h8l5 5v13H6z" />
      <path d="M14 3v6h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function SubjectIcon({ subject, color }) {
  const firstLetter = subject === "English" ? "Aa" : "";

  if (firstLetter) {
    return (
      <div className={`assignment-subject-icon ${color}`}>
        <span>{firstLetter}</span>
      </div>
    );
  }

  return (
    <div className={`assignment-subject-icon ${color}`}>
      <AssignmentIcon />
    </div>
  );
}

function Assignments() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("deadline");

  const filters = [
    "All",
    "Due Soon",
    "In Progress",
    "Not Started",
    "Completed",
  ];

  const filteredAssignments = useMemo(() => {
    let results = assignmentsData.filter((assignment) => {
      const matchesFilter =
        activeFilter === "All" ||
        assignment.status === activeFilter;

      const search = searchTerm.toLowerCase();

      const matchesSearch =
        assignment.title.toLowerCase().includes(search) ||
        assignment.subject.toLowerCase().includes(search) ||
        assignment.description.toLowerCase().includes(search);

      return matchesFilter && matchesSearch;
    });

    if (sortBy === "subject") {
      results.sort((a, b) =>
        a.subject.localeCompare(b.subject)
      );
    }

    if (sortBy === "status") {
      results.sort((a, b) =>
        a.status.localeCompare(b.status)
      );
    }

    return results;
  }, [activeFilter, searchTerm, sortBy]);

  const totalAssignments = assignmentsData.length;

  const dueSoonAssignments = assignmentsData.filter(
    (assignment) => assignment.status === "Due Soon"
  ).length;

  const inProgressAssignments = assignmentsData.filter(
    (assignment) => assignment.status === "In Progress"
  ).length;

  const completedAssignments = assignmentsData.filter(
    (assignment) => assignment.status === "Completed"
  ).length;

  return (
    <div className="assignments-page">
      <section className="assignments-top">
        <div className="assignments-title-area">
          <div className="assignments-main-icon">
            <AssignmentIcon />
          </div>

          <div>
            <h1>Assignments</h1>
            <p>
              View and manage your assignments. Keep track of
              deadlines and submit your work on time.
            </p>
          </div>
        </div>
      </section>

      <section className="assignments-controls">
        <div className="assignment-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={
                activeFilter === filter ? "active" : ""
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="assignment-search">
          <SearchIcon />

          <input
            type="text"
            placeholder="Search assignments..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>
      </section>

      <section className="assignment-stat-grid">
        <div className="assignment-stat-card blue">
          <div className="assignment-stat-icon">
            <AssignmentIcon />
          </div>

          <div>
            <span>Total Assignments</span>
            <strong>{totalAssignments}</strong>
          </div>
        </div>

        <div className="assignment-stat-card yellow">
          <div className="assignment-stat-icon">
            <ClockIcon />
          </div>

          <div>
            <span>Due Soon</span>
            <strong>{dueSoonAssignments}</strong>
          </div>
        </div>

        <div className="assignment-stat-card light-blue">
          <div className="assignment-stat-icon">
            <ClockIcon />
          </div>

          <div>
            <span>In Progress</span>
            <strong>{inProgressAssignments}</strong>
          </div>
        </div>

        <div className="assignment-stat-card green">
          <div className="assignment-stat-icon">
            <CheckIcon />
          </div>

          <div>
            <span>Completed</span>
            <strong>{completedAssignments}</strong>
          </div>
        </div>
      </section>

      <section className="assignments-list-container">
        <div className="assignments-list-header">
          <h2>All Assignments</h2>

          <div className="assignment-sort">
            <label>Sort by:</label>

            <select
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value)
              }
            >
              <option value="deadline">Due Date</option>
              <option value="subject">Subject</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>

        <div className="assignment-table">
          <div className="assignment-table-header">
            <span>Subject</span>
            <span>Title</span>
            <span>Due Date</span>
            <span>Status</span>
            <span>Actions</span>
          </div>

          {filteredAssignments.length > 0 ? (
            filteredAssignments.map((assignment) => (
              <div
                className="assignment-row"
                key={assignment.id}
              >
                <div className="assignment-subject-cell">
                  <SubjectIcon
                    subject={assignment.subject}
                    color={assignment.color}
                  />

                  <span>{assignment.subject}</span>
                </div>

                <div className="assignment-title-cell">
                  <strong>{assignment.title}</strong>
                  <p>{assignment.description}</p>
                </div>

                <div className="assignment-date-cell">
                  <div>
                    <CalendarIcon />
                    <span>{assignment.dueDate}</span>
                  </div>

                  <small
                    className={
                      assignment.dueInfo === "Today"
                        ? "today"
                        : ""
                    }
                  >
                    ({assignment.dueInfo})
                  </small>
                </div>

                <div>
                  <span
                    className={`assignment-status ${assignment.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {assignment.status}
                  </span>
                </div>

                <div className="assignment-action-cell">
                  <button type="button">
                    View
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="assignment-empty">
              <AssignmentIcon />
              <h3>No assignments found</h3>
              <p>
                Try changing your filter or search term.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Assignments;