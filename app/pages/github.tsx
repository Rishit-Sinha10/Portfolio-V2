"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import { Tooltip } from "react-tooltip";
import "react-calendar-heatmap/dist/styles.css";
import "react-tooltip/dist/react-tooltip.css";

const GITHUB_HANDLE = "Rishit-Sinha10";
// `?y=last` returns only the trailing 12 months instead of every year.
const GITHUB_CONTRIBUTIONS_ENDPOINT =
  "https://github-contributions-api.jogruber.de/v4";

type HeatmapValue = { date: string; count: number; level?: number };

type LiveContributionResponse = {
  contributions?: Array<{ date?: string; count?: number; level?: number }>;
};

// Compact fallback data: [date, count]. Days that are not listed are treated as 0.
const SAMPLE_ROWS: Array<[string, number]> = [
  ["2026-01-01", 1],
  ["2026-01-02", 2],
  ["2026-01-05", 2],
  ["2026-01-09", 8],
  ["2026-01-10", 15],
  ["2026-01-13", 2],
  ["2026-01-19", 3],
  ["2026-01-29", 8],
  ["2026-02-03", 4],
  ["2026-02-11", 1],
  ["2026-02-12", 22],
  ["2026-02-13", 1],
  ["2026-02-14", 15],
  ["2026-02-15", 1],
  ["2026-02-19", 2],
  ["2026-02-23", 1],
  ["2026-02-24", 2],
  ["2026-03-03", 1],
  ["2026-03-06", 5],
  ["2026-03-07", 1],
  ["2026-03-08", 22],
  ["2026-03-09", 2],
  ["2026-03-10", 3],
  ["2026-03-11", 3],
  ["2026-03-12", 3],
  ["2026-03-13", 1],
  ["2026-03-15", 2],
  ["2026-03-16", 1],
  ["2026-03-17", 3],
  ["2026-03-18", 4],
  ["2026-03-19", 3],
  ["2026-03-22", 3],
  ["2026-03-23", 8],
  ["2026-03-26", 3],
  ["2026-03-28", 1],
  ["2026-03-29", 2],
  ["2026-04-02", 6],
  ["2026-04-03", 6],
  ["2026-04-04", 5],
  ["2026-04-06", 6],
  ["2026-04-07", 6],
  ["2026-04-08", 4],
  ["2026-04-09", 2],
  ["2026-04-10", 4],
  ["2026-04-12", 6],
  ["2026-04-18", 1],
  ["2026-04-19", 2],
  ["2026-04-24", 1],
  ["2026-05-08", 3],
  ["2026-05-10", 1],
  ["2026-05-11", 3],
  ["2026-05-12", 1],
  ["2026-05-16", 2],
  ["2026-05-18", 2],
  ["2026-05-19", 2],
  ["2026-06-01", 2],
  ["2026-06-02", 1],
  ["2026-06-03", 4],
  ["2026-06-04", 4],
  ["2026-06-10", 1],
  ["2026-06-12", 15],
  ["2026-06-13", 3],
  ["2026-06-14", 1],
  ["2026-06-15", 3],
  ["2026-06-17", 4],
  ["2026-06-18", 2],
  ["2026-06-19", 2],
  ["2026-06-20", 20],
  ["2026-06-22", 7],
  ["2026-06-26", 6],
  ["2026-06-28", 2],
  ["2026-06-29", 3],
  ["2026-06-30", 3],
  ["2026-07-02", 1],
  ["2026-07-03", 5],
  ["2026-07-10", 4],
];

export const sampleData: HeatmapValue[] = SAMPLE_ROWS.map(([date, count]) => ({
  date,
  count,
}));

