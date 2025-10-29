import { useState } from "react";
import { LanguageSelector, Language } from "@/components/LanguageSelector";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Opportunities } from "@/components/Opportunities";
import { HowItWorks } from "@/components/HowItWorks";
import { CTASection } from "@/components/CTASection";
import { translations } from "@/translations";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-[hsl(25_85%_65%)] bg-clip-text text-transparent">
            HomeCareer
          </h1>
          <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <Hero language={language} />
        <Categories language={language} />
        <Opportunities language={language} />
        <HowItWorks language={language} />
        <CTASection language={language} />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 HomeCareer. {translations[language].footer.tagline}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
