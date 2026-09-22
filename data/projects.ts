export type SkillCategory =
  "frontend" | "backend" | "database" | "devops" | "ai";

export type Skill = {
  name: string;
  slug: string;
  color?: string;
  category: SkillCategory;
};

export type EngineeringChallenge = {
  title: string;
  description: string;
};

export type ProjectGalleryItem = {
  type: "product" | "architecture" | "feature";
  title: string;
  image: string;
};

export type ProjectTechStack = {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  services?: string[];
  deployment?: string[];
};

export type ProjectCaseStudy = {
  id: string;
  title: string;
  tagline: string;
  status: "Live" | "In dev" | "Abandoned";

  heroImage?: string;

  summary: string[];

  problem: string | string[];
  solution: string | string[];

  features: Array<{
    label: string;
    detail: string | string[];
  }>;

  architecture: {
    flow?: string[];
    diagram?: string;
    description?: string;
  };

  engineeringChallenges?: EngineeringChallenge[];

  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };

  results: string[];

  techStack?: ProjectTechStack;

  gallery?: ProjectGalleryItem[];

  liveUrl: string;
  githubUrl: string;

  accent: string;

  skills: Skill[];
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "openlink",

    title: "OpenLink",

    tagline:
      "A provider-agnostic AI API layer for working with multiple model providers through one interface.",

    status: "In dev",

    summary: [
      "OpenLink is an AI infrastructure project that provides a unified API interface for integrating multiple AI model providers without coupling application code directly to provider-specific SDKs and response formats.",
      "The system uses a provider-adapter architecture to normalize requests, responses, errors, and configuration while keeping the application layer independent from individual AI providers.",
    ],

    problem: [
      "Applications integrating multiple AI providers often become tightly coupled to provider-specific SDKs, request formats, and response structures.",
      "Switching providers can require changes across application logic instead of changing a single integration layer.",
      "Different providers expose different error formats, authentication mechanisms, model identifiers, and response structures.",
      "Managing multiple provider APIs directly increases integration complexity and makes fallback or provider switching harder to maintain.",
    ],

    solution: [
      "A unified API interface that allows applications to communicate with different AI providers through a consistent contract.",
      "Provider adapters isolate provider-specific SDKs, authentication, request formats, and response handling from the core application.",
      "A normalized response layer converts provider-specific outputs into a consistent structure for consumers.",
      "Centralized validation ensures incoming requests follow a predictable schema before reaching provider adapters.",
      "Structured error handling gives applications consistent error responses regardless of which provider fails.",
      "The architecture is designed so additional providers can be added without rewriting the core API layer.",
    ],

    features: [
      {
        label: "Unified AI API",
        detail: [
          "One API interface for interacting with multiple AI providers.",
          "Application code does not need to implement provider-specific request logic.",
        ],
      },

      {
        label: "Provider Adapters",
        detail: [
          "Provider-specific integrations are isolated behind adapter interfaces.",
          "New providers can be introduced without changing the core application contract.",
        ],
      },

      {
        label: "Response Normalization",
        detail: [
          "Provider-specific responses are transformed into a consistent application-level format.",
          "Consumers can work with normalized responses instead of provider-specific structures.",
        ],
      },

      {
        label: "Request Validation",
        detail: [
          "Incoming API requests are validated before reaching provider integrations.",
          "Schema-based validation keeps provider calls predictable and reduces invalid requests.",
        ],
      },

      {
        label: "Error Handling",
        detail: [
          "Provider-specific failures are converted into structured application errors.",
          "Consumers receive a consistent error contract across integrations.",
        ],
      },

      {
        label: "Extensible Architecture",
        detail: [
          "The core system is separated from provider implementations.",
          "Additional AI providers can be added through new adapters rather than modifying application logic.",
        ],
      },
    ],

    architecture: {
      flow: [
        "Client applications send AI requests to the OpenLink API through a unified interface.",
        "The API layer validates incoming requests using shared schemas before processing them.",
        "The provider selection layer determines which AI provider and model should handle the request.",
        "A provider adapter translates the normalized request into the provider-specific format required by that API.",
        "The provider response is returned to the adapter and transformed into OpenLink's normalized response structure.",
        "Provider-specific errors are mapped into a consistent error format before being returned to the client.",
        "The core application remains independent from individual provider SDKs, allowing providers to be added, replaced, or extended without changing consumer-facing API contracts.",
      ],

      description:
        "OpenLink follows a provider-agnostic adapter architecture. The core API owns validation, routing, normalization, and error handling, while individual adapters encapsulate provider-specific implementation details.",
    },
    codeSnippet: {
      language: "typescript",
      filename: "core/providers/provider.ts",
      code: `export interface AIProvider {
  generate(request: AIRequest): Promise<AIResponse>;
}

export type AIRequest = {
  model: string;
  messages: Message[];
  temperature?: number;
};

export type AIResponse = {
  provider: string;
  model: string;
  content: string;
  usage?: {
    inputTokens?: number;
    outputTokens?: number;
    totalTokens?: number;
  };
};`,
    },

    results: [
      "Unified multiple AI provider integrations behind a common API contract.",
      "Provider-specific implementation is isolated through adapter interfaces.",
      "Normalized response handling reduces provider-specific logic in consuming applications.",
      "Structured validation and error handling provide a consistent integration surface.",
      "Adding a new provider can be implemented as an isolated adapter instead of modifying consumer-facing API logic.",
    ],

    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

      backend: ["TypeScript", "Node.js", "NestJS", "Zod"],

      services: ["Anthropic", "Google Gemini", "Sarvam AI"],

      deployment: ["Vercel"],
    },

    liveUrl: "https://openlink.example.com",
    githubUrl: "https://github.com/Rishit-Sinha10/OpenLink",

    accent: "#000000",

    skills: [
      {
        name: "TypeScript",
        slug: "typescript",
        category: "frontend",
      },

      {
        name: "Next.js",
        slug: "nextdotjs",
        category: "frontend",
      },

      {
        name: "React",
        slug: "react",
        category: "frontend",
      },

      {
        name: "Node.js",
        slug: "nodedotjs",
        category: "backend",
      },

      {
        name: "NestJS",
        slug: "nestjs",
        category: "backend",
      },

      {
        name: "Zod",
        slug: "zod",
        category: "backend",
      },

      {
        name: "Anthropic",
        slug: "anthropic",
        category: "ai",
      },

      {
        name: "Gemini",
        slug: "googlegemini",
        category: "ai",
      },

      {
        name: "Sarvam AI",
        slug: "sarvam",
        category: "ai",
      },

      {
        name: "Vercel",
        slug: "vercel",
        category: "devops",
      },
    ],
  },
  {
    id: "ClarityCXR",
    title: "ClarityCXR",
    tagline: "A multimodal AI workspace for working with chest X-rays.",

    status: "In dev",

    summary: [
      "ClarityCXR is a healthcare-focused app I’m building around chest X-ray analysis. The idea is to give users one place to upload an X-ray, run multimodal AI analysis, and view the output in a way that is easier to follow than a raw model response.",
    ],

    problem: [
      "Working with medical images is different from working with normal text. An image contains information that a text-only AI system cannot understand on its own.",
      "I wanted to explore what a useful interface for multimodal medical AI could look like instead of building another general-purpose AI chat screen.",
      "The other challenge was making the result easy to read. Simply putting the model's response in a text box would make the product feel more like an AI demo than an actual application.",
    ],

    solution: [
      "I built the initial product around an image-first workflow. Users can upload a chest X-ray and the application is designed to pass that image through a multimodal analysis pipeline.",
      "The UI keeps the image and its analysis together so users don't have to move between different screens to understand what the system is showing.",
      "I also added authentication and protected routes with Supabase so the application has a proper user flow instead of treating the project as a public image-analysis demo.",
    ],

    features: [
      {
        label: "X-ray Analysis",
        detail: [
          "Upload a chest X-ray and send it through the multimodal analysis workflow.",
          "The product is being built around image understanding rather than text-only prompts.",
        ],
      },

      {
        label: "Analysis Workspace",
        detail: [
          "Keep the uploaded image and generated analysis in the same workflow.",
          "Present model output in a readable format instead of showing an unformatted response.",
        ],
      },

      {
        label: "Authentication",
        detail: [
          "Supabase handles authentication for the application.",
          "Protected routes keep the main application area behind login.",
        ],
      },

      {
        label: "Healthcare-focused UI",
        detail: [
          "The interface is designed around medical imaging rather than a generic AI dashboard.",
          "The goal is to make the information easier to scan without adding unnecessary UI.",
        ],
      },
    ],

    architecture: {
      flow: [
        "The Next.js application handles the frontend and user-facing workflow.",
        "Supabase manages authentication and the application's backend services.",
        "An authenticated user uploads a chest X-ray through the application.",
        "The image is passed into the multimodal AI workflow for analysis.",
        "The generated output is returned to the application and presented alongside the uploaded image.",
        "The UI layer stays separate from the analysis logic so the underlying model can be changed later without rebuilding the entire interface.",
      ],

      description:
        "ClarityCXR is currently built as a Next.js application with Supabase authentication and a multimodal AI layer. The architecture is intentionally kept modular because the AI analysis portion is still evolving.",
    },

    engineeringChallenges: [
      {
        title: "Designing for Multimodal Input",
        description:
          "A chest X-ray is not just another form of text input. The application needs to handle the image as part of the request and then turn the model's output into something useful in the UI.",
      },

      {
        title: "Presenting AI Output",
        description:
          "One of the main UI problems was deciding how to show generated medical information without dumping a large block of model output onto the screen.",
      },

      {
        title: "Authentication and Protected Routes",
        description:
          "I added Supabase authentication and protected application routes so the main workflow is available only to authenticated users.",
      },

      {
        title: "Keeping the AI Layer Replaceable",
        description:
          "The AI portion is kept separate from the main UI so I can experiment with different multimodal models without rewriting the rest of the application.",
      },
    ],

    results: [
      "Built the initial landing page and authentication flow.",
      "Created the foundation for a chest X-ray focused multimodal AI application.",
      "Designed the main workflow around image input instead of a conventional chatbot interface.",
      "Separated the application UI, authentication and AI workflow so the project can continue evolving.",
    ],

    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],

      backend: ["Next.js"],

      services: ["Supabase", "Multimodal AI"],

      deployment: ["Vercel"],
    },

    liveUrl: "https://claritycxr.vercel.app/",
    githubUrl: "https://github.com/Rishit-Sinha10/ClarityCXR",

    skills: [
      {
        name: "Next.js",
        slug: "nextdotjs",
        category: "frontend",
      },

      {
        name: "TypeScript",
        slug: "typescript",
        category: "frontend",
      },

      {
        name: "Tailwind CSS",
        slug: "tailwindcss",
        category: "frontend",
      },

      {
        name: "Supabase",
        slug: "supabase",
        category: "backend",
      },

      {
        name: "Vercel",
        slug: "vercel",
        category: "devops",
      },
    ],
  },
  {
    id: "financcino",
    title: "Financcino",
    tagline:
      "A personal finance workspace for tracking expenses, budgets, receipts, and spending insights.",

    status: "Live",

    summary: [
      "Financcino is a full-stack personal finance application that lets users track expenses, process receipts with OCR, manage category budgets, visualize spending patterns, and interact with an AI assistant using their financial data.",
    ],
    problem: [
      "Manually tracking expenses is tedious and easy to abandon over time.",
      "Receipts often remain trapped in photos without structured financial data.",
      "Raw transaction history does not make spending patterns easy to understand.",
      "Budget limits are less useful when users cannot easily compare them with actual spending.",
    ],

    solution: [
      "Structured expense management with categorization and filtering.",
      "Receipt upload and OCR-based extraction to reduce manual transaction entry.",
      "Category-based budgets with budget-versus-actual comparisons.",
      "Analytics dashboards for category breakdowns and spending trends.",
      "AI-assisted analysis based on the user's logged financial activity.",
      "Backend validation, authentication, security headers, and rate limiting for a finance-oriented application.",
    ],

    features: [
      {
        label: "Expense Management",
        detail: [
          "Create, edit, delete, and categorize transactions.",
          "Filter expenses by date, category, and amount.",
          "Track spending without requiring page reloads.",
        ],
      },
      {
        label: "Receipt Processing",
        detail: [
          "Upload JPG and PNG receipts.",
          "Extract transaction information using OCR.",
          "Store and retrieve processed receipt data.",
        ],
      },
      {
        label: "Analytics & Reporting",
        detail: [
          "Interactive Recharts visualizations.",
          "Category-based spending breakdowns.",
          "Monthly and yearly spending trends.",
        ],
      },
      {
        label: "Budget Management",
        detail: [
          "Set category-specific budget limits.",
          "Compare budgeted amounts with actual spending.",
          "Surface budget alerts when spending approaches or exceeds limits.",
        ],
      },
      {
        label: "Authentication & Security",
        detail: [
          "Clerk authentication and protected application access.",
          "JWT-based request authentication.",
          "Input validation, security headers, and API rate limiting.",
        ],
      },
    ],

    architecture: {
      flow: [
        "The React + Vite frontend communicates with an Express.js backend through REST APIs.",
        "Clerk handles user authentication and session management.",
        "Protected backend routes validate authenticated requests before accessing user-specific resources.",
        "Dedicated controllers and services handle expenses, budgets, receipts, analytics, and AI interactions.",
        "Receipt uploads are processed through Multer and OCR before extracted data is converted into structured expense records.",
        "Mongoose provides the data layer for MongoDB persistence.",
        "The frontend uses API requests, Context API, and custom hooks to keep dashboards and transaction views synchronized.",
      ],
    },

    codeSnippet: {
      language: "javascript",
      filename: "routes/transactions.js",
      code: `router.post("/api/transactions", requireAuth, async (req, res) => {
  const { amount, category, description, date } = req.body;

  const transaction = await db.transactions.create({
    userId: req.auth.userId,
    amount,
    category,
    description,
    date: new Date(date),
  });

  const budget = await db.budgets.findByUserAndCategory(
    req.auth.userId,
    category
  );

  if (budget && budget.spent + amount > budget.limit) {
    transaction.coaching = {
      type: "warning",
      message: \`You've used \${Math.round(
        ((budget.spent + amount) / budget.limit) * 100
      )}% of your \${category} budget.\`,
    };
  }

  res.json({ transaction });
});`,
    },

    results: [
      "Lighthouse Performance score: 90/100",
      "Lighthouse Accessibility score: 96/100",
      "Lighthouse SEO score: 100/100",
      "First Contentful Paint (FCP): 0.9s",
      "Largest Contentful Paint (LCP): 1.6s",
    ],

    techStack: {
      frontend: ["React", "Vite", "Tailwind CSS", "Axios", "Recharts"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB", "Mongoose"],
      services: ["Clerk", "Tesseract OCR", "Gemini"],
      deployment: ["Vercel", "Render"],
    },

    liveUrl: "https://finan-cino.vercel.app/",
    githubUrl: "https://github.com/Rishit-Sinha10/Financcino",

    accent: "#059669",

    skills: [
      {
        name: "React",
        slug: "react",
        category: "frontend",
      },
      {
        name: "Vite",
        slug: "vite",
        category: "frontend",
      },
      {
        name: "Tailwind CSS",
        slug: "tailwindcss",
        category: "frontend",
      },
      {
        name: "Axios",
        slug: "axios",
        category: "frontend",
      },
      {
        name: "Node.js",
        slug: "nodedotjs",
        category: "backend",
      },
      {
        name: "Express",
        slug: "express",
        category: "backend",
      },
      {
        name: "Mongoose",
        slug: "mongoose",
        category: "database",
      },
      {
        name: "MongoDB",
        slug: "mongodb",
        category: "database",
      },
      {
        name: "Clerk",
        slug: "clerk",
        category: "devops",
      },
      {
        name: "Vercel",
        slug: "vercel",
        category: "devops",
      },
      {
        name: "Render",
        slug: "render",
        category: "devops",
      },
    ],
  },

  {
    id: "flux",
    title: "Flux",
    tagline:
      "A real-time streaming platform with live chat, adaptive playback, creator tools, and analytics.",

    status: "Live",

    summary: [
      "Flux is a full-stack live streaming platform that combines RTMP ingestion, HLS playback, real-time chat, creator controls, authentication, and analytics into a single application.",
    ],

    problem: [
      "Running custom streaming infrastructure can be difficult for independent creators and small teams.",
      "Streaming applications often separate video delivery, real-time communication, and creator tooling into disconnected systems.",
      "Real-time chat and moderation require a separate event-driven layer that should not interfere with the media pipeline.",
    ],

    solution: [
      "A Node-Media-Server based RTMP ingestion layer accepts broadcasts from OBS and other RTMP-compatible clients.",
      "FFmpeg processes incoming streams into HLS segments for adaptive playback.",
      "Socket.IO handles real-time chat, viewer updates, and stream events independently from the media pipeline.",
      "An Express API manages application data, authentication, streams, analytics, and creator functionality.",
    ],

    features: [
      {
        label: "Streaming & Broadcasting",
        detail:
          "RTMP ingestion with multi-bitrate HLS delivery for 360p, 720p, and 1080p streams.",
      },
      {
        label: "Real-Time Engagement",
        detail:
          "Socket.IO-powered live chat, viewer updates, and stream events.",
      },
      {
        label: "Creator Tools",
        detail:
          "Creator profiles, stream configuration, and RTMP stream-key management.",
      },
      {
        label: "AI Integration",
        detail: "Foundation for AI-assisted moderation and sentiment analysis.",
      },
      {
        label: "Replay Support",
        detail:
          "Persisted chat history allows post-stream review and context retention.",
      },
    ],

    architecture: {
      flow: [
        "The React frontend communicates with the Express API through REST endpoints while Socket.IO handles real-time application events.",
        "Clerk/JWT authentication protects user accounts and application resources.",
        "A dedicated Node-Media-Server instance receives RTMP streams from broadcasting clients.",
        "FFmpeg processes incoming media into HLS segments at multiple quality levels.",
        "MongoDB stores application data including users, streams, messages, followers, payments, and analytics.",
        "The streaming pipeline remains separate from the application API so media processing and application traffic can be managed independently.",
      ],
    },

    codeSnippet: {
      language: "javascript",
      filename: "server/socket.js",
      code: `io.on("connection", (socket) => {
  socket.on("join-room", async ({ roomId, username }) => {
    socket.join(roomId);

    const history = await db.messages
      .find({ roomId })
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();

    socket.emit("chat-history", history.reverse());

    io.to(roomId).emit("user-joined", {
      username,
      count: getRoomCount(roomId),
    });
  });

  socket.on("send-message", async ({ roomId, username, text }) => {
    const message = await db.messages.create({
      roomId,
      username,
      text,
    });

    io.to(roomId).emit("new-message", {
      id: message._id,
      username: message.username,
      text: message.text,
      createdAt: message.createdAt,
    });
  });
});`,
    },

    results: [
      "60–70% payload size reduction through gzip compression",
      "Rate limiting configured at 100 requests per 15 minutes",
      "Connection pooling reduced repeated database connection overhead",
      "Multi-bitrate playback implemented across 360p, 720p, and 1080p",
      "Streaming and real-time communication are separated into independent application layers",
    ],

    techStack: {
      frontend: ["React", "Vite", "Tailwind CSS", "Axios", "Socket.IO Client"],
      backend: [
        "Node.js",
        "Express",
        "Socket.IO",
        "Node-Media-Server",
        "FFmpeg",
      ],
      database: ["MongoDB", "Mongoose"],
      services: ["Clerk"],
      deployment: ["Vercel", "Render"],
    },

    liveUrl: "https://echo-rizz.vercel.app/",
    githubUrl: "https://github.com/Rishit-Sinha10/P1",

    accent: "#059669",

    skills: [
      {
        name: "React",
        slug: "react",
        category: "frontend",
      },
      {
        name: "Vite",
        slug: "vite",
        category: "frontend",
      },
      {
        name: "Tailwind CSS",
        slug: "tailwindcss",
        category: "frontend",
      },
      {
        name: "Axios",
        slug: "axios",
        category: "frontend",
      },
      {
        name: "Socket.IO",
        slug: "socketdotio",
        category: "backend",
      },
      {
        name: "Node.js",
        slug: "nodedotjs",
        category: "backend",
      },
      {
        name: "Express",
        slug: "express",
        category: "backend",
      },
      {
        name: "MongoDB",
        slug: "mongodb",
        category: "database",
      },
      {
        name: "Mongoose",
        slug: "mongoose",
        category: "database",
      },
      {
        name: "Bun",
        slug: "bun",
        category: "devops",
      },
      {
        name: "Vercel",
        slug: "vercel",
        category: "devops",
      },
      {
        name: "Render",
        slug: "render",
        category: "devops",
      },
    ],
  },

  {
    id: "klryo",
    title: "Klryo",
    tagline:
      "A collaborative browser-based coding environment with AI assistance and sandboxed execution.",

    status: "Live",

    heroImage: "/projects/klryo/hero.png",

    summary: [
      "Klryo is a browser-based development environment that combines a Monaco-powered editor, multi-language code execution, AI assistance, real-time collaboration, and persistent project history in one workspace.",
    ],

    problem: [
      "Developers often switch between an editor, terminal, and AI assistant while debugging or learning.",
      "Browser-based coding workflows frequently separate editing, execution, collaboration, and AI assistance.",
      "Learners can lose useful project and AI conversation context when it is not persisted across sessions.",
    ],

    solution:
      "Klryo brings code editing, code execution, AI assistance, collaboration, authentication, and persistent project history into a single browser-based development workspace.",

    features: [
      {
        label: "Browser IDE",
        detail:
          "Monaco-powered editor with syntax highlighting and a familiar development experience.",
      },
      {
        label: "Multi-Language Execution",
        detail:
          "Judge0 integration for compiling and executing supported languages without local setup.",
      },
      {
        label: "AI Code Assistance",
        detail:
          "Groq-powered assistance for code reviews, debugging, explanations, and development questions.",
      },
      {
        label: "Persistent Projects",
        detail:
          "Projects, files, and AI conversations remain available across sessions.",
      },
      {
        label: "Real-Time Collaboration",
        detail:
          "Multiple users can work within the same workspace and receive synchronized updates.",
      },
      {
        label: "Authentication",
        detail:
          "Protected accounts, OAuth, email/password authentication, MFA, and session management through Clerk.",
      },
    ],

    architecture: {
      diagram: "/projects/klryo/architecture.png",
      description:
        "The React frontend communicates with an Express.js backend through REST APIs. The backend handles application logic and connects to MongoDB for persistence, Clerk for authentication, Judge0 for code execution, and Groq for AI assistance.",
    },

    engineeringChallenges: [
      {
        title: "Code Execution Pipeline",
        description:
          "Integrating external code execution while handling submissions, execution states, compiler errors, runtime errors, and returned output.",
      },
      {
        title: "Persistent AI Context",
        description:
          "Persisting conversations and project context so users can continue AI-assisted development across sessions.",
      },
      {
        title: "Real-Time Collaboration",
        description:
          "Synchronizing workspace changes between multiple users while keeping the editing experience responsive.",
      },
      {
        title: "Authentication & Resource Isolation",
        description:
          "Protecting projects, files, and conversations so users can only access resources belonging to their account or workspace.",
      },
    ],

    results: [
      "Browser-based development workflow combining editing, execution, AI assistance, and project persistence.",
      "Multi-language code execution through Judge0.",
      "Persistent project and AI conversation history across sessions.",
      "Real-time collaborative workspace functionality.",
    ],

    techStack: {
      frontend: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Monaco Editor",
        "Axios",
      ],
      backend: ["Node.js", "Express", "Mongoose"],
      database: ["MongoDB Atlas"],
      services: ["Clerk", "Judge0", "Groq"],
      deployment: ["Vercel", "Render"],
    },

    gallery: [
      {
        type: "product",
        title: "Klryo Editor",
        image: "/projects/klryo/editor.png",
      },
      {
        type: "product",
        title: "AI Code Assistance",
        image: "/projects/klryo/ai-chat.png",
      },
      {
        type: "product",
        title: "Code Execution",
        image: "/projects/klryo/execution.png",
      },
    ],

    liveUrl: "https://klryo.vercel.app/",
    githubUrl: "https://github.com/Rishit-Sinha10/klryo",

    accent: "#059669",

    skills: [
      {
        name: "React",
        slug: "react",
        category: "frontend",
      },
      {
        name: "TypeScript",
        slug: "typescript",
        category: "frontend",
      },
      {
        name: "Vite",
        slug: "vite",
        category: "frontend",
      },
      {
        name: "Tailwind CSS",
        slug: "tailwindcss",
        category: "frontend",
      },
      {
        name: "Node.js",
        slug: "nodedotjs",
        category: "backend",
      },
      {
        name: "Express",
        slug: "express",
        category: "backend",
      },
      {
        name: "MongoDB",
        slug: "mongodb",
        category: "database",
      },
      {
        name: "Mongoose",
        slug: "mongoose",
        category: "database",
      },
      {
        name: "Clerk",
        slug: "clerk",
        category: "devops",
      },
      {
        name: "Vercel",
        slug: "vercel",
        category: "devops",
      },
      {
        name: "Render",
        slug: "render",
        category: "devops",
      },
    ],
  },
];
