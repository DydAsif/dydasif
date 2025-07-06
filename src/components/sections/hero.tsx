import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center">
      <div className="container px-4 md:px-6 relative z-10 text-center space-y-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm Ashfakur — I Make Your Ads Track Better.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Digital Marketing Strategist | Tracking Expert | GA4 & Meta Certified
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#services">View My Services</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
