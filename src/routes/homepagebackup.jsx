import { Link } from "react-router-dom";

const categories = ["All", "React", "Node", "Design", "AI", "DevOps"];

const Homepage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-14">
      {/* HERO */}
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          Read. Write. Share.
        </h1>

        <p className="text-gray-500 text-lg">
          A modern space for developers and creators to share ideas.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <Link
            to="/write"
            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800"
          >
            Start Writing
          </Link>

          <Link
            to="/posts"
            className="px-6 py-3 border rounded-xl hover:bg-gray-100"
          >
            Explore Posts
          </Link>
        </div>
      </div>

      {/* SEARCH + CATEGORIES */}
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center border-y py-6">
        {/* SEARCH */}
        <div className="flex items-center border rounded-xl px-4 py-2 w-full md:w-1/2">
          <input
            placeholder="Search articles..."
            className="w-full outline-none text-sm"
          />
        </div>

        {/* CATEGORIES */}
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              className="px-4 py-2 text-sm border rounded-full hover:bg-black hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FEATURED ARTICLE */}
      {/* FEATURED ARTICLE */}
      <div className="bg-gray-50 rounded-2xl p-6 flex flex-col md:flex-row gap-6">
        {/* IMAGE */}
        <div className="w-full md:w-1/2 h-64 rounded-xl overflow-hidden bg-gray-200">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="featured"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center gap-3">
          <p className="text-sm text-gray-500">Featured · React</p>

          <h2 className="text-3xl font-bold text-gray-900">
            Understanding Modern React Architecture
          </h2>

          <p className="text-gray-500">
            Learn how modern React applications are structured using hooks,
            routing, and scalable patterns.
          </p>

          <Link className="text-black font-medium hover:underline">
            Read more →
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Featured Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="p-5 border rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-lg">React Best Practices</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Learn how to structure modern React applications.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-5 border rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Node.js APIs</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Build scalable backend APIs with Express.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-5 border rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-lg">UI Design Tips</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Improve your frontend design skills.
            </p>
          </div>
        </div>
      </div>

      {/* LATEST POSTS GRID */}
      {/* POST CARD */}
      <div className="flex gap-5 border-b pb-6 group">
        {/* IMAGE */}
        <div className="w-32 h-24 md:w-40 md:h-28 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
            alt="post"
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">React · 5 min read</p>

            <h3 className="text-xl font-semibold hover:underline cursor-pointer">
              Sample Blog Post Title Here
            </h3>

            <p className="text-gray-500 text-sm">
              This is a short description of the blog post content preview...
            </p>
          </div>

          <p className="text-xs text-gray-400 mt-2">By Author Name</p>
        </div>
      </div>

      <div className="flex gap-5 border-b pb-6 group">
        {/* IMAGE */}
        <div className="w-32 h-24 md:w-40 md:h-28 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
            alt="post"
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">React · 5 min read</p>

            <h3 className="text-xl font-semibold hover:underline cursor-pointer">
              Sample Blog Post Title Here
            </h3>

            <p className="text-gray-500 text-sm">
              This is a short description of the blog post content preview...
            </p>
          </div>

          <p className="text-xs text-gray-400 mt-2">By Author Name</p>
        </div>
      </div>

      <div className="flex gap-5 border-b pb-6 group">
        {/* IMAGE */}
        <div className="w-32 h-24 md:w-40 md:h-28 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
            alt="post"
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">React · 5 min read</p>

            <h3 className="text-xl font-semibold hover:underline cursor-pointer">
              Sample Blog Post Title Here
            </h3>

            <p className="text-gray-500 text-sm">
              This is a short description of the blog post content preview...
            </p>
          </div>

          <p className="text-xs text-gray-400 mt-2">By Author Name</p>
        </div>
      </div>

      <div className="flex gap-5 border-b pb-6 group">
        {/* IMAGE */}
        <div className="w-32 h-24 md:w-40 md:h-28 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
            alt="post"
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">React · 5 min read</p>

            <h3 className="text-xl font-semibold hover:underline cursor-pointer">
              Sample Blog Post Title Here
            </h3>

            <p className="text-gray-500 text-sm">
              This is a short description of the blog post content preview...
            </p>
          </div>

          <p className="text-xs text-gray-400 mt-2">By Author Name</p>
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="text-center border-t pt-10">
        <h3 className="text-xl font-semibold">
          Start writing your story today
        </h3>

        <Link
          to="/write"
          className="inline-flex mt-4 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800"
        >
          Write Now
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
