"use client";
import Link from "next/link";
import { Navlinks, navLinks } from "./Navbar";
import { AlignJustify, X, Zap } from "lucide-react";
import { useState } from "react";

const Drawer = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const Menubutton = (): void => {
    setToggle((prev: boolean) => !prev);
  };
  return (
    <div>
      {toggle ? (
        <nav className="h-full w-[80%]">
          <div className="flex flex-col items-center justify-between gap-3font-ubuntu-mono text-article text-[15px]">
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
      ) : (
        <nav className="fixed flex flex-row justify-between items-center py-7 px-10 h-10 w-full">
          {/* Your logo */}
          <div>
            <Zap strokeWidth={1.25} size={40} color=" #64ffda" />
          </div>
          <div onClick={Menubutton}>{toggle ? <AlignJustify /> : <X />}</div>
        </nav>
      )}
    </div>
  );
};
export default Drawer;
