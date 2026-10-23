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
      "A unified API for routing requests across multiple AI providers. It validates incoming input, sends each call to the right provider, and normalizes every response into one consistent format. Provider-specific quirks live in adapters, so adding a new provider never touches the core.",
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
      "A chest X-ray workspace for running multimodal AI analysis on imaging data. Authentication gates access to uploaded scans, and the interface is built around one job: reviewing and interpreting an image without clutter.",
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
      "A personal-finance app that turns receipts into data. Scan a receipt and Tesseract OCR extracts the details for expense tracking and per-category budgets. Recharts dashboards show where your money goes, and a built-in AI assistant answers questions about your own spending.",
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
      "A full-stack live streaming platform that covers the whole pipeline. Creators broadcast over RTMP, streams are delivered to browsers as HLS, and viewers chat in real time through Socket.IO. Creator controls, authentication, and analytics are built into the same app.",
    techStack: {
      skill: [
        "Next.js",
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
      "An AI-powered development workspace that brings code generation and AI assistance into a single web app. Authentication keeps sessions personal, and Docker keeps the setup consistent across environments.",
    techStack: {
      skill: ["React", "Tailwind CSS", "Node.js", "Docker", "Vercel"],
    },
    liveUrl: "https://code.rishitsinha.online/",
    githubUrl: "https://github.com/Rishit-Sinha10/klryo",
    accent: "#0000FF",
  },
];
