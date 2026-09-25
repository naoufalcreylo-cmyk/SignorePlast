import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui/Container";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Nos produits",
  description:
    "Catalogue Signore Plast : baguettes d'angle PVC, profilés de finition, maille de plâtre, tubes annelés et accessoires de chantier. Fabrication marocaine, distribution nationale.",
};

const categories = [
  { label: "Tous", value: "tous" },
  { label: "Produits PVC", value: "produits" },
  { label: "Accessoires", value: "accessoires" },
] as const;

export default async function ProduitsPage({
  searchParams,
}: {
  searchParams: Promise<{ categorie?: string }>;
}) {
  const { categorie } = await searchParams;
  const active =
    categorie === "produits" || categorie === "accessoires" ? categorie : "tous";

  const filtered =
    active === "tous" ? products : products.filter((p) => p.category === active);

  const filterOptions = categories.map((c) => ({
    ...c,
    count:
      c.value === "tous"
        ? products.length
        : products.filter((p) => p.category === c.value).length,
  }));

  return (
    <>
      <PageHero
        kicker="Catalogue"
        title="Nos produits"
        description="Profilés PVC pour la finition murale et accessoires de chantier, fabriqués par Signore Plast et distribués sur tout le territoire marocain."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Produits" }]}
      />

      <section className="py-14 sm:py-20">
        <Container>
          <CategoryFilter options={filterOptions} active={active} basePath="/produits" />

          <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.sourceId} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-ink-500">
              Aucun produit dans cette catégorie pour le moment.
            </p>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
