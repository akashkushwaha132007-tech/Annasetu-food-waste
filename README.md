# 🍽️ AnnaSetu – Food Waste Reduction Platform

AnnaSetu is a full-stack web application designed to reduce food wastage by connecting food donors with NGOs and helping distribute excess food to people in need.

The platform provides an easy way for users to donate surplus food, track donations, connect with NGOs, and view donation-related analytics.

---

## 🌐 Live Demo

👉 https://annasetu-food-waste-q7a9.onrender.com

## 💻 GitHub Repository

👉 https://github.com/akashkushwaha132007-tech/Annasetu-food-waste

---

## 🎯 Project Objective

Every day, a large amount of edible food is wasted while many people still struggle to get sufficient food.

AnnaSetu aims to bridge this gap by providing a digital platform where:

**Food Donor → AnnaSetu → NGO → People in Need**

The main objective is:

> **Donate Food • Reduce Waste • Feed Humanity ❤️**

---

## ✨ Features

### 🍱 Food Donation
Users can donate surplus food by providing:

- Food name
- Food category
- Quantity
- Expiry date & time
- Pickup address
- Contact number
- Description
- Food image

### ❤️ NGO Partners

Users can view NGO partners and their information such as:

- NGO name
- City
- Contact number
- Rating
- Pickup request option

### 📦 Food Tracking

Users can track donated food through different statuses:

- ⏳ Pending
- ✅ Accepted
- 🚚 Picked Up
- 🎉 Delivered

### 📊 Analytics

The analytics section provides information about:

- Total donations
- People helped
- Reward points
- NGO partners
- Donation progress
- Weekly donation reports

### 🏆 Rewards

Users can earn reward points for their food donations.

### 👤 User Profile

The profile section displays:

- User information
- Donation statistics
- Reward points
- NGO connections

### 📊 Dashboard

The dashboard provides a centralized view of:

- Total donations
- Pending pickups
- Completed donations
- Reward points
- Recent donations
- Quick actions

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router
- React Icons
- HTML
- CSS
- JavaScript

### Backend

- Python
- FastAPI
- SQLAlchemy
- Pydantic
- REST API

### Database

- SQLite

### Tools & Deployment

- Git
- GitHub
- Render
- VS Code

---

## 🏗️ Project Architecture

```text
                 ┌─────────────────────┐
                 │      AnnaSetu       │
                 │   Food Donation     │
                 │      Platform       │
                 └──────────┬──────────┘
                            │
                 ┌──────────▼──────────┐
                 │      Frontend       │
                 │    React + Vite     │
                 └──────────┬──────────┘
                            │
                         REST API
                            │
                 ┌──────────▼──────────┐
                 │       Backend       │
                 │       FastAPI       │
                 └──────────┬──────────┘
                            │
                 ┌──────────▼──────────┐
                 │      Database       │
                 │       SQLite        │
                 └─────────────────────┘
