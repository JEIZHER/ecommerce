import { useRoutes, BrowserRouter } from "react-router-dom";
import {Home}  from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />, },
    {path: '/MyAccount', element: <MyAccount/>,},
    {path: '/MyOrder', element: <MyOrder />, },
    {path: '/MyOrders', element: <MyOrders />, },
    {path: '/SignIn', element: <SignIn />, },
    {path: '/*', element: <NotFound />, },
]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export { App };
