/**
 * Brand SVG icon kit. Each component renders at 100% of its container.
 * Use them inside a fixed-size tile (e.g. 34px square).
 * Gemini has a unique gradient id per instance so multiple renders don't collide.
 */

import { useId } from "react";

type IconProps = { className?: string };

export function N8nIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="5" cy="12" r="2.3" fill="#EA4B71" />
      <circle cx="12" cy="6.5" r="2.3" fill="#EA4B71" />
      <circle cx="12" cy="17.5" r="2.3" fill="#EA4B71" />
      <circle cx="19" cy="12" r="2.3" fill="#EA4B71" />
      <path
        d="M6.6 11 10.4 7.6M13.6 7.6 17.4 11M6.6 13 10.4 16.4M13.6 16.4 17.4 13"
        stroke="#EA4B71"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function QuickBooksIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="12" r="10" fill="#2CA01C" />
      <text
        x="12"
        y="16.3"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="9.5"
        fontWeight="700"
        fill="#ffffff"
      >
        qb
      </text>
    </svg>
  );
}

export function GoogleSheetsIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="5" y="2" width="14" height="20" rx="2" fill="#0F9D58" />
      <rect x="8" y="7.5" width="8" height="9" rx="0.8" fill="#ffffff" />
      <path d="M8 11h8M8 14h8M12 7.5v9" stroke="#0F9D58" strokeWidth="1" />
    </svg>
  );
}

export function SlackIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="10.4" y="3" width="3.2" height="9" rx="1.6" fill="#36C5F0" />
      <rect x="3" y="10.4" width="9" height="3.2" rx="1.6" fill="#2EB67D" />
      <rect x="10.4" y="12" width="3.2" height="9" rx="1.6" fill="#ECB22E" />
      <rect x="12" y="10.4" width="9" height="3.2" rx="1.6" fill="#E01E5A" />
    </svg>
  );
}

export function DiscordIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="24" height="24" rx="6" fill="#5865F2" />
      <ellipse cx="9.3" cy="13" rx="1.4" ry="1.8" fill="#ffffff" />
      <ellipse cx="14.7" cy="13" rx="1.4" ry="1.8" fill="#ffffff" />
      <path
        d="M7 9.3c3-1.5 7-1.5 10 0"
        stroke="#ffffff"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GeminiIcon({ className = "" }: IconProps) {
  const id = useId().replace(/[:]/g, "");
  const gid = `gemini-grad-${id}`;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4285F4" />
          <stop offset="1" stopColor="#9B72F2" />
        </linearGradient>
      </defs>
      <path
        d="M12 2c.4 4.9 4.1 8.6 9 9-4.9.4-8.6 4.1-9 9-.4-4.9-4.1-8.6-9-9 4.9-.4 8.6-4.1 9-9Z"
        fill={`url(#${gid})`}
      />
    </svg>
  );
}

export function DatabaseIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M5 5.5v13c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-13"
        fill="#6366F1"
      />
      <ellipse cx="12" cy="5.5" rx="7" ry="2.8" fill="#818CF8" />
      <ellipse
        cx="12"
        cy="12"
        rx="7"
        ry="2.8"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}

export function GoogleDriveIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M9 3 2.5 14.5h6.5L15.5 3z" fill="#34A853" />
      <path d="M9 3l6.5 11.5H22L15.5 3z" fill="#FBBC04" />
      <path d="M2.5 14.5 5.8 20h12.4l-3.3-5.5z" fill="#4285F4" />
    </svg>
  );
}

export function GmailIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" fill="#ffffff" />
      <path
        d="M3 7.5 12 13.5 21 7.5"
        fill="none"
        stroke="#EA4335"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 18.5V7.2" stroke="#4285F4" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M21 18.5V7.2" stroke="#34A853" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function OneDriveIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M9.1 9.6a4.8 4.8 0 0 1 8.7 1.7 3.7 3.7 0 0 1 .6-.1 3.7 3.7 0 0 1 0 7.4H7.1a4.4 4.4 0 0 1-.8-8.7 5.2 5.2 0 0 1 2.8-.3Z" fill="#0078D4" />
      <path d="M9.1 9.6a4.8 4.8 0 0 1 6.9-2.4 6.7 6.7 0 0 1 1.8 4.1c-2.9.2-5.3 1.6-7.1 4.1L6.3 9.9a5.2 5.2 0 0 1 2.8-.3Z" fill="#1490DF" />
      <path d="M7.1 18.6h11.3a3.7 3.7 0 0 0 0-7.4c-.2 0-.4 0-.6.1-3.4.2-6.1 1.8-8.1 4.9-1.2-1.1-2.6-1.6-4.2-1.5a4.4 4.4 0 0 0 1.6 3.9Z" fill="#0364B8" />
    </svg>
  );
}

export function OutlookIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="8" y="5" width="12" height="14" rx="1.8" fill="#106EBE" />
      <path d="M9.2 7.3h9.5v2.9l-4.8 3.2-4.7-3.2Z" fill="#ffffff" opacity="0.95" />
      <path d="m9.2 10.2 4.7 3.3 4.8-3.3v6.5H9.2Z" fill="#DFF1FF" />
      <rect x="3" y="7.2" width="10" height="9.8" rx="1.8" fill="#0078D4" />
      <text x="8" y="14.1" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="6.8" fontWeight="700" fill="#ffffff">O</text>
    </svg>
  );
}

