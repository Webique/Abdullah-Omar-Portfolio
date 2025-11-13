import { routing } from "@/i18n/routing.public";

import messages from "./locales/ar.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
