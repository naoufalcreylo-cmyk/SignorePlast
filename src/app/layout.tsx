import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileQuoteBar } from "@/components/MobileQuoteBar";
import { QuoteModalProvider } from "@/components/QuoteModalProvider";
import { company } from "@/data/company";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://signoreplast.ma"),
  title: {
    default: "Signore Plast | Fabricant marocain de profilés PVC pour le bâtiment",
    template: "%s | Signore Plast",
  },
  description:
    "Signore Plast, fabricant marocain de baguettes d'angle PVC, profilés de finition et accessoires de chantier depuis 2020. Fabrication à Souk Sebt Oulad Nemma, distribution sur tout le Maroc.",
  openGraph: {
    title: "Signore Plast | Fabricant marocain de profilés PVC pour le bâtiment",
    description:
      "Fabricant marocain de baguettes d'angle PVC, profilés de finition et accessoires de chantier depuis 2020.",
    url: "https://signoreplast.ma",
    siteName: "Signore Plast",
    images: ["/images/site/og-image.png"],
    locale: "fr_MA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink-900">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:bg-navy-900 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Aller au contenu
        </a>
        <QuoteModalProvider>
          <Header />
          <main id="contenu" className="flex-1 pb-16 md:pb-0">
            {children}
          </main>
          <Footer />
          <MobileQuoteBar />
        </QuoteModalProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: company.name,
              image: "https://signoreplast.ma/images/brand/signoreplast-logo.png",
              telephone: company.contact.phone,
              email: company.contact.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Old Zmam",
                addressLocality: "Souk Sebt Oulad Nemma, Fquih Ben Salah",
                addressCountry: "MA",
              },
              url: "https://signoreplast.ma",
              foundingDate: "2020",
              description:
                "Fabricant marocain de profilés PVC et accessoires de chantier pour le bâtiment.",
            }),
          }}
        />
      </body>
    </html>
  );
}
