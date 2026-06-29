export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red-700">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-base leading-7 text-zinc-600">{intro}</p> : null}
    </div>
  );
}
