"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { useIsFirstPage } from "@/hooks/use-is-first-page";
import { Link as I18nLink, useRouter } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

export default function NotFound({
  className,
  backLink = "/"
}: {
  className?: string;
  backLink?: string;
}) {
  const t = useTranslations("NotFoundPage");
  const router = useRouter();

  const isFirstPage = useIsFirstPage();

  return (
    <div
      className={cn(
        "layout flex min-h-screen flex-col items-center justify-center py-64 pb-56 text-center",
        className
      )}
    >
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-primary text-3xl font-bold sm:text-[40px] dark:text-white">
          {t("title")}
        </h1>
        <p className="text-muted-foreground max-w-[500px] text-base sm:text-lg">
          {t("description")}
        </p>
      </div>

      <div className="mx-auto mt-8 grid w-full max-w-md grid-cols-2 items-center gap-4 sm:mt-8">
        <Button
          asChild
          className="h-11 text-base sm:text-lg"
          aria-label={t("backToHome")}
        >
          <I18nLink href={backLink}>{t("backToHome")}</I18nLink>
        </Button>
        <Button
          variant="outline"
          className="h-11 text-base sm:text-lg"
          onClick={() => {
            if (isFirstPage) {
              router.push(backLink);
            } else {
              router.back();
            }
          }}
          aria-label={t("goBack")}
        >
          {t("goBack")}
        </Button>
      </div>
    </div>
  );
}
