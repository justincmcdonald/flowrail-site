import type { ReactNode } from "react";
// Cinematic hero animation for the Web Design page.
// Scenes: floating phone → desktop browser → SaaS dashboard → layered app
// stack → back to phone. Glassy, parallax, seamless loop.

const CYCLE = 20;

export function WebDesignShowcase() {
  return (
    <div className="relative h-[360px] sm:h-[520px] lg:h-[620px] w-full overflow-hidden rounded-3xl border border-hairline bg-[#06070b]">
      {/* Ambient lighting */}
      <div
        className="absolute inset-0 opacity-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 30%, rgba(139,63,255,0.22), transparent 60%), radial-gradient(50% 50% at 80% 70%, rgba(47,155,255,0.20), transparent 60%)",
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

      {/* Drifting accent orbs for parallax */}
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-[#8B3FFF]/20 blur-3xl animate-[sd-orb_14s_ease-in-out_infinite]" />
      <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-[#2F9BFF]/20 blur-3xl animate-[sd-orb_18s_ease-in-out_-6s_infinite_reverse]" />

      <Scene delay="0s">
        <BrowserScene />
      </Scene>
      <Scene delay="5s">
        <DashboardScene />
      </Scene>
      <Scene delay="10s">
        <LayeredScene />
      </Scene>
      <Scene delay="15s">
        <BrowserScene variant="alt" />
      </Scene>

      <style>{`
        @keyframes sd-scene {
          0%   { opacity: 0; transform: scale(1.05) translateY(8px); filter: blur(8px); }
          5%   { opacity: 1; transform: scale(1)    translateY(0);   filter: blur(0); }
          20%  { opacity: 1; transform: scale(1)    translateY(0);   filter: blur(0); }
          25%  { opacity: 0; transform: scale(0.96) translateY(-8px);filter: blur(8px); }
          100% { opacity: 0; transform: scale(0.96) translateY(-8px);filter: blur(8px); }
        }
        @keyframes sd-rotate-y {
          0%, 100% { transform: perspective(1200px) rotateY(-10deg) rotateX(4deg); }
          50%      { transform: perspective(1200px) rotateY(10deg)  rotateX(-2deg); }
        }
        @keyframes sd-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes sd-float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50%      { transform: translateY(-6px) translateX(4px); }
        }
        @keyframes sd-orb {
          0%, 100% { transform: translate(0,0); }
          50%      { transform: translate(40px,-30px); }
        }
        @keyframes sd-bar { 0% { transform: scaleY(0.2); } 100% { transform: scaleY(1); } }
        @keyframes sd-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes sd-line-draw { 0% { stroke-dashoffset: 300; } 100% { stroke-dashoffset: 0; } }
      `}</style>
    </div>
  );
}

function Scene({ delay, children }: { delay: string; children: ReactNode }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-10"
      style={{
        animation: `sd-scene ${CYCLE}s cubic-bezier(0.65,0,0.35,1) ${delay} infinite`,
        opacity: 0,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}

/* ---------------- PHONE ---------------- */

function PhoneScene({ variant }: { variant?: "alt" }) {
  return (
    <div className="relative" style={{ animation: "sd-float 6s ease-in-out infinite" }}>
      <div style={{ animation: "sd-rotate-y 8s ease-in-out infinite", transformStyle: "preserve-3d" }}>
        <PhoneMock variant={variant} />
        {/* reflection */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[180px] lg:w-[220px] h-12 opacity-30 blur-sm"
          style={{
            background: "radial-gradient(60% 100% at 50% 0%, rgba(139,63,255,0.5), transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}

function PhoneMock({ variant }: { variant?: "alt" }) {
  const accent = variant === "alt" ? "#2F9BFF" : "#8B3FFF";
  return (
    <div className="w-[150px] sm:w-[200px] lg:w-[240px] aspect-[9/19] rounded-[30px] sm:rounded-[36px] border border-white/20 bg-gradient-to-b from-[#1a1d26] to-[#0b0d12] p-2 shadow-[0_50px_120px_-20px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)]">
      <div className="h-full w-full rounded-[28px] overflow-hidden relative bg-gradient-to-b from-[#0f1218] to-[#06080d]">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-black" />
        <div className="pt-9 px-4 flex flex-col gap-2.5 h-full">
          <div className="flex items-center justify-between">
            <div className="h-1.5 w-10 rounded-full" style={{ background: accent }} />
            <div className="h-1 w-5 bg-white/30 rounded-full" />
          </div>
          <div className="mt-1">
            <div className="h-2.5 w-4/5 bg-white rounded" />
            <div className="mt-1.5 h-2.5 w-3/5 bg-white/90 rounded" />
          </div>
          <div className="space-y-1">
            <div className="h-1 w-full bg-white/20 rounded-full" />
            <div className="h-1 w-5/6 bg-white/20 rounded-full" />
          </div>
          <div className="mt-1 h-6 w-24 rounded-md flex items-center justify-center text-[8px] text-white font-medium" style={{ background: `linear-gradient(90deg, ${accent}, #2F9BFF)` }}>
            Get started
          </div>
          <div
            className="mt-2 rounded-lg overflow-hidden relative h-20"
            style={{
              background: `linear-gradient(135deg, ${accent}30, transparent), linear-gradient(90deg, #11131a, #1a1d26)`,
            }}
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                backgroundSize: "200% 100%",
                animation: "sd-shimmer 3s linear infinite",
              }}
            />
          </div>
          <div className="mt-1 grid grid-cols-3 gap-1.5">
            {[0,1,2,3,4,5].map(i => (
              <div key={i} className="aspect-square rounded bg-white/8 border border-white/5" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- BROWSER ---------------- */

function BrowserScene({ variant }: { variant?: "alt" }) {
  const accent = variant === "alt" ? "#2F9BFF" : "#8B3FFF";
  const title = variant === "alt" ? "circle-l.co" : "northbay.studio";
  return (
    <div className="w-full max-w-[760px]" style={{ animation: "sd-float-slow 7s ease-in-out infinite" }}>
      <BrowserMock title={title}>
        <div className="grid grid-cols-12 gap-3 h-full">
          <div className="col-span-7 flex flex-col gap-2 justify-center">
            <div className="h-1.5 w-12 rounded-full" style={{ background: accent }} />
            <div className="h-4 w-4/5 bg-white rounded" />
            <div className="h-4 w-3/5 bg-white rounded" />
            <div className="mt-1 h-1.5 w-full bg-white/25 rounded-full" />
            <div className="h-1.5 w-5/6 bg-white/25 rounded-full" />
            <div className="mt-2 flex gap-2">
              <div className="h-7 w-24 rounded-md" style={{ background: `linear-gradient(90deg, ${accent}, #2F9BFF)` }} />
              <div className="h-7 w-20 rounded-md border border-white/15" />
            </div>
          </div>
          <div className="col-span-5 rounded-lg border border-white/10 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${accent}40, #2F9BFF20)` }}>
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.18), transparent)",
                backgroundSize: "200% 100%",
                animation: "sd-shimmer 4s linear infinite",
              }}
            />
          </div>
        </div>
      </BrowserMock>
    </div>
  );
}

function BrowserMock({ children, title = "northbay.studio" }: { children: ReactNode; title?: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-[#0b0d12] shadow-[0_50px_120px_-20px_rgba(0,0,0,0.95)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-[#11131a]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/70" />
        <div className="mx-auto px-3 py-1 rounded-md bg-black/40 text-[10px] font-mono text-white/50">{title}</div>
      </div>
      <div className="p-6 sm:p-8 aspect-[16/9]">{children}</div>
    </div>
  );
}

/* ---------------- DASHBOARD ---------------- */

function DashboardScene() {
  return (
    <div className="w-full max-w-[780px]" style={{ animation: "sd-float-slow 7s ease-in-out infinite" }}>
      <BrowserMock title="app.northbay.studio/dashboard">
        <div className="grid grid-cols-12 gap-3 h-full">
          {/* sidebar */}
          <div className="col-span-2 flex flex-col gap-2">
            <div className="h-1.5 w-3/4 bg-[#8B3FFF] rounded-full" />
            {[0,1,2,3,4].map(i => (
              <div key={i} className={`h-2 rounded-full ${i === 1 ? "bg-white/70 w-full" : "bg-white/20 w-5/6"}`} />
            ))}
          </div>
          {/* main */}
          <div className="col-span-10 flex flex-col gap-3">
            <div className="grid grid-cols-3 gap-3">
              <Stat label="MRR"     value="$48.2k" delta="+12%" />
              <Stat label="Active"  value="1,284"  delta="+4.3%" />
              <Stat label="Churn"   value="0.8%"   delta="−0.2%" />
            </div>
            <div className="flex-1 rounded-lg border border-white/10 bg-white/[0.02] p-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">Revenue</div>
                <div className="text-[10px] font-mono text-emerald-400">+18% MoM</div>
              </div>
              <Chart />
            </div>
          </div>
        </div>
      </BrowserMock>
    </div>
  );
}

function Stat({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
      <div className="text-[9px] font-mono uppercase tracking-wider text-white/40">{label}</div>
      <div className="mt-1 text-base font-semibold text-white">{value}</div>
      <div className="text-[10px] text-emerald-400">{delta}</div>
    </div>
  );
}

function Chart() {
  const bars = [40, 55, 48, 62, 70, 60, 78, 72, 88, 82, 95, 90];
  return (
    <div className="absolute inset-x-3 bottom-3 top-10 flex items-end gap-1.5">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t origin-bottom"
          style={{
            height: `${h}%`,
            background: `linear-gradient(180deg, #8B3FFF, #2F9BFF)`,
            animation: `sd-bar 0.9s cubic-bezier(0.65,0,0.35,1) ${0.2 + i * 0.05}s both`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------------- LAYERED ---------------- */

function LayeredScene() {
  return (
    <div className="relative w-full max-w-[760px] h-full flex items-center justify-center">
      <div
        className="absolute"
        style={{ transform: "perspective(1400px) rotateY(-22deg) rotateX(8deg) translateX(-30%) translateY(10%)", animation: "sd-float-slow 8s ease-in-out infinite" }}
      >
        <div className="w-[220px] sm:w-[280px] lg:w-[340px]">
          <BrowserMock title="lumen.studio">
            <div className="grid grid-cols-2 gap-2 h-full">
              <div className="rounded bg-gradient-to-br from-[#F59E0B]/40 to-transparent border border-white/10" />
              <div className="flex flex-col gap-2 justify-center">
                <div className="h-2 w-4/5 bg-white rounded" />
                <div className="h-1 w-full bg-white/30 rounded-full" />
                <div className="h-1 w-5/6 bg-white/30 rounded-full" />
                <div className="mt-1 h-4 w-16 rounded bg-[#F59E0B]" />
              </div>
            </div>
          </BrowserMock>
        </div>
      </div>

      <div
        className="relative z-10"
        style={{ transform: "perspective(1400px) rotateY(0deg) translateY(-5%)", animation: "sd-float 6s ease-in-out infinite" }}
      >
        <div className="w-[240px] sm:w-[300px] lg:w-[380px]">
          <BrowserMock title="northbay.studio">
            <div className="flex flex-col gap-2 h-full">
              <div className="h-1.5 w-10 rounded-full bg-[#8B3FFF]" />
              <div className="h-3 w-4/5 bg-white rounded" />
              <div className="h-3 w-3/5 bg-white rounded" />
              <div className="mt-auto flex gap-2">
                <div className="h-6 w-20 rounded bg-gradient-to-r from-[#8B3FFF] to-[#2F9BFF]" />
                <div className="h-6 w-16 rounded border border-white/15" />
              </div>
            </div>
          </BrowserMock>
        </div>
      </div>

      <div
        className="absolute"
        style={{ transform: "perspective(1400px) rotateY(22deg) rotateX(8deg) translateX(35%) translateY(8%)", animation: "sd-float-slow 8s ease-in-out -2s infinite" }}
      >
        <PhoneMock variant="alt" />
      </div>
    </div>
  );
}
