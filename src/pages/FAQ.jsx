import image1 from "../assets/images/image.png";
const data =

    [
        {
            "id": 1,
            "question": "What is your return policy?",
            "answer": "You can return unused products within 30 days of purchase with the original receipt and packaging."
        },
        {
            "id": 2,
            "question": "Do you offer international shipping?",
            "answer": "Yes, we ship internationally. Delivery time and charges vary depending on the destination country."
        },
        {
            "id": 3,
            "question": "How can I track my order?",
            "answer": "After your order is shipped, you will receive a tracking link via email to monitor the delivery status."
        },
        {
            "id": 4,
            "question": "Can I cancel my order after placing it?",
            "answer": "Orders can be canceled within 24 hours of placing them. Please contact customer support immediately."
        },
        {
            "id": 5,
            "question": "What payment methods do you accept?",
            "answer": "We accept credit cards, debit cards, UPI, net banking, and major digital wallets."
        }

    ]


const FAQ = () => {
    return (
        <section className="flex flex-col sm:flex-row gap-6 py-10  px-14 md:25 lg:px-30">
            <div className="flex-1 flex flex-col gap-6 ">
                <h2 className="text-4xl md:text-5xl font-bold py-4">Welcome, Let’s Talk About Our Ecobazar</h2>

                <div className="flex flex-col gap-4">
                    {data.map((item) => {
                        return (
                            <details key={item.id} className="cursor-default group border border-gray-300 rounded-lg  bg-gray-05 shadow-sm open:shadow-md open:border-soft-primary open:bg-white transition-shadow duration-300 ">
                                <summary className="text-base font-medium group-open:text-hard-primary group-open:border-b border-soft-primary py-3 px-3 flex justify-between">
                                    {item.question}
                                   <span className=" text-base font-medium rounded-full bg-white group-open:bg-gray-05 group-open:text-black w-6 h-6 text-center flex justify-center items-center">+</span>
                                </summary>
                                <p className="py-3 px-3 group-open:text-gray-6">{item.answer}</p>
                            </details>
                        )
                    }

                    )}

                </div>
            </div>
            <div className="flex-1">
                <img 
                    src={image1} 
                    alt="image 1"
                    className="w-[400px] h-[350px]  md:w-[800px] md:h-[400px] lg:w-[550px] lg:h-[550px]" 
                />
            </div>
        </section>
    );
};

export default FAQ;
