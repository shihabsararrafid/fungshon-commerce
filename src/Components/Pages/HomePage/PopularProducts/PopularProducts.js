import React, { useEffect, useState } from "react";
import LoadData from "../../../Hooks/LoadData";
import LoadPopularProducts from "../../../Hooks/LoadPopularProducts";
import SingleProduct from "./SingleProduct";

const PopularProducts = () => {
  const [popularProductsID] = LoadPopularProducts();
  // loading data from custom hooks load data
  const popular = popularProductsID?.slice(0, 3);
  const [products, setProducts] = LoadData();

  return (
    <div>
      <div>
        <h1 className="text-4xl text-center">Popular Products</h1>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{products?.length}
          {popularProductsID?.length}
          {popular?.length}
        </p>
        <p></p>
      </div>
      <div>
        {popular?.map((p) => (
          <SingleProduct id={p}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
