import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import fbicon from "./../../../Images/Icons/Facebook Icon.png";
import instaicon from "./../../../Images/Icons/Instagram.png";
import pintericon from "./../../../Images/Icons/Pinterest.png";
import "./Advertise.css";
const Advertise = () => {
  return (
    <div className="bg-black flex  items-center h-[75px] w-full text-white">
      <div className="flex small-container justify-between w-[95%] lg:w-[85%] mx-auto">
        <p>Free shipping on all UK orders!</p>
        <SocialIcon></SocialIcon>
      </div>
    </div>
  );
};

export default Advertise;
