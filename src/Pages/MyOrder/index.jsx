import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
// import {CheckoutSideMenu} from '../../Components/CheckoutSideMenu'

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <Layout>
        <div className="flex justify-between items-center  w-80 mb-5">
          <Link to="/MyOrders">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </Link>

          <h1> MyOrder </h1>
        </div>

        <div className="flex flex-col w-80">
          {context.order?.slice(-1)[0].products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images?.[0]}
              price={product.price}
              // handleDelete={handleDelete}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export { MyOrder };
