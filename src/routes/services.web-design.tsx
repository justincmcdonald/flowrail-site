import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { WebDesignShowcase } from "@/components/site/WebDesignShowcase";
import { CaseStudy } from "@/components/site/CaseStudy";

export const Route = createFileRoute("/services/web-design")({
  head: () => ({
    meta: [
      { title: "Web Design | FlowRail" },
      {
        name: "description",
        content:
          "Custom web design and build for small businesses. Fully designed, hosted, and handed over.",
      },
      { property: "og:title", content: "Web Design | FlowRail" },
      {
        property: "og:description",
        content: "Modern web design for small businesses, end to end.",
      },
    ],
  }),
  component: WebDesignPage,
});

const PROCESS = [
  {
    n: "01",
    title: "Discovery",
    body:
      "We start with a short call to understand your business, your audience, and the outcome the site needs to drive.",
  },
  {
    n: "02",
    title: "Design",
    body:
      "We mock up a direction tailored to your brand. No templates. You see real screens before we build anything.",
  },
  {
    n: "03",
    title: "Build",
    body:
      "We hand-build a fast, responsive site that works on every screen. Optimized for speed, accessibility, and search.",
  },
  {
    n: "04",
    title: "Launch",
    body:
      "We set up the hosting, point the domain, and put the site live. You get a clean handover so you are never stuck.",
  },
];

const BUCKETS = [
  {
    label: "01",
    title: "Performance",
    items: ["Fast load times", "Responsive design", "SEO-ready", "Optimized images"],
  },
  {
    label: "02",
    title: "Infrastructure",
    items: ["Domain registration", "SSL certificate", "Hosting setup", "Analytics installed"],
  },
  {
    label: "03",
    title: "Support",
    items: ["Updates", "Maintenance", "Ongoing support", "Analytics review"],
  },
];

const FAQ = [
  {
    q: "How long does a site take?",
    a: "Most small business sites land in two to four weeks, depending on scope and how quickly we get feedback.",
  },
  {
    q: "Can we edit the site ourselves later?",
    a: "Yes. We hand over a setup you can update without writing code, and we are around if you would rather we handle changes.",
  },
  {
    q: "Do you handle hosting and the domain?",
    a: "Yes. We set up hosting, point your domain, and make sure everything is live and stable before we hand it over.",
  },
  {
    q: "What if we already have a site?",
    a: "We can redesign and migrate it without losing your existing content, links, or search rankings.",
  },
];

function WebDesignPage() {
  return (
    <>
      <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mono-label">Services / Web Design</p>
          <h1
            className="mt-5 font-medium leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)" }}
          >
            Sites that look the part and <span className="text-brand-gradient">do the work</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We design and build modern websites for small businesses. Every site is
            custom-built, optimized for your audience, and handed over fully hosted and
            live. No templated designs, no surprises.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary">Book Strategy Call</Link>
            <Link to="/pricing" className="btn-ghost">View Pricing</Link>
          </div>

          <div className="mt-12 lg:mt-16">
            <WebDesignShowcase />
          </div>
        </div>
      </section>

      <Section
        eyebrow="What you get"
        title={<>Every site is built to <span className="text-brand-gradient">last</span>.</>}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {BUCKETS.map((b) => (
            <article key={b.title} className="glass-card glass-card-hover rounded-2xl p-7">
              <div className="flex items-center justify-between">
                <p className="mono-label">{b.label}</p>
                <span className="h-2 w-2 rounded-full bg-brand-violet" />
              </div>
              <h3 className="mt-5 text-xl font-medium text-foreground">{b.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {b.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-foreground/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <CaseStudy
            industry="Local Service Business"
            before="Outdated template site, no inbound leads, no analytics."
            after="Custom-designed site with SEO, contact forms, and analytics wired in."
            result="3x inbound leads in the first 60 days post-launch."
          />
        </div>
      </Section>

      <Section
        eyebrow="Process"
        title={<>From first call to <span className="text-brand-gradient">live site</span>.</>}
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((s) => (
            <article key={s.n} className="glass-card glass-card-hover rounded-2xl p-6">
              <p className="mono-label">{s.n}</p>
              <h3 className="mt-4 text-lg font-medium text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title={<>Questions, <span className="text-brand-gradient">answered</span>.</>}>
        <div className="grid gap-4">
          {FAQ.map((f) => (
            <details
              key={f.q}
              className="glass-card rounded-xl px-5 py-4 group"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base font-medium text-foreground">
                {f.q}
                <span className="text-brand-violet transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section>
        <div className="glass-card rounded-2xl p-10 lg:p-14 text-center">
          <p className="mono-label">Ready when you are</p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-medium tracking-tight max-w-2xl mx-auto">
            Let's design your next <span className="text-brand-gradient">site</span>.
          </h2>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary">Book Strategy Call</Link>
            <Link to="/pricing" className="btn-ghost">View Pricing</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
