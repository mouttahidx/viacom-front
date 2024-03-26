import { Button, Divider, List, ThemeIcon } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import IconsList from "./components/homeComponents/IconsList";
import { CheckIcon } from "@heroicons/react/16/solid";
import Testimonials from "./components/homeComponents/Testimonials";

/* tslint:disable:no-unused-variable */
export default function Home({ dir }: any) {
  const { locales } = useRouter();
  const intl = useIntl();

  const hero_title = intl.formatMessage({ id: "page.home.hero.title" });
  const hero_subtitle = intl.formatMessage({ id: "page.home.hero.subtitle" });

  return (
    <div>
      {/* // hero section */}
      <section className="w-full py-28 text-white h-[780px] lg:h-[781px] bg-hero-bg bg-cover bg-no-repeat bg-center relative">
        <div className="absolute bg-dark-secondary left-0 bottom-0 right-0 top-0 bg-opacity-30 z-0"></div>
        <div className="z-10 absolute top-[16%] lg:top-[35%] max-w-6xl mx-auto  left-0 right-0 px-3">
          <h1 className="text-4xl w-full lg:w-1/2">{hero_title}</h1>
          <Divider size="lg" className="w-[50px] my-10" />
          <h2 className="text-3xl w-full lg:w-1/2">{hero_subtitle}</h2>
          <div className="mt-10 flex flex-wrap gap-y-6">
            <Button
              variant="filled"
              className="!bg-primary hover:!bg-opacity-90 mr-4 "
            >{`Demande d'informations`}</Button>
            <Button variant="outline" color="white" className="">
              Nos services
            </Button>
          </div>
        </div>
      </section>

      {/* // 1st section */}
      <section className="w-full mx-auto max-w-6xl p-4 bottom-arrow relative">
        <div className=" lg:-mt-14  bg-primary px-8 lg:px-16 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center text-center lg:text-left">
          {/* first div */}
          <div className="lg:w-8/12 ">
            <h2 className="second-title text-white ">
              Détendez-vous, on s&apos;occupe de votre marketing!
            </h2>
            <p className="mt-4 body-text !text-white">
              Notre agence Web vous offre des stratégies complètes de marketing
              digital avec des résultats mesurables.
            </p>
          </div>
          {/* cta */}
          <div className="mt-10 flex flex-wrap gap-y-6 gap-x-4 w-full justify-center lg:w-4/12">
            <Button variant="outline" color="white" className="">
              Nos services
            </Button>
            <Button
              variant="filled"
              className="!bg-white !text-black hover:!bg-opacity-90 "
            >{`Contactez-nous`}</Button>
          </div>
        </div>
      </section>

      {/* 2nd */}
      <section className="w-full flex flex-wrap lg:flex-nowrap mt-40 gap-y-24">
        {/* first div */}
        <div className="w-full px-4 xl:pl-24 lg:pr-10 lg:w-6/12">
          <p className="body-text">
            Découvrez{" "}
            <span className="text-primary font-bold">VIA Communication</span>,
            notre agence Web de référence située au Québec, spécialiste dans le
            développement de sites Web personnalisés et du{" "}
            <b>marketing numérique pour les PME.</b>
            <br />
            <br />
            Vous aspirez à vous démarquer dans la province du Québec ? Vous
            cherchez à collaborer avec une agence qui comprend vos enjeux en
            marketing numérique et qui met l&apos;humain au centre de ses
            préoccupations ? <br />
            <br />
            Alors, vous avez trouvé votre partenaire idéal. <br />
            <br />
            Avec plus d&apos;une centaine de sites Web à notre actif, notre
            personnel a développé une{" "}
            <b>
              expertise profonde pour répondre aux besoins et aux budgets des
              petites et moyennes entreprises.
            </b>
          </p>
          <Button
            variant="filled"
            className="!bg-primary hover:!bg-opacity-90 mt-10 !w-full md:!w-6/12"
          >{`Contactez-nous`}</Button>
        </div>
        <Image
          src={"/img/home-second-section.webp"}
          alt="robot finger"
          width={400}
          height={600}
          className="w-full lg:w-6/12 object-contain"
        />
      </section>

      {/* 3rd */}
      <section className="w-full flex flex-col container my-40 gap-y-20">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="section-title">pourquoi via communication ?</h2>
          <p className="body-text">Générez plus de clients pour votre PME</p>
        </div>

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16">
          <Image
            src={"/img/robot.jpg"}
            alt="robot finger"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-contain max-h-[570px]"
          />
          {/* icons list */}
          <div className="w-full xl:w-5/12 ">
            <IconsList />
          </div>
        </div>
      </section>

      {/* 4th */}
      <section className="my-40 grid grid-cols-1 lg:grid-cols-2">
        {/* first square */}
        <div className="w-full px-4 py-16 lg:py-20 lg:px-14 bg-secondary flex flex-col gap-y-8">
          <h3 className="second-title !text-3xl text-white">
            NOTRE AGENCE WEB VOUS AIDE à ATTEINDRE VOS{" "}
            <span className="text-primary">OBJECTIFS</span>
          </h3>
          <p className="body-text !text-white">
            <span className="text-primary">O</span> VIA Communication est une
            agence de marketing digital offrant des stratégies complètes
            couvrant toutes les sphères du Web et du monde des médias sociaux.
            Conception Web, SEO, publicités Facebook, Instagram, LinkedIn et
            Google AdWords sont au cœur de nos stratégies.
          </p>
          <p className="body-text !text-white">
            <span className="text-primary">O</span> Notre équipe chevronnée vous
            accompagnera tout au long de l’implantation de la stratégie
            marketing et vous fournira tous les outils afin d’évaluer le
            rendement.
          </p>
          <Button
            variant="filled"
            className="!bg-primary hover:!bg-opacity-90 mt-10 !w-full md:!w-6/12 mx-auto"
          >{`Contactez-nous`}</Button>
        </div>

        {/* second square */}
        <div className="w-full px-4 py-16 lg:py-20 lg:px-14 bg-primary flex flex-col gap-y-8">
          <h3 className="second-title !text-3xl !text-white">
            LE MARKETING DIGITAL, NOTRE PLUS{" "}
            <span className="text-secondary">GRANDE PASSION!</span>
          </h3>
          <h4 className="second-title !text-white">
            5 raisons de travailler avec nous!
          </h4>
          <div className="grid grid-cols-1 gap-y-6">
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">
                Votre satisfaction est garantie, car aucun contrat à long terme.
              </span>
            </div>
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">
                Obtenez des résultats mesurables rapidement.{" "}
              </span>
            </div>
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">
                Augmentez vos revenus et vos profits.
              </span>
            </div>
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">
                Nous travaillons dans les limites de votre budget.
              </span>
            </div>
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">
                Notre agence est certifiée partenaire Google grâce à la qualité
                de notre travail.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5th */}
      <section className="w-full flex flex-col container my-40 gap-y-20">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="section-title mb-4">LES PLUS DE NOTRE AGENCE WEB</h2>
          <p className="body-text">
            Votre site internet est bien plus qu'une simple carte
            professionnelle en ligne.
          </p>
          <p className="body-text">
            C'est un outil marketing essentiel conçu pour générer des revenus
            pour votre entreprise.
          </p>
          <p className="body-text">
            C'est pourquoi notre approche va au-delà de la simple conception
            Web.
          </p>
        </div>

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16">
          <div className="w-full xl:w-6/12 ">
            <div className="flex gap-x-4 items-start ">
              <Image
                src={"/img/facebook-ads.webp"}
                alt=""
                width={100}
                height={100}
                className="object-contain w-[100px]"
              />
              <div className="flex flex-col gap-y-3">
                <h4 className="list-title font-medium">
                  Expertise complète dans tous les aspects de la création : site
                  web, design, SEO
                </h4>
                <p className="body-text">
                  Notre agence réunit des spécialistes hautement qualifiés en
                  marketing digital, expérience utilisateur (UX) et optimisation
                  pour les moteurs de recherche.
                  <br />
                  <br />
                  Nous adoptons les meilleures pratiques pour créer des sites
                  web. Ils sont optimisés, performants et adhèrent aux standards
                  les plus élevés du domaine.
                  <br />
                  <br />
                  Nous sommes là pour comprendre vos objectifs commerciaux et
                  vous proposer des solutions stratégiques adaptées à vos
                  besoins spécifiques.
                  <br />
                  <br />
                  De la phase de production à la mise en ligne de votre site,
                  notre méthode de travail rigoureuse garantit que votre site
                  répondra non seulement à vos attentes, mais aussi à celles de
                  vos clients.
                </p>
              </div>
            </div>
          </div>
          {/* icons list */}
          <div className="w-full xl:w-6/12 ">
            <div className="flex gap-x-4 items-start ">
              <Image
                src={"/img/campaign.webp"}
                alt=""
                width={100}
                height={100}
                className="object-contain w-[100px]"
              />
              <div className="flex flex-col gap-y-3">
                <h4 className="list-title font-medium">
                  Une stratégie marketing complète
                </h4>
                <p className="body-text">
                  En plus de la création de sites Web sur mesure,{" "}
                  <span className="text-primary font-medium">
                    l&apos;agence Via Communication
                  </span>{" "}
                  a la capacité de{" "}
                  <b>gérer l'intégralité de vos campagnes publicitaires</b> sur
                  les plateformes telles que Facebook, Instagram, Google Ads,
                  YouTube, et bien d'autres.
                  <br />
                  <br />
                  Nous créons une plateforme Web parfaitement optimisée pour
                  recevoir ces campagnes publicitaires, ce qui vous permet
                  d'atteindre efficacement votre public cible et de générer des
                  résultats tangibles.
                  <br />
                  <br />
                  Aussi, nous développons des stratégies de marketing numérique
                  ciblées pour amplifier la présence de votre entreprise à
                  travers tout le Québec.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 items-start max-w-3xl mx-auto ">
          <Image
            src={"/img/report.webp"}
            alt=""
            width={100}
            height={100}
            className="object-contain w-[100px]"
          />
          <div className="flex flex-col gap-y-3">
            <h4 className="list-title font-medium">
              Transformez vos prospects en clients
            </h4>
            <p className="body-text">
              Nos spécialistes en développement de sites Web comprennent comment
              transformer vos prospects en clients acquis.
              <br />
              <br />
              En collaborant avec nous, vous bénéficiez d'un site Web qui non
              seulement reflète l'image de votre entreprise, mais qui se
              positionne également comme un <b>outil marketing puissant </b>pour
              convertir vos prospects en clients.
            </p>
          </div>
        </div>
      </section>

      {/* 6th */}
      <section className="w-full flex flex-col container max-w-6xl my-40 ">
        <h2 className="second-title text-center ">Notre ADN et nos valeurs</h2>
        <div className="w-[50px] bg-primary h-1 mx-auto mt-1 mb-16"></div>

        {/* 1st text */}
        <div className="bg-savoir-bg bg-cover bg-no-repeat bg-center">
          <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h4 className="second-title">Savoir-être</h4>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              Lorsqu’on parle de conception Web, il y a des défis techniques,
              des défis créatifs et des défis humains, mais il n’y a jamais
              aucun défi trop grand pour Via Communication.
              <br />
              <br />
              Et, c’est avec{" "}
              <span className="text-primary">
                l&apos;humain au centre de nos priorités{" "}
              </span>
              que l’on fait avancer votre projet. C’est pourquoi nous prenons
              toujours le temps nécessaire afin de nous assurer que vous
              compreniez parfaitement les différentes phases de votre projet.
              <br />
              <br />
              Participer à la production de votre site Web et probablement votre
              stratégie de marketing numérique, c’est avoir l’incroyable
              opportunité de faire partie de votre équipe.
              <br />
              <br />
              Vous choisissez de mettre en nous votre confiance, alors nous vous
              offrons un accompagnement professionnel et un dévouement total
              envers votre projet Web. Avec nous,{" "}
              <span className="text-primary">vous n’êtes pas un numéro</span>.
              <br />
              <br />
              Parce que notre conception Web n’est pas seulement techno,
              adaptative et créative, elle est humaine avant tout.
            </p>
          </div>
        </div>

        {/* 2 texts */}
        <div className="grid xl:grid-cols-2 mt-8 gap-x-8 gap-y-8">
          {/* 1st div */}
          <div className="bg-approche-bg bg-cover bg-no-repeat bg-center">
            <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
              <h4 className="second-title">Approche 360 du Web</h4>
              <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

              <p className="body-text !text-white">
                Votre site Web n'est qu'une des nombreuses facettes de la
                présence de votre PME dans le monde digital. Chez VIA
                Communication, nous avons à notre disposition des{" "}
                <span className="text-primary">professionnels qualifiés </span>
                pour faire rayonner votre entreprise et votre projet.
                <br />
                <br />
                Dans notre approche multidisciplinaire du développement de sites
                Web, nous unissons les talents de designers Web, de spécialistes
                en expérience utilisateur (UX), d'experts en marketing digital
                et en e-commerce.
                <br />
                <br />
                Chacun joue un rôle essentiel dans l'élaboration de votre
                plateforme, car la mise en place de votre site Web n'est que le
                début.
                <br />
                <br />
                Notre entreprise s'efforce de livrer un site web qui respecte
                les normes les plus strictes, prêt à accueillir et à{" "}
                <span className="text-primary">
                  convertir vos prospects en clients fidèles.
                </span>
              </p>
            </div>
          </div>

          {/* 2nd div */}
          <div className="bg-faire-bg bg-cover bg-no-repeat bg-center">
            <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
              <h4 className="second-title">Savoir-Faire</h4>
              <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

              <p className="body-text !text-white">
                C’est un énorme privilège qu’est celui d’obtenir votre confiance
                pour la conception et la gestion de votre site Web. Que ce soit
                un site vitrine ou un site e-commerce, il joue un rôle important
                dans votre stratégie de marketing digital.
                <br />
                <br />
                C’est pourquoi notre agence voit votre projet comme une
                opportunité unique de faire valoir leur savoir-faire. Chaque
                projet Web est abordé avec{" "}
                <span className="text-primary">
                  la plus grande passion et le plus grand respect qui soit
                </span>
                .
                <br />
                <br />
                Notre équipe va bien au-delà de la simple prestation de services
                de production de sites Web. Nous vous accompagnons tout au long
                du projet, veillant à ce qu'il dépasse vos attentes.
                <br />
                <br />
                Conscients de l'unicité de votre entreprise, nous sommes
                déterminés à développer une
                <span className="text-primary">
                  {" "}
                  plateforme à la fois unique et fidèle à votre image
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        {/* 5th text */}
        <div className="bg-website-bg bg-cover bg-no-repeat bg-center mt-8">
          <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h4 className="second-title">Conception de sites web créatifs</h4>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              De nombreux sites web se ressemblent. Cependant, le vôtre sera
              différent ! Pour ce faire, notre équipe respecte les standards du
              web. Nous répondons aux exigences des moteurs de recherche et des
              utilisateurs. Et malgré cet environnement contrôlé, notre
              créativité s'exprime pleinement.
              <br />
              <br />
              Nous aimons décrire notre développement Web comme étant l’art de
              créer le chaos dans l’harmonie, tout en respectant à la fois le
              chaos et l’harmonie.
              <br />
              <br />
              Que se soit pour la conception d'un site Web e-commerce ou d’un
              site Web vitrine,{" "}
              <span className="text-primary">
                sortir des sentiers battus n’est jamais un problème,
              </span>{" "}
              bien au contraire.
            </p>
          </div>
        </div>

        {/* 6th text */}
        <div className="bg-optimization-seo-bg bg-cover bg-no-repeat bg-center mt-8">
          <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h4 className="second-title">
              Optimisation pour les moteurs de recherche - Référencement naturel
              et payant.
            </h4>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              La conception de votre site ne représente qu'une facette du
              processus. L'accessibilité de celui-ci est également essentielle.
              <br />
              <br />
              Un site web qui passe inaperçu est inefficace. Pour remédier à
              cela, nous mettons à votre disposition nos services d'amélioration
              de contenu, tant pour le{" "}
              <span className="text-primary">
                référencement naturel (SEO)
              </span>{" "}
              que pour{" "}
              <span className="text-primary">la publicité en ligne (SEA) </span>
              . Investir dans le référencement est la solution idéale pour
              assurer une présence durable dans le temps.
              <br />
              <br />
              Notre but n'est pas seulement de créer votre site. Nous voulons
              qu'il{" "}
              <span className="text-primary">
                se démarque et attire de nombreux visiteurs et clients
                potentiels
              </span>{" "}
              grâce à un contenu attrayant.
              <br />
              <br />
              Grâce au SEO, nous rendons votre site visible dans les résultats
              des moteurs de recherche. Par ailleurs, nos experts SEA déploient
              des publicités ciblées. L'objectif ? Augmenter votre visibilité en
              ligne et attirer un trafic de qualité.
            </p>
          </div>
        </div>
      </section>

      {/* 7th section */}
      <section className="w-full bg-secondary text-white text-center px-3 py-20 flex flex-col mt-40 ">
        <h2 className="text-white text-3xl">
          L’Agence web du Québec VIA Communication
        </h2>
        <p className="body-text !text-white mt-12 max-w-6xl mx-auto">
          Chez nous, nous nous dédions à la création et à la gestion de sites
          Web pour les entreprises du Québec. Construits de A à Z, nos sites Web
          offrent plus de rapidité, de flexibilité, de sécurité et une
          <span className="text-primary"> meilleure visibilité en ligne</span>.
          <br />
          <br />
          En outre, nous exploitons des technologies avancées comme NextJs pour
          développer des sites qui sont rapides, fiables et conformes aux
          critères de vitesse des moteurs de recherche.
          <br />
          <br />
          Nous élaborons des sites Web adaptatifs sur mesure, optimisés pour les
          appareils mobiles et les tablettes, que vous pouvez facilement
          personnaliser et gérer en toute autonomie.
        </p>
      </section>

      {/* testimonials */}
      <section className="w-full bg-secondary text-white text-center pb-10 flex flex-col mb-10 ">
        <Testimonials />
        <h4 className="text-white uppercase text-2xl font-bold">
          ILS NOUS ONT FAIT CONFIANCE
        </h4>
      </section>

      {/* 9th section */}
      <section className="w-full bg-white text-white text-center pb-10 flex flex-col mb-20 px-4 max-w-6xl mx-auto ">
        <p className="text-black text-lg">
          Votre site internet est bien plus qu'une simple carte professionnelle
          en ligne. C'est un outil marketing essentiel conçu pour générer des
          revenus pour votre entreprise. C'est pourquoi notre approche va
          au-delà de la simple conception Web.
        </p>
        <div className="grid mt-16 w-full justify-items-center gap-4 gap-y-16 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <Image
            width={100}
            height={100}
            className="object-contain"
            src={"/img/campaign.webp"}
            alt="logo"
          />
          <Image
            width={100}
            height={100}
            className="object-contain"
            src={"/img/campaign.webp"}
            alt="logo"
          />
          <Image
            width={100}
            height={100}
            className="object-contain"
            src={"/img/campaign.webp"}
            alt="logo"
          />
          <Image
            width={100}
            height={100}
            className="object-contain"
            src={"/img/campaign.webp"}
            alt="logo"
          />
          <Image
            width={100}
            height={100}
            className="object-contain"
            src={"/img/campaign.webp"}
            alt="logo"
          />
          <Image
            width={100}
            height={100}
            className="object-contain"
            src={"/img/campaign.webp"}
            alt="logo"
          />
          <Image
            width={100}
            height={100}
            className="object-contain"
            src={"/img/campaign.webp"}
            alt="logo"
          />
          <Image
            width={100}
            height={100}
            className="object-contain"
            src={"/img/campaign.webp"}
            alt="logo"
          />
          <Image
            width={100}
            height={100}
            className="object-contain"
            src={"/img/campaign.webp"}
            alt="logo"
          />
          <Image
            width={100}
            height={100}
            className="object-contain"
            src={"/img/campaign.webp"}
            alt="logo"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="w-full mx-auto max-w-7xl p-4 ">
        <div className=" bg-white px-8 lg:px-12 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
          {/* first div */}
          <div className="lg:w-9/12 ">
            <h2 className="second-title text-primary font-bold">
              Appelez-nous ou envoyez un courriel
            </h2>
            <p className="mt-4 body-text !text-black">
              Nous sommes à l’écoute pour répondre à vos questions et vous
              proposer la meilleure solution
            </p>
          </div>
          {/* cta */}
          <div className="mt-10 lg:mt-0 flex flex-wrap gap-y-6 gap-x-4 w-full justify-center lg:w-3/12">
            <Button variant="outline" color="#EE5422" className="!block !w-full" size="md">
              Contactez-nous{" "}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
