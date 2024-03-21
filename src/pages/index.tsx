import { Button, Divider, List, ThemeIcon } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import IconsList from "./components/homeComponents/IconsList";
import { CheckIcon } from "@heroicons/react/16/solid";

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
            Avec plus d&apos;une centaine de sites Web à notre actif, notre personnel
            a développé une{" "}
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
    </div>
  );
}
