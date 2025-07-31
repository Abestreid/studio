
'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { content } from '@/lib/content';
import { useState, useEffect } from 'react';

export function Features() {
  const [theme, setTheme] = useState('tendersoft');

  useEffect(() => {
    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem('theme') || 'tendersoft';
      setTheme(currentTheme);
    };
    handleThemeChange();
    window.addEventListener('storage', handleThemeChange);
    return () => window.removeEventListener('storage', handleThemeChange);
  }, []);
  
  const featuresData = content[theme as keyof typeof content].features;


  return (
    <section>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">{featuresData.title}</h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full mt-12"
        >
          <CarouselContent>
            {featuresData.items.map((feature: any, index: number) => (
              <CarouselItem key={index}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
                  <div className="md:w-1/2 lg:w-5/12">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={500}
                      height={350}
                      className="rounded-xl shadow-lg object-cover w-full h-auto"
                      data-ai-hint={feature.hint}
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                    <ul className="space-y-4 list-none p-0">
                      {feature.list.map((item: string, itemIndex: number) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-base sm:text-lg"
                        >
                          <Check className="w-6 h-6 text-accent mr-3 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
