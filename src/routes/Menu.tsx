import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, MobileTabBar, SiteFooter } from "@/components/site-nav";
import drinkMidnight from "@/assets/drink-midnight-mist.jpg";
import drinkAmber from "@/assets/drink-amber-ember.jpg";
import drinkJade from "@/assets/drink-jade-forest.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Supreme Icey Smokey Drinks, Iceys, Shakes & Desserts" },
      { name: "description", content: "The Smokey Collection, Icey Teas, Thick Shakes & Signature Desserts. Curated for the camera. Priced for the dorm." },
      { property: "og:title", content: "The Supreme Icey Menu" },
      { property: "og:description", content: "Signature smokey drinks built around brand, visual, operational & margin fit." },
      { property: "og:image", content: drinkMidnight },
    ],
  }),
  component: MenuPage,
});

type Item = {
  name: string;
  notes: string;
  price: string;
  tag?: "Hero" | "Bestseller" | "Seasonal" | "Crew Only";
  img?: string;
};

const smokey: Item[] = [
  { name: "Midnight Mist", notes: "Lavender, blackberry, dry-ice bloom", price: "₹149", tag: "Hero", img: drinkMidnight },
  { name: "Amber Ember", notes: "Smoked peach, Himalayan salt, citrus", price: "₹129", tag: "Bestseller", img: drinkAmber },
  { name: "Jade Forest", notes: "Matcha, mint, oak smoke", price: "₹159", img: drinkJade },
  { name: "Crimson Cloud", notes: "Rose, pomegranate, hickory mist", price: "₹149", tag: "Seasonal" },
  { name: "Golden Hour", notes: "Mango, saffron, vanilla smoke", price: "₹139" },
];

const tea: Item[] = [
  { name: "Peach Ginger Icey", notes: "Cold-brewed black tea, peach, ginger", price: "₹99", tag: "Bestseller" },
  { name: "Hibiscus Berry Icey", notes: "Hibiscus, mixed berries, lime", price: "₹109" },
  { name: "Lychee Green Icey", notes: "Green tea, lychee, basil", price: "₹109" },
  { name: "Classic Lemon Icey", notes: "Black tea, lemon, mint", price: "₹89" },
];

const shakes: Item[] = [
  { name: "Cookies & Smoke", notes: "Belgian cookies, vanilla, smoke kiss", price: "₹169", tag: "Bestseller" },
  { name: "Choco Storm", notes: "Triple chocolate, brownie chunks", price: "₹179" },
  { name: "Strawberry Cheesecake", notes: "Cheesecake bites, fresh berries", price: "₹169" },
  { name: "Biscoff Dream", notes: "Biscoff swirl, caramel ribbon", price: "₹179" },
];

const desserts: Item[] = [
  { name: "Smoked Brownie Jar", notes: "Warm brownie, vanilla ice, smoke", price: "₹129", tag: "Hero" },
  { name: "Amber Cheesecake Cup", notes: "Burnt caramel cheesecake", price: "₹119" },
  { name: "Midnight Tiramisu", notes: "Espresso, mascarpone, cocoa dust", price: "₹139" },
];

const tagStyle: Record<NonNullable<Item["tag"]>, string> = {
  Hero: "bg-amber text-charcoal",
  Bestseller: "bg-charcoal text-cream",
  Seasonal: "bg-cream border border-amber-deep text-amber-deep",
  "Crew Only": "bg-amber-deep text-cream",
};

