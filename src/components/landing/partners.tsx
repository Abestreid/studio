
import Image from 'next/image';

const sources = [
  { name: 'Goszakupki.by', logo: '/images/goszakupki-logo.png' },
  { name: 'ICETRADE.BY', logo: '/images/icetrade-logo.png' },
  { name: 'BUTB.BY', logo: '/images/butb-logo.svg' },
  { name: 'zakup.sk.kz', logo: 'https://tendersoft.kz/content/images/Zakup-sk.svg' },
  { name: 'goszakup.gov.kz', logo: 'https://tendersoft.kz/content/images/goszakup.svg' },
  { name: 'mitwork.kz', logo: '/images/mitwork-logo.svg' },
  { name: 'nadloc.kz', logo: '/images/nadloc-logo.svg' },
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
