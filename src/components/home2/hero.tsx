import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-accent py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight sm:text-4xl md:text-5xl">
            Автоматизируйте поиск тендеров и закупок в Казахстане с «СофтБисервис»
          </h1>
          <p className="mt-6 text-lg text-white/80 md:text-xl max-w-3xl mx-auto">
            ТОО «СофтБисервис» предлагает удобный сервис для автоматического поиска закупок Казахстана, а также анализа и участия в торгах. Наша система ежедневно собирает информацию с 100+ закупочных платформ, включая портал госзакупок РК, площадку «Самрук-Казына», реестр NADLoC. Подключите нашу систему и забудьте о ручном поиске – мгновенно узнавайте о новых тендерах.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-gray-100">
              Бесплатная консультация
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Начать поиск тендеров
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
