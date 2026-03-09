import { Facebook, BarChart, Settings, GitBranch, ShoppingCart, TrendingUp } from 'lucide-react';

export type ProjectDetail = {
  image: string;
  imageAlt: string;
  imageHint: string;
  caption: string;
};

export type ProjectTag = {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    color: string;
};

export type Project = {
  title: string;
  description: string;
  tags: ProjectTag[];
  problem: ProjectDetail;
  solution: ProjectDetail;
  result: ProjectDetail;
  caseStudyUrl: string;
};

export const projects: Project[] = [
  {
    title: 'Shopify Purchase Tracking Fix',
    description: "A client's Shopify store was failing to track purchase events accurately in Facebook Ads, leading to unreliable performance data. By implementing Meta Pixel and the Conversion API (CAPI) through Google Tag Manager with proper event deduplication, we achieved 100% purchase tracking accuracy and boosted the Event Match Quality (EMQ) score to 8.7/10.",
    tags: [
        { name: "Shopify", icon: ShoppingCart, color: "var(--tag-color-3)" },
        { name: "Facebook CAPI", icon: Facebook, color: "var(--tag-color-5)" },
        { name: "GTM", icon: Settings, color: "var(--tag-color-1)" },
        { name: "Deduplication", icon: GitBranch, color: "var(--tag-color-2)" },
    ],
    problem: {
      image: 'https://i.ibb.co/HTHLrdV3/prob-1.jpg',
      imageAlt: 'Facebook Ads showing poor purchase tracking data',
      imageHint: 'facebook events error',
      caption: "Inaccurate purchase event tracking led to unreliable ad performance data and wasted spend."
    },
    solution: {
        image: 'https://i.ibb.co/RmkpK9G/sol1.jpg',
        imageAlt: 'Google Tag Manager workspace with server-side tracking setup',
        imageHint: 'tracking solution',
        caption: "Implemented a robust server-side GTM container with Meta Pixel & CAPI for precise event deduplication."
    },
    result: {
        image: 'https://i.ibb.co/1Yykhn02/result1.jpg',
        imageAlt: 'Facebook Events Manager showing an 8.7/10 Event Match Quality score',
        imageHint: 'analytics dashboard',
        caption: "Achieved near-perfect purchase tracking accuracy and an 8.7/10 Event Match Quality score."
    },
    caseStudyUrl: "#",
  },
  {
    title: 'GA4 & Google Ads on WordPress',
    description: "A WordPress-based business had zero conversion tracking in Google Analytics 4 and Google Ads, making it impossible to measure campaign effectiveness. I implemented a robust tracking setup using Google Tag Manager to correctly map GA4 events and Google Ads conversions, resulting in an average of 18 accurately tracked conversions per week.",
    tags: [
        { name: "WordPress", icon: GitBranch, color: "var(--tag-color-5)" },
        { name: "GA4", icon: BarChart, color: "var(--tag-color-4)" },
        { name: "Google Ads", icon: TrendingUp, color: "var(--tag-color-1)" },
        { name: "GTM", icon: Settings, color: "var(--tag-color-2)" },
    ],
    problem: {
      image: 'https://i.ibb.co/8DhXzRMj/prob-2-ss.jpg',
      imageAlt: 'Empty Google Analytics 4 dashboard',
      imageHint: 'empty chart',
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
    caseStudyUrl: "#",
  },
   {
    title: 'E-commerce Funnel Optimization',
    description: "An online retailer experienced a significant drop-off rate during their checkout process. By setting up a complete e-commerce funnel in GA4, we identified the exact leakage points and implemented UI/UX improvements, which increased the overall conversion rate by 22% and boosted Average Order Value (AOV).",
    tags: [
        { name: "E-commerce", icon: ShoppingCart, color: "var(--tag-color-3)" },
        { name: "GA4", icon: BarChart, color: "var(--tag-color-4)" },
        { name: "Funnel Analysis", icon: GitBranch, color: "var(--tag-color-1)" },
        { name: "CRO", icon: TrendingUp, color: "var(--tag-color-2)" },
    ],
    problem: {
      image: 'https://i.ibb.co/3m4wL2z/prob3.jpg',
      imageAlt: 'Analytics showing high checkout abandonment rate',
      imageHint: 'chart dropoff',
      caption: "A high cart abandonment rate was severely impacting the store's revenue and profitability."
    },
    solution: {
      image: 'https://i.ibb.co/dGtL7Gg/sol3.jpg',
      imageAlt: 'GA4 funnel exploration report highlighting drop-off points',
      imageHint: 'analytics funnel',
      caption: "Created a detailed GA4 funnel report to visualize the user journey and pinpoint UX friction points."
    },
    result: {
      image: 'https://i.ibb.co/N1WfPjH/result3.jpg',
      imageAlt: 'Dashboard showing a 22% increase in conversion rate',
      imageHint: 'chart increase',
      caption: "A 22% uplift in conversion rate and higher AOV after implementing data-backed UI/UX changes."
    },
    caseStudyUrl: "#",
  }
];
