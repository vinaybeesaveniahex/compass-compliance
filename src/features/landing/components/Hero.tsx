import {
  ArrowRight,
  MessageSquareQuote,
  HelpCircle,
  TrendingUp,
  ShieldCheck,
  Users2,
  BookOpen,
} from "lucide-react";

const WORKFLOW = [
  {
    icon: MessageSquareQuote,
    label: "Advisor Note",
    body: "Recommend updating Q3 benefits comms for the Atlanta team.",
    tone: "primary",
    badge: "Today · 10:24",
  },
  {
    icon: HelpCircle,
    label: "Employee Benefits Question",
    body: "What's covered when I add my newborn mid-year?",
    tone: "warm",
    badge: "From Maya R.",
  },
  {
    icon: TrendingUp,
    label: "Retirement Readiness Insight",
    body: "62% of plan participants are on track — up 8% YoY.",
    tone: "teal",
    badge: "Plan Sponsor View",
  },
  {
    icon: ShieldCheck,
    label: "Compliance Reminder",
    body: "Form 5500 filing window opens in 14 days.",
    tone: "accent",
    badge: "Action needed",
  },
  {
    icon: Users2,
    label: "Provider Coordination",
    body: "Schedule renewal review with carrier — 3 open items.",
    tone: "primary-soft",
    badge: "In progress",
  },
  {
    icon: BookOpen,
    label: "Financial Wellness Resource",
    body: "New micro-course: Building an emergency fund in 90 days.",
    tone: "warm-soft",
    badge: "Just published",
  },
];

const toneMap: Record<string, string> = {
  primary: "bg-primary text-primary-foreground",
  "primary-soft": "bg-primary/8 text-primary ring-1 ring-primary/15",
  warm: "bg-warm/40 text-warm-foreground ring-1 ring-warm/50",
  "warm-soft": "bg-warm/20 text-warm-foreground ring-1 ring-warm/30",
  teal: "bg-teal/15 text-teal ring-1 ring-teal/25",
  accent: "bg-accent text-accent-foreground ring-1 ring-primary/10",
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-radial-warm">
      <div className="absolute inset-0 bg-grid-soft opacity-60 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-14 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/70 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-primary shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
              Advisory-led · Digitally enabled
            </div>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] font-semibold text-primary text-balance">
              Helping organizations support employees through better{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic font-normal text-secondary">benefits, retirement,</span>
                <span className="absolute inset-x-0 bottom-1.5 h-3 bg-warm/50 -z-0 rounded-sm" />
              </span>{" "}
              and financial wellness decisions.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
              We combine national-scale resources, local advisory expertise, and digital
              workflows to help employers navigate benefits complexity and improve employee
              support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-card hover:shadow-lift hover:-translate-y-px transition-all">
                Explore Solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-card text-primary font-semibold border border-border hover:border-primary/30 hover:bg-card/80 transition-colors">
                Talk to an Advisor
              </button>
            </div>

            <div className="mt-10 flex items-start gap-3 max-w-lg">
              <div className="mt-1 flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`h-7 w-7 rounded-full border-2 border-background ${
                      ["bg-teal", "bg-warm", "bg-secondary"][i]
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Supporting employers, providers, partners, and employees through every stage
                of the benefits lifecycle.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <WorkflowBoard />
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowBoard() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/5 via-teal/5 to-warm/10 blur-2xl" />
      <div className="relative rounded-3xl bg-card/90 backdrop-blur-xl border border-border shadow-lift p-5 sm:p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-warm/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
            </div>
            <span className="ml-2 text-xs font-medium text-muted-foreground">
              Advisor Workspace · Today
            </span>
          </div>
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-teal">
            6 active items
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {WORKFLOW.map((w, i) => {
            const Icon = w.icon;
            return (
              <div
                key={w.label}
                className={`group rounded-2xl border border-border/70 bg-surface p-4 hover:shadow-card hover:-translate-y-0.5 transition-all ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${toneMap[w.tone]}`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-display text-sm font-semibold text-primary truncate">
                        {w.label}
                      </h4>
                    </div>
                    <p className="mt-1 text-[0.85rem] text-muted-foreground leading-snug">
                      {w.body}
                    </p>
                    <span className="mt-2.5 inline-block text-[0.7rem] font-medium text-primary/60">
                      {w.badge}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-2xl bg-primary/[0.04] border border-primary/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
            <span className="text-xs font-medium text-primary">
              Linda (advisor) is reviewing your workspace
            </span>
          </div>
          <span className="text-xs font-semibold text-secondary">View activity →</span>
        </div>
      </div>
    </div>
  );
}
