"use client";
import { Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, type FC } from "react";
import Drawer from "./Drawer";

interface Navlinks {
  name: string;
  number: string;
  link: string;
}
const Navbar: FC = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 760px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 760px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div>
      {matches ? (
        <Drawer/>
      ) : (
        <nav className="sticky flex flex-row justify-between items-center h-10 py-7 px-10">
          {/* Your logo */}
          <div>
            <Zap strokeWidth={1.25} size={40} color=" #64ffda" />
          </div>
          <div className="flex flex-row items-center justify-between gap-20 font-ubuntu-mono text-article text-[15px]">
            {/* Your Navlinks */}
            {navLinks.map((item, index) => {
              const { name, number, link }: Navlinks = item;
              return (
                <Link key={index} href={link}>
                  <div>
                    <span className="text-lightgreen">{number}</span>
                    {name}
                  </div>
                </Link>
              );
            })}
            {/* Resume button */}
            <Link href="">
              <div>
                <button className="border-lightgreen text-lightgreen border rounded-md h-9 w-[5.5rem]">
                  Resume
                </button>
              </div>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

const navLinks: Navlinks[] = [
  {
    number: "01.",
    name: "About",
    link: "#about",
  },
  {
    number: "02.",
    name: "Experience",
    link: "#experience",
  },
  {
    number: "03.",
    name: "Work",
    link: "#work",
  },
  {
    number: "04.",
    name: "Contact",
    link: "#contact",
  },
];
export default Navbar;
export { navLinks };
export type { Navlinks };
