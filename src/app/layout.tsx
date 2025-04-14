import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "900"],
});

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "900"],
});

export const metadata: Metadata = {
  title: "BridgeQA",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
<head>
  <Script
    id="cookieyes"
    src="https://cdn-cookieyes.com/client_data/006bb7c873f4615cc04aecd6/script.js"
    strategy="beforeInteractive"
  />

  <Script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-KQQNCERCDH"
    strategy="afterInteractive"
  />

  <Script
    id="google-analytics"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-KQQNCERCDH');
      `,
    }}
  />
</head>

      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        {/* <Amplitude /> */}
        {children}
      </body>
    </html>
  );
}
