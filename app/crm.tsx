// pages/plateforme-marketing.js
import Head from 'next/head';
import Link from 'next/link';

export default function PlateformeMarketing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>VIA CRM | Solution CRM Tout-en-Un | VIA Communication Inc.</title>
        <meta name="description" content="VIA CRM est notre solution de gestion de la relation client tout-en-un qui vous permet de gérer tous vos besoins en marketing et ventes au même endroit. VIA Communication Inc." />
        <style jsx global>{`
          :root {
            --via-blue: rgb(12, 34, 73);
            --via-orange: rgb(240, 84, 35);
          }
        `}</style>
      </Head>

      {/* Hero Section */}
      <section className="text-center py-12 md:py-20" style={{ backgroundColor: 'rgb(12, 34, 73)', color: 'white', borderRadius: '0.5rem' }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">VIA CRM</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          La solution CRM tout-en-un qui transforme votre façon de gérer vos clients et votre marketing.
        </p>
        <div>
          <Link href="/contact" className="bg-white hover:bg-gray-100 text-[rgb(12,34,73)] font-semibold py-3 px-6 rounded-lg mr-4">
            Demander une démo
          </Link>
          <Link href="#forfaits" className="bg-[rgb(240,84,35)] hover:bg-[rgb(220,70,25)] text-white border border-[rgb(240,84,35)] font-semibold py-3 px-6 rounded-lg">
            Voir les forfaits
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 rounded-xl my-12 px-6" style={{ backgroundColor: 'rgba(12, 34, 73, 0.05)' }}>
        <h2 className="text-3xl font-bold text-center mb-12 text-[rgb(12,34,73)]">Toutes les fonctionnalités du VIA CRM</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[rgb(240,84,35)]">
            <h3 className="text-xl font-semibold mb-4 text-[rgb(12,34,73)]">Gestion de la Relation Client</h3>
            <p>Centralisez toutes vos interactions client dans un système CRM puissant et facile à utiliser.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[rgb(240,84,35)]">
            <h3 className="text-xl font-semibold mb-4 text-[rgb(12,34,73)]">Automatisation Marketing</h3>
            <p>Créez et automatisez des campagnes par email, SMS, et messages vocaux pour engager vos prospects.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[rgb(240,84,35)]">
            <h3 className="text-xl font-semibold mb-4 text-[rgb(12,34,73)]">Création de Sites Web</h3>
            <p>Concevez des sites web et des entonnoirs de conversion qui génèrent des résultats, sans compétences techniques.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[rgb(240,84,35)]">
            <h3 className="text-xl font-semibold mb-4 text-[rgb(12,34,73)]">Prise de Rendez-vous</h3>
            <p>Permettez à vos clients de réserver des consultations directement dans votre calendrier, sans confusion.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[rgb(240,84,35)]">
            <h3 className="text-xl font-semibold mb-4 text-[rgb(12,34,73)]">Gestion de Réputation</h3>
            <p>Collectez et affichez des avis clients pour renforcer votre crédibilité et améliorer votre visibilité en ligne.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[rgb(240,84,35)]">
            <h3 className="text-xl font-semibold mb-4 text-[rgb(12,34,73)]">Rapports et Analyses</h3>
            <p>Suivez vos performances marketing avec des tableaux de bord détaillés et des rapports personnalisables.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 my-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-[rgb(12,34,73)]">Pourquoi choisir VIA CRM?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-[rgb(12,34,73)]">Tout en un seul endroit</h3>
            <p className="mb-6">
              Fini les jonglages entre différents outils. Notre plateforme regroupe tous vos besoins marketing et CRM dans une interface unique.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-[rgb(12,34,73)]">Support personnalisé</h3>
            <p>
              Notre équipe d'experts est toujours disponible pour vous aider à maximiser les résultats de votre stratégie client.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-[rgb(12,34,73)]">Solution évolutive</h3>
            <p className="mb-6">
              Que vous soyez une petite entreprise ou une grande organisation, notre VIA CRM s'adapte à vos besoins spécifiques.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-[rgb(12,34,73)]">Retour sur investissement prouvé</h3>
            <p>
              Nos clients constatent une amélioration significative de leurs conversions et de leur efficacité commerciale.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="forfaits" className="py-12 my-12 rounded-xl px-6" style={{ backgroundColor: 'rgba(12, 34, 73, 0.05)' }}>
        <h2 className="text-3xl font-bold text-center mb-12 text-[rgb(12,34,73)]">Nos Forfaits VIA CRM</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Forfait Essentiel */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-center text-[rgb(12,34,73)]">Essentiel</h3>
            <p className="text-center text-gray-600 mb-4">Idéal pour les petites entreprises</p>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-[rgb(12,34,73)]">49€</span>
              <span className="text-gray-600">/mois</span>
            </div>
            <ul className="mb-8 flex-grow">
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-[rgb(240,84,35)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Jusqu'à 1000 contacts</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-[rgb(240,84,35)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Gestion des contacts</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-[rgb(240,84,35)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Email Marketing de base</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-[rgb(240,84,35)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>1 utilisateur</span>
              </li>
            </ul>
            <Link href="/contact?forfait=essentiel" className="text-center bg-[rgb(240,84,35)] hover:bg-[rgb(220,70,25)] text-white font-semibold py-3 px-6 rounded-lg mt-auto">
              Choisir ce forfait
            </Link>
          </div>
          
          {/* Forfait Business */}
          <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[rgb(240,84,35)] flex flex-col relative">
            <div className="absolute top-0 right-0 bg-[rgb(240,84,35)] text-white px-4 py-1 rounded-bl-lg font-semibold">
              Populaire
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-[rgb(12,34,73)]">Business</h3>
            <p className="text-center text-gray-600 mb-4">Pour les entreprises en croissance</p>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-[rgb(12,34,73)]">99€</span>
              <span className="text-gray-600">/mois</span>
            </div>
            <ul className="mb-8 flex-grow">
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-[rgb(240,84,35)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Jusqu'à 10 000 contacts</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-[rgb(240,84,35)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Automatisation marketing complète</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-[rgb(240,84,35)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Email + SMS Marketing</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-[rgb(240,84,35)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Création de pages web</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-[rgb(240,84,35)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>5 utilisateurs</span>
              </li>
            </ul>
            <Link href="/contact?forfait=business" className="text-center bg-[rgb(240,84,35)] hover:bg-[rgb(220,70,25)] text-white font-semibold py-3 px-6 rounded-lg mt-auto">
              Choisir ce forfait
            </Link>
          </div>
          
          {/* Forfait Enterprise */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-center text-[rgb(12,34,73)]">Enterprise</h3>
            <p className="text-center text-gray-600 mb-4">Solution complète pour grandes entreprises</p>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-[rgb(12,34,73)]">249€</span>
              <span className="text-gray-600">/mois</span>
            </div>
            <ul className="mb-8 flex-grow">
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-[rgb(240,84,35)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Contacts illimités</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-[rgb(240,84,35)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Toutes les fonctionnalités Business</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-[rgb(240,84,35)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Intégrations avancées</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-[rgb(240,84,35)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Utilisateurs illimités</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-[rgb(240,84,35)] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Support premium dédié</span>
              </li>
            </ul>
            <Link href="/contact?forfait=enterprise" className="text-center bg-[rgb(240,84,35)] hover:bg-[rgb(220,70,25)] text-white font-semibold py-3 px-6 rounded-lg mt-auto">
              Choisir ce forfait
            </Link>
          </div>
        </div>
      </section> strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Création de pages web</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>5 utilisateurs</span>
              </li>
            </ul>
            <Link href="/contact?forfait=business" className="text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg mt-auto">
              Choisir ce forfait
            </Link>
          </div>
          
          {/* Forfait Enterprise */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-center">Enterprise</h3>
            <p className="text-center text-gray-600 mb-4">Solution complète pour grandes entreprises</p>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">249€</span>
              <span className="text-gray-600">/mois</span>
            </div>
            <ul className="mb-8 flex-grow">
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Contacts illimités</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Toutes les fonctionnalités Business</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Intégrations avancées</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Utilisateurs illimités</span>
              </li>
              <li className="flex items-start mb-3">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Support premium dédié</span>
              </li>
            </ul>
            <Link href="/contact?forfait=enterprise" className="text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg mt-auto">
              Choisir ce forfait
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50 rounded-xl my-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Ce que nos clients disent</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic mb-4">
              "VIA CRM nous a permis de multiplier nos leads par trois en seulement deux mois. Leur plateforme est intuitive et complète."
            </p>
            <p className="font-semibold">Marie Dubois, PDG de Design Moderne</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic mb-4">
              "L'automatisation proposée par VIA CRM a transformé notre façon de communiquer avec nos clients. Nous gagnons un temps précieux."
            </p>
            <p className="font-semibold">Thomas Martin, Directeur Marketing chez Tech Solutions</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic mb-4">
              "Le rapport qualité-prix est imbattable. Une plateforme complète avec un support client exceptionnel."
            </p>
            <p className="font-semibold">Sophie Leclerc, Propriétaire de Café Parisien</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 md:py-20">
        <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre relation client?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Contactez-nous aujourd'hui pour découvrir comment VIA CRM peut vous aider à atteindre vos objectifs.
        </p>
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg">
          Commencer maintenant
        </Link>
      </section>
    </div>
  );
}
