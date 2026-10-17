import type { ReactNode } from "react";

type LinkCardProps = {
  title: string;
  url: string;
  icon?: ReactNode;
  clickCount: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, icon, clickCount, onClick }: LinkCardProps) {
  // mailto: 링크는 새 탭 대신 메일 앱을 바로 연다
  const isExternal = !url.startsWith("mailto:");

  return (
    <a
      href={url}
      onClick={onClick}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      className="relative flex min-h-15 w-full items-center justify-center rounded-3xl border border-white/70 bg-white/45 px-14 py-4 text-[15px] font-semibold shadow-[0_8px_24px_-14px_rgba(140,80,45,0.35)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_12px_28px_-14px_rgba(140,80,45,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9825a] dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_8px_24px_-14px_rgba(0,0,0,0.6)] dark:hover:bg-white/10"
    >
      {icon && (
        <span className="absolute left-5 flex items-center opacity-80">{icon}</span>
      )}
      {title}
      <span className="absolute right-5 text-xs font-medium tabular-nums text-muted">
        {clickCount.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
