import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
}

export const CategoryCard = ({ icon: Icon, title }: CategoryCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-[0_4px_20px_hsl(12_76%_61%/0.15)] transition-all duration-300 hover:-translate-y-1">
      <CardContent className="flex flex-col items-center justify-center p-6 text-center min-h-[160px]">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-[hsl(25_85%_65%)] flex items-center justify-center mb-4 group-hover:shadow-[0_0_40px_hsl(174_62%_47%/0.2)] transition-all duration-300">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </CardContent>
    </Card>
  );
};
