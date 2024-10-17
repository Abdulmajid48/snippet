"use client";

import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contactme = () => {
  return (
    <footer id="contact" className="relative">
      <div className="flex flex-col items-center justify-center gap-1 sm:gap-3 mb-4 text-article">
        <div className="font-ubuntu-mono text-lightgreen">
          04. What&apos;s next?
        </div>
        <h1 className="text-name sm:text-3xl text-2xl">Get In touch</h1>
        <p className="w-4/5 sm:w-4/5 md:w-3/5 lg:w-1/2 text-center sm:px-10">
          I’m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>
        <Link href="mailto:aladejanamajid48@gmail.com">
          <button className="h-12 w-28 my-6 border border-lightgreen rounded-md bg-transparent hover:bg-lightgreen hover:bg-opacity-30 text-lightgreen text-center align-middle">
            Say Hello
          </button>
        </Link>
        <div className="min-[760px]:hidden block mb-1">
          <div
            style={{ color: "#8892b0" }}
            className="flex flex-row justify-center items-center gap-3 mb-1"
          >
            {linkList.map((item, index) => {
              const { linkIcon, href } = item;
              return (
                <Link key={index} href={href} target="_blank">
                  {linkIcon}
                </Link>
              );
            })}
          </div>
          <Link href="mailto:aladejanamajid48@gmail.com">
            <p className="mt-2">aladejanamajid48@gmail.com</p>
          </Link>
        </div>
        <p className="font-ubuntu-mono text-center">
          Designed by <a href="https://brittanychiang.com/">Brittany Chiang</a>{" "}
          & Built by Abdul-Majid Aladejana
        </p>
      </div>
    </footer>
  );
};

export const linkList = [
  {
    linkIcon: <GitHubIcon />,
    href: "https://github.com/Abdulmajid48",
  },
  {
    linkIcon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/abdul-majid-aladejana/",
  },
  {
    linkIcon: <XIcon />,
    href: "https://x.com/aladejanaamajid",
  },
  {
    linkIcon: <InstagramIcon />,
    href: "",
  },
];
export default Contactme;
