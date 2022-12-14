import { async } from "@firebase/util";
import cogoToast from "cogo-toast";
import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../Firebase.init";
const SignUp = () => {
  const [wrongMessage, setWrongmessage] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
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
    console.log(email, password);
    createUserWithEmailAndPassword(email, password);
    const phoneNumber = data?.phone;
    const displayName = data?.firstName + " " + data?.lastName;
    console.log(phoneNumber, displayName);
    const update = async () => {
      await updateProfile({ phoneNumber, displayName });
    };
    if (user) {
      update();
    }

    if (error) {
      const newmsg = error.message;
      const wrmsg = newmsg.split("/")[1];

      setWrongmessage(wrmsg.slice(0, -2));
      console.log(wrmsg.slice(0, -2));
      cogoToast.warn(`${wrmsg.slice(0, -2)}`, {
        position: "top-center",
      });
    }
    //console.log(user);
  }
  return (
    <form className="mt-[28px]" onSubmit={handleSubmit(onSubmit)}>
      <p className="my-[6px]">
        First Name<span className="text-red-500">*</span>
      </p>
      <input
        className="sm:w-[360px] w-full bg-[#EEEEEE] outline-none h-[36px]"
        {...register("firstName", { required: true })}
      />
      {errors?.firstName && (
        <p className="text-red-500">This field is required</p>
      )}
      <p className="my-[6px]">
        Last Name<span className="text-red-500">*</span>
      </p>
      <input
        className="w-[360px] bg-[#EEEEEE] outline-none h-[36px]"
        {...register("lastName", { required: true })}
      />

      {errors?.lastName && (
        <p className="text-red-500">This field is required</p>
      )}
      <p className="my-[6px]">
        Email<span className="text-red-500">*</span>
      </p>
      <input
        type="email"
        className="w-[360px] bg-[#EEEEEE] outline-none h-[36px]"
        {...register("email", { required: true })}
      />

      {errors?.email && <p className="text-red-500">This field is required</p>}
      <p className="mt-[16px] mb-[6px]">
        Password<span className="text-red-500">*</span>
      </p>
      <input
        type="password"
        className="w-[100%] bg-[#EEEEEE] outline-none h-[36px]"
        {...register("password", {
          required: true,
          pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
          minLength: 8,
          maxLength: 30,
        })}
      />
      {errors?.password?.type === "required" && (
        <p className="text-red-500">This field is required</p>
      )}
      {errors?.password?.type === "pattern" && (
        <p className="text-red-500">
          Please use at least one of each [a-z],[A-Z],[0-9]{" "}
        </p>
      )}
      {errors?.password?.type === "maxLength" && (
        <p className="text-red-500">Password Cannot be greater than 30</p>
      )}
      {errors?.password?.type === "minLength" && (
        <p className="text-red-500">Password Cannot be less than 8</p>
      )}
      <p className="mt-[16px] mb-[6px]">
        Confirm Password<span className="text-red-500">*</span>
      </p>
      <input
        type="password"
        className="w-[100%] bg-[#EEEEEE] outline-none h-[36px]"
        {...register("confirmPassword", { required: true })}
      />
      {errors?.confirmPassword && (
        <p className="text-red-500">This field is required</p>
      )}
      <p className="mt-[16px] mb-[6px]">
        Address<span className="text-red-500">*</span>
      </p>
      <input
        type="text"
        className="w-[100%] bg-[#EEEEEE] outline-none h-[36px]"
        {...register("address", { required: true })}
      />
      {errors?.address && (
        <p className="text-red-500">This field is required</p>
      )}
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
