import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const item = useSelector((state) => Object.entries(state.cart).reduce((acc, val) => {
    acc += val[1].quantity;
    return acc;
  }, 0));
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">
        <Link className="navLink" to="/">
          REDUX STORE
        </Link>
      </span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
          {item > 0 && <span className="badge">{item}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
