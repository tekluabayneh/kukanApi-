import React, { useState } from "react";
import { Link } from "react-router-dom";
import openIcon from "../../assets/open.svg";
import SmallWidthNav from "../MobileNav/smallWidthNav";
const Header = () => {
  const [isOpenNav, setisOpenNav] = useState(true);

  const handelNav = () => {
    setisOpenNav(!isOpenNav);
  };
  return (
    <header className="customnavStyle shadow-md z-50 fixed top-0 left-0 flex items-center justify-between py-8 px-8 w-full h-16">
      <div className="text-2xl font-extrabold">Kukandummyjson</div>
      <nav className="hidden md:block">
        <ul className="flex gap-3 items-center">
          <li className="capitalize font-bold cursor-pointer hover:underline transition-all">
            <a href="/">home</a>
          </li>
          <li className="capitalize font-bold cursor-pointer hover:underline transition-all">
            <a href="/Docs">doc</a>
          </li>
          <li className="capitalize font-bold cursor-pointer hover:underline transition-all">
            <a href="/Api">apiKey</a>
          </li>
          <li className="capitalize font-bold cursor-pointer hover:underline transition-all">
            <a href="/login">login</a>
          </li>
          <button className="bg-gradient-to-r px-6 py-1 rounded-lg shadow from-purple-700 via-blue-400 to-lime-400 capitalize font-bold cursor-pointer hover:bg-transparent hover:text-black">
            <a
              href="https://github.com/tekluabayneh/Kukandummyjson"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </button>
        </ul>
      </nav>
      <img
        onClick={handelNav}
        className="opennav text-black w-6 h-6 cursor-pointer md:hidden"
        src={openIcon}
        alt="Open menu"
      />
      <SmallWidthNav handelNav={handelNav} isOpenNav={isOpenNav} />
    </header>
  );
};

export default Header;
