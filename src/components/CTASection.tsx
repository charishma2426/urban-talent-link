import { Button } from "@/components/ui/button";
import { translations, Language } from "@/translations";

interface CTASectionProps {
  language: Language;
}

export const CTASection = ({ language }: CTASectionProps) => {
  const t = translations[language].cta;

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-[hsl(25_85%_65%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            {t.subtitle}
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-background text-foreground hover:bg-background/90 border-2 hover:scale-105 transition-transform duration-300"
          >
            {t.button}
          </Button>
        </div>
      </div>
    </section>
  );
};
