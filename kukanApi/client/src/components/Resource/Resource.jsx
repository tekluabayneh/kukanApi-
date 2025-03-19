const Resource = ({ name, icon, why }) => (
  <div className="resorce h-52 group overflow-hidden flex flex-col bg-gradient-to-r px-6 py-4 rounded-lg shadow from-purple-300 via-blue-400 to-lime-200 font-bold capitalize hover:bg-gradient-to-r hover:from-transparent hover:via-pink-100 hover:to-transparent">
    <div className="flex items-center justify-between">
      <span className="customfont text-lg font-extrabold group-hover:text-pink-400">
        {name}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 group-hover:text-pink-400"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
    </div>
    <div className="text-center pt- px-12">
      <h6 className="font-bold">Why Use Our {name} API?</h6>
      {why.map((text, idx) => (
        <p key={idx} className="text-[10px]">
          {text}
        </p>
      ))}
    </div>
  </div>
);

export default Resource;
