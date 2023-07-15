import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "../ShopingCart";

const NavBar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";
  //----------------------------------------------------------------------------------------
  // Sign Out
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  // Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  // Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
  //----------------------------------------------------------------------------------------

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(true);
  };

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className="text-black/60">
            <NavLink>{parsedAccount?.email}</NavLink>
          </li>
          <li>
            <NavLink
              to="/MyOrders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/MyAccount"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/SignIn"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => handleSignOut()}
            >
              Sign Out
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <li>
          <NavLink
            to="/SignIn"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleSignOut()}
          >
            Sign in
          </NavLink>
        </li>
      );
    }
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 bg-white text-sm font-ligth">
      <ul className="flex align-center gap-3 items-center">
        <li className="font-semibold text-lg">
          <NavLink
            to={`${isUserSignOut ? "/signIn" : "/"}`}
            onClick={() => context.setSearchByCategory()}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory("clothes")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            onClick={() => context.setSearchByCategory("furniture")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shoes"
            onClick={() => context.setSearchByCategory("shoes")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory("others")}
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex item-center gap-3">
        {renderView()}
        <li className="flex items-center">
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
