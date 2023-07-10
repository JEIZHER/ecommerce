import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // shopping cart    increment quantity
  const [count, setCount] = useState(0);
  // product detail    Open-close 
  const [isProductDetailOpen, setIsProducDetailOpen] = useState(false);
  const openProductDetail =()=>setIsProducDetailOpen(true);
  const closeProductDetail =()=>setIsProducDetailOpen(false);

   // checkout side menu   Open-close 
   const [isCheckoutSideMenuOpen, setICheckoutSideMenuOpen] = useState(false);
   const openCheckoutSideMenu =()=>setICheckoutSideMenuOpen(true);
   const closeCheckoutSideMenu =()=>setICheckoutSideMenuOpen(false);
  // product detail   show product
  const [productToShow, setProductToShow] = useState({});

   // shopping cart    Add products
   const [cartProducts, setCartProducts] = useState([]);

    // shopping cart order 
    const [order, setOrder] = useState([]);
  
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
