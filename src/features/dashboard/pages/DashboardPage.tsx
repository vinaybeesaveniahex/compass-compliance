import { useState, useRef, useEffect } from "react";
import {
  ShieldCheck,
  Bell,
  HelpCircle,
  ChevronDown,
  LifeBuoy,
  ArrowRight,
  Network,
  Compass as CompassIcon,
  BookOpen,
  MessageCircle,
  Info,
  LogOut,
  UserCircle,
  Settings,
  Search,
  Building2,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-surface-warm">
      <AppHeader />
      <main className="mx-auto max-w-6xl px-5 lg:px-8 py-10 lg:py-14">
        <WelcomeBlock />
        <WorkspaceSection />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <SupportCard />
          <SystemNotice />
        </div>
      </main>
    </div>
  );
}

/* ---------- Header ---------- */

function BrandMark() {
  return (
    <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
      <ShieldCheck className="h-[18px] w-[18px] opacity-90" strokeWidth={2} />
      <span className="absolute inset-0 flex items-center justify-center">
        <CompassIcon className="h-[11px] w-[11px]" strokeWidth={2.5} />
      </span>
    </span>
  );
}

function AppHeader() {
  return (
    <header className="sticky top-0 z-40 bg-card/90 backdrop-blur-xl border-b border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center gap-2.5">
          <BrandMark />
          <span className="font-display text-[1.05rem] font-semibold tracking-tight text-primary">
            Compass Compliance Services
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href="/help-center"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 h-9 rounded-lg text-sm font-medium text-foreground/75 hover:text-primary hover:bg-muted transition-colors"
          >
            <HelpCircle className="h-4 w-4" />
            Help
          </a>
          <button
            aria-label="Notifications"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
          >
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive ring-2 ring-card" />
          </button>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}

function UserMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 pl-1.5 pr-2 sm:pr-3 h-10 rounded-full border border-border bg-card hover:shadow-soft transition-all"
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
          SM
        </span>
        <span className="hidden sm:inline text-sm font-medium text-foreground">
          Sarah Mitchell
        </span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-60 rounded-2xl border border-border bg-card shadow-lift overflow-hidden">
          <div className="px-4 py-3 border-b border-border">
            <div className="text-sm font-semibold text-primary">
              Sarah Mitchell
            </div>
            <div className="text-xs text-muted-foreground">
              sarah@company.com
            </div>
          </div>
          <div className="p-1.5">
            <MenuItem href="/profile" icon={UserCircle} label="My Profile" />
            <MenuItem
              href="/settings"
              icon={Settings}
              label="Account Settings"
            />
            <MenuItem
              href="/help-center"
              icon={HelpCircle}
              label="Help Center"
            />
          </div>
          <div className="p-1.5 border-t border-border">
            <MenuItem href="/logout" icon={LogOut} label="Logout" danger />
          </div>
        </div>
      )}
    </div>
  );
}

