import { NavLink } from "react-router-dom";
import dashboard from "../../assets/icons/dashboardicon.png";
import order from "../../assets/icons/ordericon.png";
import wishlist from "../../assets/icons/wishlisticon.png";
import shopping from "../../assets/icons/shoppingbagicon.png";
import setting from "../../assets/icons/settingicon.png";
import logout from "../../assets/icons/logouticon.png";


const DashboardSidebar = () => {
    const navItems = [
        { name: "Dashboard", path: "/dashboard", icon: dashboard },
        { name: "Order History", path: "/user/orders", icon: order },
        { name: "Wishlist", path: "/wishlist", icon: wishlist },
        { name: "Shopping Cart", path: "/cart", icon: shopping },
        { name: "Settings", path: "/settings", icon: setting },
        { name: "Log-out", path: "/logout", icon: logout },
    ];

    return (
        <div className="w-64 h-fit border border-gray-200 rounded-lg p-5 bg-white">

            <h2 className="text-lg font-semibold mb-4">
                Navigation
            </h2>

            <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded-md transition 
                ${isActive
                                    ? "bg-green-50 text-green-600 font-medium"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`
                            }
                        >
                            <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                            <span>{item.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>

        </div>
    );
};
export default DashboardSidebar;