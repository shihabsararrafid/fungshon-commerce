import React from "react";
import subimg from "./../../../../Images/Subscription/Rectangle 42.png";
const Sunscription = () => {
  return (
    <div className="lg:h-[284px] h-auto mb-10  lg:w-[85%] w-full mx-auto grid-cols-1 lg:grid-cols-3 grid">
      <div className="lg:col-span-2 flex justify-center items-center bg-[#FBE4C7]">
        <div className="py-10">
          <p className="text-3xl">SIGN UP FOR NEWS & GET 20% OFF</p>
          <div className="flex flex-col lg:flex-row">
            <input
              className="h-[46px] px-5 w-full lg:w-[250px]"
              type="email"
              placeholder="Your Email Address"
              name=""
              id=""
            />
            <button className="btn  h-[46px] ">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 h-full">
        <img className="h-full w-full" src={subimg} alt="" />
      </div>
    </div>
  );
};

export default Sunscription;
