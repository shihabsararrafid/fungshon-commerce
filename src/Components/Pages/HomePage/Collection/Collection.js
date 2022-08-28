import React from "react";
import { useNavigate } from "react-router-dom";
import sale from "./../../../../Images/collection/sale (1).png";
import men from "./../../../../Images/collection/men.png";
import women from "./../../../../Images/collection/women.png";
import "./Collection.css";
const Collection = () => {
  const navigate = useNavigate();
  const menClick = () => {
    navigate(`/collectionDetails/men's clothing`);
  };
  const womenClick = () => {
    navigate(`/collectionDetails/women's clothing`);
  };
  return (
    <div className="my-20 lg:w-[85%] md:w-[90%] grid md:grid-cols-2 grid-cols-1 gap-6 justify-center lg:grid-cols-3 mx-auto">
      <div className="img-container mx-auto w-[80%] relative">
        <img className="w-full" src={sale} alt="" />
        <div className="box ">
          <h1 className="absolute bottom-[15%] left-[9%] text-4xl">
            Up to <span className="bg-[#F09522] py-1 px-3">50%</span>
            Off Sale{" "}
          </h1>
          <p className="check-btn">
            Check now
            <span className="line"></span>
          </p>
        </div>
      </div>
      <div className="img-container  mx-auto w-[80%] relative">
        <img className="w-full" src={women} alt="" />
        <div className="box">
          <h1 className="absolute bottom-[15%] left-[9%] text-4xl">
            <span className="bg-[#F09522] block py-1 px-3">Women's</span>
            Collection
          </h1>
          <p onClick={womenClick} className="check-btn">
            Check now
            <span className="line"></span>
          </p>
        </div>
      </div>
      <div className="img-container  mx-auto w-[80%] relative">
        <img className="w-full" src={men} alt="" />
        <div className="box">
          <h1 className="absolute bottom-[15%] left-[9%] text-4xl">
            <span className="bg-[#F09522] block py-1 px-3">Men's</span>
            Collection
          </h1>
          <p onClick={menClick} className="check-btn">
            Check now
            <span className="line"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
