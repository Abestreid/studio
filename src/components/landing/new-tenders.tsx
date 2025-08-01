
'use client';

import { TenderCard } from '../tender-card';
import { content } from '@/lib/content';
import { useState, useEffect } from 'react';
import { fetchTenders, Tender } from '@/lib/tenders';
import { Skeleton } from '../ui/skeleton';

export function NewTenders() {
    const [theme, setTheme] = useState('tendersoft');
    const [tenders, setTenders] = useState<Tender[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleThemeChange = () => {
          const currentTheme = localStorage.getItem('theme') || 'tendersoft';
          setTheme(currentTheme);
        };
        handleThemeChange();
        window.addEventListener('storage', handleThemeChange);

        const loadTenders = async () => {
            setLoading(true);
            const fetchedTenders = await fetchTenders();
            setTenders(fetchedTenders);
            setLoading(false);
        };
        loadTenders();

        return () => window.removeEventListener('storage', handleThemeChange);
    }, []);

    const TenderSkeleton = () => (
        <div className="p-4 rounded-xl shadow-sm bg-white border border-gray-200">
            <Skeleton className="h-5 bg-gray-200 rounded w-3/4 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-xs sm:text-sm mb-3">
                <Skeleton className="h-4 bg-gray-200 rounded w-1/2" />
                <Skeleton className="h-4 bg-gray-200 rounded w-2/3" />
                <Skeleton className="h-4 bg-gray-200 rounded w-1/3" />
                <Skeleton className="h-4 bg-gray-200 rounded w-3/4" />
                <Skeleton className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
             <div className="flex flex-wrap gap-2 items-center mt-auto pt-3 border-t border-dashed -mx-4 px-4">
                <Skeleton className="h-5 w-20 bg-gray-200 rounded-full" />
                <Skeleton className="h-5 w-24 bg-gray-200 rounded-full" />
            </div>
        </div>
    );

  return (
    <section id="realtime">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">
          {theme === 'tendersoft' ? 'Новые тендеры в реальном времени' : 'Свежие закупки'}
        </h2>
        <div className="mt-8 max-w-4xl mx-auto space-y-4">
            {loading ? (
                <>
                    <TenderSkeleton />
                    <TenderSkeleton />
                </>
            ) : (
                tenders.map((tender) => (
                    <TenderCard key={tender.id} {...tender} />
                ))
            )}
        </div>
      </div>
    </section>
  );
}
