import { useState } from "react";
import {
  ViewToggle,
  ProjectLinks,
  Tags,
  PillLink,
  Initial,
} from "../components/bullets";
import { PROJECTS } from "../../data/projects";
import AccordionCard from "../components/accordion-card";
import { SectionHeading } from "../components/section-heading";
const FEATURED_PROJECT_IDS = ["claritycxr", "tunnel", "openlink", "klyro"];
export default function Projects() {
  const [projectView, setProjectView] = useState<"list" | "grid">("list");
  const projects = FEATURED_PROJECT_IDS.map((id) =>
    PROJECTS.find((item) => item.id === id),
  ).filter((project): project is (typeof PROJECTS)[number] => Boolean(project));
  return (
    <>
      <section
        aria-labelledby="projects-heading"
        className="mx-auto w-full max-w-[34rem] font-sans"
      >
        <SectionHeading id="projects-heading">Projects</SectionHeading>
        <div id="projects">
          <div className="mb-4 flex justify-end">
            <ViewToggle view={projectView} onChange={setProjectView} />
          </div>
          {projectView === "list" ? (
            <div className="space-y-2">
              {projects.map((project) => (
                <AccordionCard
                  key={project.id}
                  logo={<Initial name={project.title} />}
                  title={project.title}
                  trailing={<ProjectLinks project={project} />}
                >
                  {project.summary ? (
                    <p className="mb-3 text-[12px] leading-[1.6] text-[var(--muted)]">
                      {project.summary}
                    </p>
                  ) : null}
                </AccordionCard>
              ))}
            </div>
          ) : (
            <div className="grid gap-2 sm:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3.5 transition-colors hover:border-[color-mix(in_srgb,var(--foreground)_20%,var(--border))]"
                >
                  <div className="flex items-center gap-2">
                    <span className="min-w-0 flex-1 truncate text-[13px] font-medium text-[var(--foreground)]">
                      {project.title}
                    </span>
                    <ProjectLinks project={project} />
                  </div>
                  {project.techStack.skill ? (
                    <Tags items={project.techStack.skill} />
                  ) : null}
                </div>
              ))}
            </div>
          )}
          <div className="mt-4">
            <PillLink href="/projects">View all</PillLink>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-2 font-serif text-[18px] font-normal leading-tight tracking-[-0.01em] text-[var(--foreground)]">
            Writing
          </h3>
          <p className="text-[15px] leading-relaxed text-[var(--muted)]">
            Notes on frontend engineering and what I&apos;m learning.
          </p>
          <div className="mt-3">
            <PillLink href="/blog">Read the blog</PillLink>
          </div>
        </div>
      </section>
    </>
  );
}
