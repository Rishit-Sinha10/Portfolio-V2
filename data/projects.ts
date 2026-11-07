export type ProjectTechStack = {
  skill: string[];
};

export type ProjectCaseStudyDetails = {
  focus: string;
  overview: string;
  challenge: string;
  productFlow: string[];
  approach: { title: string; detail: string }[];
  evidence: { label: string; href: string; detail: string }[];
  evidenceNote: string;
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
  caseStudy?: ProjectCaseStudyDetails;
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
      skill: ["Next.js", "FastAPI", "Supabase", "LangChain", "ChromaDB", "OCR"],
    },
    liveUrl: "https://claritycxr.vercel.app/",
    githubUrl: "https://github.com/Rishit-Sinha10/ClarityCXR",
    accent: "#0000FF",
    caseStudy: {
      focus: "Clinical imaging workspace",
      overview:
        "ClarityCXR brings a chest image and its supporting clinical context into one focused review workspace.",
      challenge:
        "Reviewing an image alongside reports, lab results, and medical history can split attention across different sources. The product concept is to keep that context close to the scan.",
      productFlow: [
        "Chest X-ray + clinical context",
        "Backend analysis services",
        "Focused review workspace",
      ],
      approach: [
        {
          title: "Keep the scan central",
          detail:
            "Build the review around chest X-rays, with visualization presets for lungs, ribs, and the mediastinum.",
        },
        {
          title: "Bring context into the same flow",
          detail:
            "Combine imaging with reports, lab values, prescriptions, and patient history, with AI summaries and finding overlays described in the project documentation.",
        },
        {
          title: "Separate the interface from analysis services",
          detail:
            "Pair a Next.js workspace with a FastAPI backend and document the supporting OCR, retrieval, and model-provider integrations.",
        },
      ],
      evidence: [
        {
          label: "Open the deployed workspace",
          href: "https://claritycxr.vercel.app/",
          detail: "Live product",
        },
        {
          label: "Read the project overview",
          href: "https://github.com/Rishit-Sinha10/ClarityCXR#readme",
          detail: "Feature and architecture notes",
        },
        {
          label: "Inspect the frontend",
          href: "https://github.com/Rishit-Sinha10/ClarityCXR/tree/main/frontend",
          detail: "Next.js workspace",
        },
        {
          label: "Inspect the backend",
          href: "https://github.com/Rishit-Sinha10/ClarityCXR/tree/main/backend",
          detail: "Analysis services",
        },
      ],
      evidenceNote:
        "This is a software project, not a clinically validated diagnostic tool. No diagnostic-accuracy, clinician-usage, or patient-outcome results are published.",
    },
  },

  {
    id: "financcino",
    title: "Financcino",
    status: "Live",
    summary:
      "A personal-finance app that turns receipts into data. Scan a receipt and Tesseract OCR extracts the details for expense tracking and per-category budgets. Recharts dashboards show where your money goes, and a built-in AI assistant answers questions about your own spending.",
    techStack: {
      skill: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tesseract OCR",
        "Recharts",
      ],
    },
    liveUrl: "https://finan-cino.vercel.app/",
    githubUrl: "https://github.com/Rishit-Sinha10/Financcino",
    accent: "#0000FF",
    caseStudy: {
      focus: "Receipt-to-budget personal finance",
      overview:
        "Financcino turns receipt capture into a practical spending workflow: extract expense details, organize them, and review them against budgets.",
      challenge:
        "Manual expense entry creates friction between making a purchase and understanding where the money went. Financcino uses receipt images as an input to a broader tracking and review flow.",
      productFlow: [
        "Receipt image",
        "OCR + expense entry",
        "Categories, budgets, and insights",
      ],
      approach: [
        {
          title: "Start with the receipt",
          detail:
            "Use OCR to extract receipt details, then bring the result into expense tracking rather than treating the scan as a disconnected upload.",
        },
        {
          title: "Make spending legible",
          detail:
            "Organize expenses by category and use Recharts dashboards to show spending patterns alongside per-category budgets.",
        },
        {
          title: "Keep insights tied to spending",
          detail:
            "Include an AI assistant intended to answer questions about a user's own recorded spending.",
        },
      ],
      evidence: [
        {
          label: "Open the deployed app",
          href: "https://finan-cino.vercel.app/",
          detail: "Live product",
        },
        {
          label: "Inspect the frontend source",
          href: "https://github.com/Rishit-Sinha10/Financcino/tree/main/frontend",
          detail: "Expense and dashboard interface",
        },
        {
          label: "Inspect the backend source",
          href: "https://github.com/Rishit-Sinha10/Financcino/tree/main/Backend",
          detail: "API and data services",
        },
      ],
      evidenceNote:
        "No public user counts, OCR-accuracy results, or measured savings outcomes are available, so none are claimed here.",
    },
  },

  {
    id: "tunnel",
    title: "Tunnel",
    status: "In dev",
    summary:
      "A full-stack live streaming platform that covers the whole pipeline. Creators broadcast over RTMP, streams are delivered to browsers as HLS, and viewers chat in real time through Socket.IO. Creator controls, authentication, and analytics are built into the same app.",
    techStack: {
      skill: [
        "React",
        "Vite",
        "Socket.IO",
        "Node.js",
        "Express",
        "Node-Media-Server",
        "FFmpeg",
        "MongoDB",
      ],
    },
    liveUrl: "https://tunnel-sable.vercel.app/",
    githubUrl: "https://github.com/Rishit-Sinha10/Tunnel",
    accent: "#0000FF",
    caseStudy: {
      focus: "Live video and real-time audience interaction",
      overview:
        "Tunnel connects a creator's broadcast workflow to browser playback, with a separate real-time channel for viewer chat.",
      challenge:
        "A streaming product has to coordinate media delivery and audience interaction without making the viewer experience feel like separate tools.",
      productFlow: [
        "RTMP broadcast",
        "FFmpeg processing + HLS",
        "Browser playback + live chat",
      ],
      approach: [
        {
          title: "Move video through a clear pipeline",
          detail:
            "Use RTMP for stream ingestion, FFmpeg for media processing, and HLS for browser playback.",
        },
        {
          title: "Keep chat real-time",
          detail:
            "Use Socket.IO for live chat and audience engagement alongside the video stream.",
        },
        {
          title: "Give creators a control surface",
          detail:
            "Bring stream management, authentication, and viewer analytics into the same product.",
        },
      ],
      evidence: [
        {
          label: "Open the deployed app",
          href: "https://tunnel-sable.vercel.app/",
          detail: "Live product",
        },
        {
          label: "Read the project README",
          href: "https://github.com/Rishit-Sinha10/Tunnel#readme",
          detail: "Documented features and stack",
        },
        {
          label: "Review the benchmark plan",
          href: "https://github.com/Rishit-Sinha10/Tunnel/blob/main/benchmark.md",
          detail: "Measurement plan; results are not recorded",
        },
      ],
      evidenceNote:
        "The repository's benchmark document has no results filled in. Latency, concurrency, and performance claims are therefore intentionally omitted.",
    },
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
    githubUrl: "https://github.com/Rishit-Sinha10/klyro",
    accent: "#0000FF",
  },
];
