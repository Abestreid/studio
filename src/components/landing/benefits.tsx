
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Bot, Filter, DatabaseZap, UserPlus, SlidersHorizontal, Bell } from 'lucide-react';
import { Button } from '../ui/button';
import { content } from '@/lib/content';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Benefits() {
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

    const benefitsData = content[theme as keyof typeof content].benefits.main;
    const stepsData = content[theme as keyof typeof content].benefits.steps;

    return (
        <>
        <section className="bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6">
            <div>
                <h2 className="section-title">
                    {content[theme as keyof typeof content].benefits.title}
                </h2>
                <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
                {benefitsData.map((benefit: any) => (
                    <Card key={benefit.title} className="text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 sm:p-8 rounded-xl">
                        <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit mb-4">
                        {benefit.icon}
                        </div>
                        <h5 className="font-bold text-lg mb-2">{benefit.title}</h5>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </Card>
                ))}
                </div>
            </div>
            </div>
        </section>
        <section className="bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="section-title">
                    {stepsData.title}
                </h2>
                <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
                    {stepsData.items.map((step: any, index: number) => (
                    <Card key={step.title} className="text-center bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 sm:p-8 rounded-xl border-accent/20 hover:border-accent">
                        <div className="relative mx-auto bg-accent/10 rounded-full p-4 w-fit mb-6">
                            <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm border-2 border-white">
                                {index + 1}
                            </div>
                            {step.icon}
                        </div>
                        <h6 className="font-semibold text-xl mb-2">{step.title}</h6>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                    </Card>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button size="lg" asChild><Link href="/register">{stepsData.buttonText}</Link></Button>
                </div>
            </div>
        </section>
        </>
    );
}
