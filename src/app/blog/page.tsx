
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    slug: 'how-to-win-tenders',
    title: '5 ключевых стратегий для победы в государственных тендерах',
    author: 'Анна Кузнецова',
    date: '15 мая 2025',
    excerpt: 'Участие в тендерах может быть сложным, но с правильной стратегией ваши шансы на успех значительно возрастают. В этой статье мы рассмотрим...',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    aiHint: 'business strategy meeting',
  },
  {
    slug: 'common-mistakes-in-tenders',
    title: 'Топ-10 ошибок при подаче заявок на тендер и как их избежать',
    author: 'Иван Петров',
    date: '10 мая 2025',
    excerpt: 'Даже опытные участники иногда допускают досадные ошибки, которые стоят им контракта. Разберем самые частые из них, чтобы вы могли...',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80',
    aiHint: 'person writing mistakes',
  },
  {
    slug: 'analytics-for-success',
    title: 'Как аналитика помогает предсказывать победителей и повышать свои шансы',
    author: 'Елена Смирнова',
    date: '5 мая 2025',
    excerpt: 'Данные — это ваше главное преимущество. Узнайте, как использовать аналитические инструменты для оценки конкурентов и выбора...',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    aiHint: 'analytics dashboard chart',
  },
  {
    slug: 'understanding-documentation',
    title: 'Читаем тендерную документацию между строк: на что обращать внимание?',
    author: 'Максим Ковалёв',
    date: '1 мая 2025',
    excerpt: 'Дьявол кроется в деталях. Правильное понимание всех требований и условий в документации — залог успешной заявки. Мы научим вас...',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    aiHint: 'person reading documents',
  },
];


export default function BlogPage() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary">Наш Блог</h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Советы, аналитика и полезная информация из мира тендеров, которые помогут вам выигрывать чаще.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group rounded-2xl">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-60 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={post.aiHint}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{post.title}</h2>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground my-3">
                      <div className="flex items-center gap-1.5"><User className="w-4 h-4"/><span>{post.author}</span></div>
                      <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4"/><span>{post.date}</span></div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-accent font-semibold group-hover:underline">
                      Читать далее <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
