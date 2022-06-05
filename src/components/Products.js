import { useDispatch, useSelector } from "react-redux";
import { addQuantity, addToCart, addToTotal } from "../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  const handleClick = (product) => {
    dispatch(
      addToCart({
        product,
        quantity: 0,
      })
    );
    dispatch(addQuantity(product.id))
    dispatch(addToTotal(product.price))
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleClick(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
