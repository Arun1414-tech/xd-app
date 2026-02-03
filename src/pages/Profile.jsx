import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="profile">
      <h2 className="profile-title">Account Settings</h2>

      <div className="profile-card">
        <div className="avatar">👤</div>

        <div className="profile-info">
          <h3>{user?.name}</h3>
          <p>{user?.email}</p>
        </div>
      </div>

      <div className="details-card">
        <div className="detail-row">
          <span>Phone</span>
          <span>{user?.phone}</span>
        </div>

        <div className="detail-row">
          <span>Company</span>
          <span>{user?.company || "—"}</span>
        </div>

        <div className="detail-row">
          <span>Account Type</span>
          <span>Individual</span>
        </div>
      </div>

      <p className="profile-desc">
        This is your account settings page where you can view your
        personal and account-related information.
      </p>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
