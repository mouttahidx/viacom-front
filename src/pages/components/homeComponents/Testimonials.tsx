import Image from "next/image";
import React from "react";
import { useIntl } from "react-intl";

export default function Testimonials() {
  const intl = useIntl();
  const testimonials = [
    {
      text: intl.formatMessage({id:"home.t.1text"}),
      name:  intl.formatMessage({id:"home.t.1name"}),
      title:  intl.formatMessage({id:"home.t.1job"}),
      img: "/img/sarah.webp",
    },
    
    {
      text: intl.formatMessage({id:"home.t.2text"}),
      name:  intl.formatMessage({id:"home.t.2name"}),
      title:  intl.formatMessage({id:"home.t.2job"}),
        img: "/img/alzeihmer.webp",
      },
    {
      text: intl.formatMessage({id:"home.t.3text"}),
      name:  intl.formatMessage({id:"home.t.3name"}),
      title:  intl.formatMessage({id:"home.t.3job"}),
        img: "/img/andre.webp",
      },
    {
      text: intl.formatMessage({id:"home.t.4text"}),
      name:  intl.formatMessage({id:"home.t.4name"}),
      title:  intl.formatMessage({id:"home.t.4job"}),
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
