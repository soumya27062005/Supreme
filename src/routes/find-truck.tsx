import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, MobileTabBar, SiteFooter } from "@/components/site-nav";
import truck from "@/assets/food-truck.jpg";

export const Route = createFileRoute("/find-truck")({
  head: () => ({
    meta: [
      { title: "Find the Truck — Supreme Icey Live Location & Weekly Schedule" },
      { name: "description", content: "Live truck location, today's stop, weekly schedule, and upcoming campus events. Open until 11:30 PM tonight." },
      { property: "og:title", content: "Find the Supreme Icey Truck Tonight" },
      { property: "og:description", content: "Live location, schedule, and open status — updated daily." },
      { property: "og:image", content: truck },
    ],
  }),
  component: FindTruck,
});

const week = [
  { day: "Mon", spot: "HL College Square", area: "Navrangpura", time: "5:00 – 11:30 PM", live: true },
  { day: "Tue", spot: "CEPT North Gate", area: "Navrangpura", time: "5:00 – 11:30 PM", live: false },
  { day: "Wed", spot: "Law Garden Strip", area: "Ellisbridge", time: "6:00 PM – Late", live: false },
  { day: "Thu", spot: "IIM-A Back Gate", area: "Vastrapur", time: "5:30 – 11:30 PM", live: false },
  { day: "Fri", spot: "Sindhu Bhavan Road", area: "Bodakdev", time: "6:00 PM – 12:30 AM", live: false },
  { day: "Sat", spot: "Riverfront East", area: "Sabarmati", time: "5:00 PM – 1:00 AM", live: false },
  { day: "Sun", spot: "Karnavati Club Lane", area: "Satellite", time: "5:00 – 11:00 PM", live: false },
];

const upcoming = [
  { date: "Sat · Mar 22", title: "Nirma Spring Fest", note: "Pop-up till midnight" },
  { date: "Wed · Apr 02", title: "DAIICT Open Mic Night", note: "Smoke + acoustic sets" },
  { date: "Sat · Apr 12", title: "CEPT Farewell Takeover", note: "Private — invite only" },
];

function FindTruck() {
  return (
    <div className="bg-cream text-charcoal font-sans min-h-screen">
      <SiteNav />

      {/* Live status hero */}
      <section className="pt-24 pb-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-charcoal aspect-[4/5] md:aspect-[21/9] flex flex-col justify-end p-8 md:p-14">
          <img src={truck} alt="Supreme Icey truck" className="absolute inset-0 w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="size-2.5 bg-amber rounded-full animate-pulse" />
              <span className="text-amber text-[11px] font-bold uppercase tracking-[0.3em]">Open Now · Until 11:30 PM</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-cream leading-[0.95]">
              We're parked at<br /><em>HL College Square.</em>
            </h1>
            <p className="text-cream/75 mt-5 text-base md:text-lg max-w-md">
              Navrangpura · Opposite the main gate · Look for the amber lights and the smoke.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://maps.google.com/?q=HL+College+Ahmedabad" target="_blank" rel="noreferrer" className="bg-amber text-charcoal px-7 py-4 rounded-full font-bold uppercase tracking-wider text-xs hover:scale-[1.03] transition-transform">
                Open in Maps
              </a>
              <a href="https://wa.me/919999999999" className="border border-cream/30 text-cream px-7 py-4 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-cream/10 transition">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Status strip */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            ["Status", "Open"],
            ["ETA Wait", "4 min"],
            ["Weather", "26° Clear"],
            ["Closes", "11:30 PM"],
          ].map(([k, v]) => (
            <div key={k} className="border border-charcoal/10 rounded-2xl p-4">
              <div className="text-[10px] uppercase tracking-widest text-charcoal/50">{k}</div>
              <div className="font-display text-2xl mt-1">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-12">
        <div className="mb-8">
          <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">This Week</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">The Weekly Route.</h2>
        </div>
        <div className="space-y-2">
          {week.map((d) => (
            <div key={d.day} className={`grid grid-cols-[auto_1fr_auto] sm:grid-cols-[80px_1fr_1fr_auto] gap-3 sm:gap-4 items-center p-4 rounded-2xl border ${d.live ? "border-amber bg-amber/10" : "border-charcoal/10"}`}>
              <div className="font-display text-2xl w-12">{d.day}</div>
              <div className="min-w-0">
                <div className="font-bold uppercase tracking-tight truncate">{d.spot}</div>
                <div className="text-charcoal/55 text-xs sm:hidden">{d.area} · {d.time}</div>
              </div>
              <div className="hidden sm:block text-charcoal/60 text-sm">{d.area}</div>
              <div className="hidden sm:block text-charcoal/60 text-sm">{d.time}</div>
              {d.live && (
                <span className="hidden sm:inline-block col-start-4 text-[10px] font-bold uppercase tracking-widest bg-amber text-charcoal px-2 py-1 rounded-full">Live</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-charcoal/50 text-xs mt-4">
          Schedule may shift for weather or private bookings — WhatsApp updates go out by 4 PM daily.
        </p>
      </section>

      {/* Upcoming Pop-ups */}
      <section className="px-4 sm:px-6 py-16 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-amber text-[11px] font-semibold uppercase tracking-[0.3em]">Upcoming Stops</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Where we'll be next.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {upcoming.map((e) => (
              <div key={e.title} className="border border-cream/15 rounded-2xl p-6 hover:bg-cream/5 transition">
                <div className="text-amber text-[11px] font-bold uppercase tracking-widest mb-3">{e.date}</div>
                <div className="font-display text-2xl leading-tight mb-2">{e.title}</div>
                <div className="text-cream/60 text-sm">{e.note}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/events" className="bg-amber text-charcoal px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs">Book the Truck</Link>
            <a href="https://wa.me/919999999999" className="border border-cream/30 px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-cream/10">Get WhatsApp Alerts</a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <MobileTabBar />
    </div>
  );
}
