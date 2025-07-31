
'use client';

import { TenderCard } from '../tender-card';
import { content, newTendersData } from '@/lib/content';
import { useState, useEffect } from 'react';

const tenders = newTendersData;

export function NewTenders() {
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

  return (
    <section id="realtime">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">
          {theme === 'tendersoft' ? 'Новые тендеры в реальном времени' : 'Свежие закупки'}
        </h2>
        <div className="mt-8 max-w-4xl mx-auto space-y-4">
            {tenders.map((tender, index) => (
                <TenderCard key={index} {...tender} id={tender.id || `${index}`} />
            ))}
        </div>
      </div>
    </section>
  );
}
