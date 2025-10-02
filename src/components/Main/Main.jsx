// import React, { useReducer } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import BookingPage from "../BookingPage/BookingPage";
// import ConfirmedBooking from "../ConfirmedBooking/ConfirmedBooking";
// import { fetchAPI } from "../../api";
// // adjust the path to your api.js

// // these two come from api.js (global script)
// export const initializeTimes = () => {
//   const today = new Date();
//   return fetchAPI(today);
// };

// export const updateTimes = (state, action) => {
//   if (action.type === "update_times") {
//     return fetchAPI(new Date(action.date));
//   }
//   return state;
// };

// const Main = () => {
//   const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
//   const navigate = useNavigate();

//   const submitForm = (formData) => {
//     if (submitAPI(formData)) {
//       navigate("/confirmed");
//     }
//   };

//   return (
//     <main>
//       <Routes>
//         <Route
//           path="/booking"
//           element={
//             <BookingPage
//               availableTimes={availableTimes}
//               dispatch={dispatch}
//               submitForm={submitForm}
//             />
//           }
//         />
//         <Route path="/confirmed" element={<ConfirmedBooking />} />
//       </Routes>
//     </main>
//   );
// };

// export default Main;
// src/components/Main/Main.jsx
import React, { useEffect, useReducer, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "../BookingPage/BookingPage";
import ConfirmedBooking from "../ConfirmedBooking/ConfirmedBooking";
import { fetchAPI } from "../../api";

// initializeTimes returns Promise
// export const initializeTimes = () => {
//   const today = new Date();
//   return fetchAPI(today);
// };

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// updateTimes returns Promise
// export const updateTimes = (date) => {
//   return fetchAPI(new Date(date));
// };

export const updateTimes = (state, action) => {
  if (action.type === "update_times") {
    return fetchAPI(new Date(action.date)); // keep this if fetchAPI is synchronous
  }
  return state;
};

const Main = () => {
  // const [availableTimes, setAvailableTimes] = useState([]);
  // const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  // Load initial times
  // useEffect(() => {
  //   initializeTimes().then((times) => setAvailableTimes(times));
  // }, []);

  // Fetch times whenever date changes
  useEffect(() => {
    if (availableTimes.date) {
      fetchAPI(new Date(availableTimes.date)).then((times) =>
        dispatch({ type: "set_times", times })
      );
    }
  }, [availableTimes.date]);

  const handleDateChange = (date) => {
    updateTimes(date).then((times) => setAvailableTimes(times));
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              onDateChange={handleDateChange}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
