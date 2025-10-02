// import React, { useState } from "react";

// const BookingForm = ({ availableTimes = [], dispatch, submitForm }) => {
//   const [formData, setFormData] = useState({
//     date: "",
//     time: "",
//     guests: 1,
//     occasion: "Birthday",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name === "date") {
//       dispatch({ type: "update_times", date: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     submitForm(formData);
//   };

//   return (
//     <>
//       <h1>Reserve a Table</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="date">Date</label>
//         <input
//           type="date"
//           id="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="time">Time</label>
//         <select
//           id="time"
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select a time</option>
//           {availableTimes.length > 0 ? (
//             availableTimes.map((time, index) => (
//               <option key={index} value={time}>
//                 {time}
//               </option>
//             ))
//           ) : (
//             <option disabled>No times available</option>
//           )}
//         </select>

//         <label htmlFor="guests">Number of guests</label>
//         <input
//           type="number"
//           id="guests"
//           name="guests"
//           min="1"
//           max="10"
//           value={formData.guests}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="occasion">Occasion</label>
//         <select
//           id="occasion"
//           name="occasion"
//           value={formData.occasion}
//           onChange={handleChange}
//         >
//           <option>Birthday</option>
//           <option>Anniversary</option>
//         </select>

//         <button type="submit">Make Your Reservation</button>
//       </form>
//     </>
//   );
// };

// export default BookingForm;

// src/components/BookingForm/BookingForm.jsx
import React, { useState } from "react";

const BookingForm = ({ availableTimes = [], onDateChange, submitForm }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "date" && onDateChange) {
      onDateChange(value); // update availableTimes in Main
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <>
      <h1>Reserve a Table</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.length > 0 ? (
            availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))
          ) : (
            <option disabled>No times available</option>
          )}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <button type="submit">Make Your Reservation</button>
      </form>
    </>
  );
};

export default BookingForm;
