import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, BarChartBig, Facebook, Linkedin } from 'lucide-react';

const certifications = [
  {
    icon: <Facebook className="h-10 w-10 text-primary" />,
    title: 'Meta Certified Digital Marketing Associate',
    issuer: 'Issued by Meta',
    link: '#',
  },
  {
    icon: <BarChartBig className="h-10 w-10 text-primary" />,
    title: 'Google Analytics 4 Certification',
    issuer: 'Issued by Google',
    link: '#',
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'HubSpot Inbound Marketing Certified',
    issuer: 'Issued by HubSpot Academy',
    link: '#',
  },
  {
    icon: <Linkedin className="h-10 w-10 text-primary" />,
    title: 'LinkedIn Marketing Solutions Fundamentals',
    issuer: 'Issued by LinkedIn',
    link: '#',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">My Certifications</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Verified credentials that prove my skills in digital marketing & tracking.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-stretch gap-8 sm:max-w-4xl sm:grid-cols-1 md:grid-cols-2 lg:max-w-5xl lg:grid-cols-2 mt-12">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card border border-border shadow-lg hover:shadow-primary/20 hover:scale-105 hover:border-primary transition-all duration-300 rounded-lg flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                {cert.icon}
                <div className="flex flex-col text-left">
                    <CardTitle className="text-lg font-bold">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                 {/* This space is reserved for potential future content like a short description. */}
              </CardContent>
              <CardFooter>
                 <Button asChild className="bg-[#00ccff] text-white rounded px-4 py-1 hover:bg-blue-600 transition">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
