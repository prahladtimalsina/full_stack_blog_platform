import { useUser } from "@clerk/react";
import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const Write = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  // console.log(user);

  // Handle loading state
  if (!isLoaded) return <div className="">Loading...</div>;

  // Protect the page from unauthenticated users
  if (isLoaded && !isSignedIn)
    return <div className="">Sign in to view this page</div>;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] bg-gray-50 px-4 py-6 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE - Editor */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Create a new post
          </h1>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              maxLength={120}
              placeholder="Write your title..."
              className="text-2xl md:text-4xl font-semibold bg-transparent outline-none border-b border-gray-200 pb-2 focus:border-blue-500"
            />
            <div className="text-xs text-gray-400 text-right">
              {title.length}/120
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              maxLength={300}
              placeholder="Write a short description..."
              className="p-4 h-32 resize-none rounded-xl bg-white border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-200 outline-none"
            />
            <div className="text-xs text-gray-400 text-right">
              {description.length}/300
            </div>
          </div>

          {/* Editor */}
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white min-h-[300px]">
            <ReactQuill theme="snow" className="min-h-[300px]" />
          </div>
        </div>

        {/* RIGHT SIDE - Controls */}
        <div className="flex flex-col gap-6">
          {/* Cover Image */}
          <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h2 className="text-sm font-medium mb-2">Cover Image</h2>
            <button className="w-full px-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100">
              Upload Image
            </button>
          </div>

          {/* Category */}
          <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h2 className="text-sm font-medium mb-2">Category</h2>
            <select className="w-full p-2 rounded-lg border border-gray-200">
              <option>General</option>
              <option>Technology</option>
              <option>Lifestyle</option>
              <option>Development</option>
              <option>Database</option>
              <option>SEO</option>
            </select>
          </div>

          <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h2 className="text-sm font-medium mb-3">Author</h2>

            <div className="flex items-center gap-3">
              {/* Avatar */}
              <img
                src={user?.imageUrl}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />

              {/* Info */}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800">
                  {user?.fullName}
                </span> 

                <span className="text-xs text-gray-500">
                  {user?.username
                    ? `@${user.username}`
                    : user?.primaryEmailAddress?.emailAddress}
                </span>
              </div>
            </div>
          </div>

          {/* Publish */}
          <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col gap-3">
            <h2 className="text-sm font-medium">Publish</h2>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-medium">
              Publish Post
            </button>

            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-xl font-medium">
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
