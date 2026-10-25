import { ArrowUp } from "lucide-react";
import { data } from "../data";
import SocialLinks from "./SocialLinks";

/** Closing brand row, conditional social icons, and copyright. */
export default function Footer() {
  return (
    <footer className="border-t border-line/80 bg-canvas">
      <div className="container-page py-10">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={data.photo || "/kailash.jpeg"}
              alt={data.name}
              className="h-9 w-9 shrink-0 rounded-xl object-cover ring-1 ring-line shadow-soft"
            />
            <div>
              <p className="font-display text-sm font-semibold text-ink">
                {data.name}
              </p>
              <p className="mt-0.5 text-xs text-muted">{data.footer.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <SocialLinks size={16} />
            <a
              href="#top"
              className="icon-button"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={16} aria-hidden="true" focusable="false" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-line/70 pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>{data.footer.copyright}</p>
          <p>Built with React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
