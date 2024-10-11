"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";


export default function ContacticonsPage() {
  return (
    <div className="hidden min-[760px]:flex fixed z-50 ml-1 sm:ml-5 flex-col gap-3 items-center mt-[22rem]">
      <div style={{ color: "#ccd6f6" }} className="flex flex-col gap-7">
        <Link href="">
          <GitHubIcon />
        </Link>
        <Link href="">
          <LinkedInIcon />
        </Link>
        <Link href="">
          <XIcon />
        </Link>
        <Link href="">
          <InstagramIcon />
        </Link>
      </div>
      <div className=" border-l-2 border-l-name h-52"></div>
    </div>
  );
}
