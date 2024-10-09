import Home from "@/components/Home";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div className="bg-fullbg h-full font-roboto relative">
      <header>
        <Navbar />
      </header>
      <main>
        <Home/>
      </main>
    </div>
  );
};
export default page;
