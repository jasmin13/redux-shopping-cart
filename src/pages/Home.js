import React from "react";
import Product from "../components/Product";
import { products } from "../api/products";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Redux toolkit store</h2>
      <section>
        <h3>Products</h3>
        <div className="productsWrapper">
          {products.map((item) => {
            return <Product key={item.id} item={item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
