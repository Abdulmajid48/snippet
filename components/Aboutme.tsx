"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Aboutme = () => {
  return (
    <section>
      <div className=" w-5/6 sm:w-3/4 m-auto mt-40">
        <div className=" flex flex-rol gap-2 mb-5 items-center text-name text-2xl font-ubuntu-mono">
          <div>
            <span className="font-ubuntu-mono text-lightgreen text-base">
              01.
            </span>
            About Me
          </div>
          <div className="border-b border-b-white w-1/3"></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-start">
          <motion.article
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-5/6 sm:w-4/5 text-article flex flex-col gap-10 text-base font-roboto"
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
            <ul>
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
            className="relative"
          >
            <div className="w-80 h-80 border-2 border-lightgreen rounded-sm relative hover:top-5"></div>
            <Image
              src="/favicon.ico"
              alt=""
              height={300}
              width={300}
              className="absolute bottom-2 right-2"
            />
            <div className="w-[300px] h-[300px] absolute bottom-2 right-2 bg-lightgreen opacity-30 hover:opacity-0"></div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};
export default Aboutme;
