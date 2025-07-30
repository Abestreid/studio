
import Image from 'next/image';

const partners = [
  { name: 'Make Work', logo: 'https://placehold.co/150x50.png', hint: 'company logo' },
  { name: 'Partner 2', logo: 'https://placehold.co/150x50.png', hint: 'company logo' },
  { name: 'Partner 3', logo: 'https://placehold.co/150x50.png', hint: 'company logo' },
  { name: 'ETS', logo: 'https://placehold.co/150x50.png', hint: 'company logo' },
];

export function Partners() {
  return (
    <section className="bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-primary">
          Источники данных и партнёрские площадки
        </h2>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              width={150}
              height={50}
              className="grayscale hover:grayscale-0 transition-all"
              data-ai-hint={partner.hint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
