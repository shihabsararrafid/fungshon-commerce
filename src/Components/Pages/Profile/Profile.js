import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import cogoToast from "cogo-toast";
const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const navigate = useNavigate();
  const clickSignOut = () => {
    signOut(auth);
    cogoToast.success("Successfully Signed Out", {
      position: "top-center",
    });
    navigate("/");
  };
  return (
    <div className="lg:w-[80vw] font-sans font-medium mx-auto w-full">
      <h1 className="text-center text-3xl py-6">
        WELCOME , {user?.displayName}
      </h1>
      <div className="details h-[50vh] items-center flex justify-center">
        <div className="flex justify-between ">
          <div className="px-10">
            <img
              className="w-[100px] rounded-full"
              src="https://lh3.googleusercontent.com/a-/AFdZucqazuxznQBDBnPvLxWfq1CThzCVlyGQr8Y8nYmu2w=s96-c"
              alt=""
            />
            <button onClick={() => clickSignOut()} className="btn my-4">
              Sign Out
            </button>
          </div>
          <div>
            <p>
              UserName :{" "}
              <input
                className="border-[2px] px-[3px] border-black"
                type="text"
                readOnly
                value={user?.displayName}
              />
            </p>
            <p className="my-3">
              UserEmail :
              <input
                className="border-[2px] px-[3px] border-black"
                type="text"
                readOnly
                value={user?.email}
              />{" "}
            </p>
            <p className="my-3">
              PhoneNumber :
              <input
                className="border-[2px] px-[3px] border-black"
                type="text"
                readOnly
                value={user?.phoneNumber ? user?.phoneNumber : "Not Provided"}
              />{" "}
            </p>

            {user?.emailVerified ? (
              <p className="text-green-600">Your Email is verified</p>
            ) : (
              <p className="text-red-500">
                Your Email is not verified . Please verify it .
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
