import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "conversational-bi-agent",
    title: "Conversational BI Agent Engine",
    category: "AI/GenAI",
    problem:
      "Business teams know what question they want answered, but writing the SQL — across multiple joined tables — is a bottleneck only engineers can clear.",
    description:
      "A full-stack BI agent that turns natural language into validated SQL over DuckDB, streaming results back over SSE as they're computed. Tested against the Instacart Market Basket Analysis dataset, with multi-table joins across a large relational schema, and a React frontend for live querying.",
    tech: ["FastAPI", "Gemini API", "DuckDB", "Text-to-SQL", "React", "SSE"],
    github: "https://github.com/your-github-username/conversational-bi-agent",
    demo: "https://conversational-bi-agent.onrender.com/",
    demoLabel: "Live Demo",
  },
  {
    slug: "taskledger",
    title: "TaskLedger",
    category: "Full-Stack",
    problem: "Managing daily tasks often suffers from UI lag and disjointed experiences; I needed a responsive, high-performance tracker with a distinct visual identity.",
    description: "A full-stack MERN task management application featuring optimistic UI updates for instant interaction and robust server-side schema validation. Built with a 'ledger/stamp' visual theme, it includes complex query filtering, sorting, and debounced live search for efficient data management.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Mongoose"],
    github: "https://github.com/aditii0104/Task-Tracker", // Update this link if necessary
    demo: "https://task-tracker-lime-mu.vercel.app/", 
    demoLabel: "Live Demo",
  },
  {
    slug: "contract-clause-extraction",
    title: "Contract Clause Extraction & Analysis Engine",
    category: "AI/GenAI",
    problem:
      "Reviewing contracts for specific clauses — liability, termination, indemnity — is slow, repetitive, and easy to get wrong under time pressure.",
    description:
      "A retrieval-augmented engine that ingests contracts, indexes them into ChromaDB, and uses LangChain to pull out and reason over specific clause types on demand, with citations back to source text.",
    tech: ["LangChain", "RAG", "ChromaDB", "Python"],
    github: "https://github.com/your-github-username/contract-clause-extraction",
    demo: "",
    demoLabel: "Hugging Face Space",
  },
  {
    slug: "fashiongen-ai-studio",
    title: "FashionGen AI Studio",
    category: "AI/GenAI",
    problem:
      "Generating and iterating on fashion concept imagery typically means switching between several disconnected tools.",
    description:
      "An async full-stack studio built around the Gemini API for generating and refining fashion concept imagery in one continuous workflow, designed for fast iteration without blocking the UI on generation calls.",
    tech: ["Python", "Gemini API", "Async", "Full-Stack"],
    github: "https://github.com/your-github-username/fashiongen-ai-studio",
    demo: "",
    demoLabel: "Github Repo",
  },
];
