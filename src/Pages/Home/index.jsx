import React from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";


function Home() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
       <h1 className="font-medium text-xl mb-5">Home</h1>
       <input 
       type="text" 
       placeholder="Search a product " 
       className="border border-black rounded-lg mb-8 p-4 focus:outline-none"
       onChange={(event)=> context.setSearchByTitle(event.target.value)}
       />
      <div className="grid gap-1 grid-cols-4 w-full max-w-screen-lg">
      
        { 
        context.filteredItems?context.filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        )): <div className="text-2xl font-medium grid-a-2">We don't find any coincident....</div>
        }
      </div>
      <ProductDetail/>
      
    </Layout>
  );
}

export { Home };
