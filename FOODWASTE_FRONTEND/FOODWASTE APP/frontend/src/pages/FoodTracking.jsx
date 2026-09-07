import React, { useEffect, useState } from "react";
import "./FoodTracking.css";

import {
  getFood,
  acceptFood,
  deliverFood,
} from "../services/food";

function FoodTracking() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get food from backend
  const fetchFood = async () => {
    try {
      const data = await getFood();

      console.log("Food API Response:", data);

      setDonations(data);
    } catch (error) {
      console.error("Food fetch error:", error);
      alert(error.message || "Failed to load food");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  // Accept food
  const handleAccept = async (foodId) => {
    try {
      await acceptFood(foodId);

      alert("Food Accepted Successfully ✅");

      // Refresh data
      fetchFood();
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to accept food");
    }
  };

  // Deliver food
  const handleDeliver = async (foodId) => {
    try {
      await deliverFood(foodId);

      alert("Food Delivered Successfully 🎉");

      // Refresh data
      fetchFood();
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to deliver food");
    }
  };

  // Loading
  if (loading) {
    return (
      <div className="tracking-page">
        <h1>📦 Food Tracking</h1>
        <p className="tracking-subtitle">
          Loading food donations...
        </p>
      </div>
    );
  }

  return (
    <div className="tracking-page">

      <h1>📦 Food Tracking</h1>

      <p className="tracking-subtitle">
        Track all your donated food in real time.
      </p>

      {/* Status Boxes */}

      <div className="status-boxes">

        <div className="box pending">
          <h2>⏳ Available</h2>
          <h3>
            {donations.filter(
              (item) => item.status === "Available"
            ).length}
          </h3>
        </div>

        <div className="box accepted">
          <h2>✅ Accepted</h2>
          <h3>
            {donations.filter(
              (item) => item.status === "Accepted"
            ).length}
          </h3>
        </div>

        <div className="box pickup">
          <h2>🚚 Pickup</h2>
          <h3>0</h3>
        </div>

        <div className="box delivered">
          <h2>🎉 Delivered</h2>
          <h3>
            {donations.filter(
              (item) => item.status === "Delivered"
            ).length}
          </h3>
        </div>

      </div>


      {/* Donations */}

      <div className="timeline">

        {donations.length === 0 ? (

          <div className="timeline-card">
            <h2>No Food Donations</h2>

            <p>
              🍱 No food has been donated yet.
            </p>
          </div>

        ) : (

          donations.map((item) => (

            <div
              className="timeline-card"
              key={item.id}
            >

              <h2>
                🍱 {item.food_name}
              </h2>

              <p>
                📦 Quantity: {item.quantity}
              </p>

              <p>
                📍 Location: {item.location}
              </p>

              <p>
                👤 Donor: {item.donor_name}
              </p>

              <p>
                ⏰ Expiry: {item.expiry_time}
              </p>

              <span
                className={`status ${item.status
                  .toLowerCase()
                  .replace(" ", "")}`}
              >
                {item.status}
              </span>


              {/* Buttons */}

              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  gap: "10px",
                }}
              >

                {item.status === "Available" && (

                  <button
                    onClick={() =>
                      handleAccept(item.id)
                    }
                    style={{
                      padding: "10px 15px",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      background: "#16a34a",
                      color: "white",
                    }}
                  >
                    ✅ Accept Food
                  </button>

                )}


                {item.status === "Accepted" && (

                  <button
                    onClick={() =>
                      handleDeliver(item.id)
                    }
                    style={{
                      padding: "10px 15px",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      background: "#2563eb",
                      color: "white",
                    }}
                  >
                    🚚 Mark Delivered
                  </button>

                )}

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default FoodTracking;