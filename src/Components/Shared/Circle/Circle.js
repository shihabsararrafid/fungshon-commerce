import React, { useEffect, useState } from "react";
import redelipse from "./../../../Images/elipse/Ellipse 5red.png";
import greenelips from "./../../../Images//elipse/Ellipse 6green.png";
import blueelipse from "./../../../Images//elipse/Ellipse 4blue.png";
const Circle = ({ getColor }) => {
  const [color, setColor] = useState(null);
  // if (hoverBlue) {
  //   setColor("blue");
  // } else if (hoverGreen) {
  //   setColor("green");
  // } else if (hoverRed) {
  //   setColor("red");
  // }
  console.log(typeof getColor);
  return (
    <div className="flex gap-x-[8px]">
      <img
       
        title="Blue"
        className=" cursor-pointer w-[20px] h-[20px]"
        src={blueelipse}
        alt=""
      />
      <img
       
        className=" cursor-pointer w-[20px] h-[20px]"
        src={redelipse}
        alt=""
      />
      <img
       
        title="Green"
        className="w-[20px] cursor-pointer  h-[20px]"
        src={greenelips}
        alt=""
      />
    </div>
  );
};

export default Circle;
