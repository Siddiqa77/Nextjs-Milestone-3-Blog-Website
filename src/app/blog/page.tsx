import Link from "next/link";
import { blogPosts } from "@/lib/blogs";

export default function HomePage() {
  return (
    <div className="p-6  wrapper mb-20">
      <div className="text-[#181a2a] text-4xl font-bold mb-8 text-center">
        Latest Posts
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <Link
                href={`/blog/${post.id}`}
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:font-bold transition-all"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
