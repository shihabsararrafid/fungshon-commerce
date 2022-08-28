import { type } from "@testing-library/user-event/dist/type";
import cogoToast from "cogo-toast";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../Firebase.init";
import SocailIconSignIn from "../../Shared/SocialIcon/SocailIconSignIn";
const Sign = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    const email = data?.email;
    const password = data?.password;
    signInWithEmailAndPassword(email, password);
    if (error) {
      const newmsg = error.message;
      const wrmsg = newmsg.split("/")[1];

      //setWrongmessage(wrmsg.slice(0, -2));
      console.log(wrmsg.slice(0, -2));
      cogoToast.warn(`${wrmsg.slice(0, -2)}`, {
        position: "top-center",
      });
    }
  }
  let flag = 0;

  return (
    <form className="mt-[28px]" onSubmit={handleSubmit(onSubmit)}>
      <p className="my-[6px]">Email:</p>
      <input
        className="sm:w-[360px] w-full bg-[#EEEEEE] outline-none h-[36px]"
        {...register("email", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.email && <p className="text-red-500">This field is required</p>}
      <p className="mt-[16px] mb-[6px]">Password:</p>
      <input
        type="password"
        className="w-[100%] bg-[#EEEEEE] outline-none h-[36px]"
        {...register("password", {
          required: true,
        })}
      />
      {errors?.password?.type === "required" && (
        <p className="text-red-500">This field is required</p>
      )}

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
      <input className="w-full btn mt-[30px]" value="Sign In" type="submit" />
    </form>
  );
};

export default Sign;
