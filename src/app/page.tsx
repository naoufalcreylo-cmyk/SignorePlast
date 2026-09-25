import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { QuoteButton } from "@/components/QuoteButton";
import { ProductCard } from "@/components/ProductCard";
import { PartnerLogos } from "@/components/PartnerLogos";
import { VideoSection } from "@/components/VideoSection";
import { CTASection } from "@/components/CTASection";
import { company } from "@/data/company";
import { products, productsByCategory } from "@/data/products";

export default function HomePage() {
  const featured = products.slice(0, 8);
  const produitsCount = productsByCategory("produits").length;
  const accessoiresCount = productsByCategory("accessoires").length;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="animate-fade-up">
            <span className="mb-5 inline-flex items-center gap-2 rounded-sm bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              {company.heroKicker}
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.25rem]">
              {company.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-300">
              Fabricant marocain de baguettes d&apos;angle, profilés PVC et
              accessoires de chantier, installé à Souk Sebt Oulad Nemma et
              distribué sur tout le territoire marocain.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/produits" variant="primary" size="lg">
                Découvrir nos produits
              </Button>
              <QuoteButton variant="outline-light" size="lg" />
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              <Stat value="2020" label="Année de création" />
              <Stat value="4+ ans" label="D'expérience en plasturgie" />
              <Stat value={`${produitsCount + accessoiresCount}`} label="Références au catalogue" />
              <Stat value="100%" label="Distribution nationale" />
            </dl>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-md shadow-2xl">
              <Image
                src="/images/site/hero-signoreplast.png"
                alt="Fabrication Signore Plast — le meilleur de la plasturgie"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <PartnerLogos />

      {/* ABOUT / INTRO */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-md shadow-lg lg:order-1">
            <Image
              src="/images/site/video-thumb-2.png"
              alt="Production Signore Plast"
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionTitle kicker="Qui sommes-nous" title="SIGNORE PLAST" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-700">
              {company.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <Button href="/a-propos" variant="ghost" className="mt-8">
              En savoir plus sur l&apos;entreprise
            </Button>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="bg-steel-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="Pourquoi Signore Plast"
            title="Une fabrication marocaine au service du bâtiment"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {company.valueProps.map((item, i) => (
              <div
                key={item.title}
                className="rounded-md border border-steel-200 bg-white p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm bg-navy-950 text-sm font-extrabold text-white">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="Catalogue"
            title="Produits et accessoires"
            description="Une gamme pensée pour les professionnels du bâtiment : profilés PVC pour la finition murale et outillage pour la mise en œuvre."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CategoryCard
              title="Nos produits PVC"
              description="Baguettes et profilés d'angle, rastrelles, maille de plâtre, tubes annelés — fabriqués pour protéger et finir les murs."
              count={produitsCount}
              image="/images/products/parle-angle-pvc-exterieur.png"
              href="/produits?categorie=produits"
            />
            <CategoryCard
              title="Nos accessoires"
              description="Outillage de chantier pour la mise en œuvre des enduits et plâtres : truelles, taloches, platoirs, pièces pour machines de projection."
              count={accessoiresCount}
              image="/images/products/rotor-et-stator.png"
              href="/produits?categorie=accessoires"
              dark
            />
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-steel-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle kicker="Sélection" title="Produits en vedette" />
            <Link
              href="/produits"
              className="text-sm font-bold text-navy-950 hover:text-red-600"
            >
              Voir tout le catalogue →
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.sourceId} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION / SAVOIR-FAIRE TEASER */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionTitle
              kicker="Savoir-faire"
              title="Une équipe et des équipements pensés pour la qualité"
              description="Nous modernisons constamment nos équipements de plasturgie pour répondre aux exigences croissantes de nos clients, avec une équipe dévouée de professionnels compétents et passionnés."
            />
            <Button href="/savoir-faire" variant="secondary" className="mt-8">
              Découvrir notre savoir-faire
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-lg">
            <Image
              src="/images/site/video-thumb-3.png"
              alt="Équipe Signore Plast en production"
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <VideoSection />

      <CTASection />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-extrabold text-white sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-steel-300">{label}</p>
    </div>
  );
}

function CategoryCard({
  title,
  description,
  count,
  image,
  href,
  dark = false,
}: {
  title: string;
  description: string;
  count: number;
  image: string;
  href: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-md p-8 shadow-lg ${
        dark ? "bg-navy-950" : "bg-navy-800"
      }`}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-contain p-10 opacity-90 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/10" />
      </div>
      <div className="relative">
        <span className="text-xs font-bold uppercase tracking-widest text-red-400">
          {count} référence{count > 1 ? "s" : ""}
        </span>
        <h3 className="mt-2 text-2xl font-extrabold text-white">{title}</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-steel-300">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-white">
          Découvrir
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
