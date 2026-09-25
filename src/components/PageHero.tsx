import { Breadcrumb, Crumb } from "@/components/Breadcrumb";
import { Container } from "@/components/ui/Container";

export function PageHero({
  kicker,
  title,
  description,
  crumbs,
}: {
  kicker?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="border-b border-steel-200 bg-navy-950 py-14 sm:py-18">
      <Container>
        <div className="mb-6 text-steel-300 [&_a]:text-steel-300 [&_a:hover]:text-white [&_span]:text-white">
          <Breadcrumb items={crumbs} />
        </div>
        {kicker && (
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            {kicker}
          </span>
        )}
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel-300">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
