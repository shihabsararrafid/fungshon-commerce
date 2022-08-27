import React from "react";
import delivery from "./../../../../Images/benefit/tracking 1 (1).png";
const Specialbenefit = () => {
  return (
    <div className="lg:w-[85%]  justify-between grid md:grid-cols-2 w-full  grid-cols-1  gap-5 lg:grid-cols-4 mx-auto">
      <div className="flex mx-auto lg:mx-0 items-center gap-3 ">
        <img src={delivery} alt="" />
        <div>
          <h1 className="text-[14px]">Fast Delivery</h1>
          <p className="text-[12px]  ">Lorem Ipsum is simply dummy text </p>
        </div>
      </div>
      <div className="flex  mx-auto lg:mx-0 items-center gap-3 ">
        <img src={delivery} alt="" />
        <div>
          <h1 className="text-[14px]">Fast Delivery</h1>
          <p className="text-[12px]  ">Lorem Ipsum is simply dummy text </p>
        </div>
      </div>
      <div className="flex mx-auto lg:mx-0 items-center gap-3 ">
        <img src={delivery} alt="" />
        <div>
          <h1 className="text-[14px]">Fast Delivery</h1>
          <p className="text-[12px]  ">Lorem Ipsum is simply dummy text </p>
        </div>
      </div>
      <div className="flex mx-auto lg:mx-0 items-center gap-3 ">
        <img src={delivery} alt="" />
        <div>
          <h1 className="text-[14px]">Fast Delivery</h1>
          <p className="text-[12px]  ">Lorem Ipsum is simply dummy text </p>
        </div>
      </div>
    </div>
  );
};

export default Specialbenefit;
