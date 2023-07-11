import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
// import {CheckoutSideMenu} from '../../Components/CheckoutSideMenu'

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  return <Layout>
      
      <h1>MyOrders</h1>
        
        {
          context.order.map((order,index)=>(
            <Link key={index} to={`/MyOrders/${order.id}`}>
          <OrdersCard  
           totalPrice={order.totalPrice} 
           totalProducts={order.totalProducts} />

            </Link>
 
         ) )
        }
        
  </Layout>;
}

export { MyOrders };
