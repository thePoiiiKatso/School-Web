import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AdminDashboard from "../pages/admin/Dashboard";
import Students from "../pages/admin/Students";
import Teachers from "../pages/admin/Teachers";
import Parents from "../pages/admin/Parents";
import Classes from "../pages/admin/Classes";
import Subjects from "../pages/admin/Subjects";
import Attendance from "../pages/admin/Attendance";
import Assignments from "../pages/admin/Assignments";
import Exams from "../pages/admin/Exams";
import Results from "../pages/admin/Results";
import Announcements from "../pages/admin/Announcements";
import Events from "../pages/admin/Events";
import Messages from "../pages/admin/Messages";
import Settings from "../pages/admin/Settings";
import "../styles/admin/admin.css";

function AdminLayout({ user, role = "admin", onSwitchRole, onLogout }) {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const renderPage = () => {
    if (currentPage === "Dashboard") return <AdminDashboard />;
    if (currentPage === "Students") return <Students />;
    if (currentPage === "Teachers") return <Teachers />;
    if (currentPage === "Parents") return <Parents />;
    if (currentPage === "Classes") return <Classes />;
    if (currentPage === "Subjects") return <Subjects />;
    if (currentPage === "Attendance") return <Attendance />;
    if (currentPage === "Assignments") return <Assignments />;
    if (currentPage === "Exams") return <Exams />;
    if (currentPage === "Results") return <Results />;
    if (currentPage === "Announcements") return <Announcements />;
    if (currentPage === "Events") return <Events />;
    if (currentPage === "Messages") return <Messages />;
    if (currentPage === "Settings") return <Settings />;

    return (
      <div className="admin-card">
        <div className="admin-card-header">
          <div className="admin-card-title">
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
    <div className="admin-page">
      <Sidebar
        role="admin"
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      <div className="admin-main">
        <Navbar
          role="admin"
          userName={user?.name || "Admin User"}
          userRole="Administrator"
          onSwitchRole={onSwitchRole}
          onLogout={onLogout}
        />
        <div className="admin-content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;