import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const OrdersCard = (props) => {
    const {totalPrice,totalProducts } = props;
    const context = useContext(ShoppingCartContext)
    
    
    return (
      <div className="flex justify-between items-center mb-2 border border-black">
            <p>
                <span>11.7.23</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>

            </p>
      </div>
    );
  };
  
  export { OrdersCard };