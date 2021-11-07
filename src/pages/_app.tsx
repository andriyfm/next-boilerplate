import type { AppProps } from "next/app";
import * as React from "react";
import "styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
