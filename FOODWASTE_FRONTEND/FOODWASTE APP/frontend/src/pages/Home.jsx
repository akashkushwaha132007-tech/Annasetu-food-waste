import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">🍽 AnnaSetu</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#donate">Donate</a>
          <a href="#contact">Contact</a>

          <Link to="/login" className="btn-login">
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-left">
          <h1>Donate Food, Save Lives ❤️</h1>

          <p>
            AnnaSetu connects food donors with NGOs and needy people to reduce
            food wastage and fight hunger.
          </p>

          {/* Login page par jayega */}
          <Link to="/login" className="hero-btn">
            Donate Now
          </Link>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800"
            alt="Food Donation"
          />
        </div>
      </section>

      {/* Statistics */}
      <section className="stats">
        <div className="card">
          <h2>1200+</h2>
          <p>Meals Donated</p>
        </div>

        <div className="card">
          <h2>80+</h2>
          <p>NGOs Connected</p>
        </div>

        <div className="card">
          <h2>350+</h2>
          <p>Active Donors</p>
        </div>

        <div className="card">
          <h2>500+</h2>
          <p>Volunteers</p>
        </div>
      </section>

      {/* Food Cards */}
      <section className="foods" id="donate">
        <h2>Recent Food Donations</h2>

        <div className="food-container">
          <div className="food-card">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700"
              alt="Veg Thali"
            />
            <h3>Veg Thali</h3>
            <p>Quantity : 50 Plates</p>
            <button>Request Pickup</button>
          </div>

          <div className="food-card">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700"
              alt="Fresh Salad"
            />
            <h3>Fresh Salad</h3>
            <p>Quantity : 30 Boxes</p>
            <button>Request Pickup</button>
          </div>

          <div className="food-card">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700"
              alt="Mixed Vegetables"
            />
            <h3>Mixed Vegetables</h3>
            <p>Quantity : 20 Kg</p>
            <button>Request Pickup</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <h2>Why AnnaSetu?</h2>

        <p>
          Every day thousands of kilograms of food are wasted while millions of
          people sleep hungry. AnnaSetu bridges this gap by connecting food
          donors with NGOs and volunteers.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <h2>AnnaSetu ❤️</h2>

        <p>Donate Food • Reduce Waste • Feed Humanity</p>

        <p>© 2026 AnnaSetu. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;