import React, { useEffect, useState } from "react";

const SingleCartElement = ({ id }) => {
  const [product, setProduct] = useState([]);
  console.log(product, id);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <div>
      <p>Item</p>
      <p>{product?.title}</p>
    </div>
  );
};

export default SingleCartElement;
