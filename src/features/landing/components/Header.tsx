import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/" },
  { label: "Webinars", to: "/" },
  { label: "Partnerships", to: "/" },
  { label: "Providers", to: "/" },
  { label: "Answer Base", to: "/" },
  { label: "Contact", to: "/" },
  { label: "Help Center", to: "/" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-16 items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-teal border-2 border-background" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-[1.15rem] font-semibold tracking-tight text-primary">
                Compass
              </span>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Compliance Services
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-primary rounded-md transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2.5">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-semibold text-primary border border-primary/20 rounded-full hover:bg-primary/5 transition-colors"
            >
              Login
            </Link>
            <button className="px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-full shadow-soft hover:shadow-lift hover:-translate-y-px transition-all">
              Request Consultation
            </button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-5">
            <nav className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-3 shadow-card">
              {NAV.map((n) => (
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-foreground/80 rounded-lg hover:bg-muted"
                >
                  {n.label}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 text-sm font-semibold text-primary border border-primary/20 rounded-full text-center"
                >
                  Login
                </Link>
                <button className="px-4 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-full">
                  Consultation
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
