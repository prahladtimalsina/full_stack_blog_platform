import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 flex items-center justify-between">
      {/* {LOGO} */}

      <div className="items-center flex gap-4 text-xl font-bold">
        <img
          src="/logo.jpg"
          alt="/logo.jpg"
          className="w-d h-8 rounded-full"
          alt=""
        />
        <span>ptblog</span>
      </div>

      {/* {mobile menu} */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setOpen(prev => !prev)}
        >
          {open ? "X" : "="}
        </div>
        {/* mbl link list */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute gap-6 font-medium text-lgtop-16  ${open ? "right-0" : "right-[-100%]"} transition-all duration-600`}
        >
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
        </div>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
        <a href="/">
          <button className="py-2 px-4 rounded-3xl bg-green-500 text-white">
            Login 👋
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
