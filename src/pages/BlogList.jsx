import CommentSection from "../components/blog/CommentSection";
import Singleblog from "../components/blog/Singleblog";

const BlogList = () => {
    return (
        <div className="blog-list-page">

            <Singleblog />
            <CommentSection />
        </div>
    );
};

export default BlogList;
