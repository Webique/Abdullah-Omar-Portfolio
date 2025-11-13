import { IBM_Plex_Sans_Arabic } from "next/font/google";

// IBM Plex Sans Arabic - Modern, clean, similar to Tajawal but better aligned
export const primaryFont = IBM_Plex_Sans_Arabic({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  display: "swap"
});
