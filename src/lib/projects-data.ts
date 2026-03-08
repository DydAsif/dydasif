
export type ProjectDetail = {
  image: string;
  imageAlt: string;
  imageHint: string;
  caption: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  problem: ProjectDetail;
  solution: ProjectDetail;
  result: ProjectDetail;
};

export const projects: Project[] = [
  {
    title: 'Shopify Purchase Tracking Fix',
    description: "A client's Shopify store was failing to track purchase events accurately in Facebook Ads, leading to unreliable performance data. By implementing Meta Pixel and the Conversion API (CAPI) through Google Tag Manager with proper event deduplication, we achieved 100% purchase tracking accuracy and boosted the Event Match Quality (EMQ) score to 8.7/10.",
    tags: ["Shopify", "Facebook CAPI", "GTM", "Deduplication", "EMQ"],
    problem: {
      image: 'https://i.ibb.co/HTHLrdV3/prob-1.jpg',
      imageAlt: 'prob-1',
      imageHint: 'facebook events error',
      caption: "Purchase events not tracking properly on Facebook Ads, leading to wasted ad spend and poor optimization."
    },
    solution: {
        image: 'https://placehold.co/900x450/1d283a/9ca3af?text=Solution',
        imageAlt: 'Diagram of the solution implemented with GTM and CAPI',
        imageHint: 'tracking solution',
        caption: "Implemented Meta Pixel and CAPI via GTM with server-side tracking for accurate event deduplication."
    },
    result: {
        image: 'https://placehold.co/900x450/1d283a/9ca3af?text=Result',
        imageAlt: 'Dashboard showing the results: 100% accuracy and 8.7/10 EMQ score',
        imageHint: 'analytics dashboard',
        caption: "Achieved near-perfect purchase tracking and an 8.7/10 Event Match Quality score."
    }
  },
  {
    title: 'GA4 + Google Ads Tracking on WordPress',
    description: "A WordPress-based business had zero conversion tracking in Google Analytics 4 and Google Ads, making it impossible to measure campaign effectiveness. I implemented a robust tracking setup using Google Tag Manager to correctly map GA4 events and Google Ads conversions, resulting in an average of 18 accurately tracked conversions per week.",
    tags: ["WordPress", "GA4", "Google Ads", "GTM", "Conversion Tracking"],
    problem: {
      image: 'https://placehold.co/900x450/1d283a/9ca3af?text=Problem',
      imageAlt: 'Illustration of no conversion tracking',
      imageHint: 'empty chart',
      caption: "No conversion data in GA4 and Google Ads, making campaign ROI impossible to measure."
    },
    solution: {
      image: 'https://placehold.co/900x450/1d283a/9ca3af?text=Solution',
      imageAlt: 'GTM setup for GA4 and Google Ads',
      imageHint: 'gtm workspace',
      caption: "Implemented a complete tracking solution using GTM to send conversion data to GA4 and Google Ads."
    },
    result: {
      image: 'https://placehold.co/900x450/1d283a/9ca3af?text=Result',
      imageAlt: 'GA4 and Google Ads Tracking Report showing weekly conversions',
      imageHint: 'analytics report',
      caption: "Successfully tracking an average of 18 conversions per week, enabling effective campaign optimization."
    }
  }
];
