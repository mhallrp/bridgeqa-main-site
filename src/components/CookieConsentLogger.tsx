// 'use client';

// import { useEffect } from 'react';

// export default function CookieConsentLogger() {
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const cookie = document.cookie
//         .split('; ')
//         .find(row => row.startsWith('cookieyes-consent='));

//       if (!cookie) {
//         console.log('CookieYes consent cookie not found.');
//         return;
//       }

//       const consentValue = decodeURIComponent(cookie.split('=')[1]);
//       const consentPairs = consentValue.split('|');
//       const consentMap: Record<string, boolean> = {};

//       consentPairs.forEach(pair => {
//         const [key, value] = pair.split(':');
//         consentMap[key] = value === 'true';
//       });

//       console.log('Consent state:', consentMap);
//     }, 3000); // poll every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return null; // This component doesn't render anything
// }
