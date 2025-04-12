"use client";

import { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";

// 👇 Define CookieYes interface
interface CookieYes {
  hasConsent: (category: string) => boolean;
}

// 👇 Extend window type
declare global {
  interface Window {
    cookieyes?: CookieYes;
  }
}

export default function Amplitude() {
  useEffect(() => {
    const checkConsentAndInit = () => {
      const hasConsent = window.cookieyes?.hasConsent?.("analytics");

      if (hasConsent) {
        amplitude.init("5a9a1de1c5239a1a61661853b6457b75", {
          defaultTracking: {
            pageViews: true,
            sessions: true,
            formInteractions: true,
          },
          autocapture: true,
        });

        return true;
      }

      return false;
    };

    const interval = setInterval(() => {
      const ready = typeof window.cookieyes?.hasConsent === "function";
      if (ready && checkConsentAndInit()) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return null;
}
