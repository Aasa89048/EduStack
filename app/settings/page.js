import { Bell, LockKeyhole, Palette } from "lucide-react";
import AppShell from "../components/AppShell";

const settings = [
  { label: "Security", detail: "Account roles and access control.", icon: LockKeyhole },
  { label: "Notifications", detail: "Course updates and exam reminders.", icon: Bell },
  { label: "Appearance", detail: "Minimal glass interface preferences.", icon: Palette },
];

export default function SettingsPage() {
  return (
    <AppShell showTopbar={false}>
      <div className="simple-page-title">
        <h1>Settings</h1>
      </div>

      <section className="content-grid" aria-label="Settings list">
        <div className="course-list">
          {settings.map((item) => {
            const Icon = item.icon;

            return (
              <article className="wide-card" key={item.label}>
                <div className="wide-card-main">
                  <span className="icon-pill">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{item.label}</h3>
                    <p>{item.detail}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}
