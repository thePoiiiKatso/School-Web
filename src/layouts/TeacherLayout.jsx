import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import TeacherClasses from "../pages/teacher/TeacherClasses";
import TeacherAttendance from "../pages/teacher/TeacherAttendance";
import TeacherAssignments from "../pages/teacher/TeacherAssignments";
import TeacherViewSubmissions from "../pages/teacher/TeacherViewSubmissions";
import TeacherExams from "../pages/teacher/TeacherExams";
import TeacherEnterMarks from "../pages/teacher/TeacherEnterMarks";
import TeacherResources from "../pages/teacher/TeacherResources";
import TeacherMessages from "../pages/teacher/TeacherMessages";
import TeacherProfile from "../pages/teacher/TeacherProfile";
import "../styles/teacher/teacher.css";

function TeacherLayout({ user, onSwitchRole, onLogout }) {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const [subPage, setSubPage] = useState(null);

  const handleNavigate = (page) => {
    setSubPage(null);
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (subPage === "viewSubmissions") {
      return <TeacherViewSubmissions onBack={() => setSubPage(null)} />;
    }
    if (subPage === "enterMarks") {
      return <TeacherEnterMarks onBack={() => setSubPage(null)} />;
    }

    if (currentPage === "Dashboard") return <TeacherDashboard />;
    if (currentPage === "My Classes") return <TeacherClasses />;
    if (currentPage === "Attendance") return <TeacherAttendance />;
    if (currentPage === "Assignments") {
      return <TeacherAssignments onViewSubmissions={() => setSubPage("viewSubmissions")} />;
    }
    if (currentPage === "Exams") {
      return <TeacherExams onEnterMarks={() => setSubPage("enterMarks")} />;
    }
    if (currentPage === "Resources") return <TeacherResources />;
    if (currentPage === "Messages") return <TeacherMessages />;
    if (currentPage === "Profile") return <TeacherProfile />;

    return (
      <div className="teacher-card">
        <div className="teacher-card-header">
          <div className="teacher-card-title">
            <h2>{currentPage}</h2>
          </div>
        </div>
        <p style={{ color: "#64748b", margin: 0 }}>
          The {currentPage} page will be built next.
        </p>
      </div>
    );
  };

  return (
    <div className="teacher-page">
      <Sidebar role="teacher" currentPage={currentPage} onNavigate={handleNavigate} />
      <div className="teacher-main">
        <Navbar
          role="teacher"
          userName={user?.name || "Mr. T. Kgosi"}
          userRole="Teacher"
          onSwitchRole={onSwitchRole}
          onLogout={onLogout}
        />
        <div className="teacher-content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default TeacherLayout;