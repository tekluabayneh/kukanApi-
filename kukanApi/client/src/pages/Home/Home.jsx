import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import openIcon from "../../assets/open.svg";
import closeIcon from "../../assets/close.svg";
import backToTopIcon from "../../assets/Agu_Display/backToTop.png";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import heroImage from "../../assets/hero-image.svg";
import multipleOptionsImage from "../../assets/multiple-options.svg";
import wavyBuddiesImage from "../../assets/WavyBuddies.png";

const Home = () => {
  // Placeholder for script loading (GSAP, jQuery, etc.)
  useEffect(() => {
    // Load external scripts here if needed (e.g., via dynamic import or public/index.html)
    // Example: GSAP and jQuery could be included in public/index.html
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      
      {/* Small Width Nav */}
      <div
        className="smallnav w-full h-auto absolute top-0 left-0 bg-black z-50 md:hidden"
        style={{ transform: "translateX(-5000px)" }}
      >
        <nav className="pt-10 flex items-baseline justify-between">
          <ul className="flex flex-col gap-3 items-start pl-5">
            <li className="capitalize font-bold cursor-pointer hover:underline transition-all">
              <Link
                className="text-[2.5rem] font-extrabold text-white customfont"
                to="/"
              >
                home
              </Link>
            </li>
            <li className="capitalize font-bold cursor-pointer hover:underline transition-all">
              <Link
                className="text-[2.5rem] font-extrabold text-white customfont"
                to="/Docs"
              >
                doc
              </Link>
            </li>
            <li className="capitalize font-bold cursor-pointer hover:underline transition-all">
              <Link
                className="text-[2.5rem] font-extrabold text-white customfont"
                to="/Api"
              >
                api
              </Link>
            </li>
            <li className="capitalize font-bold cursor-pointer hover:underline transition-all">
              <Link
                className="text-[2.5rem] font-extrabold text-white customfont"
                to="/login"
              >
                login
              </Link>
            </li>
            <li className="capitalize font-bold cursor-pointer hover:underline transition-all">
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
          <div className="text-white">
            <img
              className="closenav text-white bg-white m-5 cursor-pointer"
              src={closeIcon}
              alt="Close menu"
            />
          </div>
        </nav>
      </div>

      {/* Back to Top Button */}
      <div className="relative group">
        <div className="backToTop fixed cursor-pointer right-4 bottom-4 w-12 h-12 rounded-full ring-1">
          <img src={backToTopIcon} alt="Back to top" />
        </div>
        <div className="fixed hidden bottom-14 right-7 capitalize group-hover:block bg-gray-700 text-white text-sm rounded px-2 py-1">
          back to top!
        </div>
      </div>

      {/* Section 1 */}
      <section className="page w-full h-[40rem] md:h-screen  xl:p-2 pt-19 px-5">
        <div className="grid md:items-center h-screen grid-cols-1 md:grid-cols-2 ">
          <div className="first">
            <h1 className=" text-4xl  md:text-6xl font-extrabold capitalize">
              Test REST API for Placeholder JSON data
            </h1>
            <h6 className="m-2">
              Easily generate mock JSON data for your frontend using
              Kukandummyjson Server — no need for backend setup!
            </h6>
            <p className="text-sm p-2">
              Easily generate mock JSON data for your frontend using
              Kukandummyjson Server — no need for backend setup! Quickly
              simulate real-world API responses and seamlessly integrate mock
              data into your application to accelerate development and testing.
            </p>
            <div className="flex gap-5 p-5">
              <button className="customfont bg-gradient-to-r px-6 py-2 rounded-lg shadow from-purple-700 via-blue-400 to-lime-400 capitalize font-bold cursor-pointer hover:bg-transparent hover:text-black">
                <a
                  href="https://github.com/tekluabayneh/Kukandummyjson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view on github
                </a>
              </button>
              <button className="customfont bg-gradient-to-r px-6 py-2 rounded-lg shadow from-purple-700 via-blue-400 to-lime-400 capitalize font-bold cursor-pointer hover:bg-transparent hover:text-black">
                <Link to="/Docs">read doc</Link>
              </button>
            </div>
          </div>

          <div className="second flex flex-col gap-2 hidden md:block">
            <img src={heroImage} alt="Hero" />
            <div className="flex gap-5 ml-80 pt-1">
              <a
                href="https://github.com/tekluabayneh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/teklu-abayneh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="page bg-red-500 w-full h-[40rem] md:h-screen pt-20 px-5 bg-gradient-to-t from-purple-50 to-amber-50">
        <div className="grid md:items-center h-screen grid-cols-1 md:grid-cols-2 ">
          <div className="second pt-5 flex flex-col hidden xl:hidden md:block">
            <img
              // className="w-8"
              src={multipleOptionsImage}
              alt="Multiple Options"
            />
          </div>
          <div className="first">
            <h1 className=" text-4xl  md:text-6xl font-extrabold capitalize">
              instantly Usable Tools for Your Development Needs
            </h1>
            <p className="text-sm p-1">
              Access a collection of ready-to-use APIs that speed up your
              development process. Skip the setup and focus on building,
              testing, and deploying your projects with ease.
            </p>
            <div className="flex gap-5 p-3">
              <button className="customfont bg-gradient-to-r px-6 py-2 rounded-lg shadow from-purple-700 via-blue-400 to-lime-400 capitalize font-bold cursor-pointer hover:bg-transparent hover:text-black">
                <Link to="/Docs">read doc</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="page w-full h-[40rem] md:h-screen pt-20 px-5 bg-gradient-to-t from-purple-50 to-amber-50">
        <div className="grid items-center h-96 md:h-screen grid-cols-1 md:grid-cols-2 ">
          <div className="first">
            <h1 className="text-4xl md:text-6xl l font-extrabold capitalize">
              Pre-built Tools for Your Development Needs
            </h1>
            <p className="text-sm p-2">
              Unlock a suite of ready-to-use tools designed to simplify and
              accelerate your development workflow. Whether you’re building web
              applications, integrating APIs, or streamlining frontend and
              backend tasks, these tools are crafted to save time and boost
              productivity—so you can focus on creating and innovating.
            </p>
            <div className="flex gap-5 p-5">
              <button className="customfont bg-gradient-to-r px-6 py-2 rounded-lg shadow from-purple-700 via-blue-400 to-lime-400 capitalize font-bold cursor-pointer hover:bg-transparent hover:text-black">
                <Link to="/Docs">try it now</Link>
              </button>
            </div>
          </div>
          <div className="second pt-5 flex flex-col gap-2 hidden xl:hidden md:block">
            <img src={wavyBuddiesImage} alt="Wavy Buddies" />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="page w-full h-[120vh] pt-20 px-5 bg-gradient-to-t from-purple-50 to-amber-50">
        <div className="text-center">
          <div>
            <h1 className="text-[3rem] leading-11 font-extrabold capitalize">
              Essential Resources:
            </h1>
            <p>
              Gain access to well-structured, real-world data, ready to
              integrate and use seamlessly in your projects.
            </p>
          </div>
          <div className="tabParent grid grid-cols-1 gap-5 p-5">
            {/* Resource 1 */}
            <div className="resorce h-52 group overflow-hidden flex flex-col bg-gradient-to-r px-6 py-4 rounded-lg shadow from-purple-300 via-blue-400 to-lime-200 capitalize font-bold cursor-pointer hover:bg-gradient-to-r hover:from-transparent hover:via-pink-100 hover:to-transparent">
              <div className="flex items-center justify-between">
                <span className="customfont text-lg font-extrabold group-hover:text-pink-400">
                  product
                </span>
                <span className="group-hover:text-pink-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-center pt-10 px-12 pb-20">
                <h6 className="font-bolder">Why Use Our Product Data API?</h6>
                <p className="text-[10px]">
                  Perfect for Learning: A simple and intuitive tool for
                  practicing API requests and data management.
                </p>
                <p className="text-[10px]">
                  Reliable for Production: Well-documented and fast, ideal for
                  production apps, so you can focus on building features.
                </p>
                <p className="text-[10px]">
                  Seamless Integration: Works effortlessly with modern
                  technologies like React and Node.js.
                </p>
                <p className="text-[10px]">
                  Real-World Data: Access real-world data to easily build
                  features like user management and posts without creating your
                  own database.
                </p>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="resorce h-14 group overflow-hidden flex flex-col bg-gradient-to-r px-6 py-4 rounded-lg shadow from-purple-300 via-blue-400 to-lime-200 capitalize font-bold cursor-pointer hover:bg-gradient-to-r hover:from-transparent hover:via-pink-100 hover:to-transparent">
              <div className="flex items-center justify-between">
                <span className="customfont text-lg font-extrabold group-hover:text-pink-400">
                  quotes
                </span>
                <span className="group-hover:text-pink-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-center pt-10 px-12">
                <h6 className="font-bold">Why Use Our Quote API?</h6>
                <p className="text-[10px]">
                  Perfect for Learning: A simple and intuitive tool for
                  practicing API requests and working with dynamic quote data.
                </p>
                <p className="text-[10px]">
                  Reliable for Production: Well-documented and fast, ideal for
                  production apps, allowing you to focus on delivering
                  meaningful quotes.
                </p>
                <p className="text-[10px]">
                  Seamless Integration: Easily integrates with modern
                  technologies like React, Node.js, and other frameworks.
                </p>
                <p className="text-[10px]">
                  Real-Time Inspiration: Access a wide variety of quotes to
                  inspire your users, perfect for features like daily quote
                  generators or motivational apps.
                </p>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="resorce h-14 group overflow-hidden flex flex-col bg-gradient-to-r px-6 py-4 rounded-lg shadow from-purple-300 via-blue-400 to-lime-200 capitalize font-bold cursor-pointer hover:bg-gradient-to-r hover:from-transparent hover:via-pink-100 hover:to-transparent">
              <div className="flex items-center justify-between">
                <span className="customfont text-lg font-extrabold group-hover:text-pink-400">
                  posts
                </span>
                <span className="group-hover:text-pink-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-center pt-10 px-12">
                <h6 className="font-bold">Why Use Our Post API?</h6>
                <p className="text-[10px]">
                  Perfect for Learning: A simple and intuitive tool for
                  practicing API requests and managing post data.
                </p>
                <p className="text-[10px]">
                  Reliable for Production: Well-documented and fast, ideal for
                  production apps, allowing you to focus on building
                  post-related features.
                </p>
                <p className="text-[10px]">
                  Seamless Integration: Easily integrates with modern
                  technologies like React, Node.js, and other frameworks.
                </p>
                <p className="text-[10px]">
                  Real-World Data: Access real-world post data, making it easy
                  to build features like blog posts, articles, or product
                  reviews.
                </p>
              </div>
            </div>

            {/* Resource 4 */}
            <div className="resorce h-14 group overflow-hidden flex flex-col bg-gradient-to-r px-6 py-4 rounded-lg shadow from-purple-300 via-blue-400 to-lime-200 capitalize font-bold cursor-pointer hover:bg-gradient-to-r hover:from-transparent hover:via-pink-100 hover:to-transparent">
              <div className="flex items-center justify-between">
                <span className="customfont text-lg font-extrabold group-hover:text-pink-400">
                  users
                </span>
                <span className="group-hover:text-pink-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-center pt-10 px-12">
                <h6 className="font-bold">Why Use Our User API?</h6>
                <p className="text-[10px]">
                  Perfect for Learning: A simple and intuitive tool for
                  practicing API requests and managing user data.
                </p>
                <p className="text-[10px]">
                  Reliable for Production: Well-documented and fast, ideal for
                  production apps, allowing you to focus on building user
                  management features.
                </p>
                <p className="text-[10px]">
                  Seamless Integration: Easily integrates with modern
                  technologies like React, Node.js, and other frameworks.
                </p>
                <p className="text-[10px]">
                  Real-World Data: Access real-world user data, making it easy
                  to create personalized user experiences and manage profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="xl:mt-44 md:mt-0 page text-center bg-gradient-to-r from-teal-50 to-blue-50 grid place-content-center w-full h-[40rem] md:h-screen pt-20 px-5">
        <div className="grid place-content-center">
          <div className="first">
            <h1 className="text-[3rem] leading-11 font-extrabold capitalize">
              Thank you!
            </h1>
            <p className="font-bold">
              Thank you for being a valued member of the Kukandummyjson
              community. If you haven't already, we encourage you to explore all
              the tools and resources available to make the most of your
              experience.
            </p>
            <p className="capitalize font-bold mt-2">
              This adds a bit more warmth and encourages user interaction. Let
              me know if you'd like more revisions!
              <span className="underline text-bold text-red-900 p-1">
                and don't forget to give me star in github
              </span>
            </p>
          </div>
          <div className="flex gap-5 m-auto pt-10">
            <a
              href="https://github.com/tekluabayneh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="hover:scale-125 transition-all"
                src={githubIcon}
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/teklu-abayneh-8b93492b8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="hover:scale-125 transition-all"
                src={linkedinIcon}
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
