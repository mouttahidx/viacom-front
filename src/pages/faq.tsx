import { PlusIcon } from "@heroicons/react/20/solid";
import { Accordion } from "@mantine/core";
import React from "react";

export default function Faq() {
  const faqs = [
    {
      value: "Quels types de services offre VIA Communication?",
      description: (
        <div className="">
          Services de marketing digital, conception Web, SEO et SEM
        </div>
      ),
    },
    {
      value: "Y a-t-il un contrat à signer?",
      description: (
        <div className="">
          Tous les services offerts par VIA Communication nécessitent seulement
          30 jours d’avis avant d’être résiliés. C’est notre façon de garantir
          la qualité du service rendu!
        </div>
      ),
    },
    {
      value: "Avez-vous des forfaits complets?",
      description: (
        <div className="">
          Bien sûr! À partir d’aussi peu que 225$ par mois.
        </div>
      ),
    },
    {
      value: "En quoi consiste l’audit « Multi-plateformes »?",
      description: (
        <div className="">
          L’audit Multi-plateformes consiste en une analyse de votre présence
          actuelle sur les différents médias sociaux. Il vous permet de savoir
          où vous en êtes.
        </div>
      ),
    },
    {
      value:
        "Peut-on établir un partenariat comme celui que vous avez avec GEM-CAR?",
      description: (
        <div className="">
          VIA Communication est toujours à la recherche de nouveaux partenaires.
          Pour toutes demandes, communiquez avec nous à :
          info@viacommunication.com
        </div>
      ),
    },
    {
      value: "Avez-vous des offres spéciales pour les startups?",
      description: (
        <div className="">
          Absolument! VIA Communication offre des services de gestion de médias
          sociaux de marketing Web et des conférences, tous adaptés aux besoins
          des startups, petites, moyennes et grandes entreprises. Envoyez-nous
          votre demande d’information à : info@viacommunication.com
        </div>
      ),
    },
    {
      value: "Offrez-vous une période d’essai gratuite?",
      description: (
        <div className="">
          Aucune période d’essai gratuite n’est offerte, mais nous vous invitons
          à visiter la section « Avis » de notre page Facebook afin de découvrir
          ce que nos clients disent sur nous! <br /> <br />
          <a href="https://www.facebook.com/VIACommunication/" target="_blank" className="text-primary font-medium">
            Page Facebook
          </a>
        </div>
      ),
    },
    {
      value:
        "Si je paie pour un forfait trimestriel, semestriel ou annuel, aurais-je un rabais?",
      description: (
        <div className="">
          Aucun forfait trimestriel, semestriel ou annuel n’est offert.{" "}
        </div>
      ),
    },
    {
      value:
        "Est-il possible d’obtenir un rabais pour les organismes à but non lucratif?",
      description: (
        <div className="">
          Absolument, un rabais peut être offert. Envoyez votre demande
          d’information à : info@viacommunication.com
        </div>
      ),
    },
  ];

  const faqItems = faqs.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control className="!text-lg !py-4">
        {item.value}
      </Accordion.Control>
      <Accordion.Panel className="!text-base">
        {item.description}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div>
      {/* hero */}
      <div className="bg-faq-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl">
            FAQ{" "}
          </h1>
        </div>
      </div>

      {/* FAQ */}
      <section className="2xl:container flex flex-col items-center mt-10 pb-24">
        <h2 className="text-gray-600 text-3xl font-medium text-center">
          FOIRE AUX QUESTIONS - FAQ VIA Communication
        </h2>
        <div className="divider"></div>
        <Accordion
          defaultValue=""
          chevronPosition="left"
          className="text-2xl border w-full max-w-7xl"
          classNames={{
            label: "!text-secondary !font-semibold",
            chevron: "!text-primary !w-5 !h-5",
            panel: "!p-1 xl:!p-4",
          }}
          chevron={<PlusIcon className="w-5 h-5" />}
          transitionDuration={500}
        >
          {faqItems}
        </Accordion>
      </section>
    </div>
  );
}
