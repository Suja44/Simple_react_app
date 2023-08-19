import { useContext } from "react";
import { Products } from "../../Products";
import { ShopContext } from "../../Context/shopContext";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
function ShoppingCart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const Navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartItem
                key={product.id}
                name={product.name}
                id={product.id}
                image={product.image}
                price={product.price}
              />
            );
          }
        })}
      </div>
      {totalAmount !== 0 ? (
        <div className="checkout">
          <p>Subtotal:${totalAmount}</p>
          <button onClick={() => Navigate("/")}>Continue Shopping</button>
          <button> Checkout </button>
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
}

export default ShoppingCart;
