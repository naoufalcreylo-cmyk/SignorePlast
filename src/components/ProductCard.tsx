import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produits/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-steel-200 bg-white transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-steel-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-navy-950/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {product.categoryLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold leading-snug text-navy-950 group-hover:text-red-600">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-700">
          {product.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-red-600">
          Voir le produit
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
