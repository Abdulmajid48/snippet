"use client";

import { linkList } from "@/components/Contactme";
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
