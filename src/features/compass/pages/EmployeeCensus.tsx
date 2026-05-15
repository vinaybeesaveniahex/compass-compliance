import { useState } from "react";
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Users,
  UserCheck,
  Clock,
  History,
  DollarSign,
  FileText,
  X,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Download,
  Shield,
  Building2,
  Filter,
  MoreHorizontal,
  Eye,
  Calendar,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  Info,
  RefreshCw,
  CheckCircle2,
  XCircle,
  TrendingUp,
  ArrowUpDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS & DATA
// ─────────────────────────────────────────────────────────────────────────────
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
  white: "#ffffff",
  purple: "#7c3aed",
  purpleLt: "#f5f3ff",
};

const EMPLOYEES = [
  {
    id: 1,
    ein: "25-055669",
    last: "Sharma",
    first: "Priya",
    address: "142 Oak Ave, Austin TX",
    empId: "EMP001",
    email: "priya.sharma@acme.com",
    hire: "01/15/2019",
    termination: null,
    status: "active",
    type: "Full-Time",
  },
  {
    id: 2,
    ein: "25-055669",
    last: "Johnson",
    first: "Marcus",
    address: "88 Elm St, Austin TX",
    empId: "EMP002",
    email: "m.johnson@acme.com",
    hire: "03/22/2020",
    termination: null,
    status: "active",
    type: "Full-Time",
  },
  {
    id: 3,
    ein: "25-055669",
    last: "Rodriguez",
    first: "Carmen",
    address: "305 Pine Rd, Austin TX",
    empId: "EMP003",
    email: "c.rodriguez@acme.com",
    hire: "07/01/2021",
    termination: null,
    status: "active",
    type: "Part-Time",
  },
  {
    id: 4,
    ein: "25-055669",
    last: "Chen",
    first: "Wei",
    address: "71 Maple Dr, Austin TX",
    empId: "EMP004",
    email: "wei.chen@acme.com",
    hire: "11/08/2018",
    termination: null,
    status: "active",
    type: "Full-Time",
  },
  {
    id: 5,
    ein: "25-055669",
    last: "Patel",
    first: "Ankit",
    address: "19 Cedar Ln, Austin TX",
    empId: "EMP005",
    email: "a.patel@acme.com",
    hire: "02/14/2022",
    termination: null,
    status: "active",
    type: "Full-Time",
  },
  {
    id: 6,
    ein: "25-055669",
    last: "Williams",
    first: "Tanya",
    address: "56 Birch Blvd, Austin TX",
    empId: "EMP006",
    email: "t.williams@acme.com",
    hire: "05/30/2017",
    termination: null,
    status: "active",
    type: "Variable",
  },
  {
    id: 7,
    ein: "25-055669",
    last: "Kim",
    first: "Soo-Jin",
    address: "220 Spruce Ct, Austin TX",
    empId: "EMP007",
    email: "soojin.kim@acme.com",
    hire: "09/01/2023",
    termination: null,
    status: "active",
    type: "Full-Time",
  },
  {
    id: 8,
    ein: "25-055669",
    last: "Thompson",
    first: "Derek",
    address: "14 Willow Way, Austin TX",
    empId: "EMP008",
    email: "d.thompson@acme.com",
    hire: "04/18/2016",
    termination: "03/31/2025",
    status: "terminated",
    type: "Full-Time",
  },
  {
    id: 9,
    ein: "25-055669",
    last: "Nguyen",
    first: "Linh",
    address: "93 Aspen Ave, Austin TX",
    empId: "EMP009",
    email: "linh.nguyen@acme.com",
    hire: "08/22/2024",
    termination: null,
    status: "active",
    type: "Seasonal",
  },
  {
    id: 10,
    ein: "25-055669",
    last: "Davis",
    first: "Jordan",
    address: "37 Walnut St, Austin TX",
    empId: "EMP010",
    email: "j.davis@acme.com",
    hire: "01/03/2023",
    termination: null,
    status: "active",
    type: "Full-Time",
  },
];

const STATUS_HISTORY = [
  {
    date: "01/15/2019",
    event: "Hired",
    type: "Full-Time",
    group: "Group A",
    payFreq: "Bi-Weekly",
    measurement: "Look-Back Group 1",
  },
  {
    date: "01/01/2021",
    event: "Status Change",
    type: "Full-Time",
    group: "Group A",
    payFreq: "Bi-Weekly",
    measurement: "Look-Back Group 1",
  },
  {
    date: "07/01/2023",
    event: "Status Change",
    type: "Full-Time",
    group: "Group B",
    payFreq: "Semi-Monthly",
    measurement: "Look-Back Group 2",
  },
];

const DEPENDENTS_DATA = [
  {
    id: 1,
    name: "Raj Sharma",
    dob: "05/12/1985",
    relation: "Spouse",
    ssn: "XXX-XX-4521",
    benefitDate: "01/15/2019",
  },
  {
    id: 2,
    name: "Aria Sharma",
    dob: "03/08/2012",
    relation: "Child",
    ssn: "XXX-XX-7832",
    benefitDate: "03/08/2012",
  },
  {
    id: 3,
    name: "Kian Sharma",
    dob: "11/22/2015",
    relation: "Child",
    ssn: "XXX-XX-9104",
    benefitDate: "11/22/2015",
  },
];

