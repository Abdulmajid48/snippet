"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface SectionType {
  sectionname: string;
  sectionnumber: string;
}
const Aboutme = () => {
  return (
    <section id="about">
      <div className=" w-11/12 md:w-3/4 m-auto mt-40">
        <div className="mb-5 w-11/12 m-auto sm:m-0">
          <SectionTopic sectionnumber="01." sectionname=" About Me" />
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:justify-center md:items-start mt-8">
          <motion.article
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-11/12 m-auto md:w-4/5 text-article grid grid-cols-1 gap-10 text-base font-roboto"
          >
            <p>
              As a frontend developer, I specialize in creating dynamic,
              user-friendly interfaces using React, TypeScript, and Next.js,
              ensuring smooth and visually appealing user experiences
            </p>
            <p>
              Beyond frontend work, I have practical experience building
              backends for both personal projects and production applications,
              giving me a well-rounded development background.
            </p>
            <p>
              I’m also proficient with frameworks like Tailwind, Shadcn UI,
              Daisy UI and Material UI, which allow me to design sleek,
              responsive, and functional web applications.
            </p>
            <p>
              While I consider myself a generalist, my main focus lie in
              frontend development.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul className="font-ubuntu-mono grid grid-cols-2 gap-x-8 w-1/2 md:w-4/5 m-auto list-greek list-inside">
              <li>JavaScript (ES+6)</li>
              <li>React </li>
              <li> Next JS </li>
              <li>Node JS</li>
              <li>Typescript</li>
              <li>Tailwind</li>
              <li>Postgresql</li>
            </ul>
          </motion.article>
          <motion.figure
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mt-5 m-auto md:m-0"
          >
            <div className="w-80 h-[300px] border-2 border-lightgreen rounded-md relative hover:bottom-3 hover:right-3"></div>
            <Image
              src="/passport.jpg"
              alt=""
              height={300}
              width={300}
              className="absolute bottom-5 right-5 rounded-md"
            />
            <div className="w-[300px] h-[300px] absolute bottom-5 right-5 rounded-md bg-lightgreen opacity-30 hover:opacity-0"></div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

const SectionTopic: FC<SectionType> = (props: SectionType) => {
  const { sectionnumber, sectionname } = props;
  return (
    <div className="m-auto md:m-0 flex flex-col md:flex-row justify-start items-start md:items-center gap-2 w-11/12 mx-0 text-name text-2xl font-ubuntu-mono">
      <div>
        <span className="font-ubuntu-mono text-lightgreen text-base">
          {sectionnumber}
        </span>
        {sectionname}
      </div>
      <div className="border-b border-b-white w-11/12 md:w-1/3"></div>
    </div>
  );
};

export default Aboutme;
export { SectionTopic };
