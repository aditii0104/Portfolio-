import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsMatrix from "@/components/SkillsMatrix";
import GitHubStats from "@/components/GitHubStats";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-noise">
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <SkillsMatrix />
      <GitHubStats />
      <About />
      <Footer />
    </main>
  );
}
