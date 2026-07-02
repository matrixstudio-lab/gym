export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="hazard-stripe relative overflow-hidden py-3 border-y-2 border-ink">
      <div className="flex w-max animate-[marquee_22s_linear_infinite] motion-reduce:animate-none">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-6 font-display text-ink text-lg sm:text-xl uppercase tracking-wide shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
