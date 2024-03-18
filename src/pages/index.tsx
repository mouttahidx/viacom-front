import { Button, Divider } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    // hero section
    <section className="w-full py-28 text-white h-[550px] lg:h-[781px] bg-hero-bg bg-cover bg-no-repeat bg-center relative">
      <div className="absolute bg-dark-secondary left-0 bottom-0 right-0 top-0 bg-opacity-30 z-0"></div>
      <div className="z-10 absolute top-[15%] lg:top-[40%] max-w-6xl mx-auto  left-0 right-0 px-3">
        <h1 className="text-4xl w-full lg:w-1/2">
          Agence Web au Québec au service des PME
        </h1>
        <Divider size="lg" className="w-[50px] my-10"/>
        <h2 className="text-3xl w-full lg:w-1/2">Maximisez la croissance et la rentabilité de votre PME grâce à nos services de conception Web et de marketing  digital.</h2>
        <div className="mt-10">
        <Button variant="filled" className="!bg-primary hover:!bg-opacity-90 mr-4 ">{`Demande d'informations`}</Button>
        <Button variant="outline" color="white" className="">Nos services</Button>
        </div>
      </div>
    </section>
  );
}
