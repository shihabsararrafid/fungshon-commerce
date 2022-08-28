import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SocailIconSignIn from "../../Shared/SocialIcon/SocailIconSignIn";
const Sign = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  let flag = 0;

  return (
    <form className="mt-[28px]" onSubmit={handleSubmit(onSubmit)}>
      <p className="my-[6px]">Email:</p>
      <input
        className="sm:w-[360px] w-full bg-[#EEEEEE] outline-none h-[36px]"
        {...register("email")}
      />
      <p className="mt-[16px] mb-[6px]">Password:</p>
      <input
        type="password"
        className="w-[100%] bg-[#EEEEEE] outline-none h-[36px]"
        {...register("password")}
      />
      <p className="flex my-[14px] justify-between">
        <span>Forgot Password ?</span>
        <span>
          {" "}
          <input
            className="accent-black"
            type="checkbox"
            name="remember me"
            id=""
          />
          Remember Me
        </span>
      </p>
      <input className="w-full btn mt-[30px]" type="submit" />
    </form>
  );
};

export default Sign;
