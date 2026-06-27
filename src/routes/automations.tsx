import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { WorkflowCard, type WorkflowStep } from "@/components/site/WorkflowCard";
import { AutomationShowcase } from "@/components/site/AutomationShowcase";
import { CaseStudy } from "@/components/site/CaseStudy";


export const Route = createFileRoute("/automations")({
  head: () => ({
    meta: [
      { title: "Automations | FlowRail" },
      {
        name: "description",
        content:
          "Real workflow automations FlowRail builds. Invoice to payment, lead intake, and project onboarding.",
      },
      { property: "og:title", content: "Automations | FlowRail" },
      {
        property: "og:description",
        content: "Workflow orchestration and example automations with real brand-icon diagrams.",
      },
    ],
  }),
  component: AutomationsPage,
});

const SERVICES = [
  {
    label: "01",
    title: "Workflow Orchestration",
    body: "Connect tools, automate repetitive work, and orchestrate complex workflows across the platforms you already run.",
  },
  {
    label: "02",
    title: "Custom Internal Tools & Portals",
    body: "Dashboards, admin systems, client portals, and custom interfaces designed for the people who use them every day.",
  },
  {
    label: "03",
    title: "System Solutions",
    body: "End-to-end operational systems built around your business processes. Data, workflows, interfaces, and infrastructure.",
  },
];

const INCLUDES = [
  "Architecture planning",
  "Build and testing",
  "One revision round",
  "Handoff documentation",
  "Deployment support",
];

type Example = {
  num: string;
  title: string;
  value: string;
  name: string;
  channel: "slack" | "discord";
  steps: WorkflowStep[];
};

const EXAMPLES: Example[] = [
  {
    num: "01",
    title: "Invoice to payment",
    value:
      "Inbox to ledger without anyone retyping a number. Approvals and audit trail stay intact.",
    name: "invoice.to.payment",
    channel: "slack",
    steps: [
      { brand: "n8n",        title: "Invoice arrives",   sub: "webhook",     tag: "trigger" },
      { brand: "gemini",     title: "AI reads the PDF",  sub: "extract" },
      { brand: "quickbooks", title: "Bill created",      sub: "create bill" },
      { brand: "slack",      title: "Approved",          sub: "notify",      tag: "approval" },
      { brand: "sheets",     title: "Logged and paid",   sub: "append",      tag: "saved" },
    ],
  },
  {
    num: "02",
    title: "Lead intake and routing",
    value:
      "New leads land scored, stored, and assigned. The right rep sees them within seconds.",
    name: "lead.intake",
    channel: "discord",
    steps: [
      { brand: "n8n",      title: "New lead",              sub: "form intake", tag: "trigger" },
      { brand: "gemini",   title: "AI scores it",          sub: "qualify" },
      { brand: "database", title: "Saved to the database", sub: "store",       tag: "saved" },
      { brand: "n8n",      title: "Routed to a rep",       sub: "assign" },
      { brand: "discord",  title: "Posted in Discord",     sub: "notify",      tag: "ping" },
    ],
  },
  {
    num: "03",
    title: "Project onboarding",
    value:
      "From signed contract to a ready-to-work environment. Every new project starts on the same foundation.",
    name: "project.onboarding",
    channel: "slack",
    steps: [
      { brand: "esignature", title: "Contract signed",    sub: "signed",  tag: "trigger" },
      { brand: "drive",      title: "Workspace created",  sub: "folders", tag: "saved" },
      { brand: "trello",     title: "Project board built", sub: "tasks" },
      { brand: "gmail",      title: "Welcome email sent", sub: "email" },
      { brand: "slack",      title: "Team notified",      sub: "notify",  tag: "ping" },
    ],
  },
];

function AutomationsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mono-label">Automations</p>
          <h1
            className="mt-5 font-medium leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)" }}
          >
            What we <span className="text-brand-gradient">build</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            From one automated workflow to a full operational system.
          </p>

          <div className="mt-12 lg:mt-16">
            <AutomationShowcase />
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="glass-card glass-card-hover rounded-2xl p-7">
              <div className="flex items-center justify-between">
                <p className="mono-label">{s.label}</p>
                <span className="h-2 w-2 rounded-full bg-brand-violet" />
              </div>
              <h2 className="mt-5 text-xl font-medium text-foreground">{s.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 glass-card rounded-2xl p-7 lg:p-9">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <p className="mono-label">Every project includes</p>
              <h3 className="mt-3 text-xl font-medium text-foreground">
                A complete engagement.
              </h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-sm">
              {INCLUDES.map((i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* EXAMPLE AUTOMATIONS */}
      <Section
        eyebrow="Example automations"
        title={<>How the <span className="text-brand-gradient">automations</span> work.</>}
        intro="How FlowRail connects tools, data, and people into operational systems."
      >
        <div className="grid gap-8">
          {EXAMPLES.map((ex) => (
            <article key={ex.num} className="grid gap-5">
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div className="max-w-xl">
                  <p className="mono-label">Example {ex.num}</p>
                  <h2 className="mt-3 text-2xl lg:text-3xl font-medium tracking-tight text-foreground">
                    {ex.title}
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">{ex.value}</p>
              </div>
              <WorkflowCard name={ex.name} channel={ex.channel} steps={ex.steps} />
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <CaseStudy
            industry="Professional Services Firm"
            tools={["n8n", "Gemini", "QuickBooks", "Slack"]}
            before="Invoices retyped from PDF into QuickBooks, approvals lost in email."
            after="Inbox-to-ledger pipeline with Slack approvals and audit trail."
            result="~9 hours/month reclaimed, zero missed approvals in 90 days."
          />
          <CaseStudy
            industry="B2B Sales Team"
            tools={["n8n", "Gemini", "Discord", "Database"]}
            before="Web leads landed in a shared inbox, assigned by hand."
            after="Scored, stored, and routed to the right rep in seconds."
            result="Response time down from 6 hours to under 2 minutes."
          />
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="glass-card rounded-2xl p-10 lg:p-16 text-center">
          <p className="mono-label">Your system</p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-medium tracking-tight max-w-2xl mx-auto">
            Let's map out your systems.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            On a strategy call we walk through your operation and figure out what's worth building.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary">Book Strategy Call</Link>
            <Link to="/pricing" className="btn-ghost">View Pricing</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
