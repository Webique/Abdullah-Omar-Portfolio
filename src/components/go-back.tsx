"use client";

import { Button } from "@/components/ui/button";
import { useIsFirstPage } from "@/hooks/use-is-first-page";
import { useRouter } from "@/i18n/navigation.public";

export default function GoBack({ backLink = "/" }: { backLink?: string }) {
  const router = useRouter();
  const isFirstPage = useIsFirstPage();

  return (
    <Button
      aria-label="Go back"
      className="py-6"
      variant="outline"
      onClick={() => {
        if (isFirstPage) {
          router.push(backLink);
        } else {
          router.back();
        }
      }}
    >
      Go Back
    </Button>
  );
}
