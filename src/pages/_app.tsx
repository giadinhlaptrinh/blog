import "../styles/tailwind.css";
import "../styles/prism.css";
import "../styles/globals.css";

import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Analytics from "@/components/analytics";
import siteMetadata from "@/constant/siteMetadata";
import LayoutWrapper from "@/components/LayoutWrapper";
import { ClientReload } from "@/components/ClientReload";

const isDevelopment = process.env.NODE_ENV === "development";
const isSocket = process.env.SOCKET;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
