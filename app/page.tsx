import LightRays from "@/app/components/rays/LightRays";
import Badge from "./components/badge/Badge";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-[5000px] bg-[#07051f]">
      <LightRays />
      <Badge />
      <Hero />
    </div>
  );
}
