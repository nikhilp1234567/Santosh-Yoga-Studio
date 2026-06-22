import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.png";
import teacherPortrait from "@/assets/teacher-portrait.png";
import lotusLogo from "@/assets/lotus.png";
import { ArchedFrame, JaliStrip, Mandala } from "@/components/santosh/ornaments";
import { Reveal } from "@/components/santosh/Reveal";
import {
  CountUp,
  Magnetic,
  Parallax,
  ScrollProgress,
  SplitHeading,
} from "@/components/santosh/motion-bits";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santosh Yoga — Hatha yoga studio in Aldridge" },
      {
        name: "description",
        content:
          "A boutique Hatha yoga sanctuary in Aldridge, UK. Drawing on a decade of practice across Ashtanga, Rocket, Yin, Iyengar and Kundalini.",
      },
      { property: "og:title", content: "Santosh Yoga — Hatha yoga studio in Aldridge" },
      {
        property: "og:description",
        content:
          "Breath, stillness, Santosh. Traditional Hatha yoga and conscious movement in Aldridge, West Midlands.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const STYLES = [
  {
    num: "01",
    name: "Ashtanga",
    blurb: "A structured, dynamic series that builds internal heat through breath-linked movement.",
    href: "https://www.ekhartyoga.com/resources/styles/ashtanga-yoga",
  },
  {
    num: "02",
    name: "Rocket",
    blurb: "A faster, playful evolution of Ashtanga that opens up arm balances and inversions.",
    href: "https://theyogaspace.co.uk/what-is-rocket-yoga/",
  },
  {
    num: "03",
    name: "Yin",
    blurb: "Long, quiet floor-based holds that work into the connective tissue and stillness.",
    href: "https://www.ekhartyoga.com/resources/styles/yin-yoga",
  },
  {
    num: "04",
    name: "Hatha",
    blurb: "The foundation. Steady postures and conscious breath, aligning sun and moon.",
    href: "https://www.yogajournal.com/yoga-101/types-of-yoga/hatha/",
  },
  {
    num: "05",
    name: "Iyengar",
    blurb: "Meticulous alignment supported by props — precise, patient, deeply therapeutic.",
    href: "https://www.ekhartyoga.com/articles/practice/what-is-iyengar-yoga",
  },
  {
    num: "06",
    name: "Kundalini",
    blurb: "Kriya, mantra and breathwork to awaken energy and quiet the inner noise.",
    href: "https://www.mindbodygreen.com/articles/kundalini-yoga-101-everything-you-wanted-to-know",
  },
];

const NAV = [
  { label: "Practice", href: "#practice" },
  { label: "The Teacher", href: "#teacher" },
  { label: "Schedule", href: "#schedule" },
  { label: "Aldridge Studio", href: "#visit" },
];

