const ContactMap = () => {
    return (
        <div className="w-full h-[250px] mt-16 overflow-hidden">
            <iframe
                title="Google Map "
                /* Updated src for Pune, Maharashtra */
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156046!2d73.78056541333333!3d18.524545213333335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67414521%3A0x686e79a91767f223!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full grayscale contrast-125"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"

            ></iframe>
        </div>
    );
};

export default ContactMap;