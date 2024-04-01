import { Button, Divider } from "@mantine/core";
import React from "react";
import IconsList from "../components/servicesComponents/IconsList";
import Image from "next/image";
import Link from "next/link";

export default function services() {
  return (
    <div>
      {/* // hero section */}
      <section className="w-full py-28 text-white h-[780px] lg:h-[781px] bg-services-hero-bg bg-cover bg-no-repeat bg-center relative">
        <div className="absolute bg-dark-secondary left-0 bottom-0 right-0 top-0 bg-opacity-50 z-0"></div>
        <div className="z-10 absolute top-[16%] lg:top-[35%] max-w-6xl mx-auto  left-0 right-0 px-3">
          <h1 className="text-4xl w-full">Marketing digital pour les PME</h1>
          <Divider size="lg" className="w-[50px] my-10" />
          <h2 className="text-3xl w-full">
            Pour maintenir vos revenus ou pour une croissance forte le marketing
            digital est l’outil parfait!
          </h2>

          <Button
            variant="filled"
            className="!bg-primary hover:!bg-opacity-90 mt-10 "
          >{`Contactez-nous`}</Button>
        </div>
      </section>

      {/* 2nd section */}
      <section className="w-full flex flex-col container my-40 gap-y-20">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize">
            Le pouvoir du Web au service des PME
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-1 mb-10"></div>

          <p className="body-text">
            Obtenez un maximum de visibilité pour votre entreprise
          </p>
        </div>

        {/* inner section */}
        <div className="max-w-6xl mx-auto w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16">
          {/* icons list */}
          <div className="w-full xl:w-6/12 ">
            <IconsList />
          </div>
          <Image
            src={"/img/robot-finger.webp"}
            alt="robot finger"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover max-h-[670px]"
          />
        </div>
      </section>

      {/* 3rd section */}
      <section className="w-full flex flex-col container max-w-6xl my-40 ">
        <h2 className="second-title text-center ">Nos services</h2>
        <div className="w-[50px] bg-primary h-1 mx-auto mt-1 mb-16"></div>

        {/* 1st text */}
        <div className="bg-savoir-bg bg-cover bg-no-repeat bg-center">
          <div className="w-full pt-10 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h4 className="second-title">Conception de site Web et SEO</h4>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              Pilier de nos services de marketing digital, de la conception de
              votre site Web à son référencement sur les moteurs de recherche,
              notre agence vous accompagnera à toutes les étapes
            </p>

            <Button
              component={Link}
              href={"/"}
              variant="outline"
              color="white"
              className="mt-8 hover:scale-105 duration-300"
            >
              PLUS
            </Button>
          </div>
        </div>

        {/* 2 texts */}
        <div className="grid xl:grid-cols-2 mt-8 gap-x-8 gap-y-8">
          {/* 1st div */}
          <div className="bg-approche-bg bg-cover bg-no-repeat bg-center">
            <div className="w-full pt-10 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
              <h4 className="second-title">Publicité Facebook et Instagram</h4>
              <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

              <p className="body-text !text-white">
                Nos campagnes publicitaires ultra ciblées génèrent des retombées
                extraordinaires. Facebook et Instagram sont les endroits idéaux
                pour générer des ventes.
              </p>
              <Button
                component={Link}
                href={"/services/agence-facebook-ads"}
                variant="outline"
                color="white"
                className="mt-8 hover:scale-105 duration-300"
              >
                PLUS
              </Button>
            </div>
          </div>

          {/* 2nd div */}
          <div className="bg-faire-bg bg-cover bg-no-repeat bg-center">
            <div className="w-full pt-10 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
              <h4 className="second-title">Publicité Google AdWords</h4>
              <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

              <p className="body-text !text-white">
                Nous nous assurons de bien positionner votre entreprise sur
                Google alors que vos clients potentiels cherchent activement des
                entreprises comme la vôtre.
              </p>
              <Button
                component={Link}
                href={"/services/agence-google-ads"}
                variant="outline"
                color="white"
                className="mt-8 hover:scale-105 duration-300"
              >
                PLUS
              </Button>
            </div>
          </div>
        </div>

        {/* 5th text */}
        <div className="bg-website-bg bg-cover bg-no-repeat bg-center mt-8">
          <div className="w-full pt-10 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h4 className="second-title">Graphisme et montage vidéo</h4>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              Tous les services sous un seul et même toit, notre agence Web vous
              offre aussi des services de graphisme.s.
            </p>
          </div>
        </div>
      </section>

      {/* last section */}
      <section className="w-full text-center px-1 mt-40 border-b border-white bg-secondary py-24 text-white">
        <div className="max-w-6xl mx-auto  flex flex-col items-center">
          <h2 className="text-3xl lg:text-4xl">
            Propulsez votre entreprise vers de nouveaux sommets!
          </h2>
          <p className="!text-white body-text mt-8 !font-light">
            Contactez-nous, il nous fera plaisir de vous offrir une stratégie de
            marketing digital sans frais.
          </p>
          <Button
            variant="outline"
            color="white"
            size="md"
            className="w-fit mt-10"
          >{`Contactez-nous`}</Button>
        </div>
      </section>
    </div>
  );
}
