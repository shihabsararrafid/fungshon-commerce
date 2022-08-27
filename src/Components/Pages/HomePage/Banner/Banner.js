import React from "react";
import Counter from "../Counter/Counter";
import bannerimg from "./../../../../Images/Banner/banner1.png";
import bannersmall from "./../../../../Images/Banner/bannersm.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="lg:w-[85vw] md:w-[90vw] banner-container  w-full md:mx-auto mx-0 my-20 lg:justify-between flex flex-col lg:flex-row  ">
      <div className="lg:w-[40%] w-full text-justify">
        {" "}
        <h1 className="md:text-6xl text-3xl  my-6">Top Designers Pick</h1>
        <p className="mb-[36px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less
        </p>
        <button className="block btn-hover mx-auto lg:mx-0 mb-20 btn">
          Shop Now
        </button>
        <Counter></Counter>
      </div>
      <div className=" lg:relative my-10 lg:my-0   px-auto ">
        <img
          className="lg:relative w-full  top-0 left-0"
          src={bannerimg}
          alt=""
        />

        <img
          className="absolute -left-[170px] hidden lg:block top-[90px]"
          src={bannersmall}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
