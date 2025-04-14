'use client';

import { useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';

function hasAnalyticsConsent(): boolean {
  const cookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith('cookieyes-consent='));

  if (!cookie) return false;

  const consentValue = decodeURIComponent(cookie.split('=')[1]);
  const consentMap = Object.fromEntries(
    consentValue.split('|').map((pair) => pair.split(':'))
  );

  return consentMap['analytics'] === 'true';
}

export default function Amplitude() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (hasAnalyticsConsent()) {
        console.log('✅ User accepted analytics cookies. Initializing Amplitude...');
        
        amplitude.init('5a9a1de1c5239a1a61661853b6457b75', {
          defaultTracking: {
            pageViews: true,
            sessions: true,
            formInteractions: true,
          },
          autocapture: true,
        });

        clearInterval(interval); // Stop polling once initialized
      } else {
        console.log('❌ Analytics consent not granted yet.');
      }
    }, 2000); // Poll every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return null;
}
