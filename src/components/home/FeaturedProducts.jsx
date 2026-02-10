import React from 'react'
import ProductCard from "../shop/ProductCard";
import productsData from "../../data/products.json";


const FeaturedProducts = () => {
   const popularProducts = productsData.products.slice(0,5);
  // this will return the first 5 products from all products
  return (
    <div>
      <section className='py-10'>
      <div className="layout flex justify-between items-center">
      <h2 className="font-medium text-xl">Featured Products</h2>
      <a href="" className='text-sm text-primary'>View all -- </a>
      </div>

 
      <div className=' layout py-3 flex '>

     

    {
      popularProducts.map((product)=>{
        return(
          <ProductCard key={product.id} product={product}/>

        )
      })
    }
     </div>
    </section>
      
    </div>
  )
}

export default FeaturedProducts
