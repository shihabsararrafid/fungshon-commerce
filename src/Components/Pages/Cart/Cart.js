import React, { useContext } from "react";
import { useCartId } from "../../../App";
import SingleCartElement from "./SingleCartElement";
import "./Cart.css";
const Cart = () => {
  const arrId = useContext(useCartId);
  return (
    <div className="w-[85%] font-serif mx-auto">
      <h1 className="text-3xl ">Shopping Cart</h1>
      {arrId?.length === 0 ? (
        <h1 className="text-3xl text-center ">You have no items in cart</h1>
      ) : (
        ""
      )}
      {arrId?.length > 0 ? (
        <table id="cart" className="w-full ">
          <tr>
            <th className="py-[12px] text-left bg-black text-white">Image</th>
            <th className="py-[12px] text-left bg-black text-white">
              Product Name
            </th>
            <th className="py-[12px] text-left bg-black text-white">
              Quantity
            </th>
            <th className="py-[12px] text-left bg-black text-white">
              Unit Price
            </th>
            <th className="py-[12px] text-left bg-black text-white">Total</th>
          </tr>
          {arrId.map((i) => (
            <SingleCartElement id={i}></SingleCartElement>
          ))}
        </table>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
