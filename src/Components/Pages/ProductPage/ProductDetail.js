import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Circle from "../../Shared/Circle/Circle";
import Rating from "../../Shared/Ratings/Rating";
import { BsChevronDown } from "react-icons/bs";
import wishlist from "./../../../Images/Icons/wishlist (1).png";
import compare from "./../../../Images/Icons/compare.png";
const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <div className="w-full">
      Product id:{id}
      <div className="lg:w-[75%] flex gap-x-[20px] mx-auto">
        <div>
          <img
            className="h-[695px] w-[524px] object-fit"
            src={product?.image}
            alt=""
          />
        </div>
        <div className="p-6 flex flex-col gap-y-2">
          <p>{product?.title}</p>
          <div className="flex gap-3">
            {" "}
            <p>${product?.price}</p>
            <p className="line-through text-[#B5B2B2]">${product?.price}</p>
          </div>

          <p>
            <Rating rating={product?.rating?.rate}></Rating>
          </p>
          <hr />
          <p className="flex gap-4">
            Colors: <Circle></Circle>
          </p>
          <p className="flex gap-4">
            <button
              id="btna"
              className="btn flex items-center gap-3  bg-[#BDBDBD]"
            >
              Size <BsChevronDown></BsChevronDown>
            </button>
            <button
              id="btna"
              className="btn  flex items-center gap-3 bg-[#BDBDBD]"
            >
              QTY <BsChevronDown></BsChevronDown>
            </button>
          </p>
          <p className="text-[#F09522]">
            {" "}
            Only {product?.rating?.count} Left In Stock
          </p>
          <p className="flex gap-7">
            <button id="btna" className="btn">
              Add To Cart
            </button>
            <button className="btn">Buy Now</button>
          </p>
          <hr />
          <div className="text-[#BDBDBD] flex gap-5">
            <div className="flex gap-2 items-center">
              <img className="cursor-pointer" src={wishlist} alt="" />
              <p>Add to Wishlist</p>
            </div>
            <div className="flex gap-2 items-center">
              <img className="cursor-pointer" src={compare} alt="" />
              <p>Add to Compare</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
