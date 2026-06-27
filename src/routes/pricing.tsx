import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — FlowRail" },
      {
        name: "description",
        content:
          "Transparent pricing for automations and web design — scoped to the outcome, with optional maintenance.",
      },
      { property: "og:title", content: "Pricing — FlowRail" },
      {
        property: "og:description",
        content:
          "Automations from $150, websites from $900, monthly care from $40/mo, hourly consulting at $60/hr.",
      },
    ],
  }),
  component: PricingPage,
});

type Row = { label: string; price: string; body: string };
type Group = { key: string; title: string; subtitle: string; rows: Row[] };

type AfterRow = {
  label: string;
  own: string;
  maintain: string;
  body: string;
};

type ServiceTab = "automations" | "site";
type EngagementMode = "own" | "maintain";

const AUTOMATIONS_GROUPS: Group[] = [
  {
    key: "single",
    title: "Single workflow",
    subtitle: "One focused automation, end to end.",
    rows: [
      { label: "Simple",   price: "$150+",          body: "A small one-step automation." },
      { label: "Standard", price: "$300 – $450+",  body: "A few steps across a couple of apps." },
      { label: "Complex",  price: "$500 – $750+",  body: "Complex logic, branching, or payments." },
    ],
  },
  {
    key: "blocks",
    title: "Custom building blocks",
    subtitle: "Reusable components built to fit your stack.",
    rows: [
      { label: "Database",         price: "from $450+",    body: "A clean place to store and organize everything." },
      { label: "Custom Bot",       price: "from $450+",    body: "Slack, Discord, or similar bots." },
      { label: "Web App / Portal", price: "from $1,000+",  body: "Dashboards, admin interfaces, client portals." },
    ],
  },
  {
    key: "full",
    title: "Full system",
    subtitle: "Multi-workflow systems with shared data and interfaces.",
    rows: [
      { label: "Smaller", price: "$1,000 – $2,500+", body: "A workflow or two with a couple of triggers." },
      { label: "Medium",  price: "$2,500 – $5,000+", body: "Several workflows and can include a custom bot." },
      { label: "Large",   price: "$5,000 – $10,000+", body: "New databases, bots, portals, or complex systems." },
    ],
  },
];

const SITE_GROUPS: Group[] = [
  {
    key: "creation",
    title: "Site creation",
    subtitle: "Custom-designed, hand-built sites — no templates, no page builders.",
    rows: [
      {
        label: "Simple",
        price: "$900 – $1,500+",
        body: "Up to 5 pages. Brand-aligned design, mobile responsive, contact form, analytics, and SEO basics.",
      },
      {
        label: "Standard",
        price: "$1,800 – $3,500+",
        body: "Up to 10 pages with a blog or services index, custom animations, CMS setup, and on-page SEO.",
      },
      {
        label: "Complex",
        price: "$4,000 – $8,500+",
        body: "Large multi-section sites with custom integrations, portals, e-commerce, or booking systems.",
      },
    ],
  },
];

const AUTOMATIONS_AFTER: AfterRow[] = [
  {
    label: "Changes and tweaks",
    own: "$50 – $400+",
    maintain: "Included",
    body: "Small logic changes, fixes, or workflow updates after launch.",
  },
  {
    label: "Monthly care",
    own: "—",
    maintain: "$75 – $400+/mo",
    body: "Monitoring, small changes, priority access. Scales with workflow complexity.",
  },
  {
    label: "Hourly consulting",
    own: "$60+/hr",
    maintain: "$60+/hr",
    body: "Architecture review, odd jobs, or anything outside scope.",
  },
];

const SITE_AFTER: AfterRow[] = [
  {
    label: "Changes and tweaks",
    own: "$40 – $300+",
    maintain: "Included",
    body: "Copy edits, design tweaks, new pages, or small feature additions.",
  },
  {
    label: "Monthly care",
    own: "—",
    maintain: "$40 – $250+/mo",
    body: "Hosting, backups, security updates, edits, and uptime monitoring. Tiered by site size.",
  },
  {
    label: "Hourly consulting",
    own: "$60+/hr",
    maintain: "$60+/hr",
    body: "Strategy, SEO review, or anything outside the care plan.",
  },
];

