
import Image from 'next/image';

const partners = [
  { name: 'Goszakupki.by', logo: '/logos/logo_header_min.png', hint: 'company logo' },
  { name: 'ICETRADE.BY', logo: '/logos/logo.svg', hint: 'company logo' },
  { name: 'BUT.BY', logo: '/logos/logo_s1.svg', hint: 'company logo' },
  { name: 'Goszakup.gov.kz', logo: '/logos/logo.png', hint: 'company logo' },
  { name: 'Zakup.sk.kz', logo: '/logos/logo2.png', hint: 'company logo' },
  { name: 'ETS.kz', logo: '/logos/logo_ru.png', hint: 'company logo' },
  { name: 'EEP.mitwork.kz', logo: '/logos/logo-ru.gif', hint: 'company logo' },
];

export function Partners() {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">
          Источники данных и партнёрские площадки
        </h2>
        <div className="sources-container mt-12">
            <div className="sources-track">
                {duplicatedPartners.map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="source-item">
                    <img
                        src={partner.logo}
                        alt={partner.name}
                        className="source-logo"
                        data-ai-hint={partner.hint}
                    />
                </div>
                ))}
            </div>
        </div>
        <div className="text-center mt-8">
            <span className="text-muted-foreground text-sm">* Мы используем только официальные и проверенные источники данных для вашей уверенности и прозрачности.</span>
        </div>
      </div>
    </section>
  );
}
