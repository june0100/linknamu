type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-h-14 w-full items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-base font-semibold shadow-sm transition hover:-translate-y-0.5 hover:border-green-500 hover:shadow-md active:translate-y-0 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-green-500"
    >
      {title}
    </a>
  );
}
