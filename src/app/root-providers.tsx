"use client";
import { LazyMotion, domAnimation } from "motion/react";

export default function RootProviders({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  direction
}: {
  children: React.ReactNode;
  direction: "rtl" | "ltr";
}) {
  return (
    <>
      <LazyMotion features={domAnimation}>{children} </LazyMotion>
    </>
  );
}
