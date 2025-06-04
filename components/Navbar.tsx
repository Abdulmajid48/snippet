"use client";
import { useEffect, useState, type FC } from "react";
import { DesktopNavbar, MobileNavbar } from "./MobileandDesktopNavbar";

interface Navlinks {
  name: string;
  number: string;
  link: string;
}
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

// Resume Google Drive link
export const resume =
  "https://docs.google.com/document/d/1_FHECyKBjrg2uCEMhIAgxAsYXhTzrDt8/edit?usp=drivesdk&ouid=100783989995962945043&rtpof=true&sd=true";

// Navbar component
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


export default Navbar;
export { navLinks };
export type { Navlinks };
