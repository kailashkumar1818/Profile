import { data } from "../data";
import { DataIcon } from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Bio and a compact set of verifiable quick facts. */
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-shell scroll-mt-24"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16 items-start">
          <Reveal>
            <div className="relative group mx-auto w-full max-w-[300px]">
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-[2.25rem] bg-gradient-to-tr from-accent/35 via-faint/25 to-transparent blur-xl transition-all duration-700 group-hover:scale-105 group-hover:from-accent/45"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-2.5 shadow-lift">
                <img
                  src={data.photo || "/kailash.jpeg"}
                  alt={data.name}
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="p-3 text-center">
                  <p className="font-display font-semibold text-ink text-sm tracking-[-0.01em]">
                    {data.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] text-faint">
                    SRM University AP · CSE
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={100}>
              <SectionHeading
                id="about-title"
                eyebrow={data.about.eyebrow}
                title={data.about.heading}
                description={data.about.description}
              />
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 border-l border-line/90 pl-6 sm:pl-8">
                <p className="font-display text-xl font-medium leading-[1.55] tracking-[-0.02em] text-ink sm:text-[1.35rem]">
                  {data.about.paragraphs[0]}
                </p>
                <p className="mt-5 text-[0.95rem] leading-7 text-muted sm:text-base">
                  {data.about.paragraphs[1]}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.about.facts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 70}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-5 shadow-soft transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-accent/35 hover:shadow-lift">
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/[0.07] blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />

                <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-on-accent">
                  <DataIcon name={fact.icon} size={18} />
                </span>

                <p className="mt-6 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-faint">
                  {fact.label}
                </p>
                <p className="mt-1.5 text-[0.98rem] font-semibold leading-snug tracking-[-0.015em] text-ink">
                  {fact.value}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-muted">
                  {fact.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
