/**
 * WorkflowCard — a white card containing a left-to-right chain of app nodes.
 * Each node renders a real brand icon, a bold title, a small sub-label, and an
 * optional colored tag pill. Nodes are connected by a thin right-pointing chevron.
 * The row scrolls horizontally on small screens; the card never wraps the chain.
 */

import { BrandIcon, type BrandKey } from "./BrandIcons";

export type StepTag = "trigger" | "saved" | "approval" | "ping";

export type WorkflowStep = {
  brand: BrandKey;
  title: string;
  sub: string;
  tag?: StepTag;
};

const TAG_STYLES: Record<StepTag, { bg: string; color: string; label: string }> = {
  trigger:  { bg: "#DBEAFE", color: "#1E40AF", label: "trigger" },
  saved:    { bg: "#DCFCE7", color: "#166534", label: "saved" },
  approval: { bg: "#FEF3C7", color: "#92400E", label: "approval" },
  ping:     { bg: "#E5E7EB", color: "#4B5563", label: "ping" },
};

const CHANNEL_STYLES: Record<"slack" | "discord", { bg: string; color: string; label: string }> = {
  slack:   { bg: "#F4ECF7", color: "#4A154B", label: "Slack channel" },
  discord: { bg: "#E8EAFF", color: "#3A45C7", label: "Discord channel" },
};

function Chevron() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden="true"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function WorkflowCard({
  name,
  steps,
  channel,
}: {
  name: string;
  steps: WorkflowStep[];
  channel?: "slack" | "discord";
}) {
  const ch = channel ? CHANNEL_STYLES[channel] : null;
  return (
    <div className="rounded-2xl bg-white border border-slate-200 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.45)] overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-slate-100 bg-slate-50/70">
        <div className="flex items-center gap-2 min-w-0">
          <span className="h-2 w-2 rounded-full" style={{ background: "#8B3FFF" }} />
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-slate-500 truncate">
            {name}
          </span>
        </div>
        {ch && (
          <span
            className="font-mono text-[10px] tracking-[0.14em] uppercase rounded-full px-2.5 py-1 shrink-0"
            style={{ background: ch.bg, color: ch.color }}
          >
            {ch.label}
          </span>
        )}
      </div>

      <div className="overflow-x-auto">
        <ol className="flex items-stretch gap-2 px-5 py-6 min-w-max">
          {steps.map((s, i) => {
            const tag = s.tag ? TAG_STYLES[s.tag] : null;
            return (
              <li key={i} className="flex items-center gap-2">
                <div className="w-[148px] rounded-xl border border-slate-200 bg-white p-3 flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div
                      className="h-[34px] w-[34px] rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "#F8FAFC" }}
                    >
                      <BrandIcon brand={s.brand} className="h-[22px] w-[22px]" />
                    </div>
                    {tag && (
                      <span
                        className="text-[9.5px] font-semibold uppercase tracking-wider rounded-full px-2 py-[3px]"
                        style={{ background: tag.bg, color: tag.color }}
                      >
                        {tag.label}
                      </span>
                    )}
                  </div>
                  <p className="text-[13px] font-semibold text-slate-900 leading-tight">
                    {s.title}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    {s.sub}
                  </p>
                </div>
                {i < steps.length - 1 && <Chevron />}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
