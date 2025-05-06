
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations();
 
  return {
    title: t('via_crm_title'),
    description: `${t("via_crm_title")} - ${t("meta_description")}`
  };
}

export default function ViaCrm({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations();

  const faqs = [
    {
      value: t("crm_faq_q1_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("crm_faq_q1_text"),
            }}
          />
        </div>
      ),
    },
    {
      value: t("crm_faq_q2_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("crm_faq_q2_text"),
            }}
          />
        </div>
      ),
    },
    {
      value: t("crm_faq_q3_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("crm_faq_q3_text"),
            }}
          />
        </div>
      ),
    },
    {
      value: t("crm_faq_q4_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("crm_faq_q4_text"),
            }}
          />
        </div>
      ),
    },
    {
      value: t("crm_faq_q5_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("crm_faq_q5_text"),
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* hero - enhanced with overlay gradient (removed button) */}
      <div className="bg-facebook-hero bg-center bg-no-repeat bg-cover">
        <div className="bg-gradient-to-r from-secondary/80 to-secondary/70 h-full pt-24 pb-24 lg:py-44 flex flex-col items-center justify-center">
          <h1 className="capitalize text-center text-white text-3xl lg:text-5xl mt-10 max-w-4xl font-bold">
            <span
              dangerouslySetInnerHTML={{
                __html: t.raw("crm_hero_title"),
              }}
            />
          </h1>
        </div>
      </div>

      {/* intro section - improved layout */}
      <section className="w-full flex flex-col container my-20 md:my-32 px-4">
        <div className="text-center flex flex-col items-center mb-10">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            {t("via_crm_title")}
          </h2>
          <div className="w-[50px] bg-primary h-1 mt-3"></div>
        </div>

        {/* inner section */}
        <div className="w-full flex flex-col-reverse lg:flex-row gap-y-12 gap-x-16 items-center">
          {/* text content */}
          <div className="w-full lg:w-6/12">
            <div className="body-text text-lg">
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("crm_intro_text"),
                }}
              />
            </div>

            <ButtonClient
              href={"/contact"}
              variant="filled"
              size="md"
              classes="!bg-primary hover:!bg-opacity-90 mt-10"
              text={t("btn_contact")}
            />
          </div>
          <div className="relative w-full lg:w-6/12 rounded-3xl shadow-lg overflow-hidden group">
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="/api/placeholder/800/600"
              alt="CRM Platform Overview"
              className="aspect-video w-full object-cover h-full rounded-3xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* features section - improved with icons */}
      <section className="w-full bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col items-center mb-12">
            <h2 className="text-3xl capitalize font-semibold text-gray-600">
              {t("crm_features_title")}
            </h2>
            <div className="w-[50px] bg-primary h-1 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary">
                  {t("crm_feature_1_title")}
                </h3>
              </div>
              <p className="text-gray-600">{t("crm_feature_1_text")}</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary">
                  {t("crm_feature_2_title")}
                </h3>
              </div>
              <p className="text-gray-600">{t("crm_feature_2_text")}</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary">
                  {t("crm_feature_3_title")}
                </h3>
              </div>
              <p className="text-gray-600">{t("crm_feature_3_text")}</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary">
                  {t("crm_feature_4_title")}
                </h3>
              </div>
              <p className="text-gray-600">{t("crm_feature_4_text")}</p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary">
                  {t("crm_feature_5_title")}
                </h3>
              </div>
              <p className="text-gray-600">{t("crm_feature_5_text")}</p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary">
                  {t("crm_feature_6_title")}
                </h3>
              </div>
              <p className="text-gray-600">{t("crm_feature_6_text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* benefits section - improved with image hover effect */}
      <section className="w-full flex flex-col container px-4 my-20 md:my-32">
        <div className="w-full flex flex-col-reverse lg:flex-row gap-y-12 gap-x-16 items-center">
          <div className="relative w-full lg:w-6/12 rounded-2xl shadow-lg overflow-hidden group">
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/80 px-6 py-4 rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary font-semibold text-lg">{t("crm_benefits_title")}</p>
              </div>
            </div>
            <img
              src="/api/placeholder/800/600"
              alt="CRM Benefits"
              className="w-full object-cover h-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12">
            <h2 className="text-3xl font-semibold text-gray-600">
              {t("crm_benefits_title")}
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-4 mb-6"></div>
            <div className="body-text text-lg">
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("crm_benefits_text"),
                }}
              />
            </div>

            <ButtonClient
              href={"/contact"}
              variant="filled"
              size="md"
              classes="!bg-primary hover:!bg-opacity-90 mt-10"
              text={t("btn_contact")}
            />
          </div>
        </div>
      </section>

      {/* pricing section - improved cards with images, prices removed */}
      <section id="forfaits" className="w-full bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col items-center mb-12">
            <h2 className="text-3xl capitalize font-semibold text-gray-600">
              {t("crm_pricing_title")}
            </h2>
            <div className="w-[50px] bg-primary h-1 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Forfait Essentiel */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img
                  src="/api/placeholder/600/400"
                  alt="Essential Plan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-secondary">
                {t("crm_plan_1_title")}
              </h3>
              <p className="text-center text-gray-600 mb-4">
                {t("crm_plan_1_subtitle")}
              </p>
              <ul className="mb-8 flex-grow">
                {Array.from({ length: 4 }).map((_, index) => (
                  <li key={index} className="flex items-start mb-3">
                    <svg 
                      className="h-5 w-5 text-primary mr-2 mt-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{t(`crm_plan_1_feature_${index + 1}`)}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href={`/contact?forfait=${t("crm_plan_1_id")}`} 
                className="text-center bg-primary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg mt-auto transition-all duration-300 hover:shadow-lg"
              >
                {t("btn_contact_for_pricing")}
              </Link>
            </div>
            
            {/* Forfait Business */}
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-primary flex flex-col relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg font-semibold">
                {t("crm_popular_badge")}
              </div>
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img
                  src="/api/placeholder/600/400"
                  alt="Business Plan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-secondary">
                {t("crm_plan_2_title")}
              </h3>
              <p className="text-center text-gray-600 mb-4">
                {t("crm_plan_2_subtitle")}
              </p>
              <ul className="mb-8 flex-grow">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index} className="flex items-start mb-3">
                    <svg 
                      className="h-5 w-5 text-primary mr-2 mt-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{t(`crm_plan_2_feature_${index + 1}`)}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href={`/contact?forfait=${t("crm_plan_2_id")}`}
                className="text-center bg-primary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg mt-auto transition-all duration-300 hover:shadow-lg"
              >
                {t("btn_contact_for_pricing")}
              </Link>
            </div>
            
            {/* Forfait Enterprise */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img
                  src="/api/placeholder/600/400"
                  alt="Enterprise Plan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-secondary">
                {t("crm_plan_3_title")}
              </h3>
              <p className="text-center text-gray-600 mb-4">
                {t("crm_plan_3_subtitle")}
              </p>
              <ul className="mb-8 flex-grow">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index} className="flex items-start mb-3">
                    <svg 
                      className="h-5 w-5 text-primary mr-2 mt-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{t(`crm_plan_3_feature_${index + 1}`)}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href={`/contact?forfait=${t("crm_plan_3_id")}`}
                className="text-center bg-primary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg mt-auto transition-all duration-300 hover:shadow-lg"
              >
                {t("btn_contact_for_pricing")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials - with placeholder images */}
      <section className="w-full flex flex-col container px-4 my-20 md:my-32">
        <div className="text-center flex flex-col items-center mb-12">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            {t("crm_testimonials_title")}
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary">
                  <img
                    src={`/api/placeholder/200/200`}
                    alt={`Testimonial ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-secondary">
                  {t(`crm_testimonial_${index + 1}_author`)}
                </p>
              </div>
              <p className="italic mb-4 text-gray-700">
                {t(`crm_testimonial_${index + 1}_text`)}
              </p>
              <div className="flex text-primary mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center flex flex-col items-center mb-12">
            <h2 className="text-gray-600 text-3xl font-medium">
              {t("crm_faq_title")}
            </h2>
            <div className="w-[50px] bg-primary h-1 mx-auto mt-3"></div>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* other services - improved with icons */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center flex flex-col items-center mb-12">
          <h2 className="text-gray-600 text-3xl font-medium">
            {t("other_title")}
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
          <Link href="/services/agence-facebook-ads" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 transform flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <span className="text-xl text-secondary font-semibold group-hover:text-primary transition-colors duration-300">
                {t("other_fb")}
              </span>
            </div>
          </Link>
          
          <Link href="/services/agence-google-ads" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 transform flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.18 10.382c-.39-.038-.779-.059-1.174-.059-3.32 0-6.397 1.172-8.799 3.131l3.443 2.994c1.573-1.396 3.631-2.156 5.683-2.156.475 0 .941.046 1.396.117v-3.492c0-.186-.196-.515-.549-.535zM8.753 18.588c1.516 1.352 3.608 2.213 5.911 2.213.526 0 1.036-.043 1.535-.11v-3.521a6.75 6.75 0 0 1-1.397.118c-2.037 0-3.915-.781-5.387-2.07l-3.396 2.982c2.383 1.97 5.453 3.152 8.783 3.152.399 0 .791-.021 1.187-.053.52-.053.906-.468.906-.978v-11.31l-6.629-5.773c-.304-.25-.752-.246-1.05 0l-10.203 8.95c-.406.355-.444.973-.08 1.37l1.53 1.676c.363.397.978.435 1.382.077l8.324-7.29z" />
                </svg>
              </div>
              <span className="text-xl text-secondary font-semibold group-hover:text-primary transition-colors duration-300">
                {t("other_google")}
              </span>
            </div>
          </Link>
          
          <Link href="/services/agence-seo" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 transform flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span className="text-xl text-secondary font-semibold group-hover:text-primary transition-colors duration-300">
                {t("other_seo")}
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA - at bottom with improved design */}
      <section className="w-full bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl p-4">
          <div className="bg-gradient-to-r from-secondary to-secondary/90 px-8 lg:px-12 py-16 rounded-xl flex flex-col lg:flex-row justify-between items-center lg:items-center text-center lg:text-left shadow-xl">
            <div className="lg:w-8/12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {t("cta1_title")}
              </h2>
              <p className="mt-4 text-white/90 text-lg lg:w-10/12">
                {t("cta1_subtitle")}
              </p>
            </div>
            <div className="mt-10 lg:mt-0 w-full lg:w-4/12 flex justify-center lg:justify-end">
              <ButtonClient
                href={"/contact"}
                variant="filled"
                size="lg"
                classes="!bg-white !text-primary hover:!bg-gray-100 shadow-lg"
                text={t("btn_contact")}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
