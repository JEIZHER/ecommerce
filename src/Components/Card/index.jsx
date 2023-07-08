import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = ({data}) => {
  const context = useContext(ShoppingCartContext)
  return (
    <div 
    className="bg-white cursor-pointer w-56 h-60 rounded-lg" 
    onClick={()=>context.openProductDetail()}
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
        <div 
        className="absolute top-0 right-0 flex justify-center items-center  bg-white w-6 h-6 rounded-full m-2 px-3 py-0.5 "
        onClick={(event)=>{
          event.stopPropagation();
          context.setCount(context.count+1)}}
        > <div>
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
      </figure>

      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
};

export {Card};
