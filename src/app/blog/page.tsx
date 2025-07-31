
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, User, Search, Rss } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { blogPostsList, blogTags } from '@/lib/content';

const blogPosts = blogPostsList;
const tags = blogTags;


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
          
          <div className="my-8 max-w-lg mx-auto flex flex-wrap justify-center gap-2">
            {tags.map(tag => <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-accent/20">{tag}</Badge>)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group rounded-2xl">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-52 w-full">
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
                    <div className="flex gap-2 mb-2">
                        {post.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                    </div>
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

           <Card className="mt-16 max-w-3xl mx-auto text-center p-8 bg-card shadow-lg">
                <Rss className="w-10 h-10 mx-auto text-accent mb-4"/>
                <h3 className="text-2xl font-bold text-primary">Подпишитесь на нашу рассылку</h3>
                <p className="text-muted-foreground mt-2 mb-6">Получайте свежие статьи и лучшие советы по тендерам раз в неделю прямо на почту.</p>
                <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                    <Input type="email" placeholder="Ваш E-mail" className="flex-grow"/>
                    <Button type="submit">Подписаться</Button>
                </form>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
