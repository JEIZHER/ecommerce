import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();


export const initializeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem('account')
  const signOutInLocalStorage = localStorage.getItem('sign-out')
  let parsedAccount
  let parsedSignOut

  if (!accountInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage)
  }

  if (!signOutInLocalStorage) {
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  } else {
    parsedSignOut = JSON.parse(signOutInLocalStorage)
  }
}



export const ShoppingCartProvider = ({ children }) => {

  // My account
  const [account, setAccount] = useState({})

  // Sign out
  const [signOut, setSignOut] = useState(false)

   // shopping cart    increment quantity
  const [count, setCount] = useState(0);
  // product detail    Open-close
  const [isProductDetailOpen, setIsProducDetailOpen] = useState(false);
  const openProductDetail = () => setIsProducDetailOpen(true);
  const closeProductDetail = () => setIsProducDetailOpen(false);

  // checkout side menu   Open-close
  const [isCheckoutSideMenuOpen, setICheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setICheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setICheckoutSideMenuOpen(false);
  // product detail   show product
  const [productToShow, setProductToShow] = useState({});

  // shopping cart    Add products
  const [cartProducts, setCartProducts] = useState([]);

  // shopping cart order
  const [order, setOrder] = useState([]);

  // get products

  const [items, setItems] = useState(null);

  const [filteredItems, setFilteredItems] = useState(null);

  // get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);
  // get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filteredBy = (searchType, items, searchByCategory, searchByTitle) => {
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (searchType === "null") {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory) {
      setFilteredItems(
        filteredBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByCategory,
          searchByTitle
        )
      );
    }
    if (!searchByTitle && searchByCategory) {
      setFilteredItems(
        filteredBy("BY_CATEGORY", items, searchByCategory, searchByTitle)
      );
    }
    if (searchByTitle && !searchByCategory) {
      setFilteredItems(
        filteredBy("BY_TITLE", items, searchByCategory, searchByTitle)
      );
    }
    if (!searchByTitle && !searchByCategory) {
      setFilteredItems(
        filteredBy("null", items, searchByCategory, searchByTitle)
      );
    }
  }, [items, searchByTitle, searchByCategory]);

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
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
        account,
        setAccount,
        signOut,
        setSignOut
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
