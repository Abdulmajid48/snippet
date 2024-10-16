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
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 760px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 760px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <section
      id="work"
      className="sm:w-5/6 m-auto mb-60 mt-40 relative overflow-hidden"
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
            const {
              feature,
              projectname,
              description,
              tools,
              github,
              live,
              image,
            } = item;
            return (
              <Mobileview
                key={index}
                feature={feature}
                projectname={projectname}
                description={description}
                tools={tools}
                github={github}
                live={live}
                image={image}
              />
            );
          })}
        </div>
      ) : (
        /* Desktop view */
        <div className="flex flex-col gap-4 justify-center items-start">
          {Projects.map((item, index) => {
            const {
              feature,
              projectname,
              description,
              tools,
              github,
              live,
              image,
            } = item;
            return (
              <div
                key={index}
                className={`flex relative w-4/5 ${
                  index % 2 == 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Images container */}
                <Figurecontainer image={image} index={index} />
                <div
                  className={`${
                    index % 2 == 0 ? "absolute right-0" : "absolute left-0"
                  }  z-20 w-2/3 rounded-sm`}
                >
                  {/* Projects container */}
                  <Project
                    key={index}
                    index={index}
                    feature={feature}
                    projectname={projectname}
                    description={description}
                    tools={tools}
                    github={github}
                    live={live}
                  />
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
          } bg-[#10273aea] hover:bg-transparent h-[445px] w-[450px] bg-opacity-5 z-10`}
        ></div>
        {/* Image */}
        <div>
          {image && <Image src={image} alt="" height={10} width={450} />}
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
        className={`bg-[#112240] h-auto w-5/6 px-4 py-3 text-article text-sm rounded-lg  ${
          safeIndex ? "text-left" : "text-right"
        }`}
      >
        {description}
      </div>
      <ul className="flex flex-row gap-4 text-name">
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
      {/* Links for github and liveserver */}
      <div className="flex flex-row gap-1">
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
      <div className="relative z-10 h-auto w-full flex flex-col gap-4 justify-center items-start px-5 py-3">
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
    projectname: "Onlyfiat",
    image: "/cryptland.png",
    description:
      "Onlyfiat is a user-friendly crypto and giftcard trading platform that provides a safe and secure way to buy, sell, and trade digital assets. We are committed to providing our customers with the best possible experience, and we offer a wide range of features to make trading easy and convenient such as Instant deposits and withdrawals, Low fees, Secure trading, Wide range of assets and 24/7 customer support. Onlyfiat enables you to have a seamless trading experience.",
    tools: ["React", "Node", "Supabase", "Vite", "Tailwind", "Typescript"],
    github: "",
    live: "",
  },
  {
    feature: "Featured Project",
    projectname: "Onlyfiat",
    image: "/cryptland.png",
    description:
      "Onlyfiat is a user-friendly crypto and giftcard trading platform that provides a safe and secure way to buy, sell, and trade digital assets. We are committed to providing our customers with the best possible experience, and we offer a wide range of features to make trading easy and convenient such as Instant deposits and withdrawals, Low fees, Secure trading, Wide range of assets and 24/7 customer support. Onlyfiat enables you to have a seamless trading experience.",
    tools: ["React", "Node", "Supabase", "Vite", "Tailwind", "Typescript"],
    github: "",
    live: "",
  },
  {
    feature: "Featured Project",
    projectname: "Onlyfiat",
    image: "/cryptland.png",
    description:
      "Onlyfiat is a user-friendly crypto and giftcard trading platform that provides a safe and secure way to buy, sell, and trade digital assets. We are committed to providing our customers with the best possible experience, and we offer a wide range of features to make trading easy and convenient such as Instant deposits and withdrawals, Low fees, Secure trading, Wide range of assets and 24/7 customer support. Onlyfiat enables you to have a seamless trading experience.",
    tools: ["React", "Node", "Supabase", "Vite", "Tailwind", "Typescript"],
    github: "",
    live: "",
  },
];
export default Built;
