
import { Button } from '@/components/ui/button';

interface CtaProps {
  title: string;
  description?: string;
  buttonText: string;
  secondaryButtonText?: string;
}

export function Cta({ title, description, buttonText, secondaryButtonText }: CtaProps) {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && (
          <p className="mt-4 max-w-2xl mx-auto text-accent-foreground/90">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
            {buttonText}
          </Button>
          {secondaryButtonText && (
            <Button size="lg" variant="outline" className="text-accent-foreground border-accent-foreground/50 hover:bg-accent-foreground/10 hover:text-accent-foreground">
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
