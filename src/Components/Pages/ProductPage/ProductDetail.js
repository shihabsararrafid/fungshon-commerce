import React from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Product id:{id}</div>;
};

export default ProductDetail;
