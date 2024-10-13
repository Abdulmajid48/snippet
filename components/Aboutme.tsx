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
        <SectionTopic sectionnumber="01." sectionname=" About Me" />
        <div className="flex flex-col md:flex-row gap-5 md:justify-center md:items-start mt-8">
          <motion.article
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-11/12 m-auto md:w-4/5 text-article grid grid-cols-1 gap-10 text-base font-roboto"
          >
            <p>
              In my role as a frontend developer, I leverage my expertise in
              React, Typescript, and Next.js to craft captivating user
              interfaces that guarantee a seamless and visually engaging user
              experience.
            </p>
            <p>
              My skill set extends beyond frontend development, as I possess
              hands-on experience in building basic backends for personal
              projects and production-ready applications.
            </p>
            <p>
              My familiarity with frameworks like Tailwind and Material UI adds
              versatility to my toolkit, allowing me to create stylish and
              functional web applications.
            </p>
            <p>
              While I consider myself a generalist, my primary focus remains
              dedicated to the realm of frontend development..
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul className="font-ubuntu-mono grid grid-cols-2 gap-x-8 w-1/2 md:w-4/5 m-auto list-greek list-inside">
              <li>JavaScript (ES+6)</li>
              <li>React </li>
              <li> Next JS </li>
              <li>Node JS</li>
              <li>Typescript</li>
              <li>Tailwind</li>
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
    <div className="m-auto md:m-0 flex flex-col md:flex-row justify-start items-start md:items-center gap-2 w-11/12 mb-5 text-name text-2xl font-ubuntu-mono">
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
