"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/links";

type LinkListProps = {
  links: LinkItem[];
};

export default function LinkList({ links }: LinkListProps) {
  // 서버 값을 받기 전에는 모든 링크가 0회로 보인다
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let ignore = false;

    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data: { counts: Record<string, number> }) => {
        // 응답 전에 누른 클릭이 사라지지 않도록 서버 값에 더해 준다
        if (!ignore) {
          setCounts((prev) => {
            const next = { ...data.counts };
            for (const [id, count] of Object.entries(prev)) {
              next[id] = (next[id] ?? 0) + count;
            }
            return next;
          });
        }
      })
      .catch(() => {});

    return () => {
      ignore = true;
    };
  }, []);

  function handleClick(id: string) {
    // 화면에는 바로 반영하고, 요청은 페이지를 떠나도 끝까지 보내지도록 keepalive를 건다
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            icon={link.icon}
            clickCount={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
