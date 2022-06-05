import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToTotal,
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
  subtractFromTotal,
} from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.currentCart);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const handleAddQuantity = (product) => {
    dispatch(increaseCartQuantity(product.id));
    dispatch(addToTotal(product.price));
  };
  const handleRemoveQuantity = (product) => {
    dispatch(decreaseCartQuantity(product.id));
    dispatch(subtractFromTotal(product.price));
  };

  return (
    <div>
      <h3>Cart</h3>
      {totalItems == 0 && (
        <div className="cartWrapper">Your Cart is empty.</div>
      )}
      {totalItems != 0 && (
        <div className="cartWrapper">
          {products.map((product) => (
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button onClick={() => handleAddQuantity(product)}>+</button>
              <button onClick={() => handleRemoveQuantity(product)}>-</button>
              <button className="btn" onClick={() => handleRemove(product.id)}>
                Remove
              </button>
            </div>
          ))}
          <div className="cartTotal">
            <h5>
              Total : <span>${Math.round(totalPrice * 100) / 100} </span>
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