const levelFromCount = (count: number) => {
  if (count <= 0) return 0;
  if (count >= 10) return 4;
  if (count >= 5) return 3;
  if (count >= 2) return 2;
  return 1;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

export default function ContributionGraph({
  values = sampleData,
}: {
  values?: HeatmapValue[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  // Keep the latest fallback without re-triggering the fetch on every render.
  const fallbackRef = useRef<HeatmapValue[]>(
    Array.isArray(values) && values.length > 0 ? values : sampleData,
  );
  fallbackRef.current =
    Array.isArray(values) && values.length > 0 ? values : sampleData;

  const [activityValues, setActivityValues] = useState<HeatmapValue[]>(
    fallbackRef.current,
  );

  useEffect(() => {
    let isMounted = true;

    const loadLiveContributions = async () => {
      try {
        const response = await fetch(
          `${GITHUB_CONTRIBUTIONS_ENDPOINT}/${GITHUB_HANDLE}?y=last`,
        );
        if (!response.ok) {
          throw new Error(
            `GitHub contributions request failed: ${response.status}`,
          );
        }
        const data = (await response.json()) as LiveContributionResponse;
        const contributions: HeatmapValue[] = Array.isArray(data.contributions)
          ? data.contributions
              .filter((item) => Boolean(item?.date))
              .map((item) => ({
                date: item.date as string,
                count: Number(item.count ?? 0),
                level: item.level,
              }))
          : [];

        if (isMounted && contributions.length > 0) {
          setActivityValues(contributions);
        }
      } catch {
        if (isMounted) setActivityValues(fallbackRef.current);
      }
    };

    loadLiveContributions();
    return () => {
      isMounted = false;
    };
  }, []);

  // Rolling 12-month window, computed once.
  const { today, startDate } = useMemo(() => {
    const t = new Date();
    const s = new Date(t);
    s.setFullYear(t.getFullYear() - 1);
    return { today: t, startDate: s };
  }, []);

  // Only count what is actually visible in the graph.
  const totalContributions = useMemo(
    () =>
      activityValues.reduce((sum, item) => {
        const d = new Date(item.date);
        return d >= startDate && d <= today ? sum + (item.count ?? 0) : sum;
      }, 0),
    [activityValues, startDate, today],
  );

  // Show the most recent weeks first (matters on mobile).
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, [activityValues]);

  const scrollBy = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 240, behavior: "smooth" });
  };

  return (
    <section id="github" className="w-full">
      <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
        <div className="relative flex items-center gap-1">
          <button
            type="button"
            aria-label="Scroll earlier"
            onClick={() => scrollBy(-1)}
            className="hidden shrink-0 items-center justify-center rounded-full border border-[var(--border)] p-1 text-[var(--muted)] transition hover:bg-[var(--accent-light)] sm:flex"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth [scrollbar-width:thin]"
          >
            <div className="min-w-[720px] px-1 pb-1 sm:min-w-[780px] [&_.react-calendar-heatmap_.color-github-0]:fill-[#ebedf0] [&_.react-calendar-heatmap_.color-github-1]:fill-[#9be9a8] [&_.react-calendar-heatmap_.color-github-2]:fill-[#40c463] [&_.react-calendar-heatmap_.color-github-3]:fill-[#30a14e] [&_.react-calendar-heatmap_.color-github-4]:fill-[#216e39] [&_.react-calendar-heatmap_rect]:[rx:2px] [&_.react-calendar-heatmap_text]:fill-[color:var(--muted)] [&_.react-calendar-heatmap_text]:text-[9px] dark:[&_.react-calendar-heatmap_.color-github-0]:fill-[#161b22]">
              <CalendarHeatmap
                startDate={startDate}
                endDate={today}
                values={activityValues}
                classForValue={(value: HeatmapValue | undefined) => {
                  if (!value) return "color-github-0";
                  // Prefer GitHub's own level from the API; fall back to thresholds.
                  const level =
                    typeof value.level === "number"
                      ? value.level
                      : levelFromCount(value.count ?? 0);
                  return `color-github-${Math.min(Math.max(level, 0), 4)}`;
                }}
                tooltipDataAttrs={(value: HeatmapValue | undefined) => {
                  if (!value || !value.date) {
                    return { "data-tooltip-content": "No contributions" };
                  }
                  const count = value.count ?? 0;
                  return {
                    "data-tooltip-content": `${count} contribution${
                      count === 1 ? "" : "s"
                    } on ${formatDate(value.date)}`,
                  };
                }}
                gutterSize={2.5}
              />
            </div>
          </div>

          <button
            type="button"
            aria-label="Scroll later"
            onClick={() => scrollBy(1)}
            className="hidden shrink-0 items-center justify-center rounded-full border border-[var(--border)] p-1 text-[var(--muted)] transition hover:bg-[var(--accent-light)] sm:flex"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="mt-2 flex items-center justify-between text-[10px] text-[var(--muted)] sm:text-xs">
          <span>
            <span className="text-[var(--foreground)]">
              {totalContributions}
            </span>{" "}
            contributions in the last year
          </span>
          <div className="flex items-center gap-1">
            <span className="hidden sm:inline">Less</span>
            <div className="flex items-center gap-[2px] sm:gap-[3px]">
              {["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"].map(
                (color) => (
                  <span
                    key={color}
                    className="h-2 w-2 rounded-[1px] sm:h-[10px] sm:w-[10px] sm:rounded-[2px]"
                    style={{ backgroundColor: color }}
                  />
                ),
              )}
            </div>
            <span className="hidden sm:inline">More</span>
          </div>
        </div>

        <Tooltip
          anchorSelect="[data-tooltip-content]"
          className="!rounded-lg !px-2 !py-1 !text-xs"
        />
      </div>
    </section>
  );
}
