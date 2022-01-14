import React from "react";
import CartContext from "./cart-context";

const CartProvoider = (props) => {
  const addToCartHandler = (item) => {};
  const removeFromCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvoider;
