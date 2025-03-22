import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Maximize Your Global Reach: Importing Simplified",
    category: "Importing Tips",
    date: "March 20, 2025",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 2,
    title: "How Globit Builds Trust with Partners Worldwide",
    category: "Partnerships",
    date: "March 15, 2025",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 3,
    title: "Top Logistics Strategies to Streamline Your Imports",
    category: "Logistics",
    date: "March 10, 2025",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 4,
    title: "Quality Assurance: How We Vet Our Products",
    category: "Quality Control",
    date: "March 5, 2025",
    image: "https://via.placeholder.com/400x250",
  },
];

const BlogSlider = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Latest Insights & Tips</h2>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest trends and strategies in global import &
          export.
        </p>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-blue-500 uppercase font-semibold">
                {post.category}
              </span>
              <h3 className="text-lg font-bold my-2 text-gray-800">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-500 font-semibold hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/BlogSection"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
};

export default BlogSlider;
