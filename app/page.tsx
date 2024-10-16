"use client";

import Aboutme from "@/components/Aboutme";
import Built from "@/components/Built";
import Contactme from "@/components/Contactme";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Worked from "@/components/Worked";
import { motion } from "framer-motion";
import { createContext, Dispatch, SetStateAction, useState } from "react";

// Define the shape of your context
export interface UserContextType {
  toggle: boolean;
  menuButton?: () => void;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

// Create the context with an initial undefined value
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
const Page = () => {
  // Toggle menu Bar for Mobile view
  const [toggle, setToggle] = useState<boolean>(false);

  // Control Menu Bar for Mobile View
  const menuButton = (): void => {
    setToggle((prev: boolean) => !prev);
  };
   const contextValue: UserContextType = {
     menuButton,
     toggle,
     setToggle,
   };
  return (
    <UserContext.Provider value={contextValue}>
      <div className="bg-fullbg h-auto font-roboto relative overflow-hidden">
        <header>
          <Navbar />
        </header>
        <motion.main
          initial={{ filter: "blur(0px)" }}
          animate={{ filter: toggle ? "blur(4px)" : "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Home />
          <Aboutme />
          <Worked />
          <Built/>
          <Contactme/>
        </motion.main>
      </div>
    </UserContext.Provider>
  );
};
export default Page;
