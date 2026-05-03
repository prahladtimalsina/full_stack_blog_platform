import { Link } from "react-router-dom"

const MainCategoreis = () => {
  return (
    <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center jcustify-center gap-8'>
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link to="posts" className="bg-blue-800 text-white px-4 py-2 rounded-full">All Posts</Link>
        <Link to="posts?category=react" className="hover:bg-blue-50 rounded-full px-4 py-2">React</Link>
        <Link to="posts?category=node" className="hover:bg-blue-50 rounded-full px-4 py-2">Node</Link>
        <Link to="posts?category=design" className="hover:bg-blue-50 rounded-full px-4 py-2">Design</Link>
        <Link to="posts?category=ai" className="hover:bg-blue-50 rounded-full px-4 py-2">AI</Link>
        <Link to="posts?category=devops" className="hover:bg-blue-50 rounded-full px-4 py-2">DevOps</Link>
      </div>

      <span className="text-xl font-medium">|</span>
      {/* search */}
      <div className="">
        <input type="text" placeholder="Search a post..." className="border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
    </div>
  )
}

export default MainCategoreis