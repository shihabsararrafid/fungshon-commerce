import React from "react";
import Banner from "../Banner/Banner";
import Collection from "../Collection/Collection";
import Specialbenefit from "../SpecialBenefit/Specialbenefit";

const Home = () => {
  return (
    <div className="w-full">
      <Banner></Banner>
      <Specialbenefit></Specialbenefit>
      <Collection></Collection>
    </div>
  );
};

export default Home;
