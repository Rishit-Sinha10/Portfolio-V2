import AccordionCard from "../components/accordion-card";
import TTMLogo from "../../public/Images/ttm.png";
import NextLearnLogo from "../../public/Images/NextLearn.png";
import HarnavVenturesLogo from "../../public/Images/logo.png";
import Image, { type StaticImageData } from "next/image";
import { Tags, Bullets } from "../components/bullets";
import { SectionHeading } from "../components/section-heading";
type ExperienceItem = {
  id: string;
  logo: StaticImageData;
  title: string;
  subtitle: string;
  period: string;
  bullets: string[];
  tags: string[];
};
const EXPERIENCE: ExperienceItem[] = [
  {
    id: "harnav-ventures",
    title: "Harnav Ventures",
    subtitle: "Tech Intern",
    logo: HarnavVenturesLogo,
    period: "Sep 2026 – Present",
    bullets: [
      "Built and deployed a responsive business website with Next.js and TypeScript, including product catalog pages to showcase product offerings and manufacturing capabilities.",
      "Achieved Lighthouse scores above 90 on both mobile and desktop audits through performance and responsive UI optimizations.",
      "Implemented technical SEO: metadata, canonical URLs, Open Graph tags, and structured data.",
    ],
    tags: ["Next.js", "TypeScript", "Technical SEO", "Performance"],
  },
  {
    id: "tasty-millets",
    title: "The Tasty Millets",
    subtitle: "Shopify Developer",
    logo: TTMLogo,
    period: "Jun 2026 – Aug 2026",
    bullets: [
      "Building custom Shopify theme components for production sites.",
      "Improving storefront performance.",
      "Handling technical SEO.",
    ],
    tags: ["Shopify Liquid", "Performance", "Technical SEO"],
  },
  {
    id: "nextlearn-technologies",
    title: "NextLearn Technologies",
    subtitle: "Full-Stack Intern",
    logo: NextLearnLogo,
    period: "Mar 2026 – Jun 2026",
    bullets: [
      "Developed full-stack application features using React, REST APIs, and a database-backed backend.",
      "Implemented backend functionality and API integrations.",
      "Collaborated on debugging and testing to improve application reliability.",
    ],
    tags: ["Full Stack", "API Design", "Teamwork"],
  },
];
export default function Exp() {
  return (
    <>
      <section
        aria-labelledby="experience-heading"
        className="mx-auto w-full max-w-[34rem] font-sans"
      >
        <SectionHeading id="experience-heading">Experience</SectionHeading>
        <div className="space-y-2">
          {EXPERIENCE.map((item, index) => (
            <AccordionCard
              key={item.id}
              logo={
                <Image
                  src={item.logo}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded-sm object-contain"
                />
              }
              title={item.title}
              subtitle={item.subtitle}
              meta={item.period}
              defaultOpen={index === 0}
            >
              <Bullets items={item.bullets} />
              <Tags items={item.tags} />
            </AccordionCard>
          ))}
        </div>
      </section>
    </>
  );
}
