import React, { useEffect, useState } from 'react'
import ProductCard from '../shop/ProductCard'
import productsData from '../../data/products.json';
import FeatureCard from '../common/FeatureCard';

const HotDealsSection = () => {

  console.log(productsData.products)
  const products = productsData.products;

if (!products || products.length === 0) return null;

  return (
    <>
<section className="px-4 py-6 md:px-8 lg:px-12">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold md:text-xl">Hot Deals</h2>
        <button className="text-sm font-medium text-green-600 hover:underline">
          View All →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        { <FeatureCard key={products[0].id} product={products[0]} />}
        {products.slice(1,12).map((product) =>
        
            <ProductCard key={product.id} product={product} />
          
        )}
      </div>
    </section>
    
</>
  );
};


export default HotDealsSection


