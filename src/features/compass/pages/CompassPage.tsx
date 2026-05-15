import { useState } from "react";
import {
  ShieldCheck,
  Bell,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Compass as CompassIcon,
  LogOut,
  UserCircle,
  Settings,
  Menu as MenuIcon,
  PanelLeftClose,
  PanelLeftOpen,
  LayoutDashboard,
  FileText,
  ClipboardCheck,
  MessageSquare,
  CalendarClock,
  Activity,
  Building2,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  BookOpen,
  Newspaper,
  Anchor,
  FileSearch,
  LifeBuoy,
  Layers,
  Folder,
  Briefcase,
  BarChart3,
  ListChecks,
} from "lucide-react";
import { Link } from "react-router-dom";

export function CompassPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="min-h-screen bg-surface-warm flex flex-col">
      <TopHeader onMobileMenu={() => setMobileNav((v) => !v)} />
      <ClientContextBar />

      <div className="flex flex-1 min-h-0">
        {/* Desktop sidebar */}
        <aside
          className={`hidden lg:flex flex-col shrink-0 border-r border-border bg-primary text-primary-foreground transition-[width] duration-200 ${
            collapsed ? "w-16" : "w-64"
          }`}
        >
          <Sidebar
            collapsed={collapsed}
            onToggle={() => setCollapsed((v) => !v)}
          />
        </aside>

        {/* Mobile drawer */}
        {mobileNav && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
              onClick={() => setMobileNav(false)}
            />
            <aside className="relative w-72 bg-primary text-primary-foreground shadow-lift">
              <Sidebar
                collapsed={false}
                onToggle={() => setMobileNav(false)}
                mobile
              />
            </aside>
          </div>
        )}

        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 xl:px-10 py-6 lg:py-8">
          <WelcomeCard />
          <KpiGrid />
          <div className="mt-6 grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2 space-y-6">
              <ActionRequired />
              <RecentActivity />
            </div>
            <div className="space-y-6">
              <Resources />
            </div>
          </div>
        </main>
      </div>
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

