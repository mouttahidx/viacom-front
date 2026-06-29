"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import React from "react";

const SLIDES: { src: string; fr: string; en: string }[] = [
  { src: "/img/sunspace.webp", fr: "Sunspace", en: "Sunspace" },
  { src: "/img/levis.jpg", fr: "Lévis", en: "Levis" },
  { src: "/img/laplante.jpg", fr: "La Plante", en: "La Plante" },
  { src: "/img/crd.webp", fr: "CRD", en: "CRD" },
  { src: "/img/eleganza.webp", fr: "Eleganza", en: "Eleganza" },
  { src: "/img/ecole.webp", fr: "École", en: "School" },
  {
    src: "/img/alzeihmer.webp",
    fr: "Alzheimer Québec",
    en: "Alzheimer Society",
  },
];

function Slide({
  slide,
  locale,
}: {
  slide: (typeof SLIDES)[number];
  locale: string;
}) {
  return (
    <div className="flex shrink-0 items-center justify-center px-6 md:px-10">
      <Image
        unoptimized
        alt={locale === "fr" ? slide.fr : slide.en}
        width={300}
        height={300}
        src={slide.src}
        className={
          slide.src.endsWith(".webp")
            ? "object-contain aspect-square w-[120px] md:w-[150px]"
            : "object-contain w-[120px] md:w-[150px]"
        }
      />
    </div>
  );
}

export default function CarouselClient() {
  const locale = useLocale();
  const slides = [...SLIDES, ...SLIDES];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {slides.map((slide, index) => (
          <Slide key={`${slide.src}-${index}`} slide={slide} locale={locale} />
        ))}
      </div>
    </div>
  );
}
