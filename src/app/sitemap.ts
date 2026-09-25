import { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://signoreplast.ma";
  const staticRoutes = ["", "/produits", "/a-propos", "/savoir-faire", "/contact"].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
    })
  );

  const productRoutes = products.map((p) => ({
    url: `${base}/produits/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
