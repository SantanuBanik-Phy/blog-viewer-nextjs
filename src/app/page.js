import Link from 'next/link';

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
 

  return (
    <div>
      <main className="p-4 container mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800">{post.title}</h2>
             
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
