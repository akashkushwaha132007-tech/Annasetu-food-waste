import React, { useState } from "react";
import "./DonateFood.css";
import { addFood } from "../services/food";

function DonateFood() {
  const [foodName, setFoodName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiry, setExpiry] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!foodName || !quantity || !expiry || !address) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      // Data required by FastAPI FoodCreate schema
      const foodData = {
        food_name: foodName,
        quantity: quantity,
        location: address,
        expiry_time: expiry,
        donor_name: localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user")).username
          : "Anonymous",
      };

      const response = await addFood(foodData);

      console.log("Food API Response:", response);

      alert("🎉 Food Donation Submitted Successfully!");

      // Clear form
      setFoodName("");
      setCategory("");
      setQuantity("");
      setExpiry("");
      setAddress("");
      setPhone("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error("Food donation error:", error);
      alert(error.message || "Failed to submit food donation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="donate-container">
      <div className="donate-card">
        <h1>🍱 Donate Food</h1>
        <p>Share your extra food with people in need.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Food Name</label>
            <input
              type="text"
              placeholder="Enter food name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Food Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option>Cooked Food</option>
              <option>Raw Food</option>
              <option>Packed Food</option>
              <option>Fruits</option>
              <option>Vegetables</option>
              <option>Beverages</option>
            </select>
          </div>

          <div className="input-group">
            <label>Quantity</label>
            <input
              type="text"
              placeholder="Eg. 20 Plates"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Expiry Date & Time</label>
            <input
              type="datetime-local"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Pickup Address</label>
            <textarea
              placeholder="Enter complete pickup address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Contact Number</label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea
              placeholder="Write a short description about the food..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
            />
          </div>

          <div className="input-group">
            <label>Upload Food Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          {image && (
            <div className="preview">
              <p>Selected Image:</p>
              <img
                src={URL.createObjectURL(image)}
                alt="Food Preview"
                className="preview-image"
              />
            </div>
          )}

          <button
            type="submit"
            className="donate-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "🚚 Donate Food"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default DonateFood;