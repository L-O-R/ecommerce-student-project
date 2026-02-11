import { useState} from "react";
import testData from "../../data/testimonial.json";


const ClientTestimonials = () => {
  const section = testData[0].section;
  const testimonials = testData[0].testimonials;

  let itemsPerView = 3;
  let [index, setIndex] = useState(0);

  if(window.innerWidth <= 1040 && window.innerWidth >= 540){
    itemsPerView = 2
  }else if(window.innerWidth <= 540){
    itemsPerView = 1
  }


  const handleNext = () => {
  if (index < testimonials.length - itemsPerView) {
    setIndex(prev => prev + 1);
  }
};

const handlePrev = () => {
  if (index > 0) {
    setIndex(prev => prev - 1);
  }
};


  return (
    <section className="layout py-16 bg-gray-05 ">
      <header className="flex flex-wrap sm:flex-nowrap items-center justify-between mb-10 gap-6">
        <h2 className="text-3xl font-semibold">
          {section.title}
        </h2>

        <div className="flex gap-3 ">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className="w-[45px] h-[45px] flex items-center justify-center  border rounded-full disabled:opacity-40 hover:bg-hard-primary"
          >
            <img
              src={section.icons.arrowLeft}
              className="w-4  "
              alt="prev"
            />
          </button>
          <button
            onClick={handleNext}
            disabled={index >= testimonials.length - itemsPerView}
            className="w-[45px] h-[45px] flex items-center justify-center border rounded-full disabled:opacity-40 hover:bg-hard-primary"
          >
            <img
              src={section.icons.arrowRight}
              className="rotate-180 w-4"
              alt="next"
            />
          </button>
        </div>
      </header>
      
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
  transform: `translateX(calc(-${index} * (100% / ${itemsPerView})))`
}}

        >


          {testimonials.map(item => (
            <div className="sm:px-4 w-full sm:w-1/2 lg:w-1/3 shrink-0">
            <div
              key={item.id}
              className="h-[340px] sm:h-[300px] lg:h-[254px] p-6 rounded-lg bg-white flex justify-center flex-col"
            >
              
              <img
                src={section.icons.quote}
                alt="quotation"
                className="w-8 mb-4"
              />

              
              <p className="text-gray-7 text-sm leading-relaxed mb-6">
                {item.message}
              </p>

              
              <div className="flex items-center justify-between">
                <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-4">
                      {item.role}
                    </p>
                  </div>
                </div>

                
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="text-warning">★</span>
                  ))}
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;