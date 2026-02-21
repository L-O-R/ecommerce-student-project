import newsData from "../../data/blogs.json";

const LatestNews = () => {
  return (
    <section className="py-16 bg-white">
      <div className=" layout">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover "
                />

                
                <div className="absolute bottom-4 left-4 bg-white rounded-md px-3 py-2 text-center shadow">
                  <p className="text-lg font-bold leading-none">
                    {item.date.day}
                  </p>
                  <p className="text-xs uppercase text-gray-5">
                    {item.date.month}
                  </p>
                </div>
              </div>

              
              <div className="p-6">
                
                <div className="flex items-center gap-4 text-sm text-gray-6 mb-4 flex-wrap">
                  {item.meta.map((metaItem, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1"
                    >
                      <img
                        src={metaItem.icon}
                        alt=""
                        className="w-4 h-4"
                      />
                      <span>{metaItem.label}</span>
                    </div>
                  ))}
                </div>

                
                <h3 className="text-lg font-semibold text-gray-9 mb-4 leading-snug hover:text-hard-primary transition-colors">
                  {item.title}
                </h3>

                
                <a
                  href={item.readMoreLink}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Read More
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
