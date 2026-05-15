"use client";

import {
  CalendarCheck,
  LibraryBig,
  LogOut,
  Settings,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Courses", icon: LibraryBig, href: "/courses" },
  { label: "Practicing Exams", icon: CalendarCheck, href: "/exams" },
  { label: "Profile", icon: UserRound, href: "/profile" },
];

export default function AppShell({ children }) {
  const pathname = usePathname();

  return (
    <main className="app-shell">
      <aside className="sidebar glass-panel" aria-label="Main navigation">
        <Link className="brand" href="/courses">
          <span className="brand-mark">
            <span className="brand-initials">LPU</span>
          </span>
          <span>
            <strong>Lovely Professional University</strong>
            <small>B.Tech CSE</small>
          </span>
        </Link>

        <nav className="nav-list">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || (pathname === "/" && item.href === "/courses");

            return (
              <Link
                className={active ? "nav-item active" : "nav-item"}
                href={item.href}
                key={item.label}
              >
                <Icon size={20} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-bottom" aria-label="Account actions">
          <Link
            className={pathname === "/settings" ? "nav-item active" : "nav-item"}
            href="/settings"
          >
            <Settings size={20} aria-hidden="true" />
            <span>Settings</span>
          </Link>
          <Link className="nav-item logout-link" href="/login">
            <LogOut size={20} aria-hidden="true" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      <section className="workspace">{children}</section>
    </main>
  );
}
