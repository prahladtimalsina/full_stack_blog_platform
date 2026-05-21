import { Link } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="font-medium text-sm mb-4">Search</h1>
      <Search />
      <h1 className="font-medium text-sm mb-4 mt-8">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="cursor-pointer appearance-none w-4 h-4 border-[1.5px] rounded-sm border-amber-400 bg-white  checked:bg-amber-400"
          />
            Newest
        </label>

        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="cursor-pointer appearance-none w-4 h-4 border-[1.5px] rounded-sm border-amber-400 bg-white  checked:bg-amber-400"
          />
          Most Popular
        </label>


        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="cursor-pointer appearance-none w-4 h-4 border-[1.5px] rounded-sm border-amber-400 bg-white  checked:bg-amber-400"
          />
          Trending
        </label>

         <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="cursor-pointer appearance-none w-4 h-4 border-[1.5px] rounded-sm border-amber-400 bg-white  checked:bg-amber-400"
          />
          Oldest
        </label>
      </div>

      <h1 className="font-medium text-sm mb-4 mt-8">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to="/posts">
          All
        </Link>
        <Link className="underline" to="/posts?category=web-design">
          Web Design
        </Link>
        <Link className="underline" to="/posts?category=web-development">
          Web Development
        </Link>
        <Link className="underline" to="/posts?category=ui-ux-design">
          UI/UX Design
        </Link>
        <Link className="underline" to="/posts?category=mobile-app-development">
          Mobile App Development
        </Link>
        <Link className="underline" to="/posts?category=programming-languages">
          Programming Languages
        </Link>
        <Link className="underline" to="/posts?category=data-science">
          Data Science
        </Link>
        <Link className="underline" to="/posts?category=machine-learning">
          Machine Learning
        </Link>
        <Link
          className="underline"
          to="/posts?category=artificial-intelligence"
        >
          Artificial Intelligence
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
