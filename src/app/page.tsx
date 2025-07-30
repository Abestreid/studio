
'use client'

import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Benefits } from '@/components/landing/benefits';
import { Cta } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';
import { Partners } from '@/components/landing/partners';
import { NewTenders } from '@/components/landing/new-tenders';
import { Growth } from '@/components/landing/growth';
import { SystemFeatures } from '@/components/landing/system-features';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <NewTenders />
        <HowItWorks />
        <Features />
        <Growth />
        <Partners />
        {!isLoggedIn && (
          <>
            <Cta
              title="Начните выигрывать тендеры уже сегодня"
              description="Первый доступ — бесплатно, без карты и обязательств."
              buttonText="Попробовать бесплатно"
              secondaryButtonText="Связаться с менеджером"
            />
            <Benefits />
            <SystemFeatures />
            <Cta
              title="Начните получать тендеры первыми"
              buttonText="Попробовать бесплатно"
              className="bg-primary"
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
