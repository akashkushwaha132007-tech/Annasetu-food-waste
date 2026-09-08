import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const data = await loginUser(email, password);

      console.log("Login response:", data);

      // Save logged-in user
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f4f4f4",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#16a34a", marginBottom: "20px" }}>
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          style={input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={btn} onClick={handleLogin}>
          Login
        </button>

        <p style={{ marginTop: "15px" }}>
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#16a34a",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

const input = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "15px",
};

export default Login;