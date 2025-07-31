
'use client';

import { Card } from '@/components/ui/card';
import { MagnifyingGlass, Browsers, Bell, ChartBar, Users, Funnel } from '@phosphor-icons/react/dist/ssr';
import { content } from '@/lib/content';
import { useState, useEffect } from 'react';

export function SystemFeatures() {
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

    const featuresData = content[theme as keyof typeof content].systemFeatures;

  return (
    <section>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">
          {featuresData.title}
        </h2>
        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.items.map((feature: any) => (
            <Card key={feature.title} className="p-6 flex flex-col items-start gap-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-xl border bg-white hover:border-accent">
                <div className="rounded-full p-3 w-14 h-14 flex items-center justify-center bg-accent/10 text-accent text-3xl mb-2">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="text-xl font-bold mb-2">{feature.title}</h5>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
