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

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
