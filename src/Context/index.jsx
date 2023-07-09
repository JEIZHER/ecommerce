import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // shopping cart    increment quantity
  const [count, setCount] = useState(0);
  // product detail    Open-close 
  const [isProductDetailOpen, setIsProducDetailOpen] = useState(false);
  const openProductDetail =()=>setIsProducDetailOpen(true);
  const closeProductDetail =()=>setIsProducDetailOpen(false);
  // product detail   show product
  const [productToShow, setProductToShow] = useState({});
  
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
