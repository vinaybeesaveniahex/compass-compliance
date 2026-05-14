import {
  Heart,
  PiggyBank,
  ShieldCheck,
  GraduationCap,
  Network,
  Headphones,
  ArrowRight,
  Search,
  Building2,
  UserCog,
  Users,
  Briefcase,
  Handshake,
  CalendarDays,
  PlayCircle,
  CheckCircle2,
  Circle,
  Clock,
  FileText,
  ClipboardList,
  Send,
  Database,
  UserCheck,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";

/* -------------------- What We Help You Manage -------------------- */
const MANAGE = [
  {
    icon: Heart,
    title: "Employee Benefits",
    desc: "Support plan decisions, employee questions, renewals, and benefits communication.",
    tone: "warm",
  },
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    desc: "Help plan sponsors and employees navigate retirement readiness and workplace retirement programs.",
    tone: "teal",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Guidance",
    desc: "Bring structure to benefits-related obligations, documentation, deadlines, and advisory reviews.",
    tone: "primary",
  },
  {
    icon: GraduationCap,
    title: "Financial Wellness",
    desc: "Provide resources and education to help employees make confident financial decisions.",
    tone: "warm",
  },
  {
    icon: Network,
    title: "Provider Coordination",
    desc: "Keep provider interactions, service requests, documents, and follow-ups organized.",
    tone: "teal",
  },
  {
    icon: Headphones,
    title: "Employee Support",
    desc: "Give employees clearer access to answers, education, and guided support.",
    tone: "primary",
  },
];

const iconTone: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  teal: "bg-teal/15 text-teal",
  warm: "bg-warm/35 text-warm-foreground",
};

export function ManageSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="What We Help You Manage"
          subtitle="A full-spectrum partner across benefits, retirement, compliance, and the people moments in between."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MANAGE.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="group relative rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconTone[m.tone]}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary">
                  {m.title}
                </h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                  {m.desc}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Advisory Expertise -------------------- */
