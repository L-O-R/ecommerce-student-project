import Map from "../../assets/icons/Map.svg";
import Group from "../../assets/icons/Group.svg";
import PhoneCall from "../../assets/icons/PhoneCall.svg";

const ContactInfo = () => {
    const infoData = [
        {
            icon: Map,
            text: "2715 Ash Dr. San Jose, South\nDakota 83475",
        },
        {
            icon: Group,
            text: "Proxy@gmail.com\nHelp.proxy@gmail.com",
        },
        {
            icon: PhoneCall,
            text: "(219) 555-0114\n(164) 333-0487",
        },
    ];

    return (
        /* The main card container */
        <div className="bg-white rounded-lg  border border-white p-8 max-w-sm mx-auto transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col items-center">
                {infoData.map((item, index) => (
                    <div key={index} className="w-full flex flex-col items-center text-center">
                        {/* Icon */}
                        <img src={item.icon} alt="icon" className="w-10 h-10 mb-4" />

                        {/* Text */}
                        <h3 className="text-gray-6 text-sm leading-relaxed whitespace-pre-line mb-4">
                            {item.text}
                        </h3>

                        {/* Divider - Only show if it's not the last item */}
                        {index !== infoData.length - 1 && (
                            <hr className="w-full border-gray-100 mb-6" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactInfo;
