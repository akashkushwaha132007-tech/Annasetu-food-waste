import React, { useEffect, useState } from "react";
import "./NGOList.css";
import { getNGOs } from "../services/ngo";

function NGOList() {
  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNGOs();
  }, []);

  const loadNGOs = async () => {
    try {
      const data = await getNGOs();

      console.log("NGO API Response:", data);

      setNgos(data);
    } catch (error) {
      console.error("NGO Error:", error);
      alert(error.message || "Failed to load NGOs");
    } finally {
      setLoading(false);
    }
  };

  const handleCall = (phone) => {
    window.open(`tel:${phone}`);
  };

  const handleRequestPickup = (ngoName) => {
    alert(`Food pickup request sent to ${ngoName} ✅`);
  };

  return (
    <div className="ngo-page">

      <h1>❤️ NGO Partners</h1>

      <p className="subtitle">
        Choose a nearby NGO to donate your extra food.
      </p>

      {loading && (
        <h2 style={{ textAlign: "center" }}>
          Loading NGOs...
        </h2>
      )}

      {!loading && ngos.length === 0 && (
        <h2 style={{ textAlign: "center" }}>
          No NGO partners found.
        </h2>
      )}

      <div className="ngo-grid">

        {ngos.map((ngo) => (

          <div className="ngo-card" key={ngo.id}>

            <img
              src={
                "https://images.unsplash.com/photo-1559027615-cd4628902d4?w=600"
              }
              alt={ngo.ngo_name}
            />

            <div className="ngo-content">

              <h2>{ngo.ngo_name}</h2>

              <p>
                📍 {ngo.address}
              </p>

              <p>
                📞 {ngo.phone}
              </p>

              <p>
                📧 {ngo.email}
              </p>

              <p>⭐ NGO Partner</p>

              <div className="ngo-buttons">

                <button
                  className="call-btn"
                  onClick={() => handleCall(ngo.phone)}
                >
                  📞 Call
                </button>

                <button
                  className="request-btn"
                  onClick={() =>
                    handleRequestPickup(ngo.ngo_name)
                  }
                >
                  ❤️ Request Pickup
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default NGOList;