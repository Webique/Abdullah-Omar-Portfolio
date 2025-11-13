import { useTranslations } from "next-intl";

import WhatsAppIcon from "@/assets/icons/whatsapp-2.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";

export default function WhatsAppFloat() {
  const t = useTranslations("IndexPage.WhatsAppFloat");

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <a
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 end-6 z-[999999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl lg:bottom-6"
          aria-label="Contact us on WhatsApp"
        >
          <WhatsAppIcon className="h-8 w-8 fill-white" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{t("tooltip")}</p>
      </TooltipContent>
    </Tooltip>
  );
}
