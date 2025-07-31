
'use client';
import { Database, Clock, Users, Building } from 'lucide-react';
import { content } from '@/lib/content';
import { useState, useEffect } from 'react';

export function Growth() {
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

    const statsData = content[theme as keyof typeof content].growth;

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">
          {statsData.title}
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4">
          {statsData.items.map((stat: any) => (
            <div key={stat.label} className="text-center p-4 sm:p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
               <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                 {stat.icon}
               </div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">{stat.value}</p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
