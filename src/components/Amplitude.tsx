"use client";

import { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";

export default function Amplitude() {
  useEffect(() => {
    const checkConsentAndInit = () => {
      const hasConsent = (window as any)?.cookieyes?.hasConsent?.("analytics");

      if (hasConsent) {
        amplitude.init("5a9a1de1c5239a1a61661853b6457b75", {
          defaultTracking: {
            pageViews: true,
            sessions: true,
            formInteractions: true,
          },
          autocapture: true,
        });

        return true; // success
      }

      return false;
    };

    // Wait for CookieYes to load
    const interval = setInterval(() => {
      const ready = (window as any)?.cookieyes?.hasConsent;
      if (ready && checkConsentAndInit()) {
        clearInterval(interval);
      }
    }, 500);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return null;
}
