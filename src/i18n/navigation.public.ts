import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing.public";

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
