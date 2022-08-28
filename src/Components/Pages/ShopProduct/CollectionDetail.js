import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../HomePage/PopularProducts/SingleProduct";
const CollectionDetail = ({ getIdFromCollection }) => {
  const { category } = useParams();
  const popularContainer = (id) => {
    getIdFromCollection(id);
  };
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [category]);
  return (
    <div className="my-10 lg:w-[85%] w-full mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {product.map((p) => (
          <SingleProduct
            popularContainer={popularContainer}
            id={p.id}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default CollectionDetail;
