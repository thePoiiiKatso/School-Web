import "../../styles/results.css";

const subjects = [
  {
    name: "Mathematics",
    code: "MAT101",
    score: 78,
    grade: "B",
    points: 7,
    color: "purple",
  },
  {
    name: "English",
    code: "ENG101",
    score: 84,
    grade: "A",
    points: 8,
    color: "blue",
  },
  {
    name: "Science",
    code: "SCI101",
    score: 76,
    grade: "B",
    points: 7,
    color: "green",
  },
  {
    name: "Computer Studies",
    code: "COM101",
    score: 91,
    grade: "A",
    points: 9,
    color: "yellow",
  },
  {
    name: "Life Orientation",
    code: "LOR101",
    score: 85,
    grade: "A",
    points: 8,
    color: "cyan",
  },
];

function Icon({ type }) {
  const icons = {
    results: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h4" />
        <path d="m15 15 1.5 1.5L19 14" />
      </svg>
    ),

    book: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z" />
        <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
      </svg>
    ),

    trophy: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
        <path d="M8 6H5v2a3 3 0 0 0 3 3M16 6h3v2a3 3 0 0 1-3 3" />
        <path d="M12 13v4M8 21h8M10 17h4" />
      </svg>
    ),

    check: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),

    chart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V10M10 20V5M16 20v-8M22 20H2" />
      </svg>
    ),

    star: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
      </svg>
    ),

    points: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v10M9 9.5h4a2 2 0 0 1 0 4H9M9 13.5h4" />
      </svg>
    ),
  };

  return icons[type];
}

