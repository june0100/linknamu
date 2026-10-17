import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links } from "@/data/links";

// TODO: 보여 주기용 더미 데이터 — 실제 프로필과 링크로 교체하기
const profile = {
  name: "개발의 신",
  bio: "Linker | 세상을 연결한다.",
  imageSrc: "/profile.jpg",
};

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
          <LinkList links={links} />
        </nav>
      </div>
    </main>
  );
}
