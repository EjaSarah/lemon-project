// import React from "react";
// import BookingForm from "../BookingForm/BookingForm";

// const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
//   return (
//     <div>
//       <h1>Reserve a Table</h1>
//       <BookingForm
//         availableTimes={availableTimes || []} // fallback
//         dispatch={dispatch}
//         submitForm={submitForm}
//       />
//     </div>
//   );
// };

// export default BookingPage;

// src/components/BookingPage/BookingPage.jsx
import React from "react";
import BookingForm from "../BookingForm/BookingForm";

const BookingPage = ({ availableTimes, onDateChange, submitForm }) => {
  return (
    <div>
      <h1>Reserve a Table</h1>
      <BookingForm
        availableTimes={availableTimes || []} // fallback
        onDateChange={onDateChange} // updated prop
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
