import React from "react";
import sale from "./../../../../Images/collection/sale (1).png";
import men from "./../../../../Images/collection/men.png";
import women from "./../../../../Images/collection/women.png";
const Collection = () => {
  return (
    <div className="my-20 lg:w-[85%] grid grid-cols-3 mx-auto">
      <div className="img-container w-[80%] relative">
        <img className="w-full" src={sale} alt="" />
        <div className="absolute top-[5%] left-[5%]  w-[90%] h-[90%] border-[5px] bg-transparent border-white"></div>
      </div>
      <div className="img-container w-[80%] relative">
        <img className="w-full" src={men} alt="" />
        <div className="absolute top-[5%] left-[5%]  w-[90%] h-[90%] border-[5px] bg-transparent border-white"></div>
      </div>
      <div className="img-container w-[80%] relative">
        <img className="w-full" src={women} alt="" />
        <div className="absolute top-[5%] left-[5%]  w-[90%] h-[90%] border-[5px] bg-transparent border-white"></div>
      </div>
    </div>
  );
};

export default Collection;
