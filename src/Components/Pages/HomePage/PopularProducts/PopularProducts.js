import React, { useEffect, useState } from "react";
import LoadData from "../../../Hooks/LoadData";
import LoadPopularProducts from "../../../Hooks/LoadPopularProducts";
import SingleProduct from "./SingleProduct";
import "./PopularProduct.css";
const PopularProducts = () => {
  const [popularProductsID] = LoadPopularProducts();
  // loading data from custom hooks load data
  const popular = popularProductsID?.slice(0, 4);
  const [products, setProducts] = LoadData();

  return (
    <div>
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
          <SingleProduct id={p}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
