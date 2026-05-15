import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface-warm flex flex-col">
      <header className="px-5 lg:px-8 py-6">
        <Link to="/" className="inline-flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
            <Sparkles className="h-4 w-4" strokeWidth={2.25} />
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
      </header>

      <main className="flex-1 flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-md">
          <div className="rounded-3xl bg-card border border-border shadow-card p-8 lg:p-10">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                Secure sign in
              </span>
              <h1 className="mt-3 font-display text-3xl font-semibold text-primary leading-tight">
                Welcome back
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                One login for employers, providers, partners, and employees.
              </p>
            </div>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              <div>
                <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs font-semibold text-secondary hover:underline"
                  >
                    Forgot?
                  </a>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3 text-sm font-semibold shadow-soft hover:shadow-lift hover:-translate-y-px transition-all"
              >
                Sign in
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 flex items-center gap-2 justify-center text-xs text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-teal" />
              You'll be routed to the right dashboard automatically after login.
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Need access?{" "}
            <Link
              to="/"
              className="font-semibold text-secondary hover:underline"
            >
              Request a consultation
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
