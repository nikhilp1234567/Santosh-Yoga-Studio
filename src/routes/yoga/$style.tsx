import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mandala } from "@/components/santosh/ornaments";
import { Reveal } from "@/components/santosh/Reveal";
import { getYogaStyle, YOGA_STYLES } from "@/lib/yoga-styles";

export const Route = createFileRoute("/yoga/$style")({
  loader: ({ params }) => {
    const style = getYogaStyle(params.style);

    if (!style) throw notFound();
    return style;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `What is ${loaderData.name} Yoga? | Santosh Yoga` },
          {
            name: "description",
            content: `${loaderData.introduction} Learn about its origins, practice and what to expect in class.`,
          },
          { property: "og:title", content: `What is ${loaderData.name} Yoga?` },
          { property: "og:description", content: loaderData.blurb },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  component: YogaStyleArticle,
});

function YogaStyleArticle() {
  const style = Route.useLoaderData();
  const relatedStyles = YOGA_STYLES.filter((item) => item.slug !== style.slug);

  return (
    <div className="min-h-screen overflow-x-hidden bg-sand font-sans text-henna selection:bg-clay/20">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-henna/10 bg-sand/85 px-6 py-4 backdrop-blur-md md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight md:text-2xl">
            SANTOSH
          </Link>
          <Link
            to="/"
            hash="practice"
            className="group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] transition-colors hover:text-clay"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to the studio
          </Link>
        </div>
      </header>

      <main>
        <section className="grain-overlay relative flex min-h-[86vh] items-end overflow-hidden px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
          <motion.div
            initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute -right-[18vw] top-8 aspect-square w-[min(90vw,760px)] text-clay/20 md:-right-32"
          >
            <Mandala className="h-full w-full animate-slow-rotate" />
          </motion.div>

          <div className="relative mx-auto w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 flex items-center gap-5"
            >
              <span className="text-[10px] font-medium tracking-[0.24em] text-clay">
                {style.num}
              </span>
              <span className="h-px w-14 bg-clay/60" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-henna/55">
                A guide to the practice
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl font-display text-[clamp(4.5rem,15vw,10rem)] italic leading-[0.72] tracking-[-0.05em]"
            >
              {style.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 max-w-2xl text-lg leading-relaxed text-henna/75 md:text-xl"
            >
              {style.introduction}
            </motion.p>
          </div>
        </section>

        <section className="border-y border-sand/10 bg-henna px-6 py-10 text-sand md:px-10">
          <div className="mx-auto grid max-w-6xl gap-px sm:grid-cols-3">
            <AtAGlance label="Pace" value={style.pace} />
            <AtAGlance label="Focus" value={style.focus} />
            <AtAGlance label="Props" value={style.props} />
          </div>
        </section>

        <article className="px-6 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-24">
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-clay">Understanding</p>
                  <p className="mt-4 font-display text-2xl italic text-henna/60">
                    {style.sanskrit}
                  </p>
                </div>
              </Reveal>
              <Reveal className="space-y-7">
                <h2 className="font-display text-4xl italic leading-tight md:text-5xl">
                  What is {style.name}?
                </h2>
                {style.overview.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-[1.9] text-henna/75">
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            </div>

            <div className="my-24 h-px bg-henna/10 md:my-32" />

            <Reveal>
              <div className="mb-12 max-w-2xl">
                <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-clay">The method</p>
                <h2 className="font-display text-4xl italic md:text-5xl">
                  At the heart of the practice
                </h2>
              </div>
            </Reveal>
            <div className="grid border-y border-henna/10 md:grid-cols-3 md:divide-x md:divide-henna/10">
              {style.practice.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08} className="h-full">
                  <div className="h-full border-b border-henna/10 py-10 md:border-b-0 md:px-9 md:first:pl-0 md:last:pr-0">
                    <span className="text-[10px] tracking-[0.22em] text-clay">0{index + 1}</span>
                    <h3 className="mt-6 font-display text-2xl italic">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-henna/65">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="my-24 grid gap-14 md:my-32 lg:grid-cols-2 lg:gap-24">
              <Reveal>
                <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-clay">
                  In the room
                </p>
                <h2 className="font-display text-4xl italic md:text-5xl">
                  What a class feels like
                </h2>
                <p className="mt-8 text-lg leading-[1.9] text-henna/75">{style.classExperience}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="relative overflow-hidden bg-sand-deep p-9 md:p-12">
                  <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 text-henna/10">
                    <Mandala className="h-full w-full" />
                  </div>
                  <p className="relative text-[10px] uppercase tracking-[0.28em] text-clay">
                    A useful reminder
                  </p>
                  <p className="relative mt-8 font-display text-3xl italic leading-snug text-henna/85">
                    The posture is not the destination. Breath, attention and a sustainable choice
                    are always part of the practice.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-px bg-henna/10 lg:grid-cols-2">
              <GuidanceList
                eyebrow="Who it may suit"
                title="A good fit for"
                items={style.goodFor}
              />
              <GuidanceList
                eyebrow="First steps"
                title="Before you begin"
                items={style.beginWith}
              />
            </div>
          </div>
        </article>

        <section className="grain-overlay bg-henna px-6 py-24 text-sand md:px-10 md:py-32">
          <div className="relative mx-auto max-w-6xl">
            <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-clay">
                  Continue exploring
                </p>
                <h2 className="font-display text-4xl italic md:text-5xl">
                  Other paths through practice
                </h2>
              </div>
              <Link
                to="/"
                hash="schedule"
                className="w-fit border border-sand/30 px-5 py-3 text-[10px] uppercase tracking-[0.22em] transition-colors hover:border-clay hover:bg-clay"
              >
                View Hatha classes
              </Link>
            </Reveal>
            <div className="grid gap-px border-y border-sand/10 bg-sand/10 sm:grid-cols-2 lg:grid-cols-5">
              {relatedStyles.map((item) => (
                <Link
                  key={item.slug}
                  to="/yoga/$style"
                  params={{ style: item.slug }}
                  className="group bg-henna p-6 transition-colors hover:bg-sand/5"
                >
                  <span className="text-[10px] tracking-[0.22em] text-clay">{item.num}</span>
                  <p className="mt-5 font-display text-2xl italic">{item.name}</p>
                  <span className="mt-6 inline-block text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-henna px-6 pb-10 text-sand/45 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 border-t border-sand/10 pt-8 text-[10px] uppercase tracking-[0.24em] sm:flex-row">
          <span>© {new Date().getFullYear()} Santosh Yoga</span>
          <span>Aldridge, West Midlands</span>
        </div>
      </footer>
    </div>
  );
}

function AtAGlance({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-sand/10 py-4 last:border-0 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-0">
      <p className="text-[9px] uppercase tracking-[0.24em] text-clay">{label}</p>
      <p className="mt-2 font-display text-xl italic">{value}</p>
    </div>
  );
}

function GuidanceList({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <Reveal className="h-full bg-sand">
      <section className="h-full p-8 md:p-12">
        <p className="text-[10px] uppercase tracking-[0.28em] text-clay">{eyebrow}</p>
        <h2 className="mt-4 font-display text-3xl italic">{title}</h2>
        <ul className="mt-8 divide-y divide-henna/10 border-y border-henna/10">
          {items.map((item) => (
            <li key={item} className="flex gap-4 py-5 text-sm leading-relaxed text-henna/70">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}
