import React from "react";
import { useParams } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Effective Import Strategies for 2025",
    category: "Import Strategies",
    description:
      "Learn about the most effective import strategies to boost your business in 2025.",
    date: "March 20, 2025",
    image: "path_to_image1.jpg",
    content: "Detailed content of the blog post...",
  },
  // Add more blog posts here
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <p className="text-sm text-blue-500 mb-2">{post.category}</p>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-sm text-gray-400 mb-6">{post.date}</p>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>{post.content}</p>
              {/* Add more paragraphs as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
