import React from 'react';



const ProductCard = ({ product }) => {

    // Destructuring: This extracts the variables from 'product'

    // so you don't have to type 'product.name' every time.

    const { name, price, image, rating } = product;



    return (

        <div className="group bg-white     border   border-gray-1  p-4 transition-all duration-300 ease-in-out 
                        hover:border-hard-primary hover:shadow-xl hover:-translate-y-1">



            {/* Product Image */}

            <div className="relative w-full h-44 mb-3 flex items-center justify-center overflow-hidden">

                <img

                    src={image}

                    alt={name}

                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"

                />

                {product?.sale && (
                    <div className='absolute top-1 left-3 z-10 bg-danger px-2 py-1 rounded text-xs font-medium text-white shadow-sm'>
                        <p>Sale 50%</p>
                    </div>
                )}

            </div>



            {/* Product Info */}

            <div className="flex justify-between items-center">

                <div>

                    {/* Standard Tailwind Color */}
                    <h3 className="text-sm text-gray-700 font-medium group-hover:text-hard-primary-600 transition-colors">
                        {name}
                    </h3>

                    <div className="flex items-center gap-2 mt-1">
                        {/* The New/Current Price */}
                        <p className="text-base font-bold text-gray-900">
                            ${price.toFixed(2)}
                        </p>


                    </div>



                    {/* Simple Rating Stars */}

                    <div className="flex text-warning text-xs md:text-xl">

                        {"★".repeat(rating)}{"☆".repeat(5 - rating)}

                    </div>

                </div>





            </div>

        </div>

    );

};



export default ProductCard;