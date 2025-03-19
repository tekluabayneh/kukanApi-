import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import closeIcon from "../../assets/close.svg";
const SmallWidthNav = ({ handelNav, isOpenNav }) => {
  return (
    <div
      className="smallnav w-96 h-screen fixed top-0 left-0 bg-black z-50 transition-all md:hidden"
      style={{
        transform: isOpenNav ? "translateX(-500px)" : "translateX(0px)",
      }}
    >
      <nav className="pt-10 flex items-baseline justify-between">
        <ul className="flex flex-col gap-3 items-start pl-5">
          <li className="capitalize font-bold cursor-pointer hover:underline transition-all">
            <a
              onClick={handelNav}
              className="text-[2.5rem] font-extrabold text-white customfont"
              href="/"
            >
              home
            </a>
          </li>
          <li className="capitalize font-bold cursor-pointer hover:underline transition-all">
            <a
              onClick={handelNav}
              className="text-[2.5rem] font-extrabold text-white customfont"
              href="/Docs"
            >
              doc
            </a>
          </li>
          <li className="capitalize font-bold cursor-pointer hover:underline transition-all">
            <a
              onClick={handelNav}
              className="text-[2.5rem] font-extrabold text-white customfont"
              href="/Api"
            >
              api
            </a>
          </li>
          <li className="capitalize font-bold cursor-pointer hover:underline transition-all">
            <a
              onClick={handelNav}
              className="text-[2.5rem] font-extrabold text-white customfont"
              href="/login"
            >
              login
            </a>
          </li>
          <li
            onClick={handelNav}
            className="capitalize font-bold cursor-pointer hover:underline transition-all"
          >
            <a
              className="text-[2.5rem] font-extrabold text-white customfont"
              href="https://github.com/tekluabayneh"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
        </ul>
        <div className="text-white" onClick={handelNav}>
          <img
            className="closenav text-white bg-white m-12 cursor-pointer"
            src={closeIcon}
            alt="Close menu"
          />
        </div>
      </nav>
    </div>
  );
};

export default SmallWidthNav;
