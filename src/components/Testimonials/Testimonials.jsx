import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    { name: "Tilly", rating: 5, comment: "Amazing food and service!" },
    { name: "John", rating: 4, comment: "Great atmosphere and fresh dishes." },
    {
      name: "Maria",
      rating: 5,
      comment: "A must-visit Mediterranean restaurant!",
    },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <p>{review.comment}</p>
            <span>Rating: {"⭐".repeat(review.rating)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
