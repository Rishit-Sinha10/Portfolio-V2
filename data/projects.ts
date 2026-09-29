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
      "OpenLink follows a provider-agnostic adapter architecture. The core API handles validation, routing, normalization, and error handling, while individual adapters encapsulate provider-specific implementation details.",
    techStack: {
      skill: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Zod",
        "Google Gemini",
        "Sarvam AI",
        "Anthropic",
        "Vercel",
        "Render",
      ],
    },
    liveUrl: "",
    githubUrl: "https://github.com/Rishit-Sinha10/OpenLink",
    accent: "#0000FF",
  },

  {
    id: "claritycxr",
    title: "ClarityCXR",
    status: "In dev",
    summary:
      "ClarityCXR is an AI-powered workspace designed around multimodal image analysis, authentication, and a focused interface for working with chest X-ray data.",
    techStack: {
      skill: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Multimodal AI",
        "Vercel",
      ],
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
      "Financcino is a full-stack personal finance application that lets users track expenses, process receipts with OCR, manage category budgets, visualize spending patterns, and interact with an AI assistant using their financial data.",
    techStack: {
      skill: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Axios",
        "Recharts",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Clerk",
        "Tesseract OCR",
        "Gemini",
        "Vercel",
        "Render",
      ],
    },
    liveUrl: "https://finan-cino.vercel.app/",
    githubUrl: "https://github.com/Rishit-Sinha10/Financcino",
    accent: "#0000FF",
  },

  {
    id: "flux",
    title: "Flux",
    status: "Live",
    summary:
      "Flux is a full-stack live streaming platform that combines RTMP ingestion, HLS playback, real-time chat, creator controls, authentication, and analytics into a single application.",
    techStack: {
      skill: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Axios",
        "Socket.IO",
        "Node.js",
        "Express",
        "Node-Media-Server",
        "FFmpeg",
        "MongoDB",
        "Mongoose",
        "Clerk",
        "Vercel",
        "Render",
      ],
    },
    liveUrl: "https://echo-rizz.vercel.app/",
    githubUrl: "https://github.com/Rishit-Sinha10/P1",
    accent: "#0000FF",
  },

  {
    id: "zecoai",
    title: "ZecoAI",
    status: "Live",
    summary:
      "ZecoAI is an AI-powered development platform that combines AI assistance, code generation, authentication, and developer-focused workflows in a unified web application.",
    techStack: {
      skill: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "AI APIs",
        "Authentication",
        "Docker",
        "Vercel",
      ],
    },
    liveUrl: "https://zecoai.vercel.app/",
    githubUrl: "https://github.com/Rishit-Sinha10/ZecoAI",
    accent: "#0000FF",
  },
];
