import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import {ShoppingCartContext} from '../../Context'
import { OrderCard } from "../../Components/OrderCard";
// import {CheckoutSideMenu} from '../../Components/CheckoutSideMenu'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  console.log(context.order)
  return (

    <>
      <Layout> My Order
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
