import { Products } from "../../Products";
import Product from "./Product";
import { useContext } from "react";
import { ShopContext } from "../../Context/shopContext";
import "./Shop.css";
function Shop() {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>shuja's shop</h1>
      </div>
      <h2 style={{ textAlign: "center" }}>Products</h2>

      <div className="products">
        {Products.map((product) => {
          return (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              id={product.id}
            />
          );
        })}
      </div>
      <p>{cartItems[1]}</p>
      <p>{cartItems[2]}</p>
      <p>{cartItems[3]}</p>
      <p>{cartItems[4]}</p>
      <p>{cartItems[5]}</p>
    </div>
  );
}

export default Shop;
