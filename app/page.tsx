"use client";
import Hero from "./pages/profile";
import Exp from "./pages/experience";
import Projects from "./pages/projects";
import { Highlights } from "./components/Highlights";
import { TechnicalSkills } from "./pages/skill";
import ContributionGraph from "./pages/github";
export default function App() {
  return (
    <div className="flex flex-col gap-12 pt-12">
      <Hero />
      <Exp />
      <Projects />
      <Highlights />
      <TechnicalSkills />
      <ContributionGraph />
    </div>
  );
}
