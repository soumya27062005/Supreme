import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, MobileTabBar, SiteFooter } from "@/components/site-nav";
import community from "@/assets/community-friends.jpg";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Supreme Icey Student Culture, Ambassadors & Reels" },
      { name: "description", content: "Campus partnerships, student ambassador program, community challenges, and the people who made Supreme Icey theirs." },
      { property: "og:title", content: "Supreme Icey Community" },
      { property: "og:description", content: "Built by students, for students. Ambassadors, challenges, takeovers, reels." },
      { property: "og:image", content: community },
    ],
  }),
  component: Community,
});

const programs = [
  { tag: "Ambassadors", title: "Crew Ambassador Program", copy: "10 students per campus. Free drinks every visit, exclusive merch drops, paid event shifts.", cta: "Apply" },
  { tag: "Campus Specials", title: "ID-Only Drops", copy: "Flash your student ID, unlock weekly limited drinks priced under ₹99 — only on your campus.", cta: "See This Week" },
  { tag: "Challenges", title: "The Smoke Challenge", copy: "Tag us in a reel with your pour. Best one each week wins a full event for their friends.", cta: "Enter" },
  { tag: "Takeovers", title: "Tuesday Open-Mic", copy: "Acoustic sets, spoken word, comedy. Sign up to perform — we'll cover your drinks.", cta: "Sign Up" },
];

const reels = [insta1, insta2, insta3, insta4, community, insta1];

const voices = [
  { quote: "We threw our entire farewell around their truck. It was the only thing anyone posted about.", who: "Tanvi · Nirma University" },
  { quote: "They actually remember my order. That's not normal for a food truck.", who: "Karan · IIM-A" },
  { quote: "The Tuesday open-mic literally changed my college life.", who: "Aanya · CEPT" },
];

function Community() {
  return (
    <div className="bg-cream text-charcoal font-sans min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="pt-28 pb-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">The People</span>
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4">
          A brand is just<br /><em>the people who choose it.</em>
        </h1>
        <p className="text-charcoal/60 mt-5 max-w-xl text-base md:text-lg">
          Supreme Icey was built on a sidewalk by students who stayed too late. Here's how you become part of it.
        </p>
      </section>

      {/* Programs */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-10">
        <div className="grid md:grid-cols-2 gap-4">
          {programs.map((p) => (
            <div key={p.title} className="p-6 md:p-8 rounded-3xl border border-charcoal/10 hover:border-amber transition group">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-deep">{p.tag}</span>
              <h3 className="font-display text-3xl md:text-4xl mt-3 leading-tight">{p.title}</h3>
              <p className="text-charcoal/65 mt-3">{p.copy}</p>
              <button className="mt-5 text-xs font-bold uppercase tracking-wider underline underline-offset-4 decoration-amber group-hover:text-amber-deep">
                {p.cta} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Reels */}
      <section className="py-14 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 flex justify-between items-end">
          <div>
            <span className="text-amber text-[11px] font-semibold uppercase tracking-[0.3em]">Real People · Real Reels</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">#supremeicey</h2>
          </div>
          <a href="https://instagram.com" className="text-xs uppercase tracking-widest font-semibold hover:text-amber">Follow →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
          {reels.map((src, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden group">
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-charcoal/90 to-transparent">
                <div className="text-[10px] font-bold uppercase tracking-widest text-amber">@user_{i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Voices */}
      <section className="px-4 sm:px-6 py-16 max-w-7xl mx-auto">
        <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">In Their Words</span>
        <h2 className="font-display text-4xl md:text-5xl mt-3 mb-10">Voices from the Crew.</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {voices.map((v) => (
            <blockquote key={v.who} className="p-6 rounded-2xl bg-cream-warm/60 border border-charcoal/10">
              <p className="font-display text-2xl leading-snug">"{v.quote}"</p>
              <footer className="mt-4 text-[10px] font-bold uppercase tracking-[0.25em] text-charcoal/55">— {v.who}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Seasonal */}
      <section className="px-4 sm:px-6 py-16 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-amber to-amber-deep p-8 md:p-14 text-charcoal">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em]">This Season · Monsoon Drop</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.05]">
            The Chai-Smoke Sessions.<br /><em>Every Friday in July.</em>
          </h2>
          <p className="mt-4 max-w-xl">Spiced chai meets cold smoke. A 4-week pop-up across 4 campuses. Crew members get first access.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/icey-crew" className="bg-charcoal text-cream px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs">Join Crew First</Link>
            <Link to="/find-truck" className="border border-charcoal px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-charcoal hover:text-cream transition">See Schedule</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <MobileTabBar />
    </div>
  );
}