function Results() {
  return (
    <div className="results-content">

      <div className="results-page-header">
        <div className="results-title-icon">
          <Icon type="results" />
        </div>

        <div>
          <h1>Results</h1>
          <p>View your academic performance and results</p>
        </div>
      </div>

      <div className="results-summary-grid">

        <div className="result-summary-card purple-card">
          <span className="result-icon purple">
            <Icon type="results" />
          </span>

          <span>Overall Average</span>
          <strong>83%</strong>
          <small>Excellent performance</small>
        </div>

        <div className="result-summary-card blue-card">
          <span className="result-icon blue">
            <Icon type="trophy" />
          </span>

          <span>Highest Score</span>
          <strong>91%</strong>
          <small>Computer Studies</small>
        </div>

        <div className="result-summary-card green-card">
          <span className="result-icon green">
            <Icon type="check" />
          </span>

          <span>Subjects Passed</span>
          <strong>5/5</strong>
          <small>100% pass rate</small>
        </div>

        <div className="result-summary-card yellow-card">
          <span className="result-icon yellow">
            <Icon type="points" />
          </span>

          <span>Total Points</span>
          <strong>39</strong>
          <small>Across all subjects</small>
        </div>

      </div>

      <div className="results-layout">

        <div className="results-main-column">

          <section className="results-table-card">

            <div className="results-card-header">

              <div className="results-card-title">
                <span>
                  <Icon type="book" />
                </span>

                <h2>Subject Results</h2>
              </div>

              <select className="results-select" defaultValue="Term 1">
                <option>Term 1</option>
                <option>Term 2</option>
                <option>Term 3</option>
              </select>

            </div>

            <div className="results-table">

              <div className="results-table-row results-table-heading">
                <span>Subject</span>
                <span>Score</span>
                <span>Grade</span>
                <span>Points</span>
                <span>Status</span>
              </div>

              {subjects.map((subject) => (
                <div className="results-table-row result-data-row" key={subject.code}>

                  <div className="result-subject">

                    <span className={`result-icon ${subject.color}`}>
                      <Icon type="book" />
                    </span>

                    <div>
                      <strong>{subject.name}</strong>
                      <small>{subject.code}</small>
                    </div>

                  </div>

                  <div className="score-cell">
                    <strong>{subject.score}%</strong>

                    <div className="score-bar">
                      <span
                        style={{ width: `${subject.score}%` }}
                      ></span>
                    </div>
                  </div>

                  <span className={`grade-badge grade-${subject.grade.toLowerCase()}`}>
                    {subject.grade}
                  </span>

                  <strong className="points-cell">
                    {subject.points}
                  </strong>

                  <span className="passed-badge">
                    <Icon type="check" />
                    Passed
                  </span>

                </div>
              ))}

            </div>

          </section>

          <section className="performance-card">

            <div className="results-card-header">

              <div className="results-card-title">
                <span>
                  <Icon type="chart" />
                </span>

                <h2>Performance Overview</h2>
              </div>

            </div>

            <div className="performance-content">

              <div className="performance-chart">

                <div className="chart-y-axis">
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                  <span>25</span>
                  <span>0</span>
                </div>

                <div className="chart-area">

                  <div className="chart-grid-line"></div>
                  <div className="chart-grid-line"></div>
                  <div className="chart-grid-line"></div>
                  <div className="chart-grid-line"></div>

                  <div className="bars">

                    <div className="bar-item">
                      <div
                        className="bar purple-bar"
                        style={{ height: "78%" }}
                      >
                        <span>78%</span>
                      </div>
                      <small>Math</small>
                    </div>

                    <div className="bar-item">
                      <div
                        className="bar blue-bar"
                        style={{ height: "84%" }}
                      >
                        <span>84%</span>
                      </div>
                      <small>English</small>
                    </div>

                    <div className="bar-item">
                      <div
                        className="bar green-bar"
                        style={{ height: "76%" }}
                      >
                        <span>76%</span>
                      </div>
                      <small>Science</small>
                    </div>

                    <div className="bar-item">
                      <div
                        className="bar yellow-bar"
                        style={{ height: "91%" }}
                      >
                        <span>91%</span>
                      </div>
                      <small>Computer</small>
                    </div>

                    <div className="bar-item">
                      <div
                        className="bar cyan-bar"
                        style={{ height: "85%" }}
                      >
                        <span>85%</span>
                      </div>
                      <small>Life Orient.</small>
                    </div>

                  </div>

                </div>

              </div>

              <div className="performance-message">

                <div className="performance-message-icon">
                  <Icon type="trophy" />
                </div>

                <h3>Great Work!</h3>

                <p>
                  Your overall performance is strong this term.
                  Keep focusing on your weaker subjects to improve
                  your average even further.
                </p>

                <div className="performance-average">
                  <span>Current Average</span>
                  <strong>83%</strong>
                </div>

              </div>

            </div>

          </section>

        </div>

        <div className="results-side-column">

          <section className="academic-card">

            <div className="side-card-title">

              <span>
                <Icon type="results" />
              </span>

              <h3>Academic Summary</h3>

            </div>

            <div className="academic-list">

              <div>
                <span>Overall Average</span>
                <strong>83%</strong>
              </div>

              <div>
                <span>Grade Average</span>
                <strong>A</strong>
              </div>

              <div>
                <span>Pass Rate</span>
                <strong className="green-text">100%</strong>
              </div>

              <div>
                <span>Subjects Passed</span>
                <strong>5 / 5</strong>
              </div>

              <div>
                <span>Total Points</span>
                <strong>39</strong>
              </div>

            </div>

          </section>

          <section className="grade-card">

            <div className="side-card-title">

              <span>
                <Icon type="star" />
              </span>

              <h3>Grade Scale</h3>

            </div>

            <div className="grade-scale">

              <div>
                <span className="scale-badge grade-a">A</span>
                <span>80% - 100% Excellent</span>
              </div>

              <div>
                <span className="scale-badge grade-b">B</span>
                <span>70% - 79% Very Good</span>
              </div>

              <div>
                <span className="scale-badge grade-c">C</span>
                <span>60% - 69% Good</span>
              </div>

              <div>
                <span className="scale-badge grade-d">D</span>
                <span>50% - 59% Pass</span>
              </div>

            </div>

          </section>

          <section className="results-message-card">

            <div className="message-icon">
              <Icon type="star" />
            </div>

            <h3>Keep Improving</h3>

            <p>
              You're doing great. Keep working consistently
              to maintain your excellent results.
            </p>

          </section>

        </div>

      </div>

    </div>
  );
}

export default Results;