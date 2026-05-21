import { Link } from "react-router-dom";
import ImageKit from "./ImageKit";

const Featuredposts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2  flex flex-col gap-4">
        <ImageKit
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          className="rounded-3xl object-cover" w={895}
        />

        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">0.1</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>

        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          lorem asdf asdfasdf aa asdf fasdf asdf
        </Link>
      </div>
      {/* <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex justify-between gap-4">
          <ImageKit
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">0.2</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500">2 days ago</span>
            </div>

            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4"></div>
        <div className="lg:h-1/3 flex justify-between gap-4"></div>
      </div> */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
      
        <div className="flex justify-between gap-4 items-center">
          <ImageKit
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            className="rounded-3xl object-cover w-32 h-24 md:w-40 md:h-28 flex-shrink-0"
          />

          <div className="flex-1">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h1 className="font-semibold">0.3</h1>
              <Link className="text-blue-800">Development</Link>
              <span className="text-gray-500">3 days ago</span>
            </div>

            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl leading-snug line-clamp-2"
            >
              Building scalable full stack applications with MERN
            </Link>
          </div>
        </div>

        <div className="flex justify-between gap-4 items-center">
          <ImageKit
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            className="rounded-3xl object-cover w-32 h-24 md:w-40 md:h-28 flex-shrink-0"
          />

          <div className="flex-1">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h1 className="font-semibold">0.3</h1>
              <Link className="text-blue-800">Development</Link>
              <span className="text-gray-500">3 days ago</span>
            </div>

            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl leading-snug line-clamp-2"
            >
              Building scalable full stack applications with MERN
            </Link>
          </div>
        </div>

        <div className="flex justify-between gap-4 items-center">
          <ImageKit
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            className="rounded-3xl object-cover w-32 h-24 md:w-40 md:h-28 flex-shrink-0"
          />

          <div className="flex-1">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h1 className="font-semibold">0.3</h1>
              <Link className="text-blue-800">Development</Link>
              <span className="text-gray-500">3 days ago</span>
            </div>

            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl leading-snug line-clamp-2"
            >
              Building scalable full stack applications with MERN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuredposts;
