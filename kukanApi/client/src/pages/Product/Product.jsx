import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const ProductsDocs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="grid grid-cols-[80%_20%] items-start pt-12 w-full bg-gradient-to-t from-pink-50 to-purple-50 min-h-screen">
        <section className="w-full h-auto grid grid-cols-1 pt-12 p-3">
          <h1 className="text-[4rem] text-left">Products-Docs</h1>

          {/* 1. Get All Product */}
          <div className="w-full pt-6">
            <div className="flex gap-1 items-center m-2">
              <h2 className="text-2xl">Get All Product</h2>
              <svg
                className="w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </div>
            <p>
              By default you will get 24 items, use Limit to paginate through
              all items.
            </p>
            <div className="pr-5">
              <pre className="language-javascript rounded-lg">
                <code>
                  {`fetch('https://kukandummyjson.onrender.com/product/?api_key=your_api-key')
  .then(res => res.json())
  .then(json => console.log(json))`}
                </code>
              </pre>
            </div>
          </div>

          {/* 2. Get Single Product */}
          <div className="w-full pt-6">
            <div className="flex gap-1 items-center m-2">
              <h2 className="text-2xl">Get Single Product</h2>
              <svg
                className="w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </div>
            <p>Get single user by their id</p>{" "}
            {/* Note: Should say "product" instead of "user" */}
            <div className="pr-5">
              <pre className="language-javascript rounded-lg">
                <code>
                  {`fetch('https://kukandummyjson.onrender.com/product/2?api_key=your_api-key')
  .then(res => res.json())
  .then(json => console.log(json))`}
                </code>
              </pre>
            </div>
          </div>

          {/* 3. Get Product by Category */}
          <div className="w-full pt-6">
            <div className="flex gap-1 items-center m-2">
              <h2 className="text-2xl">Get Product by Category</h2>
              <svg
                className="w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </div>
            <p>
              Please note that if the user email already exists it won’t work.
              Consider adding a new email if you get{" "}
              <span className="text-red-500">user already exist</span> message.
            </p>{" "}
            {/* Note: This seems misplaced; should relate to products */}
            <div className="pr-5">
              <pre className="language-javascript rounded-lg">
                <code>
                  {`fetch('https://kukandummyjson.onrender.com/product/category/electronics?api_key=your_api-key')
  .then(res => res.json())
  .then(json => console.log(json))`}
                </code>
              </pre>
            </div>
          </div>

          {/* 4. Get Limited User */}
          <div className="w-full pt-6">
            <div className="flex gap-1 items-center m-2">
              <h2 className="text-2xl">Get Limited User</h2>{" "}
              {/* Note: Should say "Product" instead of "User" */}
              <svg
                className="w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </div>
            <p>
              Get limited user amount by just adding limit number into url
              params
            </p>{" "}
            {/* Note: Should say "product" */}
            <div className="pr-5">
              <pre className="language-javascript rounded-lg">
                <code>
                  {`fetch('https://kukandummyjson.onrender.com/users/limit/2?api_key=your_api-key')
  .then(res => res.json())
  .then(json => console.log(json))`}
                </code>
              </pre>
            </div>
          </div>

          {/* 5. Delete Product */}
          <div className="w-full pt-6">
            <div className="flex gap-1 items-center m-2">
              <h2 className="text-2xl">Delete Product</h2>
              <svg
                className="w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </div>
            <p>
              You can also delete product by id{" "}
              <span className="text-red-500">
                note that the actual product data will not be deleted but it
                will respond back with the deleted product data
              </span>
            </p>
            <div className="pr-5">
              <pre className="language-javascript rounded-lg">
                <code>
                  {`fetch('https://kukandummyjson.onrender.com/product/delete/2?api_key=apikey')
  .then(res => res.json())
  .then(json => console.log(json))`}
                </code>
              </pre>
            </div>
          </div>

          {/* 6. Update Product */}
          <div className="w-full pt-6">
            <div className="flex gap-1 items-center m-2">
              <h2 className="text-2xl">Update Product</h2>
              <svg
                className="w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </div>
            <p>
              Update user providing new data but remember{" "}
              <span className="p-2 text-red-600">
                the actual data won’t be updated but instead we send back with
                the updated new data along with old one
              </span>
            </p>{" "}
            {/* Note: Should say "product" instead of "user" */}
            <div className="pr-5">
              <pre className="language-javascript rounded-lg">
                <code>
                  {`fetch('https://kukandummyjson.onrender.com/product/update/4?api_key=your_api-key', {
  method: "PUT",
  body: JSON.stringify({
    id: 'exa-id',
    title: "exa-title",
    price: 'exa-price',
    description: 'exa-description',
    category: 'exa-electronics',
    image: 'exa-44',
    rating_count: 'exa-count',
    rating_rate: 'exa-rate'
  })
})
  .then(res => res.json())
  .then(json => console.log(json))`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <article className="pt-12 mt-20 p-3 bg-slate-500 text-white rounded-lg">
          <div className="sticky top-96 text-center">
            <ul className="flex flex-col gap-24 items-center">
              <li className="flex items-center group transition-all relative">
                <Link to="/users">
                  <span className="absolute hidden top-1 right-9 group-hover:block bg-black rounded px-2">
                    users!
                  </span>
                  <div className="w-12 h-12 cursor-pointer items-center rounded-full bg-black">
                    <svg
                      className="w-full"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
              <li className="flex items-center group transition-all relative">
                <Link to="/product">
                  <span className="absolute hidden top-1 right-9 group-hover:block bg-black rounded px-2">
                    product!
                  </span>
                  <div className="w-12 h-12 cursor-pointer items-center rounded-full bg-black">
                    <svg
                      className="w-full"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
              <li className="flex items-center group transition-all relative">
                <Link to="/posts">
                  <span className="absolute hidden top-1 right-9 group-hover:block bg-black rounded px-2">
                    posts!
                  </span>
                  <div className="w-12 h-12 cursor-pointer items-center rounded-full bg-black">
                    <svg
                      className="w-full"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
              <li className="flex items-center group transition-all relative">
                <Link to="/quotes">
                  <span className="absolute hidden top-1 right-9 group-hover:block bg-black rounded px-2">
                    quotes!
                  </span>
                  <div className="w-12 h-12 cursor-pointer items-center rounded-full bg-black">
                    <svg
                      className="w-full"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ProductsDocs;
