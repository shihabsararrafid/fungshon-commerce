import React from "react";
import redelipse from "./../../../Images/elipse/Ellipse 5red.png";
import greenelips from "./../../../Images//elipse/Ellipse 6green.png";
import blueelipse from "./../../../Images//elipse/Ellipse 4blue.png";
const Circle = () => {
  return (
    <div className="flex gap-x-[8px]">
      <img className="w-[20px] h-[20px]" src={blueelipse} alt="" />
      <img className="w-[20px] h-[20px]" src={redelipse} alt="" />
      <img className="w-[20px] h-[20px]" src={greenelips} alt="" />
    </div>
  );
};

export default Circle;
