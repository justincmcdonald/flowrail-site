/**
 * CaseStudy: compact before/after/result block with a tools row on top.
 */

import { BrandIcon, type BrandKey } from "./BrandIcons";

const NAME_TO_BRAND: Record<string, BrandKey> = {
  n8n: "n8n",
  gmail: "gmail",
  "google sheets": "sheets",
  sheets: "sheets",
  slack: "slack",
  gemini: "gemini",
  quickbooks: "quickbooks",
  discord: "discord",
  database: "database",
  "google drive": "drive",
  drive: "drive",
  onedrive: "onedrive",
  outlook: "outlook",
  melio: "melio",
  "microsoft 365": "microsoft365",
  monday: "monday",
  paypal: "paypal",
  esignature: "esignature",
  trello: "trello",
};

function ToolPill({ name }: { name: string }) {
  const brand = NAME_TO_BRAND[name.toLowerCase()];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface/60 px-2.5 py-1 text-[11px] text-foreground/85">
      {brand ? <BrandIcon brand={brand} className="h-3.5 w-3.5" /> : null}
      <span>{name}</span>
    </span>
  );
}

export type CaseStudyProps = {
  industry: string;
  before: string;
  after: string;
  result: string;
  tools?: string[];
};

export function CaseStudy({ industry, before, after, result, tools }: CaseStudyProps) {
  return (
    <div className="glass-card rounded-2xl p-6 lg:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="mono-label">Case study</p>
        <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" />
      </div>
      {tools && tools.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tools.map((t) => (
            <ToolPill key={t} name={t} />
          ))}
        </div>
      ) : null}
      <h3 className="mt-3 text-xl font-medium text-foreground">{industry}</h3>
      <dl className="mt-5 grid gap-3 sm:grid-cols-3 text-sm">
        <div>
          <dt className="mono-label !text-[10px] text-muted-foreground/70">Before</dt>
          <dd className="mt-1.5 text-foreground/85 leading-relaxed">{before}</dd>
        </div>
        <div>
          <dt className="mono-label !text-[10px] text-muted-foreground/70">After</dt>
          <dd className="mt-1.5 text-foreground/85 leading-relaxed">{after}</dd>
        </div>
        <div>
          <dt className="mono-label !text-[10px] text-brand-violet/80">Result</dt>
          <dd className="mt-1.5 text-foreground leading-relaxed font-medium">{result}</dd>
        </div>
      </dl>
    </div>
  );
}
