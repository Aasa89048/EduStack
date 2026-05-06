import { BookOpen, Calculator, Cloud, FileText, LockKeyhole, Mail, Pencil } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="auth-screen">
      <section className="auth-page" aria-label="Login">
        <aside className="auth-visual">
          <div className="auth-visual-head">
            <h1>Continue to your study materials and practicing exams.</h1>
            <p>Access notes, slides, and practicing exams anywhere.</p>
          </div>

          <div className="study-drawing" aria-hidden="true">
            <div className="drawing-mark main">
              <BookOpen size={54} />
            </div>
            <div className="drawing-mark note">
              <FileText size={28} />
            </div>
            <div className="drawing-mark cloud">
              <Cloud size={30} />
            </div>
            <div className="drawing-mark calc">
              <Calculator size={30} />
            </div>
            <div className="drawing-mark pen">
              <Pencil size={28} />
            </div>
            <span className="drawing-line line-one" />
            <span className="drawing-line line-two" />
          </div>
        </aside>

        <form className="auth-card">
          <div className="auth-card-head">
            <h1>Login</h1>
            <p>Enter your student account details.</p>
          </div>

          <label className="field">
            <span>Email</span>
            <div>
              <Mail size={18} aria-hidden="true" />
              <input type="email" placeholder="student@example.com" />
            </div>
          </label>

          <label className="field">
            <span>Password</span>
            <div>
              <LockKeyhole size={18} aria-hidden="true" />
              <input type="password" placeholder="Enter your password" />
            </div>
          </label>

          <button className="auth-submit" type="submit">
            Login
          </button>

          <p className="auth-switch">
            New here? <Link href="/register">Create an account</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
