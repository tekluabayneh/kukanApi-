import { Link } from "react-router-dom";

const Button = ({ text, href, to, external }) => (
  <button className="customfont bg-gradient-to-r px-6 py-2 rounded-lg shadow from-purple-700 via-blue-400 to-lime-400 font-bold capitalize hover:bg-transparent hover:text-black">
    {external ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    ) : (
      <Link to={to}>{text}</Link>
    )}
  </button>
);

export default Button;
