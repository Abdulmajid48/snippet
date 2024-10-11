import Aboutme from "@/components/Aboutme";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div className="bg-fullbg h-full font-roboto relative overflow-hidden">
      <header>
        <Navbar />
      </header>
      <main className="">
        <Home />
        <Aboutme />
      </main>
    </div>
  );
};
export default page;
