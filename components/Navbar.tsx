"use client";
import { useEffect, useState, type FC } from "react";
import { DesktopNavbar, MobileNavbar } from "./MobileandDesktopNavbar";

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
      <div className="w-dvw z-40">
        {matches ? <MobileNavbar /> : <DesktopNavbar />}
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
