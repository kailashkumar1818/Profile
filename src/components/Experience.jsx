import { MapPin } from "lucide-react";
import { data } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Vertical timeline of work / independent experience. */
export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-shell scroll-mt-24"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="experience-title"
            eyebrow={data.experience.eyebrow}
            title={data.experience.heading}
            description={data.experience.description}
          />
        </Reveal>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[7px] top-3 w-px bg-gradient-to-b from-accent/60 via-line to-transparent sm:left-[11px]"
          />

          <ol className="space-y-8">
            {data.experience.entries.map((entry) => (
              <li key={`${entry.role}-${entry.period}`} className="relative pl-8 sm:pl-14">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-6 grid h-4 w-4 place-items-center rounded-full border-2 border-canvas bg-accent shadow-[0_0_0_4px_rgb(var(--accent)/0.12)] sm:h-6 sm:w-6"
                >
                  <span className="h-1 w-1 rounded-full bg-on-accent sm:h-1.5 sm:w-1.5" />
                </span>

                <Reveal>
                  <article className="rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-accent">
                        {entry.current ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                        ) : null}
                        {entry.period}
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-xs text-faint">
                        <MapPin size={13} aria-hidden="true" focusable="false" />
                        {entry.location}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-ink sm:text-2xl">
                      {entry.role}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-accent">
                      {entry.company}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
                          <span
                            aria-hidden="true"
                            className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
