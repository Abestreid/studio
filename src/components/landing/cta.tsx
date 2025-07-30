
'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface CtaProps {
  title: string;
  description?: string;
  buttonText: string;
  secondaryButtonText?: string;
  className?: string;
}

export function Cta({ title, description, buttonText, secondaryButtonText, className }: CtaProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    }
    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  if (isLoggedIn) {
    return null;
  }

  return (
    <section className={cn("bg-accent", className)}>
      <div className="container mx-auto px-4 md:px-6 py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
        {description && (
          <p className="mt-4 max-w-2xl mx-auto text-white/90 text-base sm:text-lg">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button size="lg" className="bg-white text-accent hover:bg-gray-100">
            {buttonText}
          </Button>
          {secondaryButtonText && (
            <Button size="lg" variant="secondary" className="bg-accent-dark hover:bg-accent-dark/90 text-accent-foreground">
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
