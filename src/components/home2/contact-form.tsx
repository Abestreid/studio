import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Упростите и систематизируйте работу с закупками с помощью нашего сервиса
              </h2>
              <p className="mt-4 text-muted-foreground">
                Получите доступ ко всем возможностям нашего сервиса и начните выигрывать выгодные тендеры быстрее конкурентов.
              </p>
            </div>
            <Card className="shadow-lg">
              <CardContent className="p-6 space-y-4">
                <form>
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="message">Ваше сообщение</Label>
                    <Textarea id="message" placeholder="Задайте ваш вопрос..." />
                  </div>
                  <Button type="submit" className="w-full mt-6">Отправить заявку</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
