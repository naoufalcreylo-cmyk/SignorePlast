import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Signore Plast, fabricant marocain de profilés PVC installé à Souk Sebt Oulad Nemma depuis 2020. Savoir-faire en plasturgie et distribution sur tout le Maroc.",
};

export default function AProposPage() {
  return (
    <>
      <PageHero
        kicker="À propos"
        title="Qui est Signore Plast"
        description="Fabricant marocain de profilés PVC pour le bâtiment, installé à Souk Sebt Oulad Nemma."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle kicker="Notre histoire" title="Une entreprise marocaine de plasturgie" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-700">
                {company.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-lg">
              <Image
                src="/images/site/hero-signoreplast.png"
                alt="Fabrication Signore Plast"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-steel-50 py-16 sm:py-24">
        <Container>
          <SectionTitle
            kicker="Nos valeurs"
            title="Ce qui guide notre travail au quotidien"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {company.valueProps.map((item, i) => (
              <div key={item.title} className="rounded-md border border-steel-200 bg-white p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm bg-navy-950 text-sm font-extrabold text-white">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-md shadow-lg lg:order-1">
              <Image
                src="/images/site/video-thumb-3.png"
                alt="Équipe Signore Plast"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle
                kicker="Distribution"
                title="Un réseau qui couvre tout le territoire marocain"
                description="Grâce à un réseau de distribution national, Signore Plast est en mesure de satisfaire les demandes de fabrication des professionnels du bâtiment partout au Maroc, avec un haut niveau de qualité et de service."
              />
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
