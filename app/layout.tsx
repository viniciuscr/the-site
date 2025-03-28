import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "CV - Vinícius C. Reck",
  description: "Curriculum Vitae - Vinícius Castelani Reck",
};

import "./globals.css";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=yes"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
