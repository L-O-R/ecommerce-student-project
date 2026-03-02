import React, { useState, useEffect } from 'react';

const CommentSection = () => {
    // State for form inputs
    const [formData, setFormData] = useState({ name: '', email: '', message: '', saveMe: false });

    // State for comments - initializes from LocalStorage
    const [comments, setComments] = useState(() => {
        const saved = localStorage.getItem('shopery_comments');
        return saved ? JSON.parse(saved) : [];
    });
    // 1. New State to control how many comments are visible
    const [visibleCount, setVisibleCount] = useState(3);

    const handleLoadMore = () => {
        // Increase the count by 3 every time the button is clicked
        setVisibleCount(prevCount => prevCount + 3);
    };

    // Sync with LocalStorage whenever comments change
    useEffect(() => {
        localStorage.setItem('shopery_comments', JSON.stringify(comments));
    }, [comments]);

    const handlePostComment = (e) => {
        e.preventDefault();
        // 1. Validation: Check if fields are empty
        if (!formData.name.trim()) {
            alert("Please enter your Full Name.");
            return; // Stop the function here
        }

        if (!formData.email.trim()) {
            alert("Please enter your Email address.");
            return;
        }

        if (!formData.message.trim()) {
            alert("Please write a message before posting.");
            return;
        }
        if (!formData.name || !formData.message) return;

        const newComment = {
            id: Date.now(),
            name: formData.name,
            date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
            message: formData.message,
            // Using a UI avatar to match the Figma profile pictures
            avatar: `https://ui-avatars.com/api/?name=${formData.name}&background=random`
        };

        setComments([newComment, ...comments]);
        setFormData({ name: '', email: '', message: '', saveMe: formData.saveMe });
    };

    return (
        <div className="max-w-[872px] mx-auto p-8 font-sans text-black  ml-12">
            {/* FORM SECTION */}
            <h2 className="text-2xl font-semibold mb-6">Leave a Comment</h2>
            <form onSubmit={handlePostComment} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            placeholder="Zakir Hossen"
                            className="border border-gray-200 rounded-lg p-3 outline-none focus:border-[#00B207]"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="zakirsoft.20@gmail.com"
                            className="border border-gray-200 rounded-lg p-3 outline-none focus:border-[#00B207]"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                        placeholder="Write your comment here..."
                        className="border border-gray-200 rounded-lg p-3 h-32 outline-none focus:border-[#00B207] resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <input
                        type="checkbox"
                        id="save"
                        className="accent-primary"
                        checked={formData.saveMe}
                        onChange={(e) => setFormData({ ...formData, saveMe: e.target.checked })}
                    />
                    <label htmlFor="save">Save my name and email in this browser for the next time I comment.</label>
                </div>

                <button
                    type="submit"
                    className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-gray-7 transition-colors cursor-pointer"
                >
                    Post Comments
                </button>
            </form>

            {/* CONDITIONAL COMMENTS LIST: Only shows if comments.length > 0 */}
            {comments.length > 0 && (
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-8">Comments</h3>

                    <div className="space-y-8">
                        {comments.map((comment) => (
                            <div key={comment.id} className="flex gap-4">
                                <img
                                    src={comment.avatar}
                                    alt={comment.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold text-gray-9">{comment.name}</span>
                                        <span className="text-gray-4 text-xs">• {comment.date}</span>
                                    </div>
                                    <p className="text-gray-6 text-sm leading-relaxed">
                                        {comment.message}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* 3. Only show "Load More" if there are more comments left to see */}
                    {visibleCount < comments.length && (

                        <button
                            onClick={handleLoadMore}
                            className="mt-8 border-2 border-primary text-primary px-10 py-2.5 rounded-full font-bold hover:bg-green-100 transition-colors block mx-auto md:mx-0 cursor-pointer">
                            Load More
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default CommentSection;