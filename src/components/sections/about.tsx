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
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">About Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get to know the expert behind the results.
            </p>
          </div>
        </div>
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-3 lg:items-center">
          
          <Card 
            className="bg-card/80 border-border/50 shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 rounded-lg"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Who I Am</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                I’m a freelance digital marketing and tracking expert dedicated to helping businesses optimize their ad performance across platforms like Facebook, Google, and Shopify.
              </p>
              <p>
                My deep understanding of analytics and conversion tracking allows me to build data-driven strategies that deliver measurable results and maximize your return on investment.
              </p>
            </CardContent>
          </Card>

          <div 
            className="relative group order-first lg:order-none"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="https://i.ibb.co/prPGCmSS/cv.png"
              alt="Ashfakur Rahman Asif photo"
              width={500}
              height={500}
              className="relative rounded-lg object-cover w-full h-auto shadow-2xl"
              data-ai-hint="professional man"
            />
          </div>

          <Card 
            className="bg-card/80 border-border/50 shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 rounded-lg"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Key Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="grid grid-cols-1 gap-4">
                  {keySkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 bg-secondary/50 p-3 rounded-md">
                      {skill.icon}
                      <span className="font-medium text-primary-foreground">{skill.text}</span>
                    </div>
                  ))}
                </div>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
}
