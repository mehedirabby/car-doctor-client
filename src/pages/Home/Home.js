import React from "react";
import About from "./About";
import Banner from "./Banner/Banner";
import Services from "./Banner/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default Home;
