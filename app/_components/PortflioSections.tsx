import { ecommerce, showcase } from '@/utils/portfolio-items'
import Image from 'next/image'
import React from 'react'

export default function PortflioSections({title1,title2}:{title1:string,title2:string}) {
  return (
    <>
          {/* ecommerce */}
          <section className="max-w-7xl mx-auto my-24 px-2">
        <h2 className="gray-section-title text-center mb-16">
          {title1}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-6">
          {ecommerce.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="nofollow"
              className="w-full h-[200px]"
              key={item.image}
            >
              <Image
                src={"/portfolio/ecommerce/" + item.image}
                alt=""
                width={350}
                height={250}
                className="bg-black hover:shadow  hover:scale-105 duration-300 cursor-pointer object-contain aspect-square w-full h-full border rounded"
              />
            </a>
          ))}
        </div>
      </section>

      {/* vitrine */}
      <section className="max-w-7xl mx-auto my-24 px-2">
        <h2 className="gray-section-title text-center mb-16">
          {title2}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-6">
          {showcase.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="nofollow"
              className="w-full h-[200px]"
              key={item.image}
            >
              <Image
                src={"/portfolio/showcase/" + item.image}
                alt=""
                width={350}
                height={250}
                className="bg-black hover:shadow hover:scale-105 duration-300 cursor-pointer object-contain aspect-square w-full h-full border rounded"
              />
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
