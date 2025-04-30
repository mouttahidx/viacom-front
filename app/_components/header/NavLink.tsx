"use client";

import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps, ReactNode, forwardRef } from "react";
import type { AppPathnames } from "@/config";
import { Link } from "@/navigation";

const NavigationLink = forwardRef(
  ({ href,children, ...others }: { href: string,children:ReactNode }, ref) => {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
    const isActive = pathname === href;

    return (
      <Link
        ref={ref as any}
        aria-current={isActive ? "page" : undefined}
        className="menu-item"
        href={href as any}
        {...others}
      >
        {children}</Link>
    );
  }
);
NavigationLink.displayName = "NavLink"
export default NavigationLink;
