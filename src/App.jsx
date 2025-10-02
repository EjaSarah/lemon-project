// import Header from "./components/Header/Header";
// import Nav from "./components/Nav/Nav";
// import Main from "./components/Main/Main";
// import Footer from "./components/Footer/Footer";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <div className="header-wrapper">
//         <Header />
//         <Nav />
//       </div>
//       <Main />
//       <Footer />
//     </>
//   );
// }

// export default App;

// import Header from "./components/Header/Header";
// import Nav from "./components/Nav/Nav";
// import Main from "./components/Main/Main";
// import Footer from "./components/Footer/Footer";
// import "./styles/global.css";

// function App() {
//   return (
//     <>
//       <Header />
//       <Nav />
//       <Main />
//       <Footer />
//     </>
//   );
// }

// export default App;

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import BookingPage from "./components/BookingPage/BookingPage";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
