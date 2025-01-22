const BlogPage = async ({ params }) => {
  const { id } = params; 
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="bg-white rounded-xl shadow-2xl p-10 max-w-2xl w-full">
        <h1 className="md:text-5xl text-3xl font-extrabold text-gray-900 mb-6 text-center border-b pb-4">
          {post.title}
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          {post.body}
        </p>
      </main>
    </div>
  );
};

export default BlogPage;
