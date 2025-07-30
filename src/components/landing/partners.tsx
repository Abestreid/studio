
import Image from 'next/image';

const sources = [
  { name: 'Goszakupki.by', logo: 'https://goszakupki.by/img/logo_ru.png' },
  { name: 'ICETRADE.BY', logo: 'https://icetrade.by/img/logo.png' },
  { name: 'BUTB.BY', logo: 'https://www.butb.by/local/templates/butb/img/logo_s1.svg' },
  { name: 'zakup.sk.kz', logo: 'https://tendersoft.kz/content/images/Zakup-sk.svg' },
  { name: 'goszakup.gov.kz', logo: 'https://tendersoft.kz/content/images/goszakup.svg' },
  { name: 'mitwork.kz', logo: 'https://tendersoft.kz/content/images/mitwork.svg' },
  { name: 'nadloc.kz', logo: 'https://tendersoft.kz/content/images/nadloc.svg' },
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
