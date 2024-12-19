import { blogPosts } from "@/lib/blogs";

export default function BlogDetail({ params }: { params: { id: string } }) {
  const blog = blogPosts.find((post) => post.id === Number(params.id));

  if (!blog) {
    return <h1 className="text-center text-4xl mt-10 family">Page Not Found</h1>;
  }

  return (
    <div className="p-4 max-w-2xl mx-auto mb-40">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-gray-600 mt-2 jakarta">{blog.content}</p>
    </div>
  );
}
