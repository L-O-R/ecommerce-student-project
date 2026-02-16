import { useState } from "react";
import {NavLink,Link} from "react-router-dom";
import Button from "../../components/common/Button.jsx";

const Signin = () => {
    const[email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [remember,setRemember] = useState(false);
    
const userData = {
    email,
    password
};
localStorage.setItem("registeredUser" , JSON.stringify(userData));

const handleSubmit = (e) => {
    e.preventDefault();
   
    const storedUser = JSON.parse(localStorage.getItem("regsiteredUser"));
    if(!storedUser) {
        alert("User Not Found,Please Register");
        return;
    }
    
    if (email === storedUser.email && password === storedUser.password){
        alert("Login Successful")
    }
     const loginData = {email};

   if (remember) {
    localStorage.setItem("user", JSON.stringify(loginData));
      } 
    else {
    sessionStorage.setItem("user", JSON.stringify(loginData));
    }
    console.log("Invalid Email & Password");

};

    return (
        <div className=" flex items-center justify-center bg-white px-4 py-16">
            <div className="rounded-2xl shadow-[0px_0px_56px_#00260314] p-10">

            <h1 className="text-center mb-8 text-4xl font-semibold text-gray-9" >
            Sign In
            </h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
                  <label htmlFor="email" className="hidden">email</label>
                  <input 
                   type = "email"
                   placeholder="Enter Your Email"
                   value={email}
                   id="email"
                   name="email"
                   onChange={(e) => setEmail(e.target.value)}
                   required
                   className="w-full p-4 outline outline-gray-1 rounded-xl hover:outline-gray-9 transition duration-200"
                   />
                   <label  htmlFor="email" className="hidden">password</label>
                   <input
                     type = "password" 
                     placeholder="Enter Your Password"
                     value={password}
                     id="password"
                     name="password"
                     onChange={(e) => setPassword(e.target.value)}
                     required
                     className="w-full p-4 outline outline-gray-1 rounded-xl hover:outline-gray-9 transition duration-200"
                   />
                    <div className="flex items-center justify-between mt-4">
                        <label htmlFor="remember" className="flex items-center gap-2 cursor-pointer">
                        <input
                        type="checkbox"
                        checked={remember}
                        id="remember"
                        onChange={() => setRemember(!remember)}
                        className="w-4 h-4 "
                        />
                        <span className=" text-sm sm:text-lg text-gray-6">Remember Me</span>
                       </label>
                        <Link
                           to = "/forgotpassowrd"
                           className="text-sm sm:text-lg text-gray-6 hover:underline ">
                           Forgot Password?  
                        </Link> 
                    </div>

                   <Button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-4xl text-lg font-semibold hover:bg-hard-primary transition duration-200"
                    >
                     Login
                    </Button>

            </form>
                <p className="text-center mt-6 text-gray-6">Don’t have account?
                   <NavLink 
                     to = "/register"
                     className="font-semibold text-black" 
                    > 
                    Register
                   </NavLink>
                </p>
            </div>
        </div>
    )
};

export default Signin;
