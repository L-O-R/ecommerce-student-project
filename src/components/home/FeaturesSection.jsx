import React from 'react';
import Shipping from "../../assets/icons/free_shipping.png";
import Support from "../../assets/icons/customer_support.png";
import SecurePayment from "../../assets/icons/secure_payment.png";
import MoneyBack from "../../assets/icons/money_back.png";

const FeaturesSection = () => {

  const data = [
    {
      id: '01',
      title: "Free Shipping",
      description: "Free shipping on all your order",
      img: Shipping
    },
    {
      id: '02',
      title: "Customer Support 24/7",
      description: "Instant access to Support",
      img: Support
    },
    {
      id: '03',
      title: "100% Secure Payment",
      description: "We ensure your money is save",
      img: SecurePayment
    },
    {
      id: '04',
      title: "Money-Back Guarantee",
      description: "30 Days Money-Back Guarantee",
      img: MoneyBack
    },
  ]

  return (
    <section className='layout flex justify-center py-8 '>
      <div className='flex snap-x snap-mandatory overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 w-full shadow-[0px_8px_40px_0px_#00260314] rounded-lg py-6 px-5 gap-8'>
        {data.map(item => (
          <div className='shrink-0 sm:col-span-1 flex items-center gap-4 max-sm:min-w-[60%] snap-center' key={item.id}>
            <img src={item.img} alt="Free Shipping" className='h-10 w-10' />
            <div>
              <h4 className='text-sm font-semibold text-gray-900'>
                {item.title}
              </h4>
              <p className='text-xs text-gray-600'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;