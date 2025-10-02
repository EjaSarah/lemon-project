import React from "react";

import CallToAction from "../sections/CallToAction/CallToAction";
import Specials from "../sections/Specials/Specials";
import CustomersSay from "../sections/CustomersSay/CustomersSay";
import Chicago from "../sections/Chicago/Chicago";

function HomePage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}

export default HomePage;
