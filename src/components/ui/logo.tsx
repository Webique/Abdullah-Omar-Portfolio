import ExportedImage from "next-image-export-optimizer";

import { Link as I18nLink } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

type indexProps = {
  src?: string;
  width?: number;
  height?: number;
  href?: string;
  className?: string;
  imgClassName?: string;
};

export default function Logo({
  src = "/images/logos/1.png",
  width = 192,
  height = 148,
  className,
  imgClassName,
  href = "/"
}: indexProps) {
  return (
    <I18nLink
      href={href}
      aria-label="ALEF Real Estate Logo"
      className={cn("flex items-center gap-2.5", className)}
    >
      <ExportedImage
        className={cn(
          "h-auto w-16 max-w-full overflow-hidden sm:w-20",
          imgClassName
        )}
        src={src}
        width={width}
        height={height}
        placeholder="empty"
        priority
        alt="ALEF Real Estate Logo"
      />
    </I18nLink>
  );
}
