import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";

export default function NosRealisations() {
  return (
    <div className="bg-gray-50">
      {/* Hero with gradient overlay */}
      <div 
        className="pt-24 pb-24 lg:pt-44 lg:pb-36 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center relative"
        style={{ 
          backgroundPosition: 'center center',
          boxShadow: 'inset 0 0 0 2000px rgba(0, 60, 113, 0.7)'
        }}
      >
        <div className="text-center">
          <h1 className="uppercase text-white text-5xl font-bold tracking-wide mt-10 mb-2">Réalisations</h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
      </div>

      {/* Introduction section with improved styling */}
      <section className="bg-gradient-to-r from-[#0063a8] via-[#0063a8] to-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/img/pattern.png')] opacity-5"></div>
        <div className="py-24 w-full h-full bg-secondary bg-opacity-65 relative z-10">
          <div className="max-w-6xl mx-auto text-white text-lg px-6 md:px-8">
            <p className="text-xl leading-relaxed">
              Depuis plus de <span className="font-bold text-primary">6 ans</span> déjà, VIA Communication se spécialise dans la
              conception de vos sites Web. Que ce soit un site e-commerce ou
              simplement une vitrine, nous sommes là pour vous et ce, peu importe
              le domaine dans lequel vous travaillez. Depuis 6 ans, nous avons
              fait plusieurs dizaines de sites internet, et ce, pour plusieurs
              dizaines de clients satisfaits! Nous vous présentons donc, ici,
              certaines de nos réalisations. Quand débutons-nous votre projet Web?
            </p>
            <div className="mt-8 border-l-4 border-primary pl-6 py-2">
              <span className="text-md text-white block italic">
                -L'équipe VIA Communication
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Client trust section with improved styling */}
      <div className="relative py-16">
        <h2 className="bg-secondary py-8 text-white text-center text-3xl font-bold relative z-10 max-w-4xl mx-auto mb-16 rounded-lg shadow-lg">
          ILS NOUS ONT FAIT CONFIANCE
        </h2>
        
        <section className="py-12 bg-white max-w-7xl px-6 mx-auto rounded-xl shadow-md">
          <Carousel
            align={"start"}
            slideSize={{ base: "33%", md: "25%", lg: "15%" }}
            height={120}
            slideGap="xl"
            controlsOffset="xs"
            controlSize={40}
            slidesToScroll={1}
            loop
            withControls
            withIndicators
            classNames={{
              control: 'bg-primary text-white hover:bg-secondary transition-all',
              indicator: 'bg-gray-300 hover:bg-primary',
              indicators: 'gap-2',
            }}
          >
            <Carousel.Slide>
              <div className="h-full flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <Image
                  alt="SunSpace logo"
                  width={300}
                  height={300}
                  src={"/img/sunspace.webp"}
                  className="object-contain aspect-square w-[150px] filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="h-full flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <Image
                  alt="Levis logo"
                  width={300}
                  height={200}
                  src={"/img/levis.jpg"}
                  className="object-contain w-[150px] filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="h-full flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <Image
                  alt="Laplante logo"
                  width={300}
                  height={200}
                  src={"/img/laplante.jpg"}
                  className="object-contain w-[150px] filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="h-full flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <Image
                  alt="CRD logo"
                  width={300}
                  height={200}
                  src={"/img/crd.webp"}
                  className="object-contain w-[150px] filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="h-full flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <Image
                  alt="Oceanick logo"
                  width={300}
                  height={200}
                  src={"/img/oceanick.webp"}
                  className="object-contain w-[150px] filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="h-full flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <Image
                  alt="Eleganza logo"
                  width={300}
                  height={200}
                  src={"/img/eleganza.webp"}
                  className="object-contain w-[150px] filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="h-full flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <Image
                  alt="Ecole logo"
                  width={300}
                  height={200}
                  src={"/img/ecole.webp"}
                  className="object-contain w-[150px] filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="h-full flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <Image
                  alt="Alzheimer logo"
                  width={300}
                  height={200}
                  src={"/img/alzeihmer.webp"}
                  className="object-contain w-[150px] filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </Carousel.Slide>
          </Carousel>
        </section>
      </div>

      {/* E-commerce sites with improved layout and hover effects */}
      <section className="max-w-7xl mx-auto my-32 px-6">
        <h2 className="text-center mb-16 text-3xl font-bold text-secondary relative">
          <span className="relative z-10 px-6">Sites Web E-commerce</span>
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-32 h-1 bg-primary"></div>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(12)].map((_, index) => (
            <div key={`ecommerce-${index}`} className="overflow-hidden rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <div className="relative">
                <Image 
                  src="/img/sunspace.webp" 
                  alt={`E-commerce project ${index + 1}`} 
                  width={250} 
                  height={250} 
                  className="w-full aspect-square object-cover" 
                />
                <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <h3 className="font-bold text-lg">Projet {index + 1}</h3>
                    <p className="mt-2">Site E-commerce</p>
                    <button className="mt-4 px-4 py-2 bg-white text-primary rounded hover:bg-gray-100 transition-colors">
                      Voir détails
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase websites with improved layout and hover effects */}
      <section className="max-w-7xl mx-auto my-32 px-6">
        <h2 className="text-center mb-16 text-3xl font-bold text-secondary relative">
          <span className="relative z-10 px-6">Sites Web Vitrines</span>
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-32 h-1 bg-primary"></div>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(12)].map((_, index) => (
            <div key={`vitrine-${index}`} className="overflow-hidden rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <div className="relative">
                <Image 
                  src="/img/sunspace.webp" 
                  alt={`Showcase project ${index + 1}`} 
                  width={250} 
                  height={250} 
                  className="w-full aspect-square object-cover" 
                />
                <div className="absolute inset-0 bg-secondary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <h3 className="font-bold text-lg">Projet {index + 1}</h3>
                    <p className="mt-2">Site Vitrine</p>
                    <button className="mt-4 px-4 py-2 bg-white text-secondary rounded hover:bg-gray-100 transition-colors">
                      Voir détails
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA with improved design */}
      <section className="w-full p-4 bg-gradient-to-r from-secondary to-secondary/90 border-b relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/img/pattern.png')] opacity-10"></div>
        <div className="mx-auto max-w-7xl px-8 lg:px-12 py-16 lg:pb-12 lg:pt-16 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-center text-center lg:text-left relative z-10">
          {/* First div */}
          <div className="lg:w-8/12">
            <h2 className="text-3xl font-bold text-white">
              Appelez-nous ou envoyez un <span className="text-primary">courriel</span>
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Nous sommes à l'écoute pour répondre à vos questions et vous
              proposer la meilleure solution pour votre projet web.
            </p>
          </div>
          {/* CTA */}
          <div className="mt-10 lg:mt-0 flex flex-wrap gap-y-6 gap-x-4 w-full justify-center lg:w-4/12 lg:justify-end">
            <Button
              size="lg"
              className="!bg-primary hover:!bg-primary/90 !text-white !font-bold !transition-all !duration-300 !transform hover:!scale-105 !shadow-lg !w-full lg:!w-auto !min-w-48"
              component={Link}
              href={"/contact"}
              leftSection={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>}
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
