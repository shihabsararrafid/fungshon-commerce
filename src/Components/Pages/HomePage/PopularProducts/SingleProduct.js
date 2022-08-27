import React from "react";
import LoadData from "../../../Hooks/LoadData";
import Circle from "../../../Shared/Circle/Circle";
import Rating from "../../../Shared/Ratings/Rating";
import CartWishlistNavigator from "./CartWishlistNavigator";
import { AiOutlineEye } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import love from "./../../../../Images/CartRelated/love.png";
import { Routes, Route, Link } from "react-router-dom";
const SingleProduct = ({ id, popularContainer }) => {
  const dot = ".........";
  const isClicked = (id) => {
    popularContainer(id);
    //console.log("from it's parent component");
  };
  const [products, setProducts] = LoadData();
  const product = products.find((p) => p.id === id);
  const pdctPrice = product?.price;
  return (
    <div className="relative  rounded-lg shadow-lg">
      <img className="h-[356px]  object-cover" src={product?.image} alt="" />
      <p className="flex text-sm gap-5  items-center">
        Ratings : <span>{product?.rating?.rate}</span>
        <Rating rating={product?.rating?.rate}></Rating>
      </p>
      <p>
        {product?.title.slice(0, 30)}
        {dot}
      </p>

      <div className="flex  justify-between">
        <p>
          Price :
          <span className="text-[#F09522]">
            {" "}
            ${pdctPrice % 1 === 0 ? pdctPrice + ".00" : pdctPrice}
          </span>{" "}
        </p>
        <p>
          <Circle></Circle>
        </p>
      </div>
      <CartWishlistNavigator
        id={id}
        isClicked={isClicked}
      ></CartWishlistNavigator>
      {/* <div className="cartWishlistNavigator rounded-lg  absolute w-[100%] h-[100%] top-0 left-0 hover:opacity-90 duration-500 opacity-0 bg-[#8E8C86] ">
        <div className="absolute left-[25%] top-[50%]">
          <CartWishlistNavigator
            id={id}
            isClicked={isClicked}
          ></CartWishlistNavigator>
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
      </div> */}
    </div>
  );
};

export default SingleProduct;
