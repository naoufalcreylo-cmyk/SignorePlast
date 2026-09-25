import Link from "next/link";

export interface FilterOption {
  label: string;
  value: string;
  count: number;
}

export function CategoryFilter({
  options,
  active,
  basePath,
}: {
  options: FilterOption[];
  active: string;
  basePath: string;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer par catégorie">
      {options.map((option) => {
        const isActive = option.value === active;
        const href =
          option.value === "tous" ? basePath : `${basePath}?categorie=${option.value}`;
        return (
          <Link
            key={option.value}
            href={href}
            role="tab"
            aria-selected={isActive}
            className={`inline-flex items-center gap-2 rounded-sm px-4 py-2.5 text-sm font-semibold transition-colors ${
              isActive
                ? "bg-navy-950 text-white"
                : "border border-steel-300 text-ink-700 hover:border-navy-950 hover:text-navy-950"
            }`}
          >
            {option.label}
            <span
              className={`rounded-full px-1.5 py-0.5 text-xs font-bold ${
                isActive ? "bg-white/20" : "bg-steel-100 text-ink-500"
              }`}
            >
              {option.count}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
