"use client";

import { ArrowRight, BookOpen, Clock3, FileText, Search, Video } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import AppShell from "../components/AppShell";

const program = [
  {
    year: 1,
    courses: [
      { title: "Engineering Mathematics", code: "CSE1011", materials: "23 slides", videos: "15 videos" },
      { title: "Programming in C", code: "CSE102", materials: "14 slides", videos: "10 videos" },
      { title: "Digital Logic Design", code: "CSE103", materials: "9 slides", videos: "6 videos" },
      { title: "Data Structures", code: "CSE104", materials: "16 slides", videos: "12 videos" },
      { title: "Computer Organization", code: "CSE105", materials: "10 slides", videos: "8 videos" },
    ],
  },
  {
    year: 2,
    courses: [
      { title: "Object Oriented Programming", code: "CSE201", materials: "13 slides", videos: "9 videos" },
      { title: "Database Management Systems", code: "CSE202", materials: "15 slides", videos: "11 videos" },
      { title: "Discrete Mathematics", code: "CSE203", materials: "10 slides", videos: "7 videos" },
      { title: "Operating Systems", code: "CSE204", materials: "14 slides", videos: "10 videos" },
      { title: "Computer Networks", code: "CSE205", materials: "12 slides", videos: "9 videos" },
      { title: "Design and Analysis of Algorithms", code: "CSE206", materials: "15 slides", videos: "11 videos" },
    ],
  },
  {
    year: 3,
    courses: [
      { title: "Software Engineering", code: "CSE301", materials: "10 slides", videos: "7 videos" },
      { title: "Web Technologies", code: "CSE302", materials: "12 slides", videos: "10 videos" },
      { title: "Theory of Computation", code: "CSE303", materials: "9 slides", videos: "6 videos" },
      { title: "Artificial Intelligence", code: "CSE304", materials: "13 slides", videos: "10 videos" },
      { title: "Compiler Design", code: "CSE305", materials: "11 slides", videos: "8 videos" },
      { title: "Cloud Computing", code: "CSE306", materials: "12 slides", videos: "9 videos" },
    ],
  },
  {
    year: 4,
    courses: [
      { title: "Machine Learning", code: "CSE401", materials: "14 slides", videos: "12 videos" },
      { title: "Cyber Security", code: "CSE402", materials: "10 slides", videos: "8 videos" },
      { title: "Big Data Analytics", code: "CSE403", materials: "11 slides", videos: "8 videos" },
      { title: "DevOps and Deployment", code: "CSE404", materials: "9 slides", videos: "7 videos" },
      { title: "Major Project", code: "CSE405", materials: "14 guides", videos: "9 videos" },
    ],
  },
];

export default function CoursesPage() {
  const [query, setQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState(1);

  const activeYear = program.find((item) => item.year === selectedYear) ?? program[0];

  const visibleCourses = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return activeYear.courses;
    }

    return activeYear.courses.filter((course) =>
      `${course.title} ${course.code}`.toLowerCase().includes(search),
    );
  }, [activeYear, query]);

  return (
    <AppShell showTopbar={false}>
      <section className="content-grid" aria-label="B.Tech CSE study materials">
        <div className="student-page-head inline">
          <div>
            <h1>Study Materials</h1>
            <p className="page-subtitle">B.Tech CSE subjects organized by year.</p>
          </div>

          <label className="search-field">
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search courses"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>

        <div className="program-controls" aria-label="Year filters">
          <div className="segmented-control">
            {program.map((item) => (
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
          {visibleCourses.map((course) => {
            const available = course.code === "CSE101";

            return (
              <article className="wide-card" key={course.code}>
                <div className="wide-card-main">
                  <span className="icon-pill">
                    <BookOpen size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <div className="title-row">
                      <h3>{course.title}</h3>
                      <span className="status-pill">{course.code}</span>
                    </div>
                    <p>Year {selectedYear} study material</p>
                    <div className="meta-row">
                      <span>
                        <FileText size={15} aria-hidden="true" />
                        {course.materials}
                      </span>
                      <span>
                        <Video size={15} aria-hidden="true" />
                        {course.videos}
                      </span>
                      <span>
                        <Clock3 size={15} aria-hidden="true" />
                        Updated weekly
                      </span>
                    </div>
                  </div>
                </div>
                {available ? (
                  <Link className="icon-button" href="/courses/cse101" aria-label={`Open ${course.title}`}>
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                ) : (
                  <button className="icon-button muted-action" type="button" aria-label={`${course.title} coming soon`}>
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                )}
              </article>
            );
          })}
        </div>

        {visibleCourses.length === 0 ? (
          <p className="empty-state">No courses match your search.</p>
        ) : null}
      </section>
    </AppShell>
  );
}
