import Image from "next/image";
import StatsSection from "@/components/StatsSection";
import JobHeroBanner from "@/components/JobHeroBanner";

export default function Home() {
  return (
    <div className="items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <JobHeroBanner />
       <StatsSection />
    </div>
  );
}
