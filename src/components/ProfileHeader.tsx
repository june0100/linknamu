import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_18px_40px_-16px_rgba(140,80,45,0.45),0_4px_12px_-4px_rgba(140,80,45,0.18)] ring-1 ring-white/80 dark:bg-white/10 dark:ring-white/15 dark:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.7)]">
        <Image
          src={imageSrc}
          alt={`${name} 프로필 사진`}
          width={128}
          height={128}
          priority
          className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-[15px] text-muted">{bio}</p>
    </header>
  );
}
