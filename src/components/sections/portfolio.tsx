import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, BarChart3, Bot } from 'lucide-react';

const portfolioItems = [
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: '3x ROAS with Meta + CAPI',
    description: "Optimized a D2C brand's Meta campaigns by implementing server-side tracking (CAPI), resulting in a 3x Return on Ad Spend and a 40% reduction in CPA.",
    tag: 'Campaign Result',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-accent" />,
    title: 'Full GA4 eCommerce Setup',
    description: 'Executed a complete GA4 migration and enhanced eCommerce setup for a high-traffic Shopify store, enabling granular analysis of the user journey.',
    tag: 'Shopify Store',
  },
  {
    icon: <Bot className="h-8 w-8 text-accent" />,
    title: 'B2B Lead Funnel Automation',
    description: 'Built an automated lead generation and nurturing funnel for a B2B SaaS client, integrating CRM with webhooks, which increased qualified leads by 150%.',
    tag: 'Funnel Automation',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Featured Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are a few examples of how I've helped businesses achieve their marketing goals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-stretch gap-8 sm:max-w-4xl sm:grid-cols-1 md:grid-cols-2 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="bg-card border border-border shadow-lg hover:shadow-primary/20 hover:scale-105 hover:border-primary transition-all duration-300 rounded-lg flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {item.icon}
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Badge variant="secondary">{item.tag}</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
