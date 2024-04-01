import Image from "next/image";
import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "François offre une grande valeur à nos clients mutuels. J’ai eu la chance de participer à l’un de ses séminaires de formation portant sur Facebook et j’ai été très impressionnée par la quantité d’informations qu’il a pu livrer sans submerger les participants. Sa formation était pertinente et divertissante. Il est clair qu’il est un expert dans les médias sociaux et il se soucie vraiment du succès des entreprises avec lesquelles il est partenaire. François a dépassé mes attentes.",
      name: "SARAH VOIGT",
      title: "Business Development Specialist at NAPA AUTO PARTS",
      img: "/img/sarah.webp",
    },
    
    {
        text: "François Beaudry, donateur actif depuis quelques années au sein de La Société Alzheimer de Québec, est désormais notre référence en expertise numérique. C'est en raison de son approche humaine et transparente que l'équipe de La Société a souhaité collaborer avec son entreprise, Via Communication. Le milieu philanthropique ne se réfléchit pas de la même manière qu'une entreprise privée et les stratégies de communication en sont différentes. François et son équipe font preuve d'une grande compréhension à l'égard de ces différences fondamentales et nous assurent ainsi, une réussite dans nos divers projets! En plus d'être toujours aux faits des dernières tendances, les projets sont toujours réalisés avec humour et légèreté. Succès assuré!",
        name: "ÉMILIE GAUDREAULT",
        title: "Coordonnatrice aux événements et communications",
        img: "/img/alzeihmer.webp",
      },
    {
        text: "Une équipe de professionnels qui s’occupe de nous, et ce, de façon exemplaire. En plus d’être à l’écoute de nos besoins, ces gens s’adaptent VRAIMENT à ce qu’on a besoin et font tout pour nous mettre en valeur. Un merci SPÉCIAL à François Beaudry qui est le maître d’œuvre.",
        name: "ANDRÉ GERVAIS",
        title: "Animateur, émission : L’objectif est à l’aventure",
        img: "/img/andre.webp",
      },
    {
      text: "WOW! On vit dans l’ère des médias sociaux, ça prend du temps. Quand on le fait bien, ça marche! Merci d’aider notre communauté de garages à en profiter et merci aussi de gérer les nôtres.",
      name: "MATHIEU BRUNEL",
      title: "Directeur général, V2V Technology GEM-CAR",
      img: "/img/mathieu.webp",
    },

  ];
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          {testimonials.map((testi,index) => (
            <blockquote key={index} className="rounded-lg bg-[#213357] !text-white bg-opacity-40 p-6 shadow-sm sm:p-8 h-fit">
              <div className="flex items-center gap-4">
                <Image
                  width={100}
                  height={100}
                  alt=""
                  src={testi.img}
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-start gap-0.5 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-white">
                    {testi.name}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-200 text-left">{testi.text}</p>{" "}
              <p className="mt-4 text-sm text-gray-500 font-medium text-left">{testi.title}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
