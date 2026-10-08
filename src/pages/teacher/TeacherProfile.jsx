import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/teacher/profile.css";

function TeacherProfile() {
  const [form, setForm] = useState({
    fullName: "Mr. T. Kgosi",
    email: "t.kgosi@bokamoso.ac.bw",
    phone: "+267 71 234 5678",
    dob: "1985-06-15",
    gender: "Male",
    street: "Plot 123, Independence Avenue",
    city: "Gaborone",
    postal: "0000",
    country: "Botswana",
  });

  const [password, setPassword] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const updatePass = (key, value) => setPassword((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="teacher-profile-header">
        <div className="teacher-profile-avatar-large">TK</div>
        <div className="teacher-profile-header-text">
          <h1>Mr. T. Kgosi</h1>
          <p>Mathematics Teacher &middot; Grade 6A class teacher</p>
          <div className="teacher-profile-tags">
            <span className="teacher-profile-tag">
              <Icon name="user" size={12} />
              Employee ID: TCH-003
            </span>
            <span className="teacher-profile-tag">
              <Icon name="book" size={12} />
              Mathematics
            </span>
            <span className="teacher-profile-tag">
              <Icon name="check" size={12} />
              Active
            </span>
          </div>
        </div>
      </section>

      <div className="teacher-profile-layout">
        <div className="teacher-profile-main">
          <div className="teacher-profile-card">
            <div className="teacher-profile-card-title">
              <div className="teacher-profile-card-title-icon">
                <Icon name="user" size={16} />
              </div>
              <h2>Personal Information</h2>
            </div>

            <div className="teacher-profile-grid">
              <div className="teacher-profile-field">
                <label>Full Name</label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                />
              </div>
              <div className="teacher-profile-field">
                <label>Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>
              <div className="teacher-profile-field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>
              <div className="teacher-profile-field">
                <label>Date of Birth</label>
                <input
                  type="date"
                  value={form.dob}
                  onChange={(e) => update("dob", e.target.value)}
                />
              </div>
              <div className="teacher-profile-field">
                <label>Gender</label>
                <select
                  value={form.gender}
                  onChange={(e) => update("gender", e.target.value)}
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="teacher-profile-upload-row">
              <div className="teacher-profile-avatar-large" style={{ width: 52, height: 52, fontSize: "1rem" }}>
                TK
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ display: "block", fontSize: "0.85rem", color: "#0f172a" }}>
                  Profile Photo
                </strong>
                <span style={{ fontSize: "0.74rem", color: "#64748b" }}>
                  JPG or PNG, up to 2 MB
                </span>
              </div>
              <button type="button" className="teacher-profile-upload-btn">
                <Icon name="file" size={14} />
                Change Photo
              </button>
            </div>
          </div>

          <div className="teacher-profile-card">
            <div className="teacher-profile-card-title">
              <div className="teacher-profile-card-title-icon">
                <Icon name="building" size={16} />
              </div>
              <h2>Address</h2>
            </div>

            <div className="teacher-profile-grid">
              <div className="teacher-profile-field full">
                <label>Street Address</label>
                <input
                  type="text"
                  value={form.street}
                  onChange={(e) => update("street", e.target.value)}
                />
              </div>
              <div className="teacher-profile-field">
                <label>City</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                />
              </div>
              <div className="teacher-profile-field">
                <label>Postal Code</label>
                <input
                  type="text"
                  value={form.postal}
                  onChange={(e) => update("postal", e.target.value)}
                />
              </div>
              <div className="teacher-profile-field">
                <label>Country</label>
                <input
                  type="text"
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                />
              </div>
            </div>

            <div className="teacher-profile-save-row">
              <button type="button" className="teacher-profile-cancel">
                Reset
              </button>
              <button type="button" className="teacher-profile-save">
                <Icon name="check" size={15} />
                Save Changes
              </button>
            </div>
          </div>
        </div>

        <div className="teacher-profile-side">
          <div className="teacher-profile-card">
            <div className="teacher-profile-card-title">
              <div className="teacher-profile-card-title-icon">
                <Icon name="book" size={16} />
              </div>
              <h2>Teaching Information</h2>
            </div>

            <div className="teacher-profile-info-list">
              <div className="teacher-profile-info-row">
                <div className="teacher-profile-info-icon"><Icon name="book" size={15} /></div>
                <div className="teacher-profile-info-text">
                  <strong>Mathematics</strong>
                  <span>Subject</span>
                </div>
              </div>
              <div className="teacher-profile-info-row">
                <div className="teacher-profile-info-icon"><Icon name="users" size={15} /></div>
                <div className="teacher-profile-info-text">
                  <strong>Grade 6A &amp; 6B</strong>
                  <span>Classes</span>
                </div>
              </div>
              <div className="teacher-profile-info-row">
                <div className="teacher-profile-info-icon"><Icon name="user" size={15} /></div>
                <div className="teacher-profile-info-text">
                  <strong>Full Time</strong>
                  <span>Employment type</span>
                </div>
              </div>
              <div className="teacher-profile-info-row">
                <div className="teacher-profile-info-icon"><Icon name="calendar" size={15} /></div>
                <div className="teacher-profile-info-text">
                  <strong>Jan 15, 2020</strong>
                  <span>Date joined</span>
                </div>
              </div>
            </div>
          </div>

          <div className="teacher-profile-card">
            <div className="teacher-profile-card-title">
              <div className="teacher-profile-card-title-icon">
                <Icon name="settings" size={16} />
              </div>
              <h2>Change Password</h2>
            </div>

            <div className="teacher-profile-grid">
              <div className="teacher-profile-field full">
                <label>Current Password</label>
                <input
                  type="password"
                  value={password.current}
                  onChange={(e) => updatePass("current", e.target.value)}
                  placeholder="Enter current password"
                />
              </div>
              <div className="teacher-profile-field full">
                <label>New Password</label>
                <input
                  type="password"
                  value={password.newPass}
                  onChange={(e) => updatePass("newPass", e.target.value)}
                  placeholder="Enter new password"
                />
              </div>
              <div className="teacher-profile-field full">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  value={password.confirm}
                  onChange={(e) => updatePass("confirm", e.target.value)}
                  placeholder="Re-enter new password"
                />
              </div>
            </div>

            <div className="teacher-profile-action-row">
              <button type="button" className="teacher-profile-action-btn">
                <Icon name="check" size={15} />
                Update Password
              </button>
            </div>
          </div>

          <div className="teacher-profile-card">
            <div className="teacher-profile-card-title">
              <div className="teacher-profile-card-title-icon">
                <Icon name="lightning" size={16} />
              </div>
              <h2>Quick Actions</h2>
            </div>

            <div className="teacher-profile-action-row">
              <button type="button" className="teacher-profile-action-btn">
                <Icon name="edit" size={14} />
                Edit Profile
              </button>
              <button type="button" className="teacher-profile-action-btn">
                <Icon name="settings" size={14} />
                Password
              </button>
            </div>

            <div className="teacher-profile-action-row">
              <button type="button" className="teacher-profile-action-btn">
                <Icon name="file" size={14} />
                Download ID
              </button>
              <button type="button" className="teacher-profile-action-btn danger">
                <Icon name="arrow" size={14} />
                Log Out
              </button>
            </div>
          </div>

          <div className="teacher-keep-going">
            <div className="teacher-keep-going-icon"><Icon name="user" size={20} /></div>
            <div>
              <strong>Looking good</strong>
              <span>Keep your profile up to date.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherProfile;