import type { Locale } from "next-intl";

import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getLangDir } from "rtl-detect";

import { routing } from "@/i18n/routing.public";
import { siteConfig } from "@/config/site";
import RootProviders from "@/app/root-providers";
import Layout from "@/components/layout";

import Document from "../document";

export const dynamic = "force-static";

type Params = Promise<{ locale: Locale }>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: {
      default: t("name"),
      template: `%s | ${t("short_name")}`
    },
    description: t("description"),
    applicationName: t("name"),
    keywords: t.raw("keywords"),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: {
        default: t("name"),
        template: `%s | ${t("short_name")}`
      },
      description: t("description"),
      siteName: t("name")
      // images: [
      //   {
      //     url: siteConfig.ogImage,
      //     width: 1200,
      //     height: 630,
      //     alt: siteConfig.name
      //   }
      // ]
    },
    twitter: {
      card: "summary",
      title: {
        default: t("name"),
        template: `%s | ${t("short_name")}`
      },
      description: t("description"),
      // images: [siteConfig.ogImage],
      creator: siteConfig.twitter
    },
    robots: {
      index: process.env.NEXT_PUBLIC_INDEXING_ENABLED === "true",
      follow: process.env.NEXT_PUBLIC_INDEXING_ENABLED === "true",
      googleBot: {
        index: process.env.NEXT_PUBLIC_INDEXING_ENABLED === "true",
        follow: process.env.NEXT_PUBLIC_INDEXING_ENABLED === "true",
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        {
          url: "/favicon/web-app-manifest-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          url: "/favicon/web-app-manifest-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ],
      apple: [
        {
          url: "/favicon/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png"
        }
      ]
    },
    // manifest: "/manifest.json",
    metadataBase: new URL(siteConfig.url),
    formatDetection: {
      telephone: false
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: LayoutProps<"/[locale]">) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const direction = getLangDir(locale);

  return (
    <Document locale={locale} direction={direction}>
      <NextIntlClientProvider>
        <RootProviders direction={direction}>
          <Layout>{children}</Layout>
        </RootProviders>
      </NextIntlClientProvider>
    </Document>
  );
}
