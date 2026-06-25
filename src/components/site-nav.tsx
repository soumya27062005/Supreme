import { Link } from "@tanstack/react-router";

const links = [
  { to: "/menu", label: "Menu" },
  { to: "/find-truck", label: "Find Truck" },
  { to: "/events", label: "Events" },
  { to: "/icey-crew", label: "Icey Crew" },
  { to: "/community", label: "Community" },
] as const;

export function SiteNav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-cream/85 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
        <Link to="/" className="font-display text-xl sm:text-2xl font-semibold tracking-tight uppercase">
          Supreme Icey
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-amber-deep transition"
              activeProps={{ className: "text-amber-deep" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/find-truck"
          className="bg-charcoal text-cream px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider hover:bg-charcoal-deep transition"
        >
          Find Truck
        </Link>
      </div>
    </nav>
  );
}

export function MobileTabBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-charcoal text-cream border-t border-cream/10">
      <div className="grid grid-cols-5 text-[10px] font-semibold uppercase tracking-wider">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="py-3 text-center hover:text-amber transition"
            activeProps={{ className: "text-amber" }}
          >
            {l.label.split(" ")[0]}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-4 sm:px-6 py-16 pb-24 md:pb-16 bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="font-display text-5xl md:text-6xl leading-none mb-6">Supreme<br />Icey</h2>
            <p className="max-w-sm text-cream/60 italic text-lg">
              Memorable hangout experiences. Students can actually afford them.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber">Explore</span>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link to="/menu" className="hover:text-amber transition">Menu</Link></li>
                <li><Link to="/find-truck" className="hover:text-amber transition">Find Truck</Link></li>
                <li><Link to="/icey-crew" className="hover:text-amber transition">Icey Crew</Link></li>
              </ul>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber">Reach Us</span>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link to="/events" className="hover:text-amber transition">Book Event</Link></li>
                <li><Link to="/community" className="hover:text-amber transition">Community</Link></li>
                <li><a href="https://instagram.com" className="hover:text-amber transition">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-cream/40">
          <span>© 2026 Supreme Icey Co.</span>
          <span>Built for the next generation</span>
        </div>
      </div>
    </footer>
  );
}
