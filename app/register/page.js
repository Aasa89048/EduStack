import {
  BookOpen,
  Calculator,
  FileCheck2,
  GraduationCap,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="auth-screen">
      <section className="auth-page" aria-label="Register">
        <aside className="auth-visual">
          <div className="auth-visual-head">
            <h1>Continue to your study materials and practicing exams.</h1>
            <p>Access notes, slides, and practicing exams anywhere.</p>
          </div>

          <div className="study-drawing" aria-hidden="true">
            <div className="drawing-mark main">
              <GraduationCap size={56} />
            </div>
            <div className="drawing-mark note">
              <FileCheck2 size={28} />
            </div>
            <div className="drawing-mark cloud">
              <UserRound size={30} />
            </div>
            <div className="drawing-mark calc">
              <Calculator size={30} />
            </div>
            <div className="drawing-mark pen">
              <BookOpen size={30} />
            </div>
            <span className="drawing-line line-one" />
            <span className="drawing-line line-two" />
          </div>
        </aside>

        <form className="auth-card">
          <div className="auth-card-head">
            <h1>Register</h1>
            <p>Create your student account.</p>
          </div>

          <label className="field">
            <span>Full name</span>
            <div>
              <UserRound size={18} aria-hidden="true" />
              <input type="text" placeholder="Your name" />
            </div>
          </label>

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
              <input type="password" placeholder="Create a password" />
            </div>
          </label>

          <button className="auth-submit" type="submit">
            Create account
          </button>

          <p className="auth-switch">
            Already registered? <Link href="/login">Login</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
