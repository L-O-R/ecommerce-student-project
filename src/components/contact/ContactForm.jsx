import { useState } from "react";

const ContactForm = () => {
    // 1. Initialize state for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''

    });
    // 2. Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // 3. Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Get existing data from localStorage or create an empty array
        const existingData = JSON.parse(localStorage.getItem('contactSubmissions')) || [];

        // Add new submission to the array
        const updatedData = [...existingData, { ...formData, id: Date.now() }];

        // Save back to localStorage
        localStorage.setItem('contactSubmissions', JSON.stringify(updatedData));

        alert('Message saved to local storage!');

        // Optional: Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });

    };



    return (
        <div className="bg-white rounded-lg  border border-gray-2 p-8 w-full transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-9 mb-2">Just Say Hello!</h2>
            <p className="text-gray-6 text-sm mb-6">
                Do you fancy saying hi to me or you want to get started with your <br className="hidden md:block" />
                project and you need my help? Feel free to contact me.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name" // CHANGE 2: Added name
                        value={formData.name} // CHANGE 3: Added value
                        onChange={handleChange} // CHANGE 4: Added onChange
                        placeholder="Template Cookie"
                        className="w-full border border-gray-2 rounded-md p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="zakirsoft@gmail.com"
                        className="w-full border border-gray-2 rounded-md p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                </div>


                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Hello!"
                    className="w-full border border-gray-2 rounded-md p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />

                {/* Third Row: Message (Textarea) */}
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Subjects"
                    rows="4"
                    className="w-full border border-gray-2 rounded-md p-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>

                {/* Button */}
                <button
                    type="submit"
                    className=" w-full md:w-auto bg-primary hover:bg-primary text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:cursor-pointer"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;