const PAYROLL_DATA = [
  {
    empId: "EMP001",
    last: "Sharma",
    first: "Priya",
    type: "Full-Time",
    rateType: "Salary",
    payRate: 95000,
    hireDate: "01/15/2019",
    hours: 173.3,
    avgHours: 171.2,
    monthlySum: 7916.67,
    affordable: true,
  },
  {
    empId: "EMP002",
    last: "Johnson",
    first: "Marcus",
    type: "Full-Time",
    rateType: "Salary",
    payRate: 82000,
    hireDate: "03/22/2020",
    hours: 168.0,
    avgHours: 166.5,
    monthlySum: 6833.33,
    affordable: true,
  },
  {
    empId: "EMP003",
    last: "Rodriguez",
    first: "Carmen",
    type: "Part-Time",
    rateType: "Hourly",
    payRate: 28,
    hireDate: "07/01/2021",
    hours: 88.0,
    avgHours: 86.4,
    monthlySum: 2464.0,
    affordable: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SHARED UI HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function Label({ children, required, tip }) {
  return (
    <div
      style={{ display: "flex", gap: 5, alignItems: "center", marginBottom: 6 }}
    >
      <span style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>
        {children}
      </span>
      {required && <span style={{ color: C.red, fontSize: 11 }}>*</span>}
      {tip && (
        <Info
          size={12}
          color={C.muted}
          title={tip}
          style={{ cursor: "help" }}
        />
      )}
    </div>
  );
}
function Inp({
  label,
  required,
  tip,
  value,
  placeholder,
  locked,
  type = "text",
}) {
  return (
    <div>
      {label && (
        <Label required={required} tip={tip}>
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
          padding: "8px 11px",
          borderRadius: 7,
          border: `1px solid ${C.border}`,
          fontSize: 13,
          color: locked ? C.grey : C.text,
          background: locked ? "#f1f5f9" : "white",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}
function Sel({ label, required, options, value }) {
  return (
    <div>
      {label && <Label required={required}>{label}</Label>}
      <select
        defaultValue={value}
        style={{
          width: "100%",
          padding: "8px 11px",
          borderRadius: 7,
          border: `1px solid ${C.border}`,
          fontSize: 13,
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
function Divider() {
  return <div style={{ height: 1, background: C.border, margin: "14px 0" }} />;
}

// ─────────────────────────────────────────────────────────────────────────────
// MODAL WRAPPER
// ─────────────────────────────────────────────────────────────────────────────
function Modal({ title, subtitle, onClose, children, width = 680 }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,23,42,0.65)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        backdropFilter: "blur(3px)",
        padding: 20,
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 14,
          width: "100%",
          maxWidth: width,
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "18px 22px 16px",
            borderBottom: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>
              {title}
            </div>
            {subtitle && (
              <div style={{ fontSize: 12, color: C.grey, marginTop: 2 }}>
                {subtitle}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: C.muted,
              padding: 2,
            }}
          >
            <X size={18} />
          </button>
        </div>
        {/* Body */}
        <div style={{ overflowY: "auto", padding: "20px 22px", flex: 1 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MODAL: ADD / EDIT DEMOGRAPHICS
// ─────────────────────────────────────────────────────────────────────────────
function DemographicsModal({ emp, onClose }) {
  const isEdit = !!emp;
  return (
    <Modal
      title={isEdit ? "Edit Demographics" : "Add Employee"}
      subtitle={
        isEdit
          ? `${emp.first} ${emp.last} · ${emp.empId}`
          : "Add a new employee to the census"
      }
      onClose={onClose}
      width={740}
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}
      >
        <Inp
          label="First Name"
          required
          value={emp?.first}
          placeholder="First name"
        />
        <Inp
          label="Last Name"
          required
          value={emp?.last}
          placeholder="Last name"
        />
        <Inp label="Middle Name" value="" placeholder="Optional" />
        <Inp
          label="SSN"
          required
          tip="Stored encrypted. Never shared or logged."
          value={emp ? "XXX-XX-4521" : ""}
          placeholder="XXX-XX-XXXX"
        />
        <Inp label="Employee ID" value={emp?.empId} placeholder="Internal ID" />
        <Inp label="Date of Birth" required value="01/15/1990" type="text" />
        <Inp
          label="Phone Number"
          value="(512) 555-0198"
          placeholder="(xxx) xxx-xxxx"
        />
        <Inp label="Email" value={emp?.email} placeholder="work@company.com" />
        <Inp
          label="Email 2 (optional)"
          value=""
          placeholder="alt@company.com"
        />
      </div>
      <Divider />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ gridColumn: "1/-1" }}>
          <Inp
            label="Street Address"
            required
            value={emp ? "142 Oak Ave" : ""}
            placeholder="123 Main St"
          />
        </div>
        <Inp label="City" required value="Austin" />
        <Sel
          label="State"
          required
          options={["TX", "CA", "NY", "FL", "IL", "WA", "CO", "WI"]}
          value="TX"
        />
        <Inp label="ZIP Code" required value="78701" />
        <Sel
          label="Country"
          options={["United States", "Canada", "Other"]}
          value="United States"
        />
        <div style={{ gridColumn: "1/-1" }}>
          <Inp
            label="Miscellaneous Notes"
            value=""
            placeholder="Any additional notes..."
          />
        </div>
      </div>
      <Divider />
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}
      >
        <Inp
          label="Date of Hire"
          required
          value={emp?.hire}
          placeholder="MM/DD/YYYY"
        />
        <Inp
          label="Date of Termination"
          value={emp?.termination}
          placeholder="MM/DD/YYYY"
        />
        <Inp label="Date of Rehire" value="" placeholder="MM/DD/YYYY" />
      </div>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          style={{
            padding: "8px 16px",
            borderRadius: 7,
            border: `1px solid ${C.border}`,
            background: C.tealLt,
            color: C.teal,
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          + Add Dependent
        </button>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={onClose}
            style={{
              padding: "9px 20px",
              borderRadius: 7,
              border: `1px solid ${C.border}`,
              background: "white",
              color: C.grey,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              padding: "9px 22px",
              borderRadius: 7,
              border: "none",
              background: `linear-gradient(135deg, ${C.tealDk}, ${C.teal})`,
              color: "white",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(8,145,178,0.3)",
            }}
          >
            Save Employee
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MODAL: DELETE CONFIRM
// ─────────────────────────────────────────────────────────────────────────────
function DeleteModal({ emp, onClose }) {
  return (
    <Modal title="Confirm Delete" onClose={onClose} width={440}>
      <div style={{ textAlign: "center", padding: "10px 0 20px" }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: C.redLt,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          <Trash2 size={24} color={C.red} />
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: C.text,
            marginBottom: 8,
          }}
        >
          Delete Employee Record?
        </div>
        <div style={{ fontSize: 13, color: C.grey, marginBottom: 6 }}>
          You are about to delete the profile for
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: C.text,
            marginBottom: 16,
          }}
        >
          {emp.first} {emp.last} · {emp.empId}
        </div>
        <div
          style={{
            background: C.amberLt,
            border: `1px solid #fcd34d`,
            borderRadius: 8,
            padding: "10px 14px",
            textAlign: "left",
            marginBottom: 20,
            display: "flex",
            gap: 8,
          }}
        >
          <AlertCircle
            size={14}
            color="#d97706"
            style={{ flexShrink: 0, marginTop: 1 }}
          />
          <span style={{ fontSize: 12, color: "#92400e" }}>
            This will also remove all associated dependents, status records, and
            payroll history. <strong>This cannot be undone.</strong>
          </span>
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <button
            onClick={onClose}
            style={{
              padding: "9px 24px",
              borderRadius: 7,
              border: `1px solid ${C.border}`,
              background: "white",
              color: C.grey,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              padding: "9px 24px",
              borderRadius: 7,
              border: "none",
              background: C.red,
              color: "white",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MODAL: DEPENDENTS
// ─────────────────────────────────────────────────────────────────────────────
function DependentsModal({ emp, onClose }) {
  const [deps, setDeps] = useState(DEPENDENTS_DATA);
  const [adding, setAdding] = useState(false);
  return (
    <Modal
      title="Manage Dependents"
      subtitle={`${emp.first} ${emp.last} · ${emp.empId}`}
      onClose={onClose}
      width={680}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
        }}
      >
        <span style={{ fontSize: 12, color: C.grey }}>
          {deps.length} dependent{deps.length !== 1 ? "s" : ""} on file
        </span>
        <button
          onClick={() => setAdding(true)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "7px 14px",
            borderRadius: 7,
            border: "none",
            background: `linear-gradient(135deg, ${C.tealDk}, ${C.teal})`,
            color: "white",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <Plus size={13} /> Add Dependent
        </button>
      </div>
      {deps.map((dep) => (
        <div
          key={dep.id}
          style={{
            border: `1px solid ${C.border}`,
            borderRadius: 10,
            padding: "14px 16px",
            marginBottom: 10,
            background: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: C.tealLt,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                  color: C.teal,
                }}
              >
                {dep.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>
                  {dep.name}
                </div>
                <div style={{ fontSize: 12, color: C.grey }}>
                  {dep.relation} · DOB: {dep.dob}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span
                style={{
                  padding: "3px 10px",
                  borderRadius: 20,
                  background: dep.relation === "Spouse" ? C.purpleLt : C.tealLt,
                  color: dep.relation === "Spouse" ? C.purple : C.teal,
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                {dep.relation}
              </span>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: C.muted,
                }}
              >
                <Edit2 size={14} />
              </button>
              <button
                onClick={() => setDeps((d) => d.filter((x) => x.id !== dep.id))}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: C.muted,
                }}
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
          <Divider />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 10,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 10,
                  color: C.muted,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                SSN
              </div>
              <div style={{ fontSize: 13, color: C.text }}>{dep.ssn}</div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 10,
                  color: C.muted,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Benefit Effective
              </div>
              <div style={{ fontSize: 13, color: C.text }}>
                {dep.benefitDate}
              </div>
            </div>
          </div>
        </div>
      ))}
      {adding && (
        <div
          style={{
            border: `1px solid ${C.teal}`,
            borderRadius: 10,
            padding: "16px",
            background: C.tealLt,
            marginTop: 10,
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: C.tealDk,
              marginBottom: 12,
            }}
          >
            New Dependent
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 12,
              marginBottom: 12,
            }}
          >
            <Inp label="First Name" required placeholder="First name" />
            <Inp label="Last Name" required placeholder="Last name" />
            <Inp label="Middle Name" placeholder="Optional" />
            <Inp label="SSN" required placeholder="XXX-XX-XXXX" />
            <Inp label="Date of Birth" required placeholder="MM/DD/YYYY" />
            <Sel
              label="Relationship"
              required
              options={["Spouse", "Child", "Domestic Partner", "Other"]}
            />
            <Inp label="Benefit Effective Date" placeholder="MM/DD/YYYY" />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => setAdding(false)}
              style={{
                padding: "7px 16px",
                borderRadius: 7,
                border: `1px solid ${C.border}`,
                background: "white",
                color: C.grey,
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              style={{
                padding: "7px 16px",
                borderRadius: 7,
                border: "none",
                background: C.teal,
                color: "white",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Save Dependent
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MODAL: EMPLOYEE STATUS
// ─────────────────────────────────────────────────────────────────────────────
function StatusModal({ emp, onClose }) {
  const sections = [
    {
      label: "Employee Type",
      tip: "Classification for ACA purposes: Full-Time, Part-Time, Variable Hour, or Seasonal",
      options: ["Full-Time", "Part-Time", "Variable Hour", "Seasonal"],
    },
    {
      label: "Measurement Group",
      tip: "The look-back measurement period group this employee belongs to",
      options: [
        "Look-Back Group 1",
        "Look-Back Group 2",
        "Monthly Group A",
        "Not Assigned",
      ],
    },
    {
      label: "Pay Period",
      tip: "How frequently this employee is paid",
      options: ["Weekly", "Bi-Weekly", "Semi-Monthly", "Monthly"],
    },
    {
      label: "Employee Group",
      tip: "Internal classification group for benefits eligibility",
      options: ["Group A", "Group B", "Group C", "Executive", "Part-Time Pool"],
    },
  ];
  const [rows, setRows] = useState(
    sections.map((s, i) => ({
      ...s,
      value: ["Full-Time", "Look-Back Group 1", "Bi-Weekly", "Group A"][i],
      start: "01/01/2024",
      end: "",
      adding: false,
    })),
  );

  return (
    <Modal
      title="Employee Status"
      subtitle={`${emp.first} ${emp.last} · ${emp.empId}`}
      onClose={onClose}
      width={620}
    >
      {rows.map((row, i) => (
        <div key={row.label} style={{ marginBottom: 16 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>
                {row.label}
              </span>
              <Info
                size={13}
                color={C.muted}
                title={row.tip}
                style={{ cursor: "help" }}
              />
            </div>
            <button
              onClick={() =>
                setRows((r) =>
                  r.map((x, j) => (j === i ? { ...x, adding: !x.adding } : x)),
                )
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                padding: "5px 12px",
                borderRadius: 6,
                border: `1px solid ${C.teal}`,
                background: C.tealLt,
                color: C.teal,
                fontSize: 11,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <Plus size={11} /> Add
            </button>
          </div>
          {row.value ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                borderRadius: 8,
                border: `1px solid ${C.border}`,
                background: C.greyLt,
              }}
            >
              <CheckCircle2 size={14} color={C.green} />
              <span
                style={{
                  flex: 1,
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.text,
                }}
              >
                {row.value}
              </span>
              <span style={{ fontSize: 11, color: C.grey }}>
                Effective: {row.start}
              </span>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: C.muted,
                }}
              >
                <Edit2 size={13} />
              </button>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: C.muted,
                }}
              >
                <Trash2 size={13} />
              </button>
            </div>
          ) : (
            <div
              style={{
                padding: "10px 12px",
                borderRadius: 8,
                border: `1px dashed ${C.border}`,
                background: C.greyLt,
                fontSize: 12,
                color: C.muted,
                textAlign: "center",
              }}
            >
              No {row.label.toLowerCase()} configured
            </div>
          )}
          {row.adding && (
            <div
              style={{
                marginTop: 8,
                padding: "12px",
                borderRadius: 8,
                border: `1px solid ${C.teal}`,
                background: C.tealLt,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 10,
                }}
              >
                <Sel
                  label={row.label}
                  options={row.options}
                  value={row.options[0]}
                />
                <Inp
                  label="Effective Start"
                  value=""
                  placeholder="MM/DD/YYYY"
                />
                <Inp
                  label="Effective End"
                  value=""
                  placeholder="Leave blank if current"
                />
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <button
                  onClick={() =>
                    setRows((r) =>
                      r.map((x, j) => (j === i ? { ...x, adding: false } : x)),
                    )
                  }
                  style={{
                    padding: "6px 14px",
                    borderRadius: 6,
                    border: `1px solid ${C.border}`,
                    background: "white",
                    color: C.grey,
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  style={{
                    padding: "6px 14px",
                    borderRadius: 6,
                    border: "none",
                    background: C.teal,
                    color: "white",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          )}
          {i < rows.length - 1 && <Divider />}
        </div>
      ))}
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MODAL: EMPLOYMENT HISTORY
// ─────────────────────────────────────────────────────────────────────────────
function HistoryModal({ emp, onClose }) {
  return (
    <Modal
      title="Employment History"
      subtitle={`${emp.first} ${emp.last} · Original Hire: ${emp.hire}`}
      onClose={onClose}
      width={780}
    >
      <div
        style={{
          marginBottom: 12,
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Info size={13} color={C.teal} />
        <span style={{ fontSize: 12, color: C.grey }}>
          This is a read-only audit log. Records are automatically generated
          when status changes are saved.
        </span>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: C.navy }}>
            {[
              "Date",
              "Event",
              "Employee Type",
              "Measurement Group",
              "Pay Frequency",
              "Employee Group",
            ].map((h) => (
              <th
                key={h}
                style={{
                  padding: "9px 12px",
                  textAlign: "left",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "white",
                  letterSpacing: "0.04em",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {STATUS_HISTORY.map((row, i) => (
            <tr
              key={i}
              style={{
                background: i % 2 === 0 ? "white" : C.greyLt,
                borderBottom: `1px solid ${C.border}`,
              }}
            >
              <td style={{ padding: "10px 12px" }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>
                  {row.date}
                </div>
              </td>
              <td style={{ padding: "10px 12px" }}>
                <span
                  style={{
                    padding: "3px 9px",
                    borderRadius: 20,
                    fontSize: 11,
                    fontWeight: 600,
                    background: row.event === "Hired" ? C.greenLt : C.amberLt,
                    color: row.event === "Hired" ? C.green : C.amber,
                  }}
                >
                  {row.event}
                </span>
              </td>
              <td style={{ padding: "10px 12px", fontSize: 13, color: C.text }}>
                {row.type}
              </td>
              <td style={{ padding: "10px 12px", fontSize: 13, color: C.text }}>
                {row.measurement}
              </td>
              <td style={{ padding: "10px 12px", fontSize: 13, color: C.text }}>
                {row.payFreq}
              </td>
              <td style={{ padding: "10px 12px", fontSize: 13, color: C.text }}>
                {row.group}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{ marginTop: 12, display: "flex", justifyContent: "flex-end" }}
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 16px",
            borderRadius: 7,
            border: `1px solid ${C.border}`,
            background: "white",
            color: C.grey,
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <Download size={13} /> Export History
        </button>
      </div>
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MODAL: HOURS & PAYROLL
// ─────────────────────────────────────────────────────────────────────────────
function PayrollModal({ emp, onClose }) {
  const [generated, setGenerated] = useState(false);
  return (
    <Modal
      title="Hours & Payroll"
      subtitle="ACA affordability calculation by month"
      onClose={onClose}
      width={860}
    >
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "flex-end",
          marginBottom: 16,
        }}
      >
        <div style={{ width: 160 }}>
          <Sel
            label="Select Month"
            options={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]}
            value="May"
          />
        </div>
        <div style={{ width: 120 }}>
          <Sel
            label="Select Year"
            options={["2026", "2025", "2024", "2023"]}
            value="2026"
          />
        </div>
        <button
          onClick={() => setGenerated(true)}
          style={{
            padding: "8px 18px",
            borderRadius: 7,
            border: "none",
            background: `linear-gradient(135deg, ${C.tealDk}, ${C.teal})`,
            color: "white",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            marginBottom: 1,
          }}
        >
          Generate Report
        </button>
        {generated && (
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 7,
              border: `1px solid ${C.border}`,
              background: "white",
              color: C.grey,
              fontSize: 12,
              cursor: "pointer",
              marginBottom: 1,
            }}
          >
            <Download size={13} /> Export Excel
          </button>
        )}
      </div>

      {generated ? (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 10,
              marginBottom: 16,
            }}
          >
            {[
              {
                label: "Employees Reviewed",
                val: PAYROLL_DATA.length,
                color: C.teal,
                bg: C.tealLt,
              },
              {
                label: "Affordable Coverage",
                val: PAYROLL_DATA.filter((p) => p.affordable).length,
                color: C.green,
                bg: C.greenLt,
              },
              {
                label: "Not Affordable",
                val: PAYROLL_DATA.filter((p) => !p.affordable).length,
                color: C.red,
                bg: C.redLt,
              },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "12px 14px",
                  borderRadius: 8,
                  background: s.bg,
                  border: `1px solid ${s.color}22`,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 700, color: s.color }}>
                  {s.val}
                </div>
                <div style={{ fontSize: 11, color: C.grey, marginTop: 2 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 700,
              }}
            >
              <thead>
                <tr style={{ background: C.navy }}>
                  {[
                    "Emp ID",
                    "Name",
                    "Type",
                    "Rate Type",
                    "Pay Rate",
                    "Hire Date",
                    "Curr. Hours",
                    "Avg Hours",
                    "Monthly Sum",
                    "Affordable",
                  ].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "8px 10px",
                        textAlign: "left",
                        fontSize: 11,
                        fontWeight: 600,
                        color: "white",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PAYROLL_DATA.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "white" : C.greyLt,
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    <td
                      style={{
                        padding: "9px 10px",
                        fontSize: 12,
                        color: C.grey,
                      }}
                    >
                      {row.empId}
                    </td>
                    <td
                      style={{
                        padding: "9px 10px",
                        fontSize: 13,
                        fontWeight: 600,
                        color: C.text,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.first} {row.last}
                    </td>
                    <td
                      style={{
                        padding: "9px 10px",
                        fontSize: 12,
                        color: C.text,
                      }}
                    >
                      {row.type}
                    </td>
                    <td
                      style={{
                        padding: "9px 10px",
                        fontSize: 12,
                        color: C.text,
                      }}
                    >
                      {row.rateType}
                    </td>
                    <td
                      style={{
                        padding: "9px 10px",
                        fontSize: 12,
                        color: C.text,
                      }}
                    >
                      {row.rateType === "Salary"
                        ? `$${row.payRate.toLocaleString()}/yr`
                        : `$${row.payRate}/hr`}
                    </td>
                    <td
                      style={{
                        padding: "9px 10px",
                        fontSize: 12,
                        color: C.text,
                      }}
                    >
                      {row.hireDate}
                    </td>
                    <td
                      style={{
                        padding: "9px 10px",
                        fontSize: 12,
                        color: C.text,
                      }}
                    >
                      {row.hours}h
                    </td>
                    <td
                      style={{
                        padding: "9px 10px",
                        fontSize: 12,
                        color: C.text,
                      }}
                    >
                      {row.avgHours}h
                    </td>
                    <td
                      style={{
                        padding: "9px 10px",
                        fontSize: 12,
                        fontWeight: 600,
                        color: C.text,
                      }}
                    >
                      ${row.monthlySum.toLocaleString()}
                    </td>
                    <td style={{ padding: "9px 10px" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                          padding: "3px 9px",
                          borderRadius: 20,
                          fontSize: 11,
                          fontWeight: 700,
                          background: row.affordable ? C.greenLt : C.redLt,
                          color: row.affordable ? C.green : C.red,
                        }}
                      >
                        {row.affordable ? (
                          <>
                            <CheckCircle2 size={10} /> Yes
                          </>
                        ) : (
                          <>
                            <XCircle size={10} /> No
                          </>
                        )}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            style={{
              marginTop: 12,
              padding: "10px 12px",
              background: C.amberLt,
              borderRadius: 8,
              border: `1px solid #fcd34d`,
              fontSize: 12,
              color: "#92400e",
            }}
          >
            <strong>1 employee</strong> (Carmen Rodriguez) has coverage that
            does not meet the ACA affordability threshold of 9.12%. Review their
            plan contribution or classification.
          </div>
        </>
      ) : (
        <div
          style={{ textAlign: "center", padding: "40px 20px", color: C.muted }}
        >
          <TrendingUp
            size={40}
            color={C.border}
            style={{ margin: "0 auto 12px" }}
          />
          <div style={{ fontSize: 14, fontWeight: 600, color: C.grey }}>
            Select a month and year, then click Generate
          </div>
          <div style={{ fontSize: 12, marginTop: 4 }}>
            This report calculates ACA affordability for all employees
          </div>
        </div>
      )}
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MODAL: NOTES & LOG
// ─────────────────────────────────────────────────────────────────────────────
function NotesModal({ emp, onClose }) {
  const [note, setNote] = useState("");
  const logs = [
    {
      date: "May 12, 2026",
      user: "Admin",
      type: "system",
      text: "Employee record updated — address change",
    },
    {
      date: "Mar 3, 2026",
      user: "Abhishek S.",
      type: "note",
      text: "Confirmed employee is enrolled in medical PPO plan for 2026.",
    },
    {
      date: "Jan 15, 2026",
      user: "System",
      type: "system",
      text: "Annual status period refreshed for FY 2026",
    },
  ];
  return (
    <Modal
      title="Notes & Activity Log"
      subtitle={`${emp.first} ${emp.last} · ${emp.empId}`}
      onClose={onClose}
      width={580}
    >
      <div style={{ marginBottom: 14 }}>
        <Label>Add a Note</Label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Type a note about this employee..."
          style={{
            width: "100%",
            minHeight: 80,
            padding: "9px 12px",
            borderRadius: 8,
            border: `1px solid ${C.border}`,
            fontSize: 13,
            color: C.text,
            outline: "none",
            resize: "vertical",
            boxSizing: "border-box",
            fontFamily: "inherit",
          }}
        />
        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}
        >
          <button
            style={{
              padding: "7px 16px",
              borderRadius: 7,
              border: "none",
              background: note ? C.teal : C.border,
              color: note ? "white" : C.muted,
              fontSize: 12,
              fontWeight: 600,
              cursor: note ? "pointer" : "not-allowed",
            }}
          >
            Save Note
          </button>
        </div>
      </div>
      <Divider />
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: C.muted,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: 10,
        }}
      >
        Activity Log
      </div>
      {logs.map((log, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 12,
            paddingBottom: 12,
            borderBottom:
              i < logs.length - 1 ? `1px solid ${C.border}` : "none",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: log.type === "system" ? C.greyLt : C.tealLt,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {log.type === "system" ? (
              <RefreshCw size={13} color={C.muted} />
            ) : (
              <FileText size={13} color={C.teal} />
            )}
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>
              {log.text}
            </div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>
              {log.date} · {log.user}
            </div>
          </div>
        </div>
      ))}
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ACTION MENU (3-dot)
// ─────────────────────────────────────────────────────────────────────────────
function ActionMenu({ emp, onAction, onClose }) {
  const actions = [
    { key: "edit", icon: Edit2, label: "Edit Demographics", color: C.text },
    { key: "deps", icon: Users, label: "Manage Dependents", color: C.text },
    { key: "status", icon: UserCheck, label: "Employee Status", color: C.text },
    {
      key: "history",
      icon: History,
      label: "Employment History",
      color: C.text,
    },
    {
      key: "payroll",
      icon: DollarSign,
      label: "Hours & Payroll",
      color: C.text,
    },
    { key: "notes", icon: FileText, label: "Notes & Log", color: C.text },
    null,
    { key: "delete", icon: Trash2, label: "Delete Employee", color: C.red },
  ];
  return (
    <div
      style={{
        position: "absolute",
        right: 8,
        top: "100%",
        zIndex: 100,
        background: "white",
        borderRadius: 10,
        border: `1px solid ${C.border}`,
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        minWidth: 200,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "8px 12px",
          borderBottom: `1px solid ${C.border}`,
          fontSize: 11,
          fontWeight: 700,
          color: C.muted,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {emp.first} {emp.last}
      </div>
      {actions.map((a, i) =>
        a === null ? (
          <div
            key={i}
            style={{ height: 1, background: C.border, margin: "4px 0" }}
          />
        ) : (
          <button
            key={a.key}
            onClick={() => {
              onAction(a.key);
              onClose();
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "9px 14px",
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: 13,
              color: a.color,
              textAlign: "left",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                a.key === "delete" ? C.redLt : C.greyLt)
            }
            onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
          >
            <a.icon size={14} color={a.color} /> {a.label}
          </button>
        ),
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STATUS CHIP
// ─────────────────────────────────────────────────────────────────────────────
function StatusChip({ status }) {
  const cfg = {
    active: { label: "Active", bg: C.greenLt, color: C.green },
    terminated: { label: "Terminated", bg: C.redLt, color: C.red },
    on_leave: { label: "On Leave", bg: C.amberLt, color: C.amber },
  }[status] || { label: status, bg: C.greyLt, color: C.grey };
  return (
    <span
      style={{
        padding: "3px 9px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 600,
        background: cfg.bg,
        color: cfg.color,
      }}
    >
      {cfg.label}
    </span>
  );
}

function TypeChip({ type }) {
  const cfg = {
    "Full-Time": { bg: C.tealLt, color: C.teal },
    "Part-Time": { bg: C.amberLt, color: C.amber },
    Variable: { bg: C.purpleLt, color: C.purple },
    Seasonal: { bg: "#fef3c7", color: "#b45309" },
  }[type] || { bg: C.greyLt, color: C.grey };
  return (
    <span
      style={{
        padding: "3px 9px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 600,
        background: cfg.bg,
        color: cfg.color,
      }}
    >
      {type}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN: EMPLOYEE CENSUS
// ─────────────────────────────────────────────────────────────────────────────
export function EmployeeCensus() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatus] = useState("all");
  const [typeFilter, setType] = useState("all");
  const [page, setPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(null);
  const [modal, setModal] = useState(null); // { type, emp }
  const [selected, setSelected] = useState([]);
  const rowsPerPage = 8;

  const filtered = EMPLOYEES.filter((e) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      e.first.toLowerCase().includes(q) ||
      e.last.toLowerCase().includes(q) ||
      e.empId.toLowerCase().includes(q) ||
      e.email.toLowerCase().includes(q);
    const matchStatus = statusFilter === "all" || e.status === statusFilter;
    const matchType = typeFilter === "all" || e.type === typeFilter;
    return matchSearch && matchStatus && matchType;
  });

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paged = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  const allSelected =
    paged.length > 0 && paged.every((e) => selected.includes(e.id));
  const toggleAll = () => (setAllSelected) =>
    allSelected ? setSelected([]) : setSelected(paged.map((e) => e.id));
  const toggleOne = (id) =>
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id],
    );
  const openModal = (type, emp) => {
    setModal({ type, emp });
    setOpenMenu(null);
  };
  const closeModal = () => setModal(null);

  const stats = [
    {
      label: "Total Employees",
      val: EMPLOYEES.length,
      color: C.teal,
      bg: C.tealLt,
      icon: Users,
    },
    {
      label: "Active",
      val: EMPLOYEES.filter((e) => e.status === "active").length,
      color: C.green,
      bg: C.greenLt,
      icon: CheckCircle2,
    },
    {
      label: "Terminated",
      val: EMPLOYEES.filter((e) => e.status === "terminated").length,
      color: C.red,
      bg: C.redLt,
      icon: XCircle,
    },
    {
      label: "Full-Time",
      val: EMPLOYEES.filter((e) => e.type === "Full-Time").length,
      color: C.navy,
      bg: "#f0f4ff",
      icon: UserCheck,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        background: "#f8fafc",
        color: C.text,
      }}
    >
      {/* Top Bar */}
      <header
        style={{
          height: 52,
          background: C.navy,
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
          <div style={{ width: 1, height: 18, background: "#334155" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Users size={14} color="#38bdf8" />
            <span style={{ color: "white", fontWeight: 700, fontSize: 14 }}>
              Employee Census
            </span>
            <span style={{ color: "#475569", fontSize: 13 }}>
              · Acme Corp, Inc · EIN 25-055669
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Building2 size={13} color="#475569" />
          <span style={{ fontSize: 12, color: "#64748b" }}>FY 2026</span>
        </div>
      </header>

      <div style={{ flex: 1, overflowY: "auto", padding: 28 }}>
        {/* Page Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 22,
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: 22,
                fontWeight: 700,
                color: C.navy,
                letterSpacing: "-0.03em",
              }}
            >
              Employee Census
            </h1>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: C.grey }}>
              Manage all employees, dependents, and ACA classification records
            </p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "9px 16px",
                borderRadius: 8,
                border: `1px solid ${C.border}`,
                background: "white",
                color: C.grey,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <Download size={14} /> Export
            </button>
            <button
              onClick={() => openModal("add", null)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "9px 18px",
                borderRadius: 8,
                border: "none",
                background: `linear-gradient(135deg, ${C.tealDk}, ${C.teal})`,
                color: "white",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(8,145,178,0.3)",
              }}
            >
              <Plus size={15} /> Add Employee
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 14,
            marginBottom: 22,
          }}
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                style={{
                  background: "white",
                  borderRadius: 10,
                  padding: "14px 16px",
                  border: `1px solid ${C.border}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: s.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={17} color={s.color} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: C.navy,
                      lineHeight: 1,
                    }}
                  >
                    {s.val}
                  </div>
                  <div style={{ fontSize: 11, color: C.grey, marginTop: 2 }}>
                    {s.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Table Card */}
        <div
          style={{
            background: "white",
            borderRadius: 12,
            border: `1px solid ${C.border}`,
            overflow: "hidden",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          {/* Filters Row */}
          <div
            style={{
              padding: "14px 18px",
              borderBottom: `1px solid ${C.border}`,
              display: "flex",
              gap: 10,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ position: "relative", flex: "0 0 240px" }}>
              <Search
                size={14}
                color={C.muted}
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search name, ID, email..."
                style={{
                  paddingLeft: 32,
                  paddingRight: 12,
                  paddingTop: 8,
                  paddingBottom: 8,
                  border: `1px solid ${C.border}`,
                  borderRadius: 7,
                  fontSize: 13,
                  color: C.text,
                  outline: "none",
                  width: "100%",
                  background: C.greyLt,
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <Filter size={13} color={C.muted} />
              {["all", "active", "terminated"].map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setStatus(s);
                    setPage(1);
                  }}
                  style={{
                    padding: "5px 12px",
                    borderRadius: 20,
                    border: "1px solid",
                    fontSize: 11,
                    fontWeight: 600,
                    cursor: "pointer",
                    borderColor: statusFilter === s ? C.teal : C.border,
                    background: statusFilter === s ? C.tealLt : "white",
                    color: statusFilter === s ? C.teal : C.grey,
                  }}
                >
                  {s === "all"
                    ? "All Status"
                    : s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", gap: 6 }}>
              {["all", "Full-Time", "Part-Time", "Variable", "Seasonal"].map(
                (t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setType(t);
                      setPage(1);
                    }}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 20,
                      border: "1px solid",
                      fontSize: 11,
                      fontWeight: 600,
                      cursor: "pointer",
                      borderColor: typeFilter === t ? C.navy : C.border,
                      background: typeFilter === t ? "#f0f4ff" : "white",
                      color: typeFilter === t ? C.navy : C.grey,
                    }}
                  >
                    {t === "all" ? "All Types" : t}
                  </button>
                ),
              )}
            </div>

            <div style={{ marginLeft: "auto", fontSize: 12, color: C.muted }}>
              {filtered.length} employee{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>

          {/* Bulk Action Bar */}
          {selected.length > 0 && (
            <div
              style={{
                padding: "10px 18px",
                background: C.tealLt,
                borderBottom: `1px solid #a5f3fc`,
                display: "flex",
                gap: 10,
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 600, color: C.tealDk }}>
                {selected.length} selected
              </span>
              <button
                style={{
                  padding: "5px 12px",
                  borderRadius: 6,
                  border: `1px solid ${C.teal}`,
                  background: "white",
                  color: C.teal,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Update Status
              </button>
              <button
                style={{
                  padding: "5px 12px",
                  borderRadius: 6,
                  border: `1px solid ${C.teal}`,
                  background: "white",
                  color: C.teal,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Export Selected
              </button>
              <button
                onClick={() => setSelected([])}
                style={{
                  padding: "5px 12px",
                  borderRadius: 6,
                  border: `1px solid ${C.red}`,
                  background: C.redLt,
                  color: C.red,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Delete Selected
              </button>
              <button
                onClick={() => setSelected([])}
                style={{
                  marginLeft: "auto",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: C.muted,
                }}
              >
                <X size={15} />
              </button>
            </div>
          )}

          {/* Table */}
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 820,
              }}
            >
              <thead>
                <tr style={{ background: C.greyLt }}>
                  <th style={{ padding: "10px 14px", width: 36 }}>
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={() =>
                        allSelected
                          ? setSelected([])
                          : setSelected(paged.map((e) => e.id))
                      }
                      style={{ accentColor: C.teal, cursor: "pointer" }}
                    />
                  </th>
                  {[
                    "Employee",
                    "EIN",
                    "Employee ID",
                    "Type",
                    "Status",
                    "Email",
                    "Date Hired",
                    "",
                  ].map((h, i) => (
                    <th
                      key={i}
                      style={{
                        padding: "10px 14px",
                        textAlign: "left",
                        fontSize: 11,
                        fontWeight: 700,
                        color: C.muted,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h && (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          {h}
                          {h && h !== "" && (
                            <ArrowUpDown
                              size={11}
                              color={C.border}
                              style={{ cursor: "pointer" }}
                            />
                          )}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paged.map((emp, i) => {
                  const isSelected = selected.includes(emp.id);
                  return (
                    <tr
                      key={emp.id}
                      style={{
                        background: isSelected
                          ? "#f0fbff"
                          : emp.status === "terminated"
                            ? "#fafafa"
                            : "white",
                        borderBottom: `1px solid ${C.border}`,
                        transition: "background 0.1s",
                        opacity: emp.status === "terminated" ? 0.75 : 1,
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected)
                          e.currentTarget.style.background = C.greyLt;
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected)
                          e.currentTarget.style.background =
                            emp.status === "terminated" ? "#fafafa" : "white";
                      }}
                    >
                      <td style={{ padding: "12px 14px" }}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleOne(emp.id)}
                          style={{ accentColor: C.teal, cursor: "pointer" }}
                        />
                      </td>
                      <td style={{ padding: "12px 14px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <div
                            style={{
                              width: 34,
                              height: 34,
                              borderRadius: "50%",
                              background:
                                emp.status === "terminated"
                                  ? C.greyLt
                                  : `linear-gradient(135deg, ${C.tealDk}, #7c3aed)`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 12,
                              fontWeight: 700,
                              color:
                                emp.status === "terminated" ? C.muted : "white",
                              flexShrink: 0,
                            }}
                          >
                            {emp.first[0]}
                            {emp.last[0]}
                          </div>
                          <div>
                            <div
                              style={{
                                fontWeight: 700,
                                fontSize: 13,
                                color: C.text,
                              }}
                            >
                              {emp.first} {emp.last}
                            </div>
                            <div style={{ fontSize: 11, color: C.muted }}>
                              {emp.address.split(",")[1]?.trim() || ""}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        style={{
                          padding: "12px 14px",
                          fontSize: 12,
                          color: C.grey,
                        }}
                      >
                        {emp.ein}
                      </td>
                      <td
                        style={{
                          padding: "12px 14px",
                          fontSize: 12,
                          fontWeight: 600,
                          color: C.tealDk,
                        }}
                      >
                        {emp.empId}
                      </td>
                      <td style={{ padding: "12px 14px" }}>
                        <TypeChip type={emp.type} />
                      </td>
                      <td style={{ padding: "12px 14px" }}>
                        <StatusChip status={emp.status} />
                      </td>
                      <td
                        style={{
                          padding: "12px 14px",
                          fontSize: 12,
                          color: C.grey,
                          maxWidth: 180,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {emp.email}
                      </td>
                      <td
                        style={{
                          padding: "12px 14px",
                          fontSize: 12,
                          color: C.grey,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {emp.hire}
                      </td>
                      <td
                        style={{ padding: "12px 14px", position: "relative" }}
                      >
                        <button
                          onClick={() =>
                            setOpenMenu(openMenu === emp.id ? null : emp.id)
                          }
                          style={{
                            padding: "5px 8px",
                            borderRadius: 6,
                            border: `1px solid ${C.border}`,
                            background:
                              openMenu === emp.id ? C.greyLt : "white",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <MoreHorizontal size={16} color={C.grey} />
                        </button>
                        {openMenu === emp.id && (
                          <ActionMenu
                            emp={emp}
                            onAction={(type) => openModal(type, emp)}
                            onClose={() => setOpenMenu(null)}
                          />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div
            style={{
              padding: "12px 18px",
              borderTop: `1px solid ${C.border}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 12, color: C.muted }}>
              Showing {Math.min((page - 1) * rowsPerPage + 1, filtered.length)}–
              {Math.min(page * rowsPerPage, filtered.length)} of{" "}
              {filtered.length} employees
            </span>
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                style={{
                  padding: "5px 10px",
                  borderRadius: 6,
                  border: `1px solid ${C.border}`,
                  background: "white",
                  cursor: page === 1 ? "not-allowed" : "pointer",
                  color: page === 1 ? C.muted : C.grey,
                }}
              >
                <ChevronLeft size={14} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 6,
                    border: "1px solid",
                    borderColor: page === i + 1 ? C.teal : C.border,
                    background: page === i + 1 ? C.tealLt : "white",
                    color: page === i + 1 ? C.teal : C.grey,
                    fontWeight: page === i + 1 ? 700 : 400,
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                style={{
                  padding: "5px 10px",
                  borderRadius: 6,
                  border: `1px solid ${C.border}`,
                  background: "white",
                  cursor: page === totalPages ? "not-allowed" : "pointer",
                  color: page === totalPages ? C.muted : C.grey,
                }}
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODALS */}
      {modal?.type === "add" && (
        <DemographicsModal emp={null} onClose={closeModal} />
      )}
      {modal?.type === "edit" && (
        <DemographicsModal emp={modal.emp} onClose={closeModal} />
      )}
      {modal?.type === "delete" && (
        <DeleteModal emp={modal.emp} onClose={closeModal} />
      )}
      {modal?.type === "deps" && (
        <DependentsModal emp={modal.emp} onClose={closeModal} />
      )}
      {modal?.type === "status" && (
        <StatusModal emp={modal.emp} onClose={closeModal} />
      )}
      {modal?.type === "history" && (
        <HistoryModal emp={modal.emp} onClose={closeModal} />
      )}
      {modal?.type === "payroll" && (
        <PayrollModal emp={modal.emp} onClose={closeModal} />
      )}
      {modal?.type === "notes" && (
        <NotesModal emp={modal.emp} onClose={closeModal} />
      )}
    </div>
  );
}
