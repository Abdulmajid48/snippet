"use client";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home">
      <div className=" z-0 h-auto w-dvw flex flex-col gap-2 pl-6 sm:pl-[4rem] md:pl-20 pt-20 font-semibold mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hover:underline text-lightgreen font-ubuntu-mono font-normal"
        >
          Hi, my name is
        </motion.div>
        <br />
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-3xl sm:text-4xl md:text-[3.5rem] text-name mb-3 sm:mb-10 leading-normal">
            Abdul-Majid Aladejana.
          </p>

          <p className="hover:underline text-3xl sm:text-4xl md:text-[4rem] mb-5 sm:mb-10 leading-normal text-article">
            I build things for the web.
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-article font-normal w-auto sm:w-11/12 md:w-[65%] pr-3 leading-6 text-base"
        >
          I am a software engineer with 4+ years of experience, specializing in
          web development. My expertise includes Git, React, Next.js, Nodejs, Nest.js, Typescript
          JavaScript, HTML, and CSS, alongside a strong focus on collaboration
          and team-driven development. Currently, I am currently focused on building
          accessible, management-focused projects, prioritizing usability and
          functionality in every solution I create.
        </motion.p>
      </div>
    </section>
  );
};
export default Home;
