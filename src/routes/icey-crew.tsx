import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, MobileTabBar, SiteFooter } from "@/components/site-nav";

export const Route = createFileRoute("/icey-crew")({
  head: () => ({
    meta: [
      { title: "Icey Crew — Supreme Icey's Free Loyalty Program for Students" },
      { name: "description", content: "Join Icey Crew. Free to join. Earn smoke points every visit. Unlock secret menu drinks, VIP event access, and birthday rewards." },
      { property: "og:title", content: "Icey Crew — Free Loyalty Program" },
      { property: "og:description", content: "Visit 1, 5, 10, 25 — unlock secret drinks, VIP events & birthday rewards." },
    ],
  }),
  component: CrewPage,
});

const tiers = [
  { n: "01", visits: "Visit 1", name: "Initiate", color: "bg-cream-warm border-charcoal/10",
    perks: ["Free upgrade on first smokey", "Welcome sticker pack", "Birthday alert sign-up"] },
  { n: "05", visits: "Visit 5", name: "Regular", color: "bg-amber/10 border-amber/30",
    perks: ["Unlock 1 secret menu drink", "Skip-the-line at every truck", "10% off all desserts"] },
  { n: "10", visits: "Visit 10", name: "Insider", color: "bg-amber/25 border-amber",
    perks: ["Buy 1 get 1 every Tuesday", "Invite to monthly tasting nights", "Crew-only merch drops"] },
  { n: "25", visits: "Visit 25", name: "Icon", color: "bg-charcoal text-cream border-charcoal",
    perks: ["Name a seasonal drink with our chef", "VIP access at every event", "Free drink on your birthday for life"] },
];

const badges = [
  { name: "First Smoke", note: "Your first signature drink" },
  { name: "Night Owl", note: "5 visits after 10 PM" },
  { name: "Squad Leader", note: "Bring 4 new friends" },
  { name: "Festival Fan", note: "Catch us at 3 events" },
  { name: "Smoke Sommelier", note: "Try all 5 Smokey Heroes" },
  { name: "Birthday Royalty", note: "Celebrate with us" },
];

function CrewPage() {
  return (
    <div className="bg-cream text-charcoal font-sans min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="pt-28 pb-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">Icey Crew · Free Membership</span>
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4">
          The more you sip,<br /><em>the more you unlock.</em>
        </h1>
        <p className="text-charcoal/60 mt-5 max-w-xl text-base md:text-lg">
          Join in 30 seconds with your WhatsApp number. Every visit earns smoke points. Every tier unlocks something only the Crew can have.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#join" className="bg-charcoal text-cream px-7 py-4 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-charcoal-deep transition">Join Free</a>
          <a href="#tiers" className="border border-charcoal/30 px-7 py-4 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-charcoal hover:text-cream transition">See Rewards</a>
        </div>
      </section>

      {/* Progress sample */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-8">
        <div className="rounded-3xl bg-charcoal text-cream p-6 md:p-10">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-amber text-[11px] font-bold uppercase tracking-widest">Your Progress · Insider Tier</div>
              <div className="font-display text-3xl md:text-4xl mt-1">7 of 10 visits</div>
            </div>
            <div className="font-display text-5xl md:text-6xl text-amber">70%</div>
          </div>
          <div className="h-2 bg-cream/15 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber to-amber-deep" style={{ width: "70%" }} />
          </div>
          <p className="text-cream/60 text-sm mt-4">3 more visits to unlock BOGO Tuesdays and the next secret drink.</p>
        </div>
      </section>

      {/* Tiers */}
      <section id="tiers" className="px-4 sm:px-6 py-14 max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">The Ladder</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Four tiers. One obsession.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((t) => (
            <div key={t.n} className={`rounded-2xl border p-6 ${t.color}`}>
              <div className={`font-display text-5xl ${t.name === "Icon" ? "text-amber" : ""}`}>{t.n}</div>
              <div className={`text-[11px] font-bold uppercase tracking-widest mt-3 ${t.name === "Icon" ? "text-amber" : "text-amber-deep"}`}>{t.visits}</div>
              <div className="font-display text-2xl mt-1">{t.name}</div>
              <ul className={`mt-4 space-y-2 text-sm ${t.name === "Icon" ? "text-cream/80" : "text-charcoal/70"}`}>
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2"><span className={t.name === "Icon" ? "text-amber" : "text-amber-deep"}>·</span>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Badges */}
      <section className="px-4 sm:px-6 py-14 bg-cream-warm/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">Achievements</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Collect the badges.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {badges.map((b, i) => (
              <div key={b.name} className="flex items-center gap-4 p-4 rounded-2xl bg-cream border border-charcoal/10">
                <div className="size-12 shrink-0 rounded-full bg-gradient-to-br from-amber to-amber-deep grid place-items-center font-display text-cream text-lg">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <div className="font-bold uppercase text-sm tracking-tight">{b.name}</div>
                  <div className="text-charcoal/55 text-xs">{b.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="px-4 sm:px-6 py-16 max-w-2xl mx-auto scroll-mt-24 text-center">
        <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">Join the Crew</span>
        <h2 className="font-display text-4xl md:text-5xl mt-3 mb-4">30 seconds. Forever in.</h2>
        <p className="text-charcoal/60 mb-8">Scan your WhatsApp QR at any truck — or sign up here and we'll text your Crew ID.</p>
        <Link to="/find-truck" className="inline-block bg-amber text-charcoal px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:scale-[1.03] transition-transform">
          Find the Truck to Join
        </Link>
      </section>

      <SiteFooter />
      <MobileTabBar />
    </div>
  );
}
