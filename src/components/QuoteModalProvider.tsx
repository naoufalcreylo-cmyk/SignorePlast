"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  FormEvent,
  ReactNode,
} from "react";
import { products } from "@/data/products";

interface QuoteModalContextValue {
  open: (productName?: string) => void;
}

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }
  return ctx;
}

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetProduct, setPresetProduct] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const open = useCallback((productName?: string) => {
    setPresetProduct(productName ?? "");
    setStatus("idle");
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <QuoteModalContext.Provider value={{ open }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-navy-950/70 backdrop-blur-sm sm:items-center sm:p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
            className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-lg animate-fade-up"
          >
            <div className="flex items-center justify-between border-b border-steel-200 px-6 py-5">
              <h2
                id="quote-modal-title"
                className="text-xl font-extrabold text-navy-950"
              >
                Demande de devis
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label="Fermer"
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink-500 hover:bg-steel-100 hover:text-navy-950"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {status === "success" ? (
              <div className="px-6 py-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy-50 text-navy-700">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-navy-950">
                  Votre demande a bien été envoyée
                </p>
                <p className="mt-2 text-sm text-ink-700">
                  Notre équipe vous recontacte rapidement au numéro ou à l&apos;adresse indiqués.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-6 rounded-sm bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
                <div>
                  <label htmlFor="produit" className="mb-1.5 block text-sm font-semibold text-navy-950">
                    Produit
                  </label>
                  <select
                    id="produit"
                    name="produit"
                    defaultValue={presetProduct}
                    className="w-full rounded-sm border border-steel-300 bg-white px-3 py-2.5 text-sm text-ink-900 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
                  >
                    <option value="">-- Choisissez un produit --</option>
                    {products.map((p) => (
                      <option key={p.sourceId} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Autre / non listé">Autre / non listé</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="societe" className="mb-1.5 block text-sm font-semibold text-navy-950">
                    Nom de société *
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="societe"
                    name="societe"
                    type="text"
                    required
                    className="w-full rounded-sm border border-steel-300 px-3 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="mb-1.5 block text-sm font-semibold text-navy-950">
                    Nom du contact
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    className="w-full rounded-sm border border-steel-300 px-3 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="telephone" className="mb-1.5 block text-sm font-semibold text-navy-950">
                      Téléphone *
                    </label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      required
                      className="w-full rounded-sm border border-steel-300 px-3 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-950">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-sm border border-steel-300 px-3 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="quantite" className="mb-1.5 block text-sm font-semibold text-navy-950">
                    Quantité
                  </label>
                  <input
                    id="quantite"
                    name="quantite"
                    type="number"
                    min={0}
                    className="w-full rounded-sm border border-steel-300 px-3 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-950">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Prière de me contacter pour un devis personnalisé"
                    className="w-full resize-none rounded-sm border border-steel-300 px-3 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
                  />
                </div>

                {status === "error" && (
                  <p role="alert" className="text-sm font-medium text-red-600">
                    Une erreur est survenue. Merci de réessayer ou de nous appeler directement.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-sm bg-red-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 disabled:opacity-60"
                >
                  {status === "submitting" ? "Envoi en cours…" : "Envoyer la demande"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </QuoteModalContext.Provider>
  );
}
