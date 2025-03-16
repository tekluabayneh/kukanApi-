import Button from "../button/button";

const Section = ({
  title,
  subtitle,
  description,
  image,
  buttons = [],
  social = [],
  reverse = true,
}) => (
  <section className="page w-full h-[40rem] md:h-screen pt-20 px-5 bg-gradient-to-t from-purple-50 to-amber-50">
    <div className="grid md:items-center h-screen grid-cols-1 md:grid-cols-2">
      {image && (
        <div
          className={`hidden md:block ${reverse ? "md:order-2" : "md:order-1"}`}
        >
          <img src={image} alt={title} />
          {social.length > 0 && (
            <div className="flex gap-5 ml-80 pt-1">
              {social.map(({ href, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={icon}
                    alt={href.includes("github") ? "GitHub" : "LinkedIn"}
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      )}
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold capitalize">
          {title}
        </h1>
        {subtitle && <h6 className="m-2">{subtitle}</h6>}
        <p className="text-sm p-2">{description}</p>
        <div className="flex gap-5 p-5">
          {buttons.map((btn, idx) => (
            <Button key={idx} {...btn} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Section;
