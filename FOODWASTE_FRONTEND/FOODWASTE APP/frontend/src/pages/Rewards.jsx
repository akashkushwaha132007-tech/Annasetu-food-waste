import "./Rewards.css";

function Rewards() {
  return (
    <div className="rewards">

      <h1>🏆 Rewards & Achievements</h1>

      <div className="reward-cards">

        <div className="reward-card">
          <h2>⭐ Reward Points</h2>
          <h1>240</h1>
        </div>

        <div className="reward-card">
          <h2>🥇 Gold Badge</h2>
          <h1>Unlocked</h1>
        </div>

        <div className="reward-card">
          <h2>🍱 Donations</h2>
          <h1>18</h1>
        </div>

        <div className="reward-card">
          <h2>❤️ People Helped</h2>
          <h1>350+</h1>
        </div>

      </div>

      <div className="achievement">

        <h2>🎖 Your Achievements</h2>

        <ul>
          <li>🥇 Gold Food Donor</li>
          <li>⭐ 240 Reward Points</li>
          <li>🍱 18 Successful Donations</li>
          <li>❤️ Helped 350+ People</li>
          <li>🏢 Connected with 12 NGOs</li>
        </ul>

      </div>

    </div>
  );
}

export default Rewards;
