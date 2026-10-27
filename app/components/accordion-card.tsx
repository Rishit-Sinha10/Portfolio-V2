"use client";
import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type AccordionCardProps = {
  /** Small leading mark (about 20px): an icon, logo or initial. */
  logo?: ReactNode;
  title: string;
  subtitle?: string;
  /** Right-aligned muted text, usually a date range. */
  meta?: string;
  /** Extra controls on the right (links, star count). Rendered outside the toggle button. */
  trailing?: ReactNode;
  defaultOpen?: boolean;
  children?: ReactNode;
};

export default function AccordionCard({
  logo,
  title,
  subtitle,
  meta,
  trailing,
  defaultOpen = false,
  children,
}: AccordionCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const toggle = () => setOpen((value) => !value);

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[color-mix(in_srgb,var(--foreground)_20%,var(--border))]">
      <div className="flex items-center gap-3 px-3.5 py-3">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={toggle}
          className="flex min-w-0 flex-1 items-center gap-3 rounded-sm text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--foreground)]"
        >
          {logo ? (
            <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[var(--foreground)]">
              {logo}
            </span>
          ) : null}
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[13px] font-medium text-[var(--foreground)]">
              {title}
            </span>
            {subtitle ? (
              <span className="mt-0.5 block truncate text-[11px] text-[var(--muted)]">
                {subtitle}
              </span>
            ) : null}
          </span>
        </button>

        {meta ? (
          <span className="hidden shrink-0 text-[11px] tabular-nums text-[var(--muted)] sm:block">
            {meta}
          </span>
        ) : null}
        {trailing}

        <button
          type="button"
          aria-label={open ? "Collapse" : "Expand"}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={toggle}
          className="-mr-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[var(--muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--foreground)]"
        >
          <ChevronDown
            size={14}
            strokeWidth={1.75}
            aria-hidden="true"
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* grid-rows 0fr -> 1fr animates height without measuring; `invisible` keeps hidden links out of the tab order */}
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`min-h-0 overflow-hidden transition-[visibility] duration-300 ${
            open ? "visible" : "invisible"
          }`}
        >
          <div className="pb-3.5 pl-[2.9rem] pr-3.5 pt-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
