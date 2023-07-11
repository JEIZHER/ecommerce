import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const OrdersCard = (props) => {
    const {totalPrice,totalProducts,date } = props;
    const context = useContext(ShoppingCartContext)
    
    
    return (
      <div className="flex justify-between  items-center   border border-black rounded-lg mb-3 p-4 w-80">
            <div className="flex justify-between  w-full">
                <p className="flex flex-col ">
                    <span className="font-light">{date}</span>
                    <span className="font-light">{totalProducts} articles</span>
                </p>              
                    
                 <p className="flex  gap-2 items-center " >
                   <span className="font-medium text-2xl">$ {totalPrice}</span>
      
                    <svg xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="currentColor" 
                          className="w-6 h-6">
                          <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>

            
                  </p>   
                    



            </div>

      </div>
    );
  };
  
  export { OrdersCard };