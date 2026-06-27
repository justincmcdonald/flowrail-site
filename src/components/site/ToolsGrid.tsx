/**
 * Tools grid for the home page. Renders real brand logos as small colored
 * tiles. Tools without a dedicated SVG fall back to a colored monogram tile
 * styled to look like an app icon, not a text pill.
 */

import type { ComponentType } from "react";
import {
  QuickBooksIcon,
  GoogleSheetsIcon,
  DiscordIcon,
  GoogleDriveIcon,
  GmailIcon,
  TrelloIcon,
  OneDriveIcon,
  OutlookIcon,
  Microsoft365Icon,
  MondayIcon,
} from "./BrandIcons";
import paypalIcon from "@/assets/paypal-icon-v2.png.asset.json";
import melioIcon from "@/assets/melio-icon.png.asset.json";
import slackIcon from "@/assets/slack-icon.png.asset.json";

type Tool = {
  name: string;
  /** Optional brand SVG. If absent, a monogram tile is rendered using `mono` + `color`. */
  icon?: ComponentType<{ className?: string }>;
  /** Optional image asset URL (e.g. for complex brand logos). */
  image?: string;
  /** Background color of the monogram tile (hex). */
  color?: string;
  /** 1-2 character monogram. */
  mono?: string;
  /** Optional override for monogram text color. */
  fg?: string;
};

const TOOLS: Tool[] = [
  { name: "QuickBooks",       icon: QuickBooksIcon },
  { name: "Google Sheets",    icon: GoogleSheetsIcon },
  { name: "Discord",          icon: DiscordIcon },
  { name: "Slack",            image: slackIcon.url },
  { name: "OneDrive",         icon: OneDriveIcon },
  { name: "Outlook",          icon: OutlookIcon },
  { name: "Gmail",            icon: GmailIcon },
  { name: "Melio",            image: melioIcon.url },
  { name: "Microsoft 365",    icon: Microsoft365Icon },
  { name: "PayPal",           image: paypalIcon.url },
  { name: "Google Drive",     icon: GoogleDriveIcon },
  { name: "Trello",           icon: TrelloIcon },
  { name: "monday.com",       icon: MondayIcon },
];


function MonoTile({ color, mono, fg = "#ffffff" }: { color: string; mono: string; fg?: string }) {
  return (
    <div
      className="h-9 w-9 rounded-lg flex items-center justify-center text-[15px] font-bold"
      style={{ background: color, color: fg }}
      aria-hidden
    >
      {mono}
    </div>
  );
}

export function ToolsGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <ul
        className={`grid gap-2.5 ${
          compact
            ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
            : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        }`}
        aria-label="Supported tools"
      >
        {TOOLS.map((t) => {
          return (
            <li
              key={t.name}
              className="flex items-center gap-3 rounded-xl border border-hairline bg-surface/40 px-3 py-2.5 transition hover:border-brand-violet/60 hover:bg-surface/70"
            >
              <div className="h-9 w-9 shrink-0 rounded-lg bg-white flex items-center justify-center overflow-hidden p-1">
                {t.image ? (
                  <img src={t.image} alt={`${t.name} logo`} className="h-full w-full object-contain" />
                ) : t.icon ? (
                  <t.icon className="h-full w-full" />
                ) : (
                  <MonoTile color={t.color!} mono={t.mono!} fg={t.fg} />
                )}
              </div>
              <span className="text-sm text-foreground/90 truncate">{t.name}</span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-xs text-muted-foreground">…and many more.</p>
    </div>
  );
}
