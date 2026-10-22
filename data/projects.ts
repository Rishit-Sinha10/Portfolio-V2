export type ProjectTechStack = {
  skill: string[];
};

export type ProjectCaseStudy = {
  id: string;
  title: string;
  status: "Live" | "In dev" | "Abandoned";
  summary: string;
  techStack: ProjectTechStack;
  liveUrl: string;
  githubUrl: string;
  accent: string;
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "openlink",
    title: "OpenLink",
    status: "In dev",
    summary:
      "An in-development layer for routing requests across AI providers. A shared API validates input, routes requests, normalizes responses, and keeps provider-specific behavior inside adapters.",
    techStack: {
      skill: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
    },
    liveUrl: "",
    githubUrl: "",
    accent: "#0000FF",
  },

  {
    id: "claritycxr",
    title: "ClarityCXR",
    status: "In dev",
    summary:
      "An in-development chest X-ray workspace with multimodal image-analysis workflows, authentication, and a focused interface for working with imaging data.",
    techStack: {
      skill: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    },
    liveUrl: "https://claritycxr.vercel.app/",
    githubUrl: "https://github.com/Rishit-Sinha10/ClarityCXR",
    accent: "#0000FF",
  },

  {
    id: "financcino",
    title: "Financcino",
    status: "Live",
    summary:
      "A personal-finance app for tracking expenses, scanning receipts with OCR, and managing category budgets. Its React interface uses Recharts to visualize spending and includes an AI assistant that works with financial data.",
    techStack: {
      skill: ["React", "Tailwind CSS", "Recharts", "Tesseract OCR", "Render"],
    },
    liveUrl: "https://finan-cino.vercel.app/",
    githubUrl: "https://github.com/Rishit-Sinha10/Financcino",
    accent: "#0000FF",
  },

  {
    id: "tunnel",
    title: "Tunnel",
    status: "Live",
    summary:
      "Tunnel is a full-stack live streaming platform that combines RTMP ingestion, HLS playback, real-time chat, creator controls, authentication, and analytics into a single application.",
    techStack: {
      skill: [
        "NextJs",
        "Socket.IO",
        "Node.js",
        "Express",
        "Node-Media-Server",
        "FFmpeg",
      ],
    },
    liveUrl: "https://tunnel-sable.vercel.app/",
    githubUrl: "https://github.com/Rishit-Sinha10/Tunnel",
    accent: "#0000FF",
  },

  {
    id: "klyro",
    title: "klyro",
    status: "Live",
    summary:
      "klyro is an AI-powered development platform that combines AI assistance, code generation, authentication, and developer-focused workflows in a unified web application.",
    techStack: {
      skill: ["React", "Tailwind CSS", "Node.js", "Docker", "Vercel"],
    },
    liveUrl: "https://code.rishitsinha.online/",
    githubUrl: "https://github.com/Rishit-Sinha10/klryo",
    accent: "#0000FF",
  },
];
