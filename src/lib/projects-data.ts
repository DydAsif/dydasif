
export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  imageHint: string;
};

export const projects: Project[] = [
  {
    title: 'Shopify Purchase Tracking Fix',
    description: "A client's Shopify store was failing to track purchase events accurately in Facebook Ads, leading to unreliable performance data. By implementing Meta Pixel and the Conversion API (CAPI) through Google Tag Manager with proper event deduplication, we achieved 100% purchase tracking accuracy and boosted the Event Match Quality (EMQ) score to 8.7/10.",
    tags: ["Shopify", "Facebook CAPI", "GTM", "Deduplication", "EMQ"],
    image: 'https://i.ibb.co/rKWj6Srs/GA4-Google-Ads-e-Commerce-Tracking-2.png',
    imageAlt: 'Shopify Purchase Tracking Fix',
    imageHint: 'analytics dashboard',
  },
  {
    title: 'GA4 + Google Ads Tracking on WordPress',
    description: "A WordPress-based business had zero conversion tracking in Google Analytics 4 and Google Ads, making it impossible to measure campaign effectiveness. I implemented a robust tracking setup using Google Tag Manager to correctly map GA4 events and Google Ads conversions, resulting in an average of 18 accurately tracked conversions per week.",
    tags: ["WordPress", "GA4", "Google Ads", "GTM", "Conversion Tracking"],
    image: 'https://i.ibb.co/LTsbR2D/GA4-Google-Ads-e-Commerce-Tracking.png',
    imageAlt: 'GA4 and Google Ads Tracking Report',
    imageHint: 'analytics report',
  }
];
