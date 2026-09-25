import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { QuoteButton } from "@/components/QuoteButton";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { getProductBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Signore Plast`,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const categoryHref =
    product.category === "produits"
      ? "/produits?categorie=produits"
      : "/produits?categorie=accessoires";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.shortDescription,
            image: `https://signoreplast.ma${product.image}`,
            brand: { "@type": "Brand", name: "Signore Plast" },
            category: product.categoryLabel,
          }),
        }}
      />

      <div className="border-b border-steel-200 bg-steel-50 py-4">
        <Container>
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Produits", href: "/produits" },
              { label: product.categoryLabel, href: categoryHref },
              { label: product.name },
            ]}
          />
        </Container>
      </div>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-square overflow-hidden rounded-md border border-steel-200 bg-steel-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-contain p-10"
              />
            </div>

            <div>
              <Link
                href={categoryHref}
                className="text-xs font-bold uppercase tracking-widest text-red-600"
              >
                {product.categoryLabel}
              </Link>
              <h1 className="mt-3 text-3xl font-extrabold text-navy-950 sm:text-4xl">
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                Disponibilité : {product.availability}
              </div>

              <p className="mt-6 text-base leading-relaxed text-ink-700">
                {product.shortDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <QuoteButton productName={product.name} size="lg" />
                <Button href="/contact" variant="ghost" size="lg">
                  Nous contacter
                </Button>
              </div>

              <div className="mt-12 space-y-10 border-t border-steel-200 pt-10">
                <div>
                  <h2 className="text-lg font-bold text-navy-950">Description</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-700">
                    {product.description.map((paragraph) => (
                      <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {product.specifications && (
                  <div>
                    <h2 className="text-lg font-bold text-navy-950">
                      Caractéristiques / Applications
                    </h2>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-700">
                      {product.specifications.map((spec) => (
                        <li key={spec} className="flex gap-2.5">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="mt-0.5 shrink-0 text-red-600"
                            aria-hidden="true"
                          >
                            <path
                              d="M5 13l4 4L19 7"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-steel-50 py-16 sm:py-20">
          <Container>
            <h2 className="text-2xl font-extrabold text-navy-950">
              Autres produits de la catégorie {product.categoryLabel}
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.sourceId} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
