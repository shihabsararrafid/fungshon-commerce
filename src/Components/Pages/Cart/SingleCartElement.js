import React, { useEffect, useState } from "react";

const SingleCartElement = ({ id }) => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  console.log(product, id);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(1);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setTotal(parseInt(data?.price));
        setValue(parseFloat(data?.price));
      });
  }, [id]);
  const input = document.getElementById("input");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");
  
  let totalPrice = product?.price;
  const minusClicked = () => {
    if (count > 0) {
      setCount(count - 1);
    } else setCount(0);
   
  };
  useEffect(() => {
    setTotal(value * count);
  }, [count]);
  const plusClicked = () => {
    setCount(count + 1);

   
  };

  return (
    <tr>
      <td className="hidden lg:block">
        <img
          className="w-[50px]   h-[50px] object-fill"
          src={product?.image}
          alt=""
          srcset=""
        />
      </td>
      <td>{product?.title?.slice(0, 30)}</td>
      <td>
        <span onClick={minusClicked} id="minus " className="cursor-pointer">
          -
        </span>{" "}
        <input
          id="input"
          className="w-[30%] text-center"
          type="text"
          value={count}
        />{" "}
        <span onClick={plusClicked} id="plus" className="cursor-pointer">
          +
        </span>
      </td>
      <td className="">${product?.price}</td>
      <td id="total">${total}</td>
    </tr>
  );
};

export default SingleCartElement;
