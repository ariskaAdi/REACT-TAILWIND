import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

// install hero icon dep for react

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <div className="w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-4 sm:text-3xl">BRAND.</h1>
          <ul className="hidden md:flex ">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">Sign In</button>
          <button className="px-8 py-3 ">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!open ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!open ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Platform</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
          <button className=" bg-transparent text-black px-8 py-3 mb-4">Sign In</button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
