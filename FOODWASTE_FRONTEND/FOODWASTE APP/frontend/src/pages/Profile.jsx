import { useEffect, useState } from "react";
import "./Profile.css";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { getUserById } from "../services/user";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const savedUser = localStorage.getItem("user");

        if (!savedUser) {
          setLoading(false);
          return;
        }

        const parsedUser = JSON.parse(savedUser);

        if (!parsedUser.id) {
          setLoading(false);
          return;
        }

        const data = await getUserById(parsedUser.id);

        console.log("Profile:", data);

        setUser(data);
      } catch (error) {
        console.error("Profile Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <h2>Loading Profile...</h2>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <FaUserCircle className="profile-avatar" />
          <h2>Profile Not Available</h2>
          <p>Please login first.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">

        <FaUserCircle className="profile-avatar" />

        <h1>{user.username}</h1>

        <p className="role">Food Donor</p>

        <div className="info">

          <p>
            <FaEnvelope /> {user.email}
          </p>

          <p>
            <FaPhone /> {user.phone || "Not available"}
          </p>

          <p>
            <FaMapMarkerAlt /> {user.address || "Not available"}
          </p>

        </div>

        <div className="stats">

          <div>
            <h2>0</h2>
            <span>Donations</span>
          </div>

          <div>
            <h2>0</h2>
            <span>Points</span>
          </div>

          <div>
            <h2>0</h2>
            <span>NGOs</span>
          </div>

        </div>

        <button>Edit Profile</button>

      </div>
    </div>
  );
}

export default Profile;