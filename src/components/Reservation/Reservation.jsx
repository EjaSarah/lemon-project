import React, { useState } from "react";
import "./Reservation.css";

const occasions = ["Birthday", "Engagement", "Anniversary"];

const Reservation = () => {
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (occasion) => {
    setSelectedOccasion(occasion);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <section className="reservation">
      <h2>Reserve a Table</h2>
      <form className="reservation-form">
        <label>
          Name
          <input type="text" placeholder="Your Name" required />
        </label>

        <label>
          Email
          <input type="email" placeholder="Your Email" required />
        </label>

        <label>
          Date
          <input type="date" required />
        </label>

        <label>
          Time
          <input type="time" required />
        </label>

        <label>
          Guests
          <input
            type="number"
            placeholder="Number of Guests"
            min="1"
            required
          />
        </label>

        {/* Dropdown for Occasion */}
        <label className="dropdown-label">
          Occasion
          <div className="dropdown">
            <button
              type="button"
              className={`dropdown-btn ${selectedOccasion ? "selected" : ""}`}
              onClick={toggleDropdown}
            >
              {selectedOccasion || "Select Occasion"}{" "}
              <span className="arrow">&#9662;</span>
            </button>

            {dropdownOpen && (
              <ul className="dropdown-options">
                {occasions.map((occasion, index) => (
                  <li key={index} onClick={() => handleSelect(occasion)}>
                    {occasion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </label>

        <button type="submit" className="submit-btn">
          Book Table
        </button>
      </form>
    </section>
  );
};

export default Reservation;
