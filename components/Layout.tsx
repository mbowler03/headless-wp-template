import Head from "next/head";
import React, { ReactNode } from "react";

import Header from "./Header";
import Footer from '../components/Footer'
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Headless WP App</title>
      </Head>
      <Header />
      <main>{children}</main>
   <Footer />   
    </>
  );
}
