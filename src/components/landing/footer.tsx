
'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const productLinks = [
  { href: '/analytics', label: 'Аналитика' },
  { href: '/pricing', label: 'Тарифы' },
  { href: '/api', label: 'API' },
];

const companyLinks = [
  { href: '#about', label: 'О нас' },
  { href: '/blog', label: 'Блог' },
  { href: '/help', label: 'Вопросы и ответы' },
  { href: '#contact', label: 'Контакты' },
];

const contacts = [
    { icon: <MapPin className="w-4 h-4" />, text: 'ул. Богенбай батыра, 86/47, Алматы, Казахстан' },
    { icon: <Phone className="w-4 h-4" />, text: '+7 (778) 003-01-99', href: 'tel:+77780030199' },
    { icon: <Mail className="w-4 h-4" />, text: 'office@tendersoft.kz', href: 'mailto:office@tendersoft.kz' },
]


export function Footer() {
  const [theme, setTheme] = useState('tendersoft');

  useEffect(() => {
    const handleStorageChange = () => {
      const currentTheme = localStorage.getItem('theme') || 'tendersoft';
      setTheme(currentTheme);
    };

    handleStorageChange();
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const logoSrc = (theme === 'rednet' || theme === 'rednet2') 
        ? '/images/logo-rednet.svg' 
        : 'https://tendersoft.kz/logonavbar.svg';

  return (
    <footer className="text-white bg-primary">
      <div className="container mx-auto px-4 md:px-6 py-12 sm:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4 text-left">
             <Link href="/" className="flex items-center justify-start gap-2 text-decoration-none mb-4">
                <Image src={logoSrc} alt="Tendersoft Logo" width={40} height={40} />
                <span className="text-xl font-bold text-white">Tendersoft</span>
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-sm mx-auto lg:mx-0">
                IT-решения для поиска и мониторинга тендеров, защиты финансовых рисков и проверки контрагентов в Казахстане и Беларуси.
            </p>
          </div>
          <div className="md:col-span-1 lg:col-span-2"></div>
          <div className="lg:col-span-2 text-left">
            <h5 className="font-semibold tracking-wider text-white mb-4">Продукт</h5>
            <ul className="mt-4 space-y-2 list-none p-0">
              <li>
                  <Link href="/" className="flex items-center justify-start text-sm text-white/80 hover:text-white transition-colors group">
                    <ChevronRight className="w-4 h-4 mr-2 text-accent transition-transform group-hover:translate-x-1" />
                    Поиск тендеров
                  </Link>
              </li>
              {productLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="flex items-center justify-start text-sm text-white/80 hover:text-white transition-colors group">
                    <ChevronRight className="w-4 h-4 mr-2 text-accent transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
           <div className="lg:col-span-2 text-left">
            <h5 className="font-semibold tracking-wider text-white mb-4">Компания</h5>
            <ul className="mt-4 space-y-2 list-none p-0">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="flex items-center justify-start text-sm text-white/80 hover:text-white transition-colors group">
                    <ChevronRight className="w-4 h-4 mr-2 text-accent transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 text-left">
            <h5 className="font-semibold tracking-wider text-white mb-4">Контакты</h5>
            <ul className="mt-4 space-y-3 list-none p-0">
              {contacts.map(contact => (
                <li key={contact.text} className="flex items-start justify-start text-sm text-white/80 gap-3">
                  <span className="mt-0.5 text-accent">{contact.icon}</span>
                  {contact.href ? <a href={contact.href} className="hover:text-white transition-colors">{contact.text}</a> : <span>{contact.text}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Tendersoft.kz. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
