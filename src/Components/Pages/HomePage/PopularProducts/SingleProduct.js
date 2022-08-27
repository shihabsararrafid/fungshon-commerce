import React from "react";
import LoadData from "../../../Hooks/LoadData";
import Circle from "../../../Shared/Circle/Circle";
import Rating from "../../../Shared/Ratings/Rating";

const SingleProduct = ({ id }) => {
  const dot = ".........";

  const [products, setProducts] = LoadData();
  const product = products.find((p) => p.id === id);
  const pdctPrice = product?.price;
  return (
    <div className="relative shadow-lg">
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
        <p>Price : ${pdctPrice % 1 === 0 ? pdctPrice + ".00" : pdctPrice}</p>
        <p>
          <Circle></Circle>
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
