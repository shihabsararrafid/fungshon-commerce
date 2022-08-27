import React from "react";
import fbicon from "./../../../Images/Icons/Facebook Icon.png";
import instaicon from "./../../../Images/Icons/Instagram.png";
import pintericon from "./../../../Images/Icons/Pinterest.png";

const SocialIcon = () => {
  return (
    <div className="icons flex ">
      <img className="block mx-3 cursor-pointer" src={fbicon} alt="" />
      <img className="block mx-3 cursor-pointer" src={instaicon} alt="" />
      <img className="block mx-3 cursor-pointer" src={pintericon} alt="" />
    </div>
  );
};

export default SocialIcon;
