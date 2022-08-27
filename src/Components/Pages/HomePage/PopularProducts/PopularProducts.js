import React, { useEffect, useState } from "react";
import LoadData from "../../../Hooks/LoadData";
import LoadPopularProducts from "../../../Hooks/LoadPopularProducts";
import SingleProduct from "./SingleProduct";
import "./PopularProduct.css";
const PopularProducts = ({ getCartID }) => {
  const [popularProductsID] = LoadPopularProducts();
  // loading data from custom hooks load data
  const popularContainer = (id) => {
    console.log("Rafid is calling you", id);
    getCartID(id);
  };
  const popular = popularProductsID?.slice(0, 4);
  const [products, setProducts] = LoadData();

  return (
    <div className="bg-[#D9D9D9] p-7">
      <div>
        <h1 className="text-4xl text-center">Popular Products</h1>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p></p>
      </div>
      <div className="lg:w-[85%] popular-container my-10 md:w-[90%] gap-8 mx-auto grid lg:grid-cols-4">
        {popular?.map((p) => (
          <SingleProduct
            id={p}
            popularContainer={popularContainer}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
