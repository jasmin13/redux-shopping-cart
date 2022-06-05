import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);
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
          Cart{totalItems > 0 && <span className="badge">{totalItems}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
