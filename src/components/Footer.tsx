import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company, nav } from "@/data/company";
import { products } from "@/data/products";

export function Footer() {
  const featuredProducts = products.slice(0, 5);

  return (
    <footer className="bg-navy-950 text-steel-200">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/brand/signoreplast-logo-white.png"
            alt="Signore Plast"
            width={160}
            height={100}
            className="h-14 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-steel-300">
            Fabricant marocain de profilés PVC pour le bâtiment depuis 2020 —
            baguettes d&apos;angle, profilés de finition et accessoires de
            chantier, distribués sur tout le territoire marocain.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialLink href={company.social.facebook} label="Facebook" />
            <SocialLink href={company.social.linkedin} label="LinkedIn" />
            <SocialLink href={company.social.twitter} label="Twitter / X" />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-red-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Produits
          </h3>
          <ul className="space-y-2.5 text-sm">
            {featuredProducts.map((p) => (
              <li key={p.sourceId}>
                <Link href={`/produits/${p.slug}`} className="hover:text-red-400">
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/produits" className="font-semibold text-red-400 hover:text-red-300">
                Voir tout le catalogue →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={company.contact.phoneHref} className="hover:text-red-400">
                {company.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.contact.email}`} className="hover:text-red-400">
                {company.contact.email}
              </a>
            </li>
            <li className="text-steel-300">{company.contact.address}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-steel-300 sm:flex-row">
          <p>© {new Date().getFullYear()} Signore Plast. Tous droits réservés.</p>
          <p>Fabrication PVC · Souk Sebt Oulad Nemma, Maroc</p>
        </Container>
      </div>
    </footer>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-red-500 hover:text-red-400"
    >
      <span className="text-[11px] font-bold">{label.slice(0, 2).toUpperCase()}</span>
    </a>
  );
}
