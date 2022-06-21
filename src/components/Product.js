import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

import styles from "./Product.module.css";

const Product = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="card">
      <img src={item.image} alt="" />
      <h4>{item.title}</h4>
      <h5>{item.price}</h5>
      <button onClick={() => handleAdd(item)} className={styles.btn}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
