"use client";
import { useEffect, useState, type FC } from "react";
import { DesktopNavbar, MobileNavbar } from "./MobileandDesktopNavbar";

interface Navlinks {
  name: string;
  number: string;
  link: string;
}
export const resume =
  "https://drive.google.com/file/d/1-COEwJtG796gNmroKQcO1RpqudMt6r5D/view";
const Navbar: FC = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if we are in the browser
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia("(max-width: 760px)");
      setMatches(mediaQueryList.matches);

      const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
      mediaQueryList.addEventListener("change", listener);

      // Cleanup listener on component unmount
      return () => {
        mediaQueryList.removeEventListener("change", listener);
      };
    }
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
