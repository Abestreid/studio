
'use client';
import { Search, Bell, BarChart, Users } from 'lucide-react';
import { content } from '@/lib/content';
import { useState, useEffect } from 'react';

export function HowItWorks() {
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

    const howItWorksData = content[theme as keyof typeof content].howItWorks;

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">
          {howItWorksData.title}
        </h2>
        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorksData.items.map((benefit: any) => (
            <div key={benefit.title} className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 border">
                <div className="mx-auto bg-accent/10 text-accent rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
