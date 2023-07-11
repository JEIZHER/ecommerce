import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";


function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <h1 className="font-medium text-xl mb-5">MyOrders</h1>
      {context.order.map((order, index) => (
        <Link key={index} to={`/MyOrders/${index}`} >
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
            date={order.date}
          />
        </Link>
      ))}
    </Layout>
  );
}

export { MyOrders };
