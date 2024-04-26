import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function FreeQuote() {
  const t = useTranslations();

  return (
    <Link
      href="/contact"
      className="group text-lg text-white hover:bg-white hover:text-primary bg-primary font-medium text-center p-1 relative -mb-3 h-14 rounded z-10"
    >
      <span dangerouslySetInnerHTML={{__html:t.raw('nav_quote')}} />
      <svg
        version="1.1"
        className="w-full absolute h-[5px] left-0 top-full fill-primary group-hover:fill-white"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        preserveAspectRatio="none"
        width="14px"
        height="5px"
        viewBox="0 0 14.017 5.006"
        enableBackground="new 0 0 14.017 5.006"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.016,0L7.008,5.006L0,0H14.016z"
        ></path>
      </svg>
    </Link>
  );
}
