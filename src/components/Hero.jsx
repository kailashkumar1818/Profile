import { ArrowRight, Award, Code2, Download, Server } from "lucide-react";
import { data, getResumeUrl, getSocialLinks } from "../data";
import SocialLinks from "./SocialLinks";
import TypedText from "./TypedText";

function CodeLine({ number, children }) {
  return (
    <div className="flex min-w-max gap-4">
      <span
        aria-hidden="true"
        className="w-4 shrink-0 select-none text-right text-faint/35"
      >
        {number}
      </span>
      <span>{children}</span>
    </div>
  );
}

/** Above-the-fold introduction and a code-styled profile visual. */
export default function Hero() {
  const resumeUrl = getResumeUrl();
  const socialLinks = getSocialLinks();
  const education = data.education.entries[0];

  const learningSkills = data.skills.groups
    .flatMap((group) => group.skills)
    .filter((skill) => skill.level === "Learning")
    .map((skill) => skill.name);

  const universityFact = data.about.facts.find((fact) => fact.label === "University");
  const cgpaFact = data.about.facts.find((fact) => fact.label === "CGPA");
  const focusFact = data.about.facts.find((fact) => fact.label === "Focus");

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      {/* Living background — morphing blobs + rising particles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-radial opacity-50" />

        {/* Blob 1 — primary gold, top-center */}
        <div
          className="animate-blob absolute -top-28 left-[12%] h-[36rem] w-[36rem] bg-accent/[0.22] blur-[90px]"
          style={{ animationDuration: "9s" }}
        />
        {/* Blob 2 — olive, top-right */}
        <div
          className="animate-blob absolute -right-20 top-[15%] h-[28rem] w-[28rem] bg-faint/[0.28] blur-[80px]"
          style={{ animationDuration: "13s", animationDelay: "-5s" }}
        />
        {/* Blob 3 — secondary gold, bottom-left */}
        <div
          className="animate-blob absolute -bottom-16 left-[30%] h-[24rem] w-[24rem] bg-accent/[0.14] blur-[70px]"
          style={{ animationDuration: "17s", animationDelay: "-9s" }}
        />

        {/* Floating gold particles */}
        {[
          { left: "6%",  dur: "4.8s", delay: "0s",    size: "h-2 w-2" },
          { left: "16%", dur: "5.6s", delay: "1.4s",  size: "h-1.5 w-1.5" },
          { left: "27%", dur: "4.2s", delay: "0.7s",  size: "h-1 w-1" },
          { left: "40%", dur: "6.0s", delay: "2.3s",  size: "h-2.5 w-2.5" },
          { left: "53%", dur: "5.1s", delay: "0.9s",  size: "h-1.5 w-1.5" },
          { left: "64%", dur: "4.5s", delay: "1.8s",  size: "h-1 w-1" },
          { left: "75%", dur: "5.8s", delay: "0.3s",  size: "h-2 w-2" },
          { left: "84%", dur: "4.3s", delay: "2.9s",  size: "h-1.5 w-1.5" },
          { left: "93%", dur: "5.4s", delay: "1.1s",  size: "h-1 w-1" },
        ].map((p, i) => (
          <div
            key={i}
            className={`animate-particle absolute bottom-[8%] ${p.size} rounded-full bg-accent`}
            style={{ left: p.left, animationDuration: p.dur, animationDelay: p.delay }}
          />
        ))}

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-canvas" />
      </div>

      <div className="container-page">
        <div className="grid min-h-[calc(100svh-5rem)] items-center gap-16 py-16 pb-24 sm:pt-20 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:py-20">
          {/* Intro */}
          <div className="hero-rise" style={{ animationDelay: "60ms" }}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-muted backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {data.heroKicker}
            </span>

            <h1
              id="hero-title"
              className="mt-6 font-display text-[clamp(2.9rem,8vw,5.5rem)] font-semibold leading-[0.97] tracking-[-0.055em] text-ink"
            >
              Kailash{" "}
              <span className="shimmer-name">
                Kumar
              </span>
              <span className="text-accent">.</span>
            </h1>

            <p className="mt-6 flex min-h-8 flex-wrap items-baseline gap-x-2 font-display text-lg tracking-[-0.02em] text-muted sm:text-xl">
              <span>I&apos;m a</span>
              <TypedText
                words={data.roles}
                className="font-semibold text-accent"
              />
            </p>

            <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-muted">
              {data.heroIntro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight size={16} aria-hidden="true" focusable="false" />
              </a>

              {resumeUrl ? (
                <a
                  href={resumeUrl}
                  download
                  className="btn-secondary"
                >
                  <Download size={16} aria-hidden="true" focusable="false" />
                  Download Resume
                </a>
              ) : null}

              <a href="#contact" className="btn-ghost">
                Contact Me
                <ArrowRight size={15} aria-hidden="true" focusable="false" />
              </a>
            </div>

            {socialLinks.length > 0 ? (
              <div className="mt-8 flex items-center gap-4 border-t border-line/70 pt-6">
                <span className="text-[0.64rem] font-medium uppercase tracking-[0.18em] text-faint">
                  Elsewhere
                </span>
                <SocialLinks />
              </div>
            ) : null}
          </div>

          {/* Code-style profile card */}
          <div
            className="hero-rise relative mx-auto w-full max-w-[31rem] lg:max-w-[29rem]"
            style={{ animationDelay: "220ms" }}
          >
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-accent/25 via-accent/[0.08] to-transparent blur-2xl"
            />

            <div className="relative motion-safe:animate-[float-slow_8s_ease-in-out_infinite]">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface/85 shadow-lift backdrop-blur-xl">
                {/* Photo & Profile Banner */}
                <div className="flex items-center gap-4 border-b border-line bg-surface/60 px-5 py-4">
                  <div className="relative group shrink-0">
                    <div
                      aria-hidden="true"
                      className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent to-faint opacity-60 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md"
                    />
                    <img
                      src={data.photo || "/kailash.jpeg"}
                      alt={data.name}
                      className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-2xl object-cover ring-2 ring-surface shadow-md transition-transform duration-300 group-hover:scale-105"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 -right-1 flex h-4 w-4"
                    >
                      <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-surface bg-accent" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-base font-bold text-ink truncate">
                        {data.name}
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium text-accent">
                        Active
                      </span>
                    </div>
                    <p className="text-xs text-muted truncate">
                      Full-Stack Developer · B.Tech CSE
                    </p>
                    <p className="mt-0.5 font-mono text-[10.5px] text-faint truncate">
                      SRM University AP
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b border-line px-5 py-2.5 bg-surface/40">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-faint/30" />
                    <span className="h-2 w-2 rounded-full bg-faint/20" />
                    <span className="h-2 w-2 rounded-full bg-accent/70" />
                  </div>
                  <span className="font-mono text-[10.5px] tracking-wide text-faint">
                    kailash.profile.js
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
                    <Code2 size={11} />
                    profile
                  </span>
                </div>

                <div className="no-scrollbar overflow-x-auto px-5 py-6 font-mono text-[12px] leading-7 text-muted sm:text-[12.5px]">
                  <CodeLine number="01">
                    <span className="text-faint">const</span>{" "}
                    <span className="text-accent">developer</span>{" "}
                    <span className="text-faint">=</span>{" "}
                    <span className="text-faint">{"{"}</span>
                  </CodeLine>
                  <CodeLine number="02">
                    {"  "}
                    <span className="text-accent">name</span>
                    <span className="text-faint">:</span>{" "}
                    <span className="text-ink">&quot;{data.name}&quot;</span>
                    <span className="text-faint">,</span>
                  </CodeLine>
                  <CodeLine number="03">
                    {"  "}
                    <span className="text-accent">degree</span>
                    <span className="text-faint">:</span>{" "}
                    <span className="text-ink">
                      &quot;{education.shortDegree}&quot;
                    </span>
                    <span className="text-faint">,</span>
                  </CodeLine>
                  <CodeLine number="04">
                    {"  "}
                    <span className="text-accent">university</span>
                    <span className="text-faint">:</span>{" "}
                    <span className="text-ink">
                      &quot;{universityFact?.value}&quot;
                    </span>
                    <span className="text-faint">,</span>
                  </CodeLine>
                  <CodeLine number="05">
                    {"  "}
                    <span className="text-accent">focus</span>
                    <span className="text-faint">:</span>{" "}
                    <span className="text-ink">
                      &quot;{focusFact?.value}&quot;
                    </span>
                    <span className="text-faint">,</span>
                  </CodeLine>
                  <CodeLine number="06">
                    {"  "}
                    <span className="text-accent">learning</span>
                    <span className="text-faint">:</span>{" "}
                    <span className="text-ink">
                      [&quot;{learningSkills.join('", "')}&quot;]
                    </span>
                    <span className="text-faint">,</span>
                  </CodeLine>
                  <CodeLine number="07">
                    {"  "}
                    <span className="text-accent">problemSolver</span>
                    <span className="text-faint">:</span>{" "}
                    <span className="text-accent">true</span>
                    <span className="text-faint">,</span>
                  </CodeLine>
                  <CodeLine number="08">
                    <span className="text-faint">{"}"}</span>
                    <span className="text-faint">;</span>
                    <span className="typed-caret ml-2 inline-block h-[0.9em] w-[2px] translate-y-[0.08em] rounded-full bg-accent/70 align-middle" />
                  </CodeLine>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-line bg-elevated/35 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {education.shortDegree} · {education.period}
                  </span>
                  <span>UTF-8</span>
                </div>
              </div>

              {/* Floating fact cards */}
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-7 hidden items-center gap-3 rounded-2xl border border-line bg-surface/95 px-3.5 py-2.5 shadow-lift backdrop-blur-md sm:flex"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Server size={15} />
                </span>
                <span>
                  <span className="block text-[9px] font-medium uppercase tracking-[0.14em] text-faint">
                    Currently learning
                  </span>
                  <span className="mt-0.5 block text-xs font-semibold text-ink">
                    {learningSkills.join(" · ")}
                  </span>
                </span>
              </div>

              <div
                aria-hidden="true"
                className="absolute -bottom-7 -left-3 hidden items-center gap-3 rounded-2xl border border-line bg-surface/95 px-3.5 py-2.5 shadow-lift backdrop-blur-md sm:flex"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Award size={15} />
                </span>
                <span>
                  <span className="block text-[9px] font-medium uppercase tracking-[0.14em] text-faint">
                    CGPA
                  </span>
                  <span className="mt-0.5 block text-xs font-semibold text-ink">
                    {cgpaFact?.value}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
