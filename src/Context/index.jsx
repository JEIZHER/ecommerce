import { createContext, useState , useEffect} from "react";

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

    // get products

    const [items, setItems] = useState(null);

    // get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    console.log(searchByTitle)
    useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
        .then((response) => response.json())
        .then((data) => setItems(data));
    }, []);

   
  
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
        setOrder,
        items,
        setItems,
        searchByTitle,
         setSearchByTitle
  
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
