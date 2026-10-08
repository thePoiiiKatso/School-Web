import { useState } from "react";
import Icon from "../../components/Icon";
import "../../styles/admin/settings.css";

const tabs = [
  { id: "school", label: "School Info", icon: "building" },
  { id: "academic", label: "Academic", icon: "book" },
  { id: "users", label: "Users & Roles", icon: "users" },
  { id: "notifications", label: "Notifications", icon: "bell" },
  { id: "security", label: "Security", icon: "check" },
];

function Settings() {
  const [activeTab, setActiveTab] = useState("school");

  return (
    <>
      <section className="admin-page-header">
        <div className="admin-page-header-left">
          <div className="admin-page-header-icon"><Icon name="settings" size={26} /></div>
          <div>
            <div className="admin-breadcrumb"><span>Dashboard</span><span>/</span><span>Settings</span></div>
            <h1>Settings</h1>
            <p>Manage your school portal preferences and system configuration.</p>
          </div>
        </div>
        <img src="/students2.jpg" alt="Settings" className="admin-page-header-image" />
      </section>

      <div className="admin-settings-layout">
        <div className="admin-settings-main">
          <div className="admin-settings-tabs">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`admin-settings-tab ${activeTab === t.id ? "active" : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                <Icon name={t.icon} size={15} />
                {t.label}
              </button>
            ))}
          </div>

          {activeTab === "school" && (
            <div className="admin-settings-form">
              <div className="admin-settings-section">
                <h3>School Information</h3>
                <p>Basic details about the school. These appear on reports and printed documents.</p>
                <div className="admin-form-grid">
                  <div className="admin-form-field">
                    <label>School Name</label>
                    <input type="text" defaultValue="Bokamoso jwa Rona" />
                  </div>
                  <div className="admin-form-field">
                    <label>School Motto</label>
                    <input type="text" defaultValue="Better Education, Brighter Futures" />
                  </div>
                  <div className="admin-form-field">
                    <label>Contact Email</label>
                    <input type="email" defaultValue="info@bokamoso.ac.bw" />
                  </div>
                  <div className="admin-form-field">
                    <label>Contact Phone</label>
                    <input type="tel" defaultValue="+267 71 234 5678" />
                  </div>
                  <div className="admin-form-field full">
                    <label>Physical Address</label>
                    <input type="text" defaultValue="Plot 123, Gaborone, Botswana" />
                  </div>
                </div>
              </div>

              <div className="admin-settings-section">
                <h3>Branding</h3>
                <p>Logo and colours used across the portal.</p>
                <div className="admin-form-grid">
                  <div className="admin-form-field">
                    <label>Primary Colour</label>
                    <input type="text" defaultValue="#2563eb" />
                  </div>
                  <div className="admin-form-field">
                    <label>Logo Path</label>
                    <input type="text" defaultValue="/logo.png" />
                  </div>
                </div>
              </div>

              <div className="admin-form-actions">
                <button type="button" className="admin-secondary-button">Reset</button>
                <button type="button" className="admin-primary-button">
                  <Icon name="check" size={16} />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "academic" && (
            <div className="admin-settings-form">
              <div className="admin-settings-section">
                <h3>Academic Year</h3>
                <p>Set the current academic year and terms.</p>
                <div className="admin-form-grid">
                  <div className="admin-form-field">
                    <label>Current Academic Year</label>
                    <input type="text" defaultValue="2025" />
                  </div>
                  <div className="admin-form-field">
                    <label>Current Term</label>
                    <select defaultValue="Term 2">
                      <option>Term 1</option>
                      <option>Term 2</option>
                      <option>Term 3</option>
                    </select>
                  </div>
                  <div className="admin-form-field">
                    <label>Term Start</label>
                    <input type="date" defaultValue="2025-04-08" />
                  </div>
                  <div className="admin-form-field">
                    <label>Term End</label>
                    <input type="date" defaultValue="2025-06-28" />
                  </div>
                </div>
              </div>

              <div className="admin-settings-section">
                <h3>Grading System</h3>
                <p>Pass mark and grade boundaries used for results.</p>
                <div className="admin-form-grid">
                  <div className="admin-form-field">
                    <label>Pass Mark (%)</label>
                    <input type="number" defaultValue="50" />
                  </div>
                  <div className="admin-form-field">
                    <label>Max Mark (%)</label>
                    <input type="number" defaultValue="100" />
                  </div>
                </div>
              </div>

              <div className="admin-form-actions">
                <button type="button" className="admin-primary-button">
                  <Icon name="check" size={16} />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div className="admin-settings-form">
              <div className="admin-settings-section">
                <h3>Users &amp; Roles</h3>
                <p>Manage who can access the portal and what they can do.</p>
                <div className="admin-quick-list">
                  <div className="admin-quick-list-item">
                    <div className="admin-quick-icon"><Icon name="user" size={15} /></div>
                    <span>Admins — Full access to the entire portal</span>
                  </div>
                  <div className="admin-quick-list-item">
                    <div className="admin-quick-icon"><Icon name="user" size={15} /></div>
                    <span>Teachers — Manage assigned classes and results</span>
                  </div>
                  <div className="admin-quick-list-item">
                    <div className="admin-quick-icon"><Icon name="users" size={15} /></div>
                    <span>Parents — View their children's information</span>
                  </div>
                  <div className="admin-quick-list-item">
                    <div className="admin-quick-icon"><Icon name="user" size={15} /></div>
                    <span>Students — View their own school information</span>
                  </div>
                </div>
              </div>

              <div className="admin-settings-section">
                <h3>Default Account Rules</h3>
                <p>Applied to new accounts created by the school.</p>
                <div className="admin-form-grid">
                  <div className="admin-form-field">
                    <label>Password Minimum Length</label>
                    <input type="number" defaultValue="8" />
                  </div>
                  <div className="admin-form-field">
                    <label>Require Email Verification</label>
                    <select defaultValue="Yes">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="admin-form-actions">
                <button type="button" className="admin-primary-button">
                  <Icon name="check" size={16} />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="admin-settings-form">
              <div className="admin-settings-section">
                <h3>Email Notifications</h3>
                <p>When the portal sends automatic emails to parents and staff.</p>
                <div className="admin-quick-list">
                  <div className="admin-quick-list-item">
                    <div className="admin-quick-icon"><Icon name="check" size={15} /></div>
                    <span>Send email when an announcement is published</span>
                  </div>
                  <div className="admin-quick-list-item">
                    <div className="admin-quick-icon"><Icon name="check" size={15} /></div>
                    <span>Send email when results are published</span>
                  </div>
                  <div className="admin-quick-list-item">
                    <div className="admin-quick-icon"><Icon name="check" size={15} /></div>
                    <span>Send email when attendance is below 80%</span>
                  </div>
                  <div className="admin-quick-list-item">
                    <div className="admin-quick-icon"><Icon name="check" size={15} /></div>
                    <span>Send email when school fees are overdue</span>
                  </div>
                </div>
              </div>

              <div className="admin-form-actions">
                <button type="button" className="admin-primary-button">
                  <Icon name="check" size={16} />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="admin-settings-form">
              <div className="admin-settings-section">
                <h3>Security &amp; Access</h3>
                <p>Portal security settings and login requirements.</p>
                <div className="admin-form-grid">
                  <div className="admin-form-field">
                    <label>Session Timeout (minutes)</label>
                    <input type="number" defaultValue="30" />
                  </div>
                  <div className="admin-form-field">
                    <label>Two-Factor Authentication</label>
                    <select defaultValue="Optional">
                      <option>Required</option>
                      <option>Optional</option>
                      <option>Disabled</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="admin-settings-section">
                <h3>Admin Password</h3>
                <p>Change your own administrator password. Use a strong password.</p>
                <div className="admin-form-grid">
                  <div className="admin-form-field">
                    <label>Current Password</label>
                    <input type="password" placeholder="Enter current password" />
                  </div>
                  <div className="admin-form-field">
                    <label>New Password</label>
                    <input type="password" placeholder="Enter new password" />
                  </div>
                  <div className="admin-form-field full">
                    <label>Confirm New Password</label>
                    <input type="password" placeholder="Re-enter new password" />
                  </div>
                </div>
              </div>

              <div className="admin-form-actions">
                <button type="button" className="admin-primary-button">
                  <Icon name="check" size={16} />
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="admin-settings-side">
          <div className="admin-admin-profile-card">
            <div className="admin-admin-avatar-large">AD</div>
            <strong>Admin User</strong>
            <span>admin@bokamoso.ac.bw</span>
            <div className="admin-admin-role-pill">
              <Icon name="user" size={12} />
              Administrator
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="lightning" size={16} /></div>
                <h2>Quick Links</h2>
              </div>
            </div>
            <div className="admin-quick-list">
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="file" size={15} /></div>
                <span>Backup Database</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="clock" size={15} /></div>
                <span>System Logs</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="user" size={15} /></div>
                <span>Change Password</span>
              </div>
              <div className="admin-quick-list-item">
                <div className="admin-quick-icon"><Icon name="message" size={15} /></div>
                <span>Contact Support</span>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-card-title">
                <div className="admin-card-title-icon"><Icon name="check" size={16} /></div>
                <h2>System Status</h2>
              </div>
            </div>
            <div className="admin-system-status">
              <div className="admin-status-line">
                <span>Portal Version</span>
                <strong>v2.4.1</strong>
              </div>
              <div className="admin-status-line">
                <span>Last Backup</span>
                <strong>28 Apr 2025</strong>
              </div>
              <div className="admin-status-line">
                <span>Storage Used</span>
                <strong>42%</strong>
              </div>
              <div className="admin-status-line">
                <span>Server</span>
                <span className="admin-status-dot-green">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;