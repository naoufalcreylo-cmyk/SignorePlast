import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { QuoteButton } from "@/components/QuoteButton";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Signore Plast à Souk Sebt Oulad Nemma, Fquih Ben Salah : téléphone, email, adresse et demande de devis.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    "Old Zmam, Souk Sebt Oulad Nemma, Fquih Ben Salah, Maroc"
  )}&output=embed`;

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Parlons de votre projet"
        description="Une question, une demande de devis, une quantité professionnelle à commander ? Notre équipe vous répond rapidement."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-extrabold text-navy-950">
                N&apos;hésitez pas, appelez-nous à tout moment
              </h2>

              <ul className="mt-8 space-y-6">
                <ContactItem label="Téléphone">
                  <a href={company.contact.phoneHref} className="hover:text-red-600">
                    {company.contact.phone}
                  </a>
                </ContactItem>
                <ContactItem label="E-mail">
                  <a href={`mailto:${company.contact.email}`} className="hover:text-red-600">
                    {company.contact.email}
                  </a>
                </ContactItem>
                <ContactItem label="Siège social">{company.contact.address}</ContactItem>
              </ul>

              <div className="mt-10 rounded-md bg-navy-950 p-6">
                <p className="text-sm text-steel-300">
                  Besoin d&apos;un devis pour une quantité professionnelle&nbsp;?
                </p>
                <QuoteButton size="lg" className="mt-4 w-full" />
              </div>

              <div className="mt-8 aspect-video overflow-hidden rounded-md border border-steel-200">
                <iframe
                  src={mapSrc}
                  title="Localisation Signore Plast — Souk Sebt Oulad Nemma"
                  loading="lazy"
                  className="h-full w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="mb-6 text-xl font-extrabold text-navy-950">
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li>
      <p className="text-xs font-bold uppercase tracking-widest text-ink-500">{label}</p>
      <p className="mt-1 text-base font-semibold text-navy-950">{children}</p>
    </li>
  );
}
