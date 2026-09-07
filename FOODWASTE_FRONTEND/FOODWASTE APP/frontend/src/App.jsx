import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DonateFood from "./pages/DonateFood";
import NGOList from "./pages/NGOList";
import Rewards from "./pages/Rewards";
import Profile from "./pages/Profile";
import FoodTracking from "./pages/FoodTracking";
import Analytics from "./pages/Analytics";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/donatefood" element={<DonateFood />} />
        <Route path="/ngolist" element={<NGOList />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/FoodTracking" element={<FoodTracking />} />
        <Route path="/analytics" element={<Analytics />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;












