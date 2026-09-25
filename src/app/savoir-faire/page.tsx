import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { VideoSection } from "@/components/VideoSection";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Notre savoir-faire",
  description:
    "Fabrication, production et distribution : découvrez le savoir-faire de Signore Plast en plasturgie PVC pour le bâtiment.",
};

const steps = [
  {
    title: "Plasturgie",
    description:
      "Un savoir-faire développé depuis 2020 dans la transformation du PVC pour des profilés destinés au bâtiment.",
  },
  {
    title: "Fabrication",
    description:
      "Des équipements modernisés en continu pour répondre aux exigences croissantes de nos clients professionnels.",
  },
  {
    title: "Équipe",
    description:
      "Une équipe dévouée de professionnels compétents et passionnés, au cœur de la production Signore Plast.",
  },
  {
    title: "Distribution",
    description:
      "Un réseau de distribution couvrant tout le territoire marocain pour livrer chantiers et revendeurs.",
  },
];

export default function SavoirFairePage() {
  return (
    <>
      <PageHero
        kicker="Notre savoir-faire"
        title="De la plasturgie à la finition"
        description="Signore Plast conçoit et fabrique ses profilés PVC à Souk Sebt Oulad Nemma, avec une équipe et des équipements dédiés à la qualité."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Notre savoir-faire" }]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-lg">
              <Image
                src="/images/site/hero-signoreplast.png"
                alt="Production Signore Plast"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
            <SectionTitle
              kicker="Production"
              title="Une fabrication marocaine, du PVC au produit fini"
              description="Nous avons constamment évolué, en améliorant nos compétences et en modernisant nos équipements pour répondre aux demandes et exigences croissantes de nos clients."
            />
          </div>
        </Container>
      </section>

      <section className="bg-steel-50 py-16 sm:py-24">
        <Container>
          <SectionTitle kicker="Étapes" title="Notre chaîne de valeur" align="center" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="rounded-md border border-steel-200 bg-white p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm bg-navy-950 text-sm font-extrabold text-white">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-navy-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <VideoSection />

      <CTASection />
    </>
  );
}
