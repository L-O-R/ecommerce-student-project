import applepay from "../assets/icons/applepayicon.png";
import visa from "../assets/icons/visaicon.png";
import discover from "../assets/icons/discovericon.png";
import mastercard from "../assets/icons/mastercardicon.png";


export const APP_NAME = 'E-Commerce Store';


export const auth_navlinks = [
    {
        id:"001",
        name:"signin",
        link:"signin",
    },
    {
        id:"002",
        name:"signup",
        link:"signup",

    },
];

export const header_navlinks = [
    {
        id:"001",
        name:"Home",
        link:"/"
    },
    {
        id:"002",
        name:"Shop",
        link:"/Shop",
        submenu:[
            {id:"10",name:"Fruits",link:"/Shop/Fruits"},
            {id:"20",name:"Vegetables",link:"/Shop/Vegetables"},
            {id:"30",name:"Snacks",link:"/Shop/Snacks"},
            {id:"40",name:"ShopGrid",link:"/Shop/ShopGrid"},
            {id:"50",name:"ShopList",link:"/Shop/ShopList"},
            {id:"60",name:"ProductDetails",link:"/Shop/ProductDetails"}   
            ],
        
    },
     {
        id:"003",
        name:"Pages",
        link:"/Pages",
        submenu:[
            {id:"10",name:"AboutUs",link:"/Pages/AboutUs"},
            {id:"20",name:"Contact",link:"/Pages/Contact"},
            {id:"30",name:"FAQ",link:"/Pages/FAQ"},
            {id:"40",name:"Login",link:"/Pages/Login"},
            {id:"50",name:"Register",link:"/Pages/Regsiter"},
        ],
        
    },
    {
        id:"004",
        name:"Blogs",
        link:"/Blogs",
        submenu:[
            {id:"10",name:"BlogGrid",link:"/Blogs/BlogGrid"},
            {id:"20",name:"BlogDetails",link:"/Blogs/BlogDetails"},
            {id:"30",name:"Recipe",link:"/Blogs/Recipe"},
            {id:"40",name:"HealthyTips",link:"/Blogs/HealthyTips"},
        ],
        
    },
    {
       id:"005",
       name:"About Us",
       link:"About Us",
    },
    {
        id:"006",
        name:"Contact Us",
        link:"Contact Us"
    }
   

   
];

export const Account_navlinks = [
    {
        id:"001",
        name:"My Account",
        link:"My Account",
    },
    {
        id:"002",
        name:"Order History ",
        link:"Order History",
    },
    {
        id:"003",
        name:"Shopping Cart",
        link:"Shopping cart",
    },
    {
        id:"004",
        name:"Wishlist",
        link:"Wishlist",
    },
];
export const Helps_navlinks = [
    {
        id:"001",
        name:"Contact",
        link:"Contact",
    },
    {
        id:"002",
        name:"FAQ",
        link:"FAQ",
    },
    {
        id:"003",
        name:"Terms & Condition",
        link:"Terms & Condition",
    },
    {
        id:"004",
        name:"Privacy Policy",
        link:"Privacy Policy",
    },
];
export const Proxy_navlinks = [
    {
        id:"001",
        name:"About",
        link:"About",
    },
    {
        id:"002",
        name:"Shop",
        link:"Shop",
    },
    {
        id:"003",
        name:"Product",
        link:"Product",
    },
    {
        id:"004",
        name:"Task Order",
        link:"Task Order",
    },
];
export const Categories_navlinks = [
    {
        id:"001",
        name:"Fruit & Vegetables",
        link:"Fruit & Vegetables",
    },
    {
        id:"002",
        name:"Meat & Fish",
        link:"",
    },
    {
        id:"003",
        name:"Bread & Bakery",
        link:"Bread & Bakery",
    },
    {
        id:"004",
        name:"Beauty & Health",
        link:"Beauty & Health",
    },
];
export const Images_navlinks = [
    {
        id:"001",
        name:"applepay",
        image:applepay,
    },
    {
        id:"002",
        name:"visa",
        image:visa,
    },
    {
        id:"003",
        name:"discover",
        image:discover,
    },
    {
        id:"004",
        name:"mastercard",
        image:mastercard,
    },
]

  