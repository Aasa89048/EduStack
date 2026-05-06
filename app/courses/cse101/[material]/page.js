import { ArrowLeft, Download, FileText } from "lucide-react";
import Link from "next/link";
import AppShell from "../../../components/AppShell";

const materialMap = {
  "differential-calculus-notes": {
    title: "Differential Calculus Notes",
    type: "PDF",
    description: "Limits, continuity, differentiation rules, and solved examples.",
  },
  "linear-algebra-slides": {
    title: "Linear Algebra Slides",
    type: "Slides",
    description: "Matrices, determinants, vector spaces, and classroom examples.",
  },
  "lecture-1-recording": {
    title: "Lecture 1 Recording",
    type: "Video",
    description: "Introduction to Engineering Mathematics and course expectations.",
  },
};

export default async function MaterialPage({ params }) {
  const { material } = await params;
  const item = materialMap[material] ?? materialMap["differential-calculus-notes"];

  return (
    <AppShell>
      <section className="content-grid">
        <Link className="back-link" >
          <ArrowLeft size={18} aria-hidden="true" />
          CSE101
        </Link>

        <div className="student-page-head inline">
          <div>
            <h1>{item.title}</h1>
            <p className="page-subtitle">{item.description}</p>
          </div>
          <span className="status-pill">{item.type}</span>
        </div>

        <article className="viewer-card">
          <div className="pdf-sheet">
            <FileText size={52} aria-hidden="true" />
            <h2>{item.title}</h2>
            <p>PDF preview placeholder. This will open the real cloud-hosted file later.</p>
          </div>
          <button className="auth-submit" type="button">
            <Download size={18} aria-hidden="true" />
            Open material
          </button>
        </article>
      </section>
    </AppShell>
  );
}
