"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "../../lib/utils";
import { playSound } from "../../lib/sound-engine";
import { click003Sound } from "../../lib/click-003";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Now", href: "/now" },
];

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (href: string) => pathname === href;

  // Same shape at every width; just a little smaller below `sm`.
  const linkClass = (active: boolean) =>
    cn(
      "rounded-md px-2 py-1 text-[12px] font-medium no-underline transition sm:px-2.5 sm:py-1.5 sm:text-[13px]",
      active
        ? "bg-[var(--accent-light)] text-[var(--foreground)]"
        : "text-[var(--muted)] hover:bg-[var(--accent-light)] hover:text-[var(--foreground)]",
    );

  const iconButton =
    "inline-flex items-center justify-center rounded-full p-1.5 text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--foreground)] sm:p-2";

  const iconSize = "flex items-center gap-0.5 sm:gap-1";

  return (
    <div className="flex items-center justify-between">
      <nav aria-label="Main" className="flex items-center gap-0.5 sm:gap-1">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={linkClass(isActive(link.href))}
            aria-current={isActive(link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-0.5 sm:gap-1">
        <button
          type="button"
          onClick={() => setSoundEnabled((enabled) => !enabled)}
          className={iconButton}
          aria-label="Interface sounds"
          aria-pressed={soundEnabled}
          title={soundEnabled ? "Interface sounds on" : "Interface sounds off"}
        >
          {soundEnabled ? (
            <p className={iconSize}>Mute</p>
          ) : (
            <p className={iconSize}>Unmute</p>
          )}
        </button>

        <button
          type="button"
          onClick={() => {
            if (soundEnabled) {
              void playSound(click003Sound.dataUri, { volume: 0.5 });
            }
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
          }}
          className={iconButton}
          aria-label={
            resolvedTheme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          {mounted && resolvedTheme === "dark" ? (
            <p className={iconSize}>Light</p>
          ) : (
            <p className={iconSize}>Dark</p>
          )}
        </button>
      </div>
    </div>
  );
}
