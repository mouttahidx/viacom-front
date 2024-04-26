"use client"
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import React from "react";

export default function CarouselClient() {
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
      <Carousel.Slide>
        <Image
          alt=""
          width={300}
          height={300}
          src={"/img/sunspace.webp"}
          className="object-contain aspect-square w-[150px] "
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          alt=""
          width={300}
          height={200}
          src={"/img/levis.jpg"}
          className="object-contain w-[150px] "
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          alt=""
          width={300}
          height={200}
          src={"/img/laplante.jpg"}
          className="object-contain w-[150px] "
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          alt=""
          width={300}
          height={200}
          src={"/img/crd.webp"}
          className="object-contain w-[150px] "
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          alt=""
          width={300}
          height={200}
          src={"/img/oceanick.webp"}
          className="object-contain w-[150px] "
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          alt=""
          width={300}
          height={200}
          src={"/img/eleganza.webp"}
          className="object-contain w-[150px] "
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          alt=""
          width={300}
          height={200}
          src={"/img/ecole.webp"}
          className="object-contain w-[150px] "
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          alt=""
          width={300}
          height={200}
          src={"/img/alzeihmer.webp"}
          className="object-contain w-[150px] "
        />
      </Carousel.Slide>
    </Carousel>
  );
}
