import { useState, type ReactNode } from "react";
import {
  Shield,
  ChevronRight,
  ChevronLeft,
  Check,
  AlertCircle,
  Building2,
  Package,
  FileText,
  HelpCircle,
  Heart,
  Upload,
  CreditCard,
  PenLine,
  Info,
  Trash2,
  Download,
  CheckCircle2,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────
type StepId =
  | "welcome"
  | "products"
  | "basic_info"
  | "core"
  | "benefit_plans"
  | "uploader"
  | "billing"
  | "approval";

type Step = { id: StepId; label: string; icon: LucideIcon; desc: string };

const STEPS: Step[] = [
  { id: "welcome", label: "Welcome", icon: Shield, desc: "Get started" },
  { id: "products", label: "Products", icon: Package, desc: "Select services" },
  {
    id: "basic_info",
    label: "Basic Info",
    icon: Building2,
    desc: "Company details",
  },
  {
    id: "core",
    label: "Core Questions",
    icon: HelpCircle,
    desc: "ACA compliance",
  },
  {
    id: "benefit_plans",
    label: "Benefit Plans",
    icon: Heart,
    desc: "Plans offered",
  },
  { id: "uploader", label: "Documents", icon: Upload, desc: "Upload files" },
  { id: "billing", label: "Billing", icon: CreditCard, desc: "Cost summary" },
  { id: "approval", label: "Approval", icon: PenLine, desc: "Sign & submit" },
];

type StepStatus = "complete" | "error" | "pending";
const STEP_STATUS: Record<StepId, StepStatus> = {
  welcome: "complete",
  products: "complete",
  basic_info: "error",
  core: "complete",
  benefit_plans: "error",
  uploader: "complete",
  billing: "complete",
  approval: "pending",
};

type Product = {
  id: number;
  cat: string;
  name: string;
  price: number;
  desc: string;
  checked: boolean;
};
const PRODUCTS: Product[] = [
  {
    id: 1,
    cat: "Compliance",
    name: "HIPAA Help",
    price: 299,
    desc: "HIPAA compliance documentation and support",
    checked: true,
  },
  {
    id: 2,
    cat: "Compliance",
    name: "ERISA Boost",
    price: 399,
    desc: "ERISA plan document preparation and filing",
    checked: true,
  },
  {
    id: 3,
    cat: "Compliance",
    name: "POP Document",
    price: 149,
    desc: "Premium Only Plan document creation",
    checked: true,
  },
  {
    id: 4,
    cat: "Compliance",
    name: "Section 125",
    price: 199,
    desc: "Cafeteria plan document and compliance",
    checked: true,
  },
  {
    id: 5,
    cat: "Analytics",
    name: "ACA Sound",
    price: 499,
    desc: "ACA reporting and tracking analytics",
    checked: true,
  },
  {
    id: 6,
    cat: "Analytics",
    name: "Exposure Analytics",
    price: 349,
    desc: "Risk exposure reporting and dashboards",
    checked: false,
  },
  {
    id: 7,
    cat: "Data",
    name: "Non-Discrimination Test",
    price: 299,
    desc: "Section 125 non-discrimination testing",
    checked: true,
  },
  {
    id: 8,
    cat: "Concierge",
    name: "PCORI Filing",
    price: 179,
    desc: "PCORI fee calculation and filing service",
    checked: true,
  },
  {
    id: 9,
    cat: "Concierge",
    name: "Form 5500 Filing",
    price: 599,
    desc: "Annual Form 5500 preparation and submission",
    checked: true,
  },
  {
    id: 10,
    cat: "Concierge",
    name: "DOL Audit Letter",
    price: 249,
    desc: "Department of Labor audit response support",
    checked: false,
  },
  {
    id: 11,
    cat: "Partner",
    name: "Retirement Services",
    price: 0,
    desc: "Third-party retirement plan management",
    checked: false,
  },
  {
    id: 12,
    cat: "Partner",
    name: "OMNI Benefits",
    price: 0,
    desc: "Benefits administration platform integration",
    checked: true,
  },
];

type PlanType = { id: string; label: string; category: string; qty: number };
const PLAN_TYPES: PlanType[] = [
  { id: "medical", label: "Medical", category: "Health", qty: 2 },
  { id: "dental", label: "Dental", category: "Health", qty: 1 },
  { id: "vision", label: "Vision", category: "Health", qty: 1 },
  { id: "hsa", label: "Health Savings (HSA)", category: "Savings", qty: 1 },
  { id: "fsa", label: "Flexible Spending (FSA)", category: "Savings", qty: 1 },
  { id: "hra", label: "HRA", category: "Savings", qty: 0 },
  { id: "ltd", label: "Long Term Disability", category: "Disability", qty: 1 },
  { id: "std", label: "Short Term Disability", category: "Disability", qty: 0 },
  { id: "life", label: "Employer Life Insurance", category: "Life", qty: 1 },
  { id: "vol_life", label: "Voluntary Life", category: "Life", qty: 1 },
  { id: "add", label: "AD&D", category: "Life", qty: 1 },
  { id: "eap", label: "Employee Assistance", category: "Supplemental", qty: 1 },
  { id: "cancer", label: "Cancer Insurance", category: "Supplemental", qty: 0 },
  {
    id: "critical",
    label: "Critical Illness",
    category: "Supplemental",
    qty: 0,
  },
];

type Doc = {
  id: number;
  type: string;
  plan: string;
  notes: string;
  status: string;
};
const DOCS: Doc[] = [
  {
    id: 1,
    type: "Plan Document",
    plan: "Medical PPO",
    notes: "2024 SPD",
    status: "uploaded",
  },
  {
    id: 2,
    type: "Carrier Agreement",
    plan: "Dental",
    notes: "Delta renewal",
    status: "uploaded",
  },
  { id: 3, type: "SBC", plan: "Medical HMO", notes: "", status: "uploaded" },
];

const C = {
  navy: "#0f172a",
  teal: "#0891b2",
  tealDk: "#0e7490",
  tealLt: "#ecfeff",
  green: "#10b981",
  greenLt: "#ecfdf5",
  amber: "#f59e0b",
  amberLt: "#fffbeb",
  red: "#ef4444",
  redLt: "#fef2f2",
  grey: "#64748b",
  greyLt: "#f8fafc",
  border: "#e2e8f0",
  text: "#0f172a",
  muted: "#94a3b8",
};

// Consistent max-width for ALL step content
const CONTENT_MAX_WIDTH = "1100px";

// ─────────────────────────────────────────────────────────────────────────────
// SHARED FIELD COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function Label({
  children,
  required,
  tooltip,
}: {
  children: ReactNode;
  required?: boolean;
  tooltip?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        marginBottom: "6px",
      }}
    >
      <span style={{ fontSize: "12px", fontWeight: 600, color: "#374151" }}>
        {children}
      </span>
      {required && <span style={{ color: C.red, fontSize: "11px" }}>*</span>}
      {tooltip && <Info size={12} color={C.muted} style={{ cursor: "help" }} />}
    </div>
  );
}

