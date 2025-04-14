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
    src="https://cdn.amplitude.com/libs/analytics-browser-2.5.0-min.js.gz"
    strategy="beforeInteractive"
  />
  <Script
    src="https://cdn.amplitude.com/libs/session-replay.min.js" // ← Make sure you load sessionReplay if required
    strategy="beforeInteractive"
  />
  <Script
    id="amplitude-init"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        (async () => {
          if (window.amplitude && window.sessionReplay) {
            const amplitude = window.amplitude;
            await amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));
            amplitude.init('5a9a1de1c5239a1a61661853b6457b75', {
              autocapture: { elementInteractions: true }
            });
          } else {
            console.warn('Amplitude or SessionReplay not available on window.');
          }
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