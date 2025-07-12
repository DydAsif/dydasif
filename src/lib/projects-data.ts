
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
    alt: string;
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
        content: 'Purchase events not tracking properly on Facebook Ads, leading to wasted ad spend and poor optimization.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'error screen analytics',
        alt: 'Screenshot showing an error in an analytics dashboard.',
      },
      {
        trigger: 'Solution',
        value: 'solution',
        content: 'Implemented Meta Pixel + CAPI via GTM with event deduplication to ensure data accuracy.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'code snippet gtm',
        alt: 'A diagram or code snippet showing the GTM and CAPI setup.',
      },
      {
        trigger: 'Result',
        value: 'result',
        content: 'Achieved 100% purchase tracking accuracy and boosted Event Match Quality score to 8.7/10.',
        imageUrl: 'https://i.ibb.co/tT1FMdR6/Result-final.png',
        imageHint: 'dashboard graph success',
        alt: 'A graph showing a high event match quality score and accurate purchase tracking.',
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
        content: 'No conversion data was being recorded in GA4 or Google Ads, making campaign ROI impossible to measure.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'zero conversions chart',
        alt: 'A screenshot of a Google Analytics report showing zero conversions.',
      },
      {
        trigger: 'Solution',
        value: 'solution',
        content: 'Added GA4 and Google Ads conversion tags via GTM with proper event mapping for lead submissions.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'flowchart gtm wordpress',
        alt: 'A flowchart illustrating the data flow from WordPress to GA4 and Google Ads via GTM.',
      },
      {
        trigger: 'Result',
        value: 'result',
        content: 'Successfully tracked an average of 18 conversions per week, enabling performance-based optimization.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'graph increasing conversions',
        alt: 'A graph showing a steady increase in tracked weekly conversions.',
      }
    ]
  }
];
