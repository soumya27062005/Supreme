import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav, MobileTabBar, SiteFooter } from "@/components/site-nav";
import community from "@/assets/community-friends.jpg";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import { toast } from "sonner";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Book the Truck — Supreme Icey Event Catering & Pop-Ups" },
      { name: "description", content: "Bring Supreme Icey to your college fest, freshers, farewell, concert, or corporate event. Custom smoke drink stations from ₹12K." },
      { property: "og:title", content: "Book Supreme Icey for Your Event" },
      { property: "og:description", content: "College fests, freshers, farewells, concerts, corporate — custom smokey drink stations." },
      { property: "og:image", content: community },
    ],
  }),
  component: EventsPage,
});

const eventTypes = [
  { name: "College Fest", from: "₹18,000", note: "4 hrs · 200 cups · branded station" },
  { name: "Freshers / Farewell", from: "₹12,000", note: "3 hrs · 120 cups · 3 signature drinks" },
  { name: "Concert / Festival", from: "₹35,000", note: "6 hrs · 500+ cups · full smoke show" },
  { name: "Corporate Event", from: "₹22,000", note: "3 hrs · 150 cups · uniformed crew" },
  { name: "Private / Birthday", from: "₹9,000", note: "2 hrs · 80 cups · personalized menu" },
  { name: "Brand Activation", from: "Custom", note: "Co-branded cups, reels, photographer" },
];

const past = [insta1, insta2, insta3, insta4, community];

function EventsPage() {
  const [type, setType] = useState("College Fest");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Inquiry received — we'll WhatsApp you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <div className="bg-cream text-charcoal font-sans min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="pt-24 pb-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-charcoal aspect-[4/5] md:aspect-[21/9] flex flex-col justify-end p-8 md:p-14">
          <img src={community} alt="Supreme Icey at a campus event" className="absolute inset-0 w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <span className="text-amber text-[11px] font-bold uppercase tracking-[0.3em]">Book the Truck</span>
            <h1 className="font-display text-5xl md:text-7xl text-cream leading-[0.95] mt-4">
              The night your campus<br /><em>still talks about.</em>
            </h1>
            <p className="text-cream/75 mt-5 text-base md:text-lg max-w-md">
              We bring the truck, the smoke, the amber lights, and a uniformed crew. You bring the people.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-6">
        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          {[["120+", "Events"], ["40+", "Campuses"], ["98%", "Rebook"]].map(([n, l]) => (
            <div key={l} className="text-center p-6 rounded-2xl border border-charcoal/10">
              <div className="font-display text-4xl md:text-5xl text-amber-deep">{n}</div>
              <div className="text-[10px] uppercase tracking-widest text-charcoal/55 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Types */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-14">
        <div className="mb-8">
          <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Pick your moment.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {eventTypes.map((e) => (
            <button
              key={e.name}
              onClick={() => { setType(e.name); document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" }); }}
              className={`text-left p-6 rounded-2xl border transition ${type === e.name ? "border-amber bg-amber/10" : "border-charcoal/10 hover:border-charcoal/30"}`}
            >
              <div className="flex justify-between items-start gap-3">
                <h3 className="font-bold uppercase tracking-tight text-lg">{e.name}</h3>
                <span className="font-display text-xl whitespace-nowrap">{e.from}</span>
              </div>
              <p className="text-charcoal/60 text-sm mt-2">{e.note}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Past events gallery */}
      <section className="py-12 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <span className="text-amber text-[11px] font-semibold uppercase tracking-[0.3em]">Receipts</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Past nights.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-2">
          {past.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry */}
      <section id="inquiry" className="px-4 sm:px-6 py-16 max-w-3xl mx-auto scroll-mt-24">
        <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">Inquire</span>
        <h2 className="font-display text-4xl md:text-5xl mt-3 mb-2">Tell us about the night.</h2>
        <p className="text-charcoal/60 mb-8">We reply on WhatsApp within 24 hours with a custom quote.</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required name="name" maxLength={80} placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-cream-warm/40 focus:outline-none focus:border-amber" />
            <input required name="phone" type="tel" maxLength={15} placeholder="WhatsApp number" className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-cream-warm/40 focus:outline-none focus:border-amber" />
          </div>
          <input required name="college" maxLength={120} placeholder="College / Organization" className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-cream-warm/40 focus:outline-none focus:border-amber" />
          <div className="grid sm:grid-cols-2 gap-4">
            <select name="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-cream-warm/40 focus:outline-none focus:border-amber">
              {eventTypes.map((e) => <option key={e.name}>{e.name}</option>)}
            </select>
            <input required name="date" type="date" className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-cream-warm/40 focus:outline-none focus:border-amber" />
          </div>
          <input name="headcount" type="number" min={20} max={5000} placeholder="Expected headcount" className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-cream-warm/40 focus:outline-none focus:border-amber" />
          <textarea name="notes" maxLength={800} rows={4} placeholder="Vibe, location, anything special…" className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-cream-warm/40 focus:outline-none focus:border-amber" />
          <button disabled={submitting} className="w-full bg-charcoal text-cream py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-charcoal-deep transition disabled:opacity-50">
            {submitting ? "Sending…" : "Send Inquiry"}
          </button>
        </form>
      </section>

      <SiteFooter />
      <MobileTabBar />
    </div>
  );
}
