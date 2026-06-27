import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | FlowRail" },
      {
        name: "description",
        content:
          "Book a strategy call with FlowRail. Map your operation, identify the system worth building, and decide if we're a fit.",
      },
      { property: "og:title", content: "Contact | FlowRail" },
      {
        property: "og:description",
        content: "Tell us about your bottleneck and book a 45-minute strategy call.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // honeypot — bots fill hidden fields
    if ((data.get("company_website") as string)?.length) return;

    const next: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim() ?? "";
    const company = (data.get("company") as string)?.trim() ?? "";
    const bottleneck = (data.get("bottleneck") as string)?.trim() ?? "";
    if (name.length < 2 || name.length > 80) next.name = "Please enter your name.";
    if (company.length < 1 || company.length > 120) next.company = "Please enter your company.";
    if (bottleneck.length < 10 || bottleneck.length > 2000)
      next.bottleneck = "A sentence or two about the bottleneck helps.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative pt-16 pb-10 lg:pt-24 lg:pb-14">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mono-label">Contact</p>
          <h1 className="mt-5 font-medium leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)" }}>
            Let's build <span className="text-brand-gradient">what comes next</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Tell us about the operation, the stack, and the bottleneck. We'll arrive at the call
            already halfway through the diagram.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          <div className="glass-card rounded-2xl p-8 lg:p-10">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-violet/50 bg-brand-violet/10 mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B3FFF" strokeWidth="2">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-2xl font-medium">Message received.</h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  We'll reply within one business day with a scheduling link for our strategy call.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5" noValidate>
                {/* honeypot field — keep visually hidden */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label>
                    Website
                    <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required maxLength={80} error={errors.name} />
                  <Field label="Company" name="company" required maxLength={120} error={errors.company} />
                </div>
                <Field
                  label="Current Tools"
                  name="tools"
                  maxLength={300}
                  placeholder="e.g. HubSpot, Airtable, Slack, QuickBooks"
                />
                <Textarea
                  label="Biggest Bottleneck"
                  name="bottleneck"
                  placeholder="Where does work get stuck, repeated, or lost?"
                  required
                  maxLength={2000}
                  error={errors.bottleneck}
                />
                <div>
                  <label htmlFor="budget" className="mono-label block mb-2">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 rounded-xl border border-hairline bg-surface/60 text-foreground focus:outline-none focus:border-brand-violet transition"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a range</option>
                    <option>Under $1,000</option>
                    <option>$1,000–5,000</option>
                    <option>$5,000–10,000</option>
                    <option>$10,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary mt-2 self-start">
                  Book Strategy Call
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-7">
              <p className="mono-label">Who should reach out</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="text-brand-violet">◆</span> Operators feeling the weight of manual work.</li>
                <li className="flex gap-3"><span className="text-brand-violet">◆</span> Founders whose tooling has outgrown spreadsheets.</li>
                <li className="flex gap-3"><span className="text-brand-violet">◆</span> Teams with five tools that don't talk to each other.</li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-7">
              <p className="mono-label">Direct</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Prefer email? Reach us at{" "}
                <a href="mailto:hello@flowrail.io" className="text-brand-gradient">hello@flowrail.io</a>.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-7">
              <p className="mono-label">Your strategy session</p>
              <p className="mt-4 text-base font-medium text-foreground">
                45 minutes. No pitch. No pressure.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Just an honest assessment of your needs, where you stand, and what comes next.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  required,
  placeholder,
  maxLength,
  error,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mono-label block mb-2">{label}</label>
      <input
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        className="w-full px-4 py-3 rounded-xl border border-hairline bg-surface/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand-violet transition"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Textarea({
  label,
  name,
  required,
  placeholder,
  maxLength,
  error,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mono-label block mb-2">{label}</label>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={4}
        placeholder={placeholder}
        maxLength={maxLength}
        className="w-full px-4 py-3 rounded-xl border border-hairline bg-surface/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand-violet transition resize-none"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
