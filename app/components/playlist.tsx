// components/playlist.tsx
"use client";

import useSWR from "swr";
import Image from "next/image";

type Track = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

// Last.fm returns this hash for tracks with no cover art
const isPlaceholder = (url?: string) =>
  !url || url.includes("2a96cbd8b46e442fc41c2b86b821562f");

export default function NowPlaying() {
  const { data } = useSWR<Track>("/api/spotify", fetcher, {
    refreshInterval: 15000,
  });

  if (!data?.title) return null;

  const hasArt = !isPlaceholder(data.albumImageUrl);

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 flex max-w-[16rem] items-center gap-2.5 rounded-md bg-[var(--surface)] p-1.5 transition-colors"
    >
      {hasArt && (
        <Image
          src={data.albumImageUrl!}
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 shrink-0 rounded-[3px]"
        />
      )}
      <div className="min-w-0">
        <p className="flex items-center gap-1.5 text-[10px] leading-none text-[var(--muted)]">
          {data.isPlaying ? (
            <>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Now playing
            </>
          ) : (
            "Last played"
          )}
        </p>
        <p className="mt-1 truncate text-[12px] leading-tight text-[var(--foreground)]">
          {data.title}
          <span className="text-[var(--muted)]"> · {data.artist}</span>
        </p>
      </div>
    </a>
  );
}
