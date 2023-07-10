import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import {totalPrice }from '../../utils'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete=(id)=>{
    const filteredProducts= context.cartProducts.filter(product=>product.id !=id)
    context.setCartProducts(filteredProducts)
    context.setCount(context.count - 1)
  }

  const handleCheckout=()=>{
      const orderToAdd= {
          date:'01-01-23',
          products:context.cartProducts,
          totalProducts:context.cartProducts.length,
          totalPrice:totalPrice(context.cartProducts)

      }
      context.setOrder([...context.order,orderToAdd])
      context.setCartProducts([])

  }


  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } flex-col fixed top-20 right-0  border bg-white border-black  rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()}
        >
          <svg
            // xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images?.[0]}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between item-center mb-2">
          <span className="font-light">Total</span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
        </p>
        <button className="bg-black text-white py-3 w-full rounded-lg" onClick={()=>handleCheckout()} >Checkout</button>
      </div>

    </aside>
  );
}; 
export { CheckoutSideMenu };
