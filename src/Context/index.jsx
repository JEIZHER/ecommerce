import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProducDetailOpen] = useState(false);
  const openProductDetail =()=>setIsProducDetailOpen(true);
  const closeProductDetail =()=>setIsProducDetailOpen(false);
  
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
