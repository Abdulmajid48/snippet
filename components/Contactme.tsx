import { Instagram } from "@mui/icons-material";
import { Github, Linkedin, X } from "lucide-react";
import Link from "next/link";

const Contactme = () => {
  return (
    <footer id="contact" className="relative">
      <div className="flex flex-col items-center justify-center gap-5 mb-2">
        <div className="font-ubuntu-mono text-lightgreen">
          04. What&apos;s next?
        </div>
        <h1 className="text-name sm:text-3xl text-2xl">Get In touch</h1>
        <p className="sm:w-1/2 w-2/3 text-article text-center sm:px-10">
          I’m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>
        <Link href="mailto:aladejanamajid48@gmail.com">
          <button className="h-12 w-28 border border-lightgreen rounded-md bg-transparent hover:bg-lightgreen hover:bg-opacity-30 text-lightgreen text-center align-middle">
            Say Hello
          </button>
        </Link>
        <div>
            <div>
                <Github/>
                <X/>
                <Linkedin/>
                <Instagram/>
            </div>
        </div>

        <p className="font-ubuntu-mono text-name mt-10 text-center">
          Designed by Brittany Chiang & Built Abdul-Majid Aladejana
        </p>
      </div>
    </footer>
  );
};
export default Contactme;
