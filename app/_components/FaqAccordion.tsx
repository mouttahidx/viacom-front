"use client";

import { Accordion } from "@mantine/core";

export default function FaqAccordion({ faqs }: { faqs: Array<any> }) {
  const faqItems = faqs.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control className="!text-lg !py-4">
        {item.value}
      </Accordion.Control>
      <Accordion.Panel className="!text-base">
        {item.description}
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Accordion
      defaultValue=""
      chevronPosition="left"
      className="text-2xl border w-full max-w-7xl"
      classNames={{
        label: "!text-secondary !font-semibold",
        chevron: "!text-primary !w-5 !h-5",
        panel: "!p-1 xl:!p-4",
      }}
      transitionDuration={500}
    >
      {faqItems}
    </Accordion>
  );
}
