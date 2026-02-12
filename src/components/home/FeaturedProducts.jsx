import React from 'react'
import ProductCard from "../shop/ProductCard";
import productsData from "../../data/products.json";


const FeaturedProducts = () => {
   const popularProducts = productsData.products.slice(0,5);
  // this will return the first 5 products from all products
  return (
    <div>
      <section className='py-10'>
      <div className="layout flex justify-between items-center ">
      <h2 className="font-medium text-xl">Featured Products</h2>
      <a href="" className='text-sm text-primary'>View all --&gt; </a>
      </div>

 
       <div className='layout py-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>


     

    {
      popularProducts.map((product)=>{
        return(
          <div key={product.id} className='flex-1  min-w-[160px] md:min-w-[170px]'> 

          <ProductCard  product={product}/>
          </div>

        )
      })
    }
     </div>
    </section>
      
    </div>
  )
}

export default FeaturedProducts
