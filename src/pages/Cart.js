import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const handleRemove = (product) => {
    dispatch(removeFromCart(product.id));
  };
  const handleAddQuantity = (product) => {
    dispatch(increaseQuantity(product.id));
  };
  const handleRemoveQuantity = (product) => {
    dispatch(decreaseQuantity(product.id));
  };

  return (
    <div>
      <h3>Cart</h3>
      {cart.length == 0 && (
        <div className="cartWrapper">Your Cart is empty.</div>
      )}
      {cart.length > 0 && (
        <div className="cartWrapper">
          {cart.map((product) => (
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>${product.price}</h5>
              <button onClick={() => handleAddQuantity(product)}>+</button>
              <button onClick={() => handleRemoveQuantity(product)}>-</button>
              <button className="btn" onClick={() => handleRemove(product)}>
                Remove
              </button>
            </div>
          ))}
          <div className="cartTotal">
            <h5>
              Total : <span>${totalAmount}</span>
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
