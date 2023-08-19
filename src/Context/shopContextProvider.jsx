import { Products } from "../Products";
import { useState } from "react";
import { ShopContext } from "./shopContext";
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= Products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    // for (const item in cartItems) {
    //   if (cartItems[item] > 0) {
    //     let itemInfo = Products.find((product) => product.id === Number(item));
    //     totalAmount += itemInfo.price * cartItems[item];
    //   }
    // }

    for (let i = 1; i <= Products.length; i++) {
      totalAmount += cartItems[i] * Products[i - 1].price;
    }
    return totalAmount;
  };
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newValue, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newValue }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
