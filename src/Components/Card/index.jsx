import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";



const Card = ({data}) => {
  const context = useContext(ShoppingCartContext)

const showProduct=(dataDetail)=>{  
    context.openProductDetail()
    context.setProductToShow(dataDetail) 
    context.closeCheckoutSideMenu()
}
const addProductsToCart = (event, productData) => {
  event.stopPropagation()
  context.setCount(context.count + 1)
  context.setCartProducts([...context.cartProducts, productData])
  context.openCheckoutSideMenu()
  context.closeProductDetail()
  
}

const renderIcon = (id)=>{
 const isInCart= context.cartProducts.filter(product=>product.id===id).length > 0

 if(isInCart){
  return(
    <div className="absolute top-0 right-0 flex justify-center items-center  bg-black w-6 h-6 rounded-full m-2 px-3 py-0.5 "
    onClick={(event)=> event.stopPropagation()}
    >

          <div>
          <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="white" 
              className="w-6 h-6">
             <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M4.5 12.75l6 6 9-13.5" />
        </svg>
          </div>
    </div>
     )
}else {
 return(
 <div 
  className="absolute top-0 right-0 flex justify-center items-center  bg-white w-6 h-6 rounded-full m-2 px-3 py-0.5 "
  onClick={(event)=>addProductsToCart(event ,data)}>
        <div>
        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                    />
                </svg>
        </div>
 </div>

 )}}



  return (
     <div 
     className="bg-white cursor-pointer w-56 h-60 rounded-lg" 
     onClick={()=>showProduct(data)}
     >
       <figure className="relative mb-3 w-full h-4/5">
         <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">
           {data.category.name}
         </span>
         <img
           className="w-full h-full objet-cover rounded-lg"
           src={data.images[0]}
           alt={data.title}
         /> 
        {renderIcon(data.id)}             
       </figure>

       <p className="flex justify-between items-center">
       <span className="text-sm font-light">{data.title}</span>
       <span className="text-lg font-medium">${data.price}</span>
       </p>

     </div>   


    
  )
};

export {Card};
