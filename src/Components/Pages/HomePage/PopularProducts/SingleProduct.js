import React from "react";
import LoadData from "../../../Hooks/LoadData";

const SingleProduct = ({ id }) => {
  const [products, setProducts] = LoadData();
  const product = products.find((p) => p.id === id);
  return (
    <div>
      {id}
      <img src={product?.image} alt="" />
    </div>
  );
};

export default SingleProduct;
