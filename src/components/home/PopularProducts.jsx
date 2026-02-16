import React from 'react'
import ProductCard from "../shop/ProductCard";
import productsData from "../../data/products.json";

const PopularProducts = () => {
  const popularProducts = productsData.products.slice(0, 10);
  // this will return the first 10 products from all products

  return (
    <section className='py-10'>
      <div className="layout flex justify-between items-center">
        <h2 className="font-medium text-xl">Popular Products</h2>
        <a href="" className='text-sm text-primary'>View all -- </a>
      </div>


      <div className=' layout py-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>

        {
          popularProducts.map((product) => {
            return (
              <ProductCard key={product.id} product={product} />

            )
          })
        }
      </div>
    </section>
  )
}

export default PopularProducts
