import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Systems architecture and workflow consulting for businesses with growing
              operational complexity.
            </p>
          </div>

          <div>
            <p className="mono-label">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/services/web-design" className="text-muted-foreground hover:text-foreground">Web Design</Link></li>
              <li><Link to="/automations" className="text-muted-foreground hover:text-foreground">Automations</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="mono-label">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:hello@flowrail.io" className="text-muted-foreground hover:text-foreground">hello@flowrail.io</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-hairline flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} FlowRail. All rights reserved.</p>
          <p className="font-mono tracking-wider">Built for operators.</p>
        </div>
      </div>
    </footer>
  );
}
