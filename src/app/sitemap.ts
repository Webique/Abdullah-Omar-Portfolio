import { MetadataRoute } from "next";

import { getPathname } from "@/i18n/navigation.public";
import { host, locales } from "@/i18n/config";

export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const rootUrl = host;
  const lastModified = new Date();

  const alternates = Object.assign(
    {},
    ...locales.map((locale) => ({
      [locale]: rootUrl + getPathname({ locale, href: "/" })
    }))
  );

  return [
    {
      url: rootUrl,
      lastModified,
      alternates: { languages: alternates }
    }
  ];
}
