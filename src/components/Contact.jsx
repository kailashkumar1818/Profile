import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Send,
} from "lucide-react";
import { config, data, getSocialLinks } from "../data";
import { SocialIcon } from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const initialValues = { name: "", email: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field, value) {
  const trimmed = value.trim();

  if (field === "name") {
    if (!trimmed) return "Please enter your name.";
    if (trimmed.length < 2) return "Name must be at least 2 characters.";
  }

  if (field === "email") {
    if (!trimmed) return "Please enter your email address.";
    if (!emailPattern.test(trimmed)) return "Enter a valid email address.";
  }

  if (field === "message") {
    if (!trimmed) return "Please enter a message.";
    if (trimmed.length < 10) return "Message must be at least 10 characters.";
  }

  return "";
}

function validateForm(values) {
  return {
    name: validateField("name", values.name),
    email: validateField("email", values.email),
    message: validateField("message", values.message),
  };
}

/** Visible label and short display value for each configured contact link. */
function getLinkDisplay(link) {
  if (link.key === "email") return config.email;
  return link.href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

/** Frontend-only contact form with inline validation and a success state. */
export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const successRef = useRef(null);

  const socialLinks = getSocialLinks();
  const hasErrors = Object.values(errors).some(Boolean);
  const firstName = values.name.trim().split(/\s+/)[0] || "there";

  useEffect(() => {
    if (isSent) successRef.current?.focus();
  }, [isSent]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));

    if (hasSubmitted) {
      setErrors((current) => ({
        ...current,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (!hasSubmitted && !value.trim()) return;

    setErrors((current) => ({
      ...current,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm(values);

    setHasSubmitted(true);
    setErrors(nextErrors);

    const firstInvalidField = ["name", "email", "message"].find(
      (field) => nextErrors[field],
    );

    if (firstInvalidField) {
      document.getElementById(`contact-${firstInvalidField}`)?.focus();
      return;
    }

    setIsSent(true);
  };

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
    setHasSubmitted(false);
    setIsSent(false);
    window.requestAnimationFrame(() => {
      document.getElementById("contact-name")?.focus();
    });
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-shell scroll-mt-24"
    >
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="contact-title"
              eyebrow={data.contact.eyebrow}
              title={data.contact.heading}
              description={data.contact.description}
            />

            {socialLinks.length > 0 ? (
              <div className="mt-8">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-faint">
                  Direct links
                </p>
                <ul className="mt-3 space-y-2.5">
                  {socialLinks.map((link) => (
                    <li key={link.key}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer noopener" : undefined}
                        className="group flex items-center gap-3 rounded-2xl border border-line bg-surface p-3.5 shadow-soft transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-lift"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-on-accent">
                          <SocialIcon name={link.icon} size={16} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-ink">
                            {link.label}
                          </span>
                          <span className="mt-0.5 block truncate text-xs text-faint">
                            {getLinkDisplay(link)}
                          </span>
                        </span>
                        <ArrowUpRight
                          size={15}
                          className="shrink-0 text-faint transition-colors group-hover:text-accent"
                          aria-hidden="true"
                          focusable="false"
                        />
                        {link.external ? (
                          <span className="sr-only"> (opens in a new tab)</span>
                        ) : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-8 flex items-center gap-4 rounded-3xl border border-line bg-elevated/40 p-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent font-display text-sm font-bold text-on-accent shadow-soft">
                {data.initials}
              </span>
              <div className="min-w-0">
                <p className="font-display text-sm font-semibold text-ink">
                  {data.name}
                </p>
                <p className="mt-0.5 text-xs leading-5 text-muted">
                  {data.heroKicker}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-lift sm:p-8">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-accent text-on-accent shadow-soft">
                  <Send size={17} aria-hidden="true" focusable="false" />
                </span>
                <div>
                  <h3
                    id="contact-form-title"
                    className="text-lg font-semibold tracking-[-0.02em] text-ink"
                  >
                    Send a message
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Share a question, note, or idea.
                  </p>
                </div>
              </div>

              {isSent ? (
                <div
                  ref={successRef}
                  tabIndex={-1}
                  role="status"
                  aria-live="polite"
                  className="flex min-h-[22rem] flex-col items-center justify-center text-center outline-none"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-accent/10 text-accent">
                    <CheckCircle2 size={28} aria-hidden="true" focusable="false" />
                  </span>
                  <h4 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-ink">
                    Thanks, {firstName}.
                  </h4>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                    Your message passed validation. This frontend-only form does
                    not send data anywhere yet.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-secondary mt-6"
                  >
                    Write another message
                  </button>
                </div>
              ) : (
                <form
                  noValidate
                  onSubmit={handleSubmit}
                  aria-labelledby="contact-form-title"
                  className="mt-7"
                >
                  {hasSubmitted && hasErrors ? (
                    <p className="sr-only" role="alert">
                      Please correct the highlighted fields and try again.
                    </p>
                  ) : null}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-muted"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        maxLength={100}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name ? "contact-name-error" : undefined
                        }
                        className={`input-field ${
                          errors.name
                            ? "border-rose-500/60 focus:border-rose-500"
                            : ""
                        }`}
                      />
                      {errors.name ? (
                        <p
                          id="contact-name-error"
                          className="mt-2 flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400"
                        >
                          <AlertCircle size={12} aria-hidden="true" focusable="false" />
                          {errors.name}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-muted"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={254}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "contact-email-error" : undefined
                        }
                        className={`input-field ${
                          errors.email
                            ? "border-rose-500/60 focus:border-rose-500"
                            : ""
                        }`}
                      />
                      {errors.email ? (
                        <p
                          id="contact-email-error"
                          className="mt-2 flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400"
                        >
                          <AlertCircle size={12} aria-hidden="true" focusable="false" />
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <label
                        htmlFor="contact-message"
                        className="block text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-muted"
                      >
                        Message
                      </label>
                      <span className="font-mono text-[0.6rem] tracking-wide text-faint" aria-hidden="true">
                        {values.message.length}/2000
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      maxLength={2000}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell me what's on your mind…"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "contact-message-error" : undefined
                      }
                      className={`input-field min-h-[8rem] resize-y ${
                        errors.message
                          ? "border-rose-500/60 focus:border-rose-500"
                          : ""
                      }`}
                    />
                    {errors.message ? (
                      <p
                        id="contact-message-error"
                        className="mt-2 flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400"
                      >
                        <AlertCircle size={12} aria-hidden="true" focusable="false" />
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <button type="submit" className="btn-primary mt-5 w-full">
                    Send message
                    <Send size={15} aria-hidden="true" focusable="false" />
                  </button>

                  <p className="mt-3 text-center text-[0.68rem] leading-5 text-faint">
                    {data.contact.formNote}
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
