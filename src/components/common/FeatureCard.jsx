import React from "react";
import Wishlist from "../../assets/icons/Wishlist.png"
import QuickView from "../../assets/icons/QuickView.png";
import Addtocart from "../../assets/icons/Addtocart.png"


const FeatureCard = ({ product }) => {
  const dicountAmt = 50 / 100 * parseInt(product.price)
  return (
    <>
      <div className="col-span-2 row-span-2 rounded-xl border-2 border-primary p-4">
        {/* Badges */}
        <div className="flex gap-2">
          <span className="rounded bg-danger px-2 py-1 text-xs text-white">
            {product.sale}
          </span>
          <span className="rounded bg-blue-500 px-2 py-1 text-xs text-white">
            Best Sale
          </span>
        </div>

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto my-4 h-40 object-contain md:h-52"
        />

         {/* Add to cart */}

<div className="flex items-center gap-3 p-3">

       {/* Heart Icon */}
      <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
        <img src={Wishlist} alt="heart" className="w-5 h-5" />
      </button>

        {/* <button className="mx-auto flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-green-600 py-2 text-sm font-medium text-white hover:bg-green-700">
          Add to Cart
        </button> */}

              {/* Add to Cart Button */}
      <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-full font-medium text-sm">
        Add to Cart
        <img src={Addtocart} alt="cart" className="w-5 h-5" />
      </button>


          {/* Eye Icon */}
      <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
        <img src={QuickView} alt="view" className="w-5 h-5" />
      </button>
        </div>

        {/* Info */}
        <h3 className="mt-4 text-sm font-semibold">{product.name}</h3>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ${dicountAmt}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${product.price}
          </span>
        </div>

        {/* Rating */}
        <div className="mt-1 flex text-orange-400">★★★★☆</div>
      </div>
    </>
  );
};

export default FeatureCard;
