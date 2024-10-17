import { motion } from "framer-motion";
import { Folder, LinkIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface ProjectProps {
  folder: string;
  link: string;
  name: string;
  description: string;
  tools: string[]; // tools is an array of strings
}
const Otherprojects = () => {
  return (
    <div className="flex flex-col justify-center gap-3 items-center mb-20 w-11/12 sm:w-4/5 m-auto">
      <p className="text-name text-3xl font-bold text-center">
        Other Noteworthy Projects
      </p>
      <p className="font-ubuntu-mono text-lightgreen mb-4 text-center">
        view the archive
      </p>
      <motion.div
        initial={{ opacity: 0, y: "100px" }} // Corrected initial style
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 1 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-5"
      >
        {Projectscontent.map((item, index) => (
          <Project key={index} {...item} />
        ))}
      </motion.div>
    </div>
  );
};

const Project: FC<ProjectProps> = (props) => {
  const { folder, link, name, description, tools } = props;
  return (
    <motion.div
      initial={{ borderTop: "2px solid #64ffda", height: "100%" }}
      whileInView={{ borderTop: "0px solid #64ffda" }}
      transition={{ duration: 1 }}
      className="bg-[#112240] w-11/12 sm:w-1/2 max-h-80 px-5 py-5 rounded-md flex flex-col gap-5 hover:border-b-2 border-b-lightgreen"
    >
      <div className="flex flex-row justify-between">
        <div style={{ color: "#64ffda" }}>
          <Link href={folder}>
            <Folder size={45} />
          </Link>
        </div>
        <div style={{ color: "#ccd6f6" }}>
          <Link href={link}>
            <LinkIcon />
          </Link>
        </div>
      </div>
      <div className="text-name">{name}</div>
      <div className="text-article">{description}</div>
      <div className="font-ubuntu-mono text-name flex flex-row gap-3">
        {tools.map((item, index) => (
          <ul key={index}>
            <li className="hover:underline">{item}</li>
          </ul>
        ))}
      </div>
    </motion.div>
  );
};

const Projectscontent: ProjectProps[] = [
  {
    folder: "https://tripace.vercel.app/",
    link: "https://github.com/Abdulmajid48/tripace",
    name: "Tripace",
    description:
      "A 17 pages Flight booking platform with taxi services and hotel accommodations.",
    tools: ["React", "Bootstrap"],
  },
  {
    folder: "https://abdulmajid.vercel.app/",
    link: "https://github.com/Abdulmajid48/abdulmajid",
    name: "First Portfolio",
    description:
      "my first Portfolio Website Showcasing projects with images or videos, brief descriptions, and links",
    tools: ["React", "Tailwind"],
  },
];
export default Otherprojects;
