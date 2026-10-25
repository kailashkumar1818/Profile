import { GraduationCap, MapPin } from "lucide-react";
import { data } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Academic timeline entry with degree, institution, and score. */
export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="section-shell scroll-mt-24 border-t border-line/70 bg-elevated/25"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="education-title"
            eyebrow={data.education.eyebrow}
            title={data.education.heading}
            description={data.education.description}
          />
        </Reveal>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[7px] top-3 w-px bg-gradient-to-b from-accent/60 via-line to-transparent sm:left-[11px]"
          />

          <ol className="space-y-8">
            {data.education.entries.map((entry) => (
              <li key={entry.degree} className="relative pl-8 sm:pl-14">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-6 grid h-4 w-4 place-items-center rounded-full border-2 border-canvas bg-accent shadow-[0_0_0_4px_rgb(var(--accent)/0.12)] sm:h-6 sm:w-6"
                >
                  <span className="h-1 w-1 rounded-full bg-on-accent sm:h-1.5 sm:w-1.5" />
                </span>

                <Reveal>
                  <article className="rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated/60 px-3 py-1 font-mono text-[0.64rem] font-medium tracking-[0.08em] text-muted">
                        {entry.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-faint">
                        <MapPin size={13} aria-hidden="true" focusable="false" />
                        {entry.location}
                      </span>
                    </div>

                    <div className="mt-6 flex items-start gap-4">
                      <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent">
                        <GraduationCap size={20} aria-hidden="true" focusable="false" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-xl">
                          {entry.degree}
                        </h3>
                        <p className="mt-1.5 text-sm font-medium text-accent">
                          {entry.institution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                      <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-faint">
                        Score
                      </span>
                      <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                        {entry.score}
                      </span>
                    </div>
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
