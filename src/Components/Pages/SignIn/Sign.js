import React from "react";
import { useForm } from "react-hook-form";
const Sign = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="font-sans h-[100vh] items-center flex flex-col justify-center font-medium">
      <div className="">
        <h1 className="text-center text-3xl">
          WELCOME <br /> PLEASE SIGN IN!
        </h1>

        <form className="mt-[28px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="radio-btn mb-[28px] flex justify-evenly">
            <label htmlFor="signIn">
              <input
                className=" accent-[#F09522] "
                {...register("method")}
                type="radio"
                value="signIn"
                name="method"
                id="signIn"
              />
              Sign In
            </label>
            <label htmlFor="create-account">
              <input
                className=" accent-[#F09522] "
                {...register("method")}
                type="radio"
                name="method"
                value="create"
                id="createAccount"
              />
              Create Account
            </label>
          </div>
          <p className="my-[6px]">Email:</p>
          <input
            className="w-[360px] bg-[#EEEEEE] outline-none h-[36px]"
            {...register("email")}
          />
          <p className="mt-[16px] mb-[6px]">Password:</p>
          <input
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
        <div className="hr-line my-[20px] flex justify-between items-center">
          <hr className="bg-[black] w-[163px] h-[2px] " />
          <p>or</p>

          <hr className="bg-[black]  w-[163px]  h-[2px]" />
        </div>
      </div>
    </div>
  );
};

export default Sign;
