/**
 * Shared section intro: numbered eyebrow, display heading, optional description.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  centered = false,
  className = "",
}) {
  return (
    <div
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        id={id}
        className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.65rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[0.95rem] leading-7 text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
