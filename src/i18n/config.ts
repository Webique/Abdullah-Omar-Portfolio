import { siteConfig } from "@/config/site";

export const locales: readonly string[] = ["ar", "en"] as const;

export const defaultLocale = "ar" as const;

export const host = siteConfig.url;
