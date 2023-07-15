// import { useContext } from "react";
// import { useRoutes, BrowserRouter } from "react-router-dom";
// import { ShoppingCartProvider } from "../../Context";
// import { Home } from "../Home";
// import { MyAccount } from "../MyAccount";
// import { MyOrder } from "../MyOrder";
// import { MyOrders } from "../MyOrders";
// import { NotFound } from "../NotFound";
// import { SignIn } from "../SignIn";
// import { NavBar } from "../../Components/NavBar";
// import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
// import { ShoppingCartContext } from "../../Context";

// import "./App.css";

// const AppRoutes = () => {

// //------------------------------------------------------------------------------
//   const context = useContext(ShoppingCartContext)
//   // Account
//   const account = localStorage.getItem('account')
//   const parsedAccount = JSON.parse(account)
//   // Sign Out
//   const signOut = localStorage.getItem('sign-out')
//   const parsedSignOut = JSON.parse(signOut)
//   // Has an account
//   const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
//   const noAccountInLocalState = Object.keys(context.account).length === 0
//   const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
//   //----------------------------------------------------------------------------------------
  
//   const isUserSignOut = context.signOut || parsedSignOut

//   let routes = useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "/all", element: <Home /> },
//     { path: "/clothes", element: <Home /> },
//     { path: "/electronics", element: <Home /> },
//     { path: "/furniture", element: <Home /> },
//     { path: "/shoes", element: <Home /> },
//     { path: "/others", element: <Home /> },
//     { path: "/MyAccount", element: <MyAccount /> },
//     { path: "/MyOrder", element: <MyOrder /> },
//     { path: "/MyOrders", element: <MyOrders /> },
//     { path: "/MyOrders/last", element: <MyOrder /> },
//     { path: "/MyOrders/:id", element: <MyOrder /> },
//     { path: "/SignIn", element: <SignIn /> },
//     { path: "/*", element: <NotFound /> },
//   ]);
//   return routes;
// };

// const App = () => {
  
//   return (
//     <ShoppingCartProvider>
//       <BrowserRouter>  
//         <AppRoutes />
//         <NavBar />
//        <CheckoutSideMenu /> 
//       </BrowserRouter>
//     </ShoppingCartProvider>
//   );
// };

// export { App };

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import { NavBar } from "../../Components/NavBar";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
import { PrivateRoutes } from "../../utils/PrivateRoutes";
import "./App.css";


const App = () => {
  
  return (
    <ShoppingCartProvider>
      <BrowserRouter>        
        <NavBar />
        <Routes>
              <Route  path= '/' element= {<Home/>} /> 
              <Route path= "/all" element= {<Home/>}/>
              <Route path= "/clothes" element= {<Home />}/> 
              <Route path= "/electronics" element= {<Home />}/> 
              <Route path= "/furniture" element= {<Home />}/> 
              <Route path= "/shoes" element= {<Home />}/> 
              <Route path= "/others" element= {<Home />}/> 
              <Route path= "/SignIn" element= {<SignIn />}/>
              <Route element={<PrivateRoutes/>}>
                  <Route path= "/MyAccount" element= {<MyAccount />}/> 
                  <Route path= "/MyOrder" element= {<MyOrder />}/> 
                  <Route path= "/MyOrders" element= {<MyOrders />}/> 
                  <Route path= "/MyOrders/last" element= {<MyOrder />}/>
                  <Route path= "/MyOrders/:id" element= {<MyOrder /> }/>                   
                  <Route path= "/*" element= {<NotFound />}/> 
             </Route>
        </Routes>
       <CheckoutSideMenu /> 
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export { App };