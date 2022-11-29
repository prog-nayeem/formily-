import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import WhatWeProvide from "../components/WhatWeProvide";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <HowItWorks />
      <WhatWeProvide />
      <Footer />
    </div>
  );
};

export default Home;
