export function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: string;
}) {
  return (
    <h2
      id={id}
      className="mb-3 font-serif text-[18px] font-normal leading-tight tracking-[-0.01em] text-[var(--foreground)]"
    >
      {children}
    </h2>
  );
}
