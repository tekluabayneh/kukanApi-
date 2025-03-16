import heroimage from "../assets/hero-image.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import secondHeroImage from "../assets/multiple-options.svg";
import WavyBuddies from "../assets/WavyBuddies.png";
export const sections = [
  {
    title: "Test REST API for Placeholder JSON data",
    subtitle:
      "Easily generate mock JSON data for your frontend using Kukandummyjson Server — no need for backend setup!",
    description:
      "Quickly simulate real-world API responses and seamlessly integrate mock data into your application to accelerate development and testing.",
    image: heroimage,
    buttons: [
      {
        text: "view on github",
        href: "https://github.com/tekluabayneh/Kukandummyjson",
        external: true,
      },
      { text: "read doc", to: "/Docs" },
    ],
    social: [
      { href: "https://github.com/tekluabayneh", icon: github },
      {
        href: "https://www.linkedin.com/in/teklu-abayneh",
        icon: linkedin,
      },
    ],
  },
  {
    title: "Instantly Usable Tools for Your Development Needs",
    description:
      "Access a collection of ready-to-use APIs that speed up your development process. Skip the setup and focus on building, testing, and deploying your projects with ease.",
    image: secondHeroImage,
    buttons: [{ text: "read doc", to: "/Docs" }],
  },
  {
    title: "Pre-built Tools for Your Development Needs",
    description:
      "Unlock a suite of ready-to-use tools designed to simplify and accelerate your development workflow.",
    image: WavyBuddies,
    buttons: [{ text: "try it now", to: "/Docs" }],
  },
];
export const resources = [
  {
    name: "product",
    icon: "m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9",
    why: [
      "Perfect for Learning: A simple and intuitive tool for practicing API requests and data management.",
      "Reliable for Production: Well-documented and fast, ideal for production apps, so you can focus on building features.",
      "Seamless Integration: Works effortlessly with modern technologies like React and Node.js.",
      "Real-World Data: Access real-world data to easily build features like user management and posts without creating your own database.",
    ],
  },
  {
    name: "quotes",
    icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z",
    why: [
      "Perfect for Learning: A simple and intuitive tool for practicing API requests and working with dynamic quote data.",
      "Reliable for Production: Well-documented and fast, ideal for production apps, allowing you to focus on delivering meaningful quotes.",
      "Seamless Integration: Easily integrates with modern technologies like React, Node.js, and other frameworks.",
      "Real-Time Inspiration: Access a wide variety of quotes to inspire your users, perfect for features like daily quote generators or motivational apps.",
    ],
  },
  {
    name: "posts",
    icon: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10",
    why: [
      "Perfect for Learning: A simple and intuitive tool for practicing API requests and managing post data.",
      "Reliable for Production: Well-documented and fast, ideal for production apps, allowing you to focus on building post-related features.",
      "Seamless Integration: Easily integrates with modern technologies like React, Node.js, and other frameworks.",
      "Real-World Data: Access real-world post data, making it easy to build features like blog posts, articles, or product reviews.",
    ],
  },
  {
    name: "users",
    icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
    why: [
      "Perfect for Learning: A simple and intuitive tool for practicing API requests and managing user data.",
      "Reliable for Production: Well-documented and fast, ideal for production apps, allowing you to focus on building user management features.",
      "Seamless Integration: Easily integrates with modern technologies like React, Node.js, and other frameworks.",
      "Real-World Data: Access real-world user data, making it easy to create personalized user experiences and manage profiles.",
    ],
  },
];

export const footer = {
  title: "Thank you!",
  text: `Thank you for being a valued member of the Kukandummyjson community 
  
  we would love to show you how did it you can see that by clicking the github button and don't forget to like the repo 
  `,
  social: [
    { href: "https://github.com/tekluabayneh", icon: github },
    {
      href: "https://www.linkedin.com/in/teklu-abayneh-8b93492b8/",
      icon: linkedin,
    },
  ],
};
