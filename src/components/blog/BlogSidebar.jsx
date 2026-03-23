const categories= [
    {
        id: 1, 
        name: "Fresh Fruit", 
        quantity : "(134)"

    }, 
    {
        id: 2, 
        name : "Vegetables",
        quantity: "(150)"

    }, 
    {
        id: 3,
        name: "Cooking",
        quantity: "(54)"


    },
    {
        id: 4,
        name: "Snacks",
        quantity: "(47)"

    }, 
    {
        id: 5,
        name: "Bevarages",
        quantity: "(43)"

    },
    {
        id: 6,
        name: "Beauty & Health",
        quantity: "(38)"

    }, 
    {
        id: 7,
        name: "Bread & Bakery",
        quantity: "(15)"

    }


]

const tags = [
    {
        id: 1,
        name: "Healthy"
    },
    {
        id: 2,
        name: "Low Fat"
    },
    {
        id: 3,
        name : "Vegetarian"
    },
    {
        id: 4,
        name : "Bread"
    },
    {
        id: 5,
        name : "Kid Foods"
    },
    {
        id: 6,
        name: "Vitamins"
    },
    {
        id: 7,
        name: "Snacks"
    },
    {
        id: 8,
        name: "Tiffin"
    }, 
    {
        id: 9,
        name: "Meat"
    },
     {
        id: 10,
        name: "Lunch"
     }, 
     {
        id: 11,
        name: "Dinner"
     }
      

]

const gallery= [
    {
        id: 1, 
        img : "/images/Blog/brocoli.png",
    },
    {
        id: 2, 
        img: "/images/Blog/mixedVeggies.png"
    } , 
    {
        id: 3,
        img: "/images/Blog/peas.png"
    },
    {
        id: 4,
        img: "/images/Blog/brocoli.png"
    },
    {
        id: 5, 
        img: "/images/Blog/turnip.png"
    }, 
    {
        id: 6,
        img: "/images/Blog/capsicum.png"
    }, 
    {
        id: 7,
        img: "/images/Blog/carrot.png"
    }, 
    {
        id: 8,
        img: "/images/Blog/capsicum.png"
    }
]

const added = [
    {
        id: 1, 
        img: "/images/Blog/mangoSlice.png", 
        content: "Curabitur porttitor orci eget nequ accumsan.",
        date: "Apr 25, 2021",
        icon: "/images/Blog/dateIcon.png"

    }, 
    {
        id: 2, 
        img: "/images/Blog/mangoSlice.png",
        content: "Donec mattis arcu faucibus suscipit viverra.", 
        date: "Apr 25, 2021",
        icon: "/images/Blog/dateIcon.png"

    }, 
    {
        id: 3,
        img: "/images/Blog/mangoSlice.png", 
        content: "Quisque posuere tempus rutrum. Integer velit ex." , 
        date: "25 Apr 2021",
        icon: "/images/Blog/dateIcon.png"

    }, 
]
    


const BlogSidebar = () => {

    return ( 
    <aside>
        <div className="flex gap-2 px-3 py-4 ">
        <p className="text-white bg-primary px-6 py-1 rounded-2xl">Filter</p>
        <img src="/images/Blog/filterIcon.png" alt="image"
        className="w-5 h-5" />
        </div>
    <div className="flex gap-4">

        {/*side bar*/}
        <div className="flex flex-col gap-5">
            <input type="search"  placeholder="search..."
            className="border border-b-gray-5 rounded-2xl py-2 px-2 "/>
            <hr className="text-gray-5 py-2"/>
            <h2 className="text-lg font-medium font-poppins">Top Categories</h2>
            <ul className= "flex flex-col gap-4">
                {categories.map((item)=>{
                    return(
                        <li key= {item.id} className="flex justify-between">
                            <p className=" font-poppins">
                                {item.name}
                            </p>
                            <p className="text-gray-5">{item.quantity}</p>
                        </li>
                    )

                })}
            </ul>
            <hr 
            className="text-gray-5 py-2"/>
            <h2 className="text-lg font-medium font-poppins py-2">Popular Tag</h2>
            <ul className= "flex flex-wrap gap-2 ">
                {tags.map((item)=>{
                    return(
                        <li key= {item.id}
                        className="bg-gray-05 rounded-2xl px-2 py-1 text-lg hover:text-white hover:bg-primary
                        transition ease-in-out">
                            {item.name}
                        </li>
                    )

                })}
            </ul>
            <h2 className="text-lg font-medium font-poppins pt-6    ">Our Gallery</h2>
            <ul className="grid grid-cols-4 gap-2 grid-rows-2">
                {gallery.map((item)=>{
                    return(
                    <li
                    key = {item.id}>
                        <img src={item.img} alt="image" />
                    </li>
                    )


                })}
            </ul>
            <h2 className="text-lg font-medium font-poppins pt-4"> Recently Added</h2>
            <ul className="flex flex-col gap-4 py-2">
                {
                    added.map((item)=>{
                        return(
                            <li key= {item.id}>
                                <div className="flex gap-2">
                                    <img src={item.img} alt="image" />
                                    <div>
                                        <h4 className="text-sm font-bold font-poppins">{item.content}</h4>
                                        <div className="flex gap-2">
                                        <img src={item.icon} className="w-4 h-4 "
                                        alt="image" />
                                       <p> {item.date}</p>
                                       </div>

                                    </div>
                                </div>
                            </li>
                        )

                    })
                }
            </ul>

            </div>

        </div>

    



    </aside>
    )
};

export default BlogSidebar;