function PricingPage() {
  const [tab, setTab] = useState<ServiceTab>("automations");
  const [mode, setMode] = useState<EngagementMode>("own");

  const groups = tab === "automations" ? AUTOMATIONS_GROUPS : SITE_GROUPS;
  const afterRows = tab === "automations" ? AUTOMATIONS_AFTER : SITE_AFTER;

  return (
    <>
      <section className="relative pt-12 pb-6 lg:pt-16 lg:pb-8">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mono-label">Pricing</p>
          <h1
            className="mt-4 font-medium leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            Priced by <span className="text-brand-gradient">scope</span>, not by hour.
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl">
            Honest ranges scoped against the outcome. Every engagement starts with a strategy
            call to map the work and price it precisely.
          </p>
        </div>
      </section>

      {/* TOP TOGGLE — service */}
      <section className="relative pb-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div
            role="tablist"
            aria-label="Service"
            className="mx-auto w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 rounded-2xl border border-hairline bg-surface/50"
          >
            <ToggleBtn active={tab === "automations"} onClick={() => setTab("automations")}>
              Automations
            </ToggleBtn>
            <ToggleBtn active={tab === "site"} onClick={() => setTab("site")}>
              Web Design
            </ToggleBtn>
          </div>
          <p className="mt-3 text-sm text-muted-foreground text-center">
            Choose the service to view pricing.
          </p>
        </div>
      </section>

      {/* SCOPE PRICING */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-10 lg:mt-14 space-y-10 lg:space-y-12 pb-2">
        {groups.map((g) => (
          <section key={g.key} aria-labelledby={`grp-${g.key}`}>
            <div className="mb-5 max-w-2xl">
              <h2
                id={`grp-${g.key}`}
                className="text-2xl lg:text-3xl font-medium tracking-tight text-foreground"
              >
                {g.title}
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{g.subtitle}</p>
            </div>

            <div
              className={`grid gap-4 ${
                g.rows.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
              }`}
            >
              {g.rows.map((r) => (
                <div
                  key={r.label}
                  className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col"
                >
                  <p className="text-base font-semibold text-white">{r.label}</p>
                  <p
                    className="mt-3 text-2xl font-medium tracking-tight"
                    style={{ color: "#8B3FFF" }}
                  >
                    {r.price}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* AFTER LAUNCH — with engagement toggle */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-12 lg:mt-16 pb-10">
        <div className="mb-6 max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-foreground">
            After launch
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Iteration, tuning, and ongoing access. Pick the engagement that fits.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Engagement model"
          className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 rounded-2xl border border-hairline bg-surface/50"
        >
          <ToggleBtn active={mode === "own"} onClick={() => setMode("own")}>
            Build and you own it
          </ToggleBtn>
          <ToggleBtn active={mode === "maintain"} onClick={() => setMode("maintain")}>
            Build and we maintain it
          </ToggleBtn>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {afterRows.map((r) => {
            const price = mode === "own" ? r.own : r.maintain;
            const muted = price === "—";
            return (
              <div
                key={r.label}
                className={`glass-card rounded-2xl p-6 flex flex-col ${
                  muted ? "opacity-50" : "glass-card-hover"
                }`}
              >
                <p className="text-base font-semibold text-white">{r.label}</p>
                <p
                  className="mt-3 text-2xl font-medium tracking-tight"
                  style={{ color: muted ? "#6b7280" : "#8B3FFF" }}
                >
                  {price}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {r.body}
                </p>
              </div>
            );
          })}
        </div>

        {mode === "maintain" && (
          <p className="mt-4 text-xs text-muted-foreground">
            Care plans are month-to-month. Cancel any time.
          </p>
        )}
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="glass-card rounded-2xl p-8 lg:p-12 text-center">
            <p className="mono-label">Next step</p>
            <h2 className="mt-3 text-2xl lg:text-3xl font-medium tracking-tight max-w-2xl mx-auto">
              Every engagement starts with a scoped strategy call.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm">
              45 minutes to map your operation, identify the system worth building, and price
              it honestly.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="btn-primary">Book Strategy Call</Link>
              <Link to="/automations" className="btn-ghost">View Automations</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ToggleBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`min-h-[60px] rounded-xl px-5 py-3 text-base font-medium transition-all ${
        active
          ? "text-white shadow-[0_10px_30px_-10px_rgba(139,63,255,0.55)]"
          : "text-muted-foreground hover:text-foreground"
      }`}
      style={
        active
          ? { background: "linear-gradient(135deg, #8B3FFF 0%, #2F9BFF 100%)" }
          : undefined
      }
    >
      {children}
    </button>
  );
}
