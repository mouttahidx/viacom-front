import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  locale: "fr" | "en";
};
export default function Flag({ locale }: Props) {
  const pathname = usePathname();
  return (
    <div className="ml-10 w-[40px] !text-sm text-black lg:text-white">
      {locale === "fr" ? (
        <Link href={pathname} locale="fr">
          FR
        </Link>
      ) : (
        <Link href={pathname} locale="en">
          EN
        </Link>
      )}
    </div>
  );
}
