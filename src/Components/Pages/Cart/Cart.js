import React, { useContext } from "react";
import { useCartId } from "../../../App";
import SingleCartElement from "./SingleCartElement";

const Cart = () => {
  const arrId = useContext(useCartId);
  return (
    <div className="w-[85%] font-serif mx-auto">
      <h1 className="text-3xl ">Shopping Cart</h1>
      {arrId.length}
      {arrId.map((i) => (
        <SingleCartElement id={i}></SingleCartElement>
      ))}
    </div>
  );
};

export default Cart;
