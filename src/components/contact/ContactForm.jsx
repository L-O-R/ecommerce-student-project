const ContactForm = () => {
    return (
        <div className="bg-white rounded-lg  border border-white p-8 w-full transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-9 mb-2">Just Say Hello!</h2>
            <p className="text-gray-6 text-sm mb-6">
                Do you fancy saying hi to me or you want to get started with your <br className="hidden md:block" />
                project and you need my help? Feel free to contact me.
            </p>

            <form className="space-y-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Template Cookie"
                        className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                    <input
                        type="email"
                        placeholder="zakirsoft@gmail.com"
                        className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                </div>


                <input
                    type="text"
                    placeholder="Hello!"
                    className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />

                {/* Third Row: Message (Textarea) */}
                <textarea
                    placeholder="Subjects"
                    rows="4"
                    className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>

                {/* Button */}
                <button
                    type="submit"
                    className="bg-primary hover:bg-primary text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;