export function AdvisorySection() {
  const cards = [
    {
      title: "Benefits Strategy Review",
      meta: "Quarterly · Employer",
      status: "In review",
      statusTone: "teal",
      next: "Next: present findings on Sep 24",
      advisor: "Led by Marcus Bell",
    },
    {
      title: "Compliance Guidance Session",
      meta: "Annual · HR Team",
      status: "Scheduled",
      statusTone: "warm",
      next: "Next: 5500 prep call · 90 min",
      advisor: "Led by Priya Anand",
    },
    {
      title: "Retirement Plan Check-in",
      meta: "Bi-annual · Plan Sponsor",
      status: "Action ready",
      statusTone: "primary",
      next: "Next: review participation lift",
      advisor: "Led by Linda Okafor",
    },
  ];
  const statusTone: Record<string, string> = {
    teal: "bg-teal/15 text-teal",
    warm: "bg-warm/40 text-warm-foreground",
    primary: "bg-primary/10 text-primary",
  };

  return (
    <section className="py-24 lg:py-32 bg-surface-warm">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Our approach
            </span>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-primary leading-[1.08] text-balance">
              Local advisory expertise,{" "}
              <span className="italic font-normal text-secondary">
                national-scale
              </span>{" "}
              resources.
            </h2>
            <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
              Our approach combines experienced advisors, structured service
              workflows, employer-specific guidance, and a deep understanding of
              benefits and retirement complexity.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              {[
                ["240+", "Advisors"],
                ["38 yrs", "In practice"],
                ["1.2M", "Employees served"],
              ].map(([k, v]) => (
                <div
                  key={v}
                  className="rounded-2xl border border-border bg-card p-4"
                >
                  <div className="font-display text-xl font-semibold text-primary">
                    {k}
                  </div>
                  <div className="text-[0.7rem] uppercase tracking-wider text-muted-foreground mt-1">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {cards.map((c, i) => (
              <div
                key={c.title}
                className="group rounded-3xl bg-card border border-border p-6 lg:p-7 shadow-soft hover:shadow-card transition-all"
                style={{
                  transform: `rotate(${i % 2 === 0 ? "-0.3deg" : "0.3deg"})`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.meta}
                    </span>
                    <h3 className="mt-1.5 font-display text-xl font-semibold text-primary">
                      {c.title}
                    </h3>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.7rem] font-semibold ${statusTone[c.statusTone]}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {c.status}
                  </span>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-dashed border-border pt-4">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-secondary to-teal" />
                    <span className="text-xs font-medium text-foreground/80">
                      {c.advisor}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {c.next}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Digital Workflow -------------------- */
const STEPS = [
  {
    icon: Lightbulb,
    title: "Employer Need Identified",
    body: "Triage from intake form, advisor call, or HR ticket.",
  },
  {
    icon: ClipboardList,
    title: "Advisor Reviews Context",
    body: "Pulls plan history, compliance status, prior notes.",
  },
  {
    icon: Database,
    title: "Provider or Plan Data Added",
    body: "Carriers, vendors, and recordkeepers synced.",
  },
  {
    icon: Send,
    title: "Recommendation Shared",
    body: "Plain-language summary, options, and next steps.",
  },
  {
    icon: UserCheck,
    title: "Employee or HR Action Completed",
    body: "Action items routed to the right person.",
  },
  {
    icon: FileText,
    title: "Documentation Stored",
    body: "Audit-ready records linked to the request.",
  },
];

export function WorkflowSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="Digital Workflows That Keep Everyone Aligned"
          subtitle="A structured path from question to documented outcome — visible to advisors, employers, and providers."
        />

        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 relative">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative">
                <div className="rounded-3xl border border-border bg-card p-6 h-full shadow-soft hover:shadow-card transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <span className="font-display text-3xl font-semibold text-primary/15">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Who We Serve -------------------- */
const STAKEHOLDERS = [
  {
    icon: Building2,
    title: "Employers",
    desc: "Strategic guidance to design benefits programs that attract talent and stay compliant.",
  },
  {
    icon: UserCog,
    title: "HR & Benefits Teams",
    desc: "Workflow support, communications, and a dedicated advisor to lean on year-round.",
  },
  {
    icon: Users,
    title: "Employees",
    desc: "Friendly answers, education, and access to people who can actually help.",
  },
  {
    icon: PiggyBank,
    title: "Retirement Plan Sponsors",
    desc: "Plan governance, participant outcomes, and fiduciary support — done with you.",
  },
  {
    icon: Briefcase,
    title: "Providers",
    desc: "A coordinated relationship layer that keeps service requests and renewals on track.",
  },
  {
    icon: Handshake,
    title: "Strategic Partners",
    desc: "Co-built programs with technology, advisory, and benefits firms across the country.",
  },
];

export function StakeholdersSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface-warm">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Who we serve"
          title="Built for Every Stakeholder in the Benefits Ecosystem"
          subtitle="One platform and advisory team — distinct experiences for each audience."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STAKEHOLDERS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-3xl bg-card border border-border p-7 shadow-soft hover:shadow-card transition-all flex flex-col"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.desc}
                </p>
                <div className="mt-5 pt-5 border-t border-dashed border-border flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    Tailored experience
                  </span>
                  <ArrowRight className="h-4 w-4 text-secondary group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Webinars -------------------- */
const WEBINARS = [
  {
    category: "Retirement",
    title: "Retirement Readiness for Today's Workforce",
    date: "Oct 14 · 1:00 PM ET",
    desc: "Where workplace plans are headed and how to prepare a multi-generational workforce.",
    live: true,
  },
  {
    category: "Compliance",
    title: "Benefits Compliance Planning for Employers",
    date: "Oct 22 · 11:00 AM ET",
    desc: "An advisor-led walkthrough of upcoming filing deadlines and documentation hygiene.",
    live: false,
  },
  {
    category: "Wellness",
    title: "Financial Wellness Strategies for Employees",
    date: "Nov 05 · 2:00 PM ET",
    desc: "Practical programs that move financial confidence — beyond a one-time seminar.",
    live: false,
  },
];

export function WebinarsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Education"
          title="Guidance Through Education"
          subtitle="Live and on-demand sessions led by our advisors and partner experts."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {WEBINARS.map((w) => (
            <div
              key={w.title}
              className="group rounded-3xl overflow-hidden border border-border bg-card shadow-soft hover:shadow-card transition-all flex flex-col"
            >
              <div className="relative h-44 bg-gradient-to-br from-primary via-secondary to-teal overflow-hidden">
                <div className="absolute inset-0 bg-grid-soft opacity-20" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-card/95 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-primary">
                  {w.category}
                </div>
                {w.live && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-warm px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-warm-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-warm-foreground animate-pulse" />
                    Live soon
                  </div>
                )}
                <PlayCircle
                  className="absolute inset-0 m-auto h-14 w-14 text-primary-foreground/90 group-hover:scale-110 transition-transform"
                  strokeWidth={1.4}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" /> {w.date}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-primary leading-snug">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {w.desc}
                </p>
                <button className="mt-5 inline-flex items-center justify-center gap-1.5 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:shadow-card transition-shadow">
                  {w.live ? "Register" : "Watch Now"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Answer Base -------------------- */
const HELP = [
  { title: "Benefits FAQs", count: "82 articles" },
  { title: "Retirement Plan Questions", count: "47 articles" },
  { title: "Compliance Resources", count: "61 articles" },
  { title: "Provider Support", count: "29 articles" },
  { title: "Account Help", count: "34 articles" },
];

export function AnswerBaseSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface-warm">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Self-serve support
          </span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-primary leading-[1.08] text-balance">
            Find the right answer,{" "}
            <span className="italic font-normal text-secondary">faster</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Searchable guidance across benefits, retirement, compliance,
            providers, and accounts.
          </p>

          <div className="mt-10 relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-warm/30 via-teal/20 to-secondary/20 blur-xl" />
            <div className="relative flex items-center gap-2 rounded-full bg-card border border-border shadow-card p-2 pl-5">
              <Search className="h-5 w-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Search benefits, retirement, compliance, provider, or account questions..."
                className="flex-1 bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/80 focus:outline-none min-w-0"
              />
              <button className="hidden sm:inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:shadow-card transition-shadow">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-3.5 max-w-5xl mx-auto">
          {HELP.map((h) => (
            <a
              key={h.title}
              href="#"
              className="group rounded-2xl bg-card border border-border p-5 hover:shadow-card hover:-translate-y-0.5 transition-all"
            >
              <div className="font-display text-base font-semibold text-primary leading-tight">
                {h.title}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {h.count}
              </div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-secondary">
                Browse{" "}
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Portals -------------------- */
const PORTALS = [
  {
    title: "Employer Login",
    desc: "Plan dashboards, advisor notes, and benefits comms.",
    icon: Building2,
  },
  {
    title: "Provider Login",
    desc: "Service requests, renewals, and shared documents.",
    icon: Briefcase,
  },
  {
    title: "Partner Login",
    desc: "Co-managed clients, referrals, and program updates.",
    icon: Handshake,
  },
  {
    title: "Employee Login",
    desc: "Benefits answers, retirement progress, and resources.",
    icon: Users,
  },
];

export function PortalsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Portals"
          title="Access Your Portal"
          subtitle="A tailored sign-in experience for every role in your organization."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PORTALS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group rounded-3xl bg-gradient-to-b from-card to-surface-warm border border-border p-6 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all flex flex-col"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.desc}
                </p>
                <button className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full border border-primary/20 bg-card px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                  Login
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Partnership Banner -------------------- */
export function PartnershipBanner() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary text-primary-foreground p-10 lg:p-16">
          <div className="absolute inset-0 bg-grid-soft opacity-10" />
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-warm/25 blur-3xl" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                Partnerships
              </span>
              <h2 className="mt-4 font-display text-3xl lg:text-5xl font-semibold leading-[1.08] text-balance">
                Partner with a network built around{" "}
                <span className="italic font-normal text-warm">
                  better employee outcomes
                </span>
                .
              </h2>
              <p className="mt-5 text-base lg:text-lg text-primary-foreground/75 max-w-2xl text-pretty">
                For providers, advisors, technology partners, and organizations
                looking to support employers and employees through better
                benefits, retirement, and financial wellness experiences.
              </p>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <button className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-warm text-warm-foreground font-semibold hover:shadow-lift hover:-translate-y-px transition-all">
                Explore Partnerships
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Final CTA -------------------- */
export function FinalCta() {
  return (
    <section className="py-24 lg:py-32 bg-surface-warm">
      <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
        <h2 className="font-display text-4xl lg:text-5xl font-semibold text-primary leading-[1.05] text-balance">
          Ready to help your organization make better benefits and{" "}
          <span className="italic font-normal text-secondary">
            retirement decisions
          </span>
          ?
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Talk with an advisor about your workforce, your providers, and what's
          next.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <button className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-card hover:shadow-lift hover:-translate-y-px transition-all">
            Request Consultation
            <ArrowRight className="h-4 w-4" />
          </button>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-card text-primary border border-border font-semibold hover:border-primary/30 transition-colors"
          >
            Login to Portal
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Section Header helper -------------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl lg:text-5xl font-semibold text-primary leading-[1.08] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base lg:text-lg text-muted-foreground text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  );
}