export function MelioIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="24" height="24" rx="6" fill="#ffffff" />
      <circle cx="6.2" cy="8.2" r="2.2" fill="#8367FF" />
      <circle cx="11.8" cy="8.2" r="2.2" fill="#31C7FF" />
      <circle cx="17.4" cy="8.2" r="2.2" fill="#111827" />
      <text x="12" y="17.5" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="5.4" fontWeight="700" fill="#111827">melio</text>
    </svg>
  );
}

export function Microsoft365Icon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="2" y="2" width="9.5" height="9.5" rx="0.8" fill="#F25022" />
      <rect x="12.5" y="2" width="9.5" height="9.5" rx="0.8" fill="#7FBA00" />
      <rect x="2" y="12.5" width="9.5" height="9.5" rx="0.8" fill="#00A4EF" />
      <rect x="12.5" y="12.5" width="9.5" height="9.5" rx="0.8" fill="#FFB900" />
    </svg>
  );
}

export function PayPalIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="24" height="24" rx="6" fill="#003087" />
      <path
        d="M7.2 17.6h1.8l.7-4.5H8.7c-1.5 0-2.2-.8-2.4-1.9-.2-1.1.3-2.3 1.2-3 1-.7 2.3-.5 3.2.4.7.7 1.1 1.7 1.1 2.8 0 2.5-1.5 4.5-3.6 5.4-.7.3-1.4.4-2 .4z"
        fill="#0070E0"
      />
      <path
        d="M9.8 17.6h1.7l.8-4.5h-1.1c-1.4 0-2.1-.8-2.3-1.9-.2-1.1.3-2.3 1.2-3 1-.7 2.3-.5 3.2.4.7.7 1.1 1.7 1.1 2.8 0 2.5-1.5 4.5-3.6 5.4-.7.3-1.4.4-2 .4z"
        fill="#FFFFFF"
        opacity="0.9"
      />
      <text
        x="17"
        y="16"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="5.5"
        fontWeight="700"
        fill="#FFFFFF"
      >
        P
      </text>
    </svg>
  );
}


export function MondayIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="24" height="24" rx="6" fill="#ffffff" />
      <path d="M5.2 15.8 9.1 8.9" stroke="#FF3D57" strokeWidth="3.1" strokeLinecap="round" />
      <path d="M11.5 15.8 15.4 8.9" stroke="#FFCB00" strokeWidth="3.1" strokeLinecap="round" />
      <circle cx="18.7" cy="14.3" r="1.8" fill="#00CA72" />
    </svg>
  );
}

export function ESignatureIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect
        x="5"
        y="2.5"
        width="14"
        height="19"
        rx="2"
        fill="#ffffff"
        stroke="#6366F1"
        strokeWidth="1.4"
      />
      <path d="M8 9h8M8 12h5" stroke="#6366F1" strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M7.5 17c1.5-2.2 2.5-2.2 3 0s1.6 2 3-1.2"
        stroke="#6366F1"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TrelloIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="24" height="24" rx="4" fill="#0079BF" />
      <rect x="4.5" y="4.5" width="6" height="11" rx="1" fill="#ffffff" />
      <rect x="13.5" y="4.5" width="6" height="7" rx="1" fill="#ffffff" />
    </svg>
  );
}

export type BrandKey =
  | "n8n"
  | "quickbooks"
  | "sheets"
  | "slack"
  | "discord"
  | "gemini"
  | "database"
  | "drive"
  | "gmail"
  | "onedrive"
  | "outlook"
  | "melio"
  | "microsoft365"
  | "monday"
  | "paypal"
  | "esignature"
  | "trello";

export function BrandIcon({ brand, className = "" }: { brand: BrandKey; className?: string }) {
  switch (brand) {
    case "n8n":
      return <N8nIcon className={className} />;
    case "quickbooks":
      return <QuickBooksIcon className={className} />;
    case "sheets":
      return <GoogleSheetsIcon className={className} />;
    case "slack":
      return <SlackIcon className={className} />;
    case "discord":
      return <DiscordIcon className={className} />;
    case "gemini":
      return <GeminiIcon className={className} />;
    case "database":
      return <DatabaseIcon className={className} />;
    case "drive":
      return <GoogleDriveIcon className={className} />;
    case "gmail":
      return <GmailIcon className={className} />;
    case "onedrive":
      return <OneDriveIcon className={className} />;
    case "outlook":
      return <OutlookIcon className={className} />;
    case "melio":
      return <MelioIcon className={className} />;
    case "microsoft365":
      return <Microsoft365Icon className={className} />;
    case "monday":
      return <MondayIcon className={className} />;
    case "paypal":
      return <PayPalIcon className={className} />;
    case "esignature":
      return <ESignatureIcon className={className} />;
    case "trello":
      return <TrelloIcon className={className} />;
  }
}
