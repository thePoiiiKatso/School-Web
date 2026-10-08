import { useState } from "react";
import Login from "./pages/Login";
import AdminLayout from "./layouts/AdminLayout";
import TeacherLayout from "./layouts/TeacherLayout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("admin");

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setRole(userData?.role || "admin");
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setRole("admin");
  };

  const handleSwitchRole = (newRole) => {
    setRole(newRole);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  if (role === "teacher") {
    return (
      <TeacherLayout
        user={user}
        role="teacher"
        onSwitchRole={handleSwitchRole}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <AdminLayout
      user={user}
      role="admin"
      onSwitchRole={handleSwitchRole}
      onLogout={handleLogout}
    />
  );
}

export default App;