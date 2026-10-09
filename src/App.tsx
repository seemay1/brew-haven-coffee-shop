import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";

type IconName =
  | "arrow"
  | "bag"
  | "beans"
  | "clock"
  | "close"
  | "facebook"
  | "heart"
  | "home"
  | "instagram"
  | "leaf"
  | "mail"
  | "map"
  | "menu"
  | "minus"
  | "phone"
  | "plus";

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    bag: <><path d="M6 8h12l1 12H5L6 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    beans: <><path d="M15.5 4.5c4 4 2.8 10.4-1.2 14.4-2.3 2.3-6.8 1.6-9.2-.8-2.4-2.4-3.1-6.9-.8-9.2 4-4 7.2-7.2 11.2-4.4Z" /><path d="M6.5 17.5c1-4 3-5 5.5-6.5 2-1.2 3-3 3.5-6.5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
    facebook: <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1Z" />,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    leaf: <><path d="M20 4C12 4 6 8 6 15c0 3 2 5 5 5 7 0 9-8 9-16Z" /><path d="M4 21c3-6 7-9 13-13" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    map: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    minus: <path d="M5 12h14" />,
    phone: <path d="M21 16.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.8 2 2 0 0 1 3.1 1.6h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L7.1 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  };

  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

const menuItems = [
  {
    name: "Velvet Latte",
    description: "Silky steamed milk, double espresso, and a cloud of microfoam.",
    price: 165,
    image: "https://storage.cornercoffeestore.com/2021/08/red-velvet-latte-close-up_CWIS_Shutterstock.jpg",
    tag: "Best seller",
  },
  {
    name: "Espresso",
    description: "A rich and bold shot of freshly brewed espresso.",
    price: 120,
    image: "https://www.sharmispassions.com/wp-content/uploads/2012/07/espresso-coffee-recipe022.jpg",
    tag: "Classic favorite",
  },
  {
    name: "Irish Coffee",
    description: "Bold coffee, brown sugar, and a luxurious layer of fresh cream.",
    price: 195,
    image: "https://www.tasteofhome.com/wp-content/uploads/2025/01/Irish-Coffee_EXPS_FT25_37413_JR_0110_1.jpg?fit=750%2C750",
    tag: "House special",
  },
  {
    name: "Dark Mocha",
    description: "Deep cocoa, rich espresso, and steamed milk with chocolate dust.",
    price: 185,
    image: "https://gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-1-683x1024.jpg",
    tag: "Rich & bold",
  },
  {
    name: "Caramel Frappuccino",
    description: "Creamy blended coffee, caramel ribbons, and whipped cream.",
    price: 205,
    image: "https://dinnerthendessert.com/wp-content/uploads/2024/06/Starbucks-Caramel-Frappucino-5.jpg",
    tag: "Crowd favorite",
  },
  {
    name: "Classic Affogato",
    description: "Vanilla gelato drowned in a warm, freshly pulled espresso.",
    price: 175,
    image: "https://www.recipetineats.com/tachyon/2023/06/Affogato_0.jpg",
    tag: "Sweet finish",
  },
];

const reviews = [
  { name: "Mika Santos", role: "Weekend regular", quote: "The kind of place where one cup quietly turns into an entire afternoon. Their latte is beautifully balanced.", initials: "MS" },
  { name: "Paolo Reyes", role: "Local creative", quote: "Warm service, thoughtful coffee, and the coziest work corner in the neighborhood. Brew Haven feels like home.", initials: "PR" },
  { name: "Ana Lim", role: "Coffee enthusiast", quote: "Their dark mocha is a must. Rich without being too sweet, and every detail of the café feels considered.", initials: "AL" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className={`group flex items-center gap-3 ${light ? "text-[#fffaf1]" : "text-[#2f1e17]"}`} aria-label="Brew Haven home">
      <span className={`grid size-10 place-items-center rounded-full transition-transform group-hover:-rotate-12 ${light ? "bg-[#c98b52] text-[#2f1e17]" : "bg-[#4a2c20] text-[#fffaf1]"}`}>
        <Icon name="beans" className="size-5" />
      </span>
      <span>
        <span className="block font-display text-xl font-bold leading-none tracking-tight">Brew Haven</span>
        <span className={`mt-1 block text-[9px] font-bold uppercase tracking-[0.28em] ${light ? "text-[#d6bda1]" : "text-[#9a6b4d]"}`}>Coffee & comfort</span>
      </span>
    </a>
  );
}

