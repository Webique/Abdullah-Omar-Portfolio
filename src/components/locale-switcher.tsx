"use client";

import { useLocale } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

export default function LocaleSwitcher({
  className,
  isTop
}: {
  className?: string;
  isTop: boolean;
}) {
  const locale = useLocale();
  const pathname = usePathname?.();

  const displayText = locale === "en" ? "العربية" : "English";

  return (
    <div className={cn("relative inline-block text-left", className)}>
      <Link
        href={pathname}
        locale={locale === "en" ? "ar" : "en"}
        className={cn(
          "inline-flex w-full items-center justify-between rounded-full px-3 py-2 text-xs font-semibold text-black focus:outline-none sm:text-sm",
          isTop && "md:text-white"
        )}
      >
        <span className="flex items-center gap-1.5">
          <span>{displayText}</span>
        </span>
      </Link>
    </div>
  );
}
