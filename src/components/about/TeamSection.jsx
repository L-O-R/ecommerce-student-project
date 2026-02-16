import member1 from "../../assets/images/Teammember1.png";
import member2 from "../../assets/images/Teammember2.png";
import member3 from "../../assets/images/Teammember3.png";
import member4 from "../../assets/images/Teammember4.png";

const teamImages_navlinks = [
    {
       id:"1",
       image:member1,
       name:"Jenny Wilson",
       position:"Ceo & Founder",

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
]

const TeamSection = () => {
    return (
        <div className="bg-linear-to-180 from-gray-05 to-white my-20">
            <div className="px-16 flex flex-col text-center justify-center">
                <h2 className="text-gray-9 text-3xl font-semibold mt-8">Our Awesome Team</h2>
                <p className="text-md text-gray-6 gap-12">
                   Pellentesque a ante vulputate leo porttitor luctus sed eget eros. 
                   Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.
                </p>  
            </div>
            <div className=" mt-16 flex justify-around gap-4">
                  {teamImages_navlinks.map((item) => (
              <div
                  key={item.id}
                  className="rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
                >
                 {/* Image */}
                <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover"
                />
   
               {/* Text Section */}
                <div className="pl-5 my-5 gap-5">
                  <h3 className="text-md font-medium ">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.position}</p>
               </div>
             </div>
             ))}
            </div>


            
        </div>
    )
}

export default TeamSection;