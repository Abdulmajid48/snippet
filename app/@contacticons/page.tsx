"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

export default function ContacticonsPage() {
  return (
    <div className="max-[760px]:hidden flex fixed bottom-0 z-50 ml-1 sm:ml-5 flex-col gap-3 items-center">
      <div style={{ color: "#ccd6f6" }} className="flex flex-col gap-7">
        {linkList.map((list, index) => {
          const { linkIcon, href } = list;
          return (
            <Link key={index} href={href} target="_blank">
              {linkIcon}
            </Link>
          );
        })}
      </div>
      <div className=" border-l-2 border-l-name h-40"></div>
    </div>
  );
}

const linkList = [
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
    href: "",
  },
  {
    linkIcon: <InstagramIcon />,
    href: "",
  },
];
