import Blogs from "../../data/blogList.json";
import BlogSidebar from "./BlogSidebar";

const BlogCard = () => {
  return (
    // PAGE WRAPPER (Controls left & right padding)
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT SIDEBAR */}
        <section className="w-full lg:basis-[30%]">
          {/* Sidebar Component */}
          <BlogSidebar/>
        </section>

        {/* RIGHT CONTENT */}
        <section className="w-full lg:basis-[70%]">

          {/* ===== Sort + Results Row ===== */}
          <div className="flex items-center justify-between mb-8">

            {/* Sort */}
            <div className="flex items-center gap-3">
              <label className="text-base font-medium text-gray-600">
                Sort by:
              </label>

              <select className="border border-gray-300 py-1 px-3 rounded-md text-sm">
                <option>Latest</option>
                <option>Oldest</option>
              </select>
            </div>

            {/* Results */}
            <p className="text-base font-medium text-gray-600">
              <span className="font-semibold text-black">
                {Blogs.length}
              </span>{" "}
              Results found
            </p>

          </div>

          {/* ===== Cards Grid ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {Blogs.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

               
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {item.title}
                  </h3>

                  <a
                    href="#"
                    className="mt-auto inline-flex items-center gap-2 text-primary font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}

          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogCard;