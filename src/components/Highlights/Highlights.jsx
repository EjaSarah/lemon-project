import React from "react";
import "./Highlights.css";

const Highlights = () => {
  const dishes = [
    { name: "Greek Salad", description: "Fresh veggies", price: "$12" },
    {
      name: "Bruschetta",
      description: "Toasted bread with toppings",
      price: "$10",
    },
    { name: "Lemon Dessert", description: "Sweet and tangy", price: "$8" },
  ];

  return (
    <section className="highlights">
      <h2>Weekly Specials</h2>
      <div className="dishes">
        {dishes.map((dish, index) => (
          <div key={index} className="dish-card">
            <div className="dish-image"></div>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <span>{dish.price}</span>
            <button>Order Online</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
