import { QuoteButton } from "@/components/QuoteButton";
import { company } from "@/data/company";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          Vous avez un projet ou besoin d&apos;une quantité professionnelle&nbsp;?
        </h2>
        <p className="max-w-xl text-steel-300">
          Notre équipe étudie votre besoin — quantité, référence, délai — et
          vous répond avec un devis adapté.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <QuoteButton size="lg" />
          <a
            href={company.contact.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/70 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-navy-900"
          >
            Appeler le {company.contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
