import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    eyebrow: "~/skills/ai-ml",
    label: "AI / ML & GenAI",
    skills: [
      "Python",
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "Gemini API",
      "Groq / Llama 3.3",
      "PyTorch",
      "Scikit-learn",
      "ChromaDB",
      "FAISS",
    ],
  },
  {
    eyebrow: "~/skills/backend",
    label: "Backend & APIs",
    skills: ["FastAPI", "Flask", "SQL", "DuckDB", "Text-to-SQL", "MLflow"],
  },
  {
    eyebrow: "~/skills/frontend",
    label: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "SSE Streaming"],
  },
  {
    eyebrow: "~/skills/cloud-devops",
    label: "Cloud & DevOps",
    skills: ["Google Cloud (Certified)", "Docker", "Docker SDK"],
  },
  {
    eyebrow: "~/skills/data-bi",
    label: "Data & BI",
    skills: ["Power BI", "SQL", "DuckDB", "Data Visualization"],
  },
];
