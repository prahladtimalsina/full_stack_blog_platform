import { Link } from "react-router-dom";
import ImageKit from "./ImageKit";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 border border-gray-200 
  hover:border-black hover:ring-2 hover:ring-blue-500
  transition-all duration-300 
  rounded-3xl p-4 cursor-pointer">
      <div className="md:hidden xl:block xl:w-1/3">
        <ImageKit
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          className="rounded-2xl object-cover" w={735}
        />
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          How to Build a Successful Blog
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Development</Link>
          <span>2 days ago</span>
        </div>
        <p className="text-gray-600">
          Learn how to build a successful blog with these proven strategies and tips. From content creation to promotion, this guide covers everything you need to know to grow your audience and monetize your blog effectively.

        </p>
        <Link to="/test" className="underline text-blue-800 font-medium text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
