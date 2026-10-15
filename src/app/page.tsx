import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

// TODO: 보여 주기용 더미 데이터 — 실제 프로필과 링크로 교체하기
const profile = {
  name: "June",
  bio: "세계 최강 바이브 코더",
  imageSrc: "/profile-placeholder.svg",
};

const links = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-zinc-50 px-4 py-12 sm:py-16 dark:bg-black">
      <div className="flex w-full max-w-md flex-col gap-8">
        <ProfileHeader {...profile} />
        <nav aria-label="링크 목록">
          <ul className="flex flex-col gap-5 sm:gap-6">
            {links.map((link) => (
              <li key={link.id}>
                <LinkCard title={link.title} url={link.url} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
