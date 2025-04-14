import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import Script from "next/script";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "900"],
});

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
          id="amplitude"
          type="text/plain"
          data-cookieyes="analytics"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof amplitude === 'undefined') return;
                amplitude.getInstance().init("5a9a1de1c5239a1a61661853b6457b75", {
                  defaultTracking: {
                    pageViews: true,
                    sessions: true,
                    formInteractions: true
                  },
                  autocapture: true
                });
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}