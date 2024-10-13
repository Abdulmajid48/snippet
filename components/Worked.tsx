import { useState, type FC } from "react";
import { SectionTopic } from "./Aboutme";
import { motion } from "framer-motion";

interface Workgridtype {
  name: string;
  jobtype: string;
  duration: string;
  functions: string[];
}

const Worked = () => {
  return (
    <section className="my-20" id="experience">
      <div className="w-5/6 m-auto md:w-3/4 md:m-auto">
        <SectionTopic sectionnumber="02." sectionname=" Where I've worked" />
        <Workgrid />
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
    <div className="flex flex-col sm:flex-row gap-2">
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
    <div className="flex sm:flex-col flex-row gap-2 text-article">
      {Workplace.map((item, workindex) => {
        const { name } = item;
        const isSelected = selectedWorkplaceIndex === workindex;
        return (
          <div
            key={workindex}
            className="flex flex-col-reverse sm:flex-row gap-0 py-1 cursor-pointer relative w-20 sm:w-28"
            onClick={() => HandleSelect(workindex)}
          >
            {isSelected && (
              <motion.div
                className="absolute sm:left-0 w-20 h-1 sm:w-1 sm:h-10 bg-lightgreen rounded-md"
                layoutId="indicator"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                whileHover={{ scale: 0.9 }}
              ></motion.div>
            )}
            <div className="w-auto sm:w-20 h-10 rounded-[0.2rem] hover:bg-lightgreen hover:bg-opacity-15 sm:bg-opacity-25 flex flex-row justify-center items-center sm:justify-start sm:pl-3 font-ubuntu-mono">
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
        <div>
          {selectedWorkplace.map((item, index) => {
            const { duration, functions, jobtype } = item;
            return (
              <div key={index}>
                <ul className="list-greek list-inside">
                  <li key={index} className="mb-2">
                    {functions.map((item, index))}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
const Workplace: Workgridtype[] = [
  {
    name: "Qpay",
    jobtype: "Software Engineer @ Flincap",
    duration: "May 2023 - Jan 2024",
    functions: [
      "As a collaborative frontend developer, I led a comprehensive website overhaul with a talented team,",
      "I actively contributed to design discussions, proposing implementation strategies to ensure a seamless user experience. I actively contributed to design discussions, proposing implementation strategies to ensure a seamless user experience.",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a weekly basis",
      "I collaborated with backend developers, we integrated front end components with RESTful APIs.",
    ],
  },
  {
    name: "Mpay",
    jobtype: "",
    duration: "",
    functions: [
      "wwwAs a collaborative frontend developer, I led a comprehensive website overhaul with a talented team,",
      "I actively contributed to design discussions, proposing implementation strategies to ensure a seamless user experience. I actively contributed to design discussions, proposing implementation strategies to ensure a seamless user experience.",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a weekly basis",
      "I collaborated with backend developers, we integrated front end components with RESTful APIs.",
    ],
  },
  {
    name: "Tpay",
    jobtype: "",
    duration: "",
    functions: [
      "As a collaborative frontend developer, I led a comprehensive website overhaul with a talented team,",
      "I actively contributed to design discussions, proposing implementation strategies to ensure a seamless user experience. I actively contributed to design discussions, proposing implementation strategies to ensure a seamless user experience.",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a weekly basis",
      "I collaborated with backend developers, we integrated front end components with RESTful APIs.",
    ],
  },
  {
    name: "Spay",
    jobtype: "",
    duration: "",
    functions: [
      "As a collaborative frontend developer, I led a comprehensive website overhaul with a talented team,",
      "I actively contributed to design discussions, proposing implementation strategies to ensure a seamless user experience. I actively contributed to design discussions, proposing implementation strategies to ensure a seamless user experience.",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a weekly basis",
      "I collaborated with backend developers, we integrated front end components with RESTful APIs.",
    ],
  },
];
export { Workgrid };
export default Worked;
