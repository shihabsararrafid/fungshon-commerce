import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
const CartWishlistNavigator = ({ id, isClicked }) => {
  const navigate = useNavigate();
  const transfer = (id) => {
    navigate(`/productDetail/${id}`);
  };
  return (
    <div>
      <div className="cartWishlistNavigator rounded-lg  absolute w-[100%] h-[100%] top-0 left-0 hover:opacity-90 duration-500 opacity-0 bg-[#8E8C86] ">
        <div className="absolute h-full w-full left-0 lg:left-[30%]   top-[50%]">
          <button onClick={() => isClicked(id)} className="btn btn-hover">
            Add To Cart
          </button>
        </div>
        <p
          title="Add to Favourites"
          className="cursor-pointer hover:bg-white hover:text-[#F09522] hover:border-[1px] duration-200  absolute top-[20px] right-[18px] bg-[#F09522] h-[32px] w-[32px] text-white rounded-full p-2"
        >
          <GiSelfLove></GiSelfLove>
        </p>{" "}
        <p
          onClick={() => transfer(id)}
          title="See More Details"
          className="top-[60px] hover:bg-white hover:text-[#F09522] hover:border-[1px] duration-200  right-[18px] cursor-pointer absolute  bg-[#F09522] h-[32px] w-[32px] text-white rounded-full p-2"
        >
          <AiOutlineEye></AiOutlineEye>
        </p>
      </div>
    </div>
  );
};

export default CartWishlistNavigator;
