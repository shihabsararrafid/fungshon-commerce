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
    <div>
      {fullStar.map((p) => (
        <TiStarFullOutline></TiStarFullOutline>
      ))}
      {
        halfStar.m
      }
    </div>
  );
};

export default Rating;
