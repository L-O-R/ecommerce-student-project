import React from 'react'
import categories from '../../data/categories.json'


const CategorySection = () => {
  return (
    <section className="w-full mx-auto px-4 py-10 w-full md:px-20">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">
          Popular Categories
        </h2>
        <button className="text-sm font-medium text-green-600 hover:opacity-80">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 place-items-center">
        {categories.map((item) => (
          <div 
            key={item.id}
            className="group h-[213px] w-full max-w-[200px] rounded-lg border border-gray-200 bg-white p-4 transition hover:border-green-600 hover:shadow-md active:border-green-600 active:shadow-md focus-within:border-green-600 focus-within:shadow-md"
          >
            <div className="mx-auto flex h-[140px] w-full items-center justify-center">
              <img src={item.image} alt={item.name}  className="max-h-[140px] max-w-full w-auto object-contain"/>
            </div>

            <p className="mt-3 text-center text-sm font-semibold text-gray-900 transition group-hover:text-green-600 group-active:text-green-600">
              {item.name}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
