const icons = {
  book: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>`,
  exam: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>`,
  user: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.7 4.1a2.3 2.3 0 0 1 4.6 0 2.3 2.3 0 0 0 3.3 1.9 2.3 2.3 0 0 1 2.3 4 2.3 2.3 0 0 0 0 3.8 2.3 2.3 0 0 1-2.3 4 2.3 2.3 0 0 0-3.3 1.9 2.3 2.3 0 0 1-4.6 0 2.3 2.3 0 0 0-3.3-1.9 2.3 2.3 0 0 1-2.3-4 2.3 2.3 0 0 0 0-3.8 2.3 2.3 0 0 1 2.3-4 2.3 2.3 0 0 0 3.3-1.9"/><circle cx="12" cy="12" r="3"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>`,
  file: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>`,
  video: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 13 5 3V8l-5 3Z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  back: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  calculator: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="8" x2="8" y1="10" y2="10"/><line x1="12" x2="12" y1="10" y2="10"/><line x1="16" x2="16" y1="10" y2="10"/><line x1="8" x2="8" y1="14" y2="14"/><line x1="12" x2="12" y1="14" y2="14"/><line x1="16" x2="16" y1="14" y2="18"/></svg>`,
  pen: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>`
};

const program = [
  { year: 1, courses: [
    { title: "Engineering Mathematics", code: "CSE101", materials: "23 slides", videos: "15 videos" },
    { title: "Programming in C", code: "CSE102", materials: "14 slides", videos: "10 videos" },
    { title: "Digital Logic Design", code: "CSE103", materials: "9 slides", videos: "6 videos" },
    { title: "Data Structures", code: "CSE104", materials: "16 slides", videos: "12 videos" },
    { title: "Computer Organization", code: "CSE105", materials: "10 slides", videos: "8 videos" }
  ]},
  { year: 2, courses: [
    { title: "Object Oriented Programming", code: "CSE201", materials: "13 slides", videos: "9 videos" },
    { title: "Database Management Systems", code: "CSE202", materials: "15 slides", videos: "11 videos" },
    { title: "Discrete Mathematics", code: "CSE203", materials: "10 slides", videos: "7 videos" },
    { title: "Operating Systems", code: "CSE204", materials: "14 slides", videos: "10 videos" }
  ]},
  { year: 3, courses: [
    { title: "Software Engineering", code: "CSE301", materials: "10 slides", videos: "7 videos" },
    { title: "Web Technologies", code: "CSE302", materials: "12 slides", videos: "10 videos" },
    { title: "Artificial Intelligence", code: "CSE304", materials: "13 slides", videos: "10 videos" }
  ]},
  { year: 4, courses: [
    { title: "Machine Learning", code: "CSE401", materials: "14 slides", videos: "12 videos" },
    { title: "Cyber Security", code: "CSE402", materials: "10 slides", videos: "8 videos" },
    { title: "Major Project", code: "CSE405", materials: "14 guides", videos: "9 videos" }
  ]}
];

const exams = [
  { year: 1, exams: [
    { title: "Engineering Mathematics Solved Paper", code: "CSE101", papers: "6 solved exams", format: "PDF" },
    { title: "Programming in C Practice Set", code: "CSE102", papers: "8 solved exams", format: "PDF" },
    { title: "Digital Logic Previous Papers", code: "CSE103", papers: "5 solved exams", format: "PDF" }
  ]},
  { year: 2, exams: [
    { title: "OOP Solved Papers", code: "CSE201", papers: "7 solved exams", format: "PDF" },
    { title: "DBMS Practice Papers", code: "CSE202", papers: "9 solved exams", format: "PDF" }
  ]},
  { year: 3, exams: [
    { title: "Software Engineering Solved Papers", code: "CSE301", papers: "6 solved exams", format: "PDF" },
    { title: "AI Solved Question Sets", code: "CSE304", papers: "7 solved exams", format: "PDF" }
  ]},
  { year: 4, exams: [
    { title: "Machine Learning Solved Papers", code: "CSE401", papers: "7 solved exams", format: "PDF" },
    { title: "Cyber Security Practice Exams", code: "CSE402", papers: "6 solved exams", format: "PDF" }
  ]}
];

const courseMaterials = {
  "differential-calculus-notes": {
    title: "Differential Calculus Notes",
    type: "PDF",
    description: "Limits, continuity, differentiation rules, and solved examples."
  },
  "linear-algebra-slides": {
    title: "Linear Algebra Slides",
    type: "Slides",
    description: "Matrices, determinants, vector spaces, and classroom examples."
  },
  "lecture-1-recording": {
    title: "Lecture 1 Recording",
    type: "Video",
    description: "Introduction to Engineering Mathematics and course expectations."
  }
};

const examPapers = {
  "midterm-2025-solved-paper": {
    title: "CSE101 Midterm 2025 Solved Paper",
    description: "Solved midterm paper with clear working for each answer."
  },
  "final-model-paper": {
    title: "CSE101 Final Model Paper",
    description: "Model final exam paper with answer key."
  },
  "differential-calculus-practice-set": {
    title: "Differential Calculus Practice Set",
    description: "Practice questions focused on limits and derivatives."
  }
};

const state = { courseYear: 1, examYear: 1, courseSearch: "", examSearch: "" };
const app = document.querySelector("#app");

function setRoute(route) {
  window.location.hash = route;
}

function currentRoute() {
  const hash = window.location.hash.replace(/^#/, "");
  return hash || "/courses";
}

function shell(content, active = "/courses") {
  app.innerHTML = `
    <main class="app-shell">
      <aside class="sidebar">
        <a class="brand" href="#/courses">
          <span class="brand-mark">${icons.book}</span>
          <span><strong>Ahmed Abdalrahman</strong><small>B.Tech CSE</small></span>
        </a>
        <nav class="nav-list">
          ${nav("/courses", "Study Materials", icons.book, active)}
          ${nav("/exams", "Practicing Exams", icons.exam, active)}
          ${nav("/profile", "Profile", icons.user, active)}
        </nav>
        <div class="sidebar-bottom">
          ${nav("/settings", "Settings", icons.settings, active)}
          ${nav("/login", "Logout", icons.logout, active)}
        </div>
      </aside>
      <section class="workspace">${content}</section>
    </main>`;
}

function nav(route, label, icon, active) {
  return `<a class="nav-item ${active === route ? "active" : ""}" href="#${route}">${icon}<span>${label}</span></a>`;
}

function yearTabs(items, selected, type) {
  return `<div class="program-controls"><div class="segmented-control">
    ${items.map((item) => `<button class="segment ${selected === item.year ? "active" : ""}" data-year="${item.year}" data-type="${type}">Year ${item.year}</button>`).join("")}
  </div></div>`;
}

function cardList(items, kind) {
  return `<div class="course-list">${items.map((item) => {
    const isCse101 = item.code === "CSE101";
    const route = kind === "course" ? "/courses/cse101" : "/exams/cse101";
    const meta = kind === "course"
      ? `<span>${icons.file}${item.materials}</span><span>${icons.video}${item.videos}</span><span>Updated weekly</span>`
      : `<span>${icons.file}${item.papers}</span><span>${item.format}</span><span>Practice ready</span>`;
    return `<article class="wide-card">
      <div class="wide-card-main">
        <span class="icon-pill">${kind === "course" ? icons.book : icons.exam}</span>
        <div>
          <div class="title-row"><h3>${item.title}</h3><span class="status-pill">${item.code}</span></div>
          <p>${kind === "course" ? `Year ${state.courseYear} study material` : `Year ${state.examYear} solved exam material`}</p>
          <div class="meta-row">${meta}</div>
        </div>
      </div>
      <button class="icon-button" data-route="${isCse101 ? route : ""}" aria-label="Open ${item.title}">${icons.arrow}</button>
    </article>`;
  }).join("")}</div>`;
}

function renderCourses() {
  const year = program.find((item) => item.year === state.courseYear) || program[0];
  const query = state.courseSearch.trim().toLowerCase();
  const items = year.courses.filter((course) => `${course.title} ${course.code}`.toLowerCase().includes(query));
  shell(`
    <section class="content-grid">
      <div class="page-head">
        <div><h1>Study Materials</h1><p class="page-subtitle">B.Tech CSE subjects organized by year.</p></div>
        <label class="search-field">${icons.file}<input id="course-search" placeholder="Search courses" value="${state.courseSearch}"></label>
      </div>
      ${yearTabs(program, state.courseYear, "course")}
      ${cardList(items, "course")}
      ${items.length ? "" : `<p class="empty-state">No courses match your search.</p>`}
    </section>`, "/courses");
}

function renderExams() {
  const year = exams.find((item) => item.year === state.examYear) || exams[0];
  const query = state.examSearch.trim().toLowerCase();
  const items = year.exams.filter((exam) => `${exam.title} ${exam.code}`.toLowerCase().includes(query));
  shell(`
    <section class="content-grid">
      <div class="page-head">
        <div><h1>Practicing Exams</h1><p class="page-subtitle">Solved papers and practice exams organized by year.</p></div>
        <label class="search-field">${icons.file}<input id="exam-search" placeholder="Search exams" value="${state.examSearch}"></label>
      </div>
      ${yearTabs(exams, state.examYear, "exam")}
      ${cardList(items, "exam")}
      ${items.length ? "" : `<p class="empty-state">No exams match your search.</p>`}
    </section>`, "/exams");
}

function renderCourseSubject() {
  const materials = [
    ["Differential Calculus Notes", "PDF notes for limits, continuity, and derivatives.", "PDF", "/courses/cse101/differential-calculus-notes"],
    ["Linear Algebra Slides", "Class slides for matrices, vectors, and determinants.", "Slides", "/courses/cse101/linear-algebra-slides"],
    ["Lecture 1 Recording", "Introductory video for Engineering Mathematics.", "Video", "/courses/cse101/lecture-1-recording"]
  ];
  shell(`
    <a class="back-link" href="#/courses">${icons.back}Study Materials</a>
    <div class="page-head"><div><h1>Engineering Mathematics</h1><p class="page-subtitle">CSE101 study materials for Year 1.</p></div><span class="status-pill">CSE101</span></div>
    <div class="material-grid">${materials.map(([title, detail, type, route]) => `
      <a class="material-card" href="#${route}"><span class="icon-pill">${icons.file}</span><div><h3>${title}</h3><p>${detail}</p></div><span class="status-pill">${type}</span></a>
    `).join("")}</div>`, "/courses");
}

function renderExamSubject() {
  const papers = [
    ["CSE101 Midterm 2025 Solved Paper", "Solved paper with step-by-step answers.", "/exams/cse101/midterm-2025-solved-paper"],
    ["CSE101 Final Model Paper", "Practice paper with model answer key.", "/exams/cse101/final-model-paper"],
    ["Differential Calculus Practice Set", "Focused questions for calculus revision.", "/exams/cse101/differential-calculus-practice-set"]
  ];
  shell(`
    <a class="back-link" href="#/exams">${icons.back}Practicing Exams</a>
    <div class="page-head"><div><h1>Engineering Mathematics Practice</h1><p class="page-subtitle">Solved papers and practice sets for CSE101.</p></div><span class="status-pill">CSE101</span></div>
    <div class="material-grid">${papers.map(([title, detail, route]) => `
      <a class="material-card" href="#${route}"><span class="icon-pill">${icons.file}</span><div><h3>${title}</h3><p>${detail}</p></div><span class="status-pill">PDF</span></a>
    `).join("")}</div>`, "/exams");
}

function renderViewer(kind, slug) {
  const item = kind === "course" ? courseMaterials[slug] : examPapers[slug];
  const fallback = kind === "course" ? courseMaterials["differential-calculus-notes"] : examPapers["midterm-2025-solved-paper"];
  const data = item || fallback;
  shell(`
    <a class="back-link" href="#/${kind === "course" ? "courses" : "exams"}/cse101">${icons.back}CSE101</a>
    <div class="page-head"><div><h1>${data.title}</h1><p class="page-subtitle">${data.description}</p></div><span class="status-pill">${data.type || "PDF"}</span></div>
    <article class="viewer-card">
      <div class="pdf-sheet">${icons.file}<h2>${data.title}</h2><p>${kind === "course" ? "PDF preview placeholder. This will open the real cloud-hosted material later." : "Solved exam PDF placeholder. This will connect to the uploaded file later."}</p></div>
      <button class="primary-button">${icons.download}${kind === "course" ? "Open material" : "Open solved paper"}</button>
    </article>`, kind === "course" ? "/courses" : "/exams");
}

function renderProfile() {
  shell(`
    <div class="simple-title"><h1>Profile</h1></div>
    <section class="profile-layout">
      <article class="profile-card"><div class="avatar-ring">AK</div><h2>Ahmed Knowledge</h2><p class="page-subtitle">Cloud learning student</p><div class="profile-details"><span>student@knowledge.cloud</span><span>Online campus</span><span>Student access</span></div></article>
      <section class="content-grid"><div class="stats-grid"><article class="metric-card material-card"><strong>3</strong><span>Courses</span></article><article class="metric-card material-card"><strong>18</strong><span>Completed</span></article><article class="metric-card material-card"><strong>12d</strong><span>Streak</span></article></div><article class="wide-card"><div><h3>Learning Record</h3><p>Profile data can later connect to cloud authentication and saved progress.</p></div><div class="record-stack"><span>Cloud Foundations: 72%</span><span>Modern Web Apps: 48%</span><span>Student Records: 31%</span></div></article></section>
    </section>`, "/profile");
}

function renderSettings() {
  shell(`<div class="simple-title"><h1>Settings</h1></div><div class="course-list">${["Security", "Notifications", "Appearance"].map((title) => `<article class="wide-card"><div class="wide-card-main"><span class="icon-pill">${icons.settings}</span><div><h3>${title}</h3><p>Study hub preferences and account controls.</p></div></div></article>`).join("")}</div>`, "/settings");
}

function renderAuth(mode) {
  const isRegister = mode === "register";
  app.innerHTML = `
    <main class="auth-screen">
      <section class="auth-page">
        <aside class="auth-visual">
          <div class="auth-visual-head"><h1>Continue to your study materials and practicing exams.</h1><p>Access notes, slides, and practicing exams anywhere.</p></div>
          <div class="study-drawing">
            <div class="drawing-mark main">${isRegister ? icons.user : icons.book}</div>
            <div class="drawing-mark note">${icons.file}</div>
            <div class="drawing-mark cloud">${icons.cloud}</div>
            <div class="drawing-mark calc">${icons.calculator}</div>
            <div class="drawing-mark pen">${icons.pen}</div>
            <span class="drawing-line line-one"></span><span class="drawing-line line-two"></span>
          </div>
        </aside>
        <form class="auth-card">
          <div><h1>${isRegister ? "Register" : "Login"}</h1><p>${isRegister ? "Create your student account." : "Enter your student account details."}</p></div>
          ${isRegister ? `<label class="field"><span>Full name</span><div>${icons.user}<input placeholder="Your name"></div></label>` : ""}
          <label class="field"><span>Email</span><div>${icons.file}<input type="email" placeholder="student@example.com"></div></label>
          <label class="field"><span>Password</span><div>${icons.settings}<input type="password" placeholder="${isRegister ? "Create a password" : "Enter your password"}"></div></label>
          <button class="primary-button" type="submit">${isRegister ? "Create account" : "Login"}</button>
          <p class="auth-switch">${isRegister ? `Already registered? <a href="#/login">Login</a>` : `New here? <a href="#/register">Create an account</a>`}</p>
        </form>
      </section>
    </main>`;
}

function render() {
  const route = currentRoute();
  if (route === "/") return setRoute("/courses");
  if (route === "/courses") return renderCourses();
  if (route === "/exams") return renderExams();
  if (route === "/courses/cse101") return renderCourseSubject();
  if (route === "/exams/cse101") return renderExamSubject();
  if (route.startsWith("/courses/cse101/")) return renderViewer("course", route.split("/").pop());
  if (route.startsWith("/exams/cse101/")) return renderViewer("exam", route.split("/").pop());
  if (route === "/profile") return renderProfile();
  if (route === "/settings") return renderSettings();
  if (route === "/login") return renderAuth("login");
  if (route === "/register") return renderAuth("register");
  setRoute("/courses");
}

window.addEventListener("hashchange", render);
document.addEventListener("click", (event) => {
  const yearButton = event.target.closest("[data-year]");
  if (yearButton) {
    const year = Number(yearButton.dataset.year);
    if (yearButton.dataset.type === "course") state.courseYear = year;
    if (yearButton.dataset.type === "exam") state.examYear = year;
    render();
  }
  const routeButton = event.target.closest("[data-route]");
  if (routeButton && routeButton.dataset.route) setRoute(routeButton.dataset.route);
});
document.addEventListener("input", (event) => {
  if (event.target.id === "course-search") {
    state.courseSearch = event.target.value;
    renderCourses();
    document.querySelector("#course-search")?.focus();
  }
  if (event.target.id === "exam-search") {
    state.examSearch = event.target.value;
    renderExams();
    document.querySelector("#exam-search")?.focus();
  }
});
document.addEventListener("submit", (event) => {
  event.preventDefault();
});

render();
