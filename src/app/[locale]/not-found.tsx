import type { Locale } from "next-intl";

import { getTranslations } from "next-intl/server";

import NotFound from "@/components/not-found";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "NotFoundPage" });

  return {
    title: t("title"),
    description: t("description")
  };
}

export default function NotFoundPage() {
  return (
    <main>
      <section className="flex h-full">
        <NotFound />
      </section>
    </main>
  );
}
