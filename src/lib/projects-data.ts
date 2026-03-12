
import { Facebook, BarChart, Settings, GitBranch, ShoppingCart, TrendingUp } from 'lucide-react';

export type ProjectDetail = {
  image: string;
  imageAlt: string;
  imageHint: string;
  caption: string;
  details?: { text: string; color: 'red' | 'blue' | 'green' }[];
  fullViewLink?: string;
};

export type ProjectTag = {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export type Project = {
  title: string;
  description: string;
  keyResults: string[];
  tags: ProjectTag[];
  problem: ProjectDetail;
  solution: ProjectDetail;
  result: ProjectDetail;
};

export const projects: Project[] = [
  {
    title: 'Shopify Purchase Tracking Fix',
    description: "A client's Shopify store was failing to track purchase events accurately in Facebook Ads, leading to unreliable performance data. By implementing Meta Pixel and the Conversion API (CAPI) through Google Tag Manager with proper event deduplication, we achieved near-perfect purchase tracking accuracy.",
    keyResults: [
      "100% Purchase Tracking Accuracy",
      "EMQ Score Boosted to 8.7/10",
      "Zero Data Loss Post-Implementation",
    ],
    tags: [
        { name: "Shopify", icon: ShoppingCart },
        { name: "Facebook CAPI", icon: Facebook },
        { name: "GTM", icon: Settings },
        { name: "Deduplication", icon: GitBranch },
    ],
    problem: {
      image: 'https://i.ibb.co/HTHLrdV3/prob-1.jpg',
      imageAlt: 'Facebook Ads showing poor purchase tracking data',
      imageHint: 'facebook events error',
      caption: "Inaccurate purchase event tracking led to unreliable ad performance data and wasted spend.",
      fullViewLink: "https://drive.google.com/file/d/1gKENWsP9R03H8OPy-nmPW3l1Vib4drwI/view?usp=sharing"
    },
    solution: {
        image: 'https://i.ibb.co/RmkpK9G/sol1.jpg',
        imageAlt: 'Google Tag Manager workspace with server-side tracking setup',
        imageHint: 'tracking solution',
        caption: "Implemented a robust server-side GTM container with Meta Pixel & CAPI for precise event deduplication.",
        fullViewLink: 'https://drive.google.com/file/d/1x-JG5fUv9xvGKDBU9B0rGJknXu73a1Md/view?usp=sharing'
    },
    result: {
        image: 'https://i.ibb.co/1Yykhn02/result1.jpg',
        imageAlt: 'Facebook Events Manager showing an 8.7/10 Event Match Quality score',
        imageHint: 'analytics dashboard',
        caption: "Achieved near-perfect purchase tracking accuracy and an 8.7/10 Event Match Quality score.",
        fullViewLink: 'https://drive.google.com/file/d/1V1E9CflMVT7dBY75CvtjeLqyAArSWDnX/view?usp=sharing'
    },
  },
  {
    title: 'GA4 & Google Ads on WordPress',
    description: "A WordPress-based business had zero conversion tracking in Google Analytics 4 and Google Ads, making it impossible to measure campaign effectiveness. I implemented a robust tracking setup using Google Tag Manager to correctly map GA4 events and Google Ads conversions.",
    keyResults: [
      "Avg. 18+ Weekly Conversions Tracked",
      "Full GA4 & Google Ads Integration",
      "Enabled Data-Driven Optimization"
    ],
    tags: [
        { name: "WordPress", icon: GitBranch },
        { name: "GA4", icon: BarChart },
        { name: "Google Ads", icon: TrendingUp },
        { name: "GTM", icon: Settings },
    ],
    problem: {
      image: 'https://i.ibb.co/8DhXzRMj/prob-2-ss.jpg',
      imageAlt: 'Empty Google Analytics 4 dashboard with problem labels',
      imageHint: 'empty chart error',
      caption: "Without conversion data, the client was flying blind, unable to determine campaign ROI or optimize ad spend."
    },
    solution: {
      image: 'https://i.ibb.co/q38TBYsL/sol2.jpg',
      imageAlt: 'Google Tag Manager workspace showing GA4 and Google Ads tags',
      imageHint: 'gtm workspace',
      caption: "A comprehensive GTM setup was created to capture user interactions and send them as conversions to GA4 & Google Ads."
    },
    result: {
      image: 'https://i.ibb.co/0jqRTnsN/result2.jpg',
      imageAlt: 'Google Ads dashboard showing 18 conversions in a week',
      imageHint: 'analytics report',
      caption: "Successfully tracking an average of 18 conversions per week, enabling data-driven campaign optimization."
    },
  }
];
