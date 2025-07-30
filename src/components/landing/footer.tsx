import Link from 'next/link';
import { Logo } from '@/components/icons';

const quickLinks = [
  { href: '#about', label: 'О нас' },
  { href: '#faq', label: 'Вопросы' },
  { href: '#contact', label: 'Связаться с нами' },
  { href: '#pricing', label: 'Тарифы' },
];

const contacts = [
    { icon: <i className="ph ph-map-pin mr-2"></i>, text: 'ул. Богенбай батыра, 86/47, Алматы, Казахстан' },
    { icon: <i className="ph ph-phone mr-2"></i>, text: '+7 (778) 003-01-99', href: 'tel:+77780030199' },
    { icon: <i className="ph ph-envelope mr-2"></i>, text: 'office@tendersoft.kz', href: 'mailto:office@tendersoft.kz' },
]


export function Footer() {
  return (
    <footer className="text-white bg-gradient-to-br from-[#1A2634] to-[#2C3E50]">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="text-center md:text-left">
             <Logo className="h-16 w-16 mx-auto md:mx-0 mb-3" />
            <p className="mt-4 text-sm text-white/80 max-w-sm">
                Tendersoft.kz — IT-решения для поиска и мониторинга тендеров, защиты финансовых рисков и проверки контрагентов в Казахстане и Беларуси.
            </p>
          </div>
          <div className="text-center">
            <h5 className="font-semibold tracking-wider text-white mb-3">Быстрые ссылки</h5>
            <ul className="mt-4 space-y-2 list-none p-0">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="flex items-center justify-center md:justify-start text-sm text-white/90 hover:text-accent transition-colors group">
                    <i className="ph ph-caret-right mr-2 text-accent transition-transform group-hover:translate-x-1"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h5 className="font-semibold tracking-wider text-white mb-3">Контакты</h5>
            <ul className="mt-4 space-y-3 list-none p-0">
              {contacts.map(contact => (
                <li key={contact.text} className="flex items-start justify-center md:justify-start text-sm text-white/90">
                  <span className="mt-1">{contact.icon}</span>
                  {contact.href ? <a href={contact.href} className="hover:text-accent transition-colors">{contact.text}</a> : <span>{contact.text}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Tendersoft.kz. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
