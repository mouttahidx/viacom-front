"use client";

import { Button } from "@mantine/core";
import { Link } from "@/navigation";
import React from "react";

export default function ButtonClient({
  href,
  classes,
  variant,
  text,
  color = undefined,
  size = undefined,
  rel,
}: {
  href: any;
  classes: any;
  variant: string;
  text: string;
  color?: string | undefined;
  size?: string | undefined;
  rel ?: string
}) {
  return (
    <Button
      component={Link}
      href={href}
      variant={variant}
      className={classes}
      color={color}
      size={size}
      rel={rel}
    >
      {text}{" "}
    </Button>
  );
}
