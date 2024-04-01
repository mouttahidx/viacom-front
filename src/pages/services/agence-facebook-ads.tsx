import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import { Accordion, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AgenceFacebookAds() {
  const faqs = [
    {
      value:
        "Quelle Stratégie Choisir Pour Optimiser Vos Résultats Marketing : Google Ads Vs Facebook Ads ?",
      description: (
        <div className="text-primary">
          <Link
            href="/services/agence-google-ads"
            className="font-semibold text-black"
          >
            Google Ads
          </Link>{" "}
          est efficace pour cibler les utilisateurs lorsqu’ils{" "}
          <b>recherchent</b> activement des produits ou services sur{" "}
          <b>le moteur de recherche</b>. Cela peut vous permettre de toucher un
          public plus large et d’obtenir des résultats plus directs en termes de
          conversions et de ventes.
          <br />
          <br />
          D’autre part,{" "}
          <b>
            Facebook Ads offre la possibilité de cibler des audiences
            spécifiques
          </b>{" "}
          en utilisant des critères démographiques, des intérêts et des
          comportements. Cela vous permet de créer une présence de marque
          solide, d’engager votre audience et de générer de la notoriété.
          Facebook Ads peut être particulièrement efficace pour les campagnes de
          sensibilisation, de promotion et de fidélisation de la clientèle.
          <br />
          <br />
          En fin de compte, il est souvent bénéfique de{" "}
          <b>combiner les deux plateformes</b> publicitaires pour atteindre un
          public plus large et optimiser les résultats marketing. Une stratégie
          personnalisée en fonction de vos besoins spécifiques peut être
          élaborée en consultant nos experts en marketing numérique.
        </div>
      ),
    },
    {
      value: "Quel Budget Investir Pour La Gestion De Ma Publicité Facebook ?",
      description: (
        <div className="text-primary">
          Déterminer le budget alloué aux publicités Facebook dépend de
          plusieurs facteurs, tels que vos <b>ambitions marketing</b>, votre{" "}
          <b>secteur d’activité</b>, la <b>taille de votre audience cible</b> et
          <b>la concurrence dans votre domaine.</b>
          <br />
          <br />
          Nous vous recommandons de fixer un budget publicitaire réaliste et
          aligné sur vos objectifs commerciaux. Facebook propose différents
          modes de tarification, tels que le coût par clic (CPC) ou le coût par
          mille impressions (CPM). Vous pouvez également définir un budget
          quotidien ou un budget total pour vos campagnes.
          <br />
          <br />
          Contactez notre agence pour <b>estimer votre budget publicitaire</b>.
          Nos experts analyseront votre marché et vos ressources. Vous recevrez
          des recommandations personnalisées pour améliorer vos résultats.
        </div>
      ),
    },
    {
      value:
        "Comment Une Agence Spécialisée En Campagnes Facebook Ads Fonctionne ?",
      description: (
        <div className="text-primary">
          Nous travaillons avec les <b>PME</b> pour concevoir,{" "}
          <b>
            créer et optimiser leurs campagnes publicitaires sur Facebook et
            Instagram
          </b>
          .
          <br />
          <br />
          Nous exploitons pleinement nos connaissances des algorithmes et des
          tendances de Facebook afin de garantir l’impact maximal de vos
          annonces.
          <br />
          <br />
          Notre objectif est de vous offrir une <b>solution sur mesure</b> qui
          répond spécifiquement à vos besoins et vous permet d’atteindre vos
          objectifs publicitaires avec succès.
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
      <div className="bg-facebook-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl ">
            Agence Facebook Ads Simplifiez votre publicité avec une gestion
            professionnelle
          </h1>
        </div>
      </div>

      {/* 2nd section */}
      <section className="w-full flex flex-col container my-40 gap-y-16 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-start">
          <div className="w-[50px] bg-primary h-1 mt-1 "></div>
        </div>

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          {/* icons list */}
          <div className="w-full xl:w-6/12 ">
            <div className="body-text">
              Naviguer avec succès dans le paysage publicitaire de Facebook et
              Instagram requiert une expertise particulière. C’est ici que notre{" "}
              <span className="text-primary">agence Facebook Ads</span> entre en
              jeu. Notre expertise libère le potentiel de ces plateformes pour
              propulser votre PME à travers une campagne optimisée.
              <br />
              <br />
              De plus, notre entreprise est certifiée Facebook Business Partner.
              Ce qui nous permet de déployer tout notre savoir-faire de manière
              efficace.
              <br />
              <br />
              Quand vous nous confiez vos campagnes publicitaires sur Facebook,
              nous donnons vie à vos aspirations. Notre objectif ?
              <br />
              <br />
              <ul className="pl-6 list-disc list">
                <li>Stimuler</li>
                <li>l’augmentation de vos ventes</li>
                <li>Optimiser votre retour sur investissement publicitaire</li>
                <li>Réduire vos coûts d’acquisition</li>
                <li>Amplifier la notoriété de votre marque</li>
              </ul>
              <br />
              <br />
              Chez <span className="text-primary">VIA Communication</span>,
              notre équipe spécialisée élabore une stratégie marketing détaillée
              pour la publicité Facebook et Instagram selon vos besoins.
            </div>
            <Button
              variant="filled"
              size="md"
              className="!bg-primary hover:!bg-opacity-90 mt-10 "
            >{`Contactez-nous`}</Button>
          </div>
          <Image
            src={"/img/facebook-phone.webp"}
            alt="facebook-phone"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full rounded-3xl shadow"
          />
        </div>
      </section>

      {/* 3rd section */}
      <section className="w-full flex flex-col xl:container my-40 gap-y-20 px-2 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold">
            Pourquoi lancer des campagnes Facebook Ads ?
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 mb-10 "></div>

          <p className="body-text">
            Avec ses milliards d’utilisateurs actifs à travers le monde, le
            réseau social offre un moyen de toucher une large audience.
            Correctement exploité, Facebook Ads aide les entreprises à établir
            une présence en ligne solide et à interagir avec leur auditoire
            cible.
          </p>
        </div>

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/public.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Un Public Vaste Et Diversifié
            </h4>
            <p className="text-secondary text-center">
              Facebook Ads met à disposition une plateforme diversifiée,
              abritant des utilisateurs de tous âges et de toutes origines.
              <br />
              <br />
              Quel que soit votre secteur ou le profil de votre audience, ils
              sont probablement sur Facebook. C'est un canal privilégié pour
              exposer votre marque à une audience élargie.
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/medias.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Des Outils De Ciblage Précis
            </h4>
            <p className="text-secondary text-center">
              La puissance des campagnes publicitaires de Facebook réside dans
              leur précision. En effet, leurs outils avancés permettent de viser
              avec exactitude divers groupes d'utilisateurs.
              <br />
              <br />
              Des critères tels que l'âge, la localisation ou les centres
              d'intérêt permettent un ciblage précis et efficace de vos
              audiences.
              <br />
              <br />
              Ainsi, vos publicités Facebook / Instagram deviennent plus
              pertinentes. Elles captent l'attention et encouragent l'engagement
              de votre public cible.
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/robot-finger.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Une Mesure De Performance Détaillée
            </h4>
            <p className="text-secondary text-center">
              Facebook Ads fournit des outils de suivi et d'analyse pour mesurer
              l'efficacité de vos campagnes publicitaires. Ces outils vous
              donnent accès à des statistiques précises, telles que le nombre de
              vues, de clics et le taux de conversion pour des actions
              spécifiques, comme les achats.
              <br />
              <br />
              Ces informations sont utiles pour maximiser l'efficacité et
              optimiser la publicité sur Facebook.
              <br />
              <br />
              En exploitant correctement ces éléments, notre équipe est en
              mesure d'affiner les stratégies et d'améliorer les performances
              globales de vos annonces.
            </p>
          </div>
        </div>

        {/* inner 2 */}
        <div className="max-w-5xl mx-auto w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16">
          <div className="w-full xl:w-6/12 flex flex-col items-center">
            <Image
              src={"/img/generate.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Générez Un Volume Plus Important De Ventes
            </h4>
            <p className="text-secondary text-center">
              La publicité de Facebook augmente votre portée, ce qui se traduit
              par plus d'opportunités de vente. En personnalisant les annonces
              pour correspondre aux préférences et comportements d'achat des
              utilisateurs, les chances de conversion sont optimisées.
            </p>
          </div>

          <div className="w-full xl:w-6/12 flex flex-col items-center text-center">
            <Image
              src={"/img/marque.jpg"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Augmentez La Notoriété De Votre Marque
            </h4>
            <p className="text-secondary text-center">
              La publicité sur Facebook contribue à la renommée de votre
              entreprise. Un public étendu voit vos annonces, renforçant ainsi
              votre visibilité. De ce fait, cela nourrit la reconnaissance de
              votre identité et fidélise votre audience.
            </p>
          </div>
        </div>
      </section>

      {/* 4th section */}
      <section className="w-full flex flex-col xl:container px-4 my-40 gap-y-20 ">
        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          <Image
            src={"/img/ad.webp"}
            alt="ad"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full rounded-2xl shadow"
          />
          <div className="w-full xl:w-6/12 ">
            <h2 className="text-3xl font-semibold text-gray-600">
              Pourquoi travailler avec notre agence Facebook Ads ?
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-1 mb-10"></div>
            <div className="body-text">
              Une présence solide sur les réseaux sociaux, notamment Facebook,
              est aujourd’hui essentielle pour les PME.
              <br />
              <br />
              En effet, avec une majorité d’utilisateurs de Facebook suivant des
              comptes d’entreprise, la visibilité offerte par ce réseau social
              est considérable. Néanmoins, sans l’expertise adéquate, il peut
              être délicat de déployer une stratégie de marketing Facebook
              efficace et rentable.
              <br />
              <br />
              En tant qu’agence Facebook Ads, notre équipe est là pour vous
              aider :
              <br />
              <br />
              <ul className="pl-6 list-disc list">
                <li>À définir vos objectifs</li>
                <li>À cibler efficacement vos utilisateurs</li>
                <li>
                  À délivrer des messages impactants via la plateforme Facebook
                  Ads.
                </li>
              </ul>
              <br />
              <br />
              Nos compétences en création de contenu web sont également un atout
              précieux pour la mise en place d’annonces percutantes, que nous
              optimisons en continu en fonction de leur performance.
            </div>
            <Button
              variant="filled"
              size="md"
              className="!bg-primary hover:!bg-opacity-90 mt-10 "
            >{`Contactez-nous`}</Button>
          </div>
        </div>
      </section>

      {/* 5th */}
      <section className="w-full flex flex-col xl:container px-4 my-40 text-center">
        <h2 className="text-3xl font-semibold text-gray-600">
          8 raisons de travailler avec notre agence Facebook Ads
        </h2>
        <div className="w-[50px] mx-auto bg-primary h-1 mt-8 mb-16"></div>
        {/* inner 2 */}
        <div className="max-w-5xl mx-auto w-full flex flex-wrap lg:flex-nowrap gap-y-6 gap-x-16">
          <div className="w-full xl:w-6/12 flex flex-col items-center">
            <p className="text-gray-600 text-left">
              <b>1</b>. Définition de vos objectifs marketing grâce à nos
              experts en publicité Facebook.
              <br />
              <br />
              <b>2</b>. Mise en place d’une stratégie marketing rentable et
              efficace sur Facebook et Instagram.
              <br />
              <br />
              <b>3</b>. Création d’annonces pertinentes visant à engager vos
              clients, avec une optimisation continue pour garantir de
              meilleures performances de la campagne.
              <br />
              <br />
              <b>4</b>. Économie de temps en nous déléguant la gestion complète
              de vos campagnes publicitaires Facebook.
              <br />
              <br />
              <b>5</b>. Accès à des outils spécialisés et à une expertise unique
              pour évaluer la rentabilité de votre stratégie de marketing
              social.
            </p>
          </div>

          <div className="w-full xl:w-6/12 flex flex-col items-center text-center">
            <p className="text-gray-600 text-left">
              <b>6</b>. Augmentation du taux de conversion pour exploiter au
              mieux les opportunités de vente sur Facebook et Instagram.
              <br />
              <br />
              <b>7</b>. Mise en place d’une stratégie marketing rentable et
              efficace sur Facebook et Instagram.
              <br />
              <br />
              <b>8</b>. Création d’annonces pertinentes visant à engager vos
              clients, avec une optimisation continue pour garantir de
              meilleures performances de la campagne.
            </p>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="w-full bg-no-repeat bg-cover bg-fixed bg-center my-40 text-center bg-facebook-phone">
        <div className="w-full h-full bg-white bg-opacity-40  p-24">
          <Button
            variant="filled"
            size="xl"
            className="!bg-primary hover:!bg-opacity-90 shadow-xl"
          >{`Contactez-nous`}</Button>
        </div>
      </section>

      {/* 6th */}
      <section className="w-full flex flex-col xl:container px-4 my-40 text-center">
        <h2 className="text-3xl font-semibold text-gray-600">
          L’approche de notre Agence Facebook Ads
        </h2>
        <h3 className="text-lg font-semibold text-gray-600 mt-2">
          Votre réussite grâce à une stratégie de publicité Facebook
          personnalisée
        </h3>
        <div className="w-[50px] mx-auto bg-primary h-1 mt-8 mb-8"></div>

        <p className="text-left mb-16 max-w-7xl mx-auto text-gray-600">
          Nos <b>experts Facebook Ads</b> mettent à profit leur savoir-faire
          pour
          <b>exploiter la puissance des réseaux sociaux.</b>
          Ensemble, nous élaborons des campagnes ciblées pour élaborer des
          stratégies d’acquisition et de vente. Il est essentiel d’avoir une
          stratégie claire pour se démarquer.
          <br />
          <br />
          Nous vous aidons à affiner cette approche publicitaire. Aussi, nos
          experts en publicité Facebook répondons à diverses questions comme :
        </p>
        {/* inner 2 */}
        <div className="max-w-6xl mx-auto w-full flex flex-wrap lg:flex-nowrap gap-y-6 gap-x-16">
          <div className="w-full xl:w-6/12 flex flex-col items-center">
            <p className="text-gray-600 text-left">
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              Quelle est la meilleure façon d’établir une campagne de publicité
              sur Facebook et Instagram ?
              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              Comment identifier précisément mes clients sur les plateformes
              sociales ?
              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              Quel est le moyen le plus efficace de partager mon offre avec mon
              audience ?
              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              Comment optimiser la rédaction de mes annonces pour maximiser
              l’engagement ?
              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              Comment puis-je tester et améliorer constamment l’efficacité de
              mes publicités ?
            </p>
          </div>

          <div className="w-full xl:w-6/12 flex flex-col items-center text-center">
            <p className="text-gray-600 text-left">
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              Quel budget dois-je allouer à la publicité sur les réseaux sociaux
              pour atteindre mes objectifs ?
              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              Comment utiliser les retours des clients pour améliorer mes
              publicités et mon produit/service ? ​​
              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              Quels sont les meilleurs formats publicitaires à utiliser pour mon
              entreprise sur Facebook et Instagram ?
              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              Comment puis-je intégrer mes campagnes de publicité sur Facebook
              avec mes autres efforts de marketing numérique ?
            </p>
          </div>
        </div>

        <div className="w-[80px] bg-primary h-1 my-24 mx-auto"></div>
        {/* inner 3 */}
        <div className="max-w-6xl mx-auto w-full flex flex-wrap lg:flex-nowrap gap-y-6 gap-x-16">
          <div className="w-full xl:w-6/12 flex flex-col items-center">
            <div className="text-left text-gray-500">
              Notre{" "}
              <span className="text-primary font-medium">
                agence Facebook Ads
              </span>{" "}
              vous soutient tout au long du processus, évaluant constamment vos
              résultats marketing. Cela nous permet d’ajuster, d’optimiser votre
              stratégie et vos investissements. Voici ce que vous pouvez
              attendre de nos services :
              <br />
              <br />
              <ul className="pl-6 list-disc list">
                <li>Augmentation du nombre d’abonnés</li>
                <li>
                  Collecte d’informations précieuses sur de nouveaux prospects
                </li>
                <li>Stimulation des ventes en ligne</li>
                <li>Développement d’une communauté engagée.</li>
              </ul>
              <br />
              <br />
              L’approche de notre agence de publicité Facebook est dynamique,
              s’adaptant constamment aux tendances du marché. Mais aussi aux
              besoins spécifiques de votre entreprise.
              <br />
              <br />
              Notre objectif est de vous procurer les meilleurs résultats en
              utilisant des stratégies de marketing social qui fonctionnent.
            </div>
          </div>

          <div className="w-full xl:w-6/12 flex flex-col items-center text-center">
            <Image
              src={"/img/man.webp"}
              alt="man"
              width={400}
              height={400}
              className="w-full object-cover bg-center max-h-[450px] rounded-2xl shadow"
            />
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="w-full bg-no-repeat bg-cover bg-fixed bg-center mt-40 text-center bg-phone-icons">
        <div className="w-full h-full bg-white bg-opacity-40  p-24">
          <Button
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
      <section className="2xl:container flex flex-col items-center mt-10 py-24 border-t border-secondary">
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
          href="/"
        >
          Conception WEB
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-seo"
        >
          Référencement naturel - SEO
        </Link>
      </section>
    </div>
  );
}
