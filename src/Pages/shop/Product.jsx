import { useContext } from "react";
import { ShopContext } from "../../Context/shopContext";

function Product({ name, image, price, id }) {
  const { addToCart, cartItems } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
      </div>
      <button onClick={() => addToCart(id)} className="addToCartBtn">
        <p>Add to Cart</p> {cartItems[id] > 0 && <p>({cartItems[id]})</p>}
      </button>
    </div>
  );
}

export default Product;
