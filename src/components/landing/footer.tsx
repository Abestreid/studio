
import Link from 'next/link';
import { Logo } from '@/components/icons';

const quickLinks = [
  { href: '#', label: 'Тендеры' },
  { href: '#', label: 'Аналитика' },
  { href: '#', label: 'Тарифы' },
  { href: '#', label: 'Помощь' },
];

const contacts = [
  'ул. Богенбай батыра, 80/141, Алматы, Казахстан',
  '+7 (727) 312-31-00',
  'info@tendersoft.kz'
]


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">Tendersoft</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-sm">
                Tendersoft — это сервис для поиска и аналитики тендеров в Беларуси. Мы помогаем находить выгодные закупки, анализировать конкурентов и побеждать в торгах.
            </p>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider">Быстрые ссылки</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-accent-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider">Контакты</h3>
            <ul className="mt-4 space-y-2">
              {contacts.map(contact => (
                <li key={contact} className="text-sm text-primary-foreground/70">
                  {contact}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Tendersoft. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
