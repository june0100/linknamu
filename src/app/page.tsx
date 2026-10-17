import LinkCard from "@/components/LinkCard";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/LinkIcons";
import ProfileHeader from "@/components/ProfileHeader";

// TODO: 보여 주기용 더미 데이터 — 실제 프로필과 링크로 교체하기
const profile = {
  name: "개발의 신",
  bio: "Linker | 세상을 연결한다.",
  imageSrc: "/profile.jpg",
};

const iconClassName = "h-5 w-5 shrink-0";

const links = [
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

export default function Home() {
  return (
    <main className="relative isolate flex flex-1 justify-center overflow-hidden px-6 pt-16 pb-20 sm:px-8 sm:pt-24">
      {/* 글래스 카드 뒤로 비치는 은은한 빛 번짐 */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[var(--glow-2)] blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[var(--glow-1)] blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[var(--glow-2)] blur-3xl" />
      </div>
      <div className="flex w-full max-w-sm flex-col gap-10">
        <ProfileHeader {...profile} />
        <nav aria-label="링크 목록">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.id}>
                <LinkCard title={link.title} url={link.url} icon={link.icon} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
