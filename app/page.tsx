import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import News from "@/components/News";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Activities />
      <News />
      <Contact />
    </>
  );
}