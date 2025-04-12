// components/Amplitude.tsx
"use client";

import { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";

export default function Amplitude() {
  useEffect(() => {
    amplitude.init("5a9a1de1c5239a1a61661853b6457b75", {
        defaultTracking: {
          pageViews: true,
          sessions: true,
          formInteractions: true,
        },
        // ✅ Removed invalid `trackingOptions`
        autocapture: true,
      });      
  }, []);

  return null; // this component doesn't render anything
}
