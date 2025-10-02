import "./Main.css";
import heroImage from "../../images/food4.jpg";

function Main() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="reserve-btn">Reserve a Table</button>
        </div>
        <div className="hero-image">
          {/* You can replace with actual hero image */}
          <img src={heroImage} alt="Delicious food" />
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <h2>This Week’s Specials!</h2>
        <div className="menu-grid">
          <div className="menu-card">
            <h3>Greek Salad</h3>
            <p>Fresh vegetables, feta cheese, olives.</p>
          </div>
          <div className="menu-card">
            <h3>Bruschetta</h3>
            <p>Grilled bread with garlic, tomatoes, and basil.</p>
          </div>
          <div className="menu-card">
            <h3>Lemon Dessert</h3>
            <p>Citrus-infused dessert to brighten your day.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