function TopHeader({ onMobileMenu }: { onMobileMenu: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-card/95 backdrop-blur border-b border-border">
      <div className="h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onMobileMenu}
            aria-label="Open menu"
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground/70 hover:bg-muted"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
          <Link to="/dashboard" className="flex items-center gap-2.5 min-w-0">
            <BrandMark />
            <span className="font-display text-[1.02rem] font-semibold tracking-tight text-primary truncate">
              Compass Compliance Services
            </span>
          </Link>
          <span className="hidden md:inline-flex items-center gap-1.5 ml-2 px-2.5 py-1 rounded-full bg-accent/60 text-accent-foreground border border-border">
            <CompassIcon className="h-3.5 w-3.5" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-wider">
              Compass Portal
            </span>
          </span>
        </div>

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
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground/70 hover:text-primary hover:bg-muted"
          >
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive ring-2 ring-card" />
          </button>

          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 pl-1.5 pr-2 sm:pr-3 h-10 rounded-full border border-border bg-card hover:shadow-soft"
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
                  <DropItem
                    href="/profile"
                    icon={UserCircle}
                    label="My Profile"
                  />
                  <DropItem
                    href="/settings"
                    icon={Settings}
                    label="Account Settings"
                  />
                  <DropItem
                    href="/help-center"
                    icon={HelpCircle}
                    label="Help Center"
                  />
                </div>
                <div className="p-1.5 border-t border-border">
                  <DropItem
                    href="/logout"
                    icon={LogOut}
                    label="Logout"
                    danger
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function DropItem({
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
      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted ${
        danger ? "text-destructive" : "text-foreground/85"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

/* ---------- Client Context Bar ---------- */

function ClientContextBar() {
  return (
    <div className="bg-card border-b border-border">
      <div className="px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 min-w-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary shrink-0">
              <Building2 className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <div className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                Current Client
              </div>
              <div className="text-sm font-semibold text-primary truncate">
                TestingDataTAHFD2, Inc.
              </div>
            </div>
          </div>
          <ContextField label="EIN" value="25-055669" />
          <div className="flex flex-col">
            <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
              Status
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Active
            </span>
          </div>
          <ContextField label="Last Updated" value="Today, 10:30 AM" />
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 px-3 h-9 rounded-lg text-sm font-medium border border-border bg-card text-foreground/80 hover:bg-muted"
          >
            <Layers className="h-4 w-4" />
            Change Client
          </Link>
          <a
            href="/compass/client-profile"
            className="inline-flex items-center gap-1.5 px-3 h-9 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:shadow-soft"
          >
            <UserCircle className="h-4 w-4" />
            Client Profile
          </a>
        </div>
      </div>
    </div>
  );
}

function ContextField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
  );
}

/* ---------- Sidebar ---------- */

type NavItem = { label: string; href: string };
type NavGroup = {
  label: string;
  icon: typeof LayoutDashboard;
  href?: string;
  items?: NavItem[];
};

const NAV: NavGroup[] = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/compass" },
  { label: "Billing", icon: BarChart3, href: "/compass/billing" },
  { label: "Message Centre", icon: MessageSquare, href: "/compass/messages" },
  {
    label: "NorthStar",
    icon: ShieldCheck,
    items: [
      { label: "Applications", href: "/wizard" },
      {
        label: "Employee Profiles",
        href: "/compass/northstar/employee-profiles",
      },
      { label: "Employee Census", href: "/employee-census" },
      { label: "Add EIN", href: "/compass/northstar/add-ein" },
    ],
  },
  { label: "NorthRoute", icon: Folder, href: "/compass/northroute" },
  {
    label: "Service Tickets",
    icon: ListChecks,
    href: "/compass/service-tickets",
  },
  { label: "COBRA Services", icon: Briefcase, href: "/compass/cobra" },
];

function Sidebar({
  collapsed,
  onToggle,
  mobile,
}: {
  collapsed: boolean;
  onToggle: () => void;
  mobile?: boolean;
}) {
  const [open, setOpen] = useState<Record<number, boolean>>({ 3: true });

  return (
    <div className="flex flex-col h-full">
      <div
        className={`h-14 flex items-center ${
          collapsed ? "justify-center" : "justify-between"
        } px-3 border-b border-primary-foreground/10`}
      >
        {!collapsed && (
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground/70">
            Menu
          </span>
        )}
        <button
          onClick={onToggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-primary-foreground/80 hover:bg-primary-foreground/10"
        >
          {mobile ? (
            <PanelLeftClose className="h-4 w-4" />
          ) : collapsed ? (
            <PanelLeftOpen className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-3 px-2">
        {NAV.map((group, i) => {
          const isOpen = open[i] ?? false;
          const Icon = group.icon;
          const hasChildren = !!group.items?.length;

          if (!hasChildren) {
            return (
              <a
                key={group.label}
                href={group.href ?? "#"}
                className={`mb-1 w-full flex items-center ${
                  collapsed ? "justify-center" : ""
                } gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium text-primary-foreground/85 hover:bg-primary-foreground/10 transition-colors`}
                title={collapsed ? group.label : undefined}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {!collapsed && <span className="truncate">{group.label}</span>}
              </a>
            );
          }

          return (
            <div key={group.label} className="mb-1">
              <button
                onClick={() => setOpen((s) => ({ ...s, [i]: !isOpen }))}
                className={`w-full flex items-center ${
                  collapsed ? "justify-center" : "justify-between"
                } gap-2 px-2.5 py-2 rounded-lg text-sm font-medium text-primary-foreground/85 hover:bg-primary-foreground/10 transition-colors`}
                title={collapsed ? group.label : undefined}
              >
                <span className="flex items-center gap-2.5 min-w-0">
                  <Icon className="h-4 w-4 shrink-0" />
                  {!collapsed && (
                    <span className="truncate">{group.label}</span>
                  )}
                </span>
                {!collapsed && (
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                )}
              </button>
              {!collapsed && isOpen && (
                <ul className="mt-1 ml-3 pl-3 border-l border-primary-foreground/15 space-y-0.5">
                  {group.items!.map((item, j) => {
                    const active = group.label === "NorthStar" && j === 0;
                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className={`block px-2.5 py-1.5 rounded-md text-[0.82rem] transition-colors ${
                            active
                              ? "bg-primary-foreground/15 text-primary-foreground font-semibold"
                              : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                          }`}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="px-3 py-3 border-t border-primary-foreground/10">
          <a
            href="/help-center"
            className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-primary-foreground/80 hover:bg-primary-foreground/10"
          >
            <LifeBuoy className="h-4 w-4" />
            Support
          </a>
        </div>
      )}
    </div>
  );
}

/* ---------- Main Content ---------- */

function WelcomeCard() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 lg:p-7 shadow-soft">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl lg:text-[1.75rem] font-semibold text-primary tracking-tight">
            Welcome to Compass Portal
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground max-w-2xl leading-relaxed">
            You are viewing the compliance and advisory workspace for{" "}
            <span className="font-medium text-foreground">
              TestingDataTAHFD2, Inc.
            </span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge tone="teal" icon={CheckCircle2}>
            Client Active
          </Badge>
          <Badge tone="primary" icon={ShieldCheck}>
            Compliance Workspace
          </Badge>
          <Badge tone="muted" icon={UserCircle}>
            Role-Based Access
          </Badge>
        </div>
      </div>
    </section>
  );
}

function Badge({
  children,
  tone,
  icon: Icon,
}: {
  children: React.ReactNode;
  tone: "teal" | "primary" | "muted" | "warm" | "destructive";
  icon?: typeof CheckCircle2;
}) {
  const map: Record<string, string> = {
    teal: "bg-teal/10 text-teal border-teal/20",
    primary: "bg-accent text-accent-foreground border-border",
    muted: "bg-muted text-foreground/70 border-border",
    warm: "bg-warm/20 text-warm-foreground border-warm/30",
    destructive: "bg-destructive/10 text-destructive border-destructive/20",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[0.7rem] font-semibold uppercase tracking-wider ${map[tone]}`}
    >
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {children}
    </span>
  );
}

type Kpi = {
  label: string;
  value: number;
  helper: string;
  icon: typeof ListChecks;
  href: string;
  tone: "primary" | "teal" | "warm" | "muted";
};

const KPIS: Kpi[] = [
  {
    label: "Open Tasks",
    value: 12,
    helper: "3 due this week",
    icon: ListChecks,
    href: "/compass/tasks",
    tone: "primary",
  },
  {
    label: "Pending Documents",
    value: 8,
    helper: "Awaiting client response",
    icon: FileText,
    href: "/compass/documents",
    tone: "warm",
  },
  {
    label: "Compliance Reviews",
    value: 4,
    helper: "2 in progress",
    icon: ClipboardCheck,
    href: "/compass/reviews",
    tone: "teal",
  },
  {
    label: "Messages",
    value: 6,
    helper: "2 unread",
    icon: MessageSquare,
    href: "/compass/messages",
    tone: "primary",
  },
  {
    label: "Upcoming Deadlines",
    value: 5,
    helper: "Next deadline in 4 days",
    icon: CalendarClock,
    href: "/compass/deadlines",
    tone: "warm",
  },
  {
    label: "Recent Updates",
    value: 9,
    helper: "This week",
    icon: Activity,
    href: "/compass/activity",
    tone: "muted",
  },
];

function KpiGrid() {
  return (
    <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {KPIS.map((k) => (
        <KpiCard key={k.label} kpi={k} />
      ))}
    </section>
  );
}

function KpiCard({ kpi }: { kpi: Kpi }) {
  const Icon = kpi.icon;
  const tones: Record<string, string> = {
    primary: "bg-accent text-primary",
    teal: "bg-teal/10 text-teal",
    warm: "bg-warm/20 text-warm-foreground",
    muted: "bg-muted text-foreground/70",
  };
  return (
    <a
      href={kpi.href}
      className="group rounded-2xl border border-border bg-card p-4 shadow-soft hover:shadow-card hover:-translate-y-px transition-all"
    >
      <div className="flex items-start justify-between">
        <span
          className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${tones[kpi.tone]}`}
        >
          <Icon className="h-4 w-4" />
        </span>
        <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="mt-3">
        <div className="font-display text-3xl font-semibold text-primary leading-none tracking-tight">
          {kpi.value}
        </div>
        <div className="mt-2 text-sm font-medium text-foreground">
          {kpi.label}
        </div>
        <div className="mt-0.5 text-[0.72rem] text-muted-foreground">
          {kpi.helper}
        </div>
      </div>
    </a>
  );
}

/* ---------- Action Required ---------- */

type Action = {
  title: string;
  status: "Due Soon" | "Waiting" | "New" | "Review Needed";
  due: string;
};

const ACTIONS: Action[] = [
  {
    title: "Complete annual renewal checklist",
    status: "Due Soon",
    due: "May 18",
  },
  {
    title: "Review pending document request",
    status: "Waiting",
    due: "May 20",
  },
  { title: "Respond to advisor message", status: "New", due: "Today" },
  {
    title: "Confirm company profile details",
    status: "Review Needed",
    due: "May 22",
  },
];

function ActionRequired() {
  return (
    <Card title="Action Required" icon={AlertCircle}>
      <ul className="divide-y divide-border">
        {ACTIONS.map((a) => (
          <li
            key={a.title}
            className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          >
            <div className="min-w-0 flex items-start gap-3">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-warm shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-foreground">
                  {a.title}
                </div>
                <div className="mt-0.5 flex items-center gap-3 text-[0.72rem] text-muted-foreground">
                  <StatusChip status={a.status} />
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Due {a.due}
                  </span>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline"
            >
              View
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function StatusChip({ status }: { status: Action["status"] }) {
  const map: Record<
    Action["status"],
    { tone: string; icon: typeof CheckCircle2 }
  > = {
    "Due Soon": {
      tone: "bg-warm/20 text-warm-foreground border-warm/30",
      icon: Clock,
    },
    Waiting: { tone: "bg-muted text-foreground/70 border-border", icon: Clock },
    New: { tone: "bg-teal/10 text-teal border-teal/20", icon: AlertCircle },
    "Review Needed": {
      tone: "bg-accent text-accent-foreground border-border",
      icon: ClipboardCheck,
    },
  };
  const { tone, icon: Icon } = map[status];
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[0.65rem] font-semibold uppercase tracking-wider ${tone}`}
    >
      <Icon className="h-3 w-3" />
      {status}
    </span>
  );
}

/* ---------- Recent Activity ---------- */

const ACTIVITY = [
  {
    title: "Document uploaded for annual review",
    time: "Today, 9:45 AM",
    icon: FileText,
  },
  {
    title: "Compliance review status changed to In Progress",
    time: "Yesterday, 4:10 PM",
    icon: ClipboardCheck,
  },
  {
    title: "Advisor note added to client profile",
    time: "Yesterday, 2:30 PM",
    icon: MessageSquare,
  },
  {
    title: "Renewal task assigned",
    time: "May 12, 11:15 AM",
    icon: ListChecks,
  },
];

function RecentActivity() {
  return (
    <Card title="Recent Activity" icon={Activity}>
      <ol className="relative">
        {ACTIVITY.map((a, i) => {
          const Icon = a.icon;
          const last = i === ACTIVITY.length - 1;
          return (
            <li key={a.title} className="relative pl-9 pb-5 last:pb-0">
              {!last && (
                <span className="absolute left-3.5 top-7 bottom-0 w-px bg-border" />
              )}
              <span className="absolute left-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-primary border border-border">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div className="text-sm font-medium text-foreground">
                {a.title}
              </div>
              <div className="mt-0.5 text-[0.72rem] text-muted-foreground">
                {a.time}
              </div>
            </li>
          );
        })}
      </ol>
    </Card>
  );
}

/* ---------- Resources ---------- */

const RESOURCES = [
  {
    title: "Navigate Newsletter",
    desc: "Read updates and guidance for compliance and benefits operations.",
    icon: Newspaper,
    href: "/compass/resources/navigate-newsletter",
  },
  {
    title: "Anchor Newsletter",
    desc: "Access curated advisory and industry insights.",
    icon: Anchor,
    href: "/compass/resources/anchor-newsletter",
  },
  {
    title: "White Paper",
    desc: "Explore detailed research and planning resources.",
    icon: FileSearch,
    href: "/compass/resources/white-paper",
  },
  {
    title: "Knowledge Base",
    desc: "Find answers, guides, and support documentation.",
    icon: BookOpen,
    href: "/compass/help",
  },
];

function Resources() {
  return (
    <Card title="Resources" icon={BookOpen}>
      <div className="grid gap-3">
        {RESOURCES.map((r) => {
          const Icon = r.icon;
          return (
            <a
              key={r.title}
              href={r.href}
              className="group flex items-start gap-3 p-3 rounded-xl border border-border bg-surface hover:bg-muted/60 transition-colors"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary shrink-0">
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-primary">
                  {r.title}
                </div>
                <div className="mt-0.5 text-[0.75rem] text-muted-foreground leading-relaxed">
                  {r.desc}
                </div>
                <span className="mt-2 inline-flex items-center gap-1 text-[0.72rem] font-semibold text-secondary group-hover:underline">
                  Open
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </Card>
  );
}

/* ---------- Card shell ---------- */

function Card({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: typeof Activity;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-card shadow-soft">
      <header className="px-5 py-4 border-b border-border flex items-center gap-2.5">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-primary">
          <Icon className="h-4 w-4" />
        </span>
        <h2 className="font-display text-base font-semibold text-primary tracking-tight">
          {title}
        </h2>
      </header>
      <div className="p-5">{children}</div>
    </section>
  );
}
