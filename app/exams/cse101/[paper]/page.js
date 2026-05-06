import { ArrowLeft, Download, FileText } from "lucide-react";
import Link from "next/link";
import AppShell from "../../../components/AppShell";

const paperMap = {
  "midterm-2025-solved-paper": {
    title: "CSE101 Midterm 2025 Solved Paper",
    description: "Solved midterm paper with clear working for each answer.",
  },
  "final-model-paper": {
    title: "CSE101 Final Model Paper",
    description: "Model final exam paper with answer key.",
  },
  "differential-calculus-practice-set": {
    title: "Differential Calculus Practice Set",
    description: "Practice questions focused on limits and derivatives.",
  },
};

export default async function PaperPage({ params }) {
  const { paper } = await params;
  const item = paperMap[paper] ?? paperMap["midterm-2025-solved-paper"];

  return (
    <AppShell>
      <section className="content-grid">
        <Link className="back-link" >
          <ArrowLeft size={18} aria-hidden="true" />
          CSE101 Practice
        </Link>

        <div className="student-page-head inline">
          <div>
            <h1>{item.title}</h1>
            <p className="page-subtitle">{item.description}</p>
          </div>
          <span className="status-pill">PDF</span>
        </div>

        <article className="viewer-card">
          <div className="pdf-sheet">
            <FileText size={52} aria-hidden="true" />
            <h2>{item.title}</h2>
            <p>Solved exam PDF placeholder. This will connect to the uploaded file later.</p>
          </div>
          <button className="auth-submit" type="button">
            <Download size={18} aria-hidden="true" />
            Open solved paper
          </button>
        </article>
      </section>
    </AppShell>
  );
}
