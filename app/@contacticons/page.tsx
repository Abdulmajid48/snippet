import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function ContacticonsPage() {
  return (
    <div className="fixed z-50 ml-5 flex flex-col gap-3 items-center mt-80">
      <div style={{ color: "#ccd6f6" }} className="flex flex-col gap-5">
        <GitHubIcon />
        <LinkedInIcon />
        <XIcon />
        <InstagramIcon />
      </div>
      <div className=" border-l-2 border-l-name h-52"></div>
    </div>
  );
}
