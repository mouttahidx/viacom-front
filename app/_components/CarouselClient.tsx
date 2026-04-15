"use client";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { useLocale } from "next-intl";
import React from "react";

const SLIDES: { src: string; fr: string; en: string }[] = [
  { src: "/img/sunspace.webp", fr: "Sunspace", en: "Sunspace" },
  { src: "/img/levis.jpg", fr: "Lévis", en: "Levis" },
  { src: "/img/laplante.jpg", fr: "La Plante", en: "La Plante" },
  { src: "/img/crd.webp", fr: "CRD", en: "CRD" },
  { src: "/img/oceanick.webp", fr: "Oceanick", en: "Oceanick" },
  { src: "/img/eleganza.webp", fr: "Eleganza", en: "Eleganza" },
  { src: "/img/ecole.webp", fr: "École", en: "School" },
  {
    src: "/img/alzeihmer.webp",
    fr: "Alzheimer Québec",
    en: "Alzheimer Society",
  },
];

export default function CarouselClient() {
  const locale = useLocale();

  return (
    <Carousel
      align={"start"}
      slideSize={{ base: "33%", md: "25%", lg: "15%" }}
      height="100%"
      slideGap="xl"
      controlsOffset="xs"
      controlSize={32}
      slidesToScroll={1}
      loop
    >
      {SLIDES.map((slide) => (
        <Carousel.Slide key={slide.src}>
          <Image
            unoptimized
            alt={locale === "fr" ? slide.fr : slide.en}
            width={300}
            height={300}
            src={slide.src}
            className={
              slide.src.endsWith(".webp")
                ? "object-contain aspect-square w-[150px] "
                : "object-contain w-[150px] "
            }
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
