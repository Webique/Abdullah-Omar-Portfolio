import "./globals.css";

import { ReactNode } from "react";

import RootProviders from "@/app/root-providers";
import { primaryFont } from "@/config/fonts";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  locale: string;
  direction: "rtl" | "ltr";
};

export default function Document({ children, locale, direction }: Props) {
  return (
    <html
      suppressHydrationWarning
      dir={direction}
      lang={locale}
      style={{ height: "100%" }}
    >
      <head />
      <body
        suppressHydrationWarning
        className={cn(
          "flex h-full flex-col antialiased",
          primaryFont.className
        )}
      >
        <RootProviders direction={direction}>{children}</RootProviders>
      </body>
    </html>
  );
}
