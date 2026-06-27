import type { CSSProperties, ReactNode } from "react";
// Cinematic hero animation for the Automations page.
// Cycles through 5 scenes: workflow canvas → form fill → Discord notification
// → Gmail inbox → Google-Sheets row autopopulate → back to canvas. Each scene
// crossfades with a subtle camera scale. Pure CSS, GPU-friendly, seamless loop.

const CYCLE = 20; // total seconds for one full loop

export function AutomationShowcase() {
  return (
    <div className="relative h-[360px] sm:h-[520px] lg:h-[620px] w-full overflow-hidden rounded-3xl border border-hairline bg-[#06070b]">
      {/* Ambient lighting */}
      <div
        className="absolute inset-0 opacity-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 22% 30%, rgba(139,63,255,0.22), transparent 60%), radial-gradient(50% 50% at 78% 70%, rgba(47,155,255,0.20), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Persistent floating notification toasts (always visible) */}
      <div className="absolute right-3 top-3 lg:right-6 lg:top-6 z-30 flex flex-col gap-2 w-[170px] sm:w-[210px] lg:w-[240px] pointer-events-none">
        <Toast app="Slack"  color="#4A154B" delay="1.5s"  text="New lead · Acme Corp" />
        <Toast app="Gmail"  color="#EA4335" delay="7s"    text="Welcome email sent" />
        <Toast app="Stripe" color="#635BFF" delay="13s"   text="Payment received · $1,240" />
      </div>

      {/* Scene stack */}
      <Scene delay="0s">
        <WorkflowCanvas />
      </Scene>
      <Scene delay="4s">
        <FormScene />
      </Scene>
      <Scene delay="8s">
        <DiscordScene />
      </Scene>
      <Scene delay="12s">
        <GmailScene />
      </Scene>
      <Scene delay="16s">
        <SheetsScene />
      </Scene>

      <style>{`
        @keyframes as-scene {
          0%   { opacity: 0; transform: scale(1.06); filter: blur(6px); }
          5%   { opacity: 1; transform: scale(1);    filter: blur(0); }
          20%  { opacity: 1; transform: scale(1);    filter: blur(0); }
          25%  { opacity: 0; transform: scale(0.97); filter: blur(6px); }
          100% { opacity: 0; transform: scale(0.97); filter: blur(6px); }
        }
        @keyframes as-flow {
          0%   { stroke-dashoffset: 60;  opacity: 0.25; }
          50%  { stroke-dashoffset: 30;  opacity: 1; }
          100% { stroke-dashoffset: 0;   opacity: 0.4; }
        }
        @keyframes as-pulse {
          0%, 100% { transform: scale(1);    box-shadow: 0 0 0 0    rgba(139,63,255,0.55); }
          50%      { transform: scale(1.05); box-shadow: 0 0 0 12px rgba(139,63,255,0); }
        }
        @keyframes as-trigger-pulse {
          0%, 100% { transform: scale(1);    box-shadow: 0 0 0 0    rgba(255,90,90,0.7), 0 0 30px rgba(139,63,255,0.5); }
          50%      { transform: scale(1.10); box-shadow: 0 0 0 16px rgba(255,90,90,0), 0 0 40px rgba(139,63,255,0.8); }
        }
        @keyframes as-toast {
          0%   { transform: translateX(120%); opacity: 0; }
          5%   { transform: translateX(0);     opacity: 1; }
          25%  { transform: translateX(0);     opacity: 1; }
          32%  { transform: translateX(120%);  opacity: 0; }
          100% { transform: translateX(120%);  opacity: 0; }
        }
        @keyframes as-type {
          0%, 100% { width: 0; }
          60%      { width: var(--w, 100%); }
        }
        @keyframes as-blink     { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes as-row-slide { 0% { transform: translateY(-100%); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes as-mail-in   { 0% { transform: translateY(-16px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes as-press     { 0%,40% { transform: scale(1); } 50% { transform: scale(0.94); } 60%,100% { transform: scale(1); } }
        @keyframes as-particle  { 0% { offset-distance: 0%; opacity: 0; } 10%,90% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
      `}</style>
    </div>
  );
}

