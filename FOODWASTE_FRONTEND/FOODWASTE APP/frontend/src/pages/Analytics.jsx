import { useEffect, useState } from "react";
import "./Analytics.css";
import { getDashboard } from "../services/dashboard";

function Analytics() {
  const [data, setData] = useState({
    total_users: 0,
    total_food: 0,
    total_ngos: 0,
    available_food: 0,
    accepted_food: 0,
    delivered_food: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        const result = await getDashboard();

        console.log("Analytics API Response:", result);

        setData(result);
      } catch (error) {
        console.error("Analytics Error:", error);
        alert("Unable to load analytics");
      } finally {
        setLoading(false);
      }
    };

    loadAnalytics();
  }, []);

  return (
    <div className="analytics">

      <h1>📊 Donation Analytics</h1>

      <div className="cards">

        <div className="card">
          <h2>🍱 Total Donations</h2>
          <h1>
            {loading ? "..." : data.total_food}
          </h1>
        </div>

        <div className="card">
          <h2>❤️ People Helped</h2>
          <h1>
            {loading ? "..." : data.delivered_food}
          </h1>
        </div>

        <div className="card">
          <h2>🏆 Reward Points</h2>
          <h1>240</h1>
        </div>

        <div className="card">
          <h2>🏢 NGO Partners</h2>
          <h1>
            {loading ? "..." : data.total_ngos}
          </h1>
        </div>

      </div>

      {/* Food Status */}

      <div className="progress-box">

        <h2>📦 Food Status</h2>

        <p>
          ⏳ Available:{" "}
          {loading ? "..." : data.available_food}
        </p>

        <p>
          ✅ Accepted:{" "}
          {loading ? "..." : data.accepted_food}
        </p>

        <p>
          🎉 Delivered:{" "}
          {loading ? "..." : data.delivered_food}
        </p>

      </div>

      {/* Summary */}

      <div className="report">

        <h2>📈 Donation Summary</h2>

        <ul>
          <li>
            👤 Total Users:{" "}
            {loading ? "..." : data.total_users}
          </li>

          <li>
            🍱 Total Donations:{" "}
            {loading ? "..." : data.total_food}
          </li>

          <li>
            ❤️ NGO Partners:{" "}
            {loading ? "..." : data.total_ngos}
          </li>

          <li>
            ⏳ Available Food:{" "}
            {loading ? "..." : data.available_food}
          </li>

          <li>
            ✅ Accepted Food:{" "}
            {loading ? "..." : data.accepted_food}
          </li>

          <li>
            🎉 Delivered Food:{" "}
            {loading ? "..." : data.delivered_food}
          </li>
        </ul>

      </div>

    </div>
  );
}

export default Analytics;