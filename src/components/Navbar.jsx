import { useState } from "react";
import ImageKit from "./ImageKit";
import { Link } from "react-router-dom";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 flex items-center justify-between relative">
      {/* {LOGO} */}

      <Link to="/" className="items-center flex gap-4 text-xl font-bold">
        <ImageKit src="/logo.jpg" alt="ptblog" w={32} h={32} />

        <span>ptblog</span>
      </Link>

      {/* {mobile menu} */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setOpen(prev => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
        {/* mbl link list */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute gap-6 font-medium text-lg top-16  ${open ? "right-0" : "right-[-100%]"} transition-all duration-700`}
        >
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/">Contact</Link>

        <Show when="signed-out">
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-green-500 text-white cursor-pointer">
              Login 👋
            </button>
          </Link>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>

        {/* <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show> */}
      </div>
    </div>
  );
};

export default Navbar;
