import React from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { ILayoutProps } from "@/types/layout";

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
