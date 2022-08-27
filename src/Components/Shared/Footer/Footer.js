import React from "react";

const Footer = () => {
  return (
    <div className="lg:h-[430px] h-auto lg:p-20 md:p-15 sm:p-10 p-7 w-full bg-black text-white">
      <div className="grid md:grid-cols-3 gap-y-16 justify-center items-center sm:grid-cols-2 grid-cols-1 lg:grid-cols-4">
        <div className=" text-center mx-auto">
          <h1 className="text-xl">Funshion</h1>
          <p className="text-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className=" text-center mx-auto">
          <h1 className="text-lg">Need Help?</h1>
          <ul className="text-sm">
            <li>Support</li>
            <li>Need Help?</li>
            <li>Term of Use</li>
            <li>Privecy Policy</li>
          </ul>
        </div>
        <div className=" text-center mx-auto">
          <h1 className="text-lg">Need Help?</h1>
          <ul className="text-sm">
            <li>Support</li>
            <li>Need Help?</li>
            <li>Term of Use</li>
            <li>Privecy Policy</li>
          </ul>
        </div>
        <div className=" text-center mx-auto">
          <h1 className="text-lg">Need Help?</h1>
          <ul className="text-sm">
            <li>Support</li>
            <li>Need Help?</li>
            <li>Term of Use</li>
            <li>Privecy Policy</li>
          </ul>
        </div>
      </div>
      <div className="lg:mt-[120px]">
        <hr />
        <div className="mt-[30px] text-sm font-serif">
          Copyright @ Funshion. All Right Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
