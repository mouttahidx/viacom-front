import { Accordion, Button, Tabs } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AgenceSeo() {
  const tabs1 = [
    {
      label: "Audit SEO",
      text: (
        <div>
          Avant de travailler sur votre site en profondeur, nos experts en
          référencement évaluent votre site dans sa globalité grâce à un audit
          SEO approfondi. Cet audit nous permet d’obtenir une vision claire de
          l’état actuel de votre site web en termes de référencement et de
          déceler les éventuels problèmes ou lacunes qui pourraient affecter
          votre positionnement sur le web.
          <br />
          <br />
          Nous analysons différents aspects de votre site, tels que les
          mots-clés utilisés, la structure du site, la pertinence du contenu,
          l’expérience utilisateur, la vitesse de chargement et les facteurs
          techniques.
          <br />
          <br />
          En comprenant en détail la situation de votre site, nous sommes en
          mesure de formuler des recommandations personnalisées pour optimiser
          votre référencement et améliorer votre classement dans les moteurs de
          recherche.
          <br />
          <br />
          L’audit SEO est donc une étape essentielle qui nous permet de poser
          les bases solides d’une stratégie de référencement efficace pour votre
          site web.
        </div>
      ),
    },
    {
      label: "Optimisation technique",
      text: (
        <div>
          Nos experts analysent attentivement plusieurs aspects essentiels. Cela
          comprend la vitesse de chargement, la compatibilité mobile, la
          structure des URL et la gestion des balises.
        </div>
      ),
    },
    {
      label: "Recherche de mots-clés",
      text: (
        <div>
          La stratégie SEO passe par l’identification des mots-clés pertinents
          pour votre entreprise et votre secteur d’activité.
          <br />
          <br />
          De ce fait, nous effectuons une recherche approfondie pour cibler les
          termes les plus recherchés par votre public cible. Cette étape permet
          d’optimiser votre contenu et d’attirer un trafic qualifié vers votre
          site web.
        </div>
      ),
    },
    {
      label: "Stratégie de contenu",
      text: (
        <div>
          Nos spécialistes SEO développent une stratégie de contenu solide pour
          renforcer votre référencement organique. Ainsi, nous créons du contenu
          hautement pertinent, informatif et engageant, en intégrant
          judicieusement les mots-clés pertinents.
          <br /> <br />
          Cela permet d’améliorer votre visibilité dans les moteurs de recherche
          et d’établir votre autorité dans votre domaine d’expertise.
        </div>
      ),
    },
    {
      label: "Optimisation on-page",
      text: (
        <div>
          Notre agence de référencement naturel en SEO optimise le contenu de
          chaque page de votre site web en suivant les bonnes pratiques
          établies.
          <br /> <br />
          Cela garantit un positionnement favorable dans les résultats des
          moteurs de recherche. Nous nous assurons que chaque page cible un
          mot-clé spécifique et respecte les normes de structure web.
          <br /> <br />
          De plus, nous veillons à une utilisation adéquate des images et à
          l’intégralité des balises nécessaires pour les algorithmes des moteurs
          de recherche.
        </div>
      ),
    },
    {
      label: "SEO off-site",
      text: (
        <div>
          Chez VIA Communication, nous élaborons des stratégies de SEO off-site.
          Elles visent à renforcer la présence d’un site web sur diverses
          plateformes.
          <br /> <br />
          Le SEO off-site comprend des activités réalisées en dehors du site.
          Par exemple, nous travaillons sur l’optimisation de votre présence sur
          des plateformes de SEO local, comme Google My Business.
          <br /> <br />
          Nous nous concentrons également sur la génération de backlinks, qui
          sont des liens provenant d’autres sites web.
        </div>
      ),
    },
  ];

  const tabs2 = [
    {
      label: "Acquisition de liens",
      text: (
        <div>
          Inclure des liens sur votre site web stimule le trafic et optimise son
          référencement sur les moteurs de recherche. Il existe divers types de
          liens :
          <br />
          <br />– <b>Les backlinks, ou liens entrants :</b> Ces liens sont
          proposés par un autre site web et redirigent vers le vôtre.
          <br />
          <br />– <b>Le maillage interne, ou liens internes :</b> Ils sont
          situés sur une page de votre site et pointent vers une autre page de
          votre plateforme.
          <br />
          <br />– <b>Le maillage externe, ou liens externes :</b> Ces liens se
          trouvent sur votre site mais redirigent vers une source externe. Ils
          améliorent la qualité de votre contenu, fournissent des informations
          pertinentes et apportent une crédibilité à votre site.
        </div>
      ),
    },
    {
      label: "Rédaction en français",
      text: (
        <div>
          Notre équipe de rédaction spécialisée dans le référencement naturel
          vous propose des services de rédaction optimisés en français. Nous
          créons un contenu unique et de haute qualité qui répond aux exigences
          du SEO et qui capte l’attention des utilisateurs en ligne.
          <br />
          <br />
          Que ce soit pour votre site internet, votre blog ou vos pages de
          produits, chaque texte est soigneusement rédigé pour optimiser votre
          présence sur le web.
          <br />
          <br />
          Grâce à notre expertise des algorithmes sur les moteurs de recherche,
          nous sélectionnons avec précision les mots-clés pertinents et les
          intégrons de manière stratégique dans vos pages.
        </div>
      ),
    },
    {
      label: "SEO local",
      text: (
        <div>
          Si vous ciblez principalement une audience locale, notre agence SEO au
          Québec développe des stratégies de référencement local sur mesure pour
          votre entreprise. L’objectif est d’optimiser les résultats des moteurs
          de recherche pour une région précise.
          <br />
          <br />
          Nous avons une approche personnalisée du référencement local qui vous
          aide à vous démarquer de la concurrence locale. Grâce à cette
          approche, vous attirez plus de clients potentiels de votre région.
        </div>
      ),
    },
    {
      label: "Mise à jour de vos pages",
      text: (
        <div>
          L’algorithme de Google apprécie les mises à jour régulières. Cela
          stimule les visites sur votre site.
          <br /> <br />
          Cette pratique augmente également les chances de toucher une audience
          inédite. Donc, rénover les éléments déjà sur votre site est une
          stratégie bénéfique. Il est recommandé de revoir et actualiser toutes
          vos pages web.
        </div>
      ),
    },
    {
      label: "Suivi et analyse",
      text: (
        <div>
          Afin de suivre la stratégie de référencement mise en place, nous vous
          fournissons des rapports détaillés sur les performances de votre site
          web, y compris les classements de mots-clés, le trafic organique, les
          conversions et d’autres métriques clés.
          <br /> <br />
          Cette analyse continue nous permet d’ajuster notre stratégie pour
          maximiser les résultats sur les différents moteurs de recherche.
        </div>
      ),
    },
  ];

  const faqs = [
    {
      value: "Qu’est-Ce Que Le SEO ?",
      description: (
        <div className="text-primary">
          Le référencement naturel, ou SEO, est une méthode qui vise à{" "}
          <b>améliorer la présence d’un site web</b> ou d’une page web dans les
          résultats non payants d’un moteur de recherche. Le processus de SEO
          implique de prendre en compte, entre autres, les mots-clés
          susceptibles d’être utilisés dans les requêtes de recherche.
        </div>
      ),
    },
    {
      value: "Pourquoi Est-Il Important D’être Présent Sur Le Web ?",
      description: (
        <div className="text-primary">
          Pour les entreprises souhaitant établir et maintenir leur{" "}
          <b>visibilité en ligne</b>, investir dans une stratégie SEO est
          essentiel.
          <br />
          <br />
          Les statistiques parlent d’elles-mêmes : plus de 50% des visites sur
          un site web proviennent des moteurs de recherche et près de 70% des
          clics se font sur des résultats organiques.
          <br />
          <br />
          Il est donc clair que le référencement naturel n’est pas un simple
          luxe, mais une <b>
            priorité pour toute entreprise désirant générer
          </b>{" "}
          un trafic qualifié sur son site web.
          <br />
          <br />
          Cependant, atteindre un positionnement web optimal nécessite du temps
          et une expertise approfondie. C’est pourquoi il est avantageux pour
          votre entreprise de confier votre référencement web à une agence SEO
          telle que la nôtre.
          <br />
          <br />
          Nous possédons l’expérience et les connaissances nécessaires pour
          mettre en place les meilleures pratiques SEO établies par Google. Nous
          suivons de près les évolutions du paysage numérique et nous nous
          tenons constamment informés des dernières tendances et des nouvelles
          techniques pour optimiser votre présence sur internet.
          <br />
          <br />
          En faisant appel à notre agence SEO, vous bénéficierez d’une équipe
          d’experts dédiés à l’amélioration de votre positionnement web.
          <br />
          <br />
          Notre approche transparente et orientée vers les résultats vous
          permettra d’obtenir des rapports réguliers sur les travaux effectués
          et les progrès réalisés.
          <br />
          <br />
          Confiez-nous votre référencement web et{" "}
          <b>profitez de notre expertise</b>
          pour propulser votre site dans les classements des moteurs de
          recherche et atteignez vos objectifs de croissance.
        </div>
      ),
    },
    {
      value:
        "Quelle Est La Distinction Entre Le SEO Et Le Marketing Par Moteur De Recherche Payant (SEA) ?",
      description: (
        <div className="text-primary">
          Le but principal du <b>SEA</b>, notamment par le biais de Google Ads,
          est de provoquer une <b>affluence instantanée</b> de visiteurs sur
          votre site web.
          <br />
          <br />
          Avec cette méthode, vous avez la possibilité de vous{" "}
          <b>propulser rapidement en haut de la liste des résultats</b> de
          recherche Google pour des mots-clés spécifiques.
          <br />
          <br />
          Toutefois, le SEA peut être une <b>solution onéreuse</b>, et tous les
          avantages obtenus disparaîtront dès l’arrêt de votre investissement
          publicitaire.
          <br />
          <br />
          En revanche, le <b>SEO</b> est une <b>stratégie à long terme</b>. En
          effet, les avantages que vous obtenez grâce à l’optimisation de votre
          présence organique sur les moteurs de recherche ont une durabilité
          significative.
          <br />
          <br />
          Cependant, il est à noter, que le travail de SEO doit être régulier.
          Face à la dynamique constante du web, il est nécessaire de poursuivre
          vos efforts pour garantir une bonne présence organique sur Google.
        </div>
      ),
    },
    {
      value:
        "Quel Est Le Temps Nécessaire Pour Voir Des Résultats Avec Notre Agence SEO Au Québec ?",
      description: (
        <div className="text-primary">
          Dans le monde du <b>SEO</b>, la <b>patience</b> est <b>primordiale</b>
          . C’est une course de fond et non de sprint. Les moteurs de recherche,
          comme Google, évaluent plusieurs éléments. Par exemple, ils examinent
          les mots-clés, leur densité, la compétition, l’autorité de votre
          domaine.
          <br />
          <br />
          Aussi, ils évaluent la vitesse de chargement de votre site, sa
          responsivité, le taux de rebond et d’autres critères.
          <br />
          <br />
          L’ancienneté du site est également un facteur important pour Google.
          Un site plus ancien a souvent une meilleure réputation.
          <br />
          <br />
          Ne vous attendez pas à des gains immédiats. Néanmoins, les efforts
          déployés aujourd’hui seront bénéfiques plus tard. Et vous donneront
          une longueur d’avance sur vos concurrents.
          <br />
          <br />
          Comptez <b>entre 3 et 6 mois pour constater des améliorations</b>.
          Cela varie en fonction de votre industrie et des mots-clés visés.
        </div>
      ),
    },
    {
      value:
        "Est-Ce Que Notre Entreprise Vous Garantit Une Place Sur La Première Page De Google Pour Votre Site ?",
      description: (
        <div className="text-primary">
          Chez Via Communication, nous croyons en{" "}
          <b>l’honnêteté et la transparence avec nos clients.</b>
          <br />
          <br />
          Cela signifie admettre qu’aucune agence SEO ne peut promettre des
          résultats de référencement naturel précis. Et pour cause, le
          positionnement sur Google dépend de son algorithme complexe qui est en
          dehors de notre contrôle.
          <br />
          <br />
          De plus, les résultats organiques sur les moteurs de recherche varient
          quotidiennement. Aujourd’hui, vous pouvez être en première position,
          et demain vous pourriez être en deuxième. Donc, promettre une première
          place est une promesse vide de sens.
          <br />
          <br />
          Cependant, bien que nous ne puissions pas garantir un classement
          spécifique,{" "}
          <b>
            nous nous engageons à améliorer globalement votre présence sur le
            web.
          </b>{" "}
          Nous adoptons les stratégies SEO les plus pertinentes et approuvées
          par Google.
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
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl">
            Agence SEO au Québec dédiée à votre Référencement Web
          </h1>
        </div>
      </div>

      {/* why seo cards section */}
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
              Naviguer dans le monde numérique est un défi. Des milliers de
              sites web luttent pour une place de choix sur les moteurs de
              recherche. C’est là qu’intervient
              <span className="brand">VIA Communication,</span>
              notre
              <span className="brand">agence SEO au Québec.</span>
              <br />
              <br />
              Notre but ? <b>Rendre votre site visible et attrayant</b>. Pour ce
              faire, nous créons un contenu de qualité et répondant aux besoins
              de votre cible.
              <br />
              <br />
              Vous pouvez ainsi vous démarquer parmi vos concurrents.
              <br />
              <br />
              Nos professionnels du référencement SEO sont formés pour analyser
              votre secteur d’activité, étudier les tendances du marché et
              comprendre les besoins spécifiques de votre public cible.
              <br />
              <br />
              Grâce à notre analyse approfondie,{" "}
              <b>nous créons une stratégie personnalisée</b> pour optimiser
              votre présence sur internet et vous démarquer de vos concurrents.
              <br />
              <br />
              En choisissant de travailler avec nous, vous investissez dans
              votre positionnement web et{" "}
              <b>augmentez le trafic qualifié vers votre site.</b>
              <br />
              <br />
              Chez VIA Communication, le référencement web est bien plus qu’une
              simple tâche, c’est une stratégie gagnante.
            </div>
            <Button
              variant="filled"
              size="md"
              className="!bg-primary hover:!bg-opacity-90 mt-10 "
            >{`Contactez-nous`}</Button>
          </div>
          <Image
            src={"/img/seo-page.webp"}
            alt="agence-marketing"
            width={500}
            height={500}
            className="aspect-video w-full lg:w-6/12 object-cover h-full rounded-3xl shadow"
          />
        </div>
      </section>

      {/* services cards section */}
      <section className="w-full flex flex-col xl:container my-40 gap-y-20 px-2 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            Pourquoi investir dans une stratégie marketing de SEO ?
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 mb-10 "></div>
        </div>

        {/* inner 1 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/s1.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Améliorez Votre Trafic
            </h4>
            <p className="text-secondary text-center">
              Augmentez votre visibilité en ligne et observez une augmentation
              du nombre de personnes visitant votre site.
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/seo-card.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Ciblez Des Nouveaux Clients Potentiels
            </h4>
            <p className="text-secondary text-center">
              Ciblez précisément le public le plus susceptible d'être intéressé
              par vos produits et services.
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/finger-up.jpeg"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Stimulez Votre Croissance
            </h4>
            <p className="text-secondary text-center">
              Le flux de nouveaux visiteursStimulez votre croissance et les
              prospects qualifiés créent de nouvelles opportunités de croissance
              pour votre entreprise.
            </p>
          </div>
        </div>
        {/* inner 2 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/revenues.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Générez Des Revenus Supplémentaire
            </h4>
            <p className="text-secondary text-center">
              L'augmentation du nombre de clients potentiels ciblés facilite
              leur conversion en clients réels et génère ainsi davantage de
              revenus.
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/yes.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Augmentez Votre Notoriété
            </h4>
            <p className="text-secondary text-center">
              Faites en sorte que votre marque devienne celle à laquelle vos
              clients pensent en premier parmi tous vos concurrents du secteur.
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/stars.jpeg"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              Confiance De Vos Clients
            </h4>
            <p className="text-secondary text-center">
              En apparaissant en haut des résultats de recherche, vous
              établissez votre entreprise en tant qu'autorité dans votre
              secteur, inspirant ainsi confiance à vos clients.
            </p>
          </div>
        </div>
      </section>

      {/* our approach section */}
      <section className="w-full flex flex-col container px-4 my-40 gap-y-20 ">
        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          <Image
            src={"/img/seo-pc.webp"}
            alt="ad"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full rounded-2xl shadow"
          />
          <div className="w-full xl:w-6/12 ">
            <h2 className="text-3xl font-semibold text-gray-600">
              Notre approche distinctive en SEO
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-4 mb-6"></div>
            <div className="body-text">
              Notre <span className="brand">agence SEO au Québec</span> adopte
              une approche de <b>référencement naturel</b> basée sur une
              combinaison de bonnes pratiques éprouvées et d’une analyse
              approfondie des données.
              <br />
              <br />
              Et pour cause, nous utilisons notre expertise en analyse de
              données pour comprendre les comportements de recherche et cibler
              directement votre public.
              <br />
              <br />
              Nos spécialistes utilisent des outils avancés pour suivre les
              performances de votre site web et apporter les ajustements
              nécessaires afin d’améliorer continuellement votre classement dans
              les moteurs de recherche.
              <br />
              <br />
              Notre approche basée sur les données garantit que votre site web
              attire un trafic qualifié sur Google et les autres moteurs.
              <br />
              <br />
              Avec notre agence SEO, vous bénéficiez d’une{" "}
              <b>approche stratégique</b>
              et personnalisée qui vous permettra d’atteindre vos objectifs en
              matière de référencement.
            </div>
            <Button
              variant="filled"
              size="md"
              className="!bg-primary hover:!bg-opacity-90 mt-10 "
            >{`Contactez-nous`}</Button>
          </div>
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
            defaultValue={tabs1[0].label}
          >
            <Tabs.List justify="start">
              {tabs1.map((item) => (
                <Tabs.Tab value={item.label} key={item.label}>{item.label}</Tabs.Tab>
              ))}
              {tabs1.map((item) => (
                <Tabs.Panel value={item.label} key={item.label}>{item.text}</Tabs.Panel>
              ))}
            </Tabs.List>
          </Tabs>
          <Tabs
            color="orange"
            orientation="horizontal"
            classNames={{
              root: "bg-black bg-opacity-70 text-white border-white border mt-10",
              panel: "px-2 lg:p-8 py-10",
              tabLabel:
                "text-lg hover:text-primary focus-within:text-primary active:text-primary",
              tab: " hover:bg-transparent",
            }}
            defaultValue={tabs2[0].label}
          >
            <Tabs.List justify="start">
              {tabs2.map((item) => (
                <Tabs.Tab value={item.label}>{item.label}</Tabs.Tab>
              ))}
              {tabs2.map((item) => (
                <Tabs.Panel value={item.label}>{item.text}</Tabs.Panel>
              ))}
            </Tabs.List>
          </Tabs>
        </div>
      </section>

      {/* avantages */}
      <section className="w-full flex flex-col container mt-40 gap-y-20 ">
        {/* title subtitle */}

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          {/* icons list */}
          <div className="w-full lg:w-6/12 ">
            <h2 className="gray-section-title !text-primary">
              Pourquoi choisir VIA Communication pour l'optimisation du contenu
              de votre site web ?
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-6 mb-16"></div>
            <div className="body-text">
              Notre <span className="brand">agence SEO</span> basée au Québec,
              reconnaît l’importance capitale de l’optimisation du contenu dans
              l’amélioration de votre référencement.
              <br />
              <br />
              Notre équipe d’experts en référencement déploie des{" "}
              <b>stratégies d’optimisation de rédaction</b> qui s’alignent avec
              les meilleures pratiques établies par les moteurs de recherche.
              <br />
              <br />
              Pour ce faire, nous <b>collaborons avec vous</b> afin de bien
              comprendre vos besoins spécifiques, votre public cible et vos
              objectifs commerciaux.
              <br />
              <br />
              En procédant ainsi, nous sommes en mesure de sélectionner
              judicieusement les mots-clés pertinents et de les intégrer
              stratégiquement à votre site.
              <br />
              <br />
              Cependant, notre approche ne se limite pas à la simple inclusion
              de mots-clés. Nous nous efforçons également d’
              <b>
                optimiser la qualité, la structure et la pertinence de votre
                contenu.
              </b>
              <br />
              <br />
              Nous veillons à ce que celui-ci soit informatif, engageant et
              puisse répondre aux attentes de votre public.
              <br />
              <br />
              En optant pour les services d’optimisation de{" "}
              <span className="brand">VIA Communication</span>, vous
              bénéficierez d’une approche axée sur l’écoute, la compréhension du
              besoin et d’une stratégie marketing adaptée.
            </div>
          </div>
          <Image
            src={"/img/seo-avantages.webp"}
            alt="google"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full max-h-[450px] xl:max-h-full rounded-3xl shadow"
          />
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
