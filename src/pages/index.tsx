import { Button, Divider, List, ThemeIcon } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { CheckIcon } from "@heroicons/react/16/solid";

export default function Home({ dir }: any) {
  const { locales } = useRouter();
  const intl = useIntl();

  const hero_title = intl.formatMessage({ id: "page.home.hero.title" });
  const hero_subtitle = intl.formatMessage({ id: "page.home.hero.subtitle" });

  // Hero slider configuration
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      bg: "bg-hero-bg",
      title: hero_title || "Marketing digital pour PME au Québec",
      subtitle: hero_subtitle || "Votre partenaire en marketing digital pour propulser votre entreprise"
    },
    {
      bg: "bg-website-bg",
      title: "Sites web adaptés à vos besoins",
      subtitle: "Des vitrines en ligne professionnelles et performantes"
    },
    {
      bg: "bg-optimization-seo-bg",
      title: "Augmentez votre visibilité en ligne",
      subtitle: "Stratégies SEO et marketing digital sur mesure"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Testimonials data
  const testimonials = [
    {
      text: "VIA Communication a complètement transformé notre présence en ligne. Notre trafic a augmenté de 200% en seulement 3 mois!",
      author: "Marie Tremblay",
      position: "Directrice Marketing, Entreprise ABC"
    },
    {
      text: "Une équipe professionnelle et attentive à nos besoins. Le processus de création de notre site web a été fluide et le résultat est exactement ce que nous voulions.",
      author: "Jean Dupont",
      position: "Propriétaire, Commerce XYZ"
    },
    {
      text: "Grâce aux campagnes publicitaires mises en place par VIA Communication, nous avons pu augmenter significativement nos ventes en ligne.",
      author: "Sophie Leblond",
      position: "PDG, Startup 123"
    }
  ];

  // Services data
  const services = [
    {
      icon: "/img/facebook-ads.webp",
      title: "Expertise complète en création web",
      description: "Notre agence réunit des spécialistes hautement qualifiés en marketing digital, expérience utilisateur (UX) et optimisation pour les moteurs de recherche."
    },
    {
      icon: "/img/campaign.webp",
      title: "Stratégie marketing complète",
      description: "En plus de la création de sites Web sur mesure, l'agence Via Communication a la capacité de gérer l'intégralité de vos campagnes publicitaires sur diverses plateformes."
    },
    {
      icon: "/img/report.webp",
      title: "Transformez vos prospects en clients",
      description: "Nos spécialistes en développement de sites Web comprennent comment transformer vos prospects en clients acquis avec des stratégies efficaces."
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  // Client logos
  const clientLogos = [
    "/img/alzeihmer.webp",
    "/img/centraide.webp",
    "/img/napa.webp",
    "/img/eleganza.webp",
    "/img/ecole.webp",
    "/img/sunspace.webp",
    "/img/crd.webp",
    "/img/oceanick.webp",
    "/img/laplante.jpg",
    "/img/levis.jpg"
  ];

  return (
    <div className="overflow-x-hidden font-sans">
      <Head>
        <title>VIA Communication - Agence Web & Marketing Digital</title>
        <meta name="description" content="Agence de marketing digital et conception web pour PME au Québec. Stratégies complètes pour accroître votre visibilité en ligne." />
      </Head>

      {/* Hero Section with Slider */}
      <section className="relative h-screen">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            } ${slide.bg} bg-cover bg-center`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {slides[currentSlide].title}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl md:text-3xl font-light mb-12">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                component={Link}
                href="/contact"
                size="lg"
                className="!bg-primary hover:!bg-primary/90 !text-white !text-lg !font-medium !px-8 !py-3 !rounded-lg !transition-all !duration-300"
              >
                Demande d'informations
              </Button>
              <Button
                component={Link}
                href="/services"
                variant="outline"
                size="lg"
                className="!border-white !text-white hover:!bg-white/10 !text-lg !font-medium !px-8 !py-3 !rounded-lg !transition-all !duration-300"
              >
                Nos services
              </Button>
            </div>
          </motion.div>

          {/* Slider navigation */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-primary w-10" : "bg-white/60"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "100+", label: "Sites web livrés", icon: "🌐" },
              { number: "250%", label: "Augmentation du trafic moyen", icon: "📈" },
              { number: "15+", label: "Années d'expérience", icon: "⭐" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 text-center border-t-4 border-primary shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Feature Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-16 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Détendez-vous, on s'occupe de votre marketing!
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Notre agence Web vous offre des stratégies complètes de marketing
                  digital avec des résultats mesurables.
                </p>
                <div className="space-y-4">
                  {[
                    "Sites web personnalisés et optimisés",
                    "Stratégies SEO efficaces",
                    "Campagnes publicitaires ciblées",
                    "Résultats concrets et mesurables"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-white/20 p-1 rounded-full">
                        <CheckIcon className="w-5 h-5 fill-white" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button
                    component={Link}
                    href="/services"
                    variant="outline"
                    size="lg"
                    className="!border-white !text-white hover:!bg-white/10 !font-medium !transition-all !duration-300"
                  >
                    Nos services
                  </Button>
                  <Button
                    variant="filled"
                    component={Link}
                    href="/contact"
                    size="lg"
                    className="!bg-white !text-primary hover:!bg-white/90 !font-medium !transition-all !duration-300"
                  >
                    Contactez-nous
                  </Button>
                </div>
              </div>
              <div className="relative h-96 lg:h-auto">
                <Image
                  src="/img/home-second-section.webp"
                  alt="Marketing digital"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/30"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Découvrez <span className="text-primary">VIA Communication</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-700 mb-6">
                Découvrez notre agence Web de référence située au Québec, spécialiste dans le
                développement de sites Web personnalisés et du
                <b> marketing numérique pour les PME.</b>
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Vous aspirez à vous démarquer dans la province du Québec ? Vous
                cherchez à collaborer avec une agence qui comprend vos enjeux en
                marketing numérique et qui met l'humain au centre de ses
                préoccupations ?
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Alors, vous avez trouvé votre partenaire idéal.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Avec plus d'une centaine de sites Web à notre actif, notre
                personnel a développé une
                <b className="text-primary">
                  {" "}expertise profonde pour répondre aux besoins et aux budgets des
                  petites et moyennes entreprises.
                </b>
              </p>
              <Button
                component={Link}
                href="/contact"
                variant="filled"
                size="lg"
                className="!bg-primary hover:!bg-primary/90 !text-white !text-lg !font-medium !transition-all !duration-300"
              >
                Contactez-nous
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 -z-10 bg-primary/10 rounded-tr-3xl rounded-bl-3xl"></div>
                <Image
                  src="/img/robot.jpg"
                  alt="Innovation marketing"
                  width={600}
                  height={500}
                  className="rounded-tr-3xl rounded-bl-3xl shadow-md w-full"
                />
                <div className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-lg p-6 max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292V15a3 3 0 01-3 3H6v1.5h6.5V21" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 21v-4.5h4.5V15a3 3 0 00-3-3h-1.5" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9a3 3 0 110-6 3 3 0 010 6z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500">Une approche centrée sur</p>
                      <h3 className="text-xl font-bold text-gray-800">L'humain d'abord</h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 uppercase mb-4">pourquoi via communication ?</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Générez plus de clients pour votre PME avec notre expertise en marketing digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Stratégie personnalisée",
                description: "Des solutions adaptées à vos besoins spécifiques pour maximiser votre ROI."
              },
              {
                icon: "📊",
                title: "Résultats mesurables",
                description: "Suivez vos performances en temps réel avec nos tableaux de bord détaillés."
              },
              {
                icon: "💼",
                title: "Dans votre budget",
                description: "Des forfaits flexibles pour s'adapter à la taille et aux besoins de votre entreprise."
              },
              {
                icon: "🔍",
                title: "SEO optimisé",
                description: "Améliorez votre visibilité sur les moteurs de recherche et attirez plus de clients."
              },
              {
                icon: "🛠️",
                title: "Expertise technique",
                description: "Des sites web performants, sécurisés et adaptés à tous les appareils."
              },
              {
                icon: "🤝",
                title: "Support continu",
                description: "Une équipe à votre écoute pour vous accompagner dans votre croissance."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/30 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 uppercase mb-4">LES PLUS DE NOTRE AGENCE WEB</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Votre site internet est bien plus qu'une simple carte
              professionnelle en ligne. C'est un outil marketing essentiel conçu 
              pour générer des revenus pour votre entreprise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
              >
                <div className="h-2 bg-primary"></div>
                <div className="p-8">
                  <div className="rounded-xl p-4 bg-gray-50 inline-block mb-6 group-hover:bg-primary/10 transition-all duration-300">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href="/services" className="text-primary font-semibold group-hover:underline flex items-center transition-all duration-300">
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* First card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl overflow-hidden shadow-lg text-white"
            >
              <div className="p-10">
                <h3 className="text-3xl font-bold mb-6">
                  NOTRE AGENCE WEB VOUS AIDE à ATTEINDRE VOS{" "}
                  <span className="text-primary">OBJECTIFS</span>
                </h3>
                <div className="space-y-6">
                  <p className="text-white/90 text-lg">
                    <span className="text-primary font-bold">O</span> VIA Communication est une
                    agence de marketing digital offrant des stratégies complètes
                    couvrant toutes les sphères du Web et du monde des médias sociaux.
                    Conception Web, SEO, publicités Facebook, Instagram, LinkedIn et
                    Google AdWords sont au cœur de nos stratégies.
                  </p>
                  <p className="text-white/90 text-lg">
                    <span className="text-primary font-bold">O</span> Notre équipe chevronnée vous
                    accompagnera tout au long de l'implantation de la stratégie
                    marketing et vous fournira tous les outils afin d'évaluer le
                    rendement.
                  </p>
                </div>
                <Button
                  component={Link}
                  href="/contact"
                  variant="filled"
                  size="lg"
                  className="!bg-primary hover:!bg-opacity-90 mt-8 !w-full md:!w-auto !text-lg !transition-all !duration-300"
                >
                  Contactez-nous
                </Button>
              </div>
            </motion.div>

            {/* Second card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl overflow-hidden shadow-lg text-white"
            >
              <div className="p-10">
                <h3 className="text-3xl font-bold mb-6">
                  LE MARKETING DIGITAL, NOTRE PLUS{" "}
                  <span className="text-white">GRANDE PASSION!</span>
                </h3>
                <h4 className="text-2xl font-bold mt-2 mb-6">
                  5 raisons de travailler avec nous!
                </h4>
                <div className="space-y-4">
                  {[
                    "Votre satisfaction est garantie, car aucun contrat à long terme.",
                    "Obtenez des résultats mesurables rapidement.",
                    "Augmentez vos revenus et vos profits.",
                    "Nous travaillons dans les limites de votre budget.",
                    "Notre agence est certifiée partenaire Google grâce à la qualité de notre travail."
                  ].map((text, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex items-start gap-4 p-4 bg-white/10 rounded-lg"
                    >
                      <div className="p-2 bg-white/20 rounded-full flex-shrink-0 mt-1">
                        <CheckIcon className="w-5 h-5 fill-white" />
                      </div>
                      <p className="text-lg">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section with Image Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Notre ADN et nos valeurs</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="space-y-12">
            {/* Main value card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image 
                src="/img/savoir.webp" 
                alt="Savoir-être" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-center p-12">
                <div className="max-w-3xl">
                  <h3 className="text-3xl font-bold text-white mb-4">Savoir-être</h3>
                  <div className="w-16 h-1 bg-primary mb-6"></div>
                  <p className="text-lg text-white/90 mb-8">
                    Lorsqu'on parle de conception Web, il y a des défis techniques,
                    des défis créatifs et des défis humains, mais il n'y a jamais
                    aucun défi trop grand pour Via Communication. Et, c'est avec{" "}
                    <span className="text-primary font-bold">
                      l'humain au centre de nos priorités
                    </span>{" "}
                    que l'on fait avancer votre projet.
                  </p>
                  <Button
                    component={Link}
                    href="/apropos"
                    variant="outline"
                    size="lg"
                    className="!border-white !text-white hover:!bg-white/10 !transition-all !duration-300"
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Value cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  image: "/img/approche.webp",
                  title: "Approche 360° du Web",
                  description: "Dans notre approche multidisciplinaire, nous unissons les talents de designers Web, de spécialistes UX, d'experts en marketing digital et en e-commerce."
                },
                {
                  image: "/img/faire.webp",
                  title: "Savoir-Faire",
                  description: "Chaque projet est une opportunité de faire valoir notre savoir-faire, abordé avec passion et respect pour développer une plateforme unique et fidèle à votre image."
                },
                {
                  image: "/img/website.webp",
                  title: "Conception de sites web créatifs",
                  description: "De nombreux sites web se ressemblent. Cependant, le vôtre sera différent ! Nous créons des expériences web uniques qui respectent les standards tout en exprimant notre créativité."
                },
                {
                  image: "/img/optimization-seo.webp",
                  title: "SEO & Référencement",
                  description: "Un site qui passe inaperçu est inefficace. Nous vous proposons des services d'amélioration pour le référencement naturel (SEO) et la publicité en ligne (SEA)."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative h-[300px] rounded-xl overflow-hidden group"
                >
                  <Image 
                    src={value.image} 
                    alt={value.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                    <div className="w-12 h-1 bg-primary mb-4"></div>
                    <p className="text-white/90 mb-4">{value.description}</p>
                    <Link href="/services" className="text-primary font-semibold hover:underline inline-flex items-center">
                      En savoir plus
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-secondary to-secondary/90 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ce que nos clients disent</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
              >
                <svg className="h-10 w-10 text-primary mb-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"></path>
                </svg>
                <p className="text-lg mb-6">{testimonial.text}</p>
                <div className="flex flex-col">
                  <span className="font-bold text-lg">{testimonial.author}</span>
                  <span className="text-white/70">{testimonial.position}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Client Logos Section */}
       <section className="py-24 bg-white">
       <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">ILS NOUS ONT FAIT CONFIANCE</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-800 text-xl max-w-3xl mx-auto text-center mb-16"
          >
            Votre site internet est bien plus qu'une simple carte professionnelle
            en ligne. C'est un outil marketing essentiel conçu pour générer des
            revenus pour votre entreprise. C'est pourquoi notre approche va
            au-delà de la simple conception Web.
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-32 w-full flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={120}
                  height={120}
                  className="object-contain max-h-20"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section with full-width background */}
      <section className="w-full bg-primary py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Appelez-nous ou envoyez un courriel
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Nous sommes à l'écoute pour répondre à vos questions et vous
              proposer la meilleure solution
            </p>
            <Button
              component={Link}
              href="/contact"
              variant="filled"
              size="xl"
              className="!bg-white hover:!bg-white/90 !text-primary !font-semibold !shadow-md hover:!shadow-lg !transition-all !duration-300 !px-10"
            >
              Contactez-nous
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
