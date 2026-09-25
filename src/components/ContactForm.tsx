"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-md border border-steel-200 bg-white p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy-50 text-navy-700">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-lg font-bold text-navy-950">Votre message a bien été envoyé</p>
        <p className="mt-2 text-sm text-ink-700">
          Notre équipe vous recontacte rapidement.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-sm border border-navy-900/15 px-6 py-2.5 text-sm font-semibold text-navy-900 hover:border-navy-900"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-md border border-steel-200 bg-white p-6 sm:p-8">
      <div>
        <label htmlFor="c-societe" className="mb-1.5 block text-sm font-semibold text-navy-950">
          Nom de la société *
        </label>
        <input
          id="c-societe"
          name="societe"
          type="text"
          required
          className="w-full rounded-sm border border-steel-300 px-3 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-email" className="mb-1.5 block text-sm font-semibold text-navy-950">
            Email *
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            className="w-full rounded-sm border border-steel-300 px-3 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
          />
        </div>
        <div>
          <label htmlFor="c-telephone" className="mb-1.5 block text-sm font-semibold text-navy-950">
            Téléphone *
          </label>
          <input
            id="c-telephone"
            name="telephone"
            type="tel"
            required
            className="w-full rounded-sm border border-steel-300 px-3 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="c-message" className="mb-1.5 block text-sm font-semibold text-navy-950">
          Message *
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          required
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
        className="w-full rounded-sm bg-red-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Envoi en cours…" : "Envoyer"}
      </button>
    </form>
  );
}
