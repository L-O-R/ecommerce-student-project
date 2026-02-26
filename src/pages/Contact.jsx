import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactMap from "../components/contact/ContactMap";

const Contact = () => {
    return (
        <div className="contact-page p-3 md:p-8 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                <div className="col-span-1   order-2 md:order-1">
                    <ContactInfo />
                </div>
                <div className="col-span-1 md:col-span-2 order-1 md:order-2">
                    <ContactForm />
                </div>
            </div>
            <div className="mt-8">
                <ContactMap />
            </div>
        </div>
    );
};

export default Contact;
