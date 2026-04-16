import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/counselors", label: "Counselors" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/schedule", label: "Schedule" },
  { to: "/supplies", label: "Supplies" },
  { to: "/signup", label: "Sign Up" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b-2 border-foreground">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="w-10 h-10 rounded-full bg-gradient-lilac border-2 border-foreground flex items-center justify-center shadow-pop-sm group-hover:rotate-12 transition-transform">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </span>
          <span className="font-display text-lg sm:text-xl tracking-tight">
            Limitless Knowledge
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 rounded-full text-sm font-semibold transition-colors",
                  isActive ? "bg-foreground text-background" : "hover:bg-accent"
                )
              }
            >
              {l.label}
            </RouterNavLink>
          ))}
          <Link
            to="/signup"
            className="ml-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold border-2 border-foreground shadow-pop-sm hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform"
          >
            Enroll
          </Link>
        </nav>

        <button
          className="lg:hidden w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t-2 border-foreground bg-background">
          <div className="container py-3 flex flex-col gap-1">
            {links.map((l) => (
              <RouterNavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-xl text-base font-semibold",
                    isActive ? "bg-foreground text-background" : "hover:bg-accent"
                  )
                }
              >
                {l.label}
              </RouterNavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
