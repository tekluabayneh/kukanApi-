import React, { useEffect, useState } from "react";
import backToTopIcon from "../assets/Agu_Display/backToTop.png";

const BackToHome = () => {
  let [isScrolledY, setisScrolledY] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;

      if (scrollY > 50) {
        setisScrolledY(true);
      } else {
        setisScrolledY(false);
      }
    });
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  ``;

  return (
    <>
      {/* Back to Top Button */}
      <div
        onClick={ScrollToTop}
        className="relative group hidden z-50"
        style={{ display: isScrolledY ? "block" : "" }}
      >
        <div className="backToTop fixed cursor-pointer right-4 bottom-4 w-12 h-12 rounded-full ring-1">
          <img src={backToTopIcon} alt="Back to top" />
        </div>
        <div className="fixed hidden bottom-14 right-7 capitalize group-hover:block bg-gray-700 text-white text-sm rounded px-2 py-1">
          back to top!
        </div>
      </div>
    </>
  );
};

export default BackToHome;
