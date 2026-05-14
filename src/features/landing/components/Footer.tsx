import { Sparkles } from "lucide-react";

const COLS = [
  {
    title: "Company",
    items: ["About", "Contact", "Careers", "Partnerships"],
  },
  {
    title: "Solutions",
    items: ["Employee Benefits", "Retirement Planning", "Compliance Guidance", "Financial Wellness"],
  },
  {
    title: "Resources",
    items: ["Webinars", "Answer Base", "Help Center", "Insights"],
  },
  {
    title: "Account",
    items: ["Login", "Request Consultation", "Forgot Password", "Security"],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10 ring-1 ring-primary-foreground/20">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold">Compass</span>
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-primary-foreground/60">
                  Compliance Services
                </span>
              </div>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
              National-scale resources, local advisory expertise, and digital workflows for
              employers, providers, partners, and employees.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {COLS.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-sm font-semibold tracking-wide">{c.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {c.items.map((i) => (
                    <li key={i}>
                      <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-primary-foreground/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Compass Compliance Services. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-primary-foreground/70">
            {["Privacy Policy", "Terms of Use", "Accessibility", "Security", "Compliance Disclaimer"].map((l) => (
              <a key={l} href="#" className="hover:text-primary-foreground">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
