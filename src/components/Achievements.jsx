import { CalendarDays, Trophy } from "lucide-react";
import { data } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Highlighted recognition card with a subtle certificate-like treatment. */
export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="section-shell scroll-mt-24"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="achievements-title"
            eyebrow={data.achievements.eyebrow}
            title={data.achievements.heading}
            description={data.achievements.description}
          />
        </Reveal>

        <div className="mt-12 space-y-5">
          {data.achievements.items.map((item) => (
            <Reveal key={`${item.award}-${item.date}`}>
              <article className="group relative overflow-hidden rounded-[2rem] border border-accent/30 bg-gradient-to-br from-accent/[0.12] via-surface to-surface p-6 shadow-soft transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-accent/45 hover:shadow-glow sm:p-9 lg:p-10">
                <div aria-hidden="true" className="art-grid absolute inset-0 opacity-30" />
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-accent/[0.12] blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 right-10 hidden h-56 w-56 rounded-full border border-accent/10 sm:block"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-16 right-20 hidden h-40 w-40 rounded-full border border-accent/10 sm:block"
                />

                <div className="relative grid gap-7 sm:grid-cols-[auto_1fr] sm:items-center lg:grid-cols-[auto_1fr_auto] lg:gap-10">
                  <div className="animate-breathe grid h-16 w-16 place-items-center rounded-3xl border border-accent/25 bg-accent/10 text-accent shadow-soft">
                    <Trophy size={28} aria-hidden="true" focusable="false" />
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {item.award}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-ink/85">
                      {item.event}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.institution}</p>
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl border border-line bg-surface/65 px-4 py-3 text-sm font-medium text-muted backdrop-blur-sm sm:w-fit lg:flex-col lg:items-start lg:gap-1">
                    <CalendarDays size={15} className="text-accent" aria-hidden="true" focusable="false" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