function Input({
  label,
  required,
  tooltip,
  placeholder,
  value,
  type = "text",
  locked,
}: {
  label?: string;
  required?: boolean;
  tooltip?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  locked?: boolean;
}) {
  return (
    <div>
      {label && (
        <Label required={required} tooltip={tooltip}>
          {label}
        </Label>
      )}
      <input
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        readOnly={locked}
        style={{
          width: "100%",
          padding: "9px 12px",
          borderRadius: "7px",
          border: `1px solid ${C.border}`,
          fontSize: "13px",
          background: locked ? "#f1f5f9" : "white",
          outline: "none",
          boxSizing: "border-box",
          cursor: locked ? "not-allowed" : "text",
          color: locked ? C.grey : C.text,
        }}
      />
    </div>
  );
}

function Select({
  label,
  required,
  tooltip,
  options,
  value,
}: {
  label?: string;
  required?: boolean;
  tooltip?: string;
  options: string[];
  value?: string;
}) {
  return (
    <div>
      {label && (
        <Label required={required} tooltip={tooltip}>
          {label}
        </Label>
      )}
      <select
        defaultValue={value}
        style={{
          width: "100%",
          padding: "9px 12px",
          borderRadius: "7px",
          border: `1px solid ${C.border}`,
          fontSize: "13px",
          color: C.text,
          background: "white",
          outline: "none",
          boxSizing: "border-box",
        }}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function RadioGroup({
  label,
  tooltip,
  options,
  defaultVal,
}: {
  label?: string;
  tooltip?: string;
  options: string[];
  defaultVal: string;
}) {
  const [val, setVal] = useState(defaultVal);
  return (
    <div>
      {label && <Label tooltip={tooltip}>{label}</Label>}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {options.map((o) => (
          <label
            key={o}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name={label}
              value={o}
              checked={val === o}
              onChange={() => setVal(o)}
              style={{ accentColor: C.teal }}
            />
            <span style={{ fontSize: "13px", color: C.text }}>{o}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function Toggle({
  label,
  tooltip,
  defaultVal,
}: {
  label: string;
  tooltip?: string;
  defaultVal: string;
}) {
  const [val, setVal] = useState(defaultVal);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span style={{ fontSize: "13px", color: C.text, fontWeight: 500 }}>
          {label}
        </span>
        {tooltip && (
          <Info size={13} color={C.muted} style={{ cursor: "help" }} />
        )}
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        {["Yes", "No"].map((opt) => (
          <button
            key={opt}
            onClick={() => setVal(opt)}
            style={{
              padding: "5px 16px",
              borderRadius: "6px",
              border: "1px solid",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
              borderColor: val === opt ? C.teal : C.border,
              background: val === opt ? C.tealLt : "white",
              color: val === opt ? C.teal : C.grey,
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function SectionCard({
  title,
  children,
  action,
}: {
  title: string;
  children: ReactNode;
  action?: string;
}) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "10px",
        border: `1px solid ${C.border}`,
        marginBottom: "16px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: `linear-gradient(135deg, ${C.navy}, #1e3a5f)`,
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: "white", fontWeight: 600, fontSize: "13px" }}>
          {title}
        </span>
        {action && (
          <button
            style={{
              padding: "4px 12px",
              borderRadius: "5px",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              fontSize: "11px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {action}
          </button>
        )}
      </div>
      <div style={{ padding: "20px 18px" }}>{children}</div>
    </div>
  );
}

function Divider() {
  return (
    <div style={{ height: "1px", background: C.border, margin: "14px 0" }} />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP CONTENT — all use CONTENT_MAX_WIDTH and margin: "0 auto"
// ─────────────────────────────────────────────────────────────────────────────
function StepWelcome() {
  const [prefill, setPrefill] = useState("prior");
  return (
    <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: "0 auto" }}>
      <div
        style={{
          background: `linear-gradient(135deg, ${C.navy} 0%, #1e3a5f 100%)`,
          borderRadius: "12px",
          padding: "28px",
          marginBottom: "20px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              background: "rgba(8,145,178,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Shield size={22} color="#38bdf8" />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "18px" }}>
              Welcome to NorthStar
            </div>
            <div style={{ color: "#94a3b8", fontSize: "13px" }}>
              FY 2024 · Acme Corp, Inc · EIN 25-055669
            </div>
          </div>
        </div>
        <p
          style={{
            margin: "0 0 12px",
            fontSize: "13px",
            lineHeight: 1.7,
            color: "#cbd5e1",
          }}
        >
          This is your annual ACA compliance application. It captures all
          required information about your company, employees, and benefit plans
          so we can generate your IRS filings (1094-C and 1095-C) accurately.
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            lineHeight: 1.7,
            color: "#cbd5e1",
          }}
        >
          The application has{" "}
          <strong style={{ color: "white" }}>8 steps</strong>. You can save and
          return at any time. Questions? Contact our NorthStar support team.
        </p>
      </div>

      <div
        style={{
          background: "white",
          borderRadius: "10px",
          border: `1px solid ${C.border}`,
          padding: "20px",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: "14px",
            color: C.text,
            marginBottom: "4px",
          }}
        >
          Pre-Fill Options
        </div>
        <p style={{ margin: "0 0 16px", fontSize: "13px", color: C.grey }}>
          Save time by copying data from a previous year instead of starting
          from scratch.
        </p>
        {[
          {
            val: "prior",
            label: "Pre-fill from previous year",
            sub: "Copy all data from FY 2023 application",
          },
          {
            val: "generic",
            label: "Pre-fill with generic template",
            sub: "Start with a standard blank template",
          },
          {
            val: "blank",
            label: "Start completely blank",
            sub: "Enter all information manually",
          },
        ].map((opt) => (
          <label
            key={opt.val}
            onClick={() => setPrefill(opt.val)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 14px",
              borderRadius: "8px",
              cursor: "pointer",
              border: `1px solid ${prefill === opt.val ? C.teal : C.border}`,
              background: prefill === opt.val ? C.tealLt : "white",
              marginBottom: "8px",
              transition: "all 0.15s",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                border: `2px solid ${prefill === opt.val ? C.teal : C.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {prefill === opt.val && (
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: C.teal,
                  }}
                />
              )}
            </div>
            <div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "13px",
                  color: prefill === opt.val ? C.teal : C.text,
                }}
              >
                {opt.label}
              </div>
              <div style={{ fontSize: "12px", color: C.grey }}>{opt.sub}</div>
            </div>
          </label>
        ))}
      </div>

      <div
        style={{
          background: "#fef3c7",
          border: "1px solid #fcd34d",
          borderRadius: "8px",
          padding: "12px 14px",
          marginTop: "14px",
          display: "flex",
          gap: "10px",
        }}
      >
        <AlertCircle
          size={15}
          color="#d97706"
          style={{ flexShrink: 0, marginTop: "1px" }}
        />
        <span style={{ fontSize: "12px", color: "#92400e" }}>
          <strong>Need help?</strong> Our NorthStar care team is available
          Mon–Fri 9am–6pm EST. Email <strong>support@northroute.com</strong> or
          call <strong>1-800-NORTH-01</strong>.
        </span>
      </div>
    </div>
  );
}

function StepProducts() {
  const [products, setProducts] = useState(PRODUCTS);
  const toggle = (id: number) =>
    setProducts((p) =>
      p.map((x) => (x.id === id ? { ...x, checked: !x.checked } : x)),
    );
  const total = products
    .filter((p) => p.checked)
    .reduce((s, p) => s + p.price, 0);
  const cats = [...new Set(products.map((p) => p.cat))];

  return (
    <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        {/* Left: product list */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {cats.map((cat) => (
            <div key={cat} style={{ marginBottom: "18px" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: C.muted,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                {cat} Services
              </div>
              {/* 2-column grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px",
                }}
              >
                {products
                  .filter((p) => p.cat === cat)
                  .map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => toggle(prod.id)}
                      style={{
                        border: `1px solid ${prod.checked ? C.teal : C.border}`,
                        borderRadius: "8px",
                        padding: "12px 14px",
                        cursor: "pointer",
                        background: prod.checked ? C.tealLt : "white",
                        transition: "all 0.15s",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: prod.checked ? C.tealDk : C.text,
                          }}
                        >
                          {prod.name}
                        </span>
                        <div
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "4px",
                            flexShrink: 0,
                            border: `2px solid ${prod.checked ? C.teal : C.border}`,
                            background: prod.checked ? C.teal : "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {prod.checked && (
                            <Check size={11} color="white" strokeWidth={3} />
                          )}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: C.grey,
                          marginTop: "3px",
                        }}
                      >
                        {prod.desc}
                      </div>
                      {prod.price > 0 ? (
                        <div
                          style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            color: C.teal,
                            marginTop: "6px",
                          }}
                        >
                          ${prod.price}/yr
                        </div>
                      ) : (
                        <div
                          style={{
                            fontSize: "11px",
                            color: C.green,
                            fontWeight: 600,
                            marginTop: "6px",
                          }}
                        >
                          Partner — custom pricing
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: cost summary — sticky */}
        <div style={{ width: "220px", flexShrink: 0 }}>
          <div style={{ position: "sticky", top: 0 }}>
            <div
              style={{
                background: "white",
                border: `1px solid ${C.border}`,
                borderRadius: "10px",
                padding: "16px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: C.muted,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Cost Estimate
              </div>
              {products
                .filter((p) => p.checked && p.price > 0)
                .map((p) => (
                  <div
                    key={p.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                    }}
                  >
                    <span style={{ fontSize: "11px", color: C.grey }}>
                      {p.name}
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: C.text,
                      }}
                    >
                      ${p.price}
                    </span>
                  </div>
                ))}
              <Divider />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span
                  style={{ fontSize: "13px", fontWeight: 700, color: C.text }}
                >
                  Annual Total
                </span>
                <span
                  style={{ fontSize: "15px", fontWeight: 700, color: C.teal }}
                >
                  ${total.toLocaleString()}
                </span>
              </div>
              <div
                style={{ fontSize: "11px", color: C.muted, marginTop: "4px" }}
              >
                or ${Math.round((total / 12) * 1.05).toLocaleString()}/mo (+5%)
              </div>
            </div>
            <div
              style={{
                background: C.tealLt,
                border: "1px solid #a5f3fc",
                borderRadius: "8px",
                padding: "10px 12px",
              }}
            >
              <div style={{ fontSize: "11px", color: C.tealDk }}>
                <strong>{products.filter((p) => p.checked).length}</strong>{" "}
                services selected. Final pricing confirmed after submission.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepBasicInfo() {
  return (
    <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: "0 auto" }}>
      <SectionCard title="Company Information">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          <Input
            label="Legal Company Name"
            required
            value="Acme Corp, Inc"
            tooltip="Must match your IRS SS-4 form exactly"
          />
          <Input
            label="EIN (Employer Identification Number)"
            required
            value="25-055669"
            locked
            tooltip="Pre-filled from your account."
          />
          <Input
            label="Company DBA (if applicable)"
            placeholder="Doing Business As..."
          />
          <Select
            label="Company Type"
            required
            options={[
              "LLC",
              "S-Corporation",
              "C-Corporation",
              "Partnership",
              "Non-Profit",
              "Other",
            ]}
            value="LLC"
          />
          <Input
            label="Current Year Avg. Employee Count"
            required
            value="67"
            type="number"
          />
          <Input
            label="Prior Year Avg. Employee Count"
            required
            value="58"
            type="number"
          />
          <div style={{ gridColumn: "1/-1" }}>
            <Input
              label="Nature of Business"
              required
              value="Technology Services"
            />
          </div>
        </div>
        <Divider />
        <div
          style={{
            background: C.amberLt,
            border: "1px solid #fcd34d",
            borderRadius: "7px",
            padding: "10px 14px",
            display: "flex",
            gap: "8px",
          }}
        >
          <AlertCircle
            size={14}
            color="#d97706"
            style={{ flexShrink: 0, marginTop: "1px" }}
          />
          <span style={{ fontSize: "12px", color: "#92400e" }}>
            Your current employee count is <strong>67</strong>, above the ACA
            threshold of 50.
            <strong> Pay or Play provisions apply</strong> — addressed in Step
            4.
          </span>
        </div>
      </SectionCard>

      <SectionCard title="Business Address">
        <Toggle
          label="Does your company have an international address?"
          defaultVal="No"
        />
        <Divider />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          <div style={{ gridColumn: "1/-1" }}>
            <Input label="Street Address" required value="1234 Commerce Blvd" />
          </div>
          <Input label="City" required value="Austin" />
          <Select
            label="State"
            required
            options={["TX", "CA", "NY", "FL", "IL", "WA", "Other"]}
            value="TX"
          />
          <Input label="ZIP Code" required value="78701" />
          <Input label="Country" value="United States" locked />
        </div>
      </SectionCard>
    </div>
  );
}

function StepCore() {
  return (
    <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: "0 auto" }}>
      <SectionCard
        title="Company Information"
        action="Duplicate to Subsidiaries"
      >
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: C.muted,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Employer Classification
        </div>
        <Toggle
          label="Are you a Controlled Group?"
          tooltip="Common ownership group treated as one employer."
          defaultVal="Yes"
        />
        <Divider />
        <Toggle
          label="Are you subject to Pay or Play provisions?"
          tooltip="Applies to employers with 50+ FTEs."
          defaultVal="Yes"
        />
      </SectionCard>

      <SectionCard title="Measurement Method">
        <p style={{ margin: "0 0 12px", fontSize: "13px", color: C.grey }}>
          How does your company track employee hours to determine full-time
          status?
        </p>
        <RadioGroup
          label="Measurement Method"
          options={["Monthly Measurement", "Look-Back Measurement", "N/A"]}
          defaultVal="Look-Back Measurement"
        />
      </SectionCard>

      <SectionCard title="Affordability Calculation">
        <p style={{ margin: "0 0 12px", fontSize: "13px", color: C.grey }}>
          How do you determine if the coverage you offer is "affordable" under
          ACA rules?
        </p>
        {[
          {
            val: "fpl",
            label: "Federal Poverty Level",
            sub: "Employee contribution cannot exceed 9.12% of the FPL",
          },
          {
            val: "w2",
            label: "W-2 / Annual Determination",
            sub: "Employee contribution cannot exceed 9.12% of W-2 Box 1 wages",
          },
          {
            val: "rate",
            label: "Rate of Pay",
            sub: "Based on hourly or monthly salary rate",
          },
          {
            val: "class",
            label: "Varies by Employee Classification",
            sub: "Different safe harbor for different employee classes",
          },
          { val: "na", label: "N/A", sub: "Not applicable to this employer" },
        ].map((opt, i) => {
          const isSelected = i === 0;
          return (
            <label
              key={opt.val}
              style={{
                display: "flex",
                gap: "12px",
                padding: "10px 12px",
                borderRadius: "7px",
                cursor: "pointer",
                marginBottom: "6px",
                border: `1px solid ${isSelected ? C.teal : C.border}`,
                background: isSelected ? C.tealLt : "white",
              }}
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  marginTop: "2px",
                  border: `2px solid ${isSelected ? C.teal : C.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isSelected && (
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: C.teal,
                    }}
                  />
                )}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: isSelected ? C.tealDk : C.text,
                  }}
                >
                  {opt.label}
                </div>
                <div style={{ fontSize: "12px", color: C.grey }}>{opt.sub}</div>
              </div>
            </label>
          );
        })}
      </SectionCard>

      <SectionCard title="Certification of Eligibility">
        <p style={{ margin: "0 0 12px", fontSize: "13px", color: C.grey }}>
          Which certification method does your company use? Select all that
          apply.
        </p>
        {[
          { label: "Qualifying Offer Method", checked: true },
          { label: "98% Offer Method", checked: false },
          { label: "Unknown / Not Established", checked: false },
        ].map((c) => (
          <label
            key={c.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "7px",
              cursor: "pointer",
              border: `1px solid ${c.checked ? C.teal : C.border}`,
              background: c.checked ? C.tealLt : "white",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "17px",
                height: "17px",
                borderRadius: "4px",
                flexShrink: 0,
                border: `2px solid ${c.checked ? C.teal : C.border}`,
                background: c.checked ? C.teal : "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {c.checked && <Check size={10} color="white" strokeWidth={3} />}
            </div>
            <span
              style={{
                fontSize: "13px",
                fontWeight: c.checked ? 600 : 400,
                color: c.checked ? C.tealDk : C.text,
              }}
            >
              {c.label}
            </span>
            <Info
              size={13}
              color={C.muted}
              style={{ cursor: "help", marginLeft: "auto" }}
            />
          </label>
        ))}
      </SectionCard>
    </div>
  );
}

function StepBenefitPlans() {
  const [plans, setPlans] = useState(PLAN_TYPES);
  const updateQty = (id: string, val: number) =>
    setPlans((p) =>
      p.map((x) => (x.id === id ? { ...x, qty: Math.max(0, val) } : x)),
    );
  const cats = [...new Set(plans.map((p) => p.category))];

  return (
    <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: C.text }}>
            How many of each plan type does your company offer?
          </div>
          <div style={{ fontSize: "12px", color: C.grey, marginTop: "3px" }}>
            Enter 0 if not offered. Enter the count if you offer multiple.
          </div>
        </div>
        <button
          style={{
            padding: "6px 14px",
            borderRadius: "7px",
            border: `1px solid ${C.border}`,
            background: "white",
            color: C.grey,
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          Load Prior Year Plans
        </button>
      </div>

      {cats.map((cat) => (
        <SectionCard key={cat} title={`${cat} Plans`}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            {plans
              .filter((p) => p.category === cat)
              .map((plan) => (
                <div
                  key={plan.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderRadius: "7px",
                    border: `1px solid ${plan.qty > 0 ? C.teal : C.border}`,
                    background: plan.qty > 0 ? C.tealLt : C.greyLt,
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: plan.qty > 0 ? 600 : 400,
                      color: plan.qty > 0 ? C.tealDk : C.grey,
                    }}
                  >
                    {plan.label}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <button
                      onClick={() => updateQty(plan.id, plan.qty - 1)}
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "5px",
                        border: `1px solid ${C.border}`,
                        background: "white",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        color: C.grey,
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        width: "20px",
                        textAlign: "center",
                        fontWeight: 700,
                        fontSize: "14px",
                        color: C.text,
                      }}
                    >
                      {plan.qty}
                    </span>
                    <button
                      onClick={() => updateQty(plan.id, plan.qty + 1)}
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "5px",
                        border: `1px solid ${C.border}`,
                        background: "white",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        color: C.teal,
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </SectionCard>
      ))}

      <div
        style={{
          background: C.greenLt,
          border: "1px solid #6ee7b7",
          borderRadius: "8px",
          padding: "10px 14px",
          display: "flex",
          gap: "8px",
        }}
      >
        <CheckCircle2
          size={14}
          color={C.green}
          style={{ flexShrink: 0, marginTop: "1px" }}
        />
        <span style={{ fontSize: "12px", color: "#065f46" }}>
          <strong>{plans.filter((p) => p.qty > 0).length} plan types</strong>{" "}
          currently offered, totalling{" "}
          <strong>{plans.reduce((s, p) => s + p.qty, 0)} plans</strong>.
        </span>
      </div>
    </div>
  );
}

function StepUploader() {
  const [docs, setDocs] = useState(DOCS);
  return (
    <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: "0 auto" }}>
      <SectionCard title="Document Upload">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            marginBottom: "14px",
          }}
        >
          <Select
            label="Document Type"
            required
            options={[
              "Plan Document",
              "Carrier Agreement",
              "SBC",
              "Schedule A",
              "Form 5500",
              "Other",
            ]}
          />
          <Select
            label="Related Plan"
            required
            options={[
              "Medical PPO",
              "Medical HMO",
              "Dental",
              "Vision",
              "HSA",
              "FSA",
            ]}
          />
          <div style={{ gridColumn: "1/-1" }}>
            <Label>Notes</Label>
            <input
              placeholder="Brief description of this document..."
              style={{
                width: "100%",
                padding: "9px 12px",
                borderRadius: "7px",
                border: `1px solid ${C.border}`,
                fontSize: "13px",
                color: C.text,
                background: "white",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>

        <div
          style={{
            border: `2px dashed ${C.border}`,
            borderRadius: "10px",
            padding: "28px",
            textAlign: "center",
            background: C.greyLt,
            marginBottom: "14px",
          }}
        >
          <Upload size={28} color={C.muted} style={{ margin: "0 auto 10px" }} />
          <div
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: C.text,
              marginBottom: "4px",
            }}
          >
            Drag and drop files here
          </div>
          <div
            style={{ fontSize: "12px", color: C.grey, marginBottom: "12px" }}
          >
            PDF or DOCX, max 10MB per file
          </div>
          <button
            style={{
              padding: "8px 18px",
              borderRadius: "7px",
              border: `1px solid ${C.border}`,
              background: "white",
              color: C.grey,
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Browse Files
          </button>
        </div>

        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: C.muted,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Uploaded Documents ({docs.length})
        </div>
        {docs.map((doc) => (
          <div
            key={doc.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 12px",
              borderRadius: "8px",
              border: `1px solid ${C.border}`,
              marginBottom: "8px",
              background: "white",
            }}
          >
            <FileText size={16} color={C.teal} style={{ flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: C.text }}>
                {doc.type}
              </div>
              <div style={{ fontSize: "11px", color: C.grey }}>
                {doc.plan}
                {doc.notes ? ` · ${doc.notes}` : ""}
              </div>
            </div>
            <span
              style={{
                padding: "3px 9px",
                borderRadius: "20px",
                fontSize: "11px",
                fontWeight: 600,
                background: C.greenLt,
                color: C.green,
              }}
            >
              ✓ Uploaded
            </span>
            <Trash2
              size={14}
              color={C.muted}
              style={{ cursor: "pointer", flexShrink: 0 }}
              onClick={() => setDocs((d) => d.filter((x) => x.id !== doc.id))}
            />
          </div>
        ))}

        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "12px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "7px 14px",
              borderRadius: "7px",
              border: "none",
              background: C.teal,
              color: "white",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Upload All
          </button>
          <button
            style={{
              padding: "7px 14px",
              borderRadius: "7px",
              border: `1px solid ${C.border}`,
              background: "white",
              color: C.grey,
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            Cancel All
          </button>
          <button
            style={{
              padding: "7px 14px",
              borderRadius: "7px",
              border: `1px solid ${C.red}`,
              background: C.redLt,
              color: C.red,
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            Remove All
          </button>
        </div>
      </SectionCard>

      <div
        style={{
          background: C.tealLt,
          border: "1px solid #a5f3fc",
          borderRadius: "8px",
          padding: "10px 14px",
        }}
      >
        <div style={{ fontSize: "12px", color: C.tealDk }}>
          <strong>Recommended documents:</strong> SBC, Plan Documents for each
          medical plan, carrier agreements. Prior-year docs can be reused if
          unchanged.
        </div>
      </div>
    </div>
  );
}

function StepBilling() {
  const selected = PRODUCTS.filter((p) => p.checked && p.price > 0);
  const subtotal = selected.reduce((s, p) => s + p.price, 0);
  const setup = 499;
  const catchup = 416;
  const grand = subtotal + setup + catchup;

  return (
    <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 280px",
          gap: "16px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <SectionCard title="Selected Services">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["Service", "Annual", "Monthly"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "6px 0",
                        textAlign: h === "Service" ? "left" : "right",
                        fontSize: "11px",
                        color: C.muted,
                        fontWeight: 600,
                        borderBottom: `1px solid ${C.border}`,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {selected.map((p) => (
                  <tr key={p.id}>
                    <td
                      style={{
                        padding: "10px 0",
                        fontSize: "13px",
                        color: C.text,
                        borderBottom: `1px solid ${C.border}`,
                      }}
                    >
                      {p.name}
                    </td>
                    <td
                      style={{
                        padding: "10px 0",
                        fontSize: "13px",
                        color: C.text,
                        textAlign: "right",
                        borderBottom: `1px solid ${C.border}`,
                      }}
                    >
                      ${p.price}
                    </td>
                    <td
                      style={{
                        padding: "10px 0",
                        fontSize: "12px",
                        color: C.grey,
                        textAlign: "right",
                        borderBottom: `1px solid ${C.border}`,
                      }}
                    >
                      ${Math.round(p.price / 12)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SectionCard>
        </div>

        <div style={{ position: "sticky", top: 0 }}>
          <div
            style={{
              background: "white",
              border: `1px solid ${C.border}`,
              borderRadius: "10px",
              padding: "18px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: C.text,
                marginBottom: "14px",
              }}
            >
              Summary
            </div>
            {[
              {
                label: "Subtotal (Annual)",
                val: `$${subtotal.toLocaleString()}`,
              },
              { label: "Setup Fee", val: `$${setup}` },
              { label: "Catch-Up (4 months)", val: `$${catchup}` },
            ].map((r) => (
              <div
                key={r.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span style={{ fontSize: "13px", color: C.grey }}>
                  {r.label}
                </span>
                <span style={{ fontSize: "13px", color: C.text }}>{r.val}</span>
              </div>
            ))}
            <Divider />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "4px",
              }}
            >
              <span
                style={{ fontSize: "14px", fontWeight: 700, color: C.text }}
              >
                Grand Total
              </span>
              <span
                style={{ fontSize: "18px", fontWeight: 700, color: C.teal }}
              >
                ${grand.toLocaleString()}
              </span>
            </div>
            <div style={{ fontSize: "11px", color: C.grey }}>
              or ${Math.round((grand / 12) * 1.05).toLocaleString()}/mo with 5%
              surcharge
            </div>
            <Divider />
            <div style={{ fontSize: "11px", color: C.muted, lineHeight: 1.6 }}>
              * Catch-up is for months already elapsed this year.
              <br />
              * Setup fees waived for previously purchased services.
              <br />* Final pricing confirmed after submission.
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "12px",
          background: C.amberLt,
          border: "1px solid #fcd34d",
          borderRadius: "8px",
          padding: "10px 14px",
          display: "flex",
          gap: "8px",
        }}
      >
        <Info
          size={14}
          color="#d97706"
          style={{ flexShrink: 0, marginTop: "1px" }}
        />
        <span style={{ fontSize: "12px", color: "#92400e" }}>
          To change your service selection, go back to{" "}
          <strong>Step 2 — Products</strong>.
        </span>
      </div>
    </div>
  );
}

function StepApproval() {
  const [agreed, setAgreed] = useState(false);
  return (
    <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: "0 auto" }}>
      <SectionCard title="Legal Agreement">
        <div
          style={{
            background: C.greyLt,
            borderRadius: "8px",
            padding: "16px",
            maxHeight: "180px",
            overflowY: "auto",
            marginBottom: "16px",
            border: `1px solid ${C.border}`,
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "13px",
              color: C.text,
              lineHeight: 1.7,
            }}
          >
            This Group Plan Application is a binding agreement between
            Northroute ("NR") and you, and if applicable, the company or other
            legal entity you represent (collectively, "you"). By acknowledging
            this Group Plan Application, you accept the terms of the Service
            Level Agreement.
          </p>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "13px",
              color: C.text,
              lineHeight: 1.7,
            }}
          >
            If this Group Plan Application includes COBRA services, you
            acknowledge receipt of the attached HIPAA Business Associate
            Agreement signed by NR that assures compliance for your records.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              color: C.text,
              lineHeight: 1.7,
            }}
          >
            I certify that all individuals listed in this application have
            authorized access to the information contained herein and that the
            information provided is accurate and complete.
          </p>
        </div>
        <a
          href="#"
          style={{
            fontSize: "13px",
            color: C.teal,
            display: "block",
            marginBottom: "16px",
          }}
        >
          View Full Terms & Conditions →
        </a>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 14px",
            borderRadius: "8px",
            cursor: "pointer",
            border: `1px solid ${agreed ? C.teal : C.border}`,
            background: agreed ? C.tealLt : "white",
          }}
        >
          <div
            onClick={() => setAgreed(!agreed)}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "5px",
              flexShrink: 0,
              border: `2px solid ${agreed ? C.teal : C.border}`,
              background: agreed ? C.teal : "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {agreed && <Check size={12} color="white" strokeWidth={3} />}
          </div>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: agreed ? C.tealDk : C.text,
            }}
          >
            I have read and agree to the Terms and Conditions
          </span>
        </label>
      </SectionCard>

      <SectionCard title="Submission Details">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
          }}
        >
          <Input label="Date" value="May 15, 2026" locked />
          <Input
            label="Application Completed By"
            value="abhishek@northroute.com"
            locked
          />
        </div>
      </SectionCard>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          disabled={!agreed}
          style={{
            padding: "11px 28px",
            borderRadius: "8px",
            border: "none",
            background: agreed
              ? `linear-gradient(135deg, ${C.tealDk}, ${C.teal})`
              : "#e2e8f0",
            color: agreed ? "white" : C.muted,
            fontSize: "14px",
            fontWeight: 700,
            cursor: agreed ? "pointer" : "not-allowed",
            boxShadow: agreed ? "0 2px 10px rgba(8,145,178,0.4)" : "none",
          }}
        >
          Submit Application
        </button>
        <button
          style={{
            padding: "11px 20px",
            borderRadius: "8px",
            border: `1px solid ${C.border}`,
            background: "white",
            color: C.grey,
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Download size={14} /> Download PDF
        </button>
        <button
          style={{
            padding: "11px 20px",
            borderRadius: "8px",
            border: `1px solid ${C.border}`,
            background: "white",
            color: C.grey,
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          Exit
        </button>
        <button
          style={{
            padding: "11px 20px",
            borderRadius: "8px",
            border: "1px solid #bae6fd",
            background: C.tealLt,
            color: C.tealDk,
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Gag Clause Certificate
        </button>
      </div>

      {!agreed && (
        <div
          style={{
            marginTop: "12px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <AlertCircle size={13} color={C.amber} />
          <span style={{ fontSize: "12px", color: "#92400e" }}>
            You must agree to the Terms and Conditions before submitting.
          </span>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STEPPER — centered
// ─────────────────────────────────────────────────────────────────────────────
function Stepper({
  current,
  onStep,
}: {
  current: number;
  onStep: (i: number) => void;
}) {
  return (
    <div
      style={{
        background: "white",
        borderBottom: `1px solid ${C.border}`,
        overflowX: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: CONTENT_MAX_WIDTH,
          padding: "0 28px",
          boxSizing: "border-box",
        }}
      >
        {STEPS.map((step, i) => {
          const status = STEP_STATUS[step.id];
          const isCurrent = i === current;
          const Icon = step.icon;
          const dotColor =
            status === "complete"
              ? C.green
              : status === "error"
                ? C.red
                : isCurrent
                  ? C.teal
                  : C.muted;
          const isLast = i === STEPS.length - 1;
          return (
            <div
              key={step.id}
              style={{ display: "flex", alignItems: "center" }}
            >
              <button
                onClick={() => onStep(i)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "14px 16px",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  position: "relative",
                  borderBottom: isCurrent
                    ? `3px solid ${C.teal}`
                    : "3px solid transparent",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: isCurrent
                      ? C.tealLt
                      : status === "complete"
                        ? C.greenLt
                        : status === "error"
                          ? C.redLt
                          : C.greyLt,
                    border: `2px solid ${dotColor}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "5px",
                  }}
                >
                  {status === "complete" ? (
                    <Check size={13} color={C.green} strokeWidth={3} />
                  ) : status === "error" ? (
                    <AlertCircle size={13} color={C.red} />
                  ) : (
                    <Icon size={13} color={isCurrent ? C.teal : C.muted} />
                  )}
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: isCurrent ? 700 : 500,
                    color: isCurrent
                      ? C.teal
                      : status === "error"
                        ? C.red
                        : C.grey,
                    whiteSpace: "nowrap",
                  }}
                >
                  {step.label}
                </span>
              </button>
              {!isLast && (
                <div
                  style={{
                    width: "28px",
                    height: "1px",
                    background: C.border,
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────
export function WizardPage() {
  const [current, setCurrent] = useState(0);

  const stepContent = [
    <StepWelcome />,
    <StepProducts />,
    <StepBasicInfo />,
    <StepCore />,
    <StepBenefitPlans />,
    <StepUploader />,
    <StepBilling />,
    <StepApproval />,
  ];

  const completedCount = Object.values(STEP_STATUS).filter(
    (s) => s === "complete",
  ).length;

  return (
    <>
      <header
        style={{
          height: "52px",
          background: C.navy,
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <Link
            to="/compass"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "none",
              border: "none",
              color: "#94a3b8",
              cursor: "pointer",
              fontSize: "13px",
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={15} /> Back to Applications
          </Link>
          <div
            style={{ width: "1px", height: "18px", background: "#334155" }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Shield size={14} color="#38bdf8" />
            <span style={{ color: "white", fontWeight: 700, fontSize: "14px" }}>
              NorthStar
            </span>
            <span style={{ color: "#94a3b8", fontSize: "13px" }}>
              · Acme Corp, Inc · FY 2024
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "80px",
                height: "5px",
                borderRadius: "3px",
                background: "#1e3a5f",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${(completedCount / 8) * 100}%`,
                  height: "100%",
                  background: "#38bdf8",
                  borderRadius: "3px",
                }}
              />
            </div>
            <span style={{ fontSize: "11px", color: "#94a3b8" }}>
              {completedCount}/8 complete
            </span>
          </div>
          <button
            style={{
              padding: "6px 14px",
              borderRadius: "6px",
              border: "1px solid #334155",
              background: "none",
              color: "#94a3b8",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Save & Exit
          </button>
        </div>
      </header>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 52px)",
          fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
          background: "#f8fafc",
          color: C.text,
        }}
      >
        <Stepper current={current} onStep={setCurrent} />

        {/* Scrollable content area */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 28px 0" }}>
          {/* Step header — same max-width as content, centered */}
          <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: "0 auto 20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "4px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: C.muted,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Step {current + 1} of 8
              </span>
              {STEP_STATUS[STEPS[current].id] === "error" && (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "11px",
                    color: C.red,
                    fontWeight: 600,
                  }}
                >
                  <AlertCircle size={12} /> Incomplete — required fields missing
                </span>
              )}
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: "20px",
                fontWeight: 700,
                color: C.text,
                letterSpacing: "-0.02em",
              }}
            >
              {STEPS[current].label}
            </h1>
            <p style={{ margin: "4px 0 0", fontSize: "13px", color: C.grey }}>
              {STEPS[current].desc}
            </p>
          </div>

          {/* Step body — each step self-centers with margin: "0 auto" */}
          <div style={{ paddingBottom: "28px" }}>{stepContent[current]}</div>
        </div>

        <footer
          style={{
            height: "60px",
            background: "white",
            borderTop: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            flexShrink: 0,
            boxShadow: "0 -1px 4px rgba(0,0,0,0.04)",
          }}
        >
          <button
            disabled={current === 0}
            onClick={() => setCurrent((c) => c - 1)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              padding: "9px 18px",
              borderRadius: "7px",
              border: `1px solid ${C.border}`,
              background: "white",
              color: current === 0 ? C.muted : C.grey,
              fontSize: "13px",
              fontWeight: 600,
              cursor: current === 0 ? "not-allowed" : "pointer",
            }}
          >
            <ChevronLeft size={15} /> Back
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {STEPS.map((s, i) => {
              const st = STEP_STATUS[s.id];
              return (
                <div
                  key={s.id}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? "20px" : "7px",
                    height: "7px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    background:
                      i === current
                        ? C.teal
                        : st === "complete"
                          ? C.green
                          : st === "error"
                            ? C.red
                            : C.border,
                  }}
                />
              );
            })}
          </div>

          {current < STEPS.length - 1 ? (
            <button
              onClick={() => setCurrent((c) => c + 1)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                padding: "9px 22px",
                borderRadius: "7px",
                border: "none",
                background: `linear-gradient(135deg, ${C.tealDk}, ${C.teal})`,
                color: "white",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(8,145,178,0.35)",
              }}
            >
              Save & Continue <ChevronRight size={15} />
            </button>
          ) : (
            <div style={{ width: "140px" }} />
          )}
        </footer>
      </div>
    </>
  );
}
