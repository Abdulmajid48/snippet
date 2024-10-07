import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

interface Navlinks {
  name: string;
  number: string;
  link: string;
}
const Navbar: FC = () => {
  return (
    <nav className="sticky flex flex-row justify-between h-10 py-7 px-10">
      {/* Your logo */}
      <div>
        <Image src="/logo.svg" alt="" height={40} width={40} />
      </div>
      <div className="flex flex-row items-center justify-between gap-16 font-ubuntu-mono text-article">
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
            <button className="border-lightgreen text-lightgreen border rounded-md h-10 w-20">
              Resume
            </button>
          </div>
        </Link>
      </div>
    </nav>
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
