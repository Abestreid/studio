import { Button } from '@/components/ui/button';

interface CtaProps {
  title: string;
  description?: string;
  buttonText: string;
  secondaryButtonText?: string;
}

export function Cta({ title, description, buttonText, secondaryButtonText }: CtaProps) {
  return (
    <section className="bg-gradient-to-r from-accent to-green-400 text-accent-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        {description && (
          <p className="mt-4 max-w-2xl mx-auto text-white/90">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-accent hover:bg-gray-100">
            {buttonText}
          </Button>
          {secondaryButtonText && (
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
