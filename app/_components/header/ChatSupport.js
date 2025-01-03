"use client";
import { LiveChatWidget, EventHandlerPayload } from "@livechat/widget-react";
import { useLocale } from "next-intl";

export default function ChatSupport() {
    const locale = useLocale();

  return (
    <LiveChatWidget
      license="18971658"
      visibility="maximized"
      group={locale === "en" ? "1" : "0"}
    />
  );
}