function SectionTitle({ eyebrow, title, body, align = "center", light = false }: { eyebrow: string; title: string; body?: string; align?: "left" | "center"; light?: boolean }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className={`mb-3 text-xs font-bold uppercase tracking-[0.28em] ${light ? "text-[#d7a36e]" : "text-[#a85f32]"}`}>{eyebrow}</p>
      <h2 className={`font-display text-4xl font-semibold leading-[1.05] sm:text-5xl ${light ? "text-[#fffaf1]" : "text-[#2f1e17]"}`}>{title}</h2>
      {body && <p className={`mt-5 leading-7 ${light ? "text-[#d6c7b8]" : "text-[#725f53]"}`}>{body}</p>}
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const cartCount = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  const cartTotal = menuItems.reduce((sum, item) => sum + item.price * (cart[item.name] || 0), 0);

  useEffect(() => {
    document.body.style.overflow = cartOpen || mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [cartOpen, mobileOpen]);

  function addToCart(name: string) {
    setCart((current) => ({ ...current, [name]: (current[name] || 0) + 1 }));
    setCartOpen(true);
  }

  function updateQuantity(name: string, delta: number) {
    setCart((current) => {
      const next = Math.max(0, (current[name] || 0) + delta);
      const updated = { ...current, [name]: next };
      if (!next) delete updated[name];
      return updated;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbf6ee] text-[#382920]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#6f513e]/10 bg-[#fbf6ee]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
          <Logo />
          <div className="hidden items-center gap-8 lg:flex">
            {["Home", "Menu", "About Us", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" us", "").replace(" ", "-")}`} className="text-sm font-semibold text-[#564338] transition-colors hover:text-[#a85f32]">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setCartOpen(true)} className="relative grid size-11 place-items-center rounded-full text-[#3f2a20] transition-colors hover:bg-[#efe3d4]" aria-label={`Open cart with ${cartCount} items`}>
              <Icon name="bag" />
              {cartCount > 0 && <span className="absolute right-0 top-0 grid size-5 place-items-center rounded-full bg-[#b96537] text-[10px] font-bold text-white">{cartCount}</span>}
            </button>
            <a href="#menu" className="hidden rounded-full bg-[#4a2c20] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(74,44,32,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#6a3f2c] sm:inline-flex">Order Now</a>
            <button onClick={() => setMobileOpen(true)} className="grid size-11 place-items-center rounded-full text-[#3f2a20] hover:bg-[#efe3d4] lg:hidden" aria-label="Open navigation">
              <Icon name="menu" />
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="relative flex min-h-[760px] items-center overflow-hidden bg-[#2d1c16] pt-[78px] text-white">
          <img src="https://images.unsplash.com/photo-1762657440603-67275ae3f7f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1800" alt="Barista pouring steamed milk into freshly brewed coffee" className="absolute inset-0 h-full w-full object-cover object-[center_45%] opacity-65" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,20,15,.96)_0%,rgba(34,20,15,.73)_48%,rgba(34,20,15,.15)_100%)]" />
          <div className="absolute -left-28 bottom-0 size-72 rounded-full bg-[#bb6f3f]/20 blur-3xl" />
          <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#f1c898] backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-[#db9861]" /> Your neighborhood coffee ritual
              </div>
              <h1 className="font-display text-6xl font-semibold leading-[0.93] tracking-[-0.03em] text-[#fffaf1] sm:text-7xl lg:text-[96px]">
                Your Perfect Cup, <span className="italic text-[#e3ad77]">Anytime.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#e5d8cb] sm:text-xl">
                Freshly brewed coffee, handcrafted with care, made to brighten your day.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#menu" className="group inline-flex items-center gap-3 rounded-full bg-[#c87b46] px-7 py-4 font-bold text-[#25150f] shadow-[0_12px_35px_rgba(196,115,63,.28)] transition-all hover:-translate-y-1 hover:bg-[#e09a62]">
                  View Menu <Icon name="arrow" className="size-5 transition-transform group-hover:translate-x-1" />
                </a>
                <button onClick={() => setCartOpen(true)} className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/20">
                  <Icon name="bag" /> Order Now
                </button>
              </div>
              <div className="mt-14 flex items-center gap-5 text-sm text-[#d9c8b9]">
                <div className="flex -space-x-2">
                  {["MS", "PL", "AR"].map((initials, index) => <span key={initials} className={`grid size-10 place-items-center rounded-full border-2 border-[#352119] text-[10px] font-bold text-white ${["bg-[#a36a4a]", "bg-[#7e543e]", "bg-[#b48868]"][index]}`}>{initials}</span>)}
                </div>
                <p><span className="font-bold text-white">4.9</span> from our happy regulars</p>
              </div>
            </div>
          </div>
          <a href="#menu" aria-label="Scroll to menu" className="absolute bottom-8 right-8 hidden rounded-full border border-white/20 p-3 text-white/70 transition-colors hover:text-white md:block">
            <span className="block h-10 w-px bg-gradient-to-b from-white to-transparent" />
          </a>
        </section>

        <section id="menu" className="relative py-24 sm:py-32">
          <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-[#dbb78b]/20 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle eyebrow="Made for slow moments" title="Our Favorites" body="From silky classics to indulgent signatures, every cup is thoughtfully crafted from beans we’re proud to serve." />
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {menuItems.map((item) => (
                <article
                  key={item.name}
                  className="group overflow-hidden rounded-[28px] border border-[#6f513e]/10 bg-[#fffaf4] shadow-[0_18px_50px_rgba(70,43,28,.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(70,43,28,.14)]"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <span className="absolute left-5 top-5 rounded-full bg-[#fffaf1]/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#5b3827] backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex flex-col p-7">
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="font-display text-3xl font-semibold text-[#342119]">
                        {item.name}
                      </h3>

                      <p className="shrink-0 text-lg font-bold text-[#a85f32]">
                        ₱{item.price}
                      </p>
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-6 text-[#78655a]">
                      {item.description}
                    </p>

                    <button
                      onClick={() => addToCart(item.name)}
                      className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#4a2c20]/20 px-5 py-3.5 text-sm font-bold text-[#4a2c20] transition-all hover:border-[#4a2c20] hover:bg-[#4a2c20] hover:text-white"
                    >
                      <Icon name="plus" className="size-4" /> Add to Order
                    </button>
                  </div>
                </article>
              ))}
              <aside className="relative flex min-h-80 flex-col justify-end overflow-hidden rounded-[28px] bg-[#b76538] p-8 text-white">
                <div className="absolute -right-12 -top-12 size-52 rounded-full border-[32px] border-white/10" />
                <Icon name="beans" className="mb-auto size-10 text-[#f6c897]" />
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f6c897]">Brew Haven Club</p>
                <h3 className="mt-3 font-display text-4xl font-semibold leading-none">Every 7th cup is on us.</h3>
                <p className="mt-4 text-sm leading-6 text-white/80">Ask our barista for your complimentary coffee card on your next visit.</p>
              </aside>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#efe4d5] py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative">
              <div className="overflow-hidden rounded-[36px]">
                <img src="https://images.unsplash.com/photo-1565650839149-2c48a094196c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1200" alt="Warm and inviting Brew Haven café interior" className="h-[540px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
              </div>
              <div className="absolute -bottom-7 right-5 max-w-56 rounded-3xl bg-[#fffaf1] p-6 shadow-[0_18px_50px_rgba(70,43,28,.16)] sm:-right-7">
                <p className="font-display text-5xl font-semibold text-[#aa6035]">7+</p>
                <p className="mt-1 text-sm font-semibold leading-5 text-[#554138]">Years of brewing comfort, one cup at a time.</p>
              </div>
            </div>
            <div className="lg:pl-10">
              <SectionTitle eyebrow="Our little corner" title="About Brew Haven" align="left" />
              <p className="mt-7 text-lg leading-8 text-[#67564b]">Brew Haven is a cozy local coffee shop made for life’s slower, better moments. We prepare every cup fresh, with beans selected for their depth, character, and warmth.</p>
              <p className="mt-5 leading-7 text-[#78675d]">Whether you’re catching up with friends, settling in to study, finding focus for the workday, or simply taking a quiet pause, there’s a seat here waiting for you.</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm font-bold text-[#54382a]">
                <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#bc6b3e]" /> Locally roasted beans</span>
                <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#bc6b3e]" /> Warm, welcoming service</span>
              </div>
              <a href="#contact" className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#4a2c20] px-7 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#673d2c]">
                Learn More <Icon name="arrow" className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#342019] py-24 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle eyebrow="The Brew Haven way" title="A little more care in every detail." light body="Good coffee is only the beginning. We’ve made every part of your visit feel considered, comfortable, and worth returning to." />
            <div className="mt-14 grid gap-px overflow-hidden rounded-[30px] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "beans" as IconName, title: "Freshly Brewed", text: "Ground and pulled to order, so every cup tastes its best." },
                { icon: "heart" as IconName, title: "Made With Care", text: "Handcrafted by baristas who genuinely love what they do." },
                { icon: "leaf" as IconName, title: "Quality Ingredients", text: "Thoughtfully sourced beans, fresh milk, and honest flavors." },
                { icon: "home" as IconName, title: "Cozy Atmosphere", text: "A calm, warm space for good conversations and quiet focus." },
              ].map((feature) => (
                <article key={feature.title} className="group bg-[#342019] p-8 transition-colors hover:bg-[#3e271e]">
                  <span className="grid size-14 place-items-center rounded-2xl bg-[#c47845]/15 text-[#e4a16f] transition-transform group-hover:-rotate-6 group-hover:scale-110"><Icon name={feature.icon} className="size-7" /></span>
                  <h3 className="mt-7 font-display text-2xl font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#cbbbad]">{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle eyebrow="Notes from our regulars" title="Loved by the neighborhood" body="The best part of what we do is seeing familiar faces return, again and again." />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <article key={review.name} className={`rounded-[28px] p-8 sm:p-9 ${index === 1 ? "bg-[#b76538] text-white lg:-translate-y-4" : "border border-[#70503b]/10 bg-[#fffaf4] text-[#3b281f]"}`}>
                  <div className={`text-sm tracking-[0.18em] ${index === 1 ? "text-[#ffdaa9]" : "text-[#b56536]"}`} aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote className="mt-7 font-display text-2xl font-medium leading-9">“{review.quote}”</blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <span className={`grid size-12 place-items-center rounded-full text-xs font-bold ${index === 1 ? "bg-white/15" : "bg-[#ead8c4] text-[#6d422d]"}`}>{review.initials}</span>
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className={`mt-0.5 text-xs ${index === 1 ? "text-white/70" : "text-[#8a776b]"}`}>{review.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#eee1d1] py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <SectionTitle eyebrow="Come say hello" title="Your favorite seat is waiting." align="left" />
              <p className="mt-6 max-w-lg leading-7 text-[#6e5b50]">Drop in for your daily ritual, meet a friend, or find your focus. We’d love to make you something wonderful.</p>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {[
                  { icon: "map" as IconName, label: "Find us", value: "Dauin Negros Oriental" },
                  { icon: "clock" as IconName, label: "Opening hours", value: "Mon–Sun, 8:00 AM–9:00 PM" },
                  { icon: "phone" as IconName, label: "Call us", value: "+63 917 845 2739" },
                  { icon: "mail" as IconName, label: "Email us", value: "hello@brewhaven.ph" },
                ].map((detail) => (
                  <div key={detail.label} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#dec6aa] text-[#754329]"><Icon name={detail.icon} className="size-5" /></span>
                    <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a15b35]">{detail.label}</p><p className="mt-1 text-sm font-semibold leading-6 text-[#4a362b]">{detail.value}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex gap-3">
                {(["instagram", "facebook"] as IconName[]).map((social) => <a key={social} href="#" aria-label={social} className="grid size-11 place-items-center rounded-full border border-[#4c3124]/15 text-[#513328] transition-all hover:-translate-y-1 hover:bg-[#4a2c20] hover:text-white"><Icon name={social} className="size-5" /></a>)}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="rounded-[32px] bg-[#fffaf4] p-7 shadow-[0_20px_60px_rgba(70,43,28,.09)] sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="text-sm font-bold text-[#50382c]">Name
                  <input required name="name" placeholder="Your name" className="mt-2.5 w-full rounded-2xl border border-[#694b39]/15 bg-[#f8efe5] px-5 py-4 font-normal outline-none transition focus:border-[#b66a3d] focus:ring-4 focus:ring-[#b66a3d]/10" />
                </label>
                <label className="text-sm font-bold text-[#50382c]">Email
                  <input required type="email" name="email" placeholder="you@email.com" className="mt-2.5 w-full rounded-2xl border border-[#694b39]/15 bg-[#f8efe5] px-5 py-4 font-normal outline-none transition focus:border-[#b66a3d] focus:ring-4 focus:ring-[#b66a3d]/10" />
                </label>
              </div>
              <label className="mt-6 block text-sm font-bold text-[#50382c]">Message
                <textarea required name="message" rows={5} placeholder="What’s on your mind?" className="mt-2.5 w-full resize-none rounded-2xl border border-[#694b39]/15 bg-[#f8efe5] px-5 py-4 font-normal outline-none transition focus:border-[#b66a3d] focus:ring-4 focus:ring-[#b66a3d]/10" />
              </label>
              <button type="submit" className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#4a2c20] px-7 py-4 font-bold text-white transition-all hover:bg-[#683e2b]">
                Send Message <Icon name="arrow" className="size-5 transition-transform group-hover:translate-x-1" />
              </button>
              {submitted && <p role="status" className="mt-4 text-center text-sm font-semibold text-[#8b4d2d]">Thanks for reaching out. We’ll be in touch soon.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#291914] py-16 text-[#d7c6b8]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.5fr_1fr_1fr]">
            <div><Logo light /><p className="mt-6 max-w-sm text-sm leading-6 text-[#bfae9f]">Thoughtful coffee, genuine comfort, and a warm corner to call your own.</p></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e2a36f]">Explore</p><div className="mt-5 grid gap-3 text-sm">{["Home", "Menu", "About", "Contact"].map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">{link}</a>)}</div></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e2a36f]">Follow along</p><div className="mt-5 flex gap-3">{(["instagram", "facebook"] as IconName[]).map((social) => <a key={social} href="#" aria-label={social} className="grid size-10 place-items-center rounded-full bg-white/5 transition-colors hover:bg-[#b66538] hover:text-white"><Icon name={social} className="size-4" /></a>)}</div></div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-xs text-[#968579] sm:flex-row sm:items-center sm:justify-between"><p>© 2025 Brew Haven. All rights reserved.</p><p>Freshly brewed in Quezon City.</p></div>
        </div>
      </footer>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#2b1a14] p-6 text-white lg:hidden">
          <div className="flex items-center justify-between"><Logo light /><button onClick={() => setMobileOpen(false)} className="grid size-11 place-items-center rounded-full bg-white/10" aria-label="Close navigation"><Icon name="close" /></button></div>
          <div className="flex h-[75vh] flex-col justify-center gap-5">
            {["Home", "Menu", "About", "Contact"].map((item, index) => <a key={item} onClick={() => setMobileOpen(false)} href={`#${item.toLowerCase()}`} className="flex items-center gap-5 border-b border-white/10 pb-5 font-display text-4xl"><span className="font-sans text-xs text-[#c98754]">0{index + 1}</span>{item}</a>)}
          </div>
        </div>
      )}

      <div className={`fixed inset-0 z-50 transition ${cartOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!cartOpen}>
        <button onClick={() => setCartOpen(false)} className={`absolute inset-0 bg-[#20120d]/55 backdrop-blur-sm transition-opacity ${cartOpen ? "opacity-100" : "opacity-0"}`} aria-label="Close cart" />
        <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#fffaf4] p-6 shadow-2xl transition-transform duration-500 sm:p-8 ${cartOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between border-b border-[#5d412f]/10 pb-6">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#aa6138]">Your order</p><h2 className="mt-1 font-display text-3xl font-semibold">A cup of comfort</h2></div>
            <button onClick={() => setCartOpen(false)} className="grid size-11 place-items-center rounded-full bg-[#f0e3d5] transition-colors hover:bg-[#e4d2bf]" aria-label="Close cart"><Icon name="close" /></button>
          </div>
          <div className="flex-1 overflow-y-auto py-6">
            {cartCount === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center"><span className="grid size-20 place-items-center rounded-full bg-[#f0e2d2] text-[#9d5a36]"><Icon name="bag" className="size-8" /></span><h3 className="mt-6 font-display text-3xl font-semibold">Your cart is cozy, but empty.</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[#7c695d]">Add one of our favorites and we’ll start preparing it with care.</p><button onClick={() => setCartOpen(false)} className="mt-7 rounded-full bg-[#4a2c20] px-6 py-3 text-sm font-bold text-white">Explore the menu</button></div>
            ) : (
              <div className="space-y-5">
                {menuItems.filter((item) => cart[item.name]).map((item) => (
                  <div key={item.name} className="flex gap-4">
                    <img src={item.image} alt="" className="size-20 rounded-2xl object-cover" />
                    <div className="min-w-0 flex-1"><div className="flex justify-between gap-3"><h3 className="font-display text-lg font-semibold">{item.name}</h3><p className="text-sm font-bold text-[#a65e36]">₱{item.price * cart[item.name]}</p></div><div className="mt-3 inline-flex items-center gap-3 rounded-full bg-[#f1e5d8] p-1"><button onClick={() => updateQuantity(item.name, -1)} className="grid size-7 place-items-center rounded-full hover:bg-white" aria-label={`Remove one ${item.name}`}><Icon name="minus" className="size-3.5" /></button><span className="min-w-4 text-center text-xs font-bold">{cart[item.name]}</span><button onClick={() => updateQuantity(item.name, 1)} className="grid size-7 place-items-center rounded-full hover:bg-white" aria-label={`Add one ${item.name}`}><Icon name="plus" className="size-3.5" /></button></div></div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {cartCount > 0 && <div className="border-t border-[#5d412f]/10 pt-6"><div className="flex justify-between"><span className="font-semibold text-[#746157]">Subtotal</span><span className="font-display text-2xl font-semibold">₱{cartTotal}</span></div><p className="mt-2 text-xs text-[#8b776a]">Taxes and delivery fees calculated at checkout.</p><button className="mt-5 w-full rounded-full bg-[#b76538] px-6 py-4 font-bold text-white transition-colors hover:bg-[#964d2a]">Proceed to Checkout</button></div>}
        </aside>
      </div>
    </div>
  );
}
