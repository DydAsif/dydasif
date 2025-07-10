import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, BarChart2, Target, Settings } from 'lucide-react';

const keySkills = [
  { icon: <BarChart2 className="h-5 w-5 text-primary" />, text: 'Facebook & Google Analytics' },
  { icon: <Target className="h-5 w-5 text-primary" />, text: 'Conversion API (CAPI)' },
  { icon: <Settings className="h-5 w-5 text-primary" />, text: 'Google Tag Manager (GTM)' },
  { icon: <CheckCircle className="h-5 w-5 text-primary" />, text: 'Event Deduplication & EMQ' },
];

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 about-bg">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 md:gap-16 md:grid-cols-5 md:items-center">
          
          <div 
            className="relative group col-span-2"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="https://i.ibb.co/yBMzR8nS/upscalemedia-transformed.png"
              alt="Ashfakur Rahman Asif photo"
              width={500}
              height={500}
              className="relative rounded-lg object-cover w-full h-auto shadow-2xl"
              data-ai-hint="professional man"
            />
          </div>

          <div 
            className="col-span-3 space-y-6"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <Card className="bg-card/80 border-border/50 shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
              <CardHeader>
                <CardTitle className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">About Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground md:text-xl/relaxed">
                <p>
                  I’m a freelance digital marketing & tracking expert helping businesses optimize ads across Facebook, Google, Shopify, and more.
                </p>
                <p>
                  With a deep understanding of analytics and conversion tracking, I build data-driven strategies that deliver measurable results and maximize your return on investment.
                </p>
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-primary-foreground mb-4">Key Skills</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {keySkills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-3">
                        {skill.icon}
                        <span className="font-medium">{skill.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </div>
    </section>
  );
}
