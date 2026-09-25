import Image from "next/image";
import { company } from "@/data/company";

export function PartnerLogos() {
  return (
    <div className="border-y border-steel-200 bg-steel-50 py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-ink-500">
          Signore Plast et ses partenaires
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {company.partners.map((partner) => (
            <div key={partner.name} className="flex h-12 items-center opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0">
              <Image
                src={partner.image}
                alt={partner.name}
                width={140}
                height={48}
                className="h-10 w-auto object-contain sm:h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
