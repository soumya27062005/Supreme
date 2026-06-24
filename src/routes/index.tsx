import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteNav, MobileTabBar, SiteFooter } from "@/components/site-nav";
import heroSmokey from "@/assets/hero-smokey.jpg";
import drinkMidnight from "@/assets/drink-midnight-mist.jpg";
import drinkAmber from "@/assets/drink-amber-ember.jpg";
import drinkJade from "@/assets/drink-jade-forest.jpg";
import community from "@/assets/community-friends.jpg";
import truck from "@/assets/food-truck.jpg";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Supreme Icey — Beyond the Sip, It's the Scene." },
      { name: "description", content: "Ahmedabad's premier student hangout. Signature smokey drinks, premium vibes, affordable memories. Find the truck tonight." },
      { property: "og:title", content: "Supreme Icey — Beyond the Sip, It's the Scene." },
      { property: "og:description", content: "Signature smokey drinks served from a premium food truck. Built for students, made for memories." },
      { property: "og:image", content: heroSmokey },
      { name: "twitter:image", content: heroSmokey },
    ],
  }),
  component: Index,
});

const drinks = [
  {
    name: "Midnight Mist",
    notes: "Lavender, Berry & Dry Ice Bloom",
    price: "₹149",
    img: drinkMidnight,
  },
  {
    name: "Amber Ember",
    notes: "Smoked Peach & Himalayan Salt",
    price: "₹129",
    img: drinkAmber,
  },
  {
    name: "Jade Forest",
    notes: "Matcha, Mint & Oak Smoke",
    price: "₹159",
    img: drinkJade,
  },
];

const journey = [
  { n: "01", label: "Food Trucks", status: "Live" },
  { n: "02", label: "Campus Kiosks", status: "2025" },
  { n: "03", label: "Lifestyle Cafés", status: "2026" },
  { n: "04", label: "Event Series", status: "Soon" },
];

const insta = [insta1, insta2, insta3, insta4];

