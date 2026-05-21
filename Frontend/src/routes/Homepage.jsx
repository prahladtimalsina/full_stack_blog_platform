import { Link } from "react-router-dom";
import MainCategoreis from "../components/MainCategoreis";
import Featuredposts from "../components/Featuredposts";
import PostList from "../components/PostList";

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

      {/* categores */}
      <MainCategoreis />
      {/* featured posts */}
      <Featuredposts />
      {/* post list page */}

      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recents Posts</h1>
        {/* <PostList /> */}
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
