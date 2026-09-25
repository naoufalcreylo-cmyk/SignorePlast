import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-red-600">Erreur 404</p>
        <h1 className="mt-3 text-3xl font-extrabold text-navy-950 sm:text-4xl">
          Cette page n&apos;existe pas
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-700">
          La page que vous cherchez a peut-être été déplacée. Retrouvez nos produits
          ou contactez-nous directement.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/produits" variant="primary" size="lg">
            Voir nos produits
          </Button>
          <Button href="/" variant="ghost" size="lg">
            Retour à l&apos;accueil
          </Button>
        </div>
      </Container>
    </section>
  );
}
