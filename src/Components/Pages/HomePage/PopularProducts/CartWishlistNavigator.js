import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { Routes, Route, Link } from "react-router-dom";
const CartWishlistNavigator = ({ id, isClicked }) => {
  return (
    <div>
      <div className="cartWishlistNavigator rounded-lg  absolute w-[100%] h-[100%] top-0 left-0 hover:opacity-90 duration-500 opacity-0 bg-[#8E8C86] ">
        <div className="absolute h-full w-full left-[30%]   top-[50%]">
          <button onClick={() => isClicked(id)} className="btn btn-hover">
            Add To Cart
          </button>
        </div>
        <p
          title="Add to Favourites"
          className="cursor-pointer hover:bg-white hover:text-[#F09522] hover:border-[1px] duration-200  absolute top-[20px] right-[18px] bg-[#F09522] h-[32px] w-[32px] text-white rounded-full p-2"
        >
          <GiSelfLove></GiSelfLove>
        </p>
        <Link to={`productDetail/${id}`}>
          {" "}
          <p
            title="See More Details"
            className="top-[60px] hover:bg-white hover:text-[#F09522] hover:border-[1px] duration-200  right-[18px] cursor-pointer absolute  bg-[#F09522] h-[32px] w-[32px] text-white rounded-full p-2"
          >
            <AiOutlineEye></AiOutlineEye>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CartWishlistNavigator;
