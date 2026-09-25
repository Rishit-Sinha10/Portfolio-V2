export type ProjectTechStack = {
  skill: string[];
};

export type ProjectCaseStudy = {
  id: string;
  title: string;
  tagline: string;
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
    tagline:
      "OpenLink is an open-source, provider-agnostic AI API layer that unifies multiple AI providers behind a single interface using TypeScript, Node.js, Express, Zod, and an adapter-based architecture. It includes integrations for Google Gemini and Sarvam AI alongside a Next.js and React dashboard for interacting with different providers while keeping provider-specific logic isolated.",
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
    liveUrl: "https://openlink.example.com",
    githubUrl: "https://github.com/Rishit-Sinha10/OpenLink",
    accent: "#000000",
  },

  {
    id: "claritycxr",
    title: "ClarityCXR",
    tagline:
      "ClarityCXR is a multimodal AI workspace for working with chest X-rays, built with Next.js, TypeScript, and Tailwind CSS, with Supabase handling authentication and data services. The application is designed around image-driven workflows and provides a foundation for AI-assisted medical image analysis.",
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
    accent: "#0f766e",
  },

  {
    id: "financcino",
    title: "Financcino",
    tagline:
      "Financcino is a full-stack personal finance platform built with React, Vite, Tailwind CSS, Node.js, and Express, with MongoDB and Mongoose for financial data persistence. It integrates Clerk for authentication, Tesseract OCR for extracting information from receipts, Gemini for AI-powered financial assistance, and Recharts for visualizing expenses, budgets, and spending patterns.",
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
    accent: "#059669",
  },

  {
    id: "flux",
    title: "Flux",
    tagline:
      "Flux is a real-time live streaming platform built with React, Vite, and Tailwind CSS on the frontend, with Node.js and Express powering the backend. It combines RTMP ingestion, HLS playback, Socket.IO-powered real-time chat, Clerk authentication, MongoDB persistence, creator controls, Node-Media-Server, and FFmpeg into a single streaming platform.",
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
    accent: "#059669",
  },

  {
    id: "zecoai",
    title: "ZecoAI",
    tagline:
      "ZecoAI is an AI-powered developer platform designed around code generation and AI-assisted development, combining a modern web interface with AI APIs, authentication, and developer-focused tooling. The platform provides an integrated environment for building and working with AI-powered development workflows.",
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
    accent: "#059669",
  },
];
