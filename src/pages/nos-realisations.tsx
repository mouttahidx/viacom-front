import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";

export default function NosRealisations() {
  return (
    <div>
      {/* hero */}
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-4xl mt-10">Réalisations</h1>
      </div>
      {/* 1st */}
      <section className=" bg-gradient-to-r from-[#0063a8] via-[#0063a8] to-primary">
        <div className="py-24 w-full h-full bg-secondary bg-opacity-65">
          <p className="max-w-6xl mx-auto text-white text-lg">
            Depuis plus de 6 ans déjà, VIA Communication se spécialise dans la
            conception de vos sites Web. Que ce soit un site e-commerce ou
            simplement une vitrine, nous sommes là pour vous et ce, peu importe
            le domaine dans lequel vous travaillez. Depuis 6 ans, nous avons
            fait plusieurs dizaines de sites internet, et ce, pour plusieurs
            dizaines de clients satisfaits! Nous vous présentons donc, ici,
            certaines de nos réalisations. Quand débutons-nous votre projet Web?
            <span className="text-sm text-white block mt-6">
              -L’équipe VIA Communication
            </span>
          </p>
        </div>
      </section>

      <h2 className="bg-secondary py-6 my-10 text-white text-center text-2xl font-semibold">
        ILS NOUS ONT FAIT CONFIANCE
      </h2>
      <section className="py-16 bg-white max-w-8xl px-4 mx-auto">
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
      </section>

      {/* ecommerce */}
      <section className="max-w-7xl mx-auto my-24">
        <h2 className="gray-section-title text-center mb-16">Sites Web E-commerce</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1">
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
        </div>
      </section>

       {/* vitrine */}
       <section className="max-w-7xl mx-auto my-24">
        <h2 className="gray-section-title text-center mb-16">Sites Web Vitrines</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1">
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
          <Image src={"/img/sunspace.webp"} alt="" width={250} height={250} className="bg-black hover:shadow-xl cursor-pointer" />
        </div>
      </section>
      {/* CTA */}
      <section className="w-full  p-4 bg-secondary border-b ">
        <div className="mx-auto max-w-7xl px-8 lg:px-12 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
          {/* first div */}
          <div className="lg:w-9/12 ">
            <h2 className="second-title text-primary font-bold">
              Appelez-nous ou envoyez un courriel
            </h2>
            <p className="mt-4 body-text !text-white">
              Nous sommes à l’écoute pour répondre à vos questions et vous
              proposer la meilleure solution
            </p>
          </div>
          {/* cta */}
          <div className="mt-10 lg:mt-0 flex flex-wrap gap-y-6 gap-x-4 w-full justify-center lg:w-3/12">
            <Button
              variant="outline"
              color="#EE5422"
              className="!block !w-full"
              size="md"
              component={Link}
              href={"/contact"}
            >
              Contactez-nous{" "}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
