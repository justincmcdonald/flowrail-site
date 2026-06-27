import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Logo } from "./Logo";

type NavItem =
  | { kind: "link"; to: string; label: string }
  | { kind: "dropdown"; label: string; children: { to: string; label: string }[] };

const NAV: NavItem[] = [
  { kind: "link", to: "/", label: "Home" },
  {
    kind: "dropdown",
    label: "Services",
    children: [
      { to: "/services/web-design", label: "Web Design" },
      { to: "/automations", label: "Automations" },
    ],
  },
  { kind: "link", to: "/pricing", label: "Pricing" },
  { kind: "link", to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);


  const mobileMenu = open ? (
    <div className="md:hidden fixed left-0 right-0 bottom-0 top-24 z-[1000] h-[calc(100dvh-6rem)] bg-background/98 backdrop-blur-xl overflow-y-auto shadow-2xl">
      <div className="px-6 py-6 flex flex-col gap-1">
        {NAV.map((n) =>
          n.kind === "link" ? (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="px-3 py-4 text-base text-muted-foreground hover:text-foreground min-h-[48px] border-b border-hairline/40"
            >
              {n.label}
            </Link>
          ) : (
            <div key={n.label} className="flex flex-col border-b border-hairline/40">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((o) => !o)}
                className="px-3 py-4 text-base text-muted-foreground hover:text-foreground min-h-[48px] inline-flex items-center justify-between w-full"
                aria-expanded={mobileServicesOpen}
              >
                {n.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path
                    d={mobileServicesOpen ? "M6 15l6-6 6 6" : "M6 9l6 6 6-6"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {mobileServicesOpen &&
                n.children.map((c) => (
                  <Link
                    key={c.to}
                    to={c.to}
                    onClick={() => setOpen(false)}
                    className="pl-7 pr-3 py-3 text-sm text-muted-foreground hover:text-foreground min-h-[44px]"
                  >
                    {c.label}
                  </Link>
                ))}
            </div>
          )
        )}
        <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-6 self-start">
          Book Strategy Call
        </Link>
      </div>
    </div>
  ) : null;

  return (
    <>
    <header className="relative z-50 border-b border-hairline bg-background/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-24 md:h-28 flex items-center justify-between">
        <Link to="/" className="flex items-center group shrink-0">
          <Logo size="lg" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) =>
            n.kind === "link" ? (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                className="px-4 py-2 text-sm transition-colors rounded-full"
              >
                {n.label}
              </Link>
            ) : (
              <div key={n.label} ref={dropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen((o) => !o)}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full inline-flex items-center gap-1"
                  aria-haspopup="menu"
                  aria-expanded={dropdownOpen}
                >
                  {n.label}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-[60]"
                    role="menu"
                  >
                    <div className="min-w-[200px] rounded-xl border border-hairline bg-background/95 backdrop-blur-xl p-1.5 shadow-2xl">
                      {n.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-3 py-2 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface/60 transition-colors"
                          role="menuitem"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </nav>


        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="btn-primary !py-2 !px-4 !text-sm">
            Book Strategy Call
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground min-h-[44px] min-w-[44px]"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

    </header>
    {mounted && mobileMenu ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
