import { ArrowLeft, CalendarCheck, FileCheck2, FileText } from "lucide-react";
import Link from "next/link";
import AppShell from "../../components/AppShell";

const papers = [
  {
    title: "CSE101 Midterm 2025 Solved Paper",
    detail: "Solved paper with step-by-step answers.",
    href: "/exams/cse101/midterm-2025-solved-paper",
  },
  {
    title: "CSE101 Final Model Paper",
    detail: "Practice paper with model answer key.",
    href: "/exams/cse101/final-model-paper",
  },
  {
    title: "Differential Calculus Practice Set",
    detail: "Focused questions for calculus revision.",
    href: "/exams/cse101/differential-calculus-practice-set",
  },
];

export default function CSE101ExamPage() {
  return (
    <AppShell>
      <section className="content-grid">
        <Link className="back-link" href="/exams">
          <ArrowLeft size={18} aria-hidden="true" />
          Practicing Exams
        </Link>

        <div className="student-page-head inline">
          <div>
            <h1>Engineering Mathematics Practice</h1>
            <p className="page-subtitle">Solved papers and practice sets for CSE101.</p>
          </div>
          <span className="status-pill">CSE101</span>
        </div>

        <div className="material-grid">
          {papers.map((paper) => (
            <Link className="material-card" href={paper.href} key={paper.title}>
              <span className="icon-pill">
                <FileCheck2 size={22} aria-hidden="true" />
              </span>
              <div>
                <h3>{paper.title}</h3>
                <p>{paper.detail}</p>
              </div>
              <span className="status-pill">PDF</span>
            </Link>
          ))}
        </div>

        <article className="wide-card">
          <div className="wide-card-main">
            <span className="icon-pill">
              <CalendarCheck size={22} aria-hidden="true" />
            </span>
            <div>
              <h3>Practice flow</h3>
              <p>Students open a solved exam, review the PDF, then practice similar questions.</p>
            </div>
          </div>
        </article>
      </section>
    </AppShell>
  );
}