function Index() {
  return (
    <div className="bg-sand text-henna font-sans selection:bg-clay/20 overflow-x-hidden">
      <ScrollProgress />
      <Nav />
      <Hero />
      <IntroHatha />
      {/* <DisciplineMarquee /> */}
      <Disciplines />
      <Teacher />
      <Schedule />
      <Visit />
      <Voices />
      <CommonQueries />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + (e.target as HTMLElement).id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return (
    <nav
      className={
        "fixed top-0 inset-x-0 z-50 px-6 md:px-10 flex justify-between items-center backdrop-blur-md border-b border-henna/5 opacity-0 animate-header-fade transition-[padding,background-color] duration-700 ease-out " +
        (scrolled ? "py-3 bg-sand/75" : "py-[22px] bg-sand/30")
      }
    >
      <a href="#top" className="font-display font-semibold tracking-tight">
        <span
          className={
            "inline-block transition-[font-size] duration-700 ease-out " +
            (scrolled ? "text-lg" : "text-2xl")
          }
        >
          SANTOSH
        </span>
      </a>
      <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.22em] font-medium">
        {NAV.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="relative group hover:text-clay transition-colors"
          >
            {n.label}
            <span
              className={
                "absolute -bottom-1 left-0 h-px bg-clay transition-all duration-500 ease-out " +
                (active === n.href ? "w-full" : "w-0 group-hover:w-full")
              }
            />
          </a>
        ))}
      </div>
      <button
        className="md:hidden text-[10px] uppercase tracking-[0.22em] border border-henna/25 px-3 py-1.5"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
      >
        Menu
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 bg-sand border-b border-henna/10 flex flex-col md:hidden"
          >
            {NAV.map((n, i) => (
              <motion.a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="px-6 py-4 text-xs uppercase tracking-[0.2em] border-t border-henna/5"
              >
                {n.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * NAV.length, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mx-6 my-5 inline-flex justify-center border border-henna/25 px-4 py-3 text-[10px] uppercase tracking-[0.22em]"
            >
              Join WhatsApp Group
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const mandalaY = useTransform(scrollY, [0, 800], [0, 120]);
  const mandalaRot = useTransform(scrollY, [0, 1200], [0, 60]);
  const portraitY = useTransform(scrollY, [0, 800], [0, -40]);
  const contentY = useTransform(scrollY, [0, 600], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 pt-32 pb-14 overflow-visible grain-overlay"
    >
      <motion.div
        style={{ y: mandalaY, rotate: mandalaRot }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(140vw,1100px)] aspect-square text-clay/25 pointer-events-none"
      >
        <Mandala className="w-full h-full" />
      </motion.div>
      <motion.div
        style={{ y: mandalaY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(85vw,640px)] aspect-square text-henna/15 pointer-events-none"
      >
        <Mandala className="w-full h-full animate-counter-rotate" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: heroOpacity }}
        className="relative z-10 text-center max-w-5xl flex flex-col items-center gap-7 md:gap-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] uppercase tracking-[0.3em] text-black"
        >
          Santosh Yoga · Aldridge, UK
        </motion.p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-[4.6rem] italic leading-[1.02] text-balance">
          <SplitHeading text="Breath is the bridge between" delay={0.1} />
          <br className="hidden md:block" />
          <span className="text-clay">
            <SplitHeading text=" body and soul." delay={0.55} />
          </span>
        </h1>

        <motion.div
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="animate-breathe will-change-transform">
            <ArchedFrame className="w-full max-w-[min(280px,56vh)]">
              <img
                src={heroPortrait}
                alt="Santosh, founder of Santosh Yoga, in meditation"
                width={1088}
                height={1344}
                className="w-full h-auto block"
              />
            </ArchedFrame>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Magnetic strength={0.3}>
            <a
              href="#schedule"
              className="inline-block bg-henna text-sand px-7 py-3 text-[11px] uppercase tracking-[0.22em] hover:bg-clay transition-colors"
            >
              View the Schedule
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}

function IntroHatha() {
  const { scrollY } = useScroll();
  const hathaMandalaRot = useTransform(scrollY, [0, 2000], [0, -40]);
  return (
    <section id="practice" className="py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-6xl mx-auto mb-16 md:mb-24 h-6" />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal className="space-y-6">
          <p className="text-[10px] uppercase tracking-[0.28em] text-clay">The Practice</p>
          <h2 className="font-display text-4xl md:text-5xl italic leading-tight">
            The Spirit of Hatha
          </h2>
          <p className="text-pretty leading-relaxed text-henna/80 text-lg">
            Hatha is the foundation of balance — uniting the sun{" "}
            <span className="italic">(Ha)</span> and the moon <span className="italic">(Tha)</span>.
            Our practice in Aldridge honours this ancient lineage through steady posture, conscious
            breath and quiet, deliberate attention.
          </p>
          <p className="text-pretty leading-relaxed text-henna/60">
            Classes are warm, unhurried and welcoming to every body — from the first time on a mat
            to a long-standing daily practice.
          </p>
          <div className="h-px w-24 bg-clay" />
          <p className="text-[10px] uppercase tracking-[0.25em] text-henna/40">
            draft copy — we need your wording here
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] bg-sand-deep overflow-hidden">
            <Parallax distance={40} className="absolute inset-6 text-henna/15">
              <motion.div style={{ rotate: hathaMandalaRot }} className="w-full h-full">
                <Mandala className="w-full h-full" />
              </motion.div>
            </Parallax>
            <ul className="absolute inset-0 flex flex-col justify-center gap-5 p-8 font-display text-xl italic sm:gap-6 sm:p-10 sm:text-2xl md:max-lg:text-xl lg:text-2xl">
              {[
                ["01", "Asana", "steady posture"],
                ["02", "Pranayama", "conscious breath"],
                ["03", "Dhyana", "quiet attention"],
                ["04", "Santosha", "contentment"],
              ].map(([n, word, gloss], i) => (
                <motion.li
                  key={n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.2, delay: 0.15 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap gap-x-4 gap-y-1 items-baseline"
                >
                  <span className="text-[10px] tracking-[0.2em] font-sans not-italic text-clay">
                    {n}
                  </span>
                  {word} — {gloss}
                </motion.li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Disciplines() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-10 bg-henna text-sand grain-overlay">
      <div className="mb-16 max-w-6xl mx-auto">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.28em] text-clay mb-4">Disciplines</p>
          <h3 className="font-display text-4xl md:text-6xl italic leading-tight">
            Ten years of lineage-based practice.
          </h3>
          <p className="text-xs uppercase tracking-[0.22em] mt-6 opacity-60 max-w-xl">
            Ashtanga · Rocket · Yin · Hatha · Iyengar · Kundalini
          </p>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sand/10 border-y border-sand/10">
        {STYLES.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.05}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block p-10 lg:p-12 h-full bg-henna hover:bg-henna/70 transition-colors overflow-hidden"
            >
              <div className="pointer-events-none absolute -right-10 -bottom-10 w-56 h-56 text-clay/0 group-hover:text-clay/40 transition-colors duration-700">
                <Mandala className="w-full h-full animate-slow-rotate" />
              </div>
              <span className="relative text-[10px] text-clay font-medium tracking-[0.22em]">
                {s.num}
              </span>
              <h4 className="relative font-display text-3xl italic mt-6 mb-4 transition-transform duration-500 group-hover:-translate-y-1">
                {s.name}
              </h4>
              <p className="relative text-sm opacity-70 leading-relaxed mb-8">{s.blurb}</p>
              <span className="relative inline-flex items-center text-[10px] uppercase tracking-[0.22em] pb-1">
                <span className="relative">
                  Learn more
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-clay scale-x-100 origin-right group-hover:origin-left transition-transform duration-500" />
                </span>
                <span className="ml-2 transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Teacher() {
  return (
    <section id="teacher" className="py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <Reveal className="w-full lg:w-1/2">
          <Parallax distance={30}>
            <ArchedFrame>
              <img
                src={teacherPortrait}
                alt="Santosh, yoga teacher"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-auto block"
              />
            </ArchedFrame>
          </Parallax>
        </Reveal>
        <Reveal delay={0.1} className="w-full lg:w-1/2 space-y-8">
          <p className="text-[10px] uppercase tracking-[0.28em] text-clay">The Teacher</p>
          <h2 className="font-display text-4xl md:text-5xl italic leading-tight">
            Guided by Santosh.
          </h2>
          <div className="grid grid-cols-3 gap-6 py-4">
            <Stat value={10} suffix="" label="Years practising" />
            <Stat value={6} label="Styles taught" />
            <Stat value={1} label="Sanctuary in Aldridge" />
          </div>
          <p className="font-display text-2xl italic leading-relaxed text-henna/80">
            “Yoga is not about touching your toes — it’s about what you learn on the way down.”
          </p>
          <p className="text-base leading-relaxed text-henna/75">
            With a decade of dedicated practice across Ashtanga, Rocket, Yin, Hatha, Iyengar and
            Kundalini, Santosh brings depth, anatomical care and quiet spirit to every class here in
            Aldridge.
          </p>
          <div className="grid grid-cols-1 gap-8 pt-4 border-t border-henna/10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-clay mb-2">Training</p>
              <p className="text-sm text-henna/60">Level 3 Diploma in Teaching Yoga - HFE</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-clay mb-2">Story</p>
              <p className="text-sm text-henna/60">I began practicing yoga 10 years ago as an escape from the stress of daily life. I quickly fell in love with not only the moves, but the mindset behind them. </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl md:text-5xl italic text-clay leading-none">
        <CountUp to={value} suffix={suffix} />
      </p>
      <p className="text-[10px] uppercase tracking-[0.22em] text-henna/60 mt-2">{label}</p>
    </div>
  );
}

function Schedule() {
  const rows = [
    { day: "Monday", time: "07:30", name: "Rise & Hatha", price: "£12" },
    { day: "Wednesday", time: "18:30", name: "Rocket Flow", price: "£15" },
    { day: "Friday", time: "10:00", name: "Slow Hatha", price: "£12" },
    { day: "Sunday", time: "17:00", name: "Yin & Stillness", price: "£14" },
  ];
  return (
    <section
      id="schedule"
      className="py-28 md:py-36 px-6 md:px-10 bg-sand-deep/40 border-y border-henna/10"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-[10px] uppercase tracking-[0.28em] text-clay mb-4">Schedule</p>
          <h3 className="font-display text-4xl md:text-5xl italic">Weekly Practice</h3>
        </Reveal>
        <Reveal>
          <div className="space-y-1">
            {rows.map((r, i) => (
              <motion.div
                key={r.day + r.time}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 6 }}
                className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-3 items-center py-6 border-b border-henna/10 hover:bg-sand/60 transition-colors px-2 cursor-default sm:grid-cols-[1fr_2fr_auto]"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] font-medium text-henna/70">
                    {r.day}
                  </p>
                  <p className="text-sm text-henna/50 mt-1">{r.time}</p>
                </div>
                <p className="col-span-2 font-display text-2xl italic sm:col-span-1">{r.name}</p>
                <p className="text-clay font-medium">{r.price}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Visit() {
  const isMobile = useIsMobile();
  return (
    <section id="visit" className="py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.28em] text-clay mb-4">Find us</p>
          <h3 className="font-display text-4xl md:text-5xl italic mb-10">The Aldridge Studio</h3>
          <div className="aspect-[4/3] bg-sand-deep mb-6 ring-1 ring-henna/10 relative overflow-hidden">
            <iframe
              title="Map of Aldridge"
              src="https://www.google.com/maps?q=Aldridge%2C%20Walsall%2C%20UK&output=embed"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[15%] sepia-[12%]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Parallax distance={isMobile ? 0 : 30}>
            <ContactDetails />
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}

function ContactDetails() {
  const details = [
    { label: "Email", value: "hello@santoshyoga.com" },
    { label: "Phone", value: "+44 7807 339051" },
    { label: "Location", value: "Aldridge, West Midlands, UK" },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden p-8 md:p-10 bg-henna text-sand min-h-full grain-overlay"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 text-clay/30">
        <Mandala className="h-full w-full animate-slow-rotate" />
      </div>
      <div className="relative">
        <p className="text-[10px] uppercase tracking-[0.28em] text-clay mb-4">Contact</p>
        <h3 className="font-display text-3xl md:text-4xl italic mb-5">Speak with the studio</h3>
        <p className="text-sand/65 leading-relaxed mb-10 max-w-md">
          For class questions, private sessions or first-visit guidance, use the direct details below.
        </p>
        <div className="divide-y divide-sand/10 border-y border-sand/10">
          {details.map((item) => (
            <div key={item.label} className="grid grid-cols-[7rem_1fr] gap-5 py-6 items-baseline">
              <p className="text-[10px] uppercase tracking-[0.22em] text-clay">{item.label}</p>
              <p className="font-display text-2xl italic text-sand">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-10 bg-sage/10">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-clay mb-6">Voices</p>
          <p className="font-display text-2xl md:text-3xl italic leading-relaxed text-henna/85">
            “we need testimonials here — a quiet, generous space. Santosh teaches with real depth
            and warmth. I leave every class feeling lighter.”
          </p>
          <p className="text-[10px] uppercase tracking-[0.28em] mt-8 text-henna/40">
            — placeholder · we need real testimonials here
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function CommonQueries() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-10 bg-sand">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.28em] text-clay mb-4">Common Queries</p>
          <h3 className="font-display text-3xl md:text-4xl italic mb-10">
            Before your first class
          </h3>
          <Accordion type="single" collapsible className="border-t border-henna/10">
            {[
              {
                q: "What should I bring?",
                a: "Just yourself, comfortable clothes you can move in, and a water bottle. We have mats, blocks, bolsters and blankets available — please confirm with the studio.",
              },
              {
                q: "Are beginners welcome?",
                a: "Always. Hatha is taught with multi-level options and Santosh will gently guide you through each posture.",
              },
              {
                q: "Can I practise during pregnancy?",
                a: "Please get in touch before booking so Santosh can recommend the right class and modifications. we need confirmed guidance here.",
              },
              {
                q: "How do I book?",
                a: "Use the contact details below or message us directly. we need booking link / system here.",
              },
              {
                q: "Do you offer private sessions?",
                a: "Yes — 1-to-1 and small group privates are available on request. we need pricing here.",
              },
            ].map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-b border-henna/10">
                <AccordionTrigger className="text-left font-display italic text-xl py-6 hover:text-clay hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-henna/70 leading-relaxed text-base pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-henna text-sand/80 pt-20 pb-10 px-6 md:px-10 grain-overlay">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="font-display text-3xl italic text-sand">Santosh Yoga</p>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              A boutique Hatha sanctuary in Aldridge, West Midlands.
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-clay mb-4">Visit</p>
            <p className="text-sm">we need address here</p>
            <p className="text-sm">Aldridge, UK</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-clay mb-4">Connect</p>
            <p className="text-sm">we need email here</p>
            <p className="text-sm">we need phone here</p>
            <p className="text-sm">
              Instagram — <span className="text-sand/50">we need Instagram handle here</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 pt-8 border-t border-sand/10 text-[10px] uppercase tracking-[0.28em] text-sand/40">
          <span>© {new Date().getFullYear()} Santosh Yoga</span>
          <span className="normal-case tracking-[0.15em]">
            Built with <img src={lotusLogo} alt="" className="h-8 w-auto inline-block align-middle" /> by{" "}
            <a
              href="https://littlelotus.co"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-sand/60 transition-colors"
            >
              Little Lotus
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
