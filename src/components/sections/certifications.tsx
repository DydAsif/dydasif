import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, BookOpenCheck } from 'lucide-react';

const certifications = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    issuer: 'Ministry of Education, Government of Bangladesh',
    title: 'Certification: Computer Office Application',
    program: 'Board: Bangladesh Technical Education Board (BTEB)',
    skills: 'Covered: Word, Excel, PowerPoint, Typing',
    hasCertificate: true,
    link: '#',
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    issuer: 'E-Learning and Earning Ltd.',
    title: 'Certification: Freelancing Training Program',
    program: 'Authorized by: Department of Youth Development',
    skills: 'Covered: Freelancing strategy, marketplace setup, career planning',
    hasCertificate: true,
    link: '#',
  },
  {
    icon: <BookOpenCheck className="h-10 w-10 text-primary" />,
    issuer: 'ICT Division, Government of Bangladesh',
    title: 'Digital Marketing Training (Curriculum-Based)',
    program: 'Program: Learning and Earning Development Project (LEDP)',
    skills: 'Skills: Facebook Ads, SEO, Freelancing Essentials',
    hasCertificate: false,
    note: 'Skillset aligned with national LEDP training modules.',
    link: null,
  },
  {
    icon: <BookOpenCheck className="h-10 w-10 text-primary" />,
    issuer: 'BASIS Institute of Technology & Management (BITM)',
    title: 'Digital Marketing Essentials (Program Inspired)',
    program: 'Program: SEIP by Govt. of Bangladesh',
    skills: 'Skills: Google Ads, YouTube Marketing, SMM',
    hasCertificate: false,
    note: 'Skills covered reflect the BITM SEIP training program structure.',
    link: null,
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
              Verified credentials and curriculum-based expertise in digital marketing and computer technology.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-stretch gap-8 sm:max-w-4xl sm:grid-cols-1 md:grid-cols-2 lg:max-w-5xl mt-12">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card border border-border shadow-lg hover:shadow-primary/20 hover:scale-105 hover:border-primary transition-all duration-300 rounded-lg flex flex-col">
              <CardHeader className="flex flex-row items-start gap-4 p-6">
                {cert.icon}
                <div className="flex flex-col text-left">
                    <CardTitle className="text-lg font-bold">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1 font-semibold">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mt-1">{cert.program}</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow text-left">
                 <p className="text-muted-foreground">{cert.skills}</p>
                 {cert.note && (
                   <p className="text-xs text-muted-foreground/80 mt-4 italic">{cert.note}</p>
                 )}
              </CardContent>
              {cert.hasCertificate && cert.link && (
                <CardFooter>
                   <Button asChild className="bg-[#00ccff] text-white rounded px-4 py-1 hover:bg-blue-600 transition">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
