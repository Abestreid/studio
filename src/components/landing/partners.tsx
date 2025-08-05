
import Image from 'next/image';

const sources = [
  { name: 'goszakupki.by', logo: '/images/goszakupki.webp' },
  { name: 'icetrade.by', logo: '/images/icetrade.webp' },
  { name: 'butb.by', logo: '/images/butb.webp' },
  { name: 'a-100development.by', logo: '/images/a-100development.webp' },
  { name: 'becloud.by', logo: '/images/becloud.webp' },
  { name: 'vitoperator.by', logo: '/images/vitoperator.webp' },
  { name: 'zakupki.minsktrans.by', logo: '/images/zakupki-minsktrans.webp' },
  { name: 'polymir.by', logo: '/images/polymir.webp' },
  { name: 'mgcn.by', logo: '/images/mgcn.webp' },
  { name: 'naftan.by', logo: '/images/naftan.webp' }
];

// Duplicate sources for a seamless loop
const extendedSources = [...sources, ...sources];

export function Partners() {
  return (
    <section className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Источники данных</h2>
        <div className="sources-container mt-12">
            <div className="sources-track">
                {extendedSources.map((source, index) => (
                    <div key={index} className="source-item" title={source.name}>
                        <Image
                            src={source.logo}
                            alt={source.name}
                            width={140}
                            height={40}
                            className="source-logo"
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

