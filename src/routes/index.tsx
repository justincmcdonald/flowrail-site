import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ToolsGrid } from "@/components/site/ToolsGrid";
import { WorkflowCard, type WorkflowStep } from "@/components/site/WorkflowCard";
import { CaseStudy } from "@/components/site/CaseStudy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FlowRail | Systems Architecture for Growing Businesses" },
      {
        name: "description",
        content:
          "FlowRail designs and builds the systems behind your operations. Workflow orchestration, internal tools, and full system solutions.",
      },
      { property: "og:title", content: "FlowRail | Systems Architecture for Growing Businesses" },
      {
        property: "og:description",
        content: "Workflow orchestration, internal tools, and full operational systems.",
      },
    ],
  }),
  component: HomePage,
});

const OFFERINGS = [
  {
    label: "01",
    title: "Workflow Orchestration",
    body: "Connect tools, automate repetitive work, and orchestrate complex workflows across the platforms you already run.",
  },
  {
    label: "02",
    title: "Custom Internal Tools & Portals",
    body: "Dashboards, admin systems, client portals, and custom interfaces designed for the people who use them daily.",
  },
  {
    label: "03",
    title: "System Solutions",
    body: "End-to-end operational systems built around your business processes. Data, workflows, and infrastructure.",
  },
];

const INCLUDES = [
  "Architecture planning",
  "Build and testing",
  "One revision round",
  "Handoff documentation",
  "Deployment support",
];

const INVOICE_STEPS: WorkflowStep[] = [
  { brand: "n8n",        title: "Invoice arrives",   sub: "webhook",     tag: "trigger" },
  { brand: "gemini",     title: "AI reads the PDF",  sub: "extract" },
  { brand: "quickbooks", title: "Bill created",      sub: "create bill" },
  { brand: "slack",      title: "Approved",          sub: "notify",      tag: "approval" },
  { brand: "sheets",     title: "Logged and paid",   sub: "append",      tag: "saved" },
];

function HomePage() {
  return (
    <>
      {/* HERO with integrated tools strip */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-surface/40 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-violet node-pulse" />
              <span className="mono-label !text-[10px]">Systems & workflow consulting</span>
            </div>

            <h1
              className="mt-8 font-medium leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              Your business needs a better{" "}
              <span className="text-brand-gradient">operating system</span>.
            </h1>
          </div>

          {/* Integrated tools strip — between headline and subheadline */}
          <div className="mt-10 lg:mt-12 max-w-5xl">
            <p className="text-sm lg:text-base text-muted-foreground flex items-center gap-3">
              <span className="h-px w-8 bg-brand-violet/60 shrink-0" />
              We work with the tools you already use. No new platforms to learn.
            </p>
            <div className="mt-5">
              <ToolsGrid />
            </div>
          </div>

          <div className="mt-10 lg:mt-12 max-w-3xl">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              FlowRail helps growing businesses design and build the systems behind their
              operations. Workflows, internal tools, databases, and infrastructure that
              remove manual work and make scaling possible.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary">
                Book Strategy Call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/automations" className="btn-ghost">See Example Automations</Link>
            </div>

            <p className="mt-6 text-sm text-muted-foreground flex items-center gap-2">
              <span className="h-px w-8 bg-brand-violet/60 shrink-0" />
              From architecture through implementation, we work directly with your team.
            </p>
          </div>
        </div>
      </section>

      {/* REAL WORKFLOW EXAMPLE */}
      <Section
        eyebrow="Real workflows, visualized"
        title={<>Manual invoice processing, <span className="text-brand-gradient">automated</span>.</>}
        intro="This is a real workflow we built. Manual invoice processing became automated invoice to payment."
      >
        <WorkflowCard name="invoice.to.payment" channel="slack" steps={INVOICE_STEPS} />

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_1fr] items-stretch">
          <CaseStudy
            industry="Contractor Operations"
            tools={["n8n", "Gmail", "Google Sheets", "Slack"]}
            before="Lead tracking across email and spreadsheets."
            after="Automated intake and quote workflow."
            result="12 hours/week saved, 70% fewer missed follow-ups."
          />
          <div className="glass-card rounded-2xl p-6 lg:p-8 flex flex-col justify-center">
            <p className="mono-label">More examples</p>
            <p className="mt-3 text-foreground/90 leading-relaxed">
              Lead intake and routing, project onboarding, and other workflows we've built end to end.
            </p>
            <div className="mt-5">
              <Link to="/automations" className="btn-ghost">See more workflows →</Link>
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT WE BUILD */}
      <Section
        eyebrow="What we build"
        title={<>What we <span className="text-brand-gradient">build for you</span>.</>}
        intro="From one automated workflow to a full operational system."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {OFFERINGS.map((s) => (
            <article key={s.title} className="glass-card glass-card-hover rounded-2xl p-7">
              <div className="flex items-center justify-between">
                <p className="mono-label">{s.label}</p>
                <span className="h-2 w-2 rounded-full bg-brand-violet" />
              </div>
              <h3 className="mt-5 text-xl font-medium text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 glass-card rounded-2xl p-7 lg:p-9">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <p className="mono-label">Every project includes</p>
              <h3 className="mt-3 text-xl font-medium text-foreground">
                A full build, documented and handed off.
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

      {/* CTA */}
      <Section>
        <div className="glass-card rounded-2xl p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div className="relative">
            <p className="mono-label">Let's talk</p>
            <h2 className="mt-4 text-3xl lg:text-5xl font-medium tracking-tight max-w-2xl mx-auto">
              Design the <span className="text-brand-gradient">operating system</span> your business actually needs.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              A 45-minute strategy call to map your operation and decide together whether FlowRail is the right fit.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="btn-primary">Book Strategy Call</Link>
              <Link to="/pricing" className="btn-ghost">View Pricing</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
