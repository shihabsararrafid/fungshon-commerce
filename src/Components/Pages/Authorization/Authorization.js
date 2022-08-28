import React, { useState } from "react";
import SocailIconSignIn from "../../Shared/SocialIcon/SocailIconSignIn";
import Sign from "../SignIn/Sign";
import SignUp from "../SignUp/SignUp";

const Authorization = () => {
  const [isCreate, setIsCreate] = useState(false);
  const checkRadio = (name) => {
    console.log(name.target);
    // if (name.target.value === "create") {
    //   setIsCreate(true);
    // } else {
    //   setIsCreate(false);
    setIsCreate(!isCreate);
    // }
  };
  console.log(isCreate);
  return (
    <div
      className={`font-sans ${
        isCreate ? "lg:h-[120vh]" : "lg:h-[70vh]"
      }  h-auto my-40 lg:my-44  items-center flex flex-col justify-center font-medium`}
    >
      <div className="">
        <h1 className="text-center text-3xl">
          WELCOME <br /> PLEASE {isCreate ? "SIGN UP" : "SIGN IN!"}
        </h1>
        <div className="radio-btn my-[28px] flex justify-evenly">
          <label htmlFor="signIn">
            <input
              onClick={() => setIsCreate(false)}
              className=" accent-[#F09522] "
              type="radio"
              value="signIn"
              name="method"
              id="signIn"
            />
            Sign In
          </label>
          <label htmlFor="create-account">
            <input
              onClick={() => setIsCreate(true)}
              className=" accent-[#F09522] "
              type="radio"
              name="method"
              value="create"
              id="createAccount"
            />
            Create Account
          </label>
        </div>
        {isCreate ? <SignUp></SignUp> : <Sign></Sign>}
        <div className="hr-line my-[20px] flex justify-between items-center">
          <hr className="bg-[black] w-[163px] h-[2px] " />
          <p>or</p>

          <hr className="bg-[black]  w-[163px]  h-[2px]" />
        </div>
        <p className="text-center">Sign in with</p>
        <div className="flex my-6 justify-center">
          <SocailIconSignIn></SocailIconSignIn>
        </div>
        <div>
          <p>Privacy Policy and Cookies | Terms of Sale and Us</p>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
