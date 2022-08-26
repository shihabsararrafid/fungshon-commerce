import React from "react";
import bannerimg from "./../../../../Images/Banner/banner1.png";
import bannersmall from "./../../../../Images/Banner/bannersm.png";
const Banner = () => {
  return (
    <div className="w-[85%] mx-auto my-20 justify-between flex ">
      <div></div>
      <div className=" relative    ">
        <img className="relative top-0 left-0" src={bannerimg} alt="" />

        <img
          className="absolute -left-[170px] top-[90px]"
          src={bannersmall}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
