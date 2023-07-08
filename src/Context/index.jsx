import { createContext } from "react";

const ShoppingCartContext=createContext();


export const ShoppingCartProvider=({children})=>{

    <ShoppingCartContext.Provider>
      return {children}  
    </ShoppingCartContext.Provider>
    
}