import type { AppProps } from "next/app";
import * as React from "react";
import "styles/globals.css";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  import("../mocks").then(({ setupMocks }) => {
    setupMocks();
  });
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