function Section({ id, eyebrow, title, copy, items }: { id: string; eyebrow: string; title: string; copy: string; items: Item[] }) {
  return (
    <section id={id} className="px-4 sm:px-6 py-16 max-w-7xl mx-auto scroll-mt-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
        <div>
          <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">{eyebrow}</span>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mt-3">{title}</h2>
        </div>
        <p className="text-charcoal/60 max-w-sm text-sm md:text-base">{copy}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((i) => (
          <article key={i.name} className="group flex gap-4 p-4 rounded-2xl border border-charcoal/10 hover:border-amber transition bg-cream-warm/40">
            {i.img ? (
              <div className="size-24 sm:size-28 shrink-0 rounded-xl overflow-hidden bg-charcoal">
                <img src={i.img} alt={i.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            ) : (
              <div className="size-24 sm:size-28 shrink-0 rounded-xl bg-gradient-to-br from-charcoal to-charcoal-deep grid place-items-center">
                <span className="font-display text-3xl text-amber">{i.name[0]}</span>
              </div>
            )}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-2">
                  <h3 className="font-bold uppercase tracking-tight text-base flex-1">{i.name}</h3>
                  <span className="font-display text-xl shrink-0">{i.price}</span>
                </div>
                <p className="text-charcoal/60 text-sm mt-1 leading-snug">{i.notes}</p>
              </div>
              {i.tag && (
                <span className={`mt-2 self-start text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${tagStyle[i.tag]}`}>{i.tag}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MenuPage() {
  return (
    <div className="bg-cream text-charcoal font-sans min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="pt-28 pb-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <span className="text-amber-deep text-[11px] font-semibold uppercase tracking-[0.3em]">The Menu</span>
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4">
          Four collections.<br /><em>One obsession.</em>
        </h1>
        <p className="text-charcoal/60 mt-5 max-w-xl text-base md:text-lg">
          Built lean for the truck. Tested for the camera. Priced for the after-class crowd.
        </p>
      </section>

      {/* Start Here for first-timers */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-4">
        <div className="rounded-3xl bg-charcoal text-cream p-6 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <span className="text-amber text-[11px] font-semibold uppercase tracking-[0.3em]">First time? Start here</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 leading-tight">
              Order the <em className="text-amber">Midnight Mist</em>, add the <em className="text-amber">Smoked Brownie Jar.</em>
            </h2>
            <p className="text-cream/60 mt-3 text-sm md:text-base">
              Our most-shared pairing. The smoke is the show — film the pour, sip slow.
            </p>
          </div>
          <a href="#smokey" className="bg-amber text-charcoal px-6 py-4 rounded-full font-bold uppercase tracking-wider text-xs whitespace-nowrap hover:scale-[1.03] transition-transform">
            See Heroes
          </a>
        </div>
      </section>

      {/* Sticky category bar */}
      <div className="sticky top-[60px] z-40 bg-cream/90 backdrop-blur-md border-y border-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto no-scrollbar text-[11px] font-bold uppercase tracking-widest">
          {[
            ["smokey", "Smokey"],
            ["tea", "Icey Tea"],
            ["shakes", "Thick Shakes"],
            ["desserts", "Desserts"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} className="px-3 py-2 rounded-full border border-charcoal/15 hover:bg-charcoal hover:text-cream transition whitespace-nowrap">{label}</a>
          ))}
        </div>
      </div>

      <Section id="smokey" eyebrow="Primary · The Hero" title="Signature Smokey." copy="Cold-pressed extraction, natural infusions, dry-ice finish. The reason you came." items={smokey} />
      <Section id="tea" eyebrow="Secondary" title="Icey Tea." copy="Cold-brewed teas, light and refreshing — built for long study sessions." items={tea} />
      <Section id="shakes" eyebrow="Third" title="Thick Shakes." copy="Loaded, layered, never thin. Made to share, finished with a smoke kiss." items={shakes} />
      <Section id="desserts" eyebrow="Fourth" title="Signature Desserts." copy="Three desserts. Each one perfected. Pair with any smokey drink." items={desserts} />

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 max-w-5xl mx-auto text-center">
        <p className="font-display text-3xl md:text-5xl leading-tight">
          Know what you want? <em className="text-amber-deep">Find the truck tonight.</em>
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/find-truck" className="bg-charcoal text-cream px-7 py-4 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-charcoal-deep transition">Find the Truck</Link>
          <Link to="/icey-crew" className="border border-charcoal/30 px-7 py-4 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-charcoal hover:text-cream transition">Join Icey Crew</Link>
        </div>
      </section>

      <SiteFooter />
      <MobileTabBar />
    </div>
  );
}
