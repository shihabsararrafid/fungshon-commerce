import React from "react";
import fbicon from "./../../../Images/Icons/Facebook Icon.png";
import google from "./../../../Images/Icons/Google G.png";
import linkedin from "./../../../Images/Icons/Linkedin.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
const SocailIconSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(user);
  console.log(error);
  return (
    <div className="icons flex ">
      <img className="block mx-3 cursor-pointer" src={fbicon} alt="" />

      <img
        onClick={() => signInWithGoogle()}
        className="block mx-3 cursor-pointer"
        src={google}
        alt=""
      />

      <img className="block mx-3 cursor-pointer" src={linkedin} alt="" />
    </div>
  );
};

export default SocailIconSignIn;
