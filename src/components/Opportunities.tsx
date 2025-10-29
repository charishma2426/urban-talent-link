import { OpportunityCard } from "./OpportunityCard";
import { translations, Language } from "@/translations";

interface OpportunitiesProps {
  language: Language;
}

export const Opportunities = ({ language }: OpportunitiesProps) => {
  const t = translations[language].opportunities;

  const opportunities = [
    {
      title: "Home Cook for Family",
      company: "HomeMade Delights",
      location: "Work from Home",
      type: "Part-time",
      salary: "$15-20/hour",
      category: "Cooking",
    },
    {
      title: "Online Tutor - Elementary",
      company: "EduConnect",
      location: "Remote",
      type: "Flexible",
      salary: "$12-18/hour",
      category: "Teaching",
    },
    {
      title: "Handmade Crafts Seller",
      company: "Artisan Marketplace",
      location: "Online",
      type: "Freelance",
      salary: "Commission Based",
      category: "Crafts",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {opportunities.map((opportunity, index) => (
            <OpportunityCard key={index} {...opportunity} />
          ))}
        </div>
      </div>
    </section>
  );
};
