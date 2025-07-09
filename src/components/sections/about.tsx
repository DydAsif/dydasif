import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2 md:items-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="https://i.ibb.co/yBMzR8nS/upscalemedia-transformed.png"
              alt="Ashfakur Rahman Asif photo"
              width={500}
              height={500}
              className="relative rounded-lg object-cover w-full h-auto shadow-lg"
              data-ai-hint="professional man"
            />
          </div>
          <div className="space-y-4">
             <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">About Me</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              I’m a freelance digital marketing & tracking expert helping businesses optimize ads across Facebook, Google, Shopify, and more.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed">
              With a deep understanding of analytics and conversion tracking, I build data-driven strategies that deliver measurable results and maximize your return on investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
