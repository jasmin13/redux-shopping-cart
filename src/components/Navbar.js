import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
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
          {cart.length > 0 && <span className="badge">{cart.length}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
