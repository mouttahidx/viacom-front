import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import { Accordion, Button, Tabs } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AgenceGoogleAds() {
  const faqs = [
    {
      value:
        "Quelle Est La Différence Entre Le Référencement Naturel Et Google Ads ?",
      description: (
        <div className="text-primary">
          Le référencement SEO et Google Ads sont deux stratégies distinctes
          pour augmenter la présence en ligne, mais elles diffèrent
          significativement.
          <br />
          <br />
          Le référencement naturel, aussi appelé SEO, est un processus
          organique. Son but est d’améliorer le positionnement d’un site sur les
          moteurs de recherche. Pour cela, il optimise son contenu et sa
          structure. De cette façon, il offre une performance durable.
          Cependant, il faut noter que ce processus demande un certain temps
          pour produire des résultats.
          <br />
          <br />
          D’un autre côté, Google Ads, qui fait partie des stratégies
          publicitaires payantes, assure une présence immédiate sur les pages de
          résultats de recherche de Google, mais à un coût. Bien que son impact
          puisse être rapide, la performance de cette méthode dépend directement
          du budget investi.
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

  const tabs = [
    {
      label: "Annonces dans les résultats de recherche",
      text: (
        <div>
          Les annonces de liens sponsorisés sont courantes sur Google Ads.
          <br />
          <br />
          Leur but ? Vous positionner en tête des recherches. Lors d’une requête
          Google, les annonces les plus pertinentes s’affichent en premier.
          <br />
          <br />
          Elles sont généralement marquées comme « Sponsored » ou « Ad ». Cette
          méthode place votre PME au cœur du processus d’achat. En effet, elle
          utilise les liens sponsorisés de Google pour atteindre vos clients.
        </div>
      ),
    },
    {
      label: "Display",
      text: (
        <div>
          Le réseau Display de Google comprend des millions de sites web
          partenaires sur lesquels vos annonces peuvent être diffusées.
          <br />
          <br />
          Cela comprend des sites d’actualités, des blogs, et même YouTube. Ces
          annonces peuvent être sous forme de textes, d’images ou de vidéos.
        </div>
      ),
    },
    {
      label: "Discovery",
      text: (
        <div>
          Le format Discovery, une extension de Display, offre une toute
          nouvelle façon de toucher vos clients. Ces annonces sont diffusées de
          manière plus visuelle et attrayante, apparaissant principalement dans
          les onglets Discover de Google et dans la boîte de réception Gmail.
          <br />
          <br />
          Grâce aux annonces Discovery, vous pouvez présenter des annonces
          pertinentes à un public plus large, le tout dans des formats qui
          attirent l’attention et captivent l’intérêt.
        </div>
      ),
    },
    {
      label: "Google Shopping",
      text: (
        <div>
          Si vous êtes un détaillant, Google Shopping est un outil précieux pour
          vous. Il permet de présenter vos produits directement dans les
          résultats de recherche de Google. Chaque annonce affiche une image de
          votre produit, son prix, et le nom de votre boutique.
          <br /> <br />
          Ce format offre à vos produits une visibilité auprès de clients prêts
          à acheter. Il facilite leur processus d’achat, agissant ainsi comme un
          véritable levier de ventes pour votre entreprise.
        </div>
      ),
    },
    {
      label: "Publicité vidéo",
      text: (
        <div>
          YouTube, en tant que deuxième moteur de recherche le plus utilisé
          après Google, offre un support inégalé pour atteindre un public large
          et engagé.
          <br />
          <br />
          Avec Google Ads, nous pouvons créer et diffuser des publicités vidéo
          attrayantes qui captent l’attention de votre audience cible.
          <br />
          <br />
          Que ce soit pour présenter un nouveau produit, partager un témoignage
          de client, ou démontrer l’efficacité de votre service, les publicités
          vidéo sont un moyen visuellement percutant de transmettre votre
          message.
          <br />
          <br />
          En plus de YouTube, Google nous permet également de diffuser ces
          publicités vidéo sur d’autres sites relevant du réseau Display. Ainsi,
          vos annonces vidéo ne sont pas limitées à une seule plateforme, mais
          peuvent atteindre votre audience là où elle passe du temps en ligne.
        </div>
      ),
    },
    {
      label: "Campagnes de notoriété",
      text: (
        <div>
          Elle est un élément fondamental de votre stratégie marketing. En
          effet, elle vise à augmenter la visibilité de vos services sur le web.
          Ce sont des campagnes clés pour mettre en avant votre marque et
          atteindre vos objectifs de visibilité. Le but de cette stratégie est
          de cibler des sites web pertinents pour diffuser vos annonces et
          exploiter au mieux l’exposition de votre marque.
        </div>
      ),
    },
    {
      label: "Remarketing",
      text: (
        <div>
          Dans notre palette de services, le remarketing occupe une place de
          choix. Cette technique marketing stratégique vous permet d’atteindre à
          nouveau les visiteurs de votre site web. Ceux-ci, ayant manifesté un
          intérêt initial mais n’ayant pas conclu une action (comme un achat ou
          un remplissage de formulaire), sont précisément ciblés.
          <br />
          <br />
          Grâce au remarketing, nous proposons des annonces personnalisées pour
          les encourager à revenir sur votre site. Que ce soit pour finaliser un
          achat ou pour une autre interaction, ce processus contribue à
          améliorer vos conversions.
          <br />
          <br />
          Cette approche stratégique n’augmente pas seulement votre taux de
          conversion. Elle maximise également l’efficacité de vos dépenses
          marketing en optimisant l’utilisation de chaque dollar dépensé. En
          résumé, notre objectif est de transformer chaque visiteur en client
          potentiel, et le remarketing est un outil clé pour y parvenir.
        </div>
      ),
    },
  ];

  return (
    <div>
      <Head>
        <title>VIA Communication - Google ADS</title>
      </Head>
      {/* hero */}
      <div className="bg-facebook-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl ">
            Stimulez vos ventes et votre présence en ligne grâce à notre agence
            Google Ads
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
            <div className="body-text">
              Google Ads domine la publicité en ligne avec plus de 90% des
              revenus générés sur les moteurs de recherche. Mais comment
              maximiser l’efficacité de cet outil puissant ? La clé réside dans
              le partenariat avec une{" "}
              <span className="text-primary font-medium">
                agence Google Ads
              </span>{" "}
              spécialisée et certifiée comme{" "}
              <span className="text-primary font-medium">
                VIA Communication
              </span>
              .
              <br />
              <br />
              Il est à noter que 65% des internautes qui cliquent sur une
              publicité Google Ads ont une intention d’achat.
              <br />
              <br />
              Une agence Google Ads experte sait précisément comment atteindre
              ces consommateurs.
              <br />
              <br />
              En offrant une{" "}
              <span className="text-primary font-medium">
                expertise unique
              </span>{" "}
              et des compétences dédiées, une agence peut transformer vos
              campagnes Google Ads en véritables moteurs de croissance.
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
            src={"/img/google-page.webp"}
            alt="google"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full rounded-3xl shadow"
          />
        </div>
      </section>

      {/* 9 cards section */}
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
          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/visibility.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Augmentation De La Visibilité
            </h4>
            <p className="text-secondary text-center">
              Les campagnes Google Ads vous aident à augmenter votre visibilité
              en ligne. Les annonces bien positionnées apparaissent dans les
              résultats des recherches Google, attirant plus de clients
              potentiels vers votre site web.
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/fast.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Résultats Rapides
            </h4>
            <p className="text-secondary text-center">
              Contrairement au référencement organique (SEO), qui peut prendre
              des mois pour montrer des résultats, Google Ads génère du trafic
              vers votre site presque immédiatement.
              <br />
              <br />
              Dans cette démarche, un de nos experts en campagnes Google est à
              vos côtés pour vous assister dans l'élaboration et le paramétrage
              de vos annonces Google Ads.
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/target.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Ciblage Précis
            </h4>
            <p className="text-secondary text-center">
              Google Ads vous permet de cibler spécifiquement votre public. Vous
              pouvez cibler par localisation, âge, sexe, intérêts et même
              comportement de navigation.
              <br />
              <br />
              Grâce à notre agence de publicité web, vos annonces sont
              stratégiquement placées pour atteindre les personnes qui sont le
              plus susceptibles d'être intéressées par vos produits ou services.
            </p>
          </div>
        </div>
        {/* inner 2 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/mesures.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Mesure De L'efficacité
            </h4>
            <p className="text-secondary text-center">
              Google Ads offre des outils puissants pour mesurer l'efficacité de
              vos publicités. Vous pouvez voir combien de personnes ont vu vos
              annonces, combien ont cliqué, et combien ont effectué une action
              (comme faire un achat) sur votre site.
              <br />
              <br />
              Notre agence Google Ads vous aide à comprendre ces données et à
              les utiliser pour améliorer vos campagnes.
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/budget.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Flexibilité Budgétaire
            </h4>
            <p className="text-secondary text-center">
              Avec Google Ads, vous contrôlez combien vous dépensez sur chaque
              publicité Google Ads. Vous pouvez définir un budget quotidien ou
              mensuel, et vous ne payez que lorsque quelqu'un clique sur votre
              annonce.
              <br />
              <br />
              Dans cette optique, notre agence de publicité Google peut vous
              aider à gérer votre budget efficacement, en s'assurant que chaque
              dollar est bien dépensé.
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/notor.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Amélioration De La Notoriété De La Marque
            </h4>
            <p className="text-secondary text-center">
              Même si les utilisateurs ne cliquent pas sur votre annonce, voir
              votre nom en haut des résultats de recherche peut augmenter la
              notoriété de votre marque.
            </p>
          </div>
        </div>
        {/* inner 3 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/roi.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              ROI Mesurable
            </h4>
            <p className="text-secondary text-center">
              Grâce à notre agence certifiée Google Partner, vous pouvez
              calculer votre retour sur investissement de façon précise. Cela
              vous permet d'ajuster votre stratégie et de gérer vos dépenses
              publicitaires.
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/ppc.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Modèle PPC
            </h4>
            <p className="text-secondary text-center">
              Google Ads utilise un modèle de tarification au coût par clic
              (CPC). Cela implique que vous êtes facturé uniquement lorsque
              quelqu'un clique sur votre annonce. L'avantage est que vous ne
              payez que pour le trafic effectif vers votre site.
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/up.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Croissance{" "}
            </h4>
            <p className="text-secondary text-center">
              En investissant dans Google Ads, vous donnez à votre entreprise
              l'opportunité de croître plus rapidement, d'atteindre de nouveaux
              clients et d'améliorer sa rentabilité.
            </p>
          </div>
        </div>
      </section>

      {/* why google ads */}
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
              Qu’est-ce que Google ads ?
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-1 mb-10"></div>
            <p className="body-text">
              Google Ads, autrefois connu sous le nom de Google AdWords, est une
              plateforme de publicité en ligne développée par Google. Elle
              permet aux annonceurs de{" "}
              <b>
                diffuser des annonces dans les résultats de recherche Google
              </b>
              , sur les sites partenaires et sur d’autres propriétés Google
              comme YouTube.
            </p>
            <h3 className="text-2xl font-semibold text-gray-600 my-12 ">
              Pourquoi utiliser les publicités Google Ads ?
            </h3>
            <div className="body-text">
              Un des principaux avantages de{" "}
              <b>
                Google Ads est sa capacité à cibler précisément les publicités
              </b>
              . En utilisant les outils de ciblage de Google, vous pouvez
              afficher vos annonces à des <b>publics spécifiques</b> en fonction
              de leur localisation, de leur âge, de leurs centres d’intérêt et
              de bien d’autres critères. Cela permet de créer des campagnes
              marketing Adwords incroyablement personnalisées.
              <br />
              <br />
              De plus, avec le modèle de paiement au clic (PPC) de Google Ads,
              <b>
                vous ne payez que lorsque quelqu’un clique sur votre annonce.
              </b>
              C’est ce qui rend vos campagnes publicitaires non seulement
              rentables, mais aussi efficaces en termes de coût.
              <br />
              <br />
              Travailler avec une agence Google Ads certifiée, telle que{" "}
              <span className="text-primary font-medium">
                VIA Communication
              </span>
              , vous permet de développer une stratégie efficace pour optimiser
              vos retours.
              <br />
              <br />
              Nos experts en Google Ads peuvent vous aider à configurer, gérer
              et optimiser vos campagnes, en vous assurant que chaque aspect est
              aligné sur vos objectifs commerciaux.
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

      {/* how it works */}
      <section className="w-full flex flex-col xl:container my-40 px-2 ">
        <h2 className="gray-section-title text-center">
          Comment se déroule une campagne Google Ads optimisée ?
        </h2>
        <div className="divider"></div>
        <h4 className="text-2xl text-gray-600 mb-8 font-semibold">
          1. Choix la campagne souhaitée
        </h4>
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

        <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
          2. Définition de l'objectif de la campagne
        </h4>
        <div className="text-gray-500">
          Pour chaque campagne Google Ads, notre équipe définit les objectifs :
          <br />
          <br />
          <ul className="list-disc pl-6">
            <li>
              <b>Amélioration du taux de conversions en ligne</b> : Cela peut
              comprendre les ventes, les téléchargements d’applications,
              l’inscription à une newsletter, etc.
            </li>
            <li>
              <b>Multiplication des remplissages de formulaires de contact</b> :
              Idéal pour collecter des informations sur les prospects et établir
              des contacts futurs.
            </li>
            <li>
              <b>Élargissement du trafic sur votre site web</b> : Important pour
              renforcer la visibilité de votre site et attirer plus de clients
              potentiels vers vos produits ou services.
            </li>
          </ul>
          <br />
          Ces objectifs peuvent coexister dans une seule stratégie publicitaire,
          permettant ainsi d’améliorer l’efficacité de vos efforts de promotion.
        </div>

        <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
          3. Choix de l'audience
        </h4>
        <div className="text-gray-500">
          Cette audience devrait correspondre à vos <b>clients idéaux</b>, ceux
          qui sont les plus{" "}
          <b>susceptibles d’être intéressés par vos produits ou services</b>.
          <br />
          <br />
          Définir votre audience cible se fait par une analyse détaillée,
          permettant de préciser les critères de ciblage géographique et les
          caractéristiques démographiques et comportementales de votre audience.
          <br />
          De cette manière, nos{" "}
          <b>campagnes Google Ads touchent les bonnes personnes</b> au bon
          moment, optimisant ainsi le rendement de votre investissement
          publicitaire.
        </div>

        <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
          4. Mise en œuvre et suivi de la campagne
        </h4>
        <div className="text-gray-500">
          Cette phase implique la <b>création des annonces</b>, qu’elles soient
          textuelles, visuelles ou vidéo. Lors de la mise en œuvre de la
          campagne, nous nous assurons que chaque annonce correspond à la
          plateforme sur laquelle elle sera diffusée.
          <br />
          <br />
          Que ce soit une annonce sponsorisée dans les résultats de recherche
          Google, une bannière sur un site partenaire, une vidéo YouTube, une
          annonce produit Google Shopping, une annonce Discovery, ou une
          campagne de notoriété, chaque{" "}
          <b>annonce est adaptée à son contexte pour augmenter son impact.</b>
        </div>

        <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
          5. Optimisation et ajustement des performances de la campagne
        </h4>
        <div className="text-gray-500">
          Cette étape implique{" "}
          <b>d’examiner attentivement les performances de la campagne</b> et
          d’apporter des ajustements nécessaires pour améliorer ses résultats.
          <br />
          <br />
          Par exemple, si nous constatons qu’une annonce n’attire pas autant de
          clics que prévu, nous pouvons la retravailler pour la rendre plus
          attrayante. Si une campagne de remarketing n’a pas le taux de
          conversion escompté, nous pouvons ajuster la stratégie de ciblage ou
          modifier les annonces pour les rendre plus pertinentes et efficaces.
        </div>
      </section>

      {/* avantages */}
      <section className="w-full flex flex-col container my-40 gap-y-20 ">
        {/* title subtitle */}

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          {/* icons list */}
          <div className="w-full lg:w-6/12 ">
            <h2 className="gray-section-title !text-primary">
              Quels sont les avantages à collaborer avec une agence spécialisée
              en publicité Google ?
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-6 mb-16"></div>
            <p className="body-text">
              Collaborer avec une <b>agence spécialisée en publicité Google</b>{" "}
              offre plusieurs avantages clés. Voici quelques-unes des raisons
              pour lesquelles vous pourriez envisager de faire appel à nos
              services.
            </p>
            <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              1. Expertise professionnelle
            </h4>
            <div className="text-gray-500">
              Nous détenons une{" "}
              <b>connaissance précise de la plateforme Google Ads</b> pour vous
              positionner dans les résultats de recherche.
              <br />
              <br />
              Notre agence est experte en gestion et{" "}
              <b>optimisation de diverses campagnes</b>. En veille constante,
              nous suivons les dernières tendances et pratiques du secteur. Cela
              nous permet d’utiliser efficacement les outils de Google Ads.
              <br />
              <br />
              Grâce à cette stratégie, nous maximisons la portée de chaque
              campagne. De plus, nous nous assurons dans l’amélioration des
              résultats de vos recherches Google.
            </div>

            <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              2. Gain de temps
            </h4>
            <div className="text-gray-500">
              Gérer des publicités Google Ads peut être chronophage, en
              particulier pour ceux qui ne sont pas familiers avec la
              plateforme. En déléguant cette tâche à une agence tel que{" "}
              <span className="brand">VIA Communication</span>, vous pouvez{" "}
              <b>vous concentrer sur d’autres aspects de votre entreprise.</b>
            </div>

            <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              3. Optimisation continue
            </h4>
            <div className="text-gray-500">
              <b>
                Nos experts Google Ads surveillent et optimisent constamment vos
                campagnes
              </b>{" "}
              pour améliorer leur performance. Elles ajustent les enchères,
              testent différents messages publicitaires et mettent en œuvre
              d’autres stratégies pour améliorer votre ROI.
            </div>

            <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              4. Analyse et rapports
            </h4>
            <div className="text-gray-500">
              <b>
                Nous fournissons des rapports réguliers sur les performances de
                vos campagnes.
              </b>{" "}
              Ces informations vous permettent de comprendre où va votre budget
              publicitaire et comment vos annonces se comportent.
            </div>

            <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              5. Certification Google Partner
            </h4>
            <div className="text-gray-500">
              <b>Notre agence est certifiée Google Partner.</b> Vous profitez
              ainsi d’experts qualifiés. Ils suivent à la lettre les normes et
              meilleures pratiques de Google. C’est une assurance de qualité
              pour vous.
            </div>
          </div>
          <Image
            src={"/img/agence-ads.webp"}
            alt="google"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full max-h-[450px] xl:max-h-full rounded-3xl shadow"
          />
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

      {/* competences */}
      <section className="w-full flex flex-col xl:container my-40 px-2 ">
        <h2 className="gray-section-title text-center">
          Les compétences de notre agence Google Ads au Québec
        </h2>
        <div className="divider"></div>
        <div className="text-gray-600">
          Pour propulser vos campagnes Google Ads et favoriser la réussite de
          votre entreprise, nos gestionnaires offrent un accompagnement sur
          mesure et complet.
          <br />
          <br />
          De l’étude approfondie de votre marché à l’élaboration d’une stratégie
          de marketing web efficace, nos experts en Google Ads au Québec
          maîtrisent tous les aspects cruciaux pour votre succès en publicité
          sur le web.
          <br />
          <br />
          Notre agence de publicité Google, forte de son expertise, mettra en
          œuvre des campagnes de publicité qui seront :
          <br />
          <br />
          <CheckBadgeIcon className="w-5 h-5 mr-2 text-primary inline" />
          Spécifiquement ajustées à vos objectifs et au budget que vous avez
          défini
          <br />
          <br />
          <CheckBadgeIcon className="w-5 h-5 mr-2 text-primary inline" />
          Méticuleusement conçues sur la base des mots-clés que vos prospects
          utilisent lorsqu’ils envisagent d’acheter un produit ou un service lié
          à votre PME
          <br />
          <br />
          <CheckBadgeIcon className="w-5 h-5 mr-2 text-primary inline" />
          Idéalement positionnées au cœur de la recherche d’information et du
          processus d’achat de vos prospects
          <br />
          <br />
          <CheckBadgeIcon className="w-5 h-5 mr-2 text-primary inline" />
          Optimisées en temps réel par votre expert pour s’adapter aux
          évolutions des besoins de vos clients
          <br />
          <br />
          <CheckBadgeIcon className="w-5 h-5 mr-2 text-primary inline" />
          Profitables pour votre entreprise. Nos experts utilisent
          judicieusement chaque dollar de votre budget publicitaire pour vous
          assurer un retour sur investissement positif.
          <br />
          <br />
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
      </section>
    </div>
  );
}
