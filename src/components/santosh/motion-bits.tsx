import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Top-of-page horizontal scroll progress bar. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-clay z-[60] pointer-events-none"
      aria-hidden
    />
  );
}

/** Per-word fade/blur-in for a heading. */
export function SplitHeading({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 1.1,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {w}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Counts up to a value when it scrolls into view. */
export function CountUp({
  to,
  duration = 1.6,
  suffix = "",
  className,
}: {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}

/** Magnetic hover wrapper — element drifts toward the cursor. */
export function Magnetic({
  children,
  strength = 0.25,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.5 });
  return (
    <motion.span
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-block" }}
      className={className}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/** Horizontal infinite marquee. */
export function Marquee({ items }: { items: string[] }) {
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {list.map((s, i) => (
          <span key={i} className="flex items-center gap-12 font-display italic text-5xl md:text-7xl text-clay/80">
            {s}
            <span className="text-henna/30 text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Parallax wrapper. Translates child by `distance` over scroll range. */
export function Parallax({
  children,
  distance = 80,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Stroke-drawn jali divider that animates in on scroll. */
export function DrawnDivider({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <svg
      ref={ref}
      viewBox="0 0 600 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      preserveAspectRatio="xMidYMid meet"
    >
      <motion.path
        d={Array.from({ length: 50 }, (_, i) => {
          const cx = 6 + i * 12;
          return `M ${cx} 2 L ${cx + 6} 12 L ${cx} 22 L ${cx - 6} 12 Z`;
        }).join(" ")}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.line
        x1="0"
        y1="12"
        x2="600"
        y2="12"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}