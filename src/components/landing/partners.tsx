
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const belarusianPlatforms = [
  {
    name: 'Goszakupki.by',
    logo: 'https://goszakupki.by/img/logo_ru.png',
    description: 'Официальная электронная торговая площадка для государственных закупок в Республике Беларусь.',
    href: 'https://goszakupki.by'
  },
  {
    name: 'ICETRADE.BY',
    logo: 'https://icetrade.by/img/logo.png',
    description: 'Информационный ресурс, предоставляющий сведения о тендерах и закупках в Беларуси.',
    href: 'https://icetrade.by'
  },
  {
    name: 'BUTB.BY',
    logo: 'https://www.butb.by/local/templates/butb/img/logo_s1.svg',
    description: 'Белорусская универсальная товарная биржа, площадка для электронных торгов.',
    href: 'https://www.butb.by'
  },
];


export function Partners() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">
         🇧🇾 Площадки Беларуси
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {belarusianPlatforms.map((platform) => (
            <Card key={platform.name} className="flex flex-col text-center p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex-grow flex items-center justify-center p-4">
                     <Image 
                        src={platform.logo} 
                        alt={`${platform.name} logo`}
                        width={150}
                        height={60}
                        className="object-contain"
                    />
                </div>
                <p className="text-muted-foreground text-sm mt-4 flex-grow">{platform.description}</p>
                <div className="mt-6">
                    <Button asChild variant="outline">
                        <Link href={platform.href} target="_blank" rel="noopener noreferrer">
                            Перейти на сайт <ArrowUpRight className="ml-2 w-4 h-4"/>
                        </Link>
                    </Button>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
