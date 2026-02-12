import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactMap from "../components/contact/ContactMap";

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <ContactInfo />
                </div>
                <div className="col-span-2">
                    <ContactForm />
                </div>
            </div>
            <ContactMap />
        </div>
    );
};

export default Contact;
