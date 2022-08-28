import React from "react";
import fbicon from "./../../../Images/Icons/Facebook Icon.png";
import google from "./../../../Images/Icons/Google G.png";
import linkedin from "./../../../Images/Icons/Linkedin.png";
const SocailIconSignIn = () => {
  return (
    <div className="icons flex ">
      <img className="block mx-3 cursor-pointer" src={fbicon} alt="" />
      <img className="block mx-3 cursor-pointer" src={google} alt="" />
      <img className="block mx-3 cursor-pointer" src={linkedin} alt="" />
    </div>
  );
};

export default SocailIconSignIn;
