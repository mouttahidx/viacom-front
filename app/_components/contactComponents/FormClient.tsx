"use client"
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Group, TextInput } from "@mantine/core";
import { hasLength, isEmail, isNotEmpty, useForm } from "@mantine/form";
import { sendEmail } from "@/utils/sendEmail"; 

export default function FormClientranslations({
  translations
}: {
  translations: any
}) {
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef("");

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
        translations["contact_name_error"]
      ),
      email: isEmail(translations["contact_email_error"]),
      phone: (value) =>
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
          value
        )
          ? null
          : translations["contact_phone_error"],
      message: isNotEmpty(translations["contact_message_error"]),
    },
  });

  function changed(value: string) {
    recaptchaRef.current = value;
  }

  async function send(values: object) {
    let res = await sendEmail(values);
    if (res) {
      form.setValues({ name: "", email: "", phone: "", message: "" });
      toast.success(translations["contact_email_success"]);
      setLoading(false);
      return true;
    } else {
    }
    return false;
  }

  return (
    <div>
     <form
        onSubmit={form.onSubmit((values: { name: string; phone: string; email: string; message: string; }) => {
          setLoading(true);
          if (!recaptchaRef.current) {
            toast.error(translations["recaptcha_error"]);
            setLoading(false);
            return;
          }
          try {
            void send(values);
          } catch (error) {}
        })}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <TextInput
          withAsterisk
          size="md"
          label={translations["contact_2_name"]}
          placeholder={translations["contact_2_fullName"]}
          {...form.getInputProps("name")}
          className="lg:col-span-2"
        />

        <TextInput
          size="md"
          withAsterisk
          label={translations["contact_phone"]}
          placeholder="+1 123 456 789"
          {...form.getInputProps("phone")}
        />
        <TextInput
          size="md"
          withAsterisk
          label={translations["contact_email"]}
          placeholder="Exemple@email.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          size="md"
          withAsterisk
          label={translations["contact_2_message"]}
          placeholder="message..."
          {...form.getInputProps("message")}
          className="lg:col-span-2"
        />

        <Group justify="flex-start" mt="sm">
          <ReCAPTCHA
            sitekey="6LfpNLgpAAAAAMJxMDeW89ER3_TdDwSf6ZqDTSP1"
            onChange={(token) => {
              changed(token || "");
            }}
            className="h-fit"
          />
          <Button type="submit" color="#F05423" disabled={loading}>
            {translations["contact_2_send"]}
          </Button>
        </Group>
      </form>
      <ToastContainer />
    </div>
  );
}
