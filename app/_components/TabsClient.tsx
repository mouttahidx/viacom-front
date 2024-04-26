"use client"
import { Tabs } from "@mantine/core";
import React from "react";

export default function TabsClient({tabs}:{tabs:any}) {
  return (
    <Tabs
      color="orange"
      orientation="horizontal"
      classNames={{
        root: "bg-black bg-opacity-70 text-white border-white border",
        panel: "px-2 lg:p-8 py-10",
        tabLabel:
          "text-lg hover:text-primary focus-within:text-primary active:text-primary",
        tab: " hover:bg-transparent",
      }}
      defaultValue={tabs[0].label}
    >
      <Tabs.List justify="start">
        {tabs.map((item:any) => (
          <Tabs.Tab value={item.label} key={item.label}>
            {item.label}
          </Tabs.Tab>
        ))}
        {tabs.map((item:any) => (
          <Tabs.Panel value={item.label} key={item.label}>
            {item.text}
          </Tabs.Panel>
        ))}
      </Tabs.List>
    </Tabs>
  );
}
