import React from "react";

const CartWishlistNavigator = ({ id, isClicked }) => {
  return (
    <div>
      <button onClick={() => isClicked(id)} className="btn btn-hover">
        Add To Cart
      </button>
    </div>
  );
};

export default CartWishlistNavigator;
