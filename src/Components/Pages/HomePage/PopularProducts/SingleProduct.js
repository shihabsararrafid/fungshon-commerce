import React from "react";
import LoadData from "../../../Hooks/LoadData";
import Rating from "../../../Shared/Ratings/Rating";

const SingleProduct = ({ id }) => {
  const [products, setProducts] = LoadData();
  const product = products.find((p) => p.id === id);
  return (
    <div className="border-[1px] shadow-lg">
      <img className="h-[356px]  object-cover" src={product?.image} alt="" />
      <p>
        Ratings :<Rating rating={product?.rating?.rate}></Rating>
      </p>
    </div>
  );
};

export default SingleProduct;
