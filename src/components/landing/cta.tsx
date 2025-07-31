
'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { content } from '@/lib/content';

interface CtaProps {
  variant?: 'main' | 'secondary' | 'final';
  className?: string;
}

export function Cta({ variant = 'main', className }: CtaProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState('tendersoft');

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
      const currentTheme = localStorage.getItem('theme') || 'tendersoft';
      setTheme(currentTheme);
    }
    handleStorageChange();
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const ctaContent = content[theme as keyof typeof content].cta[variant as keyof typeof content.tendersoft.cta];

  if (isLoggedIn) {
    return null;
  }

  return (
    <section className={cn("bg-accent", className)}>
      <div className="container mx-auto px-4 md:px-6 py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">{ctaContent.title}</h2>
        {ctaContent.description && (
          <p className="mt-4 max-w-2xl mx-auto text-white/90 text-base sm:text-lg">
            {ctaContent.description}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button size="lg" className="bg-white text-accent hover:bg-gray-100" asChild>
            <Link href="/register">{ctaContent.buttonText}</Link>
          </Button>
          {ctaContent.secondaryButtonText && (
            <Button size="lg" variant="secondary" className="bg-accent-dark hover:bg-accent-dark/90 text-accent-foreground">
              {ctaContent.secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
