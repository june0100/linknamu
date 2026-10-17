import type { ReactNode } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/LinkIcons";

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  icon?: ReactNode;
};

const iconClassName = "h-5 w-5 shrink-0";

export const links: LinkItem[] = [
  {
    id: "github",
    title: "깃허브",
    url: "https://github.com/june0100",
    icon: <GitHubIcon className={iconClassName} />,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com",
    icon: <LinkedInIcon className={iconClassName} />,
  },
  {
    id: "email",
    title: "이메일",
    url: "mailto:june0100@gmail.com",
    icon: <MailIcon className={iconClassName} />,
  },
];

export const linkIds = new Set(links.map((link) => link.id));
