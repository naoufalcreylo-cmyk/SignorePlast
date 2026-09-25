"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { QuoteButton } from "@/components/QuoteButton";
import { nav, company } from "@/data/company";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="hidden bg-navy-950 text-white md:block">
        <Container className="flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a
              href={company.contact.phoneHref}
              className="flex items-center gap-1.5 hover:text-red-400"
            >
              <PhoneIcon /> {company.contact.phone}
            </a>
            <a
              href={`mailto:${company.contact.email}`}
              className="flex items-center gap-1.5 hover:text-red-400"
            >
              <MailIcon /> {company.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3 text-steel-300">
            <a href={company.social.facebook} aria-label="Facebook" className="hover:text-white">
              FB
            </a>
            <a href={company.social.linkedin} aria-label="LinkedIn" className="hover:text-white">
              IN
            </a>
            <a href={company.social.twitter} aria-label="Twitter / X" className="hover:text-white">
              X
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Signore Plast — Accueil">
          <Image
            src="/images/brand/signoreplast-logo.png"
            alt="Signore Plast"
            width={177}
            height={92}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-red-600 ${
                pathname === item.href ? "text-red-600" : "text-navy-950"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <QuoteButton />
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-10 w-10 items-center justify-center rounded-sm text-navy-950 lg:hidden"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[80px] z-40 origin-top border-t border-steel-200 bg-white shadow-lg transition-all duration-200 lg:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-sm px-3 py-3 text-base font-semibold ${
                pathname === item.href
                  ? "bg-navy-50 text-red-600"
                  : "text-navy-950 hover:bg-steel-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={company.contact.phoneHref}
            className="mt-2 flex items-center gap-2 rounded-sm px-3 py-3 text-base font-semibold text-navy-950"
          >
            <PhoneIcon /> {company.contact.phone}
          </a>
          <QuoteButton className="mt-2 w-full" size="lg" />
        </Container>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 1-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
