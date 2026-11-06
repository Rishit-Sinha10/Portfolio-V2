// app/api/spotify/route.ts
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
const { LASTFM_API_KEY, LASTFM_USERNAME } = process.env;

type LastFmImage = {
  size?: string;
  "#text"?: string;
};

type LastFmTrack = {
  image?: LastFmImage[];
  "@attr"?: { nowplaying?: string };
  name?: string;
  artist?: { "#text"?: string };
  album?: { "#text"?: string };
  url?: string;
};

type LastFmResponse = {
  recenttracks?: { track?: LastFmTrack[] };
};

export async function GET() {
  try {
    const url = new URL("https://ws.audioscrobbler.com/2.0/");
    url.search = new URLSearchParams({
      method: "user.getrecenttracks",
      user: LASTFM_USERNAME!,
      api_key: LASTFM_API_KEY!,
      format: "json",
      limit: "1",
    }).toString();

    const res = await fetch(url, { cache: "no-store" });
    const data = (await res.json()) as LastFmResponse;
    const track = data.recenttracks?.track?.[0];

    if (!track) return NextResponse.json({ isPlaying: false });

    const images = track.image ?? [];
    const cover =
      images.find((image) => image.size === "extralarge")?.["#text"] ||
      images.at(-1)?.["#text"] ||
      "";

    return NextResponse.json(
      {
        isPlaying: track["@attr"]?.nowplaying === "true",
        title: track.name,
        artist: track.artist?.["#text"],
        album: track.album?.["#text"],
        albumImageUrl: cover,
        songUrl: track.url,
      },
      {
        headers: { "Cache-Control": "s-maxage=10, stale-while-revalidate=20" },
      },
    );
  } catch {
    return NextResponse.json({ isPlaying: false });
  }
}