function Scene({ delay, children }: { delay: string; children: ReactNode }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-10"
      style={{
        animation: `as-scene ${CYCLE}s cubic-bezier(0.65,0,0.35,1) ${delay} infinite`,
        opacity: 0,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}

/* ---------------- SCENE 1: workflow canvas ---------------- */

function WorkflowCanvas() {
  const nodes = [
    { id: "trigger", label: "Form submit", sub: "trigger",  x: 8,  y: 30, color: "#FF5A5A", trigger: true },
    { id: "ai",      label: "AI qualify",  sub: "Gemini",   x: 30, y: 62, color: "#2F9BFF" },
    { id: "db",      label: "Save record", sub: "Database", x: 52, y: 28, color: "#10B981" },
    { id: "notify",  label: "Notify team", sub: "Discord",  x: 74, y: 62, color: "#5865F2" },
    { id: "email",   label: "Send email",  sub: "Gmail",    x: 94, y: 30, color: "#EA4335" },
  ];

  return (
    <div className="relative w-full h-full max-w-[820px] scale-[0.82] sm:scale-100">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="aspath" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%"  stopColor="#8B3FFF" />
            <stop offset="100%" stopColor="#2F9BFF" />
          </linearGradient>
          <filter id="asglow">
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
        </defs>
        {connections(nodes).map((c, i) => (
          <g key={i}>
            <path
              d={c}
              fill="none"
              stroke="url(#aspath)"
              strokeWidth="0.5"
              strokeDasharray="2 3"
              strokeLinecap="round"
              opacity="0.6"
              style={{ animation: `as-flow 2s linear ${i * 0.3}s infinite` }}
            />
            <circle r="0.9" fill="#fff" filter="url(#asglow)" style={{ offsetPath: `path("${c}")`, animation: `as-particle 2.4s linear ${i * 0.4}s infinite` } as CSSProperties} />
          </g>
        ))}
      </svg>

      {nodes.map((n, i) => (
        <div key={n.id} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
          <div
            className="rounded-xl border border-white/10 bg-[#0d1017]/95 backdrop-blur px-3 py-2 lg:px-4 lg:py-3 min-w-[110px] lg:min-w-[148px] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.95)]"
            style={{
              animation: n.trigger
                ? `as-trigger-pulse 1.8s ease-in-out infinite`
                : `as-pulse 2.6s ease-in-out ${i * 0.4}s infinite`,
            }}
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: n.color }} />
              <span className="text-[9px] lg:text-[10px] font-mono uppercase tracking-wider text-white/45">{n.sub}</span>
            </div>
            <div className="mt-1 text-[11px] lg:text-sm font-medium text-white">{n.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function connections(nodes: { x: number; y: number }[]) {
  const paths: string[] = [];
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i];
    const b = nodes[i + 1];
    const mx = (a.x + b.x) / 2;
    paths.push(`M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`);
  }
  return paths;
}

/* ---------------- SCENE 2: form fill ---------------- */

function FormScene() {
  return (
    <div className="w-[280px] sm:w-[360px] lg:w-[420px] rounded-2xl border border-white/10 bg-[#0d1017]/95 backdrop-blur p-5 sm:p-6 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between">
        <div className="text-[10px] font-mono uppercase tracking-wider text-white/45">Contact form</div>
        <div className="text-[10px] font-mono text-emerald-400">● live</div>
      </div>
      <div className="mt-1 text-base font-medium text-white">Get a custom proposal</div>
      <div className="mt-5 space-y-3">
        <TypingField label="Name"    width={75} delay="0.3s" />
        <TypingField label="Email"   width={95} delay="1.1s" />
        <TypingField label="Company" width={65} delay="1.9s" />
        <div className="pt-2">
          <div
            className="h-9 w-32 rounded-lg bg-gradient-to-r from-[#8B3FFF] to-[#2F9BFF] text-xs font-medium text-white flex items-center justify-center gap-1.5 shadow-[0_10px_30px_-10px_rgba(139,63,255,0.7)]"
            style={{ animation: `as-press 4s ease-in-out infinite` }}
          >
            Submit
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TypingField({ label, width, delay }: { label: string; width: number; delay: string }) {
  return (
    <div>
      <div className="text-[9px] font-mono uppercase tracking-wider text-white/35">{label}</div>
      <div className="mt-1 h-8 rounded-md border border-white/10 bg-black/40 px-3 flex items-center overflow-hidden">
        <div
          className="h-1.5 bg-white/80 rounded-full"
          style={{
            // @ts-expect-error CSS var
            "--w": `${width}%`,
            animation: `as-type 4s steps(24, end) ${delay} infinite`,
          }}
        />
        <span className="ml-0.5 h-3.5 w-[1.5px] bg-white/70" style={{ animation: "as-blink 0.9s steps(2) infinite" }} />
      </div>
    </div>
  );
}

/* ---------------- SCENE 3: Discord notification ---------------- */

function DiscordScene() {
  return (
    <div className="w-[292px] sm:w-[380px] lg:w-[440px] rounded-2xl border border-white/10 bg-[#313338] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-black/30 bg-[#2b2d31]">
        <div className="h-7 w-7 rounded-md bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold">D</div>
        <div>
          <div className="text-xs text-white/50">flowrail-leads</div>
          <div className="text-sm font-medium text-white">#new-leads</div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex gap-3" style={{ animation: `as-mail-in 0.6s ease-out 0.2s both` }}>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#8B3FFF] to-[#2F9BFF] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-medium text-white">FlowRail Bot</span>
              <span className="text-[10px] text-white/40">just now</span>
            </div>
            <div className="mt-1 rounded-lg border-l-2 border-emerald-400 bg-[#2b2d31] px-3 py-2">
              <div className="text-[11px] font-mono text-emerald-400">✓ New lead received</div>
              <div className="mt-1 text-sm text-white/90">Acme Corp · enterprise plan</div>
              <div className="mt-0.5 text-xs text-white/50">sarah@acme.com · qualified by AI · routed to @jordan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SCENE 4: Gmail inbox ---------------- */

function GmailScene() {
  return (
    <div className="w-[292px] sm:w-[380px] lg:w-[460px] rounded-2xl border border-white/10 bg-white shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-black/5 bg-[#f6f8fc]">
        <div className="h-6 w-6 rounded-md flex items-center justify-center bg-[#EA4335] text-white text-[10px] font-bold">M</div>
        <div className="text-sm font-medium text-[#1f1f1f]">Inbox</div>
        <div className="ml-auto text-[10px] text-[#5f6368] font-mono">1 new</div>
      </div>
      <div className="divide-y divide-black/5">
        <div className="px-4 py-3 flex items-center gap-3 bg-[#fef7e8]" style={{ animation: `as-mail-in 0.5s ease-out 0.2s both` }}>
          <span className="h-2 w-2 rounded-full bg-[#1a73e8] shrink-0" />
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-[#1f1f1f]">FlowRail</span>
              <span className="ml-auto text-[10px] text-[#5f6368]">now</span>
            </div>
            <div className="text-xs text-[#1f1f1f] truncate">Welcome to FlowRail. Your kickoff details inside</div>
          </div>
        </div>
        <Mail subject="Re: Q3 systems audit" preview="Looks good. See comments inline." from="Maya R." />
        <Mail subject="Invoice #2041 paid" preview="Stripe confirmed payment of $1,240" from="Stripe" />
        <Mail subject="Sprint planning notes" preview="Attached. Let me know what's missing." from="Jordan K." />
      </div>
    </div>
  );
}

function Mail({ subject, preview, from }: { subject: string; preview: string; from: string }) {
  return (
    <div className="px-4 py-3 flex items-center gap-3">
      <span className="h-2 w-2 rounded-full bg-transparent shrink-0" />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-[#1f1f1f]/80">{from}</span>
        </div>
        <div className="text-xs text-[#5f6368] truncate"><span className="text-[#1f1f1f]/80">{subject}</span>: {preview}</div>
      </div>
    </div>
  );
}

/* ---------------- SCENE 5: Google Sheets row ---------------- */

function SheetsScene() {
  const headers = ["Name", "Email", "Company", "Plan", "Source"];
  const rows = [
    ["Alex K.",   "alex@northbay.io",   "Northbay",     "Pro",        "Referral"],
    ["Maya R.",   "maya@ironwood.co",   "Ironwood",     "Enterprise", "Webinar"],
    ["Devin P.",  "devin@lumen.studio", "Lumen Studio", "Pro",        "Organic"],
  ];
  const newRow = ["Sarah V.", "sarah@acme.com", "Acme Corp", "Enterprise", "Form"];

  return (
    <div className="w-[300px] sm:w-[440px] lg:w-[540px] rounded-2xl border border-white/10 bg-white shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/5 bg-[#f6f8fc]">
        <div className="h-5 w-5 rounded bg-[#0F9D58] flex items-center justify-center text-white text-[9px] font-bold">S</div>
        <div className="text-xs font-medium text-[#1f1f1f]">leads 2026</div>
        <div className="ml-auto text-[10px] text-[#5f6368] font-mono">auto-synced</div>
      </div>
      <table className="w-full text-[9px] sm:text-xs text-[#1f1f1f]">
        <thead>
          <tr className="bg-[#f1f3f4] text-[#5f6368]">
            {headers.map((h) => (
              <th key={h} className="px-3 py-2 text-left font-medium border-r border-black/5 last:border-r-0">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-black/5">
              {r.map((c, j) => (
                <td key={j} className="px-1.5 sm:px-3 py-2 border-r border-black/5 last:border-r-0">{c}</td>
              ))}
            </tr>
          ))}
          <tr
            className="border-t border-black/5 bg-emerald-50"
            style={{ animation: `as-row-slide 0.6s cubic-bezier(0.65,0,0.35,1) 0.3s both` }}
          >
            {newRow.map((c, j) => (
              <td key={j} className="px-1.5 sm:px-3 py-2 border-r border-emerald-200/60 last:border-r-0 font-medium">
                {j === 0 && <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 align-middle" />}
                {c}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* ---------------- Toasts (persistent overlay) ---------------- */

function Toast({ app, color, text, delay }: { app: string; color: string; text: string; delay: string }) {
  return (
    <div
      className="rounded-xl border border-white/10 bg-[#0d1017]/95 backdrop-blur px-3 py-2.5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.95)]"
      style={{ animation: `as-toast ${CYCLE}s ease-in-out ${delay} infinite` }}
    >
      <div className="flex items-center gap-2">
        <span className="h-6 w-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white" style={{ background: color }}>
          {app[0]}
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-mono uppercase tracking-wider text-white/45">{app}</div>
          <div className="text-xs text-white/90 truncate">{text}</div>
        </div>
      </div>
    </div>
  );
}
