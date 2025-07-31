
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Cta } from '@/components/landing/cta';
import { blogPostsData } from '@/lib/content';

const blogPosts = blogPostsData;

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
