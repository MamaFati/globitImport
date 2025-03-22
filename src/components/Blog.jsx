import React, { useState } from "react";

const allBlogs = [
  {
    id: 1,
    title: "5 Tips for Successful Importing",
    category: "Importing",
    date: "March 20, 2025",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 2,
    title: "Why Partnering with Globit Simplifies Trade",
    category: "Partnership",
    date: "March 10, 2025",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 3,
    title: "Navigating Customs Regulations in 2025",
    category: "Logistics",
    date: "February 25, 2025",
    image: "https://via.placeholder.com/400x250",
  },
  // Add more blogs here
];

const categories = ["All", "Importing", "Partnership", "Logistics"];

const BlogListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? allBlogs
      : allBlogs.filter((blog) => blog.category === selectedCategory);

  return (
    <section className="py-12 px-6 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">Our Blog</h2>
        <p className="text-gray-600">
          Explore insights and updates across categories.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-blue-500 font-medium uppercase">
                {post.category}
              </span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{post.date}</p>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogListPage;
