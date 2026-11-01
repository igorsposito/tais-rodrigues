
import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
} from "next/font/google";

import "./globals.css";

import SmoothScroll from "@/components/animation/SmoothScroll";
import { siteConfig } from "@/config/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const pageTitle =
  "Taís Rodrigues | Direito Médico e Advocacia Preventiva";

const pageDescription =
  "Dra. Taís Rodrigues, OAB/MG 242.585. Atuação em Direito Médico, Bioética e advocacia preventiva para médicos, clínicas e profissionais da saúde.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  applicationName: siteConfig.name,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    title: pageTitle,
    description:
      "Entre a Bula e a Lei. Advocacia preventiva em Direito Médico e Bioética.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Taís Rodrigues — Advocacia Estratégica em Direito Médico e Bioética",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description:
      "Direito Médico, Bioética e advocacia preventiva.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${plusJakarta.variable}`}
    >
      <body className="bg-brand-green-dark text-brand-cream antialiased selection:bg-brand-gold selection:text-brand-green-dark">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
