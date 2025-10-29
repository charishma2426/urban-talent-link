import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-women.jpg";
import { translations, Language } from "@/translations";

interface HeroProps {
  language: Language;
}

export const Hero = ({ language }: HeroProps) => {
  const t = translations[language].hero;

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero">
              {t.cta}
            </Button>
            <Button size="lg" variant="outline">
              {t.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
