import {
  Award,
  BookOpenCheck,
  CalendarDays,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import AppShell from "../components/AppShell";

const stats = [
  { label: "Courses", value: "3", icon: BookOpenCheck },
  { label: "Completed", value: "18", icon: Award },
  { label: "Streak", value: "12d", icon: CalendarDays },
];

export default function ProfilePage() {
  return (
    <AppShell showTopbar={false}>
      <div className="simple-page-title">
        <h1>Profile</h1>
      </div>

      <section className="profile-layout">
        <article className="profile-card glass-panel">
          <div className="avatar-ring">
            <span>AK</span>
          </div>
          <h2>Ahmed Knowledge</h2>
          <p>Cloud learning student</p>
          <div className="profile-details">
            <span>
              <Mail size={16} aria-hidden="true" />
              student@knowledge.cloud
            </span>
            <span>
              <MapPin size={16} aria-hidden="true" />
              Online campus
            </span>
            <span>
              <ShieldCheck size={16} aria-hidden="true" />
              Student access
            </span>
          </div>
        </article>

        <section className="profile-main">
          <div className="stats-grid">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article className="metric-card" key={stat.label}>
                  <Icon size={22} aria-hidden="true" />
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              );
            })}
          </div>

          <article className="wide-card profile-summary">
            <div>
              <h3>Learning Record</h3>
              <p>
                Profile data will later connect to Supabase Auth, enrollment
                records, course progress, certificates, and account settings.
              </p>
            </div>
            <div className="record-stack">
              <span>Cloud Foundations: 72%</span>
              <span>Modern Web Apps: 48%</span>
              <span>Student Records: 31%</span>
            </div>
          </article>
        </section>
      </section>
    </AppShell>
  );
}
