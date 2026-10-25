import { data } from "../data";
import { DataIcon } from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Grouped skill cards; “Learning” and “Basic” badges are data-driven. */
export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-shell scroll-mt-24 border-y border-line/70 bg-elevated/25"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="skills-title"
            eyebrow={data.skills.eyebrow}
            title={data.skills.heading}
            description={data.skills.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.skills.groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 55}>
              <article className="group h-full rounded-3xl border border-line bg-surface p-5 shadow-soft transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-accent/35 hover:shadow-lift">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-soft text-accent transition-all duration-300 group-hover:animate-breathe group-hover:bg-accent group-hover:text-on-accent">
                    <DataIcon name={group.icon} size={17} />
                  </span>
                  <h3 className="text-[0.86rem] font-semibold tracking-[-0.01em] text-ink">
                    {group.title}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="skill-chip">
                      {skill.name}
                      {skill.level ? (
                        <span className="rounded-full bg-accent/10 px-1.5 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.08em] text-accent">
                          {skill.level}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
