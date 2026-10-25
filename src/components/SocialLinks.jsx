import { getSocialLinks } from "../data";
import { SocialIcon } from "./Icon";

/**
 * Renders every configured social link as an icon button.
 * Returns nothing when all config links are empty.
 */
export default function SocialLinks({ className = "", size = 17 }) {
  const links = getSocialLinks();

  if (!links.length) return null;

  return (
    <ul className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {links.map((link) => (
        <li key={link.key}>
          <a
            href={link.href}
            className="social-dot"
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer noopener" : undefined}
            aria-label={
              link.external ? `${link.label} (opens in a new tab)` : link.label
            }
            title={link.label}
          >
            <SocialIcon name={link.icon} size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
