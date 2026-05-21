import { useUser } from "@clerk/react";
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

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a new post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          type="text"
          className="text-4xl font-semibold bg-transparent outline-none"
          placeholder="Write the text"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>
          <select
            name="cat"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="development">Development</option>
            <option value="database">Database</option>
            <option value="seo">Seo</option>
          </select>
        </div>
        <textarea
          name=""
          id=""
          placeholder="write the description"
          className="p-4 rounded-xl bg-white shadow-md"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md "
        />
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
