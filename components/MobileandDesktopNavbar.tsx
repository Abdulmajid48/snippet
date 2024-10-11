"use client";
import Link from "next/link";
import { Navlinks, navLinks } from "./Navbar";
import { AlignJustify, X, Zap } from "lucide-react";
import { type FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SidebarProps {
  toggle: boolean;
}
const MobileNavbar = () => {
  // Toggle menu Bar for Mobile view
  const [toggle, setToggle] = useState<boolean>(false);

  // Control Menu Bar for Mobile View
  const Menubutton = (): void => {
    setToggle((prev: boolean) => !prev);
  };
  return (
    <div className="">
      <nav className="z-20 bg-fullbg fixed flex flex-row justify-between items-center py-2 px-2 h-10 w-dvw">
        {/* Your logo */}
        <div>
          <Zap strokeWidth={1.25} size={40} color=" #64ffda" />
        </div>
        <div onClick={Menubutton}>
          {toggle ? (
            <motion.div
              initial={{}}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <X color="#64ffda" />
            </motion.div>
          ) : (
            <AlignJustify color=" #64ffda" />
          )}
        </div>
      </nav>
      <Sidebar toggle={toggle} />
    </div>
  );
};

// Mobile View Side Bar
const Sidebar: FC<SidebarProps> = ({ toggle }) => {
  return (
    <div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: toggle ? 1 : 0, x: "0%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed top-0 right-0 z-10 h-full w-3/4 bg-fullbg flex flex-row justify-center item"
          >
            <nav className="h-full pt-40">
              <div className="flex flex-col items-center justify-between gap-3 m-auto font-ubuntu-mono text-article text-[15px ]">
                {/* Your Navlinks */}
                {navLinks.map((item, index) => {
                  const { name, number, link }: Navlinks = item;
                  return (
                    <Link key={index} href={link}>
                      <div className="flex flex-col align-middle text-center">
                        <span className="text-lightgreen">{number}</span>
                        <p>{name}</p>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DesktopNavbar = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export { navLinks, DesktopNavbar, MobileNavbar };