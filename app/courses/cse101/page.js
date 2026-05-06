import { ArrowLeft, BookOpen, FileText, PlayCircle, Presentation } from "lucide-react";
import Link from "next/link";
import AppShell from "../../components/AppShell";

const materials = [
  {
    title: "Differential Calculus Notes",
    detail: "PDF notes for limits, continuity, and derivatives.",
    type: "PDF",
    href: "/courses/cse101/differential-calculus-notes",
    icon: FileText,
  },
  {
    title: "Linear Algebra Slides",
    detail: "Class slides for matrices, vectors, and determinants.",
    type: "Slides",
    href: "/courses/cse101/linear-algebra-slides",
    icon: Presentation,
  },
  {
    title: "Lecture 1 Recording",
    detail: "Introductory video for Engineering Mathematics.",
    type: "Video",
    href: "/courses/cse101/lecture-1-recording",
    icon: PlayCircle,
  },
];

export default function CSE101CoursePage() {
  return (
    <AppShell>
      <section className="content-grid">
        <Link className="back-link" href="/courses">
          <ArrowLeft size={18} aria-hidden="true" />
          Study Materials
        </Link>

        <div className="student-page-head inline">
          <div>
            <h1>Engineering Mathematics</h1>
            <p className="page-subtitle">CSE101 study materials for Year 1.</p>
          </div>
          <span className="status-pill">CSE101</span>
        </div>

        <div className="material-grid">
          {materials.map((material) => {
            const Icon = material.icon;

            return (
              <Link className="material-card" href={material.href} key={material.title}>
                <span className="icon-pill">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3>{material.title}</h3>
                  <p>{material.detail}</p>
                </div>
                <span className="status-pill">{material.type}</span>
              </Link>
            );
          })}
        </div>

        <article className="wide-card">
          <div className="wide-card-main">
            <span className="icon-pill">
              <BookOpen size={22} aria-hidden="true" />
            </span>
            <div>
              <h3>How this page will work with cloud storage</h3>
              <p>
                Later, every card here can point to a PDF, slide deck, or video stored in the cloud.
              </p>
            </div>
          </div>
        </article>
      </section>
    </AppShell>
  );
}