function MenuItem({
  href,
  icon: Icon,
  label,
  danger,
}: {
  href: string;
  icon: typeof UserCircle;
  label: string;
  danger?: boolean;
}) {
  return (
    <a
      href={href}
      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors ${
        danger ? "text-destructive" : "text-foreground/85"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

/* ---------- Welcome ---------- */

function WelcomeBlock() {
  return (
    <section>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/10 text-teal border border-teal/20">
        <ShieldCheck className="h-3.5 w-3.5" />
        <span className="text-[0.7rem] font-semibold uppercase tracking-wider">
          Secure Workspace Access
        </span>
      </div>
      <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-primary leading-tight tracking-tight">
        Welcome back, Sarah
      </h1>
      <p className="mt-3 max-w-2xl text-[0.95rem] text-muted-foreground leading-relaxed">
        Select a workspace to continue managing compliance operations, client
        relationships, advisory activities, and service workflows.
      </p>
    </section>
  );
}

/* ---------- Workspaces ---------- */

type Workspace = {
  key: "compass" | "crm";
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: typeof Network;
  illustration: "compass" | "crm";
  requiresClient?: boolean;
};

const WORKSPACES: Workspace[] = [
  {
    key: "compass",
    title: "Compass",
    description:
      "Access compliance workflows, client reviews, regulatory tracking, document requests, and advisory guidance from one secure workspace.",
    href: "/compass",
    cta: "Enter Compass",
    icon: CompassIcon,
    illustration: "compass",
    requiresClient: true,
  },
  {
    key: "crm",
    title: "CRM",
    description:
      "Manage clients, contacts, opportunities, service activities, advisory workflows, and relationship history from one centralized workspace.",
    href: "/crm",
    cta: "Enter CRM",
    icon: Network,
    illustration: "crm",
  },
];

function WorkspaceSection() {
  return (
    <section className="mt-10">
      <SectionTitle>Your Workspaces</SectionTitle>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {WORKSPACES.map((w) => (
          <WorkspaceCard key={w.key} workspace={w} />
        ))}
      </div>
    </section>
  );
}

function WorkspaceCard({ workspace }: { workspace: Workspace }) {
  const Icon = workspace.icon;
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const requiresClient = workspace.requiresClient;
  const ctaDisabled = requiresClient && !selectedClient;

  return (
    <div className="group relative flex flex-col rounded-3xl border border-border bg-card shadow-card hover:shadow-lift transition-all overflow-hidden">
      <div className="relative h-24 bg-gradient-to-br from-accent/50 via-surface-warm to-warm/20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-70">
          {workspace.illustration === "compass" ? <CompassArt /> : <CrmArt />}
        </div>
        <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card/85 backdrop-blur border border-teal/20">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-teal">
            Available
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-7">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft mb-5">
          <Icon className="h-5 w-5" strokeWidth={2.25} />
        </div>

        <h3 className="font-display text-2xl font-semibold text-primary tracking-tight">
          {workspace.title}
        </h3>
        <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
          {workspace.description}
        </p>

        {requiresClient && (
          <div className="mt-6">
            <ClientSearch value={selectedClient} onChange={setSelectedClient} />
          </div>
        )}

        <div className="mt-auto pt-7">
          {ctaDisabled ? (
            <button
              disabled
              aria-disabled="true"
              className="inline-flex items-center gap-2 rounded-full bg-primary/40 text-primary-foreground px-6 py-3 text-sm font-semibold cursor-not-allowed"
            >
              {workspace.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <a
              href={workspace.href}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-lift hover:-translate-y-px transition-all"
            >
              {workspace.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const SAMPLE_CLIENTS = [
  "Acme Manufacturing Group",
  "BrightPath Healthcare",
  "Northstar Retail Holdings",
  "Summit Education Trust",
];

function ClientSearch({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (v: string | null) => void;
}) {
  const [query, setQuery] = useState(value ?? "");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const filtered = SAMPLE_CLIENTS.filter((c) =>
    c.toLowerCase().includes(query.toLowerCase()),
  );

  const select = (c: string) => {
    setQuery(c);
    onChange(c);
    setOpen(false);
  };

  return (
    <div className="relative" ref={wrapRef}>
      <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
        Search / Select Client
      </label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange(null);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Start typing client name…"
          className="w-full h-11 pl-9 pr-9 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
        />
        {value && (
          <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-teal" />
        )}
      </div>

      {open && filtered.length > 0 && (
        <div className="absolute z-30 mt-1.5 w-full rounded-xl border border-border bg-card shadow-lift overflow-hidden">
          <ul className="max-h-60 overflow-y-auto py-1">
            {filtered.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => select(c)}
                  className="w-full flex items-start gap-3 px-3 py-2.5 text-left hover:bg-muted transition-colors"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/60 text-primary shrink-0">
                    <Building2 className="h-4 w-4" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-medium text-primary truncate">
                      {c}
                    </span>
                    <span className="block text-[0.7rem] text-muted-foreground">
                      Client account
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!value && (
        <p className="mt-1.5 text-[0.7rem] text-muted-foreground">
          Select a client to continue into Compass.
        </p>
      )}
    </div>
  );
}

function CompassArt() {
  return (
    <svg
      viewBox="0 0 200 100"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full text-secondary/40"
    >
      <circle
        cx="100"
        cy="50"
        r="32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle
        cx="100"
        cy="50"
        r="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M100 28 L106 50 L100 72 L94 50 Z"
        fill="currentColor"
        opacity="0.6"
      />
      <circle cx="100" cy="50" r="2.5" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
        const r = (a * Math.PI) / 180;
        const x1 = 100 + Math.cos(r) * 36;
        const y1 = 50 + Math.sin(r) * 36;
        const x2 = 100 + Math.cos(r) * 40;
        const y2 = 50 + Math.sin(r) * 40;
        return (
          <line
            key={a}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1"
          />
        );
      })}
      <FileCheckGhost x={30} y={30} />
      <FileCheckGhost x={150} y={50} />
    </svg>
  );
}

function FileCheckGhost({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} opacity="0.35">
      <rect
        width="14"
        height="18"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M3 10 L6 13 L11 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </g>
  );
}

function CrmArt() {
  return (
    <svg
      viewBox="0 0 200 100"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full text-secondary/40"
    >
      <line
        x1="100"
        y1="50"
        x2="50"
        y2="25"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="100"
        y1="50"
        x2="150"
        y2="25"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="100"
        y1="50"
        x2="50"
        y2="75"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="100"
        y1="50"
        x2="150"
        y2="75"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="100"
        y1="50"
        x2="30"
        y2="50"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="100"
        y1="50"
        x2="170"
        y2="50"
        stroke="currentColor"
        strokeWidth="1"
      />
      {[
        [50, 25],
        [150, 25],
        [50, 75],
        [150, 75],
        [30, 50],
        [170, 50],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="6"
          fill="currentColor"
          opacity="0.5"
        />
      ))}
      <circle cx="100" cy="50" r="10" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

/* ---------- Support + Notice ---------- */

function SupportCard() {
  return (
    <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-warm/30 text-warm-foreground shrink-0">
          <LifeBuoy className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h4 className="font-display text-lg font-semibold text-primary">
            Need help getting started?
          </h4>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
            Access workspace guides, support resources, or contact your internal
            support team.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="/help-center"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-primary text-primary-foreground hover:shadow-soft transition-all"
            >
              <BookOpen className="h-3.5 w-3.5" />
              View Workspace Guides
            </a>
            <a
              href="/help-center"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-border text-foreground/80 hover:bg-muted transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemNotice() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
      <div className="flex items-start gap-3">
        <Info className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-secondary">
            System Notice
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
            Workspace access is role-based. You will only see applications
            available to your profile.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Helpers ---------- */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="font-display text-lg font-semibold text-primary tracking-tight">
        {children}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
