"use client";

import Hero from "./pages/profile";
import Exp from "./pages/experience";
import Projects from "./pages/projects";
import { Highlights } from "./components/Highlights";
import { TechnicalSkills } from "./pages/skill";
import ContributionGraph from "./pages/github";

export default function App() {
  return (
    <main className="mx-auto flex w-full max-w-[34rem] min-w-0 flex-col gap-12 px-4 pt-12 font-sans">
      <Hero />
      <Exp />
      <Projects />
      <Highlights />
      <TechnicalSkills />
      <ContributionGraph />
    </main>
  );
}