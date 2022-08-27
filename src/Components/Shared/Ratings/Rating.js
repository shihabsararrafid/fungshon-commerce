import React from "react";
import ShowRatings from "../../Hooks/ShowRatings";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
const Rating = ({ rating }) => {
  const [fullStar, halfStar, nullstar] = ShowRatings(rating);
  return (
    <div className="text-[#F09522] flex gap-[1px]">
      {fullStar.map((p) => (
        <TiStarFullOutline></TiStarFullOutline>
      ))}
      {halfStar.map((p) => (
        <TiStarHalfOutline></TiStarHalfOutline>
      ))}
      {nullstar.map((p) => (
        <TiStarOutline></TiStarOutline>
      ))}
    </div>
  );
};

export default Rating;
