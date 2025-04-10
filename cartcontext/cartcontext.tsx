import { createContext, useState } from "react";

export const cartcontext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
  };

  return <cartcontext.Provider value={value}>{children}</cartcontext.Provider>;
};