function Index() {
  return (
    <div className="bg-cream text-charcoal font-sans">
      <SiteNav />

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-charcoal aspect-[4/5] md:aspect-[21/9] flex flex-col justify-end p-8 md:p-16 max-w-7xl mx-auto">
          <img
            src={heroSmokey}
            alt="Signature smokey beverage with amber glow"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block text-amber text-[11px] font-semibold uppercase tracking-[0.3em] mb-6">
              Ahmedabad · Est. 2024
            </span>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-cream leading-[0.9] mb-6">
              Beyond the Sip,<br />
              <em>It's the Scene.</em>
            </h1>
            <p className="text-cream/80 text-base md:text-xl max-w-md mb-8 leading-relaxed">
              Smokey crafts, premium vibes, affordable memories. The hangout you can't wait to come back to.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/find-truck"
                className="bg-amber text-charcoal px-7 py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm hover:scale-[1.03] transition-transform"
              >
                Find the Truck
              </Link>
              <Link
                to="/menu"
                className="border border-cream/30 text-cream px-7 py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-cream/10 transition"
              >
                See the Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Start Here — first-timer guide */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-8">
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { n: "01", t: "What is Icey?", c: "Smokey signature drinks served from a moving lounge.", to: "/menu" as const },
            { n: "02", t: "Where to find us", c: "We're at HL College Square tonight, until 11:30 PM.", to: "/find-truck" as const },
            { n: "03", t: "What to order first", c: "Midnight Mist + Smoked Brownie Jar. Trust us.", to: "/menu" as const },
          ].map((s) => (
            <Link key={s.n} to={s.to} className="p-5 rounded-2xl border border-charcoal/10 hover:border-amber transition block">
              <span className="font-display text-3xl text-amber-deep">{s.n}</span>
              <h3 className="font-bold uppercase tracking-tight mt-2">{s.t}</h3>
              <p className="text-charcoal/60 text-sm mt-1">{s.c}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Story */}
      <section id="story" className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">
              The Brand
            </span>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mt-4 mb-6">
              A lounge on wheels, built for the <em>after-class crowd.</em>
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
              Supreme Icey isn't another beverage brand. We're a hangout — engineered around signature smokey drinks, warm amber lighting, and the kind of nights you'll text your friends about tomorrow.
            </p>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Premium feel. Student prices. Zero compromise.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <img
              src={truck}
              alt="The Supreme Icey food truck"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
        <div className="border-y border-charcoal/10 py-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 sm:flex sm:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="size-2 bg-amber rounded-full animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-deep">
                Live Tonight
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display">HL College Square</h2>
            <p className="text-charcoal/60 mt-1 text-sm sm:text-base">
              Navrangpura · Serving until 11:30 PM
            </p>
          </div>
          <button className="shrink-0 flex items-center gap-2 bg-charcoal text-cream px-5 sm:px-6 py-3 rounded-full hover:bg-charcoal-deep transition">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Track Truck
            </span>
          </button>
        </div>
      </section>

      {/* Drinks */}
      <section id="drinks" className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">
              The Menu
            </span>
            <h2 className="font-display text-4xl md:text-6xl leading-tight mt-4">
              The Smokey<br /><em>Collection.</em>
            </h2>
          </div>
          <p className="text-charcoal/60 max-w-sm">
            Cold-pressed extraction, natural infusions, and a dry-ice finish. Built for the camera and the moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {drinks.map((d) => (
            <article key={d.name} className="group">
              <div className="overflow-hidden rounded-2xl bg-charcoal aspect-[4/5] mb-5">
                <img
                  src={d.img}
                  alt={d.name}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold uppercase tracking-tight">{d.name}</h3>
                  <p className="text-charcoal/60 text-sm mt-1">{d.notes}</p>
                </div>
                <span className="font-display text-2xl shrink-0">{d.price}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/menu" className="inline-block border border-charcoal/30 px-7 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-charcoal hover:text-cream transition">
            Full Menu →
          </Link>
        </div>
      </section>

      {/* Community */}
      <section className="px-4 sm:px-6 py-20 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden order-2 md:order-1">
            <img
              src={community}
              alt="Friends hanging out at Supreme Icey"
              width={1280}
              height={1280}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-amber text-[11px] font-semibold uppercase tracking-[0.3em]">
              Community
            </span>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mt-4 mb-6">
              You'll bring friends.<br />
              <em className="text-amber">Then you'll bring more.</em>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-8">
              Every Tuesday is open-mic. Every Friday is a takeover. Every weekend is somebody's birthday. We don't sell drinks — we sell the reason you stayed out late.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-cream/10">
              <div>
                <div className="font-display text-4xl text-amber">12k+</div>
                <div className="text-[11px] uppercase tracking-widest text-cream/50 mt-1">
                  Cups Poured
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-amber">38</div>
                <div className="text-[11px] uppercase tracking-widest text-cream/50 mt-1">
                  Campus Stops
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-amber">4.9</div>
                <div className="text-[11px] uppercase tracking-widest text-cream/50 mt-1">
                  Google Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Booking */}
      <section id="events" className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
        <div className="bg-cream-warm rounded-3xl p-8 md:p-16 grid md:grid-cols-[1.5fr_1fr] gap-10 items-center">
          <div>
            <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">
              Private Bookings
            </span>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mt-4 mb-4">
              Bring the smoke to your <em>fest, fresher's, or birthday.</em>
            </h2>
            <p className="text-charcoal/70 text-base md:text-lg leading-relaxed">
              We park up, plug in the amber lights, and turn any space into the night your friends will talk about for months.
            </p>
          </div>
          <div>
            <a
              href="#"
              className="block text-center bg-charcoal text-cream px-8 py-5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-charcoal-deep transition"
            >
              Book the Truck
            </a>
            <p className="text-center text-charcoal/50 text-xs mt-3 uppercase tracking-widest">
              Replies within 24 hrs
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="px-4 sm:px-6 py-24 bg-charcoal text-cream">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <span className="text-amber text-[11px] font-semibold uppercase tracking-[0.3em]">
            The Road Ahead
          </span>
          <h2 className="font-display text-4xl md:text-7xl leading-[1.05] mt-6">
            From one truck to a<br />
            <em className="text-amber">national youth anthem.</em>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {journey.map((j) => (
            <div key={j.n} className="border-l-2 border-amber/40 pl-6 py-2">
              <div className="font-display text-4xl mb-2">{j.n}</div>
              <div className="text-xs uppercase tracking-widest text-cream/50 mb-1">
                {j.label}
              </div>
              <div className="text-amber text-xs uppercase tracking-widest font-semibold">
                {j.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-4 sm:px-6 py-20 max-w-5xl mx-auto text-center">
        <p className="font-display text-3xl md:text-5xl leading-tight">
          "I came for the smoke. I stayed for the people.
          <em className="text-amber-deep"> Now I can't stop coming back.</em>"
        </p>
        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-charcoal/50">
          — Aanya · CEPT University
        </p>
      </section>

      {/* Instagram */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 flex justify-between items-end">
          <div>
            <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">
              On the Gram
            </span>
            <h2 className="font-display text-3xl md:text-4xl mt-2">@supreme.icey</h2>
          </div>
          <a href="#" className="text-xs uppercase tracking-widest font-semibold hover:text-amber-deep">
            Follow →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
          {insta.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img
                src={src}
                alt="Supreme Icey moments"
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
      <MobileTabBar />
    </div>
  );
}
