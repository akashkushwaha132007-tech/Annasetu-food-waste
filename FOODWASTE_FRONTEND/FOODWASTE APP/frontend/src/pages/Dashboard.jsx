import "../Dashboard.css";

import {
  FaBoxOpen,
  FaTruck,
  FaCheckCircle,
  FaGift,
  FaUserCircle,
  FaSignOutAlt,
  FaBell,
  FaChartLine,
  FaUsers,
  FaPlusCircle,
} from "react-icons/fa";


import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getDashboard } from "../services/dashboard";

function Dashboard() {
  const navigate = useNavigate();

  // Dashboard data
  const [dashboardData, setDashboardData] = useState({
    total_users: 0,
    total_food: 0,
    total_ngos: 0,
    available_food: 0,
    accepted_food: 0,
    delivered_food: 0,
  });

  const [loading, setLoading] = useState(true);

  // Get dashboard data from FastAPI
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboard();

        console.log("Dashboard API Response:", data);

        setDashboardData(data);
      } catch (error) {
        console.error("Dashboard Error:", error);
        alert("Unable to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard">

      {/* Sidebar */}

      <div className="sidebar">

        <h2>🍽 AnnaSetu</h2>

        <ul>

          <li onClick={() => navigate("/dashboard")}>
            🏠 Dashboard
          </li>

          <li onClick={() => navigate("/donatefood")}>
            🍱 Donate Food
          </li>

          <li onClick={() => navigate("/foodtracking")}>
            📦 Food Tracking
          </li>

          <li onClick={() => navigate("/ngolist")}>
            ❤️ NGO List
          </li>

          <li onClick={() => navigate("/analytics")}>
            📊 Analytics
          </li>

          <li onClick={() => navigate("/rewards")}>
            🏆 Rewards
          </li>

          <li onClick={() => navigate("/notifications")}>
            🔔 Notifications
          </li>

          <li onClick={() => navigate("/profile")}>
            👤 Profile
          </li>

        </ul>

        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>

      </div>


      {/* Main */}

      <div className="main">

        {/* Topbar */}

        <div className="topbar">

          <div>
            <h1>👋 Welcome Back</h1>
            <p>Let's save food and feed people.</p>
          </div>

          <div className="top-icons">
            <FaBell className="top-icon" />
            <FaUserCircle className="top-profile" />
          </div>

        </div>


        {/* Stats */}

        <div className="stats-grid">

          {/* Total Donations */}

          <div className="stat-card green">

            <FaBoxOpen className="icon" />

            <h2>
              {loading ? "..." : dashboardData.total_food}
            </h2>

            <p>Total Donations</p>

          </div>


          {/* Pending Pickup */}

          <div className="stat-card blue">

            <FaTruck className="icon" />

            <h2>
              {loading ? "..." : dashboardData.available_food}
            </h2>

            <p>Pending Pickup</p>

          </div>


          {/* Completed */}

          <div className="stat-card orange">

            <FaCheckCircle className="icon" />

            <h2>
              {loading ? "..." : dashboardData.delivered_food}
            </h2>

            <p>Completed</p>

          </div>


          {/* Reward Points */}

          <div className="stat-card purple">

            <FaGift className="icon" />

            <h2>240</h2>

            <p>Reward Points</p>

          </div>

        </div>


        {/* Quick Actions */}

        <div className="quick-actions">

          <div
            className="action-card"
            onClick={() => navigate("/donatefood")}
          >
            <FaPlusCircle className="action-icon" />

            <h3>Donate Food</h3>

            <p>Share extra food instantly.</p>
          </div>


          <div
            className="action-card"
            onClick={() => navigate("/foodtracking")}
          >
            <FaTruck className="action-icon" />

            <h3>Track Food</h3>

            <p>Track your donation status.</p>
          </div>


          <div
            className="action-card"
            onClick={() => navigate("/ngolist")}
          >
            <FaUsers className="action-icon" />

            <h3>Nearby NGOs</h3>

            <p>
              {loading
                ? "Loading NGOs..."
                : `${dashboardData.total_ngos} NGO Partners`}
            </p>

          </div>


          <div
            className="action-card"
            onClick={() => navigate("/analytics")}
          >
            <FaChartLine className="action-icon" />

            <h3>Analytics</h3>

            <p>View donation reports.</p>
          </div>

        </div>


        {/* Database Summary */}

        <div className="recent">

          <h2>📊 Database Summary</h2>

          <table>

            <thead>

              <tr>
                <th>Category</th>
                <th>Total</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>👤 Registered Users</td>

                <td>
                  {loading ? "..." : dashboardData.total_users}
                </td>
              </tr>


              <tr>
                <td>🍱 Total Food Donations</td>

                <td>
                  {loading ? "..." : dashboardData.total_food}
                </td>
              </tr>


              <tr>
                <td>❤️ NGO Partners</td>

                <td>
                  {loading ? "..." : dashboardData.total_ngos}
                </td>
              </tr>


              <tr>
                <td>⏳ Available Food</td>

                <td>
                  {loading ? "..." : dashboardData.available_food}
                </td>
              </tr>


              <tr>
                <td>✅ Accepted Food</td>

                <td>
                  {loading ? "..." : dashboardData.accepted_food}
                </td>
              </tr>


              <tr>
                <td>🎉 Delivered Food</td>

                <td>
                  {loading ? "..." : dashboardData.delivered_food}
                </td>
              </tr>

            </tbody>

          </table>

        </div>


        {/* Bottom Section */}

        <div className="bottom-grid">


          {/* Profile */}

          <div className="profile-card">

            <FaUserCircle className="profile-icon" />

            <h2>PINDU SINGH CHANDEL</h2>

            <p>📧 pinsu436@gmail.com</p>

            <p>📱 8085112640</p>

            <p>🎖 Gold Donor</p>

            <button onClick={() => navigate("/profile")}>
              Edit Profile
            </button>

          </div>


          {/* Achievements */}

          <div className="achievement-card">

            <h2>🏆 Achievements</h2>

            <p>
              🥇 Food Hero Badge
            </p>

            <p>
              🍱 {loading ? "..." : dashboardData.delivered_food} Donations Completed
            </p>

            <p>
              ❤️ People Helped
            </p>

            <p>
              ⭐ 240 Reward Points
            </p>

            <button onClick={() => navigate("/rewards")}>
              View Rewards
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;