import Image from "next/image";
import { SectionTopic } from "./Aboutme";
import { FC, useEffect, useState } from "react";
import { Github, LinkIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Projectprops {
  feature: string;
  projectname: string;
  description: string;
  tools: string[];
  github: string;
  live: string;
  image?: string;
  index?: number;
}

const Built = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if we are in the browser
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia("(max-width: 760px)");
      setMatches(mediaQueryList.matches);

      const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
      mediaQueryList.addEventListener("change", listener);

      // Cleanup listener on component unmount
      return () => {
        mediaQueryList.removeEventListener("change", listener);
      };
    }
  }, []);
  return (
    <section
      id="work"
      className="sm:w-5/6 m-auto mb-20 mt-40 relative overflow-hidden"
    >
      {/* Topic title */}
      <div className="mb-5 flex justify-center min-[760px]:justify-start items-center">
        <SectionTopic
          sectionnumber="03."
          sectionname=" Some Things I've Built"
        />
      </div>
      {/* Projects  */}
      {matches ? (
        /* Mobile view */
        <div className="flex flex-col gap-5">
          {Projects.map((item, index) => {
            return <Mobileview key={index} {...item} />;
          })}
        </div>
      ) : (
        /* Desktop view */
        <div className="flex flex-col gap-9 justify-center items-start">
          {Projects.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex items-center relative w-11/12 h-96 m-auto ${
                  index % 2 == 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Images container */}
                <Figurecontainer image={item.image} index={index} />
                <div
                  className={`${
                    index % 2 == 0 ? "absolute right-0" : "absolute left-0"
                  }  z-20 w-3/4 rounded-sm`}
                >
                  {/* Projects container */}
                  <Project key={index} index={index} {...item} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

// container for the image
const Figurecontainer: FC<Pick<Projectprops, "image" | "index">> = ({
  image,
  index,
}) => {
  // Use a default value for index if it's undefined
  const safeIndex = typeof index === "number" ? index : 0;
  return (
    <>
      <motion.figure
        initial={{ opacity: 0, y: "100px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        transition={{ ease: "easeInOut", duration: 1 }}
        key={index}
        className="relative flex"
      >
        {/* background color */}
        <div
          className={` ${
            safeIndex % 2 == 0 ? "absolute left-0" : "absolute right-0"
          } bg-[#10273aea] hover:bg-transparent h-[310px] w-[500px] bg-opacity-5 z-10`}
        ></div>
        {/* Image */}
        <div>
          {image && (
            <Image
              src={image}
              alt=""
              height={384}
              width={500}
              objectFit="contain"
            />
          )}
        </div>
      </motion.figure>
    </>
  );
};
// Individual project container
const Project: FC<Projectprops> = (props) => {
  const { feature, projectname, description, tools, github, live, index } =
    props;
  // Use a default value for index if it's undefined
  const safeIndex = typeof index === "number" ? index : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: "100px" }}
      whileInView={{ opacity: 1, y: "0px" }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className={`flex flex-col gap-4 py-4  ${
        safeIndex % 2 == 0 ? "items-end pr-4" : "items-start pl-4"
      }`}
    >
      <p className="text-lightgreen font-ubuntu-mono">{feature}</p>
      <p className="text-name text-xl">{projectname}</p>
      <div
        className={`bg-[#112240] h-auto w-5/6 px-4 py-4 text-article rounded-lg leading-relaxed  ${
          safeIndex ? "text-left" : "text-right"
        }`}
      >
        {description}
      </div>
      <ul className="flex flex-row gap-3 text-name">
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
      {/* Links for github and liveserver */}
      <div className="flex flex-row gap-2">
        <Link href={github}>
          <Github color="#fff" />
        </Link>
        <Link href={live}>
          {" "}
          <LinkIcon color="#fff" />
        </Link>
      </div>
    </motion.div>
  );
};

// MOBILE VERSION
const Mobileview: FC<Projectprops> = (props) => {
  const { feature, projectname, description, tools, github, live, image } =
    props;
  return (
    <motion.div
      initial={{ opacity: 0, y: "100px" }}
      whileInView={{ opacity: 1, y: "0px" }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="m-auto w-11/12 text-name rounded-md relative overflow-hidden"
    >
      {/* Blurred background layer */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: "#0d2034",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          filter: "blur(8px)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      />
      {/* Content layer */}
      <div className="relative z-10 h-auto w-full flex flex-col gap-3 justify-center items-start px-5 pl-6 py-3">
        <p className="text-lightgreen font-ubuntu-mono">{feature}</p>
        <p className="text-name font-bold text-xl">{projectname}</p>
        <div className="text-article">{description}</div>
        <ul className="flex flex-row gap-2 flex-wrap">
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
        <div className="flex flex-row gap-1">
          <Link href={github}>
            <Github color="#fff" />
          </Link>
          <Link href={live}>
            <LinkIcon color="#fff" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// list of the projects ive worked on
const Projects: Projectprops[] = [
  {
    feature: "Featured Project",
    projectname: "Agromart",
    image: "/agromart.png",
    description:
      "Our platform connects farmers and consumers for fresh, sustainable produce.",
    tools: ["React", "Node", "Postgresql", "Tailwind"],
    github: "https://github.com/Abdulmajid48/Agromart",
    live: "https://agromart-roan.vercel.app/",
  },
  {
    feature: "Featured Project",
    projectname: "Vesto",
    image: "/vestoweb.png",
    description: "All of your company financial accounts in one view",
    tools: ["Nextjs", "Tailwind", "Typescript"],
    github: "https://github.com/Abdulmajid48/cryptland",
    live: "https://cryptland.vercel.app/",
  },
  {
    feature: "Featured Project",
    projectname: "Stract",
    image: "/stract.png",
    description: "A Data Analysis Software For Your Business",
    tools: ["React", "Vite", "Tailwind"],
    github: "https://github.com/Abdulmajid48/stract",
    live: "https://stract.vercel.app/",
  },
  {
    feature: "Featured Project",
    projectname: "Cryptland",
    image: "/cryptlands.png",
    description: "The Finance Solutions For Your Business",
    tools: ["React", "Vite", "Tailwind"],
    github: "https://github.com/Abdulmajid48/cryptland",
    live: "https://cryptland.vercel.app/",
  },
];
export default Built;
