 <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
      {/* LEFT: POST CONTENT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* BACK */}
        <Link to="/posts" className="text-sm text-gray-500 hover:underline">
          ← Back to posts
        </Link>

        {/* META */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <Link className="text-blue-700">Web Development</Link>
          <span>•</span>
          <span>5 min read</span>
          <span>•</span>
          <span>2 days ago</span>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          How to Build a Successful Blog Platform
        </h1>

        {/* IMAGE */}
        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden">
          <ImageKit
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-6 text-gray-700 leading-relaxed text-base md:text-lg">
          <p>
            Building a successful blog platform requires strong design,
            performance, and user experience.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            Choose the Right Stack
          </h2>

          <p>React, Node.js, and MongoDB are popular for scalable apps.</p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
            Good design improves readability and engagement.
          </blockquote>
        </div>

        {/* COMMENTS SECTION */}
        <div className="mt-10 flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Comments</h2>

          {/* ADD COMMENT */}
          <div className="flex flex-col gap-3">
            <textarea
              placeholder="Write a comment..."
              className="border rounded-xl p-3 outline-none"
              rows={3}
            />
            <button className="self-end px-5 py-2 bg-black text-white rounded-xl">
              Post Comment
            </button>
          </div>

          {/* COMMENT LIST */}
          <div className="flex flex-col gap-4">
            <div className="border rounded-xl p-4 flex gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <p className="font-medium">User One</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
                <p className="mt-2 text-gray-700">
                  This article was very helpful!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border rounded-xl p-4 flex gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <p className="font-medium">User two</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
                <p className="mt-2 text-gray-700">
                  This article was very helpful!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: SIDEBAR */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        {/* SEARCH */}
        <div className="border rounded-2xl p-4">
          <div className="flex items-center gap-2 border rounded-xl px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.3-4.3" />
            </svg>

            <input
              type="text"
              placeholder="Search posts..."
              className="w-full outline-none text-sm"
            />
          </div>
        </div>
        {/* AUTHOR CARD */}
        <div className="border rounded-2xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">Web Developer</p>
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="border rounded-2xl p-4 flex flex-col gap-3 text-sm">
          <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-100">
            💾 Save Post
          </button>

          <button className="text-left px-3 py-2 rounded-lg hover:bg-red-50 text-red-600">
            🗑 Delete Post
          </button>
        </div>

        {/* CATEGORIES */}
        <div className="border rounded-2xl p-4 flex flex-col gap-3">
          <h3 className="font-semibold">Categories</h3>

          <div className="flex flex-col gap-2 text-sm">
            {["React", "Node", "Design", "AI", "DevOps"].map(cat => (
              <Link key={cat} className="hover:text-blue-700 cursor-pointer">
                #{cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>