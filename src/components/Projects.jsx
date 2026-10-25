import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import { data, getProjectGithubUrl } from "../data";
import { DataIcon } from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Responsive project grid with data-driven cards and optional GitHub links. */
export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section-shell scroll-mt-24"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="projects-title"
            eyebrow={data.projects.eyebrow}
            title={data.projects.heading}
            description={data.projects.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.projects.items.map((project, index) => {
            const githubUrl = getProjectGithubUrl(project.githubKey);

            return (
              <Reveal key={project.id} delay={index * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-soft transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-accent/35 hover:shadow-lift">
                  {/* Generated cover — no external imagery needed */}
                  <div
                    aria-hidden="true"
                    className="relative h-40 overflow-hidden border-b border-line bg-gradient-to-br from-accent/[0.18] via-elevated to-elevated sm:h-44"
                  >
                    <div className="art-grid absolute inset-0 opacity-60" />
                    <div className="absolute -right-12 -top-14 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
                    <span className="absolute right-4 top-4 rounded-full border border-line bg-surface/75 px-2.5 py-1 font-mono text-[0.62rem] font-medium tracking-[0.08em] text-muted backdrop-blur-sm">
                      {project.year}
                    </span>
                    <span className="absolute bottom-4 left-5 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-faint">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute bottom-4 right-5 grid h-12 w-12 place-items-center rounded-2xl border border-line bg-surface/70 text-accent shadow-soft backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                      <DataIcon name={project.icon} size={22} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold tracking-[-0.025em] text-ink">
                        {project.title}
                      </h3>
                      {githubUrl ? (
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-accent"
                          aria-label={`${project.title} on GitHub (opens in a new tab)`}
                        >
                          <Github size={15} aria-hidden="true" focusable="false" />
                        </a>
                      ) : null}
                    </div>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <li key={tech} className="tag">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex-1 space-y-2.5">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5 text-[0.83rem] leading-6 text-muted">
                          <span
                            aria-hidden="true"
                            className="mt-[0.62rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {githubUrl ? (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-elevated/60 px-3.5 py-2 text-xs font-semibold text-ink transition-all duration-300 hover:border-accent/40 hover:text-accent"
                      >
                        View on GitHub
                        <ArrowUpRight size={14} aria-hidden="true" focusable="false" />
                      </a>
                    ) : (
                      <div className="mt-6 flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-faint">
                        <Layers3 size={13} aria-hidden="true" focusable="false" />
                        Project build
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
