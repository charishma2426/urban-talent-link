import { ChefHat, Home, GraduationCap, Baby, Palette, Scissors } from "lucide-react";
import { CategoryCard } from "./CategoryCard";
import { translations, Language } from "@/translations";

interface CategoriesProps {
  language: Language;
}

export const Categories = ({ language }: CategoriesProps) => {
  const t = translations[language].categories;

  const categories = [
    { icon: ChefHat, title: t.items.cooking },
    { icon: Home, title: t.items.cleaning },
    { icon: GraduationCap, title: t.items.tutoring },
    { icon: Baby, title: t.items.childcare },
    { icon: Palette, title: t.items.crafts },
    { icon: Scissors, title: t.items.tailoring },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};
