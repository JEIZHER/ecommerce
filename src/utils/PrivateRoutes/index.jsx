import { Outlet,Navigate } from "react-router-dom"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context"

const PrivateRoutes=()=>{
const context = useContext(ShoppingCartContext);
//const {signOut} = ShoppingCartContext  
 console.log(context.signOut)
return(
    
   context.signOut?<Navigate to='/SignIn'/>:<Outlet/>
)


}

export {PrivateRoutes}