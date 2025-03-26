import React from "react";
import { sections, resources, footer } from "../../data/HomeData";
import Section from "../../components/section/Section";
import Resource from "../../components/Resource/Resource";
import BackToHome from "../../components/BackToHome";

const Home = () => (
  <div className="bg-white">
    <BackToHome />
    {/* Dynamic Sections */}
    {sections.map((section, idx) => (
      <Section key={idx} {...section} reverse={idx % 2 === 1} />
    ))}

    {/* Resources Section */}
    <section className="page w-full h-auto pt-20 px-5 bg-gradient-to-t from-purple-50 to-amber-50">
      <div className="text-center">
        <h1 className="text-[3rem] leading-11 font-extrabold capitalize">
          Essential Resources:
        </h1>
        <p>
          Gain access to well-structured, real-world data, ready to integrate
          and use seamlessly in your projects.
        </p>
        <div className="tabParent grid grid-cols-1 gap-5 p-5">
          {resources.map((resource) => (
            <Resource key={resource.name} {...resource} />
          ))}
        </div>
      </div>
    </section>

    {/* Footer Section */}
    <section className="xl:mt-44 md:mt-0 page text-center bg-gradient-to-r from-teal-50 to-blue-50 grid place-content-center w-full h-[40rem] md:h-screen pt-20 px-5">
      <div className="grid place-content-center">
        <h1 className="text-[3rem] leading-11 font-extrabold capitalize">
          {footer.title}
        </h1>
        <p className="font-bold">{footer.text}</p>
        <div className="flex gap-5 m-auto pt-10">
          {footer.social.map(({ href, icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <img
                className="hover:scale-125 transition-all"
                src={icon}
                alt={href.includes("github") ? "GitHub" : "LinkedIn"}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Home;
