import React, { useEffect, useState } from "react";
import Wishlist from "../../assets/icons/Wishlist.png";
import QuickView from "../../assets/icons/QuickView.png";
import Addtocart from "../../assets/icons/bgicon-white.png";

const FeatureCard = ({ product }) => {
  const discountAmt = (50 / 100) * parseInt(product.price);

  const target = new Date("Jan 5, 2030 15:37:25").getTime();
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) return clearInterval(timer);
      setTime({
        d: Math.floor(diff / (1000 * 60 * 60 * 1200)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="col-span-2 row-span-2 border border-gray-200 p-4 transition hover:shadow-xl hover:-translate-y-1">
      <div className="flex gap-2">
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
          {product.sale}
        </span>
        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
          Best Sale
        </span>
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="mx-auto my-4 h-40 object-contain"
      />

      <div className="flex items-center gap-3 p-3">
        <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
          <img src={Wishlist} className="w-5 h-5" />
        </button>

        <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-full text-sm">
          Add to Cart
          <img src={Addtocart} className="w-5 h-5" />
        </button>

        <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
          <img src={QuickView} className="w-5 h-5" />
        </button>
      </div>

      <div className="text-center">
        <h3 className="mt-4 text-sm font-semibold">{product.name}</h3>

        <div className="flex justify-center gap-2 mt-1">
          <span className="text-lg font-bold">${discountAmt}</span>
          <span className="text-sm text-gray-400 line-through">
            ${product.price}
          </span>
        </div>

        <div className="mt-2 flex justify-center gap-2 text-sm">
          <span className="text-orange-400">★★★★★</span>
          <span className="text-gray-400">(524 Feedback)</span>
        </div>
      </div>

      <p className="text-center mt-4 text-gray-400 text-sm">
        Hurry up! Offer ends In:
      </p>

      <div className="flex justify-center gap-6 mt-4 text-center">
        <div>
          <p className="font-bold text-lg">{time.d}</p>
          <p className="text-xs text-gray-400">DAYS</p>
        </div>
        <div>
          <p className="font-bold text-lg">{time.h}</p>
          <p className="text-xs text-gray-400">HOURS</p>
        </div>
        <div>
          <p className="font-bold text-lg">{time.m}</p>
          <p className="text-xs text-gray-400">MINS</p>
        </div>
        <div>
          <p className="font-bold text-lg">{time.s}</p>
          <p className="text-xs text-gray-400">SECS</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
