import { Link } from "react-router-dom";
import logo from "../../assets/logos/headerlogo.png";
import { Account_navlinks, Helps_navlinks, Proxy_navlinks, Categories_navlinks, Images_navlinks } from "../../utils/constants";


const MainFooter = () => {
  return (
    <footer className="bg-gray-9 pt-20 pb-10 space-y-8 w-full px-8 sm:px-12 md:px-18 lg:px-22 xl:px-24">
      {/* Top Section */}
      <div className="  flex flex-col lg:flex-row gap-12 lg:gap-20 md:flex-nowrap justify-between">
        {/* footer logo  */}
        <div className="lg:w-1/3 space-y-5 basis-[30%]">
          <div className="flex flex-row items-center gap-2.5">
            <img src={logo} alt="logo" loading="eager" width={"auto"} height={"auto"} fetchPriority="high"
              className="w-8 h-6" />
            <h3 className="text-white text-3xl font-semibold">Ecobazar</h3>
          </div>
          <p className="text-gray-5 mt-3 font-medium max-w-84">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
          
          <div className="text-white flex flex-row gap-4 mt-5">
            <span className="underline decoration-2 decoration-primary underline-offset-8">(219) 555-0114</span>
            <p className="text-gray-5">or</p>
            <span className="underline decoration-2 decoration-primary underline-offset-8">Proxy@gmail.com</span>
          </div>
        </div>
        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 w-full basis-[70%] justify-between">
          {/* Account */}
          <div className="space-y-4">
            <h3 className="text-white">My Account</h3>
            <ul className="space-y-4">
              {Account_navlinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/${item.link}`}
                    className="text-gray-5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Helps */}
          <div className="space-y-4">
            <h3 className="text-white">Helps</h3>
            <ul className="space-y-4">
              {Helps_navlinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/${item.link}`}
                    className="text-gray-5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Proxy */}
          <div className="space-y-4">
            <h3 className="text-white">Proxy</h3>
            <ul className="space-y-4">
              {Proxy_navlinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/${item.link}`}
                    className="text-gray-5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-white">Categories</h3>
            <ul className="space-y-4">
              {Categories_navlinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/${item.link}`}
                    className="text-gray-5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    
       {/*2nd Footer Section*/}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-gray-5 text-sm text-center md:text-left">Ecobazar eCommerce © 2021. All Rights Reserved</p>
          
            <ul className="flex items-center gap-4">
              {Images_navlinks.map((item) => (
             <li key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-10 gap-2 object-contain opacity-80 border rounded-sm outline-gray-3 hover:opacity-100 transition duration-200"
              />
             </li>
             ))}
            </ul>
        </div>  
  
   </footer>
  )

};

export default MainFooter;
