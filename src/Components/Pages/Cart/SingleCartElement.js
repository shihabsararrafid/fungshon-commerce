import React, { useEffect, useState } from "react";

const SingleCartElement = ({ id }) => {
  const [product, setProduct] = useState([]);
  console.log(product, id);
  //const [total, setTotal] = useState(0);
  const [value, setValue] = useState(1);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // setTotal(data?.price);
      });
  }, [id]);
  const input = document.getElementById("input");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");
  const total = document.getElementById("total");
  // console.log(total?.innerText);
  let totalPrice = product?.price;
  const minusClicked = () => {
    let prim = parseInt(input.value);
    input.value = input.value > 0 ? prim - 1 : 0;
    totalPrice = parseFloat(product?.price) * parseInt(input?.value);
    console.log(totalPrice);
    console.log(total.innerText);
    total.innerText = `${totalPrice}`;
    //setTotal(totalPrice);
  };

  const plusClicked = () => {
    let prim = parseInt(input?.value);

    input.value = prim + 1;
    totalPrice = parseFloat(product?.price) * parseInt(input?.value);
    console.log(totalPrice);
    total.innerText = `$${totalPrice}`;
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
          value="1"
        />{" "}
        <span onClick={plusClicked} id="plus" className="cursor-pointer">
          +
        </span>
      </td>
      <td className="">${product?.price}</td>
      <td id="total">${totalPrice}</td>
    </tr>
  );
};

export default SingleCartElement;
