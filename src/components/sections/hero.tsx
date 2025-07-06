import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10 space-y-6 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h1 className="text-4xl font-headline font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm Ashfakur — I Make Your Ads Track Better.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Digital Marketing Strategist | Tracking Expert | GA4 & Meta Certified
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center sm:flex-row md:justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#services">View My Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-80 w-80 animate-float md:h-96 md:w-96">
            <Image
              src="https://i.ibb.co/b4Gj4cD/upscalemedia-transformed.png"
              alt="Ashfakur Rahman Asif"
              fill
              className="rounded-full object-cover shadow-2xl"
              data-ai-hint="portrait professional"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
