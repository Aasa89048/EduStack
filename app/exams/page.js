"use client";

import { ArrowRight, CalendarCheck, FileCheck2, FileText, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import AppShell from "../components/AppShell";

const examBank = [
  {
    year: 1,
    exams: [
      { title: "Engineering Mathematics Solved Paper", code: "CSE101", papers: "6 solved exams", format: "PDF" },
      { title: "Programming in C Practice Set", code: "CSE102", papers: "8 solved exams", format: "PDF" },
      { title: "Digital Logic Previous Papers", code: "CSE103", papers: "5 solved exams", format: "PDF" },
    ],
  },
  {
    year: 2,
    exams: [
      { title: "OOP Solved Papers", code: "CSE201", papers: "7 solved exams", format: "PDF" },
      { title: "DBMS Practice Papers", code: "CSE202", papers: "9 solved exams", format: "PDF" },
      { title: "Operating Systems Question Bank", code: "CSE204", papers: "6 solved exams", format: "PDF" },
      { title: "Computer Networks Solved Papers", code: "CSE205", papers: "5 solved exams", format: "PDF" },
    ],
  },
  {
    year: 3,
    exams: [
      { title: "Software Engineering Solved Papers", code: "CSE301", papers: "6 solved exams", format: "PDF" },
      { title: "Web Technologies Practice Exams", code: "CSE302", papers: "8 solved exams", format: "PDF" },
      { title: "AI Solved Question Sets", code: "CSE304", papers: "7 solved exams", format: "PDF" },
      { title: "Cloud Computing Previous Papers", code: "CSE306", papers: "5 solved exams", format: "PDF" },
    ],
  },
  {
    year: 4,
    exams: [
      { title: "Machine Learning Solved Papers", code: "CSE401", papers: "7 solved exams", format: "PDF" },
      { title: "Cyber Security Practice Exams", code: "CSE402", papers: "6 solved exams", format: "PDF" },
      { title: "Big Data Analytics Question Bank", code: "CSE403", papers: "5 solved exams", format: "PDF" },
      { title: "DevOps Solved Papers", code: "CSE404", papers: "4 solved exams", format: "PDF" },
    ],
  },
];

export default function ExamsPage() {
  const [query, setQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState(1);

  const activeYear = examBank.find((item) => item.year === selectedYear) ?? examBank[0];

  const visibleExams = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return activeYear.exams;
    }

    return activeYear.exams.filter((exam) =>
      `${exam.title} ${exam.code}`.toLowerCase().includes(search),
    );
  }, [activeYear, query]);

  return (
    <AppShell showTopbar={false}>
      <section className="content-grid" aria-label="Solved exams">
        <div className="student-page-head inline">
          <div>
            <h1>Practicing Exams</h1>
            <p className="page-subtitle">Solved papers and practice exams organized by year.</p>
          </div>

          <label className="search-field">
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search exams"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>

        <div className="program-controls" aria-label="Year filters">
          <div className="segmented-control">
            {examBank.map((item) => (
              <button
                className={item.year === selectedYear ? "segment active" : "segment"}
                key={item.year}
                onClick={() => setSelectedYear(item.year)}
                type="button"
              >
                Year {item.year}
              </button>
            ))}
          </div>
        </div>

        <div className="course-list">
          {visibleExams.map((exam) => {
            const available = exam.code === "CSE101";

            return (
              <article className="wide-card exam-card" key={`${exam.code}-${exam.title}`}>
                <div className="wide-card-main">
                  <span className="icon-pill">
                    <CalendarCheck size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <div className="title-row">
                      <h3>{exam.title}</h3>
                      <span className="status-pill">{exam.code}</span>
                    </div>
                    <p>Year {selectedYear} solved exam material</p>
                    <div className="meta-row">
                      <span>
                        <FileCheck2 size={15} aria-hidden="true" />
                        {exam.papers}
                      </span>
                      <span>
                        <FileText size={15} aria-hidden="true" />
                        {exam.format}
                      </span>
                      <span>Practice ready</span>
                    </div>
                  </div>
                </div>
                {available ? (
                  <Link className="icon-button" href="/exams/cse101" aria-label={`Open ${exam.title}`}>
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                ) : (
                  <button className="icon-button muted-action" type="button" aria-label={`${exam.title} coming soon`}>
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                )}
              </article>
            );
          })}
        </div>

        {visibleExams.length === 0 ? (
          <p className="empty-state">No exams match your search.</p>
        ) : null}
      </section>
    </AppShell>
  );
}
