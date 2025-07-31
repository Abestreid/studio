
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Cta } from '@/components/landing/cta';

// Mock data - in a real app, this would come from a CMS or database
const blogPosts = {
  'how-to-win-tenders': {
    slug: 'how-to-win-tenders',
    title: '5 ключевых стратегий для победы в госзакупках',
    author: 'Анна Кузнецова',
    date: '15 мая 2025',
    tags: ['#госзакупки', '#тендерная_стратегия'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
    aiHint: 'business strategy meeting',
    content: `
      <p>Участие в тендерах может быть сложным, но с правильной стратегией ваши шансы на успех значительно возрастают. В этой статье мы рассмотрим пять ключевых аспектов, на которые стоит обратить внимание каждому участнику.</p>
      
      <h3 class="text-xl font-bold text-primary mt-6 mb-3">1. Тщательный анализ документации</h3>
      <p>Первый и самый важный шаг – это доскональное изучение всей тендерной документации. Обращайте внимание не только на техническое задание, но и на квалификационные требования, сроки и условия контракта. Любая мелочь может стать причиной отклонения вашей заявки.</p>

      <h3 class="text-xl font-bold text-primary mt-6 mb-3">2. Обоснованное ценообразование</h3>
      <p>Ваша цена должна быть конкурентоспособной, но при этом реалистичной. Не стоит демпинговать, если вы не уверены, что сможете выполнить контракт без потерь в качестве. Проанализируйте цены предыдущих аналогичных закупок и предложения конкурентов, если это возможно.</p>

      <h3 class="text-xl font-bold text-primary mt-6 mb-3">3. Подготовка идеальной заявки</h3>
      <p>Заявка – это ваше лицо. Она должна быть оформлена безупречно, без ошибок и опечаток. Все документы должны быть предоставлены в требуемом формате и полном объеме. Используйте наши шаблоны и чек-листы, чтобы ничего не упустить.</p>

      <blockquote class="border-l-4 border-accent pl-4 py-2 my-6 text-muted-foreground italic">
        "Победа в тендере — это не удача, а результат скрупулезной подготовки и глубокого анализа."
      </blockquote>

      <h3 class="text-xl font-bold text-primary mt-6 mb-3">4. Демонстрация опыта и квалификации</h3>
      <p>Подтвердите свой опыт аналогичными выполненными контрактами. Приложите рекомендательные письма, сертификаты и лицензии. Чем убедительнее вы докажете свою компетентность, тем выше будут ваши шансы.</p>

      <h3 class="text-xl font-bold text-primary mt-6 mb-3">5. Использование аналитических инструментов</h3>
      <p>Современные платформы, такие как Tendersoft, предоставляют мощные аналитические инструменты. Анализируйте заказчиков, отслеживайте активность конкурентов и выявляйте закономерности. Эти данные помогут вам принимать взвешенные решения и выбирать наиболее перспективные закупки.</p>
    `
  },
   'common-mistakes-in-tenders': {
    slug: 'common-mistakes-in-tenders',
    title: 'Топ-10 ошибок при подаче заявок на тендер',
    author: 'Иван Петров',
    date: '10 мая 2025',
    tags: ['#оптимизация_затрат'],
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80',
    aiHint: 'person writing mistakes',
    content: `<p>Даже опытные участники иногда допускают досадные ошибки, которые стоят им контракта. Разберем самые частые из них, чтобы вы могли учиться на чужом опыте.</p>`
  },
  'analytics-for-success': {
    slug: 'analytics-for-success',
    title: 'Как аналитика помогает повышать свои шансы',
    author: 'Елена Смирнова',
    date: '5 мая 2025',
    tags: ['#аналитика'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    aiHint: 'analytics dashboard chart',
    content: `<p>Данные — это ваше главное преимущество. Узнайте, как использовать аналитические инструменты для оценки конкурентов и выбора наиболее перспективных закупок.</p>`
  },
  'understanding-documentation': {
    slug: 'understanding-documentation',
    title: 'Читаем тендерную документацию между строк',
    author: 'Максим Ковалёв',
    date: '1 мая 2025',
    tags: ['#госзакупки'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    aiHint: 'person reading documents',
    content: `<p>Дьявол кроется в деталях. Правильное понимание всех требований и условий в документации — залог успешной заявки. Мы научим вас видеть то, что скрыто от глаз большинства.</p>`
  },
};

type PostKeys = keyof typeof blogPosts;

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as PostKeys];

  if (!post) {
    // In a real app, you'd render a 404 page
    return (
        <div className="bg-background text-foreground flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow py-12 sm:py-16 bg-secondary/30 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary">Статья не найдена</h1>
                    <p className="text-muted-foreground mt-4">Возможно, вы перешли по неверной ссылке.</p>
                    <Button asChild className="mt-6">
                        <Link href="/blog">Вернуться в блог</Link>
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    )
  }

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Назад ко всем статьям
              </Link>
            </Button>
            
            <article>
              <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4">{post.title}</h1>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2"><User className="w-4 h-4"/><span>{post.author}</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4"/><span>{post.date}</span></div>
              </div>

              <div className="relative h-80 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={post.aiHint}
                />
              </div>

              <div
                className="prose prose-lg max-w-none text-foreground/90"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

          </div>
        </div>
      </main>
      <Cta
        title="Готовы применять знания на практике?"
        description="Начните поиск релевантных тендеров прямо сейчас и увеличьте свои шансы на победу."
        buttonText="Найти тендеры"
      />
      <Footer />
    </div>
  );
}
