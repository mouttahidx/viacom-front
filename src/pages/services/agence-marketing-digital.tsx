import { Accordion, Button, Tabs } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AgenceMarketingDigital() {
  const tabs = [
    {
      label: "Sites web",
      text: (
        <div>
          Propulsez votre marque, quelle que soit la nature de votre site web.
          Qu’il s’agisse d’un e-commerce dynamique B2C, d’un site B2B orienté
          vers les relations d’affaires, d’un portfolio artistique ou d’une
          plateforme éducative, notre équipe est prête à vous aider.
          <br />
          <br />
          Nos designers et développeurs travaillent ensemble pour créer des
          interfaces personnalisées, centrées sur l’utilisateur.
          <br />
          <br />
          Elles se distinguent par leur design unique, leur durabilité et leur
          facilité de maintenance.
          <br />
          <br />
          Avec notre approche sur mesure, nous créons des expériences qui
          mettent véritablement en valeur votre marque.
        </div>
      ),
    },
    {
      label: "SEO",
      text: (
        <div>
          Optimisez votre présence dans les résultats de recherche des moteurs
          de recherche pour devenir le choix privilégié de vos clients. Le
          référencement naturel, ou SEO, est bien plus qu’une simple série
          d’actions. C’est une approche globale qui renforce votre visibilité et
          vous connecte aux clients pertinents.
          <br />
          <br />
          Notre équipe met en place une stratégie SEO personnalisée. Grâce à une
          analyse minutieuse, nous optimisons les aspects techniques, les
          mots-clés ciblés et la structure de votre site pour une navigation
          fluide et une expérience utilisateur supérieure.
          <br />
          <br />
          Offrez à votre entreprise la reconnaissance qu’elle mérite.
          Laissez-nous créer une stratégie SEO qui capte l’attention, attire les
          bons visiteurs et génère des conversions.
        </div>
      ),
    },
    {
      label: "SEM",
      text: (
        <div>
          Augmentez votre visibilité avec une stratégie SEM efficace. Le SEM
          combine des annonces en ligne ciblées et des campagnes publicitaires
          pour promouvoir votre entreprise sur le web.
          <br />
          <br />
          En tant qu’agence spécialisée, nous maximisons votre présence
          numérique et générons des leads de qualité.
          <br />
          <br />
          Notre équipe d’experts en SEM utilise des mots-clés pertinents et des
          publicités optimisées pour atteindre votre public cible.
          <br />
          <br />
          Grâce à notre approche stratégique, nous augmentons votre visibilité
          sur les moteurs de recherche et les plateformes publicitaires. Vous
          bénéficiez ainsi d’une exposition maximale et d’une augmentation du
          trafic qualifié vers votre site web.
          <br />
          <br />
          En tant qu’agence SEM, nous mettons en œuvre des campagnes
          publicitaires comme Google Ads percutantes et mesurables.
          <br />
          <br />
          Nous optimisons vos annonces pour générer des clients précieux et
          accroître votre retour sur investissement. Avec notre expertise en
          marketing numérique, vous bénéficiez d’une présence en ligne renforcée
          et d’une croissance significative de votre entreprise.
        </div>
      ),
    },
    {
      label: "Suivi et analyse",
      text: (
        <div>
          Augmentez votre visibilité avec une stratégie SEM efficace. Le SEM
          combine des annonces en ligne ciblées et des campagnes publicitaires
          pour promouvoir votre entreprise sur le web.
          <br /> <br />
          En tant qu’agence spécialisée, nous maximisons votre présence
          numérique et générons des leads de qualité.
          <br /> <br />
          Notre équipe d’experts en SEM utilise des mots-clés pertinents et des
          publicités optimisées pour atteindre votre public cible.
          <br /> <br />
          Grâce à notre approche stratégique, nous augmentons votre visibilité
          sur les moteurs de recherche et les plateformes publicitaires. Vous
          bénéficiez ainsi d’une exposition maximale et d’une augmentation du
          trafic qualifié vers votre site web.
          <br /> <br />
          En tant qu’agence SEM, nous mettons en œuvre des campagnes
          publicitaires comme Google Ads percutantes et mesurables.
          <br /> <br />
          Nous optimisons vos annonces pour générer des clients précieux et
          accroître votre retour sur investissement. Avec notre expertise en
          marketing numérique, vous bénéficiez d’une présence en ligne renforcée
          et d’une croissance significative de votre entreprise.
        </div>
      ),
    },
  ];

  const faqs = [
    {
      value: "C’est Quoi Le Marketing Digital ?",
      description: (
        <div className="text-primary">
          Le <b>marketing digital</b>, également appelé marketing en ligne ou{" "}
          <b>marketing numérique</b>, utilise des canaux numériques pour
          promouvoir des produits, services ou marques.
          <br /> <br />
          Il s’appuie sur Internet, les réseaux sociaux, les moteurs de
          recherche, etc. pour atteindre et engager le public cible.
          <br /> <br />
          L’objectif est de <b>générer de la visibilité</b>, d’
          <b>attirer l’attention</b>, d‘<b>interagir avec les consommateurs</b>{" "}
          et de les <b>convertir en clients</b>.
          <br /> <br />
          Le marketing digital utilise l’analyse des données, l’optimisation des
          campagnes et des techniques telles que le référencement, la publicité
          en ligne, le contenu et les médias sociaux.
          <br /> <br />
          En résumé, il permet de{" "}
          <b>connecter les entreprises à leur audience cible</b> et de
          promouvoir leurs produits dans le monde numérique en constante
          évolution.
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
      <Head>
        <title>VIA Communication - Marketing Digital</title>
      </Head>
      {/* hero */}
      <div className="bg-facebook-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl">
            Votre Agence Marketing Digital de confiance au Québec
          </h1>
        </div>
      </div>

      {/* 2nd section */}
      <section className="w-full flex flex-col container my-40 gap-y-20 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-start">
          <div className="w-[50px] bg-primary h-1 mt-1 "></div>
        </div>

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          {/* icons list */}
          <div className="w-full xl:w-6/12 ">
            <div className="body-text ">
              Vous recherchez des experts en conception de site web ? Une agence
              Google Ads ? Ou des gestionnaires chevronnés en médias sociaux ?
              Vous êtes au bon endroit. En tant qu
              <span className="text-primary font-medium">
                ’agence de marketing digital
              </span>{" "}
              basée au Québec, nous proposons des{" "}
              <b>stratégies adaptées aux PME</b>.
              <br />
              <br />
              Nos spécialistes maîtrisent l’utilisation d’outils de pointe pour
              maximiser votre présence en ligne. Que vous souhaitez optimiser
              votre référencement naturel, lancer des campagnes publicitaires
              efficaces ou repenser entièrement votre stratégie sur les médias
              sociaux, nous sommes là pour vous accompagner.
              <br />
              <br />
              Faites le choix de transformer votre présence digitale avec nous.
              <br />
              <br />
              Voyez comment notre agence de marketing digital peut vous aider à
              réaliser vos objectifs.
            </div>
            <Button
              component={Link}
              href={"/contact"}
              variant="filled"
              size="md"
              className="!bg-primary hover:!bg-opacity-90 mt-10 "
            >{`Contactez-nous`}</Button>
          </div>
          <Image
            src={"/img/agence-marketing.webp"}
            alt="agence-marketing"
            width={500}
            height={500}
            className="aspect-video w-full lg:w-6/12 object-cover h-full rounded-3xl shadow"
          />
        </div>
      </section>

      {/* why section */}
      <section className="w-full flex flex-col container px-4 my-40 gap-y-20 ">
        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          <Image
            src={"/img/why-us.webp"}
            alt="ad"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full rounded-2xl shadow"
          />
          <div className="w-full xl:w-6/12 ">
            <h2 className="text-3xl font-semibold text-gray-600">
              Pourquoi choisir notre agence de marketing digital ?
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-4 mb-6"></div>
            <div className="body-text">
              <ul className="list-disc pl-6">
                <li>
                  Nous vous garantissons votre satisfaction, sans aucun
                  engagement à long terme.
                </li>
                <li>
                  Bénéficiez de résultats mesurables rapidement et efficacement.
                </li>
                <li>Augmentez vos revenus</li>
                <li>
                  Nous travaillons dans le respect de votre budget et de vos
                  contraintes financières.
                </li>
                <li>
                  Notre agence est un partenaire certifié Google, témoignant de
                  la qualité de notre travail.
                </li>
              </ul>
            </div>
            <Button
              component={Link}
              href={"/contact"}
              variant="filled"
              size="md"
              className="!bg-primary hover:!bg-opacity-90 mt-10 "
            >{`Contactez-nous`}</Button>
          </div>
        </div>
      </section>

      {/* services cards section */}
      <section className="w-full flex flex-col xl:container my-40 gap-y-20 px-2 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            Pourquoi Google Ads est essentiel pour votre entreprise ?
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 mb-10 "></div>
        </div>

        {/* inner 1 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <Link
            href={"/"}
            className="w-full xl:w-4/12 flex flex-col items-center"
          >
            <Image
              src={"/img/website-creation.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Création De Sites Web{" "}
            </h4>
            <p className="text-secondary text-center">
              Concevez votre succès en ligne avec un site web personnalisé,
              performant et aligné sur vos objectifs.
            </p>
          </Link>

          <Link
            href={"/services/agence-seo"}
            className="w-full xl:w-4/12 flex flex-col items-center"
          >
            <Image
              src={"/img/seo-card.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">SEO</h4>
            <p className="text-secondary text-center">
              Boostez votre visibilité sur les moteurs de recherche et atteignez
              vos cibles grâce à des stratégies de référencement éprouvées.
            </p>
          </Link>

          <Link
            href="/services/agence-google-ads"
            className="w-full xl:w-4/12 flex flex-col items-center"
          >
            <Image
              src={"/img/sem.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">SEM </h4>
            <p className="text-secondary text-center">
              Maximisez votre présence numérique et augmentez vos conversions
              grâce à des campagnes SEM efficaces.
            </p>
          </Link>
        </div>
        {/* inner 2 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <Link
            href="/services/agence-facebook-ads"
            className="w-full xl:w-4/12 flex flex-col items-center"
          >
            <Image
              src={"/img/facebook-phone.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Publicité Sur Les Réseaux Sociaux{" "}
            </h4>
            <p className="text-secondary text-center">
              Développez votre audience et engagez vos clients avec des
              publicités sociales ciblées et percutantes
            </p>
          </Link>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/kpi.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Suivi Et Analyse Des KPI{" "}
            </h4>
            <p className="text-secondary text-center">
              Des perspectives puissants pour optimiser votre stratégie.
            </p>
          </div>

          <div className="xl:w-4/12"></div>
        </div>
      </section>

      {/* tabs */}
      <section className="w-full flex flex-col xl:container my-40 gap-y-20 px-2 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            Pourquoi Google Ads est essentiel pour votre entreprise ?
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 "></div>
        </div>
        <div className="bg-tabs py-20 px-8 rounded-3xl bg-cover bg-no-repeat">
          <Tabs
            color="orange"
            orientation="horizontal"
            classNames={{
              root: "bg-black bg-opacity-70 text-white border-white border",
              panel: "px-2 lg:p-8 py-10",
              tabLabel:
                "text-lg hover:text-primary focus-within:text-primary active:text-primary",
              tab: " hover:bg-transparent",
            }}
            defaultValue={tabs[0].label}
          >
            <Tabs.List justify="start">
              {tabs.map((item) => (
                <Tabs.Tab value={item.label} key={item.label}>
                  {item.label}
                </Tabs.Tab>
              ))}
              {tabs.map((item) => (
                <Tabs.Panel value={item.label} key={item.label}>
                  {item.text}
                </Tabs.Panel>
              ))}
            </Tabs.List>
          </Tabs>
        </div>
      </section>

      {/* cta */}
      <section className="w-full bg-no-repeat bg-cover bg-fixed bg-center mt-40 text-center bg-google-cta">
        <div className="w-full h-full bg-white bg-opacity-40  p-24">
          <Button
            component={Link}
            href={"/contact"}
            variant="filled"
            size="xl"
            className="!bg-primary hover:!bg-opacity-90 shadow-xl"
          >{`Contactez-nous`}</Button>
        </div>
      </section>

      {/* CTA 2*/}
      <section className="w-full mx-auto max-w-7xl p-4 py-16 ">
        <div className=" bg-white px-8 lg:px-12 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
          {/* first div */}
          <div className="lg:w-9/12 ">
            <h2 className="second-title text-primary font-bold">
              Appelez-nous ou envoyez un courriel
            </h2>
            <p className="mt-4 body-text !text-black lg:w-10/12">
              Nous sommes à l’écoute pour répondre à vos questions et vous
              proposer la meilleure solution
            </p>
          </div>
          {/* cta */}
          <div className="mt-10 lg:mt-0 flex flex-wrap gap-y-6 gap-x-4 w-full justify-center lg:w-3/12">
            <Button
              component={Link}
              href={"/contact"}
              variant="outline"
              color="#EE5422"
              className="!block !w-full"
              size="md"
            >
              Contactez-nous{" "}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="2xl:container flex flex-col items-center mt-10 pb-24">
        <h2 className="text-gray-600 text-3xl font-medium">FAQ</h2>
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
          transitionDuration={500}
        >
          {faqItems}
        </Accordion>
      </section>

      {/* other services */}
      <section className="2xl:container flex flex-col items-center mb-16 py-16">
        <h2 className="text-gray-600 text-3xl font-medium">
          Nos autres services
        </h2>
        <div className="divider"></div>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-seo"
        >
          Référencement naturel - SEO
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-facebook-ads"
        >
          Facebook Ads{" "}
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-google-ads"
        >
          Google Ads - SEA{" "}
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/"
        >
          Conception web{" "}
        </Link>
      </section>
    </div>
  );
}
