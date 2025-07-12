
export type Project = {
  title: string;
  description: string;
  tags: string[];
  tabs: {
    trigger: string;
    value: string;
    content: string;
    imageUrl: string;
    imageHint: string;
  }[];
};

export const projects: Project[] = [
  {
    title: 'Shopify Purchase Tracking Fix',
    description: "A client's Shopify store was failing to track purchase events accurately in Facebook Ads, leading to unreliable performance data. By implementing Meta Pixel and the Conversion API (CAPI) through Google Tag Manager with proper event deduplication, we achieved 100% purchase tracking accuracy and boosted the Event Match Quality (EMQ) score to 8.7/10.",
    tags: ["Shopify", "Facebook CAPI", "GTM", "Deduplication", "EMQ"],
    tabs: [
      {
        trigger: 'Problem',
        value: 'problem',
        content: 'Purchase events not tracking properly on Facebook Ads.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'error screen analytics',
      },
      {
        trigger: 'Solution',
        value: 'solution',
        content: 'Setup Meta Pixel + CAPI via GTM with deduplication.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'code snippet gtm',
      },
      {
        trigger: 'Result',
        value: 'result',
        content: '100% purchase tracking & EMQ 8.7',
        imageUrl: '/Result.png',
        imageHint: 'dashboard graph success',
      }
    ]
  },
  {
    title: 'GA4 + Google Ads Tracking on WordPress',
    description: "A WordPress-based business had zero conversion tracking in Google Analytics 4 and Google Ads, making it impossible to measure campaign effectiveness. I implemented a robust tracking setup using Google Tag Manager to correctly map GA4 events and Google Ads conversions, resulting in an average of 18 accurately tracked conversions per week.",
    tags: ["WordPress", "GA4", "Google Ads", "GTM", "Conversion Tracking"],
     tabs: [
      {
        trigger: 'Problem',
        value: 'problem',
        content: 'Conversions not recorded in GA4 or Ads.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'zero conversions chart',
      },
      {
        trigger: 'Solution',
        value: 'solution',
        content: 'GA4 + Ads tag added via GTM with proper event mapping.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'flowchart gtm wordpress',
      },
      {
        trigger: 'Result',
        value: 'result',
        content: '18 tracked conversions per week.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'graph increasing conversions',
      }
    ]
  }
];
