import Hero from "./hero/page";
import About from "@/components/custom/About";
import Projects from "@/components/custom/Projects";

export default function Home() {
  return (
   <div>
        <Hero />
        <About />
        <Projects />
   </div>
  );
}
