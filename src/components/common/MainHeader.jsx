import { useState } from "react";
import { Link } from "react-router-dom";
import { auth_navlinks,header_navlinks} from "../../utils/constants";
import location from "../../assets/icons/location.png";
import logo from "../../assets/logos/headerlogo.png";
import search from "../../assets/icons/searchicon.png";
import heart from "../../assets/icons/hearticon.png";
import bag from "../../assets/icons/bagicon.png";
import phone from "../../assets/icons/phoneicon.png";



const MainHeader = () => {
  const [language,setValue] = useState("Eng");
  const [currency,setCurrency] = useState("USD");
  const [openDropdown, setOpenDropdown] = useState(null);

  

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  

  return (
  <header>
{/* 1st section of header  */}
    <div className=" text-gray-3 bg-gray-8 py-4 w-full px-8 sm:px-12 md:px-18 lg:px-22 xl:px-24 hidden lg:flex items-center justify-between  ">
      <div className="flex items-center gap-2 hover:text-white transition duration-200 cursor-pointer">
          <img src={location} alt="location" width={"auto"} height={"auto"} loading="eager" fetchPriority="high"/>
        <div>
          <h4 className="text-sm">Store Location: Lincoln- 344, Illinois, Chicago, USA</h4>
        </div>
      </div>
      <div className=" flex gap-6 items-center">
        <div className="text-sm space-x-2">
            <select className="bg-gray-8 hover:text-white transition duration-200 cursor-pointer"  
             value={language} onChange={(e) => setValue(e.target.value)}>
             <option value="en">Eng</option>
             <option value="Hi">Hin</option>
             <option value="Fr">Fr</option>
             <option value="it">It</option>
            </select>  
            <select className="bg-gray-8 hover:text-white transition duration-200 cursor-pointer" 
            value={currency} onChange={(e) => setCurrency(e.target.value)}>
             <option value="usd">USD</option>
             <option value="inr">INR</option>
             <option value="eur">EUR</option>
             <option value="gbp">GBP</option>
           </select>
        </div>   
    
        <span>|</span>
            <div className="flex gap-3">
             {auth_navlinks.map((item) => (
                <Link
                key={item.id}
                to={`/${item.link}`}
                className="text-sm capitalize hover:text-white transition duration-200 cursor-pointer"
                >
                {item.name}
                </Link>
              ))}
            </div>
             </div>
    </div>
     
{/* 2nd section of header */}
    <div className=" hidden lg:flex my-5 w-full px-8 sm:px-12 md:px-18 lg:px-22 xl:px-24 flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <img src={logo} alt="logo" loading="eager"  width={"auto"} height={"auto"} fetchPriority="high"
         className="w-8 h-6"/>
        <h3 className="text-green-gray-9 text-3xl font-semibold">Ecobazar</h3>
      </div>
      <div className="flex flex-row items-center">
         <div className="relative ">
           <img src={search} alt="search" loading="eager" fetchPriority="high"
             className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
             />
            <input type="search" placeholder="Search" 
            className="py-3 pl-12 pr-5 w-80  border hover:outline outline-primary"/>
         </div>
         <button className="bg-primary text-white rounded-r py-3.5 px-6">Search</button>
      </div>
      <div className="flex flex-row gap-5">
        <img src={heart} alt="heart" loading="eager" fetchPriority="high"
         className="object-contain"/>
         <span className="w-[2px] h-8 bg-gray-2"></span>
        <img src={bag} alt="bag"  loading="eager" fetchPriority="high"
         className="object-contain"/>
        <div>
           <p className="text-gray-7">Shopping cart:</p>
           <p className="text-gray-9 font-semibold">$57.00</p>  
        </div> 
      </div>
    </div>
{/* 3rd section of header */}
    <div className="bg-gray-8  text-gray-3 w-full px-8 sm:px-12 md:px-18 lg:px-22 xl:px-24 flex flex-row justify-between items-center">
      <nav className="hidden lg:flex items-center gap-12 py-5 text-gray-3 text-3.5 font-semibold">
          {header_navlinks.map((item) => (
          <div key={item.id} className="relative">

            {/* Main Link */}
            {item.submenu ? (
              <button
                onClick={() => toggleDropdown(item.id)}
                onMouseEnter={()=> toggleDropdown(item.id)}
                onMouseLeave={()=> setOpenDropdown(false)}
                className="flex items-center gap-1 text-gray-3 hover:text-white transition duration-200"
              >
                <span className="leading-5 ">
                {item.name}
                </span>
                <span>
                  <svg 
                  className={`w-3 h-3 mt-1 object-contain transition-all duration-200 ease-in-out ${
                openDropdown === item.id ? "-rotate-90" : ""
                 }`}
                  
                  width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.750011 0.75L5.41668 5.41667L10.0833 0.75" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

              </span>
              </button>
            ) : (
              <Link
                to={item.link}
                className="hover:text-white transition"
              >
                {item.name}
              </Link>
            )}

            {/* Dropdown Menu */}
            {item.submenu && openDropdown === item.id && (
              <div className="absolute left-0 mt-4 bg-gray-8  rounded-md shadow-lg min-w-[180px] z-50">
                {item.submenu.map((sub) => (
                  <Link
                    key={sub.id}
                    to={sub.link}
                    className="block px-4 py-2 text-sm hover:bg-gray-8 hover:text-white transition duration-200 cursor-pointer "
                    onClick={() => setOpenDropdown(null)}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}

          </div>
        ))}
      </nav>
         <div className="hidden lg:flex flex-row items-center gap-1.5 text-white">
         <img src={phone} alt="phone" loading="eager" fetchPriority="high"/>
          <Link to={'tel:2195550114'}>(219) 555-0114</Link>
         </div>
  </div>  
  
  
</header>
  );
};

export default MainHeader;
