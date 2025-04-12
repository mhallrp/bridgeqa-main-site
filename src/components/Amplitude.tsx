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
    console.log("🔍 Amplitude component mounted");

    const checkConsentAndInit = () => {
      const hasConsent = window.cookieyes?.hasConsent?.("analytics");

      console.log("🔎 Checking analytics consent:", hasConsent);

      if (hasConsent) {
        console.log("✅ Consent given. Initializing Amplitude...");

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

      console.log("❌ Consent NOT given. Amplitude not initialized.");
      return false;
    };

    const interval = setInterval(() => {
      const cookieYesObj = window.cookieyes;
      console.log("⌛ Polling CookieYes...", cookieYesObj);
    
      const isReady = typeof cookieYesObj?.hasConsent === "function";
    
      if (isReady) {
        console.log("✅ CookieYes is ready!");
        const didInit = checkConsentAndInit();
    
        if (didInit) {
          clearInterval(interval);
        }
      }
    }, 500);
    

    return () => {
      console.log("🧹 Cleaning up interval");
      clearInterval(interval);
    };
  }, []);

  return null;
}
