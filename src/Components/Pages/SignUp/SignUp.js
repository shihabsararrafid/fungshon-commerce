import React from "react";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form className="mt-[28px]" onSubmit={handleSubmit(onSubmit)}>
      <p className="my-[6px]">
        First Name<span className="text-red-500">*</span>
      </p>
      <input
        className="sm:w-[360px] w-full bg-[#EEEEEE] outline-none h-[36px]"
        {...register("firstName")}
      />
      <p className="my-[6px]">
        Last Name<span className="text-red-500">*</span>
      </p>
      <input
        className="w-[360px] bg-[#EEEEEE] outline-none h-[36px]"
        {...register("lastName")}
      />
      <p className="my-[6px]">
        Email<span className="text-red-500">*</span>
      </p>
      <input
        className="w-[360px] bg-[#EEEEEE] outline-none h-[36px]"
        {...register("email")}
      />
      <p className="mt-[16px] mb-[6px]">
        Password<span className="text-red-500">*</span>
      </p>
      <input
        type="password"
        className="w-[100%] bg-[#EEEEEE] outline-none h-[36px]"
        {...register("password")}
      />
      <p className="mt-[16px] mb-[6px]">
        Confirm Password<span className="text-red-500">*</span>
      </p>
      <input
        type="password"
        className="w-[100%] bg-[#EEEEEE] outline-none h-[36px]"
        {...register("confirmPassword")}
      />
      <p className="mt-[16px] mb-[6px]">
        Address<span className="text-red-500">*</span>
      </p>
      <input
        type="text"
        className="w-[100%] bg-[#EEEEEE] outline-none h-[36px]"
        {...register("address")}
      />
      <p className="mt-[16px] mb-[6px]">Phone:</p>
      <input
        type="number"
        className="w-[100%] bg-[#EEEEEE] outline-none h-[36px]"
        {...register("phone")}
      />

      <input className="w-full btn mt-[30px]" value="Sign Up" type="submit" />
    </form>
  );
};

export default SignUp;
