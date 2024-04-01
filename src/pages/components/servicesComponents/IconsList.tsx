import Image from "next/image";
import React from "react";

export default function IconsList() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex gap-x-4 ">
        <Image
          src={"/img/report.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h4 className="list-title">Nos services marketing</h4>
          <p className="text-sm">
            Publicités sur les médias sociaux, conception de site Web et SEO et
            conception de pages de renvoi ne sont que quelques-uns des outils
            utilisés afin d’augmenter la visibilité de votre entreprise.
          </p>
        </div>
      </div>
      <div className="flex gap-x-4 ">
        <Image
          src={"/img/strategy.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h4 className="list-title">Notre stratégie</h4>
          <p className="text-sm">{`Notre stratégie basée sur la combinaison de sites Web parfaitement conçus, de matériel marketing professionnel et de campagnes publicitaires Facebook, LinkedIn et AdWords permet de cibler vos clients potentiels au bon endroit, au bon moment pour un maximum de résultats.
`}</p>
        </div>
      </div>
      <div className="flex gap-x-4 ">
        <Image
          src={"/img/banner.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h4 className="list-title">Notre expertise</h4>
          <p className="text-sm">
            Notre agence Web est fière d’être partenaire Google, honneur décerné
            par Google pour la qualité de notre travail et notre expertise.
          </p>
        </div>
      </div>
      <div className="flex gap-x-4 ">
        <Image
          src={"/img/reviews.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h4 className="list-title">Nos clients</h4>
          <p className="text-sm">
            Des dizaines d’entreprises du Québec et de partout au Canada font
            déjà confiance à nos services de marketing digital. Joignez-vous à
            elles et laissez-nous propulser votre entreprise vers de nouveaux
            sommets!
          </p>
        </div>
      </div>
    </div>
  );
}
