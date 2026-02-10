import React from 'react'
import ProductCard from '../shop/ProductCard'
const HotDealsSection = () => {
  return (
    <>
    <section className="px-4 py-6 md:px-8 lg:px-12">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold md:text-xl">Hot Deals</h2>
        <button className="text-sm font-medium text-green-600 hover:underline">
          View All →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {/* {products.map((item) =>
          // item.featured ? (
            // <FeaturedCard key={item.id} item={item} />
          // ) : (
            <ProductCard key={item.id} item={item} />
          // )
        )} */}
      </div>
    </section>
 </>
  )
}

export default HotDealsSection


