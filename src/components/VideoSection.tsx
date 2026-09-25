"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { company } from "@/data/company";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="En vidéo"
          title={company.video.title}
          description="Fabrication, savoir-faire et équipe Signore Plast, en images."
          align="center"
          light
        />

        <div className="relative mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-lg shadow-2xl">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${company.video.youtubeId}?autoplay=1`}
              title={company.video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="group relative h-full w-full"
              aria-label={`Lire la vidéo : ${company.video.title}`}
            >
              <Image
                src="/images/site/video-thumb-1.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
              <span className="absolute inset-0 bg-navy-950/30 transition-colors group-hover:bg-navy-950/20" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-110">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
