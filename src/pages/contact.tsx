"use client";
import { sendEmail } from "@/helpers/sendEmail";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { Button, Group, Text, TextInput } from "@mantine/core";
import { hasLength, isEmail, isNotEmpty, useForm } from "@mantine/form";
import Head from "next/head";
import Image from "next/image";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useIntl } from "react-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const recaptchaRef = useRef("");
  const intl = useIntl();
  const [loading, setLoading] = useState(false);
  function changed(value: string) {
    recaptchaRef.current = value;
  }

  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validate: {
      name: hasLength(
        { min: 3, max: 156 },
        intl.formatMessage({ id: "contact.name.error" })
      ),
      email: isEmail(intl.formatMessage({ id: "contact.email.error" })),
      phone: (value) =>
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
          value
        )
          ? null
          : intl.formatMessage({ id: "contact.phone.error" }),
      message: isNotEmpty(intl.formatMessage({ id: "contact.message.error" })),
    },
  });

  async function send(values: object) {
    let res = await sendEmail(values);
    if (res) {
      form.setValues({ name: "", email: "", phone: "", message: "" });
      toast.success(intl.formatMessage({ id: "contact.message.success" }));
      setLoading(false);
      return true;
    } else {
    }
    return false;
  }
  return (
    <div>
      <Head>
        <title>
          VIA Communication - {intl.formatMessage({ id: "nav.contact" })}
        </title>
      </Head>
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-4xl mt-10">
          {intl.formatMessage({ id: "contact.hero.title" })}
        </h1>
      </div>

      {/* 1st */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-white">
        <div className="relative overflow-hidden lg:overflow-visible right-arrow col-span-1 md:col-span-3 lg:col-span-1 bg-primary min-h-[150px] md:min-h-[120px] flex items-center flex-col justify-center border-y border-white md:border-none">
          <h2 className="text-3xl !text-white text-center">
            {intl.formatMessage({ id: "contact.1.title" })}
          </h2>
          <p className="text-center text-sm mt-4">
            {intl.formatMessage({ id: "contact.1.subtitle" })}
          </p>
        </div>
        <div className="bg-[#1C4D83] px-2 text-centers min-h-[250px] flex items-center flex-col justify-center border-y border-white md:border-none">
          <MapPinIcon className="text-white w-12 h-12" />
          <h2 className="text-2xl mt-8 !text-white text-center">
            {intl.formatMessage({ id: "contact.address" })}
          </h2>
          <p className="text-center text-sm mt-4">
            1020, rue Bouvier, bureau 400, Québec, QC G2K 0H3
          </p>
        </div>
        <div className="bg-[#1C4D83] px-2 text-centers min-h-[250px] flex items-center flex-col justify-center border-y border-white md:border-none">
          <PhoneIcon className="text-white w-12 h-12" />

          <h2 className="text-2xl mt-8 !text-white text-center">
            {intl.formatMessage({ id: "contact.phone" })}
          </h2>
          <p className="text-center text-sm mt-4">
            Québec : <span className="text-primary">418-825-2323</span>
          </p>
        </div>
        <div className="bg-[#1C4D83] px-2 text-centers min-h-[250px] flex items-center flex-col justify-center border-y border-white md:border-none">
          <EnvelopeIcon className="text-white w-12 h-12" />

          <h2 className="text-2xl mt-8 !text-white text-center">
            {intl.formatMessage({ id: "contact.email" })}
          </h2>
          <p className="text-center text-sm mt-4">info@viacommunication.com</p>
        </div>
      </section>

      {/* 3rd */}
      <section className="w-full flex flex-col my-40 gap-y-20">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="section-title">
            {intl.formatMessage({ id: "contact.2.title" })}
          </h2>
          <p className="body-text">
            {intl.formatMessage({ id: "contact.2.subtitle" })}
          </p>
        </div>

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16">
          <Image
            src={"/img/robot-finger-pc.webp"}
            alt="robot finger"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-contain max-h-[570px]"
          />
          {/* Form */}
          <div className="w-full xl:w-5/12 px-4">
            <form
              onSubmit={form.onSubmit((values) => {
                setLoading(true);
                if (!recaptchaRef.current) {
                  toast.error(intl.formatMessage({ id: "recaptcha.error" }));
                  setLoading(false);
                  return false;
                }
                try {
                  send(values);
                } catch (error) {}
              })}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <TextInput
                withAsterisk
                size="md"
                label={intl.formatMessage({ id: "contact.2.name" })}
                placeholder={intl.formatMessage({ id: "contact.2.fullName" })}
                {...form.getInputProps("name")}
                className="lg:col-span-2"
              />

              <TextInput
                size="md"
                withAsterisk
                label={intl.formatMessage({ id: "contact.phone" })}
                placeholder="+1 123 456 789"
                {...form.getInputProps("phone")}
              />
              <TextInput
                size="md"
                withAsterisk
                label={intl.formatMessage({ id: "contact.email" })}
                placeholder="Exemple@email.com"
                {...form.getInputProps("email")}
              />
              <TextInput
                size="md"
                withAsterisk
                label={intl.formatMessage({ id: "contact.2.message" })}
                placeholder="message..."
                {...form.getInputProps("message")}
                className="lg:col-span-2"
              />

              <Group justify="flex-start" mt="sm">
                <ReCAPTCHA
                  sitekey="6LeabKspAAAAAFrJCC4pPOza6OjR2Ap7fVXEyIaf"
                  onChange={(token) => {
                    changed(token || "");
                  }}
                  className="h-fit"
                />
                <Button type="submit" color="#F05423" disabled={loading}>
                {intl.formatMessage({ id: "contact.2.send" })}
                </Button>
              </Group>
            </form>
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10918.603757817204!2d-71.283072!3d46.8308744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8bbf7588c338d%3A0x777238c0bc5bc07f!2sVIA%20Communication!5e0!3m2!1sen!2sma!4v1711927557554!5m2!1sen!2sma"
          width="600"
          height="450"
          className=" w-full border-none"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <ToastContainer />
      </section>
    </div>
  );
}
