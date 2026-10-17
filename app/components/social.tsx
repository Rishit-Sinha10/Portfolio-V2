import DiscordIcon from "./discord";
import GithubIcon from "./github";
import GmailIcon from "./gmail-icon";
import LinkedinIcon from "./linkedin";
import TwitterXIcon from "./x-icon";
const links = [
  {
    label: "GitHub",
    href: "https://github.com/Rishit-Sinha10",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rishit-sinha-6953ab363/",
    Icon: LinkedinIcon,
  },
  {
    label: "Gmail",
    href: "mailto:Sinharishit04@gmail.com",
    Icon: GmailIcon,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/890116546276507688",
    Icon: DiscordIcon,
  },
  {
    label: "X",
    href: "https://x.com/RishitSinh41144",
    Icon: TwitterXIcon,
  },
];
export const SocialIcon = () => {
  return (
    <nav aria-label="Social links">
      <ul className="flex flex-wrap items-center gap-2">
        {links.map(({ label, href, Icon }) => {
          const isExternal = !href.startsWith("mailto:");

          return (
            <li key={label}>
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-xs font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)] focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
