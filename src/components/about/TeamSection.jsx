import { useState } from "react";
import arrowLeft from "../../assets/icons/arrow.png";
import arrowRight from "../../assets/icons/arrow.png";
import member1 from "../../assets/images/Teammember1.png";
import member2 from "../../assets/images/Teammember2.png";
import member3 from "../../assets/images/Teammember3.png";
import member4 from "../../assets/images/Teammember4.png";
import facebook from '../../assets/icons/facebookimg.png';
import twitter from "../../assets/icons/twitterimg.png";
import pinterest from "../../assets/icons/pinterestimg.png";
import instragram from "../../assets/icons/instragramimg.png";
import { Link } from "react-router-dom";

const teamImages_navlinks = [
    {
       id:"1",
       image:member1,
       name:"Jenny Wilson",
       position:"Ceo & Founder",
       faceBook:"link #",
       twitter:"link #",
       pinterest:"link #",
       instragram:"link #",
    },
    {
        id:"2",
        image:member2,
        name:"Jane Cooper",
        position:"Worker",
    },
    {
        id:"3",
        image:member3,
        name:"Cody Fisher",
        position:"Security Guard",
    },
    {
        id:"4",
        image:member4,
        name:"Robert Fox",
        position:"Senior Farmer Manager",
    },
    {
        id:"5",
        image:member1,
        name:"John Doe",
        position:"Junior Manager",
    },
    {
        id:"6",
        image:member2,
        name:"Albert",
        position:"coworker",
    },
]
const TeamSection= () => {
  const teammember = teamImages_navlinks;
  const[index, setIndex] = useState(0); 
 
  let itemsPerView = 4;
 if(window.innerWidth <= 1040 && window.innerWidth >= 540){
    itemsPerView = 3
  }else if(window.innerWidth <= 540){
    itemsPerView = 1
  }


 const handleNext = () => {
    console.log(index < teammember.length - itemsPerView)
  if (index < teammember.length - itemsPerView) {
    setIndex(prev => prev + 1);

  }
};

const handlePrev = () => {
  if (index > 0) {
    setIndex(prev => prev - 1);
  }
};
return (
    <section className="bg-linear-to-180 from-gray-05 to-white my-20 layout relative">
        <header className=" flex flex-col text-center justify-center">
                <h2 className="text-gray-9 text-3xl font-semibold mt-8">Our Awesome Team</h2>
                <p className="text-md text-gray-6 max-w-lg mx-auto">
                   Pellentesque a ante vulputate leo porttitor luctus sed eget eros. 
                   Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.
                </p>  
        </header>
       
        <div className="relative flex overflow-x-hidden mt-10 transition-all duration-500 ease-linear">
            


            {/* cards */}
             {teamImages_navlinks.slice(index, index + itemsPerView).map((item) => (
                <div className="shrink-0 w-full sm:w-1/3 lg:w-1/4 sm:px-4">
                <div
                    key={item.id}
                   className=" group rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
                >
                  <div className="relative">
                <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-60 object-cover"
                />
                <div className="bg-black/40 backdrop-blur-[1px] absolute -top-100  group-hover:top-0 left-0 w-full h-full flex items-center justify-center gap-3 text-white">
                  <Link to= {item?.faceBook}>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary transition duration-200 cursor-pointer">
                  <img src={facebook} alt="facebook"/>
                  </div>
                  </Link>
                   <Link to= {item?.twitter}>
                   <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary transition duration-200 cursor-pointer">
                  <img src={twitter} alt="twitter"/>
                  </div> 
                  </Link>
                   <Link to= {item?.pinterest}>
                   <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary transition duration-200 cursor-pointer">
                  <img src={pinterest} alt="pinterest"/>
                  </div>
                  </Link>
                   <Link to= {item?.instragram}>
                   <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary transition duration-200 cursor-pointer">
                  <img src={instragram} alt="instragram"/>
                  </div>
                  </Link>
                   
                </div>
                </div>
                <div className="pl-5 my-5 gap-5">
                  <h3 className="text-md font-medium ">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.position}</p>
               </div>
               </div>
              </div>
               
               ))}
        </div>


        
                    {/* perivious btn */}
            <button
                onClick={handlePrev}
                disabled={index === 0}
                className="absolute left-8 top-[60%] w-[45px] h-[45px] flex items-center justify-center border rounded-full outline outline-gray-100 hover:bg-gray-4 disabled:hidden cursor-pointer"
                >
                <img
                 src={arrowRight}
                 className=" w-4"
                 alt="next"
                 />
               </button>


                    {/* next btn */}
            <button
                onClick={handleNext}
                disabled={index >= teammember.length - itemsPerView}
                className="absolute right-12 top-[60%] w-[45px] h-[45px] flex items-center justify-center border rounded-full outline outline-gray-100 hover:bg-gray-4 disabled:hidden cursor-pointer"
                >
                <img
                 src={arrowRight}
                 className="rotate-180 w-4"
                 alt="next"
                 />
               </button>



            
    </section>
    )
};


export default TeamSection;