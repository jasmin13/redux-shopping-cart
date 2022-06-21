import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/cartSlice";

import styles from "./Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return Object.values(state.cart);
  });
  const total = useSelector((state) =>
    Object.values(state.cart).reduce((acc, val) => {
      acc += parseInt(val.price, 10) * parseInt(val.quantity, 10);
      return acc;
    }, 0)
  );
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(total);
  }, [total]);

  return (
    <div>
      <h3>Cart</h3>
      <Link className="navLink" to="/">
        <Button variant="contained">Back</Button>
      </Link>
      {!cart.length && <div className="cartWrapper">Your Cart is empty.</div>}
      {cart.length && (
        <div className="cartWrapper">
          {cart.map((product) => (
            <div className="cartCard" key={`cart${product.id}`}>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>${product.price}</h5>
              <div className={styles.cartItems}>
                <Button
                  variant="contained"
                  onClick={() => dispatch(increaseQuantity(product))}
                >
                  +
                </Button>
                <div className={styles.totalItem}>{product.quantity}</div>
                <Button
                  variant="contained"
                  onClick={() => dispatch(decreaseQuantity(product))}
                >
                  -
                </Button>
              </div>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                color="error"
                onClick={() => dispatch(removeFromCart(product))}
              >
                Remove
              </Button>
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
