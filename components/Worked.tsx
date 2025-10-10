import { useContext, useState, type FC } from "react";
import { SectionTopic } from "./Aboutme";
import { motion } from "framer-motion";
import { UserContext } from "@/app/page";

interface Workgridtype {
  name: string;
  jobtype: string;
  duration: string;
  functions: string[];
}
const Workplace: Workgridtype[] = [
  {
    name: "PhysioConnect",
    jobtype: "Fullstack Developer (Sole Developer)",
    duration: "2025 - Present",
    functions: [
      "Developed the entire PhysioConnect platform as the sole fullstack developer",
      "Architected and implemented backend services using NestJS, Prisma ORM, and PostgreSQL",

      "Implemented secure payment systems using Stripe SDKs",
      "Implemented secure authentication and role-based authorization using Passport and JWT",
      "Built real-time features with WebSockets and Socket.IO for interactive sessions",
      "Developed video/audio processing features with FFmpeg, ffprobe, and AWS S3 storage",
      "Designed modern and responsive UI using Next.js, React, Tailwind, Material UI, Lucide React, Shadcn UI, and Framer Motion",
      "Managed state efficiently with Zustand and optimized client-server communication using Axios",
      "Implemented caching and scheduling with Redis and NestJS Schedule for performance improvements",
      "Integrated email, notifications, and file uploads with Nodemailer, Multer, and AWS SDK",
    ],
  },
  {
    name: "Arriaayah",
    jobtype: "Lead developer, Backend developer",
    duration: "2025 - Present",
    functions: [
      "Led a cross-functional team through the entire development lifecycle of a web application",
      "Served as the sole backend developer, responsible for backend architecture and implementation",
      "Built scalable backend services using NestJS and TypeScript",
      "Designed and implemented RESTful APIs for seamless communication between frontend and backend",
      "Integrated PostgreSQL using Prisma ORM for database management",
      "Handled authentication, authorization, and data storage via Supabase",
      "Implemented RedisStore for efficient caching and improved performance",
      "Oversaw project planning and task delegation",
    ],
  },
  {
    name: "Agromart",
    jobtype: "Fullstack developer",
    duration: "",
    functions: [
      "I developed a fullstack app and Leveraged Material UI, Shadcn UI and other visually appealing UI components using",
      "React",
      "Tailwind",
      "Nodejs",
      "Postgresql",
    ],
  },
  {
    name: "Vesto",
    jobtype: "Frontend Developer",
    duration: "",
    functions: [
      "I deveoped financial account app and Leveraged Material UI, and other visually appealing UI using",
      " Nextjs",
      "Tailwind",
      "Typescript",
    ],
  },
  // {
  //   name: "Cryptland",
  //   jobtype: "Frontend Developer",
  //   duration: "",
  //   functions: [
  //     "I deveoped financial account app and Leveraged Material UI and other visually appealing UI using",
  //     "React",
  //     "Tailwind",
  //   ],
  // },
  // {
  //   name: "Stract",
  //   jobtype: "Frontend Developer",
  //   duration: "",
  //   functions: [
  //     "I deveoped financial account app and Leveraged Material UI and other visually appealing UI using",
  //     " React",
  //     "Tailwind",
  //   ],
  // },
];

const Worked = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("MobileNavbar must be used within a UserContext.Provider");
  }
  return (
    <section id="experience" className="sm:mt-40 mt-20">
      <div className="flex flex-row justify-center items-center md:w-1/2 m-auto w-4/5">
        <motion.div
          className=""
          initial={{ scale: 1.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTopic sectionnumber="02." sectionname=" Where I've worked" />
          <Workgrid />
        </motion.div>
      </div>
    </section>
  );
};

const Workgrid: FC = () => {
  // Place the selected workplace in usestate and Select the first workplace or null if Workplace is empty
  const [selectedWorkplace, setSelectedWorkplace] =
    useState<Workgridtype | null>(Workplace.length > 0 ? Workplace[0] : null);
  // State to hold the index of the selected workplace
  const [selectedWorkplaceIndex, setSelectedWorkplaceIndex] = useState<
    number | null
  >(0); // Initialize the selected index
  // Selected workplace to view
  const HandleSelect = (workindex: number) => {
    const workplaceresult = Workplace.find(
      (item, index) => workindex === index
    );
    setSelectedWorkplace(workplaceresult || null); // Update the selected workplace
    setSelectedWorkplaceIndex(workindex); // Update the selected workplace index
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-5 sm:mt-10 ">
      <div className="w-auto">
        <Workplacename
          HandleSelect={HandleSelect}
          selectedWorkplaceIndex={selectedWorkplaceIndex}
        />
      </div>
      <Workdetails selectedWorkplace={selectedWorkplace} />
    </div>
  );
};

// --------------------------------Structures----------------------------------------------
// Display Names of Workplace
const Workplacename: FC<{
  HandleSelect: (workindex: number) => void;
  selectedWorkplaceIndex: number | null;
}> = ({ HandleSelect, selectedWorkplaceIndex }) => {
  return (
    <div className="sm:flex sm:flex-col grid grid-cols-4 grid-rows-1 sm:gap-3 text-article text-[12px]">
      {Workplace.map((item, workindex) => {
        const { name } = item;
        const isSelected = selectedWorkplaceIndex === workindex;
        return (
          <div
            key={workindex}
            className="flex flex-col-reverse sm:flex-row gap-0 py-1 cursor-pointer relative w-16 sm:w-28"
            onClick={() => HandleSelect(workindex)}
          >
            {isSelected && (
              <motion.div
                className="absolute sm:left-0 w-16 h-1 sm:w-1 sm:h-10 bg-lightgreen rounded-md"
                layoutId="indicator"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                whileHover={{ scale: 0.9 }}
              ></motion.div>
            )}
            <div className="w-full sm:w-64 h-10 rounded-[0.2rem] hover:bg-lightgreen hover:bg-opacity-15 sm:bg-opacity-25 flex flex-row justify-center items-center gap-8 sm:gap-0 sm:justify-start sm:pl-3 font-ubuntu-mono text-[12px] sm:text-[16px]">
              {name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Workplace Details

const Workdetails: FC<{ selectedWorkplace: Workgridtype | null }> = ({
  selectedWorkplace,
}) => {
  return (
    <div>
      {selectedWorkplace && (
        <div className=" grid grid-cols-1 gap-2 pt-1">
          {/* Display jobtype and duration */}
          <div className="text-xl  text-name font-semibold">
            {selectedWorkplace.jobtype}
          </div>
          <div className="font-ubuntu-mono text-name">
            {selectedWorkplace.duration}
          </div>
          <ul className="list-greek list-inside text-article">
            {/* Iterate through functions */}
            {selectedWorkplace.functions.map((func, index) => (
              <li key={index} className="mb-2">
                {func}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { Workgrid };
export default Worked;
