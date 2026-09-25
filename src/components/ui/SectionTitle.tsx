export function SectionTitle({
  kicker,
  title,
  description,
  align = "left",
  light = false,
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {kicker && (
        <span
          className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-red-400" : "text-red-600"
          }`}
        >
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {kicker}
        </span>
      )}
      <h2
        className={`text-3xl font-extrabold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-steel-200" : "text-ink-700"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
