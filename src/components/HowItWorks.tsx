import { UserPlus, Search, Send, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { translations, Language } from "@/translations";

interface HowItWorksProps {
  language: Language;
}

export const HowItWorks = ({ language }: HowItWorksProps) => {
  const t = translations[language].howItWorks;

  const steps = [
    {
      icon: UserPlus,
      title: t.steps.register.title,
      description: t.steps.register.description,
      step: 1,
    },
    {
      icon: Search,
      title: t.steps.browse.title,
      description: t.steps.browse.description,
      step: 2,
    },
    {
      icon: Send,
      title: t.steps.apply.title,
      description: t.steps.apply.description,
      step: 3,
    },
    {
      icon: TrendingUp,
      title: t.steps.earn.title,
      description: t.steps.earn.description,
      step: 4,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <Card key={step.step} className="text-center border-2 hover:border-primary transition-colors duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-[hsl(25_85%_65%)] flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-[0_0_40px_hsl(174_62%_47%/0.2)]">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
